// ========================================
// 🍓 MEVA MIX — JAVASCRIPT
// ========================================

let cart = [];

let promoApplied = false;

const DISCOUNT = 0.10;


// ========================================
// 🍎 MEVALAR
// ========================================

const fruits = {

    "Qizil olma": {
        price: 25000
    },

    "Banan": {
        price: 30000
    },

    "Apelsin": {
        price: 45000
    },

    "Qulupnay": {
        price: 50000
    },

    "Uzum": {
        price: 47000
    },

    "Mango": {
        price: 35000
    }

};


// ========================================
// 🌐 SAYT YUKLANGANDA
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

    startScrollAnimation();

});


// ========================================
// 🍓 MEVALARNI KO‘RISH
// ========================================

function showFruits() {

    const section =
        document.getElementById("mevalar");

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

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


    // ====================================
    // 💰 10% CHEGIRMA
    // ====================================

    let discount = 0;

    let total = subtotal;


    if (promoApplied) {

        discount =
            subtotal * DISCOUNT;

        total =
            subtotal - discount;

    }


    // ====================================
    // 🛒 COUNT
    // ====================================

    cartCount.textContent = count;


    // ====================================
    // 💰 TOTAL
    // ====================================

    if (promoApplied && subtotal > 0) {

        cartTotal.innerHTML = `

            <span
                style="
                    text-decoration: line-through;
                    opacity: 0.5;
                    margin-right: 8px;
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


    // ====================================
    // 🛒 SAVATCHA BO‘SH
    // ====================================

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>
                    🛒
                </div>

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


    // ====================================
    // 🍎 CART ITEMS
    // ====================================

    cart.forEach((item, index) => {

        const element =
            document.createElement("div");


        element.className =
            "cart-item";


        element.innerHTML = `

            <div
                class="cart-item-image"
            >

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
                    ${getFruitEmoji(item.name)}
                </div>

            </div>


            <div
                class="cart-item-info"
            >

                <h4>
                    ${item.name}
                </h4>


                <p>

                    ${formatPrice(item.price)}
                    so‘m ×
                    ${item.quantity}

                </p>

            </div>


            <button
                class="remove-item"
                onclick="
                    removeFromCart(${index})
                "
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(element);

    });

}


// ========================================
// 🍎 MEVA EMOJISI
// ========================================

function getFruitEmoji(name) {

    const emojis = {

        "Qizil olma": "🍎",

        "Banan": "🍌",

        "Apelsin": "🍊",

        "Qulupnay": "🍓",

        "Uzum": "🍇",

        "Mango": "🥭"

    };


    return emojis[name] || "🍓";

}


// ========================================
// 💰 NARX FORMAT
// ========================================

function formatPrice(number) {

    return Math.round(Number(number))
        .toLocaleString("uz-UZ");

}


// ========================================
// 🗑️ O‘CHIRISH
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
        document.getElementById(
            "cartPanel"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (!panel || !overlay) return;


    panel.classList.toggle(
        "active"
    );


    overlay.classList.toggle(
        "active"
    );

}


// ========================================
// 🎉 BUYURTMA
// ========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Savatchangiz bo‘sh!"
        );

        return;

    }


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


    const total =
        subtotal - discount;


    let message =
        "🎉 Buyurtmangiz qabul qilindi!\n\n";


    if (promoApplied) {

        message +=
            "Asl narx: " +
            formatPrice(subtotal) +
            " so‘m\n";

        message +=
            "🎟️ Chegirma: 10%\n";

        message +=
            "💚 Tejadingiz: " +
            formatPrice(discount) +
            " so‘m\n";

    }


    message +=
        "Jami: " +
        formatPrice(total) +
        " so‘m\n\n";


    message +=
        "🍓 Meva Mix sizga rahmat aytadi!";


    alert(message);


    cart = [];

    promoApplied = false;


    updateCart();


    toggleCart();

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
// 🎟️ PROMOKOD — 10% CHEGIRMA
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


    // ====================================
    // 🎉 TO‘G‘RI PROMOKOD
    // ====================================

    if (code === "MEVAMIX10") {


        if (promoApplied) {

            result.innerHTML = `

                ℹ️ <strong>
                Promokod allaqachon ishlatilgan!
                </strong>

                <br>

                10% chegirma savatchada
                hisoblangan.

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
            <strong>10% chegirma</strong>
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


    // ====================================
    // ⚠️ BO‘SH
    // ====================================

    if (code === "") {

        result.innerHTML = `

            ⚠️ Promokodni kiriting.

        `;


        result.className =
            "promo-error";


        return;

    }


    // ====================================
    // ❌ NOTO‘G‘RI
    // ====================================

    result.innerHTML = `

        ❌ Promokod noto‘g‘ri.

    `;


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
        document.createElement("div");


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
            `
            translate(${x}px, ${y}px)
            scale(1.03)
            `;

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
        "🍉"

    ];


    const fruit =
        document.createElement("div");


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
// 🎮 SECRET MEVA MODE 😎
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