(function ($) {
		
	var tooltip = function (el) {
				
		this.$el = $(el);
		
		this.init = function() {
			
			var parent = this;
			
			this.$el.each(function( key, value ) {
				
				var $obj = $(this);
				
				$obj.hover(function(e) {
						
					var $this = $(this);
					var title = $this.attr('title');
					
					if(title != ''){
						//console.log(title);
						parent.addToolTip(title, $this);
					};
					
					
				}, function(e){
					
					var $this = $(this);
					var title = $this.attr('title');
					
					if(title != ''){
						//console.log(title);
						//remove tooltip
						$("#pm_marker_tooltip").remove();
					};
					
				});
				
			});
									
		};//end of init
		
		this.addToolTip = function(toolTipData, el){
				
			var $el = $(el);
										
			$("body").append("<div id='pm_marker_tooltip'>"+ toolTipData +"</div>");								 
			$("#pm_marker_tooltip")
				.css("top",($el.pageY - xOffset) + "px")
				.css("left",($el.pageX + yOffset) + "px")
				.fadeIn("fast");
				
			var yOffset = $("#pm_marker_tooltip").height() + 30;
			var xOffset = 20;
			
			$($el).mousemove(function(e){
								
				var mouseX = e.pageX;
				var mouseY = e.pageY;
				//console.log(yOffset);
				$('#pm_marker_tooltip').css("top",(mouseY - yOffset) + "px").css("left",(mouseX + xOffset) + "px");
				
								
								
			});		
				
		};//end of toolTip
		
	};
	
	window.ToolTip = tooltip
	
})(jQuery);