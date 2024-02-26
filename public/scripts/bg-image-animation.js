jQuery(function ($) {
  var $bgAnimation = $('.bg-image-animation[data-toggle=bg-image-animation]').eq(0);
  var $links4Image = $('.game-menu').eq(0).find('a.item');
  var $bgImages = $bgAnimation.children('.item');

  var idTimeout = null;

  var fnGotoBackground = function (index) {
    if (idTimeout !== null) {
      clearTimeout(idTimeout);
    }

    if (index >= $bgImages.length) {
      index = 0;
    }

    $bgImages.eq(index).fadeIn(500, function () {
      $bgImages.filter('.active').removeClass('active').css('display', 'none');
      $links4Image.children('.active').removeClass('active');
      $links4Image.eq(index).children('.image').addClass('active');
      $(this).addClass('active');
    });

    idTimeout = setTimeout(fnNextBackgroundAnimation, 4500);
  };

  var fnNextBackgroundAnimation = function () {
    fnGotoBackground($bgImages.filter('.active').index() + 1);
  };

  $(window).on('blur', function () {
    if (idTimeout !== null) {
      clearTimeout(idTimeout);
    }
  });

  $(window).on('focus', function () {
    idTimeout = setTimeout(fnNextBackgroundAnimation, 4500);
  });

  $links4Image.on('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if ($(this).children('.active').length) {
      return;
    }
    $(this).children().addClass('active');
    $(this).parent().siblings().children().children().removeClass('active');
    fnGotoBackground($(this).parent().index());
  });

  idTimeout = setTimeout(fnNextBackgroundAnimation, 4500);
});
