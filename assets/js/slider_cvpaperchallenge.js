// when start the slide
$('#carousel-slider').on('slide.bs.carousel', function () {
  // hide caption
  $('#carousel-slider .carousel-caption').hide();
});
// when stop the slide
$('#carousel-slider').on('slid.bs.carousel', function () {
  // fade in the caption
  $('#carousel-slider .carousel-caption').fadeIn();
});