const features = document.querySelector(".features");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-hidden-list");
const featuresList = document.querySelector(".features-hidden-list");
const downArrow1 = document.querySelector(".down-arrow1");
const downArrow2 = document.querySelector(".down-arrow2");
const upArrow1 = document.querySelector(".up-arrow1");
const upArrow2 = document.querySelector(".up-arrow2");

features.addEventListener("click", () => {
  featuresList.classList.toggle("show");
  downArrow1.classList.toggle("down");
  upArrow1.classList.toggle("up");
});
company.addEventListener("click", () => {
  companyList.classList.toggle("show");
  downArrow2.classList.toggle("down");
  upArrow2.classList.toggle("up");
});

//===============Closing Existing list =========

// function closingFeaturesList() {
//   featuresList.classList.remove("show");
// }
// function closingCompanyList() {
//   companyList.classList.remove("show");
// }

// ====Showing or Hiding Hamburger Menu========
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerbtn = document.querySelector(".hamburger-btn");
const hamburgerCloseBtn = document.querySelector(".hamburger-close-btn");

hamburgerbtn.addEventListener("click", () => {
  hamburgerMenu.style.right = "0px";
});

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerMenu.style.right = "-350px";
});
