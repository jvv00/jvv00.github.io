$(document).ready(function() {

	 Splitting({ target: '.splitting' });
  $('.splitting .char').each(function(index) {
    $(this).delay(100 * index).queue(function(next) {
      $(this).css({ opacity: 1, transform: 'translateY(0)' });
      next();
    });
  });

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
        anchors: ["first", "second", "third", "fourth", "fifth", "sixth", "seventh"],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Home', 'Profile', 'Portfolio01', 'Portfolio02', 'Portfolio03', 'Portfolio04', 'contact'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',
        // afterRender: function(origin, destination, direction){
        //     var section = destination.item;
        //     var progress = destination.index / (fullpage_api.getActiveSection().afterRender.length - 1);
        //     var lineWidth = progress * 100 + "%";
        //     document.getElementById("line").style.width = lineWidth;
        // },
        
		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
        sectionsColor : ['black', 'black', 'black'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
	});
});

