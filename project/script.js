const productImages = document.querySelectorAll('.product-images-swap');

productImages.forEach((product) => {
    const frontImage = product.querySelector('.front-image');
    const backImage = product.querySelector('.back-image');

    product.addEventListener('mouseover', () => {
        frontImage.style.display = 'none';
        backImage.style.display = 'block';
    });

    product.addEventListener('mouseout', () => {
        frontImage.style.display = 'block';
        backImage.style.display = 'none';
    });
});

const scrollTopButton = document.querySelector('.scroll-top');
const mainImage = document.querySelector('.imagem-principal');

window.addEventListener('scroll', () => {
    const mainImageHeight = mainImage.offsetHeight;

    if (window.scrollY > mainImageHeight) {
        scrollTopButton.classList.add('show'); 
    } else {
        scrollTopButton.classList.remove('show'); 
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const freteGratisPopup = document.querySelector('.frete-gratis');
const closeFreteGratisPopup = document.querySelector('.frete-gratis .close-popup');

closeFreteGratisPopup.addEventListener('click', () => {
    freteGratisPopup.classList.add('hidden');
});