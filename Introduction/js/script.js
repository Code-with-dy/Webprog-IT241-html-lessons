function switchTab(tabId, element) {
  // 1. Hide all sections
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.add('hidden'));

  // 2. Show the selected section
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.remove('hidden');
  }

  // 3. Remove 'active' class from all nav buttons
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  // 4. Add 'active' class to the clicked button
  if (element) {
    element.classList.add('active');
  }
}
