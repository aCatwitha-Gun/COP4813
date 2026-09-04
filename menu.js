function loadMenu(basePath) {
    const navHTMl = `
    <nav class="main-nav">
        <ul>
            <li><a href="${basePath}index.html">Home</a></li>
            <li class="dropdown-nav">
                <a href="#">Assignments</a>
                <ul class="dropdown-content-nav">
                    <li><a href="${basePath}index.html">Assignment 1</a></li>
                    <li><a href="${basePath}Assignments/assignment2.html">Assignment 2</a></li>
                </ul>
            </li>
            <li class="dropdown-nav">
                <a href="#">Useful Links</a>
                <ul class="dropdown-content-nav">
                    <li><a href="https://land-book.com/" target="_blank">Website Design Inspiration</a>
                </ul>
            </li>
        </ul>
    </nav>
    `;

    document.getElementById("nav-placeholder").innerHTML = navHTMl;
}