export default () => {
    let header = document.querySelector(`.js-header`);
    let menuToggler = document.querySelector(`.js-menu-toggler`);
    let menuLinks = document.querySelectorAll(`.js-menu-link`);
    let menuList = document.querySelector(".navigation__list");
    let menuItems = document.querySelectorAll(".navigation__item");
    let backBtn = document.querySelector(".navigation__back");

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].onclick = function () {
            if (menuItems[i].classList.contains("navigation__item--back")) {
                console.log("123");
            } else {
                if (menuItems[i].querySelector(".navigation__list")) {
                    menuItems[i]
                        .querySelector(".navigation__list")
                        .classList.add("navigation__submenu--active");
                }
            }
        };
    }

    if (menuToggler) {
        menuToggler.addEventListener(`click`, function () {
            if (header.classList.contains(`header--menu-opened`)) {
                header.classList.remove(`header--menu-opened`);
                document.body.classList.remove(`menu-opened`);
                menuItems.forEach((item) => {
                    if(menu)
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

    const find = (node, parent) => {
        while (node) {
            if (node.classList.contains(parent)) {
                return node;
            } else {
                node = node.parentElement;
            }
        }

        return null;
    };

    for (let j = 0; j < backBtn.length; j++) {
        backBtn.onclick = () => {
            find(".navigation__back", ".navigation__submenu").classList.remove(
                "navigation__submenu--active"
            );
        };
    }
};
