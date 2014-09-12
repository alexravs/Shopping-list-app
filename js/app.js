 /*function deleteItem(){
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
      
  } */

  function moveObject() {     
    $(this).toggleClass('checked unchecked');

    if ( $( this ).hasClass( "checked" ) ) {
      $(this).closest('ul').append(this);

  } else {
    $(this).closest('ul').prepend(this);
    };

  };




$( document ).ready(function() {

  /* $('li').on('click', 'div.delete', deleteItem); */



  $('ul').on('click', '.delete', function() {
    var checked = $( ".checked" ).length;
    var unchecked = $( ".unchecked" ).length;
    var total = $(".main-right-side .list-item ul li").length;

    $( "header ul li .trouver" ).text(unchecked);
    $( "header ul li .trouve" ).text(checked);
    $( "header ul li .total" ).text(total);

    $(this).closest('li').remove();
  }); 



  $( "input" )
  .keydown(function(e) {
    var value = $( this ).val();
    var cross = $('<img src="img/cross.png">');

    
    


    if(e.keyCode == 13) {


    $(this).closest('.list-item').find('ul').slideDown('slow', function() {
      $(this).prepend( '<li class="unchecked"><span>' + value + '</span> <div class="delete"></div> </li>' );
          var checked = $( ".checked" ).length;
    var unchecked = $( ".unchecked" ).length;
    var total = $(".main-right-side .list-item ul li").length;

    $( "header ul li .trouver" ).text(unchecked);
    $( "header ul li .trouve" ).text(checked);
    $( "header ul li .total" ).text(total);
    });
    $(this).val('')
    }
  	else {}
  }) 
  .keyup();


  $('.main-right-side .list-item ul').on('click', 'li', moveObject);

  $('.main-right-side .list-item ul').sortable();

    var checked = $( ".checked" ).length;
    var unchecked = $( ".unchecked" ).length;
    var total = $(".main-right-side .list-item ul li").length;

    $( "header ul li .trouver" ).text(unchecked);
    $( "header ul li .trouve" ).text(checked);
    $( "header ul li .total" ).text(total);

  $('.main-right-side .list-item ul').on('click', 'li', function () {
    var checked = $( ".checked" ).length;
    var unchecked = $( ".unchecked" ).length;
    var total = $(".main-right-side .list-item ul li").length;

    $( "header ul li .trouver" ).text(unchecked);
    $( "header ul li .trouve" ).text(checked);
    $( "header ul li .total" ).text(total);

  });

});






