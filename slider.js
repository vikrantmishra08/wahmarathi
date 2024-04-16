let customSlideIndex = 1;
customShowSlides(customSlideIndex);

// Automatically change slides every 2 seconds
let customSlideInterval = setInterval(function () {
    customPlusSlides(1);
}, 4000);

function customPlusSlides(n) {
    clearInterval(customSlideInterval); // Clear the previous interval
    customSlideInterval = setInterval(function () {
        customPlusSlides(1);
    }, 5000); // Set new interval
    customShowSlides(customSlideIndex += n);
}

function customCurrentSlide(n) {
    clearInterval(customSlideInterval); // Clear the previous interval
    customSlideInterval = setInterval(function () {
        customPlusSlides(1);
    }, 5000); // Set new interval
    customShowSlides(customSlideIndex = n);
}

function customShowSlides(n) {
    let i;
    let slides = document.getElementsByClassName("customSlides");
    let dots = document.getElementsByClassName("custom-dot");
    if (n > slides.length) { customSlideIndex = 1 }
    if (n < 1) { customSlideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[customSlideIndex - 1].style.display = "block";
    dots[customSlideIndex - 1].className += " active";
}
