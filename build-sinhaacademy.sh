#!/bin/bash

# Create and use the Buildx builder
docker buildx use sinhaacademy-builder || docker buildx create --name sinhaacademy-builder --use

# Build and push the image with multiple tags
docker buildx build --platform linux/amd64 -t cyberaka/sinhaacademy:20250104v1 . --push
