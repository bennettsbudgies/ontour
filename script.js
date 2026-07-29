document.addEventListener("DOMContentLoaded", () => {
    console.log("Bennett's Budgies website loaded successfully.");

    // Smooth hover effects can be tracked here if needed.
    // This script file is ready for your Linktree widget initialization
    // or any other dynamic interactions you want to build in.

    const linkButtons = document.querySelectorAll('.link-btn');

    linkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Placeholder interaction for static buttons
            console.log("Link clicked: " + e.target.textContent);
        });
    });
});

