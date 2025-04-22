
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

/* Реєстрація */
let cart = [];

document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  openCheckoutModal('enroll');
});

document.querySelector('.btn3').addEventListener('click', function(e) {
  e.preventDefault();
  openCheckoutModal('enroll');
});

const joinButtons = document.querySelectorAll('.btn2');
joinButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const courseInfo = getCourseInfo(e.currentTarget);
    openCheckoutModal('join', courseInfo);
  });
});

function getCourseInfo(button) {
  const infoBlock = button.closest('.info, .info2, .info3, .info4, .info5');
  if (!infoBlock) return null;

  const courseName = infoBlock.querySelector('h5')?.textContent.trim();

 
let container = infoBlock.closest('.text-2-blok, .text-3-blok') || infoBlock;


let imageBlock = container.previousElementSibling;
while (imageBlock && !imageBlock.querySelector('img')) {
  imageBlock = imageBlock.previousElementSibling;
}

const courseImg = imageBlock?.querySelector('img')?.src;

  const priceText = infoBlock.querySelector('.price')?.textContent.trim();

  if (!courseName || !courseImg || !priceText) return null;

  return {
    name: courseName,
    imgSrc: courseImg,
    price: priceText
  };
}

function openCheckoutModal(type, course) {
  const checkoutModal = document.getElementById('checkout-modal');
  if (checkoutModal) {
    checkoutModal.style.display = 'flex';
    setTimeout(() => {
      checkoutModal.classList.add('active');
    }, 10);
    updateCheckoutItems(type, course);
  }
}

function updateCheckoutItems(type, course) {
  const checkoutItemsContainer = document.getElementById('checkout-items');
  if (!checkoutItemsContainer) return;

  checkoutItemsContainer.innerHTML = '';

  if (type === 'enroll') {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('checkout-item');
    itemDiv.innerHTML = `
      <img src="img/enroll.png" alt="Free for 14 days" class="cart-image">
      <div class="checkout-item-details">
        <h3>Free for 14 days</h3>
      </div>
    `;
    checkoutItemsContainer.appendChild(itemDiv);
  } else if (type === 'join' && course) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('checkout-item');
    itemDiv.innerHTML = `
      <img src="${course.imgSrc}" alt="${course.name}" class="cart-image">
      <div class="checkout-item-details">
        <h3>${course.name}</h3>
        <p>${course.price}</p>
      </div>
    `;
    checkoutItemsContainer.appendChild(itemDiv);
  }
}

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