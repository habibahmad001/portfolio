// ===== Portfolio Showcase JavaScript =====

// Global functions - must be defined before DOMContentLoaded
// Gallery Image Changer Function
window.changeImage = function(imageSrc, thumbnail) {
    // Update main image
    const mainImage = document.getElementById('ilumed-main-image');
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = imageSrc;
            mainImage.style.opacity = '1';
        }, 150);
    }

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.gallery-thumb');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    if (thumbnail) {
        thumbnail.classList.add('active');
    }
};

// Scroll to Gallery Function
window.scrollToGallery = function() {
    console.log('Gallery button clicked!'); // Debug log

    // Find the ilumed card specifically by looking for the gallery container
    const allCards = document.querySelectorAll('.project-card');
    let ilumedCard = null;

    allCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title && title.textContent.trim() === 'ilumed') {
            ilumedCard = card;
        }
    });

    console.log('Found ilumed card:', ilumedCard); // Debug log

    if (ilumedCard) {
        // Scroll to the card
        ilumedCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Highlight the gallery more prominently
        const galleryContainer = ilumedCard.querySelector('.gallery-container');
        const galleryThumbs = ilumedCard.querySelector('.gallery-thumbs');

        console.log('Gallery container:', galleryContainer); // Debug log

        if (galleryContainer) {
            // Add pulsing animation
            galleryContainer.style.animation = 'pulse 1s ease-in-out 3';
            galleryContainer.style.boxShadow = '0 0 30px rgba(97, 218, 251, 1)';

            // Scroll thumbnails into view
            if (galleryThumbs) {
                galleryThumbs.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }

            // Remove highlight after animation
            setTimeout(() => {
                galleryContainer.style.animation = '';
                galleryContainer.style.boxShadow = '';
            }, 3000);
        }
    } else {
        console.log('ilumed card not found!'); // Debug log
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to filter projects
    function filterProjects(filterValue) {
        console.log('Filtering by:', filterValue); // Debug log

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to corresponding button
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) {
                btn.classList.add('active');
            }
        });

        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const categories = category ? category.split(' ') : [];

            console.log('Card categories:', categories); // Debug log

            if (filterValue === 'all' || categories.includes(filterValue)) {
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

        // Update URL without page reload
        const url = new URL(window.location);
        if (filterValue === 'all') {
            url.searchParams.delete('tab');
        } else {
            url.searchParams.set('tab', filterValue);
        }
        window.history.pushState({}, '', url);
    }

    // Check URL parameter on page load
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    console.log('URL tab parameter:', tabParam); // Debug log

    // Apply filter from URL after a small delay to ensure DOM is ready
    setTimeout(() => {
        if (tabParam) {
            filterProjects(tabParam);
        }
    }, 100);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            filterProjects(filterValue);
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
