/**
 * jquery.snow - jQuery Snow Effect Plugin
 *
 * Available under MIT licence
 *
 * @version 1 (21. Jan 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @params minSize - min size of snowflake, 10 by default
 * @params maxSize - max size of snowflake, 20 by default
 * @params newOn - frequency in ms of appearing of new snowflake, 500 by default
 * @params flakeColor - color of snowflake, #FFFFFF by default
 * @example $.fn.snow({ maxSize: 200, newOn: 1000 });
 */
(function($){
	
	$.fn.snow = function(options){
	
			var $flake 			= $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#47;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 5,
									maxSize		: 10,
									newOn		: 1,
									flakeColor	: "#7100FF"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.8 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 50 + Math.random() * 20,
					durationFall		= documentHeight * 2 + Math.random() * 1000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);
	
	};
	
	$.fn.snow2 = function(options){
	
			var $flake 			= $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#47;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 5,
									maxSize		: 10,
									newOn		: 1,
									flakeColor	: "#000"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.8 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 50 + Math.random() * 20,
					durationFall		= documentHeight * 2 + Math.random() * 1000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);
	
	};
	
	$.fn.snow3 = function(options){
	
			var $flake 			= $('<div id="flake" />').css({'position': 'absolute', 'top': '-50px'}).html('&#47;'),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									minSize		: 5,
									maxSize		: 10,
									newOn		: 1,
									flakeColor	: "#000"
								},
				options			= $.extend({}, defaults, options);
				
			
			var interval		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.8 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - 40,
					endPositionLeft		= startPositionLeft - 50 + Math.random() * 20,
					durationFall		= documentHeight * 2 + Math.random() * 1000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);
	
	};
	
})(jQuery);