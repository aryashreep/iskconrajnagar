var stick_show_height = 100;
var navbar_height_minus = 82;
window.onscroll = function() {myFunction()};
var navbar_sticky = document.getElementById("navbar_sticky");
var sticky = navbar_sticky.offsetTop;
var navbar_height = document.querySelector('.navbar').offsetHeight;

function myFunction() {
	
  if ((window.pageYOffset >= sticky + navbar_height+stick_show_height)) {
	 // console.log('IF window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.add("sticky")
	document.body.style.paddingTop = (navbar_height-navbar_height_minus) + 'px';
	
  } else {
	  //console.log('ELSE window.pageYOffset:'+window.pageYOffset+'   sticky:'+sticky+'   navbar_height : '+navbar_height+'  flag:'+ flag);
    navbar_sticky.classList.remove("sticky");
	document.body.style.paddingTop = '0'
	
  }
}


$(document).ready(function () { 
            $('.dropdown').hover(function () { 
                $(this).addClass('show'); 
                $(this).find('.dropdown-menu').addClass('show'); 
            }, function () { 
                $(this).removeClass('show'); 
                $(this).find('.dropdown-menu').removeClass('show'); 
            }); 
        }); 