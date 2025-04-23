/* Бургер меню */
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
    menu.classList.toggle('active'); 
});

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});
/* Аімація картинок */
window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('[class*="img"]');
    const centerY = window.innerHeight / 2;
    let closestImg = null;
    let closestDistance = Infinity;
  
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      const imgCenterY = rect.top + rect.height / 2;
     const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      if (isVisible) {
        const distance = Math.abs(centerY - imgCenterY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestImg = img;
        }
      }
    });
  
    images.forEach(img => {
      if (img === closestImg) {
        img.style.transform = 'scale(1.1)';
      } else {
        img.style.transform = 'scale(1)';
      }
    });
  });

/* Зміна мов */
  document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('language-toggle');
  
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const currentUrl = window.location.href;
  
        
        if (currentUrl.includes('courses-uk.html')) {
          window.location.href = currentUrl.replace('courses-uk.html', 'courses.html');
        } 
       
        else if (currentUrl.includes('index-uk.html')) {
          window.location.href = currentUrl.replace('index-uk.html', 'index.html');
        } 
       
        else if (currentUrl.includes('courses.html')) {
          window.location.href = currentUrl.replace('courses.html', 'courses-uk.html');
        } 
        
        else {
          window.location.href = 'index-uk.html';
        }
      });
    }
  });
  /* Повідомлення */
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const modal = document.getElementById("discount-modal");
        const overlay = document.getElementById("overlay");

        modal.style.display = "block";
        overlay.style.display = "block";
    }, 6600); 

    document.querySelector(".close-modal").addEventListener("click", function () {
        document.getElementById("discount-modal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    });
});




let cart = []; 


document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  openCheckoutModal();
});

document.querySelector('.btn3').addEventListener('click', function(e) {
  e.preventDefault();
  openCheckoutModal();
});


document.querySelector('.btn1').addEventListener('click', function(e) {
  e.preventDefault();
  openCheckoutModal();
});


function openCheckoutModal() {
  
  const existingItem = cart.find(item => item.name === "Free for 14 days");
  if (!existingItem) {
    cart.push({
      name: "Free for 14 days",
      imgSrc: "img/enroll.png", 
    });
  }

  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.style.display = 'flex';
   
    setTimeout(() => {
      checkoutModal.classList.add('active');
    }, 10);
    updateCheckoutItems();
  }
}

// Оновлення списку товарів при оформленні замовлення
function updateCheckoutItems() {
  const checkoutItemsContainer = document.getElementById('checkout-items');
  if (checkoutItemsContainer) {
   
    checkoutItemsContainer.innerHTML = '';

    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('checkout-item');
      itemDiv.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.name}" class="cart-image">
        <div class="checkout-item-details">
          <h17>${item.name}</h17>
        </div>
      `;
      checkoutItemsContainer.appendChild(itemDiv);
    });
  }
}

// Закриття вікна оформлення замовлення
document.getElementById('close-checkout-btn').addEventListener('click', function() {
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
   
    checkoutModal.classList.remove('active');
   
    checkoutModal.classList.add('slide-out');
    setTimeout(() => {
      checkoutModal.style.display = 'none';
     
      checkoutModal.classList.remove('slide-out');
    }, 500);
  }
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

 
  if (!name || !email) {
    alert("Будь ласка, заповніть всі поля.");
    return;
  }

  if (name.length < 10) {
    alert("Будь ласка, введіть повне ім'я (мінімум 10 символів).");
    return;
  }

  alert("Дякуємо за ваш запис. Ми зв'яжемося з вами найближчим часом.");

  cart = [];
  if (typeof updateCart === 'function') {
    updateCart();
  }

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';

 
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.classList.remove('active');
    checkoutModal.classList.add('slide-out');
    setTimeout(() => {
      checkoutModal.style.display = 'none';
      checkoutModal.classList.remove('slide-out');
    }, 500);
  }
});

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const content = document.getElementById('content');
  setTimeout(() => {
    preloader.classList.add('fade-out');

    preloader.addEventListener('animationend', () => {
      preloader.style.display = 'none';
      content.style.display = 'block';
      document.body.style.overflow = 'auto';
    });
  }, 2700); 
});