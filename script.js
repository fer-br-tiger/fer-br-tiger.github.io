// 1. Base de datos simulada de productos
// Nota: Uso imágenes de placeholder.com para la demo. 
const products = [
    {
        id: 1,
        name: "Lápiz Negro Infinito",
        price: 1500,
        info: "(c/u)",
        description: "Lápiz infinito. Hermoso diseño.",
        stock: true,
        images: ["img/lapiz.webp"]
    },
    {
        id: 2,
        name: "Lapicera Multicolor Kuromi",
        price: 2000,
        info: "(c/u)",
        description: "Extraordinarias lapiceras con múltiples colores (rojo, verde, celeste...).",
        stock: true,
        images: ["img/lapiceras.webp"]
    },
    {
        id: 3,
        name: "Gomas",
        price: 2200,
        info: "(triangular $1.000, rayada $1.200)",
        description: "Gomas de colores, triangular y rayada",
        stock: true,
        images: ["img/gomas.webp"]
    },
    {
        id: 4,
        name: "Cartuchera Trama",
        price: 5500,
        info: "",
        description: "Cartuchera de goma.",
        stock: true,
        images: ["img/cartuchera.webp"]
    },
    {
        id: 5,
        name: "Acuarelas",
        price: 3000,
        info: "",
        description: "Hermosos colores de acuarela (12 colores).",
        stock: true,
        images: ["img/acuarela.webp", "img/acuarela2.webp"]
    },
    {
        id: 6,
        name: "Lápices Giotto",
        price: 4500,
        info: "",
        description: "Pack de 12 lápices de colores, reforzados con minas resistentes.",
        stock: true,
        images: ["img/lapices.webp"]
    },
    {
        id: 7,
        name: "Lápices Amor",
        price: 2300,
        info: "",
        description: "Pack de 12 lápices de colores.",
        stock: true,
        images: ["img/lapices2.webp"]
    },
    {
        id: 8,
        name: "Lápices Trama",
        price: 4500,
        info: "",
        description: "Pack de 12 lápices de colores intensos, suaves al trazar.",
        stock: true,
        images: ["img/lapices3.webp"]
    },
    {
        id: 9,
        name: "Lápiz Negro",
        price: 300,
        info: "(c/u, 2X$500 o 3X$800)",
        description: "Lápiz Negro HB con goma.",
        stock: true,
        images: ["img/lapiznegro.webp"]
    },
    {
        id: 10,
        name: "Notas Adhesivas Trama",
        price: 3500,
        info: "",
        description: "Señaladores de página autoadhesivos fluo 12x45mm.",
        stock: true,
        images: ["img/notasad.webp"]
    },
    {
        id: 11,
        name: "Anotador con espiral tapa dura",
        price: 4200,
        info: "",
        description: "Anotador tapa dura, contiene muchas hojas.",
        stock: true,
        images: ["img/notebook.webp"]
    },
    {
        id: 12,
        name: "Libreta chica azul",
        price: 2500,
        info: "",
        description: "Libreta chica para anotaciones rápidas, ideal para fácil transporte.",
        stock: true,
        images: ["img/libretazul.webp", "img/libretazul2.webp"]
    },
    {
        id: 13,
        name: "Libreta chica rosa",
        price: 2000,
        info: "",
        description: "Libreta chica para anotaciones rápidas, ideal para fácil transporte.",
        stock: true,
        images: ["img/libretarosa.webp"]
    },
    {
        id: 14,
        name: "Anotador Mediano",
        price: 3000,
        info: "",
        description: "Anotador mediano rayado.",
        stock: true,
        images: ["img/anotadorstory.webp", "img/anotadorstory2.webp"]
    },
    {
        id: 15,
        name: "Diario Personal Exploratorio",
        price: 12000,
        info: "",
        description: "Diario personal con pequeñas frases motivadoras en las hojas.",
        stock: true,
        images: ["img/personaldiary.webp", "img/personaldiary2.webp"]
    },
    {
        id: 16,
        name: "Anotador Cuadriculado",
        price: 2500,
        info: "",
        description: "Anotador con 90 hojas cuadriculadas.",
        stock: true,
        images: ["img/anotadormin.webp"]
    },
    {
        id: 17,
        name: "Lapicera Pocket Negra",
        price: 2500,
        info: "",
        description: "Lapicera pocket naranja, trazo negro.",
        stock: true,
        images: ["img/lapicerapocket.webp"]
    },
    {
        id: 18,
        name: "Lapicera azul",
        price: 2300,
        info: "",
        description: "Lapicera verde, trazo azul 0,7mm.",
        stock: true,
        images: ["img/lapiceraverde.webp"]
    },
    {
        id: 19,
        name: "Lapicera Líquida Tinta",
        price: 3200,
        info: "",
        description: "Lapicera líquida tinta, trazo azul.",
        stock: true,
        images: ["img/lapiceratinta.webp"]
    },
    {
        id: 20,
        name: "Portamina Gris Trama",
        price: 2200,
        info: "",
        description: "Portamina gris de 0,5mm.",
        stock: true,
        images: ["img/portamina.webp"]
    },
    {
        id: 21,
        name: "Lapiceras frutales perfumadas",
        price: 5000,
        info: "",
        description: "Pack de 10 lapiceras de colores, cada una de una fruta diferente (lleva el aroma de la fruta como banana, uva, naranja, etc).",
        stock: true,
        images: ["img/lapicerafruta.webp"]
    },
    {
        id: 22,
        name: "Marcadores Fluo Trama",
        price: 4500,
        info: "",
        description: "Pack de 5 marcadores fluo de distinto color.",
        stock: true,
        images: ["img/marcadorfluo.webp"]
    },
    {
        id: 23,
        name: "Resaltadores Pastel Trama",
        price: 6500,
        info: "",
        description: "Pack de 4 resaltadores pastel con punta biselada de gran resistencia.",
        stock: true,
        images: ["img/resaltadorpastel.webp"]
    },
    {
        id: 24,
        name: "Marcadores Punta Fina Giotto",
        price: 8500,
        info: "",
        description: "Pack de 20 marcadores de punta fina, lavables, no tóxicos y de punta indestructible.",
        stock: true,
        images: ["img/marcadorgiotto.webp"]
    },
    {
        id: 25,
        name: "Lapicera Multicolor Colorful",
        price: 4000,
        info: "(o $700 c/u)",
        description: "Lapicera multicolor. Cambia de color por periodos de uso.",
        stock: true,
        images: ["img/lapiceramulti.webp"]
    },
    {
        id: 26,
        name: "Lapiceras Glitter Trama",
        price: 5000,
        info: "",
        description: "Pack de 5 lapiceras glitter con colores intensos y suaves al trazar.",
        stock: true,
        images: ["img/lapiceraglitter.webp"]
    },
    {
        id: 27,
        name: "Resaltadores Finos Fluo Trama",
        price: 6500,
        info: "",
        description: "Pack de 4 resaltadores finos fluo con punta biselada de gran resistencia.",
        stock: true,
        images: ["img/resaltadoresfino.webp"]
    },
    {
        id: 28,
        name: "Microfibras Trama",
        price: 11000,
        info: "",
        description: "Pack de 10 microfibras de colores con punta metálica. Estas son exactas, con trazo suave y con punta metálica.",
        stock: true,
        images: ["img/microfibratrama.webp"]
    },
    {
        id: 29,
        name: "Temperas Solidas",
        price: 10200,
        info: "",
        description: "Pack de 6 temperas sólidas listas para usar. No requieren agua, fácil de lavar y no son tóxicas.",
        stock: true,
        images: ["img/temperasolmet.webp"]
    },
    {
        id: 30,
        name: "Temperas Solidas",
        price: 5000,
        info: "",
        description: "Pack de 2 temperas sólidas listas para usar. No requieren agua, fácil de lavar y no son tóxicas.",
        stock: true,
        images: ["img/temperasolclas.webp"]
    },
    {
        id: 31,
        name: "Perforadora de papel Ibi Craft",
        price: 4500,
        info: "",
        description: "Perforadora de papel con forma de nota musical.",
        stock: true,
        images: ["img/perforadoramusic.webp"]
    },
    {
        id: 32,
        name: "Libro de Arte Cozy",
        price: 6000,
        info: "",
        description: "Libro de Arte Cozy para pintar y relajarse con hermosos dibujos. ¡Único!",
        stock: true,
        images: ["img/libroartecozy.webp", "img/libroartecozy2.webp"]
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
                    <div class="${product.stock? 'opacity-100' : 'opacity-50'} card product-card h-100 shadow-sm" onclick="openProductModal(${product.id})">
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
    document.getElementById('modalStock').innerHTML = `
        ${
            product.stock? '<i class="bi bi-check-circle-fill text-success me-2"></i>Stock disponible' : 
            '<i class="bi bi-x-circle-fill text-danger me-2"></i>No hay stock disponible'
        }
    `;

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
