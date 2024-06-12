




$('.swiper-wrapper').slick({
  // centerMode: true,
  // centerPadding: '40px',
  slidesToShow: 7,
  prevArrow: '<button><i class="fa-solid fa-arrow-left " ></i></button>',
  nextArrow: '<button><i class="fa-solid fa-arrow-right "></i></button>',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});



// $('.best_sells__slider').slick({
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });

$('.best_sells__slider').slick({
  slidesToShow: 4,
  prevArrow: '.perv_arrow',
  nextArrow: '.next_arrow',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 3
    }
  },


    {
      breakpoint: 768,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});







//------------------------shop----------------------

$('.shop_content').slick({
  slidesToShow: 4,
  prevArrow: '.shop_perv_arrow',
  nextArrow: '.shop_next_arrow',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 4
    }
  },


    {
      breakpoint: 768,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});




                    
//-------------------------about---------------------

// $('.about_slider').slick({
//   slidesToShow: 3,
//   prevArrow: '.about_arrow_perv',
//   nextArrow: '.about_arrow_next',
//   responsive: [
//   {
//       breakpoint: 990,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         slidesToShow: 4
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


$('.about_slider').slick({
  slidesToShow: 3,
  prevArrow: '.about_arrow_perv',
  nextArrow: '.about_arrow_next',
  responsive: [
    {
      breakpoint: 990,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 4 ,
      }
    },


    {
      breakpoint: 768,
      settings: {
        // centerMode: true,
        // centerPadding: '30px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});







// ----------------------------------



// $('.fruit-tablist').slick({
//   slidesToShow: 4,
//   rows: 2,
//   slidesToScroll: 4,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   easing: 'swing', // see http://api.jquery.com/animate/
//     speed: 700,
//     dots: true,
//     customPaging: function(slick,index) {
//         return '<a>' + (index + 1) + '</a>';
//     }
// });