(function($) {
  "use strict";

    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }

    /* Loader Code Start */
       $(window).on("load", function() { 
        $(".section-loader").fadeOut("slow");
        
        });
    /* Loader Code End */

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#zb-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
      
    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });


    
    $('#why_me_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 450,
        margin: 10,
        stopOnHover : true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1170: {
            items: 1,
        }
        }
    }); 


    $('#slider_feedback').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 10,
        stopOnHover : true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
        autoplayHoverPause: true,
        responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1170: {
            items: 1,
        }
        }
    }); 




        if ($( window ).width() >= 991) {
            // do some magic
            var tl = new TimelineMax({       paused:true,});
            tl.to(".header-image img", 10, {
                scale: 0.87,
                y:255,
                duration: 3000,
                x:75,
                ease: Power1.easeOut,
                })
            .to(".header-image img", 10, {
                scale: 0.58,
                y:510,
                x:150,
                duration: 3000,
                ease: Power1.easeOut,
                });
    
            var controller = new ScrollMagic.Controller({});
    
        var Scene1 = new ScrollMagic.Scene({
            triggerElement: "#stage",
            duration: "60%",
            })
            .addIndicators({
                name: "Box Timeline",
                colorTrigger: "transparent",
                colorStart: "transparent",
                colorEnd: "transparent"
            })
            .setTween(tl.play())
            .addIndicators()
            .addTo(controller);

            }



            // var mySplitText = new SplitText("#qoute", {
            //     type: "words, chars"
            // });
            // TweenMax.staggerFrom(mySplitText.chars, 0.5, {
            //     opacity:0, rotation:-180, y: -100, ease: Back.easeOut
            // }, 0.02)

            


            // var mySplitText = new SplitText("#quote",{
            //     type: "words, chars"
            // });
            // TweenLite.set("#quote", {
            //     perspective:400
            // });
            // TweenMax.staggerFrom(mySplitText.chars, 0.8, {
            //     opacity: 0, scale: 0, y:80, rotation: 180, transformOrigin: "0% 50% -50%", ease:Back.easeOut,
            // }, 0.01, allDone);

            // function allDone(){
            //     mySplitText.revert();
            // }

            var tlm = new TimelineLite, 
                mySplitText = new SplitText(".quote", {type:"words,chars"}), 
                chars = mySplitText.chars; //an array of all the divs that wrap each character

                // TweenLite.set("#quote", {perspective:400});

                tlm.staggerFrom(chars, 0.5, {x:-40, delay: 2.5, y:-20, autoAlpha:0 , ease:Back.easeOut}, 0.059, "+=0");
                    
            var controller = new ScrollMagic.Controller({});
    
            var Scene3 = new ScrollMagic.Scene({
                triggerElement: ".quote",
                duration: "60%",
                })
                .addIndicators({
                    name: "Box Timeline",
                    colorTrigger: "transparent",
                    colorStart: "transparent",
                    colorEnd: "transparent"
                })
                .setTween(mySplitText)
                .addIndicators()
                .addTo(controller);




                // var tl22 = new TimelineMax();

                TweenMax.from(".nav_1", 1.3, {
                    y:-10,
                    x:-50,
                    autoAlpha:0,
                    delay: 3.0,
                    ease: Power2.easeOut,
                });
                TweenMax.from(".nav_2", 1.3, {
                    y:-10,
                    x:-50,
                    delay: 3.2,
                    autoAlpha:0,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".nav_3", 1.1, {
                    y:-10,
                    x:-50,
                    delay: 3.3,
                    autoAlpha:0,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".nav_4", 1.1, {
                    y:-10,
                    x:-50,
                    delay: 3.4,
                    autoAlpha:0,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".nav_5", 1.1, {
                    y:-10,
                    x:-50,
                    delay: 3.5,
                    autoAlpha:0,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".header-details p", 1.1, {
                    y:30,
                    autoAlpha:0,
                    delay: 3.2,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".header-details a", 1.1, {
                    y:50,
                    autoAlpha:0,
                    delay: 3.2,
                    ease: Power2.easeOut,
                }, "-=1.1");
                TweenMax.from(".header-image", 1.8, {
                    y:120,
                    scale:1.3,
                    delay: 3.0,
                    autoAlpha:0 ,
                    ease: Power2.easeOut,
                }, "-=1");
                TweenMax.from(".header-details span", 1.2, {
                    width:"0px",
                    autoAlpha:0,
                    delay: 3.0,
                    ease: Power2.easeOut,
                }, "-=.5");




                
        TweenMax.from('.screen-inner img', 1, {
            y:'130%',
            delay: 0.7,
            ease: Power2.easeOut,
            opacity:0,
          });
          
          TweenMax.to('.screen-inner img', 1, {
            y:'-120%',
            delay: 1.7,
            ease: Power2.easeOut,
            opacity:1,
          });
          
          TweenMax.to('.full-screen', 1, {
            y:'-120%',
            delay: 2.7,
            ease: Power2.easeOut,
          });



          //scene for  2nd section

        var controller = new ScrollMagic.Controller,
            addSceness = function(e, t) {
                var o = new ScrollMagic.Scene({
                    triggerElement: e,
                    triggerHook: "onEnter",
                    offset: 100
                }).setTween(t);
                return o = o.addTo(controller)
            };

        //MOst Clients

        addSceness(".client-icon", new TweenMax.from(".logo_1",1.2, {
            opacity: 0,
            y: 145,
            x:120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_2",1.2, {
            opacity: 0,
            y: 120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_3",1.2, {
            opacity: 0,
            y: 145,
            x:-120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_4",1.2, {
            opacity: 0,
            x:120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_6",1.2, {
            opacity: 0,
            x:-120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_7",1.2, {
            opacity: 0,
            x:120,
            y: -140,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_8",1.2, {
            opacity: 0,
            y: -120,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-icon", new TweenMax.from(".logo_9",1.2, {
            opacity: 0,
            x:-120,
            y: -140,
            ease: Power1.easeOut
        }).delay(.2))
        //service area
        addSceness(".resume-service", new TweenMax.from(".inner_one",1.3, {
            opacity: 0,
            x:170,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".why_me_slide", new TweenMax.from(".me-details",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-service", new TweenMax.from(".resume-service h2",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-service", new TweenMax.from(".resume-service h6",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        //portfolio
        addSceness(".recent-inner", new TweenMax.from(".quotetwo",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".recent-inner", new TweenMax.from(".recent-image",1.2, {
            opacity: 0,
            x:150,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".recent-inner", new TweenMax.from(".img_img",1.2, {
            opacity: 0,
            x:-100,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".recent-inner", new TweenMax.from(".img_img2",1.2, {
            opacity: 0,
            x:-100,
            y:-50,
            ease: Power1.easeOut
        }).delay(.2))
        //help section
        addSceness(".resume-help", new TweenMax.from(".resume-help h2",1.3, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-help", new TweenMax.from(".resume-help h6",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-help", new TweenMax.from(".help_1",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-help", new TweenMax.from(".help_2",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-help", new TweenMax.from(".help_3",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-help", new TweenMax.from(".help_4",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        //case Study
        addSceness(".resume-case-study", new TweenMax.from(".case-title h2",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-case-study", new TweenMax.from(".case-title h6",1.2, {
            opacity: 0,
            y:50,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-case-study", new TweenMax.from(".case_one",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-case-study", new TweenMax.from(".case_two",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-case-study", new TweenMax.from(".case_three",1.2, {
            opacity: 0,
            y:70,
            ease: Power1.easeOut
        }).delay(.2))

        addSceness(".resume-service", new TweenMax.from(".inner_two",1.2, {
            opacity: 0,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".resume-service", new TweenMax.from(".inner_three",1.2, {
            opacity: 0,
            x:-170,
            ease: Power1.easeOut
        }).delay(.2))
        addSceness(".client-details", new TweenMax.from(".client-details",1.2, {
            opacity: 0,
            y: 120,
            ease: Power1.easeOut
        }).delay(.2));





    /*
    |==============================
    | OWL CAROUSEL ALL SLIDER
    |=============================
    */   
}(jQuery));

