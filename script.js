// 1. Base de datos simulada de productos
// Nota: Uso imágenes de placeholder.com para la demo. 
const products = [
    {
        id: 1,
        name: "Lápiz Negro Infinito",
        price: 2000,
        info: "(c/u)",
        description: "Lápiz infinito. Hermoso diseño.",
        images: ["img/lapiz.webp", "https://placehold.co/600x600/6a11cb/white?text=Lápiz+2", "https://placehold.co/600x600/orange/white?text=Lápiz+3"]
    },
    {
        id: 2,
        name: "Lapicera Multicolor Kuromi",
        price: 2800,
        info: "(c/u)",
        description: "Extraordinarias lapiceras con múltiples colores (rojo, verde, celeste...).",
        images: ["img/lapiceras.webp", "https://placehold.co/600x600/darkgreen/white?text=Lapiceras+2"]
    },
    {
        id: 3,
        name: "Gomas",
        price: 2200,
        info: "(triangular $1.000, rayada $1.200)",
        description: "Gomas de colores, triangular y rayada",
        images: ["img/gomas.webp", "https://placehold.co/600x600/darkred/white?text=Gomas+2"]
    },
    {
        id: 4,
        name: "Cartuchera Trama",
        price: 5500,
        info: "",
        description: "Cartuchera de goma.",
        images: ["img/cartuchera.webp", "https://placehold.co/600x600/violet/white?text=Cartuchera"]
    },
    {
        id: 5,
        name: "Acuarelas",
        price: 5500,
        info: "",
        description: "Hermosos colores de acuarela (12 colores).",
        images: ["img/acuarela.webp", "img/acuarela2.webp"]
    },
    {
        id: 6,
        name: "Lápices Giotto",
        price: 6500,
        info: "",
        description: "Pack de 12 lápices de colores, reforzados con minas resistentes.",
        images: ["img/lapices.webp"]
    },
    {
        id: 7,
        name: "Lápices Amor",
        price: 4800,
        info: "",
        description: "Pack de 12 lápices de colores.",
        images: ["img/lapices2.webp"]
    },
    {
        id: 8,
        name: "Lápices Trama",
        price: 5500,
        info: "",
        description: "Pack de 12 lápices de colores intensos, suaves al trazar.",
        images: ["img/lapices3.webp"]
    },
    {
        id: 9,
        name: "Lápiz Negro",
        price: 300,
        info: "(c/u, 2X$500 o 3X$800)",
        description: "Lápiz Negro HB con goma.",
        images: ["img/lapiznegro.webp"]
    },
    {
        id: 10,
        name: "Notas Adhesivas Trama",
        price: 3500,
        info: "",
        description: "Señaladores de página autoadhesivos fluo 12x45mm.",
        images: ["img/notasad.webp"]
    },
    {
        id: 11,
        name: "Anotador con espiral tapa dura",
        price: 4200,
        info: "",
        description: "Anotador tapa dura, contiene muchas hojas.",
        images: ["img/notebook.webp", "img/notebook2.webp"]
    },
    {
        id: 12,
        name: "Libreta chica azul",
        price: 2500,
        info: "",
        description: "Libreta chica para anotaciones rápidas, ideal para fácil transporte.",
        images: ["img/libretazul.webp", "img/libretazul2.webp"]
    },
    {
        id: 13,
        name: "Libreta chica rosa",
        price: 2000,
        info: "",
        description: "Libreta chica para anotaciones rápidas, ideal para fácil transporte.",
        images: ["img/libretarosa.webp"]
    },
    {
        id: 14,
        name: "Anotador Mediano",
        price: 3000,
        info: "",
        description: "Anotador mediano rayado.",
        images: ["img/anotadorstory.webp", "img/anotadorstory2.webp"]
    },
    {
        id: 15,
        name: "Diario Personal Exploratorio",
        price: 12000,
        info: "",
        description: "Diario personal con pequeñas frases motivadoras en las hojas.",
        images: ["img/personaldiary.webp", "img/personaldiary2.webp"]
    },
    {
        id: 16,
        name: "Anotador Cuadriculado",
        price: 0,
        info: "",
        description: "Anotador con 90 hojas cuadriculadas.",
        images: ["img/anotadormin.webp"]
    },
    {
        id: 17,
        name: "Lapicera Pocket Negra",
        price: 2500,
        info: "",
        description: "Lapicera pocket naranja, trazo negro.",
        images: ["img/lapicerapocket.webp"]
    },
    {
        id: 18,
        name: "Lapicera azul",
        price: 2300,
        info: "",
        description: "Lapicera verde, trazo azul 0,7mm.",
        images: ["img/lapiceraverde.webp"]
    },
    {
        id: 19,
        name: "Lapicera Líquida Tinta",
        price: 3200,
        info: "",
        description: "Lapicera líquida tinta, trazo azul.",
        images: ["img/lapiceratinta.webp"]
    },
    {
        id: 20,
        name: "Portamina Gris Trama",
        price: 2200,
        info: "",
        description: "Portamina gris de 0,5mm.",
        images: ["img/portamina.webp"]
    },
    {
        id: 21,
        name: "Lapiceras frutales",
        price: 6500,
        info: "",
        description: "Pack de 10 lapiceras de colores, cada una de una fruta diferente (lleva el aroma de la fruta como banana, uva, naranja, etc).",
        images: ["img/lapicerafruta.webp"]
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
                                <span class="price-tag">$${product.price.toLocaleString('es-AR')} ${product.info}</span>
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
    document.getElementById('modalPrice').textContent = `$${product.price.toLocaleString('es-AR')} ${product.info}`;
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