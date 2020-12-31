export default () => {
    const items = document.querySelectorAll(".accordion button");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            items[i].classList.toggle('accordion-button--active')
        });
    }

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');

        }

        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }


    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}
