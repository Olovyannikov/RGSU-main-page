export default () => {
    let header = document.querySelector(`.js-header`);
    let menuToggler = document.querySelector(`.js-menu-toggler`);
    let menuLinks = document.querySelectorAll(`.js-menu-link`);
    let menuItems = document.querySelectorAll(".navigation__item");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = function () {
            menuItems[i].querySelector(".navigation__list").classList.add('navigation__submenu--active');
        };
    }

    if (menuToggler) {
        menuToggler.addEventListener(`click`, function () {
            if (header.classList.contains(`header--menu-opened`)) {
                header.classList.remove(`header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
                menuItems.forEach(item => {
                    item.querySelector('.navigation__list').classList.remove('navigation__submenu--active')
                })
            } else {
                header.classList.add(`header--menu-opened`);
                document.body.classList.add(`menu-opened`);
            }
        });
    }

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener(`click`, function () {
            if (window.innerWidth < 1025) {
                header.classList.remove(`header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
            }
        });
    }
};
