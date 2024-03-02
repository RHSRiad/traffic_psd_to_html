$(document).ready(function(){ 
  
  //for testimonial
  var owl = $('.case_study_carousel');
owl.owlCarousel({
    items:3,
    loop:true,
	 	nav:false,
    margin:30,
    dots:true
});
    
	
	
	$('.testimonial_section').owlCarousel({
    items:1,
	 nav:false,
	 loop:true,
});	

$('.logo_owl_carousel').owlCarousel({
    items:6,
	 nav:false,
	 loop:true,
	 dots:false,
	 autoplay:true,
});


});


