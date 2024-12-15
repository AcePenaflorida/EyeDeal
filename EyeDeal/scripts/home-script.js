document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.product-container img');

    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseover', () => {
            if (hoverSrc) {
                img.src = hoverSrc;
            }
        });

        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const contactUsPopup = document.getElementById('contact-us-popup');
    const contactUsBtn = document.getElementById('contact-us-butn');

    function toggleCartVisibility(method) {
        if (method === "click") {
            contactUsPopup.classList.add('visible');
        } else if (method === "close") {
            contactUsPopup.classList.remove('visible');
        }
    }

    contactUsBtn.addEventListener('click', () => toggleCartVisibility('click'));

    contactUsPopup.addEventListener('click', (e) => {
        if (e.target === contactUsPopup) {
            toggleCartVisibility('close');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productRow = button.closest('.product-row');
            if (productRow) {
                productRow.remove();
            }
        });
    });

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

    const checkboxes = document.querySelectorAll('.product-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log(checkbox.checked ? "Checked" : "Unchecked");
        });
    });

    const images = document.querySelectorAll('.cart-product-container img');
    images.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseover', () => {
            if (hoverSrc) {
                img.src = hoverSrc;
            }
        });

        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const productRows = document.querySelectorAll('.product-row');

    productRows.forEach((row, index) => {
        const checkbox = row.querySelector('.product-checkbox');
        const label = row.querySelector('label');

        const checkboxId = `checkbox-${index + 1}`;
        checkbox.id = checkboxId;
        label.setAttribute('for', checkboxId);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutUsBtn = document.getElementById('about-us-btn');
    const aboutUsPopup = document.getElementById('about-us-popup');
    const closeAboutUs = document.getElementById('close-about-us');

    aboutUsBtn.addEventListener('click', () => {
        aboutUsPopup.style.display = 'flex';
    });

    closeAboutUs.addEventListener('click', () => {
        aboutUsPopup.style.display = 'none';
    });

    aboutUsPopup.addEventListener('click', (event) => {
        if (event.target === aboutUsPopup) {
            aboutUsPopup.style.display = 'none';
        }
    });
});
