document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Mock login credentials
    const mockUsername = 'Booster';
    const mockPassword = 'Sopan@2507';

    if (username === mockUsername && password === mockPassword) {
        document.getElementById('loginContainer').classList.remove('active');
        document.getElementById('homepageContent').classList.add('active');
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// Slider functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); 
}
