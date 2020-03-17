const mobileToggle = document.querySelector('.navigation__burger');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        document.querySelector('.navigation-menu').classList.toggle('visible');
        document.querySelector('body').classList.toggle('overflow--disable');
        mobileToggle.classList.toggle('active');
    });

}