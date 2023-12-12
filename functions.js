window.onload = function () {
$( ".flip-card-inner" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotateY(180deg)");
    } else {
        $(this).css("transform","" );
    }
});

    $( "#section1" ).click(function() {
    if (  $( "#section1-container" ).css( "display" ) == 'none' ){
        $("#section1-container").css("display","flex");
	$("#section1").css("background-color","#405cf5");
	$("#section2-container").css("display","none");
	$("#section2").css("background-color","#bcc0d4");
    } 
    });

    $( "#section2" ).click(function() {
    if (  $( "#section2-container" ).css( "display" ) == 'none' ){
        $("#section2-container").css("display","flex");
	$("#section2").css("background-color","#405cf5");
	$("#section1-container").css("display","none");
	$("#section1").css("background-color","#bcc0d4");
    } 
    });


    
}
