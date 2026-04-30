document.addEventListener('DOMContentLoaded', () => {
    // Handling Section Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.page-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show target section
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Handling Diagram Switcher
    const diagramButtons = document.querySelectorAll('.diagram-btn');
    const diagramIframe = document.getElementById('diagramIframe');

    diagramButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            diagramButtons.forEach(b => b.classList.remove('active'));

            // Add active class
            btn.classList.add('active');

            // Update iframe src
            const newSrc = btn.getAttribute('data-diagram');
            diagramIframe.setAttribute('src', newSrc);
        });
    });
});
