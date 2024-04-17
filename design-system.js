function toggleNavbar(isVisible) {
  let sideNavbar = document.getElementById("side-navbar");
  var dropdownMenu = document.querySelector('.on-nav__dropdown');
  
  if (isVisible) {
    dropdownMenu.style.display = 'block';
    document.getElementById("sidebarShow").style.display = "none";
    document.getElementById("sidebarHide").style.display = "flex";
    sideNavbar.style.display = "flex";
    sideNavbar.classList.add("active");
  } else {
    dropdownMenu.style.display = 'none';
    document.getElementById("sidebarShow").style.display = "flex";
    document.getElementById("sidebarHide").style.display = "none";
    sideNavbar.style.display = "none";
    sideNavbar.classList.remove("active");
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const paginationButtons = document.querySelectorAll('.on-pagination__button');
  const productCategories = document.querySelectorAll('.on-product-category');

  function showCategories(startIndex) {
    // Hide all product categories
    productCategories.forEach(category => {
      category.style.display = 'none';
    });

    // Show product categories for the selected page
    const endIndex = startIndex + 3;
    for (let i = startIndex; i < endIndex; i++) {
      if (productCategories[i]) {
        productCategories[i].style.display = 'block';
      }
    }
  }

  // Show default categories when the page loads
  showCategories(0);

  // Add click event listeners to pagination buttons
  paginationButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showCategories(index * 3); // Assuming each page shows 3 categories
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const testimonials = [
    { text: "I couldn't be happier with the results!", author: "John Doe" },
    { text: "Amazing service! Highly recommended.", author: "Jane Smith" },
    { text: "The best decision I've ever made!", author: "Bob Johnson" },
  ];

  let currentTestimonial = 0;

  const testimonialElem = document.querySelector(".on-testimonial-container__title");
  const authorElem = document.querySelector(".on-testimonial-container__author");
  const prevBtn = document.querySelector(".on-testimonial-container__button#prev-btn");
  const nextBtn = document.querySelector(".on-testimonial-container__button#next-btn");

  function showTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    testimonialElem.textContent = `"${testimonial.text}"`;
    authorElem.textContent = `- ${testimonial.author}`;
  }

  function showPrev() {
    currentTestimonial--;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    showTestimonial();
  }

  function showNext() {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial();
  }

  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  showTestimonial();
});

document.addEventListener("DOMContentLoaded", function() {
  let counter = 1;
showTestimonials(counter);

document.querySelector(".on-testimonials__prev").addEventListener("click", () => {
    computeTestimonials(-1)
})

document.querySelector(".on-testimonials__next").addEventListener("click", () => {
    computeTestimonials(1)
})

function computeTestimonials(t) {
    showTestimonials((counter += t))
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("on-testimonial");

  if (n > testimonials.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = testimonials.length;
  }

  for( i = 0; i < testimonials.length; i++){
      testimonials[i].style.display = "none"
  }

  testimonials[counter - 1].style.display = "flex"
}

});
