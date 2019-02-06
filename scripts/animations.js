$(document).ready(function() {
    let toggle = true;
    $("p").click(function(){
        if (toggle === true){
            $(".sidebar").animate({width: '0px'});
            $(".main").animate({marginLeft: '0px'});
            toggle = false;
        } else {
            $(".sidebar").animate({width: '160px'});
            $(".main").animate({marginLeft: '160px'});
            toggle = true;
        }
    });
});