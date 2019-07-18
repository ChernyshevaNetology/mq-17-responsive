$(document).ready(function(){

    $('.slide').click(function(e) {
 
     let linkHref = $(this).attr('href');
     
     $('html, body') .animate({
         scrollTop: $(linkHref).offset().top
     }, 1200); 
 
     e.preventDefault();
    });
});