document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const totalElement = document.getElementById('total');
    let total = 0;
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const price = parseFloat(button.previousElementSibling.textContent.slice(1)); // Extracting price without '$' sign
        total += price;
        totalElement.textContent = total.toFixed(2); // Displaying total with 2 decimal places
      });
    });
  });