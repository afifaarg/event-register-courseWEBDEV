document.addEventListener('DOMContentLoaded', () => {
    const toggleCarouselButton = document.getElementById('toggle-carousel');
    const galleryGrid = document.getElementById('gallery-grid');
    const carousel = document.getElementById('carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    toggleCarouselButton.addEventListener('click', () => {
        if (galleryGrid.style.display === 'none') {
            galleryGrid.style.display = 'grid';
            carousel.style.display = 'none';
            toggleCarouselButton.textContent = 'Afficher en tant que carrousel';
        } else {
            galleryGrid.style.display = 'none';
            carousel.style.display = 'flex';
            toggleCarouselButton.textContent = 'Afficher en tant que grille';
        }
    });

    const showSlide = (index) => {
        carouselItems.forEach((item, i) => {
            item.style.transform = `translateX(${-100 * index}%)`;
        });
    };

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    });
});
