$(document).ready(function() {	

    
    
    $("#content-title,#o-ans-notice,#ans2,#ans3,#send-msg,#qa1-next,#qa2-next,#go-msg-panel").hide();  
  
    $('#send-msg,#qa1-next1,#qa2-next').css({
        opacity: '0',
    }, 8); 
    
    
    var screenWidth = window.innerWidth;
    
    if (screenWidth > 768) {
        
            $("#aimate-mov-panel").append('<embed src="images/pc_animate.svg" />');
        
    } else {
        
        $("#aimate-mov-panel").append('<embed src="images/mb_animate_mov2.svg" />');
    }   
    
setTimeout(() => {
  
    $('#aimate-mov-panel').animate({
        opacity: '0',
        transform: 'scale(1.2)'
    }, 1500); 
    
    $('#aimate-mov-panel').fadeOut();
    
    $('#cover-ball').animate({
        opacity: '1'
    }, 500);
      
     
}, 4500);  

    
setTimeout(() => {
    
    //選單
    $('#ani-nav').animate({
        top: '0'
    }, 500, "easeOutBounce");

    
    //寬度取得後動作
    
    var wWidth = window.innerWidth;

    if (wWidth > 768) {
        
        //大標圖案

        $('#ani-content-title').animate({
            width: '510px',
            transform: 'rotateY(180deg)',
            position: 'absolute',
            left: '50%',
            marginLeft:'-550px',
            top: '50vh',
            marginTop:'-283px',
            opacity: '1',
            transform: 'scale(1.2)',
            transform: 'rotateY(180deg)'
        }, 800, "easeOutBounce");        
        

    } else {
        
        $('#pc-road').hide();
        
        $('#ani-content-title').animate({
            width: '28%',
            position: 'absolute',
            left: '50%',
            marginLeft:'-14%',
            top: '115px',
            opacity: '1',
            transform: 'scale(1.2)',
            transform: 'rotateY(180deg)'
        }, 800, "easeOutBounce");
        
        //大標圖案
        
        $('#content-title').animate({
           
        }, 500);


    }      
   
    //過場原型
    $('#cover-ball').hide();
       
    
}, 5500);      
    
setTimeout(() => {
  
    //內容
    $('#main-content,#qman1,#qman2,#background-road').animate({
        
        opacity: '1'
    }, 800);

}, 6000); 

    
$("#o-ans").click(function(){
    $("#qa1-next").show();
    $("#o-ans-notice").show();
    $("#o-ans-notice").animate({
        opacity: '1'
    }, 500, "easeOutBounce");
});

$("#o-ans2").click(function(){
    $("#qa2-next").show().css({opacity:'1',display:'block'});
    $("#o-ans-notice").show();
    $("#o-ans-notice").animate({
        opacity: '1'
    }, 500, "easeOutBounce");
});

$("#o-ans3 ").click(function(){
    $("#o-ans-notice").show();
    $("#o-ans-notice").animate({
        opacity: '1'
    }, 500, "easeOutBounce");
    
    setTimeout(() => {
  
    $("#o-ans-notice").fadeOut();
    $("#main-content,#qman1,#qman2,#ani-content-title").fadeOut();
    $("#go-msg-panel").show();
    $("#go-msg-panel").show();
    $("#go-msg-panel").animate({
        opacity: '1'
    }, 1000);   

    }, 1800); 

});    
   
    
$("#qa1-next").click(function(){
    $("#ans1,#qa1-next").hide();
    $("#ans2").show();
    $("#o-ans-notice").hide();
});
    
$("#qa2-next").click(function(){
    $("#qa2-next,#ans2").hide();
    $("#ans3").show();
    $("#o-ans-notice").hide();
});

    
$("#go-msg-btn").click(function(){
    $("#go-msg-panel").hide();
    $("#send-msg,#ani-content-title").show();
    $("#send-msg").animate({
        opacity: '1'
    }, 800);
    
    var newWidth = window.innerWidth;
    
    if (newWidth > 768) {
        
        $("#qman1,#qman2").show();
    
    } else {
    
    
    }
    

});     


    
  
    
//alert('work end'); 
    
//end	  
    
});

	
	
	


	
	

	
	
	
	
	
