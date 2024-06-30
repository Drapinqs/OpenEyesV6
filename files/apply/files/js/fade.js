$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    $('.link').click(function(event) {
        event.preventDefault();
        var newLocation = this.href;
        $('body').fadeOut(1000, function() {
            window.location = newLocation;
        });
    });
});