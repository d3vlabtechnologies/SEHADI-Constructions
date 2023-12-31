// Navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Filter Cards per Category
const filters_cat = document.querySelectorAll(".filter-btn");
const projectSlider = document.querySelector(".project-slider");

filters_cat.forEach((filter) => {
  filter.addEventListener("click", function () {
    filters_cat.forEach((filter) => {
      filter.classList.remove("btn-active");
    });
    this.classList.add("btn-active");

    const category = this.dataset.cat;
    const cards = projectSlider.querySelectorAll(".swiper-slide");
    cards.forEach((card) => {
      card.classList.add("d-none");
    });

    let selectedcat;
    if (category === "all") {
      selectedcat = projectSlider.querySelectorAll(".swiper-slide");
    } else {
      selectedcat = projectSlider.querySelectorAll(`[data-type="${category}"]`);
    }

    const numberItems = Math.min(selectedcat.length, 4);
    for (let index = 0; index < numberItems; index++) {
      selectedcat[index].classList.remove("d-none");
    }

    // If number of cards is 0, show no results
    const cards_count = projectSlider.querySelectorAll(
      ".swiper-slide:not(.d-none)"
    );
    const noResults = document.querySelector(".no-results");
    if (cards_count.length === 0) {
      noResults.classList.remove("d-none");
    } else {
      noResults.classList.add("d-none");
    }
  });
});
// End of Filter Cards per Category

// Swiper Slider 1
var swiperHero = new Swiper(".hero", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero .swiper-button-next",
    prevEl: ".hero .swiper-button-prev",
  },
});
// End of Swiper Slider 1

// Swiper Slider 2
var swiperProject = new Swiper(".project-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".project-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".project-slider .swiper-button-next",
    prevEl: ".project-slider .swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
// End of Swiper Slider 2

//Get Date Function
window.onload = function () {
  const yearsInBusinessElement = document.getElementById("yearsInBusiness");
  const currentYearElement = document.getElementById("currentYear");
  const yearsExperienceElement = document.getElementById("yearsExperience");

  const currentYear = new Date().getFullYear();
  const startYear = 2013;
  const yearsInBusiness = currentYear - startYear;
  const yearsExperience = currentYear - startYear;

  yearsInBusinessElement.textContent = yearsInBusiness;
  currentYearElement.textContent = currentYear;
  yearsExperienceElement.textContent = yearsExperience + " Years Experience";
};
// End of Get Date Function

// Experience Animation
const animatedNumberElements = document.querySelectorAll(".animated-number");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const from = parseInt(entry.target.getAttribute("data-from"));
      const to = parseInt(entry.target.getAttribute("data-to"));
      animateNumber(entry.target, from, to);
      observer.unobserve(entry.target);
    }
  });
});

animatedNumberElements.forEach((element) => {
  observer.observe(element);
});

function animateNumber(element, from, to) {
  let current = from;
  const step = Math.ceil(Math.abs(to - from) / 50);
  const interval = setInterval(function () {
    current += step;
    element.textContent = current;

    if (current >= to) {
      element.textContent = to;
      clearInterval(interval);
    }
  }, 20);
}

// End of Experience Animation
