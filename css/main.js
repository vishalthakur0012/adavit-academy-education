window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".top-navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});



// Counter Animation Function
function animateValue(element, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to start counter animations
function startCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const endValue = parseInt(counter.innerText, 10);
    animateValue(counter, 0, endValue, 2000); // 2000ms (2 seconds) duration for each counter
  });
}

// Run the counter animation when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  startCounters();
});

//  team slider js

$(document).ready(function ($) {
  $(".card-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//  Modal video popup js

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("videoModal");
  const videoContainer = document.getElementById("video-container");
  const videoFrame = document.getElementById("videoFrame");

  // Show the modal when the icon is clicked
  videoContainer.addEventListener("click", function () {
    const videoUrl = videoContainer.getAttribute("data-src");
    videoFrame.setAttribute("src", videoUrl);
    modal.style.display = "block";
  });

  // Close the modal when the close button (x) is clicked
  const closeButton = document.getElementsByClassName("close")[0];
  closeButton.addEventListener("click", function () {
    videoFrame.setAttribute("src", ""); // Stop the video when closing the modal
    modal.style.display = "none";
  });
});

// toggle btn on navbar right side js

let menutoggle = document.querySelector(".toggle");
menutoggle.onclick = function () {
  menutoggle.classList.toggle("active");
};

// popup form js

const popupButtons = document.querySelectorAll('.popup-form');
const popups = document.querySelectorAll('.popup');

popupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'flex';
    });
});

popups.forEach(popup => {
    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});



  // ============notification js================

 



