import 'ress';
import './styles/index.sass';

$(document).ready(function() {
  const $hamburger = $('#hamburger');
  const $menu = $('#menu');
  const $mobileMenu = $('.mobile-menu');
  const $dropDown = $('#dropdown');
  const $dropDownList = $('#dropdown-list');
  const openedClass = 'open';

  $('.switch').on('click', function(){
    $(this).toggleClass('active');
  });

  $($menu).on('click',function(e) {
    $($hamburger).toggleClass(openedClass);
    $($mobileMenu).toggleClass(openedClass)
  });

  // dropdown menu
  $($dropDown).on("click", function(e) {
    if($($dropDown).hasClass(openedClass)) {
      $($dropDownList).hide();
    } else {
      $($dropDownList).show();
    }
    $(this).toggleClass(openedClass);
    e.stopPropagation()
  });

  // close sign
  $('.sign__close').click(function () {
    $('.sign').toggle();
  });

  // Change .plan active status

  $('.plan').map((index, el) => {
    $(el).click(() => onPlanClick(el));
  });

  $(document).on("click", function(e) {
    if ($(e.target).is($dropDown) === false) {
      $($dropDown).removeClass(openedClass);
      $($dropDownList).hide();
    } else if ($(e.target).is($mobileMenu) === false) {
      $($mobileMenu).removeClass(openedClass);
    }
  });
});

function onPlanClick(el) {
  $('.plan.active').removeClass('active');
  $(el).addClass('active');
}