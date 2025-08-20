// ANIMATE ON SCROLL

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 600,
    once: true,
    offset: 120,
    easing: 'ease-in-out'
  });
});


// Navbar scroll hide on mobile


  document.addEventListener("DOMContentLoaded", function () {
    const logoCont = document.querySelector(".nav-logo-cont");
    let isHidden = false; // Track current state
    let debounceTimer;

    function handleScroll() {
      if (window.innerWidth <= 430) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          if (window.scrollY > 40 && !isHidden) {
            logoCont.classList.add("hidden");
            isHidden = true;
          } else if (window.scrollY <= 40 && isHidden) {
            logoCont.classList.remove("hidden");
            isHidden = false;
          }
        }, 50); // Debounce delay
      } else {
        logoCont.classList.remove("hidden");
        isHidden = false;
      }
    }

    // Initial check after layout settles
    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  });





// Projects background images hover effect

document.addEventListener('DOMContentLoaded', function() {
  const aImage = document.querySelector('.pro-a-images');
  const bImage = document.querySelector('.pro-b-images');
  const cImage = document.querySelector('.pro-c-images');
  
  const imagesa = [
    './images/portfolio_logo.png',
    './images/portfolio_1.png',
    './images/portfolio_2.png',
    './images/portfolio_3.png',
  ];
  const imagesb = [
    './images/crooks.logo.png',
    './images/crooks_1.png',
    './images/crooks_2.png',
    './images/crooks_3.png',
    './images/crooks_4.png',
    './images/crooks_5.png',
  ];
  const imagesc = [
    './images/planify_logo.jpg',
    './images/planify_1.png',
    './images/planify_2.png',
    './images/planify_3.png',
    './images/planify_4.png',
    './images/planify_5.png',
  ];
  
  let currenta = 0, currentb = 0, currentc = 0;
  let intervalIda = null, intervalIdb = null, intervalIdc = null;

  function startslideshowa() {
    if (intervalIda) return;
    intervalIda = setInterval(() => {
      currenta = (currenta + 1) % imagesa.length;
      aImage.style.backgroundImage = `url('${imagesa[currenta]}')`;
    }, 1000);
  }
  function startslideshowb() {
    if (intervalIdb) return;
    intervalIdb = setInterval(() => {
      currentb = (currentb + 1) % imagesb.length;
      bImage.style.backgroundImage = `url('${imagesb[currentb]}')`;
    }, 1000);
  }
  function startslideshowc() {
    if (intervalIdc) return;
    intervalIdc = setInterval(() => {
      currentc = (currentc + 1) % imagesc.length;
      cImage.style.backgroundImage = `url('${imagesc[currentc]}')`;
    }, 1000);
  }

  function stopSlideshowa() {
    clearInterval(intervalIda);
    intervalIda = null;
    currenta = 0;
    aImage.style.backgroundImage = `url('${imagesa[0]}')`;
  }
  function stopSlideshowb() {
    clearInterval(intervalIdb);
    intervalIdb = null;
    currentb = 0;
    bImage.style.backgroundImage = `url('${imagesb[0]}')`;
  }
  function stopSlideshowc() {
    clearInterval(intervalIdc);
    intervalIdc = null;
    currentc = 0;
    cImage.style.backgroundImage = `url('${imagesc[0]}')`;
  }

  aImage.addEventListener('mouseenter', startslideshowa);
  aImage.addEventListener('mouseleave', stopSlideshowa);

  bImage.addEventListener('mouseenter', startslideshowb);
  bImage.addEventListener('mouseleave', stopSlideshowb);

  cImage.addEventListener('mouseenter', startslideshowc);
  cImage.addEventListener('mouseleave', stopSlideshowc);
});


// Active link highlighting in navbar

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links-ul a");

    function activateLink() {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", activateLink);
  });


  // form validation

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const purpose = document.getElementById("purpose").value;
    const message = document.getElementById("message").value.trim();

    // Name: only letters and spaces
    const nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
      alert("Name should contain only letters and spaces.");
      e.preventDefault();
      return;
    }

    // Company: not empty
    if (company.length < 2) {
      alert("Please enter a valid company name.");
      e.preventDefault();
      return;
    }

    // Email format
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // Mobile: digits only and 10 characters
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      e.preventDefault();
      return;
    }

    // Purpose: must be selected
    if (!purpose) {
      alert("Please select a purpose.");
      e.preventDefault();
      return;
    }

    // Message: minimum 10 characters
    if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      e.preventDefault();
      return;
    }
  });