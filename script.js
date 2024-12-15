// Optional: Add any interactivity, such as toggling dropdown on click
document.addEventListener("DOMContentLoaded", () => {
    const dropbtn = document.querySelector(".dropbtn");
    dropbtn.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdownContent = dropbtn.nextElementSibling;
        dropdownContent.style.display = 
            dropdownContent.style.display === "block" ? "none" : "block";
    });
});

