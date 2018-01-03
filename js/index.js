//When readmore is clicked, the rest of the paragraph will be shown
$('.readmore').on('click' , function() {
  $('#show-this-on-click').slideDown();
  // Hide readmore
  $('.readmore').hide();
  // Show readless
  $('.readless').show();
});

//When readless is clicked, the extra paragraph section will be hidden
$('.readless').on('click' , function() {
  $('.hide').slideUp();
  // Show readmore
  $('.readmore').show();
  });


//When learnmore is clicked, the rest of the paragragh will be shown
$('.learnmore').on('click' , function() {
  $('#learnmoretext').slideDown();
  // Hide learnmore
  $('.learnmore').hide();
});