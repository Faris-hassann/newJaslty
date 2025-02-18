// Initialize Swiper for Popular Container
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 16,
    slidesPerView: 'auto', // Automatically adjust the slide width
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
        // For larger screens
        1023: {
            slidesPerView: 'auto', // Auto width on larger screens
            spaceBetween: 32, // Space between slides on larger screens
        },
        // For medium screens (800px)
        800: {
            slidesPerView: 'auto', // Auto width for smaller screens
            spaceBetween: 32, // No space between the single centered slide
            centeredSlides: true, // Ensure that the single slide is centered
        },
        // For tablets (768px)
        790: {
            slidesPerView: 3, // Auto width for tablets
            spaceBetween: 10,  // Space between the slides
            centeredSlides: true, // Center the single slide
        },
        // For mobile (500px)
        500: {
            slidesPerView: 2, // Auto width on mobile
            spaceBetween: 10, // Add space between slides on mobile
            centeredSlides: true, // Center the slide on mobile
        },
        499: {
            slidesPerView: 2, // Auto width on mobile
            spaceBetween: 10, // Add space between slides on mobile
            centeredSlides: true,  // Center the slide on mobile
        }
    }
});

// Swiper for Speciality Section
const swiper = new Swiper('.mySwiperSpeciality', {
    slidesPerView: 12, // Adjust the number of slides visible at once
    spaceBetween: 0, // Reduce or remove space between slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        300: {
            slidesPerView: 4,
            spaceBetween: 0,
            centeredSlides: true,  // Center the slide on mobile
        },
        450: {
            slidesPerView: 4,
            spaceBetween: 0,
            centeredSlides: true,  // Center the slide on mobile
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 0,
            centeredSlides: true,  // Center the slide on mobile
        },
        768: {
            slidesPerView: 7,
            spaceBetween: 0,
            centeredSlides: true,  // Center the slide on mobile
        },
        1024: {
            slidesPerView: 9,
            spaceBetween: 0,
        },
    },
});
