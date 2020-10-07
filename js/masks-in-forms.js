let phoneMask = document.getElementById('form-promo-phone');
let phoneMask1 = document.getElementById('form-questions-phone');
let phoneMask2 = document.getElementById('form-ready-phone');

$(function(){
    $(phoneMask).mask('+375-(99)-999-99-99');
});

$(function(){
    $(phoneMask1).mask('+375-(99)-999-99-99');
});

$(function(){
    $(phoneMask2).mask('+375-(99)-999-99-99');
});
