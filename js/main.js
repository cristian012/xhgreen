// Main Javascript

	
	//Initial complement Revolution Slider
	
	jQuery(document).ready(function() {
		      $('.fullwidthbanner').revolution({
						delay:9000,
						startwidth:1170,
						startheight:680,
						startWithSlide:0,

						fullScreenAlignForce:"off",
						autoHeight:"off",
						minHeight:"on",

						shuffle:"off",

						onHoverStop:"on",

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:3,

						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResoluition:0,

						hideThumbs:0,
						hideTimerBar:"off",

						keyboardNavigation:"on",

						navigationType:"bullet",
						navigationArrows:"solo",
						navigationStyle:"round",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:40,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:0,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:0,
						soloArrowRightVOffset:0,


						touchenabled:"off",
						swipe_velocity:"0.7",
						swipe_max_touches:"1",
						swipe_min_touches:"1",
						drag_block_vertical:"false",

						parallax:"mouse",
						parallaxBgFreeze:"on",
						parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
						parallaxDisableOnMobile:"off",

						stopAtSlide:-1,
						stopAfterLoops:-1,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						hideSliderAtLimit:0,

						dottedOverlay:"none",

						spinned:"spinner4",

						fullWidth:"off",
						forceFullWidth:"off",
						fullScreen:"off",
						fullScreenOffsetContainer:"#topheader-to-offset",
						fullScreenOffset:"0px",

						panZoomDisableOnMobile:"off",

						simplifyAll:"off",

						shadow:0
		 		});
	});



	sr.reveal('.reveal-top', {  origin: 'top', distance: '100px', duration: '1500'}, 300);
	sr.reveal('.reveal-bottom', {  origin: 'bottom', distance: '100px', duration: '1500'}, 300);
	sr.reveal('.reveal-left', {  origin: 'left', distance: '100px', duration: '1500'}, 300);
	sr.reveal('.reveal-right', {  origin: 'right', distance: '100px', duration: '1500'}, 300);