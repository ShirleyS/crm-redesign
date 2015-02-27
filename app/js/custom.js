$(function(){
		$(window).click(function(){
        $('.gn-menu-wrapper').removeClass('active'); // remove the class from the currently selected
    });

    $('li a').click(function(){
        $('.gn-menu-wrapper').addClass('active'); // add the class to the newly clicked link
    });

});


$(function() {

  $(".expand").on( "click", function() {
    var self = $(this);
      $(this).next().slideToggle(0);
    
    $expand = $(this).find(">:first-child");
 
    if($expand.text() == "+") {
      self.parent().css("background-color", "white");
      $expand.text("-");
     
    } 
    else {
      self.parent().css("background-color", "#428bca");
      $expand.text("+");
    }

  });
});
