"use strict";

var menuToggle = function(){
	$('.open_menu').click(function(){
		$('.mobile_menu').addClass('act');
	});
	$('.close_menu').click(function(){
		$('.mobile_menu').removeClass('act');
	});
}

var hidePlaceholder = function(){
	$('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	          .attr('placeholder','');
	}).blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	});
}

var formValidate = function(){
	$('#form_send').click(function(){

        var name = $('#form #name').val();
        var email = $('#form #email').val();
        var message = $('#form #message').val();

        function isValidEmailAddress(email) {
		    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		    return pattern.test(email);
		};
		function isValidPhone(phone) {
		    var pattern = /[0-9\-\(\)\s]/;
		    return pattern.test(phone);
		};

		if (name.length < 1) {
			$('#form #name').addClass('error');
		} else {
			$('#form #name').removeClass('error');
			var validName = $('#form #name').val();
		}


		if (email.length < 1 || !isValidEmailAddress( email )) {
			$('#form #email').addClass('error');
		} else {
			$('#form #email').removeClass('error');
			var validEmail = $('#form #email').val();
		}

		if (message.length < 1 ) {
			$('#form #message').addClass('error');
		} else {
			$('#form #message').removeClass('error');
			var validmessage = $('#form #message').val();
		}


        if (!validName || !validEmail || !validAddress ) {
        	return false;
        }


        $.ajax({  
		    type: 'POST',  
		    url: 'sendmail.php', 
		    data: { 
		    	name : name,
		    	email : email,
		    	address : address
		    },
		    success: function(data) {
		        
		    },
		    error: function (data) {
                
            }
		});
    });
}

$(window).load(function(){
	menuToggle();
	hidePlaceholder();
	formValidate();
});