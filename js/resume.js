// jQuery for page scrolling feature - requires jQuery Easing plugin
$( document ).ready(function() {

	
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	// Highlight the top nav as scrolling occurs
	$('#content').scrollspy({
		target: '.navbar-fixed-top'
	});
	
	
	// Floating label headings for the contact form

	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
	
	
	var $appeared = $('#appeared');
	var $disappeared = $('#disappeared');
	$('.animateup').appear();
	$(document.body).on('appear', '.animateup', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInUp');    
		})
	  });
	$('.animateleft').appear();
	$(document.body).on('appear', '.animateleft', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInLeft');    
		})
	  });
	$('.animateright').appear();
	$(document.body).on('appear', '.animateright', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInRight');    
		})
	  });
	  $('.animatezoomin').appear();
		$(document.body).on('appear', '.animatezoomin', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated zoomIn');    
		})
	  });
	  var flag = true;
	 $('.knob').appear();
	 $(document.body).on('appear', '.knob', function(e, $affected) {
		if(flag){
			$affected.each(function () {
				var $this = $(this);
			   var myVal = $this.attr("value");
			   
				$this.knob({
						
				   });
				  $({
					   value: 0
				   }).animate({

					   value: myVal
				   }, {
					   duration: 2000,
					   easing: 'swing',
					   step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
						 
						  

					   }
				   });
			});
			flag = false;
		}
	  });
	  
		
	  
	/*Knobs JS*/
	 $(".knob").knob({
                    change : function (value) {
                        //console.log("change : " + value);
                    },
                    release : function (value) {
                        //console.log(this.$.attr('value'));
                        console.log("release : " + value);
                    },
                    cancel : function () {
                        console.log("cancel : ", this);
                    },
                    /*format : function (value) {
                        return value + '%';
                    },*/
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

                // Example of infinite knob, iPod click wheel
                var v, up=0,down=0,i=0
                    ,$idir = $("div.idir")
                    ,$ival = $("div.ival")
                    ,incr = function() { i++; $idir.show().html("+").fadeOut(); $ival.html(i); }
                    ,decr = function() { i--; $idir.show().html("-").fadeOut(); $ival.html(i); };
                $("input.infinite").knob(
                                    {
                                    min : 0
                                    , max : 20
                                    , stopper : false
                                    , change : function () {
                                                    if(v > this.cv){
                                                        if(up){
                                                            decr();
                                                            up=0;
                                                        }else{up=1;down=0;}
                                                    } else {
                                                        if(v < this.cv){
                                                            if(down){
                                                                incr();
                                                                down=0;
                                                            }else{down=1;up=0;}
                                                        }
                                                    }
                                                    v = this.cv;
                                                }
                                    });

	
	
	   //Flex slider in home section
	 $('.flexslider').flexslider({
        animation: "slide",
		direction: "vertical",
		controlNav: false,               
		directionNav: false,           
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  
	  function initialize()
		{
		var mapProp = {
		  center:new google.maps.LatLng(51.508742,-0.120850),
		  zoom:5,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	
	  /*Javascript for portfolio*/
    var $container = $('#container');
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 0
      },
      masonryHorizontal : {
        rowHeight: 0
      },
      cellsByRow : {
        columnWidth : 0,
        rowHeight : 0
      },
      cellsByColumn : {
        columnWidth : 0,
        rowHeight : 0
      },
      getSortData : {
        symbol : function( $elem ) {
          return $elem.attr('data-symbol');
        },
        category : function( $elem ) {
          return $elem.attr('data-category');
        },
      /*  number : function( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        weight : function( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
		*/
      }
    });
    
	var $sortBy = $('#sort-by');
    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
    });
	
	
	/*Portfolio JS*/
	 // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
	getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  
  // change is-checked class on buttons
  $('.filter_group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

	
});

$( window ).resize(function() {
	//home section image size to window size.
	var height = $(window).height();
    $(".home").css("height",height);
	$(".home_wrap").css("height",height);
	$(".home").css("max-width","100%");

});


$(window).load(function(){
	
	jQuery('#portfolio #filters .filter.active').click();
    ////code for closing the navbar
   $('.nav').click( function() {
        $('.navbar-collapse').removeClass('in');
    });  
 
});

 
