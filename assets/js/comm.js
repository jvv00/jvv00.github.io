$(document).ready(function () {
    $('.intro_wrap').slideDown()

    Splitting({ target: '.splitting' })
    $('.splitting .char').each(function (index) {
        $(this)
            .delay(100 * index)
            .queue(function (next) {
                $(this).css({ opacity: 1, transform: 'translateY(0)' })
                next()
            })
    })
    setTimeout(function () {
        $('.slide-desc > h2').addClass('fade-in')
    }, 1000)
})

// 윈도우 스크롤 이벤트에 pcScrollEvent 함수 연결
$('#fullpage').fullpage({
    // Fullpage 옵션 설정
    menu: '#menu',
    lockAnchors: false,
    anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'],
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
    scrollOverflow: true,
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
    sectionsColor: '#111',
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    afterLoad: function (anchorLink, index) {
        $('.slide-desc > h2').addClass('fade-in') // 섹션 로드 후에 fadeIn 클래스 추가
    },
    onLeave: function (index, nextIndex, direction) {
        $('.slide-desc > h2').removeClass('fade-in') // 섹션 이탈 시 fadeIn 클래스 제거
    },
    afterRender: function () {},
    afterResize: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        $('.slide-desc > h2').addClass('fade-in')

        setTimeout(function () {
            $('.slide-desc > h2').removeClass('fade-in')
        }, 2000) // fadeIn 애니메이션 지속 시간 (ms)
    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
        $('.slide-desc > h2').removeClass('fade-in')
    },
})
