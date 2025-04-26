!(function($) {
  "use strict";

// <!-- typed js effect starts  Home Section -->
var typed = new Typed(".typing-text", {
  strings: [
      "Hire me because",
      "Codeforces Expert",
      "5 ★ Coder on CodeChef",
      "LeetCode Guardian",
      "5 ★ Coder on GeeksforGeeks",
      "Proficient in C++, Java, Python, JavaScript",
      "Skilled in HTML5, CSS3,Tailwind, React.js,Typescript",
      "Familiar with Spring Boot, Node.js, RESTful APIs ",
      "Expertise in both SQL (PostgreSQL) and NoSQL (MongoDB)",
      "Experienced with Git, GitHub, AWS",
      "Strong Problem-Solving and Debugging skills", 
      "Collaborative and quick learner",
     "Thank you for visiting my portfolio",
      "Let's connect and build something great together!",
     
  ],
  loop: true,
  typeSpeed: 30,
  backSpeed: 10,
  backDelay: 800,
});
// <!-- typed js effect ends -->

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  
  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      }
    }
  });
   
    

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
 });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

    // Ensure the page reloads at the top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

})(jQuery);


// Captch implementation

document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent default form submission

  const form = event.target;
  const submitButton = document.getElementById("submit-button");

  // Disable the submit button to prevent multiple submissions
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  // Get the hCaptcha response token
  const hCaptchaResponse = document.querySelector('[name="h-captcha-response"]').value;

  if (!hCaptchaResponse) {
    alert("Please complete the hCaptcha challenge.");
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
    return;
  }

  // Prepare form data
  const formData = new FormData(form);
  formData.append("h-captcha-response", hCaptchaResponse);

  try {
    // Send form data to Web3Forms
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // Redirect to the thank you page
      window.location.href = form.querySelector('input[name="redirect"]').value;
    } else {
      alert("There was an error submitting the form. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    alert("An unexpected error occurred. Please try again later.");
  } finally {
    // Re-enable the submit button
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
});
// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Name Validation
  if (!/^[A-Za-z\s]+$/.test(name.value)) {
    alert("Name should only contain letters and spaces.");
    e.preventDefault();
    return;
  }

  // Email Validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  // Message Validation
  if (message.value.length < 10 || message.value.length > 2000) {
    alert("Message should be between 10 and 2000 characters.");
    e.preventDefault();
    return;
  }

});





