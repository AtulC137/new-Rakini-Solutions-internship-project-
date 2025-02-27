// Load template.html into the div with id="template-container"
document.addEventListener("DOMContentLoaded", function () {
    fetch("template.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("template-container").innerHTML = data;

            // Highlight the active menu item based on the current page
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll(".menu-item").forEach(item => {
                if (item.getAttribute("href") === currentPage) {
                    item.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error loading template:", error));
});
