// butter.js

(function(root){
    var Butter = function() {
        var self = this;

        this.defaults = {
            wrapperId: 'butter',
            wrapperDamper: 0.07,
            cancelOnTouch: false
        };

        this.validateOptions = function(ops) {
            for (var prop in ops) {
                if (self.defaults.hasOwnProperty(prop)) {
                    self.defaults[prop] = ops[prop];
                }
            }
        };

        this.wrapperDamper = this.defaults.wrapperDamper;
        this.wrapperId = this.defaults.wrapperId;
        this.cancelOnTouch = this.defaults.cancelOnTouch;
        this.wrapper = null;
        this.wrapperOffset = 0;
        this.animateId = null;
        this.resizing = false;
        this.active = false;
        this.wrapperHeight = 0;
    };

    Butter.prototype = {
        init: function(options) {
            if (options) {
                this.validateOptions(options);
            }

            this.active = true;
            this.wrapper = document.getElementById(this.wrapperId);
            this.wrapper.style.cssText = 'position: fixed; width: 100%;';
            this.wrapperHeight = this.wrapper.clientHeight;
            document.body.style.height = this.wrapperHeight + 'px';

            window.addEventListener('resize', this.resize.bind(this));
            if (this.cancelOnTouch) {
                window.addEventListener('touchstart', this.cancel.bind(this));
            }
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        wrapperUpdate: function() {
            var scrollY = window.scrollY || document.documentElement.scrollTop;
            this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
            this.wrapper.style.transform = 'translate3d(0,' + (-this.wrapperOffset.toFixed(2)) + 'px, 0)';
        },

        checkResize: function() {
            if (this.wrapperHeight !== this.wrapper.clientHeight) {
                this.resize();
            }
        },

        resize: function() {
            if (!this.resizing) {
                this.resizing = true;
                window.cancelAnimationFrame(this.animateId);
                window.setTimeout(() => {
                    this.wrapperHeight = this.wrapper.clientHeight;
                    document.body.style.height = this.wrapperHeight + 'px';
                    this.animateId = window.requestAnimationFrame(this.animate.bind(this));
                    this.resizing = false;
                }, 150);
            }
        },

        animate: function() {
            this.checkResize();
            this.wrapperUpdate();
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        cancel: function() {
            if (this.active) {
                window.cancelAnimationFrame(this.animateId);
                window.removeEventListener('resize', this.resize);
                window.removeEventListener('touchstart', this.cancel);
                this.wrapper.style.removeProperty('transform');
                document.body.style.removeProperty('height');

                this.active = false;
                this.wrapper = null;
                this.wrapperOffset = 0;
                this.resizing = false;
                this.animateId = null;
            }
        }
    };

    root.butter = new Butter();
})(this);