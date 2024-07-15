document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list ul');
    const anchors = document.querySelectorAll('a[data-scroll]');
    const contactForm = document.getElementById('contact-form');
  
    // Smooth scrolling for anchor links
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'mooth',
            duration: 800, // adjust the duration to your liking
          });
        }
      });
    });
  
    // Handle contact form submission
    contactForm?.addEventListener('submit', function(e) {
      e.preventDefault();
      // Validate form inputs here if needed
      alert('Message sent!');
      // Optionally, reset the form after submission
      contactForm.reset();
  
      // Add a success animation to the form
      contactForm.classList.add('animate-success');
      setTimeout(() => {
        contactForm.classList.remove('animate-success');
      }, 2000); // remove the animation after 2 seconds
    });
  
    // Optional: Close nav menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navList.contains(e.target) &&!hamburger.contains(e.target)) {
        navList.classList.remove('open');
        hamburger.classList.remove('active'); // Optional: Remove the active class from hamburger
  
        // Add a closing animation to the nav menu
        navList.classList.add('animate-close');
        setTimeout(() => {
          navList.classList.remove('animate-close');
        }, 500); // remove the animation after 0.5 seconds
      }
    });
  
    // Add a toggle animation to the hamburger menu
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('open');
      hamburger.classList.toggle('active');
  
      if (navList.classList.contains('open')) {
        navList.classList.add('animate-open');
        setTimeout(() => {
          navList.classList.remove('animate-open');
        }, 500); // remove the animation after 0.5 seconds
      } else {
        navList.classList.add('animate-close');
        setTimeout(() => {
          navList.classList.remove('animate-close');
        }, 500); // remove the animation after 0.5 seconds
      }
    });
  });