var FUNCTION = (function () {
  var commentSlider = function () {};
  $(".home__comment-slider").owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
  });

  var brandSlider = function () {};
  $(".home__brand-list").owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(document).ready(function () {
    var loginForm = $(".modal.fade.login");
    $(".register-txt").click(function () {
      $(loginForm).css("display", "none");
    });
  });

  $(".fa-angle-up").click(function () {
    $(".contact-popup").toggleClass("active");
  });
  $(".fa-angle-down").click(function () {
    $(".contact-popup").toggleClass("active");
  });

  var btn = $("#backTop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $(".btn-search").click(function () {
    $(".search-form-mb").addClass("show");
  });
  $(function () {
    $(".search_exit").on("click", function (e) {
      e.preventDefault();
      $(".search-form-mb").removeClass("show");
    });
  });

  $(function () {
    $(".search_reset").on("click", function (e) {
      e.preventDefault();
      $("#theForm").trigger("reset");
    });
  });

  $(".menu-btn").click(function () {
    $(".menu-mobile").addClass("open");
    $(".overlay").addClass("open");
  });
  $(".overlay").click(function () {
    $(".menu-mobile").removeClass("open");
    $(".overlay").removeClass("open");
  });
  $(".close-btn").click(function () {
    $(".menu-mobile").removeClass("open");
    $(".overlay").removeClass("open");
  });

  //menumb
  $(document).ready(function () {
    $(".nav-item").click(function (event) {
      event.preventDefault();
      $(this).next("ul.menu-sub").slideToggle("fast");
      $(this).find(".arrow").toggleClass("rotate");
      $(this).find(".arrow").toggleClass("rotate-reset");
    });
  });

  return {
    _: function () {
      commentSlider();
      brandSlider();
    },
  };
})();

//product--zoom
if($('.xzoom').length){
(function ($) {
  $(document).ready(function () {
    $(".xzoom, .xzoom-gallery").xzoom({
      zoomWidth: 400,
      title: true,
      tint: "#333",
      Xoffset: 15,
    });
    $(".xzoom2, .xzoom-gallery2").xzoom({
      position: "#xzoom2-id",
      tint: "#ffa200",
    });
    $(".xzoom3, .xzoom-gallery3").xzoom({
      position: "lens",
      lensShape: "circle",
      sourceClass: "xzoom-hidden",
    });
    $(".xzoom4, .xzoom-gallery4").xzoom({ tint: "#006699", Xoffset: 15 });
    $(".xzoom5, .xzoom-gallery5").xzoom({ tint: "#006699", Xoffset: 15 });

    //Integration with hammer.js
    var isTouchSupported = "ontouchstart" in window;

    if (isTouchSupported) {
      //If touch device
      $(".xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5").each(function () {
        var xzoom = $(this).data("xzoom");
        xzoom.eventunbind();
      });

      $(".xzoom, .xzoom2, .xzoom3").each(function () {
        var xzoom = $(this).data("xzoom");
        $(this)
          .hammer()
          .on("tap", function (event) {
            event.pageX = event.gesture.center.pageX;
            event.pageY = event.gesture.center.pageY;
            var s = 1,
              ls;

            xzoom.eventmove = function (element) {
              element.hammer().on("drag", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                xzoom.movezoom(event);
                event.gesture.preventDefault();
              });
            };

            xzoom.eventleave = function (element) {
              element.hammer().on("tap", function (event) {
                xzoom.closezoom();
              });
            };
            xzoom.openzoom(event);
          });
      });

      $(".xzoom4").each(function () {
        var xzoom = $(this).data("xzoom");
        $(this)
          .hammer()
          .on("tap", function (event) {
            event.pageX = event.gesture.center.pageX;
            event.pageY = event.gesture.center.pageY;
            var s = 1,
              ls;

            xzoom.eventmove = function (element) {
              element.hammer().on("drag", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                xzoom.movezoom(event);
                event.gesture.preventDefault();
              });
            };

            var counter = 0;
            xzoom.eventclick = function (element) {
              element.hammer().on("tap", function () {
                counter++;
                if (counter == 1) setTimeout(openfancy, 300);
                event.gesture.preventDefault();
              });
            };

            function openfancy() {
              if (counter == 2) {
                xzoom.closezoom();
                $.fancybox.open(xzoom.gallery().cgallery);
              } else {
                xzoom.closezoom();
              }
              counter = 0;
            }
            xzoom.openzoom(event);
          });
      });

      $(".xzoom5").each(function () {
        var xzoom = $(this).data("xzoom");
        $(this)
          .hammer()
          .on("tap", function (event) {
            event.pageX = event.gesture.center.pageX;
            event.pageY = event.gesture.center.pageY;
            var s = 1,
              ls;

            xzoom.eventmove = function (element) {
              element.hammer().on("drag", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                xzoom.movezoom(event);
                event.gesture.preventDefault();
              });
            };

            var counter = 0;
            xzoom.eventclick = function (element) {
              element.hammer().on("tap", function () {
                counter++;
                if (counter == 1) setTimeout(openmagnific, 300);
                event.gesture.preventDefault();
              });
            };

            function openmagnific() {
              if (counter == 2) {
                xzoom.closezoom();
                var gallery = xzoom.gallery().cgallery;
                var i,
                  images = new Array();
                for (i in gallery) {
                  images[i] = { src: gallery[i] };
                }
                $.magnificPopup.open({
                  items: images,
                  type: "image",
                  gallery: { enabled: true },
                });
              } else {
                xzoom.closezoom();
              }
              counter = 0;
            }
            xzoom.openzoom(event);
          });
      });
    } else {
      //If not touch device

      //Integration with fancybox plugin
      $("#xzoom-fancy").bind("click", function (event) {
        var xzoom = $(this).data("xzoom");
        xzoom.closezoom();
        $.fancybox.open(xzoom.gallery().cgallery, {
          padding: 0,
          helpers: { overlay: { locked: false } },
        });
        event.preventDefault();
      });

      //Integration with magnific popup plugin
      $("#xzoom-magnific").bind("click", function (event) {
        var xzoom = $(this).data("xzoom");
        xzoom.closezoom();
        var gallery = xzoom.gallery().cgallery;
        var i,
          images = new Array();
        for (i in gallery) {
          images[i] = { src: gallery[i] };
        }
        $.magnificPopup.open({
          items: images,
          type: "image",
          gallery: { enabled: true },
        });
        event.preventDefault();
      });
    }
  });
})(jQuery);
}
// range price
if($('.price-slider').length){
$(".price-slider").slider({
  range: true,
  min: 0,
  max: 15000000,
  values: [10, 2000000],
  slide: function (event, ui) {
    $(".price-value").text(ui.values[0] + +ui.values[1]);
  },
});
$(".price-value").text(
  +$(".price-slider").slider("values", 0) +
    " - " +
    $(".price-slider").slider("values", 1)
);
}
//menu mb
jQuery(document).ready(function(){
  jQuery('body').on('click', '.buy_now_button', function(e){
      e.preventDefault();
      var thisParent = jQuery(this).parents('form.cart');
      if(jQuery('.single_add_to_cart_button', thisParent).hasClass('disabled')) {
          jQuery('.single_add_to_cart_button', thisParent).trigger('click');
          return false;
      }
      thisParent.addClass('devvn-quickbuy');
      jQuery('.is_buy_now', thisParent).val('1');
      jQuery('.single_add_to_cart_button', thisParent).trigger('click');
  });
});