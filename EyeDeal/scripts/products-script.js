document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('btn');
    var sunglassesText = document.getElementById('sunglasses');
    var sunglassesSection = document.getElementsByClassName("sunglasses-products")[0];
    var opticalText = document.getElementById('optical');
    var opticalSection = document.getElementsByClassName("optical-products")[0];
  
    function sunglassesClick() {
      btn.style.left = '0';
      sunglassesSection.style.display = 'block';
      opticalSection.style.display = 'none';
      sunglassesText.style.color = 'white';
      opticalText.style.color = 'black';
    }
  
    function opticalClick() {
      btn.style.left = '110px';
      opticalSection.style.display = 'block';
      sunglassesSection.style.display = 'none';
      sunglassesText.style.color = 'black';
      opticalText.style.color = 'white';
    }
  
    window.sunglassesClick = sunglassesClick;
    window.opticalClick = opticalClick;
  });
  
  function toggleCartVisibility(method) {
    const cartContainer = document.getElementById('cart-container');
    if (method === "click") {
      cartContainer.classList.toggle('visible');
    } else if (method == "close") {
      cartContainer.classList.remove('visible');
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const noProductText = document.getElementById('noProductText');
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', function () {
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
  
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          label.classList.add('checked');
        } else {
          label.classList.remove('checked');
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const noProductText = document.getElementById('noProductText');
        noProductText.textContent = "";
  
        this.dataset.originalText = this.textContent;
        this.dataset.originalFontSize = this.style.fontSize;
        this.dataset.originalBackgroundColor = this.style.backgroundColor;
  
        this.textContent = 'Added to Cart';
        this.style.fontSize = '11px';
        this.style.backgroundColor = 'darkgray';
        this.style.display = 'block';
  
        const productCard = this.closest('.product-card');
        if (!productCard) return;
  
        const productImage = productCard.querySelector('img').src;
        const productName = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        const productColor = productCard.querySelector('.product-description').textContent;
  
        const cartProductContainer = document.getElementById('cart-container').querySelector('.cart-product-container');
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');
  
        productRow.innerHTML = `
          <div class="checkbox-wrapper">
            <input type="checkbox" class="product-checkbox">
            <label></label>
          </div>
          <div class="product-img" style="background-image: url(${productImage});"></div>
          <div class="product-text">
            <span class="product-name">${productName}</span>
            <span class="product-color">${productColor}</span>
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
          <div class="product-price">${productPrice}</div>
          <button class="remove-btn">
            <img src="assets/buttons/remove-button.png" alt="remove">
          </button>
        `;
  
        cartProductContainer.appendChild(productRow);
  
        const removeBtn = productRow.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function () {
          productRow.remove();
          const addToCartButton = productCard.querySelector('.add-to-cart');
          if (addToCartButton) {
            addToCartButton.textContent = addToCartButton.dataset.originalText || 'Add to Cart';
            addToCartButton.style.fontSize = addToCartButton.dataset.originalFontSize || '';
            addToCartButton.style.backgroundColor = addToCartButton.dataset.originalBackgroundColor || '';
            addToCartButton.style.display = '';
          }
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
  
        const productRows = document.querySelectorAll('.product-row');
        productRows.forEach((row, index) => {
          const checkbox = row.querySelector('.product-checkbox');
          const label = row.querySelector('label');
          const checkboxId = `checkbox-${index + 1}`;
          checkbox.id = checkboxId;
          label.setAttribute('for', checkboxId);
  
          checkbox.addEventListener('change', function () {
            if (this.checked) {
              label.classList.add('checked');
            } else {
              label.classList.remove('checked');
            }
          });
        });
      });
    });
  });
  
  function openReviewPopup() {
    document.getElementById('reviewPopupContainer').style.display = 'block';
  }
  
  function closeReviewPopup() {
    document.getElementById('reviewPopupContainer').style.display = 'none';
  }
  
  function closeReviewPopupOutside(event) {
    if (event.target.id === 'reviewPopupContainer') {
      closeReviewPopup();
    }
  }
  
  function addReviewComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('reviewCommentInput');
    const commentText = commentInput.value.trim();
    if (commentText) {
      const commentsContainer = document.getElementById('reviewCommentsContainer');
      const newComment = document.createElement('div');
      newComment.classList.add('review-comment-item');
      newComment.innerHTML = `
        <p>${commentText}</p>
        <span>Posted on ${new Date().toLocaleDateString()}</span>
      `;
      commentsContainer.prepend(newComment);
      commentInput.value = '';
    }
  }
  