jQuery(document).ready(function () {
    jQuery('.slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        /*autoplay: true,
        autoplaySpeed: 4000,*/
        dots: true,
        arrow: true

    });
});
(function ($) {
    $.fn.countTo = function (options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function () {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof (options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof (options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);
jQuery(function ($) {
    $('.timer-first').countTo({
        from: 0,
        to: 500,
        speed: 3000,
        refreshInterval: 50,
        onComplete: function (value) {
            console.debug(this);
        }
    });
});
jQuery(function ($) {
    $('.timer-second').countTo({
        from: 0,
        to: 300,
        speed: 3000,
        refreshInterval: 50,
        onComplete: function (value) {
            console.debug(this);
        }
    });
});
jQuery(function ($) {
    $('.timer-third').countTo({
        from: 0,
        to: 3000,
        speed: 3000,
        refreshInterval: 50,
        onComplete: function (value) {
            console.debug(this);
        }
    });
});
jQuery(document).ready(function () {

    $('.btn-details').click(function (e) {
        e.preventDefault();
        $('.details').show().addClass('fadeInUp')/*animate({
            height: '100%'
        }, 500);*/
    });
    $('.btn-galery').click(function (e) {
        e.preventDefault();
        $('.details').removeClass('fadeInUp').addClass('fadeOutDown');/*animate({
            height: '0'
        }, 500);*/
        $('main.main').addClass('fadeOutUp');
        $('.slick-prev, .slick-next ').css('top', '55%')
    });
});


jQuery(document).ready(function () {
    $('.work-item').click(function (e) {
        /*e.preventDefault();*/

        var htmlString = $( this ).html();
        var activeWork = document.createElement('div');
        activeWork.innerHTML = htmlString;
        $('.modal-content').append(activeWork);
        $(this).addClass('show-work');
        $('.modal-overlay').css('display', 'flex');
        $('body').css('overflow', 'hidden');

    });
    $('.modal-overlay').click(function () {
        $(this).css('display', 'none');
        $('body').css('overflow', 'auto');
        $('.modal-content div').remove();
    });
    $('.close').click(function () {

        $('.modal-overlay').css('display', 'none');
        $('body').css('overflow', 'auto');
        $('.modal-content div').remove();
    });
    $('.modal-content').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

});

