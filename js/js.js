function initialise() {
    const headerIcon = document.getElementById("header-menu-show");
    headerIcon.addEventListener("click", showSideMenu);

    const headerIcon2 = document.getElementById("header-menu-hide")
    headerIcon2.addEventListener("click", hideSideMenu);
}

function showSideMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.display = "block";
}

function hideSideMenu() {
    const sideMenu2 = document.getElementById("side-menu");
    sideMenu2.style.display = "none";
}

initialise();