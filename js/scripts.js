// scripts.js - Optimized JavaScript File

// ==========================================
// CONFIGURATION & CONSTANTS
// ==========================================
const CONFIG = {
    performance: {
        debounceDelay: 250,
        animationDelay: 100,
        particleCountFactor: 20,
        maxParticles: 80,
        mobileBreakpoint: 768
    },
    dna: {
        particleColor: 'rgba(249, 115, 22, 0.15)',
        connectionColor: 'rgba(249, 115, 22, 0.2)',
        trailOpacity: 0.05
    },
    icons: {
        list: [
            { class: 'fab fa-laravel', color: '#ff3860' },
            { class: 'fab fa-php', color: '#777bb4' },
            { class: 'fab fa-js', color: '#f0db4f' },
            { class: 'fab fa-node-js', color: '#68a063' },
            { class: 'fas fa-database', color: '#00758f' },
            { class: 'fab fa-github', color: '#333' },
            { class: 'fab fa-html5', color: '#e34c26' },
            { class: 'fab fa-css3-alt', color: '#264de4' },
            { class: 'fab fa-java', color: '#007396' }
        ],
        minSize: 15,
        maxSize: 30,
        opacity: 0.08
    }
};

// ==========================================
// 1. UTILITY FUNCTIONS
// ==========================================
const Utils = {
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    isMobile() {
        return window.innerWidth < CONFIG.performance.mobileBreakpoint;
    }
};

// ==========================================
// 2. MOBILE NAVIGATION MANAGER
// ==========================================
class MobileNavigation {
    constructor() {
        this.burger = document.getElementById('burger');
        this.nav = document.getElementById('nav');
        this.init();
    }

    init() {
        if (!this.burger || !this.nav) return;

        this.setupEventListeners();
        this.setupAccessibility();
    }

    setupEventListeners() {
        // Burger click
        this.burger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen() && !this.nav.contains(e.target) && !this.burger.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen()) {
                this.closeMenu();
            }
        });

        // Close on link click
        this.nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    setupAccessibility() {
        this.burger.setAttribute('aria-label', 'Toggle navigation menu');
        this.burger.setAttribute('aria-expanded', 'false');
        this.burger.setAttribute('aria-controls', 'nav');
    }

    toggleMenu() {
        const isOpening = !this.nav.classList.contains('active');
        
        this.nav.classList.toggle('active');
        this.burger.classList.toggle('toggle');
        this.burger.setAttribute('aria-expanded', isOpening);
        
        document.body.style.overflow = isOpening ? 'hidden' : '';
        
        // Dispatch custom event
        document.dispatchEvent(new CustomEvent('menuToggle', { 
            detail: { isOpen: isOpening } 
        }));
    }

    closeMenu() {
        this.nav.classList.remove('active');
        this.burger.classList.remove('toggle');
        this.burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    isMenuOpen() {
        return this.nav.classList.contains('active');
    }
}

// ==========================================
// 3. DNA PARTICLE SYSTEM MANAGER
// ==========================================
class DNABackground {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.animationId = null;
        this.isAnimating = false;
        this.resizeHandler = null;
    }

    init() {
        // Remove existing instance
        this.cleanup();

        // Don't create on mobile for performance
        if (Utils.isMobile()) return;

        this.createCanvas();
        this.createParticles();
        this.startAnimation();
        this.setupResizeHandler();

        return () => this.cleanup();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'bg-canvas';
        
        Object.assign(this.canvas.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '-1',
            pointerEvents: 'none',
            opacity: '0',
            transition: 'opacity 0.5s ease'
        });

        document.body.prepend(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // Fade in
        setTimeout(() => {
            this.canvas.style.opacity = '1';
        }, CONFIG.performance.animationDelay);

        this.resizeCanvas();
    }

    resizeCanvas() {
        if (!this.canvas) return;
        
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
    }

    createParticles() {
        const particleCount = Math.min(
            CONFIG.performance.maxParticles,
            Math.floor(window.innerWidth / CONFIG.performance.particleCountFactor)
        );

        this.particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 1.5 + 0.5,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            color: this.getParticleColor()
        }));
    }

    getParticleColor() {
        const opacity = Math.random() * 0.15 + 0.05;
        return `rgba(249, 115, 22, ${opacity})`;
    }

    updateParticles() {
        this.particles.forEach(p => {
            // Update position
            p.x += p.speedX;
            p.y += p.speedY;

            // Bounce off edges with damping
            if (p.x > window.innerWidth || p.x < 0) p.speedX *= -0.95;
            if (p.y > window.innerHeight || p.y < 0) p.speedY *= -0.95;

            // Keep within bounds
            p.x = Math.max(0, Math.min(window.innerWidth, p.x));
            p.y = Math.max(0, Math.min(window.innerHeight, p.y));
        });
    }

    drawParticles() {
        this.particles.forEach(p => {
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }

    drawConnections() {
        this.particles.forEach((p1, i) => {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const opacity = 0.2 * (1 - distance / 100);
                    this.ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
                    this.ctx.lineWidth = 0.3;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        });
    }

    animate() {
        if (!this.isAnimating) return;

        // Clear with fade effect
        this.ctx.fillStyle = `rgba(248, 250, 252, ${CONFIG.dna.trailOpacity})`;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        this.updateParticles();
        this.drawParticles();
        this.drawConnections();

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    startAnimation() {
        this.isAnimating = true;
        this.animate();
    }

    setupResizeHandler() {
        this.resizeHandler = Utils.debounce(() => {
            this.resizeCanvas();
            this.adjustParticleCount();
        }, CONFIG.performance.debounceDelay);

        window.addEventListener('resize', this.resizeHandler);
    }

    adjustParticleCount() {
        const newCount = Math.min(
            CONFIG.performance.maxParticles,
            Math.floor(window.innerWidth / CONFIG.performance.particleCountFactor)
        );

        if (newCount > this.particles.length) {
            const toAdd = newCount - this.particles.length;
            for (let i = 0; i < toAdd; i++) {
                this.particles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 1.5 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.8,
                    speedY: (Math.random() - 0.5) * 0.8,
                    color: this.getParticleColor()
                });
            }
        } else if (newCount < this.particles.length) {
            this.particles = this.particles.slice(0, newCount);
        }
    }

    cleanup() {
        this.isAnimating = false;
        
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }

        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
            this.canvas = null;
        }

        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }

        this.particles = [];
    }
}

// ==========================================
// 4. FLOATING ICONS MANAGER
// ==========================================
class FloatingIcons {
    constructor() {
        this.icons = [];
        this.styleAdded = false;
    }

    init() {
        // Don't create on mobile for performance
        if (Utils.isMobile()) return;

        this.cleanup();
        this.addStyles();
        this.generateIcons();

        return () => this.cleanup();
    }

    addStyles() {
        if (this.styleAdded) return;

        const style = document.createElement('style');
        style.id = 'floating-icons-styles';
        style.textContent = `
            .floating-icon {
                position: fixed;
                z-index: -1;
                opacity: 0;
                pointer-events: none;
                animation: floatIcon 25s infinite linear;
                font-size: 20px;
                transition: opacity 0.8s ease;
                will-change: transform;
                filter: blur(0.5px);
            }
            
            @keyframes floatIcon {
                0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                25% { transform: translate(40px, -60px) rotate(90deg) scale(1.1); }
                50% { transform: translate(80px, 0) rotate(180deg) scale(1); }
                75% { transform: translate(40px, 60px) rotate(270deg) scale(0.9); }
                100% { transform: translate(0, 0) rotate(360deg) scale(1); }
            }
        `;

        document.head.appendChild(style);
        this.styleAdded = true;
    }

    generateIcons() {
        const iconCount = Math.min(8, Math.floor(window.innerWidth / 250));

        for (let i = 0; i < iconCount; i++) {
            const iconData = CONFIG.icons.list[
                Math.floor(Math.random() * CONFIG.icons.list.length)
            ];

            const icon = document.createElement('i');
            icon.className = `${iconData.class} floating-icon`;

            Object.assign(icon.style, {
                left: `${Math.random() * 85 + 7.5}vw`,
                top: `${Math.random() * 85 + 7.5}vh`,
                color: iconData.color,
                fontSize: `${Math.random() * (CONFIG.icons.maxSize - CONFIG.icons.minSize) + CONFIG.icons.minSize}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 20}s`
            });

            document.body.appendChild(icon);
            this.icons.push(icon);

            // Staggered fade in
            setTimeout(() => {
                icon.style.opacity = CONFIG.icons.opacity;
            }, i * 150);
        }
    }

    cleanup() {
        this.icons.forEach(icon => {
            if (icon.parentNode) {
                icon.parentNode.removeChild(icon);
            }
        });
        this.icons = [];
    }
}

// ==========================================
// 5. ABOUT PAGE MANAGER
// ==========================================
class AboutPage {
    constructor() {
        this.isAboutPage = document.body.classList.contains('about-page');
        this.observers = [];
    }

    init() {
        if (!this.isAboutPage) return;

        this.initBackToTop();
        this.initSkillCards();
        this.initScrollAnimations();
        this.initCardHoverEffects();
        this.initSmoothScroll();
    }

    initBackToTop() {
        const button = document.getElementById('backToTop');
        if (!button) return;

        const updateVisibility = () => {
            button.classList.toggle('active', window.scrollY > 300);
        };

        window.addEventListener('scroll', updateVisibility);
        updateVisibility();

        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    initSkillCards() {
        const skillCards = document.querySelectorAll('.skill-card');
        if (!skillCards.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    this.animateSkillCard(card);
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.2, rootMargin: '50px' });

        skillCards.forEach(card => observer.observe(card));
        this.observers.push(observer);
    }

    animateSkillCard(card) {
        const skillLevel = card.dataset.skill;
        const progressBar = card.querySelector('.skill-progress-bar');
        
        if (progressBar && skillLevel) {
            // Reset and animate
            progressBar.style.width = '0%';
            progressBar.style.transition = 'width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            setTimeout(() => {
                progressBar.style.width = `${skillLevel}%`;
            }, 100);
        }

        card.classList.add('animated');
    }

    initScrollAnimations() {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
        this.observers.push(observer);
    }

    initCardHoverEffects() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-12px) scale(1.03)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || !href) return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = target.getBoundingClientRect().top + 
                                         window.pageYOffset - 
                                         headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// ==========================================
// 6. COMMON FEATURES MANAGER
// ==========================================
class CommonFeatures {
    static init() {
        this.initSkillProgressBars();
        this.initSmoothScroll();
        this.initLazyLoading();
        this.initFormValidation();
        this.initCurrentYear();
    }

    static initSkillProgressBars() {
        document.querySelectorAll('.skill-card').forEach(card => {
            const skillLevel = card.dataset.skill;
            const progressBar = card.querySelector('.skill-progress-bar');
            
            if (progressBar && skillLevel) {
                progressBar.style.width = `${skillLevel}%`;
            }
        });
    }

    static initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!' || !href) return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    
                    window.scrollTo({
                        top: target.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    static initLazyLoading() {
        if (!('IntersectionObserver' in window)) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        delete img.dataset.src;
                    }
                    
                    // Load srcset if present
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        delete img.dataset.srcset;
                    }
                    
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '100px' });

        document.querySelectorAll('img[data-src], img[data-srcset]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    static initFormValidation() {
        document.querySelectorAll('form[data-validate]').forEach(form => {
            form.addEventListener('submit', function(e) {
                if (!this.checkValidity()) {
                    e.preventDefault();
                    this.classList.add('was-validated');
                }
            });
        });
    }

    static initCurrentYear() {
        document.querySelectorAll('[data-current-year]').forEach(element => {
            element.textContent = new Date().getFullYear();
        });
    }
}

// ==========================================
// 7. PERFORMANCE MANAGER
// ==========================================
class PerformanceManager {
    static init() {
        this.setupVisibilityHandling();
        this.setupPerformanceMonitoring();
    }

    static setupVisibilityHandling() {
        let hiddenTime = 0;
        
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                hiddenTime = Date.now();
                document.dispatchEvent(new CustomEvent('pageHidden'));
            } else {
                const timeHidden = Date.now() - hiddenTime;
                if (timeHidden > 5000) { // 5 seconds
                    location.reload(); // Reload if tab was hidden for too long
                }
                document.dispatchEvent(new CustomEvent('pageVisible'));
            }
        });
    }

    static setupPerformanceMonitoring() {
        // Log performance metrics in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    if ('performance' in window) {
                        const perfData = window.performance.getEntriesByType('navigation')[0];
                        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                }, 0);
            });
        }
    }
}

// ==========================================
// 8. MAIN APPLICATION CONTROLLER
// ==========================================
class App {
    constructor() {
        this.mobileNav = null;
        this.dnaBackground = null;
        this.floatingIcons = null;
        this.aboutPage = null;
        this.cleanupFunctions = [];
        this.isInitialized = false;
    }

    async init() {
        if (this.isInitialized) return;

        try {
            // Initialize core features
            this.mobileNav = new MobileNavigation();
            CommonFeatures.init();
            PerformanceManager.init();

            // Initialize visual effects with delay
            await this.delay(CONFIG.performance.animationDelay);
            
            this.dnaBackground = new DNABackground();
            this.floatingIcons = new FloatingIcons();
            
            const dnaCleanup = this.dnaBackground.init();
            const iconsCleanup = this.floatingIcons.init();
            
            if (dnaCleanup) this.cleanupFunctions.push(dnaCleanup);
            if (iconsCleanup) this.cleanupFunctions.push(iconsCleanup);

            // Initialize page-specific features
            this.aboutPage = new AboutPage();
            this.aboutPage.init();

            // Mark as loaded
            await this.delay(300);
            document.body.classList.add('loaded');
            
            // Dispatch initialization event
            document.dispatchEvent(new CustomEvent('appInitialized'));
            
            this.isInitialized = true;
            console.log('App initialized successfully');
            
        } catch (error) {
            console.error('App initialization error:', error);
        }
    }

    cleanup() {
        // Run cleanup functions
        this.cleanupFunctions.forEach(cleanup => {
            if (typeof cleanup === 'function') cleanup();
        });
        this.cleanupFunctions = [];

        // Cleanup page-specific features
        if (this.aboutPage) {
            this.aboutPage.cleanup();
        }

        this.isInitialized = false;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    reinitialize() {
        this.cleanup();
        this.init();
    }
}

// ==========================================
// 9. GLOBAL INITIALIZATION
// ==========================================
let app = null;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app = new App();
        app.init();
    });
} else {
    app = new App();
    app.init();
}

// Handle page visibility
document.addEventListener('pageHidden', () => {
    if (app) app.cleanup();
});

document.addEventListener('pageVisible', () => {
    if (app && !app.isInitialized) app.init();
});

// Handle beforeunload
window.addEventListener('beforeunload', () => {
    if (app) app.cleanup();
});

// Handle errors
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // Here you could send errors to a tracking service
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ==========================================
// 10. PUBLIC API
// ==========================================
window.PortfolioApp = {
    getInstance: () => app,
    reinitialize: () => app?.reinitialize(),
    toggleMenu: () => app?.mobileNav?.toggleMenu(),
    isMenuOpen: () => app?.mobileNav?.isMenuOpen() || false
};

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        App,
        MobileNavigation,
        DNABackground,
        FloatingIcons,
        AboutPage,
        CommonFeatures,
        PortfolioApp: window.PortfolioApp
    };
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// burgor button code
// Mobile Navigation
function initMobileNavigation() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const body = document.body;
    
    console.log('Initializing mobile navigation...'); // Debug log
    console.log('Burger element:', burger); // Debug log
    console.log('Nav element:', nav); // Debug log

    if (!burger || !nav) {
        console.error('Burger or Nav element not found!');
        return;
    }

    // Toggle menu function
    function toggleMenu() {
        console.log('Toggle menu clicked'); // Debug log
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    // Close menu function
    function closeMenu() {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    }

    // Burger click event
    burger.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        toggleMenu();
    });

    // Close menu when clicking on links
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu on window resize (if resizing to desktop)
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                closeMenu();
            }
        }, 250);
    });

    console.log('Mobile navigation initialized successfully'); // Debug log
}