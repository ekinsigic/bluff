//Bluff.
$.fn.extend({
    bluff: function(options) {
        var defaults = {
            attr: 'href',
            blank: '*',
            trigger: 'click'
        };
        options = $.extend(defaults, options);
        var shouldChangeState = true;
        $(this).click(function(){
            var target = $(this).attr(options.attr);
            if (shouldChangeState) {
                changeState(target);
            }
        });
        function changeState(target) {
            history.pushState('', '', '#' + target);
        }
        window.onpopstate = function() {
            doStateChange();
        };
        $(function(){
            doStateChange();
        });
        function doStateChange() {
            var hash = window.location.hash;
            if (hash == '') {
                target = options.blank;
            } else {
                target = window.location.hash.replace('#','');
            }
            shouldChangeState = false;
            $(this + '[' + options.attr + '="' + target + '"]').trigger(options.trigger);
            shouldChangeState = true;
        }
    }
});
