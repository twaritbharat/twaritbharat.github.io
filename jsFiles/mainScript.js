 function checkWindowSize(){
	var $window = $(window);
	var windowWidth = $window.width();
	var windowHeight = $window.height();
	
	if (windowWidth >= 845){
		$("#CSStag").attr("href","cssFiles/mainStyle.css");
	}
	
	if (windowWidth < 845){
	}
	
}; // end checkWindowSize()

$(document).ready(function(){
	/* checkWindowSize();
	$(window).resize(function(){
		checkWindowSize();
	}); */ // end window.resize
	
	var num=1;
	setInterval(function() {
		var backgroundName="imgFiles/Background/bodyBK"+num+".jpg";
		$("body").css('background','#FFFFFF url('+backgroundName+') no-repeat center center fixed');
		$("body").css('-webkit-background-size','cover');
		$("body").css('-moz-background-size','cover');
		$("body").css('background-size','cover');
		num=num+1;
		if(num==4){
			num=1;
		}
	},4000);
	
	var carouselContainer = $('.carousel');
	slideInterval = 5000;

	function toggleCaption() {
		$('.carousel-caption').hide();
		var caption = carouselContainer.find('.active').find('.carousel-caption');
		caption.delay(1000).slideDown();
	}
	carouselContainer.carousel({
		interval: slideInterval,
		cycle: true,
	}).on('slid.bs.carousel', function() {
		toggleCaption();
	});
		
		 /* $('.divText').animate({width: '500px', 
                   height:'500px', 
                   }, "slow");  */
	
	
	$(".member,.divText").mouseover(function(){
		var teamMem=$(this).attr('Teamid');
		$('#'+teamMem).css('opacity','1');
		
    });
	$(".member").mouseout(function(){
        var teamMem=$(this).attr('Teamid');
		$('#'+teamMem).css('opacity','0');
    });
	$("label input").focus(function(){
		$(this).attr("value","");
	});
	$("label input").focusout(function(){
		if(!$(this).attr("value")){
			if($(this).attr("name")=="username"){
				$(this).attr("value","Name");
			}
			if($(this).attr("name")=="email-address"){
				$(this).attr("value","E-mail");
			}	
		}
	});
	$("textarea").focus(function(){
		$(this).html("");
	});
	$("textarea").focusout(function(){
		if($(this).html()==""){
			$(this).html("Write your queries here ...");
		}
	});
	$(".navbar li a,#topScroll span").click(function(){
		var scrollMem=$(this).attr('Scrollid');
		$.scrollTo('#'+scrollMem,{duration:800,offset:-97});
    });
	var x;
	 $(window).scroll(function () {
			x=($(window).scrollTop()/2000);
			if(x<=0.4){
				x=0.4;
			}
			else if(x<=0.6){
				x=0.6;
			}
			else if(x<=0.8){
				x=0.6;
			}
			else if(x<=1.0){
				x=1.0;
			}
			$("#topScroll span").css('opacity',x);
			$("#topScroll span").css('visibility','visible');
			if($(window).scrollTop()<400){
				$("#topScroll span").css('visibility','hidden');
			}
	}); 
	$("#topScroll span").mouseover(function(){
		$("#topScroll span").css('opacity','1');
		$("#topScroll span").css('color','#FFA201');
	});
	$("#topScroll span").mouseout(function(){
		$("#topScroll span").css('color','#9D9D9D');
	});
	
});



$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('#divHeader').slideUp();
		$('#divIndex').css("padding-top","0");
		$('#divIndex').css("padding-bottom","0");
		$('#divIndex').css("background-color","rgb(22,22,22)");
		$('#logo').css("margin-top","8px");
		$('#logo').width(60);
		$('#logo').height(60);
		$('#twaritTitle').children("h1").css("font-size","22px");
		$('#twaritTitle').children("h5").css("font-size","12px");
		$('#twaritTitle').height(80);
		$('#navbar').css("margin-top","20px");
		$('#logoTitle').css("margin-top","5px");
		
     }
    else
     {
		$('#divHeader').slideDown();
		$('#divIndex').css("padding-top","23px");
		$('#divIndex').css("padding-bottom","23px");
		$('#divIndex').css("background-color","rgba(51, 51, 51,0.8)");
		$('#logo').css("margin-top","5px");
		$('#logo').width(80);
		$('#logo').height(80);
		$('#twaritTitle').children("h1").css("font-size","32px");
		$('#twaritTitle').children("h5").css("font-size","14px");
		$('#twaritTitle').height(100);
		$('#navbar').css("margin-top","25px");
		$('#logoTitle').css("margin-top","10px");
		
     }
}); 
  
  /*
 
 $(window).resize(function() {

    if ($(this).width()<920)
     {
        $('#twaritTitle').children("h5").css("visibility","collapse");
		$('#twaritTitle').width(200);
		if($(this).width()<400)
		{
			$('#logo').width(60);
			$('#logo').height(60);
			var sz= 32-(400-$(this).width())/45;
			$('#twaritTitle').children("h1").css("font-size",sz+"px");
			$('#twaritTitle').width($('#twaritTitle').children("h1").innerwidth());	
			$('.navbar-header').css("width","100%");
			$('.navbar-header').css("margin-right","40%");	
		}	
		else 
		{
			$('#logo').width(80);
			$('#logo').height(80);
			$('.navbar-header').css("width","70px");
			$('.navbar-header').css("margin-right","0px");	
		}	
     }
    else
     {
		$('#twaritTitle').children("h5").css("visibility","initial");
		$('#twaritTitle').width(450);
     }
 }); 
 
 
 

 $('#divIndex').css("top","0px");
		$('#divIndex').css("padding-top","8px");
		$('#divIndex').css("padding-bottom","8px");
		$('#divIndex').css("opacity","0.9");
		$('#logo').width(60);
		$('#logo').height(60);
		$('#twaritTitle').children("h1").css("font-size","22px");
		$('#twaritTitle').children("h5").css("font-size","12px");
		$('#twaritTitle').height(80);
		$('#navbar').css("margin-top","12px");
		$('#logoTitle').css("margin-top","5px");
		
		

 */
 