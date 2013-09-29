$(function(){

	$.scrollUp();

	var links = $('nav li');
	var backTopbtn = $('button');
	
	var home = links.eq(0).wrap("<a href='main.html'></a>");
	var services = links.eq(1).wrap("<a href='#services'></a>");
	var projects = links.eq(2).wrap("<a href='#projects'></a>");
	var aboutMe = links.eq(3).wrap("<a href='#aboutme'></a>");
	var contactMe = links.eq(4).wrap("<a href='#contact_me'></a>");
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});
