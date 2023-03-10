jQuery(function ($) {
    $(window).scroll(function () {
      
        scrollTop = $(window).scrollTop();

        if (scrollTop > $('header').height()) {
            $('header').addClass('scrollNav');
        }

        else {
            $('header').removeClass('scrollNav');
        }    
    });  
    $(".heroSlider").owlCarousel({
        nav: true,
        loop: true,
        items: 1,
       
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],
        dotsContainer: '.sliderDots',
    });
    
    $(".gallerySlider").owlCarousel({

       
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        }
    });
    $(".servicesSlider").owlCarousel({
        nav: false,
        loop: true,
        items: 1,
        dots: true,
    });
    $(".lastNewsSlider").owlCarousel({
        nav: true,
        margin: 20,
        dots:false,
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            700: {
                items: 2,
                nav:false
            },
            1000:{
                items:3
            }

        },
        dotsContainer: '.newsDots',
        navText:["<div class='nav-btn prev-slide'><img src='assets/images/arrow-left.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/arrow-right.svg'></div>"],


    });
    $(".mediaSlider").owlCarousel({
        nav: true,
       
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 4,
            },

        },
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],

        dotsContainer: '.mediaDots',


    });
    $(".othersSlider").owlCarousel({
        nav: true,
       
        loop:true,
        autoplay:true,
        margin: 10,
        stagePadding:100,
     
        responsive: {
            0: {
                items: 2,
                stagePadding:0,
            },
            700: {
                items: 3,
                stagePadding:0,
            },
            1000: {
                items: 4,
            },

        },
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],

    });
    $(".advsSlider").owlCarousel({
        nav: true,
        loop: true,
        dots:true,
        items: 1,
        center: true,
       
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],
    });
    $(".adminSlider").owlCarousel({
       
        margin: 16,
        nav:true,
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],

        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items:4,
            }
        },
        dotsContainer: '.adminSliderDots',
    });
    $(".lowSlider").owlCarousel({
       
        margin: 16,
        nav:true,
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],

        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items:3,
            }
        },
        dotsContainer: '.adminSliderDots',
    });
    $(".compitionSlider").owlCarousel({
       
        margin: 16,
        nav:true,
        navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],

        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1000: {
                items:4,
            }
        },
    });

    $('.sliderDots').on('click', 'li', function (e) {
        $(".heroSlider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('.newsDots').on('click', 'li', function (e) {
        $(".lastNewsSlider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('.mediaDots').on('click', 'li', function (e) {
        $(".mediaSlider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('.adminSliderDots').on('click', 'li', function (e) {
        $(".adminSlider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $(".close").click(function(){
        $(this).parent().removeClass('show')
    })
});

