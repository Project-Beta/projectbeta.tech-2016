/*
 *
 * (C) ProjectBeta 2016
 * Designed by </KSL>
 *
 */

//Dynamic JS
var dynamic = $(function() {
    
//Navigation
        
    //Navigation Toggle On
    $('.navToggle').on('click', function() {
        $('nav').toggleClass('visible').animate(800);
        $('.navToggle').addClass('hidden').animate(800);
    });
    
    //Navigation Toggle Off
    $('.navClose').on('click', function() {       
        $('nav').toggleClass('visible').animate(800);
        $('.navToggle').removeClass('hidden').animate(800);
    });

});

//Execution on full load
$(document).ready(dynamic);