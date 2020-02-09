
// on()
$('h1').on('mouseenter', function() {
  $(this).toggleClass("turnBlue");
})

$('input').eq(1).on('click', function() {
  $('.container').slideUp(3000);
})
