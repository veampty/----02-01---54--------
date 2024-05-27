document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.load');

    function lazyLoad() {
        lazyImages.forEach(image => {
            if (image.offsetTop < window.innerHeight + window.scrollY) {
                image.setAttribute('src', image.getAttribute('data-source'));
                image.classList.remove('load');
            } 
        });
    }

    lazyLoad();

    document.addEventListener('scroll', lazyLoad);
});
