setTimeout(() => {
    document.querySelector(".navbar").style.opacity = "1";
    document.body.style.overflow = "auto"; // boleh scroll lagi
}, 3000); // sama dengan durasi intro (3s)
// halaman pertama salak
// Munculkan Navbar setelah Intro
const intro = document.getElementById("intro");
intro.addEventListener("animationend", () => {
    document.querySelector(".navbar").style.opacity = "1";
    document.body.style.overflow = "auto";
});

// SLIDER GALERI
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // ganti gambar tiap 5 detik
}
