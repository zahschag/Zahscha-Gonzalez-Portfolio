$(function(){


	var links = $('nav li');
	
	var home = links.eq(0).wrap("<a href='main.html'></a>");
	var services = links.eq(1).wrap("<a href='#services'></a>");
	var projects = links.eq(2).wrap("<a href='#projects'></a>");
	var aboutMe = links.eq(3).wrap("<a href='#aboutme'></a>");
	var contactMe = links.eq(4).wrap("<a href='#contact_me'></a>");
});