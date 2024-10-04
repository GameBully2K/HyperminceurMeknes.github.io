const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
 
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content .socials", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__bar", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".services", {
  ...scrollRevealOption,
  origin: "top",
  delay: 400,
});

ScrollReveal().reveal(".product-container", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});

ScrollReveal().reveal(".form-container", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1200,
});

function toggleText() {
  var textContainer = document.getElementById('textContainer');
  var button = document.querySelector('.btn');
  if (textContainer.classList.contains('expanded')) {
      textContainer.classList.remove('expanded');
      button.textContent = "Discover More";
  } else {
      textContainer.classList.add('expanded');
      button.textContent = "See Less";
  }
}





const testimonials = document.querySelectorAll('.testimonial');
  const testimonialVideo = document.querySelector('.testimonial-video');
  
  // Ajouter la classe show pour afficher les éléments
  testimonials.forEach((testimonial) => {
    testimonial.classList.add('show');
  });
  
  testimonialVideo.classList.add('show');
  
  // Créer une fonction pour faire défiler les témoignages
  function slideTestimonials() {
    const currentTestimonial = document.querySelector('.testimonial .show');
    const nextTestimonial = currentTestimonial.nextElementSibling;
  
    if (nextTestimonial) {
      currentTestimonial.classList.remove('show');
      nextTestimonial.classList.add('show');
    } else {
      testimonials[0].classList.add('show');
    }
  }
  
  // Appeler la fonction pour faire défiler les témoignages
  setInterval(slideTestimonials, 5000);

  