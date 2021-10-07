
  $(".service-card").hover(
        function () {
    $(this).find('img').attr('src', 'img/smartphone2.png');
        },
        function () {
    $(this).find('img').attr('src', 'img/smartphone.png');
        });
 $(function () {
     var link = $('.m-menu-link');
     var close = $('.close-menu');
     var menu = $('.m-menu');
     link.on('click', function (event) {
         event.preventDefault();
         menu.toggleClass('m-menu__active');
     });
     close.on('click', function (event) {
         event.preventDefault();
         menu.toggleClass('m-menu__active');
     });
 });
 $('.works-slider').slick({
     dots: true,
 });
$('.service-cards').slick({
    dots:true,
    slidesToShow:3,
    centerMode: true,
    centerPadding: '30px',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                centerPadding: '20px',
            }
        },
        {
            breakpoint: 482,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                arrows:false,
            }
        },
    ]
});
        
        