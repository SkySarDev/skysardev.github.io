const burgerIcon = document.querySelector(".header__burger-icon");
const navList = document.querySelector(".header__nav");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("_active");
  navList.classList.toggle("_active");
});
