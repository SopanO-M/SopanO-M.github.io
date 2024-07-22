document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active"); // Hide all slides
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1; // Reset slide index to 1 when end reached
        }
        slides[slideIndex - 1].classList.add("active"); // Show current slide
        setTimeout(showSlides, 4000); // Change image every 3 seconds
    }

    document.getElementById('rightButton').addEventListener('click', function() {
        window.location.href = 'https://drive.google.com/file/d/13Qvw0DxFoyZql5bHZgHTAIc7rueoKN2_/view?usp=drive_link';
    });    

    showSlides(); // Initial call to start slideshow
});
