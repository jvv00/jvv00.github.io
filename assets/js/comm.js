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
    var $chars = $('#contents_07 .splitting .char')
    $chars.css({ opacity: 0, transform: 'translateY(100%)' }) // 초기 상태 설정

    // 문자 애니메이션 적용
    $chars.each(function (index) {
        var $char = $(this)
        setTimeout(function () {
            $char.css({ opacity: 1, transform: 'translateY(0)' })
        }, 100 * index)
    })

    animateOnSectionLoad()

    $(window).on('scroll', function () {
        if (isSectionVisible($('#contents_07'))) {
            animateOnSectionLoad()
        }
    })

    function animateOnSectionLoad() {
        // $('#contents_07 .thanks').addClass('slide-up')
        $('#contents_07 .splitting .char').addClass('slide-up')
    }

    function isSectionVisible($section) {
        var windowTop = $(window).scrollTop()
        var windowBottom = windowTop + $(window).height()
        var sectionTop = $section.offset().top
        var sectionBottom = sectionTop + $section.outerHeight()
        return sectionBottom >= windowTop && sectionTop <= windowBottom
    }

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

        // 추가된 부분
        afterLoad: function (anchorLink, index) {
            animateOnSectionLoad() // 섹션 로드 시 애니메이션 실행
        },
        onLeave: function (index, nextIndex, direction) {
            $('#contents_07 .thanks').removeClass('slide-up')
            $('#contents_07 .splitting .char').removeClass('slide-up')
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            animateOnSectionLoad() // 슬라이드 로드 시 애니메이션 실행
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            $('#contents_07 .thanks').removeClass('slide-up')
            $('#contents_07 .splitting .char').removeClass('slide-up')
        },
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
            $('.slide-desc > h2').addClass('fade-in')
            $('.tag').addClass('fade-in')
            animateOnSectionLoad()
        },
        onLeave: function (index, nextIndex, direction) {
            $('.slide-desc > h2').removeClass('fade-in')
            $('.tag').removeClass('fade-in')
            // $('#contents_07 .thanks').removeClass('slide-up')
            $('#contents_07 .splitting .char').removeClass('slide-up')
        },
        afterRender: function () {},
        afterResize: function () {},
        afterResponsive: function (isResponsive) {},
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            $('.slide-desc > h2').addClass('fade-in')
            $('.tag').addClass('fade-in')

            setTimeout(function () {
                $('.slide-desc > h2').removeClass('fade-in')
            }, 2000)
            setTimeout(function () {
                $('.tag').removeClass('fade-in')
            }, 2000)
            animateOnSectionLoad()
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            $('.slide-desc > h2').removeClass('fade-in')
            $('.tag').removeClass('fade-in')
            // $('#contents_07 .thanks').removeClass('slide-up')
            $('#contents_07 .splitting .char').removeClass('slide-up')
        },
    })
})
