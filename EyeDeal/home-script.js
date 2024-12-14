document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.product-container img');

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




document.addEventListener('DOMContentLoaded', () => {
    const contactUsPopup = document.getElementById('contact-us-popup');
    const contactUsBtn = document.getElementById('contact-us-butn');

    // Function to toggle popup visibility
    function toggleCartVisibility(method) {
        if (method === "click") {
            contactUsPopup.classList.add('visible');
        } else if (method === "close") {
            contactUsPopup.classList.remove('visible');
        }
    }

    // Show popup when the "Contact Us" button is clicked
    contactUsBtn.addEventListener('click', () => toggleCartVisibility('click'));

    // Hide popup when clicking outside the popup content
    contactUsPopup.addEventListener('click', (e) => {
        // Ensure the click is outside the content box
        if (e.target === contactUsPopup) {
            toggleCartVisibility('close');
        }
    });
});




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



document.addEventListener('DOMContentLoaded', () => {
    const aboutUsBtn = document.getElementById('about-us-btn');
    const aboutUsPopup = document.getElementById('about-us-popup');
    const closeAboutUs = document.getElementById('close-about-us');

    // Show the popup when the button is clicked
    aboutUsBtn.addEventListener('click', () => {
        aboutUsPopup.style.display = 'flex';
    });

    // Hide the popup when clicking the close button
    closeAboutUs.addEventListener('click', () => {
        aboutUsPopup.style.display = 'none';
    });

    // Close popup if clicking outside the popup-box
    aboutUsPopup.addEventListener('click', (event) => {
        if (event.target === aboutUsPopup) {
            aboutUsPopup.style.display = 'none';
        }
    });
});

