const navButton = document.getElementById('open-menu')
const headerNav = document.getElementById('header-nav')
const navItem = document.querySelectorAll("#nav-item")
const body = document.body

navButton.addEventListener('click', function (e) {

  if (headerNav.classList.contains("hidden")) {
    headerNav.classList.remove("hidden")
    navButton.src = "./dist/img/close.svg"
  }


  else {
    headerNav.classList.add("hidden")
    navButton.src = "./dist/img/hamburger.svg"
  }
})




