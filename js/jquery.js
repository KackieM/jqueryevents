$(document).ready(function() {

	// $("#target").dbclick(function(){}
	// 	alert("Handler for .dbclick() called.");


	// });


$("other").click(function() {

$("#target").dbclick();
	});


$( "p1" ).dblclick(function() {
  alert( "Hello World!" );
});

var divdbl = $( "div:first" );
divdbl.dblclick(function() {
  divdbl.toggleClass( "dbl" );
});
	


 $( "select" )
  .change(function () {
    var str = "";
    
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( ".city" ).text( str );
  })
  .change();

});


// $( "p" ).click(function() {
//   $( this ).slideUp();
// });


