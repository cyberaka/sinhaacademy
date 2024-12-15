docker stop sinhaacademy; docker rm sinhaacademy
docker buildx create --use
docker buildx build --platform linux/amd64,linux/arm64 -t cyberaka/sinhaacademy:20241215v1 . --push
read -p "Press enter to continue"
docker stop sinhaacademy; docker rm sinhaacademy; docker run -d -p 6060:2000 --name sinhaacademy cyberaka/sinhaacademy:20241215v1; docker logs --follow sinhaacademy
