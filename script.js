const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');
const body = document.body;

// Event listener for switching between modes
lightIcon.addEventListener('click', () => {
    body.classList.add('light-mode'); // Switch to light mode
    lightIcon.style.display = 'none'; // Hide light mode icon
    darkIcon.style.display = 'inline-block'; // Show dark mode icon
});

darkIcon.addEventListener('click', () => {
    body.classList.remove('light-mode'); // Switch to dark mode
    darkIcon.style.display = 'none'; // Hide dark mode icon
    lightIcon.style.display = 'inline-block'; // Show light mode icon
});


// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector('.scroll');
    const footer = document.querySelector('#footer');
  
    // Hide the scroll button initially
    scrollBtn.style.display = 'none';
  
    // Show the button only when you're at the top of the page
    window.addEventListener('scroll', function () {
      if (window.scrollY === 0) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  
    // Scroll to the footer when the button is clicked
    scrollBtn.addEventListener('click', function (event) {
      event.preventDefault();
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navList = document.querySelector('.navlist');
  
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navList.classList.toggle('open');
    };
  
    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
        navList.classList.remove('open');
        menuIcon.classList.remove('bx-x');
      }
    });
  
    // Close the menu when a navigation link is clicked
    navList.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        navList.classList.remove('open');
        menuIcon.classList.remove('bx-x');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Select all sections you want to animate
    const sections = document.querySelectorAll("section");
  
    // Options for the observer (viewport margin and percentage of intersection)
    const options = {
      threshold: 0.1, // Trigger when 10% of the section is visible
    };
  
    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'show' class to the section
          entry.target.classList.add('show');
        }
      });
    };
  
    // Create an observer with the callback
    const observer = new IntersectionObserver(observerCallback, options);
  
    // Attach observer to each section
    sections.forEach(section => {
      section.classList.add('fade-in'); // Add the fade-in class initially
      observer.observe(section);
    });
  });
  

    
