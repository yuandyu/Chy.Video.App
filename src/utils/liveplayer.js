!function (e, t) {
  !function (S, t) {
    var d = [], f = S.document, u = d.slice, v = d.concat, s = d.push, l = d.indexOf, n = {}, c = n.toString,
      m = n.hasOwnProperty, C = {}, e = "1.12.4", T = function (e, t) {
        return new T.fn.init(e, t)
      }, i = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, r = /^-ms-/, o = /-([\da-z])/gi, a = function (e, t) {
        return t.toUpperCase()
      };

    function g(e) {
      var t = !!e && "length" in e && e.length, n = T.type(e);
      return "function" !== n && !T.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    T.fn = T.prototype = {
      jquery: e, constructor: T, selector: "", length: 0, toArray: function () {
        return u.call(this)
      }, get: function (e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
      }, pushStack: function (e) {
        var t = T.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      }, each: function (e) {
        return T.each(this, e)
      }, map: function (n) {
        return this.pushStack(T.map(this, function (e, t) {
          return n.call(e, t, e)
        }))
      }, slice: function () {
        return this.pushStack(u.apply(this, arguments))
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, eq: function (e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      }, end: function () {
        return this.prevObject || this.constructor()
      }, push: s, sort: d.sort, splice: d.splice
    }, T.extend = T.fn.extend = function () {
      var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || T.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = a[i], n = r[i], a !== n && (c && n && (T.isPlainObject(n) || (t = T.isArray(n))) ? (t ? (t = !1, o = e && T.isArray(e) ? e : []) : o = e && T.isPlainObject(e) ? e : {}, a[i] = T.extend(c, o, n)) : void 0 !== n && (a[i] = n));
      return a
    }, T.extend({
      expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
        throw new Error(e)
      }, noop: function () {
      }, isFunction: function (e) {
        return "function" === T.type(e)
      }, isArray: Array.isArray || function (e) {
        return "array" === T.type(e)
      }, isWindow: function (e) {
        return null != e && e == e.window
      }, isNumeric: function (e) {
        var t = e && e.toString();
        return !T.isArray(e) && 0 <= t - parseFloat(t) + 1
      }, isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      }, isPlainObject: function (e) {
        var t;
        if (!e || "object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1;
        try {
          if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1
        } catch (d) {
          return !1
        }
        if (!C.ownFirst) for (t in e) return m.call(e, t);
        for (t in e) ;
        return void 0 === t || m.call(e, t)
      }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[c.call(e)] || "object" : typeof e
      }, globalEval: function (e) {
        e && T.trim(e) && (S.execScript || function (e) {
          S.eval.call(S, e)
        })(e)
      }, camelCase: function (e) {
        return e.replace(r, "ms-").replace(o, a)
      }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }, each: function (e, t) {
        var n, i = 0;
        if (g(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e
      }, trim: function (e) {
        return null == e ? "" : (e + "").replace(i, "")
      }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (g(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
      }, inArray: function (e, t, n) {
        var i;
        if (t) {
          if (l) return l.call(t, e, n);
          for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in t && t[n] === e) return n
        }
        return -1
      }, merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
        if (n != n) for (; void 0 !== t[i];) e[r++] = t[i++];
        return e.length = r, e
      }, grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
        return i
      }, map: function (e, t, n) {
        var i, r, o = 0, a = [];
        if (g(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r); else for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
        return v.apply([], a)
      }, guid: 1, proxy: function (e, t) {
        var n, i, r;
        return "string" == typeof t && (r = e[t], t = e, e = r), T.isFunction(e) ? (n = u.call(arguments, 2), (i = function () {
          return e.apply(t || this, n.concat(u.call(arguments)))
        }).guid = e.guid = e.guid || T.guid++, i) : void 0
      }, now: function () {
        return +new Date
      }, support: C
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = d[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function (n) {
      var e, f, w, o, r, v, d, m, x, l, c, _, S, a, C, g, s, u, y, T = "sizzle" + 1 * new Date, b = n.document, k = 0,
        i = 0, A = re(), p = re(), E = re(), h = function (e, t) {
          return e === t && (c = !0), 0
        }, P = {}.hasOwnProperty, t = [], I = t.pop, j = t.push, B = t.push, M = t.slice, F = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1
        },
        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        D = "\\[" + L + "*(" + N + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        H = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + D + ")*)|.*)\\)|)",
        R = new RegExp(L + "+", "g"), U = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        V = new RegExp("^" + L + "*," + L + "*"), z = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        W = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), q = new RegExp(H), $ = new RegExp("^" + N + "$"),
        X = {
          ID: new RegExp("^#(" + N + ")"),
          CLASS: new RegExp("^\\.(" + N + ")"),
          TAG: new RegExp("^(" + N + "|[*])"),
          ATTR: new RegExp("^" + D),
          PSEUDO: new RegExp("^" + H),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + O + ")$", "i"),
          needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, G = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, Z = /'|\\/g,
        ee = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), te = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, ne = function () {
          _()
        };
      try {
        B.apply(t = M.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
      } catch (we) {
        B = {
          apply: t.length ? function (e, t) {
            j.apply(e, M.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];) ;
            e.length = n - 1
          }
        }
      }

      function ie(e, t, n, i) {
        var r, o, a, s, l, c, u, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
        if (!i && ((t ? t.ownerDocument || t : b) !== S && _(t), t = t || S, C)) {
          if (11 !== h && (c = K.exec(e))) if (r = c[1]) {
            if (9 === h) {
              if (!(a = t.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n
            } else if (p && (a = p.getElementById(r)) && y(t, a) && a.id === r) return n.push(a), n
          } else {
            if (c[2]) return B.apply(n, t.getElementsByTagName(e)), n;
            if ((r = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return B.apply(n, t.getElementsByClassName(r)), n
          }
          if (f.qsa && !E[e + " "] && (!g || !g.test(e))) {
            if (1 !== h) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
              for ((s = t.getAttribute("id")) ? s = s.replace(Z, "\\$&") : t.setAttribute("id", s = T), u = v(e), o = u.length, l = $.test(s) ? "#" + s : "[id='" + s + "']"; o--;) u[o] = l + " " + fe(u[o]);
              d = u.join(","), p = Q.test(e) && pe(t.parentNode) || t
            }
            if (d) try {
              return B.apply(n, p.querySelectorAll(d)), n
            } catch (A) {
            } finally {
              s === T && t.removeAttribute("id")
            }
          }
        }
        return m(e.replace(U, "$1"), t, n, i)
      }

      function re() {
        var i = [];
        return function e(t, n) {
          return i.push(t + " ") > w.cacheLength && delete e[i.shift()], e[t + " "] = n
        }
      }

      function oe(e) {
        return e[T] = !0, e
      }

      function ae(e) {
        var t = S.createElement("div");
        try {
          return !!e(t)
        } catch (f) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function se(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
      }

      function le(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (i) return i;
        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
        return e ? 1 : -1
      }

      function ce(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && e.type === n
        }
      }

      function ue(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n
        }
      }

      function de(a) {
        return oe(function (o) {
          return o = +o, oe(function (e, t) {
            for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
          })
        })
      }

      function pe(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }

      for (e in f = ie.support = {}, r = ie.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, _ = ie.setDocument = function (e) {
        var t, n, i = e ? e.ownerDocument || e : b;
        return i !== S && 9 === i.nodeType && i.documentElement && (a = (S = i).documentElement, C = !r(S), (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), f.attributes = ae(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), f.getElementsByTagName = ae(function (e) {
          return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
        }), f.getElementsByClassName = Y.test(S.getElementsByClassName), f.getById = ae(function (e) {
          return a.appendChild(e).id = T, !S.getElementsByName || !S.getElementsByName(T).length
        }), f.getById ? (w.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && C) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }, w.filter.ID = function (e) {
          var t = e.replace(ee, te);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }) : (delete w.find.ID, w.filter.ID = function (e) {
          var n = e.replace(ee, te);
          return function (e) {
            var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return t && t.value === n
          }
        }), w.find.TAG = f.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, i = [], r = 0, o = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return o
        }, w.find.CLASS = f.getElementsByClassName && function (e, t) {
          return "undefined" != typeof t.getElementsByClassName && C ? t.getElementsByClassName(e) : void 0
        }, s = [], g = [], (f.qsa = Y.test(S.querySelectorAll)) && (ae(function (e) {
          a.appendChild(e).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]")
        }), ae(function (e) {
          var t = S.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
        })), (f.matchesSelector = Y.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function (e) {
          f.disconnectedMatch = u.call(e, "div"), u.call(e, "[s!='']:x"), s.push("!=", H)
        }), g = g.length && new RegExp(g.join("|")), s = s.length && new RegExp(s.join("|")), t = Y.test(a.compareDocumentPosition), y = t || Y.test(a.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) if (t === e) return !0;
          return !1
        }, h = t ? function (e, t) {
          if (e === t) return c = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === b && y(b, e) ? -1 : t === S || t.ownerDocument === b && y(b, t) ? 1 : l ? F(l, e) - F(l, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return c = !0, 0;
          var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
          if (!r || !o) return e === S ? -1 : t === S ? 1 : r ? -1 : o ? 1 : l ? F(l, e) - F(l, t) : 0;
          if (r === o) return le(e, t);
          for (n = e; n = n.parentNode;) a.unshift(n);
          for (n = t; n = n.parentNode;) s.unshift(n);
          for (; a[i] === s[i];) i++;
          return i ? le(a[i], s[i]) : a[i] === b ? -1 : s[i] === b ? 1 : 0
        }), S
      }, ie.matches = function (e, t) {
        return ie(e, null, null, t)
      }, ie.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== S && _(e), t = t.replace(W, "='$1']"), f.matchesSelector && C && !E[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t))) try {
          var n = u.call(e, t);
          if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (o) {
        }
        return 0 < ie(t, S, null, [e]).length
      }, ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== S && _(e), y(e, t)
      }, ie.attr = function (e, t) {
        (e.ownerDocument || e) !== S && _(e);
        var n = w.attrHandle[t.toLowerCase()], i = n && P.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
        return void 0 !== i ? i : f.attributes || !C ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, ie.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, ie.uniqueSort = function (e) {
        var t, n = [], i = 0, r = 0;
        if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(h), c) {
          for (; t = e[r++];) t === e[r] && (i = n.push(r));
          for (; i--;) e.splice(n[i], 1)
        }
        return l = null, e
      }, o = ie.getText = function (e) {
        var t, n = "", i = 0, r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else for (; t = e[i++];) n += o(t);
        return n
      }, (w = ie.selectors = {
        cacheLength: 50,
        createPseudo: oe,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          ">": {dir: "parentNode", first: !0},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: !0},
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e
          }, PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = v(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ee, te).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          }, CLASS: function (e) {
            var t = A[e + " "];
            return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && A(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          }, ATTR: function (n, i, r) {
            return function (e) {
              var t = ie.attr(e, n);
              return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(R, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
            }
          }, CHILD: function (f, e, t, v, m) {
            var g = "nth" !== f.slice(0, 3), y = "last" !== f.slice(-4), b = "of-type" === e;
            return 1 === v && 0 === m ? function (e) {
              return !!e.parentNode
            } : function (e, t, n) {
              var i, r, o, a, s, l, c = g !== y ? "nextSibling" : "previousSibling", u = e.parentNode,
                d = b && e.nodeName.toLowerCase(), p = !n && !b, h = !1;
              if (u) {
                if (g) {
                  for (; c;) {
                    for (a = e; a = a[c];) if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                    l = c = "only" === f && !l && "nextSibling"
                  }
                  return !0
                }
                if (l = [y ? u.firstChild : u.lastChild], y && p) {
                  for (o = (a = u)[T] || (a[T] = {}), r = o[a.uniqueID] || (o[a.uniqueID] = {}), i = r[f] || [], s = i[0] === k && i[1], h = s && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (h = s = 0) || l.pop();) if (1 === a.nodeType && ++h && a === e) {
                    r[f] = [k, s, h];
                    break
                  }
                } else if (p && (o = (a = e)[T] || (a[T] = {}), r = o[a.uniqueID] || (o[a.uniqueID] = {}), i = r[f] || [], s = i[0] === k && i[1], h = s), !1 === h) for (; (a = ++s && a && a[c] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (p && (o = a[T] || (a[T] = {}), (r = o[a.uniqueID] || (o[a.uniqueID] = {}))[f] = [k, h]), a !== e));) ;
                return (h -= m) === v || h % v == 0 && 0 <= h / v
              }
            }
          }, PSEUDO: function (e, o) {
            var t, a = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e);
            return a[T] ? a(o) : 1 < a.length ? (t = [e, e, "", o], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
              for (var n, i = a(e, o), r = i.length; r--;) n = F(e, i[r]), e[n] = !(t[n] = i[r])
            }) : function (e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: oe(function (e) {
            var i = [], r = [], s = d(e.replace(U, "$1"));
            return s[T] ? oe(function (e, t, n, i) {
              for (var r, o = s(e, null, i, []), a = e.length; a--;) (r = o[a]) && (e[a] = !(t[a] = r))
            }) : function (e, t, n) {
              return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
            }
          }), has: oe(function (t) {
            return function (e) {
              return 0 < ie(t, e).length
            }
          }), contains: oe(function (t) {
            return t = t.replace(ee, te), function (e) {
              return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
            }
          }), lang: oe(function (n) {
            return $.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(), function (e) {
              var t;
              do {
                if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1
            }
          }), target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id
          }, root: function (e) {
            return e === a
          }, focus: function (e) {
            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          }, enabled: function (e) {
            return !1 === e.disabled
          }, disabled: function (e) {
            return !0 === e.disabled
          }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0
          }, parent: function (e) {
            return !w.pseudos.empty(e)
          }, header: function (e) {
            return J.test(e.nodeName)
          }, input: function (e) {
            return G.test(e.nodeName)
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          }, text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          }, first: de(function () {
            return [0]
          }), last: de(function (e, t) {
            return [t - 1]
          }), eq: de(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }), even: de(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }), odd: de(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }), lt: de(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
            return e
          }), gt: de(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }).pseudos.nth = w.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[e] = ce(e);
      for (e in{submit: !0, reset: !0}) w.pseudos[e] = ue(e);

      function he() {
      }

      function fe(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function ve(s, e, t) {
        var l = e.dir, c = t && "parentNode" === l, u = i++;
        return e.first ? function (e, t, n) {
          for (; e = e[l];) if (1 === e.nodeType || c) return s(e, t, n)
        } : function (e, t, n) {
          var i, r, o, a = [k, u];
          if (n) {
            for (; e = e[l];) if ((1 === e.nodeType || c) && s(e, t, n)) return !0
          } else for (; e = e[l];) if (1 === e.nodeType || c) {
            if (o = e[T] || (e[T] = {}), r = o[e.uniqueID] || (o[e.uniqueID] = {}), (i = r[l]) && i[0] === k && i[1] === u) return a[2] = i[2];
            if ((r[l] = a)[2] = s(e, t, n)) return !0
          }
        }
      }

      function me(r) {
        return 1 < r.length ? function (e, t, n) {
          for (var i = r.length; i--;) if (!r[i](e, t, n)) return !1;
          return !0
        } : r[0]
      }

      function ge(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
        return a
      }

      function ye(h, f, v, m, g, e) {
        return m && !m[T] && (m = ye(m)), g && !g[T] && (g = ye(g, e)), oe(function (e, t, n, i) {
          var r, o, a, s = [], l = [], c = t.length, u = e || function (e, t, n) {
              for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n);
              return n
            }(f || "*", n.nodeType ? [n] : n, []), d = !h || !e && f ? u : ge(u, s, h, n, i),
            p = v ? g || (e ? h : c || m) ? [] : t : d;
          if (v && v(d, p, n, i), m) for (r = ge(p, l), m(r, [], n, i), o = r.length; o--;) (a = r[o]) && (p[l[o]] = !(d[l[o]] = a));
          if (e) {
            if (g || h) {
              if (g) {
                for (r = [], o = p.length; o--;) (a = p[o]) && r.push(d[o] = a);
                g(null, p = [], r, i)
              }
              for (o = p.length; o--;) (a = p[o]) && -1 < (r = g ? F(e, a) : s[o]) && (e[r] = !(t[r] = a))
            }
          } else p = ge(p === t ? p.splice(c, p.length) : p), g ? g(null, t, p, i) : B.apply(t, p)
        })
      }

      function be(e) {
        for (var r, t, n, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = ve(function (e) {
          return e === r
        }, a, !0), c = ve(function (e) {
          return -1 < F(r, e)
        }, a, !0), u = [function (e, t, n) {
          var i = !o && (n || t !== x) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
          return r = null, i
        }]; s < i; s++) if (t = w.relative[e[s].type]) u = [ve(me(u), t)]; else {
          if ((t = w.filter[e[s].type].apply(null, e[s].matches))[T]) {
            for (n = ++s; n < i && !w.relative[e[n].type]; n++) ;
            return ye(1 < s && me(u), 1 < s && fe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(U, "$1"), t, s < n && be(e.slice(s, n)), n < i && be(e = e.slice(n)), n < i && fe(e))
          }
          u.push(t)
        }
        return me(u)
      }

      return he.prototype = w.filters = w.pseudos, w.setFilters = new he, v = ie.tokenize = function (e, t) {
        var n, i, r, o, a, s, l, c = p[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, s = [], l = w.preFilter; a;) {
          for (o in n && !(i = V.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = z.exec(a)) && (n = i.shift(), r.push({
            value: n,
            type: i[0].replace(U, " ")
          }), a = a.slice(n.length)), w.filter) !(i = X[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
            value: n,
            type: o,
            matches: i
          }), a = a.slice(n.length));
          if (!n) break
        }
        return t ? a.length : a ? ie.error(e) : p(e, s).slice(0)
      }, d = ie.compile = function (e, t) {
        var n, m, g, y, b, i, r = [], o = [], a = E[e + " "];
        if (!a) {
          for (t || (t = v(e)), n = t.length; n--;) (a = be(t[n]))[T] ? r.push(a) : o.push(a);
          (a = E(e, (m = o, y = 0 < (g = r).length, b = 0 < m.length, i = function (e, t, n, i, r) {
            var o, a, s, l = 0, c = "0", u = e && [], d = [], p = x, h = e || b && w.find.TAG("*", r),
              f = k += null == p ? 1 : Math.random() || .1, v = h.length;
            for (r && (x = t === S || t || r); c !== v && null != (o = h[c]); c++) {
              if (b && o) {
                for (a = 0, t || o.ownerDocument === S || (_(o), n = !C); s = m[a++];) if (s(o, t || S, n)) {
                  i.push(o);
                  break
                }
                r && (k = f)
              }
              y && ((o = !s && o) && l--, e && u.push(o))
            }
            if (l += c, y && c !== l) {
              for (a = 0; s = g[a++];) s(u, d, t, n);
              if (e) {
                if (0 < l) for (; c--;) u[c] || d[c] || (d[c] = I.call(i));
                d = ge(d)
              }
              B.apply(i, d), r && !e && 0 < d.length && 1 < l + g.length && ie.uniqueSort(i)
            }
            return r && (k = f, x = p), u
          }, y ? oe(i) : i))).selector = e
        }
        return a
      }, m = ie.select = function (e, t, n, i) {
        var r, o, a, s, l, c = "function" == typeof e && e, u = !i && v(e = c.selector || e);
        if (n = n || [], 1 === u.length) {
          if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && f.getById && 9 === t.nodeType && C && w.relative[o[1].type]) {
            if (!(t = (w.find.ID(a.matches[0].replace(ee, te), t) || [])[0])) return n;
            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
          }
          for (r = X.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !w.relative[s = a.type]);) if ((l = w.find[s]) && (i = l(a.matches[0].replace(ee, te), Q.test(o[0].type) && pe(t.parentNode) || t))) {
            if (o.splice(r, 1), !(e = i.length && fe(o))) return B.apply(n, i), n;
            break
          }
        }
        return (c || d(e, u))(i, t, !C, n, !t || Q.test(e) && pe(t.parentNode) || t), n
      }, f.sortStable = T.split("").sort(h).join("") === T, f.detectDuplicates = !!c, _(), f.sortDetached = ae(function (e) {
        return 1 & e.compareDocumentPosition(S.createElement("div"))
      }), ae(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || se("type|href|height|width", function (e, t, n) {
        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), f.attributes && ae(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || se("value", function (e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), ae(function (e) {
        return null == e.getAttribute("disabled")
      }) || se(O, function (e, t, n) {
        var i;
        return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), ie
    }(S);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains;
    var h = function (e, t, n) {
      for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (r && T(e).is(n)) break;
        i.push(e)
      }
      return i
    }, y = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }, b = T.expr.match.needsContext, k = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(e, n, i) {
      if (T.isFunction(n)) return T.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== i
      });
      if (n.nodeType) return T.grep(e, function (e) {
        return e === n !== i
      });
      if ("string" == typeof n) {
        if (w.test(n)) return T.filter(n, e, i);
        n = T.filter(n, e)
      }
      return T.grep(e, function (e) {
        return -1 < T.inArray(e, n) !== i
      })
    }

    T.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, T.fn.extend({
      find: function (e) {
        var t, n = [], i = this, r = i.length;
        if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
          for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0
        }));
        for (t = 0; t < r; t++) T.find(e, i[t], n);
        return (n = this.pushStack(1 < r ? T.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
      }, filter: function (e) {
        return this.pushStack(x(this, e || [], !1))
      }, not: function (e) {
        return this.pushStack(x(this, e || [], !0))
      }, is: function (e) {
        return !!x(this, "string" == typeof e && b.test(e) ? T(e) : e || [], !1).length
      }
    });
    var _, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function (e, t, n) {
      var i, r;
      if (!e) return this;
      if (n = n || _, "string" == typeof e) {
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), k.test(i[1]) && T.isPlainObject(t)) for (i in t) T.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        if ((r = f.getElementById(i[2])) && r.parentNode) {
          if (r.id !== i[2]) return _.find(e);
          this.length = 1, this[0] = r
        }
        return this.context = f, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : T.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(T) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), T.makeArray(e, this))
    }).prototype = T.fn, _ = T(f);
    var E = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};

    function I(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) ;
      return e
    }

    T.fn.extend({
      has: function (e) {
        var t, n = T(e, this), i = n.length;
        return this.filter(function () {
          for (t = 0; t < i; t++) if (T.contains(this, n[t])) return !0
        })
      }, closest: function (e, t) {
        for (var n, i = 0, r = this.length, o = [], a = b.test(e) || "string" != typeof e ? T(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
          o.push(n);
          break
        }
        return this.pushStack(1 < o.length ? T.uniqueSort(o) : o)
      }, index: function (e) {
        return e ? "string" == typeof e ? T.inArray(this[0], T(e)) : T.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), T.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return h(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return h(e, "parentNode", n)
      }, next: function (e) {
        return I(e, "nextSibling")
      }, prev: function (e) {
        return I(e, "previousSibling")
      }, nextAll: function (e) {
        return h(e, "nextSibling")
      }, prevAll: function (e) {
        return h(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return h(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return h(e, "previousSibling", n)
      }, siblings: function (e) {
        return y((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return y(e.firstChild)
      }, contents: function (e) {
        return T.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : T.merge([], e.childNodes)
      }
    }, function (i, r) {
      T.fn[i] = function (e, t) {
        var n = T.map(this, r, e);
        return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (P[i] || (n = T.uniqueSort(n)), E.test(i) && (n = n.reverse())), this.pushStack(n)
      }
    });
    var j, B, M = /\S+/g;

    function F() {
      f.addEventListener ? (f.removeEventListener("DOMContentLoaded", O), S.removeEventListener("load", O)) : (f.detachEvent("onreadystatechange", O), S.detachEvent("onload", O))
    }

    function O() {
      (f.addEventListener || "load" === S.event.type || "complete" === f.readyState) && (F(), T.ready())
    }

    for (B in T.Callbacks = function (i) {
      var e, n;
      i = "string" == typeof i ? (e = i, n = {}, T.each(e.match(M) || [], function (e, t) {
        n[t] = !0
      }), n) : T.extend({}, i);
      var r, t, o, a, s = [], l = [], c = -1, u = function () {
        for (a = i.once, o = r = !0; l.length; c = -1) for (t = l.shift(); ++c < s.length;) !1 === s[c].apply(t[0], t[1]) && i.stopOnFalse && (c = s.length, t = !1);
        i.memory || (t = !1), r = !1, a && (s = t ? [] : "")
      }, d = {
        add: function () {
          return s && (t && !r && (c = s.length - 1, l.push(t)), function n(e) {
            T.each(e, function (e, t) {
              T.isFunction(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== T.type(t) && n(t)
            })
          }(arguments), t && !r && u()), this
        }, remove: function () {
          return T.each(arguments, function (e, t) {
            for (var n; -1 < (n = T.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
          }), this
        }, has: function (e) {
          return e ? -1 < T.inArray(e, s) : 0 < s.length
        }, empty: function () {
          return s && (s = []), this
        }, disable: function () {
          return a = l = [], s = t = "", this
        }, disabled: function () {
          return !s
        }, lock: function () {
          return a = !0, t || d.disable(), this
        }, locked: function () {
          return !!a
        }, fireWith: function (e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || u()), this
        }, fire: function () {
          return d.fireWith(this, arguments), this
        }, fired: function () {
          return !!o
        }
      };
      return d
    }, T.extend({
      Deferred: function (e) {
        var o = [["resolve", "done", T.Callbacks("once memory"), "resolved"], ["reject", "fail", T.Callbacks("once memory"), "rejected"], ["notify", "progress", T.Callbacks("memory")]],
          r = "pending", a = {
            state: function () {
              return r
            }, always: function () {
              return s.done(arguments).fail(arguments), this
            }, then: function () {
              var r = arguments;
              return T.Deferred(function (i) {
                T.each(o, function (e, t) {
                  var n = T.isFunction(r[e]) && r[e];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && T.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments)
                  })
                }), r = null
              }).promise()
            }, promise: function (e) {
              return null != e ? T.extend(e, a) : a
            }
          }, s = {};
        return a.pipe = a.then, T.each(o, function (e, t) {
          var n = t[2], i = t[3];
          a[t[1]] = n.add, i && n.add(function () {
            r = i
          }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
            return s[t[0] + "With"](this === s ? a : this, arguments), this
          }, s[t[0] + "With"] = n.fireWith
        }), a.promise(s), e && e.call(s, s), s
      }, when: function (e) {
        var r, t, n, i = 0, o = u.call(arguments), a = o.length, s = 1 !== a || e && T.isFunction(e.promise) ? a : 0,
          l = 1 === s ? e : T.Deferred(), c = function (t, n, i) {
            return function (e) {
              n[t] = this, i[t] = 1 < arguments.length ? u.call(arguments) : e, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
            }
          };
        if (1 < a) for (r = new Array(a), t = new Array(a), n = new Array(a); i < a; i++) o[i] && T.isFunction(o[i].promise) ? o[i].promise().progress(c(i, t, r)).done(c(i, n, o)).fail(l.reject) : --s;
        return s || l.resolveWith(n, o), l.promise()
      }
    }), T.fn.ready = function (e) {
      return T.ready.promise().done(e), this
    }, T.extend({
      isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? T.readyWait++ : T.ready(!0)
      }, ready: function (e) {
        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0) !== e && 0 < --T.readyWait || (j.resolveWith(f, [T]), T.fn.triggerHandler && (T(f).triggerHandler("ready"), T(f).off("ready")))
      }
    }), T.ready.promise = function (t) {
      if (!j) if (j = T.Deferred(), "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll) S.setTimeout(T.ready); else if (f.addEventListener) f.addEventListener("DOMContentLoaded", O), S.addEventListener("load", O); else {
        f.attachEvent("onreadystatechange", O), S.attachEvent("onload", O);
        var n = !1;
        try {
          n = null == S.frameElement && f.documentElement
        } catch (u) {
        }
        n && n.doScroll && function e() {
          if (!T.isReady) {
            try {
              n.doScroll("left")
            } catch (t) {
              return S.setTimeout(e, 50)
            }
            F(), T.ready()
          }
        }()
      }
      return j.promise(t)
    }, T.ready.promise(), T(C)) break;
    C.ownFirst = "0" === B, C.inlineBlockNeedsLayout = !1, T(function () {
      var e, t, n, i;
      (n = f.getElementsByTagName("body")[0]) && n.style && (t = f.createElement("div"), (i = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", C.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }), function () {
      var e = f.createElement("div");
      C.deleteExpando = !0;
      try {
        delete e.test
      } catch (t) {
        C.deleteExpando = !1
      }
      e = null
    }();
    var L = function (e) {
      var t = T.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
      return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, D = /([A-Z])/g;

    function H(e, t, n) {
      if (void 0 === n && 1 === e.nodeType) {
        var i = "data-" + t.replace(D, "-$1").toLowerCase();
        if ("string" == typeof(n = e.getAttribute(i))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : N.test(n) ? T.parseJSON(n) : n)
          } catch (u) {
          }
          T.data(e, t, n)
        } else n = void 0
      }
      return n
    }

    function R(e) {
      var t;
      for (t in e) if (("data" !== t || !T.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0
    }

    function U(e, t, n, i) {
      if (L(e)) {
        var r, o, a = T.expando, s = e.nodeType, l = s ? T.cache : e, c = s ? e[a] : e[a] && a;
        if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = d.pop() || T.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: T.noop}), "object" != typeof t && "function" != typeof t || (i ? l[c] = T.extend(l[c], t) : l[c].data = T.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[T.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[T.camelCase(t)]) : r = o, r
      }
    }

    function V(e, t, n) {
      if (L(e)) {
        var i, r, o = e.nodeType, a = o ? T.cache : e, s = o ? e[T.expando] : T.expando;
        if (a[s]) {
          if (t && (i = n ? a[s] : a[s].data)) {
            T.isArray(t) ? t = t.concat(T.map(t, T.camelCase)) : t in i ? t = [t] : t = (t = T.camelCase(t)) in i ? [t] : t.split(" "), r = t.length;
            for (; r--;) delete i[t[r]];
            if (n ? !R(i) : !T.isEmptyObject(i)) return
          }
          (n || (delete a[s].data, R(a[s]))) && (o ? T.cleanData([e], !0) : C.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
        }
      }
    }

    T.extend({
      cache: {},
      noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
      hasData: function (e) {
        return !!(e = e.nodeType ? T.cache[e[T.expando]] : e[T.expando]) && !R(e)
      },
      data: function (e, t, n) {
        return U(e, t, n)
      },
      removeData: function (e, t) {
        return V(e, t)
      },
      _data: function (e, t, n) {
        return U(e, t, n, !0)
      },
      _removeData: function (e, t) {
        return V(e, t, !0)
      }
    }), T.fn.extend({
      data: function (e, t) {
        var n, i, r, o = this[0], a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && (r = T.data(o), 1 === o.nodeType && !T._data(o, "parsedAttrs"))) {
            for (n = a.length; n--;) a[n] && (0 === (i = a[n].name).indexOf("data-") && (i = T.camelCase(i.slice(5)), H(o, i, r[i])));
            T._data(o, "parsedAttrs", !0)
          }
          return r
        }
        return "object" == typeof e ? this.each(function () {
          T.data(this, e)
        }) : 1 < arguments.length ? this.each(function () {
          T.data(this, e, t)
        }) : o ? H(o, e, T.data(o, e)) : void 0
      }, removeData: function (e) {
        return this.each(function () {
          T.removeData(this, e)
        })
      }
    }), T.extend({
      queue: function (e, t, n) {
        var i;
        return e ? (t = (t || "fx") + "queue", i = T._data(e, t), n && (!i || T.isArray(n) ? i = T._data(e, t, T.makeArray(n)) : i.push(n)), i || []) : void 0
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = T.queue(e, t), i = n.length, r = n.shift(), o = T._queueHooks(e, t);
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
          T.dequeue(e, t)
        }, o)), !i && o && o.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return T._data(e, n) || T._data(e, n, {
          empty: T.Callbacks("once memory").add(function () {
            T._removeData(e, t + "queue"), T._removeData(e, n)
          })
        })
      }
    }), T.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function () {
          var e = T.queue(this, t, n);
          T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          T.dequeue(this, e)
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, t) {
        var n, i = 1, r = T.Deferred(), o = this, a = this.length, s = function () {
          --i || r.resolveWith(o, [o])
        };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = T._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
        return s(), r.promise(t)
      }
    }), C.shrinkWrapBlocks = function () {
      return null != z ? z : (z = !1, (t = f.getElementsByTagName("body")[0]) && t.style ? (e = f.createElement("div"), (n = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(f.createElement("div")).style.width = "5px", z = 3 !== e.offsetWidth), t.removeChild(n), z) : void 0);
      var e, t, n
    };
    var z;
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, q = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
      $ = ["Top", "Right", "Bottom", "Left"], X = function (e, t) {
        return e = t || e, "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e)
      };

    function G(e, t, n, i) {
      var r, o = 1, a = 20, s = i ? function () {
          return i.cur()
        } : function () {
          return T.css(e, t, "")
        }, l = s(), c = n && n[3] || (T.cssNumber[t] ? "" : "px"),
        u = (T.cssNumber[t] || "px" !== c && +l) && q.exec(T.css(e, t));
      if (u && u[3] !== c) for (c = c || u[3], n = n || [], u = +l || 1; u /= o = o || ".5", T.style(e, t, u + c), o !== (o = s() / l) && 1 !== o && --a;) ;
      return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    var J = function (e, t, n, i, r, o, a) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === T.type(n)) for (s in r = !0, n) J(e, t, s, n[s], !0, o, a); else if (void 0 !== i && (r = !0, T.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(T(e), n)
        })), t)) for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
      }, Y = /^(?:checkbox|radio)$/i, K = /<([\w:-]+)/, Q = /^$|\/(?:java|ecma)script/i, Z = /^\s+/,
      ee = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function te(e) {
      var t = ee.split("|"), n = e.createDocumentFragment();
      if (n.createElement) for (; t.length;) n.createElement(t.pop());
      return n
    }

    ne = f.createElement("div"), ie = f.createDocumentFragment(), re = f.createElement("input"), ne.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", C.leadingWhitespace = 3 === ne.firstChild.nodeType, C.tbody = !ne.getElementsByTagName("tbody").length, C.htmlSerialize = !!ne.getElementsByTagName("link").length, C.html5Clone = "<:nav></:nav>" !== f.createElement("nav").cloneNode(!0).outerHTML, re.type = "checkbox", re.checked = !0, ie.appendChild(re), C.appendChecked = re.checked, ne.innerHTML = "<textarea>x</textarea>", C.noCloneChecked = !!ne.cloneNode(!0).lastChild.defaultValue, ie.appendChild(ne), (re = f.createElement("input")).setAttribute("type", "radio"), re.setAttribute("checked", "checked"), re.setAttribute("name", "t"), ne.appendChild(re), C.checkClone = ne.cloneNode(!0).cloneNode(!0).lastChild.checked, C.noCloneEvent = !!ne.addEventListener, ne[T.expando] = 1, C.attributes = !ne.getAttribute(T.expando);
    var ne, ie, re;
    var oe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: C.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function we(e, t) {
      var n, i, r = 0,
        o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
      if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || T.nodeName(i, t) ? o.push(i) : T.merge(o, we(i, t));
      return void 0 === t || t && T.nodeName(e, t) ? T.merge([e], o) : o
    }

    function ae(e, t) {
      for (var n, i = 0; null != (n = e[i]); i++) T._data(n, "globalEval", !t || T._data(t[i], "globalEval"))
    }

    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
    var se = /<|&#?\w+;/, le = /<tbody/i;

    function ce(e) {
      Y.test(e.type) && (e.defaultChecked = e.checked)
    }

    function ue(e, t, n, i, r) {
      for (var o, a, s, l, c, u, d, p = e.length, h = te(t), f = [], v = 0; v < p; v++) if ((a = e[v]) || 0 === a) if ("object" === T.type(a)) T.merge(f, a.nodeType ? [a] : a); else if (se.test(a)) {
        for (l = l || h.appendChild(t.createElement("div")), c = (K.exec(a) || ["", ""])[1].toLowerCase(), d = oe[c] || oe._default, l.innerHTML = d[1] + T.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
        if (!C.leadingWhitespace && Z.test(a) && f.push(t.createTextNode(Z.exec(a)[0])), !C.tbody) for (a = "table" !== c || le.test(a) ? "<table>" !== d[1] || le.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;) T.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
        for (T.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
        l = h.lastChild
      } else f.push(t.createTextNode(a));
      for (l && h.removeChild(l), C.appendChecked || T.grep(we(f, "input"), ce), v = 0; a = f[v++];) if (i && -1 < T.inArray(a, i)) r && r.push(a); else if (s = T.contains(a.ownerDocument, a), l = we(h.appendChild(a), "script"), s && ae(l), n) for (o = 0; a = l[o++];) Q.test(a.type || "") && n.push(a);
      return l = null, h
    }

    !function () {
      var e, t, n = f.createElement("div");
      for (e in{
        submit: !0,
        change: !0,
        focusin: !0
      }) t = "on" + e, (C[e] = t in S) || (n.setAttribute(t, "t"), C[e] = !1 === n.attributes[t].expando);
      n = null
    }();
    var de = /^(?:input|select|textarea)$/i, pe = /^key/, he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fe = /^(?:focusinfocus|focusoutblur)$/, ve = /^([^.]*)(?:\.(.+)|)/;

    function me() {
      return !0
    }

    function ge() {
      return !1
    }

    function ye() {
      try {
        return f.activeElement
      } catch (S) {
      }
    }

    function be(e, t, n, i, r, o) {
      var a, s;
      if ("object" == typeof t) {
        for (s in"string" != typeof n && (i = i || n, n = void 0), t) be(e, s, n, i, t[s], o);
        return e
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = ge; else if (!r) return e;
      return 1 === o && (a = r, (r = function (e) {
        return T().off(e), a.apply(this, arguments)
      }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
        T.event.add(this, t, r, i, n)
      })
    }

    T.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var o, a, s, l, c, u, d, p, h, f, v, m = T._data(e);
        if (m) {
          for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = T.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || ((u = m.handle = function (e) {
            return void 0 === T || e && T.event.triggered === e.type ? void 0 : T.event.dispatch.apply(u.elem, arguments)
          }).elem = e), t = (t || "").match(M) || [""], s = t.length; s--;) o = ve.exec(t[s]) || [], h = v = o[1], f = (o[2] || "").split(".").sort(), h && (c = T.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = T.event.special[h] || {}, d = T.extend({
            type: h,
            origType: v,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && T.expr.match.needsContext.test(r),
            namespace: f.join(".")
          }, l), (p = a[h]) || ((p = a[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), T.event.global[h] = !0);
          e = null
        }
      },
      remove: function (e, t, n, i, r) {
        var o, a, s, l, c, u, d, p, h, f, v, m = T.hasData(e) && T._data(e);
        if (m && (u = m.events)) {
          for (t = (t || "").match(M) || [""], c = t.length; c--;) if (s = ve.exec(t[c]) || [], h = v = s[1], f = (s[2] || "").split(".").sort(), h) {
            for (d = T.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) a = p[o], !r && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
            l && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || T.removeEvent(e, h, m.handle), delete u[h])
          } else for (h in u) T.event.remove(e, h + t[c], n, i, !0);
          T.isEmptyObject(u) && (delete m.handle, T._removeData(e, "events"))
        }
      },
      trigger: function (e, t, n, i) {
        var r, o, a, s, l, c, u, d = [n || f], p = m.call(e, "type") ? e.type : e,
          h = m.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = c = n = n || f, 3 !== n.nodeType && 8 !== n.nodeType && !fe.test(p + T.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), o = p.indexOf(":") < 0 && "on" + p, (e = e[T.expando] ? e : new T.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), l = T.event.special[p] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
          if (!i && !l.noBubble && !T.isWindow(n)) {
            for (s = l.delegateType || p, fe.test(s + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
            c === (n.ownerDocument || f) && d.push(c.defaultView || c.parentWindow || S)
          }
          for (u = 0; (a = d[u++]) && !e.isPropagationStopped();) e.type = 1 < u ? s : l.bindType || p, (r = (T._data(a, "events") || {})[e.type] && T._data(a, "handle")) && r.apply(a, t), (r = o && a[o]) && r.apply && L(a) && (e.result = r.apply(a, t), !1 === e.result && e.preventDefault());
          if (e.type = p, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), t)) && L(n) && o && n[p] && !T.isWindow(n)) {
            (c = n[o]) && (n[o] = null), T.event.triggered = p;
            try {
              n[p]()
            } catch (g) {
            }
            T.event.triggered = void 0, c && (n[o] = c)
          }
          return e.result
        }
      },
      dispatch: function (e) {
        e = T.event.fix(e);
        var t, n, i, r, o, a = [], s = u.call(arguments), l = (T._data(this, "events") || {})[e.type] || [],
          c = T.event.special[e.type] || {};
        if ((s[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (a = T.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((T.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function (e, t) {
        var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
        if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
          for (i = [], n = 0; n < s; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? -1 < T(r, this).index(l) : T.find(r, this, null, [l]).length), i[r] && i.push(o);
          i.length && a.push({elem: l, handlers: i})
        }
        return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
      },
      fix: function (e) {
        if (e[T.expando]) return e;
        var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
        for (a || (this.fixHooks[r] = a = he.test(r) ? this.mouseHooks : pe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new T.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
        return e.target || (e.target = o.srcElement || f), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n, i, r, o = t.button, a = t.fromElement;
          return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || f, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
        }
      },
      special: {
        load: {noBubble: !0}, focus: {
          trigger: function () {
            if (this !== ye() && this.focus) try {
              return this.focus(), !1
            } catch (S) {
            }
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            return this === ye() && this.blur ? (this.blur(), !1) : void 0
          }, delegateType: "focusout"
        }, click: {
          trigger: function () {
            return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          }, _default: function (e) {
            return T.nodeName(e.target, "a")
          }
        }, beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      },
      simulate: function (e, t, n) {
        var i = T.extend(new T.Event, n, {type: e, isSimulated: !0});
        T.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
      }
    }, T.removeEvent = f.removeEventListener ? function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
      var i = "on" + t;
      e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, T.Event = function (e, t) {
      return this instanceof T.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? me : ge) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(e, t)
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: ge,
      isPropagationStopped: ge,
      isImmediatePropagationStopped: ge,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = me, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = me, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = me, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, r) {
      T.event.special[e] = {
        delegateType: r, bindType: r, handle: function (e) {
          var t, n = e.relatedTarget, i = e.handleObj;
          return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
        }
      }
    }), C.submit || (T.event.special.submit = {
      setup: function () {
        return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function (e) {
          var t = e.target, n = T.nodeName(t, "input") || T.nodeName(t, "button") ? T.prop(t, "form") : void 0;
          n && !T._data(n, "submit") && (T.event.add(n, "submit._submit", function (e) {
            e._submitBubble = !0
          }), T._data(n, "submit", !0))
        })
      }, postDispatch: function (e) {
        e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && T.event.simulate("submit", this.parentNode, e))
      }, teardown: function () {
        return !T.nodeName(this, "form") && void T.event.remove(this, "._submit")
      }
    }), C.change || (T.event.special.change = {
      setup: function () {
        return de.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (T.event.add(this, "propertychange._change", function (e) {
          "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
        }), T.event.add(this, "click._change", function (e) {
          this._justChanged && !e.isTrigger && (this._justChanged = !1), T.event.simulate("change", this, e)
        })), !1) : void T.event.add(this, "beforeactivate._change", function (e) {
          var t = e.target;
          de.test(t.nodeName) && !T._data(t, "change") && (T.event.add(t, "change._change", function (e) {
            !this.parentNode || e.isSimulated || e.isTrigger || T.event.simulate("change", this.parentNode, e)
          }), T._data(t, "change", !0))
        })
      }, handle: function (e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
      }, teardown: function () {
        return T.event.remove(this, "._change"), !de.test(this.nodeName)
      }
    }), C.focusin || T.each({focus: "focusin", blur: "focusout"}, function (n, i) {
      var r = function (e) {
        T.event.simulate(i, e.target, T.event.fix(e))
      };
      T.event.special[i] = {
        setup: function () {
          var e = this.ownerDocument || this, t = T._data(e, i);
          t || e.addEventListener(n, r, !0), T._data(e, i, (t || 0) + 1)
        }, teardown: function () {
          var e = this.ownerDocument || this, t = T._data(e, i) - 1;
          t ? T._data(e, i, t) : (e.removeEventListener(n, r, !0), T._removeData(e, i))
        }
      }
    }), T.fn.extend({
      on: function (e, t, n, i) {
        return be(this, e, t, n, i)
      }, one: function (e, t, n, i) {
        return be(this, e, t, n, i, 1)
      }, off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ge), this.each(function () {
          T.event.remove(this, e, n, t)
        })
      }, trigger: function (e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, t) {
        var n = this[0];
        return n ? T.event.trigger(e, t, n, !0) : void 0
      }
    });
    var xe = / jQuery\d+="(?:null|\d+)"/g, _e = new RegExp("<(?:" + ee + ")[\\s/>]", "i"),
      Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ce = /<script|<style|<link/i,
      Te = /checked\s*(?:[^=]|=\s*.checked.)/i, ke = /^true\/(.*)/, Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Ee = te(f).appendChild(f.createElement("div"));

    function Pe(e, t) {
      return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ie(e) {
      return e.type = (null !== T.find.attr(e, "type")) + "/" + e.type, e
    }

    function je(e) {
      var t = ke.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Be(e, t) {
      if (1 === t.nodeType && T.hasData(e)) {
        var n, i, r, o = T._data(e), a = T._data(t, o), s = o.events;
        if (s) for (n in delete a.handle, a.events = {}, s) for (i = 0, r = s[n].length; i < r; i++) T.event.add(t, n, s[n][i]);
        a.data && (a.data = T.extend({}, a.data))
      }
    }

    function Me(e, t) {
      var n, i, r;
      if (1 === t.nodeType) {
        if (n = t.nodeName.toLowerCase(), !C.noCloneEvent && t[T.expando]) {
          for (i in(r = T._data(t)).events) T.removeEvent(t, i, r.handle);
          t.removeAttribute(T.expando)
        }
        "script" === n && t.text !== e.text ? (Ie(t).text = e.text, je(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), C.html5Clone && e.innerHTML && !T.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Y.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
      }
    }

    function Fe(n, i, r, o) {
      i = v.apply([], i);
      var e, t, a, s, l, c, u = 0, d = n.length, p = d - 1, h = i[0], f = T.isFunction(h);
      if (f || 1 < d && "string" == typeof h && !C.checkClone && Te.test(h)) return n.each(function (e) {
        var t = n.eq(e);
        f && (i[0] = h.call(this, e, t.html())), Fe(t, i, r, o)
      });
      if (d && (c = ue(i, n[0].ownerDocument, !1, n, o), e = c.firstChild, 1 === c.childNodes.length && (c = e), e || o)) {
        for (s = T.map(we(c, "script"), Ie), a = s.length; u < d; u++) t = c, u !== p && (t = T.clone(t, !0, !0), a && T.merge(s, we(t, "script"))), r.call(n[u], t, u);
        if (a) for (l = s[s.length - 1].ownerDocument, T.map(s, je), u = 0; u < a; u++) t = s[u], Q.test(t.type || "") && !T._data(t, "globalEval") && T.contains(l, t) && (t.src ? T._evalUrl && T._evalUrl(t.src) : T.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ae, "")));
        c = e = null
      }
      return n
    }

    function Oe(e, t, n) {
      for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || T.cleanData(we(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && ae(we(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    T.extend({
      htmlPrefilter: function (e) {
        return e.replace(Se, "<$1></$2>")
      }, clone: function (e, t, n) {
        var i, r, o, a, s, l = T.contains(e.ownerDocument, e);
        if (C.html5Clone || T.isXMLDoc(e) || !_e.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ee.innerHTML = e.outerHTML, Ee.removeChild(o = Ee.firstChild)), !(C.noCloneEvent && C.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (i = we(o), s = we(e), a = 0; null != (r = s[a]); ++a) i[a] && Me(r, i[a]);
        if (t) if (n) for (s = s || we(e), i = i || we(o), a = 0; null != (r = s[a]); a++) Be(r, i[a]); else Be(e, o);
        return 0 < (i = we(o, "script")).length && ae(i, !l && we(e, "script")), i = s = r = null, o
      }, cleanData: function (e, t) {
        for (var n, i, r, o, a = 0, s = T.expando, l = T.cache, c = C.attributes, u = T.event.special; null != (n = e[a]); a++) if ((t || L(n)) && (r = n[s], o = r && l[r])) {
          if (o.events) for (i in o.events) u[i] ? T.event.remove(n, i) : T.removeEvent(n, i, o.handle);
          l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), d.push(r))
        }
      }
    }), T.fn.extend({
      domManip: Fe, detach: function (e) {
        return Oe(this, e, !0)
      }, remove: function (e) {
        return Oe(this, e)
      }, text: function (e) {
        return J(this, function (e) {
          return void 0 === e ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || f).createTextNode(e))
        }, null, e, arguments.length)
      }, append: function () {
        return Fe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Pe(this, e);
            t.appendChild(e)
          }
        })
      }, prepend: function () {
        return Fe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Pe(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      }, before: function () {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && T.cleanData(we(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
          e.options && T.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return T.clone(this, e, t)
        })
      }, html: function (e) {
        return J(this, function (e) {
          var t = this[0] || {}, n = 0, i = this.length;
          if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(xe, "") : void 0;
          if ("string" == typeof e && !Ce.test(e) && (C.htmlSerialize || !_e.test(e)) && (C.leadingWhitespace || !Z.test(e)) && !oe[(K.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = T.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(we(t, !1)), t.innerHTML = e);
              t = 0
            } catch (u) {
            }
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function () {
        var n = [];
        return Fe(this, arguments, function (e) {
          var t = this.parentNode;
          T.inArray(this, n) < 0 && (T.cleanData(we(this)), t && t.replaceChild(e, this))
        }, n)
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, a) {
      T.fn[e] = function (e) {
        for (var t, n = 0, i = [], r = T(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), T(r[n])[a](t), s.apply(i, t.get());
        return this.pushStack(i)
      }
    });
    var Le, Ne = {HTML: "block", BODY: "block"};

    function De(e, t) {
      var n = T(t.createElement(e)).appendTo(t.body), i = T.css(n[0], "display");
      return n.detach(), i
    }

    function He(e) {
      var t = f, n = Ne[e];
      return n || ("none" !== (n = De(e, t)) && n || (Le = (Le || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), (t = (Le[0].contentWindow || Le[0].contentDocument).document).write(), t.close(), n = De(e, t), Le.detach()), Ne[e] = n), n
    }

    var Re = /^margin/, Ue = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"), Ve = function (e, t, n, i) {
      var r, o, a = {};
      for (o in t) a[o] = e.style[o], e.style[o] = t[o];
      for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
      return r
    }, ze = f.documentElement;
    !function () {
      var i, r, o, a, s, l, c = f.createElement("div"), u = f.createElement("div");
      if (u.style) {
        function e() {
          var e, t, n = f.documentElement;
          n.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = o = l = !1, r = s = !0, S.getComputedStyle && (t = S.getComputedStyle(u), i = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, o = "4px" === (t || {width: "4px"}).width, u.style.marginRight = "50%", r = "4px" === (t || {marginRight: "4px"}).marginRight, (e = u.appendChild(f.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((S.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", (a = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(c)
        }

        u.style.cssText = "float:left;opacity:.5", C.opacity = "0.5" === u.style.opacity, C.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", C.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = f.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), C.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, T.extend(C, {
          reliableHiddenOffsets: function () {
            return null == i && e(), a
          }, boxSizingReliable: function () {
            return null == i && e(), o
          }, pixelMarginRight: function () {
            return null == i && e(), r
          }, pixelPosition: function () {
            return null == i && e(), i
          }, reliableMarginRight: function () {
            return null == i && e(), s
          }, reliableMarginLeft: function () {
            return null == i && e(), l
          }
        })
      }
    }();
    var We, qe, $e = /^(top|right|bottom|left)$/;

    function Xe(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    S.getComputedStyle ? (We = function (e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = S), t.getComputedStyle(e)
    }, qe = function (e, t, n) {
      var i, r, o, a, s = e.style;
      return n = n || We(e), "" !== (a = n ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), n && !C.pixelMarginRight() && Ue.test(a) && Re.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
    }) : ze.currentStyle && (We = function (e) {
      return e.currentStyle
    }, qe = function (e, t, n) {
      var i, r, o, a, s = e.style;
      return n = n || We(e), null == (a = n ? n[t] : void 0) && s && s[t] && (a = s[t]), Ue.test(a) && !$e.test(t) && (i = s.left, r = e.runtimeStyle, (o = r && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
    });
    var Ge = /alpha\([^)]*\)/i, Je = /opacity\s*=\s*([^)]*)/i, Ye = /^(none|table(?!-c[ea]).+)/,
      Ke = new RegExp("^(" + W + ")(.*)$", "i"), Qe = {position: "absolute", visibility: "hidden", display: "block"},
      Ze = {letterSpacing: "0", fontWeight: "400"}, et = ["Webkit", "O", "Moz", "ms"],
      tt = f.createElement("div").style;

    function nt(e) {
      if (e in tt) return e;
      for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--;) if ((e = et[n] + t) in tt) return e
    }

    function it(e, t) {
      for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) (i = e[a]).style && (o[a] = T._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && X(i) && (o[a] = T._data(i, "olddisplay", He(i.nodeName)))) : (r = X(i), (n && "none" !== n || !r) && T._data(i, "olddisplay", r ? n : T.css(i, "display"))));
      for (a = 0; a < s; a++) (i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
      return e
    }

    function rt(e, t, n) {
      var i = Ke.exec(t);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function ot(e, t, n, i, r) {
      for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += T.css(e, n + $[o], !0, r)), i ? ("content" === n && (a -= T.css(e, "padding" + $[o], !0, r)), "margin" !== n && (a -= T.css(e, "border" + $[o] + "Width", !0, r))) : (a += T.css(e, "padding" + $[o], !0, r), "padding" !== n && (a += T.css(e, "border" + $[o] + "Width", !0, r)));
      return a
    }

    function at(e, t, n) {
      var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = We(e),
        a = C.boxSizing && "border-box" === T.css(e, "boxSizing", !1, o);
      if (r <= 0 || null == r) {
        if (((r = qe(e, t, o)) < 0 || null == r) && (r = e.style[t]), Ue.test(r)) return r;
        i = a && (C.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
      }
      return r + ot(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function st(e, t, n, i, r) {
      return new st.prototype.init(e, t, n, i, r)
    }

    T.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = qe(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": C.cssFloat ? "cssFloat" : "styleFloat"},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r, o, a, s = T.camelCase(t), l = e.style;
          if (t = T.cssProps[s] || (T.cssProps[s] = nt(s) || s), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
          if ("string" === (o = typeof n) && (r = q.exec(n)) && r[1] && (n = G(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (T.cssNumber[s] ? "" : "px")), C.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
            l[t] = n
          } catch (c) {
          }
        }
      },
      css: function (e, t, n, i) {
        var r, o, a, s = T.camelCase(t);
        return t = T.cssProps[s] || (T.cssProps[s] = nt(s) || s), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = qe(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
      }
    }), T.each(["height", "width"], function (e, r) {
      T.cssHooks[r] = {
        get: function (e, t, n) {
          return t ? Ye.test(T.css(e, "display")) && 0 === e.offsetWidth ? Ve(e, Qe, function () {
            return at(e, r, n)
          }) : at(e, r, n) : void 0
        }, set: function (e, t, n) {
          var i = n && We(e);
          return rt(e, t, n ? ot(e, r, n, C.boxSizing && "border-box" === T.css(e, "boxSizing", !1, i), i) : 0)
        }
      }
    }), C.opacity || (T.cssHooks.opacity = {
      get: function (e, t) {
        return Je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      }, set: function (e, t) {
        var n = e.style, i = e.currentStyle, r = T.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = i && i.filter || n.filter || "";
        ((n.zoom = 1) <= t || "" === t) && "" === T.trim(o.replace(Ge, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Ge.test(o) ? o.replace(Ge, r) : o + " " + r)
      }
    }), T.cssHooks.marginRight = Xe(C.reliableMarginRight, function (e, t) {
      return t ? Ve(e, {display: "inline-block"}, qe, [e, "marginRight"]) : void 0
    }), T.cssHooks.marginLeft = Xe(C.reliableMarginLeft, function (e, t) {
      return t ? (parseFloat(qe(e, "marginLeft")) || (T.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ve(e, {marginLeft: 0}, function () {
        return e.getBoundingClientRect().left
      }) : 0)) + "px" : void 0
    }), T.each({margin: "", padding: "", border: "Width"}, function (r, o) {
      T.cssHooks[r + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + $[t] + o] = i[t] || i[t - 2] || i[0];
          return n
        }
      }, Re.test(r) || (T.cssHooks[r + o].set = rt)
    }), T.fn.extend({
      css: function (e, t) {
        return J(this, function (e, t, n) {
          var i, r, o = {}, a = 0;
          if (T.isArray(t)) {
            for (i = We(e), r = t.length; a < r; a++) o[t[a]] = T.css(e, t[a], !1, i);
            return o
          }
          return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
        }, e, t, 1 < arguments.length)
      }, show: function () {
        return it(this, !0)
      }, hide: function () {
        return it(this)
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          X(this) ? T(this).show() : T(this).hide()
        })
      }
    }), ((T.Tween = st).prototype = {
      constructor: st, init: function (e, t, n, i, r, o) {
        this.elem = e, this.prop = n, this.easing = r || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = st.propHooks[this.prop];
        return e && e.get ? e.get(this) : st.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = st.propHooks[this.prop];
        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
      }
    }).init.prototype = st.prototype, (st.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        }, set: function (e) {
          T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[T.cssProps[e.prop]] && !T.cssHooks[e.prop] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }).scrollTop = st.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, T.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }, _default: "swing"
    }, T.fx = st.prototype.init, T.fx.step = {};
    var lt, ct, ut = /^(?:toggle|show|hide)$/, dt = /queueHooks$/;

    function pt() {
      return S.setTimeout(function () {
        lt = void 0
      }), lt = T.now()
    }

    function ht(e, t) {
      var n, i = {height: e}, r = 0;
      for (t = t ? 1 : 0; r < 4; r += 2 - t) n = $[r], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function ft(e, t, n) {
      for (var i, r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i
    }

    function vt(a, e, t) {
      var n, s, i = 0, r = vt.prefilters.length, l = T.Deferred().always(function () {
        delete o.elem
      }), o = function () {
        if (s) return !1;
        for (var e = lt || pt(), t = Math.max(0, c.startTime + c.duration - e), n = t / c.duration || 0, i = 1 - n, r = 0, o = c.tweens.length; r < o; r++) c.tweens[r].run(i);
        return l.notifyWith(a, [c, i, t]), i < 1 && o ? t : (l.resolveWith(a, [c]), !1)
      }, c = l.promise({
        elem: a,
        props: T.extend({}, e),
        opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, t),
        originalProperties: e,
        originalOptions: t,
        startTime: lt || pt(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = T.Tween(a, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
          return c.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0, n = e ? c.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) c.tweens[t].run(1);
          return e ? (l.notifyWith(a, [c, 1, 0]), l.resolveWith(a, [c, e])) : l.rejectWith(a, [c, e]), this
        }
      }), u = c.props;
      for (function (e, t) {
        var n, i, r, o, a;
        for (n in e) if (i = T.camelCase(n), r = t[i], o = e[n], T.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = T.cssHooks[i]) && "expand" in a) for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r
      }(u, c.opts.specialEasing); i < r; i++) if (n = vt.prefilters[i].call(c, a, u, c.opts)) return T.isFunction(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = T.proxy(n.stop, n)), n;
      return T.map(u, ft, c), T.isFunction(c.opts.start) && c.opts.start.call(a, c), T.fx.timer(T.extend(o, {
        elem: a,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    T.Animation = T.extend(vt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return G(n.elem, e, q.exec(t), n), n
        }]
      }, tweener: function (e, t) {
        T.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(M);
        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
      }, prefilters: [function (t, e, n) {
        var i, r, o, a, s, l, c, u = this, d = {}, p = t.style, h = t.nodeType && X(t), f = T._data(t, "fxshow");
        for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
          s.unqueued || l()
        }), s.unqueued++, u.always(function () {
          u.always(function () {
            s.unqueued--, T.queue(t, "fx").length || s.empty.fire()
          })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = T.css(t, "display"), "inline" === ("none" === c ? T._data(t, "olddisplay") || He(t.nodeName) : c) && "none" === T.css(t, "float") && (C.inlineBlockNeedsLayout && "inline" !== He(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", C.shrinkWrapBlocks() || u.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        })), e) if (r = e[i], ut.exec(r)) {
          if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
            if ("show" !== r || !f || void 0 === f[i]) continue;
            h = !0
          }
          d[i] = f && f[i] || T.style(t, i)
        } else c = void 0;
        if (T.isEmptyObject(d)) "inline" === ("none" === c ? He(t.nodeName) : c) && (p.display = c); else for (i in f ? "hidden" in f && (h = f.hidden) : f = T._data(t, "fxshow", {}), o && (f.hidden = !h), h ? T(t).show() : u.done(function () {
          T(t).hide()
        }), u.done(function () {
          var e;
          for (e in T._removeData(t, "fxshow"), d) T.style(t, e, d[e])
        }), d) a = ft(h ? f[i] : 0, i, u), i in f || (f[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
      }], prefilter: function (e, t) {
        t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
      }
    }), T.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? T.extend({}, e) : {
        complete: n || !n && t || T.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !T.isFunction(t) && t
      };
      return i.duration = T.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in T.fx.speeds ? T.fx.speeds[i.duration] : T.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
      }, i
    }, T.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(X).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
      }, animate: function (t, e, n, i) {
        var r = T.isEmptyObject(t), o = T.speed(e, n, i), a = function () {
          var e = vt(this, T.extend({}, t), o);
          (r || T._data(this, "finish")) && e.stop(!0)
        };
        return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
      }, stop: function (r, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o)
        };
        return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
          var e = !0, t = null != r && r + "queueHooks", n = T.timers, i = T._data(this);
          if (t) i[t] && i[t].stop && a(i[t]); else for (t in i) i[t] && i[t].stop && dt.test(t) && a(i[t]);
          for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
          !e && o || T.dequeue(this, r)
        })
      }, finish: function (a) {
        return !1 !== a && (a = a || "fx"), this.each(function () {
          var e, t = T._data(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = T.timers, o = n ? n.length : 0;
          for (t.finish = !0, T.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
          for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
          delete t.finish
        })
      }
    }), T.each(["toggle", "show", "hide"], function (e, i) {
      var r = T.fn[i];
      T.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ht(i, !0), e, t, n)
      }
    }), T.each({
      slideDown: ht("show"),
      slideUp: ht("hide"),
      slideToggle: ht("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, i) {
      T.fn[e] = function (e, t, n) {
        return this.animate(i, e, t, n)
      }
    }), T.timers = [], T.fx.tick = function () {
      var e, t = T.timers, n = 0;
      for (lt = T.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || T.fx.stop(), lt = void 0
    }, T.fx.timer = function (e) {
      T.timers.push(e), e() ? T.fx.start() : T.timers.pop()
    }, T.fx.interval = 13, T.fx.start = function () {
      ct || (ct = S.setInterval(T.fx.tick, T.fx.interval))
    }, T.fx.stop = function () {
      S.clearInterval(ct), ct = null
    }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (i, e) {
      return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
        var n = S.setTimeout(e, i);
        t.stop = function () {
          S.clearTimeout(n)
        }
      })
    }, gt = f.createElement("input"), yt = f.createElement("div"), bt = f.createElement("select"), wt = bt.appendChild(f.createElement("option")), (yt = f.createElement("div")).setAttribute("className", "t"), yt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", mt = yt.getElementsByTagName("a")[0], gt.setAttribute("type", "checkbox"), yt.appendChild(gt), (mt = yt.getElementsByTagName("a")[0]).style.cssText = "top:1px", C.getSetAttribute = "t" !== yt.className, C.style = /top/.test(mt.getAttribute("style")), C.hrefNormalized = "/a" === mt.getAttribute("href"), C.checkOn = !!gt.value, C.optSelected = wt.selected, C.enctype = !!f.createElement("form").enctype, bt.disabled = !0, C.optDisabled = !wt.disabled, (gt = f.createElement("input")).setAttribute("value", ""), C.input = "" === gt.getAttribute("value"), gt.value = "t", gt.setAttribute("type", "radio"), C.radioValue = "t" === gt.value;
    var mt, gt, yt, bt, wt;
    var xt = /\r/g, _t = /[\x20\t\r\n\f]+/g;
    T.fn.extend({
      val: function (n) {
        var i, e, r, t = this[0];
        return arguments.length ? (r = T.isFunction(n), this.each(function (e) {
          var t;
          1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function (e) {
            return null == e ? "" : e + ""
          })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
        })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : T.trim(T.text(e)).replace(_t, " ")
          }
        }, select: {
          get: function (e) {
            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++) if (((n = i[l]).selected || l === r) && (C.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !T.nodeName(n.parentNode, "optgroup"))) {
              if (t = T(n).val(), o) return t;
              a.push(t)
            }
            return a
          }, set: function (e, t) {
            for (var n, i, r = e.options, o = T.makeArray(t), a = r.length; a--;) if (i = r[a], -1 < T.inArray(T.valHooks.option.get(i), o)) try {
              i.selected = n = !0
            } catch (l) {
              i.scrollHeight
            } else i.selected = !1;
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), T.each(["radio", "checkbox"], function () {
      T.valHooks[this] = {
        set: function (e, t) {
          return T.isArray(t) ? e.checked = -1 < T.inArray(T(e).val(), t) : void 0
        }
      }, C.checkOn || (T.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var St, Ct, Tt = T.expr.attrHandle, kt = /^(?:checked|selected)$/i, At = C.getSetAttribute, Et = C.input;
    T.fn.extend({
      attr: function (e, t) {
        return J(this, T.attr, e, t, 1 < arguments.length)
      }, removeAttr: function (e) {
        return this.each(function () {
          T.removeAttr(this, e)
        })
      }
    }), T.extend({
      attr: function (e, t, n) {
        var i, r, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (t = t.toLowerCase(), r = T.attrHooks[t] || (T.expr.match.bool.test(t) ? Ct : St)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = T.find.attr(e, t)) ? void 0 : i)
      }, attrHooks: {
        type: {
          set: function (e, t) {
            if (!C.radioValue && "radio" === t && T.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }, removeAttr: function (e, t) {
        var n, i, r = 0, o = t && t.match(M);
        if (o && 1 === e.nodeType) for (; n = o[r++];) i = T.propFix[n] || n, T.expr.match.bool.test(n) ? Et && At || !kt.test(n) ? e[i] = !1 : e[T.camelCase("default-" + n)] = e[i] = !1 : T.attr(e, n, ""), e.removeAttribute(At ? n : i)
      }
    }), Ct = {
      set: function (e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : Et && At || !kt.test(n) ? e.setAttribute(!At && T.propFix[n] || n, n) : e[T.camelCase("default-" + n)] = e[n] = !0, n
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = Tt[t] || T.find.attr;
      Et && At || !kt.test(t) ? Tt[t] = function (e, t, n) {
        var i, r;
        return n || (r = Tt[t], Tt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, Tt[t] = r), i
      } : Tt[t] = function (e, t, n) {
        return n ? void 0 : e[T.camelCase("default-" + t)] ? t.toLowerCase() : null
      }
    }), Et && At || (T.attrHooks.value = {
      set: function (e, t, n) {
        return T.nodeName(e, "input") ? void(e.defaultValue = t) : St && St.set(e, t, n)
      }
    }), At || (St = {
      set: function (e, t, n) {
        var i = e.getAttributeNode(n);
        return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
      }
    }, Tt.id = Tt.name = Tt.coords = function (e, t, n) {
      var i;
      return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, T.valHooks.button = {
      get: function (e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified ? n.value : void 0
      }, set: St.set
    }, T.attrHooks.contenteditable = {
      set: function (e, t, n) {
        St.set(e, "" !== t && t, n)
      }
    }, T.each(["width", "height"], function (e, n) {
      T.attrHooks[n] = {
        set: function (e, t) {
          return "" === t ? (e.setAttribute(n, "auto"), t) : void 0
        }
      }
    })), C.style || (T.attrHooks.style = {
      get: function (e) {
        return e.style.cssText || void 0
      }, set: function (e, t) {
        return e.style.cssText = t + ""
      }
    });
    var Pt = /^(?:input|select|textarea|button|object)$/i, It = /^(?:a|area)$/i;
    T.fn.extend({
      prop: function (e, t) {
        return J(this, T.prop, e, t, 1 < arguments.length)
      }, removeProp: function (e) {
        return e = T.propFix[e] || e, this.each(function () {
          try {
            this[e] = void 0, delete this[e]
          } catch (t) {
          }
        })
      }
    }), T.extend({
      prop: function (e, t, n) {
        var i, r, o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      }, propHooks: {
        tabIndex: {
          get: function (e) {
            var t = T.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : Pt.test(e.nodeName) || It.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }, propFix: {"for": "htmlFor", "class": "className"}
    }), C.hrefNormalized || T.each(["href", "src"], function (e, t) {
      T.propHooks[t] = {
        get: function (e) {
          return e.getAttribute(t, 4)
        }
      }
    }), C.optSelected || (T.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }, set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      T.propFix[this.toLowerCase()] = this
    }), C.enctype || (T.propFix.enctype = "encoding");
    var jt = /[\t\r\n\f]/g;

    function Bt(e) {
      return T.attr(e, "class") || ""
    }

    T.fn.extend({
      addClass: function (t) {
        var e, n, i, r, o, a, s, l = 0;
        if (T.isFunction(t)) return this.each(function (e) {
          T(this).addClass(t.call(this, e, Bt(this)))
        });
        if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[l++];) if (r = Bt(n), i = 1 === n.nodeType && (" " + r + " ").replace(jt, " ")) {
          for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
          s = T.trim(i), r !== s && T.attr(n, "class", s)
        }
        return this
      }, removeClass: function (t) {
        var e, n, i, r, o, a, s, l = 0;
        if (T.isFunction(t)) return this.each(function (e) {
          T(this).removeClass(t.call(this, e, Bt(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t) for (e = t.match(M) || []; n = this[l++];) if (r = Bt(n), i = 1 === n.nodeType && (" " + r + " ").replace(jt, " ")) {
          for (a = 0; o = e[a++];) for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
          s = T.trim(i), r !== s && T.attr(n, "class", s)
        }
        return this
      }, toggleClass: function (r, t) {
        var o = typeof r;
        return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : T.isFunction(r) ? this.each(function (e) {
          T(this).toggleClass(r.call(this, e, Bt(this), t), t)
        }) : this.each(function () {
          var e, t, n, i;
          if ("string" === o) for (t = 0, n = T(this), i = r.match(M) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" !== o || ((e = Bt(this)) && T._data(this, "__className__", e), T.attr(this, "class", e || !1 === r ? "" : T._data(this, "__className__") || ""))
        })
      }, hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + Bt(n) + " ").replace(jt, " ").indexOf(t)) return !0;
        return !1
      }
    }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
      T.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
      }
    }), T.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    });
    var Mt = S.location, Ft = T.now(), Ot = /\?/,
      Lt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function (e) {
      if (S.JSON && S.JSON.parse) return S.JSON.parse(e + "");
      var r, o = null, t = T.trim(e + "");
      return t && !T.trim(t.replace(Lt, function (e, t, n, i) {
        return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "")
      })) ? Function("return " + t)() : T.error("Invalid JSON: " + e)
    }, T.parseXML = function (e) {
      var t, n;
      if (!e || "string" != typeof e) return null;
      try {
        S.DOMParser ? (n = new S.DOMParser, t = n.parseFromString(e, "text/xml")) : ((t = new S.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
      } catch (u) {
        t = void 0
      }
      return t && t.documentElement && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
    };
    var Nt = /#.*$/, Dt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rt = /^(?:GET|HEAD)$/, Ut = /^\/\//,
      Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zt = {}, Wt = {}, qt = "*/".concat("*"),
      $t = Mt.href, Xt = Vt.exec($t.toLowerCase()) || [];

    function Gt(o) {
      return function (e, t) {
        "string" != typeof e && (t = e, e = "*");
        var n, i = 0, r = e.toLowerCase().match(M) || [];
        if (T.isFunction(t)) for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
      }
    }

    function Jt(t, r, o, a) {
      var s = {}, l = t === Wt;

      function c(e) {
        var i;
        return s[e] = !0, T.each(t[e] || [], function (e, t) {
          var n = t(r, o, a);
          return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
        }), i
      }

      return c(r.dataTypes[0]) || !s["*"] && c("*")
    }

    function Yt(e, t) {
      var n, i, r = T.ajaxSettings.flatOptions || {};
      for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
      return n && T.extend(!0, e, n), e
    }

    T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: $t,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xt[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": qt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {"* text": String, "text html": !0, "text json": T.parseJSON, "text xml": T.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? Yt(Yt(e, T.ajaxSettings), t) : Yt(T.ajaxSettings, e)
      },
      ajaxPrefilter: Gt(zt),
      ajaxTransport: Gt(Wt),
      ajax: function (e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var n, i, u, d, p, h, f, r, v = T.ajaxSetup({}, t), m = v.context || v,
          g = v.context && (m.nodeType || m.jquery) ? T(m) : T.event, y = T.Deferred(), b = T.Callbacks("once memory"),
          w = v.statusCode || {}, o = {}, a = {}, x = 0, s = "canceled", _ = {
            readyState: 0, getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!r) for (r = {}; t = Ht.exec(d);) r[t[1].toLowerCase()] = t[2];
                t = r[e.toLowerCase()]
              }
              return null == t ? null : t
            }, getAllResponseHeaders: function () {
              return 2 === x ? d : null
            }, setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || (e = a[n] = a[n] || e, o[e] = t), this
            }, overrideMimeType: function (e) {
              return x || (v.mimeType = e), this
            }, statusCode: function (e) {
              var t;
              if (e) if (x < 2) for (t in e) w[t] = [w[t], e[t]]; else _.always(e[_.status]);
              return this
            }, abort: function (e) {
              var t = e || s;
              return f && f.abort(t), l(0, t), this
            }
          };
        if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, v.url = ((e || v.url || $t) + "").replace(Nt, "").replace(Ut, Xt[1] + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = T.trim(v.dataType || "*").toLowerCase().match(M) || [""], null == v.crossDomain && (n = Vt.exec(v.url.toLowerCase()), v.crossDomain = !(!n || n[1] === Xt[1] && n[2] === Xt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), v.data && v.processData && "string" != typeof v.data && (v.data = T.param(v.data, v.traditional)), Jt(zt, v, t, _), 2 === x) return _;
        for (i in(h = T.event && v.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), u = v.url, v.hasContent || (v.data && (u = v.url += (Ot.test(u) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (v.url = Dt.test(u) ? u.replace(Dt, "$1_=" + Ft++) : u + (Ot.test(u) ? "&" : "?") + "_=" + Ft++)), v.ifModified && (T.lastModified[u] && _.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u] && _.setRequestHeader("If-None-Match", T.etag[u])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && _.setRequestHeader("Content-Type", v.contentType), _.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : v.accepts["*"]), v.headers) _.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(m, _, v) || 2 === x)) return _.abort();
        for (i in s = "abort", {success: 1, error: 1, complete: 1}) _[i](v[i]);
        if (f = Jt(Wt, v, t, _)) {
          if (_.readyState = 1, h && g.trigger("ajaxSend", [_, v]), 2 === x) return _;
          v.async && 0 < v.timeout && (p = S.setTimeout(function () {
            _.abort("timeout")
          }, v.timeout));
          try {
            x = 1, f.send(o, l)
          } catch (k) {
            if (!(x < 2)) throw k;
            l(-1, k)
          }
        } else l(-1, "No Transport");

        function l(e, t, n, i) {
          var r, o, a, s, l, c = t;
          2 !== x && (x = 2, p && S.clearTimeout(p), f = void 0, d = i || "", _.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
            var i, r, o, a, s = e.contents, l = e.dataTypes;
            for (; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (a in s) if (s[a] && s[a].test(r)) {
              l.unshift(a);
              break
            }
            if (l[0] in n) o = l[0]; else {
              for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                  o = a;
                  break
                }
                i || (i = a)
              }
              o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
          }(v, _, n)), s = function (e, t, n, i) {
            var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
            if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            o = u.shift();
            for (; o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
              if (!(a = c[l + " " + o] || c["* " + o])) for (r in c) if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                break
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
              } catch (C) {
                return {state: "parsererror", error: a ? C : "No conversion from " + l + " to " + o}
              }
            }
            return {state: "success", data: t}
          }(v, s, _, r), r ? (v.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (T.lastModified[u] = l), (l = _.getResponseHeader("etag")) && (T.etag[u] = l)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, a = s.error, r = !a)) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || c) + "", r ? y.resolveWith(m, [o, c, _]) : y.rejectWith(m, [_, c, a]), _.statusCode(w), w = void 0, h && g.trigger(r ? "ajaxSuccess" : "ajaxError", [_, v, r ? o : a]), b.fireWith(m, [_, c]), h && (g.trigger("ajaxComplete", [_, v]), --T.active || T.event.trigger("ajaxStop")))
        }

        return _
      },
      getJSON: function (e, t, n) {
        return T.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return T.get(e, void 0, t, "script")
      }
    }), T.each(["get", "post"], function (e, r) {
      T[r] = function (e, t, n, i) {
        return T.isFunction(t) && (i = i || n, n = t, t = void 0), T.ajax(T.extend({
          url: e,
          type: r,
          dataType: i,
          data: t,
          success: n
        }, T.isPlainObject(e) && e))
      }
    }), T._evalUrl = function (e) {
      return T.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, T.fn.extend({
      wrapAll: function (t) {
        if (T.isFunction(t)) return this.each(function (e) {
          T(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
          var e = T(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
            return e
          }).append(this)
        }
        return this
      }, wrapInner: function (n) {
        return T.isFunction(n) ? this.each(function (e) {
          T(this).wrapInner(n.call(this, e))
        }) : this.each(function () {
          var e = T(this), t = e.contents();
          t.length ? t.wrapAll(n) : e.append(n)
        })
      }, wrap: function (t) {
        var n = T.isFunction(t);
        return this.each(function (e) {
          T(this).wrapAll(n ? t.call(this, e) : t)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
        }).end()
      }
    }), T.expr.filters.hidden = function (e) {
      return C.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function (e) {
        if (!T.contains(e.ownerDocument || f, e)) return !0;
        for (; e && 1 === e.nodeType;) {
          if ("none" === ((t = e).style && t.style.display || T.css(t, "display")) || "hidden" === e.type) return !0;
          e = e.parentNode
        }
        var t;
        return !1
      }(e)
    }, T.expr.filters.visible = function (e) {
      return !T.expr.filters.hidden(e)
    };
    var Kt = /%20/g, Qt = /\[\]$/, Zt = /\r?\n/g, en = /^(?:submit|button|image|reset|file)$/i,
      tn = /^(?:input|select|textarea|keygen)/i;

    function nn(n, e, i, r) {
      var t;
      if (T.isArray(e)) T.each(e, function (e, t) {
        i || Qt.test(n) ? r(n, t) : nn(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
      }); else if (i || "object" !== T.type(e)) r(n, e); else for (t in e) nn(n + "[" + t + "]", e[t], i, r)
    }

    T.param = function (e, t) {
      var n, i = [], r = function (e, t) {
        t = T.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
        r(this.name, this.value)
      }); else for (n in e) nn(n, e[n], t, r);
      return i.join("&").replace(Kt, "+")
    }, T.fn.extend({
      serialize: function () {
        return T.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !T(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Y.test(e))
        }).map(function (e, t) {
          var n = T(this).val();
          return null == n ? null : T.isArray(n) ? T.map(n, function (e) {
            return {name: t.name, value: e.replace(Zt, "\r\n")}
          }) : {name: t.name, value: n.replace(Zt, "\r\n")}
        }).get()
      }
    }), T.ajaxSettings.xhr = void 0 !== S.ActiveXObject ? function () {
      return this.isLocal ? ln() : 8 < f.documentMode ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || ln()
    } : sn;
    var rn = 0, on = {}, an = T.ajaxSettings.xhr();

    function sn() {
      try {
        return new S.XMLHttpRequest
      } catch (t) {
      }
    }

    function ln() {
      try {
        return new S.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {
      }
    }

    S.attachEvent && S.attachEvent("onunload", function () {
      for (var e in on) on[e](void 0, !0)
    }), C.cors = !!an && "withCredentials" in an, (an = C.ajax = !!an) && T.ajaxTransport(function (l) {
      var c;
      if (!l.crossDomain || C.cors) return {
        send: function (e, o) {
          var t, a = l.xhr(), s = ++rn;
          if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) a[t] = l.xhrFields[t];
          for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
          a.send(l.hasContent && l.data || null), c = function (e, t) {
            var n, i, r;
            if (c && (t || 4 === a.readyState)) if (delete on[s], c = void 0, a.onreadystatechange = T.noop, t) 4 !== a.readyState && a.abort(); else {
              r = {}, n = a.status, "string" == typeof a.responseText && (r.text = a.responseText);
              try {
                i = a.statusText
              } catch (m) {
                i = ""
              }
              n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404
            }
            r && o(n, i, r, a.getAllResponseHeaders())
          }, l.async ? 4 === a.readyState ? S.setTimeout(c) : a.onreadystatechange = on[s] = c : c()
        }, abort: function () {
          c && c(void 0, !0)
        }
      }
    }), T.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        "text script": function (e) {
          return T.globalEval(e), e
        }
      }
    }), T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), T.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var i, r = f.head || T("head")[0] || f.documentElement;
        return {
          send: function (e, n) {
            (i = f.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function (e, t) {
              (t || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success"))
            }, r.insertBefore(i, r.firstChild)
          }, abort: function () {
            i && i.onload(void 0, !0)
          }
        }
      }
    });
    var cn = [], un = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = cn.pop() || T.expando + "_" + Ft++;
        return this[e] = !0, e
      }
    }), T.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i, r, o,
        a = !1 !== e.jsonp && (un.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && un.test(e.data) && "data");
      return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(un, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
        return o || T.error(i + " was not called"), o[0]
      }, e.dataTypes[0] = "json", r = S[i], S[i] = function () {
        o = arguments
      }, n.always(function () {
        void 0 === r ? T(S).removeProp(i) : S[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, cn.push(i)), o && T.isFunction(r) && r(o[0]), o = r = void 0
      }), "script") : void 0
    }), T.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || f;
      var i = k.exec(e), r = !n && [];
      return i ? [t.createElement(i[1])] : (i = ue([e], t, r), r && r.length && T(r).remove(), T.merge([], i.childNodes))
    };
    var dn = T.fn.load;

    function pn(e) {
      return T.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    T.fn.load = function (e, t, n) {
      if ("string" != typeof e && dn) return dn.apply(this, arguments);
      var i, r, o, a = this, s = e.indexOf(" ");
      return -1 < s && (i = T.trim(e.slice(s, e.length)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && T.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        o = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e)
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      T.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), T.expr.filters.animated = function (t) {
      return T.grep(T.timers, function (e) {
        return t === e.elem
      }).length
    }, T.offset = {
      setOffset: function (e, t, n) {
        var i, r, o, a, s, l, c = T.css(e, "position"), u = T(e), d = {};
        "static" === c && (e.style.position = "relative"), s = u.offset(), o = T.css(e, "top"), l = T.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < T.inArray("auto", [o, l]) ? (i = u.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
      }
    }, T.fn.extend({
      offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          T.offset.setOffset(this, t, e)
        });
        var e, n, i = {top: 0, left: 0}, r = this[0], o = r && r.ownerDocument;
        return o ? (e = o.documentElement, T.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = pn(o), {
          top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
          left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i) : void 0
      }, position: function () {
        if (this[0]) {
          var e, t, n = {top: 0, left: 0}, i = this[0];
          return "fixed" === T.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), T.nodeName(e[0], "html") || (n = e.offset()), n.top += T.css(e[0], "borderTopWidth", !0), n.left += T.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - n.top - T.css(i, "marginTop", !0),
            left: t.left - n.left - T.css(i, "marginLeft", !0)
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && !T.nodeName(e, "html") && "static" === T.css(e, "position");) e = e.offsetParent;
          return e || ze
        })
      }
    }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, r) {
      var o = /Y/.test(r);
      T.fn[t] = function (e) {
        return J(this, function (e, t, n) {
          var i = pn(e);
          return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(o ? T(i).scrollLeft() : n, o ? n : T(i).scrollTop()) : e[t] = n)
        }, t, e, arguments.length, null)
      }
    }), T.each(["top", "left"], function (e, n) {
      T.cssHooks[n] = Xe(C.pixelPosition, function (e, t) {
        return t ? (t = qe(e, n), Ue.test(t) ? T(e).position()[n] + "px" : t) : void 0
      })
    }), T.each({Height: "height", Width: "width"}, function (o, a) {
      T.each({padding: "inner" + o, content: a, "": "outer" + o}, function (i, e) {
        T.fn[e] = function (e, t) {
          var n = arguments.length && (i || "boolean" != typeof e),
            r = i || (!0 === e || !0 === t ? "margin" : "border");
          return J(this, function (e, t, n) {
            var i;
            return T.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r)
          }, a, n ? e : void 0, n, null)
        }
      })
    }), T.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), T.fn.size = function () {
      return this.length
    }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
      return T
    });
    var hn = S.jQuery, fn = S.$;
    T.noConflict = function (e) {
      return S.$ === T && (S.$ = fn), e && S.jQuery === T && (S.jQuery = hn), T
    }, t || (S.jQuery = S.$ = T)
  }(e)
}("undefined" != typeof window ? window : this), function (x) {
  function _() {
  }

  function S(e) {
    k = [e]
  }

  function C(e, t, n) {
    return e && e.apply(t.context || t, n)
  }

  function T(e) {
    return /\?/.test(e) ? "&" : "?"
  }

  var k, A = "insertBefore", E = "onclick", P = "onerror", I = "onreadystatechange", j = "readyState",
    B = "removeChild", M = "<script>", F = "success", O = "timeout", L = window, N = x.Deferred,
    D = x("head")[0] || document.documentElement, H = {}, R = 0, U = {callback: "_jqjsp", url: location.href},
    V = L.opera, z = !!x("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;

  function e(t) {
    var e, n, i, r, o, a = (t = x.extend({}, U, t)).success, s = t.error, l = t.complete, c = t.dataFilter,
      u = t.callbackParameter, d = t.callback, p = (t.cache, t.pageCache), h = t.charset, f = t.url, v = t.data,
      m = t.timeout, g = 0, y = _;
    if (N && N(function (e) {
      e.done(a).fail(s), a = e.resolve, s = e.reject
    }).promise(t), !(t.abort = function () {
      !g++ && y()
    }) === C(t.beforeSend, t, [t]) || g) return t;

    function b(e) {
      g++ || (y(), p && (H[f] = {s: [e]}), c && (e = c.apply(t, [e])), C(a, t, [e, F, t]), C(l, t, [t, F]))
    }

    function w(e) {
      g++ || (y(), p && e != O && (H[f] = e), C(s, t, [t, e]), C(l, t, [t, e]))
    }

    return f = f || "", v = v ? "string" == typeof v ? v : x.param(v, t.traditional) : "", f += v ? T(f) + v : "", u && (f += T(f) + encodeURIComponent(u) + "=?"), f = f.replace(/=\?(&|$)/, "=" + d + "$1"), p && (e = H[f]) ? e.s ? b(e.s[0]) : w(e) : (L[d] = S, (i = x(M)[0]).id = "_jqjsp" + R++, h && (i.charset = h), V && V.version() < 11.6 ? (r = x(M)[0]).text = "document.getElementById('" + i.id + "')." + P + "()" : i.async = "async", z && (i.htmlFor = i.id, i.event = E), i.onload = i[P] = i[I] = function (e) {
      if (!i[j] || !/i/.test(i[j])) {
        try {
          i[E] && i[E]()
        } catch (t) {
        }
        e = k, k = 0, e ? b(e[0]) : w("error")
      }
    }, i.src = f, y = function (e) {
      o && clearTimeout(o), i[I] = i.onload = i[P] = null, D[B](i), r && D[B](r)
    }, D[A](i, n = D.firstChild), r && D[A](r, n), o = 0 < m && setTimeout(function () {
      w(O)
    }, m)), t
  }

  e.setup = function (e) {
    x.extend(U, e)
  }, x.jsonp = e
}(jQuery);
var CryptoJS = CryptoJS || function (s, e) {
  var t = {}, n = t.lib = {}, i = n.Base = function () {
    function n() {
    }

    return {
      extend: function (e) {
        n.prototype = this;
        var t = new n;
        return e && t.mixIn(e), t.$super = this, t
      }, create: function () {
        var e = this.extend();
        return e.init.apply(e, arguments), e
      }, init: function () {
      }, mixIn: function (e) {
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        e.hasOwnProperty("toString") && (this.toString = e.toString)
      }, clone: function () {
        return this.$super.extend(this)
      }
    }
  }(), l = n.WordArray = i.extend({
    init: function (e, t) {
      e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
    }, toString: function (e) {
      return (e || o).stringify(this)
    }, concat: function (e) {
      var t = this.words, n = e.words, i = this.sigBytes;
      e = e.sigBytes;
      if (this.clamp(), i % 4) for (var r = 0; r < e; r++) t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8; else if (65535 < n.length) for (r = 0; r < e; r += 4) t[i + r >>> 2] = n[r >>> 2]; else t.push.apply(t, n);
      return this.sigBytes += e, this
    }, clamp: function () {
      var e = this.words, t = this.sigBytes;
      e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = s.ceil(t / 4)
    }, clone: function () {
      var e = i.clone.call(this);
      return e.words = this.words.slice(0), e
    }, random: function (e) {
      for (var t = [], n = 0; n < e; n += 4) t.push(4294967296 * s.random() | 0);
      return l.create(t, e)
    }
  }), r = t.enc = {}, o = r.Hex = {
    stringify: function (e) {
      for (var t = e.words, n = (e = e.sigBytes, []), i = 0; i < e; i++) {
        var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        n.push((r >>> 4).toString(16)), n.push((15 & r).toString(16))
      }
      return n.join("")
    }, parse: function (e) {
      for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
      return l.create(n, t / 2)
    }
  }, a = r.Latin1 = {
    stringify: function (e) {
      for (var t = e.words, n = (e = e.sigBytes, []), i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
      return n.join("")
    }, parse: function (e) {
      for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
      return l.create(n, t)
    }
  }, c = r.Utf8 = {
    stringify: function (e) {
      try {
        return decodeURIComponent(escape(a.stringify(e)))
      } catch (u) {
        throw Error("Malformed UTF-8 data")
      }
    }, parse: function (e) {
      return a.parse(unescape(encodeURIComponent(e)))
    }
  }, u = n.BufferedBlockAlgorithm = i.extend({
    reset: function () {
      this._data = l.create(), this._nDataBytes = 0
    }, _append: function (e) {
      "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
    }, _process: function (e) {
      var t = this._data, n = t.words, i = t.sigBytes, r = this.blockSize, o = i / (4 * r);
      e = (o = e ? s.ceil(o) : s.max((0 | o) - this._minBufferSize, 0)) * r, i = s.min(4 * e, i);
      if (e) {
        for (var a = 0; a < e; a += r) this._doProcessBlock(n, a);
        a = n.splice(0, e), t.sigBytes -= i
      }
      return l.create(a, i)
    }, clone: function () {
      var e = i.clone.call(this);
      return e._data = this._data.clone(), e
    }, _minBufferSize: 0
  });
  n.Hasher = u.extend({
    init: function () {
      this.reset()
    }, reset: function () {
      u.reset.call(this), this._doReset()
    }, update: function (e) {
      return this._append(e), this._process(), this
    }, finalize: function (e) {
      return e && this._append(e), this._doFinalize(), this._hash
    }, clone: function () {
      var e = u.clone.call(this);
      return e._hash = this._hash.clone(), e
    }, blockSize: 16, _createHelper: function (n) {
      return function (e, t) {
        return n.create(t).finalize(e)
      }
    }, _createHmacHelper: function (n) {
      return function (e, t) {
        return d.HMAC.create(n, t).finalize(e)
      }
    }
  });
  var d = t.algo = {};
  return t
}(Math);
!function (t) {
  function l(e, t, n, i, r, o, a) {
    return ((e = e + (t & n | ~t & i) + r + a) << o | e >>> 32 - o) + t
  }

  function c(e, t, n, i, r, o, a) {
    return ((e = e + (t & i | n & ~i) + r + a) << o | e >>> 32 - o) + t
  }

  function u(e, t, n, i, r, o, a) {
    return ((e = e + (t ^ n ^ i) + r + a) << o | e >>> 32 - o) + t
  }

  function d(e, t, n, i, r, o, a) {
    return ((e = e + (n ^ (t | ~i)) + r + a) << o | e >>> 32 - o) + t
  }

  var e = CryptoJS, n = (i = e.lib).WordArray, i = i.Hasher, r = e.algo, p = [];
  !function () {
    for (var e = 0; e < 64; e++) p[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
  }(), r = r.MD5 = i.extend({
    _doReset: function () {
      this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878])
    }, _doProcessBlock: function (e, t) {
      for (var n = 0; n < 16; n++) {
        var i = e[r = t + n];
        e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
      }
      i = (r = this._hash.words)[0];
      var r, o = r[1], a = r[2], s = r[3];
      for (n = 0; n < 64; n += 4) n < 16 ? o = l(o, a = l(a, s = l(s, i = l(i, o, a, s, e[t + n], 7, p[n]), o, a, e[t + n + 1], 12, p[n + 1]), i, o, e[t + n + 2], 17, p[n + 2]), s, i, e[t + n + 3], 22, p[n + 3]) : n < 32 ? o = c(o, a = c(a, s = c(s, i = c(i, o, a, s, e[t + (n + 1) % 16], 5, p[n]), o, a, e[t + (n + 6) % 16], 9, p[n + 1]), i, o, e[t + (n + 11) % 16], 14, p[n + 2]), s, i, e[t + n % 16], 20, p[n + 3]) : n < 48 ? o = u(o, a = u(a, s = u(s, i = u(i, o, a, s, e[t + (3 * n + 5) % 16], 4, p[n]), o, a, e[t + (3 * n + 8) % 16], 11, p[n + 1]), i, o, e[t + (3 * n + 11) % 16], 16, p[n + 2]), s, i, e[t + (3 * n + 14) % 16], 23, p[n + 3]) : o = d(o, a = d(a, s = d(s, i = d(i, o, a, s, e[t + 3 * n % 16], 6, p[n]), o, a, e[t + (3 * n + 7) % 16], 10, p[n + 1]), i, o, e[t + (3 * n + 14) % 16], 15, p[n + 2]), s, i, e[t + (3 * n + 5) % 16], 21, p[n + 3]);
      r[0] = r[0] + i | 0, r[1] = r[1] + o | 0, r[2] = r[2] + a | 0, r[3] = r[3] + s | 0
    }, _doFinalize: function () {
      var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
      for (t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8), e.sigBytes = 4 * (t.length + 1), this._process(), e = this._hash.words, t = 0; t < 4; t++) n = e[t], e[t] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
    }
  }), e.MD5 = i._createHelper(r), e.HmacMD5 = i._createHmacHelper(r)
}(Math), function () {
  "use strict";

  function c(e) {
    return "function" == typeof e
  }

  function u(e) {
    x = e
  }

  function o() {
    return function () {
      process.nextTick(n)
    }
  }

  function t() {
    return function () {
      setTimeout(n, 1)
    }
  }

  function n() {
    for (var e = 0; e < E; e += 2) {
      (0, O[e])(O[e + 1]), O[e] = void 0, O[e + 1] = void 0
    }
    E = 0
  }

  function a() {
  }

  function s(e) {
    try {
      return e.then
    } catch (c) {
      return V.error = c, V
    }
  }

  function l(e, i, r) {
    P(function (t) {
      var n = !1, e = function (e, t, n, i) {
        try {
          e.call(t, n, i)
        } catch (o) {
          return o
        }
      }(r, i, function (e) {
        n || (n = !0, i !== e ? p(t, e) : h(t, e))
      }, function (e) {
        n || (n = !0, f(t, e))
      }, t._label);
      !n && e && (n = !0, f(t, e))
    }, e)
  }

  function d(e, t, n) {
    var i, r;
    t.constructor === e.constructor && n === L && constructor.resolve === N ? (i = e, (r = t)._state === R ? h(i, r._result) : r._state === U ? f(i, r._result) : v(r, void 0, function (e) {
      p(i, e)
    }, function (e) {
      f(i, e)
    })) : n === V ? f(e, V.error) : void 0 === n ? h(e, t) : c(n) ? l(e, t, n) : h(e, t)
  }

  function p(e, t) {
    var n;
    e === t ? f(e, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof(n = t) || "object" == typeof n && null !== n ? d(e, t, s(t)) : h(e, t)
  }

  function i(e) {
    e._onerror && e._onerror(e._result), m(e)
  }

  function h(e, t) {
    e._state === H && (e._result = t, e._state = R, 0 !== e._subscribers.length && P(m, e))
  }

  function f(e, t) {
    e._state === H && (e._state = U, e._result = t, P(i, e))
  }

  function v(e, t, n, i) {
    var r = e._subscribers, o = r.length;
    e._onerror = null, r[o] = t, r[o + R] = n, r[o + U] = i, 0 === o && e._state && P(m, e)
  }

  function m(e) {
    var t = e._subscribers, n = e._state;
    if (0 !== t.length) {
      for (var i, r, o = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? g(n, i, r, o) : r(o);
      e._subscribers.length = 0
    }
  }

  function e() {
    this.error = null
  }

  function g(e, t, n, i) {
    var r, o, a, s, l = c(n);
    if (l) {
      if ((r = function (e, t) {
        try {
          return e(t)
        } catch (u) {
          return z.error = u, z
        }
      }(n, i)) === z ? (s = !0, o = r.error, r = null) : a = !0, t === r) return void f(t, new TypeError("A promises callback cannot return that same promise."))
    } else r = i, a = !0;
    t._state !== H || (l && a ? p(t, r) : s ? f(t, o) : e === R ? h(t, r) : e === U && f(t, r))
  }

  function y(e) {
    e[D] = W++, e._state = void 0, e._result = void 0, e._subscribers = []
  }

  function r(e) {
    this[D] = W++, this._result = this._state = void 0, this._subscribers = [], a !== e && ("function" != typeof e && function () {
      throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }(), this instanceof r ? function (t, e) {
      try {
        e(function (e) {
          p(t, e)
        }, function (e) {
          f(t, e)
        })
      } catch (u) {
        f(t, u)
      }
    }(this, e) : function () {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }())
  }

  function b(e, t) {
    this._instanceConstructor = e, this.promise = new e(a), this.promise[D] || y(this.promise), Array.isArray(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? h(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && h(this.promise, this._result))) : f(this.promise, new Error("Array Methods must be provided an Array"))
  }

  var w, x, _, S, C, T, k, A = Array.isArray ? Array.isArray : function (e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }, E = 0, P = function (e, t) {
      O[E] = e, O[E + 1] = t, 2 === (E += 2) && (x ? x(n) : _())
    }, I = "undefined" != typeof window ? window : void 0, j = I || {},
    B = j.MutationObserver || j.WebKitMutationObserver,
    M = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
    F = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
    O = new Array(1e3);
  _ = M ? o() : B ? (C = 0, T = new B(n), k = document.createTextNode(""), T.observe(k, {characterData: !0}), function () {
    k.data = C = ++C % 2
  }) : F ? ((S = new MessageChannel).port1.onmessage = n, function () {
    S.port2.postMessage(0)
  }) : void 0 === I && "function" == typeof require ? function () {
    try {
      var e = require("vertx");
      return w = e.runOnLoop || e.runOnContext, function () {
        w(n)
      }
    } catch (u) {
      return t()
    }
  }() : t();
  var L = function (e, t) {
      var n = this, i = new this.constructor(a);
      void 0 === i[D] && y(i);
      var r = n._state;
      if (r) {
        var o = arguments[r - 1];
        P(function () {
          g(r, i, o, n._result)
        })
      } else v(n, i, e, t);
      return i
    }, N = function (e) {
      if (e && "object" == typeof e && e.constructor === this) return e;
      var t = new this(a);
      return p(t, e), t
    }, D = Math.random().toString(36).substring(16), H = void 0, R = 1, U = 2, V = new e, z = new e, W = 0,
    q = function (r) {
      var o = this;
      return new o(A(r) ? function (e, t) {
        for (var n = r.length, i = 0; i < n; i++) o.resolve(r[i]).then(e, t)
      } : function (e, t) {
        t(new TypeError("You must pass an array to race."))
      })
    }, $ = function (e) {
      var t = new this(a);
      return f(t, e), t
    }, X = r;
  r.all = function (e) {
    return new G(this, e).promise
  }, r.race = q, r.resolve = N, r.reject = $, r._setScheduler = u, r._setAsap = function (e) {
    P = e
  }, r._asap = P, r.prototype = {
    constructor: r, then: L, "catch": function (e) {
      return this.then(null, e)
    }
  };
  var G = b;
  b.prototype._enumerate = function () {
    for (var e = this.length, t = this._input, n = 0; this._state === H && n < e; n++) this._eachEntry(t[n], n)
  }, b.prototype._eachEntry = function (t, e) {
    var n = this._instanceConstructor, i = n.resolve;
    if (i === N) {
      var r = s(t);
      if (r === L && t._state !== H) this._settledAt(t._state, e, t._result); else if ("function" != typeof r) this._remaining--, this._result[e] = t; else if (n === X) {
        var o = new n(a);
        d(o, t, r), this._willSettleAt(o, e)
      } else this._willSettleAt(new n(function (e) {
        e(t)
      }), e)
    } else this._willSettleAt(i(t), e)
  }, b.prototype._settledAt = function (e, t, n) {
    var i = this.promise;
    i._state === H && (this._remaining--, e === U ? f(i, n) : this._result[t] = n), 0 === this._remaining && h(i, this._result)
  }, b.prototype._willSettleAt = function (e, t) {
    var n = this;
    v(e, void 0, function (e) {
      n._settledAt(R, t, e)
    }, function (e) {
      n._settledAt(U, t, e)
    })
  };
  var J = function () {
    var e;
    if ("undefined" != typeof global) e = global; else if ("undefined" != typeof self) e = self; else try {
      e = Function("return this")()
    } catch (c) {
      throw new Error("polyfill failed because global object is unavailable in this environment")
    }
    var t = e.Promise;
    (!t || "[object Promise]" !== Object.prototype.toString.call(t.resolve()) || t.cast) && (e.Promise = X)
  }, Y = {Promise: X, polyfill: J};
  "function" == typeof define && define.amd ? define(function () {
    return Y
  }) : "undefined" != typeof module && module.exports ? module.exports = Y : void 0 !== this && (this.ES6Promise = Y), J()
}.call(this);
try {
  var pathArr = [], danMuArr = [], recordY = 0;

  function CommentFilter() {
    this.modifiers = [], this.runtime = null, this.allowTypes = {
      1: !0,
      4: !0,
      5: !0,
      6: !0,
      7: !0,
      8: !0,
      17: !0
    }, this.doModify = function (e) {
      for (var t = 0; t < this.modifiers.length; t++) e = this.modifiers[t](e);
      return e
    }, this.beforeSend = function (e) {
      return e
    }, this.doValidate = function (e) {
      return !!this.allowTypes[e.mode]
    }, this.addRule = function () {
    }, this.addModifier = function (e) {
      this.modifiers.push(e)
    }, this.runtimeFilter = function (e) {
      return null == this.runtime ? e : this.runtime(e)
    }, this.setRuntimeFilter = function (e) {
      this.runtime = e
    }
  }

  function AcfunParser(e) {
    var t = [];
    try {
      var n = JSON.parse(e)
    } catch (p) {
      return console.log("Error: Could not parse json list!"), []
    }
    for (var i = 0; i < n.length; i++) {
      var r = {}, o = n[i].c.split(",");
      if (0 < o.length) {
        if (r.stime = 1e3 * parseFloat(o[0]), r.color = parseInt(o[1]), r.mode = parseInt(o[2]), r.size = parseInt(o[3]), r.hash = o[4], r.date = parseInt(o[5]), r.position = "absolute", 7 != r.mode ? (r.text = n[i].m.replace(/(\/n|\\n|\n|\r\n|\\r)/g, "\n"), r.text = r.text.replace(/\r/g, "\n"), r.text = r.text.replace(/\s/g, " ")) : r.text = n[i].m, 7 == r.mode) {
          try {
            var a = JSON.parse(r.text)
          } catch (p) {
            console.log("[Err] Error parsing internal data for comment"), console.log("[Dbg] " + r.text);
            continue
          }
          if (r.position = "relative", r.text = a.n, r.text = r.text.replace(/\ /g, " "), console.log(r.text), r.opacity = null != a.a ? a.a : 1, null != a.p ? (r.x = a.p.x / 1e3, r.y = a.p.y / 1e3) : (r.x = 0, r.y = 0), r.shadow = a.b, r.dur = 4e3, null != a.l && (r.moveDelay = 1e3 * a.l), null != a.z && 0 < a.z.length) {
            r.movable = !0, r.motion = [];
            for (var s = 0, l = {x: r.x, y: r.y, alpha: r.opacity, color: r.color}, c = 0; c < a.z.length; c++) {
              var u = null != a.z[c].l ? 1e3 * a.z[c].l : 500;
              s += u;
              var d = {
                x: {from: l.x, to: a.z[c].x / 1e3, dur: u, delay: 0},
                y: {from: l.y, to: a.z[c].y / 1e3, dur: u, delay: 0}
              };
              l.x = d.x.to, l.y = d.y.to, a.z[c].t !== l.alpha && (d.alpha = {
                from: l.alpha,
                to: a.z[c].t,
                dur: u,
                delay: 0
              }, l.alpha = d.alpha.to), null != a.z[c].c && a.z[c].c !== l.color && (d.color = {
                from: l.color,
                to: a.z[c].c,
                dur: u,
                delay: 0
              }, l.color = d.color.to), r.motion.push(d)
            }
            r.dur = s + (r.moveDelay ? r.moveDelay : 0)
          }
          null != a.r && null != a.k && (r.rX = a.r, r.rY = a.k)
        }
        t.push(r)
      }
    }
    return t
  }

  function BilibiliParser(e, t, n) {
    if (null !== e) var i = e.getElementsByTagName("d"); else {
      if (!document || !document.createElement) return [];
      if (n) {
        if (!confirm("XML Parse Error. \n Allow tag soup parsing?\n[WARNING: This is unsafe.]")) return []
      } else t = (t = (t = (t = t.replace(new RegExp("</([^d])", "g"), "</disabled $1")).replace(new RegExp("</(S{2,})", "g"), "</disabled $1")).replace(new RegExp("<([^d/]W*?)", "g"), "<disabled $1")).replace(new RegExp("<([^/ ]{2,}W*?)", "g"), "<disabled $1");
      (m = document.createElement("div")).innerHTML = t;
      i = m.getElementsByTagName("d")
    }
    for (var r = [], o = 0; o < i.length; o++) if (null != i[o].getAttribute("p")) {
      var a = i[o].getAttribute("p").split(",");
      if (!i[o].childNodes[0]) continue;
      t = i[o].childNodes[0].nodeValue;
      var s = {};
      if (s.stime = Math.round(1e3 * parseFloat(a[0])), s.size = parseInt(a[2]), s.color = parseInt(a[3]), s.mode = parseInt(a[1]), s.date = parseInt(a[4]), s.pool = parseInt(a[5]), s.position = "absolute", null != a[7] && (s.dbid = parseInt(a[7])), s.hash = a[6], s.border = !1, s.mode < 7) s.text = t.replace(/(\/n|\\n|\n|\r\n)/g, "\n"); else if (7 == s.mode) try {
        if (adv = JSON.parse(t.replace(/\t/, "\\t")), s.shadow = !0, s.x = parseFloat(adv[0]), s.y = parseFloat(adv[1]), (Math.floor(s.x) < s.x || Math.floor(s.y) < s.y) && (s.position = "relative"), s.text = adv[4].replace(/(\/n|\\n|\n|\r\n)/g, "\n"), s.rZ = 0, s.rY = 0, 7 <= adv.length && (s.rZ = parseInt(adv[5], 10), s.rY = parseInt(adv[6], 10)), s.motion = [], s.movable = !1, 11 <= adv.length) {
          s.movable = !0;
          var l = 500, c = {
            x: {from: s.x, to: parseFloat(adv[7]), dur: l, delay: 0},
            y: {from: s.y, to: parseFloat(adv[8]), dur: l, delay: 0}
          };
          if ("" !== adv[9] && (l = parseInt(adv[9], 10), c.x.dur = l, c.y.dur = l), "" !== adv[10] && (c.x.delay = parseInt(adv[10], 10), c.y.delay = parseInt(adv[10], 10)), 11 < adv.length && (s.shadow = adv[11], "true" === s.shadow && (s.shadow = !0), "false" === s.shadow && (s.shadow = !1), null != adv[12] && (s.font = adv[12]), 14 < adv.length)) {
            "relative" === s.position && (console.log("Cannot mix relative and absolute positioning"), s.position = "absolute");
            for (var u = adv[14], d = {
              x: c.x.from,
              y: c.y.from
            }, p = [], h = new RegExp("([a-zA-Z])\\s*(\\d+)[, ](\\d+)", "g"), f = u.split(/[a-zA-Z]/).length - 1, v = h.exec(u); null !== v;) {
              switch (v[1]) {
                case"M":
                  d.x = parseInt(v[2], 10), d.y = parseInt(v[3], 10);
                  break;
                case"L":
                  p.push({
                    x: {from: d.x, to: parseInt(v[2], 10), dur: l / f, delay: 0},
                    y: {from: d.y, to: parseInt(v[3], 10), dur: l / f, delay: 0}
                  }), d.x = parseInt(v[2], 10), d.y = parseInt(v[3], 10)
              }
              v = h.exec(u)
            }
            c = null, s.motion = p
          }
          null !== c && s.motion.push(c)
        }
        var m;
        if (s.dur = 2500, adv[3] < 12 && (s.dur = 1e3 * adv[3]), null != (m = adv[2].split("-")) && 1 < m.length) {
          var g = parseFloat(m[0]), y = parseFloat(m[1]);
          (s.opacity = g) !== y && (s.alpha = {from: g, to: y})
        }
      } catch (b) {
        console.log("[Err] Error occurred in JSON parsing"), console.log("[Dbg] " + t)
      } else 8 == s.mode && (s.code = t);
      null != s.text && (s.text = s.text.replace(/\u25a0/g, "█")), r.push(s)
    }
    return r
  }

  var BinArray = function () {
    var r = {
      bsearch: function (e, t, n) {
        if (0 == e.length) return 0;
        if (n(t, e[0]) < 0) return 0;
        if (0 <= n(t, e[e.length - 1])) return e.length;
        for (var i = 0, r = 0, o = 0, a = e.length - 1; i <= a;) {
          if (o++, 0 <= n(t, e[(r = Math.floor((a + i + 1) / 2)) - 1]) && n(t, e[r]) < 0) return r;
          n(t, e[r - 1]) < 0 ? a = r - 1 : 0 <= n(t, e[r]) ? i = r : console.error("Program Error"), 1500 < o && console.error("Too many run cycles.")
        }
        return -1
      }, binsert: function (e, t, n) {
        var i = r.bsearch(e, t, n);
        return e.splice(i, 0, t), i
      }
    };
    return r
  }(), __extends = this.__extends || function (e, t) {
    function n() {
      this.constructor = e
    }

    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype, e.prototype = new n
  }, CommentSpaceAllocator = function () {
    function e(e, t) {
      void 0 === e && (e = 0), void 0 === t && (t = 0), this._pools = [[]], this.avoid = 1, this._width = e, this._height = t
    }

    return e.prototype.willCollide = function (e, t) {
      return e.stime + e.ttl >= t.stime + t.ttl / 2
    }, e.prototype.pathCheck = function (e, t, n) {
      for (var i = e + t.height, r = t.right, o = 0; o < n.length; o++) if (!(n[o].y > i || n[o].bottom < e)) {
        if (!(n[o].right < t.x || n[o].x > r)) return !1;
        if (this.willCollide(n[o], t)) return !1
      }
      return !0
    }, e.prototype.assign = function (e, t) {
      for (; this._pools.length <= t;) this._pools.push([]);
      var n = this._pools[t];
      if (0 === n.length) return e.cindex = t, console.log(">>> c.length " + n.length), 0;
      if (this.pathCheck(0, e, n)) return e.cindex = t, console.log(">>> c.pathCheck " + n.length), 0;
      for (var i = 0, r = 0; r < n.length && !((i = n[r].bottom + this.avoid) + e.height > this._height); r++) if (this.pathCheck(i, e, n)) return e.cindex = t, console.log(">>>d " + i), i;
      return this.assign(e, t + 1), console.log(">>>> this.assign(a ,b+1)")
    }, e.prototype.add = function (e) {
      danMuArr.push("a"), (recordY += polyvObject(e.dom).height() + 2) > polyvObject("#CmContainer").height() - 40 && (recordY = polyvObject(e.dom).height() + 2), 0 == danMuArr.length && (recordY = polyvObject(e.dom).height() + 2), e.height > this._height ? (e.cindex = -2, e.y = 0) : (e.y = this.assign(e, 0), BinArray.binsert(this._pools[e.cindex], e, function (e, t) {
        return e.bottom < t.bottom ? -1 : e.bottom > t.bottom ? 1 : 0
      }))
    }, e.prototype.remove = function (e) {
      if (!(e.cindex < 0)) {
        if (e.cindex >= this._pools.length) throw new Error("cindex out of bounds");
        var t = this._pools[e.cindex].indexOf(e);
        t < 0 || this._pools[e.cindex].splice(t, 1)
      }
    }, e.prototype.setBounds = function (e, t) {
      this._width = e, this._height = t
    }, e
  }(), AnchorCommentSpaceAllocator = function (t) {
    function e() {
      t.apply(this, arguments)
    }

    return __extends(e, t), e.prototype.add = function (e) {
      t.prototype.add.call(this, e), e.x = (this._width - e.width) / 2
    }, e.prototype.willCollide = function () {
      return !0
    }, e.prototype.pathCheck = function (e, t, n) {
      for (var i = e + t.height, r = 0; r < n.length; r++) if (!(n[r].y > i || n[r].bottom < e)) return !1;
      return !0
    }, e
  }(CommentSpaceAllocator), CoreComment = (__extends = this.__extends || function (e, t) {
    function n() {
      this.constructor = e
    }

    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    n.prototype = t.prototype, e.prototype = new n
  }, function () {
    function s(e, t) {
      if (void 0 === t && (t = {}), this.mode = 1, this.stime = 0, this.text = "", this.ttl = 5e3, this.dur = 5e3, this.cindex = -1, this.motion = [], this.movable = !0, this._alphaMotion = null, this.absolute = !0, this.align = 0, this._alpha = 1, this._size = 25, this._color = 16777215, this._border = !1, this._shadow = !0, this._font = "", !e) throw new Error("Comment not bound to comment manager.");
      if (this.parent = e, t.hasOwnProperty("stime") && (this.stime = t.stime), this.mode = t.hasOwnProperty("mode") ? t.mode : 1, t.hasOwnProperty("dur") && (this.dur = t.dur, this.ttl = this.dur), this.dur *= this.parent.options.global.scale, this.ttl *= this.parent.options.global.scale, t.hasOwnProperty("text") && (this.text = t.text), t.hasOwnProperty("motion")) {
        this._motionStart = [], this._motionEnd = [], this.motion = t.motion;
        for (var n = 0, i = 0; i < t.motion.length; i++) {
          this._motionStart.push(n);
          var r = 0;
          for (var o in t.motion[i]) {
            var a = t.motion[i][o];
            r = Math.max(a.dur, r), (null === a.easing || void 0 === a.easing) && (t.motion[i][o].easing = s.LINEAR)
          }
          n += r, this._motionEnd.push(n)
        }
        this._curMotion = 0
      }
      t.hasOwnProperty("color") && (this._color = t.color), t.hasOwnProperty("size") && (this._size = t.size), t.hasOwnProperty("border") && (this._border = t.border), t.hasOwnProperty("opacity") && (this._alpha = t.opacity), t.hasOwnProperty("alpha") && (this._alphaMotion = t.alpha), t.hasOwnProperty("font") && (this._font = t.font), t.hasOwnProperty("x") && (this._x = t.x), t.hasOwnProperty("y") && (this._y = t.y), t.hasOwnProperty("shadow") && (this._shadow = t.shadow), t.hasOwnProperty("position") && "relative" === t.position && (this.absolute = !1, this.mode < 7 && console.warn("Using relative position for CSA comment."))
    }

    return s.prototype.init = function (e) {
      void 0 === e && (e = null), this.dom = null !== e ? e.dom : document.createElement("div"), this.dom.className = this.parent.options.global.className, this.dom.appendChild(document.createTextNode(this.text)), this.dom.textContent = this.text, this.dom.innerHTML = this.text, this.size = this._size, 16777215 != this._color && (this.color = this._color), this.shadow = this._shadow, this._border && (this.border = this._border), "" !== this._font && (this.font = this._font), void 0 !== this._x && (this.x = this._x), void 0 !== this._y && (this.y = this._y), (1 !== this._alpha || this.parent.options.global.opacity < 1) && (this.alpha = this._alpha), 0 < this.motion.length && this.animate()
    }, Object.defineProperty(s.prototype, "x", {
      get: function () {
        return (null === this._x || void 0 === this._x) && (this._x = this.align % 2 == 0 ? this.dom.offsetLeft : this.parent.width - this.dom.offsetLeft - this.width), this.absolute ? this._x : this._x / this.parent.width
      }, set: function (e) {
        this._x = e, this.absolute || (this._x *= this.parent.width), this.align % 2 == 0 ? this.dom.style.left = this._x + "px" : this.dom.style.right = this._x + "px"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "y", {
      get: function () {
        return (null === this._y || void 0 === this._y) && (this._y = this.align < 2 ? this.dom.offsetTop : polyvObject("#CmContainer").height() - this.dom.offsetTop - polyvObject(this).height()), this.absolute ? this._y : this._y / this.parent.height
      }, set: function (e) {
        this._y = e, this._y = recordY - polyvObject(this.dom).height(), this.absolute || (this._y *= polyvObject("#CmContainer").height()), this.align < 2 ? this.dom.style.top = this._y + "px" : this.dom.style.bottom = this._y + "px"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "bottom", {
      get: function () {
        return this.y + polyvObject(this).height()
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "right", {
      get: function () {
        return this.x + this.width
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "width", {
      get: function () {
        return (null === this._width || void 0 === this._width) && (this._width = this.dom.offsetWidth), this._width
      }, set: function (e) {
        this._width = e, this.dom.style.width = this._width + "px"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "height", {
      get: function () {
        return (null === this._height || void 0 === this._height) && (this._height = polyvObject(this.dom).height()), this._height
      }, set: function (e) {
        this._height = e, polyvObject(this.dom).css("height", this._height + "px")
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "size", {
      get: function () {
        return this._size
      }, set: function (e) {
        this._size = e, this.dom.style.fontSize = this._size + "px"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "color", {
      get: function () {
        return this._color
      }, set: function (e) {
        var t = (this._color = e).substr(2);
        this.dom.style.color = "#" + t, 0 === this._color && (this.dom.className = this.parent.options.global.className + " rshadow")
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "alpha", {
      get: function () {
        return this._alpha
      }, set: function (e) {
        this._alpha = e, this.dom.style.opacity = Math.min(this._alpha, this.parent.options.global.opacity) + ""
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "border", {
      get: function () {
        return this._border
      }, set: function (e) {
        this._border = e, this.dom.style.border = this._border ? "1px solid #00ffff" : "none"
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "shadow", {
      get: function () {
        return this._shadow
      }, set: function (e) {
        this._shadow = e, this._shadow || (this.dom.className = this.parent.options.global.className + " noshadow")
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(s.prototype, "font", {
      get: function () {
        return this._font
      }, set: function (e) {
        this._font = e, this.dom.style.fontFamily = 0 < this._font.length ? this._font : ""
      }, enumerable: !0, configurable: !0
    }), s.prototype.time = function (e) {
      this.ttl -= e, this.ttl < 0 && (this.ttl = 0), this.movable && this.update(), this.ttl <= 0 && this.finish()
    }, s.prototype.update = function () {
      this.animate()
    }, s.prototype.invalidate = function () {
      this._x = null, this._y = null, this._width = null, this._height = null
    }, s.prototype._execMotion = function (e, t) {
      for (var n in e) if (e.hasOwnProperty(n)) {
        var i = e[n];
        this[n] = i.easing(Math.min(Math.max(t - i.delay, 0), i.dur), i.from, i.to - i.from, i.dur)
      }
    }, s.prototype.animate = function () {
      if (this._alphaMotion && (this.alpha = (this.dur - this.ttl) * (this._alphaMotion.to - this._alphaMotion.from) / this.dur + this._alphaMotion.from), 0 !== this.motion.length) {
        var e = Math.max(this.ttl, 0), t = this.dur - e - this._motionStart[this._curMotion];
        return this._execMotion(this.motion[this._curMotion], t), this.dur - e > this._motionEnd[this._curMotion] ? (this._curMotion++, void(this._curMotion >= this.motion.length && (this._curMotion = this.motion.length - 1))) : void 0
      }
    }, s.prototype.finish = function () {
      this.parent.finish(this)
    }, s.prototype.toString = function () {
      return ["[", this.stime, "|", this.ttl, "/", this.dur, "]", "(", this.mode, ")", this.text].join("")
    }, s.LINEAR = function (e, t, n, i) {
      return e * n / i + t
    }, s
  }()), ScrollComment = function (n) {
    function e(e, t) {
      n.call(this, e, t), this.dur *= this.parent.options.scroll.scale, this.ttl *= this.parent.options.scroll.scale
    }

    return __extends(e, n), Object.defineProperty(e.prototype, "alpha", {
      set: function (e) {
        this._alpha = e, this.dom.style.opacity = Math.min(Math.min(this._alpha, this.parent.options.global.opacity), this.parent.options.scroll.opacity) + ""
      }, enumerable: !0, configurable: !0
    }), e.prototype.init = function (e) {
      void 0 === e && (e = null), n.prototype.init.call(this, e), this.x = this.parent.width, this.parent.options.scroll.opacity < 1 && (this.alpha = this._alpha), this.absolute = !0
    }, e.prototype.update = function () {
      var e = polyvObject("#CmContainer").width();
      this.x = this.ttl / this.dur * (e + this.width) - this.width
    }, e
  }(CoreComment), CommentManager = function () {
    function e(e) {
      var i = 0;
      this._listeners = {}, this.stage = e, this.options = {
        global: {opacity: 1, scale: 1, className: "cmt"},
        scroll: {opacity: 1, scale: 1},
        limit: 0
      }, this.timeline = [], this.runline = [], this.position = 0, this.limiter = 0, this.filter = null, this.csa = {
        scroll: new CommentSpaceAllocator(0, 0),
        top: new AnchorCommentSpaceAllocator(0, 0),
        bottom: new AnchorCommentSpaceAllocator(0, 0),
        reverse: new CommentSpaceAllocator(0, 0),
        scrollbtm: new CommentSpaceAllocator(0, 0)
      }, this.width = this.stage.offsetWidth, this.height = this.stage.offsetHeight, this.startTimer = function () {
        if (!(0 < i)) {
          var t = (new Date).getTime(), n = this;
          i = window.setInterval(function () {
            var e = (new Date).getTime() - t;
            t = (new Date).getTime(), n.onTimerEvent(e, n)
          }, 10)
        }
      }, this.stopTimer = function () {
        window.clearInterval(i), i = 0
      }
    }

    var i = function (e, t) {
      for (var n = Math.PI / 180, i = e * n, r = t * n, o = Math.cos, a = Math.sin, s = [o(i) * o(r), o(i) * a(r), a(i), 0, -a(r), o(r), 0, 0, -a(i) * o(r), -a(i) * a(r), o(i), 0, 0, 0, 0, 1], l = 0; l < s.length; l++) Math.abs(s[l]) < 1e-6 && (s[l] = 0);
      return "matrix3d(" + s.join(",") + ")"
    };
    return e.prototype.stop = function () {
      this.stopTimer()
    }, e.prototype.start = function () {
      this.startTimer()
    }, e.prototype.seek = function (e) {
      this.position = BinArray.bsearch(this.timeline, e, function (e, t) {
        return e < t.stime ? -1 : e > t.stime ? 1 : 0
      })
    }, e.prototype.validate = function (e) {
      return null != e && this.filter.doValidate(e)
    }, e.prototype.load = function (e) {
      this.timeline = e, this.timeline.sort(function (e, t) {
        return e.stime > t.stime ? 2 : e.stime < t.stime ? -2 : e.date > t.date ? 1 : e.date < t.date ? -1 : null != e.dbid && null != t.dbid ? e.dbid > t.dbid ? 1 : e.dbid < t.dbid ? -1 : 0 : 0
      }), this.dispatchEvent("load")
    }, e.prototype.insert = function (e) {
      BinArray.binsert(this.timeline, e, function (e, t) {
        return e.stime > t.stime ? 2 : e.stime < t.stime ? -2 : e.date > t.date ? 1 : e.date < t.date ? -1 : null != e.dbid && null != t.dbid ? e.dbid > t.dbid ? 1 : e.dbid < t.dbid ? -1 : 0 : 0
      }) <= this.position && this.position++, this.dispatchEvent("insert")
    }, e.prototype.clear = function () {
      for (; 0 < this.runline.length;) this.runline[0].finish();
      this.dispatchEvent("clear")
    }, e.prototype.setBounds = function () {
      for (var e in this.width = this.stage.offsetWidth, this.height = this.stage.offsetHeight, this.dispatchEvent("resize"), this.csa) this.csa[e].setBounds(this.width, this.height);
      this.stage.style.perspective = this.width * Math.tan(40 * Math.PI / 180) / 2 + "px", this.stage.style.webkitPerspective = this.width * Math.tan(40 * Math.PI / 180) / 2 + "px"
    }, e.prototype.init = function () {
      this.setBounds(), null == this.filter && (this.filter = new CommentFilter)
    }, e.prototype.time = function (e) {
      if (e -= 1, this.position >= this.timeline.length || 2e3 <= Math.abs(this.lastPos - e)) {
        if (this.seek(e), this.lastPos = e, this.timeline.length <= this.position) return
      } else this.lastPos = e;
      for (; this.position < this.timeline.length && !(0 < this.options.limit && this.runline.length > this.limiter) && this.validate(this.timeline[this.position]) && this.timeline[this.position].stime <= e; this.position++) this.send(this.timeline[this.position])
    }, e.prototype.rescale = function () {
    }, e.prototype.send = function (e) {
      if (8 === e.mode) return console.log(e), void(this.scripting && console.log(this.scripting.eval(e.code)));
      if (null == this.filter || null != (e = this.filter.doModify(e))) {
        if (1 === e.mode || 2 === e.mode || 6 === e.mode) var t = new ScrollComment(this, e); else t = new CoreComment(this, e);
        switch (t.mode) {
          case 1:
            t.align = 0;
            break;
          case 2:
          case 4:
            t.align = 2;
            break;
          case 5:
            t.align = 0;
            break;
          case 6:
            t.align = 1
        }
        t.init(), polyvObject(this.stage).append(t.dom), polyvObject(t.dom).css("position", "absolute"), polyvObject(t.dom).css("display", "inline-block"), polyvObject(t.dom).css("white-space", "pre"), polyvObject(t.dom).css("text-shadow", "0px 1px 1px #000000");
        var n = t.color.substr(2);
        switch (polyvObject(t.dom).css("color", "#" + n), 1 == t.mode && polyvObject(t.dom).css("left", polyvObject("#CmContainer").width() + "px"), t.mode) {
          default:
          case 1:
            this.csa.scroll.add(t);
            break;
          case 2:
            this.csa.scrollbtm.add(t);
            break;
          case 4:
            this.csa.bottom.add(t);
            break;
          case 5:
            this.csa.top.add(t);
            break;
          case 6:
            this.csa.reverse.add(t);
            break;
          case 17:
          case 7:
            (0 !== e.rY || 0 !== e.rZ) && (t.dom.style.transform = i(e.rY, e.rZ), t.dom.style.webkitTransform = i(e.rY, e.rZ), t.dom.style.OTransform = i(e.rY, e.rZ), t.dom.style.MozTransform = i(e.rY, e.rZ), t.dom.style.MSTransform = i(e.rY, e.rZ))
        }
        t.y = t.y, this.dispatchEvent("enterComment", t), this.runline.push(t)
      }
    }, e.prototype.sendComment = function (e) {
      console.log("CommentManager.sendComment is deprecated. Please use send instead"), this.send(e)
    }, e.prototype.finish = function (e) {
      this.dispatchEvent("exitComment", e), polyvObject(e.dom).remove(), 1 <= danMuArr.length && danMuArr.splice(0, 1);
      var t = this.runline.indexOf(e);
      switch (0 <= t && this.runline.splice(t, 1), e.mode) {
        default:
        case 1:
          this.csa.scroll.remove(e);
          break;
        case 2:
          this.csa.scrollbtm.remove(e);
          break;
        case 4:
          this.csa.bottom.remove(e);
          break;
        case 5:
          this.csa.top.remove(e);
          break;
        case 6:
          this.csa.reverse.remove(e);
          break;
        case 7:
      }
    }, e.prototype.addEventListener = function (e, t) {
      "undefined" != typeof this._listeners[e] ? this._listeners[e].push(t) : this._listeners[e] = [t]
    }, e.prototype.dispatchEvent = function (e, t) {
      if ("undefined" != typeof this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) try {
        this._listeners[e][n](t)
      } catch (i) {
        console.err(i.stack)
      }
    }, e.prototype.onTimerEvent = function (e, t) {
      for (var n = 0; n < t.runline.length; n++) {
        var i = t.runline[n];
        i.hold || i.time(e)
      }
    }, e
  }()
} catch (ee) {
}
!function (e) {
  function n(e) {
    return parseInt(e) === e
  }

  function i(e) {
    if (!n(e.length)) return !1;
    for (var t = 0; t < e.length; t++) if (!n(e[t]) || e[t] < 0 || 255 < e[t]) return !1;
    return !0
  }

  function o(e, t) {
    if (e.buffer && ArrayBuffer.isView(e) && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
    if (Array.isArray(e)) {
      if (!i(e)) throw new Error("Array contains invalid value: " + e);
      return new Uint8Array(e)
    }
    if (n(e.length) && i(e)) return new Uint8Array(e);
    throw new Error("unsupported array-like object")
  }

  function l(e) {
    return new Uint8Array(e)
  }

  function a(e, t, n, i, r) {
    null == i && null == r || (e = e.slice ? e.slice(i, r) : Array.prototype.slice.call(e, i, r)), t.set(e, n)
  }

  var r, t = {
      toBytes: function (e) {
        var t = [], n = 0;
        for (e = encodeURI(e); n < e.length;) {
          var i = e.charCodeAt(n++);
          37 === i ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(i)
        }
        return o(t)
      }, fromBytes: function (e) {
        for (var t = [], n = 0; n < e.length;) {
          var i = e[n];
          i < 128 ? (t.push(String.fromCharCode(i)), n++) : 191 < i && i < 224 ? (t.push(String.fromCharCode((31 & i) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & i) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3)
        }
        return t.join("")
      }
    }, s = (r = "0123456789abcdef", {
      toBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
        return t
      }, fromBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var i = e[n];
          t.push(r[(240 & i) >> 4] + r[15 & i])
        }
        return t.join("")
      }
    }), d = {16: 10, 24: 12, 32: 14},
    p = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
    h = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
    c = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
    u = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
    f = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
    v = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
    m = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
    g = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
    y = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
    b = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
    w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
    x = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
    _ = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
    S = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
    C = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

  function T(e) {
    for (var t = [], n = 0; n < e.length; n += 4) t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
    return t
  }

  var k = function (e) {
    if (!(this instanceof k)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {value: o(e, !0)}), this._prepare()
  };
  k.prototype._prepare = function () {
    var e = d[this.key.length];
    if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
    this._Ke = [], this._Kd = [];
    for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
    var n, i = 4 * (e + 1), r = this.key.length / 4, o = T(this.key);
    for (t = 0; t < r; t++) n = t >> 2, this._Ke[n][t % 4] = o[t], this._Kd[e - n][t % 4] = o[t];
    for (var a, s = 0, l = r; l < i;) {
      if (a = o[r - 1], o[0] ^= h[a >> 16 & 255] << 24 ^ h[a >> 8 & 255] << 16 ^ h[255 & a] << 8 ^ h[a >> 24 & 255] ^ p[s] << 24, s += 1, 8 != r) for (t = 1; t < r; t++) o[t] ^= o[t - 1]; else {
        for (t = 1; t < r / 2; t++) o[t] ^= o[t - 1];
        a = o[r / 2 - 1], o[r / 2] ^= h[255 & a] ^ h[a >> 8 & 255] << 8 ^ h[a >> 16 & 255] << 16 ^ h[a >> 24 & 255] << 24;
        for (t = r / 2 + 1; t < r; t++) o[t] ^= o[t - 1]
      }
      for (t = 0; t < r && l < i;) c = l >> 2, u = l % 4, this._Ke[c][u] = o[t], this._Kd[e - c][u] = o[t++], l++
    }
    for (var c = 1; c < e; c++) for (var u = 0; u < 4; u++) a = this._Kd[c][u], this._Kd[c][u] = x[a >> 24 & 255] ^ _[a >> 16 & 255] ^ S[a >> 8 & 255] ^ C[255 & a]
  }, k.prototype.encrypt = function (e) {
    if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
    for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], i = T(e), r = 0; r < 4; r++) i[r] ^= this._Ke[0][r];
    for (var o = 1; o < t; o++) {
      for (r = 0; r < 4; r++) n[r] = u[i[r] >> 24 & 255] ^ f[i[(r + 1) % 4] >> 16 & 255] ^ v[i[(r + 2) % 4] >> 8 & 255] ^ m[255 & i[(r + 3) % 4]] ^ this._Ke[o][r];
      i = n.slice()
    }
    var a, s = l(16);
    for (r = 0; r < 4; r++) a = this._Ke[t][r], s[4 * r] = 255 & (h[i[r] >> 24 & 255] ^ a >> 24), s[4 * r + 1] = 255 & (h[i[(r + 1) % 4] >> 16 & 255] ^ a >> 16), s[4 * r + 2] = 255 & (h[i[(r + 2) % 4] >> 8 & 255] ^ a >> 8), s[4 * r + 3] = 255 & (h[255 & i[(r + 3) % 4]] ^ a);
    return s
  }, k.prototype.decrypt = function (e) {
    if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
    for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], i = T(e), r = 0; r < 4; r++) i[r] ^= this._Kd[0][r];
    for (var o = 1; o < t; o++) {
      for (r = 0; r < 4; r++) n[r] = g[i[r] >> 24 & 255] ^ y[i[(r + 3) % 4] >> 16 & 255] ^ b[i[(r + 2) % 4] >> 8 & 255] ^ w[255 & i[(r + 1) % 4]] ^ this._Kd[o][r];
      i = n.slice()
    }
    var a, s = l(16);
    for (r = 0; r < 4; r++) a = this._Kd[t][r], s[4 * r] = 255 & (c[i[r] >> 24 & 255] ^ a >> 24), s[4 * r + 1] = 255 & (c[i[(r + 3) % 4] >> 16 & 255] ^ a >> 16), s[4 * r + 2] = 255 & (c[i[(r + 2) % 4] >> 8 & 255] ^ a >> 8), s[4 * r + 3] = 255 & (c[255 & i[(r + 1) % 4]] ^ a);
    return s
  };
  var A = function (e) {
    if (!(this instanceof A)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new k(e)
  };
  A.prototype.encrypt = function (e) {
    if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
    for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) a(e, n, 0, i, i + 16), a(n = this._aes.encrypt(n), t, i);
    return t
  }, A.prototype.decrypt = function (e) {
    if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
    for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) a(e, n, 0, i, i + 16), a(n = this._aes.decrypt(n), t, i);
    return t
  };
  var E = function (e, t) {
    if (!(this instanceof E)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
    } else t = l(16);
    this._lastCipherblock = o(t, !0), this._aes = new k(e)
  };
  E.prototype.encrypt = function (e) {
    if ((e = o(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
    for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) {
      a(e, n, 0, i, i + 16);
      for (var r = 0; r < 16; r++) n[r] ^= this._lastCipherblock[r];
      this._lastCipherblock = this._aes.encrypt(n), a(this._lastCipherblock, t, i)
    }
    return t
  }, E.prototype.decrypt = function (e) {
    if ((e = o(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
    for (var t = l(e.length), n = l(16), i = 0; i < e.length; i += 16) {
      a(e, n, 0, i, i + 16), n = this._aes.decrypt(n);
      for (var r = 0; r < 16; r++) t[i + r] = n[r] ^ this._lastCipherblock[r];
      a(e, this._lastCipherblock, 0, i, i + 16)
    }
    return t
  };
  var P = function (e, t, n) {
    if (!(this instanceof P)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)")
    } else t = l(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = o(t, !0), this._aes = new k(e)
  };
  P.prototype.encrypt = function (e) {
    if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
    for (var t, n = o(e, !0), i = 0; i < n.length; i += this.segmentSize) {
      t = this._aes.encrypt(this._shiftRegister);
      for (var r = 0; r < this.segmentSize; r++) n[i + r] ^= t[r];
      a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(n, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
    }
    return n
  }, P.prototype.decrypt = function (e) {
    if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
    for (var t, n = o(e, !0), i = 0; i < n.length; i += this.segmentSize) {
      t = this._aes.encrypt(this._shiftRegister);
      for (var r = 0; r < this.segmentSize; r++) n[i + r] ^= t[r];
      a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize)
    }
    return n
  };
  var I = function (e, t) {
    if (!(this instanceof I)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
    } else t = l(16);
    this._lastPrecipher = o(t, !0), this._lastPrecipherIndex = 16, this._aes = new k(e)
  };
  I.prototype.encrypt = function (e) {
    for (var t = o(e, !0), n = 0; n < t.length; n++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
    return t
  }, I.prototype.decrypt = I.prototype.encrypt;
  var j = function (e) {
    if (!(this instanceof j)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = l(16), this.setValue(e)) : this.setBytes(e)
  };
  j.prototype.setValue = function (e) {
    if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
    for (var t = 15; 0 <= t; --t) this._counter[t] = e % 256, e >>= 8
  }, j.prototype.setBytes = function (e) {
    if (16 != (e = o(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
    this._counter = e
  }, j.prototype.increment = function () {
    for (var e = 15; 0 <= e; e--) {
      if (255 !== this._counter[e]) {
        this._counter[e]++;
        break
      }
      this._counter[e] = 0
    }
  };
  var B = function (e, t) {
    if (!(this instanceof B)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof j || (t = new j(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new k(e)
  };
  B.prototype.encrypt = function (e) {
    for (var t = o(e, !0), n = 0; n < t.length; n++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
    return t
  }, B.prototype.decrypt = B.prototype.encrypt;
  var M = {
    AES: k,
    Counter: j,
    ModeOfOperation: {ecb: A, cbc: E, cfb: P, ofb: I, ctr: B},
    utils: {hex: s, utf8: t},
    padding: {
      pkcs7: {
        pad: function (e) {
          var t = 16 - (e = o(e, !0)).length % 16, n = l(e.length + t);
          a(e, n);
          for (var i = e.length; i < n.length; i++) n[i] = t;
          return n
        }, strip: function (e) {
          if ((e = o(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
          var t = e[e.length - 1];
          if (16 < t) throw new Error("PKCS#7 padding byte out of range");
          for (var n = e.length - t, i = 0; i < t; i++) if (e[n + i] !== t) throw new Error("PKCS#7 invalid padding byte");
          var r = l(n);
          return a(e, r, 0, 0, n), r
        }
      }
    },
    _arrayTest: {coerceArray: o, createArray: l, copyArray: a}
  };
  e.aesjs && (M._aesjs = e.aesjs), e.aesjs = M
}("undefined" != typeof window ? window : this), function (t) {
  "use strict";
  var n, i = t.PovBase64;
  if ("undefined" != typeof module && module.exports) try {
    n = require("buffer").Buffer
  } catch (x) {
  }
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = function (e) {
    for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
    return t
  }(r), a = String.fromCharCode, s = function (e) {
    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? a(192 | t >>> 6) + a(128 | 63 & t) : a(224 | t >>> 12 & 15) + a(128 | t >>> 6 & 63) + a(128 | 63 & t);
    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
    return a(240 | t >>> 18 & 7) + a(128 | t >>> 12 & 63) + a(128 | t >>> 6 & 63) + a(128 | 63 & t)
  }, l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, c = function (e) {
    return e.replace(l, s)
  }, u = function (e) {
    var t = [0, 2, 1][e.length % 3],
      n = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
    return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), 2 <= t ? "=" : r.charAt(n >>> 6 & 63), 1 <= t ? "=" : r.charAt(63 & n)].join("")
  }, d = t.btoa ? function (e) {
    return t.btoa(e)
  } : function (e) {
    return e.replace(/[\s\S]{1,3}/g, u)
  }, p = n ? function (e) {
    return (e.constructor === n.constructor ? e : new n(e)).toString("base64")
  } : function (e) {
    return d(c(e))
  }, h = function (e, t) {
    return t ? p(String(e)).replace(/[+\/]/g, function (e) {
      return "+" == e ? "-" : "_"
    }).replace(/=/g, "") : p(String(e))
  }, f = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"), v = function (e) {
    switch (e.length) {
      case 4:
        var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
        return a(55296 + (t >>> 10)) + a(56320 + (1023 & t));
      case 3:
        return a((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
      default:
        return a((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
    }
  }, m = function (e) {
    return e.replace(f, v)
  }, g = function (e) {
    var t = e.length, n = t % 4,
      i = (0 < t ? o[e.charAt(0)] << 18 : 0) | (1 < t ? o[e.charAt(1)] << 12 : 0) | (2 < t ? o[e.charAt(2)] << 6 : 0) | (3 < t ? o[e.charAt(3)] : 0),
      r = [a(i >>> 16), a(i >>> 8 & 255), a(255 & i)];
    return r.length -= [0, 0, 2, 1][n], r.join("")
  }, y = t.atob ? function (e) {
    return t.atob(e)
  } : function (e) {
    return e.replace(/[\s\S]{1,4}/g, g)
  }, b = n ? function (e) {
    return (e.constructor === n.constructor ? e : new n(e, "base64")).toString()
  } : function (e) {
    return m(y(e))
  }, e = function (e) {
    return b(String(e).replace(/[-_]/g, function (e) {
      return "-" == e ? "+" : "/"
    }).replace(/[^A-Za-z0-9\+\/]/g, ""))
  };
  if (t.PovBase64 = {
    VERSION: "2.1.9",
    atob: y,
    btoa: d,
    fromBase64: e,
    toBase64: h,
    utob: c,
    encode: h,
    encodeURI: function (e) {
      return h(e, !0)
    },
    btou: m,
    decode: e,
    noConflict: function () {
      var e = t.PovBase64;
      return t.PovBase64 = i, e
    }
  }, "function" == typeof Object.defineProperty) {
    var w = function (e) {
      return {value: e, enumerable: !1, writable: !0, configurable: !0}
    };
    t.PovBase64.extendString = function () {
      Object.defineProperty(String.prototype, "fromBase64", w(function () {
        return e(this)
      })), Object.defineProperty(String.prototype, "toBase64", w(function (e) {
        return h(this, e)
      })), Object.defineProperty(String.prototype, "toBase64URI", w(function () {
        return h(this, !0)
      }))
    }
  }
  t.Meteor && (Base64 = t.PovBase64)
}("undefined" != typeof window ? window : this);
var polyvLiveConfig = function (c, u) {
  c.liveLanguageParser = {
    channelFail: "%E5%BD%93%E5%89%8D%E7%9B%B4%E6%92%AD%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE%EF%BC%8C%E8%AF%B7%E5%90%91%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%8D%E9%A6%88|We will be back soon…|Live streaming has failed. Please refresh the page or contact admin.",
    channelRefresh: "%E5%BD%93%E5%89%8D%E7%9B%B4%E6%92%AD%E6%97%A0%E6%B3%95%E6%92%AD%E6%94%BE%2C%E8%AF%B7%E5%88%B7%E6%96%B0%E6%88%96%E5%90%91%E7%AE%A1%E7%90%86%E5%91%98%E5%8F%8D%E9%A6%88|Live streaming has failed. Please refresh the page or contact admin.",
    streamFail: "stream%20is%20not%20available",
    vidObjError: "%E8%A7%86%E9%A2%91%E7%A6%81%E6%AD%A2%E5%9C%A8%E5%B0%8F%E7%AA%97%E5%8F%A3%E6%92%AD%E6%94%BE%EF%BC%8C%E8%AF%B7%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%E5%8D%B3%E5%8F%AF%E7%BB%A7%E7%BB%AD%E8%A7%82%E7%9C%8B%EF%BC%81",
    networkTips: "%E7%BD%91%E7%BB%9C%E5%BC%82%E5%B8%B8%2C%E8%AF%B7%E5%88%B7%E6%96%B0%E5%90%8E%E9%87%8D%E8%AF%95|Network%20Error%2C%20Try%20Again%20Later",
    concurrentRes: "%E8%A7%82%E7%9C%8B%E4%BA%BA%E6%95%B0%E5%B7%B2%E8%BE%BE%E4%B8%8A%E9%99%90%EF%BC%8C%E8%AF%B7%E7%A8%8D%E5%90%8E%E5%86%8D%E8%AF%95"
  }, c.playerType = {
    FLASH: "flash",
    HTML: "html",
    INSTALLER: "installer",
    NO_SUPPORT: "nosupport"
  }, polyvObject.FLOW_STATUS = {
    CHECKSTREAMSTATUS: "checkStreamStatus",
    LOADING: "loading",
    WAITING: "waiting",
    PREAD: "preAd",
    PLAYING: "playing",
    PAUSE: "pause",
    OVER: "over"
  }, c.liveAssets = !0 === c.debug ? "//play1.polyv.net/player2/test/nong/liveplayer/wimages/" : "//livestatic.videocc.net/assets/wimages/", c.livePlayerAssets = !0 === c.debug ? "//play1.polyv.net/player2/test/nong/liveplayer/wimages/player/" : "//livestatic.videocc.net/assets/wimages/player/", c.imgConfig = {
    installFlash: c.liveAssets + "install_flash_player.png",
    upgradeFlash: c.liveAssets + "upgrade_flash_player.png",
    audioModePlaying: c.liveAssets + "audio-bg.png",
    audioModePlayback: c.liveAssets + "icon-audio.png",
    audioModeBtn: c.liveAssets + "audio-mode-btn.png",
    playBtn: c.liveAssets + "playbtn.png",
    pauseBtn: c.liveAssets + "pausebtn.png",
    danmuOpen: c.liveAssets + "danmu-open.png",
    danmuClose: c.liveAssets + "danmu-close.png",
    playPptBtn: c.liveAssets + "pptClientWatch_images/mobile/play.png",
    pausePptBtn: c.liveAssets + "pptClientWatch_images/mobile/pause.png",
    closePptCamera: c.liveAssets + "pptClientWatch_images/mobile/close-camera.png",
    openPptCamera: c.liveAssets + "pptClientWatch_images/mobile/open-camera.png",
    switchPptCamera: c.liveAssets + "switch.png",
    vrGrassClose: c.liveAssets + "vr-grass-off.png",
    vrGrassOpen: c.liveAssets + "vr-grass-on.png",
    fullScreen: c.liveAssets + "full.png",
    fullPptScreen: c.liveAssets + "pptClientWatch_images/mobile/fullscreen.png",
    normalPptScreen: c.liveAssets + "pptClientWatch_images/mobile/normalscreen.png",
    refreshBtn: c.liveAssets + "refresh.png",
    errorIcon: c.liveAssets + "icon.png",
    cutOffIcon: c.liveAssets + "icon-info.png",
    cutOffBlueBg: c.liveAssets + "default_blue.png",
    cutOffBlueIcon: c.liveAssets + "nolive_blue.png",
    cutOffBlueIcon: c.liveAssets + "nolive_blue_en.png",
    cutOffBlueIcon: c.liveAssets + "nolive_ppt.png",
    cutOffBlueIcon: c.livePlayerAssets + "special/nolive.png"
  }, c.urlPool = function () {
    var e, t, n, i, r = "http://";
    if ("https:" == window.location.protocol && (r = "https://"), u && u.h5Beta && (c.h5LiveScript = "//player.polyv.net/html5LiveJavascript/" + u.h5Beta + "/liveplayer.min.js"), u) {
      var o = "settings=" + JSON.stringify(u), a = encodeURIComponent(o);
      c.iframeVrSrc = "//vrlive.polyv.cn/livescript/vr.html?" + a, u.beta && (c.iframeVrSrc = "//vrlive.polyv.cn/liveJavascript/" + polyvObject.liveBuildMetaData.split("+")[1] + "/vr.html?" + a), u.vrTest && (c.iframeVrSrc = "//play1.polyv.net/player2/test/nong/vrdemo.html?" + a), u.vrTestLocal && (c.iframeVrSrc = "vrdemo.html?" + a);
      var s = (n = u.uid, i = u.vid, {
        restrictUrl: r + "livejson.polyv.net/service/v3/restrict.json?uid=" + n + "&cid=" + i + "&pageDomain=" + document.domain + "&ran=" + Math.floor(9999999 * Math.random()),
        backUpRestrictUrl: r + "live.polyv.net/service/v2/restrict.json?uid=" + n + "&vid=" + i + "&pageDomain=" + document.domain + "&ran=" + Math.floor(9999999 * Math.random())
      });
      c.restrictUrl = s.restrictUrl, c.backUpRestrictUrl = s.backUpRestrictUrl;
      var l = (e = u.uid, t = u.vid, {
        channelUrl: r + "player.polyv.net/service/lts3/enc_" + e + "_" + t + ".json?ran=" + Math.floor(9999999 * Math.random()),
        backUpChannelUrl: r + "live.polyv.net/service/lts3/enc_" + e + "_" + t + ".json?ran=" + Math.floor(9999999 * Math.random())
      });
      c.channelUrl = l.channelUrl, c.backUpChannelUrl = l.backUpChannelUrl
    }
  }()
}, polyvLiveBrowser = function (i) {
  i.majorVersion = 10, i.majorRevision = 3, i.userAgent = navigator.userAgent, i.uaToLowerCase = function () {
    return navigator.userAgent.toLowerCase()
  }, i.isIE = function () {
    return !!(window.ActiveXObject || "ActiveXObject" in window)
  }, i.isEdge = function () {
    return -1 < i.userAgent.indexOf("Edge")
  }, i.isIOS = function (e) {
    for (var t = ["iPad", "iPhone", "iPod"], n = t.length, i = e || navigator.userAgent, r = 0; r < n; r++) if (i.match(new RegExp(t[r], "i"))) return !0;
    return !1
  }, i.isAndroid = function () {
    return !!navigator.userAgent.match(new RegExp("android", "i"))
  }, i.isIpad = function () {
    return !!navigator.userAgent.match(new RegExp("iPad", "i"))
  }, i.isInternalQQ = function () {
    return -1 < navigator.userAgent.indexOf("QQ/")
  }, i.isQQ = function () {
    return -1 < navigator.userAgent.indexOf("MQQBrowser")
  }, i.isChrome = function () {
    var e = navigator.userAgent, t = !1;
    return -1 != e.indexOf("Chrome") && -1 == e.toLowerCase().indexOf("micromessenger") && -1 == e.indexOf("MQQBrowser") && -1 == e.indexOf("UCBrowser") && -1 == e.indexOf("baidubrowser") && (t = !0), t
  }, i.isWeiXin = function () {
    return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
  }, i.determinePlayerType = function (e, t, n) {
    return e.forceHTML5 ? i.playerType.HTML : e.forceFlash ? i.playerType.FLASH : null == t && 0 == n ? i.playerType.NO_SUPPORT : i.isSupportedHTMLDevice() && n ? i.playerType.HTML : null != t ? i.isFlashVersionSufficient(t) ? i.playerType.FLASH : i.playerType.INSTALLER : n ? i.playerType.HTML : i.playerType.NO_SUPPORT
  }, i.isFlashVersionSufficient = function (e) {
    return null != e && (e.majorVersion > i.majorVersion || e.majorVersion == i.majorVersion && e.majorRevision > i.majorRevision)
  }, i.checkHtmlSupport = function () {
    var e = document.createElement("video"), t = (document.createElement("canvas"), !0);
    navigator.userAgent.match(new RegExp("android", "i")) || (t = !(!e.canPlayType || !e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "")));
    var n = !!document.createElement("canvas").getContext;
    return t && n && i.isSupportedHTMLDevice()
  }, i.checkLowerDevice = function () {
    var e = 480 == window.screen.height;
    return 1 == window.devicePixelRatio && (e = !0), e
  }, i.isSupportedHTMLDevice = function (e) {
    for (var t = ["iPad", "iPhone", "iPod", "android"], n = t.length, i = e || navigator.userAgent, r = 0; r < n; r++) if (i.match(new RegExp(t[r], "i"))) return !0;
    return !1
  }, i.checkFlashSupport = function () {
    return i.isIE() ? i.checkFlashSupportIE() : i.checkFlashSupportStandard()
  }, i.checkFlashSupportIE = function () {
    var e;
    try {
      var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7").GetVariable("$version");
      e = / ([0-9]+),([0-9]+),([0-9]+),/.exec(t)
    } catch (n) {
      return null
    }
    return {majorVersion: e[1], majorRevision: e[2], minorRevision: e[3]}
  }, i.checkFlashSupportStandard = function () {
    var e, t, n, i;
    try {
      if (!("undefined" != typeof navigator.plugins && 0 < navigator.plugins.length)) return null;
      if (!navigator.plugins["Shockwave Flash 2.0"] && !navigator.plugins["Shockwave Flash"]) throw new Error;
      var r = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
        o = navigator.plugins["Shockwave Flash" + r].description, a = navigator.plugins["Shockwave Flash" + r].filename;
      if (a.match && a.toLowerCase().match(/lite/)) throw new Error;
      t = (e = o.split(" "))[2].split(".")[0], n = e[2].split(".")[1], "" == (i = e[3]) && (i = e[4]), "d" == i[0] ? i = i.substring(1) : "r" == i[0] && 0 < (i = i.substring(1)).indexOf("d") && (i = i.substring(0, i.indexOf("d")))
    } catch (s) {
      return null
    }
    return {majorVersion: t, majorRevision: n, minorRevision: i}
  }
}, polyvLiveTool = function (o) {
  o.getPlayId = function () {
    return (new Date).getTime() + "" + "X" + (parseInt(1e6 * Math.random() + 1e6) + "")
  }, o.getPlayer = function (e) {
    return window.document[e] ? window.document[e] : (navigator.appName.indexOf("Microsoft Internet"), document.getElementById(e))
  }, o.decode = function (e) {
    var t, n, i, r;
    if ("abcdofghijklnmepqrstuvwxyz0123456789", "lpmkenjibhuvgycftxdrzsoawq0126783459", 34 == e.length) t = e; else for (e = e.substr(1), t = "", n = 0; n < e.length; n++) i = e.charAt(n), t += -1 == (r = "lpmkenjibhuvgycftxdrzsoawq0126783459".indexOf(i)) ? i : "abcdofghijklnmepqrstuvwxyz0123456789".charAt(r);
    return t
  }, o.getString = function () {
    for (var e = "divcss".charCodeAt(), t = [12, 11, 8, 21, 18, 8, 5, 18, 1, 44, 45, 46, 47, 48, 49, 50, 10, 11, 12, 3, 7, 8, 17, 2], n = "", i = 0; i < 16; i++) {
      var r;
      r = 8 < i ? e - t[i] : e + t[i], n += String.fromCharCode(r)
    }
    return n
  }, o.stringToBytes = function (e) {
    for (var t, n, i = [], r = 0; r < e.length; r++) {
      for (t = e.charCodeAt(r), n = []; n.push(255 & t), t >>= 8;) ;
      i = i.concat(n.reverse())
    }
    return i
  }, o.isSupportMse = function () {
    return window.MediaSource = window.MediaSource || window.WebKitMediaSource, window.MediaSource && "function" == typeof window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
  }, o.isSupportSamePlayer = function () {
    var e = navigator.userAgent;
    if (o.isAndroid()) {
      var t = e.match(/TBS\/([\d\.]+)/i);
      if ("micromessenger" == e.toLowerCase().match(/MicroMessenger/i) && t && "036849" <= t[1]) return !0
    }
    return !1
  }, o.getSamePlayerFullExit = function () {
    var e = navigator.userAgent, t = ["x5videoenterfullscreen", "x5videoexitfullscreen"],
      n = e.match(/TBS\/([\d\.]+)/i);
    return "micromessenger" == e.match(/MicroMessenger/i) && n && "036849" <= n[1] && n[1] < "036900" && t.reverse(), t
  }, o.isSameplayerMode = function (e) {
    return !e.useVr && e.x5 && o.isSupportSamePlayer()
  }, o.addEventX5FullExit = function (e) {
    if (!o.hasAddEventX5FullExit) {
      o.hasAddEventX5FullExit = !0;
      var t = o.getSamePlayerFullExit();
      e.video.addEventListener(t[0], function () {
        e.video.style["object-position"] = "50% 0px", o.onX5Full(e)
      }), e.video.addEventListener(t[1], function () {
        e.video.style["object-position"] = "50% 50%", o.onX5Exit(e)
      })
    }
  }, o.onX5Full = function (e) {
    e.x5Fulling = !0, "function" == typeof x5Full && x5Full()
  }, o.onX5Exit = function (e) {
    e.x5Fulling = !1, e.x5FullPage && o.isSameplayerMode(e) && o.wxSamePlayerPortrait(e), "function" == typeof x5Exit && x5Exit(), e.changeFullBtn()
  }, o.wxSamePlayerLandscape = function (e) {
    o(e.video).attr({
      "x5-video-player-type": "h5",
      "x5-video-player-fullscreen": "true",
      "x5-video-orientation": "landscape"
    }), e.video.style["object-position"] = "50% 50%"
  }, o.wxSamePlayerPortrait = function (e) {
    o(e.video).attr({
      "x5-video-player-type": "h5",
      "x5-video-player-fullscreen": "true",
      "x5-video-orientation": "portrait"
    })
  }, o.isSupportFLVTbs = function () {
    var e = navigator.userAgent;
    if (o.isAndroid()) {
      var t = e.match(/TBS\/([\d\.]+)/i);
      if ("micromessenger" == e.toLowerCase().match(/MicroMessenger/i) && t && "035000" <= t[1]) return !0
    }
    return !1
  }, o.arrangeSrc = function (e, t, n) {
    return t = n ? n.m3u8Url : e.hlsUrl, t = o.isNamed ? o.getSrcByReplaceStreamName(e, t, o.streamName) : t, t = o.getSrcByMultirate(e, t, n), t = o.getSrcByType(e, t), t = o.getSrcByUseVr(e, t), t = o.flow_status == o.FLOW_STATUS.WAITING ? o.waitImage : t, t = polyvObject.isTestAli ? t.replace(t.split("/")[2], "pull-test.videocc.net") : t, t = e.vrTest ? "//play1.polyv.net/player2/test/nong/vr2.mp4" : t, t = e.panoramicSrc ? e.panoramicSrc : t, t = e.switchingMode ? o.getSrcByRandom(e, t) : t
  }, o.getSrcByReplaceStreamName = function (e, t, n) {
    if (e.useTimeStamp && !e.vod && (t = t.replace(o.defaultStreamName, n)), !e.useTimeStamp && !e.vod) {
      var i = t.split("/");
      t = "ali" === e.cdnType ? t.replace(i[4].match(/.*?(?=.m3u8)/), n) : t.replace(i[4], n)
    }
    return t
  }, o.getSrcByMultirate = function (e, t, n) {
    if ("Y" === e.multirateEnabled) {
      o.reNewMultirateUrlArr(e, n);
      var i = e.multirateUrlArr.length - 1;
      i = 0 < i ? i : 0, e.switchMultirate > i && (e.switchMultirate = i), t = -1 !== e.switchMultirate ? e.multirateUrlArr[e.switchMultirate].m3u8 : e.multirateDefaultUrl, e.multirate = e.switchMultirate
    }
    return t
  }, o.reNewMultirateUrlArr = function (e, t, n) {
    if (t && t.multirateModel && (e.multirateUrlArr = t.multirateModel.definitions, n)) {
      "undefined" != typeof e.df && (e.df = e.df < 0 ? 0 : e.df, e.multirate = e.df, e.switchMultirate = e.multirate, e.hasSetMultirate = !0), e.mRateArr = [];
      for (var i = 0; i < e.multirateUrlArr.length; i++) {
        var r = e.multirateUrlArr[i].definition;
        e.hasSetMultirate || r !== t.multirateModel.defaultDefinition || (e.multirate = i), e.mRateArr.push(o.changeRateLanguage(e, r))
      }
      e.multirate = 0 <= e.multirate ? e.multirate : -1, e.switchMultirate = e.multirate
    }
  }, o.changeRateLanguage = function (e, t) {
    return 1 === e.language && (t = (t = (t = t.replace(/流畅/, "SD")).replace(/高清/, "HD")).replace(/超清/, "FHD")), t
  }, o.getSrcByType = function (e, t) {
    return e.useAudio && 1 == e.useAudio && (-1 < t.indexOf("?") ? t += "&only-audio=1" : t += "?only-audio=1"), t
  }, o.getSrcByUseVr = function (e, t) {
    return e.useVr && (t = t.replace(t.split("/")[2], "vrlive.polyv.cn")), t
  }, o.getSrcByRandom = function (e, t) {
    return e.switchingMode && (t = -1 < t.indexOf("?") ? t + "&ran=" + Math.floor(999999999 * Math.random()) : t + "?ran=" + Math.floor(999999999 * Math.random())), t
  }, o.launchFullScreen = function (e) {
    e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen(), e.webkitEnterFullscreen()
  }, o.exitFullScreen = function (e) {
    e.exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitCancelFullScreen ? e.webkitCancelFullScreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.msExitFullscreen && e.msExitFullscreen()
  }, o.timeFormat = function (e) {
    e = parseInt(e);
    var t = 0, n = 0, i = 0, r = parseFloat(e);
    switch (null != r && "" != r && (60 < r && r < 3600 ? (t = 0, n = parseInt(r / 60), i = parseInt(60 * (parseFloat(r / 60) - parseInt(r / 60)))) : 3600 <= r && r < 86400 ? (t = parseInt(r / 3600), n = parseInt(60 * (parseFloat(r / 3600) - parseInt(r / 3600))), i = parseInt(60 * (parseFloat(60 * (parseFloat(r / 3600) - parseInt(r / 3600))) - parseInt(60 * (parseFloat(r / 3600) - parseInt(r / 3600)))))) : (n = t = 0, i = parseInt(r))), t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, o.showTimeblock) {
      case 0:
      case 1:
        r = n + ":" + i;
        break;
      case 2:
        r = t + ":" + n + ":" + i
    }
    return r
  }, o.iframeform = function (e, t) {
    var n = this;
    n.time = (new Date).getTime(), n.addParameter = function (e, t) {
      o("<input type='hidden' />").attr("name", e).attr("value", t).appendTo(n.form)
    }, n.form = o('<form action="' + e + '" target="iframe' + n.time + '" style="display:none;" method="get"  id="form' + n.time + '" name="form' + n.time + '"></form>'), n.send = function () {
      var e = o('<iframe data-time="' + n.time + '" style="display:none;" id="iframe' + n.time + '" name="iframe' + n.time + '"></iframe>');
      o("body").append(e), o("body").append(n.form), n.form.submit(), e.load(function () {
        o("#form" + o(this).data("time")).remove(), o(this).remove()
      })
    }
  };
  var i = !(o.getIfShowOnlineNum = function () {
    return o.openDanMu ? o.showOnlineNum = !1 : o.showOnlineNum = !0
  }), r = [];
  o.checkFlashObject = function (e, t) {
    var n = {container: e, settings: t};
    r.push(n), i || (i = !0, polyvObject.liveVidObjectChild = setInterval(function () {
      o.isLiveVidObject(e, t.vid)
    }, 1e4))
  }, o.isLiveVidObject = function (e, t) {
    var n = polyvObject("#" + t).attr("style");
    if (n != undefined && -1 < (n = (n = n.replace(/\s+/g, "")).replace(/\;+/g, "")).indexOf("visibility:visible") && -1 < n.indexOf("!important")) {
      clearInterval(polyvObject.liveVidObjectChild);
      for (var i = 0; i < r.length; i++) o.showLiveVidObjError(r[i].container, r[i].settings)
    }
  }, o.showLiveVidObjError = function (e, t) {
    var n = o("<div/>");
    img = o("<img/>"), span = o("<span/>"), player = o("#" + t.vid), div = o("<div/>"), width = player.attr("width"), height = player.attr("height"), position = player.css("position"), n.css({
      display: "table-cell",
      "vertical-align": "middle",
      "text-align": "center"
    }), img.attr("src", "//livestatic.videocc.net/v_62/assets/wimages/icon.png"), img.css({
      width: "80px",
      height: "80px",
      display: "inline",
      "padding-bottom": "10px"
    }), span.css({
      display: "block",
      paddding: "10px 6px 2px 6px",
      "font-family": '"Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif',
      color: "#fff"
    }), span.html(decodeURIComponent(o.liveLanguageParser.vidObjError)), div.css({
      width: width,
      height: height,
      backgroundColor: "black",
      position: position,
      display: "table"
    }), player.remove(), n.append(img, span), div.append(n), e.append(div)
  }
}, polyvLiveControls = function (M) {
  M.createControl = function (e) {
    M.isLiveControl = !0;
    var n = this, i = {
      playbtn: function () {
      }, fullscreen: function () {
      }, barronbtn: function () {
      }
    };
    "object" == typeof option && M.extend(i, e);
    var t = "//livestatic.videocc.net/v_62/assets/wimages/", r = n.control = M("<div />").css({
        width: "100%",
        height: "45px",
        position: "absolute",
        bottom: "0",
        left: "0",
        zIndex: "1001",
        fontSize: "12px",
        backgroundColor: "rgba(0,0,0,0.7)"
      }).addClass("plv_controls"), o = t + "danmu-open.png", a = t + "danmu-close.png",
      s = M.playBtn = M("<span />").addClass().css({
        width: "20px",
        backgroundImage: "url(" + t + "pptClientWatch_images/mobile/play.png)"
      }).attr("data-type", "play"), l = M("<span />").css({width: "90px", "margin-left": "15px", height: "100%"}),
      c = "弹幕";
    1 == n.language && (c = "Danmu", !0 === n.changeEnContent && (c = "comment"));
    var u = M("<span />").html(c).css({
      display: "inline-block",
      position: "absolute",
      "line-height": "45px",
      "vertical-align": "middle",
      color: "#ffffff",
      "text-align": "center"
    }), d = M("<span />").css({
      width: "60px",
      height: "100%",
      display: "inline-block",
      "margin-left": "16px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "63%",
      backgroundPosition: "center center"
    }).attr("data-type", "dan");
    "on" != n.isBarrage ? d.css("backgroundImage", "url(" + a + ")").addClass("isdan") : d.css("backgroundImage", "url(" + o + ")"), l.append(u, d);
    var p = M.cameraBtn = M("<span />").css({
        width: "45px",
        "float": "right",
        backgroundImage: "url(" + t + "/pptClientWatch_images/mobile/close-camera.png)",
        display: "none"
      }).attr("data-type", "camera").addClass("isCam"), h = M("<span />").css({
        width: "35px",
        "float": "right",
        backgroundImage: "url('switch.png')",
        display: "none"
      }).attr("data-type", "switch").addClass("isSwitch"), f = M("<span />").css({
        width: "60px",
        height: "100%",
        background: "url(" + t + "vr-grass-off.png)",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "float": "right",
        display: "inline-block"
      }).attr("data-type", "vrG").addClass("vr"), v = M("<span />").css({
        width: "28px",
        background: "url(" + t + "pptClientWatch_images/mobile/fullscreen.png)",
        "float": "right",
        marginRight: "10px"
      }).attr("data-type", "full"), m = M("<span />").css({
        width: "46px",
        lineHeight: "45px",
        verticalAlign: "middle",
        textAlign: "center",
        color: "white",
        "float": "right"
      }).attr("data-type", "hd"),
      g = M("<span />").css({width: "28px", background: "url(" + t + "refresh.png)", marginRight: "10px"});
    r.append(s, g, v, l, m, p), r.children("span").css({
      display: "inline-block",
      height: "100%",
      marginLeft: "10px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "60%",
      backgroundPosition: "center"
    }), 1 == n.language && d.css({"margin-left": "46px"});
    var y = "70px";
    1 === n.language && (y = "100px"), l.css({width: y, "margin-left": "10px", "float": "right"});
    var b = M('<div class="hdPanel" />').css({
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: 1002,
      backgroundColor: "rgba(0,0,0,0.7)"
    }), w = M('<div class="hdShow" />').css({width: "100%", height: "100%", color: "white"});
    b.append(w);
    var x, _, S = M('<div class="hdSelect" />').css({
      position: "absolute",
      width: "100%",
      height: "90px",
      top: "50%",
      "margin-top": "-45px"
    }), C = M('<div class="hdTips" />').css({width: "100%", height: "30px"});
    x = M("<span />").css({
      "float": "left",
      width: "35%",
      height: "100%",
      padding: "0 3% 0 15%",
      "box-sizing": "border-box"
    }).html("<hr size=1>");
    var T = "请选择清晰度";
    1 === n.language && (T = "Quality"), _ = M("<span />").css({
      "float": "left",
      width: "30%",
      height: "100%",
      "text-align": "center"
    }).html(T), C.append(x, _, x.clone().css({padding: "0 15% 0 3%"}));
    var k = M('<div class="hdObject" />').css({display: "flex", "justify-content": "space-around"});
    S.append(C, k);
    for (var A = n.mRateArr ? n.mRateArr : ["流畅", "高清", "超清"], E = [], P = 0; P < A.length; P++) span = M('<span class="hd' + P + '" />').css({
      marginTop: "10px",
      zIndex: 1,
      "box-sizing": "border-box"
    }), E[P] = M("<div />").css({
      padding: "3px 15px",
      border: "solid",
      "border-width": "2px",
      "border-radius": "18px",
      "max-width": "120px"
    }).html(A[P]).attr("data-type", P).bind("touchend", function (e) {
      var t = parseInt(M(e.target).attr("data-type"));
      n.exitHd(), n.highLightHd(t), n.j2s_changeMultirate(t)
    }), span.append(E[P]), k.prepend(span);
    var I = M("<div />").css({
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
      top: 0
    }).addClass("hdClose");
    w.append(S, I), M(".plwrap").append(b), n.useVr && 1 == n.useVr && (v.css({
      width: "29px",
      backgroundImage: "url(" + t + "full.png)"
    }), r.append(f)), "on" == n.banBarrageBtn && l.css("display", "none"), n.openDanMu || l.css("display", "none"), n.usePPT ? (p.css("display", "inline-block"), h.css("display", "inline-block")) : p.css("display", "none"), M(document).bind("controlready", function () {
      M(".plv_controls").remove(), M(".plwrap").append(r), s.bind("touchend", function (e) {
        s.hasClass("ispause") ? (s.css("backgroundImage", "url(" + t + "pptClientWatch_images/mobile/play.png)"), n.j2s_pauseVideo()) : (s.css("backgroundImage", "url(" + t + "pptClientWatch_images/mobile/pause.png)"), n.j2s_resumeVideo(), M("video")[0] && ("" == M("video")[0].poster || -1 < M("video")[0].poster.indexOf(M.poster_png)) && (M("video")[0].poster = M.poster_img)), s.toggleClass("ispause"), n.startStats(), i.playbtn()
      }), d.bind("touchend", function (e) {
        d.hasClass("isdan") ? n.j2s_showBarrage() : n.j2s_hideBarrage(), d.toggleClass("isdan"), i.barronbtn()
      }), p.bind("touchend", function (e) {
        p.hasClass("isCam") ? (p.css("backgroundImage", "url(" + t + "/pptClientWatch_images/mobile/open-camera.png)"), M.pptHandler && M.pptHandler.displayCamera(!1), n.isCamClose = !0) : (p.css("backgroundImage", "url(" + t + "/pptClientWatch_images/mobile/close-camera.png)"), M.pptHandler && !n.isSocketCamClose && M.pptHandler.displayCamera(!0), n.isCamClose = !1), p.toggleClass("isCam")
      }), h.bind("touchend", function (e) {
        d.hasClass("isdan") ? (d.css("backgroundImage", "url(" + o + ")"), n.j2s_showBarrage()) : (d.css("backgroundImage", "url(" + a + ")"), n.j2s_hideBarrage()), d.toggleClass("isdan"), i.barronbtn()
      }), f.bind("touchend", function (e) {
        n.vrInit && (f.hasClass("isVr") ? (f.css("backgroundImage", "url(" + t + "vr-grass-off.png)"), n.changeVrMode(1)) : (f.css("backgroundImage", "url(" + t + "vr-grass-on.png)"), n.changeVrMode(2)), f.toggleClass("isVr"), s.hasClass("ispause") || n.j2s_resumeVideo())
      }), v.bind("touchend", function (e) {
        var t = v.hasClass("isFull");
        n.useVr ? (M.controlHole.fullSwitch(v, "live"), M.controlHole.fireVrFullPage(t)) : (n.x5FullPage && M.isSameplayerMode(n) && n.x5Fulling && (M.controlHole.fullSwitch(v, "live"), M.controlHole.fireFullPage(t, n)), M.launchFullScreen(n.video), i.fullscreen())
      }), m.bind("touchend", function (e) {
        n.enterHd()
      }), I.bind("touchend", function (e) {
        n.exitHd()
      }), g.bind("touchend", function (e) {
        M.urlProtectedResume()
      }), M.isIOS() && !M.isWeiXin() && -1 < M.coverImage.indexOf("http") || n.fadeOutControls()
    }), n.changePlayStat = function (e) {
      1 == e ? s.css("backgroundImage", "url(" + t + "pptClientWatch_images/mobile/pause.png)").addClass("ispause") : (s.css("backgroundImage", "url(" + t + "pptClientWatch_images/mobile/play.png)"), s.hasClass("ispause") && s.removeClass("ispause"))
    }, n.changeBarrageStatus = function (e) {
      1 == e ? (d.css("display", "inline-block"), n.isShowBarrage ? M("#CmContainer").css("opacity", "1") : M("#CmContainer").css("opacity", "0")) : (d.css("display", "none"), M("#CmContainer").css("opacity", "0"))
    }, n.setBarrageBtnStatus = function (e) {
      e ? (d.addClass("isdan"), d.css("backgroundImage", "url(" + o + ")")) : (d.removeClass("isdan"), d.css("backgroundImage", "url(" + a + ")"))
    }, n.changeCameraStat = function (e) {
      1 == e ? p.css("backgroundImage", "url('close-camera.png')").addClass("isCam") : p.css("backgroundImage", "url('open-camera.png')")
    }, n.enterHd = function () {
      n.control.fadeOut(600), b.fadeIn(200)
    }, n.exitHd = function () {
      n.control.fadeIn(600), n.fadeOutControls(), b.fadeOut(150)
    }, n.highLightHd = function (e) {
      if (j != e) {
        m.html(A[e]);
        for (var t = 0; t < E.length; t++) t == e ? E[t].css({
          color: "rgb(20, 162, 244)",
          "border-width": "2px"
        }) : E[t].css({color: "rgb(255, 255, 255)", "border-width": 0});
        j = e
      }
    }, n.showHd = function (e) {
      e ? m.is(":hidden") && m.css("display", "block") : (m.is(":hidden") || m.css("display", "none"), b.is("hidden") || b.css("display", "none"))
    }, m.css("display", "none"), b.css("display", "none");
    var j = -1;
    if (n.isShowHd && m.css("display", "block"), n.highLightHd(n.multirate), n.changeFullBtn = function () {
      M.controlHole.fullSwitch(v, "live", !0)
    }, M.isIOS()) {
      var B = M("<style type='text/css'>video::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}video::--webkit-media-controls-play-button{display: none!important;-webkit-appearance: none;}video::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none}</style>");
      M("head").append(B)
    }
  }, M.createVodControl = function (e) {
    M.isLiveControl = !1;
    var n = this, i = {
      playbtn: function () {
      }, fullscreen: function () {
      }, barronbtn: function () {
      }
    };
    "object" == typeof option && M.extend(i, e);
    var t = "//livestatic.videocc.net/v_62/assets/wimages/pptClientWatch_images/mobile/",
      r = n.control = M("<div />").css({
        width: "100%",
        height: "54px",
        position: "absolute",
        bottom: "0",
        left: "0",
        zIndex: "1001",
        backgroundColor: "rgba(0,0,0,0.7)",
        fontSize: "12px",
        fontFamily: '"Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", "FontAwesome", sans-serif'
      }).addClass("plv_controls"), o = M("<div />").css({height: "2px", backgroundColor: "#fff"}),
      a = M.progressLoad = M("<div />").css({backgroundColor: "#14a2f4", height: "2px", width: 0}),
      s = M.progressDot = M("<i />").css({
        position: "absolute",
        top: "-7px",
        width: "18px",
        height: "18px",
        "border-radius": "50%",
        "background-color": "#fff"
      });
    o.append(a, s);
    var l = M.playBtn = M("<span />").css({
      width: "20px",
      marginRight: "10px",
      backgroundImage: "url(" + t + "play.png)"
    }).attr("data-type", "play"), c = M.pauseBtn = M("<span />").css({
      width: "20px",
      marginRight: "10px",
      left: 0,
      backgroundImage: "url(" + t + "pause.png)"
    });
    n.showTimeblock = 1, M.showTimeblock = n.showTimeblock;
    var u = M("<span />").css({
        position: "absolute",
        color: "#fff",
        display: "inline-block",
        letterSpacing: "1px",
        lineHeight: "50px",
        fontSize: "14px",
        "box-sizing": "border-box"
      }).attr("data-type", "time"), d = M.timeCurrent = M("<span />").html(M.timeFormat(0)), p = M("<span />").html("/"),
      h = M("<span />").html(M.timeFormat(0));
    u.append(d, p, h);
    var f = M("<span />").css({
      width: "30px",
      background: "url(" + t + "fullscreen.png)",
      marginRight: "10px",
      "float": "right",
      right: 0
    }).attr("data-type", "full"), v = M("<span />").css({
      width: "30px",
      background: "url(" + t + "normalscreen.png)",
      "float": "right",
      marginRight: "10px",
      right: 0
    }), m = t + "danmu-open.png", g = t + "danmu-close.png";
    if (1 == n.language) {
      var y = "//livestatic.videocc.net/v_62/assets/wimages/";
      m = y + "danmu-open.png", g = y + "danmu-close.png"
    }
    if (1 == n.language) {
      var b = "Danmu";
      !0 === n.changeEnContent && (b = "comment");
      var w = M("<span />").html(b).css({
        display: "inline-block",
        "line-height": "50px",
        "vertical-align": "middle",
        "float": "right",
        color: "#ffffff",
        "text-align": "center"
      })
    }
    var x = M("<span />").css({
        width: "54px",
        backgroundImage: "url(" + m + ")",
        "float": "right"
      }).attr("data-type", "dan"),
      _ = M("<span />").css({width: "54px", backgroundImage: "url(" + g + ")", "float": "right"}),
      S = M("<div />").css({
        "float": "right",
        lineHeight: "50px",
        verticalAlign: "middle",
        color: "#fff",
        fontSize: "14px",
        paddingRight: "10px"
      }).attr("data-type", "rate").html(["倍速", "Rate"][n.language || 0]), C = M("<span />").css({
        width: "35px",
        backgroundImage: "url(" + t + "close-cam.png)",
        "float": "right",
        marginRight: "10px",
        opacity: .8
      }).attr("data-type", "camera"), T = M("<span />").css({
        width: "35px",
        backgroundImage: "url(" + t + "open-cam.png)",
        "float": "right",
        marginRight: "10px",
        opacity: .8
      }), k = M("<span />").css({
        width: "60px",
        height: "50px",
        background: "url(" + t + "vr-grass-on.png)",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "float": "right",
        display: "none"
      }).attr("data-type", "vrG").addClass("vr"), A = M("<span />").css({
        width: "60px",
        height: "50px",
        background: "url(" + t + "vr-grass-off.png)",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "float": "right",
        display: "inline-block"
      });
    1 == n.language ? r.append(o, l, c, u, f, v, x, _, w, S, C, T) : r.append(o, l, c, u, f, v, x, _, S, C, T), M.isAndroid() && S.remove(), r.children("span").css({
      display: "inline-block",
      height: "50px",
      marginLeft: "10px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "60%",
      backgroundPosition: "center"
    }), c.css("display", "none"), v.css("display", "none"), x.css({marginLeft: 0}), _.css({marginLeft: 0}), "on" != n.isBarrage ? x.css("display", "none") : _.css("display", "none"), "on" == n.banBarrageBtn && (x.css("display", "none"), _.css("display", "none"), 1 == n.language && w.css("display", "none")), n.openDanMu || (x.css("display", "none"), _.css("display", "none"), 1 == n.language && w.css("display", "none")), n.usePPT || C.css("display", "none"), T.css("display", "none"), n.useVr && 1 == n.useVr && (f.css({
      width: "37px",
      backgroundImage: "url(" + t + "full.png)"
    }), r.append(k, A)), M(document).bind("controlready", function () {
      M(".plv_controls").remove(), M(".plwrap").append(r), l.bind("touchend", function (e) {
        l.css("display", "none"), c.css("display", "inline-block"), n.j2s_resumeVideo(), n.startStats()
      }), c.bind("touchend", function (e) {
        l.css("display", "inline-block"), c.css("display", "none"), n.j2s_pauseVideo(), M("video")[0] && ("" == M("video")[0].poster || -1 < M("video")[0].poster.indexOf(M.poster_png)) && (M("video")[0].poster = M.poster_img)
      }), x.bind("touchend", function (e) {
        n.j2s_hideBarrage()
      }), _.bind("touchend", function (e) {
        n.j2s_showBarrage()
      }), S.bind("touchend", function (e) {
        n.ratePanel && n.ratePanel.toggleShow()
      }), C.bind("touchend", function (e) {
        C.css("display", "none"), T.css("display", "inline-block"), M.pptHandler && M.pptHandler.displayCamera(!1), n.isCamClose = !0
      }), T.bind("touchend", function (e) {
        C.css("display", "inline-block"), T.css("display", "none"), M.pptHandler && !n.isSocketCamClose && M.pptHandler.displayCamera(!0), n.isCamClose = !1
      }), k.bind("touchend", function (e) {
        n.vrInit && (A.css("display", "inline-block"), k.css("display", "none"), n.changeVrMode(1), n.j2s_resumeVideo())
      }), A.bind("touchend", function (e) {
        n.vrInit && (A.css("display", "none"), k.css("display", "inline-block"), n.changeVrMode(2), n.j2s_resumeVideo())
      }), f.bind("touchend", function (e) {
        var t = f.hasClass("isFull");
        n.useVr ? (M.controlHole.fullSwitch(f, "vod"), M.controlHole.fireVrFullPage(t)) : (n.x5FullPage && M.isSameplayerMode(n) && n.x5Fulling && (M.controlHole.fullSwitch(f, "vod"), M.controlHole.fireFullPage(t, n)), M.launchFullScreen(n.video), i.fullscreen())
      }), n.ratePanel = new M.Rate({wrap: S}), n.ratePanel.onHightLight = function (e) {
        n.changeRate && n.changeRate(e)
      };
      var e = {progress: o, progressDot: s, progressLoad: a};
      M.controlHole.addDragEvent(s, e, n, !0), M.controlHole.addDragEvent(M(".plv_mask"), e, n)
    }), n.changeSkinType = function (e) {
      e ? (u.css("display", "none"), o.css("display", "none")) : (u.css("display", "inline-block"), o.css("display", "block"))
    }, n.usePPT && (!n.liveVodsrc && "live" == n.apiStatus || M.flow_status == M.FLOW_STATUS.WAITING) && n.changeSkinType(!0), M.flow_status == M.FLOW_STATUS.WAITING && (u.css("display", "none"), o.css("display", "none"));
    var E, P;
    n.changePlayStat = function (e) {
      1 == e ? (l.css("display", "none"), c.css("display", "inline-block")) : (l.css("display", "inline-block"), c.css("display", "none"))
    };
    if (n.changeBarrageStatus = function (e) {
      1 == e ? (isBarrage = !1, n.isShowBarrage ? (x.css("display", "inline-block"), _("display", "none"), M("#CmContainer").css("opacity", "1")) : (x.css("display", "none"), _("display", "inline-block"), M("#CmContainer").css("opacity", "0"))) : (isBarrage = !0, x.css("display", "none"), _.css("display", "none"), M("#CmContainer").css("opacity", "0"))
    }, n.setBarrageBtnStatus = function (e) {
      e ? (x.css("display", "inline-block"), _.css("display", "none")) : (x.css("display", "none"), _.css("display", "inline-block"))
    }, n.updateCurrentTimeShow = function (e) {
      d.html(M.timeFormat(e));
      var t = e / n.duration * 100;
      a.css("width", t + "%"), E = e / n.duration, (P = E * o.width()) < 0 && (P = 0), P > o.width() - 20 && (P = o.width() - 20), s.css({left: P})
    }, n.updateTotalTimeShow = function (e) {
      3600 < e && (M.showTimeblock = n.showTimeblock = 2), d.html(M.timeFormat(0)), h.html(M.timeFormat(e))
    }, n.changeFullBtn = function () {
      M.controlHole.fullSwitch(f, "vod", !0)
    }, M.isIOS()) {
      var I = M("<style type='text/css'>video::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}video::--webkit-media-controls-play-button{display: none!important;-webkit-appearance: none;}video::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none}</style>");
      M("head").append(I)
    }
  }, M.controlHole = {
    url: "//livestatic.videocc.net/assets/wimages/",
    vodUrl: "//livestatic.videocc.net/assets/wimages/pptClientWatch_images/mobile/",
    fullImg: "fullscreen.png",
    normalImg: "normalscreen.png",
    vodFullImg: "full.png",
    vodNormalImg: "normal.png",
    fullSwitch: function (e, t, n) {
      var i = this.vodUrl + this.fullImg, r = this.vodUrl + this.normalImg, o = this.vodUrl + this.vodFullImg,
        a = this.vodUrl + this.vodNormalImg, s = "live" === t ? i : o, l = "live" === t ? r : a;
      e.hasClass("isFull") || n ? (this.changeBg(e, s), e.removeClass("isFull")) : (this.changeBg(e, l), e.addClass("isFull"))
    },
    fireFullPage: function (e, t) {
      e ? (M.wxSamePlayerPortrait(t), "function" == typeof normalPage && normalPage()) : (M.wxSamePlayerLandscape(t), "function" == typeof fullPage && fullPage())
    },
    fireVrFullPage: function (e) {
      vrFuc && (vrFuc.isFullScreen = !e), M.isIOS() && (window.parent.launchFullScreen && window.parent.launchFullScreen(!e), vrFuc && vrFuc.windowResize()), e ? window.parent.document && M.exitFullScreen(window.parent.document) : window.parent.document.getElementById("iframeVr") && M.launchFullScreen(window.parent.document.getElementById("iframeVr"))
    },
    addDragEvent: function (e, i, r, o) {
      var a, s, l, c;
      e.on("touchstart", function (e) {
        e.stopPropagation(), e.preventDefault(), a = e.originalEvent.targetTouches[0].pageX
      }), e.on("touchmove", function (e) {
        e.stopPropagation(), e.preventDefault();
        var t = i.progress.width() - 20;
        if (s = e.originalEvent.targetTouches[0].pageX, o) 0 <= s && s <= t && (i.progressDot.offset({left: s}), c = s / i.progress.width(), i.progressLoad.css("width", 100 * c + "%"), r.j2s_seekVideo(c * r.duration)); else {
          var n = i.progressDot.offset().left;
          l = (s - a) / 20, 0 < n && (n = t < (n = (n += l) < 0 ? 0 : n) ? t : n, i.progressDot.offset({left: n}), c = n / i.progress.width(), i.progressLoad.css("width", 100 * c + "%"), r.j2s_seekVideo(c * r.duration))
        }
      }), e.on("touchend", function (e) {
        e.stopPropagation(), e.preventDefault()
      })
    },
    removeDragEvent: function () {
    },
    changeBg: function (e, t) {
      e.css("backgroundImage", "url(" + t + ")")
    }
  }
}, polyvLiveModule = function (r) {
  r.Rate = function (e) {
    this.opts = e || {}, this.rateIndex = 0, this.isShowing = !1, this.init(e)
  }, r.Rate.prototype = {
    init: function () {
      this.$rate = null, this.$rateBg = null, this.$rateChoice = null, this.createDom(), this.bindEvent()
    }, createDom: function () {
      this.opts.speedArr || (this.opts.speedArr = [1, 1.25, 1.5, 2]), this.opts.speedArr.reverse(), this.rateIndex = this.opts.speedArr.length - 1, this.opts.wrap.append(r(this.getHtml())), this.$rate = r(".plv-liveplayer-rate"), this.$rateBg = r(".plv-liveplayer-rate__bg"), this.$rateChoice = r(".plv-liveplayer-rate__choice"), this.rateChoiceHeight = 28;
      var e = this.opts.speedArr.length * this.rateChoiceHeight * -1 - 10;
      this.$rate.css({
        position: "absolute",
        display: "none",
        width: "70px",
        height: "100%",
        top: e + "px",
        transform: "translateX(-30%)",
        zIndex: 4
      }), this.$rateBg.css({
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: .8
      }), this.$rateChoice.css({
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        color: "#fff",
        zIndex: 1,
        textAlign: "center"
      });
      for (var t = 0; t < this.opts.speedArr.length; t++) {
        var n = r("<div />");
        n.attr({
          "data-index": t,
          "data-rate": this.opts.speedArr[t]
        }).html(this.opts.speedArr[t] + " x").css({
          padding: "0 15px",
          lineHeight: this.rateChoiceHeight + "px",
          backgroundColor: "rgba(0, 0, 0, 0.85)"
        }), this.$rateChoice.append(n), t === this.rateIndex && this.hightLight(this.rateIndex)
      }
    }, bindEvent: function () {
      var i = this;
      this.$rateChoice.on("touchstart", function (e) {
        var t = r(e.target).data("rate"), n = r(e.target).data("index");
        t && n !== i.rateIndex && (i.rateIndex = n, i.hightLight(n), i.onHightLight(t))
      })
    }, hightLight: function (e) {
      this.$rateChoice.children().css("color", "#fff"), this.$rateChoice.children("div:eq(" + e + ")").css("color", "#14a2f4")
    }, onHightLight: function (e) {
    }, getHtml: function () {
      return '<div class="plv-liveplayer-rate"><div class="plv-liveplayer-rate__choice"></div><div class="plv-liveplayer-rate__bg"></div></div>'
    }, toggleShow: function () {
      this.isShowing ? this.$rate.fadeOut(300) : this.$rate.fadeIn(300), this.isShowing = !this.isShowing
    }, get show() {
      return this.isShowing
    }
  }, r.Rate.constructor = r.rate
};
if (window.polyvObject_init) polyvplayer_object = jQuery.noConflict(!0), polyvObject.fn.livePlayer = function (e) {
  polyvplayer_object(this).livePlayer(e)
}, polyvObject.fn.webCamPlayer = function (e) {
  polyvplayer_object(this).webCamPlayer(e)
}; else {
  var polyvObject = jQuery.noConflict(!0);
  window.polyvObject_init = !0
}
!function (ae) {
  var e, t, se = 0, le = null, ce = null, s = null;
  ae.liveVersion = "1.16.0", ae.liveBuildMetaData = "+20190320", "function" == typeof window.polyvLiveDebug && (ae.debug = window.polyvLiveDebug()), polyvLiveConfig(ae), polyvLiveBrowser(ae), polyvLiveTool(ae), polyvLiveModule(ae), polyvLiveControls(ae), ae.isWeiXin() && document.addEventListener("WeixinJSBridgeReady", function () {
    ae.weixinReady = !0, ae.video = document.createElement("video"), ae.video.play(), ae.audio = document.createElement("audio"), ae.audio.play(), ae.makeDiv && ae.makeDiv()
  }, !1), ae.createLiveH5Player = function (e, t, n) {
    return e.children().remove(), t.wrap = e[0], polyvLivePlayer(t)
  }, e = function (e) {
    if (window && window.location && -1 < window.location.search.indexOf("betaLive=1") && (e.beta_live = !0), polyvLiveConfig(ae, e), ae.hasMakeDiv = !1, ae.h5LiveScript = "//player.polyv.net/livescript/liveplayer.min.js", e.h5Beta && (ae.h5LiveScript = "//player.polyv.net/html5LiveJavascript/" + e.h5Beta + "/liveplayer.min.js"), e.forceH5 && ae.isSupportMse() && !ae.isSupportedHTMLDevice() && !ae.isIE() && !ae.isEdge()) {
      var t = this, n = {};
      return window.polyvLivePlayer ? ae.createLiveH5Player(t, e) : (ae.getScript(ae.h5LiveScript, function () {
        ae.extend(n, ae.createLiveH5Player(t, e))
      }), n)
    }
    if (!e.useVrMode || !(ae.isAndroid() && ae.isChrome() || ae.isIOS())) return e.useVrMode && (e.useVr = !0), ae.domain = document.domain, s(this, e);
    var i = document.createElement("div"), r = ae(i);
    r.addClass("plwrap"), r.css({width: e.width, height: e.height, position: "relative"}), this.empty(), this.append(r);
    ae(".plwrap").width(), ae(".plwrap").height();
    var o = document.createElement("iframe");
    o.name = o.id = "iframeVr";
    var a = "settings=" + JSON.stringify(e);
    o.src = "//vrlive.polyv.cn/livescript/vr.html?" + encodeURIComponent(a), e.beta && (o.src = "//vrlive.polyv.cn/liveJavascript/" + ae.liveBuildMetaData.split("+")[1] + "/vr.html?" + encodeURIComponent(a)), e.vrTest && (o.src = "//play1.polyv.net/player2/test/nong/vrdemo.html?" + encodeURIComponent(a)), e.vrTestLocal && (o.src = "vrdemo.html?" + encodeURIComponent(a)), ae(o).css({
      position: "absolute",
      width: "100%",
      height: "100%",
      border: "none",
      left: 0,
      top: 0,
      maxWidth: "100vw"
    }).attr({scrolling: "no", allowfullscreen: "", mozallowfullscreen: "", webkitallowfullscreen: ""}), r.append(ae(o))
  }, s = function (c, i) {
    if (self != top && (window.onlyMedia = !0), !i.vid && "function" == typeof provideLiveInfo) {
      var e = provideLiveInfo();
      i.uid = ae.decode(e).split("/")[0], i.vid = ae.decode(e).split("/")[1]
    }
    var p = "http://";
    "https:" == window.location.protocol && (p = "https://");
    var h = "//livestatic.videocc.net/v_62/assets/";
    setCookie = function (e, t, n) {
      var i = new Date;
      i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
      var r = "expires=" + i.toGMTString();
      document.cookie = e + "=" + t + "; " + r
    }, ae.renderLiveInstallGif = function (e) {
      var t = i.language || 0,
        n = ae('<div class="plv-liveplayer-flInstall">    <div class="plv-liveplayer-flInstall_wrap">        <img class="plv-liveplayer-flInstall__icon" src="//livestatic.videocc.net/assets/wimages/pc_images/icon-warning.png"></img>        <p class="plv-liveplayer-flInstall__tips">' + ["未安装Flash插件，暂时无法观看!", "Flash Player Not Found"][t] + '</p>        <a href="//www.adobe.com/go/getflash/" class="plv-liveplayer-flInstall__btn" target="_blank">' + ["下载Flash插件", "Download"][t] + "</a>    </div></div>");
      e.append(n), ae(".plv-liveplayer-flInstall").css({
        display: "table",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        color: "#fff"
      }), ae(".plv-liveplayer-flInstall_wrap").css({
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        cursor: "pointer",
        maxWidth: "200px",
        maxHeight: "120px"
      }), ae(".plv-liveplayer-flInstall__icon").css({maxWidth: "120px"}), ae(".plv-liveplayer-flInstall__btn").css({
        display: "inline-block",
        width: "160px",
        height: "44px",
        lineHeight: "44px",
        borderRadius: "22px",
        cursor: "pointer",
        backgroundColor: "#55b559",
        textDecoration: "none",
        whiteSpace: "nowrap",
        marginTop: "10px",
        color: "#fff"
      })
    }, ae.renderLiveFlash = function (e, t, n) {
      ae.isSupportedHTMLDevice();
      var i = n.vid;
      "webcam" == t ? (n.swf_link = p + "player.polyv.net/live/webcamera.swf", i = n.vid + "camera") : n.swf_link = p + "player.polyv.net/live/player.swf", n.flashvars || (n.flashvars = {}), n.flashvars.vid = n.vid, n.flashvars.uid = n.uid, n.flashvars.useFastDns = "off", n.vodVid && 0 < n.vodVid.length && (n.flashvars.vodVid = n.vodVid), 1 == n.vod && (n.flashvars.vodsrc = n.vodsrc), "off" == n.isBarrage && (n.flashvars.showBarrage = "off"), "on" == n.banBarrageBtn && (n.flashvars.banBarrageBtn = "on"), n.useVr && 1 == n.useVr && (n.flashvars.vrMode = "on"), n.vrWidth && (n.flashvars.vrWidth = n.vrWidth), n.vrHeight && (n.flashvars.vrHeight = n.vrHeight), n.session_id && (n.flashvars.session_id = n.session_id), n.code && (n.flashvars.code = n.code), n.usePptMode && (n.pptmode = "on", n.flashvars.pptmode = n.pptmode), !0 === n.ban_ad && (n.ban_ad = "on", n.flashvars.ban_ad = n.ban_ad), !0 === n.ban_ui && (n.ban_ui = "on", n.flashvars.ban_ui = n.ban_ui), !0 === n.banpassword && (n.banpassword = "on", n.flashvars.banpassword = n.banpassword), n.isAutoChange && (n.flashvars.isAutoChange = "on"), n.pptSessionId && (n.flashvars.pptSessionId = n.pptSessionId), n.beta_live && (n.flashvars.beta_live = "on"), n.beta_json && (n.flashvars.beta_json = "on", n.flashvars.beta_live = "on"), n.sub_vid && n.sub_streamName && (n.flashvars.name = n.sub_streamName), "undefined" != typeof n.df && (n.flashvars.df = n.df), n.scaleImage && (n.flashvars.scaleImage = !0), 1 == n.language && (n.flashvars.language = 1), !0 === n.changeEnContent && (n.flashvars.changeEnContent = "on"), n.stopApiRequest && (n.flashvars.stopApiRequest = n.stopApiRequest), n.banMultirate && (n.flashvars.banMultirate = n.banMultirate);
      var r = "";
      for (var o in n.flashvars) r = r + o + "=" + n.flashvars[o] + "&";
      if (ae.isIE()) {
        n.flashParams.movie = n.swf_link;
        var a = '<param name="wmode" value="Transparent" />';
        for (var s in a += '<param name="flashvars" value="' + r + '" />', n.flashParams) a += '<param name="' + s + '" value="' + n.flashParams[s] + '" />';
        var l = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + i + '" width="' + n.width + '" height="' + n.height + '" type="application/x-shockwave-flash" class="polyvFlashObject">' + a + "</object>";
        e.html(l)
      } else {
        var c, u = document.createElement("object");
        for (var d in u.type = "application/x-shockwave-flash", u.data = n.swf_link, u.id = i, u.width = n.width, u.height = n.height, n.flashParams.wmode = "transparent", u.className = "polyvFlashObject", n.flashParams.flashvars = r, n.flashParams) (c = document.createElement("param")).name = d, c.value = n.flashParams[d], u.appendChild(c);
        e.html(u)
      }
      ae.checkFlashObject(e, n)
    }, ae.addParamPlus = function (e) {
      for (var t in e) "param1" != t && "param2" != t && "param3" != t && "param4" != t && "param5" != t || (ae.paramPlusJson[t] = e[t])
    }, ae.paramPlusJson = {param3: "live"}, ae.addParamPlus(i);
    var a, f = {
      flashParams: {
        allowScriptAccess: "always",
        allowFullScreen: "true",
        quality: "high",
        bgcolor: "#ffffff",
        allowFullScreen: "true",
        wmode: ""
      },
      playerWidth: "1.0",
      allowfullscreen: "true",
      domain: "player.polyv.net",
      allowscriptaccess: "always",
      wmode: "transparent",
      loading_bg_img: "",
      flashvars: {useFastDns: "off"},
      watch_start_time: "0",
      autoplay: !0,
      is_auto_replay: "off",
      width: 600,
      height: 480,
      hasControl: !1,
      openDanMu: !1,
      channelType: "json",
      j2s_getCurrentTime: function () {
        return 0
      },
      j2s_getDuration: function () {
        return 0
      },
      j2s_resumeVideo: function () {
      },
      j2s_pauseVideo: function () {
      },
      j2s_stopVideo: function () {
      },
      j2s_seekVideo: function () {
      },
      destroy: function () {
        f.checkapiendtimer && (clearInterval(f.checkapiendtimer), f.checkapiendtimer = null), f.statsInterval && (clearInterval(f.statsInterval), f.statsInterval = null), f.checkEndInterval && (clearInterval(f.checkEndInterval), f.checkEndInterval = null), c.children().remove()
      },
      videoClass: "plvideo",
      allowFadeControl: !0,
      useCover: !0,
      isReplay: !1,
      isCamClose: !1,
      apiEndTime: 0,
      apiEndTime: 0,
      statTime: 0
    };
    i && ae.extend(f, i);
    ae.checkLowerDevice();
    var t = ae.checkFlashSupport(), n = ae.checkHtmlSupport(), r = ae.determinePlayerType(f, t, n), o = f.uid,
      s = ae.vid = f.vid;
    if (f.httpHead = p, f.pd = 0, f.pid = ae.getPlayId(), f.loadJsonCompleteSt = ne(), f.loadJsonCompleteTime = -1, f.playToBufferFullSt = -1, f.playToBufferFullTime = -1, f.loadAdSt = -1, f.loadAdCompleteTime = -1, f.hasSendLoading = !1, f.subInfoArr = [], f.getSubStream = 0, f.code || (f.code = ""), (f.sub_vid || f.sub_scene) && (f.sub || (f.sub = !0)), f.sub) {
      var l = ae.isSupportedHTMLDevice() ? "touchstart" : "click";
      ae("body").on(l, "[data-stream]", function () {
        var e = ae(this).data("stream");
        f.sub_currentVid = ae(this).data("subid");
        for (var t = !1, n = 0; n < f.subInfoArr.length; n++) f.sub_currentVid == f.subInfoArr[n].subChannelId && (t = f.subInfoArr[n].isLive);
        f.currentSubName != e && t && (ae.switchStream(f.vid, e), f.currentSubName = e, G(f.sub_currentVid))
      }), f.subContainer = ae("<div/>").css({
        position: "relative",
        width: "100%",
        height: "100%",
        "overflow-x": "auto",
        padding: "3px 3px",
        "white-space": "nowrap",
        "-webkit-overflow-scrolling": "touch",
        "box-sizing": "border-box",
        "text-align": "center"
      }), ae(f.sub_scene).append(f.subContainer), f.sub_currentVid = f.vid, f.sub_vid && (f.sub_currentVid = f.sub_vid), window.s2j_onStartPlay = function () {
        f.sub && f.sub_vid && ae.switchStream(f.vid, f.sub_streamName)
      }, f.hasCheckStream || (f.hasCheckStream = !0, X(), setInterval(function () {
        X()
      }, 6e3))
    }
    if (window.s2j_onPptInit = function () {
      if (f.userInfo) {
        ae.getScript("//livestatic.videocc.net/v_62/assets/wjs/socketio.min.js", function () {
          ae.getScript("//livestatic.videocc.net/v_62/assets/wjs/pptHandle.min.js", function () {
            ae.pptHandler = new pptHandle(f, r, ae.getPlayer(f.vid)), ae.pptHandler.start()
          })
        })
      } else console.log("Less UserInfo")
    }, r != ae.playerType.NO_SUPPORT && r != ae.playerType.INSTALLER) {
      if (r == ae.playerType.FLASH) return !f.vodsrc || -1 == f.vodsrc.indexOf("http://") && -1 == f.vodsrc.indexOf("https://") || (f.vod = !0, ae.paramPlusJson.param3 = "vod"), s2j_callOnParamData = function () {
        return JSON.stringify(ae.paramPlusJson)
      }, ae.renderLiveFlash(c, "player", f), f.s2j_onPlayStart && (s2j_onPlayStart = f.s2j_onPlayStart), f.s2j_onPlayOver && (s2j_onPlayOver = f.s2j_onPlayOver), f.s2j_onVideoPlay && (s2j_onVideoPlay = f.s2j_onVideoPlay), f.s2j_onVideoPause && (s2j_onVideoPause = f.s2j_onVideoPause), f.s2j_onPlayerInitOver && (s2j_onPlayerInitOver = f.s2j_onPlayerInitOver), f.s2j_focusComment && (s2j_focusComment = f.s2j_focusComment), ae.getPlayer(f.vid);
      var u = p + "livejson.polyv.net/service/v3/restrict_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random()),
        d = p + "live.polyv.net/service/v3/restrict_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random()),
        v = p + "player.polyv.net/service/lts3/enc_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random()),
        m = p + "live.polyv.net/service/lts3/enc_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random());
      f.beta_live && (f.channelType = "jsonp", u = p + "live.polyv.net/service/v3/restrict.json?uid=" + o + "&cid=" + s + "&pageDomain=" + document.domain + "&ran=" + Math.floor(9999999 * Math.random()), v = p + "live.polyv.net/service/v1/channel.json?vid=" + s + "&ran=" + Math.floor(9999999 * Math.random()));
      var g = 1, y = !1, b = null, w = 1;
      "16ad889b3d" == f.uid ? k() : S(), ae.getAjaxPromise = function (e) {
        return new Promise(function (t, n) {
          ae.ajax({
            url: e.url, type: "GET", data: e.data || "", dataType: e.dataType || "", success: function (e) {
              t(e)
            }, error: function (e) {
              n(e)
            }
          })
        })
      }, ae.urlProtectedResume = function (e) {
        var n = "";
        if (f.useTimeStamp || "ali" === f.cdnType) {
          f.video.play();
          var t = p + "player.polyv.net/service/lts3/enc_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random());
          f.beta_live && (t = p + "live.polyv.net/service/v1/channel.json?vid=" + s + "&ran=" + Math.floor(9999999 * Math.random())), ae.getAjaxPromise({
            url: t,
            dataType: f.channelType
          }).then(function (e) {
            var t = "";
            (t = f.beta_live ? e : A(e)).multirateModel && t.multirateModel.definitions && t.multirateModel.definitions.reverse(), n = ae.arrangeSrc(f, n, t), f.video.src = n, f.video.play()
          })
        } else n = ae.arrangeSrc(f, n), f.video.src = n, f.video.play()
      }, ae.urlSafeBase = function (e) {
        return PovBase64.encodeURI(e)
      }, ae.urlSafeBase("");
      var x = {
        passworded: function () {
          ae.isIOS() && ae.isWeiXin() && !window.onlyMedia ? ae.weixinReady ? Y(c) : (Y(c), ae.makeDiv = function () {
            Y(c)
          }) : Y(c)
        }, makeH5: function () {
          var e;
          !function () {
            f.beta_live && (ae.imgConfig.audioModeBtn = "https://play1.polyv.net/player2/test/nong/liveplayer/wimages/audio-mode-btn.png");
            if (!0 === f.useAudioBtn) {
              var e = f.audioBtn = ae('<img class="audio-mode-btn" src="' + ae.imgConfig.audioModeBtn + '">');
              e.css({
                position: "absolute",
                width: "32px",
                height: "32px",
                right: "10px",
                top: "50%",
                marginTop: "-36px",
                "z-index": 4
              }), e.on("click", function () {
                "function" == typeof s2j_onAudioBtnClick && s2j_onAudioBtnClick()
              }), ae(".plwrap").append(e)
            }
            f.hideAudioModeBtn = function (e) {
              f.audioBtn && (e ? f.audioBtn.hide() : f.audioBtn.show())
            }
          }(), e = c, ae.flow_status = ae.FLOW_STATUS.PLAYING, ae.hasMakeH5Player = !0, e.each(function () {
            ae(this);
            var t = f;
            f.first_image, 0 < f.loading_bg_img.length && f.loading_bg_img, f.outdate || (function () {
              var a;
              try {
                var e = ae("<div />").css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  "z-index": 2
                }).attr("id", "CmContainer");
                ae(".plwrap").append(e), f.vod && f.useAudio && (f.allowFadeControl = !1), f.openDanMu && (ae.openDanMu = !0, null == a && (f.isBarrage || (f.isBarrage = "on"), f.banBarrageBtn || (f.banBarrageBtn = "off"), "on" == f.isBarrage && "on" != f.banBarrageBtn || e.css("opacity", "0"), (a = new CommentManager(e)).startTimer()))
              } catch (t) {
              }
              f.j2s_addBarrageMessage = function (e) {
                if (a) {
                  var t = ae.parseJSON(e);
                  for (var n in t) {
                    var i = t[n].msg.replace(/\[\[/g, '<div style="width:30px;height:30px;position:relative;top:5px;display:inline-block;"><img src="'),
                      r = i.replace(/\]\]/g, '"></div>'), o = {};
                    o.text = r, o.stime = 0, o.mode = 1, o.size = t[n].fontSize, o.color = t[n].fontColor, o.data = t[n].timestamp, a.send(o)
                  }
                }
              }, f.isShowBarrage = !0, f.j2s_hideBarrage = function () {
                a && (ae("#CmContainer").css("opacity", "0"), "function" == typeof f.setBarrageBtnStatus && f.setBarrageBtnStatus(!1), f.isShowBarrage = !1, "function" == typeof s2j_onBarrageStatusChange && s2j_onBarrageStatusChange(!1))
              }, f.j2s_showBarrage = function () {
                a && (ae("#CmContainer").css("opacity", "1"), "function" == typeof f.setBarrageBtnStatus && f.setBarrageBtnStatus(!0), f.isShowBarrage = !0, "function" == typeof s2j_onBarrageStatusChange && s2j_onBarrageStatusChange(!0))
              }, f.j2s_clearBarrageMessage = function () {
                a && ae("#CmContainer").empty()
              }
            }(), function () {
              if ((f.openDanMu || f.hasControl) && !f.useVr) {
                ae(".plv_mask").remove();
                var e, t, n = ae("<div />").css({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  "z-index": 3
                }).addClass("plv_mask");
                ae(".plwrap").append(n), (t = n).unbind("touchstart"), t.unbind("touchend"), (e = n).bind("touchend", function () {
                  f.allowFadeControl && (f.control && (f.control.is(":hidden") ? (f.control.fadeIn(500), f.upNetWorkTip && f.upNetWorkTip(!0)) : Z()), f.useAudioBtn && (f.audioBtn.is(":hidden") ? f.audioBtn.fadeIn(500) : f.audioBtn.fadeOut(500)), f.fadeOutControls())
                }), e.bind("touchstart", function (e) {
                  clearTimeout(f.controlsTimer)
                }), ae(".plv_mask_play").remove();
                var i = ae("<div />").css({
                  position: "absolute",
                  width: "70px",
                  height: "70px",
                  top: "50%",
                  left: "50%",
                  marginLeft: "-35px",
                  marginTop: "-35px",
                  "z-index": 4
                }).addClass("plv_mask_play");
                ae(".plwrap").append(i), i.on("touchend", function () {
                  f.j2s_resumeVideo(), f.startStats(), ae(".plv_mask_play").remove()
                })
              }
            }(), f.useVr ? ae.isAndroid() && (ae.isChrome() || ae.isWeiXin()) || ae.isIOS() && ae.isWeiXin() ? (f.vrTestLocal ? function e(t) {
              ae.getScript(f.scriptArr[f.scriptIndex], function () {
                f.scriptIndex++, f.scriptIndex == f.scriptArr.length ? re() : e(f.scriptIndex)
              }).fail(function () {
                oe()
              })
            }(f.scriptIndex) : ae.getScript(_, function () {
              re()
            }).fail(function () {
              oe()
            }), f.vrHideControl = !0, f.autoplay = !1, ae.isAndroid() && ae.isWeiXin() && window.addEventListener("resize", function () {
              window.innerWidth > window.innerHeight ? (ae.isPortrait = !1, window.launchFullScreen && window.launchFullScreen(!0)) : (ae.isPortrait = !0, window.launchFullScreen && window.launchFullScreen(!1)), "function" == typeof pageResize && pageResize()
            }, !1)) : ae.isAndroid() ? (f.vrtips = !0, f.useVr = !1, f.vrHideControl = !0, function () {
              var e = h + "wimages/", t = ae("<div />").css({
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 3,
                "text-align": "center",
                "background-color": "#f4f4f4",
                top: 0
              }), n = ae("<div />").addClass("vrContent");
              n.css({position: "relative", top: "50%", "margin-top": "-40px", "-webkit-transform": "translateY(-50%)"});
              var i = ae("<img>").attr("src", e + "tip-yellow.png").css({
                width: "32px",
                "vertical-align": "middle",
                margin: "-6px 8px 0 0"
              }), r = ae("<span />").html("VR视频建议在安卓Chrome浏览器下观看"), o = ae("<p />").css("margin", "20px 10px");
              o.append(i, r);
              var a = ae("<button />").css({
                width: "100px",
                height: "35px",
                border: "none",
                color: "#fff",
                "border-radius": "5px",
                "background-color": "#f4c600",
                "font-family": "微软雅黑",
                "font-size": "14px",
                position: "static"
              }).html("继续观看");
              n.append(o, a), t.append(n), t.appendTo(ae(".plwrap")), a.bind("touchend", function () {
                f.useVr = !1, H(f.div, f.video), t.remove(), f.control.css("display", "block"), f.fadeOutControls()
              })
            }()) : (f.useVr = !1, H(f.div, f.video)) : H(f.div, f.video)), 1 == f.hasControl && (f.liveVodSrc || f.isAutoChange && f.vod && "live" != f.apiStatus || f.usePPT ? ae.proxy(ae.createVodControl, f)() : ae.proxy(ae.createControl, f)()), ae(document).triggerHandler("controlready"), f.polyvObjectdiv.parent("." + t.videoClass), f.vrHideControl && f.control.css("display", "none"), "function" == typeof s2j_onInitOver && s2j_onInitOver(f.vid), f.s2j_onInitOver && f.s2j_onInitOver(f.vid)
          })
        }
      };
      f.apiStatus = "end", f.hasSendVideoError = !1, f.reloadVideoCount = 0;
      f.pauseTimeChecking = !1, f.pausedTimeStamp = -1, f.switchMMode = function (e) {
        if (e) if (f.useAudio && 1 == f.useAudio) {
          if ("audio" == e) return !1
        } else if ("video" == e) return !1;
        if (ae.flow_status != ae.FLOW_STATUS.PREAD) {
          f.switchingMode = !0;
          var t = {
            videosrc: f.video.src,
            auto: f.video.autoplay,
            post: f.video.poster,
            pre: f.video.preload,
            con: f.video.controls
          };
          return f.useAudio && 1 == f.useAudio ? (f.useAudio = !1, Q("video", ae("#audio"), t), 0 < !ae.coverImage.length && (f.video.poster = "")) : (f.useAudio = !0, Q("audio", ae(f.video), t)), f.control && (f.control.is(":hidden") && f.control.fadeIn(500), f.fadeOutControls()), !0
        }
        return !1
      }, f.hasSendAdPlay = !1, f.hasSendAdError = !1, f.startStats = function () {
        V() && !f.hasStartStats && (ie(), f.hasStartStats = !0)
      }, index = 0;
      var _ = h + "wjs/panoramic/panoramic.min.js";
      return f.vrHead && (_ = f.vrHead + "/assets/wjs/panoramic/panoramic.min.js"), f.panorjs && (_ = f.panorjs), f.scriptArr = ["panoramic/src/Three.js", "panoramic/src/OrbitControls.js", "panoramic/src/vrFun.js"], f.scriptIndex = 0, f.changeVrMode = function (e) {
        try {
          vrFuc.changeMode(e)
        } catch (t) {
        }
      }, f
    }

    function S() {
      T(), b = setTimeout(function () {
        y || (1 === g ? (g++, S()) : C())
      }, 5e3);
      var e = 1 === g ? u : d;
      ae.getJSON(e, function (e) {
        e.canWatch ? C(e) : (y = !0, T(), f.isSpecialUser = "Y" === e.isSpecialUser, N(e.errorCode))
      })
    }

    function C(e) {
      y = !0, T(), ae.urlSafeBase(""), e && e.authUrl && "" != e.authUrl ? (f.certurl = e.authUrl, P()) : k()
    }

    function T() {
      b && (clearTimeout(b), b = null)
    }

    function k() {
      ae.ajax({
        url: 1 === w ? v : m, dataType: f.channelType, success: function (e) {
          f.beta_live ? E(e) : E(A(e))
        }, error: function (e, t, n) {
          if (1 === w) w++, k(); else {
            N("LIVE-#011", decodeURIComponent(ae.liveLanguageParser.channelRefresh));
            var i = L("error");
            i.uri = v, i.status = e.status, i.errorcode = "load_cjson_failure", i.errormsg = "加载channel.json失败", F(i)
          }
        }
      })
    }

    function A(e) {
      if (200 <= e.code && e.code < 400) {
        var t = aesjs.utils.hex.toBytes(e.body),
          n = new aesjs.ModeOfOperation.cbc(ae.stringToBytes(ae.getString()), ae.stringToBytes("1111000011110010")).decrypt(t),
          i = aesjs.utils.utf8.fromBytes(n), r = PovBase64.decode(i);
        return JSON.parse(r)
      }
      return ""
    }

    function E(e) {
      if (ae.hasLiveChannel = !0, f.isYS = !1, f.moniter && e.m3u8Url && -1 < e.m3u8Url.indexOf("cnlive") && (f.isYS = !0, e.m3u8Url = e.m3u8Url.replace("cnlives", "monitor1"), e.m3u8Url = e.m3u8Url.replace("cnlive1", "monitor1"), e.m3u8Url = e.m3u8Url.replace("cnlives2", "monitor2"), e.m3u8Url = e.m3u8Url.replace("cnlive2", "monitor2")), e.channelRestrictModel) {
        var t = document.domain, n = !1;
        if (e.channelRestrictModel.webSiteWhitelist) {
          n = !0;
          var i = e.channelRestrictModel.webSiteWhitelist;
          for (var r in i && 0 < i.length && (i.push("polyv.cn"), i.push("videocc.net")), i) -1 < t.indexOf(i[r]) && (n = !1);
          if (n) return void N("LIVE-#007")
        }
        if (e.channelRestrictModel.webSiteBlacklist) {
          n = !1;
          var o = e.channelRestrictModel.webSiteBlacklist;
          for (var a in o) -1 < t.indexOf(o[a]) && (n = !0);
          if (n) return void N("LIVE-#008")
        }
        if (e.channelRestrictModel.userStatus) {
          var s = e.channelRestrictModel.userStatus;
          if ("NORMAL" != s && "TRIAL" != s) return void N("LIVE-#002")
        }
      }
      if (f.cdnType = e.cdnType, f.first_image = e.coverImage, "" == f.first_image && (f.first_image = "//live.polyv.net/assets/images/cover_image.jpg"), f.url = e.url, f.channelId = e.channelId, ae.rtmpUrl = e.url, ae.streamName = e.stream, ae.defaultStreamName = e.stream, f.sub_vid && f.sub_streamName && (f.currentSubName = f.flashvars.name = f.sub_streamName), ae.waitImage = e.waitImage, ae.waitHref = e.waitHref, ae.coverImage = e.coverImage, ae.coverHref = e.coverHref, ae.isEnd = !0, ae.isShowNoLive = !1, ae.startCheckEnd = !1, ae.flow_status = ae.FLOW_STATUS.CHECKSTREAMSTATUS, f.hlsUrl = e.m3u8Url, ae.isNamed = !1, f.flashvars && f.flashvars.name && "" != f.flashvars.name && (ae.isNamed = !0, ae.streamName = f.flashvars.name), f.passwordRestrict = e.passwdRestrict, f.passwordEncrypted = e.passwdEncrypted, f.advertType = e.advertType, f.advertImage = e.advertImage, f.advertHref = e.advertHref, f.advertFlvUrl = e.advertFlvUrl, f.advertDuration = e.advertDuration, f.isOnlyAudio = e.isOnlyAudio, f.useNgb = "Y" == e.isNgbEnabled, f.useTimeStamp = "Y" == e.isUrlProtected, f.defaultTeacherImage = e.defaultTeacherImage || "", f.recordFileSessionId = e.recordFileSessionId, f.pptSessionId && (f.recordFileSessionId = f.pptSessionId), f.recordFileDuration = e.recordFileDuration, f.vodsrc && (f.recordFileDuration = 0, f.vodDuration && (f.recordFileDuration = f.vodDuration)), f.isSendStat = !0, f.diskVideoStartTime = e.diskVideoStartTime, f.currentTimeSecs = e.currentTimeSecs, f.poster_gif = h + "wimages/loading.gif", f.poster_img = h + "wimages/loading-mobile.gif", f.poster_png = ae.poster_png = h + "wimages/player/play-btn.png", f.beta_live && (f.poster_png = ae.poster_png = "//playertest.polyv.net/player2/test/nong/play-btn.png"), f.poster_vr_png = h + "wimages/360.png", -1 < ae.coverImage.indexOf(".jpg") || -1 < ae.coverImage.indexOf(".png") || -1 < ae.coverImage.indexOf(".gif") || -1 < ae.coverImage.indexOf(".jpeg") ? f.poster_img = ae.coverImage : !ae.isAndroid() && f.hasControl || (f.poster_img = ""), ae.poster_img = f.poster_img, f.pullMode = !1, "pull" == e.streamType && (f.pullMode = !0, f.isSendStat = !1, ae.waitImage = ""), f.type = ["nromal", "mp4", "vod"], f.nowType = "", f.vod = !1, f.mode = "liveVideo", f.playBackUrl = "" !== e.recordFileM3u8Url ? e.recordFileM3u8Url : "", e.recordFileM3u8Url || (f.playBackUrl = "" !== e.recordFileUrl ? e.recordFileUrl : ""), f.recordFileUrlPlayed && (f.playBackUrl = "" !== e.recordFileUrl ? e.recordFileUrl : "", e.recordFileUrl || (f.playBackUrl = "" !== e.recordFileM3u8Url ? e.recordFileM3u8Url : "")), e.recordFileUrl || e.recordFileM3u8Url || (f.playBackUrl = ""), !f.vodsrc || -1 == f.vodsrc.indexOf("http://") && -1 == f.vodsrc.indexOf("https://") || (f.liveVodSrc = f.vodsrc, f.vod = !0, ae.paramPlusJson.param3 = "vod", f.vodVid && 0 < f.vodVid.length && (f.isSendStat = !1)), !0 !== f.isAutoChange || f.vodsrc || "" == f.playBackUrl || (f.vod = !0, f.vodsrc = f.playBackUrl), f.multirateEnabled = !0 === f.banMultirate ? "N" : e.multirateEnabled, e.multirates ? f.multirates = e.multirates.split(",") : f.multirates = ["600", "400"], f.multirates.reverse(), "undefined" == typeof ae.paramPlusJson.param5 && (f.multirateParam = !0), e.multirateModel && e.multirateModel.definitions && e.multirateModel.definitions.reverse(), ae.reNewMultirateUrlArr(f, e, !0), f.liveType = e.liveType, f.reportFreq = e.reportFreq || 10, f.aliPullProtectExpTime = e.aliPullProtectExpTime || 0, f.vod && !f.hideBar && (f.hasControl = !0), f.usePPT && !f.hideBar && (f.hasControl = !0), "Y" == f.isOnlyAudio && (f.useAudio = !0), "function" == typeof j2s_setBarrage && (f.openDanMu = j2s_setBarrage(), 1 == f.openDanMu && (f.hasControl = !0), 1 == f.hideBar && (f.hasControl = !1)), f.hlsUrl = ae.arrangeSrc(f, f.hlsUrl, e), e.channelRestrictModel && e.channelRestrictModel.authUrl && 0 < e.channelRestrictModel.authUrl.length && !ae.hasLiveDoValid) return f.certurl = e.channelRestrictModel.authUrl, void P();
      var l, c, u, d;
      f.loadJsonCompleteTime = ne() - f.loadJsonCompleteSt, l = e.channelId, c = ae.streamName, u = e.liveType, d = "", d = -1 < p.indexOf("https") ? "https://api.polyv.net/live/v2/channels/" + l + "/live-status?stream=" + c + "&ran=" + Math.floor(999999999 * Math.random()) : "http://api.polyv.net/live/v2/channels/" + l + "/live-status?stream=" + c + "&ran=" + Math.floor(999999999 * Math.random()), ae.ajax({
        url: d,
        dataType: "json",
        success: function (e) {
          var t = "";
          e.data && (t = e.data.split(",")[1]), f.usePptMode || "ppt" !== t || (f.usePPT = !0, f.ban_ad = !0, f.banpassword = !0, "function" == typeof s2j_onPptInit && s2j_onPptInit(f.vid)), j()
        },
        error: function (e, t, n) {
          f.usePptMode || "ppt" !== u || (f.usePPT = !0, f.ban_ad = !0, f.banpassword = !0, "function" == typeof s2j_onPptInit && s2j_onPptInit(f.vid)), j()
        }
      })
    }

    function P() {
      if (ae.hasLiveDoValid = !0, f.certurl && "" != f.certurl) {
        f.validTime = (new Date).getTime() + Math.floor(1e5 * Math.random());
        var e = {vid: f.vid, code: f.code, t: f.validTime};
        f.validFailUri = f.certurl, ae.ajax({
          url: f.certurl, dataType: "jsonp", data: e, success: function (i) {
            var e = "//api.polyv.net/live/v2/channels/" + f.vid + "/encryptedSign", t = {
              userId: f.uid,
              username: i.username,
              code: f.code,
              status: i.status,
              show: i.show,
              timestamp: f.validTime
            };
            ae.ajax({
              url: e, dataType: "jsonp", data: t, success: function (e) {
                var t = !1;
                if (e && e.data && 0 < e.data.length) {
                  for (var n = 0; n < e.data.length; n++) if (i.sign == PovBase64.decode(ae.decode(e.data[n]))) {
                    t = !0;
                    break
                  }
                  if (t) switch (String(i.status)) {
                    case"1":
                      ae.hasLiveChannel ? (f.loadJsonCompleteTime = ne() - f.loadJsonCompleteSt, j()) : k();
                      break;
                    case"2":
                    case"3":
                      I(i.message);
                      break;
                    default:
                      I()
                  } else I()
                } else I()
              }, error: function () {
                f.validFailUri = e, I()
              }
            })
          }
        })
      }
    }

    function I(e) {
      N("LIVE-#012", e);
      var t = L("__onVerificationError");
      t.uri = f.validFailUri, t.errorcode = "verificateion_fail", t.errormsg = "自定义授权失败", M(t)
    }

    function j() {
      f.passwordRestrict && !f.banpassword ? function t(e) {
        if (e) {
          var n = document.createElement("div"), i = "视频已加密，请输入密码", r = "确定";
          1 === f.language && (i = "Input password please", r = "confirm"), ae(c).append(ae(n));
          var o = ae('<div class="password"><p style="line-height:1.6;margin:0">' + i + '</p><input class="input-pw" type="password"/><span class="btn-pw-ok">' + r + '</span><p class="tips-pw"></p></div>');
          o.css({
            height: "73px",
            width: "225px",
            position: "absolute",
            top: "50%",
            left: "50%",
            "margin-left": "-112px",
            "margin-top": "-36px",
            "font-size": "16px"
          }), ae(".vp-wrp").css("background", "black"), ae(n).css({
            color: "white",
            width: f.width,
            height: f.height,
            "background-color": "#212121",
            position: "relative",
            overflow: "hidden"
          }).append(o);
          var a = ae(".input-pw");
          a.css({
            height: "32px",
            width: "173px",
            margin: 0,
            border: "none",
            outline: "none",
            "padding-left": "8px",
            "box-sizing": "border-box"
          }), ae(".btn-pw-ok").css({
            background: "#2b73b0",
            border: "none",
            cursor: "pointer",
            height: "32px",
            left: "180px",
            position: "absolute",
            "line-height": "32px",
            "border-radius": "2px",
            "text-align": "center",
            padding: "0 5px"
          }).bind("click", function (e) {
            -1 != String(CryptoJS.MD5(a.val())).indexOf(f.passwordEncrypted) ? (t(!1), x.passworded()) : function () {
              var e = ae(".tips-pw"), t = "请填写正确的密码! ";
              1 === f.language && (t = "Incorrect password ");
              e.css({color: "#FF8C00", "font-size": "14px"}).html(t)
            }()
          })
        } else ae(".password").parent().remove()
      }(!0) : x.passworded()
    }

    function B(e) {
      return f.useVr && (f.vrTestLocal || (e = e.replace(e.split("/")[2], "vrlive.polyv.cn/playback"))), e
    }

    function M(i) {
      ae.ajax({
        url: i.uri, type: "GET", success: function (e) {
          i.status = 200
        }, error: function (e, t, n) {
          i.status = e.status
        }
      }), F(i)
    }

    function F(e) {
      e.client = "h5-" + ae.liveBuildMetaData.split("+")[1];
      new O(e)
    }

    function O(e) {
      var t, n = 0, i = function (e) {
        ae.ajax({
          type: "GET", url: "//rtas.videocc.net/qos", data: e, success: function () {
            clearTimeout(t)
          }, error: function () {
            ++n < 4 && (t = setTimeout(function () {
              i(e)
            }, 5e3))
          }
        })
      };
      i(e)
    }

    function L(e) {
      var t = {};
      for (var n in t.pid = f.pid, t.uid = f.uid, t.cid = f.vid, t.type = e, f.session_id && (t.session_id = ae.urlSafeBase(f.session_id)), ae.paramPlusJson) t[n] = ae.paramPlusJson[n];
      return t
    }

    function N(e, t) {
      c.children().remove();
      var n = ae("<div/>");
      n.css({width: f.width, height: f.height, position: "relative", "background-color": "black"});
      var i = ae("<div/>");
      c.append(n), n.append(i), i.css({
        "text-align": "center",
        position: "relative",
        top: "50%",
        padding: "0 8%",
        transform: "translate(0,-50%)"
      });
      var r = ae('<img src="' + h + 'wimages/icon.png">');
      r.css({width: "80px", height: "80px"}), i.append(r);
      var o = ae("<div/>");
      decodeURIComponent(ae.liveLanguageParser.streamFail);
      if (t) {
        var a = t.toString().split("|");
        t = 1 < a.length && 1 == f.language ? a[1] : a[0], o.html(t + "<br/>" + e)
      } else {
        var s = ae.liveLanguageParser.channelFail.split("|"), l = "";
        1 < s.length && 1 == f.language ? (l = s[2], !0 === f.changeEnContent && (l = s[1])) : l = s[0], o.html(decodeURIComponent(l) + "<br/>" + e)
      }
      f.isSpecialUser && -1 < e.indexOf("LIVE-#006") && o.html(decodeURIComponent(ae.liveLanguageParser.concurrentRes)), o.css({
        color: "white",
        paddingTop: "4px"
      }), i.append(o)
    }

    function D() {
      f.isSendStat && (ae.isEnd || (a && a[0] || f.video) && ae.sendStats(f.pid, f.uid, f.vid, f.pd, f.pd, f.session_id, f))
    }

    function H(e, t) {
      if (f.vod || function () {
        var e = 1800;
        f.aliPullProtectExpTime && (e = f.aliPullProtectExpTime);
        var t = e - 600;
        if ("ali" !== f.cdnType) return;
        var n = 1e3 * (t + Math.floor(5 * Math.random() * 60)), i = (new Date).getTime();
        setInterval(function () {
          ae.flow_status === ae.FLOW_STATUS.PLAYING ? (new Date).getTime() - i > n && (i = (new Date).getTime(), ae.urlProtectedResume()) : i = (new Date).getTime()
        }, 1e3)
      }(), "end" == f.apiStatus && f.useCover && -1 == ae.waitImage.indexOf(".mp4") && !f.vod && !f.pullMode) return f.mode = "playbackVideo", J(), R(), void U();
      ae.flow_status = ae.FLOW_STATUS.PLAYING, f.playToBufferFullSt = ne(), R(), a = ae(t);
      f.first_image;
      f.flashvars.loading_bg_img && f.flashvars.loading_bg_img, 0 < f.loading_bg_img.length && f.loading_bg_img;
      var n = f.hlsUrl;
      (n = ae.arrangeSrc(f, n), t.autoplay = "autoplay", t.preload = "auto", f.autoplay || (t.autoplay = "", t.preload = "", t.pause()), 0 < ae.coverImage.length && -1 != ae.coverImage.indexOf("http") ? t.poster = f.poster_img : f.hasControl && (ae.isIOS() || ae.isAndroid() && ae.isChrome() || f.x5 && ae.isSupportSamePlayer()) && (t.poster = f.poster_png), f.openDanMu || (t.controls = "controls"), (f.vod || f.useVr) && (t.controls = ""), f.useVr ? ae.wxSamePlayerLandscape(f) : !0 === f.x5 && ae.isSupportSamePlayer() && ae.wxSamePlayerPortrait(f), "function" == typeof j2s_showNativeControls) && (j2s_showNativeControls() && (t.controls = "controls"));
      "function" == typeof j2s_IsPc && (j2s_IsPc() && ae.isIpad() && (t.controls = "controls"));
      if (a.css("background-size", 100 * f.playerWidth + "%"), a.css("background-repeat", "no-repeat"), a.css("background-position", "center"), a.css("width", "100%"), a.css("height", "100%"), a.css("top", 0), a.css("left", 0), f.usePPT && a.css("background-color", "black"), a.css("display", "block"), f.vod) {
        var i = !0;
        f.isAutoChange && "live" == f.apiStatus && !f.liveVodSrc && (i = !1), i && (f.isReplay = !0, f.mode = "playbackVideo", n = B(f.vodsrc), t.autoplay = "", ae.paramPlusJson.param3 = "vod")
      }
      (f.hideBar || f.hasControl) && (t.controls = ""), f.hasControl || ae("#CmContainer").css("display", "none"), -1 == ae.waitImage.indexOf(".mp4") || f.vod || "live" == f.apiStatus || (f.mode = "playbackVideo", n = ae.waitImage, ae.flow_status = ae.FLOW_STATUS.WAITING), f.vrTest && (n = "//play1.polyv.net/player2/test/nong/vr2.mp4"), t.src = n, f.useVr && ae(t).css({
        position: "absolute",
        "z-index": "-1"
      }), f.changeAudioModeBg(), U()
    }

    function R() {
      f.statsInterval && (clearInterval(f.statsInterval), f.statsInterval = null), f.statsInterval = setInterval(D, 1e3 * f.reportFreq)
    }

    function U(e) {
      f.checkEndInterval = null, f.checkEndInterval = setInterval(function () {
        var e = function () {
          var e = !1;
          ae.flow_status == ae.FLOW_STATUS.PLAYING && (z() ? e = !0 : f.video && (e = !0));
          return e
        }();
        if (e) if (function () {
          var e = !1;
          z() ? "live" == f.apiStatus && (e = !0) : e = !(f.video.paused || f.video.ended || !(2 < f.video.readyState));
          return e
        }()) {
          if (ae.isEnd && (V() || ie()), ae.isEnd = !1, !f.hasSendLoading) {
            f.hasSendLoading = !0, f.playToBufferFullTime = ne() - f.playToBufferFullSt;
            var t = L("loading");
            t.time = f.playToBufferFullTime, F(t)
          }
        } else ae.isEnd || (clearInterval(le), clearInterval(ce)), ae.isEnd = !0;
        z() || (!e && f.onPlay ? (f.pauseTimeChecking || (f.pausedTimeStamp = (new Date).getTime()), 5e3 <= (new Date).getTime() - f.pausedTimeStamp && (f.pausedTimeStamp = (new Date).getTime(), "end" == !f.apiStatus && f.j2s_resumeVideo()), f.pauseTimeChecking = !0) : (f.pausedTimeStamp = (new Date).getTime(), f.pauseTimeChecking = !1))
      }, 1e3), f.checkVideoError = setInterval(function () {
        if (f.video && null != f.video.errror && !f.hasSendVideoError) {
          f.hasSendVideoError = !0;
          var e = L("error");
          e.uri = f.video.src, e.errorcode = "load_video_failure", e.errormsg = "播放视频失败", M(e)
        }
      }, 1e3)
    }

    function V() {
      var e = !1;
      return f.liveLocation && ae.isSameplayerMode(f) && (e = !0), e
    }

    function z() {
      var e = navigator.userAgent, t = !1;
      return -1 == e.indexOf("UCBrowser") && -1 == e.indexOf("MQQBrowser") && -1 == e.indexOf("SogouMobileBrowser") && -1 == e.indexOf("baidubrowser") || (t = !0), f.vod && (t = !1), t
    }

    function W(n) {
      if (!(f.liveVodSrc && 1 < f.liveVodSrc.length && f.stopApiRequest) || n) {
        var e = ae.streamName;
        -1 < ae.streamName.indexOf("_hls") && (e = e.split("_hls")[0]);
        var t = "";
        t = -1 < p.indexOf("https") ? "https://api.polyv.net/live_status/query?stream=" + e : "http://api.polyv.net/live_status/query?stream=" + e, ae.ajax({
          url: t,
          type: "GET",
          dataType: "jsonp",
          success: function (e) {
            if ("function" == typeof s2j_onApiStatus && s2j_onApiStatus(e), (f.pullMode || f.isYS) && (e = "live"), ae.liveApiStatus = f.apiStatus = e, f.isShowHd = "Y" === f.multirateEnabled && "live" == ae.liveApiStatus && !f.useVr && "pull" != f.liveType, ae.isLiveControl && f.showHd && (f.isShowHd ? (f.highLightHd(f.multirate), f.showHd(!0)) : f.showHd(!1)), n && ae.isSameplayerMode(f) && (ae.wxSamePlayerPortrait(f), ae.addEventX5FullExit(f)), ae.flow_status != ae.FLOW_STATUS.PREAD) if (n) "NONE" != f.advertType && f.advertDuration && !f.ban_ad ? function (t) {
              ae.flow_status = ae.FLOW_STATUS.PREAD, f.loadAdSt = ne();
              var n = ae('<div class="adMask" />');
              if (n.css({
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 100
              }), n.bind("click", function () {
                0 < f.advertHref.length && window.open(f.advertHref, "_blank")
              }), "IMAGE" != f.advertType || -1 == f.advertImage.indexOf("http://") && -1 == f.advertImage.indexOf("https://")) if ("FLV" != f.advertType || -1 == f.advertFlvUrl.indexOf(".mp4") && -1 == f.advertFlvUrl.indexOf(".m3u8")) x.makeH5(); else {
                var e = ae("<div />");
                e.css({
                  background: 'url("' + h + 'wimages/pausebtn.png") no-repeat',
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  "margin-top": "-21px",
                  "margin-left": "-21px",
                  "z-index": "1"
                }), e.appendTo(ae(".plwrap")), ae(".plwrap").css("background-color", "black"), e.bind("click", function () {
                  ae(f.video).css("display", "block"), f.video.src = f.advertFlvUrl, f.video.preload = "auto", f.video.play(), te(t), e.remove(), n.appendTo(ae(".plwrap"))
                }), f.preadError = !1, f.checkPreadError = setInterval(function () {
                  if (f.preadError) clearInterval(f.checkPreadError); else if (null != f.video.error) {
                    var e = L("aderror");
                    e.uri = f.advertFlvUrl, e.errorcode = "load_ad_failure", e.errormsg = "加载视频广告失败code:" + f.video.error.code, M(e), f.hasSendAdError = !0, clearInterval(f.checkPreadError), n.remove(), ae(".ad-time").remove(), x.makeH5()
                  }
                }, 1e3)
              } else {
                ae(c).css("background", "black");
                var i = !0, r = 0, o = ae('<img id="adImage">');
                o.attr("src", f.advertImage), o.appendTo(ae(c)), o.css({
                  width: "auto",
                  display: "flex",
                  margin: "auto",
                  "max-width": "100%",
                  "max-height": "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  "z-index": 99
                }), "function" != typeof j2s_IsPc && o.css("height", f.height), o.one("load", function () {
                  if (f.loadAdCompleteTime = ne() - f.loadAdSt, !f.hasSendAdPlay && !f.hasSendAdError) {
                    f.hasSendAdPlay = !0;
                    var e = L("adplay");
                    e.url = f.advertImage, e.load_time = f.loadAdCompleteTime, e.play_time = f.advertDuration, F(e)
                  }
                  i = !1, te(t), n.css({position: "absolute", top: 0}), n.appendTo(ae(c))
                });
                var a = setInterval(function () {
                  if (r++, i) {
                    if (10 == r) {
                      var e = L("aderror");
                      e.uri = f.advertImage, e.status = 0, e.errorcode = "load_ad_timeout", e.errormsg = "加载广告超时", F(e), f.hasSendAdError = !0, clearInterval(a), o.remove(), n.remove(), x.makeH5()
                    }
                  } else clearInterval(a)
                }, 1e3)
              }
            }(!0) : x.makeH5(); else if (!f.liveVodSrc) if ("live" == e) f.apiEndTime = 0, "liveVideo" != f.mode && (ae(".plwrap").css("display", "block"), ae(".pl_noliveWrap").remove(), 0 < ae.coverImage.length && -1 != ae.coverImage.indexOf("http") ? f.video.poster = f.poster_img : f.hasControl && (ae.isIOS() || ae.isAndroid() && ae.isChrome()) && (f.video.poster = f.poster_png), ae.flow_status = ae.FLOW_STATUS.PLAYING, ae.urlProtectedResume(), f.mode = "liveVideo", f.usePPT ? f.changeSkinType(!0) : 0 == ae.isLiveControl && (ae.proxy(ae.createControl, f)(), ae(document).triggerHandler("controlready"), $(), f.changeAudioModeBg(), f.video && (f.video.playbackRate = 1)), f.usePPT && ae.pptHandler && ae.pptHandler.changeLiveVodState()), ae.paramPlusJson.param3 = "live", f.hasGetChannelPlayBackUrl = !1; else if (f.apiEndTime++, f.isAutoChange && 1 <= f.apiEndTime) {
              if (f.apiEndTime = 0, "playbackVideo" != f.mode && (f.hasGetChannelPlayBackUrl = !1, f.playBackUrl = ""), !f.hasGetChannelPlayBackUrl) {
                var t = p + "player.polyv.net/service/lts3/enc_" + o + "_" + s + ".json?ran=" + Math.floor(9999999 * Math.random());
                f.beta_live && (t = p + "live.polyv.net/test/service/v1/channel.json?vid=" + s + "&ran=" + Math.floor(9999999 * Math.random())), ae.getAjaxPromise({
                  url: t,
                  dataType: f.channelType
                }).then(function (e) {
                  var t = "";
                  t = f.beta_live ? e : A(e), f.playBackUrl = "" !== t.recordFileM3u8Url ? t.recordFileM3u8Url : "", t.recordFileM3u8Url || (f.playBackUrl = "" !== t.recordFileUrl ? t.recordFileUrl : ""), t.recordFileUrl || t.recordFileM3u8Url || (f.playBackUrl = ""), f.playBackUrl ? (f.hasGetChannelPlayBackUrl = !0, q(), "function" == typeof s2j_onChangeVodVideoSid && s2j_onChangeVodVideoSid(e.recordFileSessionId)) : "playbackVideo" != f.mode && q()
                })
              }
            } else "playbackVideo" != f.mode && 1 <= f.apiEndTime && q()
          }
        })
      }
    }

    function q() {
      var e = "", t = !(f.mode = "playbackVideo"), n = !1;
      f.isAutoChange && "" != f.playBackUrl ? (ae.flow_status = ae.FLOW_STATUS.PLAYING, e = f.playBackUrl, t = !0, ae.paramPlusJson.param3 = "vod") : t || -1 == ae.waitImage.indexOf(".mp4") ? !t && f.useCover ? J() : (ae.flow_status = ae.FLOW_STATUS.PLAYING, ae.urlProtectedResume(), n = !0, ae.paramPlusJson.param3 = "live") : (ae.flow_status != ae.FLOW_STATUS.WAITING && (ae.flow_status = ae.FLOW_STATUS.WAITING, e = ae.waitImage), n = t = !0), "" != e && f.video.src != e && (f.video.src = e, f.video.play()), f.usePPT ? n || f.changeSkinType(!1) : 1 != ae.isLiveControl || n || (ae.proxy(ae.createVodControl, f)(), ae(document).triggerHandler("controlready"), $(), f.changeAudioModeBg()), f.usePPT && ae.pptHandler && ae.pptHandler.changeLiveVodState()
    }

    function $() {
      se = 0, f.pd = 0, f.pid = ae.getPlayId()
    }

    function X() {
      var e = "";
      e = -1 < p.indexOf("https") ? "https://api.polyv.net/live/v2/channels/" + f.vid + "/query-streams" : "http://api.polyv.net/live/v2/channels/" + f.vid + "/query-streams", ae.getJSON(e, function (e) {
        if (200 == e.code && e.data && 0 < e.data.length) {
          var t = !0;
          if (f.subInfoArr.length != e.data.length) t = !1; else for (var n = 0; n < f.subInfoArr.length; n++) if (f.subInfoArr[n].isLive != e.data[n].isLive) {
            t = !1;
            break
          }
          if (!t && (f.subInfoArr = e.data, f.sub_scene && function () {
            for (var e = 0; e < f.subInfoArr.length; e++) {
              var t = f.subInfoArr[e].streamName, n = f.subInfoArr[e].nickname, i = f.subInfoArr[e].subChannelId,
                r = f.subInfoArr[e].isLive;
              if (0 < ae("." + i).length) ae("." + i).css({
                background: "-webkit-gradient(linear, left top, left bottom, from(#42abf8), to(#0888e6))",
                background: "linear-gradient(#34a5f8, #088ef0)"
              }); else {
                var o = ae((a = t, s = i, l = n, '<div data-stream="' + a + '" data-subId="' + s + '">' + l + "</div>")).addClass(i);
                o.css({
                  color: "#fff",
                  padding: "6px 20px",
                  display: "inline-block",
                  marginRight: "10px",
                  background: "linear-gradient(#34a5f8, #088ef0)",
                  background: "-webkit-gradient(linear, left top, left bottom, from(#42abf8), to(#0888e6))",
                  "text-align": "center",
                  "white-space": "nowrap",
                  "user-select": "none",
                  "border-radius": "25px",
                  "font-size": "14px",
                  cursor: "pointer"
                }), f.subContainer.append(o)
              }
              f.sub_default || i !== f.sub_currentVid || (f.sub_default = !0, f.currentSubName = t, G(i)), r || ae("." + i).css({
                background: "-webkit-gradient(linear, left top, left bottom, from(#bdbdbd), to(#868686))",
                background: "linear-gradient(#bdbdbd, #9b9b9b)"
              })
            }
            var a, s, l
          }(), "function" == typeof s2j_onUpdateScene && s2j_onUpdateScene(e.data), f.getSubStream < 1 && (f.getSubStream++, f.sub_vid))) for (n = 0; n < f.subInfoArr.length; n++) f.subInfoArr[n].subChannelId === f.sub_vid && (f.sub_streamName = f.subInfoArr[n].streamName, f.currentSubName = f.sub_streamName)
        }
      })
    }

    function G(e) {
      f.ticker || (f.ticker = ae("<div></div>").css({
        display: "inline-block",
        marginRight: "8px",
        color: "green",
        background: "rgba(255, 255, 255, 0.8)",
        "border-radius": "10px",
        width: "19px"
      }).html("&radic;")), 0 < ae("." + e).length && ae("." + e).prepend(f.ticker)
    }

    function J() {
      ae(".plwrap").css("display", "none"), ae(".pl_noliveWrap").remove();
      var e = ae("<div />");
      e.css({position: "relative", width: f.width, height: f.height}), e.addClass("pl_noliveWrap");
      var t = ae("<div />");
      if ("" != ae.coverImage) {
        var n = ae("<div />");
        n.css({
          top: "2px",
          width: "30px",
          height: "30px",
          background: 'url("//livestatic.videocc.net/assets/wimages/icon-info.png") no-repeat',
          "background-position": "center center",
          "background-size": "60%",
          display: "inline-block",
          "margin-right": "2px",
          position: "relative"
        });
        var i = "直播尚未开始";
        1 == f.language && (i = "Live streaming hasn't started yet");
        var r = ae("<span />");
        r.html(i).css({
          color: "white",
          "float": "right",
          "line-height": "34px",
          "vertical-align": "middle",
          "font-family": "微软雅黑",
          "font-size": "14px"
        }), t.append(n, r), t.css({
          position: "absolute",
          top: "10px",
          right: 0,
          "background-color": "rgba(0,0,0,0.7)",
          "border-bottom-left-radius": "5px",
          "border-top-left-radius": "5px",
          padding: "2px 10px 0 2px"
        })
      } else {
        var o = h + "wimages/nolive_blue.png", a = "50%";
        1 == f.language && (o = "//livestatic.videocc.net/assets/wimages/player/live/en/nolive_blue_en.png", a = "60%"), "ppt" == f.liveType && (o = "//livestatic.videocc.net/assets/wimages/nolive_ppt.png", 1 == f.language && (o = "//livestatic.videocc.net/assets/wimages/player/ppt/en/nolive_ppt.png", a = "100%"), f.placeholderImg && (o = "//livestatic.videocc.net/assets/wimages/player/special/nolive.png", a = "70%"), f.skinLight && (o = "//livestatic.videocc.net/assets/wimages/player/ppt/nolive_ppt_white.png", a = "100%", 1 == f.language && (o = "//livestatic.videocc.net/assets/wimages/player/ppt/en/nolive_ppt_white.png")), f.defaultTeacherImage && 0 < f.defaultTeacherImage.length && (o = f.defaultTeacherImage, a = "100%")), t.css({
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
          background: 'url("' + o + '") no-repeat',
          "background-position": "center center",
          "background-size": a
        })
      }
      !0 === f.hideBar && t.css("opacity", "0");
      var s = ae("<div />");
      s.css({
        width: "100%",
        height: "100%"
      }), "" != ae.coverImage ? (s.css("background", "url(" + ae.coverImage + ") no-repeat"), 0 < ae.coverHref.length && -1 < ae.coverHref.indexOf("//") && s.on("click", function () {
        window.open(ae.coverHref, "_blank")
      })) : "ppt" == f.liveType ? (s.css("background-color", "#393842"), f.placeholderImg && s.css("background-color", "#fafafa")) : s.css("background", 'url("' + h + 'wimages/default_blue.png") no-repeat'), s.css("background-size", "100% 100%"), ae(c).append(e), ae(e).append(s, t), f.j2s_pauseVideo(), ae.isShowNoLive = !0
    }

    function Y(e) {
      return e.each(function () {
        if (ae.isIOS() && ae.isWeiXin() && !window.onlyMedia) {
          if (ae.hasMakeDiv) return;
          ae.hasMakeDiv = !0
        }
        var e, t = f.div = document.createElement("div"), n = f.polyvObjectdiv = ae(t);
        n.addClass("plwrap"), n.css("background-size", "100% 100%"), n.css("background-repeat", "no-repeat"), n.css("background-position", "center"), n.css("background-color", "#212121"), n.css("text-align", "left"), n.css("width", f.width), n.css("height", f.height), n.css("position", "relative"), this.appendChild(t), e = f.useAudio && 1 == f.useAudio ? ae.isIOS() && ae.isWeiXin() && ae.audio && !window.onlyMedia ? f.video = ae.audio : f.video = document.createElement("audio") : ae.isIOS() && ae.isWeiXin() && ae.video && !window.onlyMedia ? f.video = ae.video : f.video = document.createElement("video");
        var i = ae(e);
        i.attr({
          "webkit-playsinline": "",
          playsinline: "",
          "x5-playsinline": "",
          "x-webkit-airplay": "true",
          id: f.vid
        }), i.css({width: "100%", height: "100%", "background-color": "#212121"}), ae.videoId = "#" + f.vid;
        var r = f.plvideo = ae("<div />").addClass(f.videoClass);
        if (f.usePPT) {
          r.css({width: "150px", height: "105px", right: 0, top: 0, position: "absolute", zIndex: 3});
          var o = ae("<div />").addClass("plv_ppt");
          o.css({
            width: "100%",
            height: "100%",
            background: 'url("' + h + 'wimages/pptClientWatch_images/mobile/nolive.png") no-repeat',
            "background-position": "center center",
            "background-size": "95%"
          });
          var a = new Image;
          ae(a).addClass("plv_ppt_pics"), ae(a).css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }), ae(a).appendTo(o), ae(t).append(o), ae(t).css("overflow", "hidden")
        } else r.css({width: f.width, height: f.height, top: 0, left: 0, position: "absolute"});
        var s, l = ae.imgConfig.audioModePlaying;
        f.vod && f.useAudio && (l = ae.imgConfig.audioModePlayback), f.useAudio && 1 == f.useAudio && (s = ae('<div class="audio-mode"/>')).css({
          background: "url(" + l + ") no-repeat",
          "background-size": "cover",
          "background-position": "center center",
          width: "100%",
          height: "100%"
        }).attr("id", "audio"), ae(t).append(r), f.changeAudioModeBg = function () {
          !0 === f.useAudio && ae(".audio-mode").css({background: "url(" + ae.imgConfig.audioModePlayback + ") center center / cover no-repeat"})
        }, f.j2s_switchCam = function (e) {
          var t = r.find(".plv-video-cam");
          if (e) {
            if (t[0]) t.fadeIn(300); else {
              t = ae('<div class="plv-video-cam"></div>');
              var n = ae('<div class="plv-video-cam-wrap"></div>');
              t.css({
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                backgroundColor: "#212121"
              }), n.css({
                width: "100%",
                height: "100%",
                background: 'url("//livestatic.videocc.net/assets/wimages/nocamera_ppt.png") center center / 70% no-repeat'
              }), t.fadeIn(300), r.append(t), t.append(n)
            }
          } else t[0] && t.fadeOut(300)
        }, f.useAudio && 1 == f.useAudio ? (r.append(s), s.append(ae(e))) : r.append(ae(e)), f.getDuration = function () {
          return f.video.src ? f.video.duration : 0
        }, f.j2s_seekVideo = function (e) {
          f.video.src && (f.video.currentTime = e)
        }, f.j2s_pauseVideo = function () {
          ae(ae.videoId)[0].pause()
        }, f.j2s_resumeVideo = function () {
          if (f.vod) {
            f.video.currentTime;
            f.video.play(), ae.pptHandler && ae.pptHandler.handlePlayBack()
          } else f.video.play(), ae.urlProtectedResume(), ee();
          ae(f.video).css("display", "block")
        }, f.j2s_stopVideo = function () {
          ae(ae.videoId)[0].pause(), f.video.currentTime = 0, f.s2j_onPlayOver && f.s2j_onPlayOver()
        }, f.j2s_setVolume = function (e) {
          (0 <= e || e <= 1) && (f.video.volume = e)
        }, f.j2s_getCurrentTime = function () {
          return ae(ae.videoId)[0].currentTime
        }, f.j2s_getPlayDuration = function () {
          return se
        }, f.j2s_changeVideo = function (e, t, n) {
          f.vodsrc = e, f.recordFileSessionId = t, f.recordFileDuration = n, f.video.src = B(f.vodsrc), f.video.play(), ae.pptHandler && ae.pptHandler.changeLiveVodState(!0)
        }, f.fadeOutControls = function () {
          f.controlsTimer && clearTimeout(f.controlsTimer), f.controlsTimer = setTimeout(function () {
            f.control && !f.control.is(":hidden") && Z(), f.useAudioBtn && !f.audioBtn.is(":hidden") && f.audioBtn.fadeOut(500)
          }, 5e3)
        }, f.reShowControls = function () {
          f.controlsTimer && clearTimeout(f.controlsTimer), f.control && f.control.fadeIn(300)
        }, f.setBarrageStatus = function (e) {
          f.changeBarrageStatus(e)
        }, f.changeParam = function (e, t, n, i) {
          e && (ae.paramPlusJson.param1 = e), t && (ae.paramPlusJson.param2 = t), n && (ae.paramPlusJson.param3 = n), i && (ae.paramPlusJson.param4 = i)
        }, f.changeSessionId = function (e) {
          f.session_id = e
        }, f.j2s_changeMultirate = function (e) {
          e != f.multirate && (f.switchMultirate = e, ae.urlProtectedResume())
        }, f.changeRate = function (e) {
          f.vod && (f.video.playbackRate = e)
        }, K(), f.hasCheckApi || (W(f.hasCheckApi = !0), f.checkapiendtimer = setInterval(function () {
          W()
        }, 6e3))
      })
    }

    function K() {
      f.video.addEventListener("playing", function () {
        if (ae.flow_status == ae.FLOW_STATUS.PLAYING) {
          f.s2j_onVideoPlay && f.s2j_onVideoPlay(), f.changePlayStat && f.changePlayStat(!0), ie(), f.onPlay = !0, f.isSendOnPlay = !0, f.playStart ? "function" == typeof s2j_onPlay && s2j_onPlay() : (f.playStart = !0, "function" == typeof s2j_onStartPlay && s2j_onStartPlay());
          try {
            f.useVr && vrFuc.start()
          } catch (n) {
          }
          if (f.nowType == f.type[1] && (f.watch_start_time > f.video.duration - 10 && (f.watch_start_time = f.video.duration - 10), 0 < f.watch_start_time && (f.video.currentTime = f.watch_start_time), f.watch_start_time = 0), f.vod) if ("" != f.video.duration && f.video.duration != Infinity && 1 < f.video.duration) {
            if (f.duration = f.video.duration, f.updateTotalTimeShow) {
              var e = f.video.duration;
              f.updateTotalTimeShow(e)
            }
          } else {
            var t = 0 < f.recordFileDuration ? f.recordFileDuration : 0;
            0 < f.vodSrcDuration && (t = f.vodSrcDuration), f.updateTotalTimeShow && (f.duration = t, f.updateTotalTimeShow(t))
          }
        } else ae.flow_status == ae.FLOW_STATUS.WAITING && f.changePlayStat && f.changePlayStat(!0);
        f.x5 && ae.isSupportSamePlayer() && f.fadeOutControls()
      }), f.video.addEventListener("ended", function () {
        if (ae.flow_status == ae.FLOW_STATUS.PREAD && (f.preadError || (ae(".ad-time").remove(), x.makeH5(), f.preadError = !0)), ae.flow_status == ae.FLOW_STATUS.WAITING) f.video.currentTime = 0, f.video.play(); else if (ae.flow_status == ae.FLOW_STATUS.PLAYING) {
          clearInterval(le), clearInterval(ce);
          try {
            cmManager && cmManager.clear()
          } catch (e) {
          }
          "function" == typeof s2j_onOver && s2j_onOver(), "function" == typeof s2j_onPptOver && s2j_onPptOver(), f.nowType == f.type[1] && (f.video.src = ""), f.vod && (f.video.currentTime = 0)
        }
        try {
          f.useVr && (ae.isAndroid() && ae.isWeiXin() || vrFuc.pause())
        } catch (e) {
        }
      }), f.video.addEventListener("pause", function () {
        ae.flow_status == ae.FLOW_STATUS.PLAYING && (f.s2j_onVideoPause && f.s2j_onVideoPause(), clearInterval(le), f.onPlay = !1, "function" == typeof s2j_onPause && s2j_onPause(), "function" == typeof s2j_onPptPause && s2j_onPptPause()), f.changePlayStat && f.changePlayStat(!1), f.x5 && ae.isSupportSamePlayer() && f.reShowControls();
        try {
          !f.useVr || ae.isAndroid() && ae.isWeiXin() || vrFuc.pause()
        } catch (e) {
        }
      }), f.video.addEventListener("canplay", function () {
      }), f.video.addEventListener("timeupdate", function () {
        ae.flow_status == ae.FLOW_STATUS.PLAYING && (f.isSendOnPlay && .5 < f.video.currentTime && (f.isSendOnPlay = !1, "function" == typeof s2j_onVodPlay && s2j_onVodPlay(), "function" == typeof s2j_onPptVodPlay && s2j_onPptVodPlay()), f.vod && f.updateCurrentTimeShow && (f.updateCurrentTimeShow && f.updateCurrentTimeShow(f.video.currentTime), "function" == typeof s2j_onVodTimeupdate && s2j_onVodTimeupdate(f.video.currentTime)))
      }), f.video.addEventListener("loadeddata", function () {
        if (f.vod) if ("" != f.video.duration && f.video.duration != Infinity && 1 < f.video.duration) {
          if (f.duration = f.video.duration, f.updateTotalTimeShow) {
            var e = f.video.duration;
            f.updateTotalTimeShow(e)
          }
        } else {
          var t = 0 < f.recordFileDuration && f.recordFileDuration;
          t = 0 < f.vodSrcDuration ? f.vodSrcDuration : 0, f.updateTotalTimeShow && (f.duration = t, f.updateTotalTimeShow(t))
        }
      }), f.video.addEventListener("seeked", function () {
        if ("function" == typeof s2j_onSeek) {
          var e = f.video.currentTime;
          setTimeout(function () {
            s2j_onSeek(e, f.video.currentTime, f.vid)
          }, 500)
        }
        if ("function" == typeof s2j_onPptSeek) {
          e = f.video.currentTime;
          setTimeout(function () {
            s2j_onPptSeek(e, f.video.currentTime, f.vid)
          }, 500)
        }
        ae(ae.videoId)[0].play(), f.vod && ae("#CmContainer").empty()
      }), f.video.addEventListener("waiting", function () {
        ae.flow_status == ae.FLOW_STATUS.PLAYING && ("function" == typeof s2j_onWaiting && s2j_onWaiting(), ee())
      }), f.video.addEventListener("error", function () {
        if (f.openDanMu || f.hasControl) {
          ae(".plv_netTips").remove();
          var e = ae.liveLanguageParser.networkTips.split("|"), t = e[0];
          1 === f.language && (t = e[1]);
          var n = ae("<span />").css({
            position: "absolute",
            bottom: "60px",
            left: 0,
            height: "auto",
            padding: "4px 10px",
            color: "#fff",
            backgroundColor: "rgb(0,0,0,0.8)",
            fontSize: "12px",
            display: "none"
          }).html(decodeURIComponent(t)).addClass("plv_netTips");
          ae(".plwrap").append(n), n.fadeIn(300), i && (clearTimeout(i), i = null);
          var i = setTimeout(function () {
            n.fadeOut(200)
          }, 8e3);
          f.upNetWorkTip = function (e) {
            e ? n.stop(!0).animate({bottom: "55px"}, "slow") : n.stop(!0).animate({bottom: "5px"}, "slow")
          }
        }
      }), ae.isSupportSamePlayer() && ae.addEventX5FullExit(f)
    }

    function Q(e, t, n) {
      t.remove(), function (e, t) {
        var n;
        if ("video" == e) n = f.video = document.createElement("video"), (a = ae(n)).css({
          display: "none",
          height: "100%"
        }), ae(".plvideo").append(a), a.slideDown(300); else {
          n = f.video = document.createElement("audio"), a = ae(n);
          var i = "//livestatic.videocc.net/assets/wimages/", r = "70%";
          "ppt" == f.liveType ? (imgUrl = i + "nocamera_ppt.png", f.skinLight && (imgUrl = i + "player/ppt/nocamera.png", f.beta_live && (imgUrl = "http://play1.polyv.net/player2/test/nong/nocamera.png")), f.placeholderImg && (imgUrl = i + "player/special/camera.png", r = "70%"), f.defaultTeacherImage && 0 < f.defaultTeacherImage.length && (imgUrl = f.defaultTeacherImage, r = "100%")) : (imgUrl = i + "audio-bg.png", r = "cover");
          var o = ae("<div />");
          o.css({
            background: 'url("' + imgUrl + '") no-repeat',
            "background-size": r,
            "background-position": "center center",
            width: "100%",
            height: "100%"
          }).attr("id", "audio"), o.append(a), o.css("display", "none"), ae(".plvideo").append(o), o.slideDown(300)
        }
        a.attr("webkit-playsinline", ""), a.attr("playsinline", ""), a.attr("x-webkit-airplay", "true"), a.attr("id", f.vid), a.css("width", "100%"), a.css("height", "100%"), a.css("background-color", "#212121"), "audio" == e && a.css({
          width: 0,
          height: 0
        });
        n.autoplay = t.auto, n.poster = t.post, n.preload = t.pre, n.controls = t.con, !f.useVr && f.x5 && ae.isSupportSamePlayer() && (ae.wxSamePlayerPortrait(f), ae.addEventX5FullExit(f));
        f.vod ? (n.src = t.videosrc, n.play()) : ae.urlProtectedResume();
        f.autoplay || n.pause();
        K()
      }(e, n)
    }

    function Z() {
      f.control.fadeOut(500), f.ratePanel && f.ratePanel.show && f.ratePanel.toggleShow(), f.upNetWorkTip && f.upNetWorkTip(!1)
    }

    function ee() {
      ae("video")[0] && (ae("video")[0].poster = f.poster_gif)
    }

    function te(e) {
      if (e) {
        var t = "广告也精彩|秒";
        1 == f.language && (t = "Ads|s");
        var n = t.split("|"),
          i = ae('<div class="ad-time"><div class="bg-rect ad-rect"></div><div class="t ad-txt"><span class="ad-tips">' + n[0] + '</span><span class="ad-time-count">' + f.advertDuration + "</span><span>" + n[1] + "</span></div></div>");
        i.appendTo(ae(c)), "static" == ae(c).css("position") && ae(c).css("position", "relative"), i.css({
          height: "30px",
          color: "#ffffff",
          "font-size": "10px",
          "padding-left": "5px",
          top: "10px",
          right: "3%",
          position: "absolute",
          "text-shadow": "1px 0px 1px #9C9B9B",
          zIndex: 101
        }), ae(".ad-rect").css({
          width: "100%",
          height: "100%",
          opacity: .7,
          backgroundColor: "rgba(0,0,0,0.7)",
          "border-radius": "25px"
        }), ae(".ad-txt").css({
          position: "relative",
          top: "-30px",
          margin: "0 13px",
          "line-height": "30px",
          "vertical-align": "middle"
        }), 1 != f.language && ae(".ad-tips").css("letterSpacing", "2px"), ae(".ad-time-count").css({
          display: "inline-block",
          "text-align": "center",
          width: "20px",
          color: "rgb(20, 162, 244)"
        });
        var r = 0, o = setInterval(function () {
          if (f.preadError && !f.video.error && 0 < r && !f.hasSendAdPlay && !f.hasSendAdError) {
            f.hasSendAdPlay = !0, f.loadAdCompleteTime = ne() - f.loadAdSt;
            var e = L("adplay");
            e.url = f.advertFlvUrl, e.load_time = f.loadAdCompleteTime, e.play_time = r, F(e), clearInterval(o)
          }
          if (r++, ae(".ad-time-count").html(f.advertDuration - r), r >= f.advertDuration && (clearInterval(o), "IMAGE" == f.advertType ? (ae("#adImage").remove(), i.remove(), ae(".adMask").remove(), x.makeH5()) : f.preadError || (f.preadError = !0, i.remove(), f.video.pause(), ae(".adMask").remove(), x.makeH5()), !f.hasSendAdPlay && !f.hasSendAdError)) {
            f.hasSendAdPlay = !0, f.loadAdCompleteTime = ne() - f.loadAdSt;
            var t = L("adplay");
            t.url = f.advertFlvUrl, t.load_time = f.loadAdCompleteTime, t.play_time = f.advertDuration, F(t)
          }
        }, 1e3)
      }
    }

    function ne() {
      return (new Date).getTime()
    }

    function ie() {
      le && clearInterval(le), ce && clearInterval(ce), le = setInterval(function () {
        f.pd++
      }, 1e3), ce = setInterval(function () {
        f.sd++
      }, 1e3)
    }

    function re() {
      ae.isIOS() && ae.isWeiXin() && vrFuc.isIosWechat();
      var e = ae("<div/>");
      e.css({position: "absolute", zIndex: 3, backgroundColor: "black", width: "100%", height: "100%"});
      var t = ae("<img>");
      t.attr("src", f.poster_vr_png), t.css({
        position: "absolute",
        maxHeight: "70%",
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }), e.append(t), ae(".plwrap").append(e), ae(f.video).css("background-color", "black"), e.bind("click", function () {
        e.remove(), ae.playBtn && !f.vod && ae.playBtn.css("backgroundImage", "url(//live.polyv.cn/assets/wimages/playbtn.png)"), f.j2s_resumeVideo(), f.control.css("display", "block"), f.fadeOutControls()
      }), vrFuc.init(), H(f.div, f.video), (ae.isIOS() || ae.isAndroid() && ae.isWeiXin()) && (f.video.style.opacity = "0"), f.vrInit = !0
    }

    function oe() {
      f.useVr = !1, H(f.div, f.video), ae(".vr").remove()
    }

    ae.renderLiveInstallGif(c)
  }, t = function (e) {
    if (!e.vid && "function" == typeof provideLiveInfo) {
      var t = provideLiveInfo();
      e.uid = ae.decode(t).split("/")[0], e.vid = ae.decode(t).split("/")[1]
    }
    var n = {
      flashParams: {
        allowScriptAccess: "always",
        allowFullScreen: "true",
        quality: "high",
        bgcolor: "#ffffff",
        allowFullScreen: "true",
        wmode: ""
      },
      playerWidth: "1.0",
      allowfullscreen: "true",
      domain: "player.polyv.net",
      allowscriptaccess: "always",
      wmode: "Transparent",
      loading_bg_img: "",
      df: "",
      flashvars: {useFastDns: "off"},
      watch_start_time: "0",
      autoplay: "false",
      is_auto_replay: "off",
      width: 600,
      height: 480,
      j2s_getCurrentTime: function () {
        return 0
      },
      j2s_getDuration: function () {
        return 0
      },
      j2s_resumeVideo: function () {
      },
      j2s_pauseVideo: function () {
      },
      j2s_stopVideo: function () {
      },
      j2s_seekVideo: function () {
      },
      destroy: function () {
      },
      videoClass: "plvideo"
    };
    e && ae.extend(n, e), ae.renderLiveFlash(this, "webcam", n);
    var i = e.vid + "camera";
    return document[i]
  }, ae.fn.livePlayer = e, ae.fn.webCamPlayer = t, ae.sendStats = function (e, t, n, i, r, o, a) {
    if (0 < i) {
      (new Date).getTime();
      var s = "rtas.net" + e + n + "0" + i, l = CryptoJS.MD5(s) + "", c = {
        pid: e,
        uid: t,
        cid: n,
        flow: 0,
        pd: i,
        sd: r,
        ts: (new Date).getTime(),
        href: ae.urlSafeBase(window.location.href),
        pn: "MobileLiveHTML5",
        pv: ae.liveBuildMetaData.split("+")[1],
        sign: l
      };
      for (var u in o && (c.session_id = ae.urlSafeBase(o)), ae.paramPlusJson) c[u] = ae.urlSafeBase(ae.paramPlusJson[u]);
      var d = 0 === a.statTime ? "//rtas.videocc.net/v2/view" : "//rtas-2.videocc.net/v2/view";
      ae.get(d, c).fail(function () {
        a.statTime = 1
      })
    }
  }, ae.switchStream = function (e, t) {
    ae.getPlayer(e) && "OBJECT" == ae.getPlayer(e).tagName ? ae.getPlayer(e).j2s_changeStream(t) : ae("#" + e).get(0) && (ae.isNamed = !0, ae.streamName = t, ae.urlProtectedResume(t));
    ae.getPlayer(e + "camera") && "OBJECT" == ae.getPlayer(e + "camera").tagName ? ae.getPlayer(e + "camera").j2s_changeStream(t + "camera") : ae("#" + e + "camera").get(0) && (ae.isNamed = !0, ae.streamName = t, ae.urlProtectedResume(t + "camera"))
  }, ae.getAjaxPromise = function (e) {
    return new Promise(function (t, n) {
      ae.ajax({
        url: e.url, type: "GET", data: e.data || "", dataType: e.dataType || "", success: function (e) {
          t(e)
        }, error: function (e) {
          n(e)
        }
      })
    })
  }
}(polyvObject);
