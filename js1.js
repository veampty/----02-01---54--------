
document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy-load');

    function lazyLoad() {
        lazyImages.forEach(image => {
            if (image.offsetTop < window.innerHeight + window.scrollY) {
                image.setAttribute('src', image.getAttribute('data-source'));
                image.classList.remove('lazy-load');
            } else if (image.offsetTop > window.innerHeight + window.scrollY) {
        image.removeAttribute("src");
      }
        });
    }

    lazyLoad();

    document.addEventListener('scroll', lazyLoad);
});
