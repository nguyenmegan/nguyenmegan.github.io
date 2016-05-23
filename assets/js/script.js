$(document).ready(function() {
    $("#megan").hover(function() {
        if ($('#megan').hasClass('highlight')){
            $('#megan').removeClass('active');
        } else {
            $('#megan').addClass('active');
        }
    })

    $('#fullpage').fullpage({
      anchors: ['home', 'bio', 'portfolio'],
      menu: '#myMenu',
      slidesNavigation: true,
      scrollBar: true,
      autoScrolling: false,
      fitToSection: false
    });

});
