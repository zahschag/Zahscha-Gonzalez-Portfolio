$(function(){


	var links = $('nav li');
	
	var home = links.eq(0).html("<a href='main.html'>Home</a>");
	var services = links.eq(1).html("<a href='#services'>Services</a>");
	var projects = links.eq(2).html("<a href='#projects'>Projects</a>");
	var aboutMe = links.eq(3).html("<a href='#about_me'>About Me</a>");
	var contactMe = links.eq(4).html("<a href='contact_me'><Contact Me</a>");
	console.log(contactMe);
});