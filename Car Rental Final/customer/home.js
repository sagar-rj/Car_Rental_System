document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about');
    const safar = document.querySelector('.safar');
    const offer = document.querySelector('.offer');

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('in-view');
            } else {
                aboutSection.classList.remove('in-view');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(aboutSection);
});
