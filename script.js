'use sctrict';

     

// Items hidden
const button = document.querySelector('.items__more-services');
let content = document.querySelector('.items-hidden');

button.onclick = function () {
      content.style.display = 'flex';
      button.style.display = 'none';
}


