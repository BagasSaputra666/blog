import { hamburgerIcon, closeIcon } from "./assets/icons/index.js";

const navList = document.querySelector(".nav_list");
const hamburgerContainer = document.querySelector(".hamburger_container");

hamburgerContainer.addEventListener("click", () => {
  if (navList.classList.contains("active")) {
    navList.classList.remove("active");
    hamburgerContainer.innerHTML = hamburgerIcon;
  } else {
    navList.classList.add("active");
    hamburgerContainer.innerHTML = closeIcon;
  }
});
