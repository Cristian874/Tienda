const enlaces = document.querySelectorAll('.productos__boton');
  const grid = document.querySelector('.productos__grid');

  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const id = enlace.getAttribute('href').substring(1);
      enlaces.forEach(enlace => enlace.classList.remove('activo'));
      enlace.classList.add('activo');
      grid.querySelectorAll('.productos__card').forEach(card => {
        if (card.getAttribute('id') === id || id === 'productos') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


/* SWIPPER */
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 

/* barra fija */

//barra fija

function navegacionFija(){

  window.addEventListener("scroll", function(){
    //leemos el scroll y agregamos las clases a los elementos 
    header = document.querySelector(".header__contenido");
     header.classList.toggle("abajo",window.scrollY > 0);


      

}); 

}

navegacionFija();


 /* menu reposive */
 $(document).ready(function(){
  $(".header__menu").on("click",function(){




      $("nav").slideToggle();
      })





})