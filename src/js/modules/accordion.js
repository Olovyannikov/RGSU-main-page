export default () => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        for (let i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false');
            items[i].onclick = () => {
                items[i].classList.toggle('accordion-button--active')
            }
        }

        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }


    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}
