$('.fullname').focus(function() {
    $('.fullname').attr('placeholder', 'John Appleseed');
}).blur(function() {
    $('.fullname').attr('placeholder', 'Full Name *');
});
$('.email').focus(function() {
    $('.email').attr('placeholder', 'username@example.com');
}).blur(function() {
    $('.email').attr('placeholder', 'Email Address *');
});
$('.address').focus(function() {
    $('.address').attr('placeholder', '123 S Cherry LN, 85326');
}).blur(function() {
    $('.address').attr('placeholder', 'Address *');
});