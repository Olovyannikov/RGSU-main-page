import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs]);
export default () => {
    let galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 2,
        slidesPerView: 4,
        loop: true,
        loopedSlides: 4, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1024: {
                slidesPerView: 6,
            }
        }
    });
    let galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    let slider = new Swiper('.slider__block', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    })
}
