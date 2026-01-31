// Mobile Navigation Toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const body = document.body;

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Read More Functionality
const initReadMore = () => {
    // Intro Read More
    const readMoreBtn = document.getElementById('readMoreBtn');
    const introDetails = document.getElementById('introDetails');

    if (readMoreBtn && introDetails) {
        readMoreBtn.addEventListener('click', () => {
            const isExpanded = introDetails.classList.contains('active');
            
            if (isExpanded) {
                // Collapse
                introDetails.classList.remove('active');
                readMoreBtn.classList.remove('active');
            } else {
                // Expand
                introDetails.classList.add('active');
                readMoreBtn.classList.add('active');
            }
        });
    }

    // Card Read More Buttons
    const cardReadMoreBtns = document.querySelectorAll('.card-read-more');
    
    cardReadMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const isExpanded = targetElement.classList.contains('active');
                
                if (isExpanded) {
                    // Collapse
                    targetElement.classList.remove('active');
                    this.classList.remove('active');
                } else {
                    // Expand
                    targetElement.classList.add('active');
                    this.classList.add('active');
                }
            }
        });
    });

    // More Experience Button
    const moreExperienceBtn = document.getElementById('moreExperienceBtn');
    if (moreExperienceBtn) {
        moreExperienceBtn.addEventListener('click', () => {
            // You can add AJAX or dynamic content loading here
            alert('Loading more experience items...');
            // Example: Fetch additional experience cards
        });
    }

    // More Education Button
    const moreEducationBtn = document.getElementById('moreEducationBtn');
    if (moreEducationBtn) {
        moreEducationBtn.addEventListener('click', () => {
            alert('Loading more education items...');
        });
    }

    // More Skills Button
    const moreSkillsBtn = document.getElementById('moreSkillsBtn');
    if (moreSkillsBtn) {
        moreSkillsBtn.addEventListener('click', () => {
            const skillsGrid = document.querySelector('.skills-grid');
            if (skillsGrid) {
                const isExpanded = skillsGrid.classList.contains('show-all');
                
                if (isExpanded) {
                    // Collapse
                    skillsGrid.classList.remove('show-all');
                    moreSkillsBtn.innerHTML = '<i class="fas fa-code"></i> View More Skills';
                    // Scroll to skills section
                    skillsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    // Expand
                    skillsGrid.classList.add('show-all');
                    moreSkillsBtn.innerHTML = '<i class="fas fa-minus"></i> Show Less Skills';
                }
            }
        });
    }
};

// Animate skill progress bars on scroll
const animateSkillsOnScroll = () => {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillCard = entry.target;
                const skillValue = skillCard.getAttribute('data-skill');
                const progressBar = skillCard.querySelector('.skill-progress-bar');
                
                if (progressBar) {
                    // Reset and animate
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = skillValue + '%';
                    }, 100);
                }
                
                observer.unobserve(skillCard);
            }
        });
    }, {
        threshold: 0.3
    });

    skillCards.forEach(card => {
        observer.observe(card);
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Animate skills
    animateSkillsOnScroll();
    
    // Initialize Read More functionality
    initReadMore();
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal page anchors
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // Close mobile menu if window is resized to desktop size
    if (window.innerWidth > 768 && nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        if (burger) burger.classList.remove('active');
        body.classList.remove('menu-open');
    }
});
document.getElementById('resumeDownloadBtn').addEventListener('click', function(e) {
    // Only prevent default if you want to handle everything in JS
    // e.preventDefault();
    
    // Optional: Show loading state
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    this.style.pointerEvents = 'none';
    
    // Reset button after 2 seconds
    setTimeout(() => {
        this.innerHTML = originalText;
        this.style.pointerEvents = 'auto';
    }, 2000);
    
    // File will download automatically via the link
    // No need for fetch() since the <a> tag handles it
});