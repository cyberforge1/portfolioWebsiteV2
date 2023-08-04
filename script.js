// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Function to apply the magnification effect
  function magnifyElement(element) {
    element.style.transition = "transform 0.3s"; // Smooth transition effect
    element.style.transform = "scale(1.5)"; // Increase scale by 1.5x
  }

  // Function to reset the magnification effect
  function resetMagnification(element) {
    element.style.transform = "scale(1)"; // Reset scale to normal
  }

  // Get all the navbar links
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Add event listeners to each navbar link
  navbarLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      magnifyElement(link); // Apply magnification effect on hover
    });

    link.addEventListener("mouseleave", () => {
      resetMagnification(link); // Reset magnification effect on mouse leave
    });
  });
});

// Get the height of the navbar
const navbarHeight = 80; // Replace this value with the actual height of your navbar

// Add an event listener to each link in the navbar
document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior

    const target = document.querySelector(link.getAttribute("href")); // Get the target section based on the link's href
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Add the JavaScript code here
});

// Add an event listener to all elements with the "project-link" class
const projectDivs = document.querySelectorAll(".project-link");
projectDivs.forEach((div) => {
  div.addEventListener("click", (event) => {
    // Get the ID of the clicked project div
    const projectId = event.currentTarget.id;

    // Perform the redirection based on the clicked div's ID
    switch (projectId) {
      case "project1":
        window.location.href =
          "https://imageforge3-69e1844e43ca.herokuapp.com/";
        break;
      case "project2":
        window.location.href =
          "https://github.com/cyberforge1/chatGPTFineTuneModel";
        break;
      case "project3":
        window.location.href =
          "https://github.com/cyberforge1/corelogicFlaskAPI";
        break;
      case "project4":
        window.location.href =
          "https://github.com/cyberforge1/socialMediaAppMERN";
        break;
      default:
        // Redirect to a default URL in case of no match
        window.location.href = "https://github.com/cyberforge1";
        break;
    }
  });
});

// Add an event listener to all elements with the "project-link" class
const projectClick = document.querySelectorAll(".project-link");
projectDivs.forEach((div) => {
  // Change cursor to "pointer" when hovering over the project div
  div.style.cursor = "pointer";

  div.addEventListener("click", (event) => {
    // Rest of the click event code
  });
});
