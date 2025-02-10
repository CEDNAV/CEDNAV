$(document).ready(function(){

  $('.category_list .category_item[category="all"]').addClass('ct_item-active');

  $('.category_item').click(function() {
    var catProduct = $(this).attr('category');

    $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

    //ocultar productos
    $('.products-item').hide();
    //mostrar Productos
    $('.products-item[category="'+catProduct+'"]').show();
  })
    $('.category_item[category="all"]').click(function(){
      $('.products-item').show();
  });


});
