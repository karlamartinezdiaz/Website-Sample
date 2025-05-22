var imagePaths = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
];
var currentIndex = 0;
var slideshowImage = document.getElementById("slideshow");
function showNextImage() {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    slideshowImage.src = imagePaths[currentIndex];
}
// Change image every 3 seconds
setInterval(showNextImage, 3000);
