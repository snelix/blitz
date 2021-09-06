const card = document.querySelectorAll('.services__box'),
      wrapper = document.querySelectorAll('.services__box-wrapper');


const hamburger = document.querySelector('.menu-inner'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close'),
      link = document.querySelectorAll('.menu__link'),
      overlay = document.querySelector('.menu__overlay');

    hamburger.addEventListener('click',()=> {
        menu.classList.add('active')
    });
    close.addEventListener('click',()=> {
        menu.classList.remove('active')
    });
    overlay.addEventListener('click',()=> {
        menu.classList.remove('active')
    });
    link.forEach(item => {
        item.addEventListener('click',()=> {
            menu.classList.remove('active')
        });
    })