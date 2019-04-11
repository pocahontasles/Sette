jQuery(document).ready(function () {
    jQuery('.slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
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
        $('.details').removeClass('fadeOut');
        $('.details').show().addClass('fadeInUp');
    });
    $('.btn-galery').click(function (e) {
        e.preventDefault();
        $('.details').css('display', 'none')/*.css('display', 'none')*/;/*animate({
            height: '0'
        }, 500);*/
        $('main.main').addClass('fadeOutUp');
        var windowWidth = $(window).width();
        /*$('section.slide-section').css('display', 'block');*/
        if (windowWidth < 1140) {
            $('.slick-prev, .slick-next ').css('bottom', '0');
        } else $('.slick-prev, .slick-next ').css('top', '56%');
    });
    $('.close-details').click(function (e) {
        /* e.preventDefault();*/
        $('.details').hide().addClass('fadeOut');
    });
});


jQuery(document).ready(function () {
    $('.work-item').click(function (e) {
        e.preventDefault();
        var top = $(document).scrollTop();
        $('.modal-overlay').css('top', top);
        $('.modal-overlay').css('display', 'block');


        var htmlString = $(this).html();
        var activeWork = document.createElement('div');
        activeWork.innerHTML = htmlString;
        $('.modal-content').append(activeWork);

        $(this).addClass('show-work');
        $('.modal-overlay').css('display', 'flex');
        $('body').css('overflow', 'hidden');

        var images = [
            'images/work-1.png',
            'images/work-2.png',
            'images/work-3.png',
            'images/work-4.png',
            'images/work-5.png'
        ];

        function loadImages(imgArr, targetId) {
            for (var i = 0; i < imgArr.length; i++) {
                console.log(imgArr[i]);
                var img = new Image();
                img.src = imgArr[i];
                document.getElementById('output').appendChild(img);
            }

            jQuery('.modal-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrow: true

            });
        }

        loadImages(images);


    });
    $('.modal-overlay').click(function () {
        $('.modal-overlay').css('display', 'none');
        $(this).css('display', 'none');
        $('body').css('overflow', 'auto');
        $('.modal-content div:last-of-type, .modal-content div:first-of-type > *').remove();
        $('#output').removeClass('slick-initialized');
        $('#output').removeClass('slick-slider');
        $('#output').removeClass('slick-dotted');

    });
    $('.close').click(function () {

        $('.modal-overlay').css('display', 'none');
        $('body').css('overflow', 'auto');
        $('.modal-content div:last-of-type, .modal-content div:first-of-type > *').remove();
        $('#output').removeClass('slick-initialized');
        $('#output').removeClass('slick-slider');
        $('#output').removeClass('slick-dotted');

    });
    $('.modal-content').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

});

jQuery(document).ready(function () {
    var ctx = document.getElementById('first_canvas').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = "#a4acc3";
        ctx.textAlign = 'center';
        /*ctx.fillText(al+'%', cw*.5, ch*.5+2, cw);*/
        ctx.beginPath();
        var windowWidth = $(window).width();
        if (windowWidth  < 1400) {
            ctx.arc(47, 55, 35, start, diff / 10 + start, false);
        } else ctx.arc(50, 55, 40, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= 100) {
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }

    var sim = setInterval(progressSim, 30);
});
jQuery(document).ready(function () {
    var ctx = document.getElementById('second_canvas').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = "#a4acc3";
        ctx.textAlign = 'center';
        /*ctx.fillText(al+'%', cw*.5, ch*.5+2, cw);*/
        ctx.beginPath();
        var windowWidth = $(window).width();
        if (windowWidth  < 1400) {
            ctx.arc(47, 55, 35, start, diff / 10 + start, false);
        } else ctx.arc(50, 55, 40, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= 100) {
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }

    var sim = setInterval(progressSim, 30);
});

jQuery(document).ready(function () {
    var ctx = document.getElementById('third_canvas').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;

    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 5;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = "#a4acc3";
        ctx.textAlign = 'center';
        /*ctx.fillText(al+'%', cw*.5, ch*.5+2, cw);*/
        ctx.beginPath();
        var windowWidth = $(window).width();
        if (windowWidth  < 1400) {
            ctx.arc(47, 55, 35, start, diff / 10 + start, false);
        } else ctx.arc(50, 55, 40, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= 100) {
            clearTimeout(sim);
            // Add scripting here that will run when progress completes
        }
        al++;
    }

    var sim = setInterval(progressSim, 30);
});
