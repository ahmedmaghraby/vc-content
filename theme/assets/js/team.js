// list--pics
// list__item
$(function () {
    var rows = 3;
    var interval = 10000;
    var container = $('.list--pics');
    if (container.length) {
        var items = $('.list__item', container);
        var images = $('.list__item img', container);
        //images.hide();
        //images.each(function () {
        //    var $img = $(this);
        //    $img.removeClass('list__pic');
        //    this.onload = function () {
        //        $img.show();
        //        $img.addClass('list__pic');
        //        console.log(1);
        //    };
        //});
        var countInRow = 0;
        var top = 0;
        var visibleUrls = [];
        items.each(function () {
            var $this = $(this);
            if (top === 0) {
                top = $this.offset().top;
            }
            if ($this.offset().top === top) {
                countInRow++;
            }
            visibleUrls.push($this.children().attr('src'));
        });
        var displayCount = countInRow * rows;
        items.each(function (index) {
            if (index >= displayCount) {
                $(this).remove();
            }
        });
        var invisibleUrls = visibleUrls.splice(displayCount, visibleUrls.length - displayCount);
        container.animate({ opacity: 1 }, 1000);
        setInterval(function () {
            var newImg = Math.floor(invisibleUrls.length * Math.random());
            var oldImg = Math.floor(visibleUrls.length * Math.random());
            var newUrl = invisibleUrls[newImg];
            invisibleUrls[newImg] = visibleUrls[oldImg];
            visibleUrls[oldImg] = newUrl;
            var $img = $(images.get(oldImg));
            $img.animate({ opacity: 0 }, 1000, function () {
                $img.attr('src', newUrl);
                $img.animate({ opacity: 1 }, 1000);
            });
        }, interval);
    }
});
