// ========================================
// 🍓 MEVA MIX — JAVASCRIPT
// ========================================

"use strict";

let cart = [];
let promoApplied = false;

const DISCOUNT = 0.10;


// ========================================
// 🍎 MEVALAR
// ========================================

const fruits = {

    "Tarvuz": {
        price: 5000,
        category: "klassik",
        emoji: "🍉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDRMWXWApMZsUKyXRouCHBDaEeL-0NdziBktOrifCL4Q&s=10"
    },

    "Qovun": {
        price: 8000,
        category: "klassik",
        emoji: "🍈",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7iA8wpKFdV_QnszJMcnXCzTtl30_lHP7JfFnlk0zBw&s=10"
    },

    "Mango": {
        price: 20000,
        category: "tropik",
        emoji: "🥭",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT2qz47DyLPskoSqjP4e25XaTOFrR0T_2arr0RGE6EA&s=10"
    },

    "Dragon Fruit": {
        price: 25000,
        category: "tropik",
        emoji: "🐉",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYz0JuWmpTrCb5LJp-ulVr31CFn54fgg7hPDYyS0cPw&s=10"
    },

    "Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-VJcD3chazgyn7NApZGdFdk8sOqrYPMQ0duWALqTcg&s=10"
    },

    "Junli Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyeUHOZ9Z_YNFTc7CyNjpcHcba-tfMgUYKX2eSiHjITw&s=10"
    },

    "Oq Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpAeg6r5co7Jc1SXfcfBffdLzQhTBBas5lGXtinAlMQ&s=10"
    },

    "Anjir Shaftoli": {
        price: 25000,
        category: "klassik",
        emoji: "🍑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDl9toWP_njEz2POLSjr_D_-nDxID5H5paOVgAt571A&s=10"
    },

    "Uzum": {
        price: 30000,
        category: "rezavor",
        emoji: "🍇",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbWNKYijTYRxxCK421l1QE6xsoXEgTwd9SszRLMqP5HA&s=10"
    },

    "Apelsin": {
        price: 30000,
        category: "klassik",
        emoji: "🍊",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt8PQI3eO88oJ2tnXRlejfErlfM9ID-u4TTj0eQj4wWQ&s=10"
    },

    "Yashil olma": {
        price: 25000,
        category: "klassik",
        emoji: "🍏",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJOyD_k-I3WS4ofSU22VvnHlxya1xK_S_dRcS7H6bFQ&s=10"
    },

    "Banan": {
        price: 20000,
        category: "tropik",
        emoji: "🍌",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEU6-yDO5bpkMXwBttnGBdcSlvMlcVzzJf4emP2xfZw&s=10"
    },

    "Anjir": {
        price: 25000,
        category: "klassik",
        emoji: "🫒",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENJQOlhQssMWMw4xExeR70dsyN4_UGdIntU9_c4HvxQ&s=10"
    },

    "Nok": {
        price: 40000,
        category: "klassik",
        emoji: "🍐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZSuAyqeB8hE6cTdW-XX_mI6eDeOSDrUpuvTLK316UA&s=10"
    },

    "Qulupnay": {
        price: 100000,
        category: "rezavor",
        emoji: "🍓",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxsVa8KMfARxzv8qqHpjHqq9dlsNH0HT6Q89wygSbQg&s=10"
    },

    "Ananas": {
        price: 50000,
        category: "tropik",
        emoji: "🍍",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhRM2lYGQDQvaGK_sWcTWcti_xhVagAbVpXb76qVJig&s=10"
    },

    "Laym": {
        price: 100000,
        category: "tropik",
        emoji: "🍋",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysSQz8kOMviK-TWQOVnsYvFr1aCamfzVTnldI8J7Uhv0LA4wEqHnZFJWZ&s=10"
    },

    "Limon": {
        price: 50000,
        category: "klassik",
        emoji: "🍋",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgtHP6nLidikj3DAFL2YXWAdphpsGA02gdXA3U5_fHg&s=10"
    },

    "Golubika": {
        price: 40000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0k0gBaom4UfNF2aujKMl7P2CD37c9qZgHp09CN4Ydw&s=10"
    },

    "Kiwi": {
        price: 70000,
        category: "tropik",
        emoji: "🥝",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K7uFHfr5ZTbd2SGOAKQOIMC_I2iJ4Sjkt9JhdQDbog&s=10"
    },

    "Ejevika": {
        price: 70000,
        category: "rezavor",
        emoji: "🫐",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSZVyW2akikaVUKK58JUtJuJDlWMbzpvvep-q588UtxWL-ZH4oDbfBIU&s=10"
    },

    "Malina": {
        price: 100000,
        category: "rezavor",
        emoji: "🍓",
        image: "https://s0.rbk.ru/v6_top_pics/media/img/5/51/756590951624515.jpeg"
    },

    "Mandarin": {
        price: 40000,
        category: "klassik",
        emoji: "🍊",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScigdaR_6LTGi0cmBFBtviUgxrbLxFPnnjSpUuw8k6UQ&s=10"
    },

    "Kokos": {
        price: 50000,
        category: "tropik",
        emoji: "🥥",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpzdbVzEUXtIQCrcNLvetAO4lww8V9dP_L-NGrl4emQ&s=10"
    },

    "Avokado": {
        price: 30000,
        category: "tropik",
        emoji: "🥑",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIb2Wt6jhFCASPdiAqjpdRxuxf4w09QVKuNes_PVLNA&s"
    },

    "Olxo‘ri": {
        price: 10000,
        category: "klassik",
        emoji: "🟣",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHcv7ESh2ODUzpUx_rrGMd6iGxFwvmqVjagQmXdu_Ag&s=10"
    }
};


// ========================================
// 🌐 SAYT YUKLANGANDA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    renderFruits();
    updateCart();

});


// ========================================
// 🍓 MEVALARNI CHIQARISH
// ========================================

function renderFruits() {

    const grid =
        document.getElementById("fruitGrid");

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(fruits).forEach(
        ([name, fruit]) => {

            const card =
                document.createElement("article");

            card.className = "fruit-item";

            card.dataset.name = name;
            card.dataset.category =
                fruit.category;

            const categoryName =
                fruit.category === "tropik"
                    ? "TROPIK"
                    : fruit.category === "rezavor"
                        ? "REZAVOR"
                        : "KLASSIK";

            card.innerHTML = `

                <div class="fruit-image">

                    <img
                        src="${fruit.image}"
                        alt="${name}"
                        loading="lazy"
                        onerror="
                            this.style.display='none';
                            this.parentElement.innerHTML=
                            '<div style="
                            font-size:70px;
                            display:flex;
                            align-items:center;
                            justify-content:center;
                            width:100%;
                            height:100%;
                            ">${fruit.emoji}</div>'
                        "
                    >

                </div>

                <div class="fruit-info">

                    <span class="fruit-tag">
                        ${categoryName}
                    </span>

                    <h3>
                        ${name} ${fruit.emoji}
                    </h3>

                    <p>
                        Yangi, sifatli va mazali
                        ${name.toLowerCase()}.
                    </p>

                    <strong>
                        ${formatPrice(fruit.price)} so‘m
                    </strong>

                    <button
                        onclick="addToCart('${name.replace(/'/g, "\\'")}')"
                    >
                        🛒 Savatchaga qo‘shish
                    </button>

                </div>

            `;

            grid.appendChild(card);

        }
    );

    startScrollAnimation();

}


// ========================================
// 🛒 SAVATCHAGA QO‘SHISH
// ========================================

function addToCart(name) {

    if (!fruits[name]) return;

    const existing =
        cart.find(item => item.name === name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: fruits[name].price,

            quantity: 1

        });

    }

    updateCart();

    showMessage(
        "🛒",
        name,
        "Savatchaga qo‘shildi!"
    );

    const button =
        document.querySelector(".cart-button");

    if (button) {

        button.classList.remove(
            "cart-shake"
        );

        void button.offsetWidth;

        button.classList.add(
            "cart-shake"
        );

    }

}


// ========================================
// 🔄 SAVATCHANI YANGILASH
// ========================================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    if (
        !cartItems ||
        !cartCount ||
        !cartTotal
    ) return;

    let count = 0;
    let subtotal = 0;

    cart.forEach(item => {

        count += item.quantity;

        subtotal +=
            item.price *
            item.quantity;

    });

    let discount = 0;

    if (promoApplied) {

        discount =
            subtotal * DISCOUNT;

    }

    const total =
        subtotal - discount;

    cartCount.textContent = count;

    if (
        promoApplied &&
        subtotal > 0
    ) {

        cartTotal.innerHTML = `

            <span
                style="
                    text-decoration:line-through;
                    opacity:.5;
                    margin-right:8px;
                "
            >
                ${formatPrice(subtotal)} so‘m
            </span>

            <strong>
                ${formatPrice(total)} so‘m
            </strong>

        `;

    } else {

        cartTotal.textContent =
            formatPrice(total) +
            " so‘m";

    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Savatcha bo‘sh
                </h3>

                <p>
                    Mevalardan birortasini
                    tanlang 🍎
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const element =
            document.createElement("div");

        element.className =
            "cart-item";

        const emoji =
            getFruitEmoji(item.name);

        element.innerHTML = `

            <div class="cart-item-image">

                <div
                    style="
                        width:100%;
                        height:100%;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:32px;
                    "
                >
                    ${emoji}
                </div>

            </div>

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <p>
                    ${formatPrice(item.price)}
                    so‘m × ${item.quantity}
                </p>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})"
            >
                🗑️
            </button>

        `;

        cartItems.appendChild(element);

    });

}


// ========================================
// 🍎 EMOJI
// ========================================

function getFruitEmoji(name) {

    return fruits[name]?.emoji || "🍓";

}


// ========================================
// 💰 NARX
// ========================================

function formatPrice(number) {

    return Math.round(Number(number))
        .toLocaleString("uz-UZ");

}


// ========================================
// 🗑️ SAVATCHADAN O‘CHIRISH
// ========================================

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) return;

    const removed =
        cart[index].name;

    cart.splice(index, 1);

    updateCart();

    showMessage(
        "🗑️",
        removed,
        "Savatchadan olib tashlandi"
    );

}


// ========================================
// 🛒 SAVATCHANI OCHISH
// ========================================

function toggleCart() {

    const panel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("cartOverlay");

    if (!panel || !overlay) return;

    panel.classList.toggle("active");

    overlay.classList.toggle("active");

}


// ========================================
// 🎉 BUYURTMA FORMASI
// ========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Savatchangiz bo‘sh!"
        );

        return;

    }

    if (
        document.getElementById(
            "orderModal"
        )
    ) return;


    const modal =
        document.createElement("div");

    modal.id =
        "orderModal";


    modal.innerHTML = `

        <div
            class="order-modal-overlay"
            onclick="closeOrderModal()"
        ></div>


        <div class="order-modal">

            <button
                class="order-close"
                onclick="closeOrderModal()"
                type="button"
            >
                ✕
            </button>


            <div class="order-icon">
                🍓
            </div>


            <h2>
                Buyurtma berish
            </h2>


            <p class="order-subtitle">
                Yetkazib berish ma’lumotlarini kiriting
            </p>


            <form id="orderForm">


                <label>
                    👤 Ism-familiya
                </label>


                <input
                    type="text"
                    id="customerName"
                    placeholder="Ism va familiyangiz"
                    required
                >


                <label>
                    📞 Telefon raqami
                </label>


                <input
                    type="tel"
                    id="customerPhone"
                    placeholder="+998 90 123 45 67"
                    required
                >


                <label>
                    📍 Yetkazib berish manzili
                </label>


                <textarea
                    id="customerAddress"
                    placeholder="Viloyat, shahar/tuman, ko‘cha, uy..."
                    rows="3"
                    required
                ></textarea>


                <label>
                    💬 Qo‘shimcha izoh
                    <span>
                        (ixtiyoriy)
                    </span>
                </label>


                <textarea
                    id="customerComment"
                    placeholder="Masalan: eshik oldiga qoldiring..."
                    rows="2"
                ></textarea>


                <div class="order-summary">

                    <div>

                        <span>
                            Mahsulotlar:
                        </span>

                        <strong>
                            ${getCartCount()} ta
                        </strong>

                    </div>


                    <div>

                        <span>
                            Jami:
                        </span>

                        <strong>
                            ${getCartTotal()} so‘m
                        </strong>

                    </div>

                </div>


                <button
                    type="submit"
                    class="confirm-order-button"
                >
                    ✅ Buyurtmani tasdiqlash
                </button>


            </form>

        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("show");

    }, 20);


    document
        .getElementById("orderForm")
        .addEventListener(
            "submit",
            submitOrder
        );

}


// ========================================
// 🔢 MAHSULOTLAR SONI
// ========================================

function getCartCount() {

    let count = 0;

    cart.forEach(item => {

        count += item.quantity;

    });

    return count;

}


// ========================================
// 💰 SAVATCHA JAMI
// ========================================

function getCartTotal() {

    let subtotal = 0;

    cart.forEach(item => {

        subtotal +=
            item.price *
            item.quantity;

    });


    let discount = 0;

    if (promoApplied) {

        discount =
            subtotal * DISCOUNT;

    }


    return formatPrice(
        subtotal - discount
    );

}


// ========================================
// ❌ BUYURTMA OYNASINI YOPISH
// ========================================

function closeOrderModal() {

    const modal =
        document.getElementById(
            "orderModal"
        );

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {

        modal.remove();

    }, 250);

}


// ========================================
// 📦 BUYURTMA YUBORISH
// ========================================

function submitOrder(event) {

    event.preventDefault();


    const name =
        document
            .getElementById(
                "customerName"
            )
            .value
            .trim();


    const phone =
        document
            .getElementById(
                "customerPhone"
            )
            .value
            .trim();


    const address =
        document
            .getElementById(
                "customerAddress"
            )
            .value
            .trim();


    const comment =
        document
            .getElementById(
                "customerComment"
            )
            .value
            .trim();


    if (
        !name ||
        !phone ||
        !address
    ) {

        alert(
            "⚠️ Ism, telefon va manzilni kiriting!"
        );

        return;

    }


    let subtotal = 0;

    cart.forEach(item => {

        subtotal +=
            item.price *
            item.quantity;

    });


    const discount =
        promoApplied
            ? subtotal * DISCOUNT
            : 0;


    const total =
        subtotal - discount;


    const orderData = {

        name: name,

        phone: phone,

        address: address,

        comment: comment,

        products: cart.map(item => ({

            name: item.name,

            quantity: item.quantity,

            price: item.price,

            total:
                item.price *
                item.quantity

        })),

        subtotal: subtotal,

        discount: discount,

        total: total,

        promo:
            promoApplied
                ? "MEVAMIX10"
                : "",

        date:
            new Date()
                .toLocaleString(
                    "uz-UZ"
                )

    };


    console.log(
        "🍓 YANGI BUYURTMA:",
        orderData
    );


    alert(
        "✅ Buyurtmangiz qabul qilindi!\n\n" +

        "👤 " +
        name +
        "\n" +

        "📞 " +
        phone +
        "\n" +

        "📍 " +
        address +
        "\n\n" +

        "💰 Jami: " +
        formatPrice(total) +
        " so‘m"
    );


    cart = [];

    promoApplied = false;

    updateCart();

    closeOrderModal();

}


// ========================================
// 🔍 QIDIRUV
// ========================================

function searchFruits() {

    const input =
        document.getElementById(
            "searchInput"
        );

    if (!input) return;


    const search =
        input.value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            ".fruit-item"
        );


    cards.forEach(card => {

        const name =
            card.dataset.name
                .toLowerCase();


        if (
            name.includes(search)
        ) {

            card.classList.remove(
                "hidden"
            );

        } else {

            card.classList.add(
                "hidden"
            );

        }

    });

}


// ========================================
// 🏷️ KATEGORIYA
// ========================================

function filterFruits(
    category,
    button
) {

    const cards =
        document.querySelectorAll(
            ".fruit-item"
        );


    const buttons =
        document.querySelectorAll(
            ".category"
        );


    buttons.forEach(btn => {

        btn.classList.remove(
            "active"
        );

    });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    cards.forEach(card => {

        const cardCategory =
            card.dataset.category;


        if (
            category === "all" ||
            cardCategory === category
        ) {

            card.classList.remove(
                "hidden"
            );

        } else {

            card.classList.add(
                "hidden"
            );

        }

    });

}


// ========================================
// 🎟️ PROMOKOD
// ========================================

function checkPromo() {

    const input =
        document.getElementById(
            "promoInput"
        );


    const result =
        document.getElementById(
            "promoResult"
        );


    if (!input || !result) return;


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (
        code === "MEVAMIX10"
    ) {


        if (promoApplied) {

            result.innerHTML = `
                ℹ️ <strong>
                Promokod allaqachon ishlatilgan!
                </strong>
            `;

            result.className =
                "promo-success";

            return;

        }


        promoApplied = true;

        updateCart();


        result.innerHTML = `

            🎉 <strong>
            Promokod qabul qilindi!
            </strong>

            <br>

            Savatchadagi barcha
            mahsulotlarga
            <strong>
                10% chegirma
            </strong>
            berildi! 🍓

        `;


        result.className =
            "promo-success";


        input.value = "";


        showMessage(
            "🎟️",
            "MEVAMIX10",
            "10% chegirma faollashtirildi!"
        );


        return;

    }


    if (code === "") {

        result.innerHTML =
            "⚠️ Promokodni kiriting.";

        result.className =
            "promo-error";

        return;

    }


    result.innerHTML =
        "❌ Promokod noto‘g‘ri.";

    result.className =
        "promo-error";

}


// ========================================
// 🔔 XABAR
// ========================================

function showMessage(
    icon,
    title,
    text
) {

    const message =
        document.createElement(
            "div"
        );


    message.className =
        "fruit-message";


    message.innerHTML = `

        <div class="message-icon">
            ${icon}
        </div>

        <div>

            <strong>
                ${title}
            </strong>

            <p>
                ${text}
            </p>

        </div>

    `;


    document.body.appendChild(
        message
    );


    setTimeout(() => {

        message.classList.add(
            "message-show"
        );

    }, 50);


    setTimeout(() => {

        message.classList.remove(
            "message-show"
        );


        setTimeout(() => {

            message.remove();

        }, 500);


    }, 2500);

}


// ========================================
// ✨ SCROLL ANIMATION
// ========================================

function startScrollAnimation() {

    const elements =
        document.querySelectorAll(
            ".fruit-item, .about-visual, .about-text, .promo-content, .stats"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(element => {

            element.classList.add(
                "show-animation"
            );

        });

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show-animation"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


// ========================================
// 🖱️ NAVBAR SCROLL
// ========================================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );


        if (!navbar) return;


        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }
);


// ========================================
// 🍓 PARALLAX
// ========================================

document.addEventListener(
    "mousemove",
    event => {

        const fruit =
            document.querySelector(
                ".hero-fruit"
            );


        if (!fruit) return;


        const x =
            (
                window.innerWidth / 2 -
                event.clientX
            ) / 60;


        const y =
            (
                window.innerHeight / 2 -
                event.clientY
            ) / 60;


        fruit.style.transform =
            `translate(${x}px, ${y}px) scale(1.03)`;

    }
);


// ========================================
// 🍉 UCHIB YURADIGAN MEVALAR
// ========================================

function createFloatingFruit() {

    const fruitList = [

        "🍎",
        "🍊",
        "🍌",
        "🍓",
        "🍇",
        "🥭",
        "🍍",
        "🍉",
        "🥝",
        "🥑"

    ];


    const fruit =
        document.createElement(
            "div"
        );


    fruit.className =
        "random-fruit";


    fruit.textContent =
        fruitList[
            Math.floor(
                Math.random() *
                fruitList.length
            )
        ];


    fruit.style.left =
        Math.random() * 100 +
        "vw";


    fruit.style.fontSize =
        20 +
        Math.random() * 30 +
        "px";


    fruit.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    document.body.appendChild(
        fruit
    );


    setTimeout(() => {

        fruit.remove();

    }, 10000);

}


setInterval(
    createFloatingFruit,
    4000
);


// ========================================
// 🎮 SECRET MEVA MODE
// ========================================

let secretKeys = [];

const secretCode = [
    "m",
    "e",
    "v",
    "a"
];


document.addEventListener(
    "keydown",
    event => {

        secretKeys.push(
            event.key.toLowerCase()
        );


        if (
            secretKeys.length >
            secretCode.length
        ) {

            secretKeys.shift();

        }


        if (
            secretKeys.join("") ===
            secretCode.join("")
        ) {

            document.body.style.transition =
                "2s";


            document.body.style.filter =
                "hue-rotate(120deg)";


            setTimeout(() => {

                document.body.style.filter =
                    "";

            }, 5000);


            secretKeys = [];

        }

    }
);


// ========================================
// 🖱️ BUTTON CLICK ANIMATION
// ========================================

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) return;


        button.classList.add(
            "button-click"
        );


        setTimeout(() => {

            button.classList.remove(
                "button-click"
            );

        }, 250);

    }
);


// ========================================
// 🔄 MEVALARNI KO‘RSATISH
// ========================================

function showFruits() {

    const section =
        document.getElementById(
            "mevalar"
        );


    if (!section) return;


    section.scrollIntoView({
        behavior: "smooth"
    });

}
