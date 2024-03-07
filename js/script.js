const mobileMenu = document.querySelector('.burger_menu');
const navList = document.querySelector('.nav_list');
const bodyScroll = document.querySelector('body');
const mobileMenuLinks = document.querySelectorAll('.nav_link');
const headerBtn = document.querySelectorAll('.header_btn');

function closeMenu() {
    if (window.innerWidth > 968) {
        mobileMenu.classList.remove('burger_menu-active');
        navList.classList.remove('nav_list-active');
        headerBtn.forEach(btn => {
            btn.classList.remove('header_btn-active');
        });
        bodyScroll.classList.remove('scroll');
    }
}

function toggleMenu() {
    mobileMenu.classList.toggle('burger_menu-active');
    navList.classList.toggle('nav_list-active');
    headerBtn.forEach(btn => {
        btn.classList.toggle('header_btn-active');});
    bodyScroll.classList.toggle('scroll');
    if (mobileMenu.classList.contains('burger_menu-active')) {
        window.scrollTo(0, 0);
    }
}

mobileMenu.addEventListener('click', toggleMenu);

mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', closeMenu);
window.addEventListener('load', () => {
    closeMenu();
    window.scrollTo(0, 0);
});