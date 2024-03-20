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

    var basicController = new ScrollMagic.Controller()

    var scene5_2 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-01' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-01 .title', 'visible')
        .reverse(false)
        .addTo(basicController)
    var scene5_3 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-01' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-01 .info-tap', 'visible')
        .reverse(false)
        .addTo(basicController)

    var scene5_4 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-02' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-02 .title', 'visible')
        .reverse(false)
        .addTo(basicController)
    var scene5_5 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-02' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-02 .info-tap', 'visible')
        .reverse(false)
        .addTo(basicController)

    var scene5_6 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-03' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-03 .title', 'visible')
        .reverse(false)
        .addTo(basicController)
    var scene5_7 = new ScrollMagic.Scene({ triggerElement: '.rolling .rolling-area .txt-obj#rolling-03' })
        .setClassToggle('.rolling .rolling-area .txt-obj#rolling-03 .info-tap', 'visible')
        .reverse(false)
        .addTo(basicController)
    let reCounter = 1
    let isPuase = false
    var isStatus = 0
    // pcScrollEvent 함수 수정
    function pcScrollEvent() {
        let documentHeight = $(document).scrollTop()

        let pcImgTriggerOne = $('.rolling .rolling-area #rolling-01').offset().top
        let pcImgTriggerOneHeight = $('.rolling .rolling-area #rolling-01').outerHeight() / 2
        let pcImgTriggerOneVal = pcImgTriggerOne - pcImgTriggerOneHeight

        let pcImgTriggerTwo = $('.rolling .rolling-area #rolling-02').offset().top
        let pcImgTriggerTwoHeight = $('.rolling .rolling-area #rolling-02').outerHeight() / 2
        let pcImgTriggerTwoVal = pcImgTriggerTwo - pcImgTriggerTwoHeight

        let pcImgTriggerThree = $('.rolling .rolling-area #rolling-03').offset().top
        let pcImgTriggerThreeHeight = $('.rolling .rolling-area #rolling-03').outerHeight() / 2
        let pcImgTriggerThreeVal = pcImgTriggerThree - pcImgTriggerThreeHeight

        let pcImgFixedDom = $('.rolling .rolling-area .device-obj-wrap')

        // Device Image Container Variable..
        let pcImgActiveDom = $('.rolling .rolling-area .device-obj')
        let pcImgActiveDomOne = $('.rolling .rolling-area .device-obj.one')
        let pcImgActiveDomTwo = $('.rolling .rolling-area .device-obj.two')
        let pcImgActiveDomThree = $('.rolling .rolling-area .device-obj.three')

        let pcImgActiveDomEnd = $('#contents-06').offset().top
        let pcImgActiveDomEndHeight = $('#contents-06').outerHeight() / 2
        let pcImgActiveDomEndVal = pcImgActiveDomEnd - pcImgActiveDomEndHeight

        let pcTabBtnDom = $('.rolling .rolling-area .info-tap .roll-tab')
        let pcTabBtnDomOne = $('.rolling .rolling-area .info-tap .roll-tab.one')
        let pcTabBtnDomTwo = $('.rolling .rolling-area .info-tap .roll-tab.four')
        let pcTabBtnDomThree = $('.rolling .rolling-area .info-tap .roll-tab.eight')

        let pcTabImgDom = $('.rolling .rolling-area .device-obj-wrap .device-obj .roll-tab-img')
        let pcTabImgDomOne = $('.rolling .rolling-area .device-obj-wrap .device-obj .roll-tab-img.one')
        let pcTabImgDomTwo = $('.rolling .rolling-area .device-obj-wrap .device-obj .roll-tab-img.four')
        let pcTabImgDomThree = $('.rolling .rolling-area .device-obj-wrap .device-obj .roll-tab-img.eight')

        if (documentHeight >= pcImgTriggerOneVal && documentHeight < pcImgTriggerOne) {
            if (isStatus !== 1) {
                pcImgFixedDom.removeClass('active finish').addClass('remove')
                pcImgActiveDom.removeClass('on')
                pcImgActiveDomOne.addClass('on')
                pcTabBtnDom.removeClass('active')
                pcTabImgDom.removeClass('active')
                pcTabBtnDomOne.addClass('active')
                pcTabImgDomOne.addClass('active')
                isStatus = 1
            }
        } else if (documentHeight >= pcImgTriggerOne && documentHeight < pcImgTriggerTwoVal) {
            if (isStatus !== 6) {
                pcImgFixedDom.removeClass('finish').addClass('active')
                pcImgActiveDom.removeClass('on')
                pcImgActiveDomOne.addClass('on')
                pcTabBtnDom.removeClass('active')
                pcTabImgDom.removeClass('active')
                pcTabBtnDomOne.addClass('active')
                pcTabImgDomOne.addClass('active')
                isStatus = 6
            }
        } else if (documentHeight >= pcImgTriggerTwoVal && documentHeight < pcImgTriggerThreeVal) {
            if (isStatus !== 2) {
                pcImgFixedDom.removeClass('finish').addClass('active')
                pcImgActiveDom.removeClass('on')
                pcImgActiveDomTwo.addClass('on')
                pcTabBtnDom.removeClass('active')
                pcTabImgDom.removeClass('active')
                pcTabBtnDomTwo.addClass('active')
                pcTabImgDomTwo.addClass('active')
                isStatus = 2
            }
        } else if (documentHeight >= pcImgTriggerThreeVal && documentHeight < pcImgTriggerThree) {
            if (isStatus !== 3) {
                pcImgActiveDom.removeClass('on')
                pcImgActiveDomThree.addClass('on')
                pcImgFixedDom.removeClass('finish')
                pcTabBtnDom.removeClass('active')
                pcTabImgDom.removeClass('active')
                pcTabBtnDomThree.addClass('active')
                pcTabImgDomThree.addClass('active')
                isStatus = 3
            }
        } else if (documentHeight >= pcImgTriggerThree) {
            if (isStatus !== 4) {
                pcImgFixedDom.addClass('finish')
                isStatus = 4
            } else {
                if (isStatus !== 5) {
                    pcImgFixedDom.removeClass('active')
                    pcProgressFixedDom.removeClass('finish active')
                    pcImgActiveDom.removeClass('on')
                    pcImgActiveDomOne.addClass('on')
                    pcTabImgDom.removeClass('active')
                    pcTabBtnDom.removeClass('active')
                    pcTabBtnDomOne.addClass('active')
                    pcTabImgDomOne.addClass('active')
                    isStatus = 5
                }
            }
        }

        // Vibe 기능 PC 탭 클릭 이벤트
        pcTabBtnDom.on('click', function () {
            var _this = jQuery(this)
            let thisActive = _this.attr('rel')
            pcTabBtnDom.removeClass('active')
            _this.addClass('active')
            pcTabImgDom.removeClass('active')
            jQuery('#' + thisActive).addClass('active')
        })
    }
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
    sectionsColor: ['black', 'black', 'black'],
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
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
    afterResize: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {},
})
