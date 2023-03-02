var slider = document.getElementById('slider');
//Clone first and last slides
//var firstSlide = slider.children[0].cloneNode(true);
//var lastSlide = slider.children[slider.children.length - 1].cloneNode(true);
//
//////Add first slide and last slide inside slider as a clone
//slider.appendChild(firstSlide);
//slider.insertBefore(lastSlide, slider.children[0]);

var slides = document.querySelectorAll('.slide');

//var size = slides[0].clientWidth+16*2;
//console.log(size);
//var counter = 1;
//var slideIndex = 1;

let activeIndex = 1;

function toggleMenu(){
	var x = document.getElementById("MyHeaderMenu");
	if (x.className === "header-menu") {
		x.className += " responsive"
	}
	else {
		x.className ="header-menu"
	}
} 

document.querySelector(`[data-status="afterNext"]`).setAttribute("onclick","handlePreviousSlide()");
document.querySelector(`[data-status="beforeNext"]`).setAttribute("onclick","handleNextSlide()");

const handleNextSlide = () => {
	//disabled arrow buttons for 1s
	document.querySelector('#right_arrow').disabled = true;
	document.querySelector('#left_arrow').disabled = true;
	setTimeout(function(){
		document.querySelector("#right_arrow").disabled = false;
		document.querySelector("#left_arrow").disabled = false;
	},1000);

	//Handle slides
	const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1,
		unknown = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

	var afterNextIndex = activeIndex - 2;
	if (activeIndex - 2 == -1) {
		afterNextIndex = slides.length - 1;
	}else if (activeIndex - 2 == -2) {
		afterNextIndex = slides.length - 2
	}

	//Get each slide needed
	const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		 nextSlide = document.querySelector(`[data-index="${nextIndex}"]`),
		 unknownSlide = document.querySelector(`[data-index="${unknown}"]`),
		 afterNextSlide = document.querySelector(`[data-index="${afterNextIndex}"]`);

	//Set new status
	currentSlide.dataset.status = "afterNext";
	nextSlide.dataset.status = "active";
	unknownSlide.dataset.status = "unknown";
	afterNextSlide.dataset.status = "beforeNext";

	//Set animation for slides
	afterNextSlide.style.animation = "before 1s";
	unknownSlide.style.animation = "unknown 1s";

	//Set click event on cards
	currentSlide.setAttribute('onclick', "handlePreviousSlide()") ;
	afterNextSlide.setAttribute('onclick', "handleNextSlide()") ;
	nextSlide.removeAttribute('onclick', "handleNextSlide()");


	activeIndex = nextIndex;
	
}

const handlePreviousSlide = () => {
	document.querySelector('#left_arrow').disabled = true;
	document.querySelector('#right_arrow').disabled = true;
	setTimeout(function(){
		document.querySelector("#left_arrow").disabled = false;
		document.querySelector("#right_arrow").disabled = false;
	}, 1000);
	const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0,
		unknown = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

	var afterNextIndex = activeIndex + 2;
	if (activeIndex + 2 == slides.length) {
		afterNextIndex = 0;
	}else if (activeIndex + 2 == slides.length+1) {
		afterNextIndex = 1;
	}

	const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
		 nextSlide = document.querySelector(`[data-index="${nextIndex}"]`),
		 unknownSlide = document.querySelector(`[data-index="${unknown}"]`),
		 afterNextSlide = document.querySelector(`[data-index="${afterNextIndex}"]`);

	currentSlide.dataset.status = "afterPrevious";
	nextSlide.dataset.status = "active";
	unknownSlide.dataset.status = "unknown";
	afterNextSlide.dataset.status = "beforePrevious";

	afterNextSlide.style.animation = "before 1s";
	unknownSlide.style.animation = "unknown 1s";

	//Setting click event on cards
	currentSlide.setAttribute('onclick', "handleNextSlide()") ;
	afterNextSlide.setAttribute('onclick', "handlePreviousSlide()") ;
	nextSlide.removeAttribute('onclick', "handlePreviousSlide()");


	activeIndex = nextIndex;
}

//async function initialSlide(){
//	for (let i = 0; i <= slides.length-1; i++) {
//		slides[i].style.scale = '0.5';
//		slides[i].style.transition = 'all 1s ease-in-out'
//		slides[i].style.transform= 'translateX('+(-size*counter)+'px';
//	}
//	
//	slides[slideIndex].style.scale = '0.75';
//	slides[slideIndex].style.transform = 'translateX('+(-size/1.5)+'px';
//	//slider.style.transition = 'all 1s ease-in-out'
//	//slider.style.transform= 'translateX('+(-size*counter)+'px';
//	//slides[1].style.transition = 'all 1s ease-in-out';
//}
//
//function moveSlides(direction) {
//	var slides = document.querySelectorAll('.slide');
//	if (direction != 'left') {
//		console.log(slideIndex >= slides.length-1)
//		//if (slideIndex >= slides.length-1) {
//		//	slideIndex = 0;
//		//	slides[slides.length-2].style.transform= 'translateX('+(size*8)+'px';
//		//	counter++;
//		//}
//		//else if (slideIndex == 0) {
//		//	//slides[slides.length-1].style.transform= 'translateX('+(size*8)+'px';
//		//	counter++;
//		//	slideIndex++;
//		//}
//		//else{
//		//	counter++;
//		//	slideIndex++;
//		//	//slides[slideIndex-2].style.transform= 'translateX('+(size*8)+'px';
//		//}
//
//		slideIndex++;
//		counter++;
//		
//		for (let i = 0; i <= slides.length-1; i++) {
//			slides[i].style.scale = '0.5';
//			slides[i].style.transition = 'transform 1s ease-in-out'
//			slides[i].style.transform= 'translateX('+(-size*counter)+'px';
//			console.log(slides[i].style.transform= 'translateX('+(-size*counter)+'px');
//		}
//
//	}else{
//		counter--;
//		slideIndex--;
//		for (let i = 0; i <= slides.length-1; i++) {
//			slides[i].style.scale = '0.5';
//		}
//		
//	}
//	console.log(counter);
//	console.log(slideIndex);
//	//slider.style.transition = 'all 1s ease-in-out'
//	//slider.style.transform= 'translateX('+(-size*counter)+'px';
//
//	slides[slideIndex].style.transition = 'all 1s ease-in-out'
//	slides[slideIndex].style.scale = '0.75';
//	slides[slideIndex].style.transform = 'translateX('+((-size/1.5)*counter)+'px';
//
//	
//
//}
//
//function previous() {
//	moveSlides('left');
//	
//}
//
//function next() {
//	console.log(slideIndex);
//	
//	moveSlides('right');
//
//	
//}

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