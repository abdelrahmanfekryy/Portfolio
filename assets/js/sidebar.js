// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// element toggle function
function elementToggle() { 
    sidebar.classList.toggle("active");
}

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", elementToggle);