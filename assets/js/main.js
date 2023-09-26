document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the ID "menu-toggler"
    var menuToggler = document.getElementById("menu-toggler");
  
    // Add a click event listener to the "menu-toggler" element
    menuToggler.addEventListener("click", function() {
      toggleBodyClass("menu-active");
    });
  
    // Define the toggleBodyClass function
    function toggleBodyClass(className) {
      document.body.classList.toggle(className);
    }
  });
  