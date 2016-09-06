 $(window).scroll(function textfade() {
     console.log($(window).scrollTop());

     var fittedimageHeight = $(".fittedimage").height();
     var viewPortSize = $(window).height();

     var middle = fittedimageHeight / 2;

     var triggerAt = 150;
     var triggerHeight = (fittedimageHeight - viewPortSize) + triggerAt;

     var introwordsHeight = $(".info").height();

     var triggerbAt = 50;
     var triggerbHeight = (fittedimageHeight + introwordsHeight - viewPortSize) + triggerbAt;

     var myworkHeight = $(".mywork2").height();

     var triggercAt = 0;
     var triggercHeight = (fittedimageHeight + introwordsHeight + myworkHeight + gridHeight - viewPortSize) + triggercAt;

     var gridHeight = $(".grid").height();

     var triggerimgAt = 250;
     var triggerimgHeight = (fittedimageHeight + introwordsHeight + myworkHeight - viewPortSize) + triggerimgAt;

     //Top Logo
     if ($(window).scrollTop() <= middle + 40 ) {
         $( ".dot1" ).show();
         $( ".dot2" ).show();
         $( ".dot3" ).show();
       }

       if ($(window).scrollTop() <= middle * 2 ) {
           $( ".AW" ).show();
         }

       if ($(window).scrollTop() >= middle * 2 ) {
           $( ".AW" ).hide();
         }

       if ($(window).scrollTop() >= middle + 40 ) {
           $( ".dot1" ).hide();
           $( ".dot2" ).hide();
           $( ".dot3" ).hide();
         }

     if ($(window).scrollTop() >= middle) {
         $('.herofade').addClass('fadeOut');
     }

     if ($(window).scrollTop() >= middle) {
         $('.downarrow').addClass('unclickable');
     }

     if ($(window).scrollTop() < middle) {
         $('.herofade').removeClass('fadeOut');
     }

     if ($(window).scrollTop() < middle) {
         $('.downarrow').removeClass('unclickable');
     }

     //Please Panic

     if ($(window).scrollTop() >= triggerHeight) {
         $('.fadeOnView').addClass('slideUp');
     }

     if ($(window).scrollTop() < triggerHeight) {
         $('.fadeOnView').removeClass('slideUp');
     }

     //My Work

     if ($(window).scrollTop() >= triggerbHeight) {
         $('.mywork').addClass('slideUp');
     }

     if ($(window).scrollTop() < triggerbHeight) {
         $('.mywork').removeClass('slideUp');
     }

     //Images

     if ($(window).scrollTop() >= triggerimgHeight) {
         $('.alpha').addClass('alphaOn');
         $('.beta').addClass('alphaOn');
         $('.delta').addClass('alphaOn');
         $('.gamma').addClass('alphaOn');

     }

     //Footer

     if ($(window).scrollTop() >= triggercHeight) {
         $('.footerdetails').addClass('slideUp');
     }

     if ($(window).scrollTop() < triggercHeight) {
         $('.footerdetails').removeClass('slideUp');
     }


 });
