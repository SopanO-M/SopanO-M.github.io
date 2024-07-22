document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let slideIndex = 0;

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].querySelector(".text-overlay").style.opacity = 0; // Hide text overlays initially
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex - 1].querySelector(".text-overlay").style.opacity = 1; // Show text overlay with fade-in effect
        }, 100); // Add a slight delay to ensure the slide is displayed before the text appears
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

        // Add event listeners to buttons for redirection
        document.getElementById('simpleButton').addEventListener('click', function() {
            window.location.href = 'https://drive.google.com/file/d/13TVe6_PeAjjCftrf0_fteITsGTChHEqM/view?usp=drive_link';
        });
    
        document.getElementById('rightButton').addEventListener('click', function() {
            window.location.href = 'https://drive.google.com/file/d/13Qvw0DxFoyZql5bHZgHTAIc7rueoKN2_/view?usp=drive_link';
        });

        

    // Hide preloader after page load
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.display = 'none';
            showSlides(); // Start the slider animation after the preloader hides
        }, 1000); // Keep the preloader visible for at least 3 seconds
    });
});
