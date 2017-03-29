function checkState(state){	
		jQuery('.panel').each(function(){
			var index = jQuery(this).index();
			var the_state = state + 1;
			if(index >= state){
				jQuery(this).addClass('bottom-stack');
				jQuery(this).removeClass('top-stack');
			}else{
				jQuery(this).removeClass('bottom-stack');
				jQuery(this).addClass('top-stack');
			}
			jQuery('.control-circle').removeClass('highlight');
			jQuery('.control-circle:nth-of-type(' + the_state + ')').addClass('highlight');
		});
	}
	function scrollSlide(){
		var state = 0;
		var interval = "";
		jQuery(window).on('wheel', function(e) {
			var delta = e.originalEvent.deltaY;
			clearTimeout(interval);
			if (delta > 0 && state >= 0 && state <= 3){
				interval = setTimeout(function(){
					state++;
					checkState(state);
					return state;
					},300);
			}
			if (delta < 0 && state > 0 && state <= 4){
				interval = setTimeout(function(){
					state--;
					checkState(state);
					return state;
				},300);
			}
			return false; 
		});	
	}
	jQuery(document).ready(function(){
		jQuery('.control-circle').each(function(){
			jQuery(this).on('click' , function(){
				var state = jQuery(this).index();
				console.log(state);
				checkState(state);
				jQuery('.control-circle').removeClass('highlight');
				jQuery(this).addClass('highlight');
			});
		});
	});
	var win_width = jQuery(window).width();
	if(win_width > 1287){
		scrollSlide();
	}
	jQuery(window).resize(function(){
		if(win_width > 1287){	
		scrollSlide();
		}
	});