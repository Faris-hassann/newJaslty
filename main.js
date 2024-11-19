// Initialize Swiper for Popular Container
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: false, // Disable centered slides to make it more predictable
    slidesPerView: 4, // Show only 3 slides at a time
    loop: true, // Enable loop to cycle through the slides
    autoplay: {
        delay: 10000, // 10 seconds delay between slides
        disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // Add responsive breakpoints for smaller screens
        768: {
            slidesPerView: 4, // Show 2 slides on smaller screens
        },
        480: {
            slidesPerView: 2, // Show 1 slide on mobile screens
        }
    }
});


// Swiper for Speciality Section
const swiper = new Swiper('.mySwiperSpeciality', {
    slidesPerView: 10, // Adjust the number of slides visible at once
    spaceBetween: 10, // Reduce or remove space between slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 8,
            spaceBetween: 10,
        },
    },
});
