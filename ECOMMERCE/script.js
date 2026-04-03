document.addEventListener('DOMContentLoaded', ()=> {
  const CART_KEY = "my_cart"
  const savedCart = JSON.parcel(localStorage.getItem(CART_kEY) || "[]");
  cart.push(...savedCart);
  renderCart()
    const products = [
        {id: 1, name: `Samsung S26`, price: 29.99},
        {id: 2, name: "HP Laptop 2", price: 39.99},
        {id: 3, name: "Hoddie", price: 49.99},
    ]

    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkoutButton = document.getElementById("checkout-btn");
    const box = document.getElementById("alert-card");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `<span>${product.name} ~ $${product.price.toFixed(2)}</span>
        <button class="add-btn" data-id="${product.id}">Add to cart</button> <button class="remove-btn" data-id="${product.id}">Remove from cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener("click", (e) =>{
        const clickedBtn = e.target.closest("button"); 
        if (!clickedBtn) {
          return;
        }

        const productId = Number(clickedBtn.dataset.id)
        const product = products.find(p => p.id === productId); 
        if (!product) {
          return;
        }

        if (clickedBtn.classList.contains("add-btn")) {
          addToCart(product);
          return;
        }

        if (clickedBtn.classList.contains("remove-btn")) {
          removeFromCart(productId)
        }

    })

    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    function removeFromCart(productId) { 
      const index = cart.findIndex(item => item.id === productId);
      if (index !== -1) cart.splice(index, 1);
      renderCart();
    }

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;
         
        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden");
            cartTotalMessage.classList.remove("hidden");

            cart.forEach((item, index) =>{
                totalPrice += item.price;
                const cartItem = document.createElement("div"); 
                cartItem.innerHTML = `
                ${item.name} ~ $${item.price.toFixed(2)}
                `
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
            })
        } else {
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent = `$0.00`; 
            
            
        }
    }

    let alertTimeoutId = null;
    function showAlert(message) {
        box.textContent = message;
        box.classList.remove("hidden");

        if (alertTimeoutId) {
            clearTimeout(alertTimeoutId);
        } 

         alertTimeoutId = setTimeout(() => {
            box.classList.add("hidden");
        }, 3000);

    }

    document.getElementById("checkout-btn").addEventListener("click", () => {
        if (cart.length  > 0) {
            cart.length = 0;
            renderCart();
            showAlert("Checkout successful. Your cart is now empty.");
            return;
        }
    });



    

}); 
