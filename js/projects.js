// projects.js - Projects Page JavaScript

// Project Data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: ["live", "fullstack"],
        tech: ["Laravel", "Vue.js", "MySQL", "Redis", "Stripe API"],
        date: "Mar 2024",
        status: "live",
        liveUrl: "https://ecommerce.example.com",
        githubUrl: "https://github.com/username/ecommerce",
        features: ["Payment Gateway Integration", "Admin Dashboard", "Real-time Inventory Updates", "User Authentication", "Order Tracking"],
        client: "Tech Solutions Inc.",
        complexity: 4 ,
        estimatedHours: 320,
        teamSize: 1 ,
        challenges: ["Scalability", "Payment Integration", "Real-time Updates"]
    },
    {
        id: 2,
        title: "local food rescue platform",
        description: "A task management application with real-time collaboration, drag & drop interface, and file sharing capabilities.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: ["progress", "fullstack"],
        tech: ["Node.js", "React", "MongoDB", "Socket.io", "JWT","Express.js"],
        date: "In Progress",
        status: "progress",
        progress: 75,
        githubUrl: "https://github.com/username/task-manager",
        features: ["Real-time Updates", "Drag & Drop Interface", "Team Collaboration", "File Sharing", "Notifications"],
        client: "Internal Project",
        complexity: 3,
        estimatedHours: 180,
        teamSize: 2 ,
        challenges: ["Real-time Sync", "File Handling", "User Permissions"]
    },
    // {
        // id: 3,
        // title: "Portfolio Website",
        // description: "Modern portfolio website with smooth animations, dark mode, and contact form integration.",
        // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        // category: ["live", "frontend"],
        // tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Formspree"],
        // date: "Feb 2024",
        // status: "live",
        // liveUrl: "https://portfolio.dev",
        // githubUrl: "https://github.com/username/portfolio",
        // features: ["Dark Mode Toggle", "Smooth Animations", "Contact Form", "Responsive Design", "Fast Loading"],
        // complexity: 2,
        // estimatedHours: 120,
        // teamSize: 1,
        // challenges: ["Performance", "Cross-browser Compatibility", "SEO Optimization"]
    // },
    {
        id: 4,
        title: "Todo Manager",
        description: "A simple yet powerful todo management application with drag & drop functionality and real-time updates.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: ["live", "backend"],
        tech: ["Js", "HTML5", "CSS", "localstorage", "Sweatalert"],
        date: "Jan 2024",
        status: "live",
        liveUrl: "https://mansooralisolangi.github.io/todo-manager-localstorage-",
        githubUrl: "https://github.com/username/api-platform",
        features: ["Rate Limiting", "JWT Authentication", "API Documentation", "WebSocket Support", "Error Handling"],
        complexity: 4,
        estimatedHours: 5,
        teamSize: 1 ,
        challenges: ["Security", "Rate Limiting", "Documentation Generation"]
    },
    // {
    //     id: 5,
    //     title: "Real Estate Marketplace",
    //     description: "Property listing platform with advanced search filters, virtual tours, and agent management.",
    //     image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["progress", "fullstack"],
    //     tech: ["Laravel", "React", "Google Maps API", "Stripe", "Cloudinary"],
    //     date: "In Progress",
    //     status: "progress",
    //     progress: 60,
    //     githubUrl: "https://github.com/username/real-estate",
    //     features: ["Virtual Property Tours", "Advanced Search Filters", "Agent Dashboard", "Payment Processing", "Property Reviews"],
    //     complexity: 5,
    //     estimatedHours: 400,
    //     teamSize: 4,
    //     challenges: ["Map Integration", "Image Processing", "Payment Gateway"]
    // },
    // {
    //     id: 6,
    //     title: "Fitness Tracker App",
    //     description: "Mobile-first fitness tracking application with workout plans, progress charts, and social features.",
    //     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["live", "frontend"],
    //     tech: ["React Native", "Redux", "Chart.js", "Firebase", "Apple Health"],
    //     date: "Dec 2023",
    //     status: "live",
    //     liveUrl: "https://fitness.app",
    //     githubUrl: "https://github.com/username/fitness-app",
    //     features: ["Workout Plans", "Progress Tracking Charts", "Social Feed", "Health Integration", "Goal Setting"],
    //     complexity: 3,
    //     estimatedHours: 200,
    //     teamSize: 2,
    //     challenges: ["Mobile Performance", "Health API Integration", "Offline Support"]
    // },
    // {
    //     id: 7,
    //     title: "Inventory Management",
    //     description: "Enterprise inventory management system with barcode scanning, reporting, and multi-warehouse support.",
    //     image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["live", "backend"],
    //     tech: ["Django", "React", "PostgreSQL", "Celery", "Docker"],
    //     date: "Nov 2023",
    //     status: "live",
    //     liveUrl: "https://inventory.example.com",
    //     githubUrl: "https://github.com/username/inventory",
    //     features: ["Barcode Scanning", "Multi-warehouse Support", "Reporting Dashboard", "Automated Alerts", "Supplier Management"],
    //     complexity: 4,
    //     estimatedHours: 350,
    //     teamSize: 3,
    //     challenges: ["Barcode Integration", "Real-time Updates", "Scalability"]
    // },
    // {
    //     id: 8,
    //     title: "Learning Management System",
    //     description: "Online learning platform with course management, video streaming, and student progress tracking.",
    //     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["progress", "fullstack"],
    //     tech: ["Laravel", "Vue.js", "MySQL", "AWS S3", "FFmpeg"],
    //     date: "In Progress",
    //     status: "progress",
    //     progress: 45,
    //     githubUrl: "https://github.com/username/lms",
    //     features: ["Video Streaming", "Course Management", "Progress Tracking", "Certificates Generation", "Discussion Forums"],
    //     complexity: 5,
    //     estimatedHours: 450,
    //     teamSize: 4,
    //     challenges: ["Video Processing", "Content Delivery", "Student Analytics"]
    // },
    // {
    //     id: 9,
    //     title: "Weather Dashboard",
    //     description: "Real-time weather dashboard with multiple location support, forecasts, and historical data.",
    //     image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["live", "frontend"],
    //     tech: ["React", "Chart.js", "OpenWeather API", "PWA", "Local Storage"],
    //     date: "Oct 2023",
    //     status: "live",
    //     liveUrl: "https://weather.example.com",
    //     githubUrl: "https://github.com/username/weather-dashboard",
    //     features: ["Real-time Weather Updates", "Multiple Locations", "Forecast Charts", "PWA Support", "Historical Data"],
    //     complexity: 2,
    //     estimatedHours: 150,
    //     teamSize: 1,
    //     challenges: ["API Rate Limits", "Data Visualization", "Offline Functionality"]
    // },
    // {
    //     id: 10,
    //     title: "Chat Application",
    //     description: "Real-time chat application with video calls, file sharing, and end-to-end encryption.",
    //     image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["progress", "fullstack"],
    //     tech: ["Node.js", "React", "Socket.io", "WebRTC", "MongoDB"],
    //     date: "In Progress",
    //     status: "progress",
    //     progress: 80,
    //     githubUrl: "https://github.com/username/chat-app",
    //     features: ["Video & Voice Calls", "File Sharing", "End-to-end Encryption", "Group Chats", "Message History"],
    //     complexity: 4,
    //     estimatedHours: 380,
    //     teamSize: 3,
    //     challenges: ["Real-time Communication", "Encryption", "Media Streaming"]
    // },
    // {
    //     id: 11,
    //     title: "Healthcare Portal",
    //     description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
    //     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["live", "fullstack"],
    //     tech: ["Laravel", "React", "MySQL", "Twilio", "Stripe"],
    //     date: "Sep 2023",
    //     status: "live",
    //     liveUrl: "https://healthcare.example.com",
    //     githubUrl: "https://github.com/username/healthcare",
    //     features: ["Appointment Booking", "Medical Records Management", "Telemedicine", "Billing System", "Prescription Management"],
    //     complexity: 5,
    //     estimatedHours: 420,
    //     teamSize: 4,
    //     challenges: ["HIPAA Compliance", "Video Conferencing", "Payment Integration"]
    // },
    // {
    //     id: 12,
    //     title: "Food Delivery Service",
    //     description: "Food ordering and delivery platform with real-time tracking, restaurant management, and reviews.",
    //     image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //     category: ["progress", "fullstack"],
    //     tech: ["Node.js", "React Native", "MongoDB", "Google Maps API", "Firebase"],
    //     date: "In Progress",
    //     status: "progress",
    //     progress: 55,
    //     githubUrl: "https://github.com/username/food-delivery",
    //     features: ["Real-time Order Tracking", "Restaurant Dashboard", "Customer Reviews", "Payment Gateway", "Delivery Management"],
    //     complexity: 4,
    //     estimatedHours: 360,
    //     teamSize: 3,
    //     challenges: ["Real-time Tracking", "Payment Processing", "Multi-platform Support"]
    // }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('projectSearch');
const emptyState = document.getElementById('emptyState');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const layoutButtons = document.querySelectorAll('.layout-btn');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.querySelector('.modal-body');

// State variables
let currentFilter = 'all';
let currentSearch = '';
let currentLayout = 'grid';
let visibleProjects = 6; // Show 6 projects initially (2 rows of 3)
let filteredProjects = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
    setupEventListeners();
    updateStats();
});

// Initialize projects
function initializeProjects() {
    filteredProjects = [...projects];
    renderProjects();
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            visibleProjects = 6; // Reset to 6 when filter changes
            filterProjects();
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        visibleProjects = 6; // Reset to 6 when search changes
        filterProjects();
    });

    // Layout buttons
    layoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            layoutButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentLayout = button.dataset.layout;
            updateLayout();
        });
    });

    // Load more button
    loadMoreBtn.addEventListener('click', () => {
        visibleProjects += 3; // Add 3 more projects
        renderProjects();
        
        // Scroll to newly loaded projects
        setTimeout(() => {
            const cards = document.querySelectorAll('.project-card');
            if (cards.length > 0) {
                cards[Math.min(visibleProjects - 1, cards.length - 1)].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }, 100);
    });

    // Modal close
    modalClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal on outside click
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Update stats in hero section
function updateStats() {
    const totalProjects = projects.length;
    const liveProjects = projects.filter(p => p.status === 'live').length;
    const progressProjects = projects.filter(p => p.status === 'progress').length;
    
    // Get unique technologies
    const allTech = projects.flatMap(p => p.tech);
    const uniqueTech = [...new Set(allTech)].length;

    // Update stats
    const statElements = document.querySelectorAll('.stat h3');
    if (statElements.length >= 4) {
        statElements[0].textContent = totalProjects + '+';
        statElements[1].textContent = liveProjects;
        statElements[2].textContent = progressProjects;
        statElements[3].textContent = uniqueTech + '+';
    }
}

// Filter projects
function filterProjects() {
    filteredProjects = projects;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProjects = filteredProjects.filter(project =>
            project.category.includes(currentFilter)
        );
    }

    // Apply search filter
    if (currentSearch) {
        filteredProjects = filteredProjects.filter(project =>
            project.title.toLowerCase().includes(currentSearch) ||
            project.description.toLowerCase().includes(currentSearch) ||
            project.tech.some(tech => tech.toLowerCase().includes(currentSearch))
        );
    }

    // Show/hide empty state
    if (filteredProjects.length === 0) {
        emptyState.style.display = 'block';
        loadMoreContainer.style.display = 'none';
    } else {
        emptyState.style.display = 'none';
        // Show load more button if there are more projects to show
        if (filteredProjects.length > visibleProjects) {
            loadMoreContainer.style.display = 'block';
        } else {
            loadMoreContainer.style.display = 'none';
        }
    }

    // Render filtered projects (limited to visibleProjects count)
    renderProjects();
}

// Render projects to grid
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    // Get projects to show (limited by visibleProjects)
    const projectsToShow = filteredProjects.slice(0, visibleProjects);

    projectsToShow.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Update load more button visibility
    updateLoadMoreButton();
}

// Create project card HTML
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);
    card.setAttribute('data-status', project.status);
    card.setAttribute('data-category', project.category.join(' '));
    
    // Add animation delay
    card.style.animationDelay = `${index * 0.1}s`;

    // Progress bar for in-progress projects
    let progressBar = '';
    if (project.status === 'progress' && project.progress) {
        progressBar = `
            <div class="progress-container">
                <div class="progress-label">
                    <span>Progress</span>
                    <span>${project.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
            </div>
        `;
    }

    // Complexity stars
    const complexityStars = '★'.repeat(project.complexity) + '☆'.repeat(5 - project.complexity);

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                <a href="#" class="overlay-btn" onclick="openProjectModal(${project.id})">
                    <i class="fas fa-eye"></i>
                </a>
                ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" class="overlay-btn">
                    <i class="fab fa-github"></i>
                </a>
                ` : ''}
            </div>
        </div>
        <div class="project-badge ${project.status === 'live' ? 'badge-live' : 'badge-progress'}">
            ${project.status === 'live' ? 'Live' : 'In Progress'}
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
            ${progressBar}
            
            <div class="project-meta">
                <span class="complexity">
                    <i class="fas fa-chart-line"></i>
                    ${complexityStars}
                </span>
                <span class="hours">
                    <i class="fas fa-clock"></i>
                    ${project.estimatedHours} hrs
                </span>
                <span class="team">
                    <i class="fas fa-users"></i>
                    ${project.teamSize} ${project.teamSize > 1 ? 'members' : 'member'}
                </span>
            </div>
            
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-footer">
                <div class="project-date">
                    <i class="far fa-calendar"></i> ${project.date}
                </div>
                <div class="project-links">
                    ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> View Live
                    </a>
                    ` : `
                    <a href="#" class="project-link" onclick="openProjectModal(${project.id})">
                        <i class="fas fa-info-circle"></i> View Details
                    </a>
                    `}
                </div>
            </div>
        </div>
    `;

    // Add click event for modal
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.overlay-btn') && !e.target.closest('.project-link')) {
            openProjectModal(project.id);
        }
    });

    return card;
}

// Update layout
function updateLayout() {
    const grid = document.querySelector('.projects-grid');
    if (currentLayout === 'grid') {
        grid.classList.remove('list-view');
        grid.classList.add('grid-view');
    } else {
        grid.classList.remove('grid-view');
        grid.classList.add('list-view');
    }
}

// Update load more button visibility
function updateLoadMoreButton() {
    if (filteredProjects.length > visibleProjects) {
        loadMoreContainer.style.display = 'block';
    } else {
        loadMoreContainer.style.display = 'none';
    }
}

// Open project modal
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Create complexity stars
    const complexityStars = '★'.repeat(project.complexity) + '☆'.repeat(5 - project.complexity);

    // Create modal content
    modalBody.innerHTML = `
        <div class="modal-project">
            <div class="modal-header">
                <div class="modal-badges">
                    <span class="project-badge ${project.status === 'live' ? 'badge-live' : 'badge-progress'}">
                        ${project.status === 'live' ? 'Live Project' : 'In Progress'}
                    </span>
                    ${project.client ? `<span class="client-badge">${project.client}</span>` : ''}
                    <span class="complexity-badge">
                        <i class="fas fa-chart-line"></i> ${complexityStars}
                    </span>
                </div>
                <h2>${project.title}</h2>
                <p class="modal-description">${project.description}</p>
            </div>

            <div class="modal-image">
                <img src="${project.image}" alt="${project.title}">
            </div>

            <div class="modal-details">
                <div class="detail-section">
                    <h3><i class="fas fa-cogs"></i> Project Details</h3>
                    <div class="detail-grid">
                        <div class="detail-item">
                            <strong>Status:</strong>
                            <span>${project.status === 'live' ? 'Live' : 'In Development'}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Date:</strong>
                            <span>${project.date}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Estimated Hours:</strong>
                            <span>${project.estimatedHours} hours</span>
                        </div>
                        <div class="detail-item">
                            <strong>Team Size:</strong>
                            <span>${project.teamSize} person${project.teamSize > 1 ? 's' : ''}</span>
                        </div>
                        <div class="detail-item">
                            <strong>Complexity:</strong>
                            <span>${complexityStars}</span>
                        </div>
                        ${project.challenges && project.challenges.length > 0 ? `
                        <div class="detail-item">
                            <strong>Challenges:</strong>
                            <span>${project.challenges.join(', ')}</span>
                        </div>
                        ` : ''}
                    </div>
                </div>

                <div class="tech-section">
                    <h3><i class="fas fa-code"></i> Technologies Used</h3>
                    <div class="tech-list">
                        ${project.tech.map(tech => `<span class="tech-tag-large">${tech}</span>`).join('')}
                    </div>
                </div>

                ${project.status === 'progress' && project.progress ? `
                <div class="progress-section">
                    <h3><i class="fas fa-tasks"></i> Development Progress</h3>
                    <div class="progress-details">
                        <div class="progress-bar-large">
                            <div class="progress-fill-large" style="width: ${project.progress}%">
                                <span>${project.progress}%</span>
                            </div>
                        </div>
                        <p class="progress-text">Currently in development - Estimated completion soon</p>
                    </div>
                </div>
                ` : ''}

                <div class="features-section">
                    <h3><i class="fas fa-star"></i> Key Features</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `
                        <li>
                            <i class="fas fa-check-circle"></i>
                            ${feature}
                        </li>
                        `).join('')}
                    </ul>
                </div>
            </div>

            <div class="modal-actions">
                ${project.liveUrl ? `
                <a href="${project.liveUrl}" target="_blank" class="action-btn primary">
                    <i class="fas fa-external-link-alt"></i> Visit Live Site
                </a>
                ` : ''}
                ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" class="action-btn secondary">
                    <i class="fab fa-github"></i> View Source Code
                </a>
                ` : ''}
                <button onclick="closeModal()" class="action-btn outline">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        </div>
    `;

    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Export functions for global use
window.openProjectModal = openProjectModal;
window.closeModal = closeModal;