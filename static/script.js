$(document).ready(function(){
	$("#contact_submit").on('click',function(event) {
		var name = document.getElementById("name").value;
		var content = document.getElementById("content").value;
		if(name == ""){
			alert("The name field is not filled! Please do first.");
			event.preventDefault();
		} else {
			sendMail(name, content);
		}
	});
	// Initialize Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Add smooth scrolling to all links in navbar + footer link
	$(".navbar a, footer a[href='#home']").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {

		// Prevent default anchor click behavior
		event.preventDefault();

		// Store hash
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 900, function(){
	 
		// Add hash (#) to URL when done scrolling (default click behavior)
		//window.location.hash = hash;
		});
	} // End if
	});
})
function sendMail(name,content) {
    var link = "mailto:petersen2630@gmail.com"
             + "&subject=" + escape("Contact through website from: "+name)
             + "&body=" + escape(content);
    window.location.href = link;
}