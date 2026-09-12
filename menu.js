function loadMenu(basePath) {
    const navHTMl = `
    <nav class="main-nav">
        <!-- Hamburger button for mobile navigation -->
        <button class="mobile-menu-toggle" aria-expanded="false" aria-label="Toggle menu">
            <span class="hamburger-icon">☰</span>
        </button>
    
        <!-- Main Navigation Menu -->
        <ul class="nav-list">
            <li><a href="${basePath}index.html">Home</a></li>
            <li class="dropdown-nav">
                <a href="#" class="nav-dropdown-toggle">Assignments</a>
                <ul class="dropdown-content-nav">
                    <li><a href="${basePath}index.html">Assignment 1</a></li>
                    <li><a href="${basePath}assignments/assignment2.html">Assignment 2</a></li>
                    <li><a href="${basePath}assignments/assignment3.html">Assignment 3</a></li>
                </ul>
            </li>
            <li class="dropdown-nav">
                <a href="#" class="nav-dropdown-toggle">Useful Links</a>
                <ul class="dropdown-content-nav">
                    <li><a href="https://land-book.com/" target="_blank">Website Design Inspiration</a>
                </ul>
            </li>
        </ul>
    </nav>
    `;

    // Inject navigation into nav-placeholder element
    document.getElementById("nav-placeholder").innerHTML = navHTMl;

    // Mobile hamburger menu event listeners
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

    // Toggle menu on moble
    if (toggleBtn && navList) {
        toggleBtn.addEventListener('click', () => {
            navList.classList.toggle('is-open');
            const isExpanded = navList.classList.contains('is-open');
            toggleBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Toggle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                const parentLi = toggle.parentElement;
                parentLi.classList.toggle('dropdown-is-open');
            }
        });
    });

    // Close mobile menu when user clicks outside of menu
    document.addEventListener('click', (event) => {
        const navContainer = document.querySelector('.main-nav');

        // If menu is open and click happens outside of nav container
        if (navList && navList.classList.contains('is-open') && !navContainer.contains(event.target)) {
            // Close the main menu
            navList.classList.remove('is-open');
            toggleBtn.setAttribute('aria-expanded', 'false');

            document.querySelectorAll('.dropdown-is-open').forEach(openDropdown => {
                openDropdown.classList.remove('dropdown-is-open');
            });
        }
    });
}