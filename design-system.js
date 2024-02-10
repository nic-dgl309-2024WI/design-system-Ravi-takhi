function toggleNavbar(isVisible) {
  let sideNavbar = document.getElementById("side-navbar");
  
  if (isVisible) {
    document.getElementById("sidebarShow").style.display = "none";
    document.getElementById("sidebarHide").style.display = "flex";
    sideNavbar.style.display = "flex";
    sideNavbar.classList.add("active");
  } else {
    document.getElementById("sidebarShow").style.display = "flex";
    document.getElementById("sidebarHide").style.display = "none";
    sideNavbar.style.display = "none";
    sideNavbar.classList.remove("active");
  }
}
