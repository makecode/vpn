import 'ress';
import './styles/index.sass';

$(document).ready(function() {
  $('.switch').on('click', function(){
    $(this).toggleClass('active');
  });

  $('#hamburger').on('click',function() {
    $(this).toggleClass('open');
  });

  $('.dropdown').click(function() {
    $(this).toggleClass('open');
  });

});
