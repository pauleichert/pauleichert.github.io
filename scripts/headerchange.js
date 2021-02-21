// changes color of header when scrolling over #main container

$(function () { 
            $(".scroll-container").scroll(function () { 
                var scroll = $(".scroll-container").scrollTop(); 
				var top = $("#main").offset().top; 
  
                if (scroll >= top) { 
                    $("nav a").css("color","#000");
					$(".sl").css("color","#000");
					$("#hamburger").css("color","#000");
					
                } else { 
                    $("nav a").css("color","#FFF");
					$(".sl").css("color","#FFF");
					$("#hamburger").css("color","#FFF");
                } 
            }); 
        });