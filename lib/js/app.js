$('#more-info-btn').click(function(){
	$('.product-info-popup').fadeIn(250);
});

$('.product-info-popup .icon-x').click(function(){
	$('.product-info-popup').fadeOut(250);
});

$('.cart').click(function(){
	$('#shopping-cart').addClass('active');
});

$('#shopping-cart .icon-x').click(function(){
	$('#shopping-cart').removeClass('active');
});
