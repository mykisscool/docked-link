/*!
 * jQuery Docked Link Plugin
 * https://github.com/mykisscool/docked-link
 *
 * Copyright 2017 Mike Petruniak
 * Released under the MIT license
 */
;(function ($) {

  $.fn.dockedLink = function (options) {

    var defaults = {
      pixelsFromTop: 1000, /* Magic number; somewhere below the fold */
      position: 'right'
    },
    options = $.extend(defaults, options);

    var $elem = this,
        totalPageHeight = $(document).height(),
        viewPortHalfHeight = $(window).height() / 2,
        quickQuoteButtonHalfHeight = Math.round($elem.height() / 2);

    // Right or left
    $elem.css(options.position, 0);

    function positionQuickQuote () {

      // Short-length pages
      if (options.pixelsFromTop > totalPageHeight) {
        $elem.css({
          display: $elem.is(":visible") ? 'block' : 'none',
          position: 'fixed',
          top: viewPortHalfHeight - quickQuoteButtonHalfHeight
        });
      }
      // Long-length pages
      else {
        $elem.css({
          display: $elem.is(":visible") ? 'block' : 'none',
          top: options.pixelsFromTop
        });

        if ($(window).scrollTop() >= (options.pixelsFromTop - (viewPortHalfHeight - quickQuoteButtonHalfHeight))) {
          $elem.css({
            position: 'fixed',
            top: viewPortHalfHeight - quickQuoteButtonHalfHeight
          });
        }
        else {
          $elem.css({
            position: 'absolute',
            top: options.pixelsFromTop
          });
        }
      }
    }

    $(window).scroll(function () {
      positionQuickQuote();
    });

    positionQuickQuote();
    return this;
  };
})(jQuery);
