$(document).on('ready',function(){
	var scrollable = function(){
		"use strict";
		return{
			scroll:function(){
				var scrolled = document;
				console.log(scrolled);
			}
		}
	}

	console.log(scrollable);
	// scrollable.scroll();	

	$(document).on('scroll',function(){
		console.log('s');
	})
});