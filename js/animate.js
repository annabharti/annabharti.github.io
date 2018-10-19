console.log("test");

$( document ).ready(function() {
	$( "#click" ).click(function() {
		console.log("click");
		$( "#aboutme" ).animate({
		    opacity: 0.1,
	 	}, 1000, function() {
	    	console.log("animation complete");
	    	$( "#aboutme" ).animate({
			    opacity: 1,
		 	}, 2000, function() {
		    	console.log("animation complete");
		 	});
	 	});
	});
});