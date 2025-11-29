// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // In a real implementation, you would send this to your server
                alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                emailInput.value = '';
            }
        });
    }

    // Gallery item interaction
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // In a real implementation, this would open a product page or modal
            alert('Explore this collection in our shop!');
        });
    });

    // Video controls
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Ensure video plays correctly on mobile
        heroVideo.play().catch(error => {
            console.log('Video autoplay failed:', error);
        });
    }
});