// Smooth scrolling for navigation links

document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Add event listener to detect changes in the select element
document.querySelector("#select-color").addEventListener("click", function () {
  // Get the selected value
  let selectedColor = this.value;

  // Switch statement to set the color based on the selected value
  switch (selectedColor) {
    case "skyblue":
      document.documentElement.style.setProperty("--main-color", "#5ba4fc");
      break;
    case "red":
      document.documentElement.style.setProperty("--main-color", "red");
      break;
    case "blueviolet":
      document.documentElement.style.setProperty("--main-color", "blueviolet");
      break;
    default:
      break;
  }
});

// Toggle the class 'open' on the hamburger menu when clicked
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("open");
  });
