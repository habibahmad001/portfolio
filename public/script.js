// ===== Configuration =====
// Change this to 'de' for German or 'en' for English as default language
const DEFAULT_LANGUAGE = 'en';  // Options: 'en' | 'de'
// Example: To make German the default, change to: const DEFAULT_LANGUAGE = 'de';

// ===== Translations =====
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            location: 'Punjab, Pakistan',
            description: 'Senior Full Stack Developer with 16+ years of experience in web development. Passionate about building exceptional digital experiences using PHP, Laravel, React.js, Node.js, Python, and Django.',
            getInTouch: 'Get In Touch',
            viewProjects: 'View Projects',
            downloadCV: 'Download CV'
        },
        banner: {
            title: 'Looking for a Senior Full Stack Developer?',
            subtitle: "I'm available for freelance projects and full-time opportunities. Let's build something amazing together!",
            hireMe: 'Hire Me',
            viewWork: 'View My Work'
        },
        about: {
            title: 'About Me',
            para1: "I'm a Senior Full Stack Developer with over 16 years of experience in web development. I specialize in PHP, Laravel (8+ years), React.js (2+ years), Node.js (2+ years), and have extensive knowledge of Python, Django, Linux, AWS, and modern web technologies.",
            para2: 'I hold a B.S. in Computer Science from Punjab University (2003-2007). Throughout my career, I\'ve worked with international clients from UK, US, and Canada, delivering high-quality web solutions including LMS systems, e-commerce platforms, and complex enterprise applications.',
            careerLabel: 'Career Objective:',
            careerObjective: 'To gain confidence and fame using my potential in the field of "Web Development", and express my innovative creative skills for self and company growth.',
            name: 'Name:',
            email: 'Email:',
            phone: 'Phone:',
            location: 'Location:',
            experience: 'Experience:',
            availability: 'Availability:',
            available: 'Open to opportunities'
        },
        skills: {
            title: 'Skills & Expertise',
            subtitle: '12+ years of experience with modern web technologies',
            backend: 'Backend Development',
            frontend: 'Frontend Development',
            tools: 'Tools & DevOps',
            languages: 'Languages',
            softSkills: 'Soft Skills',
            otherSkills: 'Other Skills'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Have a project in mind or want to collaborate? Feel free to reach out!',
            letsConnect: "Let's Connect",
            email: 'Email',
            phone: 'Phone',
            website: 'Website',
            location: 'Location',
            followMe: 'Follow Me',
            downloadCV: 'Download My CV',
            sendMessage: 'Send a Message',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message'
            }
        },
        footer: {
            copyright: '© 2025 Habib Ahmad. All rights reserved.',
            builtWith: 'Built with HTML, CSS, and JavaScript'
        }
    },
    de: {
        nav: {
            home: 'Startseite',
            about: 'Über mich',
            skills: 'Fähigkeiten',
            experience: 'Erfahrung',
            projects: 'Projekte',
            contact: 'Kontakt'
        },
        hero: {
            location: 'Punjab, Pakistan',
            description: 'Senior Full-Stack-Entwickler mit 16+ Jahren Erfahrung in der Webentwicklung. Leidenschaftlich für die Entwicklung erstklassiger digitaler Erfahrungen mit PHP, Laravel, React.js, Node.js, Python und Django.',
            getInTouch: 'Kontaktieren',
            viewProjects: 'Projekte ansehen',
            downloadCV: 'Lebenslauf herunterladen'
        },
        banner: {
            title: 'Suchen Sie einen Senior Full-Stack-Entwickler?',
            subtitle: 'Ich bin verfügbar für Freelance-Projekte und Vollzeit-Möglichkeiten. Lassen Sie uns gemeinsam etwas Großartiges schaffen!',
            hireMe: 'Mich einstellen',
            viewWork: 'Meine Arbeit ansehen'
        },
        about: {
            title: 'Über mich',
            para1: 'Ich bin ein Senior Full-Stack-Entwickler mit über 16 Jahren Erfahrung in der Webentwicklung. Ich spezialisiere mich auf PHP, Laravel (8+ Jahre), React.js (2+ Jahre), Node.js (2+ Jahre) und habe umfangreiche Kenntnisse in Python, Django, Linux, AWS und modernen Web-Technologien.',
            para2: 'Ich habe einen B.S. in Informatik von der Punjab University (2003-2007). Während meiner Karriere habe ich mit internationalen Kunden aus UK, USA und Kanada zusammengearbeitet und hochwertige Weblösungen einschließlich LMS-Systemen, E-Commerce-Plattformen und komplexen Unternehmensanwendungen geliefert.',
            careerLabel: 'Karriereziel:',
            careerObjective: 'Vertrauen und Ruhm durch mein Potenzial im Bereich der "Webentwicklung" zu gewinnen und meine innovativen kreativen Fähigkeiten für das eigene und das Unternehmenswachstum einzusetzen.',
            name: 'Name:',
            email: 'E-Mail:',
            phone: 'Telefon:',
            location: 'Standort:',
            experience: 'Erfahrung:',
            availability: 'Verfügbarkeit:',
            available: 'Offen für Möglichkeiten'
        },
        skills: {
            title: 'Fähigkeiten & Expertise',
            subtitle: '12+ Jahre Erfahrung mit modernen Web-Technologien',
            backend: 'Backend-Entwicklung',
            frontend: 'Frontend-Entwicklung',
            tools: 'Tools & DevOps',
            languages: 'Sprachen',
            softSkills: 'Soft Skills',
            otherSkills: 'Sonstige Fähigkeiten'
        },
        contact: {
            title: 'Kontaktieren Sie mich',
            subtitle: 'Haben Sie ein Projekt im Sinn oder möchten Sie zusammenarbeiten? Zögern Sie nicht, mich zu kontaktieren!',
            letsConnect: 'Lassen Sie uns verbinden',
            email: 'E-Mail',
            phone: 'Telefon',
            website: 'Website',
            location: 'Standort',
            followMe: 'Folgen Sie mir',
            downloadCV: 'Lebenslauf herunterladen',
            sendMessage: 'Eine Nachricht senden',
            form: {
                name: 'Ihr Name',
                email: 'Ihre E-Mail',
                subject: 'Betreff',
                message: 'Nachricht',
                send: 'Nachricht senden'
            }
        },
        footer: {
            copyright: '© 2025 Habib Ahmad. Alle Rechte vorbehalten.',
            builtWith: 'Erstellt mit HTML, CSS und JavaScript'
        }
    }
};

// Language Switcher
let currentLanguage = localStorage.getItem('language') || DEFAULT_LANGUAGE;

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];

        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                translation = key;
                break;
            }
        }

        if (typeof translation === 'string') {
            element.textContent = translation;
        }
    });

    // Update language button
    const langBtn = document.getElementById('currentLang');
    const langFlag = document.querySelector('.lang-flag');
    if (langBtn && langFlag) {
        langBtn.textContent = lang.toUpperCase();
        langFlag.textContent = lang === 'en' ? '🇬🇧' : '🇩🇪';
    }

    localStorage.setItem('language', lang);
    currentLanguage = lang;
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLanguage);
});

// Language button click handlers
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            langDropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            if (langDropdown) {
                langDropdown.classList.remove('active');
            }
        }
    });

    // Language option handlers
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
            langDropdown.classList.remove('active');
        });
    });
});

// ===== Profile Image Loading Fix =====
document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profilePic');
    const avatar = document.querySelector('.avatar');

    if (profilePic) {
        // Ensure avatar is visible even if image takes time to load
        if (avatar) {
            avatar.style.visibility = 'visible';
        }

        // Add load event listener
        profilePic.addEventListener('load', function() {
            this.style.opacity = '1';
            if (avatar) {
                avatar.style.opacity = '1';
            }
        });

        // If image is already loaded (from cache)
        if (profilePic.complete) {
            profilePic.style.opacity = '1';
            if (avatar) {
                avatar.style.opacity = '1';
            }
        }

        // Fallback: if image doesn't load within 3 seconds, show the avatar anyway
        setTimeout(() => {
            if (avatar && getComputedStyle(avatar).opacity === '0') {
                avatar.style.opacity = '1';
            }
        }, 3000);
    }

    // Final fallback: Ensure all hero elements are visible after 5 seconds
    setTimeout(() => {
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        const heroTitle = document.querySelector('.hero-title');

        if (hero) hero.style.opacity = '1';
        if (heroContent) heroContent.style.opacity = '1';
        if (heroTitle) heroTitle.style.opacity = '1';
        if (avatar) avatar.style.opacity = '1';
    }, 5000);
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Typewriter Effect =====
const typewriterText = 'PHP | Laravel | Node | React | Python | Django | Linux';
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typewriter when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// ===== Scroll Reveal Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Make hero section visible immediately
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// ===== Skill Bar Animation =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
    });
}

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const originalText = btnText.textContent;

        // Show loading state
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;

        // FormSubmit will handle the actual submission
        // Just show success feedback after a short delay
        setTimeout(() => {
            btnText.textContent = 'Redirecting...';
        }, 1000);
    });
}

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = '';
            });
            if (correspondingLink) {
                correspondingLink.style.color = 'var(--primary)';
            }
        }
    });
});

// ===== Parallax Effect for Blobs =====
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

// ===== Project Cards Hover Effect Enhancement =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===== Timeline Animation =====
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    timelineObserver.observe(item);
});

// ===== Load More Projects Functionality =====
const loadMoreBtn = document.getElementById('loadMoreBtn');
const githubBtn = document.getElementById('githubBtn');
const projectsGrid = document.getElementById('projectsGrid');
let visibleProjects = 4;
const projectsPerLoad = 4;

// Hide projects beyond the first 4
function initProjects() {
    projectCards.forEach((card, index) => {
        if (index >= visibleProjects) {
            card.style.display = 'none';
        }
    });
}

// Load more projects
loadMoreBtn?.addEventListener('click', () => {
    const totalProjects = projectCards.length;
    const remainingProjects = totalProjects - visibleProjects;
    const projectsToShow = Math.min(projectsPerLoad, remainingProjects);

    // Show next batch of projects
    for (let i = visibleProjects; i < visibleProjects + projectsToShow; i++) {
        if (projectCards[i]) {
            projectCards[i].style.display = 'block';
            // Add animation
            projectCards[i].style.animation = 'fadeInUp 0.5s ease-out';
        }
    }

    visibleProjects += projectsToShow;

    // Scroll to the first newly loaded project
    if (visibleProjects > projectsPerLoad) {
        projectCards[visibleProjects - projectsToShow].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }

    // Hide load more button if all projects are shown
    if (visibleProjects >= totalProjects) {
        loadMoreBtn.style.display = 'none';
        githubBtn.style.display = 'inline-flex';
    }
});

// Initialize projects on page load
initProjects();

// ===== Dynamic Footer Year =====
const footerYear = document.querySelector('.footer p');
if (footerYear && footerYear.textContent.includes('2025')) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', new Date().getFullYear());
}

// ===== Prevent FOUC (Flash of Unstyled Content) =====
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
});

// ===== Add loading animation =====
console.log('Portfolio loaded successfully! 🚀');
