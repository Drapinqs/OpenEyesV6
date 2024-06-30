(function() {
    var angle = 0;
    var h1 = document.querySelector('h1');
    var text = h1.textContent.split('');
    var len = text.length;
    var phaseJump = 360 / len;
    var spans;
    h1.innerHTML = text.map(function(char) {
        return '<span>' + char + '</span>';
    }).join('');
    spans = h1.children;
    (function rainbowwheel() {
        for (var i = 0; i < len; i++) {
            spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 55%, 70%)';
        }
        angle++;
        requestAnimationFrame(rainbowwheel);
    })();
})();