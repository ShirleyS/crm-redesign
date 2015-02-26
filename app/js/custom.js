$(function(){
		$(window).click(function(){
        $('.gn-menu-wrapper').removeClass('active'); // remove the class from the currently selected
    });

    $('li a').click(function(){
        $('.gn-menu-wrapper').addClass('active'); // add the class to the newly clicked link
    });

});
