/*
 * JS counter jQuery Plugin
 *
 * Copyright (c) 2010 Mithun Satheesh
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 * mail:mithunsatish@gmail.com
 * @version 0.1
 */
 
(function($){
    $.fn.extend({ 
 
     	jsCount: function(options) {
 
 
             var defaults = {
                start:1024,
				end:1064,
				speed:20,
				div_name:"JS_Counter"
            }
                 
            var options =  $.extend(defaults, options);
			
			
                  return this.each(function() {
                  
				  var o =options;
                  var obj = $(this);  			  
				  
				  var maker = ''+o.end+'';
				  var make = maker.length;
				  
				  obj.css({"width":"110px","height":"38px"}); 
				  
				  while(make)
				  {
					 obj.append("<div id='"+o.div_name+make+"'></div>");
					 $("div #"+o.div_name+make).css({"width":"22px","height":"38px","float":"left","background":"url(JSCounter/count.png) no-repeat","background-position":"-198px 0px"});
					 make--; 
				  }
				  
				
				
				function shownum()
				{
					if(o.start<o.end)
					{
						o.start++;	
						
						
						var my_car=''+o.start+'';
						var length = my_car.length;
						var index = 0;
																	
						while(length)
						{
							document.getElementById(o.div_name+length).style.backgroundPosition='-'+((9-parseInt(my_car.charAt(index)))*22)+'px 0px';
							index++;
							length--;
						}
						
						
						if(o.start<o.end)
						{
							setTimeout(shownum,o.speed)
						} 
					}
					else
					{
						return false;
					}
				}
				  
				  
				
				
				shownum();
				  
				  
				  });
        }
    });
})(jQuery);