
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
  

  