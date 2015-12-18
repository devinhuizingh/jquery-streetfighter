$(document).ready(function () {

	$
	('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		console.log('in mousedown');
		playHadouken();
	    $('.ryu-ready').hide();
	    $('.ryu-throwing').show();
	    $('.hadouken').show()
	    $('.hadouken').finish().show().animate(
	  {'left': '1060px'},
	  500,
	  function() {
	    $(this).hide();
	    $(this).css('left', '560px');
	  }
	);

	})  	
	  
	.mouseup(function() {
		console.log('in mouseup');
	    $('.ryu-throwing').hide();
	    $('.ryu-ready').show();
	    
	      });




	$(document).keydown(function(event) {
		if (event.which === 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		
		}


	}).keyup(function(event) {
		
		if (event.which === 88) {
			console.log('keyup active');
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}