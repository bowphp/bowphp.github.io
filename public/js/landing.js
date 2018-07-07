(function() {
    var thumb = document.querySelector('.thumb');
    if (thumb) {
        thumb.addEventListener('click', function() {
            var nav = document.querySelector('.nav');
            if (nav.style.display == 'block') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'block';
            }
            return false;
        }, false);
    }
})();