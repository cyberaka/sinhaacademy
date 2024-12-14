docker stop sinhaacademy; docker rm sinhaacademy
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t sinhaacademy . --push
read -p "Press enter to continue - Local Test"
docker run -p 2000:2000 --name sinhaacademy sinhaacademy
read -p "Press enter to continue - Push to Docker Hub"
docker tag sinhaacademy:latest cyberaka/sinhaacademy:20241214v1
docker push cyberaka/sinhaacademy:20241214v1
read -p "Press enter to continue - Local Server Test"
docker stop sinhaacademy; docker rm sinhaacademy; docker run -d -p 6060:2000 --name sinhaacademy cyberaka/sinhaacademy:20241214v1; docker logs --follow sinhaacademy
read -p "Press enter to continue - Server Test"
docker stop sinhaacademy; docker rm sinhaacademy; docker run -d -p 6060:2000 --name sinhaacademy cyberaka/sinhaacademy:20241214v1; docker logs --follow sinhaacademy
