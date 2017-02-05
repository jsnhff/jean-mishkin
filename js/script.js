var mobileNav  = $('#js-mobile-nav');
var navTrigger = $('#js-mobile-nav-trigger');

navTrigger.click(function(){
if(mobileNav.hasClass('hide')){
        mobileNav.removeClass('hide');
    } else {
        mobileNav.addClass('hide');
    };
});

$(document).ready(function() {
    var $sub = $("#subject");
    $("#email").on("input", function() {
        $sub.val("Incoming editing request from " + $(this).val());
    });
});
