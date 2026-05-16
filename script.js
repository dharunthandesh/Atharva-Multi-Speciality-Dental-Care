document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileClose = document.getElementById('mobile-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
  
    function openMenu() {
      mobileMenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  
    function closeMenu() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  
    mobileToggle.addEventListener('click', openMenu);
    mobileClose.addEventListener('click', closeMenu);
    
    // Close menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  
    // 3. Scroll Reveal Animations (Aesthetic fade-ins)
    const revealElements = document.querySelectorAll('.reveal');
  
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, revealOptions);
  
    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  
    // Trigger reveals on load for elements already in viewport
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
  });
