export default () => {
    let header = document.querySelector(`.js-header`);
    let menuToggler = document.querySelector(`.js-menu-toggler`);
    let menuLinks = document.querySelectorAll(`.js-menu-link`);
    let menuItems = document.querySelectorAll(".navigation__item");
    let backBtn = document.querySelectorAll(".navigation__back");

    for (let x = 0; x < backBtn.length; x++) {
        backBtn[x].onclick = (e) => {
            e.stopPropagation();
            backBtn[x]
                .closest(".navigation__list")
                .classList.remove("navigation__submenu--active");
        };
    }

    if (document.body.offsetWidth < 769) {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = function () {
                if (menuItems[i].querySelector(".navigation__list")) {
                    menuItems[i]
                        .querySelector(".navigation__list")
                        .classList.add("navigation__submenu--active");
                    menuItems[i]
                        .querySelector(".navigation__back")
                        .classList.add("navigation__back--active");
                }
            };
        }
    }

    if (menuToggler) {
        menuToggler.addEventListener(`click`, function () {
            if (header.classList.contains(`header--menu-opened`)) {
                header.classList.remove(`header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
                menuItems.forEach((item) => {
                    if (item.querySelector(".navigation__submenu")) {
                        item.querySelector(
                            ".navigation__submenu"
                        ).classList.remove("navigation__submenu--active");
                    }
                });
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
