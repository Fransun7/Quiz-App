document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: `Samsung S26`, price: 29.99 },
    { id: 2, name: "HP Laptop 2", price: 39.99 },
    { id: 3, name: "Hoddie", price: 49.99 },
  ];

  const cart = []; // keep as const; we will mutate with splice/filter pattern below

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const box = document.getElementById("alert-card");

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <span>${product.name} ~ $${product.price.toFixed(2)}</span>
      <button class="add-btn" data-id="${product.id}">Add to cart</button>
      <button class="remove-btn" data-id="${product.id}">Remove from cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return; // click was not on a button

    const productId = Number(btn.dataset.id); // same as getAttribute("data-id")
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (btn.classList.contains("add-btn")) {
      addToCart(product);
      return;
    }

    if (btn.classList.contains("remove-btn")) {
      removeFromCart(productId);
      return;
    }
  });

  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  function removeFromCart(productId) {
    // Option A: remove ONE instance (recommended if user can add same product multiple times)
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

      cart.forEach(item => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `${item.name} ~ $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
      });

      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
    } else {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  let alertTimeoutId = null;
  function showAlert(message) {
    box.textContent = message;
    box.classList.remove("hidden");

    if (alertTimeoutId) clearTimeout(alertTimeoutId);

    alertTimeoutId = setTimeout(() => {
      box.classList.add("hidden");
    }, 3000);
  }

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length > 0) {
      cart.length = 0;
      renderCart();
      showAlert("Checkout successful. Your cart is now empty.");
    }
  });
});