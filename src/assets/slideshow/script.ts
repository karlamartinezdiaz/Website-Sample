const imagePaths: string[] = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
];

let currentIndex: number = 0;
const slideshowImage = document.getElementById("slideshow") as HTMLImageElement;

function showNextImage(): void {
  currentIndex = (currentIndex + 1) % imagePaths.length;
  slideshowImage.src = imagePaths[currentIndex];
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);
