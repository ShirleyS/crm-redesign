$(function(){
		$(window).click(function(){
        $('.gn-menu-wrapper').removeClass('active'); // remove the class from the currently selected
    });

    $('li a').click(function(){
        $('.gn-menu-wrapper').addClass('active'); // add the class to the newly clicked link
    });

  $(".expand").on( "click", function() {
    var self = $(this);
    $(this).next().slideToggle(0);
    
    $expand = $(this).find(">:first-child");
 
    if($expand.text() == "+") {
      // $(this).addClass('active');
      // self.parent().css("background-color", "#c6d0da");

      self.parent().css("background-color", "lightgrey");
      self.parent().css("height", "100%");
      // self.parent().css("color", "white");
      $expand.text("-");
      $expand.text("-").css("font-weight","bold");
    } 
    else {
      self.parent().css("background-color", "");
      self.parent().css("height", "24px");
      $expand.text("+");
      $expand.text("+").css("font-weight","bold");
    }
  });
});


function trialPaidColor(){
  $(".mr-type-trial-paid").each(function(index,element){
    console.log(element);
    if ($(element).text() == 'paid'){
      $(element).css("background-color", "#42ca81");
    }
  });  
};

function sendSpec () {
  $("#sendSpec").slideToggle("slow");
  if($('#sendWhen').html() == 'IMMEDIATLY'){
     $('#sendWhen').html('AS SPECIFIED');
     $('#sendWhenState').val('1');
  }
  else{
     $('#sendWhen').html('IMMEDIATLY');
     $('#sendWhenState').val('0');
  }}

$("#sendChange").click(function () {
  sendSpec();
  return false;
});
if($('#sendWhenState').val() == 1){
  sendSpec();
}


window.onload = function() {
  trialPaidColor();
};
