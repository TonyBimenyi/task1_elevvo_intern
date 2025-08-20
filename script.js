function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarTitle = document.getElementById('sidebar-title');

    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');

    // Sidebar title fades instead of instantly disappearing
    if (sidebar.classList.contains('collapsed')) {
        sidebarTitle.style.opacity = "0";
        sidebarTitle.style.transform = "translateX(-10px)";
    } else {
        sidebarTitle.style.display = "block";
        setTimeout(() => {
            sidebarTitle.style.opacity = "1";
            sidebarTitle.style.transform = "translateX(0)";
        }, 10);
    }
}
