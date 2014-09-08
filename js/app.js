 function deleteItem(){
    console.log("Deleting...");
    if($(this).parent().hasClass("checked")) {

      $(this).parent().slideUp('slow', function(){
        $(this).remove();
      });
      console.debug($(this).parent());
      return false;
    } else {

      $(this).parent().slideUp('slow', function(){
        $(this).remove();
      });
      console.debug($(this).parent());
      return false;
    };
      
  } 

$( document ).ready(function() {

  $('li').on('click', 'div.delete', deleteItem); 



  /* $('li').on('click', '.delete', function() {
    $(this).closest('li').slideUp( "slow" );
  }); */



  $( "input" )
  .keydown(function(e) {
    var value = $( this ).val();
    var cross = $('<img src="img/cross.png">');


    if(e.keyCode == 13) {
    $(this).closest('.list-item').find('ul').slideDown('slow',function() {
      $(this).prepend( '<li><span>' + value + '</span> <div class="delete"></div> </li>' );
    });
    $(this).val('')
    }
  	else {}
  }) 
  .keyup();


  $('.main-right-side .list-item ul').on('click', 'li', function() {
    $(this).toggleClass('checked');
    if ( $( this ).hasClass( "checked" ) ) {
    $(this).closest('ul').append(this);

  } else {
    $(this).closest('ul').prepend(this);
    };

  });

  $('.main-right-side .list-item ul').sortable();


});






