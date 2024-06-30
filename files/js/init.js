(function(e, o) {
    o.documentElement.className = "js-enabled";
    if (navigator.appVersion.match(/windows/i)) {
        o.body.classList.add("os-windows");
    }
    var s = function() {
        o.body.classList.toggle("scrolled", (void 0 !== e.scrollY ? e.scrollY : e.pageYOffset) > 0);
    };
    e.addEventListener("scroll", s);
    s();
    e.toggleMobileMenu = function(e) {
        o.body.classList.toggle("show-mobile-menu", e);
        o.querySelector(".app-header .mobile-menu-button-wrapper").classList.toggle("close", e);
    };
    e.addEventListener("resize", function() {
        e.toggleMobileMenu(!1);
    });
})(window, document);