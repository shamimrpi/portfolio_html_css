$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
	item:4,
   
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
var nav = document.getElementById('my-navbar');
		window.onscroll = function(){
		 if(window.pageYOffset >100){
			nav.style.background = "#0EB493";
			nav.style.border = "1px";
			nav.style.color = "black";
			nav.style.transition = ".9s";
			
			
		 }
		 else {
			
			nav.style.background = "transparent";
			
		 }
		}