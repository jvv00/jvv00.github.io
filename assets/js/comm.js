$(document).ready(function() {
    $('#fullpage').fullpage({
        // 옵션 설정
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#f90'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        controlArrows: false,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#menu'
    });
});
