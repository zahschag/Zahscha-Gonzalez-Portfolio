$(function(){

	$.scrollUp();
  $('form').bind('submit', function(){
    return false;
  });
	var links = $('nav li');
	var home = links.eq(0).wrap("<a href='main.html'></a>");
	var services = links.eq(1).wrap("<a href='#services'></a>");
	var projects = links.eq(2).wrap("<a href='#projects'></a>");
	var aboutMe = links.eq(3).wrap("<a href='#about_me'></a>");
	var contactMe = links.eq(4).wrap("<a href='#contact_me'></a>");

/*Fancy box plug in begins*/
  $('a.placeholder').fancybox({
      openEffect : 'none',
      closeBtn : true,
      arrows : true,
      overlayShow : false
  });

/*Smooth scrolling begins*/
//Targets the attr href that is selected
//added a click function
//captures the location of the target
/* uses a conditional to test the offset top position of the id attr and scrolls directly
using a an animation*/
//returns false to escape the operation.
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        },{
          duration:500,
          specialEasing:{
            width:"linear",
            height: "easeOutBounce"
          }
        });
        return false;
      }
    }
  });
//Form validation
});
