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
