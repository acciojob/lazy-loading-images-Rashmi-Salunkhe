// Function to implement lazy loading using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    const lazyImages = document.querySelectorAll('img.lazy'); // Change selector to 'img.lazy'

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src'); // Load the image
                img.classList.add('loaded');
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img); // Start observing each image
    });
});
