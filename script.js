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
        <li class="expandable">
            <span class="expandable-title">
                <span class="title-text">TODOS OS PRODUTOS ▼</span>
            </span>
            <ul class="sub-menu">
                <li><a href="#">CAMISETAS</a></li>
                <li><a href="#">CROPPED</a></li>
                <li><a href="#">MOLETONS</a></li>
                <li><a href="#">BONÉS</a></li>
            </ul>
        </li>
        <li><a href="#">TROCAS E DEVOLUÇÕES</a></li>
        <li><a href="#">SOBRE A JSMN</a></li>
    </ul>
`;
menu.style.display = 'none';
document.body.appendChild(menu);

const subMenu = menu.querySelector('.sub-menu');
subMenu.style.display = 'none';

menuIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'block';
    if (menu.style.display === 'block') {
        showOverlay();
        menu.classList.add('hide');
        setTimeout(() => {
            menu.classList.remove('hide'); 
        }, 200);
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        setTimeout(() => {
            menu.classList.remove('hide');
        }, 300);
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
    </div>
    <p>Seu carrinho está vazio!</p>
    <button class="btn-buscar-produtos">BUSCAR PRODUTOS</button>
`;
cartMenu.style.display = 'none';
document.body.appendChild(cartMenu);

cartIcon.addEventListener('click', () => {
    cartMenu.style.display = cartMenu.style.display === 'none' ? 'block' : 'block';
    if (cartMenu.style.display === 'block') {
        showOverlay();
        cartMenu.classList.add('hide');
        setTimeout(() => {
            cartMenu.classList.remove('hide'); 
        }, 200);
        cartMenu.classList.add('show');
    } else {
        cartMenu.classList.remove('show');
        cartMenu.classList.add('hide');
        setTimeout(() => {
            cartMenu.style.display = 'none'; 
        }, 300);
        hideOverlay();
    }
});

document.querySelector('.close-cart').addEventListener('click', () => {
    cartMenu.classList.remove('show');
    cartMenu.classList.add('hide');
    setTimeout(() => {
        cartMenu.style.display = 'none'; // Opcional: oculta após a animação
    }, 300);
    hideOverlay();
});

overlay.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
        setTimeout(() => {
            menu.classList.remove('hide'); 
        }, 300);
    }
    if (cartMenu.classList.contains('show')) {
        cartMenu.classList.remove('show');
        cartMenu.classList.add('hide');
        setTimeout(() => {
            cartMenu.style.display = 'none'; // Opcional: oculta após a animação
        }, 300);
    }
    hideOverlay();
});
const expandableTitle = menu.querySelector('.expandable-title');

expandableTitle.addEventListener('click', () => {
    const isExpanded = subMenu.style.display === 'block';
    subMenu.style.display = isExpanded ? 'none' : 'block';
    expandableTitle.querySelector('.arrow').textContent = isExpanded ? '▼' : '▲';
});