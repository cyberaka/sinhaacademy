docker stop sinhaacademy; docker rm sinhaacademy
docker build --tag=sinhaacademy .
docker run -p 2000:2000 sinhaacademy
docker tag sinhaacademy:latest cyberaka/sinhaacademy:20241010v1
docker push cyberaka/sinhaacademy:20241010v1

docker run -d -p 6060:80 --name sinhaacademy cyberaka/sinhaacademy:20241010v1; docker logs --follow sinhaacademy
