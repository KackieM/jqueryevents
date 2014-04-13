$(function() {

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

var showAlbum = function(event) {
	event.preventDefault();

	var contentDiv = $(this).attr ("rel");

	console.log($(".") + contentDiv));

	if($("." + contentDiv).hasClass(show));

});




// js event 'scrolling through album pictures'

$(".album1 img").click(function(event) {
	event.preventDefault();
	var $thisPicture = $(this);

	console.log($(this));

$thisPicture.closest("li").siblins().toggle();
$thisPicture.toggleClass("magnify");
});

