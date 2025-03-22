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