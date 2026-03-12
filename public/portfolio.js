// ===== Portfolio Showcase JavaScript =====

// Gallery data for ilumed project
const ilumedGalleryImages = [
    { src: 'images/ilumed/patientDashboard.png', title: 'Patient Dashboard' },
    { src: 'images/ilumed/login.png', title: 'Login' },
    { src: 'images/ilumed/patiend-dashboard.png', title: 'Patient Dashboard' },
    { src: 'images/ilumed/adt.png', title: 'ADT' },
    { src: 'images/ilumed/analytics.png', title: 'Analytics' },
    { src: 'images/ilumed/clinical.png', title: 'Clinical' },
    { src: 'images/ilumed/patient-search.png', title: 'Patient Search' },
    { src: 'images/ilumed/patiend-detail.png', title: 'Patient Detail' },
    { src: 'images/ilumed/schadular.png', title: 'Scheduler' },
    { src: 'images/ilumed/embaded.png', title: 'Embedded' }
];

let currentImageIndex = 0;

// Global functions - must be defined before DOMContentLoaded
// Gallery Image Changer Function (for inline gallery)
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

// Open Fancybox Gallery
window.scrollToGallery = function() {
    console.log('Opening fancybox gallery!'); // Debug log

    const modal = document.getElementById('gallery-modal');
    const mainImage = document.getElementById('gallery-main-image');
    const thumbnailsContainer = document.getElementById('gallery-thumbnails');

    if (!modal || !mainImage || !thumbnailsContainer) {
        console.error('Gallery modal elements not found!'); // Debug log
        return;
    }

    // Reset to first image
    currentImageIndex = 0;

    // Set main image
    mainImage.src = ilumedGalleryImages[0].src;
    mainImage.alt = ilumedGalleryImages[0].title;

    // Clear and populate thumbnails
    thumbnailsContainer.innerHTML = '';
    ilumedGalleryImages.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.alt = img.title;
        thumb.className = 'gallery-thumb-modal' + (index === 0 ? ' active' : '');
        thumb.onclick = () => showGalleryImage(index);
        thumbnailsContainer.appendChild(thumb);
    });

    // Show modal
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    console.log('Gallery opened successfully!'); // Debug log
};

// Close Gallery
window.closeGallery = function() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);

        // Restore body scroll
        document.body.style.overflow = '';
    }
};

// Show specific image in gallery
window.showGalleryImage = function(index) {
    if (index < 0 || index >= ilumedGalleryImages.length) return;

    currentImageIndex = index;

    const mainImage = document.getElementById('gallery-main-image');
    const thumbnails = document.querySelectorAll('.gallery-thumb-modal');

    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = ilumedGalleryImages[index].src;
            mainImage.alt = ilumedGalleryImages[index].title;
            mainImage.style.opacity = '1';
        }, 150);
    }

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
};

// Navigate gallery
window.navigateGallery = function(direction) {
    const newIndex = currentImageIndex + direction;

    if (newIndex < 0) {
        showGalleryImage(ilumedGalleryImages.length - 1); // Go to last image
    } else if (newIndex >= ilumedGalleryImages.length) {
        showGalleryImage(0); // Go to first image
    } else {
        showGalleryImage(newIndex);
    }
};

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('gallery-modal');
    if (modal && modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeGallery();
        } else if (e.key === 'ArrowLeft') {
            navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGallery(1);
        }
    }
});

// Close gallery when clicking outside image
document.addEventListener('click', (e) => {
    const modal = document.getElementById('gallery-modal');
    if (modal && modal.classList.contains('active')) {
        const modalContent = modal.querySelector('.gallery-modal-content');
        if (e.target === modal) {
            closeGallery();
        }
    }
});

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
            const categories = category ? category.trim().split(/\s+/) : [];

            console.log('Filter:', filterValue, '| Card categories:', categories, '| Match:', categories.includes(filterValue)); // Debug log

            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.classList.remove('hidden');
                card.classList.remove('hiding');
                card.style.display = ''; // Ensure display is not set to none
                // Re-trigger animation
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                }, 10);
            } else {
                card.classList.add('hiding');
                setTimeout(() => {
                    card.classList.add('hidden');
                    card.style.display = 'none';
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
