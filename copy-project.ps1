# Create directories
$directories = @(
    "src/app/cart",
    "src/app/contact",
    "src/app/menu",
    "src/app/restaurant/[id]",
    "src/app/restaurants",
    "src/components",
    "src/store",
    "src/data",
    "src/lib"
)

foreach ($dir in $directories) {
    New-Item -ItemType Directory -Force -Path $dir
}

# Copy files to a new location
$targetDir = "C:\FoodDelivery"
Copy-Item -Path "*" -Destination $targetDir -Recurse -Force

Write-Host "Project has been copied to $targetDir"
Write-Host "To start the project:"
Write-Host "1. cd $targetDir"
Write-Host "2. npm install"
Write-Host "3. npm run dev"
