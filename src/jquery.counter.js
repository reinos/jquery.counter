(function($){
	$.fn.counter = function(options){
		//maintain chaining
		return this.each(function(){
				
			//settings
			var $item = $(this);
			var $object = $(this);
			var settings = {
			    toGo         	: "22",
			    aantalNul		: 2,
			    aantalCijfers	: 0
		    };
				
			//extend the user options
			if ( options ) { 
			    $.extend( settings, options );
			}

			//wanneer in het item een aantal is meegegeven kan deze worden geberuikt.
			if($object.text() != ''){		
				var val = $object.text().split(':');
				settings.toGo = val[0];
				settings.aantalCijfers = val[1];

				$object.text(' ');
			}
				

			//aantal cijfers
			//wanneer er een custum aantal cijgers is meegegeven
			if(settings.aantalCijfers != 0) {
				settings.aantalCijfers = settings.aantalCijfers;
			} else {
				settings.aantalCijfers = settings.aantalNul + settings.toGo.length;
			}

			//vars
			var length = settings.toGo.length;
				  
			//zet een div neer
			for(var i=0,factor=settings.toGo.length; i < settings.aantalCijfers; i++, factor--) {
				
				$object.prepend('<div class="counter_wrapper vak_'+i+'"><ul style="display:none;" class="counter_list '+i+'" /></div>');

				//style
				// $object.css({
				// 	borderLeft:'1px solid #D07900' 
				// });	
				$object.find('.counter_wrapper').css({
						position: 'relative',
						float:'left',
						width:'30px',
						height:'40px',
						overflow: 'hidden'
				});
				$object.find('.counter_list').css({
					margin:'0 0 0 10px',
					padding:'0',
					listStyle:'none',
					position:'absolute',
					top:0
				});

				//zet de li`s neer
				var lastNr = 0;
				for(var y=1; y<=(length*(factor-1)); y++) {
					for(var x=0; x<10; x++) {
						$('.'+i).append('<li>'+x+'</li>');
					}
				}

				//lengte verkorte
				length = length - 1;
				if(length < 0) {length = 0;}
			}

			//rest invullen.	
			for(var y=settings.toGo.length-1,i=0; y>=0; y--, i++) {
				for(var x=0; x<=settings.toGo.charAt(y); x++) {
					$('.'+i).append('<li>'+x+'</li>');
				}
			}



				
			//animate
			function animateteller($ul, height){
				//rest invullen.
				setTimeout(function(){
					$ul.animate({top:'-'+height}, 2000);
				}, 1000);
			}

			//wanneer een ul leeg is deze vullen met een 0
			$object.find('ul').each(function(){
					
				if($(this).find('li').length == 0) {
					$(this).append('<li>0</li>');
				}

				$(this).before('<span>'+$(this).find('li:last').text()+'</span>');
			
				animateteller($(this), $(this).height() - $(this).find('li:first').height());
			});
		});		
	};
})(jQuery);