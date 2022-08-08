//HEADER-MENU

function toggleMenu(){
	var x = document.getElementById("MyHeaderMenu");
	if (x.className === "header-menu") {
		x.className += " responsive"
	}
	else {
		x.className ="header-menu"
	}
} 

//MODAL
$(document).ready(function(){
    //click on button "open_modal"
    $('#open_modal').click(function() {
        //Display modal by modifying display : none to block in css 
        $('#our_modal').css(
            {
                'display': 'block'
            }
        )
    });

    //click on button "close_modal"
    $('#close_modal').click(function() {
        $('#our_modal').css(
            {
                'display': 'none'
            }
        )
    });

    //send mail
    $('#send_email').click(function(e){
		e.preventDefault(); // prevent reload pages 
		var data = { // take every id of the form
            firstname: $('#firstname').val(),
			name: $('#name').val(),
            email: $('#email').val(),
			message: $('#message').val()
		};

		// AJAX
		$.ajax({ //send to url -> php file
			url: "mail.php", // url which receive data
			type: 'POST', // Methode POST -> Send data
			data: data, // Which data ? -> var data
			success: function(data) {
				$('#js_alert_success').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_success').css({'display' : 'none'}); 
					$('#firstname').val("");
					$('#name').val("");
					$('#email').val("");
					$('#message').val("")
				}, 3000); // after 3 sec, previous inputs and alert are erased
			},
			error: function(data) {
				$('#js_alert_danger').css({'display' : 'block'});
				setTimeout(function(){
					$('#js_alert_danger').css({'display' : 'none'});
					$('#firstname').val("");
					$('#name').val("");
					$('#email').val("");
					$('#message').val("")
				}, 3000); // after 3 sec, previous inputs and alert are erased
			}
		});
	});
});