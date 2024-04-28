$(document).ready(function() {
    //efectos menú
    $('.menu a').each(function(index,elemento){
        $(this).css ({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500));
    });

    //Scroll elemento de menú
    var acercaDe =$('#acerca-de').offset().top,
        trabajos =$('#trabajos').offset().top,
        contacto =$('#contacto').offset().top;
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: acercaDe -100
        } ,500);
    });
    $('#btn-trabajos').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: trabajos -100
        } ,500);
    });
    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: contacto -100
        } ,500);
    });
});