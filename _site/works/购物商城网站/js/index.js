/// <reference path="../typings/jquery/jquery.d.ts"/>
var PriceSlider;
(function (PriceSlider) {
    var $slider1 = $('#slider1');
    var $slider2 = $('#slider2');
    var clickSlider1 = false;
    var clickSlider2 = false;
    function init() {
        $slider1.on('mousedown', function (event) {
            if (event.button === 0) {
                clickSlider1 = true;
            }
            return false;
        });
        $slider1.on('mousemove', function (event) {
            if (clickSlider1) {
                $slider1.css('');
            }
            return false;
        });
        $slider1.on('mouseup', function (event) {
            clickSlider1 = false;
        });
        $slider2.on('mousedown', function (event) {
            if (event.button === 0) {
                clickSlider2 = true;
            }
            return false;
        });
        $slider2.on('mousemove', function (event) {
            if (clickSlider2) {
            }
            return false;
        });
        $slider2.on('mouseup', function (event) {
            clickSlider2 = false;
        });
    }
})(PriceSlider || (PriceSlider = {}));
//# sourceMappingURL=index.js.map