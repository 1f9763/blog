!function (e) {
  function t(r) {
    if (n[r])return n[r].exports;
    var i = n[r] = {exports: {}, id: r, loaded: !1};
    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
  }

  var n = {};
  return t.m = e, t.c = n, t.p = "/", t(0)
}([function (e, t, n) {
  function r(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(t);
    return null != n ? unescape(n[2]) : null
  }

  n(5);
  var i = n(8);
  if (n(4), window.BJ_REPORT) {
    BJ_REPORT.init({id: 1}), BJ_REPORT.init({
      id: 1,
      uin: window.location.origin,
      combo: 0,
      delay: 1e3,
      url: "//litten.me:9005/badjs/",
      ignore: [/Script error/i],
      random: 1,
      repeat: 5e5,
      onReport: function (e, t) {
      },
      ext: {}
    });
    var o = window.location.host, a = top === window, s = !(/localhost/i.test(o) || /127.0.0.1/i.test(o) || /0.0.0.0/i.test(o));
    a && s && BJ_REPORT.report("yilia-" + window.location.host);
    var l = r("f"), u = "yilia-from";
    l ? (a && BJ_REPORT.report("from-" + l), i.set(u, l)) : document.referrer.indexOf(window.location.host) >= 0 ? (l = i.get(u), l && a && BJ_REPORT.report("from-" + l)) : i.remove(u)
  }
  n(11);
  var c = n(14), d = n(9), f = n(15), p = n(2), h = n(10), m = n(13), g = n(16);
  n(12), $(function () {
    g.init(), d.init(), h.init(), c.init(), p.versions.mobile === !0 && $(window).width() < 800 ? m.init() : (f.init(), $(".js-smart-menu").click(function (e) {
      e.stopPropagation(), f.show($(this).data("idx"))
    }), $(".left-col,.mid-col").click(function () {
      f.hide()
    })), yiliaConfig && yiliaConfig.open_in_new && $(".article-entry a").not(".article-more-a").attr("target", "_blank")
  })
}, function (e, t) {
  (function (t) {
    e.exports = t
  }).call(t, {})
}, function (e, t) {
  var n = {
    versions: function () {
      var e = window.navigator.userAgent;
      return {
        trident: e.indexOf("Trident") > -1,
        presto: e.indexOf("Presto") > -1,
        webKit: e.indexOf("AppleWebKit") > -1,
        gecko: e.indexOf("Gecko") > -1 && e.indexOf("KHTML") == -1,
        mobile: !!e.match(/AppleWebKit.*Mobile.*/),
        ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: e.indexOf("Android") > -1 || e.indexOf("Linux") > -1,
        iPhone: e.indexOf("iPhone") > -1 || e.indexOf("Mac") > -1,
        iPad: e.indexOf("iPad") > -1,
        webApp: e.indexOf("Safari") == -1,
        weixin: e.indexOf("MicroMessenger") == -1
      }
    }()
  };
  e.exports = n
}, function (e, t) {
  var n = function () {
    function e(e, t, n) {
      return t || n ? String.fromCharCode(t || n) : o[e] || e
    }

    function t(e) {
      return c[e]
    }

    var r = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g, i = /['<> "&]/g, o = {
      "&quot;": '"',
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&nbsp;": " "
    }, a = /\u00a0/g, s = /<br\s*\/?>/gi, l = /\r?\n/g, u = /\s/g, c = {};
    for (var d in o)c[o[d]] = d;
    return o["&apos;"] = "'", c["'"] = "&#39;", {
      encode: function (e) {
        return e ? ("" + e).replace(i, t).replace(l, "<br/>").replace(u, "&nbsp;") : ""
      }, decode: function (t) {
        return t ? ("" + t).replace(s, "\n").replace(r, e).replace(a, " ") : ""
      }, encodeBase16: function (e) {
        if (!e)return e;
        e += "";
        for (var t = [], n = 0, r = e.length; r > n; n++)t.push(e.charCodeAt(n).toString(16).toUpperCase());
        return t.join("")
      }, encodeBase16forJSON: function (e) {
        if (!e)return e;
        e = e.replace(/[\u4E00-\u9FBF]/gi, function (e) {
          return escape(e).replace("%u", "\\u")
        });
        for (var t = [], n = 0, r = e.length; r > n; n++)t.push(e.charCodeAt(n).toString(16).toUpperCase());
        return t.join("")
      }, decodeBase16: function (e) {
        if (!e)return e;
        e += "";
        for (var t = [], n = 0, r = e.length; r > n; n += 2)t.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
        return t.join("")
      }, encodeObject: function (e) {
        if (e instanceof Array)for (var t = 0, r = e.length; r > t; t++)e[t] = n.encodeObject(e[t]); else if ("object" == typeof e)for (var i in e)e[i] = n.encodeObject(e[i]); else if ("string" == typeof e)return n.encode(e);
        return e
      }
    }
  }();
  e.exports = n
}, function (e, t, n) {/*!
 * @module report
 * @author kael, chriscai
 * @date @DATE
 * Copyright (c) 2014 kael, chriscai
 * Licensed under the MIT license.
 */
  var r = function (e) {
    if (e.BJ_REPORT)return e.BJ_REPORT;
    var t = [], n = {}, r = {
      id: 0,
      uin: 0,
      url: "",
      combo: 1,
      ext: null,
      level: 4,
      ignore: [],
      random: 1,
      delay: 1e3,
      submit: null,
      repeat: 1
    }, i = function (e, t) {
      return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]"
    }, o = function (e) {
      var t = typeof e;
      return "object" === t && !!e
    }, a = function (e) {
      return null === e || !i(e, "Number") && !e
    }, s = e.onerror;
    e.onerror = function (t, n, r, o, a) {
      var l = t;
      a && a.stack && (l = u(a)), i(l, "Event") && (l += l.type ? "--" + l.type + "--" + (l.target ? l.target.tagName + "::" + l.target.src : "") : ""), v.push({
        msg: l,
        target: n,
        rowNum: r,
        colNum: o
      }), g(), s && s.apply(e, arguments)
    };
    var l = function (e) {
      try {
        if (e.stack) {
          var t = e.stack.match("https?://[^\n]+");
          t = t ? t[0] : "";
          var n = t.match(":(\\d+):(\\d+)");
          n || (n = [0, 0, 0]);
          var r = u(e);
          return {msg: r, rowNum: n[1], colNum: n[2], target: t.replace(n[0], "")}
        }
        return e.name && e.message && e.description ? {msg: JSON.stringify(e)} : e
      } catch (i) {
        return e
      }
    }, u = function (e) {
      var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""), n = e.toString();
      return t.indexOf(n) < 0 && (t = n + "@" + t), t
    }, c = function (e, t) {
      var n = [], i = [], s = [];
      if (o(e)) {
        e.level = e.level || r.level;
        for (var l in e) {
          var u = e[l];
          if (!a(u)) {
            if (o(u))try {
              u = JSON.stringify(u)
            } catch (c) {
              u = "[BJ_REPORT detect value stringify error] " + c.toString()
            }
            s.push(l + ":" + u), n.push(l + "=" + encodeURIComponent(u)), i.push(l + "[" + t + "]=" + encodeURIComponent(u))
          }
        }
      }
      return [i.join("&"), s.join(","), n.join("&")]
    }, d = [], f = function (e) {
      if (r.submit)r.submit(e); else {
        var t = new Image;
        d.push(t), t.src = e
      }
    }, p = function (e) {
      if (!o(e))return !0;
      var t = e.msg, i = n[t] = (parseInt(n[t], 10) || 0) + 1;
      return i > r.repeat
    }, h = [], m = 0, g = function (e) {
      if (r.report) {
        for (; t.length;) {
          var n = !1, o = t.shift();
          if (!p(o)) {
            var a = c(o, h.length);
            if (i(r.ignore, "Array"))for (var s = 0, l = r.ignore.length; s < l; s++) {
              var u = r.ignore[s];
              if (i(u, "RegExp") && u.test(a[1]) || i(u, "Function") && u(o, a[1])) {
                n = !0;
                break
              }
            }
            n || (r.combo ? h.push(a[0]) : f(r.report + a[2] + "&_t=" + +new Date), r.onReport && r.onReport(r.id, o))
          }
        }
        var d = h.length;
        if (d) {
          var g = function () {
            clearTimeout(m), f(r.report + h.join("&") + "&count=" + h.length + "&_t=" + +new Date), m = 0, h = []
          };
          e ? g() : m || (m = setTimeout(g, r.delay))
        }
      }
    }, v = e.BJ_REPORT = {
      push: function (e) {
        if (Math.random() >= r.random)return v;
        var n = o(e) ? l(e) : {msg: e};
        return r.ext && !n.ext && (n.ext = r.ext), t.push(n), g(), v
      }, report: function (e) {
        return e && v.push(e), g(!0), v
      }, info: function (e) {
        return e ? (o(e) ? e.level = 2 : e = {msg: e, level: 2}, v.push(e), v) : v
      }, debug: function (e) {
        return e ? (o(e) ? e.level = 1 : e = {msg: e, level: 1}, v.push(e), v) : v
      }, init: function (e) {
        if (o(e))for (var n in e)r[n] = e[n];
        var i = parseInt(r.id, 10);
        return i && (/qq\.com$/gi.test(location.hostname) && (r.url || (r.url = "//badjs2.qq.com/badjs"), r.uin || (r.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), r.report = (r.url || "/badjs") + "?id=" + i + "&uin=" + r.uin + "&from=" + encodeURIComponent(location.href) + "&"), t.length && g(), v
      }, __onerror__: e.onerror
    };
    return "undefined" != typeof console && console.error && setTimeout(function () {
      var e = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
      e && console.error("BJ_ERROR", decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g, "$1\n"))
    }, 0), v
  }(window);
  e.exports = r, function (e) {
    if (!e.BJ_REPORT)return void console.error("please load bg-report first");
    var t = function (t) {
      e.BJ_REPORT.report(t)
    }, n = {};
    e.BJ_REPORT.tryJs = function (e) {
      return e && (t = e), n
    };
    var r, i = function (e, t) {
      for (var n in t)e[n] = t[n]
    }, o = function (e) {
      return "function" == typeof e
    }, a = function (n, i) {
      return function () {
        try {
          return n.apply(this, i || arguments)
        } catch (o) {
          if (t(o), o.stack && console && console.error && console.error("[BJ-REPORT]", o.stack), !r) {
            var a = e.onerror;
            e.onerror = function () {
            }, r = setTimeout(function () {
              e.onerror = a, r = null
            }, 50)
          }
          throw o
        }
      }
    }, s = function (e) {
      return function () {
        for (var t, n = [], r = 0, i = arguments.length; r < i; r++)t = arguments[r], o(t) && (t = a(t)), n.push(t);
        return e.apply(this, n)
      }
    }, l = function (e) {
      return function (t, n) {
        if ("string" == typeof t)try {
          t = new Function(t)
        } catch (r) {
          throw r
        }
        var i = [].slice.call(arguments, 2);
        return t = a(t, i.length && i), e(t, n)
      }
    }, u = function (e, t) {
      return function () {
        for (var n, r, i = [], s = 0, l = arguments.length; s < l; s++)n = arguments[s], o(n) && (r = a(n)) && (n.tryWrap = r) && (n = r), i.push(n);
        return e.apply(t || this, i)
      }
    }, c = function (e) {
      var t, n;
      for (t in e)n = e[t], o(n) && (e[t] = a(n));
      return e
    };
    n.spyJquery = function () {
      var t = e.$;
      if (!t || !t.event)return n;
      var r, i;
      t.zepto ? (r = t.fn.on, i = t.fn.off, t.fn.on = u(r), t.fn.off = function () {
        for (var e, t = [], n = 0, r = arguments.length; n < r; n++)e = arguments[n], o(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
        return i.apply(this, t)
      }) : window.jQuery && (r = t.event.add, i = t.event.remove, t.event.add = u(r), t.event.remove = function () {
        for (var e, t = [], n = 0, r = arguments.length; n < r; n++)e = arguments[n], o(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
        return i.apply(this, t)
      });
      var a = t.ajax;
      return a && (t.ajax = function (e, n) {
        return n || (n = e, e = void 0), c(n), e ? a.call(t, e, n) : a.call(t, n)
      }), n
    }, n.spyModules = function () {
      var t = e.require, r = e.define;
      return r && r.amd && t && (e.require = s(t), i(e.require, t), e.define = s(r), i(e.define, r)), e.seajs && r && (e.define = function () {
        for (var e, t = [], n = 0, i = arguments.length; n < i; n++)e = arguments[n], o(e) && (e = a(e), e.toString = function (e) {
          return function () {
            return e.toString()
          }
        }(arguments[n])), t.push(e);
        return r.apply(this, t)
      }, e.seajs.use = s(e.seajs.use), i(e.define, r)), n
    }, n.spySystem = function () {
      return e.setTimeout = l(e.setTimeout), e.setInterval = l(e.setInterval), n
    }, n.spyCustom = function (e) {
      return o(e) ? a(e) : c(e)
    }, n.spyAll = function () {
      return n.spyJquery().spyModules().spySystem(), n
    }
  }(window)
}, function (e, t) {
}, function (e, t) {
}, function (e, t) {
}, function (e, t, n) {
  var r, i;
  !function (o) {
    var a = !1;
    if (r = o, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)), a = !0, e.exports = o(), a = !0, !a) {
      var s = window.Cookies, l = window.Cookies = o();
      l.noConflict = function () {
        return window.Cookies = s, l
      }
    }
  }(function () {
    function e() {
      for (var e = 0, t = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)t[r] = n[r]
      }
      return t
    }

    function t(n) {
      function r(t, i, o) {
        var a;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (o = e({path: "/"}, r.defaults, o), "number" == typeof o.expires) {
              var s = new Date;
              s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s
            }
            try {
              a = JSON.stringify(i), /^[\{\[]/.test(a) && (i = a)
            } catch (l) {
            }
            return i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
          }
          t || (a = {});
          for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
            var f = u[d].split("="), p = f.slice(1).join("=");
            '"' === p.charAt(0) && (p = p.slice(1, -1));
            try {
              var h = f[0].replace(c, decodeURIComponent);
              if (p = n.read ? n.read(p, h) : n(p, h) || p.replace(c, decodeURIComponent), this.json)try {
                p = JSON.parse(p)
              } catch (l) {
              }
              if (t === h) {
                a = p;
                break
              }
              t || (a[h] = p)
            } catch (l) {
            }
          }
          return a
        }
      }

      return r.set = r, r.get = function (e) {
        return r.call(r, e)
      }, r.getJSON = function () {
        return r.apply({json: !0}, [].slice.call(arguments))
      }, r.defaults = {}, r.remove = function (t, n) {
        r(t, "", e(n, {expires: -1}))
      }, r.withConverter = t, r
    }

    return t(function () {
    })
  })
}, function (e, t, n) {
  function r() {
    var e = "js-archives-frame";
    if (top !== window)$("body").addClass("archive-inner"), $(".archive-article-title").click(function () {
      var e = $(this).attr("href");
      return top.location.href = e, !1
    }), $(".page-number").click(function () {
      $(top.document).find("." + e).hide()
    }), $(".archive-article-date").attr("href", "javascript:void(0);"); else if (!/\/archives\/(.*)/.test(window.location.pathname) && !o) {
      var t = $('<iframe class="' + e + '"></iframe>').attr("src", "/archives/");
      $(".tools-section-all").append(t), t[0].onload = function () {
        var e = setInterval(function () {
          var n = $($(".js-archives-frame")[0].contentWindow.document).find(".archive-inner");
          n.length && (t.show(), clearTimeout(e))
        }, 50)
      }
    }
  }

  var i = n(2), o = i.versions.mobile === !0 && $(window).width() < 800;
  e.exports = {init: r}
}, function (e, t) {
  function n() {
    var e = $("#page-nav");
    e.find(".extend.prev").length || e.prepend('<a class="extend prev disabled" rel="prev">&laquo; Prev</a>'), e.find(".extend.next").length || e.append('<a class="extend next disabled" rel="next">Next &raquo;</a>')
  }

  e.exports = {init: n}
}, function (e, t, n) {
  var r, i;
  /*!
   * jQuery JavaScript Library v1.9.0
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2013-1-14
   */
  !function (o, a) {
    "use strict";
    function s(e) {
      var t = e.length, n = fe.type(e);
      return !fe.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
    }

    function l(e) {
      var t = Se[e] = {};
      return fe.each(e.match(he) || [], function (e, n) {
        t[n] = !0
      }), t
    }

    function u(e, t, n, r) {
      if (fe.acceptData(e)) {
        var i, o, s = fe.expando, l = "string" == typeof t, u = e.nodeType, c = u ? fe.cache : e, d = u ? e[s] : e[s] && s;
        if (d && c[d] && (r || c[d].data) || !l || n !== a)return d || (u ? e[s] = d = re.pop() || fe.guid++ : d = s), c[d] || (c[d] = {}, u || (c[d].toJSON = fe.noop)), "object" != typeof t && "function" != typeof t || (r ? c[d] = fe.extend(c[d], t) : c[d].data = fe.extend(c[d].data, t)), i = c[d], r || (i.data || (i.data = {}), i = i.data), n !== a && (i[fe.camelCase(t)] = n), l ? (o = i[t], null == o && (o = i[fe.camelCase(t)])) : o = i, o
      }
    }

    function c(e, t, n) {
      if (fe.acceptData(e)) {
        var r, i, o, a = e.nodeType, s = a ? fe.cache : e, l = a ? e[fe.expando] : fe.expando;
        if (s[l]) {
          if (t && (r = n ? s[l] : s[l].data)) {
            fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t), t = t in r ? [t] : t.split(" "));
            for (i = 0, o = t.length; i < o; i++)delete r[t[i]];
            if (!(n ? f : fe.isEmptyObject)(r))return
          }
          (n || (delete s[l].data, f(s[l]))) && (a ? fe.cleanData([e], !0) : fe.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
        }
      }
    }

    function d(e, t, n) {
      if (n === a && 1 === e.nodeType) {
        var r = "data-" + t.replace(Ae, "-$1").toLowerCase();
        if (n = e.getAttribute(r), "string" == typeof n) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? fe.parseJSON(n) : n)
          } catch (i) {
          }
          fe.data(e, t, n)
        } else n = a
      }
      return n
    }

    function f(e) {
      var t;
      for (t in e)if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
      return !0
    }

    function p() {
      return !0
    }

    function h() {
      return !1
    }

    function m(e, t) {
      do e = e[t]; while (e && 1 !== e.nodeType);
      return e
    }

    function g(e, t, n) {
      if (t = t || 0, fe.isFunction(t))return fe.grep(e, function (e, r) {
        var i = !!t.call(e, r, e);
        return i === n
      });
      if (t.nodeType)return fe.grep(e, function (e) {
        return e === t === n
      });
      if ("string" == typeof t) {
        var r = fe.grep(e, function (e) {
          return 1 === e.nodeType
        });
        if (Ze.test(t))return fe.filter(t, r, !n);
        t = fe.filter(t, r)
      }
      return fe.grep(e, function (e) {
        return fe.inArray(e, t) >= 0 === n
      })
    }

    function v(e) {
      var t = Je.split("|"), n = e.createDocumentFragment();
      if (n.createElement)for (; t.length;)n.createElement(t.pop());
      return n
    }

    function y(e, t) {
      return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function x(e) {
      var t = e.getAttributeNode("type");
      return e.type = (t && t.specified) + "/" + e.type, e
    }

    function b(e) {
      var t = st.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
      for (var n, r = 0; null != (n = e[r]); r++)fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
    }

    function T(e, t) {
      if (1 === t.nodeType && fe.hasData(e)) {
        var n, r, i, o = fe._data(e), a = fe._data(t, o), s = o.events;
        if (s) {
          delete a.handle, a.events = {};
          for (n in s)for (r = 0, i = s[n].length; r < i; r++)fe.event.add(t, n, s[n][r])
        }
        a.data && (a.data = fe.extend({}, a.data))
      }
    }

    function C(e, t) {
      var n, r, i;
      if (1 === t.nodeType) {
        if (n = t.nodeName.toLowerCase(), !fe.support.noCloneEvent && t[fe.expando]) {
          r = fe._data(t);
          for (i in r.events)fe.removeEvent(t, i, r.handle);
          t.removeAttribute(fe.expando)
        }
        "script" === n && t.text !== e.text ? (x(t).text = e.text, b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), fe.support.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && it.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }
    }

    function E(e, t) {
      var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : a;
      if (!o)for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)!t || fe.nodeName(r, t) ? o.push(r) : fe.merge(o, E(r, t));
      return t === a || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }

    function k(e) {
      it.test(e.type) && (e.defaultChecked = e.checked)
    }

    function S(e, t) {
      if (t in e)return t;
      for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nt.length; i--;)if (t = Nt[i] + n, t in e)return t;
      return r
    }

    function N(e, t) {
      return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
    }

    function A(e, t) {
      for (var n, r = [], i = 0, o = e.length; i < o; i++)n = e[i], n.style && (r[i] = fe._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && N(n) && (r[i] = fe._data(n, "olddisplay", L(n.nodeName)))) : r[i] || N(n) || fe._data(n, "olddisplay", fe.css(n, "display")));
      for (i = 0; i < o; i++)n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none"));
      return e
    }

    function D(e, t, n) {
      var r = bt.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function I(e, t, n, r, i) {
      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += fe.css(e, n + St[o], !0, i)), r ? ("content" === n && (a -= fe.css(e, "padding" + St[o], !0, i)), "margin" !== n && (a -= fe.css(e, "border" + St[o] + "Width", !0, i))) : (a += fe.css(e, "padding" + St[o], !0, i), "padding" !== n && (a += fe.css(e, "border" + St[o] + "Width", !0, i)));
      return a
    }

    function O(e, t, n) {
      var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = pt(e), a = fe.support.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
      if (i <= 0 || null == i) {
        if (i = ft(e, t, o), (i < 0 || null == i) && (i = e.style[t]), wt.test(i))return i;
        r = a && (fe.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + I(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function L(e) {
      var t = V, n = Ct[e];
      return n || (n = _(e, t), "none" !== n && n || (ht = (ht || fe("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ht[0].contentWindow || ht[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = _(e, t), ht.detach()), Ct[e] = n), n
    }

    function _(e, t) {
      var n = fe(t.createElement(e)).appendTo(t.body), r = fe.css(n[0], "display");
      return n.remove(), r
    }

    function M(e, t, n, r) {
      var i;
      if (fe.isArray(t))fe.each(t, function (t, i) {
        n || Dt.test(e) ? r(e, i) : M(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
      }); else if (n || "object" !== fe.type(t))r(e, t); else for (i in t)M(e + "[" + i + "]", t[i], n, r)
    }

    function j(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r, i = 0, o = t.toLowerCase().match(he) || [];
        if (fe.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
      }
    }

    function R(e, t, n, r) {
      function i(s) {
        var l;
        return o[s] = !0, fe.each(e[s] || [], function (e, s) {
          var u = s(t, n, r);
          return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
        }), l
      }

      var o = {}, a = e === Zt;
      return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function F(e, t) {
      var n, r, i = fe.ajaxSettings.flatOptions || {};
      for (n in t)t[n] !== a && ((i[n] ? e : r || (r = {}))[n] = t[n]);
      return r && fe.extend(!0, e, r), e
    }

    function H(e, t, n) {
      var r, i, o, s, l = e.contents, u = e.dataTypes, c = e.responseFields;
      for (i in c)i in n && (t[c[i]] = n[i]);
      for (; "*" === u[0];)u.shift(), r === a && (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r)for (i in l)if (l[i] && l[i].test(r)) {
        u.unshift(i);
        break
      }
      if (u[0] in n)o = u[0]; else {
        for (i in n) {
          if (!u[0] || e.converters[i + " " + u[0]]) {
            o = i;
            break
          }
          s || (s = i)
        }
        o = o || s
      }
      if (o)return o !== u[0] && u.unshift(o), n[o]
    }

    function P(e, t) {
      var n, r, i, o, a = {}, s = 0, l = e.dataTypes.slice(), u = l[0];
      if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])for (n in e.converters)a[n.toLowerCase()] = e.converters[n];
      for (; i = l[++s];)if ("*" !== i) {
        if ("*" !== u && u !== i) {
          if (n = a[u + " " + i] || a["* " + i], !n)for (r in a)if (o = r.split(" "), o[1] === i && (n = a[u + " " + o[0]] || a["* " + o[0]])) {
            n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], l.splice(s--, 0, i));
            break
          }
          if (n !== !0)if (n && e["throws"])t = n(t); else try {
            t = n(t)
          } catch (c) {
            return {state: "parsererror", error: n ? c : "No conversion from " + u + " to " + i}
          }
        }
        u = i
      }
      return {state: "success", data: t}
    }

    function B() {
      try {
        return new o.XMLHttpRequest
      } catch (e) {
      }
    }

    function q() {
      try {
        return new o.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
      }
    }

    function $() {
      return setTimeout(function () {
        tn = a
      }), tn = fe.now()
    }

    function W(e, t) {
      fe.each(t, function (t, n) {
        for (var r = (ln[t] || []).concat(ln["*"]), i = 0, o = r.length; i < o; i++)if (r[i].call(e, t, n))return
      })
    }

    function z(e, t, n) {
      var r, i, o = 0, a = sn.length, s = fe.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (i)return !1;
        for (var t = tn || $(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++)u.tweens[a].run(o);
        return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
      }, u = s.promise({
        elem: e,
        props: fe.extend({}, t),
        opts: fe.extend(!0, {specialEasing: {}}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: tn || $(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
          return u.tweens.push(r), r
        },
        stop: function (t) {
          var n = 0, r = t ? u.tweens.length : 0;
          if (i)return this;
          for (i = !0; n < r; n++)u.tweens[n].run(1);
          return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }
      }), c = u.props;
      for (U(c, u.opts.specialEasing); o < a; o++)if (r = sn[o].call(u, e, c, u.opts))return r;
      return W(u, c), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), fe.fx.timer(fe.extend(l, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function U(e, t) {
      var n, r, i, o, a;
      for (n in e)if (r = fe.camelCase(n), i = t[r], o = e[n], fe.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = fe.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];
        for (n in o)n in e || (e[n] = o[n], t[n] = i)
      } else t[r] = i
    }

    function Z(e, t, n) {
      var r, i, o, a, s, l, u, c, d, f = this, p = e.style, h = {}, m = [], g = e.nodeType && N(e);
      n.queue || (c = fe._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function () {
        c.unqueued || d()
      }), c.unqueued++, f.always(function () {
        f.always(function () {
          c.unqueued--, fe.queue(e, "fx").length || c.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === fe.css(e, "display") && "none" === fe.css(e, "float") && (fe.support.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", fe.support.shrinkWrapBlocks || f.done(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (r in t)if (o = t[r], rn.exec(o)) {
        if (delete t[r], l = l || "toggle" === o, o === (g ? "hide" : "show"))continue;
        m.push(r)
      }
      if (a = m.length) {
        s = fe._data(e, "fxshow") || fe._data(e, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? fe(e).show() : f.done(function () {
          fe(e).hide()
        }), f.done(function () {
          var t;
          fe._removeData(e, "fxshow");
          for (t in h)fe.style(e, t, h[t])
        });
        for (r = 0; r < a; r++)i = m[r], u = f.createTween(i, g ? s[i] : 0), h[i] = s[i] || fe.style(e, i), i in s || (s[i] = u.start, g && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function X(e, t, n, r, i) {
      return new X.prototype.init(e, t, n, r, i)
    }

    function K(e, t) {
      var n, r = {height: e}, i = 0;
      for (t = t ? 1 : 0; i < 4; i += 2 - t)n = St[i], r["margin" + n] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
    }

    function J(e) {
      return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    var Y, G, V = o.document, Q = o.location, ee = o.jQuery, te = o.$, ne = {}, re = [], ie = "1.9.0", oe = re.concat, ae = re.push, se = re.slice, le = re.indexOf, ue = ne.toString, ce = ne.hasOwnProperty, de = ie.trim, fe = function (e, t) {
      return new fe.fn.init(e, t, Y)
    }, pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, he = /\S+/g, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ye = /^[\],:{}\s]*$/, xe = /(?:^|:|,)(?:\s*\[)+/g, be = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, we = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, Te = /^-ms-/, Ce = /-([\da-z])/gi, Ee = function (e, t) {
      return t.toUpperCase()
    }, ke = function () {
      V.addEventListener ? (V.removeEventListener("DOMContentLoaded", ke, !1), fe.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", ke), fe.ready())
    };
    fe.fn = fe.prototype = {
      jquery: ie, constructor: fe, init: function (e, t, n) {
        var r, i;
        if (!e)return this;
        if ("string" == typeof e) {
          if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ge.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : V, !0)), ve.test(r[1]) && fe.isPlainObject(t))for (r in t)fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          if (i = V.getElementById(r[2]), i && i.parentNode) {
            if (i.id !== r[2])return n.find(e);
            this.length = 1, this[0] = i
          }
          return this.context = V, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? n.ready(e) : (e.selector !== a && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
      }, selector: "", length: 0, size: function () {
        return this.length
      }, toArray: function () {
        return se.call(this)
      }, get: function (e) {
        return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
      }, pushStack: function (e) {
        var t = fe.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      }, each: function (e, t) {
        return fe.each(this, e, t)
      }, ready: function (e) {
        return fe.ready.promise().done(e), this
      }, slice: function () {
        return this.pushStack(se.apply(this, arguments))
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, eq: function (e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      }, map: function (e) {
        return this.pushStack(fe.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      }, end: function () {
        return this.prevObject || this.constructor(null)
      }, push: ae, sort: [].sort, splice: [].splice
    }, fe.fn.init.prototype = fe.fn, fe.extend = fe.fn.extend = function () {
      var e, t, n, r, i, o, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || fe.isFunction(s) || (s = {}), u === l && (s = this, --l); l < u; l++)if (null != (e = arguments[l]))for (t in e)n = s[t], r = e[t], s !== r && (c && r && (fe.isPlainObject(r) || (i = fe.isArray(r))) ? (i ? (i = !1, o = n && fe.isArray(n) ? n : []) : o = n && fe.isPlainObject(n) ? n : {}, s[t] = fe.extend(c, o, r)) : r !== a && (s[t] = r));
      return s
    }, fe.extend({
      noConflict: function (e) {
        return o.$ === fe && (o.$ = te), e && o.jQuery === fe && (o.jQuery = ee), fe
      }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? fe.readyWait++ : fe.ready(!0)
      }, ready: function (e) {
        if (e === !0 ? !--fe.readyWait : !fe.isReady) {
          if (!V.body)return setTimeout(fe.ready);
          fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (G.resolveWith(V, [fe]), fe.fn.trigger && fe(V).trigger("ready").off("ready"))
        }
      }, isFunction: function (e) {
        return "function" === fe.type(e)
      }, isArray: Array.isArray || function (e) {
        return "array" === fe.type(e)
      }, isWindow: function (e) {
        return null != e && e == e.window
      }, isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      }, type: function (e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? ne[ue.call(e)] || "object" : typeof e
      }, isPlainObject: function (e) {
        if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))return !1;
        try {
          if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))return !1
        } catch (t) {
          return !1
        }
        var n;
        for (n in e);
        return n === a || ce.call(e, n)
      }, isEmptyObject: function (e) {
        var t;
        for (t in e)return !1;
        return !0
      }, error: function (e) {
        throw new Error(e)
      }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || V;
        var r = ve.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = fe.buildFragment([e], t, i), i && fe(i).remove(), fe.merge([], r.childNodes))
      }, parseJSON: function (e) {
        return o.JSON && o.JSON.parse ? o.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = fe.trim(e), e && ye.test(e.replace(be, "@").replace(we, "]").replace(xe, ""))) ? new Function("return " + e)() : void fe.error("Invalid JSON: " + e)
      }, parseXML: function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
          o.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
        } catch (r) {
          t = a
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + e), t
      }, noop: function () {
      }, globalEval: function (e) {
        e && fe.trim(e) && (o.execScript || function (e) {
          o.eval.call(o, e)
        })(e)
      }, camelCase: function (e) {
        return e.replace(Te, "ms-").replace(Ce, Ee)
      }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }, each: function (e, t, n) {
        var r, i = 0, o = e.length, a = s(e);
        if (n) {
          if (a)for (; i < o && (r = t.apply(e[i], n), r !== !1); i++); else for (i in e)if (r = t.apply(e[i], n), r === !1)break
        } else if (a)for (; i < o && (r = t.call(e[i], i, e[i]), r !== !1); i++); else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
        return e
      }, trim: de && !de.call("\ufeff ") ? function (e) {
        return null == e ? "" : de.call(e)
      } : function (e) {
        return null == e ? "" : (e + "").replace(me, "")
      }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (s(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
      }, inArray: function (e, t, n) {
        var r;
        if (t) {
          if (le)return le.call(t, e, n);
          for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)if (n in t && t[n] === e)return n
        }
        return -1
      }, merge: function (e, t) {
        var n = t.length, r = e.length, i = 0;
        if ("number" == typeof n)for (; i < n; i++)e[r++] = t[i]; else for (; t[i] !== a;)e[r++] = t[i++];
        return e.length = r, e
      }, grep: function (e, t, n) {
        var r, i = [], o = 0, a = e.length;
        for (n = !!n; o < a; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
      }, map: function (e, t, n) {
        var r, i = 0, o = e.length, a = s(e), l = [];
        if (a)for (; i < o; i++)r = t(e[i], i, n), null != r && (l[l.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (l[l.length] = r);
        return oe.apply([], l)
      }, guid: 1, proxy: function (e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e) ? (r = se.call(arguments, 2), i = function () {
          return e.apply(t || this, r.concat(se.call(arguments)))
        }, i.guid = e.guid = e.guid || fe.guid++, i) : a
      }, access: function (e, t, n, r, i, o, s) {
        var l = 0, u = e.length, c = null == n;
        if ("object" === fe.type(n)) {
          i = !0;
          for (l in n)fe.access(e, t, l, n[l], !0, o, s)
        } else if (r !== a && (i = !0, fe.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
            return c.call(fe(e), n)
          })), t))for (; l < u; l++)t(e[l], n, s ? r : r.call(e[l], l, t(e[l], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
      }, now: function () {
        return (new Date).getTime()
      }
    }), fe.ready.promise = function (e) {
      if (!G)if (G = fe.Deferred(), "complete" === V.readyState)setTimeout(fe.ready); else if (V.addEventListener)V.addEventListener("DOMContentLoaded", ke, !1), o.addEventListener("load", fe.ready, !1); else {
        V.attachEvent("onreadystatechange", ke), o.attachEvent("onload", fe.ready);
        var t = !1;
        try {
          t = null == o.frameElement && V.documentElement
        } catch (n) {
        }
        t && t.doScroll && !function r() {
          if (!fe.isReady) {
            try {
              t.doScroll("left")
            } catch (e) {
              return setTimeout(r, 50)
            }
            fe.ready()
          }
        }()
      }
      return G.promise(e)
    }, fe.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
      ne["[object " + t + "]"] = t.toLowerCase()
    }), Y = fe(V);
    var Se = {};
    fe.Callbacks = function (e) {
      e = "string" == typeof e ? Se[e] || l(e) : fe.extend({}, e);
      var t, n, r, i, o, s, u = [], c = !e.once && [], d = function (a) {
        for (t = e.memory && a, n = !0, s = i || 0, i = 0, o = u.length, r = !0; u && s < o; s++)if (u[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
          t = !1;
          break
        }
        r = !1, u && (c ? c.length && d(c.shift()) : t ? u = [] : f.disable())
      }, f = {
        add: function () {
          if (u) {
            var n = u.length;
            !function a(t) {
              fe.each(t, function (t, n) {
                var r = fe.type(n);
                "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && a(n)
              })
            }(arguments), r ? o = u.length : t && (i = n, d(t))
          }
          return this
        }, remove: function () {
          return u && fe.each(arguments, function (e, t) {
            for (var n; (n = fe.inArray(t, u, n)) > -1;)u.splice(n, 1), r && (n <= o && o--, n <= s && s--)
          }), this
        }, has: function (e) {
          return fe.inArray(e, u) > -1
        }, empty: function () {
          return u = [], this
        }, disable: function () {
          return u = c = t = a, this
        }, disabled: function () {
          return !u
        }, lock: function () {
          return c = a, t || f.disable(), this
        }, locked: function () {
          return !c
        }, fireWith: function (e, t) {
          return t = t || [], t = [e, t.slice ? t.slice() : t], !u || n && !c || (r ? c.push(t) : d(t)), this
        }, fire: function () {
          return f.fireWith(this, arguments), this
        }, fired: function () {
          return !!n
        }
      };
      return f
    }, fe.extend({
      Deferred: function (e) {
        var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]], n = "pending", r = {
          state: function () {
            return n
          }, always: function () {
            return i.done(arguments).fail(arguments), this
          }, then: function () {
            var e = arguments;
            return fe.Deferred(function (n) {
              fe.each(t, function (t, o) {
                var a = o[0], s = fe.isFunction(e[t]) && e[t];
                i[o[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && fe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, promise: function (e) {
            return null != e ? fe.extend(e, r) : r
          }
        }, i = {};
        return r.pipe = r.then, fe.each(t, function (e, o) {
          var a = o[2], s = o[3];
          r[o[1]] = a.add, s && a.add(function () {
            n = s
          }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
            return i[o[0] + "With"](this === i ? r : this, arguments), this
          }, i[o[0] + "With"] = a.fireWith
        }), r.promise(i), e && e.call(i, i), i
      }, when: function (e) {
        var t, n, r, i = 0, o = se.call(arguments), a = o.length, s = 1 !== a || e && fe.isFunction(e.promise) ? a : 0, l = 1 === s ? e : fe.Deferred(), u = function (e, n, r) {
          return function (i) {
            n[e] = this, r[e] = arguments.length > 1 ? se.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
          }
        };
        if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)o[i] && fe.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
        return s || l.resolveWith(r, o), l.promise()
      }
    }), fe.support = function () {
      var e, t, n, r, i, a, s, l, u, c, d = V.createElement("div");
      if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !t || !n || !t.length)return {};
      r = V.createElement("select"), i = r.appendChild(V.createElement("option")), a = d.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = {
        getSetAttribute: "t" !== d.className,
        leadingWhitespace: 3 === d.firstChild.nodeType,
        tbody: !d.getElementsByTagName("tbody").length,
        htmlSerialize: !!d.getElementsByTagName("link").length,
        style: /top/.test(n.getAttribute("style")),
        hrefNormalized: "/a" === n.getAttribute("href"),
        opacity: /^0.5/.test(n.style.opacity),
        cssFloat: !!n.style.cssFloat,
        checkOn: !!a.value,
        optSelected: i.selected,
        enctype: !!V.createElement("form").enctype,
        html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === V.compatMode,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, a.checked = !0, e.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !i.disabled;
      try {
        delete d.test
      } catch (f) {
        e.deleteExpando = !1
      }
      a = V.createElement("input"), a.setAttribute("value", ""), e.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), e.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), s = V.createDocumentFragment(), s.appendChild(a), e.appendChecked = a.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
        e.noCloneEvent = !1
      }), d.cloneNode(!0).click());
      for (c in{
        submit: !0,
        change: !0,
        focusin: !0
      })d.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in o || d.attributes[l].expando === !1;
      return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip, fe(function () {
        var t, n, r, i = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = V.getElementsByTagName("body")[0];
        a && (t = V.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(t).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === d.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, o.getComputedStyle && (e.pixelPosition = "1%" !== (o.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (o.getComputedStyle(d, null) || {width: "4px"}).width, n = d.appendChild(V.createElement("div")), n.style.cssText = d.style.cssText = i, n.style.marginRight = n.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((o.getComputedStyle(n, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = i + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, a.style.zoom = 1), a.removeChild(t), t = d = r = n = null)
      }), t = r = s = i = n = a = null, e
    }();
    var Ne = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Ae = /([A-Z])/g;
    fe.extend({
      cache: {},
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
      hasData: function (e) {
        return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !f(e)
      },
      data: function (e, t, n) {
        return u(e, t, n, !1)
      },
      removeData: function (e, t) {
        return c(e, t, !1)
      },
      _data: function (e, t, n) {
        return u(e, t, n, !0)
      },
      _removeData: function (e, t) {
        return c(e, t, !0)
      },
      acceptData: function (e) {
        var t = e.nodeName && fe.noData[e.nodeName.toLowerCase()];
        return !t || t !== !0 && e.getAttribute("classid") === t
      }
    }), fe.fn.extend({
      data: function (e, t) {
        var n, r, i = this[0], o = 0, s = null;
        if (e === a) {
          if (this.length && (s = fe.data(i), 1 === i.nodeType && !fe._data(i, "parsedAttrs"))) {
            for (n = i.attributes; o < n.length; o++)r = n[o].name, r.indexOf("data-") || (r = fe.camelCase(r.substring(5)), d(i, r, s[r]));
            fe._data(i, "parsedAttrs", !0)
          }
          return s
        }
        return "object" == typeof e ? this.each(function () {
          fe.data(this, e)
        }) : fe.access(this, function (t) {
          return t === a ? i ? d(i, e, fe.data(i, e)) : null : void this.each(function () {
            fe.data(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      }, removeData: function (e) {
        return this.each(function () {
          fe.removeData(this, e)
        })
      }
    }), fe.extend({
      queue: function (e, t, n) {
        var r;
        if (e)return t = (t || "fx") + "queue", r = fe._data(e, t), n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)), r || []
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = fe.queue(e, t), r = n.length, i = n.shift(), o = fe._queueHooks(e, t), a = function () {
          fe.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return fe._data(e, n) || fe._data(e, n, {
            empty: fe.Callbacks("once memory").add(function () {
              fe._removeData(e, t + "queue"), fe._removeData(e, n)
            })
          })
      }
    }), fe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : t === a ? this : this.each(function () {
          var n = fe.queue(this, e, t);
          fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          fe.dequeue(this, e)
        })
      }, delay: function (e, t) {
        return e = fe.fx ? fe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r)
          }
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, t) {
        var n, r = 1, i = fe.Deferred(), o = this, s = this.length, l = function () {
          --r || i.resolveWith(o, [o])
        };
        for ("string" != typeof e && (t = e, e = a), e = e || "fx"; s--;)n = fe._data(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
        return l(), i.promise(t)
      }
    });
    var De, Ie, Oe = /[\t\r\n]/g, Le = /\r/g, _e = /^(?:input|select|textarea|button|object)$/i, Me = /^(?:a|area)$/i, je = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Re = /^(?:checked|selected)$/i, Fe = fe.support.getSetAttribute, He = fe.support.input;
    fe.fn.extend({
      attr: function (e, t) {
        return fe.access(this, fe.attr, e, t, arguments.length > 1)
      }, removeAttr: function (e) {
        return this.each(function () {
          fe.removeAttr(this, e)
        })
      }, prop: function (e, t) {
        return fe.access(this, fe.prop, e, t, arguments.length > 1)
      }, removeProp: function (e) {
        return e = fe.propFix[e] || e, this.each(function () {
          try {
            this[e] = a, delete this[e]
          } catch (t) {
          }
        })
      }, addClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
        if (fe.isFunction(e))return this.each(function (t) {
          fe(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(he) || []; a < s; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : " ")) {
          for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
          n.className = fe.trim(r)
        }
        return this
      }, removeClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (fe.isFunction(e))return this.each(function (t) {
          fe(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(he) || []; a < s; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Oe, " ") : "")) {
          for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
          n.className = e ? fe.trim(r) : ""
        }
        return this
      }, toggleClass: function (e, t) {
        var n = typeof e, r = "boolean" == typeof t;
        return fe.isFunction(e) ? this.each(function (n) {
          fe(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
          if ("string" === n)for (var i, o = 0, a = fe(this), s = t, l = e.match(he) || []; i = l[o++];)s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else"undefined" !== n && "boolean" !== n || (this.className && fe._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : fe._data(this, "__className__") || "")
        })
      }, hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Oe, " ").indexOf(t) >= 0)return !0;
        return !1
      }, val: function (e) {
        var t, n, r, i = this[0];
        {
          if (arguments.length)return r = fe.isFunction(e), this.each(function (n) {
            var i, o = fe(this);
            1 === this.nodeType && (i = r ? e.call(this, n, o.val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function (e) {
              return null == e ? "" : e + ""
            })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== a || (this.value = i))
          });
          if (i)return t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== a ? n : (n = i.value, "string" == typeof n ? n.replace(Le, "") : null == n ? "" : n)
        }
      }
    }), fe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text
          }
        }, select: {
          get: function (e) {
            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)if (n = r[l], (n.selected || l === i) && (fe.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
              if (t = fe(n).val(), o)return t;
              a.push(t)
            }
            return a
          }, set: function (e, t) {
            var n = fe.makeArray(t);
            return fe(e).find("option").each(function () {
              this.selected = fe.inArray(fe(this).val(), n) >= 0
            }), n.length || (e.selectedIndex = -1), n
          }
        }
      },
      attr: function (e, t, n) {
        var r, i, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (o = 1 !== s || !fe.isXMLDoc(e), o && (t = t.toLowerCase(), i = fe.attrHooks[t] || (je.test(t) ? Ie : De)), n === a ? i && o && "get" in i && null !== (r = i.get(e, t)) ? r : ("undefined" != typeof e.getAttribute && (r = e.getAttribute(t)), null == r ? a : r) : null !== n ? i && o && "set" in i && (r = i.set(e, n, t)) !== a ? r : (e.setAttribute(t, n + ""), n) : void fe.removeAttr(e, t))
      },
      removeAttr: function (e, t) {
        var n, r, i = 0, o = t && t.match(he);
        if (o && 1 === e.nodeType)for (; n = o[i++];)r = fe.propFix[n] || n, je.test(n) ? !Fe && Re.test(n) ? e[fe.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : fe.attr(e, n, ""), e.removeAttribute(Fe ? n : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!fe.support.radioValue && "radio" === t && fe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function (e, t, n) {
        var r, i, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !fe.isXMLDoc(e), o && (t = fe.propFix[t] || t, i = fe.propHooks[t]), n !== a ? i && "set" in i && (r = i.set(e, n, t)) !== a ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = e.getAttributeNode("tabindex");
            return t && t.specified ? parseInt(t.value, 10) : _e.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : a
          }
        }
      }
    }), Ie = {
      get: function (e, t) {
        var n = fe.prop(e, t), r = "boolean" == typeof n && e.getAttribute(t), i = "boolean" == typeof n ? He && Fe ? null != r : Re.test(t) ? e[fe.camelCase("default-" + t)] : !!r : e.getAttributeNode(t);
        return i && i.value !== !1 ? t.toLowerCase() : a
      }, set: function (e, t, n) {
        return t === !1 ? fe.removeAttr(e, n) : He && Fe || !Re.test(n) ? e.setAttribute(!Fe && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0,
          n
      }
    }, He && Fe || (fe.attrHooks.value = {
      get: function (e, t) {
        var n = e.getAttributeNode(t);
        return fe.nodeName(e, "input") ? e.defaultValue : n && n.specified ? n.value : a
      }, set: function (e, t, n) {
        return fe.nodeName(e, "input") ? void(e.defaultValue = t) : De && De.set(e, t, n)
      }
    }), Fe || (De = fe.valHooks.button = {
      get: function (e, t) {
        var n = e.getAttributeNode(t);
        return n && ("id" === t || "name" === t || "coords" === t ? "" !== n.value : n.specified) ? n.value : a
      }, set: function (e, t, n) {
        var r = e.getAttributeNode(n);
        return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : a
      }
    }, fe.attrHooks.contenteditable = {
      get: De.get, set: function (e, t, n) {
        De.set(e, "" !== t && t, n)
      }
    }, fe.each(["width", "height"], function (e, t) {
      fe.attrHooks[t] = fe.extend(fe.attrHooks[t], {
        set: function (e, n) {
          if ("" === n)return e.setAttribute(t, "auto"), n
        }
      })
    })), fe.support.hrefNormalized || (fe.each(["href", "src", "width", "height"], function (e, t) {
      fe.attrHooks[t] = fe.extend(fe.attrHooks[t], {
        get: function (e) {
          var n = e.getAttribute(t, 2);
          return null == n ? a : n
        }
      })
    }), fe.each(["href", "src"], function (e, t) {
      fe.propHooks[t] = {
        get: function (e) {
          return e.getAttribute(t, 4)
        }
      }
    })), fe.support.style || (fe.attrHooks.style = {
      get: function (e) {
        return e.style.cssText || a
      }, set: function (e, t) {
        return e.style.cssText = t + ""
      }
    }), fe.support.optSelected || (fe.propHooks.selected = fe.extend(fe.propHooks.selected, {
      get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    })), fe.support.enctype || (fe.propFix.enctype = "encoding"), fe.support.checkOn || fe.each(["radio", "checkbox"], function () {
      fe.valHooks[this] = {
        get: function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        }
      }
    }), fe.each(["radio", "checkbox"], function () {
      fe.valHooks[this] = fe.extend(fe.valHooks[this], {
        set: function (e, t) {
          if (fe.isArray(t))return e.checked = fe.inArray(fe(e).val(), t) >= 0
        }
      })
    });
    var Pe = /^(?:input|select|textarea)$/i, Be = /^key/, qe = /^(?:mouse|contextmenu)|click/, $e = /^(?:focusinfocus|focusoutblur)$/, We = /^([^.]*)(?:\.(.+)|)$/;
    fe.event = {
      global: {},
      add: function (e, t, n, r, i) {
        var o, s, l, u, c, d, f, p, h, m, g, v = 3 !== e.nodeType && 8 !== e.nodeType && fe._data(e);
        if (v) {
          for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = fe.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (e) {
            return "undefined" == typeof fe || e && fe.event.triggered === e.type ? a : fe.event.dispatch.apply(s.elem, arguments)
          }, s.elem = e), t = (t || "").match(he) || [""], c = t.length; c--;)l = We.exec(t[c]) || [], h = g = l[1], m = (l[2] || "").split(".").sort(), f = fe.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = fe.event.special[h] || {}, d = fe.extend({
            type: h,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && fe.expr.match.needsContext.test(i),
            namespace: m.join(".")
          }, o), (p = u[h]) || (p = u[h] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, m, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), f.add && (f.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, d) : p.push(d), fe.event.global[h] = !0;
          e = null
        }
      },
      remove: function (e, t, n, r, i) {
        var o, a, s, l, u, c, d, f, p, h, m, g = fe.hasData(e) && fe._data(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(he) || [""], u = t.length; u--;)if (s = We.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
            for (d = fe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;)c = f[o], !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
            a && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || fe.removeEvent(e, p, g.handle), delete l[p])
          } else for (p in l)fe.event.remove(e, p + t[u], n, r, !0);
          fe.isEmptyObject(l) && (delete g.handle, fe._removeData(e, "events"))
        }
      },
      trigger: function (e, t, n, r) {
        var i, s, l, u, c, d, f, p = [n || V], h = e.type || e, m = e.namespace ? e.namespace.split(".") : [];
        if (s = l = n = n || V, 3 !== n.nodeType && 8 !== n.nodeType && !$e.test(h + fe.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[fe.expando] ? e : new fe.Event(h, "object" == typeof e && e), e.isTrigger = !0, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = a, e.target || (e.target = n), t = null == t ? [e] : fe.makeArray(t, [e]), f = fe.event.special[h] || {}, r || !f.trigger || f.trigger.apply(n, t) !== !1)) {
          if (!r && !f.noBubble && !fe.isWindow(n)) {
            for (u = f.delegateType || h, $e.test(u + h) || (s = s.parentNode); s; s = s.parentNode)p.push(s), l = s;
            l === (n.ownerDocument || V) && p.push(l.defaultView || l.parentWindow || o)
          }
          for (i = 0; (s = p[i++]) && !e.isPropagationStopped();)e.type = i > 1 ? u : f.bindType || h, d = (fe._data(s, "events") || {})[e.type] && fe._data(s, "handle"), d && d.apply(s, t), d = c && s[c], d && fe.acceptData(s) && d.apply && d.apply(s, t) === !1 && e.preventDefault();
          if (e.type = h, !r && !e.isDefaultPrevented() && (!f._default || f._default.apply(n.ownerDocument, t) === !1) && ("click" !== h || !fe.nodeName(n, "a")) && fe.acceptData(n) && c && n[h] && !fe.isWindow(n)) {
            l = n[c], l && (n[c] = null), fe.event.triggered = h;
            try {
              n[h]()
            } catch (g) {
            }
            fe.event.triggered = a, l && (n[c] = l)
          }
          return e.result
        }
      },
      dispatch: function (e) {
        e = fe.event.fix(e);
        var t, n, r, i, o, s = [], l = se.call(arguments), u = (fe._data(this, "events") || {})[e.type] || [], c = fe.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
          for (s = fe.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l), r !== a && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function (e, t) {
        var n, r, i, o, s = [], l = t.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (u.disabled !== !0 || "click" !== e.type) {
          for (r = [], n = 0; n < l; n++)o = t[n], i = o.selector + " ", r[i] === a && (r[i] = o.needsContext ? fe(i, this).index(u) >= 0 : fe.find(i, this, null, [u]).length), r[i] && r.push(o);
          r.length && s.push({elem: u, handlers: r})
        }
        return l < t.length && s.push({elem: this, handlers: t.slice(l)}), s
      },
      fix: function (e) {
        if (e[fe.expando])return e;
        var t, n, r = e, i = fe.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
        for (e = new fe.Event(r), t = o.length; t--;)n = o[t], e[n] = r[n];
        return e.target || (e.target = r.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n, r, i, o = t.button, s = t.fromElement;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || V, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || o === a || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
        }
      },
      special: {
        load: {noBubble: !0}, click: {
          trigger: function () {
            if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
          }
        }, focus: {
          trigger: function () {
            if (this !== V.activeElement && this.focus)try {
              return this.focus(), !1
            } catch (e) {
            }
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            if (this === V.activeElement && this.blur)return this.blur(), !1
          }, delegateType: "focusout"
        }, beforeunload: {
          postDispatch: function (e) {
            e.result !== a && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function (e, t, n, r) {
        var i = fe.extend(new fe.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? fe.event.trigger(i, null, t) : fe.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
      }
    }, fe.removeEvent = V.removeEventListener ? function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
      var r = "on" + t;
      e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, fe.Event = function (e, t) {
      return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? p : h) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = p, this.stopPropagation()
      }
    }, fe.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
      fe.event.special[e] = {
        delegateType: t, bindType: t, handle: function (e) {
          var n, r = this, i = e.relatedTarget, o = e.handleObj;
          return i && (i === r || fe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), fe.support.submitBubbles || (fe.event.special.submit = {
      setup: function () {
        return !fe.nodeName(this, "form") && void fe.event.add(this, "click._submit keypress._submit", function (e) {
            var t = e.target, n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? t.form : a;
            n && !fe._data(n, "submitBubbles") && (fe.event.add(n, "submit._submit", function (e) {
              e._submit_bubble = !0
            }), fe._data(n, "submitBubbles", !0))
          })
      }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e, !0))
      }, teardown: function () {
        return !fe.nodeName(this, "form") && void fe.event.remove(this, "._submit")
      }
    }), fe.support.changeBubbles || (fe.event.special.change = {
      setup: function () {
        return Pe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function (e) {
          "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), fe.event.add(this, "click._change", function (e) {
          this._just_changed && !e.isTrigger && (this._just_changed = !1), fe.event.simulate("change", this, e, !0)
        })), !1) : void fe.event.add(this, "beforeactivate._change", function (e) {
          var t = e.target;
          Pe.test(t.nodeName) && !fe._data(t, "changeBubbles") && (fe.event.add(t, "change._change", function (e) {
            !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e, !0)
          }), fe._data(t, "changeBubbles", !0))
        })
      }, handle: function (e) {
        var t = e.target;
        if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)return e.handleObj.handler.apply(this, arguments)
      }, teardown: function () {
        return fe.event.remove(this, "._change"), !Pe.test(this.nodeName)
      }
    }), fe.support.focusinBubbles || fe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
      var n = 0, r = function (e) {
        fe.event.simulate(t, e.target, fe.event.fix(e), !0)
      };
      fe.event.special[t] = {
        setup: function () {
          0 === n++ && V.addEventListener(e, r, !0)
        }, teardown: function () {
          0 === --n && V.removeEventListener(e, r, !0)
        }
      }
    }), fe.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          "string" != typeof t && (n = n || t, t = a);
          for (s in e)this.on(s, t, n, e[s], i);
          return this
        }
        if (null == n && null == r ? (r = t, n = t = a) : null == r && ("string" == typeof t ? (r = n, n = a) : (r = n, n = t, t = a)), r === !1)r = h; else if (!r)return this;
        return 1 === i && (o = r, r = function (e) {
          return fe().off(e), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = fe.guid++)), this.each(function () {
          fe.event.add(this, e, r, n, t)
        })
      }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
      }, off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)return r = e.handleObj, fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
          for (i in e)this.off(i, t, e[i]);
          return this
        }
        return t !== !1 && "function" != typeof t || (n = t, t = a), n === !1 && (n = h), this.each(function () {
          fe.event.remove(this, e, n, t)
        })
      }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }, trigger: function (e, t) {
        return this.each(function () {
          fe.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, t) {
        var n = this[0];
        if (n)return fe.event.trigger(e, t, n, !0)
      }, hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      fe.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }, Be.test(t) && (fe.event.fixHooks[t] = fe.event.keyHooks), qe.test(t) && (fe.event.fixHooks[t] = fe.event.mouseHooks)
    }), /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
      function (e, t) {
        function n(e) {
          return he.test(e + "")
        }

        function r() {
          var e, t = [];
          return e = function (n, r) {
            return t.push(n += " ") > E.cacheLength && delete e[t.shift()], e[n] = r
          }
        }

        function i(e) {
          return e[P] = !0, e
        }

        function o(e) {
          var t = O.createElement("div");
          try {
            return e(t)
          } catch (n) {
            return !1
          } finally {
            t = null
          }
        }

        function a(e, t, n, r) {
          var i, o, a, s, l, u, c, p, h, m;
          if ((t ? t.ownerDocument || t : B) !== O && I(t), t = t || O, n = n || [], !e || "string" != typeof e)return n;
          if (1 !== (s = t.nodeType) && 9 !== s)return [];
          if (!_ && !r) {
            if (i = me.exec(e))if (a = i[1]) {
              if (9 === s) {
                if (o = t.getElementById(a), !o || !o.parentNode)return n;
                if (o.id === a)return n.push(o), n
              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && F(t, o) && o.id === a)return n.push(o), n
            } else {
              if (i[2])return G.apply(n, V.call(t.getElementsByTagName(e), 0)), n;
              if ((a = i[3]) && q.getByClassName && t.getElementsByClassName)return G.apply(n, V.call(t.getElementsByClassName(a), 0)), n
            }
            if (q.qsa && !M.test(e)) {
              if (c = !0, p = P, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                for (u = d(e), (c = t.getAttribute("id")) ? p = c.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = u.length; l--;)u[l] = p + f(u[l]);
                h = pe.test(e) && t.parentNode || t, m = u.join(",")
              }
              if (m)try {
                return G.apply(n, V.call(h.querySelectorAll(m), 0)), n
              } catch (g) {
              } finally {
                c || t.removeAttribute("id")
              }
            }
          }
          return b(e.replace(ae, "$1"), t, n, r)
        }

        function s(e, t) {
          for (var n = e && t && e.nextSibling; n; n = n.nextSibling)if (n === t)return -1;
          return e ? 1 : -1
        }

        function l(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return "input" === n && t.type === e
          }
        }

        function u(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function c(e) {
          return i(function (t) {
            return t = +t, i(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
            })
          })
        }

        function d(e, t) {
          var n, r, i, o, s, l, u, c = U[e + " "];
          if (c)return t ? 0 : c.slice(0);
          for (s = e, l = [], u = E.preFilter; s;) {
            n && !(r = se.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = le.exec(s)) && (n = r.shift(), i.push({
              value: n,
              type: r[0].replace(ae, " ")
            }), s = s.slice(n.length));
            for (o in E.filter)!(r = de[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
              value: n,
              type: o,
              matches: r
            }), s = s.slice(n.length));
            if (!n)break
          }
          return t ? s.length : s ? a.error(e) : U(e, l).slice(0)
        }

        function f(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
          return r
        }

        function p(e, t, n) {
          var r = t.dir, i = n && "parentNode" === t.dir, o = W++;
          return t.first ? function (t, n, o) {
            for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
          } : function (t, n, a) {
            var s, l, u, c = $ + " " + o;
            if (a) {
              for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
            } else for (; t = t[r];)if (1 === t.nodeType || i)if (u = t[P] || (t[P] = {}), (l = u[r]) && l[0] === c) {
              if ((s = l[1]) === !0 || s === C)return s === !0
            } else if (l = u[r] = [c], l[1] = e(t, n, a) || C, l[1] === !0)return !0
          }
        }

        function h(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
            return !0
          } : e[0]
        }

        function m(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
          return a
        }

        function g(e, t, n, r, o, a) {
          return r && !r[P] && (r = g(r)), o && !o[P] && (o = g(o, a)), i(function (i, a, s, l) {
            var u, c, d, f = [], p = [], h = a.length, g = i || x(t || "*", s.nodeType ? [s] : s, []), v = !e || !i && t ? g : m(g, f, e, s, l), y = n ? o || (i ? e : h || r) ? [] : a : v;
            if (n && n(v, y, s, l), r)for (u = m(y, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
            if (i) {
              if (o || e) {
                if (o) {
                  for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                  o(null, y = [], u, l)
                }
                for (c = y.length; c--;)(d = y[c]) && (u = o ? Q.call(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
              }
            } else y = m(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, l) : G.apply(a, y)
          })
        }

        function v(e) {
          for (var t, n, r, i = e.length, o = E.relative[e[0].type], a = o || E.relative[" "], s = o ? 1 : 0, l = p(function (e) {
            return e === t
          }, a, !0), u = p(function (e) {
            return Q.call(t, e) > -1
          }, a, !0), c = [function (e, n, r) {
            return !o && (r || n !== D) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
          }]; s < i; s++)if (n = E.relative[e[s].type])c = [p(h(c), n)]; else {
            if (n = E.filter[e[s].type].apply(null, e[s].matches), n[P]) {
              for (r = ++s; r < i && !E.relative[e[r].type]; r++);
              return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1)).replace(ae, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e))
            }
            c.push(n)
          }
          return h(c)
        }

        function y(e, t) {
          var n = 0, r = t.length > 0, o = e.length > 0, s = function (i, s, l, u, c) {
            var d, f, p, h = [], g = 0, v = "0", y = i && [], x = null != c, b = D, w = i || o && E.find.TAG("*", c && s.parentNode || s), T = $ += null == b ? 1 : Math.E;
            for (x && (D = s !== O && s, C = n); null != (d = w[v]); v++) {
              if (o && d) {
                for (f = 0; p = e[f]; f++)if (p(d, s, l)) {
                  u.push(d);
                  break
                }
                x && ($ = T, C = ++n)
              }
              r && ((d = !p && d) && g--, i && y.push(d))
            }
            if (g += v, r && v !== g) {
              for (f = 0; p = t[f]; f++)p(y, h, s, l);
              if (i) {
                if (g > 0)for (; v--;)y[v] || h[v] || (h[v] = Y.call(u));
                h = m(h)
              }
              G.apply(u, h), x && !i && h.length > 0 && g + t.length > 1 && a.uniqueSort(u)
            }
            return x && ($ = T, D = b), y
          };
          return r ? i(s) : s
        }

        function x(e, t, n) {
          for (var r = 0, i = t.length; r < i; r++)a(e, t[r], n);
          return n
        }

        function b(e, t, n, r) {
          var i, o, a, s, l, u = d(e);
          if (!r && 1 === u.length) {
            if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !_ && E.relative[o[1].type]) {
              if (t = E.find.ID(a.matches[0].replace(be, we), t)[0], !t)return n;
              e = e.slice(o.shift().value.length)
            }
            for (i = de.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !E.relative[s = a.type]); i--)if ((l = E.find[s]) && (r = l(a.matches[0].replace(be, we), pe.test(o[0].type) && t.parentNode || t))) {
              if (o.splice(i, 1), e = r.length && f(o), !e)return G.apply(n, V.call(r, 0)), n;
              break
            }
          }
          return N(e, u)(r, t, _, n, pe.test(e)), n
        }

        function w() {
        }

        var T, C, E, k, S, N, A, D, I, O, L, _, M, j, R, F, H, P = "sizzle" + -new Date, B = e.document, q = {}, $ = 0, W = 0, z = r(), U = r(), Z = r(), X = typeof t, K = 1 << 31, J = [], Y = J.pop, G = J.push, V = J.slice, Q = J.indexOf || function (e) {
            for (var t = 0, n = this.length; t < n; t++)if (this[t] === e)return t;
            return -1
          }, ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), re = "([*^$|!~]?=)", ie = "\\[" + ee + "*(" + te + ")" + ee + "*(?:" + re + ee + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ne + ")|)|)" + ee + "*\\]", oe = ":(" + te + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ie.replace(3, 8) + ")*)|.*)\\)|)", ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), le = new RegExp("^" + ee + "*([\\x20\\t\\r\\n\\f>+~])" + ee + "*"), ue = new RegExp(oe), ce = new RegExp("^" + ne + "$"), de = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + te + ")['\"]?\\]"),
          TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ie),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /[\x20\t\r\n\f]*[+~]/, he = /\{\s*\[native code\]\s*\}/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, ye = /'|\\/g, xe = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, be = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, we = function (e, t) {
          var n = "0x" + t - 65536;
          return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
          V.call(L.childNodes, 0)[0].nodeType
        } catch (Te) {
          V = function (e) {
            for (var t, n = []; t = this[e]; e++)n.push(t);
            return n
          }
        }
        S = a.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName
        }, I = a.setDocument = function (e) {
          var r = e ? e.ownerDocument || e : B;
          return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, L = r.documentElement, _ = S(r), q.tagNameNoComments = o(function (e) {
            return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
          }), q.attributes = o(function (e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t
          }), q.getByClassName = o(function (e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
          }), q.getByName = o(function (e) {
            e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", L.insertBefore(e, L.firstChild);
            var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
            return q.getIdNotName = !r.getElementById(P), L.removeChild(e), t
          }), E.attrHandle = o(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== X && "#" === e.firstChild.getAttribute("href")
          }) ? {} : {
            href: function (e) {
              return e.getAttribute("href", 2)
            }, type: function (e) {
              return e.getAttribute("type")
            }
          }, q.getIdNotName ? (E.find.ID = function (e, t) {
            if (typeof t.getElementById !== X && !_) {
              var n = t.getElementById(e);
              return n && n.parentNode ? [n] : []
            }
          }, E.filter.ID = function (e) {
            var t = e.replace(be, we);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }) : (E.find.ID = function (e, n) {
            if (typeof n.getElementById !== X && !_) {
              var r = n.getElementById(e);
              return r ? r.id === e || typeof r.getAttributeNode !== X && r.getAttributeNode("id").value === e ? [r] : t : []
            }
          }, E.filter.ID = function (e) {
            var t = e.replace(be, we);
            return function (e) {
              var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
              return n && n.value === t
            }
          }), E.find.TAG = q.tagNameNoComments ? function (e, t) {
            if (typeof t.getElementsByTagName !== X)return t.getElementsByTagName(e)
          } : function (e, t) {
            var n, r = [], i = 0, o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[i]; i++)1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, E.find.NAME = q.getByName && function (e, t) {
              if (typeof t.getElementsByName !== X)return t.getElementsByName(name)
            }, E.find.CLASS = q.getByClassName && function (e, t) {
              if (typeof t.getElementsByClassName !== X && !_)return t.getElementsByClassName(e)
            }, j = [], M = [":focus"], (q.qsa = n(r.querySelectorAll)) && (o(function (e) {
            e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
          }), o(function (e) {
            e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + ee + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
          })), (q.matchesSelector = n(R = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function (e) {
            q.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), j.push("!=", oe)
          }), M = new RegExp(M.join("|")), j = new RegExp(j.join("|")), F = n(L.contains) || L.compareDocumentPosition ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function (e, t) {
            if (t)for (; t = t.parentNode;)if (t === e)return !0;
            return !1
          }, H = L.compareDocumentPosition ? function (e, t) {
            var n;
            return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || F(B, e) ? -1 : t === r || F(B, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
          } : function (e, t) {
            var n, i = 0, o = e.parentNode, a = t.parentNode, l = [e], u = [t];
            if (e === t)return A = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return (~t.sourceIndex || K) - (F(B, e) && ~e.sourceIndex || K);
            if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
            if (o === a)return s(e, t);
            for (n = e; n = n.parentNode;)l.unshift(n);
            for (n = t; n = n.parentNode;)u.unshift(n);
            for (; l[i] === u[i];)i++;
            return i ? s(l[i], u[i]) : l[i] === B ? -1 : u[i] === B ? 1 : 0
          }, A = !1, [0, 0].sort(H), q.detectDuplicates = A, O) : O
        }, a.matches = function (e, t) {
          return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== O && I(e), t = t.replace(xe, "='$1']"), q.matchesSelector && !_ && (!j || !j.test(t)) && !M.test(t))try {
            var n = R.call(e, t);
            if (n || q.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
          } catch (r) {
          }
          return a(t, O, null, [e]).length > 0
        }, a.contains = function (e, t) {
          return (e.ownerDocument || e) !== O && I(e), F(e, t)
        }, a.attr = function (e, t) {
          var n;
          return (e.ownerDocument || e) !== O && I(e), _ || (t = t.toLowerCase()), (n = E.attrHandle[t]) ? n(e) : _ || q.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
          var t, n = [], r = 1, i = 0;
          if (A = !q.detectDuplicates, e.sort(H), A) {
            for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
            for (; i--;)e.splice(n[i], 1)
          }
          return e
        }, k = a.getText = function (e) {
          var t, n = "", r = 0, i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent)return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
            } else if (3 === i || 4 === i)return e.nodeValue
          } else for (; t = e[r]; r++)n += k(t);
          return n
        }, E = a.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: de,
          find: {},
          relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(be, we), e[3] = (e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
            }, PSEUDO: function (e) {
              var t, n = !e[5] && e[2];
              return de.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ue.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              return "*" === e ? function () {
                return !0
              } : (e = e.replace(be, we).toLowerCase(), function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
              })
            }, CLASS: function (e) {
              var t = z[e + " "];
              return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && z(e, function (e) {
                  return t.test(e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                })
            }, ATTR: function (e, t, n) {
              return function (r) {
                var i = a.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.substr(0, n.length + 1) === n + "-"))
              }
            }, CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode
              } : function (t, n, l) {
                var u, c, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                if (g) {
                  if (o) {
                    for (; m;) {
                      for (d = t; d = d[m];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                      h = m = "only" === e && !h && "nextSibling"
                    }
                    return !0
                  }
                  if (h = [a ? g.firstChild : g.lastChild], a && y) {
                    for (c = g[P] || (g[P] = {}), u = c[e] || [], p = u[0] === $ && u[1], f = u[0] === $ && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)if (1 === d.nodeType && ++f && d === t) {
                      c[e] = [$, p, f];
                      break
                    }
                  } else if (y && (u = (t[P] || (t[P] = {}))[e]) && u[0] === $)f = u[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[P] || (d[P] = {}))[e] = [$, f]), d !== t)););
                  return f -= i, f === r || f % r === 0 && f / r >= 0
                }
              }
            }, PSEUDO: function (e, t) {
              var n, r = E.pseudos[e] || E.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
              return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                for (var i, o = r(e, t), a = o.length; a--;)i = Q.call(e, o[a]), e[i] = !(n[i] = o[a])
              }) : function (e) {
                return r(e, 0, n)
              }) : r
            }
          },
          pseudos: {
            not: i(function (e) {
              var t = [], n = [], r = N(e.replace(ae, "$1"));
              return r[P] ? i(function (e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
              }
            }), has: i(function (e) {
              return function (t) {
                return a(e, t).length > 0
              }
            }), contains: i(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
              }
            }), lang: i(function (e) {
              return ce.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(), function (t) {
                var n;
                do if (n = _ ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
            }), target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            }, root: function (e) {
              return e === L
            }, focus: function (e) {
              return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
              return e.disabled === !1
            }, disabled: function (e) {
              return e.disabled === !0
            }, checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
              return !0
            }, parent: function (e) {
              return !E.pseudos.empty(e)
            }, header: function (e) {
              return ve.test(e.nodeName)
            }, input: function (e) {
              return ge.test(e.nodeName)
            }, button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
            }, first: c(function () {
              return [0]
            }), last: c(function (e, t) {
              return [t - 1]
            }), eq: c(function (e, t, n) {
              return [n < 0 ? n + t : n]
            }), even: c(function (e, t) {
              for (var n = 0; n < t; n += 2)e.push(n);
              return e
            }), odd: c(function (e, t) {
              for (var n = 1; n < t; n += 2)e.push(n);
              return e
            }), lt: c(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
              return e
            }), gt: c(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
              return e
            })
          }
        };
        for (T in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})E.pseudos[T] = l(T);
        for (T in{submit: !0, reset: !0})E.pseudos[T] = u(T);
        N = a.compile = function (e, t) {
          var n, r = [], i = [], o = Z[e + " "];
          if (!o) {
            for (t || (t = d(e)), n = t.length; n--;)o = v(t[n]), o[P] ? r.push(o) : i.push(o);
            o = Z(e, y(i, r))
          }
          return o
        }, E.pseudos.nth = E.pseudos.eq, E.filters = w.prototype = E.pseudos, E.setFilters = new w, I(), a.attr = fe.attr, fe.find = a, fe.expr = a.selectors, fe.expr[":"] = fe.expr.pseudos, fe.unique = a.uniqueSort, fe.text = a.getText, fe.isXMLDoc = a.isXML, fe.contains = a.contains
      }(o);
    var ze = /Until$/, Ue = /^(?:parents|prev(?:Until|All))/, Ze = /^.[^:#\[\.,]*$/, Xe = fe.expr.match.needsContext, Ke = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    fe.fn.extend({
      find: function (e) {
        var t, n, r;
        if ("string" != typeof e)return r = this, this.pushStack(fe(e).filter(function () {
          for (t = 0; t < r.length; t++)if (fe.contains(r[t], this))return !0
        }));
        for (n = [], t = 0; t < this.length; t++)fe.find(e, this[t], n);
        return n = this.pushStack(fe.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
      }, has: function (e) {
        var t, n = fe(e, this), r = n.length;
        return this.filter(function () {
          for (t = 0; t < r; t++)if (fe.contains(this, n[t]))return !0
        })
      }, not: function (e) {
        return this.pushStack(g(this, e, !1))
      }, filter: function (e) {
        return this.pushStack(g(this, e, !0))
      }, is: function (e) {
        return !!e && ("string" == typeof e ? Xe.test(e) ? fe(e, this.context).index(this[0]) >= 0 : fe.filter(e, this).length > 0 : this.filter(e).length > 0)
      }, closest: function (e, t) {
        for (var n, r = 0, i = this.length, o = [], a = Xe.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
          if (a ? a.index(n) > -1 : fe.find.matchesSelector(n, e)) {
            o.push(n);
            break
          }
          n = n.parentNode
        }
        return this.pushStack(o.length > 1 ? fe.unique(o) : o)
      }, index: function (e) {
        return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        var n = "string" == typeof e ? fe(e, t) : fe.makeArray(e && e.nodeType ? [e] : e), r = fe.merge(this.get(), n);
        return this.pushStack(fe.unique(r))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), fe.fn.andSelf = fe.fn.addBack, fe.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return fe.dir(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return fe.dir(e, "parentNode", n)
      }, next: function (e) {
        return m(e, "nextSibling")
      }, prev: function (e) {
        return m(e, "previousSibling")
      }, nextAll: function (e) {
        return fe.dir(e, "nextSibling")
      }, prevAll: function (e) {
        return fe.dir(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return fe.dir(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return fe.dir(e, "previousSibling", n)
      }, siblings: function (e) {
        return fe.sibling((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return fe.sibling(e.firstChild)
      }, contents: function (e) {
        return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
      }
    }, function (e, t) {
      fe.fn[e] = function (n, r) {
        var i = fe.map(this, t, n);
        return ze.test(e) || (r = n), r && "string" == typeof r && (i = fe.filter(r, i)), i = this.length > 1 && !Ke[e] ? fe.unique(i) : i, this.length > 1 && Ue.test(e) && (i = i.reverse()), this.pushStack(i)
      }
    }), fe.extend({
      filter: function (e, t, n) {
        return n && (e = ":not(" + e + ")"), 1 === t.length ? fe.find.matchesSelector(t[0], e) ? [t[0]] : [] : fe.find.matches(e, t)
      }, dir: function (e, t, n) {
        for (var r = [], i = e[t]; i && 9 !== i.nodeType && (n === a || 1 !== i.nodeType || !fe(i).is(n));)1 === i.nodeType && r.push(i), i = i[t];
        return r
      }, sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
      }
    });
    var Je = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ye = / jQuery\d+="(?:null|\d+)"/g, Ge = new RegExp("<(?:" + Je + ")[\\s/>]", "i"), Ve = /^\s+/, Qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, et = /<([\w:]+)/, tt = /<tbody/i, nt = /<|&#?\w+;/, rt = /<(?:script|style|link)/i, it = /^(?:checkbox|radio)$/i, ot = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, st = /^true\/(.*)/, lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ut = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: fe.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, ct = v(V), dt = ct.appendChild(V.createElement("div"));
    ut.optgroup = ut.option, ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td, fe.fn.extend({
      text: function (e) {
        return fe.access(this, function (e) {
          return e === a ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
        }, null, e, arguments.length)
      }, wrapAll: function (e) {
        if (fe.isFunction(e))return this.each(function (t) {
          fe(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
          var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      }, wrapInner: function (e) {
        return fe.isFunction(e) ? this.each(function (t) {
          fe(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
          var t = fe(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      }, wrap: function (e) {
        var t = fe.isFunction(e);
        return this.each(function (n) {
          fe(this).wrapAll(t ? e.call(this, n) : e)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
        }).end()
      }, append: function () {
        return this.domManip(arguments, !0, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
        })
      }, prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
        })
      }, before: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, remove: function (e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)(!e || fe.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || fe.cleanData(E(n)), n.parentNode && (t && fe.contains(n.ownerDocument, n) && w(E(n, "script")), n.parentNode.removeChild(n)));
        return this
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && fe.cleanData(E(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
          e.options && fe.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return fe.clone(this, e, t)
        })
      }, html: function (e) {
        return fe.access(this, function (e) {
          var t = this[0] || {}, n = 0, r = this.length;
          if (e === a)return 1 === t.nodeType ? t.innerHTML.replace(Ye, "") : a;
          if ("string" == typeof e && !rt.test(e) && (fe.support.htmlSerialize || !Ge.test(e)) && (fe.support.leadingWhitespace || !Ve.test(e)) && !ut[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = e.replace(Qe, "<$1></$2>");
            try {
              for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(E(t, !1)), t.innerHTML = e);
              t = 0
            } catch (i) {
            }
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function (e) {
        var t = fe.isFunction(e);
        return t || "string" == typeof e || (e = fe(e).not(this).detach()), this.domManip([e], !0, function (e) {
          var t = this.nextSibling, n = this.parentNode;
          (n && 1 === this.nodeType || 11 === this.nodeType) && (fe(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
        })
      }, detach: function (e) {
        return this.remove(e, !0)
      }, domManip: function (e, t, n) {
        e = oe.apply([], e);
        var r, i, o, s, l, u, c = 0, d = this.length, f = this, p = d - 1, h = e[0], m = fe.isFunction(h);
        if (m || !(d <= 1 || "string" != typeof h || fe.support.checkClone) && ot.test(h))return this.each(function (r) {
          var i = f.eq(r);
          m && (e[0] = h.call(this, r, t ? i.html() : a)), i.domManip(e, t, n)
        });
        if (d && (r = fe.buildFragment(e, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
          for (t = t && fe.nodeName(i, "tr"), o = fe.map(E(r, "script"), x), s = o.length; c < d; c++)l = r, c !== p && (l = fe.clone(l, !0, !0), s && fe.merge(o, E(l, "script"))), n.call(t && fe.nodeName(this[c], "table") ? y(this[c], "tbody") : this[c], l, c);
          if (s)for (u = o[o.length - 1].ownerDocument, fe.map(o, b), c = 0; c < s; c++)l = o[c], at.test(l.type || "") && !fe._data(l, "globalEval") && fe.contains(u, l) && (l.src ? fe.ajax({
            url: l.src,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
          }) : fe.globalEval((l.text || l.textContent || l.innerHTML || "").replace(lt, "")));
          r = i = null
        }
        return this
      }
    }), fe.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      fe.fn[e] = function (e) {
        for (var n, r = 0, i = [], o = fe(e), a = o.length - 1; r <= a; r++)n = r === a ? this : this.clone(!0), fe(o[r])[t](n), ae.apply(i, n.get());
        return this.pushStack(i)
      }
    }), fe.extend({
      clone: function (e, t, n) {
        var r, i, o, a, s, l = fe.contains(e.ownerDocument, e);
        if (fe.support.html5Clone || fe.isXMLDoc(e) || !Ge.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(s = dt.firstChild)), !(fe.support.noCloneEvent && fe.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))for (r = E(s), i = E(e), a = 0; null != (o = i[a]); ++a)r[a] && C(o, r[a]);
        if (t)if (n)for (i = i || E(e), r = r || E(s), a = 0; null != (o = i[a]); a++)T(o, r[a]); else T(e, s);
        return r = E(s, "script"), r.length > 0 && w(r, !l && E(e, "script")), r = i = o = null, s
      }, buildFragment: function (e, t, n, r) {
        for (var i, o, a, s, l, u, c, d = e.length, f = v(t), p = [], h = 0; h < d; h++)if (o = e[h], o || 0 === o)if ("object" === fe.type(o))fe.merge(p, o.nodeType ? [o] : o); else if (nt.test(o)) {
          for (s = s || f.appendChild(t.createElement("div")), a = (et.exec(o) || ["", ""])[1].toLowerCase(), l = ut[a] || ut._default, s.innerHTML = l[1] + o.replace(Qe, "<$1></$2>") + l[2], c = l[0]; c--;)s = s.lastChild;
          if (!fe.support.leadingWhitespace && Ve.test(o) && p.push(t.createTextNode(Ve.exec(o)[0])), !fe.support.tbody)for (o = "table" !== a || tt.test(o) ? "<table>" !== l[1] || tt.test(o) ? 0 : s : s.firstChild, c = o && o.childNodes.length; c--;)fe.nodeName(u = o.childNodes[c], "tbody") && !u.childNodes.length && o.removeChild(u);
          for (fe.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
          s = f.lastChild
        } else p.push(t.createTextNode(o));
        for (s && f.removeChild(s), fe.support.appendChecked || fe.grep(E(p, "input"), k), h = 0; o = p[h++];)if ((!r || fe.inArray(o, r) === -1) && (i = fe.contains(o.ownerDocument, o), s = E(f.appendChild(o), "script"), i && w(s), n))for (c = 0; o = s[c++];)at.test(o.type || "") && n.push(o);
        return s = null, f
      }, cleanData: function (e, t) {
        for (var n, r, i, o, a = 0, s = fe.expando, l = fe.cache, u = fe.support.deleteExpando, c = fe.event.special; null != (i = e[a]); a++)if ((t || fe.acceptData(i)) && (r = i[s], n = r && l[r])) {
          if (n.events)for (o in n.events)c[o] ? fe.event.remove(i, o) : fe.removeEvent(i, o, n.handle);
          l[r] && (delete l[r], u ? delete i[s] : "undefined" != typeof i.removeAttribute ? i.removeAttribute(s) : i[s] = null, re.push(r))
        }
      }
    });
    var ft, pt, ht, mt = /alpha\([^)]*\)/i, gt = /opacity\s*=\s*([^)]*)/, vt = /^(top|right|bottom|left)$/, yt = /^(none|table(?!-c[ea]).+)/, xt = /^margin/, bt = new RegExp("^(" + pe + ")(.*)$", "i"), wt = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Tt = new RegExp("^([+-])=(" + pe + ")", "i"), Ct = {BODY: "block"}, Et = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    }, kt = {
      letterSpacing: 0,
      fontWeight: 400
    }, St = ["Top", "Right", "Bottom", "Left"], Nt = ["Webkit", "O", "Moz", "ms"];
    fe.fn.extend({
      css: function (e, t) {
        return fe.access(this, function (e, t, n) {
          var r, i, o = {}, s = 0;
          if (fe.isArray(t)) {
            for (r = pt(e), i = t.length; s < i; s++)o[t[s]] = fe.css(e, t[s], !1, r);
            return o
          }
          return n !== a ? fe.style(e, t, n) : fe.css(e, t)
        }, e, t, arguments.length > 1)
      }, show: function () {
        return A(this, !0)
      }, hide: function () {
        return A(this)
      }, toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
          (t ? e : N(this)) ? fe(this).show() : fe(this).hide()
        })
      }
    }), fe.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = ft(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": fe.support.cssFloat ? "cssFloat" : "styleFloat"},
      style: function (e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, o, s, l = fe.camelCase(t), u = e.style;
          if (t = fe.cssProps[l] || (fe.cssProps[l] = S(u, l)), s = fe.cssHooks[t] || fe.cssHooks[l], n === a)return s && "get" in s && (i = s.get(e, !1, r)) !== a ? i : u[t];
          if (o = typeof n, "string" === o && (i = Tt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(fe.css(e, t)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || fe.cssNumber[l] || (n += "px"), fe.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === a)))try {
            u[t] = n
          } catch (c) {
          }
        }
      },
      css: function (e, t, n, r) {
        var i, o, s, l = fe.camelCase(t);
        return t = fe.cssProps[l] || (fe.cssProps[l] = S(e.style, l)), s = fe.cssHooks[t] || fe.cssHooks[l], s && "get" in s && (i = s.get(e, !0, n)), i === a && (i = ft(e, t, r)), "normal" === i && t in kt && (i = kt[t]), n ? (o = parseFloat(i), n === !0 || fe.isNumeric(o) ? o || 0 : i) : i
      },
      swap: function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
      }
    }), o.getComputedStyle ? (pt = function (e) {
      return o.getComputedStyle(e, null)
    }, ft = function (e, t, n) {
      var r, i, o, s = n || pt(e), l = s ? s.getPropertyValue(t) || s[t] : a, u = e.style;
      return s && ("" !== l || fe.contains(e.ownerDocument, e) || (l = fe.style(e, t)), wt.test(l) && xt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), l
    }) : V.documentElement.currentStyle && (pt = function (e) {
      return e.currentStyle
    }, ft = function (e, t, n) {
      var r, i, o, s = n || pt(e), l = s ? s[t] : a, u = e.style;
      return null == l && u && u[t] && (l = u[t]), wt.test(l) && !vt.test(t) && (r = u.left, i = e.runtimeStyle, o = i && i.left, o && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : l, l = u.pixelLeft + "px", u.left = r, o && (i.left = o)), "" === l ? "auto" : l
    }), fe.each(["height", "width"], function (e, t) {
      fe.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)return 0 === e.offsetWidth && yt.test(fe.css(e, "display")) ? fe.swap(e, Et, function () {
            return O(e, t, r)
          }) : O(e, t, r)
        }, set: function (e, n, r) {
          var i = r && pt(e);
          return D(e, n, r ? I(e, t, r, fe.support.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
        }
      }
    }), fe.support.opacity || (fe.cssHooks.opacity = {
      get: function (e, t) {
        return gt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      }, set: function (e, t) {
        var n = e.style, r = e.currentStyle, i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(o.replace(mt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = mt.test(o) ? o.replace(mt, i) : o + " " + i)
      }
    }), fe(function () {
      fe.support.reliableMarginRight || (fe.cssHooks.marginRight = {
        get: function (e, t) {
          if (t)return fe.swap(e, {display: "inline-block"}, ft, [e, "marginRight"])
        }
      }), !fe.support.pixelPosition && fe.fn.position && fe.each(["top", "left"], function (e, t) {
        fe.cssHooks[t] = {
          get: function (e, n) {
            if (n)return n = ft(e, t), wt.test(n) ? fe(e).position()[t] + "px" : n
          }
        }
      })
    }), fe.expr && fe.expr.filters && (fe.expr.filters.hidden = function (e) {
      return 0 === e.offsetWidth && 0 === e.offsetHeight || !fe.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || fe.css(e, "display"))
    }, fe.expr.filters.visible = function (e) {
      return !fe.expr.filters.hidden(e)
    }), fe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
      fe.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
          return i
        }
      }, xt.test(e) || (fe.cssHooks[e + t].set = D)
    });
    var At = /%20/g, Dt = /\[\]$/, It = /\r?\n/g, Ot = /^(?:submit|button|image|reset)$/i, Lt = /^(?:input|select|textarea|keygen)/i;
    fe.fn.extend({
      serialize: function () {
        return fe.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = fe.prop(this, "elements");
          return e ? fe.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !fe(this).is(":disabled") && Lt.test(this.nodeName) && !Ot.test(e) && (this.checked || !it.test(e))
        }).map(function (e, t) {
          var n = fe(this).val();
          return null == n ? null : fe.isArray(n) ? fe.map(n, function (e) {
            return {name: t.name, value: e.replace(It, "\r\n")}
          }) : {name: t.name, value: n.replace(It, "\r\n")}
        }).get()
      }
    }), fe.param = function (e, t) {
      var n, r = [], i = function (e, t) {
        t = fe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (t === a && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e))fe.each(e, function () {
        i(this.name, this.value)
      }); else for (n in e)M(n, e[n], t, i);
      return r.join("&").replace(At, "+")
    };
    var _t, Mt, jt = fe.now(), Rt = /\?/, Ft = /#.*$/, Ht = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qt = /^(?:GET|HEAD)$/, $t = /^\/\//, Wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, zt = fe.fn.load, Ut = {}, Zt = {}, Xt = "*/".concat("*");
    try {
      Mt = Q.href
    } catch (Kt) {
      Mt = V.createElement("a"), Mt.href = "", Mt = Mt.href
    }
    _t = Wt.exec(Mt.toLowerCase()) || [], fe.fn.load = function (e, t, n) {
      if ("string" != typeof e && zt)return zt.apply(this, arguments);
      var r, i, o, s = this, l = e.indexOf(" ");
      return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), fe.isFunction(t) ? (n = t, t = a) : t && "object" == typeof t && (i = "POST"), s.length > 0 && fe.ajax({
        url: e,
        type: i,
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, s.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
      }).complete(n && function (e, t) {
          s.each(n, o || [e.responseText, t, e])
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      fe.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), fe.each(["get", "post"], function (e, t) {
      fe[t] = function (e, n, r, i) {
        return fe.isFunction(n) && (i = i || r, r = n, n = a), fe.ajax({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: r
        })
      }
    }), fe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Mt,
        type: "GET",
        isLocal: Bt.test(_t[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Xt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /xml/, html: /html/, json: /json/},
        responseFields: {xml: "responseXML", text: "responseText"},
        converters: {"* text": o.String, "text html": !0, "text json": fe.parseJSON, "text xml": fe.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? F(F(e, fe.ajaxSettings), t) : F(fe.ajaxSettings, e)
      },
      ajaxPrefilter: j(Ut),
      ajaxTransport: j(Zt),
      ajax: function (e, t) {
        function n(e, t, n, s) {
          var u, d, y, x, w, C = t;
          2 !== b && (b = 2, l && clearTimeout(l), r = a, o = s || "", T.readyState = e > 0 ? 4 : 0, n && (x = H(f, T, n)), e >= 200 && e < 300 || 304 === e ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (fe.lastModified[i] = w), w = T.getResponseHeader("etag"), w && (fe.etag[i] = w)), 304 === e ? (u = !0, C = "notmodified") : (u = P(f, x), C = u.state, d = u.data, y = u.error, u = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", u ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = a, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [T, f, u ? d : y]), g.fireWith(p, [T, C]), c && (h.trigger("ajaxComplete", [T, f]), --fe.active || fe.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (t = e, e = a), t = t || {};
        var r, i, o, s, l, u, c, d, f = fe.ajaxSetup({}, t), p = f.context || f, h = f.context && (p.nodeType || p.jquery) ? fe(p) : fe.event, m = fe.Deferred(), g = fe.Callbacks("once memory"), v = f.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!s)for (s = {}; t = Pt.exec(o);)s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function () {
            return 2 === b ? o : null
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = x[n] = x[n] || e, y[e] = t), this
          },
          overrideMimeType: function (e) {
            return b || (f.mimeType = e), this
          },
          statusCode: function (e) {
            var t;
            if (e)if (b < 2)for (t in e)v[t] = [v[t], e[t]]; else T.always(e[T.status]);
            return this
          },
          abort: function (e) {
            var t = e || w;
            return r && r.abort(t), n(0, t), this
          }
        };
        if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || Mt) + "").replace(Ft, "").replace($t, _t[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = fe.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (u = Wt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === _t[1] && u[2] === _t[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (_t[3] || ("http:" === _t[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = fe.param(f.data, f.traditional)), R(Ut, f, t, T), 2 === b)return T;
        c = f.global, c && 0 === fe.active++ && fe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !qt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (Rt.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ht.test(i) ? i.replace(Ht, "$1_=" + jt++) : i + (Rt.test(i) ? "&" : "?") + "_=" + jt++)), f.ifModified && (fe.lastModified[i] && T.setRequestHeader("If-Modified-Since", fe.lastModified[i]), fe.etag[i] && T.setRequestHeader("If-None-Match", fe.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : f.accepts["*"]);
        for (d in f.headers)T.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === b))return T.abort();
        w = "abort";
        for (d in{success: 1, error: 1, complete: 1})T[d](f[d]);
        if (r = R(Zt, f, t, T)) {
          T.readyState = 1, c && h.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
            T.abort("timeout")
          }, f.timeout));
          try {
            b = 1, r.send(y, n)
          } catch (C) {
            if (!(b < 2))throw C;
            n(-1, C)
          }
        } else n(-1, "No Transport");
        return T
      },
      getScript: function (e, t) {
        return fe.get(e, a, t, "script")
      },
      getJSON: function (e, t, n) {
        return fe.get(e, t, n, "json")
      }
    }), fe.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /(?:java|ecma)script/},
      converters: {
        "text script": function (e) {
          return fe.globalEval(e), e
        }
      }
    }), fe.ajaxPrefilter("script", function (e) {
      e.cache === a && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n = V.head || fe("head")[0] || V.documentElement;
        return {
          send: function (r, i) {
            t = V.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
              (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
            }, n.insertBefore(t, n.firstChild)
          }, abort: function () {
            t && t.onload(a, !0)
          }
        }
      }
    });
    var Jt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = Jt.pop() || fe.expando + "_" + jt++;
        return this[e] = !0, e
      }
    }), fe.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r, i, s, l = e.jsonp !== !1 && (Yt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
      if (l || "jsonp" === e.dataTypes[0])return r = e.jsonpCallback = fe.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Yt, "$1" + r) : e.jsonp !== !1 && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return s || fe.error(r + " was not called"), s[0]
      }, e.dataTypes[0] = "json", i = o[r], o[r] = function () {
        s = arguments
      }, n.always(function () {
        o[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Jt.push(r)), s && fe.isFunction(i) && i(s[0]), s = i = a
      }), "script"
    });
    var Gt, Vt, Qt = 0, en = o.ActiveXObject && function () {
        var e;
        for (e in Gt)Gt[e](a, !0)
      };
    fe.ajaxSettings.xhr = o.ActiveXObject ? function () {
      return !this.isLocal && B() || q()
    } : B, Vt = fe.ajaxSettings.xhr(), fe.support.cors = !!Vt && "withCredentials" in Vt, Vt = fe.support.ajax = !!Vt, Vt && fe.ajaxTransport(function (e) {
      if (!e.crossDomain || fe.support.cors) {
        var t;
        return {
          send: function (n, r) {
            var i, s, l = e.xhr();
            if (e.username ? l.open(e.type, e.url, e.async, e.username, e.password) : l.open(e.type, e.url, e.async), e.xhrFields)for (s in e.xhrFields)l[s] = e.xhrFields[s];
            e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (s in n)l.setRequestHeader(s, n[s])
            } catch (u) {
            }
            l.send(e.hasContent && e.data || null), t = function (n, o) {
              var s, u, c, d, f;
              try {
                if (t && (o || 4 === l.readyState))if (t = a, i && (l.onreadystatechange = fe.noop, en && delete Gt[i]), o)4 !== l.readyState && l.abort(); else {
                  d = {}, s = l.status, f = l.responseXML, c = l.getAllResponseHeaders(), f && f.documentElement && (d.xml = f), "string" == typeof l.responseText && (d.text = l.responseText);
                  try {
                    u = l.statusText
                  } catch (p) {
                    u = ""
                  }
                  s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                }
              } catch (h) {
                o || r(-1, h)
              }
              d && r(s, u, d, c)
            }, e.async ? 4 === l.readyState ? setTimeout(t) : (i = ++Qt, en && (Gt || (Gt = {}, fe(o).unload(en)), Gt[i] = t), l.onreadystatechange = t) : t()
          }, abort: function () {
            t && t(a, !0)
          }
        }
      }
    });
    var tn, nn, rn = /^(?:toggle|show|hide)$/, on = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), an = /queueHooks$/, sn = [Z], ln = {
      "*": [function (e, t) {
        var n, r, i = this.createTween(e, t), o = on.exec(t), a = i.cur(), s = +a || 0, l = 1, u = 20;
        if (o) {
          if (n = +o[2], r = o[3] || (fe.cssNumber[e] ? "" : "px"), "px" !== r && s) {
            s = fe.css(i.elem, e, !0) || n || 1;
            do l = l || ".5", s /= l, fe.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --u)
          }
          i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
        }
        return i
      }]
    };
    fe.Animation = fe.extend(z, {
      tweener: function (e, t) {
        fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, r = 0, i = e.length; r < i; r++)n = e[r], ln[n] = ln[n] || [], ln[n].unshift(t)
      }, prefilter: function (e, t) {
        t ? sn.unshift(e) : sn.push(e)
      }
    }), fe.Tween = X, X.prototype = {
      constructor: X, init: function (e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (fe.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = X.propHooks[this.prop];
        return e && e.get ? e.get(this) : X.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = X.propHooks[this.prop];
        return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : X.propHooks._default.set(this), this
      }
    }, X.prototype.init.prototype = X.prototype, X.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = fe.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
        }, set: function (e) {
          fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[fe.cssProps[e.prop]] || fe.cssHooks[e.prop]) ? fe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
        }
      }
    }, X.propHooks.scrollTop = X.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, fe.each(["toggle", "show", "hide"], function (e, t) {
      var n = fe.fn[t];
      fe.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(K(t, !0), e, r, i)
      }
    }), fe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(N).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
      }, animate: function (e, t, n, r) {
        var i = fe.isEmptyObject(e), o = fe.speed(t, n, r), a = function () {
          var t = z(this, fe.extend({}, e), o);
          a.finish = function () {
            t.stop(!0)
          }, (i || fe._data(this, "finish")) && t.stop(!0)
        };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
      }, stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = a), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
          var t = !0, i = null != e && e + "queueHooks", o = fe.timers, a = fe._data(this);
          if (i)a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && an.test(i) && r(a[i]);
          for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
          !t && n || fe.dequeue(this, e)
        })
      }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
          var t, n = fe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, a = r ? r.length : 0;
          for (n.finish = !0, fe.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
          for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
          delete n.finish
        })
      }
    }), fe.each({
      slideDown: K("show"),
      slideUp: K("hide"),
      slideToggle: K("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
      fe.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r)
      }
    }), fe.speed = function (e, t, n) {
      var r = e && "object" == typeof e ? fe.extend({}, e) : {
        complete: n || !n && t || fe.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !fe.isFunction(t) && t
      };
      return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        fe.isFunction(r.old) && r.old.call(this), r.queue && fe.dequeue(this, r.queue)
      }, r
    }, fe.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }
    }, fe.timers = [], fe.fx = X.prototype.init, fe.fx.tick = function () {
      var e, t = fe.timers, n = 0;
      for (tn = fe.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
      t.length || fe.fx.stop(), tn = a
    }, fe.fx.timer = function (e) {
      e() && fe.timers.push(e) && fe.fx.start()
    }, fe.fx.interval = 13, fe.fx.start = function () {
      nn || (nn = setInterval(fe.fx.tick, fe.fx.interval))
    }, fe.fx.stop = function () {
      clearInterval(nn), nn = null
    }, fe.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, fe.fx.step = {}, fe.expr && fe.expr.filters && (fe.expr.filters.animated = function (e) {
      return fe.grep(fe.timers, function (t) {
        return e === t.elem
      }).length
    }), fe.fn.offset = function (e) {
      if (arguments.length)return e === a ? this : this.each(function (t) {
        fe.offset.setOffset(this, e, t)
      });
      var t, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
      if (o)return t = o.documentElement, fe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = J(o), {
        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : r
    }, fe.offset = {
      setOffset: function (e, t, n) {
        var r = fe.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i, o, a = fe(e), s = a.offset(), l = fe.css(e, "top"), u = fe.css(e, "left"), c = ("absolute" === r || "fixed" === r) && fe.inArray("auto", [l, u]) > -1, d = {}, f = {};
        c ? (f = a.position(), i = f.top, o = f.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), fe.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : a.css(d)
      }
    }, fe.fn.extend({
      position: function () {
        if (this[0]) {
          var e, t, n = {top: 0, left: 0}, r = this[0];
          return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - n.top - fe.css(r, "marginTop", !0),
            left: t.left - n.left - fe.css(r, "marginLeft", !0)
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent || V.documentElement; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");)e = e.offsetParent;
          return e || V.documentElement
        })
      }
    }), fe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
      var n = /Y/.test(t);
      fe.fn[e] = function (r) {
        return fe.access(this, function (e, r, i) {
          var o = J(e);
          return i === a ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void(o ? o.scrollTo(n ? fe(o).scrollLeft() : i, n ? i : fe(o).scrollTop()) : e[r] = i)
        }, e, r, arguments.length, null)
      }
    }), fe.each({Height: "height", Width: "width"}, function (e, t) {
      fe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
        fe.fn[r] = function (r, i) {
          var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
          return fe.access(this, function (t, n, r) {
            var i;
            return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === a ? fe.css(t, n, s) : fe.style(t, n, r, s)
          }, t, o ? r : a, o, null)
        }
      })
    }), o.jQuery = o.$ = fe, n(1) && n(1).jQuery && (r = [], i = function () {
      return fe
    }.apply(t, r), !(i !== a && (e.exports = i)))
  }(window)
}, function (e, t) {
  $.fn.lazyload = function (e) {
    return this.each(function () {
      e = e || {};
      var t = {}, n = $.extend({}, t, e), r = $(this), i = this, o = e.srcSign || "lazy-src", a = e.errCallBack || function () {
        }, s = e.container || $(window), l = function (e, t) {
      }, u = function (e, t, n, r) {
        if (!t[0].src || !(t[0].src.indexOf("img-err.png") > 0 || t[0].src.indexOf("img-err2.png") > 0)) {
          t.width(), t.height();
          n()
        }
      }, c = function (e) {
        e.width(), e.height(), e.offset().top, e.offset().left, e.clone().addClass("lazy-loding").insertBefore(e);
        e.hide()
      }, d = function (t, n, r) {
        if (!t.attr("src"))if (1 == e.cache) {
          console.log(t);
          var i, o = document.getElementById("canvas1"), a = o.getContext("2d");
          image = new Image, image.src = t.attr(n), image.onload = function () {
            a.drawImage(image, 0, 0), i = a.getImageData(0, 0, 500, 250), console.log(i)
          }
        } else {
          c(t);
          var s = t.attr(n);
          t[0].onerror = function (e) {
            u(e, t, r, s)
          }, t[0].onload = function (e) {
            t.parent().find(".lazy-loding").remove(), t.show(), l(e, t)
          }, t[0].src = s
        }
      };
      if (n.cache = [], "IMG" == i.tagName) {
        var f = {obj: r, tag: "img", url: r.attr(o)};
        n.cache.push(f)
      } else {
        var p = r.find("img");
        p.each(function (e) {
          var t = this.nodeName.toLowerCase(), r = $(this).attr(o), i = {obj: p.eq(e), tag: t, url: r};
          n.cache.push(i)
        })
      }
      var h = function () {
        var e, t = s.height();
        e = $(window).get(0) === window ? $(window).scrollTop() : s.offset().top, $.each(n.cache, function (n, r) {
          var i, s, l = r.obj, u = r.tag, c = r.url;
          l && (i = l.offset().top - e, i + l.height(), (i >= 0 && i < t || s > 0 && s <= t) && (c && "img" === u && d(l, o, a), r.obj = null))
        })
      };
      h(), s.bind("scroll", h), s.bind("resize", h)
    })
  }, e.exports = {}
}, function (e, t, n) {
  var r, i, o, a, s, l, u, c, d, f = n(3), p = !1, h = function () {
    l = document.body.scrollHeight / document.body.scrollWidth, u = document.body.scrollWidth, c = 0
  }, m = function () {
    i && (document.getElementById("js-mobile-tagcloud").innerHTML = i.innerHTML), o && (document.getElementById("js-mobile-aboutme").innerHTML = f.decode(o.innerHTML)), a && (document.getElementById("js-mobile-friends").innerHTML = a.innerHTML), document.getElementById("js-mobile-menu").innerHTML = r.innerHTML
  }, g = function () {
    var e = document.createElement("div");
    if (e.id = "viewer", e.className = "hide", r = document.getElementsByClassName("header-menu")[0], i = document.getElementById("js-tagcloud"), o = document.getElementById("js-aboutme"), a = document.getElementById("js-friends"), yiliaConfig && yiliaConfig.innerArchive) {
      var t = $(".js-smart-menu").first().html();
      $(".header-menu ul").append('<li><a href="/archives">' + t + "</a></li>")
    }
    var n = '<span class="viewer-title">菜单</span><div class="viewer-div menu" id="js-mobile-menu"></div>', s = i ? '<span class="viewer-title">标签</span><div class="viewer-div tagcloud" id="js-mobile-tagcloud"></div>' : "", l = a ? '<span class="viewer-title">友情链接</span><div class="viewer-div friends" id="js-mobile-friends"></div>' : "", u = o ? '<span class="viewer-title">关于我</span><div class="viewer-div aboutme" id="js-mobile-aboutme"></div>' : "";
    e.innerHTML = '<div id="viewer-box">\t\t<div class="viewer-box-l">\t\t\t<div class="viewer-box-wrap">' + n + u + l + s + '</div>\t\t</div>\t\t<div class="viewer-box-r"></div>\t\t</div>', document.getElementsByTagName("body")[0].appendChild(e);
    var c = document.getElementById("viewer-box");
    d = c, c.style.height = document.body.scrollHeight + "px"
  }, v = function (e, t) {
    document.getElementById("viewer").className = "", setTimeout(function () {
      d.className = "anm-swipe"
    }, 0), p = !0, document.ontouchstart = function (e) {
      if ("A" != e.target.tagName)return !1
    }
  }, y = function () {
    document.getElementById("viewer-box").className = "", p = !1, document.ontouchstart = function () {
      return !0
    }
  }, x = function () {
    document.getElementById("viewer-box").addEventListener("webkitTransitionEnd", function () {
      0 == p && (document.getElementById("viewer").className = "hide", p = !0)
    }, !1), s.addEventListener("click", function () {
      v()
    }, !1);
    var e, t, n = document.getElementsByClassName("viewer-box-r")[0];
    n.addEventListener("touchstart", function () {
      e = +new Date
    }, !1), n.addEventListener("touchend", function () {
      t = +new Date, t - e < 300 && y(), e = 0, t = 0
    }, !1);
    var r = $("#mobile-nav .overlay"), i = $(".js-mobile-header");
    window.onscroll = function () {
      var e = document.documentElement.scrollTop + document.body.scrollTop;
      e >= 69 ? r.addClass("fixed") : r.removeClass("fixed"), e >= 160 ? i.removeClass("hide").addClass("fixed") : i.addClass("hide").removeClass("fixed")
    }, i[0].addEventListener("touchstart", function () {
      $("html, body").animate({scrollTop: 0}, "slow")
    }, !1)
  };
  e.exports = {
    init: function () {
      s = document.getElementsByClassName("slider-trigger")[0], h(), g(), m(), x()
    }
  }
}, function (e, t) {
  function n() {
    var e = $(".tagcloud a");
    e.css({"font-size": "12px"});
    for (var t = 0, n = e.length; t < n; t++) {
      var r = e.eq(t).html().length % 5 + 1;
      e[t].className = "", e.eq(t).addClass("color" + r)
    }
  }

  e.exports = {init: n}
}, function (e, t, n) {
  function r(e) {
    $(".btn-wrap li").eq(e).trigger("click")
  }

  function i() {
    l = $(".mid-col"), u = $(".tools-col"), $(".btn-wrap li").click(function () {
      var e = $(this).index();
      window.localStorage.setItem(d, e), $(".btn-wrap li").removeClass("chose"), $(this).addClass("chose"), $(".tools-section").removeClass("chose"), $(".tools-wrap .tools-section").eq(e).addClass("chose")
    });
    var e = parseInt(window.localStorage.getItem(d) || 0);
    r(e);
    var t = $(".aboutme-wrap"), n = t.html();
    t.html(c.decode(n))
  }

  function o() {
    l.toggleClass("show"), u.toggleClass("show")
  }

  function a(e) {
    r(e), l.addClass("show"), u.addClass("show")
  }

  function s() {
    l.removeClass("show"), u.removeClass("show")
  }

  var l, u, c = n(3), d = "yilia-menu";
  e.exports = {init: i, toggle: o, show: a, hide: s}
}, function (e, t, n) {
  var r = n(18), i = n(17);
  n(6), n(7), window.PhotoSwipe = r, window.PhotoSwipeUI_Default = i, e.exports = {
    init: function () {
      var e = document.querySelectorAll(".pswp")[0], t = $(".article-entry img");
      t.click(function (n) {
        t = $(".article-entry img");
        for (var o = [], a = 0, s = t.length; a < s; a++) {
          var l = t.eq(a).attr("data-idx", a), u = l.attr("data-target") || l.attr("src"), c = l.attr("alt");
          o.push({src: u, w: l.width(), h: l.height(), title: c})
        }
        var d = $(this).attr("data-idx"), f = new r(e, i, o, {index: parseInt(d)});
        f.init()
      })
    }
  }
}, function (e, t, n) {
  var r, i;
  /*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
   * http://photoswipe.com
   * Copyright (c) 2015 Dmitry Semenov; */
  !function (o, a) {
    r = a, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i))
  }(this, function () {
    "use strict";
    var e = function (e, t) {
      var n, r, i, o, a, s, l, u, c, d, f, p, h, m, g, v, y, x, b, w = this, T = !1, C = !0, E = !0, k = {
        barsSize: {
          top: 44,
          bottom: "auto"
        },
        closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
        timeToIdle: 4e3,
        timeToIdleOutside: 1e3,
        loadingIndicatorDelay: 1e3,
        addCaptionHTMLFn: function (e, t) {
          return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
        },
        closeEl: !0,
        captionEl: !0,
        fullscreenEl: !0,
        zoomEl: !0,
        shareEl: !0,
        counterEl: !0,
        arrowEl: !0,
        preloaderEl: !0,
        tapToClose: !1,
        tapToToggleControls: !0,
        clickToCloseNonZoomable: !0,
        shareButtons: [{
          id: "facebook",
          label: "Share on Facebook",
          url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
        }, {
          id: "twitter",
          label: "Tweet",
          url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
        }, {
          id: "pinterest",
          label: "Pin it",
          url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
        }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
        getImageURLForShare: function () {
          return e.currItem.src || ""
        },
        getPageURLForShare: function () {
          return window.location.href
        },
        getTextForShare: function () {
          return e.currItem.title || ""
        },
        indexIndicatorSep: " / ",
        fitControlsWidth: 1200
      }, S = function (e) {
        if (v)return !0;
        e = e || window.event, g.timeToIdle && g.mouseUsed && !c && R();
        for (var n, r, i = e.target || e.srcElement, o = i.getAttribute("class") || "", a = 0; a < z.length; a++)n = z[a], n.onTap && o.indexOf("pswp__" + n.name) > -1 && (n.onTap(), r = !0);
        if (r) {
          e.stopPropagation && e.stopPropagation(), v = !0;
          var s = t.features.isOldAndroid ? 600 : 30;
          y = setTimeout(function () {
            v = !1
          }, s)
        }
      }, N = function () {
        return !e.likelyTouchDevice || g.mouseUsed || screen.width > g.fitControlsWidth
      }, A = function (e, n, r) {
        t[(r ? "add" : "remove") + "Class"](e, "pswp__" + n)
      }, D = function () {
        var e = 1 === g.getNumItemsFn();
        e !== m && (A(r, "ui--one-slide", e), m = e)
      }, I = function () {
        A(l, "share-modal--hidden", E)
      }, O = function () {
        return E = !E, E ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
          E && I()
        }, 300)) : (I(), setTimeout(function () {
          E || t.addClass(l, "pswp__share-modal--fade-in")
        }, 30)), E || _(), !1
      }, L = function (t) {
        t = t || window.event;
        var n = t.target || t.srcElement;
        return e.shout("shareLinkClick", t, n), !!n.href && (!!n.hasAttribute("download") || (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), E || O(), !1))
      }, _ = function () {
        for (var e, t, n, r, i, o = "", a = 0; a < g.shareButtons.length; a++)e = g.shareButtons[a], n = g.getImageURLForShare(e), r = g.getPageURLForShare(e), i = g.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(r)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(i)), o += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", g.parseShareButtonOut && (o = g.parseShareButtonOut(e, o));
        l.children[0].innerHTML = o, l.children[0].onclick = L
      }, M = function (e) {
        for (var n = 0; n < g.closeElClasses.length; n++)if (t.hasClass(e, "pswp__" + g.closeElClasses[n]))return !0
      }, j = 0, R = function () {
        clearTimeout(b), j = 0, c && w.setIdle(!1)
      }, F = function (e) {
        e = e ? e : window.event;
        var t = e.relatedTarget || e.toElement;
        t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function () {
          w.setIdle(!0)
        }, g.timeToIdleOutside))
      }, H = function () {
        g.fullscreenEl && !t.features.isOldAndroid && (n || (n = w.getFullscreenAPI()), n ? (t.bind(document, n.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
      }, P = function () {
        g.preloaderEl && (B(!0), d("beforeChange", function () {
          clearTimeout(h), h = setTimeout(function () {
            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && B(!1) : B(!0)
          }, g.loadingIndicatorDelay)
        }), d("imageLoadComplete", function (t, n) {
          e.currItem === n && B(!0)
        }))
      }, B = function (e) {
        p !== e && (A(f, "preloader--active", !e), p = e)
      }, q = function (e) {
        var n = e.vGap;
        if (N()) {
          var a = g.barsSize;
          if (g.captionEl && "auto" === a.bottom)if (o || (o = t.createEl("pswp__caption pswp__caption--fake"), o.appendChild(t.createEl("pswp__caption__center")), r.insertBefore(o, i), t.addClass(r, "pswp__ui--fit")), g.addCaptionHTMLFn(e, o, !0)) {
            var s = o.clientHeight;
            n.bottom = parseInt(s, 10) || 44
          } else n.bottom = a.top; else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
          n.top = a.top
        } else n.top = n.bottom = 0
      }, $ = function () {
        g.timeToIdle && d("mouseUsed", function () {
          t.bind(document, "mousemove", R), t.bind(document, "mouseout", F), x = setInterval(function () {
            j++, 2 === j && w.setIdle(!0)
          }, g.timeToIdle / 2)
        })
      }, W = function () {
        d("onVerticalDrag", function (e) {
          C && e < .95 ? w.hideControls() : !C && e >= .95 && w.showControls()
        });
        var e;
        d("onPinchClose", function (t) {
          C && t < .9 ? (w.hideControls(), e = !0) : e && !C && t > .9 && w.showControls()
        }), d("zoomGestureEnded", function () {
          e = !1, e && !C && w.showControls()
        })
      }, z = [{
        name: "caption", option: "captionEl", onInit: function (e) {
          i = e
        }
      }, {
        name: "share-modal", option: "shareEl", onInit: function (e) {
          l = e
        }, onTap: function () {
          O()
        }
      }, {
        name: "button--share", option: "shareEl", onInit: function (e) {
          s = e
        }, onTap: function () {
          O()
        }
      }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
        name: "counter",
        option: "counterEl",
        onInit: function (e) {
          a = e
        }
      }, {name: "button--close", option: "closeEl", onTap: e.close}, {
        name: "button--arrow--left",
        option: "arrowEl",
        onTap: e.prev
      }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
        name: "button--fs",
        option: "fullscreenEl",
        onTap: function () {
          n.isFullscreen() ? n.exit() : n.enter()
        }
      }, {
        name: "preloader", option: "preloaderEl", onInit: function (e) {
          f = e
        }
      }], U = function () {
        var e, n, i, o = function (r) {
          if (r)for (var o = r.length, a = 0; a < o; a++) {
            e = r[a], n = e.className;
            for (var s = 0; s < z.length; s++)i = z[s], n.indexOf("pswp__" + i.name) > -1 && (g[i.option] ? (t.removeClass(e, "pswp__element--disabled"), i.onInit && i.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
          }
        };
        o(r.children);
        var a = t.getChildByClass(r, "pswp__top-bar");
        a && o(a.children)
      };
      w.init = function () {
        t.extend(e.options, k, !0), g = e.options, r = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen, W(), d("beforeChange", w.update), d("doubleTap", function (t) {
          var n = e.currItem.initialZoomLevel;
          e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(g.getDoubleTapZoom(!1, e.currItem), t, 333)
        }), d("preventDragEvent", function (e, t, n) {
          var r = e.target || e.srcElement;
          r && r.getAttribute("class") && e.type.indexOf("mouse") > -1 && (r.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(r.tagName)) && (n.prevent = !1)
        }), d("bindEvents", function () {
          t.bind(r, "pswpTap click", S), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
        }), d("unbindEvents", function () {
          E || O(), x && clearInterval(x), t.unbind(document, "mouseout", F), t.unbind(document, "mousemove", R), t.unbind(r, "pswpTap click", S), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), n && (t.unbind(document, n.eventK, w.updateFullscreen), n.isFullscreen() && (g.hideAnimationDuration = 0, n.exit()), n = null)
        }), d("destroy", function () {
          g.captionEl && (o && r.removeChild(o), t.removeClass(i, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(r, "pswp__ui--over-close"), t.addClass(r, "pswp__ui--hidden"), w.setIdle(!1)
        }), g.showAnimationDuration || t.removeClass(r, "pswp__ui--hidden"), d("initialZoomIn", function () {
          g.showAnimationDuration && t.removeClass(r, "pswp__ui--hidden")
        }), d("initialZoomOut", function () {
          t.addClass(r, "pswp__ui--hidden")
        }), d("parseVerticalMargin", q), U(), g.shareEl && s && l && (E = !0), D(), $(), H(), P()
      }, w.setIdle = function (e) {
        c = e, A(r, "ui--idle", e)
      }, w.update = function () {
        C && e.currItem ? (w.updateIndexIndicator(), g.captionEl && (g.addCaptionHTMLFn(e.currItem, i), A(i, "caption--empty", !e.currItem.title)), T = !0) : T = !1, E || O(), D()
      }, w.updateFullscreen = function (r) {
        r && setTimeout(function () {
          e.setScrollOffset(0, t.getScrollY())
        }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
      }, w.updateIndexIndicator = function () {
        g.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + g.indexIndicatorSep + g.getNumItemsFn())
      }, w.onGlobalTap = function (n) {
        n = n || window.event;
        var r = n.target || n.srcElement;
        if (!v)if (n.detail && "mouse" === n.detail.pointerType) {
          if (M(r))return void e.close();
          t.hasClass(r, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? g.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint))
        } else if (g.tapToToggleControls && (C ? w.hideControls() : w.showControls()), g.tapToClose && (t.hasClass(r, "pswp__img") || M(r)))return void e.close()
      }, w.onMouseOver = function (e) {
        e = e || window.event;
        var t = e.target || e.srcElement;
        A(r, "ui--over-close", M(t))
      }, w.hideControls = function () {
        t.addClass(r, "pswp__ui--hidden"), C = !1
      }, w.showControls = function () {
        C = !0, T || w.update(), t.removeClass(r, "pswp__ui--hidden")
      }, w.supportsFullscreen = function () {
        var e = document;
        return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
      }, w.getFullscreenAPI = function () {
        var t, n = document.documentElement, r = "fullscreenchange";
        return n.requestFullscreen ? t = {
          enterK: "requestFullscreen",
          exitK: "exitFullscreen",
          elementK: "fullscreenElement",
          eventK: r
        } : n.mozRequestFullScreen ? t = {
          enterK: "mozRequestFullScreen",
          exitK: "mozCancelFullScreen",
          elementK: "mozFullScreenElement",
          eventK: "moz" + r
        } : n.webkitRequestFullscreen ? t = {
          enterK: "webkitRequestFullscreen",
          exitK: "webkitExitFullscreen",
          elementK: "webkitFullscreenElement",
          eventK: "webkit" + r
        } : n.msRequestFullscreen && (t = {
          enterK: "msRequestFullscreen",
          exitK: "msExitFullscreen",
          elementK: "msFullscreenElement",
          eventK: "MSFullscreenChange"
        }), t && (t.enter = function () {
          return u = g.closeOnScroll, g.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
        }, t.exit = function () {
          return g.closeOnScroll = u, document[this.exitK]()
        }, t.isFullscreen = function () {
          return document[this.elementK]
        }), t
      }
    };
    return e
  })
}, function (e, t, n) {
  var r, i;
  /*! PhotoSwipe - v4.1.1 - 2015-12-24
   * http://photoswipe.com
   * Copyright (c) 2015 Dmitry Semenov; */
  !function (o, a) {
    r = a, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i))
  }(this, function () {
    "use strict";
    var e = function (e, t, n, r) {
      var i = {
        features: null, bind: function (e, t, n, r) {
          var i = (r ? "remove" : "add") + "EventListener";
          t = t.split(" ");
          for (var o = 0; o < t.length; o++)t[o] && e[i](t[o], n, !1)
        }, isArray: function (e) {
          return e instanceof Array
        }, createEl: function (e, t) {
          var n = document.createElement(t || "div");
          return e && (n.className = e), n
        }, getScrollY: function () {
          var e = window.pageYOffset;
          return void 0 !== e ? e : document.documentElement.scrollTop
        }, unbind: function (e, t, n) {
          i.bind(e, t, n, !0)
        }, removeClass: function (e, t) {
          var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
          e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }, addClass: function (e, t) {
          i.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
        }, hasClass: function (e, t) {
          return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
        }, getChildByClass: function (e, t) {
          for (var n = e.firstChild; n;) {
            if (i.hasClass(n, t))return n;
            n = n.nextSibling
          }
        }, arraySearch: function (e, t, n) {
          for (var r = e.length; r--;)if (e[r][n] === t)return r;
          return -1
        }, extend: function (e, t, n) {
          for (var r in t)if (t.hasOwnProperty(r)) {
            if (n && e.hasOwnProperty(r))continue;
            e[r] = t[r]
          }
        }, easing: {
          sine: {
            out: function (e) {
              return Math.sin(e * (Math.PI / 2))
            }, inOut: function (e) {
              return -(Math.cos(Math.PI * e) - 1) / 2
            }
          }, cubic: {
            out: function (e) {
              return --e * e * e + 1
            }
          }
        }, detectFeatures: function () {
          if (i.features)return i.features;
          var e = i.createEl(), t = e.style, n = "", r = {};
          if (r.oldIE = document.all && !document.addEventListener, r.touch = "ontouchstart" in window, window.requestAnimationFrame && (r.raf = window.requestAnimationFrame, r.caf = window.cancelAnimationFrame), r.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !r.pointerEvent) {
            var o = navigator.userAgent;
            if (/iP(hone|od)/.test(navigator.platform)) {
              var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              a && a.length > 0 && (a = parseInt(a[1], 10), a >= 1 && a < 8 && (r.isOldIOSPhone = !0))
            }
            var s = o.match(/Android\s([0-9\.]*)/), l = s ? s[1] : 0;
            l = parseFloat(l), l >= 1 && (l < 4.4 && (r.isOldAndroid = !0), r.androidVersion = l), r.isMobileOpera = /opera mini|opera mobi/i.test(o)
          }
          for (var u, c, d = ["transform", "perspective", "animationName"], f = ["", "webkit", "Moz", "ms", "O"], p = 0; p < 4; p++) {
            n = f[p];
            for (var h = 0; h < 3; h++)u = d[h], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !r[u] && c in t && (r[u] = c);
            n && !r.raf && (n = n.toLowerCase(), r.raf = window[n + "RequestAnimationFrame"], r.raf && (r.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]))
          }
          if (!r.raf) {
            var m = 0;
            r.raf = function (e) {
              var t = (new Date).getTime(), n = Math.max(0, 16 - (t - m)), r = window.setTimeout(function () {
                e(t + n)
              }, n);
              return m = t + n, r
            }, r.caf = function (e) {
              clearTimeout(e)
            }
          }
          return r.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, i.features = r, r
        }
      };
      i.detectFeatures(), i.features.oldIE && (i.bind = function (e, t, n, r) {
        t = t.split(" ");
        for (var i, o = (r ? "detach" : "attach") + "Event", a = function () {
          n.handleEvent.call(n)
        }, s = 0; s < t.length; s++)if (i = t[s])if ("object" == typeof n && n.handleEvent) {
          if (r) {
            if (!n["oldIE" + i])return !1
          } else n["oldIE" + i] = a;
          e[o]("on" + i, n["oldIE" + i])
        } else e[o]("on" + i, n)
      });
      var o = this, a = 25, s = 3, l = {
        allowPanToNext: !0,
        spacing: .12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: .75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: .35,
        panEndFriction: .35,
        isClickableElement: function (e) {
          return "A" === e.tagName
        },
        getDoubleTapZoom: function (e, t) {
          return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit"
      };
      i.extend(l, r);
      var u, c, d, f, p, h, m, g, v, y, x, b, w, T, C, E, k, S, N, A, D, I, O, L, _, M, j, R, F, H, P, B, q, $, W, z, U, Z, X, K, J, Y, G, V, Q, ee, te, ne, re, ie, oe, ae, se, le, ue, ce, de = function () {
        return {x: 0, y: 0}
      }, fe = de(), pe = de(), he = de(), me = {}, ge = 0, ve = {}, ye = de(), xe = 0, be = !0, we = [], Te = {}, Ce = !1, Ee = function (e, t) {
        i.extend(o, t.publicMethods), we.push(e)
      }, ke = function (e) {
        var t = Qt();
        return e > t - 1 ? e - t : e < 0 ? t + e : e
      }, Se = {}, Ne = function (e, t) {
        return Se[e] || (Se[e] = []), Se[e].push(t)
      }, Ae = function (e) {
        var t = Se[e];
        if (t) {
          var n = Array.prototype.slice.call(arguments);
          n.shift();
          for (var r = 0; r < t.length; r++)t[r].apply(o, n)
        }
      }, De = function () {
        return (new Date).getTime()
      }, Ie = function (e) {
        le = e, o.bg.style.opacity = e * l.bgOpacity
      }, Oe = function (e, t, n, r, i) {
        (!Ce || i && i !== o.currItem) && (r /= i ? i.fitRatio : o.currItem.fitRatio), e[I] = b + t + "px, " + n + "px" + w + " scale(" + r + ")"
      }, Le = function (e) {
        re && (e && (y > o.currItem.fitRatio ? Ce || (fn(o.currItem, !1, !0), Ce = !0) : Ce && (fn(o.currItem), Ce = !1)), Oe(re, he.x, he.y, y))
      }, _e = function (e) {
        e.container && Oe(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
      }, Me = function (e, t) {
        t[I] = b + e + "px, 0px" + w
      }, je = function (e, t) {
        if (!l.loop && t) {
          var n = f + (ye.x * ge - e) / ye.x, r = Math.round(e - yt.x);
          (n < 0 && r > 0 || n >= Qt() - 1 && r < 0) && (e = yt.x + r * l.mainScrollEndFriction)
        }
        yt.x = e, Me(e, p)
      }, Re = function (e, t) {
        var n = xt[e] - ve[e];
        return pe[e] + fe[e] + n - n * (t / x)
      }, Fe = function (e, t) {
        e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
      }, He = function (e) {
        e.x = Math.round(e.x), e.y = Math.round(e.y)
      }, Pe = null, Be = function () {
        Pe && (i.unbind(document, "mousemove", Be), i.addClass(e, "pswp--has_mouse"), l.mouseUsed = !0, Ae("mouseUsed")), Pe = setTimeout(function () {
          Pe = null
        }, 100)
      }, qe = function () {
        i.bind(document, "keydown", o), P.transform && i.bind(o.scrollWrap, "click", o), l.mouseUsed || i.bind(document, "mousemove", Be), i.bind(window, "resize scroll", o), Ae("bindEvents")
      }, $e = function () {
        i.unbind(window, "resize", o), i.unbind(window, "scroll", v.scroll), i.unbind(document, "keydown", o), i.unbind(document, "mousemove", Be), P.transform && i.unbind(o.scrollWrap, "click", o), Z && i.unbind(window, m, o), Ae("unbindEvents")
      }, We = function (e, t) {
        var n = ln(o.currItem, me, e);
        return t && (ne = n), n
      }, ze = function (e) {
        return e || (e = o.currItem), e.initialZoomLevel
      }, Ue = function (e) {
        return e || (e = o.currItem), e.w > 0 ? l.maxSpreadZoom : 1
      }, Ze = function (e, t, n, r) {
        return r === o.currItem.initialZoomLevel ? (n[e] = o.currItem.initialPosition[e], !0) : (n[e] = Re(e, r), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0))
      }, Xe = function () {
        if (I) {
          var t = P.perspective && !L;
          return b = "translate" + (t ? "3d(" : "("), void(w = P.perspective ? ", 0px)" : ")")
        }
        I = "left", i.addClass(e, "pswp--ie"), Me = function (e, t) {
          t.left = e + "px"
        }, _e = function (e) {
          var t = e.fitRatio > 1 ? 1 : e.fitRatio, n = e.container.style, r = t * e.w, i = t * e.h;
          n.width = r + "px", n.height = i + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px"
        }, Le = function () {
          if (re) {
            var e = re, t = o.currItem, n = t.fitRatio > 1 ? 1 : t.fitRatio, r = n * t.w, i = n * t.h;
            e.width = r + "px", e.height = i + "px", e.left = he.x + "px", e.top = he.y + "px"
          }
        }
      }, Ke = function (e) {
        var t = "";
        l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, o[t]()))
      }, Je = function (e) {
        e && (J || K || ie || z) && (e.preventDefault(), e.stopPropagation())
      }, Ye = function () {
        o.setScrollOffset(0, i.getScrollY())
      }, Ge = {}, Ve = 0, Qe = function (e) {
        Ge[e] && (Ge[e].raf && M(Ge[e].raf), Ve--, delete Ge[e])
      }, et = function (e) {
        Ge[e] && Qe(e), Ge[e] || (Ve++, Ge[e] = {})
      }, tt = function () {
        for (var e in Ge)Ge.hasOwnProperty(e) && Qe(e)
      }, nt = function (e, t, n, r, i, o, a) {
        var s, l = De();
        et(e);
        var u = function () {
          if (Ge[e]) {
            if (s = De() - l, s >= r)return Qe(e), o(n), void(a && a());
            o((n - t) * i(s / r) + t), Ge[e].raf = _(u)
          }
        };
        u()
      }, rt = {
        shout: Ae, listen: Ne, viewportSize: me, options: l, isMainScrollAnimating: function () {
          return ie
        }, getZoomLevel: function () {
          return y
        }, getCurrentIndex: function () {
          return f
        }, isDragging: function () {
          return Z
        }, isZooming: function () {
          return Q
        }, setScrollOffset: function (e, t) {
          ve.x = e, H = ve.y = t, Ae("updateScrollOffset", ve)
        }, applyZoomPan: function (e, t, n, r) {
          he.x = t, he.y = n, y = e, Le(r)
        }, init: function () {
          if (!u && !c) {
            var n;
            o.framework = i, o.template = e, o.bg = i.getChildByClass(e, "pswp__bg"), j = e.className, u = !0, P = i.detectFeatures(), _ = P.raf, M = P.caf, I = P.transform, F = P.oldIE, o.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"), o.container = i.getChildByClass(o.scrollWrap, "pswp__container"), p = o.container.style, o.itemHolders = E = [{
              el: o.container.children[0],
              wrap: 0,
              index: -1
            }, {el: o.container.children[1], wrap: 0, index: -1}, {
              el: o.container.children[2],
              wrap: 0,
              index: -1
            }], E[0].el.style.display = E[2].el.style.display = "none", Xe(), v = {
              resize: o.updateSize,
              scroll: Ye,
              keydown: Ke,
              click: Je
            };
            var r = P.isOldIOSPhone || P.isOldAndroid || P.isMobileOpera;
            for (P.animationName && P.transform && !r || (l.showAnimationDuration = l.hideAnimationDuration = 0), n = 0; n < we.length; n++)o["init" + we[n]]();
            if (t) {
              var a = o.ui = new t(o, i);
              a.init()
            }
            Ae("firstUpdate"), f = f || l.index || 0, (isNaN(f) || f < 0 || f >= Qt()) && (f = 0), o.currItem = Vt(f), (P.isOldIOSPhone || P.isOldAndroid) && (be = !1), e.setAttribute("aria-hidden", "false"), l.modal && (be ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = i.getScrollY() + "px")), void 0 === H && (Ae("initialLayout"), H = R = i.getScrollY());
            var d = "pswp--open ";
            for (l.mainClass && (d += l.mainClass + " "), l.showHideOpacity && (d += "pswp--animate_opacity "), d += L ? "pswp--touch" : "pswp--notouch", d += P.animationName ? " pswp--css_animation" : "", d += P.svg ? " pswp--svg" : "", i.addClass(e, d), o.updateSize(), h = -1, xe = null, n = 0; n < s; n++)Me((n + h) * ye.x, E[n].el.style);
            F || i.bind(o.scrollWrap, g, o), Ne("initialZoomInEnd", function () {
              o.setContent(E[0], f - 1), o.setContent(E[2], f + 1), E[0].el.style.display = E[2].el.style.display = "block", l.focus && e.focus(), qe()
            }), o.setContent(E[1], f), o.updateCurrItem(), Ae("afterInit"), be || (T = setInterval(function () {
              Ve || Z || Q || y !== o.currItem.initialZoomLevel || o.updateSize()
            }, 1e3)), i.addClass(e, "pswp--visible")
          }
        }, close: function () {
          u && (u = !1, c = !0, Ae("close"), $e(), tn(o.currItem, null, !0, o.destroy))
        }, destroy: function () {
          Ae("destroy"), Kt && clearTimeout(Kt), e.setAttribute("aria-hidden", "true"), e.className = j, T && clearInterval(T), i.unbind(o.scrollWrap, g, o), i.unbind(window, "scroll", o), Et(), tt(), Se = null
        }, panTo: function (e, t, n) {
          n || (e > ne.min.x ? e = ne.min.x : e < ne.max.x && (e = ne.max.x), t > ne.min.y ? t = ne.min.y : t < ne.max.y && (t = ne.max.y)), he.x = e, he.y = t, Le()
        }, handleEvent: function (e) {
          e = e || window.event, v[e.type] && v[e.type](e)
        }, goTo: function (e) {
          e = ke(e);
          var t = e - f;
          xe = t, f = e, o.currItem = Vt(f), ge -= t, je(ye.x * ge), tt(), ie = !1, o.updateCurrItem()
        }, next: function () {
          o.goTo(f + 1)
        }, prev: function () {
          o.goTo(f - 1)
        }, updateCurrZoomItem: function (e) {
          if (e && Ae("beforeChange", 0), E[1].el.children.length) {
            var t = E[1].el.children[0];
            re = i.hasClass(t, "pswp__zoom-wrap") ? t.style : null
          } else re = null;
          ne = o.currItem.bounds, x = y = o.currItem.initialZoomLevel, he.x = ne.center.x, he.y = ne.center.y, e && Ae("afterChange")
        }, invalidateCurrItems: function () {
          C = !0;
          for (var e = 0; e < s; e++)E[e].item && (E[e].item.needsUpdate = !0)
        }, updateCurrItem: function (e) {
          if (0 !== xe) {
            var t, n = Math.abs(xe);
            if (!(e && n < 2)) {
              o.currItem = Vt(f), Ce = !1, Ae("beforeChange", xe), n >= s && (h += xe + (xe > 0 ? -s : s), n = s);
              for (var r = 0; r < n; r++)xe > 0 ? (t = E.shift(), E[s - 1] = t, h++, Me((h + 2) * ye.x, t.el.style), o.setContent(t, f - n + r + 1 + 1)) : (t = E.pop(), E.unshift(t), h--, Me(h * ye.x, t.el.style), o.setContent(t, f + n - r - 1 - 1));
              if (re && 1 === Math.abs(xe)) {
                var i = Vt(k);
                i.initialZoomLevel !== y && (ln(i, me), fn(i), _e(i))
              }
              xe = 0, o.updateCurrZoomItem(), k = f, Ae("afterChange")
            }
          }
        }, updateSize: function (t) {
          if (!be && l.modal) {
            var n = i.getScrollY();
            if (H !== n && (e.style.top = n + "px", H = n), !t && Te.x === window.innerWidth && Te.y === window.innerHeight)return;
            Te.x = window.innerWidth, Te.y = window.innerHeight, e.style.height = Te.y + "px"
          }
          if (me.x = o.scrollWrap.clientWidth, me.y = o.scrollWrap.clientHeight, Ye(), ye.x = me.x + Math.round(me.x * l.spacing), ye.y = me.y, je(ye.x * ge), Ae("beforeResize"), void 0 !== h) {
            for (var r, a, u, c = 0; c < s; c++)r = E[c], Me((c + h) * ye.x, r.el.style), u = f + c - 1, l.loop && Qt() > 2 && (u = ke(u)), a = Vt(u), a && (C || a.needsUpdate || !a.bounds) ? (o.cleanSlide(a), o.setContent(r, u), 1 === c && (o.currItem = a, o.updateCurrZoomItem(!0)), a.needsUpdate = !1) : r.index === -1 && u >= 0 && o.setContent(r, u), a && a.container && (ln(a, me), fn(a), _e(a));
            C = !1
          }
          x = y = o.currItem.initialZoomLevel, ne = o.currItem.bounds, ne && (he.x = ne.center.x, he.y = ne.center.y, Le(!0)), Ae("resize")
        }, zoomTo: function (e, t, n, r, o) {
          t && (x = y, xt.x = Math.abs(t.x) - he.x, xt.y = Math.abs(t.y) - he.y, Fe(pe, he));
          var a = We(e, !1), s = {};
          Ze("x", a, s, e), Ze("y", a, s, e);
          var l = y, u = {x: he.x, y: he.y};
          He(s);
          var c = function (t) {
            1 === t ? (y = e, he.x = s.x, he.y = s.y) : (y = (e - l) * t + l, he.x = (s.x - u.x) * t + u.x, he.y = (s.y - u.y) * t + u.y), o && o(t), Le(1 === t)
          };
          n ? nt("customZoomTo", 0, 1, n, r || i.easing.sine.inOut, c) : c(1)
        }
      }, it = 30, ot = 10, at = {}, st = {}, lt = {}, ut = {}, ct = {}, dt = [], ft = {}, pt = [], ht = {}, mt = 0, gt = de(), vt = 0, yt = de(), xt = de(), bt = de(), wt = function (e, t) {
        return e.x === t.x && e.y === t.y
      }, Tt = function (e, t) {
        return Math.abs(e.x - t.x) < a && Math.abs(e.y - t.y) < a
      }, Ct = function (e, t) {
        return ht.x = Math.abs(e.x - t.x), ht.y = Math.abs(e.y - t.y), Math.sqrt(ht.x * ht.x + ht.y * ht.y)
      }, Et = function () {
        Y && (M(Y), Y = null)
      }, kt = function () {
        Z && (Y = _(kt), qt())
      }, St = function () {
        return !("fit" === l.scaleMode && y === o.currItem.initialZoomLevel)
      }, Nt = function (e, t) {
        return !(!e || e === document) && (!(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : Nt(e.parentNode, t)))
      }, At = {}, Dt = function (e, t) {
        return At.prevent = !Nt(e.target, l.isClickableElement), Ae("preventDragEvent", e, t, At), At.prevent
      }, It = function (e, t) {
        return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
      }, Ot = function (e, t, n) {
        n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y)
      }, Lt = function (e, t, n) {
        if (e - q > 50) {
          var r = pt.length > 2 ? pt.shift() : {};
          r.x = t, r.y = n, pt.push(r), q = e
        }
      }, _t = function () {
        var e = he.y - o.currItem.initialPosition.y;
        return 1 - Math.abs(e / (me.y / 2))
      }, Mt = {}, jt = {}, Rt = [], Ft = function (e) {
        for (; Rt.length > 0;)Rt.pop();
        return O ? (ce = 0, dt.forEach(function (e) {
          0 === ce ? Rt[0] = e : 1 === ce && (Rt[1] = e), ce++
        })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Rt[0] = It(e.touches[0], Mt), e.touches.length > 1 && (Rt[1] = It(e.touches[1], jt))) : (Mt.x = e.pageX, Mt.y = e.pageY, Mt.id = "", Rt[0] = Mt), Rt
      }, Ht = function (e, t) {
        var n, r, i, a, s = 0, u = he[e] + t[e], c = t[e] > 0, d = yt.x + t.x, f = yt.x - ft.x;
        return n = u > ne.min[e] || u < ne.max[e] ? l.panEndFriction : 1, u = he[e] + t[e] * n, !l.allowPanToNext && y !== o.currItem.initialZoomLevel || (re ? "h" !== oe || "x" !== e || K || (c ? (u > ne.min[e] && (n = l.panEndFriction, s = ne.min[e] - u, r = ne.min[e] - pe[e]), (r <= 0 || f < 0) && Qt() > 1 ? (a = d, f < 0 && d > ft.x && (a = ft.x)) : ne.min.x !== ne.max.x && (i = u)) : (u < ne.max[e] && (n = l.panEndFriction, s = u - ne.max[e], r = pe[e] - ne.max[e]), (r <= 0 || f > 0) && Qt() > 1 ? (a = d, f > 0 && d < ft.x && (a = ft.x)) : ne.min.x !== ne.max.x && (i = u))) : a = d, "x" !== e) ? void(ie || G || y > o.currItem.fitRatio && (he[e] += t[e] * n)) : (void 0 !== a && (je(a, !0), G = a !== ft.x), ne.min.x !== ne.max.x && (void 0 !== i ? he.x = i : G || (he.x += t.x * n)), void 0 !== a)
      }, Pt = function (e) {
        if (!("mousedown" === e.type && e.button > 0)) {
          if (Gt)return void e.preventDefault();
          if (!U || "mousedown" !== e.type) {
            if (Dt(e, !0) && e.preventDefault(), Ae("pointerDown"), O) {
              var t = i.arraySearch(dt, e.pointerId, "id");
              t < 0 && (t = dt.length), dt[t] = {x: e.pageX, y: e.pageY, id: e.pointerId}
            }
            var n = Ft(e), r = n.length;
            V = null, tt(), Z && 1 !== r || (Z = ae = !0, i.bind(window, m, o), W = ue = se = z = G = J = X = K = !1, oe = null, Ae("firstTouchStart", n), Fe(pe, he), fe.x = fe.y = 0, Fe(ut, n[0]), Fe(ct, ut), ft.x = ye.x * ge, pt = [{
              x: ut.x,
              y: ut.y
            }], q = B = De(), We(y, !0), Et(), kt()), !Q && r > 1 && !ie && !G && (x = y, K = !1, Q = X = !0, fe.y = fe.x = 0, Fe(pe, he), Fe(at, n[0]), Fe(st, n[1]), Ot(at, st, bt), xt.x = Math.abs(bt.x) - he.x, xt.y = Math.abs(bt.y) - he.y, ee = te = Ct(at, st))
          }
        }
      }, Bt = function (e) {
        if (e.preventDefault(), O) {
          var t = i.arraySearch(dt, e.pointerId, "id");
          if (t > -1) {
            var n = dt[t];
            n.x = e.pageX, n.y = e.pageY
          }
        }
        if (Z) {
          var r = Ft(e);
          if (oe || J || Q)V = r; else if (yt.x !== ye.x * ge)oe = "h"; else {
            var o = Math.abs(r[0].x - ut.x) - Math.abs(r[0].y - ut.y);
            Math.abs(o) >= ot && (oe = o > 0 ? "h" : "v", V = r)
          }
        }
      }, qt = function () {
        if (V) {
          var e = V.length;
          if (0 !== e)if (Fe(at, V[0]), lt.x = at.x - ut.x, lt.y = at.y - ut.y, Q && e > 1) {
            if (ut.x = at.x, ut.y = at.y, !lt.x && !lt.y && wt(V[1], st))return;
            Fe(st, V[1]), K || (K = !0, Ae("zoomGestureStarted"));
            var t = Ct(at, st), n = Zt(t);
            n > o.currItem.initialZoomLevel + o.currItem.initialZoomLevel / 15 && (ue = !0);
            var r = 1, i = ze(), a = Ue();
            if (n < i)if (l.pinchToClose && !ue && x <= o.currItem.initialZoomLevel) {
              var s = i - n, u = 1 - s / (i / 1.2);
              Ie(u), Ae("onPinchClose", u), se = !0
            } else r = (i - n) / i, r > 1 && (r = 1), n = i - r * (i / 3); else n > a && (r = (n - a) / (6 * i), r > 1 && (r = 1), n = a + r * i);
            r < 0 && (r = 0), ee = t, Ot(at, st, gt), fe.x += gt.x - bt.x, fe.y += gt.y - bt.y, Fe(bt, gt), he.x = Re("x", n), he.y = Re("y", n), W = n > y, y = n, Le()
          } else {
            if (!oe)return;
            if (ae && (ae = !1, Math.abs(lt.x) >= ot && (lt.x -= V[0].x - ct.x), Math.abs(lt.y) >= ot && (lt.y -= V[0].y - ct.y)), ut.x = at.x, ut.y = at.y, 0 === lt.x && 0 === lt.y)return;
            if ("v" === oe && l.closeOnVerticalDrag && !St()) {
              fe.y += lt.y, he.y += lt.y;
              var c = _t();
              return z = !0, Ae("onVerticalDrag", c), Ie(c), void Le()
            }
            Lt(De(), at.x, at.y), J = !0, ne = o.currItem.bounds;
            var d = Ht("x", lt);
            d || (Ht("y", lt), He(he), Le())
          }
        }
      }, $t = function (e) {
        if (P.isOldAndroid) {
          if (U && "mouseup" === e.type)return;
          e.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
            U = 0
          }, 600))
        }
        Ae("pointerUp"), Dt(e, !1) && e.preventDefault();
        var t;
        if (O) {
          var n = i.arraySearch(dt, e.pointerId, "id");
          if (n > -1)if (t = dt.splice(n, 1)[0], navigator.pointerEnabled)t.type = e.pointerType || "mouse"; else {
            var r = {4: "mouse", 2: "touch", 3: "pen"};
            t.type = r[e.pointerType], t.type || (t.type = e.pointerType || "mouse")
          }
        }
        var a, s = Ft(e), u = s.length;
        if ("mouseup" === e.type && (u = 0), 2 === u)return V = null, !0;
        1 === u && Fe(ct, s[0]), 0 !== u || oe || ie || (t || ("mouseup" === e.type ? t = {
          x: e.pageX,
          y: e.pageY,
          type: "mouse"
        } : e.changedTouches && e.changedTouches[0] && (t = {
          x: e.changedTouches[0].pageX,
          y: e.changedTouches[0].pageY,
          type: "touch"
        })), Ae("touchRelease", e, t));
        var c = -1;
        if (0 === u && (Z = !1, i.unbind(window, m, o), Et(), Q ? c = 0 : vt !== -1 && (c = De() - vt)), vt = 1 === u ? De() : -1, a = c !== -1 && c < 150 ? "zoom" : "swipe", Q && u < 2 && (Q = !1, 1 === u && (a = "zoomPointerUp"), Ae("zoomGestureEnded")), V = null, J || K || ie || z)if (tt(), $ || ($ = Wt()), $.calculateSwipeSpeed("x"), z) {
          var d = _t();
          if (d < l.verticalDragRange)o.close(); else {
            var f = he.y, p = le;
            nt("verticalDrag", 0, 1, 300, i.easing.cubic.out, function (e) {
              he.y = (o.currItem.initialPosition.y - f) * e + f, Ie((1 - p) * e + p), Le()
            }), Ae("onVerticalDrag", 1)
          }
        } else {
          if ((G || ie) && 0 === u) {
            var h = Ut(a, $);
            if (h)return;
            a = "zoomPointerUp"
          }
          if (!ie)return "swipe" !== a ? void Xt() : void(!G && y > o.currItem.fitRatio && zt($))
        }
      }, Wt = function () {
        var e, t, n = {
          lastFlickOffset: {},
          lastFlickDist: {},
          lastFlickSpeed: {},
          slowDownRatio: {},
          slowDownRatioReverse: {},
          speedDecelerationRatio: {},
          speedDecelerationRatioAbs: {},
          distanceOffset: {},
          backAnimDestination: {},
          backAnimStarted: {},
          calculateSwipeSpeed: function (r) {
            pt.length > 1 ? (e = De() - q + 50, t = pt[pt.length - 2][r]) : (e = De() - B, t = ct[r]), n.lastFlickOffset[r] = ut[r] - t, n.lastFlickDist[r] = Math.abs(n.lastFlickOffset[r]), n.lastFlickDist[r] > 20 ? n.lastFlickSpeed[r] = n.lastFlickOffset[r] / e : n.lastFlickSpeed[r] = 0, Math.abs(n.lastFlickSpeed[r]) < .1 && (n.lastFlickSpeed[r] = 0), n.slowDownRatio[r] = .95, n.slowDownRatioReverse[r] = 1 - n.slowDownRatio[r], n.speedDecelerationRatio[r] = 1
          },
          calculateOverBoundsAnimOffset: function (e, t) {
            n.backAnimStarted[e] || (he[e] > ne.min[e] ? n.backAnimDestination[e] = ne.min[e] : he[e] < ne.max[e] && (n.backAnimDestination[e] = ne.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, nt("bounceZoomPan" + e, he[e], n.backAnimDestination[e], t || 300, i.easing.sine.out, function (t) {
              he[e] = t, Le()
            }))))
          },
          calculateAnimOffset: function (e) {
            n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, he[e] += n.distanceOffset[e])
          },
          panAnimLoop: function () {
            if (Ge.zoomPan && (Ge.zoomPan.raf = _(n.panAnimLoop), n.now = De(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Le(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05))return he.x = Math.round(he.x), he.y = Math.round(he.y), Le(), void Qe("zoomPan")
          }
        };
        return n
      }, zt = function (e) {
        return e.calculateSwipeSpeed("y"), ne = o.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (et("zoomPan"), e.lastNow = De(), void e.panAnimLoop())
      }, Ut = function (e, t) {
        var n;
        ie || (mt = f);
        var r;
        if ("swipe" === e) {
          var a = ut.x - ct.x, s = t.lastFlickDist.x < 10;
          a > it && (s || t.lastFlickOffset.x > 20) ? r = -1 : a < -it && (s || t.lastFlickOffset.x < -20) && (r = 1)
        }
        var u;
        r && (f += r, f < 0 ? (f = l.loop ? Qt() - 1 : 0, u = !0) : f >= Qt() && (f = l.loop ? 0 : Qt() - 1, u = !0), u && !l.loop || (xe += r, ge -= r, n = !0));
        var c, d = ye.x * ge, p = Math.abs(d - yt.x);
        return n || d > yt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? p / Math.abs(t.lastFlickSpeed.x) : 333, c = Math.min(c, 400), c = Math.max(c, 250)) : c = 333, mt === f && (n = !1), ie = !0, Ae("mainScrollAnimStart"), nt("mainScroll", yt.x, d, c, i.easing.cubic.out, je, function () {
          tt(), ie = !1, mt = -1, (n || mt !== f) && o.updateCurrItem(), Ae("mainScrollAnimComplete")
        }), n && o.updateCurrItem(!0), n
      }, Zt = function (e) {
        return 1 / te * e * x
      }, Xt = function () {
        var e = y, t = ze(), n = Ue();
        y < t ? e = t : y > n && (e = n);
        var r, a = 1, s = le;
        return se && !W && !ue && y < t ? (o.close(), !0) : (se && (r = function (e) {
          Ie((a - s) * e + s)
        }), o.zoomTo(e, 0, 200, i.easing.cubic.out, r), !0)
      };
      Ee("Gestures", {
        publicMethods: {
          initGestures: function () {
            var e = function (e, t, n, r, i) {
              S = e + t, N = e + n, A = e + r, D = i ? e + i : ""
            };
            O = P.pointerEvent, O && P.touch && (P.touch = !1), O ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : P.touch ? (e("touch", "start", "move", "end", "cancel"), L = !0) : e("mouse", "down", "move", "up"), m = N + " " + A + " " + D, g = S, O && !L && (L = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), o.likelyTouchDevice = L, v[S] = Pt, v[N] = Bt, v[A] = $t, D && (v[D] = v[A]), P.touch && (g += " mousedown", m += " mousemove mouseup", v.mousedown = v[S], v.mousemove = v[N], v.mouseup = v[A]), L || (l.allowPanToNext = !1)
          }
        }
      });
      var Kt, Jt, Yt, Gt, Vt, Qt, en, tn = function (t, n, r, a) {
        Kt && clearTimeout(Kt), Gt = !0, Yt = !0;
        var s;
        t.initialLayout ? (s = t.initialLayout, t.initialLayout = null) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(f);
        var u = r ? l.hideAnimationDuration : l.showAnimationDuration, c = function () {
          Qe("initialZoom"), r ? (o.template.removeAttribute("style"), o.bg.removeAttribute("style")) : (Ie(1), n && (n.style.display = "block"), i.addClass(e, "pswp--animated-in"), Ae("initialZoom" + (r ? "OutEnd" : "InEnd"))), a && a(), Gt = !1
        };
        if (!u || !s || void 0 === s.x)return Ae("initialZoom" + (r ? "Out" : "In")), y = t.initialZoomLevel, Fe(he, t.initialPosition), Le(), e.style.opacity = r ? 0 : 1, Ie(1), void(u ? setTimeout(function () {
          c()
        }, u) : c());
        var p = function () {
          var n = d, a = !o.currItem.src || o.currItem.loadError || l.showHideOpacity;
          t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), r || (y = s.w / t.w, he.x = s.x, he.y = s.y - R, o[a ? "template" : "bg"].style.opacity = .001, Le()), et("initialZoom"), r && !n && i.removeClass(e, "pswp--animated-in"), a && (r ? i[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
            i.addClass(e, "pswp--animate_opacity")
          }, 30)), Kt = setTimeout(function () {
            if (Ae("initialZoom" + (r ? "Out" : "In")), r) {
              var o = s.w / t.w, l = {x: he.x, y: he.y}, d = y, f = le, p = function (t) {
                1 === t ? (y = o, he.x = s.x, he.y = s.y - H) : (y = (o - d) * t + d, he.x = (s.x - l.x) * t + l.x, he.y = (s.y - H - l.y) * t + l.y), Le(), a ? e.style.opacity = 1 - t : Ie(f - t * f)
              };
              n ? nt("initialZoom", 0, 1, u, i.easing.cubic.out, p, c) : (p(1), Kt = setTimeout(c, u + 20))
            } else y = t.initialZoomLevel, Fe(he, t.initialPosition), Le(), Ie(1), a ? e.style.opacity = 1 : Ie(1), Kt = setTimeout(c, u + 20)
          }, r ? 25 : 90)
        };
        p()
      }, nn = {}, rn = [], on = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Jt.length
        }
      }, an = function () {
        return {center: {x: 0, y: 0}, max: {x: 0, y: 0}, min: {x: 0, y: 0}}
      }, sn = function (e, t, n) {
        var r = e.bounds;
        r.center.x = Math.round((nn.x - t) / 2), r.center.y = Math.round((nn.y - n) / 2) + e.vGap.top, r.max.x = t > nn.x ? Math.round(nn.x - t) : r.center.x, r.max.y = n > nn.y ? Math.round(nn.y - n) + e.vGap.top : r.center.y, r.min.x = t > nn.x ? 0 : r.center.x, r.min.y = n > nn.y ? e.vGap.top : r.center.y
      }, ln = function (e, t, n) {
        if (e.src && !e.loadError) {
          var r = !n;
          if (r && (e.vGap || (e.vGap = {
              top: 0,
              bottom: 0
            }), Ae("parseVerticalMargin", e)), nn.x = t.x, nn.y = t.y - e.vGap.top - e.vGap.bottom, r) {
            var i = nn.x / e.w, o = nn.y / e.h;
            e.fitRatio = i < o ? i : o;
            var a = l.scaleMode;
            "orig" === a ? n = 1 : "fit" === a && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = an())
          }
          if (!n)return;
          return sn(e, e.w * n, e.h * n), r && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
        }
        return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = an(), e.initialPosition = e.bounds.center, e.bounds
      }, un = function (e, t, n, r, i, a) {
        t.loadError || r && (t.imageAppended = !0, fn(t, r, t === o.currItem && Ce), n.appendChild(r), a && setTimeout(function () {
          t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
        }, 500))
      }, cn = function (e) {
        e.loading = !0, e.loaded = !1;
        var t = e.img = i.createEl("pswp__img", "img"), n = function () {
          e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
        };
        return t.onload = n, t.onerror = function () {
          e.loadError = !0, n()
        }, t.src = e.src, t
      }, dn = function (e, t) {
        if (e.src && e.loadError && e.container)return t && (e.container.innerHTML = ""), e.container.innerHTML = l.errorMsg.replace("%url%", e.src), !0
      }, fn = function (e, t, n) {
        if (e.src) {
          t || (t = e.container.lastChild);
          var r = n ? e.w : Math.round(e.w * e.fitRatio), i = n ? e.h : Math.round(e.h * e.fitRatio);
          e.placeholder && !e.loaded && (e.placeholder.style.width = r + "px", e.placeholder.style.height = i + "px"), t.style.width = r + "px", t.style.height = i + "px"
        }
      }, pn = function () {
        if (rn.length) {
          for (var e, t = 0; t < rn.length; t++)e = rn[t], e.holder.index === e.index && un(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
          rn = []
        }
      };
      Ee("Controller", {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = ke(e);
            var t = Vt(e);
            t && (!t.loaded && !t.loading || C) && (Ae("gettingData", e, t), t.src && cn(t))
          }, initController: function () {
            i.extend(l, on, !0), o.items = Jt = n, Vt = o.getItemAt, Qt = l.getNumItemsFn, en = l.loop, Qt() < 3 && (l.loop = !1), Ne("beforeChange", function (e) {
              var t, n = l.preload, r = null === e || e >= 0, i = Math.min(n[0], Qt()), a = Math.min(n[1], Qt());
              for (t = 1; t <= (r ? a : i); t++)o.lazyLoadItem(f + t);
              for (t = 1; t <= (r ? i : a); t++)o.lazyLoadItem(f - t)
            }), Ne("initialLayout", function () {
              o.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(f)
            }), Ne("mainScrollAnimComplete", pn), Ne("initialZoomInEnd", pn), Ne("destroy", function () {
              for (var e, t = 0; t < Jt.length; t++)e = Jt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
              rn = null
            })
          }, getItemAt: function (e) {
            return e >= 0 && (void 0 !== Jt[e] && Jt[e])
          }, allowProgressiveImg: function () {
            return l.forceProgressiveLoading || !L || l.mouseUsed || screen.width > 1200
          }, setContent: function (e, t) {
            l.loop && (t = ke(t));
            var n = o.getItemAt(e.index);
            n && (n.container = null);
            var r, a = o.getItemAt(t);
            if (!a)return void(e.el.innerHTML = "");
            Ae("gettingData", t, a), e.index = t, e.item = a;
            var s = a.container = i.createEl("pswp__zoom-wrap");
            if (!a.src && a.html && (a.html.tagName ? s.appendChild(a.html) : s.innerHTML = a.html), dn(a), ln(a, me), !a.src || a.loadError || a.loaded)a.src && !a.loadError && (r = i.createEl("pswp__img", "img"), r.style.opacity = 1, r.src = a.src, fn(a, r), un(t, a, s, r, !0)); else {
              if (a.loadComplete = function (n) {
                  if (u) {
                    if (e && e.index === t) {
                      if (dn(n, !0))return n.loadComplete = n.img = null, ln(n, me), _e(n), void(e.index === f && o.updateCurrZoomItem());
                      n.imageAppended ? !Gt && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : P.transform && (ie || Gt) ? rn.push({
                        item: n,
                        baseDiv: s,
                        img: n.img,
                        index: t,
                        holder: e,
                        clearPlaceholder: !0
                      }) : un(t, n, s, n.img, ie || Gt, !0)
                    }
                    n.loadComplete = null, n.img = null, Ae("imageLoadComplete", t, n)
                  }
                }, i.features.transform) {
                var c = "pswp__img pswp__img--placeholder";
                c += a.msrc ? "" : " pswp__img--placeholder--blank";
                var d = i.createEl(c, a.msrc ? "img" : "");
                a.msrc && (d.src = a.msrc), fn(a, d), s.appendChild(d), a.placeholder = d
              }
              a.loading || cn(a), o.allowProgressiveImg() && (!Yt && P.transform ? rn.push({
                item: a,
                baseDiv: s,
                img: a.img,
                index: t,
                holder: e
              }) : un(t, a, s, a.img, !0, !0))
            }
            Yt || t !== f ? _e(a) : (re = s.style, tn(a, r || a.img)), e.el.innerHTML = "", e.el.appendChild(s)
          }, cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
          }
        }
      });
      var hn, mn = {}, gn = function (e, t, n) {
        var r = document.createEvent("CustomEvent"), i = {
          origEvent: e,
          target: e.target,
          releasePoint: t,
          pointerType: n || "touch"
        };
        r.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(r)
      };
      Ee("Tap", {
        publicMethods: {
          initTap: function () {
            Ne("firstTouchStart", o.onTapStart), Ne("touchRelease", o.onTapRelease), Ne("destroy", function () {
              mn = {}, hn = null
            })
          }, onTapStart: function (e) {
            e.length > 1 && (clearTimeout(hn), hn = null)
          }, onTapRelease: function (e, t) {
            if (t && !J && !X && !Ve) {
              var n = t;
              if (hn && (clearTimeout(hn), hn = null, Tt(n, mn)))return void Ae("doubleTap", n);
              if ("mouse" === t.type)return void gn(e, t, "mouse");
              var r = e.target.tagName.toUpperCase();
              if ("BUTTON" === r || i.hasClass(e.target, "pswp__single-tap"))return void gn(e, t);
              Fe(mn, n), hn = setTimeout(function () {
                gn(e, t), hn = null
              }, 300)
            }
          }
        }
      });
      var vn;
      Ee("DesktopZoom", {
        publicMethods: {
          initDesktopZoom: function () {
            F || (L ? Ne("mouseUsed", function () {
              o.setupDesktopZoom()
            }) : o.setupDesktopZoom(!0))
          }, setupDesktopZoom: function (t) {
            vn = {};
            var n = "wheel mousewheel DOMMouseScroll";
            Ne("bindEvents", function () {
              i.bind(e, n, o.handleMouseWheel)
            }), Ne("unbindEvents", function () {
              vn && i.unbind(e, n, o.handleMouseWheel)
            }), o.mouseZoomedIn = !1;
            var r, a = function () {
              o.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"), o.mouseZoomedIn = !1), y < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"), s()
            }, s = function () {
              r && (i.removeClass(e, "pswp--dragging"), r = !1)
            };
            Ne("resize", a), Ne("afterChange", a), Ne("pointerDown", function () {
              o.mouseZoomedIn && (r = !0, i.addClass(e, "pswp--dragging"))
            }), Ne("pointerUp", s), t || a()
          }, handleMouseWheel: function (e) {
            if (y <= o.currItem.fitRatio)return l.modal && (!l.closeOnScroll || Ve || Z ? e.preventDefault() : I && Math.abs(e.deltaY) > 2 && (d = !0, o.close())), !0;
            if (e.stopPropagation(), vn.x = 0, "deltaX" in e)1 === e.deltaMode ? (vn.x = 18 * e.deltaX, vn.y = 18 * e.deltaY) : (vn.x = e.deltaX, vn.y = e.deltaY); else if ("wheelDelta" in e)e.wheelDeltaX && (vn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? vn.y = -.16 * e.wheelDeltaY : vn.y = -.16 * e.wheelDelta; else {
              if (!("detail" in e))return;
              vn.y = e.detail
            }
            We(y, !0);
            var t = he.x - vn.x, n = he.y - vn.y;
            (l.modal || t <= ne.min.x && t >= ne.max.x && n <= ne.min.y && n >= ne.max.y) && e.preventDefault(), o.panTo(t, n)
          }, toggleDesktopZoom: function (t) {
            t = t || {x: me.x / 2 + ve.x, y: me.y / 2 + ve.y};
            var n = l.getDoubleTapZoom(!0, o.currItem), r = y === n;
            o.mouseZoomedIn = !r, o.zoomTo(r ? o.currItem.initialZoomLevel : n, t, 333), i[(r ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
          }
        }
      });
      var yn, xn, bn, wn, Tn, Cn, En, kn, Sn, Nn, An, Dn, In = {history: !0, galleryUID: 1}, On = function () {
        return An.hash.substring(1)
      }, Ln = function () {
        yn && clearTimeout(yn), bn && clearTimeout(bn)
      }, _n = function () {
        var e = On(), t = {};
        if (e.length < 5)return t;
        var n, r = e.split("&");
        for (n = 0; n < r.length; n++)if (r[n]) {
          var i = r[n].split("=");
          i.length < 2 || (t[i[0]] = i[1])
        }
        if (l.galleryPIDs) {
          var o = t.pid;
          for (t.pid = 0, n = 0; n < Jt.length; n++)if (Jt[n].pid === o) {
            t.pid = n;
            break
          }
        } else t.pid = parseInt(t.pid, 10) - 1;
        return t.pid < 0 && (t.pid = 0), t
      }, Mn = function () {
        if (bn && clearTimeout(bn), Ve || Z)return void(bn = setTimeout(Mn, 500));
        wn ? clearTimeout(xn) : wn = !0;
        var e = f + 1, t = Vt(f);
        t.hasOwnProperty("pid") && (e = t.pid);
        var n = En + "&gid=" + l.galleryUID + "&pid=" + e;
        kn || An.hash.indexOf(n) === -1 && (Nn = !0);
        var r = An.href.split("#")[0] + "#" + n;
        Dn ? "#" + n !== window.location.hash && history[kn ? "replaceState" : "pushState"]("", document.title, r) : kn ? An.replace(r) : An.hash = n, kn = !0, xn = setTimeout(function () {
          wn = !1
        }, 60)
      };
      Ee("History", {
        publicMethods: {
          initHistory: function () {
            if (i.extend(l, In, !0), l.history) {
              An = window.location, Nn = !1, Sn = !1, kn = !1, En = On(), Dn = "pushState" in history, En.indexOf("gid=") > -1 && (En = En.split("&gid=")[0], En = En.split("?gid=")[0]), Ne("afterChange", o.updateURL), Ne("unbindEvents", function () {
                i.unbind(window, "hashchange", o.onHashChange)
              });
              var e = function () {
                Cn = !0, Sn || (Nn ? history.back() : En ? An.hash = En : Dn ? history.pushState("", document.title, An.pathname + An.search) : An.hash = ""), Ln()
              };
              Ne("unbindEvents", function () {
                d && e()
              }), Ne("destroy", function () {
                Cn || e()
              }), Ne("firstUpdate", function () {
                f = _n().pid
              });
              var t = En.indexOf("pid=");
              t > -1 && (En = En.substring(0, t), "&" === En.slice(-1) && (En = En.slice(0, -1))), setTimeout(function () {
                u && i.bind(window, "hashchange", o.onHashChange)
              }, 40)
            }
          }, onHashChange: function () {
            return On() === En ? (Sn = !0, void o.close()) : void(wn || (Tn = !0, o.goTo(_n().pid), Tn = !1))
          }, updateURL: function () {
            Ln(), Tn || (kn ? yn = setTimeout(Mn, 800) : Mn())
          }
        }
      }), i.extend(o, rt)
    };
    return e
  })
}]);
