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

ScrollReveal().reveal(".header-container", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".registration-form-container", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".program-presentation", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".container", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".program-info", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".why-choose-us", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".reasons", {
  ...scrollRevealOption,
  delay: 3000,
});

ScrollReveal().reveal(".benefits", {
  ...scrollRevealOption,
  origin: "top",
  delay: 400,
});

ScrollReveal().reveal(".benefit-text", {
  ...scrollRevealOption,
  origin: "left",
  delay: 800,
});


ScrollReveal().reveal(".faq-question", {
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

emailjs.init("MqPLlLlRK-l_MaV0y");

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
   
  // Disable the button to prevent multiple submissions
  button.disabled = true;
 
 emailjs.sendForm('service_u66in2u', 'template_79i1sjg', form)
    .then(function(response) {
      console.log('Success:', response);
     alert('Votre message a été envoyé avec succès!');
      form.reset();  // Reset form only after successful submission
      button.disabled = false;   // Re-enable the button
    }, function(error) {
      console.error('Error:', error);
     alert('Une erreur est survenue, veuillez réessayer.');
      button.disabled = false;   //Re-enable the button in case of an error
  });
});




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

  