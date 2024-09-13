const mobileMenu = document.querySelector(".mobile-menu")
const closeIcon = document.querySelector(".close-icon img")

document.body.addEventListener("click", (e) => {
  if (e.target.matches("header .links img")) {
    mobileMenu.classList.toggle("invisible")
    return
  } else if (
    e.target.matches(".close-icon img") ||
    e.target.matches(".mobile-menu .links a")
  ) {
    console.log("closed menu")
    mobileMenu.classList.toggle("invisible")
    return
  }
})
