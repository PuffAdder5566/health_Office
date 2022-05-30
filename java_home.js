const slideshowImages = document.querySelectorAll(".intro .slideshow-img");
const container = document.querySelector(".more-stuff-grid");
const fromRight = document.querySelector(".from-right");
const fromLeft = document.querySelector(".from-left");

const nextImageDelay = 4000;
let currentImageCounter = 0;

//slideshowImages[currentImageCounter].style.display = "block";
//slideshowImages[currentImageCounter].style.opacity = 1;
slideshowImages[currentImageCounter].style.zIndex = -2;
setInterval(nextImage, nextImageDelay);

function nextImage(){
//  slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
//  slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages[currentImageCounter].style.zIndex = -1;
}
var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});
