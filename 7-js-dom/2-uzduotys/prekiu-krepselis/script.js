// Update item totals and the overall total price
function updateCart() {
    const rows = document.querySelectorAll(".cart-table tbody tr");
    let totalPrice = 0;
  
    rows.forEach((row) => {
      const price = parseFloat(row.querySelector("td:nth-child(2)").textContent.replace("€", ""));
      const quantity = parseInt(row.querySelector(".quantity").value);
      const itemTotal = row.querySelector(".item-total");
  
      const total = price * quantity;
      itemTotal.textContent = `${total.toFixed(2)} €`;
      totalPrice += total;
    });
  
    document.getElementById("total-price").textContent = `${totalPrice.toFixed(2)} €`;
  }
  
  // Event listeners for quantity buttons
  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", (e) => {
      const input = e.target.parentElement.querySelector(".quantity");
      input.value = parseInt(input.value) + 1;
      updateCart();
    });
  });
  
  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", (e) => {
      const input = e.target.parentElement.querySelector(".quantity");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        updateCart();
      }
    });
  });
  

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
      updateCart();
    });
  });
  

  