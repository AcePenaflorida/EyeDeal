
// function toggleCartVisibility(method) {
//     const cartContainer = document.getElementById('cart-container');
//     if (method === "click") {
//         // Toggle visibility if the method is "click"
//         cartContainer.classList.toggle('visible');
//     } else if(method == "close") {
//         // Ensure the cart is not visible when method is not "click"
//         cartContainer.classList.remove('visible');
//     }
// }


document.addEventListener("DOMContentLoaded", () => {
    // Handle remove buttons
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productRow = button.closest('.product-row');
            if (productRow) {
                productRow.remove();  // Remove the entire product row from the DOM
            }
        });
    });

    // Handle quantity buttons (minus and plus)
    const minusButtons = document.querySelectorAll('.minus');
    const plusButtons = document.querySelectorAll('.plus');
    const quantityInputs = document.querySelectorAll('.quantity');

    minusButtons.forEach((minusButton, index) => {
        minusButton.addEventListener('click', () => {
            const quantityInput = quantityInputs[index];
            let currentQuantity = parseInt(quantityInput.value, 10);
            if (!isNaN(currentQuantity) && currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });
    });

    plusButtons.forEach((plusButton, index) => {
        plusButton.addEventListener('click', () => {
            const quantityInput = quantityInputs[index];
            let currentQuantity = parseInt(quantityInput.value, 10);
            if (!isNaN(currentQuantity)) {
                quantityInput.value = currentQuantity + 1;
            }
        });
    });

    // Handle checkbox selection (optional)
    const checkboxes = document.querySelectorAll('.product-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // You can add functionality here, like updating the total price when the checkbox is checked.
            console.log(checkbox.checked ? "Checked" : "Unchecked");
        });
    });

    // Handle hover images for product containers
    const images = document.querySelectorAll('.cart-product-container img');
    images.forEach(img => {
        const originalSrc = img.src; // Store the original image source
        const hoverSrc = img.getAttribute('data-hover'); // Get the hover image from data-hover

        // Change image on mouseover
        img.addEventListener('mouseover', () => {
            if (hoverSrc) {
                img.src = hoverSrc; // Update image to hover image
            }
        });

        // Revert to original image on mouseout
        img.addEventListener('mouseout', () => {
            img.src = originalSrc; // Revert to the original image
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all product rows
    const productRows = document.querySelectorAll('.product-row');
  
    productRows.forEach((row, index) => {
      // Get the checkbox input and label elements within each product row
      const checkbox = row.querySelector('.product-checkbox');
      const label = row.querySelector('label');
  
      // Generate a unique ID for each checkbox
      const checkboxId = `checkbox-${index + 1}`;
      checkbox.id = checkboxId;
      label.setAttribute('for', checkboxId);
  
      // Add an event listener for the checkbox change event
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          label.classList.add('checked'); // Add 'checked' class if the checkbox is checked
        } else {
          label.classList.remove('checked'); // Remove 'checked' class if unchecked
        }
      });
    });
  });

//   document.addEventListener('DOMContentLoaded', function () {
//     function addToCart(event) {
//         const button = event.target;
//         const name = button.getAttribute('data-name');
//         const price = button.getAttribute('data-price');
//         const color = button.getAttribute('data-color');
//         const image = button.getAttribute('data-image');

//         const cartProductContainer = document.getElementById('cart-container').querySelector('.cart-product-container');

//         const productRow = document.createElement('div');
//         productRow.classList.add('product-row');

//         productRow.innerHTML = `
//             <div class="checkbox-wrapper">
//                 <input type="checkbox" class="product-checkbox">
//                 <label></label>
//             </div>
//             <div class="product-img">
//                 <img src="${image}" alt="${name}">
//             </div>
//             <div class="product-text">
//                 <span class="product-category">Sunglasses</span>
//                 <span class="product-name">${name}</span>
//                 <span class="product-color">${color}</span>
//             </div>
//             <div class="quantity-box">
//                 <button class="minus">
//                     <img src="assets/buttons/minus-sign.png" alt="minus">
//                 </button>
//                 <input class="quantity" type="text" value="1" style="width: 30px; text-align: center; margin: 0 10px;">
//                 <button class="plus">
//                     <img src="assets/buttons/plus-sign.png" alt="plus">
//                 </button>
//             </div>
//             <div class="product-price">${price}</div>
//             <button class="remove-btn">
//                 <img src="assets/buttons/remove-button.png" alt="remove">
//             </button>
//         `;

//         cartProductContainer.appendChild(productRow);

//         // Add event listeners for removal and quantity adjustments
//         const removeBtn = productRow.querySelector('.remove-btn');
//         removeBtn.addEventListener('click', function() {
//             productRow.remove();
//         });

//         const minusButton = productRow.querySelector('.minus');
//         const plusButton = productRow.querySelector('.plus');
//         const quantityInput = productRow.querySelector('.quantity');

//         minusButton.addEventListener('click', () => {
//             let currentQuantity = parseInt(quantityInput.value, 10);
//             if (!isNaN(currentQuantity) && currentQuantity > 1) {
//                 quantityInput.value = currentQuantity - 1;
//             }
//         });

//         plusButton.addEventListener('click', () => {
//             let currentQuantity = parseInt(quantityInput.value, 10);
//             if (!isNaN(currentQuantity)) {
//                 quantityInput.value = currentQuantity + 1;
//             }
//         });
//     }

//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', addToCart);
//     });

//     // Hide popup when clicking outside the popup content


    
// });

document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const cartButton = document.getElementById('cart-button');  // Button to open the cart

    // Function to toggle cart visibility
    function toggleCartVisibility(method) {
        if (method === "click") {
            cartContainer.classList.add('visible');
        } else if (method === "close") {
            cartContainer.classList.remove('visible');
        }
    }

    // Show cart when the "Cart" button is clicked
    cartButton.addEventListener('click', () => toggleCartVisibility('click'));

    // Function to add items to the cart (similar to your addToCart function)
    function addToCart(event) {
        const button = event.target;
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        const color = button.getAttribute('data-color');
        const image = button.getAttribute('data-image');

        const cartProductContainer = document.getElementById('cart-container').querySelector('.cart-product-container');

        const productRow = document.createElement('div');
        productRow.classList.add('product-row');

        productRow.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" class="product-checkbox">
                <label></label>
            </div>
            <div class="product-img">
                <img src="${image}" alt="${name}">
            </div>
            <div class="product-text">
                <span class="product-category">Sunglasses</span>
                <span class="product-name">${name}</span>
                <span class="product-color">${color}</span>
            </div>
            <div class="quantity-box">
                <button class="minus">
                    <img src="assets/buttons/minus-sign.png" alt="minus">
                </button>
                <input class="quantity" type="text" value="1" style="width: 30px; text-align: center; margin: 0 10px;">
                <button class="plus">
                    <img src="assets/buttons/plus-sign.png" alt="plus">
                </button>
            </div>
            <div class="product-price">${price}</div>
            <button class="remove-btn">
                <img src="assets/buttons/remove-button.png" alt="remove">
            </button>
        `;

        cartProductContainer.appendChild(productRow);

        // Add event listeners for removal and quantity adjustments
        const removeBtn = productRow.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            productRow.remove();
        });

        const minusButton = productRow.querySelector('.minus');
        const plusButton = productRow.querySelector('.plus');
        const quantityInput = productRow.querySelector('.quantity');

        minusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value, 10);
            if (!isNaN(currentQuantity) && currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });

        plusButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityInput.value, 10);
            if (!isNaN(currentQuantity)) {
                quantityInput.value = currentQuantity + 1;
            }
        });
    }

    // Add event listener for "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});
