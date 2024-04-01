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

