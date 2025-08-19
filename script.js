function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const sidebarTitle = document.getElementById('sidebar-title');
    
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
    
    // Hide sidebar title when collapsed
    sidebarTitle.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'block';
}