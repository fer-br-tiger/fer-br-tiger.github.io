// 1. Base de datos simulada de productos
// Nota: Uso imágenes de placeholder.com para la demo. 
const products = [
    {
        id: 1,
        name: "Lápiz Infinito",
        price: 3000,
        description: "Lápiz infinito con aspecto de lapicera. Hermoso diseño.",
        images: ["img/lapiz.webp", "https://placehold.co/600x600/6a11cb/white?text=Lápiz+2", "https://placehold.co/600x600/orange/white?text=Lápiz+3"]
    },
    {
        id: 2,
        name: "Lapicera Multicolor",
        price: 3000,
        description: "Extraordinarias lapiceras con múltiples colores (rojo, verde, celeste...).",
        images: ["img/lapiceras.webp", "https://placehold.co/600x600/darkgreen/white?text=Lapiceras+2"]
    },
    {
        id: 3,
        name: "Gomas X2",
        price: 2000,
        description: "Combo gomas de colores, incluye una triangular",
        images: ["img/gomas.webp", "https://placehold.co/600x600/darkred/white?text=Gomas+2"]
    },
    {
        id: 4,
        name: "Cartuchera",
        price: 6800,
        description: "Cartuchera de goma.",
        images: ["img/cartuchera.webp", "https://placehold.co/600x600/violet/white?text=Cartuchera"]
    },
    {
        id: 5,
        name: "Acuarela",
        price: 6000,
        description: "Hermosos colores de acuarela (12 colores).",
        images: ["img/acuarela.webp", "img/acuarela2.webp"]
    },
    {
        id: 6,
        name: "Lápices Giotto",
        price: 6000,
        description: "Pack de 12 lápices de colores, reforzados con minas resistentes.",
        images: ["img/lapices.webp"]
    }
];

const container = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

// 2. Función para renderizar productos
function renderProducts(items) {
    container.innerHTML = '';

    if (items.length === 0) {
        noResults.classList.remove('d-none');
        return;
    } else {
        noResults.classList.add('d-none');
    }

    items.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';

        col.innerHTML = `
                    <div class="card product-card h-100 shadow-sm" onclick="openProductModal(${product.id})">
                        <img src="${product.images[0]}" class="card-img-top" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">${product.name}</h5>
                            <p class="card-text text-muted text-truncate">${product.description}</p>
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <span class="price-tag">$${product.price.toLocaleString('es-AR')}</span>
                                <button class="btn btn-outline-primary btn-sm">Ver más</button>
                            </div>
                        </div>
                    </div>
                `;
        container.appendChild(col);
    });
}

// 3. Función para abrir el Modal con detalles
window.openProductModal = function (id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    // Llenar datos básicos
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalPrice').textContent = `$${product.price.toLocaleString('es-AR')}`;
    document.getElementById('modalDescription').textContent = product.description;

    // Configurar botón WhatsApp específico del modal
    const waMsg = `Hola. Me interesa el producto "${product.name}". Necesito ayuda...`;
    const waLink = `https://wa.me/543888614081?text=${encodeURIComponent(waMsg)}`;
    document.getElementById('modalWhatsAppBtn').href = waLink;

    // Generar Carousel de imágenes
    const carouselInner = document.getElementById('modalCarouselInner');
    carouselInner.innerHTML = ''; // Limpiar anterior

    product.images.forEach((img, index) => {
        const isActive = index === 0 ? 'active' : '';
        const item = `
                    <div class="carousel-item ${isActive}">
                        <img src="${img}" class="d-block w-100 rounded" alt="Imagen ${index + 1}">
                    </div>
                `;
        carouselInner.insertAdjacentHTML('beforeend', item);
    });

    productModal.show();
}

// 4. Evento de búsqueda (Filtro)
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

// Cargar productos al inicio
renderProducts(products);