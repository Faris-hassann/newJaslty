// Initialize Swiper for Popular Container
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 10000, // 10 seconds delay between slides
        disableOnInteraction: false, // Keep autoplay running even after user interaction
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
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
