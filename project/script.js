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

    if (window.scrollY > mainImageHeight && freteGratisPopup.classList.contains('hidden')) {
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

const overlay = document.querySelector('.overlay');

const freteGratisPopup = document.querySelector('.frete-gratis');
const closeFreteGratisPopup = document.querySelector('.frete-gratis .close-popup');

closeFreteGratisPopup.addEventListener('click', () => {
    freteGratisPopup.classList.add('hidden');
});

function showOverlay() {
    overlay.style.display = 'flex';
}

function hideOverlay() {
    overlay.style.display = 'none';
}


const menuIcon = document.querySelector('.menu-icon');
const menu = document.createElement('div');
menu.classList.add('menu');
menu.innerHTML = `
    <ul>
        <li><a href="#">TODOS OS PRODUTOS</a></li>
        <li><a href="#">TROCAS E DEVOLUÇÕES</a></li>
        <li><a href="#">SOBRE A JSMN</a></li>
    </ul>
`;
menu.style.display = 'none';
document.body.appendChild(menu);

menuIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    if (menu.style.display === 'block') {
        showOverlay();
    } else {
        hideOverlay();
    }
});

const userIcon = document.querySelector('.user-icon');
userIcon.addEventListener('click', () => {
    window.location.href = '/user-profile.html'; 
});

const cartIcon = document.querySelector('.cart-icon');
const cartMenu = document.createElement('div');
cartMenu.classList.add('cart-menu');
cartMenu.innerHTML = `
    <div class="cart-header">
        <h2>Carrinho</h2>
        <button class="close-cart">X</button>
        <svg class="svg-carrinho" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.25 21.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M0 3a.75.75 0 01.75-.75h1.577A1.5 1.5 0 013.77 3.338L4.53 6h16.256a.75.75 0 01.72.956l-2.474 8.662a2.25 2.25 0 01-2.163 1.632H7.88a2.25 2.25 0 01-2.163-1.632l-2.47-8.645a.738.738 0 01-.01-.033l-.91-3.19H.75A.75.75 0 010 3zm4.959 4.5l2.201 7.706a.75.75 0 00.721.544h8.988a.75.75 0 00.72-.544L19.792 7.5H4.96z"></path></svg>
    </div>
    <p>Seu carrinho está vazio!</p>
    <button class="btn-buscar-produtos">BUSCAR PRODUTOS</button>
`;
cartMenu.style.display = 'none';
document.body.appendChild(cartMenu);

cartIcon.addEventListener('click', () => {
    cartMenu.style.display = 'block';
    showOverlay();
});

document.querySelector('.close-cart').addEventListener('click', () => {
    cartMenu.style.display = 'none';
    hideOverlay();
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    menu.style.display = 'none';
    cartMenu.style.display = 'none';
    hideOverlay();
});