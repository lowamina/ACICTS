const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

nextBtn.onclick = () => {
     slides.forEach((slide) => {
          slide.classList.remove('active');
     });

     slideNumber++;

     if (slideNumber > (numberOfSlides - 1)) {
          slideNumber = 0;
     }
     slides[slideNumber].classList.add('active');
}

prevBtn.onclick = () => {
     slides.forEach((slide) => {
          slide.classList.remove('active');
     });

     slideNumber--;

     if (slideNumber < 0) {
          slideNumber = numberOfSlides - 1;
     }
     slides[slideNumber].classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
     const elements = document.querySelectorAll('.hidden');
   
     const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
         if (entry.isIntersecting) {
           entry.target.classList.add('visible');
           observer.unobserve(entry.target);
         }
       });
     }, { threshold: 0.1 });
   
     elements.forEach(element => {
       observer.observe(element);
     });
   });
   