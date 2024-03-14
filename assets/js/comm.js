$(document).ready(function() {
    var line1 = $("#line1");
    var line2 = $("#line2");
    var line3 = $("#line3");
    var line4 = $("#line4");
    var line5 = $("#line5");

        // 선의 초기 너비를 설정합니다. (0으로 설정하여 선이 숨겨진 상태로 시작됩니다.)
        line1.css("width", "0");
        line2.css("width", "0");
        line3.css("width", "0");
        line4.css("width", "0");
        line5.css("width", "0");
    
        // 선의 최종 너비를 설정합니다. (90%로 설정하여 원하는 최종 너비로 지정합니다.)
        var finalWidth = "90%";
    
        // 선의 초기 너비를 설정한 후, 잠시 후에 선의 최종 너비로 변경됩니다.
        // 첫 번째 선에 대한 애니메이션
$("#line1").animate({width: finalWidth}, 200, function() {
    // 첫 번째 선의 애니메이션이 완료된 후 두 번째 선에 대한 애니메이션을 실행합니다.
    $("#line2").animate({width: finalWidth}, 200, function() {
        // 두 번째 선의 애니메이션이 완료된 후 세 번째 선에 대한 애니메이션을 실행합니다.
        $("#line3").animate({width: finalWidth}, 200, function(){

			$("#line4").animate({width: finalWidth}, 200, function(){
				
				$("#line5").animate({width: finalWidth}, 200)

			});
		});
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

