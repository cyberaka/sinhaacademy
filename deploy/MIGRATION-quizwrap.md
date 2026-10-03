# Sinha Academy: migration from the old VPS to quizwrap.com

Old box: `ajitkids.com` → 192.46.213.177 (Debian 11, to be shut down)
New box: `quizwrap.com` → 23.239.19.23 / 2600:3c02::2000:4bff:feed:951f

| What | Old | New |
|---|---|---|
| Site (Next.js 14) | `sinhaacademy`, 0.0.0.0:7070 → 2000 | `sinhaacademy-web`, 127.0.0.1:8520 → 2000 |
| Image | `cyberaka/sinhaacademy:20250324v1`, built by hand | `cyberaka/sinhaacademy:prod` + `:prod-<sha>`, built by CI |
| Compose | none (`docker run`) | `~/sinhaacademy/docker-compose.prod.yml`, project `sinhaacademy` |
| nginx | `/etc/nginx/conf.d/sinhaacademy.com.conf` | `/etc/nginx/sites-available/sinhaacademy.com` |
| Deploy | `build-sinhaacademy.sh` + `docker run` by hand | GitHub Actions on push (see below) |

Quizwrap rules: loopback-only ports, never `docker compose down`, never prune volumes/networks.

## How deploys work (after setup)

| Repo | Branch | Builds | Recreates |
|---|---|---|---|
| `cyberaka/sinhaacademy` | `main` | `cyberaka/sinhaacademy:prod` + `:prod-<sha>` | `web`, and copies `deploy/docker-compose.prod.yml` to `~/sinhaacademy` |

- A push to `main` that touches `src/`, `public/`, package/build config, the Dockerfile, the
  compose file or the workflow builds on GitHub, pushes to Docker Hub, then SSHes to
  quizwrap, pulls, recreates `web` and waits for it to report healthy (the job fails otherwise).
- Manual run / rollback: `gh workflow run deploy-production -R cyberaka/sinhaacademy [-f tag=prod-<sha>]`.
  With `tag` set, nothing is built; that tag is deployed.
- Lessons and mp3s are baked into the image, so content changes are code changes: push them.
- `build-sinhaacademy.sh` / `.cmd` and `bitbucket-pipelines.yml` are superseded and can be deleted.

## Status

- [x] Full backup in `~/Backups` (home, nginx, letsencrypt, docker volumes and images)
- [ ] 0. GitHub secrets
- [ ] 1. First deploy via GitHub Actions
- [ ] 2. Old box nginx → 127.0.0.1 (staged in `~/sinhaacademy-migration/` on the old box)
- [ ] 3. Certificate copied to quizwrap
- [ ] 4. nginx site + pre-cutover test
- [ ] 5. DNS switch (Linode)
- [ ] 6. certbot (adds www)
- [ ] 7. Verify traffic moved
- [ ] 8. Clean up

## 0. GitHub secrets (laptop, once)

GitHub secrets are per repository and can't be read back, so set the same values as on
`cyberaka/quiz_poc`. `SSH_PRIVATE_KEY` is the existing deployment key (its public half is
already in `~/.ssh/authorized_keys` for cyberaka on quizwrap). `DOCKER_PASSWORD` is a
Docker Hub access token. The site has no app secrets.

```sh
R=cyberaka/sinhaacademy
gh secret set DOCKER_USERNAME -R $R --body cyberaka
gh secret set SERVER_HOST     -R $R --body 23.239.19.23
gh secret set SERVER_USER     -R $R --body cyberaka
gh secret set DOCKER_PASSWORD -R $R                         # paste the token
gh secret set SSH_PRIVATE_KEY -R $R < <path to the deployment private key>
gh secret list -R $R
```

## 1. First deploy via GitHub Actions

Commit and push the CI files; the push triggers the workflow.

```sh
cd ~/Projects/Github/sinhaacademy/sinhaacademy
git add .github deploy Dockerfile .dockerignore next.config.js
git commit -m "Deploy to quizwrap.com via GitHub Actions" && git push
gh run watch -R cyberaka/sinhaacademy $(gh run list -R cyberaka/sinhaacademy -L1 --json databaseId -q '.[0].databaseId')
```

(`deploy/` contains no secrets. Never commit the cert bundle from `~/Backups`.)

Then the container should be `(healthy)` and serve the Home page:

```sh
ssh quizwrap.com 'docker ps --filter name=sinhaacademy-web --format "{{.Names}}\t{{.Status}}\t{{.Ports}}"'
ssh quizwrap.com 'curl -s 127.0.0.1:8520/ | grep -o "<title>[^<]*</title>"'                  # <title>Home</title>
ssh quizwrap.com 'curl -sI "127.0.0.1:8520/assets/mp3/swara/%E0%A4%86.mp3" | head -1'          # 200 (आ.mp3)
```

## 2. Old box: stop nginx proxying through DNS (required before step 5)

The old vhost does `proxy_pass http://sinhaacademy.com:7070`. After DNS moves, any nginx
reload on the old box would send stragglers to quizwrap:7070, which is **hp-healing-web**.
The old box's certbot.timer runs twice a day and reloads nginx when it renews anything,
so this reload will happen on its own. A patched copy is staged at
`~/sinhaacademy-migration/sinhaacademy.com.conf` (only change: `127.0.0.1:7070`).

```sh
ssh -t cyberaka@ajitkids.com
sudo cp /etc/nginx/conf.d/sinhaacademy.com.conf ~/sinhaacademy-migration/sinhaacademy.com.conf.orig
sudo cp ~/sinhaacademy-migration/sinhaacademy.com.conf /etc/nginx/conf.d/sinhaacademy.com.conf
sudo nginx -t && sudo systemctl reload nginx
exit
curl -s https://sinhaacademy.com/ | grep -o '<title>[^<]*</title>'    # still <title>Home</title>
```

## 3. Certificate (laptop, then sudo on quizwrap)

Pull just the sinhaacademy.com cert out of the 3.5 GB backup, keeping root ownership,
modes and the `live/` symlinks (bsdtar reads entries straight from the old archive):

```sh
cd ~/Backups
tar -czf sinhaacademy-le.tgz \
  --include='etc/letsencrypt/live/sinhaacademy.com*' \
  --include='etc/letsencrypt/archive/sinhaacademy.com*' \
  --include='etc/letsencrypt/renewal/sinhaacademy.com.conf' \
  @vps-backup-ajitkids-20261002.tar.gz
tar -tvzf sinhaacademy-le.tgz        # live/ symlinks -> ../../archive/..., owner root, privkey 600
scp sinhaacademy-le.tgz ~/Projects/Github/sinhaacademy/sinhaacademy/deploy/sinhaacademy.com.nginx \
  cyberaka@quizwrap.com:/tmp/
```

On quizwrap:

```sh
ssh -t cyberaka@quizwrap.com
sudo ls /etc/letsencrypt/live/sinhaacademy.com 2>/dev/null && echo "STOP: already exists"
sudo tar -xzpf /tmp/sinhaacademy-le.tgz --same-owner -C /
rm /tmp/sinhaacademy-le.tgz
sudo ls -l /etc/letsencrypt/live/sinhaacademy.com/
sudo openssl x509 -in /etc/letsencrypt/live/sinhaacademy.com/cert.pem -noout -subject -enddate
```

The renewal file names the old box's ACME account, which doesn't exist here. Point it at
quizwrap's account (the one all 13 existing renewal confs on quizwrap use):

```sh
sudo sed -i 's/^account = .*/account = f8e9928c7d17e2e6517e2d804fbf826d/' /etc/letsencrypt/renewal/sinhaacademy.com.conf
sudo grep ^account /etc/letsencrypt/renewal/sinhaacademy.com.conf
```

## 4. nginx site + pre-cutover test

Still on quizwrap. The vhost has hand-written TLS lines pointing at the copied cert, so
HTTPS works the moment DNS flips.

```sh
sudo cp /tmp/sinhaacademy.com.nginx /etc/nginx/sites-available/sinhaacademy.com
rm /tmp/sinhaacademy.com.nginx
sudo ln -s /etc/nginx/sites-available/sinhaacademy.com /etc/nginx/sites-enabled/sinhaacademy.com
sudo nginx -t && sudo systemctl reload nginx
exit
```

From the laptop:

```sh
curl -s  --resolve sinhaacademy.com:443:23.239.19.23 https://sinhaacademy.com/ | grep -o '<title>[^<]*</title>'
curl -sI --resolve sinhaacademy.com:443:23.239.19.23 "https://sinhaacademy.com/assets/mp3/swara/%E0%A4%86.mp3" | head -1
curl -sI --resolve sinhaacademy.com:80:23.239.19.23  http://sinhaacademy.com/ | head -3     # 301 to https
```

## 5. DNS switch (Linode)

Do step 2 first. In Linode → Domains → sinhaacademy.com, edit **four** records:

| Name | Type | Value |
|------|------|-------|
| (apex) | A    | 23.239.19.23 |
| www    | A    | 23.239.19.23 |
| (apex) | AAAA | 2600:3c02::2000:4bff:feed:951f |
| www    | AAAA | 2600:3c02::2000:4bff:feed:951f |

Leave the MX (Zoho) records alone. Check:

```sh
dig +short sinhaacademy.com A @ns1.linode.com; dig +short www.sinhaacademy.com AAAA @ns1.linode.com
```

## 6. certbot: add www (once DNS resolves to quizwrap)

```sh
ssh -t cyberaka@quizwrap.com
sudo certbot --nginx --cert-name sinhaacademy.com --expand -d sinhaacademy.com -d www.sinhaacademy.com
sudo nginx -t && sudo systemctl reload nginx
sudo certbot renew --dry-run --cert-name sinhaacademy.com
exit
echo | openssl s_client -connect www.sinhaacademy.com:443 -servername www.sinhaacademy.com 2>/dev/null \
  | openssl x509 -noout -subject -ext subjectAltName                                 # both names
```

## 7. Verify traffic moved

```sh
ssh quizwrap.com  'docker logs -f --since 10m sinhaacademy-web'
ssh ajitkids.com  'docker logs -f --since 10m sinhaacademy'
```

## 8. Clean up

Keep the old container running for a few days as rollback. Once the old box is idle:

```sh
ssh ajitkids.com 'docker stop sinhaacademy'    # keep container + image until the box is decommissioned
cd ~/Projects/Github/sinhaacademy/sinhaacademy
git rm bitbucket-pipelines.yml build-sinhaacademy.sh build-sinhaacademy.cmd    # optional, superseded by CI
```

## Rollback

- Bad deploy: `gh workflow run deploy-production -R cyberaka/sinhaacademy -f tag=prod-<previous sha>`.
- Bad cutover: point the four DNS records back to 192.46.213.177 / 2400:8904::f03c:93ff:fec1:7cfe.
  The old container and its cert (valid to 22 Dec 2026) are untouched.
