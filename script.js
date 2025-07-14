document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll to sections (if anchor links used)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Newsletter form validation
  const newsletterForm = document.querySelector('#newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        emailInput.focus();
      }
    });
  }

  // Topic filter (if made interactive later)
  const topicButtons = document.querySelectorAll('.btn-topic');
  topicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`You clicked on: ${btn.textContent}`);
      // Future: load articles dynamically based on topic
    });
  });

  // "Join Now" button in "How It Works"
  const joinBtn = document.querySelector('#join-now');
  if (joinBtn) {
    joinBtn.addEventListener('click', () => {
      window.location.href = '/register'; // Or any relevant page
    });
  }

  // Scroll-based navbar effect (optional enhancement)
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

});
<script src="{{ asset('js/main.js') }}"></script>