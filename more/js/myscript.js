"use strict";

var menuToggle = function(){
	$('.open_menu').click(function(){
		$('.mobile_menu').addClass('act');
	});
	$('.close_menu').click(function(){
		$('.mobile_menu').removeClass('act');
	});
}

$(window).load(function(){
	menuToggle();
});