const products = [
 {name:"Tarvuz",price:5000,cat:"meva",emoji:"🍉",img:"photo-1587049352851-8d4e89133924"},
 {name:"Qovun",price:8000,cat:"meva",emoji:"🍈",img:"photo-1519996529931-28324d4a630e"},
 {name:"Mango",price:20000,cat:"tropik",emoji:"🥭",img:"photo-1553279768-865429fa0078",unit:"dona"},
 {name:"Dragon Fruit",price:25000,cat:"tropik",emoji:"🐉",img:"photo-1527325678964-54921661f888",unit:"dona"},
 {name:"Shaftoli",price:25000,cat:"meva",emoji:"🍑",img:"photo-1629828874514-c1e5103d0b83"},
 {name:"Junli shaftoli",price:25000,cat:"meva",emoji:"🍑",img:"photo-1595743825637-cdafc8ad4173"},
 {name:"Oq shaftoli",price:25000,cat:"meva",emoji:"🍑",img:"photo-1629828874514-c1e5103d0b83"},
 {name:"Anjir shaftoli",price:25000,cat:"meva",emoji:"🍑",img:"photo-1595743825637-cdafc8ad4173"},
 {name:"Uzum",price:30000,cat:"meva",emoji:"🍇",img:"photo-1537640538966-79f369143f8f"},
 {name:"Apelsin",price:30000,cat:"meva",emoji:"🍊",img:"photo-1547514701-42782101795e"},
 {name:"Yashil olma",price:25000,cat:"meva",emoji:"🍏",img:"photo-1570913149827-d2ac84ab3f9a"},
 {name:"Banan",price:20000,cat:"tropik",emoji:"🍌",img:"photo-1571771894821-ce9b6c11b08e"},
 {name:"Anjir",price:25000,cat:"meva",emoji:"🟣",img:"photo-1604495772376-9657f0035eb5"},
 {name:"Nok",price:40000,cat:"meva",emoji:"🍐",img:"photo-1514756331096-242fdeb70d4a"},
 {name:"Qulupnay",price:100000,cat:"rezavor",emoji:"🍓",img:"photo-1464965911861-746a04b4bca6"},
 {name:"Ananas",price:50000,cat:"tropik",emoji:"🍍",img:"photo-1550258987-190a2d41a8ba",unit:"dona"},
 {name:"Laym",price:100000,cat:"meva",emoji:"🍋",img:"photo-1511690743698-d9d85f2fbf38"},
 {name:"Limon",price:50000,cat:"meva",emoji:"🍋",img:"photo-1590502593747-42a996133562"},
 {name:"Golubika",price:40000,cat:"rezavor",emoji:"🫐",img:"photo-1498557850523-fd3d118b962e"},
 {name:"Kiwi",price:70000,cat:"tropik",emoji:"🥝",img:"photo-1585059895524-72359e06133a"},
 {name:"Ejevika",price:70000,cat:"rezavor",emoji:"🫐",img:"photo-1618198093002-ad4e0054843b"},
 {name:"Malina",price:100000,cat:"rezavor",emoji:"🍓",img:"photo-1577069861033-55d04cec4ef5"},
 {name:"Mandarin",price:40000,cat:"meva",emoji:"🍊",img:"photo-1611080626919-7cf5a9dbab5b"},
 {name:"Kokos",price:50000,cat:"tropik",emoji:"🥥",img:"photo-1550583724-b2692b85b150",unit:"dona"},
 {name:"Avokado",price:30000,cat:"tropik",emoji:"🥑",img:"photo-1523049673857-eb18f1d7b578",unit:"dona"},
 {name:"Olxo‘ri",price:10000,cat:"meva",emoji:"🟣",img:"photo-1495908333425-29a1e0918c5f"}
];
const $ = s => document.querySelector(s);
const money = n => n.toLocaleString("en-US").replace(/,/g," ") + " so‘m";
let cart = JSON.parse(localStorage.getItem("mevaMixCart") || "[]");
let activeCat = "all", promoApplied = false, toastTimer;
const pieceItems = new Set(["Mango","Dragon Fruit","Ananas","Kokos","Avokado"]);
function saveCart(){localStorage.setItem("mevaMixCart",JSON.stringify(cart));}
function photoUrl(id){return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;}
function renderProducts(){
 const term=$("#searchInput").value.trim().toLocaleLowerCase("uz");
 const list=products.filter(p=>(activeCat==="all"||p.cat===activeCat)&&p.name.toLocaleLowerCase("uz").includes(term));
 $("#resultsCount").textContent=`${list.length} ta mahsulot`;
 $("#emptyState").classList.toggle("hidden",list.length!==0);
 $("#productGrid").innerHTML=list.map((p,i)=>`<article class="product-card" style="animation-delay:${Math.min(i*25,250)}ms"><div class="product-photo"><img src="${photoUrl(p.img)}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80'"><span class="fresh-tag">✦ Yangi tanlov</span></div><div class="product-info"><h3>${p.name}</h3><span class="product-unit">1 ${p.unit||"kg"} uchun</span><div class="product-bottom"><div class="price">${money(p.price)}<small>/${p.unit||"kg"}</small></div><button class="add-btn" data-add="${p.name}" aria-label="${p.name} savatchaga qo‘shish">+</button></div></div></article>`).join("");
}
function totals(){
 const subtotal=cart.reduce((s,i)=>s+i.price*i.qty,0), discount=promoApplied?Math.round(subtotal*.1):0;
 return {subtotal,discount,total:subtotal-discount};
}
function renderCart(){
 const count=cart.reduce((s,i)=>s+i.qty,0),t=totals();
 $("#cartCount").textContent=count;$("#drawerCount").textContent=`(${count})`;
 $("#cartItems").innerHTML=cart.map(i=>`<div class="cart-row"><div><h4>${i.name}</h4><small>${money(i.price)} / ${i.unit}</small><div class="qty-controls"><button data-qty="${i.name}" data-delta="-1" aria-label="Kamaytirish">−</button><span>${i.qty}</span><button data-qty="${i.name}" data-delta="1" aria-label="Ko‘paytirish">+</button></div></div><div><div class="cart-row-price">${money(i.price*i.qty)}</div><button class="remove-item" data-remove="${i.name}">O‘chirish ×</button></div></div>`).join("");
 const empty=cart.length===0;$("#cartEmpty").classList.toggle("hidden",!empty);$("#cartItems").classList.toggle("hidden",empty);$("#cartBottom").classList.toggle("hidden",empty);
 $("#subtotal").textContent=money(t.subtotal);$("#discountAmount").textContent="−"+money(t.discount);$("#total").textContent=money(t.total);$("#checkoutTotal").textContent=money(t.total);$("#discountLine").classList.toggle("hidden",!promoApplied||!t.discount);
 saveCart();
}
function toast(msg){const el=$("#toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2500);}
function addToCart(name){const p=products.find(x=>x.name===name);if(!p)return;const existing=cart.find(x=>x.name===name);if(existing)existing.qty++;else cart.push({name:p.name,price:p.price,qty:1,unit:p.unit||"kg"});renderCart();toast(`${name} savatchaga qo‘shildi`);}
function openCart(){ $("#overlay").classList.add("show");$("#cartDrawer").classList.add("open");document.body.style.overflow="hidden";}
function closeCart(){ $("#overlay").classList.remove("show");$("#cartDrawer").classList.remove("open");document.body.style.overflow="";}
function applyPromo(){const val=$("#promoInput").value.trim().toUpperCase();if(val==="MEVAMIX10"){promoApplied=true;$("#promoMessage").textContent="Ajoyib! 10% chegirma qo‘llandi 🎉";$("#promoMessage").style.color="#34763b";}else{promoApplied=false;$("#promoMessage").textContent="Kod topilmadi. MEVAMIX10 kodini tekshiring.";$("#promoMessage").style.color="#b54732";}renderCart();}
$("#productGrid").addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)addToCart(b.dataset.add);});
$("#cartItems").addEventListener("click",e=>{const q=e.target.closest("[data-qty]"),r=e.target.closest("[data-remove]");if(q){const item=cart.find(i=>i.name===q.dataset.qty);if(item){item.qty+=Number(q.dataset.delta);if(item.qty<1)cart=cart.filter(i=>i!==item);renderCart();}}if(r){cart=cart.filter(i=>i.name!==r.dataset.remove);renderCart();}});
$("#categories").addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;activeCat=b.dataset.cat;document.querySelectorAll(".category").forEach(x=>x.classList.toggle("active",x===b));renderProducts();});
$("#searchInput").addEventListener("input",renderProducts);
$("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#overlay").addEventListener("click",closeCart);
$("#browseBtn").addEventListener("click",()=>{closeCart();$("#mevalar").scrollIntoView({behavior:"smooth"});});
$("#applyPromo").addEventListener("click",applyPromo);$("#promoInput").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();applyPromo();}});
$("#copyPromo").addEventListener("click",async()=>{try{await navigator.clipboard.writeText("MEVAMIX10");toast("MEVAMIX10 nusxalandi!");}catch{toast("Promo-kod: MEVAMIX10");}});
$("#checkoutBtn").addEventListener("click",()=>{if(!cart.length)return;$("#checkoutModal").classList.remove("hidden");});
$("#closeCheckout").addEventListener("click",()=>$("#checkoutModal").classList.add("hidden"));
$("#checkoutModal").addEventListener("click",e=>{if(e.target===$("#checkoutModal"))$("#checkoutModal").classList.add("hidden");});
$("#checkoutForm").addEventListener("submit",async e=>{
 e.preventDefault();if(!cart.length){toast("Savatchangiz bo‘sh");return;}
 const form=e.currentTarget,fd=new FormData(form),btn=$("#submitOrder"),msg=$("#formMessage");
 const payload={name:fd.get("name").trim(),phone:fd.get("phone").trim(),address:fd.get("address").trim(),deliveryTime:fd.get("deliveryTime"),comment:fd.get("comment").trim(),promoCode:promoApplied?"MEVAMIX10":"",items:cart.map(i=>({name:i.name,qty:i.qty}))};
 btn.disabled=true;btn.textContent="Yuborilmoqda…";msg.classList.remove("error");msg.textContent="Buyurtmangiz xavfsiz yuborilmoqda…";
 try{
  const response=await fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
  const data=await response.json();if(!response.ok)throw new Error(data.error||"Buyurtma yuborilmadi.");
  msg.textContent="✅ "+data.message;form.reset();cart=[];promoApplied=false;$("#promoInput").value="";renderCart();
  setTimeout(()=>{$("#checkoutModal").classList.add("hidden");closeCart();msg.textContent="";toast("Rahmat! Buyurtmangiz qabul qilindi.");},1600);
 }catch(err){msg.classList.add("error");msg.textContent="⚠️ "+err.message+" Serverni ishga tushirganingizni tekshiring.";}
 finally{btn.disabled=false;btn.innerHTML='Buyurtmani yuborish <span>↗</span>';}
});
$("#menuBtn").addEventListener("click",()=>$("#nav").classList.toggle("open"));
$("#nav").addEventListener("click",e=>{if(e.target.closest("a"))$("#nav").classList.remove("open");});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();$("#checkoutModal").classList.add("hidden");}});
$("#year").textContent=new Date().getFullYear();
renderProducts();renderCart();
