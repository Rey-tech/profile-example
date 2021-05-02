

$('#nav-trigger').click(function(){
    $('#menu').slideToggle('fast');
})
$(window).on('resize' , function(){
    if($(window).width() > 700) {
        $('#menu').show();
    }else {
        $("#menu").hide();
    }
})



