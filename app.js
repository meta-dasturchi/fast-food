/* ==========================================================================
   ANDIJON FOOD — Asosiy JavaScript Mantiqiy Fayli (Vanilla JS)
   ========================================================================== */

// 1. MAHSULOTLAR MA'LUMOTLAR BAZASI (Barcha matnlar o'zbek tilida)
const PRODUCTS = [
    // 1. Lavashlar
    {
        id: 101,
        name: "Oddiy lavash",
        category: "lavashlar",
        categoryTitle: "Lavashlar",
        description: "Yupqa xamir, sarxil bodring va pomidor, maxsus oq va qizil sous, qarsildoq chips.",
        price: 26000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 102,
        name: "Pishloqli lavash",
        category: "lavashlar",
        categoryTitle: "Lavashlar",
        description: "Eritilgan golland pishlog‘i, yumshoq go‘sht bo‘laklari, yangi sabzavotlar va firma sousi.",
        price: 30000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 103,
        name: "Mol go‘shtli lavash",
        category: "lavashlar",
        categoryTitle: "Lavashlar",
        description: "Grilda pishirilgan sersuv mol go‘shti, pomidor, bodring, piyoz va maxsus ziravorli sous.",
        price: 32000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1644704170910-a0cdf183649b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 104,
        name: "Tovuqli lavash",
        category: "lavashlar",
        categoryTitle: "Lavashlar",
        description: "Maxsus marinadlangan tovuq filesi, mayin sarimsoqli sous, yangi bodring va pomidor.",
        price: 28000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 105,
        name: "Achchiq lavash",
        category: "lavashlar",
        categoryTitle: "Lavashlar",
        description: "Halapenyo qalampiri, achchiq chili sousi, sersuv mol go‘shti va yangi sabzavotlar.",
        price: 31000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=600&q=80"
    },

    // 2. Burgerlar
    {
        id: 201,
        name: "Gamburger",
        category: "burgerlar",
        categoryTitle: "Burgerlar",
        description: "Yumshoq kunjutli bulochka, 100% mol go‘shtli kotlet, tuzlangan bodring, pomidor va sous.",
        price: 25000,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 202,
        name: "Chizburger",
        category: "burgerlar",
        categoryTitle: "Burgerlar",
        description: "Sersuv mol go‘shtli kotlet, ikki qavat Chedder pishlog‘i, aysberg salati va firma sousi.",
        price: 28000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 203,
        name: "Double Burger",
        category: "burgerlar",
        categoryTitle: "Burgerlar",
        description: "Ikkita katta mol go‘shtli kotlet, eritilgan pishloq, karamellangan piyoz va maxsus grill sous.",
        price: 38000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 204,
        name: "Chicken Burger",
        category: "burgerlar",
        categoryTitle: "Burgerlar",
        description: "Qarsildoq panirovkadagi tovuq filesi, yangi salat bargi, pomidor va mayin qaymoqli sous.",
        price: 26000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 205,
        name: "Maxsus Burger",
        category: "burgerlar",
        categoryTitle: "Burgerlar",
        description: "ANDIJON FOOD oshpazidan maxsus retsept: go‘shtli kotlet, pishloq, dudlangan go‘sht va qo‘ziqorinli sous.",
        price: 42000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },

    // 3. Hot-doglar
    {
        id: 301,
        name: "Oddiy Hot-dog",
        category: "hotdoglar",
        categoryTitle: "Hot-doglar",
        description: "Issiq bulochka, qovurilgan sosiska, yangi sabzavotlar, xantal va pomidor sousi.",
        price: 15000,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 302,
        name: "Pishloqli Hot-dog",
        category: "hotdoglar",
        categoryTitle: "Hot-doglar",
        description: "Yumshoq bulochka, maxsus sosiska, eritilgan issiq pishloq va qarsildoq piyoz bo‘laklari.",
        price: 18000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 303,
        name: "Maxsus Hot-dog",
        category: "hotdoglar",
        categoryTitle: "Hot-doglar",
        description: "Ikkita sosiska, pishloq, tuzlangan bodring, halapenyo va firma souslari bilan boyitilgan.",
        price: 23000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1627054248949-21f77275a15f?auto=format&fit=crop&w=600&q=80"
    },

    // 4. Pitsalar
    {
        id: 401,
        name: "Margarita",
        category: "pitsalar",
        categoryTitle: "Pitsalar",
        description: "Yupqa xamir, tabiiy pomidor sousi, cho‘ziluvchan Motsarella pishlog‘i va rayhon barglari.",
        price: 55000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 402,
        name: "Pepperoni",
        category: "pitsalar",
        categoryTitle: "Pitsalar",
        description: "Halol pepperoni kolbasasi, ko‘p miqdorda Motsarella pishlog‘i va maxsus italyan sousi.",
        price: 68000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 403,
        name: "4 xil pishloqli pitsa",
        category: "pitsalar",
        categoryTitle: "Pitsalar",
        description: "Motsarella, Chedder, Parmezan va Gauda pishloqlarining qaymoqli uyg‘unligi.",
        price: 72000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 404,
        name: "Go‘shtli pitsa",
        category: "pitsalar",
        categoryTitle: "Pitsalar",
        description: "Mol go‘shti, kurka go‘shti, kolbasa, bulg‘or qalampiri, zaytun va Motsarella pishlog‘i.",
        price: 78000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 405,
        name: "Tovuqli pitsa",
        category: "pitsalar",
        categoryTitle: "Pitsalar",
        description: "Dudlangan tovuq filesi, shampinyon qo‘ziqorinlari, pomidor, Motsarella va ranch sousi.",
        price: 65000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=600&q=80"
    },

    // 5. Setlar
    {
        id: 501,
        name: "Oilaviy set",
        category: "setlar",
        categoryTitle: "Setlar",
        description: "2 ta katta pitsa, 4 ta lavash, 2 porsiya kartoshka fri va 1.5L salqin ichimlik.",
        price: 185000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 502,
        name: "Do‘stlar uchun set",
        category: "setlar",
        categoryTitle: "Setlar",
        description: "4 ta Chizburger, 4 ta kartoshka fri, 4 ta sous va 1.5L gazli ichimlik.",
        price: 135000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 503,
        name: "Burger set",
        category: "setlar",
        categoryTitle: "Setlar",
        description: "1 ta Chizburger, 1 ta o‘rta kartoshka fri, pishloqli sous va 0.5L ichimlik.",
        price: 42000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 504,
        name: "Lavash set",
        category: "setlar",
        categoryTitle: "Setlar",
        description: "1 ta Pishloqli lavash, kartoshka fri, maxsus sous va 0.5L salqin ichimlik.",
        price: 44000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 505,
        name: "Maxsus set",
        category: "setlar",
        categoryTitle: "Setlar",
        description: "Maxsus Burger, Tovuqli lavash, naggetslar, kartoshka fri va 1L ichimlik.",
        price: 89000,
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },

    // 6A. Salqin ichimliklar
    {
        id: 601,
        name: "Oddiy suv",
        category: "salqin-ichimliklar",
        categoryTitle: "Salqin ichimliklar",
        description: "Tozalangan salqin ichimlik suvi (0.5 litr).",
        price: 4000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 602,
        name: "Gazsiz mineral suv",
        category: "salqin-ichimliklar",
        categoryTitle: "Salqin ichimliklar",
        description: "Tabiiy minerallarga boy gazsiz salqin suv (0.5 litr).",
        price: 5000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 603,
        name: "Limonli ichimlik",
        category: "salqin-ichimliklar",
        categoryTitle: "Salqin ichimliklar",
        description: "Yangi limon sharbati va yalpiz barglari qo‘shilgan tetiklashtiruvchi limonad (0.5 litr).",
        price: 12000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 604,
        name: "Sharbat",
        category: "salqin-ichimliklar",
        categoryTitle: "Salqin ichimliklar",
        description: "Tabiiy mevali salqin sharbat (olma, olcha yoki apelsin ta'mli, 1 litr).",
        price: 14000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 605,
        name: "Muzli choy",
        category: "salqin-ichimliklar",
        categoryTitle: "Salqin ichimliklar",
        description: "Shaftoli va limon ta'mli muzdek ko‘k va qora choy (0.5 litr).",
        price: 10000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },

    // 6B. Gazli ichimliklar
    {
        id: 701,
        name: "Coca-Cola",
        category: "gazli-ichimliklar",
        categoryTitle: "Gazli ichimliklar",
        description: "Muzdek klassik Coca-Cola gazli ichimligi (0.5 litr).",
        price: 9000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 702,
        name: "Pepsi",
        category: "gazli-ichimliklar",
        categoryTitle: "Gazli ichimliklar",
        description: "Salqin va tetiklashtiruvchi Pepsi ichimligi (0.5 litr).",
        price: 9000,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 703,
        name: "Fanta",
        category: "gazli-ichimliklar",
        categoryTitle: "Gazli ichimliklar",
        description: "Apelsin ta'mli yorqin gazli ichimlik (0.5 litr).",
        price: 9000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 704,
        name: "Sprite",
        category: "gazli-ichimliklar",
        categoryTitle: "Gazli ichimliklar",
        description: "Limon va laym ta'mli shaffof gazli ichimlik (0.5 litr).",
        price: 9000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 705,
        name: "7UP",
        category: "gazli-ichimliklar",
        categoryTitle: "Gazli ichimliklar",
        description: "Yengil sitrus ta'mli muzdek gazli ichimlik (0.5 litr).",
        price: 9000,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=600&q=80"
    }
];

// 2. ANDIJON HUDUDLARI VA YETKAZIB BERISH TARIFLARI (Oson tahrirlanadigan tuzilma)
const ANDIJON_DELIVERY_ZONES = [
    { name: "Andijon shahri", fee: 10000, available: true, eta: "30–40 daqiqa" },
    { name: "Andijon tumani", fee: 14000, available: true, eta: "35–45 daqiqa" },
    { name: "Asaka", fee: 18000, available: true, eta: "45–55 daqiqa" },
    { name: "Oltinko‘l", fee: 16000, available: true, eta: "40–50 daqiqa" },
    { name: "Xo‘jaobod", fee: 18000, available: true, eta: "45–55 daqiqa" },
    { name: "Buloqboshi", fee: 18000, available: true, eta: "45–55 daqiqa" },
    { name: "Shahrixon", fee: 22000, available: true, eta: "50–65 daqiqa" },
    { name: "Jalaquduq", fee: 20000, available: true, eta: "45–60 daqiqa" },
    { name: "Paxtaobod", fee: 22000, available: true, eta: "50–65 daqiqa" },
    { name: "Izboskan", fee: 22000, available: true, eta: "50–65 daqiqa" },
    { name: "Marhamat", fee: 25000, available: true, eta: "55–70 daqiqa" },
    { name: "Baliqchi", fee: 25000, available: true, eta: "55–70 daqiqa" },
    { name: "Qo‘rg‘ontepa", fee: 28000, available: true, eta: "60–75 daqiqa" },
    { name: "Xonobod", fee: 32000, available: true, eta: "65–80 daqiqa" },
    { name: "Bo‘z", fee: 0, available: false, eta: "Mavjud emas" },
    { name: "Ulug‘nor", fee: 0, available: false, eta: "Mavjud emas" }
];

// Kategoriya tartibi
const CATEGORY_ORDER = [
    { key: "lavashlar", title: "Lavashlar" },
    { key: "burgerlar", title: "Burgerlar" },
    { key: "hotdoglar", title: "Hot-doglar" },
    { key: "pitsalar", title: "Pitsalar" },
    { key: "setlar", title: "Setlar" },
    { key: "salqin-ichimliklar", title: "Salqin ichimliklar" },
    { key: "gazli-ichimliklar", title: "Gazli ichimliklar" }
];

// 3. HOLAT (STATE) VA LOCALSTORAGE BOSHQARUVI
const STORAGE_KEYS = {
    CART: "andijon_food_cart_v1",
    USER: "andijon_food_user_v1",
    USERS_DB: "andijon_food_users_db_v1"
};

let cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
let currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || null;
let activeCategory = "all";
let searchQuery = "";

// Yordamchi funksiya: Narxni formatlash (so'mda)
function formatPrice(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

// Yordamchi funksiya: Toast xabarnoma ko'rsatish
function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-circle-check" : "fa-circle-exclamation";
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(30px)";
        toast.style.transition = "all 0.3s ease";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================================================
// 4. MENYUNI CHIQARISH, FILTRLASH VA QIDIRUV
// ==========================================================================
function renderSkeletonLoading() {
    const menuContainer = document.getElementById("menu-container");
    let skeletons = '<div class="products-grid">';
    for (let i = 0; i < 4; i++) {
        skeletons += `
            <div class="skeleton-card">
                <div class="skeleton-img"></div>
                <div class="skeleton-line"></div>
                <div class="skeleton-line short"></div>
            </div>
        `;
    }
    skeletons += '</div>';
    menuContainer.innerHTML = skeletons;
}

function renderMenu() {
    const menuContainer = document.getElementById("menu-container");
    const query = searchQuery.trim().toLowerCase();

    // Filtrlash
    const filteredProducts = PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === "all" || product.category === activeCategory;
        const matchesSearch =
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        menuContainer.innerHTML = `
            <div class="empty-search-box">
                <i class="fas fa-search"></i>
                <h3>Hech narsa topilmadi</h3>
                <p>"${searchQuery}" so‘rovi bo‘yicha taom topilmadi. Boshqa nom bilan izlab ko‘ring.</p>
                <button class="btn btn-primary" style="margin-top: 16px;" onclick="resetFilters()">
                    Barcha mahsulotlarni ko‘rsatish
                </button>
            </div>
        `;
        return;
    }

    // Kategoriyalar bo'yicha guruhlab chiqarish
    let html = "";
    CATEGORY_ORDER.forEach(cat => {
        const items = filteredProducts.filter(p => p.category === cat.key);
        if (items.length > 0) {
            html += `
                <div class="category-group">
                    <div class="category-group-header">
                        <h3 class="category-group-title">${cat.title}</h3>
                        <span class="category-count">${items.length} ta mahsulot</span>
                    </div>
                    <div class="products-grid">
                        ${items.map(product => createProductCardHTML(product)).join("")}
                    </div>
                </div>
            `;
        }
    });

    menuContainer.innerHTML = html;
}

function createProductCardHTML(product) {
    return `
        <article class="product-card">
            <div class="product-img-box">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-rating">
                    <i class="fas fa-star"></i> ${product.rating.toFixed(1)}
                </span>
            </div>
            <div class="product-body">
                <h4 class="product-title">${product.name}</h4>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}, this)">
                        <i class="fas fa-cart-plus"></i> Savatchaga qo‘shish
                    </button>
                </div>
            </div>
        </article>
    `;
}

function resetFilters() {
    activeCategory = "all";
    searchQuery = "";
    document.getElementById("search-input").value = "";
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === "all");
    });
    renderMenu();
}

// ==========================================================================
// 5. SAVATCHA (CART) FUNKSIYALARI
// ==========================================================================
function saveCart() {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, btnElement = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart();
    animateCartBadge();
    showToast(`"${product.name}" savatchaga qo‘shildi!`, "success");

    if (btnElement) {
        const originalHTML = btnElement.innerHTML;
        btnElement.classList.add("added");
        btnElement.innerHTML = `<i class="fas fa-check"></i> Qo‘shildi`;
        setTimeout(() => {
            btnElement.classList.remove("added");
            btnElement.innerHTML = originalHTML;
        }, 900);
    }
}

function changeItemQuantity(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    saveCart();
    animateCartBadge();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    animateCartBadge();
    showToast("Mahsulot savatchadan o‘chirildi", "error");
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    showToast("Savatcha tozalandi", "error");
}

function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartTotalCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function animateCartBadge() {
    const badge = document.getElementById("cart-badge");
    badge.classList.remove("bump");
    void badge.offsetWidth; // Reflow
    badge.classList.add("bump");
}

function updateCartUI() {
    const totalCount = getCartTotalCount();
    const subtotal = getCartSubtotal();

    document.getElementById("cart-badge").textContent = totalCount;
    document.getElementById("drawer-cart-count").textContent = totalCount;
    document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);

    const container = document.getElementById("cart-items-container");
    const cartFooter = document.getElementById("cart-footer");

    if (cart.length === 0) {
        cartFooter.classList.add("hidden");
        container.innerHTML = `
            <div class="empty-cart-state">
                <i class="fas fa-shopping-basket"></i>
                <h4>Savatchangiz hozircha bo‘sh</h4>
                <p>Mazali lavash, burger yoki pitsalardan birini tanlab savatchaga qo‘shing.</p>
                <button class="btn btn-primary" style="margin-top: 18px;" onclick="closeCartDrawer()">
                    Menyuga o‘tish
                </button>
            </div>
        `;
        return;
    }

    cartFooter.classList.remove("hidden");
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="changeItemQuantity(${item.id}, -1)" aria-label="Kamaytirish">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeItemQuantity(${item.id}, 1)" aria-label="Oshirish">+</button>
                </div>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="O‘chirish">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join("");
}

// Savatcha ochish / yopish
function openCartDrawer() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-overlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================================================
// 6. ANDIJON YETKAZIB BERISH HUDUDLARI VA BUYURTMA FORMASI
// ==========================================================================
function initDeliveryZones() {
    const quickSelect = document.getElementById("quick-district-select");
    const orderSelect = document.getElementById("order-district");

    const optionsHTML = ANDIJON_DELIVERY_ZONES.map(zone => {
        const statusText = zone.available
            ? `${zone.name} (${formatPrice(zone.fee)})`
            : `${zone.name} (Yetkazib berish mavjud emas)`;
        return `<option value="${zone.name}">${statusText}</option>`;
    }).join("");

    quickSelect.innerHTML = optionsHTML;
    orderSelect.innerHTML = optionsHTML;

    // Dastlabki holatni ko'rsatish
    updateQuickDeliveryDisplay(quickSelect.value);

    quickSelect.addEventListener("change", (e) => {
        updateQuickDeliveryDisplay(e.target.value);
    });

    orderSelect.addEventListener("change", () => {
        updateCheckoutTotals();
    });
}

function updateQuickDeliveryDisplay(districtName) {
    const zone = ANDIJON_DELIVERY_ZONES.find(z => z.name === districtName);
    const resultBox = document.getElementById("quick-delivery-result");
    if (!zone) return;

    if (!zone.available) {
        resultBox.className = "delivery-result-card unavailable";
        resultBox.innerHTML = `
            <strong><i class="fas fa-circle-xmark"></i> ${zone.name}:</strong>
            Hozircha bu hududga yetkazib berish xizmati mavjud emas. Tez orada yo‘lga qo‘yiladi!
        `;
    } else {
        resultBox.className = "delivery-result-card";
        resultBox.innerHTML = `
            <strong><i class="fas fa-circle-check"></i> ${zone.name}:</strong><br>
            Yetkazib berish narxi: <strong>${formatPrice(zone.fee)}</strong> | Taxminiy vaqt: <strong>${zone.eta}</strong>
        `;
    }
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Buyurtma berish uchun avval savatchaga taom qo‘shing!", "error");
        return;
    }

    closeCartDrawer();

    // Agar foydalanuvchi tizimga kirgan bo'lsa, ism va telefonini avtomatik to'ldirish
    if (currentUser) {
        const nameInput = document.getElementById("order-fullname");
        const phoneInput = document.getElementById("order-phone");
        if (!nameInput.value) nameInput.value = currentUser.name;
        if (!phoneInput.value) phoneInput.value = currentUser.phone;
    }

    renderCheckoutItems();
    updateCheckoutTotals();

    document.getElementById("checkout-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
    document.getElementById("checkout-modal").classList.remove("active");
    document.body.style.overflow = "";
}

function renderCheckoutItems() {
    const listContainer = document.getElementById("checkout-items-list");
    listContainer.innerHTML = cart.map(item => `
        <div class="checkout-item-row">
            <span>${item.name} <strong>× ${item.quantity}</strong></span>
            <strong>${formatPrice(item.price * item.quantity)}</strong>
        </div>
    `).join("");
}

function updateCheckoutTotals() {
    const districtName = document.getElementById("order-district").value;
    const zone = ANDIJON_DELIVERY_ZONES.find(z => z.name === districtName);
    const subtotal = getCartSubtotal();

    const alertBox = document.getElementById("delivery-unavailable-alert");
    const confirmBtn = document.getElementById("confirm-order-btn");
    const deliveryFeeEl = document.getElementById("checkout-delivery-fee");
    const grandTotalEl = document.getElementById("checkout-grand-total");

    document.getElementById("checkout-subtotal").textContent = formatPrice(subtotal);

    if (!zone || !zone.available) {
        alertBox.classList.remove("hidden");
        confirmBtn.disabled = true;
        confirmBtn.style.opacity = "0.55";
        confirmBtn.style.cursor = "not-allowed";
        deliveryFeeEl.textContent = "Mavjud emas";
        grandTotalEl.textContent = formatPrice(subtotal);
    } else {
        alertBox.classList.add("hidden");
        confirmBtn.disabled = false;
        confirmBtn.style.opacity = "1";
        confirmBtn.style.cursor = "pointer";
        deliveryFeeEl.textContent = formatPrice(zone.fee);
        grandTotalEl.textContent = formatPrice(subtotal + zone.fee);
    }
}

function handleOrderSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById("order-fullname");
    const phone = document.getElementById("order-phone");
    const region = document.getElementById("order-region");
    const district = document.getElementById("order-district");
    const mahalla = document.getElementById("order-mahalla");
    const street = document.getElementById("order-street");
    const note = document.getElementById("order-note");

    // Majburiy maydonlarni tekshirish
    const requiredFields = [fullName, phone, mahalla, street];
    let hasError = false;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add("error");
            hasError = true;
        } else {
            field.classList.remove("error");
        }
    });

    if (hasError) {
        showToast("Iltimos, barcha majburiy (*) maydonlarni to‘ldiring!", "error");
        return;
    }

    const zone = ANDIJON_DELIVERY_ZONES.find(z => z.name === district.value);
    if (!zone || !zone.available) {
        showToast("Tanlangan hududga yetkazib berish mavjud emas!", "error");
        return;
    }

    const subtotal = getCartSubtotal();
    const total = subtotal + zone.fee;
    const orderNumber = Math.floor(1000 + Math.random() * 9000);

    // Chek ma'lumotlarini tayyorlash
    const receiptHTML = `
        <strong>Buyurtma raqami:</strong> #${orderNumber}<br>
        <strong>Mijoz:</strong> ${fullName.value.trim()}<br>
        <strong>Telefon:</strong> ${phone.value.trim()}<br>
        <strong>Manzil:</strong> ${region.value}, ${district.value}, ${mahalla.value.trim()} MFY, ${street.value.trim()}<br>
        ${note.value.trim() ? `<strong>Izoh:</strong> ${note.value.trim()}<br>` : ""}
        <strong>To‘lov summasi:</strong> ${formatPrice(total)} (Yetkazib berish bilan)
    `;

    document.getElementById("order-receipt-preview").innerHTML = receiptHTML;

    // Savatchani tozalash va modallarni almashtirish
    cart = [];
    saveCart();
    e.target.reset();
    closeCheckoutModal();

    document.getElementById("order-success-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

// ==========================================================================
// 7. RO'YXATDAN O'TISH VA KIRISH (FRONTEND DEMO AUTH)
// ==========================================================================
function updateAuthUI() {
    const authBtnText = document.getElementById("auth-btn-text");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const authTabs = document.querySelector(".auth-tabs");
    const profileBox = document.getElementById("user-profile-box");
    const modalTitle = document.getElementById("auth-modal-title");

    if (currentUser) {
        authBtnText.textContent = currentUser.name;
        modalTitle.textContent = "Shaxsiy kabinet";
        authTabs.classList.add("hidden");
        loginForm.classList.add("hidden");
        registerForm.classList.add("hidden");
        profileBox.classList.remove("hidden");

        document.getElementById("profile-user-name").textContent = currentUser.name;
        document.getElementById("profile-user-phone").textContent = currentUser.phone;
    } else {
        authBtnText.textContent = "Kirish / Ro‘yxatdan o‘tish";
        modalTitle.textContent = "Tizimga kirish";
        authTabs.classList.remove("hidden");
        profileBox.classList.add("hidden");
        switchAuthTab("login");
    }
}

function switchAuthTab(tabName) {
    document.querySelectorAll(".auth-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.tab === tabName);
    });

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const modalTitle = document.getElementById("auth-modal-title");

    if (tabName === "login") {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        modalTitle.textContent = "Tizimga kirish";
    } else {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        modalTitle.textContent = "Ro‘yxatdan o‘tish";
    }
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value.trim();
    const phone = document.getElementById("reg-phone").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (!name || !phone || !password) {
        showToast("Barcha maydonlarni to‘ldiring!", "error");
        return;
    }

    const usersDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_DB)) || [];
    if (usersDB.some(u => u.phone === phone)) {
        showToast("Bu telefon raqami avval ro‘yxatdan o‘tgan!", "error");
        return;
    }

    const newUser = { name, phone, password };
    usersDB.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(usersDB));

    currentUser = { name, phone };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));

    updateAuthUI();
    closeAuthModal();
    e.target.reset();
    showToast(`Xush kelibsiz, ${name}! Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi.`);
}

function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById("login-phone").value.trim();
    const password = document.getElementById("login-password").value.trim();

    const usersDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS_DB)) || [];
    const foundUser = usersDB.find(u => u.phone === phone && u.password === password);

    if (!foundUser) {
        showToast("Telefon raqami yoki parol noto‘g‘ri! Avval ro‘yxatdan o‘ting.", "error");
        return;
    }

    currentUser = { name: foundUser.name, phone: foundUser.phone };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));

    updateAuthUI();
    closeAuthModal();
    e.target.reset();
    showToast(`Xush kelibsiz, ${foundUser.name}!`);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.USER);
    updateAuthUI();
    closeAuthModal();
    showToast("Hisobdan chiqdingiz", "error");
}

function openAuthModal() {
    updateAuthUI();
    document.getElementById("auth-modal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeAuthModal() {
    document.getElementById("auth-modal").classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================================================
// 8. SCROLL ANIMATSIYALARI (IntersectionObserver) VA NAVBAR EFFEKTLARI
// ==========================================================================
function initScrollObserver() {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealElements.forEach(el => observer.observe(el));
}

function initNavbarScroll() {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Aktiv menyu havolasini belgilash
        let currentSection = "";
        sections.forEach(sec => {
            const top = sec.offsetTop - 130;
            if (window.scrollY >= top) {
                currentSection = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
}

// ==========================================================================
// 9. HODISALARNI ULASH (EVENT LISTENERS) VA ISHGA TUSHIRISH
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // Preloader yopish
    const preloader = document.getElementById("preloader");
    renderSkeletonLoading();

    setTimeout(() => {
        preloader.classList.add("fade-out");
        renderMenu();
    }, 550);

    // UI ni boshlang'ich holatga keltirish
    updateCartUI();
    updateAuthUI();
    initDeliveryZones();
    initScrollObserver();
    initNavbarScroll();

    // Mobil menyu ochish/yopish
    const navMenu = document.getElementById("nav-menu");
    document.getElementById("nav-toggle").addEventListener("click", () => {
        navMenu.classList.add("open");
    });
    document.getElementById("nav-close").addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => navMenu.classList.remove("open"));
    });

    // Qidiruv paneli
    const searchWrapper = document.getElementById("search-bar-wrapper");
    const searchInput = document.getElementById("search-input");

    document.getElementById("search-toggle-btn").addEventListener("click", () => {
        searchWrapper.classList.toggle("open");
        if (searchWrapper.classList.contains("open")) {
            searchInput.focus();
        }
    });

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderMenu();
    });

    document.getElementById("search-clear-btn").addEventListener("click", () => {
        searchQuery = "";
        searchInput.value = "";
        renderMenu();
    });

    // Kategoriya tugmalari
    document.getElementById("category-tabs").addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-btn");
        if (!btn) return;

        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        renderMenu();
    });

    // Aksiya va Footer kategoriya havolalari
    document.querySelectorAll(".promo-action-btn, .footer-cat-link").forEach(link => {
        link.addEventListener("click", () => {
            const targetCat = link.dataset.filter || link.dataset.category;
            if (targetCat) {
                activeCategory = targetCat;
                document.querySelectorAll(".cat-btn").forEach(b => {
                    b.classList.toggle("active", b.dataset.category === targetCat);
                });
                renderMenu();
            }
        });
    });

    // Savatcha tugmalari
    document.getElementById("cart-open-btn").addEventListener("click", openCartDrawer);
    document.getElementById("cart-close-btn").addEventListener("click", closeCartDrawer);
    document.getElementById("cart-overlay").addEventListener("click", closeCartDrawer);
    document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

    // Buyurtma berish modali
    document.getElementById("open-checkout-btn").addEventListener("click", openCheckoutModal);
    document.getElementById("checkout-close-btn").addEventListener("click", closeCheckoutModal);
    document.getElementById("checkout-form").addEventListener("submit", handleOrderSubmit);
    document.getElementById("close-success-modal-btn").addEventListener("click", () => {
        document.getElementById("order-success-modal").classList.remove("active");
        document.body.style.overflow = "";
    });

    // Kirish / Ro'yxatdan o'tish modali
    document.getElementById("auth-open-btn").addEventListener("click", openAuthModal);
    document.getElementById("auth-close-btn").addEventListener("click", closeAuthModal);
    document.querySelectorAll(".auth-tab").forEach(tab => {
        tab.addEventListener("click", () => switchAuthTab(tab.dataset.tab));
    });
    document.getElementById("register-form").addEventListener("submit", handleRegister);
    document.getElementById("login-form").addEventListener("submit", handleLogin);
    document.getElementById("logout-btn").addEventListener("click", handleLogout);

    // ESC tugmasi bosilganda ochiq oynalarni yopish
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartDrawer();
            closeCheckoutModal();
            closeAuthModal();
            document.getElementById("order-success-modal").classList.remove("active");
            document.body.style.overflow = "";
        }
    });
});