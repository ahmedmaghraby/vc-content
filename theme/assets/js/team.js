// list--pics
// list__item
(function () {
    var rows = 3;
    var interval = 3000;

    $(function () {
        var container = $('.list--pics');
        var context = {
            container: container,
            items: null,
            images: null,
            visibleUrls: [],
            invisibleUrls: [],
            timer: null
        };
        if (container.length) {
            context.source = container.html();

            var timer = null;
            window.onresize = function () {
                context.container.animate({ opacity: 0 }, { duration: 100, queue: false });
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {
                    init(context);
                }, 1000);
            };

            init(context);
        }
    });

    function init(context) {
        context.visibleUrls = [];
        context.container.children().remove();
        context.container.html(context.source);
        context.items = $('.list__item', context.container);
        context.images = $('.list__item img', context.container);
        context.items.each(function () {
            var $this = $(this);
            context.visibleUrls.push($this.children().attr('src'));
        });
        var containerWidth = context.container.width();
        var singleItem = $(context.items.get(0));
        var itemWidth = singleItem.width() + parseInt(singleItem.css('margin')) * 2;
        var countInRow = Math.floor(containerWidth / itemWidth);
        var displayCount = countInRow * rows;
        context.items.each(function (index) {
            if (index >= displayCount) {
                $(this).remove();
            }
        });
        context.invisibleUrls = context.visibleUrls.splice(displayCount, context.visibleUrls.length - displayCount);
        context.container.animate({ opacity: 1 }, 1000);
        if (context.timer) {
            clearInterval(context.timer);
        }
        context.timer = setInterval(function () {
            var newImg = Math.floor(context.invisibleUrls.length * Math.random());
            var oldImg = Math.floor(context.visibleUrls.length * Math.random());
            var newUrl = context.invisibleUrls[newImg];
            context.invisibleUrls[newImg] = context.visibleUrls[oldImg];
            context.visibleUrls[oldImg] = newUrl;
            var $img = $(context.images.get(oldImg));
            $img.animate({ opacity: 0 }, 1000, function () {
                $img.attr('src', newUrl);
                $img.animate({ opacity: 1 }, 1000);
            });
        }, interval);

    }
})();
