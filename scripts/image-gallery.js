/* When the thumbnail button clicked, show one figure, hide the others. */
$('#buttonA').click(function () {
  /* show one figure, hide the others */
  $('#itemA').removeClass('hidden');
  $('#itemB').addClass('hidden');
  $('#itemC').addClass('hidden');
  $('#thumbA').addClass('outline');
  $('#thumbB').removeClass('outline');
  $('#thumbC').removeClass('outline');
})

/* When the thumbnail button clicked, show one figure, hide the others. */
$('#buttonB').click(function () {
  /* show one figure, hide the others */
  $('#itemA').addClass('hidden');
  $('#itemB').removeClass('hidden');
  $('#itemC').addClass('hidden');
  $('#thumbA').removeClass('outline');
  $('#thumbB').addClass('outline');
  $('#thumbC').removeClass('outline');
})

/* When the thumbnail button clicked, show one figure, hide the others. */
$('#buttonC').click(function () {
  /* show one figure, hide the others */
  $('#itemA').addClass('hidden');
  $('#itemB').addClass('hidden');
  $('#itemC').removeClass('hidden');
  $('#thumbA').removeClass('outline');
  $('#thumbB').removeClass('outline');
  $('#thumbC').addClass('outline');
})

setInterval(function () {
  $('#itemA').addClass('hidden');
  $('#itemB').removeClass('hidden');
  $('#itemC').addClass('hidden');
  $('#thumbA').addClass('outline');
  $('#thumbB').removeClass('outline');
  $('#thumbC').removeClass('outline');

  setTimeout(function () {
    $('#itemA').addClass('hidden');
    $('#itemB').addClass('hidden');
    $('#itemC').removeClass('hidden');
    $('#thumbA').removeClass('outline');
    $('#thumbB').removeClass('outline');
    $('#thumbC').addClass('outline');

    setTimeout(function () {
      $('#itemA').removeClass('hidden');
      $('#itemB').addClass('hidden');
      $('#itemC').addClass('hidden');
      $('#thumbA').addClass('outline');
      $('#thumbB').removeClass('outline');
      $('#thumbC').removeClass('outline');

    }, 5000);
  }, 5000);
}, 5000);
