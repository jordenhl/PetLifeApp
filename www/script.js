var scrolled = 0;


/* change pictures */
var imgArray = [{"title":"product 1", "description":"this is the first product", "imageUrl":"https://s3-eu-west-1.amazonaws.com/gn.germany/images/Bitmap1.png"},
     {"title":"product 2", "description":"this is the second product", "imageUrl":"https://s3-eu-west-1.amazonaws.com/gn.germany/images/Bitmap2.png"},
     {"title":"product 3", "description":"this is the third product", "imageUrl":"https://s3-eu-west-1.amazonaws.com/gn.germany/images/Bitmap3.png"}];

var headlineForImage = ["La protection de vos biens", "La protection de la famille", "L’épargne retraite"];
var textForImage ="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.";
var current_click = -1;
var place_in_array = 0;

jQuery(document).ready(function(){
	jQuery("#particuliersButton").on("click", function(e){
		current_click = current_click+1;
		place_in_array= current_click%3;
		document.getElementById('nowImage').style.display = "block";
		document.getElementById('nowImage').innerHTML = "<img src=" + imgArray[place_in_array].imageUrl + " >" + "<h4>" + headlineForImage[place_in_array]+ "</h4> <br> <p><span>" + textForImage + "</span></p>";
	});

});

jQuery(document).ready(function(){
	jQuery("#professionnelsButton").on("click", function(e){
		document.getElementById('nowImage').style.display = "none";

	})
});


/* pop up window */
jQuery(document).ready(function(){
	alert("inside jQuery");
	jQuery("#phonIcon").on("click", function(){
		alert("after click");
		agentDetails = window.open('popup.html','Agent details','width=800,height=420');
		setTimeout(closeWindow, 10000);

		function closeWindow(){
			agentDetails.close();
		};
	});
});


jQuery(document).ready(function(){
	jQuery("#ChatButton").on("click", function(e){
		alert("chat works");
		scrolled = scrolled - 300;
/*
		jQuery(".rectangle-523").animate({
			scrollTop: scrolled;
		});*/

	});
});



/* back to top button */ 
jQuery(document).ready(function() {
	var offset = 250;
	var duration = 300;

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});

	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
});






