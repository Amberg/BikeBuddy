<#
.SYNOPSIS
    Builds the Angular application, builds the Docker image, and pushes it to a registry.

.DESCRIPTION
    This script performs the following steps:
    1. Installs dependencies (optional)
    2. Builds the Angular application (npm run build)
    3. Builds the Docker image
    4. Tags the image with 'latest'
    5. Pushes the image to the specified registry

.PARAMETER Registry
    The registry URL (e.g., 'docker.io/username' or 'myregistry.com').
    Defaults to 'velo-app-registry' if not provided (you should change this).

.PARAMETER ImageName
    The name of the image. Defaults to 'velo-app'.

.EXAMPLE
    .\build_and_push.ps1 -Registry "docker.io/nicolas"
#>

param (
    [string]$Registry = "velo-app-registry",
    [string]$ImageName = "velo-app"
)

$ErrorActionPreference = "Stop"

Write-Host "Starting build process..." -ForegroundColor Cyan

# 1. Build Angular App
Write-Host "Building Angular application..." -ForegroundColor Yellow
try {
    npm run build
}
catch {
    Write-Error "Angular build failed."
    exit 1
}

# 2. Build Docker Image
$FullImageName = "$Registry/$ImageName"
Write-Host "Building Docker image: $FullImageName:latest" -ForegroundColor Yellow
try {
    docker build -t "$FullImageName`:latest" .
}
catch {
    Write-Error "Docker build failed."
    exit 1
}

# 3. Push Docker Image
Write-Host "Pushing image to registry..." -ForegroundColor Yellow
try {
    docker push "$FullImageName`:latest"
}
catch {
    Write-Error "Docker push failed. Make sure you are logged in to the registry (docker login)."
    exit 1
}

Write-Host "Successfully built and pushed $FullImageName`:latest" -ForegroundColor Green
