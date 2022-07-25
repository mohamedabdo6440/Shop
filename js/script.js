
/*navbar scroling*/
let nav = document.querySelector(".navbar");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.cssText = `

          background-color: #fff;
          width: 100%;
          position: fixed;
          top: 0;
          z-index: 11;
        `;

    } else {
        nav.style.cssText = `position:sticky; z-index: 11;`;

    }
    /*
        let topbtn = document.querySelector(".topscroll");
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            topbtn.style.display = "block";
    
        } else {
    
            topbtn.style.display = "none";
    
        }
    
        $(topbtn).click(function () {
    
    
    
            window.scrollTo({
    
                top: 0,
                behavior: "smooth",
            })
    
    
    
        });
        */

}

/**lists toggle *//////////////////////////////////////////////////////////////////
$(".container .row .text-header .count-ul .p-USD").click(function () {
    $(".container .row .text-header .count-ul .list-group1").toggle();
});
$(".container .row .text-header .count-ul .p-English").click(function () {
    $(".container .row .text-header .count-ul .list-group2").toggle();
});
$(".container .row .text-header .count-ul .p-Account").click(function () {
    $(".container .row .text-header .count-ul .list-group3").toggle();
});


/*drowpdown in nav bar *//////////////////////////////////////////////////////////
$(".nav-item .link1").click(function () {
    $(".nav-item .nav-ul").toggle();
});

$(".nav-item .link2").click(function () {
    $(".nav-item .nav-ul2").toggle();
});

$(".nav-item .link3").click(function () {
    $(".nav-item .nav-ul3").toggle();
});



/*calc header*////////////////////////////////////////////////////////////////////
$(function () {
    var winH = $(window).height(),
        UpperH = $('.lists-nav').innerHeight(),
        navH = $('.navbar').innerHeight();

    $('.header').height(winH - (UpperH + navH));
});


//shuffle-images//////////////////////////////////////////////////////////////////
$(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data('class') === 'all') {
        $('.shuffle-images .col-md-3').css('opacity', 1);
    } else {
        $('.shuffle-images .col-md-3').css('opacity', '.09');
        $($(this).data('class')).parent().css("opacity", 1);
    }
});


$(".shuffle-images .col-sm").on({
    mouseenter: function () {
        $(".shuffle-images .col-sm .message").css("opacity", 1);
    },
    mouseleave: function () {
        $(".shuffle-images .col-sm .message").css("opacity", 0);

    }
});

//icon heart   ////////////////////////////////////////////////////////////////////////////
$(".shuffle-images .col-sm i").on({

    click: function () {
        $(this).css("color", "#fe4c50");
    },
    dblclick: function () {
        $(this).css("color", "#706666");
    }
});

$(".shuffle-images .col-sm").on({
    mouseenter: function () {
        $(".shuffle-images .col-sm i").css("opacity", 1);
    },
    mouseleave: function () {
        $(".shuffle-images .col-sm i").css("opacity", 0);
    }
});


//.swiper-slide .slide p
$(".swiper-slide .slide i").on({

    click: function () {
        $(this).css("color", "#fe4c50");
    },
    dblclick: function () {
        $(this).css("color", "#706666");
    }
});


/*time code*//////////////////////////////////////////////////////////////////////////////
// Set the date we're counting down to
var countDownDate = new Date("July 16, 2022 15:30:20").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with selector name"
    document.querySelector(".day").innerHTML = `${days}<span>Day</span>`;
    document.querySelector(".hours").innerHTML = `${hours}<span>Hours</span>`;
    document.querySelector(".minutes").innerHTML = `${minutes}<span>Minutes</span>`;
    document.querySelector(".sec").innerHTML = `${seconds}<span>Sec</span>`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.querySelector("#error").innerHTML = "EXPIRED";
    }
}, 1000);



/*Blogs code animat *//////////////////////////////////////////////////////////////////
$(".Blogs .row .image1 .animat1").fadeOut();
$(".Blogs .row .image2 .animat2").fadeOut();
$(".Blogs .row .image3 .animat3").fadeOut();


//image1
$(".Blogs .row .image1").on({
    mouseenter: function () {
        $(".Blogs .row .image1 .animat1").fadeIn(500);
    },
    mouseleave: function () {
        $(".Blogs .row .image1 .animat1").fadeOut();
    }
});
//image2
$(".Blogs .row .image2").on({
    mouseenter: function () {
        $(".Blogs .row .image2 .animat2").fadeIn(500);
    },
    mouseleave: function () {
        $(".Blogs .row .image2 .animat2").fadeOut();
    }
});
//image3
$(".Blogs .row .image3").on({
    mouseenter: function () {
        $(".Blogs .row .image3 .animat3").fadeIn(500);
    },
    mouseleave: function () {
        $(".Blogs .row .image3 .animat3").fadeOut();
    }
});




/////////////////////////////////////////////////////


