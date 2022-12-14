!(function (t) {
    function e(o) {
        if (i[o]) return i[o].exports;
        var n = (i[o] = { i: o, l: !1, exports: {} });
        return t[o].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    var i = {};
    (e.m = t),
        (e.c = i),
        (e.i = function (t) {
            return t;
        }),
        (e.d = function (t, i, o) {
            e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: o });
        }),
        (e.n = function (t) {
            var i =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return e.d(i, "a", i), i;
        }),
        (e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.p = ""),
        e((e.s = 7));
})([
    function (t, e) {},
    function (t, e) {},
    function (t, e) {
        /*!
         * Bootstrap v3.2.0 (http://getbootstrap.com)
         * Copyright 2011-2014 Twitter, Inc.
         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
         */
        if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
        +(function (t) {
            "use strict";
            function e() {
                var t = document.createElement("bootstrap"),
                    e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
                return !1;
            }
            (t.fn.emulateTransitionEnd = function (e) {
                var i = !1,
                    o = this;
                t(this).one("bsTransitionEnd", function () {
                    i = !0;
                });
                var n = function () {
                    i || t(o).trigger(t.support.transition.end);
                };
                return setTimeout(n, e), this;
            }),
                t(function () {
                    (t.support.transition = e()),
                        t.support.transition &&
                            (t.event.special.bsTransitionEnd = {
                                bindType: t.support.transition.end,
                                delegateType: t.support.transition.end,
                                handle: function (e) {
                                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0;
                                },
                            });
                });
        })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var i = t(this),
                            n = i.data("bs.alert");
                        n || i.data("bs.alert", (n = new o(this))), "string" == typeof e && n[e].call(i);
                    });
                }
                var i = '[data-dismiss="alert"]',
                    o = function (e) {
                        t(e).on("click", i, this.close);
                    };
                (o.VERSION = "3.2.0"),
                    (o.prototype.close = function (e) {
                        function i() {
                            s.detach().trigger("closed.bs.alert").remove();
                        }
                        var o = t(this),
                            n = o.attr("data-target");
                        n || ((n = o.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, "")));
                        var s = t(n);
                        e && e.preventDefault(),
                            s.length || (s = o.hasClass("alert") ? o : o.parent()),
                            s.trigger((e = t.Event("close.bs.alert"))),
                            e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(150) : i());
                    });
                var n = t.fn.alert;
                (t.fn.alert = e),
                    (t.fn.alert.Constructor = o),
                    (t.fn.alert.noConflict = function () {
                        return (t.fn.alert = n), this;
                    }),
                    t(document).on("click.bs.alert.data-api", i, o.prototype.close);
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.button"),
                            s = "object" == typeof e && e;
                        n || o.data("bs.button", (n = new i(this, s))), "toggle" == e ? n.toggle() : e && n.setState(e);
                    });
                }
                var i = function (e, o) {
                    (this.$element = t(e)), (this.options = t.extend({}, i.DEFAULTS, o)), (this.isLoading = !1);
                };
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = { loadingText: "loading..." }),
                    (i.prototype.setState = function (e) {
                        var i = "disabled",
                            o = this.$element,
                            n = o.is("input") ? "val" : "html",
                            s = o.data();
                        (e += "Text"),
                            null == s.resetText && o.data("resetText", o[n]()),
                            o[n](null == s[e] ? this.options[e] : s[e]),
                            setTimeout(
                                t.proxy(function () {
                                    "loadingText" == e ? ((this.isLoading = !0), o.addClass(i).attr(i, i)) : this.isLoading && ((this.isLoading = !1), o.removeClass(i).removeAttr(i));
                                }, this),
                                0
                            );
                    }),
                    (i.prototype.toggle = function () {
                        var t = !0,
                            e = this.$element.closest('[data-toggle="buttons"]');
                        if (e.length) {
                            var i = this.$element.find("input");
                            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? (t = !1) : e.find(".active").removeClass("active")),
                                t && i.prop("checked", !this.$element.hasClass("active")).trigger("change");
                        }
                        t && this.$element.toggleClass("active");
                    });
                var o = t.fn.button;
                (t.fn.button = e),
                    (t.fn.button.Constructor = i),
                    (t.fn.button.noConflict = function () {
                        return (t.fn.button = o), this;
                    }),
                    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
                        var o = t(i.target);
                        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), i.preventDefault();
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.carousel"),
                            s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
                            r = "string" == typeof e ? e : s.slide;
                        n || o.data("bs.carousel", (n = new i(this, s))), "number" == typeof e ? n.to(e) : r ? n[r]() : s.interval && n.pause().cycle();
                    });
                }
                var i = function (e, i) {
                    (this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this))),
                        (this.$indicators = this.$element.find(".carousel-indicators")),
                        (this.options = i),
                        (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
                        "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
                };
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
                    (i.prototype.keydown = function (t) {
                        switch (t.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return;
                        }
                        t.preventDefault();
                    }),
                    (i.prototype.cycle = function (e) {
                        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
                    }),
                    (i.prototype.getItemIndex = function (t) {
                        return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
                    }),
                    (i.prototype.to = function (e) {
                        var i = this,
                            o = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                        return e > this.$items.length - 1 || 0 > e
                            ? void 0
                            : this.sliding
                            ? this.$element.one("slid.bs.carousel", function () {
                                  i.to(e);
                              })
                            : o == e
                            ? this.pause().cycle()
                            : this.slide(e > o ? "next" : "prev", t(this.$items[e]));
                    }),
                    (i.prototype.pause = function (e) {
                        return (
                            e || (this.paused = !0),
                            this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
                            (this.interval = clearInterval(this.interval)),
                            this
                        );
                    }),
                    (i.prototype.next = function () {
                        return this.sliding ? void 0 : this.slide("next");
                    }),
                    (i.prototype.prev = function () {
                        return this.sliding ? void 0 : this.slide("prev");
                    }),
                    (i.prototype.slide = function (e, i) {
                        var o = this.$element.find(".item.active"),
                            n = i || o[e](),
                            s = this.interval,
                            r = "next" == e ? "left" : "right",
                            a = "next" == e ? "first" : "last",
                            l = this;
                        if (!n.length) {
                            if (!this.options.wrap) return;
                            n = this.$element.find(".item")[a]();
                        }
                        if (n.hasClass("active")) return (this.sliding = !1);
                        var h = n[0],
                            c = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
                        if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
                            if (((this.sliding = !0), s && this.pause(), this.$indicators.length)) {
                                this.$indicators.find(".active").removeClass("active");
                                var d = t(this.$indicators.children()[this.getItemIndex(n)]);
                                d && d.addClass("active");
                            }
                            var p = t.Event("slid.bs.carousel", { relatedTarget: h, direction: r });
                            return (
                                t.support.transition && this.$element.hasClass("slide")
                                    ? (n.addClass(e),
                                      n[0].offsetWidth,
                                      o.addClass(r),
                                      n.addClass(r),
                                      o
                                          .one("bsTransitionEnd", function () {
                                              n.removeClass([e, r].join(" ")).addClass("active"),
                                                  o.removeClass(["active", r].join(" ")),
                                                  (l.sliding = !1),
                                                  setTimeout(function () {
                                                      l.$element.trigger(p);
                                                  }, 0);
                                          })
                                          .emulateTransitionEnd(1e3 * o.css("transition-duration").slice(0, -1)))
                                    : (o.removeClass("active"), n.addClass("active"), (this.sliding = !1), this.$element.trigger(p)),
                                s && this.cycle(),
                                this
                            );
                        }
                    });
                var o = t.fn.carousel;
                (t.fn.carousel = e),
                    (t.fn.carousel.Constructor = i),
                    (t.fn.carousel.noConflict = function () {
                        return (t.fn.carousel = o), this;
                    }),
                    t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (i) {
                        var o,
                            n = t(this),
                            s = t(n.attr("data-target") || ((o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")));
                        if (s.hasClass("carousel")) {
                            var r = t.extend({}, s.data(), n.data()),
                                a = n.attr("data-slide-to");
                            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault();
                        }
                    }),
                    t(window).on("load", function () {
                        t('[data-ride="carousel"]').each(function () {
                            var i = t(this);
                            e.call(i, i.data());
                        });
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.collapse"),
                            s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
                        !n && s.toggle && "show" == e && (e = !e), n || o.data("bs.collapse", (n = new i(this, s))), "string" == typeof e && n[e]();
                    });
                }
                var i = function (e, o) {
                    (this.$element = t(e)), (this.options = t.extend({}, i.DEFAULTS, o)), (this.transitioning = null), this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle();
                };
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = { toggle: !0 }),
                    (i.prototype.dimension = function () {
                        return this.$element.hasClass("width") ? "width" : "height";
                    }),
                    (i.prototype.show = function () {
                        if (!this.transitioning && !this.$element.hasClass("in")) {
                            var i = t.Event("show.bs.collapse");
                            if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
                                var o = this.$parent && this.$parent.find("> .panel > .in");
                                if (o && o.length) {
                                    var n = o.data("bs.collapse");
                                    if (n && n.transitioning) return;
                                    e.call(o, "hide"), n || o.data("bs.collapse", null);
                                }
                                var s = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[s](0), (this.transitioning = 1);
                                var r = function () {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[s](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                                };
                                if (!t.support.transition) return r.call(this);
                                var a = t.camelCase(["scroll", s].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(350)[s](this.$element[0][a]);
                            }
                        }
                    }),
                    (i.prototype.hide = function () {
                        if (!this.transitioning && this.$element.hasClass("in")) {
                            var e = t.Event("hide.bs.collapse");
                            if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                                var i = this.dimension();
                                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), (this.transitioning = 1);
                                var o = function () {
                                    (this.transitioning = 0), this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                                };
                                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(350) : o.call(this);
                            }
                        }
                    }),
                    (i.prototype.toggle = function () {
                        this[this.$element.hasClass("in") ? "hide" : "show"]();
                    });
                var o = t.fn.collapse;
                (t.fn.collapse = e),
                    (t.fn.collapse.Constructor = i),
                    (t.fn.collapse.noConflict = function () {
                        return (t.fn.collapse = o), this;
                    }),
                    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
                        var o,
                            n = t(this),
                            s = n.attr("data-target") || i.preventDefault() || ((o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
                            r = t(s),
                            a = r.data("bs.collapse"),
                            l = a ? "toggle" : n.data(),
                            h = n.attr("data-parent"),
                            c = h && t(h);
                        (a && a.transitioning) ||
                            (c &&
                                c
                                    .find('[data-toggle="collapse"][data-parent="' + h + '"]')
                                    .not(n)
                                    .addClass("collapsed"),
                            n[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
                            e.call(r, l);
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    (e && 3 === e.which) ||
                        (t(n).remove(),
                        t(s).each(function () {
                            var o = i(t(this)),
                                n = { relatedTarget: this };
                            o.hasClass("open") && (o.trigger((e = t.Event("hide.bs.dropdown", n))), e.isDefaultPrevented() || o.removeClass("open").trigger("hidden.bs.dropdown", n));
                        }));
                }
                function i(e) {
                    var i = e.attr("data-target");
                    i || ((i = e.attr("href")), (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
                    var o = i && t(i);
                    return o && o.length ? o : e.parent();
                }
                function o(e) {
                    return this.each(function () {
                        var i = t(this),
                            o = i.data("bs.dropdown");
                        o || i.data("bs.dropdown", (o = new r(this))), "string" == typeof e && o[e].call(i);
                    });
                }
                var n = ".dropdown-backdrop",
                    s = '[data-toggle="dropdown"]',
                    r = function (e) {
                        t(e).on("click.bs.dropdown", this.toggle);
                    };
                (r.VERSION = "3.2.0"),
                    (r.prototype.toggle = function (o) {
                        var n = t(this);
                        if (!n.is(".disabled, :disabled")) {
                            var s = i(n),
                                r = s.hasClass("open");
                            if ((e(), !r)) {
                                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                                var a = { relatedTarget: this };
                                if ((s.trigger((o = t.Event("show.bs.dropdown", a))), o.isDefaultPrevented())) return;
                                n.trigger("focus"), s.toggleClass("open").trigger("shown.bs.dropdown", a);
                            }
                            return !1;
                        }
                    }),
                    (r.prototype.keydown = function (e) {
                        if (/(38|40|27)/.test(e.keyCode)) {
                            var o = t(this);
                            if ((e.preventDefault(), e.stopPropagation(), !o.is(".disabled, :disabled"))) {
                                var n = i(o),
                                    r = n.hasClass("open");
                                if (!r || (r && 27 == e.keyCode)) return 27 == e.which && n.find(s).trigger("focus"), o.trigger("click");
                                var a = " li:not(.divider):visible a",
                                    l = n.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                                if (l.length) {
                                    var h = l.index(l.filter(":focus"));
                                    38 == e.keyCode && h > 0 && h--, 40 == e.keyCode && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus");
                                }
                            }
                        }
                    });
                var a = t.fn.dropdown;
                (t.fn.dropdown = o),
                    (t.fn.dropdown.Constructor = r),
                    (t.fn.dropdown.noConflict = function () {
                        return (t.fn.dropdown = a), this;
                    }),
                    t(document)
                        .on("click.bs.dropdown.data-api", e)
                        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                            t.stopPropagation();
                        })
                        .on("click.bs.dropdown.data-api", s, r.prototype.toggle)
                        .on("keydown.bs.dropdown.data-api", s + ', [role="menu"], [role="listbox"]', r.prototype.keydown);
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e, o) {
                    return this.each(function () {
                        var n = t(this),
                            s = n.data("bs.modal"),
                            r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                        s || n.data("bs.modal", (s = new i(this, r))), "string" == typeof e ? s[e](o) : r.show && s.show(o);
                    });
                }
                var i = function (e, i) {
                    (this.options = i),
                        (this.$body = t(document.body)),
                        (this.$element = t(e)),
                        (this.$backdrop = this.isShown = null),
                        (this.scrollbarWidth = 0),
                        this.options.remote &&
                            this.$element.find(".modal-content").load(
                                this.options.remote,
                                t.proxy(function () {
                                    this.$element.trigger("loaded.bs.modal");
                                }, this)
                            );
                };
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
                    (i.prototype.toggle = function (t) {
                        return this.isShown ? this.hide() : this.show(t);
                    }),
                    (i.prototype.show = function (e) {
                        var i = this,
                            o = t.Event("show.bs.modal", { relatedTarget: e });
                        this.$element.trigger(o),
                            this.isShown ||
                                o.isDefaultPrevented() ||
                                ((this.isShown = !0),
                                this.checkScrollbar(),
                                this.$body.addClass("modal-open"),
                                this.setScrollbar(),
                                this.escape(),
                                this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                                this.backdrop(function () {
                                    var o = t.support.transition && i.$element.hasClass("fade");
                                    i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), o && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus();
                                    var n = t.Event("shown.bs.modal", { relatedTarget: e });
                                    o
                                        ? i.$element
                                              .find(".modal-dialog")
                                              .one("bsTransitionEnd", function () {
                                                  i.$element.trigger("focus").trigger(n);
                                              })
                                              .emulateTransitionEnd(300)
                                        : i.$element.trigger("focus").trigger(n);
                                }));
                    }),
                    (i.prototype.hide = function (e) {
                        e && e.preventDefault(),
                            (e = t.Event("hide.bs.modal")),
                            this.$element.trigger(e),
                            this.isShown &&
                                !e.isDefaultPrevented() &&
                                ((this.isShown = !1),
                                this.$body.removeClass("modal-open"),
                                this.resetScrollbar(),
                                this.escape(),
                                t(document).off("focusin.bs.modal"),
                                this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
                                t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
                    }),
                    (i.prototype.enforceFocus = function () {
                        t(document)
                            .off("focusin.bs.modal")
                            .on(
                                "focusin.bs.modal",
                                t.proxy(function (t) {
                                    this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                                }, this)
                            );
                    }),
                    (i.prototype.escape = function () {
                        this.isShown && this.options.keyboard
                            ? this.$element.on(
                                  "keyup.dismiss.bs.modal",
                                  t.proxy(function (t) {
                                      27 == t.which && this.hide();
                                  }, this)
                              )
                            : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
                    }),
                    (i.prototype.hideModal = function () {
                        var t = this;
                        this.$element.hide(),
                            this.backdrop(function () {
                                t.$element.trigger("hidden.bs.modal");
                            });
                    }),
                    (i.prototype.removeBackdrop = function () {
                        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
                    }),
                    (i.prototype.backdrop = function (e) {
                        var i = this,
                            o = this.$element.hasClass("fade") ? "fade" : "";
                        if (this.isShown && this.options.backdrop) {
                            var n = t.support.transition && o;
                            if (
                                ((this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body)),
                                this.$element.on(
                                    "click.dismiss.bs.modal",
                                    t.proxy(function (t) {
                                        t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
                                    }, this)
                                ),
                                n && this.$backdrop[0].offsetWidth,
                                this.$backdrop.addClass("in"),
                                !e)
                            )
                                return;
                            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e();
                        } else if (!this.isShown && this.$backdrop) {
                            this.$backdrop.removeClass("in");
                            var s = function () {
                                i.removeBackdrop(), e && e();
                            };
                            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(150) : s();
                        } else e && e();
                    }),
                    (i.prototype.checkScrollbar = function () {
                        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
                    }),
                    (i.prototype.setScrollbar = function () {
                        var t = parseInt(this.$body.css("padding-right") || 0, 10);
                        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth);
                    }),
                    (i.prototype.resetScrollbar = function () {
                        this.$body.css("padding-right", "");
                    }),
                    (i.prototype.measureScrollbar = function () {
                        var t = document.createElement("div");
                        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                        var e = t.offsetWidth - t.clientWidth;
                        return this.$body[0].removeChild(t), e;
                    });
                var o = t.fn.modal;
                (t.fn.modal = e),
                    (t.fn.modal.Constructor = i),
                    (t.fn.modal.noConflict = function () {
                        return (t.fn.modal = o), this;
                    }),
                    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
                        var o = t(this),
                            n = o.attr("href"),
                            s = t(o.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))),
                            r = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, s.data(), o.data());
                        o.is("a") && i.preventDefault(),
                            s.one("show.bs.modal", function (t) {
                                t.isDefaultPrevented() ||
                                    s.one("hidden.bs.modal", function () {
                                        o.is(":visible") && o.trigger("focus");
                                    });
                            }),
                            e.call(s, r, this);
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.tooltip"),
                            s = "object" == typeof e && e;
                        (n || "destroy" != e) && (n || o.data("bs.tooltip", (n = new i(this, s))), "string" == typeof e && n[e]());
                    });
                }
                var i = function (t, e) {
                    (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null), this.init("tooltip", t, e);
                };
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = {
                        animation: !0,
                        placement: "top",
                        selector: !1,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        container: !1,
                        viewport: { selector: "body", padding: 0 },
                    }),
                    (i.prototype.init = function (e, i, o) {
                        (this.enabled = !0), (this.type = e), (this.$element = t(i)), (this.options = this.getOptions(o)), (this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport));
                        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
                            var r = n[s];
                            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                            else if ("manual" != r) {
                                var a = "hover" == r ? "mouseenter" : "focusin",
                                    l = "hover" == r ? "mouseleave" : "focusout";
                                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                            }
                        }
                        this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
                    }),
                    (i.prototype.getDefaults = function () {
                        return i.DEFAULTS;
                    }),
                    (i.prototype.getOptions = function (e) {
                        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
                    }),
                    (i.prototype.getDelegateOptions = function () {
                        var e = {},
                            i = this.getDefaults();
                        return (
                            this._options &&
                                t.each(this._options, function (t, o) {
                                    i[t] != o && (e[t] = o);
                                }),
                            e
                        );
                    }),
                    (i.prototype.enter = function (e) {
                        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        return (
                            i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                            clearTimeout(i.timeout),
                            (i.hoverState = "in"),
                            i.options.delay && i.options.delay.show
                                ? void (i.timeout = setTimeout(function () {
                                      "in" == i.hoverState && i.show();
                                  }, i.options.delay.show))
                                : i.show()
                        );
                    }),
                    (i.prototype.leave = function (e) {
                        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                        return (
                            i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                            clearTimeout(i.timeout),
                            (i.hoverState = "out"),
                            i.options.delay && i.options.delay.hide
                                ? void (i.timeout = setTimeout(function () {
                                      "out" == i.hoverState && i.hide();
                                  }, i.options.delay.hide))
                                : i.hide()
                        );
                    }),
                    (i.prototype.show = function () {
                        var e = t.Event("show.bs." + this.type);
                        if (this.hasContent() && this.enabled) {
                            this.$element.trigger(e);
                            var i = t.contains(document.documentElement, this.$element[0]);
                            if (e.isDefaultPrevented() || !i) return;
                            var o = this,
                                n = this.tip(),
                                s = this.getUID(this.type);
                            this.setContent(), n.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && n.addClass("fade");
                            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                                a = /\s?auto?\s?/i,
                                l = a.test(r);
                            l && (r = r.replace(a, "") || "top"),
                                n
                                    .detach()
                                    .css({ top: 0, left: 0, display: "block" })
                                    .addClass(r)
                                    .data("bs." + this.type, this),
                                this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
                            var h = this.getPosition(),
                                c = n[0].offsetWidth,
                                d = n[0].offsetHeight;
                            if (l) {
                                var p = r,
                                    u = this.$element.parent(),
                                    f = this.getPosition(u);
                                (r =
                                    "bottom" == r && h.top + h.height + d - f.scroll > f.height
                                        ? "top"
                                        : "top" == r && h.top - f.scroll - d < 0
                                        ? "bottom"
                                        : "right" == r && h.right + c > f.width
                                        ? "left"
                                        : "left" == r && h.left - c < f.left
                                        ? "right"
                                        : r),
                                    n.removeClass(p).addClass(r);
                            }
                            var m = this.getCalculatedOffset(r, h, c, d);
                            this.applyPlacement(m, r);
                            var g = function () {
                                o.$element.trigger("shown.bs." + o.type), (o.hoverState = null);
                            };
                            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g();
                        }
                    }),
                    (i.prototype.applyPlacement = function (e, i) {
                        var o = this.tip(),
                            n = o[0].offsetWidth,
                            s = o[0].offsetHeight,
                            r = parseInt(o.css("margin-top"), 10),
                            a = parseInt(o.css("margin-left"), 10);
                        isNaN(r) && (r = 0),
                            isNaN(a) && (a = 0),
                            (e.top = e.top + r),
                            (e.left = e.left + a),
                            t.offset.setOffset(
                                o[0],
                                t.extend(
                                    {
                                        using: function (t) {
                                            o.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                        },
                                    },
                                    e
                                ),
                                0
                            ),
                            o.addClass("in");
                        var l = o[0].offsetWidth,
                            h = o[0].offsetHeight;
                        "top" == i && h != s && (e.top = e.top + s - h);
                        var c = this.getViewportAdjustedDelta(i, e, l, h);
                        c.left ? (e.left += c.left) : (e.top += c.top);
                        var d = c.left ? 2 * c.left - n + l : 2 * c.top - s + h,
                            p = c.left ? "left" : "top",
                            u = c.left ? "offsetWidth" : "offsetHeight";
                        o.offset(e), this.replaceArrow(d, o[0][u], p);
                    }),
                    (i.prototype.replaceArrow = function (t, e, i) {
                        this.arrow().css(i, t ? 50 * (1 - t / e) + "%" : "");
                    }),
                    (i.prototype.setContent = function () {
                        var t = this.tip(),
                            e = this.getTitle();
                        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
                    }),
                    (i.prototype.hide = function () {
                        function e() {
                            "in" != i.hoverState && o.detach(), i.$element.trigger("hidden.bs." + i.type);
                        }
                        var i = this,
                            o = this.tip(),
                            n = t.Event("hide.bs." + this.type);
                        return (
                            this.$element.removeAttr("aria-describedby"),
                            this.$element.trigger(n),
                            n.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), (this.hoverState = null), this)
                        );
                    }),
                    (i.prototype.fixTitle = function () {
                        var t = this.$element;
                        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
                    }),
                    (i.prototype.hasContent = function () {
                        return this.getTitle();
                    }),
                    (i.prototype.getPosition = function (e) {
                        e = e || this.$element;
                        var i = e[0],
                            o = "BODY" == i.tagName;
                        return t.extend(
                            {},
                            "function" == typeof i.getBoundingClientRect ? i.getBoundingClientRect() : null,
                            { scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(), width: o ? t(window).width() : e.outerWidth(), height: o ? t(window).height() : e.outerHeight() },
                            o ? { top: 0, left: 0 } : e.offset()
                        );
                    }),
                    (i.prototype.getCalculatedOffset = function (t, e, i, o) {
                        return "bottom" == t
                            ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
                            : "top" == t
                            ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
                            : "left" == t
                            ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
                            : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
                    }),
                    (i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
                        var n = { top: 0, left: 0 };
                        if (!this.$viewport) return n;
                        var s = (this.options.viewport && this.options.viewport.padding) || 0,
                            r = this.getPosition(this.$viewport);
                        if (/right|left/.test(t)) {
                            var a = e.top - s - r.scroll,
                                l = e.top + s - r.scroll + o;
                            a < r.top ? (n.top = r.top - a) : l > r.top + r.height && (n.top = r.top + r.height - l);
                        } else {
                            var h = e.left - s,
                                c = e.left + s + i;
                            h < r.left ? (n.left = r.left - h) : c > r.width && (n.left = r.left + r.width - c);
                        }
                        return n;
                    }),
                    (i.prototype.getTitle = function () {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
                    }),
                    (i.prototype.getUID = function (t) {
                        do {
                            t += ~~(1e6 * Math.random());
                        } while (document.getElementById(t));
                        return t;
                    }),
                    (i.prototype.tip = function () {
                        return (this.$tip = this.$tip || t(this.options.template));
                    }),
                    (i.prototype.arrow = function () {
                        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
                    }),
                    (i.prototype.validate = function () {
                        this.$element[0].parentNode || (this.hide(), (this.$element = null), (this.options = null));
                    }),
                    (i.prototype.enable = function () {
                        this.enabled = !0;
                    }),
                    (i.prototype.disable = function () {
                        this.enabled = !1;
                    }),
                    (i.prototype.toggleEnabled = function () {
                        this.enabled = !this.enabled;
                    }),
                    (i.prototype.toggle = function (e) {
                        var i = this;
                        e && ((i = t(e.currentTarget).data("bs." + this.type)) || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i))),
                            i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
                    }),
                    (i.prototype.destroy = function () {
                        clearTimeout(this.timeout),
                            this.hide()
                                .$element.off("." + this.type)
                                .removeData("bs." + this.type);
                    });
                var o = t.fn.tooltip;
                (t.fn.tooltip = e),
                    (t.fn.tooltip.Constructor = i),
                    (t.fn.tooltip.noConflict = function () {
                        return (t.fn.tooltip = o), this;
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.popover"),
                            s = "object" == typeof e && e;
                        (n || "destroy" != e) && (n || o.data("bs.popover", (n = new i(this, s))), "string" == typeof e && n[e]());
                    });
                }
                var i = function (t, e) {
                    this.init("popover", t, e);
                };
                if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                (i.VERSION = "3.2.0"),
                    (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                    })),
                    (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
                    (i.prototype.constructor = i),
                    (i.prototype.getDefaults = function () {
                        return i.DEFAULTS;
                    }),
                    (i.prototype.setContent = function () {
                        var t = this.tip(),
                            e = this.getTitle(),
                            i = this.getContent();
                        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                            t.find(".popover-content").empty()[this.options.html ? ("string" == typeof i ? "html" : "append") : "text"](i),
                            t.removeClass("fade top bottom left right in"),
                            t.find(".popover-title").html() || t.find(".popover-title").hide();
                    }),
                    (i.prototype.hasContent = function () {
                        return this.getTitle() || this.getContent();
                    }),
                    (i.prototype.getContent = function () {
                        var t = this.$element,
                            e = this.options;
                        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
                    }),
                    (i.prototype.arrow = function () {
                        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
                    }),
                    (i.prototype.tip = function () {
                        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
                    });
                var o = t.fn.popover;
                (t.fn.popover = e),
                    (t.fn.popover.Constructor = i),
                    (t.fn.popover.noConflict = function () {
                        return (t.fn.popover = o), this;
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(i, o) {
                    var n = t.proxy(this.process, this);
                    (this.$body = t("body")),
                        (this.$scrollElement = t(t(i).is("body") ? window : i)),
                        (this.options = t.extend({}, e.DEFAULTS, o)),
                        (this.selector = (this.options.target || "") + " .nav li > a"),
                        (this.offsets = []),
                        (this.targets = []),
                        (this.activeTarget = null),
                        (this.scrollHeight = 0),
                        this.$scrollElement.on("scroll.bs.scrollspy", n),
                        this.refresh(),
                        this.process();
                }
                function i(i) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.scrollspy"),
                            s = "object" == typeof i && i;
                        n || o.data("bs.scrollspy", (n = new e(this, s))), "string" == typeof i && n[i]();
                    });
                }
                (e.VERSION = "3.2.0"),
                    (e.DEFAULTS = { offset: 10 }),
                    (e.prototype.getScrollHeight = function () {
                        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (e.prototype.refresh = function () {
                        var e = "offset",
                            i = 0;
                        t.isWindow(this.$scrollElement[0]) || ((e = "position"), (i = this.$scrollElement.scrollTop())), (this.offsets = []), (this.targets = []), (this.scrollHeight = this.getScrollHeight());
                        var o = this;
                        this.$body
                            .find(this.selector)
                            .map(function () {
                                var o = t(this),
                                    n = o.data("target") || o.attr("href"),
                                    s = /^#./.test(n) && t(n);
                                return (s && s.length && s.is(":visible") && [[s[e]().top + i, n]]) || null;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .each(function () {
                                o.offsets.push(this[0]), o.targets.push(this[1]);
                            });
                    }),
                    (e.prototype.process = function () {
                        var t,
                            e = this.$scrollElement.scrollTop() + this.options.offset,
                            i = this.getScrollHeight(),
                            o = this.options.offset + i - this.$scrollElement.height(),
                            n = this.offsets,
                            s = this.targets,
                            r = this.activeTarget;
                        if ((this.scrollHeight != i && this.refresh(), e >= o)) return r != (t = s[s.length - 1]) && this.activate(t);
                        if (r && e <= n[0]) return r != (t = s[0]) && this.activate(t);
                        for (t = n.length; t--; ) r != s[t] && e >= n[t] && (!n[t + 1] || e <= n[t + 1]) && this.activate(s[t]);
                    }),
                    (e.prototype.activate = function (e) {
                        (this.activeTarget = e), t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                            o = t(i).parents("li").addClass("active");
                        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy");
                    });
                var o = t.fn.scrollspy;
                (t.fn.scrollspy = i),
                    (t.fn.scrollspy.Constructor = e),
                    (t.fn.scrollspy.noConflict = function () {
                        return (t.fn.scrollspy = o), this;
                    }),
                    t(window).on("load.bs.scrollspy.data-api", function () {
                        t('[data-spy="scroll"]').each(function () {
                            var e = t(this);
                            i.call(e, e.data());
                        });
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.tab");
                        n || o.data("bs.tab", (n = new i(this))), "string" == typeof e && n[e]();
                    });
                }
                var i = function (e) {
                    this.element = t(e);
                };
                (i.VERSION = "3.2.0"),
                    (i.prototype.show = function () {
                        var e = this.element,
                            i = e.closest("ul:not(.dropdown-menu)"),
                            o = e.data("target");
                        if ((o || ((o = e.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))), !e.parent("li").hasClass("active"))) {
                            var n = i.find(".active:last a")[0],
                                s = t.Event("show.bs.tab", { relatedTarget: n });
                            if ((e.trigger(s), !s.isDefaultPrevented())) {
                                var r = t(o);
                                this.activate(e.closest("li"), i),
                                    this.activate(r, r.parent(), function () {
                                        e.trigger({ type: "shown.bs.tab", relatedTarget: n });
                                    });
                            }
                        }
                    }),
                    (i.prototype.activate = function (e, i, o) {
                        function n() {
                            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                                e.addClass("active"),
                                r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
                                e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"),
                                o && o();
                        }
                        var s = i.find("> .active"),
                            r = o && t.support.transition && s.hasClass("fade");
                        r ? s.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n(), s.removeClass("in");
                    });
                var o = t.fn.tab;
                (t.fn.tab = e),
                    (t.fn.tab.Constructor = i),
                    (t.fn.tab.noConflict = function () {
                        return (t.fn.tab = o), this;
                    }),
                    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (i) {
                        i.preventDefault(), e.call(t(this), "show");
                    });
            })(jQuery),
            (function (t) {
                "use strict";
                function e(e) {
                    return this.each(function () {
                        var o = t(this),
                            n = o.data("bs.affix"),
                            s = "object" == typeof e && e;
                        n || o.data("bs.affix", (n = new i(this, s))), "string" == typeof e && n[e]();
                    });
                }
                var i = function (e, o) {
                    (this.options = t.extend({}, i.DEFAULTS, o)),
                        (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                        (this.$element = t(e)),
                        (this.affixed = this.unpin = this.pinnedOffset = null),
                        this.checkPosition();
                };
                (i.VERSION = "3.2.0"),
                    (i.RESET = "affix affix-top affix-bottom"),
                    (i.DEFAULTS = { offset: 0, target: window }),
                    (i.prototype.getPinnedOffset = function () {
                        if (this.pinnedOffset) return this.pinnedOffset;
                        this.$element.removeClass(i.RESET).addClass("affix");
                        var t = this.$target.scrollTop(),
                            e = this.$element.offset();
                        return (this.pinnedOffset = e.top - t);
                    }),
                    (i.prototype.checkPositionWithEventLoop = function () {
                        setTimeout(t.proxy(this.checkPosition, this), 1);
                    }),
                    (i.prototype.checkPosition = function () {
                        if (this.$element.is(":visible")) {
                            var e = t(document).height(),
                                o = this.$target.scrollTop(),
                                n = this.$element.offset(),
                                s = this.options.offset,
                                r = s.top,
                                a = s.bottom;
                            "object" != typeof s && (a = r = s), "function" == typeof r && (r = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
                            var l = !(null != this.unpin && o + this.unpin <= n.top) && (null != a && n.top + this.$element.height() >= e - a ? "bottom" : null != r && r >= o && "top");
                            if (this.affixed !== l) {
                                null != this.unpin && this.$element.css("top", "");
                                var h = "affix" + (l ? "-" + l : ""),
                                    c = t.Event(h + ".bs.affix");
                                this.$element.trigger(c),
                                    c.isDefaultPrevented() ||
                                        ((this.affixed = l),
                                        (this.unpin = "bottom" == l ? this.getPinnedOffset() : null),
                                        this.$element
                                            .removeClass(i.RESET)
                                            .addClass(h)
                                            .trigger(t.Event(h.replace("affix", "affixed"))),
                                        "bottom" == l && this.$element.offset({ top: e - this.$element.height() - a }));
                            }
                        }
                    });
                var o = t.fn.affix;
                (t.fn.affix = e),
                    (t.fn.affix.Constructor = i),
                    (t.fn.affix.noConflict = function () {
                        return (t.fn.affix = o), this;
                    }),
                    t(window).on("load", function () {
                        t('[data-spy="affix"]').each(function () {
                            var i = t(this),
                                o = i.data();
                            (o.offset = o.offset || {}), o.offsetBottom && (o.offset.bottom = o.offsetBottom), o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o);
                        });
                    });
            })(jQuery);
    },
    function (t, e) {
        !(function (t, e, i, o) {
            "use strict";
            var n = i("html"),
                s = i(t),
                r = i(e),
                a = (i.fancybox = function () {
                    a.open.apply(this, arguments);
                }),
                l = navigator.userAgent.match(/msie/i),
                h = null,
                c = e.createTouch !== o,
                d = function (t) {
                    return t && t.hasOwnProperty && t instanceof i;
                },
                p = function (t) {
                    return t && "string" === i.type(t);
                },
                u = function (t) {
                    return p(t) && t.indexOf("%") > 0;
                },
                f = function (t) {
                    return t && !(t.style.overflow && "hidden" === t.style.overflow) && ((t.clientWidth && t.scrollWidth > t.clientWidth) || (t.clientHeight && t.scrollHeight > t.clientHeight));
                },
                m = function (t, e) {
                    var i = parseInt(t, 10) || 0;
                    return e && u(t) && (i = (a.getViewport()[e] / 100) * i), Math.ceil(i);
                },
                g = function (t, e) {
                    return m(t, e) + "px";
                };
            i.extend(a, {
                version: "2.1.5",
                defaults: {
                    padding: 15,
                    margin: 20,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    pixelRatio: 1,
                    autoSize: !0,
                    autoHeight: !1,
                    autoWidth: !1,
                    autoResize: !0,
                    autoCenter: !c,
                    fitToView: !0,
                    aspectRatio: !1,
                    topRatio: 0.5,
                    leftRatio: 0.5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: !0,
                    closeBtn: !0,
                    closeClick: !1,
                    nextClick: !1,
                    mouseWheel: !0,
                    autoPlay: !1,
                    playSpeed: 3e3,
                    preload: 3,
                    modal: !1,
                    loop: !0,
                    ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
                    iframe: { scrolling: "auto", preload: !0 },
                    swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
                    keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
                    direction: { next: "left", prev: "right" },
                    scrollOutside: !0,
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe:
                            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                            (l ? ' allowtransparency="true"' : "") +
                            "></iframe>",
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                    },
                    openEffect: "fade",
                    openSpeed: 250,
                    openEasing: "swing",
                    openOpacity: !0,
                    openMethod: "zoomIn",
                    closeEffect: "fade",
                    closeSpeed: 250,
                    closeEasing: "swing",
                    closeOpacity: !0,
                    closeMethod: "zoomOut",
                    nextEffect: "elastic",
                    nextSpeed: 250,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "elastic",
                    prevSpeed: 250,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    helpers: { overlay: !0, title: !0 },
                    onCancel: i.noop,
                    beforeLoad: i.noop,
                    afterLoad: i.noop,
                    beforeShow: i.noop,
                    afterShow: i.noop,
                    beforeChange: i.noop,
                    beforeClose: i.noop,
                    afterClose: i.noop,
                },
                group: {},
                opts: {},
                previous: null,
                coming: null,
                current: null,
                isActive: !1,
                isOpen: !1,
                isOpened: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null,
                player: { timer: null, isActive: !1 },
                ajaxLoad: null,
                imgPreload: null,
                transitions: {},
                helpers: {},
                open: function (t, e) {
                    return t && (i.isPlainObject(e) || (e = {}), !1 !== a.close(!0))
                        ? (i.isArray(t) || (t = d(t) ? i(t).get() : [t]),
                          i.each(t, function (n, s) {
                              var r,
                                  l,
                                  h,
                                  c,
                                  u,
                                  f,
                                  m,
                                  g = {};
                              "object" === i.type(s) &&
                                  (s.nodeType && (s = i(s)),
                                  d(s) ? ((g = { href: s.data("fancybox-href") || s.attr("href"), title: s.data("fancybox-title") || s.attr("title"), isDom: !0, element: s }), i.metadata && i.extend(!0, g, s.metadata())) : (g = s)),
                                  (r = e.href || g.href || (p(s) ? s : null)),
                                  (l = e.title !== o ? e.title : g.title || ""),
                                  (h = e.content || g.content),
                                  (c = h ? "html" : e.type || g.type),
                                  !c && g.isDom && ((c = s.data("fancybox-type")) || ((u = s.prop("class").match(/fancybox\.(\w+)/)), (c = u ? u[1] : null))),
                                  p(r) &&
                                      (c || (a.isImage(r) ? (c = "image") : a.isSWF(r) ? (c = "swf") : "#" === r.charAt(0) ? (c = "inline") : p(s) && ((c = "html"), (h = s))),
                                      "ajax" === c && ((f = r.split(/\s+/, 2)), (r = f.shift()), (m = f.shift()))),
                                  h || ("inline" === c ? (r ? (h = i(p(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r)) : g.isDom && (h = s)) : "html" === c ? (h = r) : c || r || !g.isDom || ((c = "inline"), (h = s))),
                                  i.extend(g, { href: r, type: c, content: h, title: l, selector: m }),
                                  (t[n] = g);
                          }),
                          (a.opts = i.extend(!0, {}, a.defaults, e)),
                          e.keys !== o && (a.opts.keys = !!e.keys && i.extend({}, a.defaults.keys, e.keys)),
                          (a.group = t),
                          a._start(a.opts.index))
                        : void 0;
                },
                cancel: function () {
                    var t = a.coming;
                    t &&
                        !1 !== a.trigger("onCancel") &&
                        (a.hideLoading(),
                        a.ajaxLoad && a.ajaxLoad.abort(),
                        (a.ajaxLoad = null),
                        a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null),
                        t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(),
                        (a.coming = null),
                        a.current || a._afterZoomOut(t));
                },
                close: function (t) {
                    a.cancel(),
                        !1 !== a.trigger("beforeClose") &&
                            (a.unbindEvents(),
                            a.isActive &&
                                (a.isOpen && !0 !== t
                                    ? ((a.isOpen = a.isOpened = !1), (a.isClosing = !0), i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]())
                                    : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())));
                },
                play: function (t) {
                    var e = function () {
                            clearTimeout(a.player.timer);
                        },
                        i = function () {
                            e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed));
                        },
                        o = function () {
                            e(), r.unbind(".player"), (a.player.isActive = !1), a.trigger("onPlayEnd");
                        };
                    !0 === t || (!a.player.isActive && !1 !== t)
                        ? (function () {
                              a.current &&
                                  (a.current.loop || a.current.index < a.group.length - 1) &&
                                  ((a.player.isActive = !0), r.bind({ "onCancel.player beforeClose.player": o, "onUpdate.player": i, "beforeLoad.player": e }), i(), a.trigger("onPlayStart"));
                          })()
                        : o();
                },
                next: function (t) {
                    var e = a.current;
                    e && (p(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"));
                },
                prev: function (t) {
                    var e = a.current;
                    e && (p(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"));
                },
                jumpto: function (t, e, i) {
                    var n = a.current;
                    n &&
                        ((t = m(t)),
                        (a.direction = e || n.direction[t >= n.index ? "next" : "prev"]),
                        (a.router = i || "jumpto"),
                        n.loop && (0 > t && (t = n.group.length + (t % n.group.length)), (t %= n.group.length)),
                        n.group[t] !== o && (a.cancel(), a._start(t)));
                },
                reposition: function (t, e) {
                    var o,
                        n = a.current,
                        s = n ? n.wrap : null;
                    s && ((o = a._getPosition(e)), t && "scroll" === t.type ? (delete o.position, s.stop(!0, !0).animate(o, 200)) : (s.css(o), (n.pos = i.extend({}, n.dim, o))));
                },
                update: function (t) {
                    var e = t && t.type,
                        i = !e || "orientationchange" === e;
                    i && (clearTimeout(h), (h = null)),
                        a.isOpen &&
                            !h &&
                            (h = setTimeout(
                                function () {
                                    var o = a.current;
                                    o &&
                                        !a.isClosing &&
                                        (a.wrap.removeClass("fancybox-tmp"),
                                        (i || "load" === e || ("resize" === e && o.autoResize)) && a._setDimension(),
                                        ("scroll" === e && o.canShrink) || a.reposition(t),
                                        a.trigger("onUpdate"),
                                        (h = null));
                                },
                                i && !c ? 0 : 300
                            ));
                },
                toggle: function (t) {
                    a.isOpen && ((a.current.fitToView = "boolean" === i.type(t) ? t : !a.current.fitToView), c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update());
                },
                hideLoading: function () {
                    r.unbind(".loading"), i("#fancybox-loading").remove();
                },
                showLoading: function () {
                    var t, e;
                    a.hideLoading(),
                        (t = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")),
                        r.bind("keydown.loading", function (t) {
                            27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel());
                        }),
                        a.defaults.fixed || ((e = a.getViewport()), t.css({ position: "absolute", top: 0.5 * e.h + e.y, left: 0.5 * e.w + e.x }));
                },
                getViewport: function () {
                    var e = (a.current && a.current.locked) || !1,
                        i = { x: s.scrollLeft(), y: s.scrollTop() };
                    return e ? ((i.w = e[0].clientWidth), (i.h = e[0].clientHeight)) : ((i.w = c && t.innerWidth ? t.innerWidth : s.width()), (i.h = c && t.innerHeight ? t.innerHeight : s.height())), i;
                },
                unbindEvents: function () {
                    a.wrap && d(a.wrap) && a.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb");
                },
                bindEvents: function () {
                    var t,
                        e = a.current;
                    e &&
                        (s.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update),
                        (t = e.keys),
                        t &&
                            r.bind("keydown.fb", function (n) {
                                var s = n.which || n.keyCode,
                                    r = n.target || n.srcElement;
                                return (
                                    (27 !== s || !a.coming) &&
                                    void (
                                        n.ctrlKey ||
                                        n.altKey ||
                                        n.shiftKey ||
                                        n.metaKey ||
                                        (r && (r.type || i(r).is("[contenteditable]"))) ||
                                        i.each(t, function (t, r) {
                                            return e.group.length > 1 && r[s] !== o ? (a[t](r[s]), n.preventDefault(), !1) : i.inArray(s, r) > -1 ? (a[t](), n.preventDefault(), !1) : void 0;
                                        })
                                    )
                                );
                            }),
                        i.fn.mousewheel &&
                            e.mouseWheel &&
                            a.wrap.bind("mousewheel.fb", function (t, o, n, s) {
                                for (var r = t.target || null, l = i(r), h = !1; l.length && !(h || l.is(".fancybox-skin") || l.is(".fancybox-wrap")); ) (h = f(l[0])), (l = i(l).parent());
                                0 === o || h || (a.group.length > 1 && !e.canShrink && (s > 0 || n > 0 ? a.prev(s > 0 ? "down" : "left") : (0 > s || 0 > n) && a.next(0 > s ? "up" : "right"), t.preventDefault()));
                            }));
                },
                trigger: function (t, e) {
                    var o,
                        n = e || a.coming || a.current;
                    if (n) {
                        if ((i.isFunction(n[t]) && (o = n[t].apply(n, Array.prototype.slice.call(arguments, 1))), !1 === o)) return !1;
                        n.helpers &&
                            i.each(n.helpers, function (e, o) {
                                o && a.helpers[e] && i.isFunction(a.helpers[e][t]) && a.helpers[e][t](i.extend(!0, {}, a.helpers[e].defaults, o), n);
                            }),
                            r.trigger(t);
                    }
                },
                isImage: function (t) {
                    return p(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
                },
                isSWF: function (t) {
                    return p(t) && t.match(/\.(swf)((\?|#).*)?$/i);
                },
                _start: function (t) {
                    var e,
                        o,
                        n,
                        s,
                        r,
                        l = {};
                    if (((t = m(t)), !(e = a.group[t] || null))) return !1;
                    if (
                        ((l = i.extend(!0, {}, a.opts, e)),
                        (s = l.margin),
                        (r = l.padding),
                        "number" === i.type(s) && (l.margin = [s, s, s, s]),
                        "number" === i.type(r) && (l.padding = [r, r, r, r]),
                        l.modal && i.extend(!0, l, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }),
                        l.autoSize && (l.autoWidth = l.autoHeight = !0),
                        "auto" === l.width && (l.autoWidth = !0),
                        "auto" === l.height && (l.autoHeight = !0),
                        (l.group = a.group),
                        (l.index = t),
                        (a.coming = l),
                        !1 === a.trigger("beforeLoad"))
                    )
                        return void (a.coming = null);
                    if (((n = l.type), (o = l.href), !n)) return (a.coming = null), !(!a.current || !a.router || "jumpto" === a.router) && ((a.current.index = t), a[a.router](a.direction));
                    if (
                        ((a.isActive = !0),
                        ("image" === n || "swf" === n) && ((l.autoHeight = l.autoWidth = !1), (l.scrolling = "visible")),
                        "image" === n && (l.aspectRatio = !0),
                        "iframe" === n && c && (l.scrolling = "scroll"),
                        (l.wrap = i(l.tpl.wrap)
                            .addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + l.wrapCSS)
                            .appendTo(l.parent || "body")),
                        i.extend(l, { skin: i(".fancybox-skin", l.wrap), outer: i(".fancybox-outer", l.wrap), inner: i(".fancybox-inner", l.wrap) }),
                        i.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
                            l.skin.css("padding" + e, g(l.padding[t]));
                        }),
                        a.trigger("onReady"),
                        "inline" === n || "html" === n)
                    ) {
                        if (!l.content || !l.content.length) return a._error("content");
                    } else if (!o) return a._error("href");
                    "image" === n ? a._loadImage() : "ajax" === n ? a._loadAjax() : "iframe" === n ? a._loadIframe() : a._afterLoad();
                },
                _error: function (t) {
                    i.extend(a.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: a.coming.tpl.error }), a._afterLoad();
                },
                _loadImage: function () {
                    var t = (a.imgPreload = new Image());
                    (t.onload = function () {
                        (this.onload = this.onerror = null), (a.coming.width = this.width / a.opts.pixelRatio), (a.coming.height = this.height / a.opts.pixelRatio), a._afterLoad();
                    }),
                        (t.onerror = function () {
                            (this.onload = this.onerror = null), a._error("image");
                        }),
                        (t.src = a.coming.href),
                        !0 !== t.complete && a.showLoading();
                },
                _loadAjax: function () {
                    var t = a.coming;
                    a.showLoading(),
                        (a.ajaxLoad = i.ajax(
                            i.extend({}, t.ajax, {
                                url: t.href,
                                error: function (t, e) {
                                    a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading();
                                },
                                success: function (e, i) {
                                    "success" === i && ((t.content = e), a._afterLoad());
                                },
                            })
                        ));
                },
                _loadIframe: function () {
                    var t = a.coming,
                        e = i(t.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                            .attr("scrolling", c ? "auto" : t.iframe.scrolling)
                            .attr("src", t.href);
                    i(t.wrap).bind("onReset", function () {
                        try {
                            i(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
                        } catch (t) {}
                    }),
                        t.iframe.preload &&
                            (a.showLoading(),
                            e.one("load", function () {
                                i(this).data("ready", 1), c || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad();
                            })),
                        (t.content = e.appendTo(t.inner)),
                        t.iframe.preload || a._afterLoad();
                },
                _preloadImages: function () {
                    var t,
                        e,
                        i = a.group,
                        o = a.current,
                        n = i.length,
                        s = o.preload ? Math.min(o.preload, n - 1) : 0;
                    for (e = 1; s >= e; e += 1) (t = i[(o.index + e) % n]), "image" === t.type && t.href && (new Image().src = t.href);
                },
                _afterLoad: function () {
                    var t,
                        e,
                        o,
                        n,
                        s,
                        r,
                        l = a.coming,
                        h = a.current,
                        c = "fancybox-placeholder";
                    if ((a.hideLoading(), l && !1 !== a.isActive)) {
                        if (!1 === a.trigger("afterLoad", l, h)) return l.wrap.stop(!0).trigger("onReset").remove(), void (a.coming = null);
                        switch (
                            (h && (a.trigger("beforeChange", h), h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                            a.unbindEvents(),
                            (t = l),
                            (e = l.content),
                            (o = l.type),
                            (n = l.scrolling),
                            i.extend(a, { wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: h }),
                            (s = t.href),
                            o)
                        ) {
                            case "inline":
                            case "ajax":
                            case "html":
                                t.selector
                                    ? (e = i("<div>").html(e).find(t.selector))
                                    : d(e) &&
                                      (e.data(c) ||
                                          e.data(
                                              c,
                                              i('<div class="' + c + '"></div>')
                                                  .insertAfter(e)
                                                  .hide()
                                          ),
                                      (e = e.show().detach()),
                                      t.wrap.bind("onReset", function () {
                                          i(this).find(e).length && e.hide().replaceAll(e.data(c)).data(c, !1);
                                      }));
                                break;
                            case "image":
                                e = t.tpl.image.replace("{href}", s);
                                break;
                            case "swf":
                                (e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + s + '"></param>'),
                                    (r = ""),
                                    i.each(t.swf, function (t, i) {
                                        (e += '<param name="' + t + '" value="' + i + '"></param>'), (r += " " + t + '="' + i + '"');
                                    }),
                                    (e += '<embed src="' + s + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>");
                        }
                        (d(e) && e.parent().is(t.inner)) || t.inner.append(e),
                            a.trigger("beforeShow"),
                            t.inner.css("overflow", "yes" === n ? "scroll" : "no" === n ? "hidden" : n),
                            a._setDimension(),
                            a.reposition(),
                            (a.isOpen = !1),
                            (a.coming = null),
                            a.bindEvents(),
                            a.isOpened ? h.prevMethod && a.transitions[h.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(),
                            a.transitions[a.isOpened ? t.nextMethod : t.openMethod](),
                            a._preloadImages();
                    }
                },
                _setDimension: function () {
                    var t,
                        e,
                        o,
                        n,
                        s,
                        r,
                        l,
                        h,
                        c,
                        d,
                        p,
                        f,
                        y,
                        v,
                        b,
                        w = a.getViewport(),
                        x = 0,
                        C = !1,
                        $ = !1,
                        k = a.wrap,
                        _ = a.skin,
                        T = a.inner,
                        S = a.current,
                        E = S.width,
                        A = S.height,
                        j = S.minWidth,
                        D = S.minHeight,
                        Q = S.maxWidth,
                        P = S.maxHeight,
                        O = S.scrolling,
                        L = S.scrollOutside ? S.scrollbarWidth : 0,
                        R = S.margin,
                        z = m(R[1] + R[3]),
                        H = m(R[0] + R[2]);
                    if (
                        (k.add(_).add(T).width("auto").height("auto").removeClass("fancybox-tmp"),
                        (t = m(_.outerWidth(!0) - _.width())),
                        (e = m(_.outerHeight(!0) - _.height())),
                        (o = z + t),
                        (n = H + e),
                        (s = u(E) ? ((w.w - o) * m(E)) / 100 : E),
                        (r = u(A) ? ((w.h - n) * m(A)) / 100 : A),
                        "iframe" === S.type)
                    ) {
                        if (((v = S.content), S.autoHeight && 1 === v.data("ready")))
                            try {
                                v[0].contentWindow.document.location && (T.width(s).height(9999), (b = v.contents().find("body")), L && b.css("overflow-x", "hidden"), (r = b.outerHeight(!0)));
                            } catch (t) {}
                    } else
                        (S.autoWidth || S.autoHeight) && (T.addClass("fancybox-tmp"), S.autoWidth || T.width(s), S.autoHeight || T.height(r), S.autoWidth && (s = T.width()), S.autoHeight && (r = T.height()), T.removeClass("fancybox-tmp"));
                    if (
                        ((E = m(s)),
                        (A = m(r)),
                        (c = s / r),
                        (j = m(u(j) ? m(j, "w") - o : j)),
                        (Q = m(u(Q) ? m(Q, "w") - o : Q)),
                        (D = m(u(D) ? m(D, "h") - n : D)),
                        (P = m(u(P) ? m(P, "h") - n : P)),
                        (l = Q),
                        (h = P),
                        S.fitToView && ((Q = Math.min(w.w - o, Q)), (P = Math.min(w.h - n, P))),
                        (f = w.w - z),
                        (y = w.h - H),
                        S.aspectRatio
                            ? (E > Q && ((E = Q), (A = m(E / c))), A > P && ((A = P), (E = m(A * c))), j > E && ((E = j), (A = m(E / c))), D > A && ((A = D), (E = m(A * c))))
                            : ((E = Math.max(j, Math.min(E, Q))), S.autoHeight && "iframe" !== S.type && (T.width(E), (A = T.height())), (A = Math.max(D, Math.min(A, P)))),
                        S.fitToView)
                    )
                        if ((T.width(E).height(A), k.width(E + t), (d = k.width()), (p = k.height()), S.aspectRatio))
                            for (; (d > f || p > y) && E > j && A > D && !(x++ > 19); )
                                (A = Math.max(D, Math.min(P, A - 10))), (E = m(A * c)), j > E && ((E = j), (A = m(E / c))), E > Q && ((E = Q), (A = m(E / c))), T.width(E).height(A), k.width(E + t), (d = k.width()), (p = k.height());
                        else (E = Math.max(j, Math.min(E, E - (d - f)))), (A = Math.max(D, Math.min(A, A - (p - y))));
                    L && "auto" === O && r > A && f > E + t + L && (E += L),
                        T.width(E).height(A),
                        k.width(E + t),
                        (d = k.width()),
                        (p = k.height()),
                        (C = (d > f || p > y) && E > j && A > D),
                        ($ = S.aspectRatio ? l > E && h > A && s > E && r > A : (l > E || h > A) && (s > E || r > A)),
                        i.extend(S, { dim: { width: g(d), height: g(p) }, origWidth: s, origHeight: r, canShrink: C, canExpand: $, wPadding: t, hPadding: e, wrapSpace: p - _.outerHeight(!0), skinSpace: _.height() - A }),
                        !v && S.autoHeight && A > D && P > A && !$ && T.height("auto");
                },
                _getPosition: function (t) {
                    var e = a.current,
                        i = a.getViewport(),
                        o = e.margin,
                        n = a.wrap.width() + o[1] + o[3],
                        s = a.wrap.height() + o[0] + o[2],
                        r = { position: "absolute", top: o[0], left: o[3] };
                    return (
                        e.autoCenter && e.fixed && !t && s <= i.h && n <= i.w ? (r.position = "fixed") : e.locked || ((r.top += i.y), (r.left += i.x)),
                        (r.top = g(Math.max(r.top, r.top + (i.h - s) * e.topRatio))),
                        (r.left = g(Math.max(r.left, r.left + (i.w - n) * e.leftRatio))),
                        r
                    );
                },
                _afterZoomIn: function () {
                    var t = a.current;
                    t &&
                        ((a.isOpen = a.isOpened = !0),
                        a.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                        a.update(),
                        (t.closeClick || (t.nextClick && a.group.length > 1)) &&
                            a.inner.css("cursor", "pointer").bind("click.fb", function (e) {
                                i(e.target).is("a") || i(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close" : "next"]());
                            }),
                        t.closeBtn &&
                            i(t.tpl.closeBtn)
                                .appendTo(a.skin)
                                .bind("click.fb", function (t) {
                                    t.preventDefault(), a.close();
                                }),
                        t.arrows &&
                            a.group.length > 1 &&
                            ((t.loop || t.index > 0) && i(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && i(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)),
                        a.trigger("afterShow"),
                        t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && ((a.opts.autoPlay = !1), a.play()) : a.play(!1));
                },
                _afterZoomOut: function (t) {
                    (t = t || a.current),
                        i(".fancybox-wrap").trigger("onReset").remove(),
                        i.extend(a, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }),
                        a.trigger("afterClose", t);
                },
            }),
                (a.transitions = {
                    getOrigPosition: function () {
                        var t = a.current,
                            e = t.element,
                            i = t.orig,
                            o = {},
                            n = 50,
                            s = 50,
                            r = t.hPadding,
                            l = t.wPadding,
                            h = a.getViewport();
                        return (
                            !i && t.isDom && e.is(":visible") && ((i = e.find("img:first")), i.length || (i = e)),
                            d(i) ? ((o = i.offset()), i.is("img") && ((n = i.outerWidth()), (s = i.outerHeight()))) : ((o.top = h.y + (h.h - s) * t.topRatio), (o.left = h.x + (h.w - n) * t.leftRatio)),
                            ("fixed" === a.wrap.css("position") || t.locked) && ((o.top -= h.y), (o.left -= h.x)),
                            (o = { top: g(o.top - r * t.topRatio), left: g(o.left - l * t.leftRatio), width: g(n + l), height: g(s + r) })
                        );
                    },
                    step: function (t, e) {
                        var i,
                            o,
                            n,
                            s = e.prop,
                            r = a.current,
                            l = r.wrapSpace,
                            h = r.skinSpace;
                        ("width" === s || "height" === s) &&
                            ((i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start)),
                            a.isClosing && (i = 1 - i),
                            (o = "width" === s ? r.wPadding : r.hPadding),
                            (n = t - o),
                            a.skin[s](m("width" === s ? n : n - l * i)),
                            a.inner[s](m("width" === s ? n : n - l * i - h * i)));
                    },
                    zoomIn: function () {
                        var t = a.current,
                            e = t.pos,
                            o = t.openEffect,
                            n = "elastic" === o,
                            s = i.extend({ opacity: 1 }, e);
                        delete s.position,
                            n ? ((e = this.getOrigPosition()), t.openOpacity && (e.opacity = 0.1)) : "fade" === o && (e.opacity = 0.1),
                            a.wrap.css(e).animate(s, { duration: "none" === o ? 0 : t.openSpeed, easing: t.openEasing, step: n ? this.step : null, complete: a._afterZoomIn });
                    },
                    zoomOut: function () {
                        var t = a.current,
                            e = t.closeEffect,
                            i = "elastic" === e,
                            o = { opacity: 0.1 };
                        i && ((o = this.getOrigPosition()), t.closeOpacity && (o.opacity = 0.1)),
                            a.wrap.animate(o, { duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: i ? this.step : null, complete: a._afterZoomOut });
                    },
                    changeIn: function () {
                        var t,
                            e = a.current,
                            i = e.nextEffect,
                            o = e.pos,
                            n = { opacity: 1 },
                            s = a.direction,
                            r = 200;
                        (o.opacity = 0.1),
                            "elastic" === i && ((t = "down" === s || "up" === s ? "top" : "left"), "down" === s || "right" === s ? ((o[t] = g(m(o[t]) - r)), (n[t] = "+=200px")) : ((o[t] = g(m(o[t]) + r)), (n[t] = "-=200px"))),
                            "none" === i ? a._afterZoomIn() : a.wrap.css(o).animate(n, { duration: e.nextSpeed, easing: e.nextEasing, complete: a._afterZoomIn });
                    },
                    changeOut: function () {
                        var t = a.previous,
                            e = t.prevEffect,
                            o = { opacity: 0.1 },
                            n = a.direction;
                        "elastic" === e && (o["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"),
                            t.wrap.animate(o, {
                                duration: "none" === e ? 0 : t.prevSpeed,
                                easing: t.prevEasing,
                                complete: function () {
                                    i(this).trigger("onReset").remove();
                                },
                            });
                    },
                }),
                (a.helpers.overlay = {
                    defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !c, fixed: !0 },
                    overlay: null,
                    fixed: !1,
                    el: i("html"),
                    create: function (t) {
                        (t = i.extend({}, this.defaults, t)),
                            this.overlay && this.close(),
                            (this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent)),
                            (this.fixed = !1),
                            t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), (this.fixed = !0));
                    },
                    open: function (t) {
                        var e = this;
                        (t = i.extend({}, this.defaults, t)),
                            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t),
                            this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()),
                            t.closeClick &&
                                this.overlay.bind("click.overlay", function (t) {
                                    return i(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0;
                                }),
                            this.overlay.css(t.css).show();
                    },
                    close: function () {
                        var t, e;
                        s.unbind("resize.overlay"),
                            this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), (t = s.scrollTop()), (e = s.scrollLeft()), this.el.removeClass("fancybox-lock"), s.scrollTop(t).scrollLeft(e)),
                            i(".fancybox-overlay").remove().hide(),
                            i.extend(this, { overlay: null, fixed: !1 });
                    },
                    update: function () {
                        var t,
                            i = "100%";
                        this.overlay.width(i).height("100%"),
                            l ? ((t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth)), r.width() > t && (i = r.width())) : r.width() > s.width() && (i = r.width()),
                            this.overlay.width(i).height(r.height());
                    },
                    onReady: function (t, e) {
                        var o = this.overlay;
                        i(".fancybox-overlay").stop(!0, !0),
                            o || this.create(t),
                            t.locked && this.fixed && e.fixed && (o || (this.margin = r.height() > s.height() && i("html").css("margin-right").replace("px", "")), (e.locked = this.overlay.append(e.wrap)), (e.fixed = !1)),
                            !0 === t.showEarly && this.beforeShow.apply(this, arguments);
                    },
                    beforeShow: function (t, e) {
                        var o, n;
                        e.locked &&
                            (!1 !== this.margin &&
                                (i("*")
                                    .filter(function () {
                                        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap");
                                    })
                                    .addClass("fancybox-margin"),
                                this.el.addClass("fancybox-margin")),
                            (o = s.scrollTop()),
                            (n = s.scrollLeft()),
                            this.el.addClass("fancybox-lock"),
                            s.scrollTop(o).scrollLeft(n)),
                            this.open(t);
                    },
                    onUpdate: function () {
                        this.fixed || this.update();
                    },
                    afterClose: function (t) {
                        this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this));
                    },
                }),
                (a.helpers.title = {
                    defaults: { type: "float", position: "bottom" },
                    beforeShow: function (t) {
                        var e,
                            o,
                            n = a.current,
                            s = n.title,
                            r = t.type;
                        if ((i.isFunction(s) && (s = s.call(n.element, n)), p(s) && "" !== i.trim(s))) {
                            switch (((e = i('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + s + "</div>")), r)) {
                                case "inside":
                                    o = a.skin;
                                    break;
                                case "outside":
                                    o = a.wrap;
                                    break;
                                case "over":
                                    o = a.inner;
                                    break;
                                default:
                                    (o = a.skin), e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), (a.current.margin[2] += Math.abs(m(e.css("margin-bottom"))));
                            }
                            e["top" === t.position ? "prependTo" : "appendTo"](o);
                        }
                    },
                }),
                (i.fn.fancybox = function (t) {
                    var e,
                        o = i(this),
                        n = this.selector || "",
                        s = function (s) {
                            var r,
                                l,
                                h = i(this).blur(),
                                c = e;
                            s.ctrlKey ||
                                s.altKey ||
                                s.shiftKey ||
                                s.metaKey ||
                                h.is(".fancybox-wrap") ||
                                ((r = t.groupAttr || "data-fancybox-group"),
                                (l = h.attr(r)),
                                l || ((r = "rel"), (l = h.get(0)[r])),
                                l && "" !== l && "nofollow" !== l && ((h = n.length ? i(n) : o), (h = h.filter("[" + r + '="' + l + '"]')), (c = h.index(this))),
                                (t.index = c),
                                !1 !== a.open(h, t) && s.preventDefault());
                        };
                    return (
                        (t = t || {}),
                        (e = t.index || 0),
                        n && !1 !== t.live ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : o.unbind("click.fb-start").bind("click.fb-start", s),
                        this.filter("[data-fancybox-start=1]").trigger("click"),
                        this
                    );
                }),
                r.ready(function () {
                    var e, s;
                    i.scrollbarWidth === o &&
                        (i.scrollbarWidth = function () {
                            var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                                e = t.children(),
                                o = e.innerWidth() - e.height(99).innerWidth();
                            return t.remove(), o;
                        }),
                        i.support.fixedPosition === o &&
                            (i.support.fixedPosition = (function () {
                                var t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                                    e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                                return t.remove(), e;
                            })()),
                        i.extend(a.defaults, { scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body") }),
                        (e = i(t).width()),
                        n.addClass("fancybox-lock-test"),
                        (s = i(t).width()),
                        n.removeClass("fancybox-lock-test"),
                        i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - e) + "px;}</style>").appendTo("head");
                });
        })(window, document, jQuery);
    },
    function (t, e) {
        !(function (t, e, i) {
            "use strict";
            var o,
                n = t.document,
                s = t.Modernizr,
                r = function (t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                },
                a = "Moz Webkit O Ms".split(" "),
                l = function (t) {
                    var e,
                        i = n.documentElement.style;
                    if ("string" == typeof i[t]) return t;
                    t = r(t);
                    for (var o = 0, s = a.length; o < s; o++) if (((e = a[o] + t), "string" == typeof i[e])) return e;
                },
                h = l("transform"),
                c = l("transitionProperty"),
                d = {
                    csstransforms: function () {
                        return !!h;
                    },
                    csstransforms3d: function () {
                        var t = !!l("perspective");
                        if (t) {
                            var i = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                                o = "@media (" + i.join("transform-3d),(") + "modernizr)",
                                n = e("<style>" + o + "{#modernizr{height:3px}}</style>").appendTo("head"),
                                s = e('<div id="modernizr" />').appendTo("html");
                            (t = 3 === s.height()), s.remove(), n.remove();
                        }
                        return t;
                    },
                    csstransitions: function () {
                        return !!c;
                    },
                };
            if (s) for (o in d) s.hasOwnProperty(o) || s.addTest(o, d[o]);
            else {
                s = t.Modernizr = { _version: "1.6ish: miniModernizr for Isotope" };
                var p,
                    u = " ";
                for (o in d) (p = d[o]()), (s[o] = p), (u += " " + (p ? "" : "no-") + o);
                e("html").addClass(u);
            }
            if (s.csstransforms) {
                var f = s.csstransforms3d
                        ? {
                              translate: function (t) {
                                  return "translate3d(" + t[0] + "px, " + t[1] + "px, 0) ";
                              },
                              scale: function (t) {
                                  return "scale3d(" + t + ", " + t + ", 1) ";
                              },
                          }
                        : {
                              translate: function (t) {
                                  return "translate(" + t[0] + "px, " + t[1] + "px) ";
                              },
                              scale: function (t) {
                                  return "scale(" + t + ") ";
                              },
                          },
                    m = function (t, i, o) {
                        var n,
                            s,
                            r = e.data(t, "isoTransform") || {},
                            a = {},
                            l = {};
                        (a[i] = o), e.extend(r, a);
                        for (n in r) (s = r[n]), (l[n] = f[n](s));
                        var c = l.translate || "",
                            d = l.scale || "",
                            p = c + d;
                        e.data(t, "isoTransform", r), (t.style[h] = p);
                    };
                (e.cssNumber.scale = !0),
                    (e.cssHooks.scale = {
                        set: function (t, e) {
                            m(t, "scale", e);
                        },
                        get: function (t, i) {
                            var o = e.data(t, "isoTransform");
                            return o && o.scale ? o.scale : 1;
                        },
                    }),
                    (e.fx.step.scale = function (t) {
                        e.cssHooks.scale.set(t.elem, t.now + t.unit);
                    }),
                    (e.cssNumber.translate = !0),
                    (e.cssHooks.translate = {
                        set: function (t, e) {
                            m(t, "translate", e);
                        },
                        get: function (t, i) {
                            var o = e.data(t, "isoTransform");
                            return o && o.translate ? o.translate : [0, 0];
                        },
                    });
            }
            var g, y;
            s.csstransitions &&
                ((g = { WebkitTransitionProperty: "webkitTransitionEnd", MozTransitionProperty: "transitionend", OTransitionProperty: "oTransitionEnd otransitionend", transitionProperty: "transitionend" }[c]),
                (y = l("transitionDuration")));
            var v,
                b = e.event,
                w = e.event.handle ? "handle" : "dispatch";
            (b.special.smartresize = {
                setup: function () {
                    e(this).bind("resize", b.special.smartresize.handler);
                },
                teardown: function () {
                    e(this).unbind("resize", b.special.smartresize.handler);
                },
                handler: function (t, e) {
                    var i = this,
                        o = arguments;
                    (t.type = "smartresize"),
                        v && clearTimeout(v),
                        (v = setTimeout(
                            function () {
                                b[w].apply(i, o);
                            },
                            "execAsap" === e ? 0 : 100
                        ));
                },
            }),
                (e.fn.smartresize = function (t) {
                    return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"]);
                }),
                (e.Isotope = function (t, i, o) {
                    (this.element = e(i)), this._create(t), this._init(o);
                });
            var x = ["width", "height"],
                C = e(t);
            (e.Isotope.settings = {
                resizable: !0,
                layoutMode: "masonry",
                containerClass: "isotope",
                itemClass: "isotope-item",
                hiddenClass: "isotope-hidden",
                hiddenStyle: { opacity: 0, scale: 0.001 },
                visibleStyle: { opacity: 1, scale: 1 },
                containerStyle: { position: "relative", overflow: "hidden" },
                animationEngine: "best-available",
                animationOptions: { queue: !1, duration: 800 },
                sortBy: "original-order",
                sortAscending: !0,
                resizesContainer: !0,
                transformsEnabled: !0,
                itemPositionDataEnabled: !1,
            }),
                (e.Isotope.prototype = {
                    _create: function (t) {
                        (this.options = e.extend({}, e.Isotope.settings, t)), (this.styleQueue = []), (this.elemCount = 0);
                        var i = this.element[0].style;
                        this.originalStyle = {};
                        var o = x.slice(0);
                        for (var n in this.options.containerStyle) o.push(n);
                        for (var s = 0, r = o.length; s < r; s++) (n = o[s]), (this.originalStyle[n] = i[n] || "");
                        this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
                        var a = {
                            "original-order": function (t, e) {
                                return ++e.elemCount;
                            },
                            random: function () {
                                return Math.random();
                            },
                        };
                        (this.options.getSortData = e.extend(this.options.getSortData, a)),
                            this.reloadItems(),
                            (this.offset = { left: parseInt(this.element.css("padding-left") || 0, 10), top: parseInt(this.element.css("padding-top") || 0, 10) });
                        var l = this;
                        setTimeout(function () {
                            l.element.addClass(l.options.containerClass);
                        }, 0),
                            this.options.resizable &&
                                C.bind("smartresize.isotope", function () {
                                    l.resize();
                                }),
                            this.element.delegate("." + this.options.hiddenClass, "click", function () {
                                return !1;
                            });
                    },
                    _getAtoms: function (t) {
                        var e = this.options.itemSelector,
                            i = e ? t.filter(e).add(t.find(e)) : t,
                            o = { position: "absolute" };
                        return (
                            (i = i.filter(function (t, e) {
                                return 1 === e.nodeType;
                            })),
                            this.usingTransforms && ((o.left = 0), (o.top = 0)),
                            i.css(o).addClass(this.options.itemClass),
                            this.updateSortData(i, !0),
                            i
                        );
                    },
                    _init: function (t) {
                        (this.$filteredAtoms = this._filter(this.$allAtoms)), this._sort(), this.reLayout(t);
                    },
                    option: function (t) {
                        if (e.isPlainObject(t)) {
                            this.options = e.extend(!0, this.options, t);
                            var i;
                            for (var o in t) (i = "_update" + r(o)), this[i] && this[i]();
                        }
                    },
                    _updateAnimationEngine: function () {
                        var t,
                            e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, "");
                        switch (e) {
                            case "css":
                            case "none":
                                t = !1;
                                break;
                            case "jquery":
                                t = !0;
                                break;
                            default:
                                t = !s.csstransitions;
                        }
                        (this.isUsingJQueryAnimation = t), this._updateUsingTransforms();
                    },
                    _updateTransformsEnabled: function () {
                        this._updateUsingTransforms();
                    },
                    _updateUsingTransforms: function () {
                        var t = (this.usingTransforms = this.options.transformsEnabled && s.csstransforms && s.csstransitions && !this.isUsingJQueryAnimation);
                        t || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), (this.getPositionStyles = t ? this._translate : this._positionAbs);
                    },
                    _filter: function (t) {
                        var e = "" === this.options.filter ? "*" : this.options.filter;
                        if (!e) return t;
                        var i = this.options.hiddenClass,
                            o = "." + i,
                            n = t.filter(o),
                            s = n;
                        if ("*" !== e) {
                            s = n.filter(e);
                            var r = t.not(o).not(e).addClass(i);
                            this.styleQueue.push({ $el: r, style: this.options.hiddenStyle });
                        }
                        return this.styleQueue.push({ $el: s, style: this.options.visibleStyle }), s.removeClass(i), t.filter(e);
                    },
                    updateSortData: function (t, i) {
                        var o,
                            n,
                            s = this,
                            r = this.options.getSortData;
                        t.each(function () {
                            (o = e(this)), (n = {});
                            for (var t in r) n[t] = i || "original-order" !== t ? r[t](o, s) : e.data(this, "isotope-sort-data")[t];
                            e.data(this, "isotope-sort-data", n);
                        });
                    },
                    _sort: function () {
                        var t = this.options.sortBy,
                            e = this._getSorter,
                            i = this.options.sortAscending ? 1 : -1,
                            o = function (o, n) {
                                var s = e(o, t),
                                    r = e(n, t);
                                return s === r && "original-order" !== t && ((s = e(o, "original-order")), (r = e(n, "original-order"))), (s > r ? 1 : s < r ? -1 : 0) * i;
                            };
                        this.$filteredAtoms.sort(o);
                    },
                    _getSorter: function (t, i) {
                        return e.data(t, "isotope-sort-data")[i];
                    },
                    _translate: function (t, e) {
                        return { translate: [t, e] };
                    },
                    _positionAbs: function (t, e) {
                        return { left: t, top: e };
                    },
                    _pushPosition: function (t, e, i) {
                        (e = Math.round(e + this.offset.left)), (i = Math.round(i + this.offset.top));
                        var o = this.getPositionStyles(e, i);
                        this.styleQueue.push({ $el: t, style: o }), this.options.itemPositionDataEnabled && t.data("isotope-item-position", { x: e, y: i });
                    },
                    layout: function (t, e) {
                        var i = this.options.layoutMode;
                        if ((this["_" + i + "Layout"](t), this.options.resizesContainer)) {
                            var o = this["_" + i + "GetContainerSize"]();
                            this.styleQueue.push({ $el: this.element, style: o });
                        }
                        this._processStyleQueue(t, e), (this.isLaidOut = !0);
                    },
                    _processStyleQueue: function (t, i) {
                        var o,
                            n,
                            r,
                            a,
                            l = this.isLaidOut && this.isUsingJQueryAnimation ? "animate" : "css",
                            h = this.options.animationOptions,
                            c = this.options.onLayout;
                        if (
                            ((n = function (t, e) {
                                e.$el[l](e.style, h);
                            }),
                            this._isInserting && this.isUsingJQueryAnimation)
                        )
                            n = function (t, e) {
                                (o = e.$el.hasClass("no-transition") ? "css" : l), e.$el[o](e.style, h);
                            };
                        else if (i || c || h.complete) {
                            var d = !1,
                                p = [i, c, h.complete],
                                u = this;
                            if (
                                ((r = !0),
                                (a = function () {
                                    if (!d) {
                                        for (var e, i = 0, o = p.length; i < o; i++) "function" == typeof (e = p[i]) && e.call(u.element, t, u);
                                        d = !0;
                                    }
                                }),
                                this.isUsingJQueryAnimation && "animate" === l)
                            )
                                (h.complete = a), (r = !1);
                            else if (s.csstransitions) {
                                for (var f, m = 0, v = this.styleQueue[0], b = v && v.$el; !b || !b.length; ) {
                                    if (!(f = this.styleQueue[m++])) return;
                                    b = f.$el;
                                }
                                var w = parseFloat(getComputedStyle(b[0])[y]);
                                w > 0 &&
                                    ((n = function (t, e) {
                                        e.$el[l](e.style, h).one(g, a);
                                    }),
                                    (r = !1));
                            }
                        }
                        e.each(this.styleQueue, n), r && a(), (this.styleQueue = []);
                    },
                    resize: function () {
                        this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout();
                    },
                    reLayout: function (t) {
                        this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, t);
                    },
                    addItems: function (t, e) {
                        var i = this._getAtoms(t);
                        (this.$allAtoms = this.$allAtoms.add(i)), e && e(i);
                    },
                    insert: function (t, e) {
                        this.element.append(t);
                        var i = this;
                        this.addItems(t, function (t) {
                            var o = i._filter(t);
                            i._addHideAppended(o), i._sort(), i.reLayout(), i._revealAppended(o, e);
                        });
                    },
                    appended: function (t, e) {
                        var i = this;
                        this.addItems(t, function (t) {
                            i._addHideAppended(t), i.layout(t), i._revealAppended(t, e);
                        });
                    },
                    _addHideAppended: function (t) {
                        (this.$filteredAtoms = this.$filteredAtoms.add(t)), t.addClass("no-transition"), (this._isInserting = !0), this.styleQueue.push({ $el: t, style: this.options.hiddenStyle });
                    },
                    _revealAppended: function (t, e) {
                        var i = this;
                        setTimeout(function () {
                            t.removeClass("no-transition"), i.styleQueue.push({ $el: t, style: i.options.visibleStyle }), (i._isInserting = !1), i._processStyleQueue(t, e);
                        }, 10);
                    },
                    reloadItems: function () {
                        this.$allAtoms = this._getAtoms(this.element.children());
                    },
                    remove: function (t, e) {
                        (this.$allAtoms = this.$allAtoms.not(t)), (this.$filteredAtoms = this.$filteredAtoms.not(t));
                        var i = this,
                            o = function () {
                                t.remove(), e && e.call(i.element);
                            };
                        t.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({ $el: t, style: this.options.hiddenStyle }), this._sort(), this.reLayout(o)) : o();
                    },
                    shuffle: function (t) {
                        this.updateSortData(this.$allAtoms), (this.options.sortBy = "random"), this._sort(), this.reLayout(t);
                    },
                    destroy: function () {
                        var t = this.usingTransforms,
                            e = this.options;
                        this.$allAtoms.removeClass(e.hiddenClass + " " + e.itemClass).each(function () {
                            var e = this.style;
                            (e.position = ""), (e.top = ""), (e.left = ""), (e.opacity = ""), t && (e[h] = "");
                        });
                        var i = this.element[0].style;
                        for (var o in this.originalStyle) i[o] = this.originalStyle[o];
                        this.element
                            .unbind(".isotope")
                            .undelegate("." + e.hiddenClass, "click")
                            .removeClass(e.containerClass)
                            .removeData("isotope"),
                            C.unbind(".isotope");
                    },
                    _getSegments: function (t) {
                        var e,
                            i = this.options.layoutMode,
                            o = t ? "rowHeight" : "columnWidth",
                            n = t ? "height" : "width",
                            s = t ? "rows" : "cols",
                            a = this.element[n](),
                            l = (this.options[i] && this.options[i][o]) || this.$filteredAtoms["outer" + r(n)](!0) || a;
                        (e = Math.floor(a / l)), (e = Math.max(e, 1)), (this[i][s] = e), (this[i][o] = l);
                    },
                    _checkIfSegmentsChanged: function (t) {
                        var e = this.options.layoutMode,
                            i = t ? "rows" : "cols",
                            o = this[e][i];
                        return this._getSegments(t), this[e][i] !== o;
                    },
                    _masonryReset: function () {
                        (this.masonry = {}), this._getSegments();
                        var t = this.masonry.cols;
                        for (this.masonry.colYs = []; t--; ) this.masonry.colYs.push(0);
                    },
                    _masonryLayout: function (t) {
                        var i = this,
                            o = i.masonry;
                        t.each(function () {
                            var t = e(this),
                                n = Math.ceil(t.outerWidth(!0) / o.columnWidth);
                            if (1 === (n = Math.min(n, o.cols))) i._masonryPlaceBrick(t, o.colYs);
                            else {
                                var s,
                                    r,
                                    a = o.cols + 1 - n,
                                    l = [];
                                for (r = 0; r < a; r++) (s = o.colYs.slice(r, r + n)), (l[r] = Math.max.apply(Math, s));
                                i._masonryPlaceBrick(t, l);
                            }
                        });
                    },
                    _masonryPlaceBrick: function (t, e) {
                        for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; n < s; n++)
                            if (e[n] === i) {
                                o = n;
                                break;
                            }
                        var r = this.masonry.columnWidth * o,
                            a = i;
                        this._pushPosition(t, r, a);
                        var l = i + t.outerHeight(!0),
                            h = this.masonry.cols + 1 - s;
                        for (n = 0; n < h; n++) this.masonry.colYs[o + n] = l;
                    },
                    _masonryGetContainerSize: function () {
                        return { height: Math.max.apply(Math, this.masonry.colYs) };
                    },
                    _masonryResizeChanged: function () {
                        return this._checkIfSegmentsChanged();
                    },
                    _fitRowsReset: function () {
                        this.fitRows = { x: 0, y: 0, height: 0 };
                    },
                    _fitRowsLayout: function (t) {
                        var i = this,
                            o = this.element.width(),
                            n = this.fitRows;
                        t.each(function () {
                            var t = e(this),
                                s = t.outerWidth(!0),
                                r = t.outerHeight(!0);
                            0 !== n.x && s + n.x > o && ((n.x = 0), (n.y = n.height)), i._pushPosition(t, n.x, n.y), (n.height = Math.max(n.y + r, n.height)), (n.x += s);
                        });
                    },
                    _fitRowsGetContainerSize: function () {
                        return { height: this.fitRows.height };
                    },
                    _fitRowsResizeChanged: function () {
                        return !0;
                    },
                    _cellsByRowReset: function () {
                        (this.cellsByRow = { index: 0 }), this._getSegments(), this._getSegments(!0);
                    },
                    _cellsByRowLayout: function (t) {
                        var i = this,
                            o = this.cellsByRow;
                        t.each(function () {
                            var t = e(this),
                                n = o.index % o.cols,
                                s = Math.floor(o.index / o.cols),
                                r = (n + 0.5) * o.columnWidth - t.outerWidth(!0) / 2,
                                a = (s + 0.5) * o.rowHeight - t.outerHeight(!0) / 2;
                            i._pushPosition(t, r, a), o.index++;
                        });
                    },
                    _cellsByRowGetContainerSize: function () {
                        return { height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top };
                    },
                    _cellsByRowResizeChanged: function () {
                        return this._checkIfSegmentsChanged();
                    },
                    _straightDownReset: function () {
                        this.straightDown = { y: 0 };
                    },
                    _straightDownLayout: function (t) {
                        var i = this;
                        t.each(function (t) {
                            var o = e(this);
                            i._pushPosition(o, 0, i.straightDown.y), (i.straightDown.y += o.outerHeight(!0));
                        });
                    },
                    _straightDownGetContainerSize: function () {
                        return { height: this.straightDown.y };
                    },
                    _straightDownResizeChanged: function () {
                        return !0;
                    },
                    _masonryHorizontalReset: function () {
                        (this.masonryHorizontal = {}), this._getSegments(!0);
                        var t = this.masonryHorizontal.rows;
                        for (this.masonryHorizontal.rowXs = []; t--; ) this.masonryHorizontal.rowXs.push(0);
                    },
                    _masonryHorizontalLayout: function (t) {
                        var i = this,
                            o = i.masonryHorizontal;
                        t.each(function () {
                            var t = e(this),
                                n = Math.ceil(t.outerHeight(!0) / o.rowHeight);
                            if (1 === (n = Math.min(n, o.rows))) i._masonryHorizontalPlaceBrick(t, o.rowXs);
                            else {
                                var s,
                                    r,
                                    a = o.rows + 1 - n,
                                    l = [];
                                for (r = 0; r < a; r++) (s = o.rowXs.slice(r, r + n)), (l[r] = Math.max.apply(Math, s));
                                i._masonryHorizontalPlaceBrick(t, l);
                            }
                        });
                    },
                    _masonryHorizontalPlaceBrick: function (t, e) {
                        for (var i = Math.min.apply(Math, e), o = 0, n = 0, s = e.length; n < s; n++)
                            if (e[n] === i) {
                                o = n;
                                break;
                            }
                        var r = i,
                            a = this.masonryHorizontal.rowHeight * o;
                        this._pushPosition(t, r, a);
                        var l = i + t.outerWidth(!0),
                            h = this.masonryHorizontal.rows + 1 - s;
                        for (n = 0; n < h; n++) this.masonryHorizontal.rowXs[o + n] = l;
                    },
                    _masonryHorizontalGetContainerSize: function () {
                        return { width: Math.max.apply(Math, this.masonryHorizontal.rowXs) };
                    },
                    _masonryHorizontalResizeChanged: function () {
                        return this._checkIfSegmentsChanged(!0);
                    },
                    _fitColumnsReset: function () {
                        this.fitColumns = { x: 0, y: 0, width: 0 };
                    },
                    _fitColumnsLayout: function (t) {
                        var i = this,
                            o = this.element.height(),
                            n = this.fitColumns;
                        t.each(function () {
                            var t = e(this),
                                s = t.outerWidth(!0),
                                r = t.outerHeight(!0);
                            0 !== n.y && r + n.y > o && ((n.x = n.width), (n.y = 0)), i._pushPosition(t, n.x, n.y), (n.width = Math.max(n.x + s, n.width)), (n.y += r);
                        });
                    },
                    _fitColumnsGetContainerSize: function () {
                        return { width: this.fitColumns.width };
                    },
                    _fitColumnsResizeChanged: function () {
                        return !0;
                    },
                    _cellsByColumnReset: function () {
                        (this.cellsByColumn = { index: 0 }), this._getSegments(), this._getSegments(!0);
                    },
                    _cellsByColumnLayout: function (t) {
                        var i = this,
                            o = this.cellsByColumn;
                        t.each(function () {
                            var t = e(this),
                                n = Math.floor(o.index / o.rows),
                                s = o.index % o.rows,
                                r = (n + 0.5) * o.columnWidth - t.outerWidth(!0) / 2,
                                a = (s + 0.5) * o.rowHeight - t.outerHeight(!0) / 2;
                            i._pushPosition(t, r, a), o.index++;
                        });
                    },
                    _cellsByColumnGetContainerSize: function () {
                        return { width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth };
                    },
                    _cellsByColumnResizeChanged: function () {
                        return this._checkIfSegmentsChanged(!0);
                    },
                    _straightAcrossReset: function () {
                        this.straightAcross = { x: 0 };
                    },
                    _straightAcrossLayout: function (t) {
                        var i = this;
                        t.each(function (t) {
                            var o = e(this);
                            i._pushPosition(o, i.straightAcross.x, 0), (i.straightAcross.x += o.outerWidth(!0));
                        });
                    },
                    _straightAcrossGetContainerSize: function () {
                        return { width: this.straightAcross.x };
                    },
                    _straightAcrossResizeChanged: function () {
                        return !0;
                    },
                })
                /*!
                 * jQuery imagesLoaded plugin v1.1.0
                 * http://github.com/desandro/imagesloaded
                 *
                 * MIT License. by Paul Irish et al.
                 */,
                (e.fn.imagesLoaded = function (t) {
                    function i() {
                        t.call(n, s);
                    }
                    function o(t) {
                        var n = t.target;
                        n.src !== a && -1 === e.inArray(n, l) && (l.push(n), --r <= 0 && (setTimeout(i), s.unbind(".imagesLoaded", o)));
                    }
                    var n = this,
                        s = n.find("img").add(n.filter("img")),
                        r = s.length,
                        a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                        l = [];
                    return (
                        r || i(),
                        s.bind("load.imagesLoaded error.imagesLoaded", o).each(function () {
                            var t = this.src;
                            (this.src = a), (this.src = t);
                        }),
                        n
                    );
                });
            var $ = function (e) {
                t.console && t.console.error(e);
            };
            e.fn.isotope = function (t, i) {
                if ("string" == typeof t) {
                    var o = Array.prototype.slice.call(arguments, 1);
                    this.each(function () {
                        var i = e.data(this, "isotope");
                        return i
                            ? e.isFunction(i[t]) && "_" !== t.charAt(0)
                                ? void i[t].apply(i, o)
                                : void $("no such method '" + t + "' for isotope instance")
                            : void $("cannot call methods on isotope prior to initialization; attempted to call method '" + t + "'");
                    });
                } else
                    this.each(function () {
                        var o = e.data(this, "isotope");
                        o ? (o.option(t), o._init(i)) : e.data(this, "isotope", new e.Isotope(t, this, i));
                    });
                return this;
            };
        })(window, jQuery);
    },
    function (t, e) {
        jQuery(window).scroll(function () {
            "use strict";
            var t, e, i;
            (e = jQuery(document).scrollTop()),
                (t = !0),
                !0 === t && ((i = jQuery("#home-section").height() + 450), jQuery("#home-section").css({ opacity: 1 - (e / i) * 1.2 })),
                e >= 10 ? jQuery("#nav-wrapper").addClass("menubgC") : jQuery("#nav-wrapper").removeClass("menubgC"),
                jQuery(this).scrollTop() >= 50 ? jQuery("#return-to-top").fadeIn(200) : jQuery("#return-to-top").fadeOut(200);
        }),
            jQuery("#return-to-top").click(function () {
                jQuery("body,html").animate({ scrollTop: 0 }, 500);
            }),
            jQuery(window).load(function () {
                "use strict";
                (function () {
                    jQuery("#loader").fadeOut();
                })();
            }),
            jQuery(document).ready(function () {
                "use strict";
                jQuery(".fancybox").fancybox({ openEffect: "none", closeEffect: "none" }),
                    jQuery('a[href="#navbar-more-show"], .navbar-more-overlay').on("click", function (t) {
                        return (
                            t.preventDefault(),
                            $("body").toggleClass("navbar-more-show"),
                            $("body").hasClass("navbar-more-show") ? $('a[href="#navbar-more-show"]').closest("li").addClass("active") : $('a[href="#navbar-more-show"]').closest("li").removeClass("active"),
                            !1
                        );
                    }),
                    jQuery(".circle").mosaic({ opacity: 0.8 }),
                    jQuery(".fade").mosaic(),
                    jQuery(".bar").mosaic({ animation: "slide" });
                var t = jQuery(".portfolioContainer"),
                    e = jQuery("body"),
                    i = null;
                t.isotope({ resizable: !0, masonry: { columnWidth: 375 } }),
                    jQuery(window)
                        .smartresize(function () {
                            var o = Math.floor((e.width() - 30) / 375);
                            o !== i && ((i = o), t.width(375 * i).isotope("reLayout"));
                        })
                        .smartresize(),
                    jQuery(".portfolioFilter a").click(function () {
                        jQuery(".portfolioFilter .current").removeClass("current"), jQuery(this).addClass("current");
                        var e = jQuery(this).attr("data-filter");
                        return t.isotope({ filter: e }), !1;
                    }),
                    jQuery("#cf7_controls").on("click", "span", function () {
                        jQuery("#cf7 img").removeClass("opaque");
                        var t = jQuery(this).index();
                        jQuery("#cf7 img").eq(t).addClass("opaque"), jQuery("#cf7_controls span").removeClass("selected"), jQuery(this).addClass("selected");
                    }),
                    jQuery(".skillbar").each(function () {
                        jQuery(this)
                            .find(".skillbar-bar")
                            .animate({ width: jQuery(this).attr("data-percent") }, 3e3);
                    }),
                    jQuery(".fa-times").click(function () {
                        jQuery(".sidebar_menu").addClass("hide_menu"), jQuery(".toggle_menu").addClass("opacity_one");
                    }),
                    jQuery(".toggle_menu").click(function () {
                        jQuery(".sidebar_menu").removeClass("hide_menu"), jQuery(".toggle_menu").removeClass("opacity_one"), jQuery(".toggle_menu").addClass("toggle_menuopac");
                    }),
                    jQuery(".navbarscroll ul a").click(function (t) {
                        return (
                            jQuery(".navbarscroll ul a.active").removeClass("active"),
                            jQuery(this).addClass("active"),
                            jQuery("html,body").animate({ scrollTop: jQuery(jQuery(this).attr("href")).offset().top - 70 }, "slow"),
                            t.preventDefault(),
                            !1
                        );
                    }),
                    jQuery(document).scroll(function () {
                        var t = Math.floor(jQuery(this).scrollTop() / 800) + 1;
                        jQuery(".navbarscroll ul a.active").removeClass("active"), jQuery(".navbarscroll ul a.link-" + t).addClass("active");
                    });
            });
    },
    function (t, e) {
        !(function (t) {
            t.omr || (t.omr = new Object()),
                (t.omr.mosaic = function (e, i) {
                    var o = this;
                    (o.$el = t(e)),
                        (o.el = e),
                        o.$el.data("omr.mosaic", o),
                        (o.init = function () {
                            (o.options = t.extend({}, t.omr.mosaic.defaultOptions, i)), o.load_box();
                        }),
                        (o.load_box = function () {
                            o.options.preload
                                ? (t(o.options.backdrop, o.el).hide(),
                                  t(o.options.overlay, o.el).hide(),
                                  t(window).load(function () {
                                      "fade" == o.options.options.animation && 0 == t(o.options.overlay, o.el).css("opacity") && t(o.options.overlay, o.el).css("filter", "alpha(opacity=0)"),
                                          t(o.options.overlay, o.el).fadeIn(200, function () {
                                              t(o.options.backdrop, o.el).fadeIn(200);
                                          }),
                                          o.allow_hover();
                                  }))
                                : (t(o.options.backdrop, o.el).show(), t(o.options.overlay, o.el).show(), o.allow_hover());
                        }),
                        (o.allow_hover = function () {
                            switch (o.options.animation) {
                                case "fade":
                                    t(o.el).hover(
                                        function () {
                                            t(o.options.overlay, o.el).stop().fadeTo(o.options.speed, o.options.opacity);
                                        },
                                        function () {
                                            t(o.options.overlay, o.el).stop().fadeTo(o.options.speed, 0);
                                        }
                                    );
                                    break;
                                case "slide":
                                    (startX = "auto" != t(o.options.overlay, o.el).css(o.options.anchor_x) ? t(o.options.overlay, o.el).css(o.options.anchor_x) : "0px"),
                                        (startY = "auto" != t(o.options.overlay, o.el).css(o.options.anchor_y) ? t(o.options.overlay, o.el).css(o.options.anchor_y) : "0px");
                                    var e = {};
                                    (e[o.options.anchor_x] = o.options.hover_x), (e[o.options.anchor_y] = o.options.hover_y);
                                    var i = {};
                                    (i[o.options.anchor_x] = startX),
                                        (i[o.options.anchor_y] = startY),
                                        t(o.el).hover(
                                            function () {
                                                t(o.options.overlay, o.el).stop().animate(e, o.options.speed);
                                            },
                                            function () {
                                                t(o.options.overlay, o.el).stop().animate(i, o.options.speed);
                                            }
                                        );
                            }
                        }),
                        o.init();
                }),
                (t.omr.mosaic.defaultOptions = { animation: "fade", speed: 150, opacity: 1, preload: 0, anchor_x: "left", anchor_y: "bottom", hover_x: "0px", hover_y: "0px", overlay: ".mosaic-overlay", backdrop: ".mosaic-backdrop" }),
                (t.fn.mosaic = function (e) {
                    return this.each(function () {
                        new t.omr.mosaic(this, e);
                    });
                });
        })(jQuery);
    },
    function (t, e, i) {
        i(1), i(0), i(5), i(6), i(4), i(3), i(2);
    },
]);
