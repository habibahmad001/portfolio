// ===== Portfolio Showcase JavaScript =====

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hidden');
                    card.classList.remove('hiding');
                    // Re-trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.6s ease forwards';
                    }, 10);
                } else {
                    card.classList.add('hiding');
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add parallax effect to blobs
    document.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.blob');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = index === 0 ? 20 : 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Image lazy loading with fallback
    const images = document.querySelectorAll('.project-image img');

    images.forEach(img => {
        // Add error handling
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const parent = this.closest('.project-image');
            const fallback = document.createElement('div');
            fallback.className = 'image-fallback';
            fallback.innerHTML = `
                <div class="fallback-content">
                    <i class="fas fa-globe"></i>
                    <span>Website Preview</span>
                </div>
            `;
            parent.appendChild(fallback);
        });

        // Add loading indicator
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Add dynamic image fallback styles
const style = document.createElement('style');
style.textContent = `
    .image-fallback {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        position: absolute;
        inset: 0;
    }

    .fallback-content {
        text-align: center;
        color: #667eea;
    }

    .fallback-content i {
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    .fallback-content span {
        font-size: 0.9rem;
        font-weight: 600;
    }

    .project-image img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);
