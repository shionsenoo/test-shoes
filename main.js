document.addEventListener('DOMContentLoaded', function() {
  // 3D-animation
  VanillaTilt.init(document.querySelectorAll(".box"), {
		max: 25,
		speed: 400
	});
});

$(function() {

  $('.toggle_btn').on('click', function() {
    if ($('.toggle_btn, .navigation').hasClass('active')) {
      $('.toggle_btn, .navigation').removeClass('active');
    } else {
      $('.toggle_btn, .navigation').addClass('active');
    }
  });

  $('#navi li a').on('click', function() {
    $('.toggle_btn, .navigation').removeClass('active');
  });

  // scroll-animation
  $(window).scroll(function() {
    $('.fadein').each(function() {

      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();

      if (scroll > target - windowHeight + 200) {
        $(this).css('opacity','1');
        $(this).css('transform','translateY(0)');
      }
    });
  });
});