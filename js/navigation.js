// ========================================
// SunZero Dashboard — Navigation Logic
// ========================================

// Role-based redirect on login
function handleLogin(event) {
  event.preventDefault();

  // Get selected role
  const selectedRole = document.querySelector('input[name="role"]:checked');

  if (!selectedRole) {
    alert("Please select a role");
    return;
  }

  const role = selectedRole.value;

  // Redirect based on role
  switch (role) {
    case "customer":
      window.location.href = "pages/stakeholder/overview.html";
      break;
    case "investor":
      window.location.href = "pages/investor/portfolio.html";
      break;
    case "admin":
      window.location.href = "pages/admin/fleet.html";
      break;
    default:
      window.location.href = "pages/stakeholder/overview.html";
  }
}

// Mobile sidebar toggle
function toggleMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (sidebar) {
    sidebar.classList.toggle("translate-x-0");
    sidebar.classList.toggle("-translate-x-full");
  }

  if (overlay) {
    overlay.classList.toggle("hidden");
  }
}

// Close mobile sidebar
function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (sidebar) {
    sidebar.classList.remove("translate-x-0");
    sidebar.classList.add("-translate-x-full");
  }

  if (overlay) {
    overlay.classList.add("hidden");
  }
}

// Set active sidebar link based on current page
function setActiveSidebarLink() {
  const currentPath = window.location.pathname;
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  sidebarLinks.forEach((link) => {
    link.classList.remove("sidebar-link-active");
    link.classList.add("text-gray-500");

    if (
      link.getAttribute("href") &&
      currentPath.includes(link.getAttribute("href"))
    ) {
      link.classList.add("sidebar-link-active");
      link.classList.remove("text-gray-500");
    }
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  setActiveSidebarLink();

  // Add page fade-in
  const mainContent = document.querySelector(".page-content");
  if (mainContent) {
    mainContent.style.opacity = "0";
    setTimeout(() => {
      mainContent.style.opacity = "1";
    }, 50);
  }
});
