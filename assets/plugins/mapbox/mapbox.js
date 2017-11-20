(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") { module.exports = f() } else if (typeof define === "function" && define.amd) { define([], f) } else {
        var g;
        if (typeof window !== "undefined") { g = window } else if (typeof global !== "undefined") { g = global } else if (typeof self !== "undefined") { g = self } else { g = this }
        g.mapboxgl = f()
    }
})(function() {
    var define, module, exports;
    return (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); var f = new Error("Cannot find module '" + o + "'"); throw f.code = "MODULE_NOT_FOUND", f }
                var l = n[o] = { exports: {} };
                t[o][0].call(l.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    })({
        1: [function(_dereq_, module, exports) {
            ! function(t, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.glMatrix = n() }(this, function() {
                "use strict";

                function t(t, n, r) {
                    var e = n[0],
                        a = n[1],
                        o = n[2];
                    return t[0] = e * r[0] + a * r[3] + o * r[6], t[1] = e * r[1] + a * r[4] + o * r[7], t[2] = e * r[2] + a * r[5] + o * r[8], t
                }

                function n(t, n, r) {
                    var e = n[0],
                        a = n[1],
                        o = n[2],
                        u = n[3];
                    return t[0] = r[0] * e + r[4] * a + r[8] * o + r[12] * u, t[1] = r[1] * e + r[5] * a + r[9] * o + r[13] * u, t[2] = r[2] * e + r[6] * a + r[10] * o + r[14] * u, t[3] = r[3] * e + r[7] * a + r[11] * o + r[15] * u, t
                }

                function r() { var t = new Float32Array(4); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t }

                function e(t, n, r) {
                    var e = n[0],
                        a = n[1],
                        o = n[2],
                        u = n[3],
                        i = Math.sin(r),
                        c = Math.cos(r);
                    return t[0] = e * c + o * i, t[1] = a * c + u * i, t[2] = e * -i + o * c, t[3] = a * -i + u * c, t
                }

                function a(t, n, r) {
                    var e = n[0],
                        a = n[1],
                        o = n[2],
                        u = n[3],
                        i = r[0],
                        c = r[1];
                    return t[0] = e * i, t[1] = a * i, t[2] = o * c, t[3] = u * c, t
                }

                function o() { var t = new Float32Array(9); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t }

                function u(t, n) {
                    var r = Math.sin(n),
                        e = Math.cos(n);
                    return t[0] = e, t[1] = r, t[2] = 0, t[3] = -r, t[4] = e, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
                }

                function i() { var t = new Float32Array(16); return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t }

                function c(t) { return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t }

                function f(t, n) {
                    var r = n[0],
                        e = n[1],
                        a = n[2],
                        o = n[3],
                        u = n[4],
                        i = n[5],
                        c = n[6],
                        f = n[7],
                        v = n[8],
                        s = n[9],
                        l = n[10],
                        M = n[11],
                        h = n[12],
                        m = n[13],
                        y = n[14],
                        d = n[15],
                        p = r * i - e * u,
                        w = r * c - a * u,
                        A = r * f - o * u,
                        F = e * c - a * i,
                        x = e * f - o * i,
                        b = a * f - o * c,
                        g = v * m - s * h,
                        j = v * y - l * h,
                        R = v * d - M * h,
                        X = s * y - l * m,
                        Z = s * d - M * m,
                        k = l * d - M * y,
                        q = p * k - w * Z + A * X + F * R - x * j + b * g;
                    return q ? (q = 1 / q, t[0] = (i * k - c * Z + f * X) * q, t[1] = (a * Z - e * k - o * X) * q, t[2] = (m * b - y * x + d * F) * q, t[3] = (l * x - s * b - M * F) * q, t[4] = (c * R - u * k - f * j) * q, t[5] = (r * k - a * R + o * j) * q, t[6] = (y * A - h * b - d * w) * q, t[7] = (v * b - l * A + M * w) * q, t[8] = (u * Z - i * R + f * g) * q, t[9] = (e * R - r * Z - o * g) * q, t[10] = (h * x - m * A + d * p) * q, t[11] = (s * A - v * x - M * p) * q, t[12] = (i * j - u * X - c * g) * q, t[13] = (r * X - e * j + a * g) * q, t[14] = (m * w - h * F - y * p) * q, t[15] = (v * F - s * w + l * p) * q, t) : null
                }

                function v(t, n, r) {
                    var e = n[0],
                        a = n[1],
                        o = n[2],
                        u = n[3],
                        i = n[4],
                        c = n[5],
                        f = n[6],
                        v = n[7],
                        s = n[8],
                        l = n[9],
                        M = n[10],
                        h = n[11],
                        m = n[12],
                        y = n[13],
                        d = n[14],
                        p = n[15],
                        w = r[0],
                        A = r[1],
                        F = r[2],
                        x = r[3];
                    return t[0] = w * e + A * i + F * s + x * m, t[1] = w * a + A * c + F * l + x * y, t[2] = w * o + A * f + F * M + x * d, t[3] = w * u + A * v + F * h + x * p, w = r[4], A = r[5], F = r[6], x = r[7], t[4] = w * e + A * i + F * s + x * m, t[5] = w * a + A * c + F * l + x * y, t[6] = w * o + A * f + F * M + x * d, t[7] = w * u + A * v + F * h + x * p, w = r[8], A = r[9], F = r[10], x = r[11], t[8] = w * e + A * i + F * s + x * m, t[9] = w * a + A * c + F * l + x * y, t[10] = w * o + A * f + F * M + x * d, t[11] = w * u + A * v + F * h + x * p, w = r[12], A = r[13], F = r[14], x = r[15], t[12] = w * e + A * i + F * s + x * m, t[13] = w * a + A * c + F * l + x * y, t[14] = w * o + A * f + F * M + x * d, t[15] = w * u + A * v + F * h + x * p, t
                }

                function s(t, n, r) {
                    var e, a, o, u, i, c, f, v, s, l, M, h, m = r[0],
                        y = r[1],
                        d = r[2];
                    return n === t ? (t[12] = n[0] * m + n[4] * y + n[8] * d + n[12], t[13] = n[1] * m + n[5] * y + n[9] * d + n[13], t[14] = n[2] * m + n[6] * y + n[10] * d + n[14], t[15] = n[3] * m + n[7] * y + n[11] * d + n[15]) : (e = n[0], a = n[1], o = n[2], u = n[3], i = n[4], c = n[5], f = n[6], v = n[7], s = n[8], l = n[9], M = n[10], h = n[11], t[0] = e, t[1] = a, t[2] = o, t[3] = u, t[4] = i, t[5] = c, t[6] = f, t[7] = v, t[8] = s, t[9] = l, t[10] = M, t[11] = h, t[12] = e * m + i * y + s * d + n[12], t[13] = a * m + c * y + l * d + n[13], t[14] = o * m + f * y + M * d + n[14], t[15] = u * m + v * y + h * d + n[15]), t
                }

                function l(t, n, r) {
                    var e = r[0],
                        a = r[1],
                        o = r[2];
                    return t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t[3] = n[3] * e, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = n[11] * o, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t
                }

                function M(t, n, r) {
                    var e = Math.sin(r),
                        a = Math.cos(r),
                        o = n[4],
                        u = n[5],
                        i = n[6],
                        c = n[7],
                        f = n[8],
                        v = n[9],
                        s = n[10],
                        l = n[11];
                    return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = o * a + f * e, t[5] = u * a + v * e, t[6] = i * a + s * e, t[7] = c * a + l * e, t[8] = f * a - o * e, t[9] = v * a - u * e, t[10] = s * a - i * e, t[11] = l * a - c * e, t
                }

                function h(t, n, r) {
                    var e = Math.sin(r),
                        a = Math.cos(r),
                        o = n[0],
                        u = n[1],
                        i = n[2],
                        c = n[3],
                        f = n[4],
                        v = n[5],
                        s = n[6],
                        l = n[7];
                    return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = o * a + f * e, t[1] = u * a + v * e, t[2] = i * a + s * e, t[3] = c * a + l * e, t[4] = f * a - o * e, t[5] = v * a - u * e, t[6] = s * a - i * e, t[7] = l * a - c * e, t
                }

                function m(t, n, r, e, a) {
                    var o = 1 / Math.tan(n / 2),
                        u = 1 / (e - a);
                    return t[0] = o / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (a + e) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * a * e * u, t[15] = 0, t
                }

                function y(t, n, r, e, a, o, u) {
                    var i = 1 / (n - r),
                        c = 1 / (e - a),
                        f = 1 / (o - u);
                    return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (n + r) * i, t[13] = (a + e) * c, t[14] = (u + o) * f, t[15] = 1, t
                }(function() {
                    var t = new Float32Array(3);
                    t[0] = 0, t[1] = 0, t[2] = 0
                })(),
                function() {
                    var t = new Float32Array(4);
                    t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0
                }();
                return { vec3: { transformMat3: t }, vec4: { transformMat4: n }, mat2: { create: r, rotate: e, scale: a }, mat3: { create: o, fromRotation: u }, mat4: { create: i, identity: c, translate: s, scale: l, multiply: v, perspective: m, rotateX: M, rotateZ: h, invert: f, ortho: y } }
            });
        }, {}],
        2: [function(_dereq_, module, exports) {
            "use strict";

            function Point(t, n) { this.x = t, this.y = n }
            module.exports = Point, Point.prototype = {
                clone: function() { return new Point(this.x, this.y) },
                add: function(t) { return this.clone()._add(t) },
                sub: function(t) { return this.clone()._sub(t) },
                multByPoint: function(t) { return this.clone()._multByPoint(t) },
                divByPoint: function(t) { return this.clone()._divByPoint(t) },
                mult: function(t) { return this.clone()._mult(t) },
                div: function(t) { return this.clone()._div(t) },
                rotate: function(t) { return this.clone()._rotate(t) },
                rotateAround: function(t, n) { return this.clone()._rotateAround(t, n) },
                matMult: function(t) { return this.clone()._matMult(t) },
                unit: function() { return this.clone()._unit() },
                perp: function() { return this.clone()._perp() },
                round: function() { return this.clone()._round() },
                mag: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
                equals: function(t) { return this.x === t.x && this.y === t.y },
                dist: function(t) { return Math.sqrt(this.distSqr(t)) },
                distSqr: function(t) {
                    var n = t.x - this.x,
                        i = t.y - this.y;
                    return n * n + i * i
                },
                angle: function() { return Math.atan2(this.y, this.x) },
                angleTo: function(t) { return Math.atan2(this.y - t.y, this.x - t.x) },
                angleWith: function(t) { return this.angleWithSep(t.x, t.y) },
                angleWithSep: function(t, n) { return Math.atan2(this.x * n - this.y * t, this.x * t + this.y * n) },
                _matMult: function(t) {
                    var n = t[0] * this.x + t[1] * this.y,
                        i = t[2] * this.x + t[3] * this.y;
                    return this.x = n, this.y = i, this
                },
                _add: function(t) { return this.x += t.x, this.y += t.y, this },
                _sub: function(t) { return this.x -= t.x, this.y -= t.y, this },
                _mult: function(t) { return this.x *= t, this.y *= t, this },
                _div: function(t) { return this.x /= t, this.y /= t, this },
                _multByPoint: function(t) { return this.x *= t.x, this.y *= t.y, this },
                _divByPoint: function(t) { return this.x /= t.x, this.y /= t.y, this },
                _unit: function() { return this._div(this.mag()), this },
                _perp: function() { var t = this.y; return this.y = this.x, this.x = -t, this },
                _rotate: function(t) {
                    var n = Math.cos(t),
                        i = Math.sin(t),
                        s = n * this.x - i * this.y,
                        r = i * this.x + n * this.y;
                    return this.x = s, this.y = r, this
                },
                _rotateAround: function(t, n) {
                    var i = Math.cos(t),
                        s = Math.sin(t),
                        r = n.x + i * (this.x - n.x) - s * (this.y - n.y),
                        h = n.y + s * (this.x - n.x) + i * (this.y - n.y);
                    return this.x = r, this.y = h, this
                },
                _round: function() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this }
            }, Point.convert = function(t) { return t instanceof Point ? t : Array.isArray(t) ? new Point(t[0], t[1]) : t };
        }, {}],
        3: [function(_dereq_, module, exports) {
            ! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ShelfPack = e() }(this, function() {
                function t(t, e, i) { i = i || {}, this.w = t || 64, this.h = e || 64, this.autoResize = !!i.autoResize, this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0 }

                function e(t, e, i) { this.x = 0, this.y = t, this.w = this.free = e, this.h = i }

                function i(t, e, i, s, h, n, r) { this.id = t, this.x = e, this.y = i, this.w = s, this.h = h, this.maxw = n || s, this.maxh = r || h, this.refcount = 0 }
                return t.prototype.pack = function(t, e) {
                    t = [].concat(t), e = e || {};
                    for (var i, s, h, n, r = [], f = 0; f < t.length; f++)
                        if (i = t[f].w || t[f].width, s = t[f].h || t[f].height, h = t[f].id, i && s) {
                            if (!(n = this.packOne(i, s, h))) continue;
                            e.inPlace && (t[f].x = n.x, t[f].y = n.y, t[f].id = n.id), r.push(n)
                        }
                    return this.shrink(), r
                }, t.prototype.packOne = function(t, i, s) {
                    var h, n, r, f, o = { freebin: -1, shelf: -1, waste: 1 / 0 },
                        a = 0;
                    if ("string" == typeof s || "number" == typeof s) { if (h = this.getBin(s)) return this.ref(h), h; "number" == typeof s && (this.maxId = Math.max(s, this.maxId)) } else s = ++this.maxId;
                    for (f = 0; f < this.freebins.length; f++) {
                        if (h = this.freebins[f], i === h.maxh && t === h.maxw) return this.allocFreebin(f, t, i, s);
                        i > h.maxh || t > h.maxw || i <= h.maxh && t <= h.maxw && (r = h.maxw * h.maxh - t * i) < o.waste && (o.waste = r, o.freebin = f)
                    }
                    for (f = 0; f < this.shelves.length; f++)
                        if (n = this.shelves[f], a += n.h, !(t > n.free)) {
                            if (i === n.h) return this.allocShelf(f, t, i, s);
                            i > n.h || i < n.h && (r = (n.h - i) * t) < o.waste && (o.freebin = -1, o.waste = r, o.shelf = f)
                        }
                    if (-1 !== o.freebin) return this.allocFreebin(o.freebin, t, i, s);
                    if (-1 !== o.shelf) return this.allocShelf(o.shelf, t, i, s);
                    if (i <= this.h - a && t <= this.w) return n = new e(a, this.w, i), this.allocShelf(this.shelves.push(n) - 1, t, i, s);
                    if (this.autoResize) { var u, l, c, p; return u = l = this.h, c = p = this.w, (c <= u || t > c) && (p = 2 * Math.max(t, c)), (u < c || i > u) && (l = 2 * Math.max(i, u)), this.resize(p, l), this.packOne(t, i, s) }
                    return null
                }, t.prototype.allocFreebin = function(t, e, i, s) { var h = this.freebins.splice(t, 1)[0]; return h.id = s, h.w = e, h.h = i, h.refcount = 0, this.bins[s] = h, this.ref(h), h }, t.prototype.allocShelf = function(t, e, i, s) {
                    var h = this.shelves[t],
                        n = h.alloc(e, i, s);
                    return this.bins[s] = n, this.ref(n), n
                }, t.prototype.shrink = function() {
                    if (this.shelves.length > 0) {
                        for (var t = 0, e = 0, i = 0; i < this.shelves.length; i++) {
                            var s = this.shelves[i];
                            e += s.h, t = Math.max(s.w - s.free, t)
                        }
                        this.resize(t, e)
                    }
                }, t.prototype.getBin = function(t) { return this.bins[t] }, t.prototype.ref = function(t) {
                    if (1 == ++t.refcount) {
                        var e = t.h;
                        this.stats[e] = 1 + (0 | this.stats[e])
                    }
                    return t.refcount
                }, t.prototype.unref = function(t) { return 0 === t.refcount ? 0 : (0 == --t.refcount && (this.stats[t.h]--, delete this.bins[t.id], this.freebins.push(t)), t.refcount) }, t.prototype.clear = function() { this.shelves = [], this.freebins = [], this.stats = {}, this.bins = {}, this.maxId = 0 }, t.prototype.resize = function(t, e) { this.w = t, this.h = e; for (var i = 0; i < this.shelves.length; i++) this.shelves[i].resize(t); return !0 }, e.prototype.alloc = function(t, e, s) { if (t > this.free || e > this.h) return null; var h = this.x; return this.x += t, this.free -= t, new i(s, h, this.y, t, e, t, this.h) }, e.prototype.resize = function(t) { return this.free += t - this.w, this.w = t, !0 }, t
            });
        }, {}],
        4: [function(_dereq_, module, exports) {
            "use strict";

            function TinySDF(t, i, s, e, h, r) {
                this.fontSize = t || 24, this.buffer = void 0 === i ? 3 : i, this.cutoff = e || .25, this.fontFamily = h || "sans-serif", this.fontWeight = r || "normal", this.radius = s || 8;
                var a = this.size = this.fontSize + 2 * this.buffer;
                this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = a, this.ctx = this.canvas.getContext("2d"), this.ctx.font = this.fontWeight + " " + this.fontSize + "px " + this.fontFamily, this.ctx.textBaseline = "middle", this.ctx.fillStyle = "black", this.gridOuter = new Float64Array(a * a), this.gridInner = new Float64Array(a * a), this.f = new Float64Array(a), this.d = new Float64Array(a), this.z = new Float64Array(a + 1), this.v = new Int16Array(a), this.middle = Math.round(a / 2 * (navigator.userAgent.indexOf("Gecko/") >= 0 ? 1.2 : 1))
            }

            function edt(t, i, s, e, h, r, a) { for (var n = 0; n < i; n++) { for (var o = 0; o < s; o++) e[o] = t[o * i + n]; for (edt1d(e, h, r, a, s), o = 0; o < s; o++) t[o * i + n] = h[o] } for (o = 0; o < s; o++) { for (n = 0; n < i; n++) e[n] = t[o * i + n]; for (edt1d(e, h, r, a, i), n = 0; n < i; n++) t[o * i + n] = Math.sqrt(h[n]) } }

            function edt1d(t, i, s, e, h) {
                s[0] = 0, e[0] = -INF, e[1] = +INF;
                for (var r = 1, a = 0; r < h; r++) {
                    for (var n = (t[r] + r * r - (t[s[a]] + s[a] * s[a])) / (2 * r - 2 * s[a]); n <= e[a];) a--, n = (t[r] + r * r - (t[s[a]] + s[a] * s[a])) / (2 * r - 2 * s[a]);
                    a++, s[a] = r, e[a] = n, e[a + 1] = +INF
                }
                for (r = 0, a = 0; r < h; r++) {
                    for (; e[a + 1] < r;) a++;
                    i[r] = (r - s[a]) * (r - s[a]) + t[s[a]]
                }
            }
            module.exports = TinySDF;
            var INF = 1e20;
            TinySDF.prototype.draw = function(t) {
                this.ctx.clearRect(0, 0, this.size, this.size), this.ctx.fillText(t, this.buffer, this.middle);
                for (var i = this.ctx.getImageData(0, 0, this.size, this.size), s = new Uint8ClampedArray(this.size * this.size), e = 0; e < this.size * this.size; e++) {
                    var h = i.data[4 * e + 3] / 255;
                    this.gridOuter[e] = 1 === h ? 0 : 0 === h ? INF : Math.pow(Math.max(0, .5 - h), 2), this.gridInner[e] = 1 === h ? INF : 0 === h ? 0 : Math.pow(Math.max(0, h - .5), 2)
                }
                for (edt(this.gridOuter, this.size, this.size, this.f, this.d, this.v, this.z), edt(this.gridInner, this.size, this.size, this.f, this.d, this.v, this.z), e = 0; e < this.size * this.size; e++) {
                    var r = this.gridOuter[e] - this.gridInner[e];
                    s[e] = Math.max(0, Math.min(255, Math.round(255 - 255 * (r / this.radius + this.cutoff))))
                }
                return s
            };
        }, {}],
        5: [function(_dereq_, module, exports) {
            function UnitBezier(t, i, e, r) { this.cx = 3 * t, this.bx = 3 * (e - t) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * i, this.by = 3 * (r - i) - this.cy, this.ay = 1 - this.cy - this.by, this.p1x = t, this.p1y = r, this.p2x = e, this.p2y = r }
            module.exports = UnitBezier, UnitBezier.prototype.sampleCurveX = function(t) { return ((this.ax * t + this.bx) * t + this.cx) * t }, UnitBezier.prototype.sampleCurveY = function(t) { return ((this.ay * t + this.by) * t + this.cy) * t }, UnitBezier.prototype.sampleCurveDerivativeX = function(t) { return (3 * this.ax * t + 2 * this.bx) * t + this.cx }, UnitBezier.prototype.solveCurveX = function(t, i) {
                void 0 === i && (i = 1e-6);
                var e, r, s, h, n;
                for (s = t, n = 0; n < 8; n++) {
                    if (h = this.sampleCurveX(s) - t, Math.abs(h) < i) return s;
                    var u = this.sampleCurveDerivativeX(s);
                    if (Math.abs(u) < 1e-6) break;
                    s -= h / u
                }
                if (e = 0, r = 1, (s = t) < e) return e;
                if (s > r) return r;
                for (; e < r;) {
                    if (h = this.sampleCurveX(s), Math.abs(h - t) < i) return s;
                    t > h ? e = s : r = s, s = .5 * (r - e) + e
                }
                return s
            }, UnitBezier.prototype.solve = function(t, i) { return this.sampleCurveY(this.solveCurveX(t, i)) };
        }, {}],
        6: [function(_dereq_, module, exports) {
            module.exports.VectorTile = _dereq_("./lib/vectortile.js"), module.exports.VectorTileFeature = _dereq_("./lib/vectortilefeature.js"), module.exports.VectorTileLayer = _dereq_("./lib/vectortilelayer.js");
        }, { "./lib/vectortile.js": 7, "./lib/vectortilefeature.js": 8, "./lib/vectortilelayer.js": 9 }],
        7: [function(_dereq_, module, exports) {
            "use strict";

            function VectorTile(e, r) { this.layers = e.readFields(readTile, {}, r) }

            function readTile(e, r, i) {
                if (3 === e) {
                    var t = new VectorTileLayer(i, i.readVarint() + i.pos);
                    t.length && (r[t.name] = t)
                }
            }
            var VectorTileLayer = _dereq_("./vectortilelayer");
            module.exports = VectorTile;
        }, { "./vectortilelayer": 9 }],
        8: [function(_dereq_, module, exports) {
            "use strict";

            function VectorTileFeature(e, t, r, a, i) { this.properties = {}, this.extent = r, this.type = 0, this._pbf = e, this._geometry = -1, this._keys = a, this._values = i, e.readFields(readFeature, this, t) }

            function readFeature(e, t, r) { 1 == e ? t.id = r.readVarint() : 2 == e ? readTag(r, t) : 3 == e ? t.type = r.readVarint() : 4 == e && (t._geometry = r.pos) }

            function readTag(e, t) {
                for (var r = e.readVarint() + e.pos; e.pos < r;) {
                    var a = t._keys[e.readVarint()],
                        i = t._values[e.readVarint()];
                    t.properties[a] = i
                }
            }

            function classifyRings(e) {
                var t = e.length;
                if (t <= 1) return [e];
                for (var r, a, i = [], o = 0; o < t; o++) {
                    var n = signedArea(e[o]);
                    0 !== n && (void 0 === a && (a = n < 0), a === n < 0 ? (r && i.push(r), r = [e[o]]) : r.push(e[o]))
                }
                return r && i.push(r), i
            }

            function signedArea(e) { for (var t, r, a = 0, i = 0, o = e.length, n = o - 1; i < o; n = i++) t = e[i], r = e[n], a += (r.x - t.x) * (t.y + r.y); return a }
            var Point = _dereq_("@mapbox/point-geometry");
            module.exports = VectorTileFeature, VectorTileFeature.types = ["Unknown", "Point", "LineString", "Polygon"], VectorTileFeature.prototype.loadGeometry = function() {
                var e = this._pbf;
                e.pos = this._geometry;
                for (var t, r = e.readVarint() + e.pos, a = 1, i = 0, o = 0, n = 0, s = []; e.pos < r;) {
                    if (!i) {
                        var p = e.readVarint();
                        a = 7 & p, i = p >> 3
                    }
                    if (i--, 1 === a || 2 === a) o += e.readSVarint(), n += e.readSVarint(), 1 === a && (t && s.push(t), t = []), t.push(new Point(o, n));
                    else {
                        if (7 !== a) throw new Error("unknown command " + a);
                        t && t.push(t[0].clone())
                    }
                }
                return t && s.push(t), s
            }, VectorTileFeature.prototype.bbox = function() {
                var e = this._pbf;
                e.pos = this._geometry;
                for (var t = e.readVarint() + e.pos, r = 1, a = 0, i = 0, o = 0, n = 1 / 0, s = -1 / 0, p = 1 / 0, h = -1 / 0; e.pos < t;) {
                    if (!a) {
                        var u = e.readVarint();
                        r = 7 & u, a = u >> 3
                    }
                    if (a--, 1 === r || 2 === r) i += e.readSVarint(), o += e.readSVarint(), i < n && (n = i), i > s && (s = i), o < p && (p = o), o > h && (h = o);
                    else if (7 !== r) throw new Error("unknown command " + r)
                }
                return [n, p, s, h]
            }, VectorTileFeature.prototype.toGeoJSON = function(e, t, r) {
                function a(e) {
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = 180 - 360 * (r.y + p) / n;
                        e[t] = [360 * (r.x + s) / n - 180, 360 / Math.PI * Math.atan(Math.exp(a * Math.PI / 180)) - 90]
                    }
                }
                var i, o, n = this.extent * Math.pow(2, r),
                    s = this.extent * e,
                    p = this.extent * t,
                    h = this.loadGeometry(),
                    u = VectorTileFeature.types[this.type];
                switch (this.type) {
                    case 1:
                        var d = [];
                        for (i = 0; i < h.length; i++) d[i] = h[i][0];
                        h = d, a(h);
                        break;
                    case 2:
                        for (i = 0; i < h.length; i++) a(h[i]);
                        break;
                    case 3:
                        for (h = classifyRings(h), i = 0; i < h.length; i++)
                            for (o = 0; o < h[i].length; o++) a(h[i][o])
                }
                1 === h.length ? h = h[0] : u = "Multi" + u;
                var f = { type: "Feature", geometry: { type: u, coordinates: h }, properties: this.properties };
                return "id" in this && (f.id = this.id), f
            };
        }, { "@mapbox/point-geometry": 2 }],
        9: [function(_dereq_, module, exports) {
            "use strict";

            function VectorTileLayer(e, t) { this.version = 1, this.name = null, this.extent = 4096, this.length = 0, this._pbf = e, this._keys = [], this._values = [], this._features = [], e.readFields(readLayer, this, t), this.length = this._features.length }

            function readLayer(e, t, r) { 15 === e ? t.version = r.readVarint() : 1 === e ? t.name = r.readString() : 5 === e ? t.extent = r.readVarint() : 2 === e ? t._features.push(r.pos) : 3 === e ? t._keys.push(r.readString()) : 4 === e && t._values.push(readValueMessage(r)) }

            function readValueMessage(e) {
                for (var t = null, r = e.readVarint() + e.pos; e.pos < r;) {
                    var a = e.readVarint() >> 3;
                    t = 1 === a ? e.readString() : 2 === a ? e.readFloat() : 3 === a ? e.readDouble() : 4 === a ? e.readVarint64() : 5 === a ? e.readVarint() : 6 === a ? e.readSVarint() : 7 === a ? e.readBoolean() : null
                }
                return t
            }
            var VectorTileFeature = _dereq_("./vectortilefeature.js");
            module.exports = VectorTileLayer, VectorTileLayer.prototype.feature = function(e) {
                if (e < 0 || e >= this._features.length) throw new Error("feature index out of bounds");
                this._pbf.pos = this._features[e];
                var t = this._pbf.readVarint() + this._pbf.pos;
                return new VectorTileFeature(this._pbf, t, this.extent, this._keys, this._values)
            };
        }, { "./vectortilefeature.js": 8 }],
        10: [function(_dereq_, module, exports) {
            ! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.WhooTS = e.WhooTS || {}) }(this, function(e) {
                function t(e, t, r, n, i, s) { return s = s || {}, e + "?" + ["bbox=" + o(r, n, i), "format=" + (s.format || "image/png"), "service=" + (s.service || "WMS"), "version=" + (s.version || "1.1.1"), "request=" + (s.request || "GetMap"), "srs=" + (s.srs || "EPSG:3857"), "width=" + (s.width || 256), "height=" + (s.height || 256), "layers=" + t].join("&") }

                function o(e, t, o) {
                    t = Math.pow(2, o) - t - 1;
                    var n = r(256 * e, 256 * t, o),
                        i = r(256 * (e + 1), 256 * (t + 1), o);
                    return n[0] + "," + n[1] + "," + i[0] + "," + i[1]
                }

                function r(e, t, o) { var r = 2 * Math.PI * 6378137 / 256 / Math.pow(2, o); return [e * r - 2 * Math.PI * 6378137 / 2, t * r - 2 * Math.PI * 6378137 / 2] }
                e.getURL = t, e.getTileBBox = o, e.getMercCoords = r, Object.defineProperty(e, "__esModule", { value: !0 })
            });
        }, {}],
        11: [function(_dereq_, module, exports) {
            function clamp_css_byte(e) { return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e }

            function clamp_css_float(e) { return e < 0 ? 0 : e > 1 ? 1 : e }

            function parse_css_int(e) { return clamp_css_byte("%" === e[e.length - 1] ? parseFloat(e) / 100 * 255 : parseInt(e)) }

            function parse_css_float(e) { return clamp_css_float("%" === e[e.length - 1] ? parseFloat(e) / 100 : parseFloat(e)) }

            function css_hue_to_rgb(e, r, l) { return l < 0 ? l += 1 : l > 1 && (l -= 1), 6 * l < 1 ? e + (r - e) * l * 6 : 2 * l < 1 ? r : 3 * l < 2 ? e + (r - e) * (2 / 3 - l) * 6 : e }

            function parseCSSColor(e) {
                var r = e.replace(/ /g, "").toLowerCase();
                if (r in kCSSColorTable) return kCSSColorTable[r].slice();
                if ("#" === r[0]) { if (4 === r.length) { var l = parseInt(r.substr(1), 16); return l >= 0 && l <= 4095 ? [(3840 & l) >> 4 | (3840 & l) >> 8, 240 & l | (240 & l) >> 4, 15 & l | (15 & l) << 4, 1] : null } if (7 === r.length) { var l = parseInt(r.substr(1), 16); return l >= 0 && l <= 16777215 ? [(16711680 & l) >> 16, (65280 & l) >> 8, 255 & l, 1] : null } return null }
                var a = r.indexOf("("),
                    t = r.indexOf(")");
                if (-1 !== a && t + 1 === r.length) {
                    var n = r.substr(0, a),
                        s = r.substr(a + 1, t - (a + 1)).split(","),
                        o = 1;
                    switch (n) {
                        case "rgba":
                            if (4 !== s.length) return null;
                            o = parse_css_float(s.pop());
                        case "rgb":
                            return 3 !== s.length ? null : [parse_css_int(s[0]), parse_css_int(s[1]), parse_css_int(s[2]), o];
                        case "hsla":
                            if (4 !== s.length) return null;
                            o = parse_css_float(s.pop());
                        case "hsl":
                            if (3 !== s.length) return null;
                            var i = (parseFloat(s[0]) % 360 + 360) % 360 / 360,
                                u = parse_css_float(s[1]),
                                g = parse_css_float(s[2]),
                                d = g <= .5 ? g * (u + 1) : g + u - g * u,
                                c = 2 * g - d;
                            return [clamp_css_byte(255 * css_hue_to_rgb(c, d, i + 1 / 3)), clamp_css_byte(255 * css_hue_to_rgb(c, d, i)), clamp_css_byte(255 * css_hue_to_rgb(c, d, i - 1 / 3)), o];
                        default:
                            return null
                    }
                }
                return null
            }
            var kCSSColorTable = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255, 1], antiquewhite: [250, 235, 215, 1], aqua: [0, 255, 255, 1], aquamarine: [127, 255, 212, 1], azure: [240, 255, 255, 1], beige: [245, 245, 220, 1], bisque: [255, 228, 196, 1], black: [0, 0, 0, 1], blanchedalmond: [255, 235, 205, 1], blue: [0, 0, 255, 1], blueviolet: [138, 43, 226, 1], brown: [165, 42, 42, 1], burlywood: [222, 184, 135, 1], cadetblue: [95, 158, 160, 1], chartreuse: [127, 255, 0, 1], chocolate: [210, 105, 30, 1], coral: [255, 127, 80, 1], cornflowerblue: [100, 149, 237, 1], cornsilk: [255, 248, 220, 1], crimson: [220, 20, 60, 1], cyan: [0, 255, 255, 1], darkblue: [0, 0, 139, 1], darkcyan: [0, 139, 139, 1], darkgoldenrod: [184, 134, 11, 1], darkgray: [169, 169, 169, 1], darkgreen: [0, 100, 0, 1], darkgrey: [169, 169, 169, 1], darkkhaki: [189, 183, 107, 1], darkmagenta: [139, 0, 139, 1], darkolivegreen: [85, 107, 47, 1], darkorange: [255, 140, 0, 1], darkorchid: [153, 50, 204, 1], darkred: [139, 0, 0, 1], darksalmon: [233, 150, 122, 1], darkseagreen: [143, 188, 143, 1], darkslateblue: [72, 61, 139, 1], darkslategray: [47, 79, 79, 1], darkslategrey: [47, 79, 79, 1], darkturquoise: [0, 206, 209, 1], darkviolet: [148, 0, 211, 1], deeppink: [255, 20, 147, 1], deepskyblue: [0, 191, 255, 1], dimgray: [105, 105, 105, 1], dimgrey: [105, 105, 105, 1], dodgerblue: [30, 144, 255, 1], firebrick: [178, 34, 34, 1], floralwhite: [255, 250, 240, 1], forestgreen: [34, 139, 34, 1], fuchsia: [255, 0, 255, 1], gainsboro: [220, 220, 220, 1], ghostwhite: [248, 248, 255, 1], gold: [255, 215, 0, 1], goldenrod: [218, 165, 32, 1], gray: [128, 128, 128, 1], green: [0, 128, 0, 1], greenyellow: [173, 255, 47, 1], grey: [128, 128, 128, 1], honeydew: [240, 255, 240, 1], hotpink: [255, 105, 180, 1], indianred: [205, 92, 92, 1], indigo: [75, 0, 130, 1], ivory: [255, 255, 240, 1], khaki: [240, 230, 140, 1], lavender: [230, 230, 250, 1], lavenderblush: [255, 240, 245, 1], lawngreen: [124, 252, 0, 1], lemonchiffon: [255, 250, 205, 1], lightblue: [173, 216, 230, 1], lightcoral: [240, 128, 128, 1], lightcyan: [224, 255, 255, 1], lightgoldenrodyellow: [250, 250, 210, 1], lightgray: [211, 211, 211, 1], lightgreen: [144, 238, 144, 1], lightgrey: [211, 211, 211, 1], lightpink: [255, 182, 193, 1], lightsalmon: [255, 160, 122, 1], lightseagreen: [32, 178, 170, 1], lightskyblue: [135, 206, 250, 1], lightslategray: [119, 136, 153, 1], lightslategrey: [119, 136, 153, 1], lightsteelblue: [176, 196, 222, 1], lightyellow: [255, 255, 224, 1], lime: [0, 255, 0, 1], limegreen: [50, 205, 50, 1], linen: [250, 240, 230, 1], magenta: [255, 0, 255, 1], maroon: [128, 0, 0, 1], mediumaquamarine: [102, 205, 170, 1], mediumblue: [0, 0, 205, 1], mediumorchid: [186, 85, 211, 1], mediumpurple: [147, 112, 219, 1], mediumseagreen: [60, 179, 113, 1], mediumslateblue: [123, 104, 238, 1], mediumspringgreen: [0, 250, 154, 1], mediumturquoise: [72, 209, 204, 1], mediumvioletred: [199, 21, 133, 1], midnightblue: [25, 25, 112, 1], mintcream: [245, 255, 250, 1], mistyrose: [255, 228, 225, 1], moccasin: [255, 228, 181, 1], navajowhite: [255, 222, 173, 1], navy: [0, 0, 128, 1], oldlace: [253, 245, 230, 1], olive: [128, 128, 0, 1], olivedrab: [107, 142, 35, 1], orange: [255, 165, 0, 1], orangered: [255, 69, 0, 1], orchid: [218, 112, 214, 1], palegoldenrod: [238, 232, 170, 1], palegreen: [152, 251, 152, 1], paleturquoise: [175, 238, 238, 1], palevioletred: [219, 112, 147, 1], papayawhip: [255, 239, 213, 1], peachpuff: [255, 218, 185, 1], peru: [205, 133, 63, 1], pink: [255, 192, 203, 1], plum: [221, 160, 221, 1], powderblue: [176, 224, 230, 1], purple: [128, 0, 128, 1], rebeccapurple: [102, 51, 153, 1], red: [255, 0, 0, 1], rosybrown: [188, 143, 143, 1], royalblue: [65, 105, 225, 1], saddlebrown: [139, 69, 19, 1], salmon: [250, 128, 114, 1], sandybrown: [244, 164, 96, 1], seagreen: [46, 139, 87, 1], seashell: [255, 245, 238, 1], sienna: [160, 82, 45, 1], silver: [192, 192, 192, 1], skyblue: [135, 206, 235, 1], slateblue: [106, 90, 205, 1], slategray: [112, 128, 144, 1], slategrey: [112, 128, 144, 1], snow: [255, 250, 250, 1], springgreen: [0, 255, 127, 1], steelblue: [70, 130, 180, 1], tan: [210, 180, 140, 1], teal: [0, 128, 128, 1], thistle: [216, 191, 216, 1], tomato: [255, 99, 71, 1], turquoise: [64, 224, 208, 1], violet: [238, 130, 238, 1], wheat: [245, 222, 179, 1], white: [255, 255, 255, 1], whitesmoke: [245, 245, 245, 1], yellow: [255, 255, 0, 1], yellowgreen: [154, 205, 50, 1] };
            try { exports.parseCSSColor = parseCSSColor } catch (e) {}
        }, {}],
        12: [function(_dereq_, module, exports) {
            "use strict";

            function earcut(e, n, r) {
                r = r || 2;
                var t = n && n.length,
                    i = t ? n[0] * r : e.length,
                    x = linkedList(e, 0, i, r, !0),
                    a = [];
                if (!x) return a;
                var o, l, u, s, v, f, y;
                if (t && (x = eliminateHoles(e, n, x, r)), e.length > 80 * r) {
                    o = u = e[0], l = s = e[1];
                    for (var d = r; d < i; d += r) v = e[d], f = e[d + 1], v < o && (o = v), f < l && (l = f), v > u && (u = v), f > s && (s = f);
                    y = Math.max(u - o, s - l)
                }
                return earcutLinked(x, a, r, o, l, y), a
            }

            function linkedList(e, n, r, t, i) {
                var x, a;
                if (i === signedArea(e, n, r, t) > 0)
                    for (x = n; x < r; x += t) a = insertNode(x, e[x], e[x + 1], a);
                else
                    for (x = r - t; x >= n; x -= t) a = insertNode(x, e[x], e[x + 1], a);
                return a && equals(a, a.next) && (removeNode(a), a = a.next), a
            }

            function filterPoints(e, n) {
                if (!e) return e;
                n || (n = e);
                var r, t = e;
                do {
                    if (r = !1, t.steiner || !equals(t, t.next) && 0 !== area(t.prev, t, t.next)) t = t.next;
                    else {
                        if (removeNode(t), (t = n = t.prev) === t.next) return null;
                        r = !0
                    }
                } while (r || t !== n);
                return n
            }

            function earcutLinked(e, n, r, t, i, x, a) {
                if (e) {
                    !a && x && indexCurve(e, t, i, x);
                    for (var o, l, u = e; e.prev !== e.next;)
                        if (o = e.prev, l = e.next, x ? isEarHashed(e, t, i, x) : isEar(e)) n.push(o.i / r), n.push(e.i / r), n.push(l.i / r), removeNode(e), e = l.next, u = l.next;
                        else if ((e = l) === u) { a ? 1 === a ? (e = cureLocalIntersections(e, n, r), earcutLinked(e, n, r, t, i, x, 2)) : 2 === a && splitEarcut(e, n, r, t, i, x) : earcutLinked(filterPoints(e), n, r, t, i, x, 1); break }
                }
            }

            function isEar(e) {
                var n = e.prev,
                    r = e,
                    t = e.next;
                if (area(n, r, t) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev;) {
                    if (pointInTriangle(n.x, n.y, r.x, r.y, t.x, t.y, i.x, i.y) && area(i.prev, i, i.next) >= 0) return !1;
                    i = i.next
                }
                return !0
            }

            function isEarHashed(e, n, r, t) {
                var i = e.prev,
                    x = e,
                    a = e.next;
                if (area(i, x, a) >= 0) return !1;
                for (var o = i.x < x.x ? i.x < a.x ? i.x : a.x : x.x < a.x ? x.x : a.x, l = i.y < x.y ? i.y < a.y ? i.y : a.y : x.y < a.y ? x.y : a.y, u = i.x > x.x ? i.x > a.x ? i.x : a.x : x.x > a.x ? x.x : a.x, s = i.y > x.y ? i.y > a.y ? i.y : a.y : x.y > a.y ? x.y : a.y, v = zOrder(o, l, n, r, t), f = zOrder(u, s, n, r, t), y = e.nextZ; y && y.z <= f;) {
                    if (y !== e.prev && y !== e.next && pointInTriangle(i.x, i.y, x.x, x.y, a.x, a.y, y.x, y.y) && area(y.prev, y, y.next) >= 0) return !1;
                    y = y.nextZ
                }
                for (y = e.prevZ; y && y.z >= v;) {
                    if (y !== e.prev && y !== e.next && pointInTriangle(i.x, i.y, x.x, x.y, a.x, a.y, y.x, y.y) && area(y.prev, y, y.next) >= 0) return !1;
                    y = y.prevZ
                }
                return !0
            }

            function cureLocalIntersections(e, n, r) {
                var t = e;
                do {
                    var i = t.prev,
                        x = t.next.next;
                    !equals(i, x) && intersects(i, t, t.next, x) && locallyInside(i, x) && locallyInside(x, i) && (n.push(i.i / r), n.push(t.i / r), n.push(x.i / r), removeNode(t), removeNode(t.next), t = e = x), t = t.next
                } while (t !== e);
                return t
            }

            function splitEarcut(e, n, r, t, i, x) {
                var a = e;
                do {
                    for (var o = a.next.next; o !== a.prev;) {
                        if (a.i !== o.i && isValidDiagonal(a, o)) { var l = splitPolygon(a, o); return a = filterPoints(a, a.next), l = filterPoints(l, l.next), earcutLinked(a, n, r, t, i, x), void earcutLinked(l, n, r, t, i, x) }
                        o = o.next
                    }
                    a = a.next
                } while (a !== e)
            }

            function eliminateHoles(e, n, r, t) { var i, x, a, o, l, u = []; for (i = 0, x = n.length; i < x; i++) a = n[i] * t, o = i < x - 1 ? n[i + 1] * t : e.length, l = linkedList(e, a, o, t, !1), l === l.next && (l.steiner = !0), u.push(getLeftmost(l)); for (u.sort(compareX), i = 0; i < u.length; i++) eliminateHole(u[i], r), r = filterPoints(r, r.next); return r }

            function compareX(e, n) { return e.x - n.x }

            function eliminateHole(e, n) {
                if (n = findHoleBridge(e, n)) {
                    var r = splitPolygon(n, e);
                    filterPoints(r, r.next)
                }
            }

            function findHoleBridge(e, n) {
                var r, t = n,
                    i = e.x,
                    x = e.y,
                    a = -1 / 0;
                do {
                    if (x <= t.y && x >= t.next.y) {
                        var o = t.x + (x - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
                        if (o <= i && o > a) {
                            if (a = o, o === i) { if (x === t.y) return t; if (x === t.next.y) return t.next }
                            r = t.x < t.next.x ? t : t.next
                        }
                    }
                    t = t.next
                } while (t !== n);
                if (!r) return null;
                if (i === a) return r.prev;
                var l, u = r,
                    s = r.x,
                    v = r.y,
                    f = 1 / 0;
                for (t = r.next; t !== u;) i >= t.x && t.x >= s && pointInTriangle(x < v ? i : a, x, s, v, x < v ? a : i, x, t.x, t.y) && ((l = Math.abs(x - t.y) / (i - t.x)) < f || l === f && t.x > r.x) && locallyInside(t, e) && (r = t, f = l), t = t.next;
                return r
            }

            function indexCurve(e, n, r, t) {
                var i = e;
                do { null === i.z && (i.z = zOrder(i.x, i.y, n, r, t)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next } while (i !== e);
                i.prevZ.nextZ = null, i.prevZ = null, sortLinked(i)
            }

            function sortLinked(e) {
                var n, r, t, i, x, a, o, l, u = 1;
                do {
                    for (r = e, e = null, x = null, a = 0; r;) {
                        for (a++, t = r, o = 0, n = 0; n < u && (o++, t = t.nextZ); n++);
                        for (l = u; o > 0 || l > 0 && t;) 0 === o ? (i = t, t = t.nextZ, l--) : 0 !== l && t ? r.z <= t.z ? (i = r, r = r.nextZ, o--) : (i = t, t = t.nextZ, l--) : (i = r, r = r.nextZ, o--), x ? x.nextZ = i : e = i, i.prevZ = x, x = i;
                        r = t
                    }
                    x.nextZ = null, u *= 2
                } while (a > 1);
                return e
            }

            function zOrder(e, n, r, t, i) { return e = 32767 * (e - r) / i, n = 32767 * (n - t) / i, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), n = 16711935 & (n | n << 8), n = 252645135 & (n | n << 4), n = 858993459 & (n | n << 2), n = 1431655765 & (n | n << 1), e | n << 1 }

            function getLeftmost(e) {
                var n = e,
                    r = e;
                do { n.x < r.x && (r = n), n = n.next } while (n !== e);
                return r
            }

            function pointInTriangle(e, n, r, t, i, x, a, o) { return (i - a) * (n - o) - (e - a) * (x - o) >= 0 && (e - a) * (t - o) - (r - a) * (n - o) >= 0 && (r - a) * (x - o) - (i - a) * (t - o) >= 0 }

            function isValidDiagonal(e, n) { return e.next.i !== n.i && e.prev.i !== n.i && !intersectsPolygon(e, n) && locallyInside(e, n) && locallyInside(n, e) && middleInside(e, n) }

            function area(e, n, r) { return (n.y - e.y) * (r.x - n.x) - (n.x - e.x) * (r.y - n.y) }

            function equals(e, n) { return e.x === n.x && e.y === n.y }

            function intersects(e, n, r, t) { return !!(equals(e, n) && equals(r, t) || equals(e, t) && equals(r, n)) || area(e, n, r) > 0 != area(e, n, t) > 0 && area(r, t, e) > 0 != area(r, t, n) > 0 }

            function intersectsPolygon(e, n) {
                var r = e;
                do {
                    if (r.i !== e.i && r.next.i !== e.i && r.i !== n.i && r.next.i !== n.i && intersects(r, r.next, e, n)) return !0;
                    r = r.next
                } while (r !== e);
                return !1
            }

            function locallyInside(e, n) { return area(e.prev, e, e.next) < 0 ? area(e, n, e.next) >= 0 && area(e, e.prev, n) >= 0 : area(e, n, e.prev) < 0 || area(e, e.next, n) < 0 }

            function middleInside(e, n) {
                var r = e,
                    t = !1,
                    i = (e.x + n.x) / 2,
                    x = (e.y + n.y) / 2;
                do { r.y > x != r.next.y > x && i < (r.next.x - r.x) * (x - r.y) / (r.next.y - r.y) + r.x && (t = !t), r = r.next } while (r !== e);
                return t
            }

            function splitPolygon(e, n) {
                var r = new Node(e.i, e.x, e.y),
                    t = new Node(n.i, n.x, n.y),
                    i = e.next,
                    x = n.prev;
                return e.next = n, n.prev = e, r.next = i, i.prev = r, t.next = r, r.prev = t, x.next = t, t.prev = x, t
            }

            function insertNode(e, n, r, t) { var i = new Node(e, n, r); return t ? (i.next = t.next, i.prev = t, t.next.prev = i, t.next = i) : (i.prev = i, i.next = i), i }

            function removeNode(e) { e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ) }

            function Node(e, n, r) { this.i = e, this.x = n, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1 }

            function signedArea(e, n, r, t) { for (var i = 0, x = n, a = r - t; x < r; x += t) i += (e[a] - e[x]) * (e[x + 1] + e[a + 1]), a = x; return i }
            module.exports = earcut, earcut.deviation = function(e, n, r, t) {
                var i = n && n.length,
                    x = i ? n[0] * r : e.length,
                    a = Math.abs(signedArea(e, 0, x, r));
                if (i)
                    for (var o = 0, l = n.length; o < l; o++) {
                        var u = n[o] * r,
                            s = o < l - 1 ? n[o + 1] * r : e.length;
                        a -= Math.abs(signedArea(e, u, s, r))
                    }
                var v = 0;
                for (o = 0; o < t.length; o += 3) {
                    var f = t[o] * r,
                        y = t[o + 1] * r,
                        d = t[o + 2] * r;
                    v += Math.abs((e[f] - e[d]) * (e[y + 1] - e[f + 1]) - (e[f] - e[y]) * (e[d + 1] - e[f + 1]))
                }
                return 0 === a && 0 === v ? 0 : Math.abs((v - a) / a)
            }, earcut.flatten = function(e) {
                for (var n = e[0][0].length, r = { vertices: [], holes: [], dimensions: n }, t = 0, i = 0; i < e.length; i++) {
                    for (var x = 0; x < e[i].length; x++)
                        for (var a = 0; a < n; a++) r.vertices.push(e[i][x][a]);
                    i > 0 && (t += e[i - 1].length, r.holes.push(t))
                }
                return r
            };
        }, {}],
        13: [function(_dereq_, module, exports) {
            function geometry(r) { if ("Polygon" === r.type) return polygonArea(r.coordinates); if ("MultiPolygon" === r.type) { for (var e = 0, n = 0; n < r.coordinates.length; n++) e += polygonArea(r.coordinates[n]); return e } return null }

            function polygonArea(r) { var e = 0; if (r && r.length > 0) { e += Math.abs(ringArea(r[0])); for (var n = 1; n < r.length; n++) e -= Math.abs(ringArea(r[n])) } return e }

            function ringArea(r) {
                var e = 0;
                if (r.length > 2) {
                    for (var n, t, o = 0; o < r.length - 1; o++) n = r[o], t = r[o + 1], e += rad(t[0] - n[0]) * (2 + Math.sin(rad(n[1])) + Math.sin(rad(t[1])));
                    e = e * wgs84.RADIUS * wgs84.RADIUS / 2
                }
                return e
            }

            function rad(r) { return r * Math.PI / 180 }
            var wgs84 = _dereq_("wgs84");
            module.exports.geometry = geometry, module.exports.ring = ringArea;
        }, { "wgs84": 49 }],
        14: [function(_dereq_, module, exports) {
            function rewind(r, e) {
                switch (r && r.type || null) {
                    case "FeatureCollection":
                        return r.features = r.features.map(curryOuter(rewind, e)), r;
                    case "Feature":
                        return r.geometry = rewind(r.geometry, e), r;
                    case "Polygon":
                    case "MultiPolygon":
                        return correct(r, e);
                    default:
                        return r
                }
            }

            function curryOuter(r, e) { return function(n) { return r(n, e) } }

            function correct(r, e) { return "Polygon" === r.type ? r.coordinates = correctRings(r.coordinates, e) : "MultiPolygon" === r.type && (r.coordinates = r.coordinates.map(curryOuter(correctRings, e))), r }

            function correctRings(r, e) { e = !!e, r[0] = wind(r[0], e); for (var n = 1; n < r.length; n++) r[n] = wind(r[n], !e); return r }

            function wind(r, e) { return cw(r) === e ? r : r.reverse() }

            function cw(r) { return geojsonArea.ring(r) >= 0 }
            var geojsonArea = _dereq_("geojson-area");
            module.exports = rewind;
        }, { "geojson-area": 13 }],
        15: [function(_dereq_, module, exports) {
            "use strict";

            function clip(e, r, t, n, u, i, l, s) {
                if (t /= r, n /= r, l >= t && s <= n) return e;
                if (l > n || s < t) return null;
                for (var h = [], p = 0; p < e.length; p++) {
                    var a, c, o = e[p],
                        f = o.geometry,
                        g = o.type;
                    if (a = o.min[u], c = o.max[u], a >= t && c <= n) h.push(o);
                    else if (!(a > n || c < t)) {
                        var v = 1 === g ? clipPoints(f, t, n, u) : clipGeometry(f, t, n, u, i, 3 === g);
                        v.length && h.push(createFeature(o.tags, g, v, o.id))
                    }
                }
                return h.length ? h : null
            }

            function clipPoints(e, r, t, n) {
                for (var u = [], i = 0; i < e.length; i++) {
                    var l = e[i],
                        s = l[n];
                    s >= r && s <= t && u.push(l)
                }
                return u
            }

            function clipGeometry(e, r, t, n, u, i) {
                for (var l = [], s = 0; s < e.length; s++) {
                    var h, p, a, c = 0,
                        o = 0,
                        f = null,
                        g = e[s],
                        v = g.area,
                        m = g.dist,
                        w = g.outer,
                        S = g.length,
                        d = [];
                    for (p = 0; p < S - 1; p++) h = f || g[p], f = g[p + 1], c = o || h[n], o = f[n], c < r ? o > t ? (d.push(u(h, f, r), u(h, f, t)), i || (d = newSlice(l, d, v, m, w))) : o >= r && d.push(u(h, f, r)) : c > t ? o < r ? (d.push(u(h, f, t), u(h, f, r)), i || (d = newSlice(l, d, v, m, w))) : o <= t && d.push(u(h, f, t)) : (d.push(h), o < r ? (d.push(u(h, f, r)), i || (d = newSlice(l, d, v, m, w))) : o > t && (d.push(u(h, f, t)), i || (d = newSlice(l, d, v, m, w))));
                    h = g[S - 1], c = h[n], c >= r && c <= t && d.push(h), a = d[d.length - 1], i && a && (d[0][0] !== a[0] || d[0][1] !== a[1]) && d.push(d[0]), newSlice(l, d, v, m, w)
                }
                return l
            }

            function newSlice(e, r, t, n, u) { return r.length && (r.area = t, r.dist = n, void 0 !== u && (r.outer = u), e.push(r)), [] }
            module.exports = clip;
            var createFeature = _dereq_("./feature");
        }, { "./feature": 17 }],
        16: [function(_dereq_, module, exports) {
            "use strict";

            function convert(e, t) {
                var r = [];
                if ("FeatureCollection" === e.type)
                    for (var o = 0; o < e.features.length; o++) convertFeature(r, e.features[o], t);
                else "Feature" === e.type ? convertFeature(r, e, t) : convertFeature(r, { geometry: e }, t);
                return r
            }

            function convertFeature(e, t, r) {
                if (null !== t.geometry) {
                    var o, a, i, n, u = t.geometry,
                        c = u.type,
                        l = u.coordinates,
                        s = t.properties,
                        p = t.id;
                    if ("Point" === c) e.push(createFeature(s, 1, [projectPoint(l)], p));
                    else if ("MultiPoint" === c) e.push(createFeature(s, 1, project(l), p));
                    else if ("LineString" === c) e.push(createFeature(s, 2, [project(l, r)], p));
                    else if ("MultiLineString" === c || "Polygon" === c) {
                        for (i = [], o = 0; o < l.length; o++) n = project(l[o], r), "Polygon" === c && (n.outer = 0 === o), i.push(n);
                        e.push(createFeature(s, "Polygon" === c ? 3 : 2, i, p))
                    } else if ("MultiPolygon" === c) {
                        for (i = [], o = 0; o < l.length; o++)
                            for (a = 0; a < l[o].length; a++) n = project(l[o][a], r), n.outer = 0 === a, i.push(n);
                        e.push(createFeature(s, 3, i, p))
                    } else { if ("GeometryCollection" !== c) throw new Error("Input data is not a valid GeoJSON object."); for (o = 0; o < u.geometries.length; o++) convertFeature(e, { geometry: u.geometries[o], properties: s }, r) }
                }
            }

            function project(e, t) { for (var r = [], o = 0; o < e.length; o++) r.push(projectPoint(e[o])); return t && (simplify(r, t), calcSize(r)), r }

            function projectPoint(e) {
                var t = Math.sin(e[1] * Math.PI / 180),
                    r = e[0] / 360 + .5,
                    o = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
                return o = o < 0 ? 0 : o > 1 ? 1 : o, [r, o, 0]
            }

            function calcSize(e) {
                for (var t, r, o = 0, a = 0, i = 0; i < e.length - 1; i++) t = r || e[i], r = e[i + 1], o += t[0] * r[1] - r[0] * t[1], a += Math.abs(r[0] - t[0]) + Math.abs(r[1] - t[1]);
                e.area = Math.abs(o / 2), e.dist = a
            }
            module.exports = convert;
            var simplify = _dereq_("./simplify"),
                createFeature = _dereq_("./feature");
        }, { "./feature": 17, "./simplify": 19 }],
        17: [function(_dereq_, module, exports) {
            "use strict";

            function createFeature(e, t, a, n) { var r = { id: n || null, type: t, geometry: a, tags: e || null, min: [1 / 0, 1 / 0], max: [-1 / 0, -1 / 0] }; return calcBBox(r), r }

            function calcBBox(e) {
                var t = e.geometry,
                    a = e.min,
                    n = e.max;
                if (1 === e.type) calcRingBBox(a, n, t);
                else
                    for (var r = 0; r < t.length; r++) calcRingBBox(a, n, t[r]);
                return e
            }

            function calcRingBBox(e, t, a) { for (var n, r = 0; r < a.length; r++) n = a[r], e[0] = Math.min(n[0], e[0]), t[0] = Math.max(n[0], t[0]), e[1] = Math.min(n[1], e[1]), t[1] = Math.max(n[1], t[1]) }
            module.exports = createFeature;
        }, {}],
        18: [function(_dereq_, module, exports) {
            "use strict";

            function geojsonvt(e, t) { return new GeoJSONVT(e, t) }

            function GeoJSONVT(e, t) {
                t = this.options = extend(Object.create(this.options), t);
                var i = t.debug;
                i && console.time("preprocess data");
                var o = 1 << t.maxZoom,
                    n = convert(e, t.tolerance / (o * t.extent));
                this.tiles = {}, this.tileCoords = [], i && (console.timeEnd("preprocess data"), console.log("index: maxZoom: %d, maxPoints: %d", t.indexMaxZoom, t.indexMaxPoints), console.time("generate tiles"), this.stats = {}, this.total = 0), n = wrap(n, t.buffer / t.extent, intersectX), n.length && this.splitTile(n, 0, 0, 0), i && (n.length && console.log("features: %d, points: %d", this.tiles[0].numFeatures, this.tiles[0].numPoints), console.timeEnd("generate tiles"), console.log("tiles generated:", this.total, JSON.stringify(this.stats)))
            }

            function toID(e, t, i) { return 32 * ((1 << e) * i + t) + e }

            function intersectX(e, t, i) { return [i, (i - e[0]) * (t[1] - e[1]) / (t[0] - e[0]) + e[1], 1] }

            function intersectY(e, t, i) { return [(i - e[1]) * (t[0] - e[0]) / (t[1] - e[1]) + e[0], i, 1] }

            function extend(e, t) { for (var i in t) e[i] = t[i]; return e }

            function isClippedSquare(e, t, i) { var o = e.source; if (1 !== o.length) return !1; var n = o[0]; if (3 !== n.type || n.geometry.length > 1) return !1; var r = n.geometry[0].length; if (5 !== r) return !1; for (var s = 0; s < r; s++) { var l = transform.point(n.geometry[0][s], t, e.z2, e.x, e.y); if (l[0] !== -i && l[0] !== t + i || l[1] !== -i && l[1] !== t + i) return !1 } return !0 }
            module.exports = geojsonvt;
            var convert = _dereq_("./convert"),
                transform = _dereq_("./transform"),
                clip = _dereq_("./clip"),
                wrap = _dereq_("./wrap"),
                createTile = _dereq_("./tile");
            GeoJSONVT.prototype.options = { maxZoom: 14, indexMaxZoom: 5, indexMaxPoints: 1e5, solidChildren: !1, tolerance: 3, extent: 4096, buffer: 64, debug: 0 }, GeoJSONVT.prototype.splitTile = function(e, t, i, o, n, r, s) {
                for (var l = [e, t, i, o], a = this.options, u = a.debug, c = null; l.length;) {
                    o = l.pop(), i = l.pop(), t = l.pop(), e = l.pop();
                    var p = 1 << t,
                        d = toID(t, i, o),
                        m = this.tiles[d],
                        f = t === a.maxZoom ? 0 : a.tolerance / (p * a.extent);
                    if (!m && (u > 1 && console.time("creation"), m = this.tiles[d] = createTile(e, p, i, o, f, t === a.maxZoom), this.tileCoords.push({ z: t, x: i, y: o }), u)) {
                        u > 1 && (console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)", t, i, o, m.numFeatures, m.numPoints, m.numSimplified), console.timeEnd("creation"));
                        var h = "z" + t;
                        this.stats[h] = (this.stats[h] || 0) + 1, this.total++
                    }
                    if (m.source = e, n) { if (t === a.maxZoom || t === n) continue; var x = 1 << n - t; if (i !== Math.floor(r / x) || o !== Math.floor(s / x)) continue } else if (t === a.indexMaxZoom || m.numPoints <= a.indexMaxPoints) continue;
                    if (a.solidChildren || !isClippedSquare(m, a.extent, a.buffer)) {
                        m.source = null, u > 1 && console.time("clipping");
                        var g, v, M, T, b, y, S = .5 * a.buffer / a.extent,
                            Z = .5 - S,
                            q = .5 + S,
                            w = 1 + S;
                        g = v = M = T = null, b = clip(e, p, i - S, i + q, 0, intersectX, m.min[0], m.max[0]), y = clip(e, p, i + Z, i + w, 0, intersectX, m.min[0], m.max[0]), b && (g = clip(b, p, o - S, o + q, 1, intersectY, m.min[1], m.max[1]), v = clip(b, p, o + Z, o + w, 1, intersectY, m.min[1], m.max[1])), y && (M = clip(y, p, o - S, o + q, 1, intersectY, m.min[1], m.max[1]), T = clip(y, p, o + Z, o + w, 1, intersectY, m.min[1], m.max[1])), u > 1 && console.timeEnd("clipping"), e.length && (l.push(g || [], t + 1, 2 * i, 2 * o), l.push(v || [], t + 1, 2 * i, 2 * o + 1), l.push(M || [], t + 1, 2 * i + 1, 2 * o), l.push(T || [], t + 1, 2 * i + 1, 2 * o + 1))
                    } else n && (c = t)
                }
                return c
            }, GeoJSONVT.prototype.getTile = function(e, t, i) {
                var o = this.options,
                    n = o.extent,
                    r = o.debug,
                    s = 1 << e;
                t = (t % s + s) % s;
                var l = toID(e, t, i);
                if (this.tiles[l]) return transform.tile(this.tiles[l], n);
                r > 1 && console.log("drilling down to z%d-%d-%d", e, t, i);
                for (var a, u = e, c = t, p = i; !a && u > 0;) u--, c = Math.floor(c / 2), p = Math.floor(p / 2), a = this.tiles[toID(u, c, p)];
                if (!a || !a.source) return null;
                if (r > 1 && console.log("found parent tile z%d-%d-%d", u, c, p), isClippedSquare(a, n, o.buffer)) return transform.tile(a, n);
                r > 1 && console.time("drilling down");
                var d = this.splitTile(a.source, u, c, p, e, t, i);
                if (r > 1 && console.timeEnd("drilling down"), null !== d) {
                    var m = 1 << e - d;
                    l = toID(d, Math.floor(t / m), Math.floor(i / m))
                }
                return this.tiles[l] ? transform.tile(this.tiles[l], n) : null
            };
        }, { "./clip": 15, "./convert": 16, "./tile": 20, "./transform": 21, "./wrap": 22 }],
        19: [function(_dereq_, module, exports) {
            "use strict";

            function simplify(t, i) {
                var e, p, r, s, o = i * i,
                    f = t.length,
                    u = 0,
                    n = f - 1,
                    g = [];
                for (t[u][2] = 1, t[n][2] = 1; n;) {
                    for (p = 0, e = u + 1; e < n; e++)(r = getSqSegDist(t[e], t[u], t[n])) > p && (s = e, p = r);
                    p > o ? (t[s][2] = p, g.push(u), g.push(s), u = s) : (n = g.pop(), u = g.pop())
                }
            }

            function getSqSegDist(t, i, e) {
                var p = i[0],
                    r = i[1],
                    s = e[0],
                    o = e[1],
                    f = t[0],
                    u = t[1],
                    n = s - p,
                    g = o - r;
                if (0 !== n || 0 !== g) {
                    var l = ((f - p) * n + (u - r) * g) / (n * n + g * g);
                    l > 1 ? (p = s, r = o) : l > 0 && (p += n * l, r += g * l)
                }
                return n = f - p, g = u - r, n * n + g * g
            }
            module.exports = simplify;
        }, {}],
        20: [function(_dereq_, module, exports) {
            "use strict";

            function createTile(e, n, r, i, t, u) {
                for (var a = { features: [], numPoints: 0, numSimplified: 0, numFeatures: 0, source: null, x: r, y: i, z2: n, transformed: !1, min: [2, 1], max: [-1, 0] }, m = 0; m < e.length; m++) {
                    a.numFeatures++, addFeature(a, e[m], t, u);
                    var s = e[m].min,
                        l = e[m].max;
                    s[0] < a.min[0] && (a.min[0] = s[0]), s[1] < a.min[1] && (a.min[1] = s[1]), l[0] > a.max[0] && (a.max[0] = l[0]), l[1] > a.max[1] && (a.max[1] = l[1])
                }
                return a
            }

            function addFeature(e, n, r, i) {
                var t, u, a, m, s = n.geometry,
                    l = n.type,
                    o = [],
                    f = r * r;
                if (1 === l)
                    for (t = 0; t < s.length; t++) o.push(s[t]), e.numPoints++, e.numSimplified++;
                else
                    for (t = 0; t < s.length; t++)
                        if (a = s[t], i || !(2 === l && a.dist < r || 3 === l && a.area < f)) {
                            var d = [];
                            for (u = 0; u < a.length; u++) m = a[u], (i || m[2] > f) && (d.push(m), e.numSimplified++), e.numPoints++;
                            3 === l && rewind(d, a.outer), o.push(d)
                        } else e.numPoints += a.length; if (o.length) {
                    var g = { geometry: o, type: l, tags: n.tags || null };
                    null !== n.id && (g.id = n.id), e.features.push(g)
                }
            }

            function rewind(e, n) { signedArea(e) < 0 === n && e.reverse() }

            function signedArea(e) { for (var n, r, i = 0, t = 0, u = e.length, a = u - 1; t < u; a = t++) n = e[t], r = e[a], i += (r[0] - n[0]) * (n[1] + r[1]); return i }
            module.exports = createTile;
        }, {}],
        21: [function(_dereq_, module, exports) {
            "use strict";

            function transformTile(r, t) {
                if (r.transformed) return r;
                var n, e, o, f = r.z2,
                    a = r.x,
                    s = r.y;
                for (n = 0; n < r.features.length; n++) {
                    var i = r.features[n],
                        u = i.geometry;
                    if (1 === i.type)
                        for (e = 0; e < u.length; e++) u[e] = transformPoint(u[e], t, f, a, s);
                    else
                        for (e = 0; e < u.length; e++) { var m = u[e]; for (o = 0; o < m.length; o++) m[o] = transformPoint(m[o], t, f, a, s) }
                }
                return r.transformed = !0, r
            }

            function transformPoint(r, t, n, e, o) { return [Math.round(t * (r[0] * n - e)), Math.round(t * (r[1] * n - o))] }
            exports.tile = transformTile, exports.point = transformPoint;
        }, {}],
        22: [function(_dereq_, module, exports) {
            "use strict";

            function wrap(r, e, t) {
                var o = r,
                    a = clip(r, 1, -1 - e, e, 0, t, -1, 2),
                    s = clip(r, 1, 1 - e, 2 + e, 0, t, -1, 2);
                return (a || s) && (o = clip(r, 1, -e, 1 + e, 0, t, -1, 2) || [], a && (o = shiftFeatureCoords(a, 1).concat(o)), s && (o = o.concat(shiftFeatureCoords(s, -1)))), o
            }

            function shiftFeatureCoords(r, e) {
                for (var t = [], o = 0; o < r.length; o++) {
                    var a, s = r[o],
                        i = s.type;
                    if (1 === i) a = shiftCoords(s.geometry, e);
                    else { a = []; for (var u = 0; u < s.geometry.length; u++) a.push(shiftCoords(s.geometry[u], e)) }
                    t.push(createFeature(s.tags, i, a, s.id))
                }
                return t
            }

            function shiftCoords(r, e) {
                var t = [];
                t.area = r.area, t.dist = r.dist;
                for (var o = 0; o < r.length; o++) t.push([r[o][0] + e, r[o][1], r[o][2]]);
                return t
            }
            var clip = _dereq_("./clip"),
                createFeature = _dereq_("./feature");
            module.exports = wrap;
        }, { "./clip": 15, "./feature": 17 }],
        23: [function(_dereq_, module, exports) {
            "use strict";

            function GridIndex(t, r, e) {
                var s = this.cells = [];
                if (t instanceof ArrayBuffer) {
                    this.arrayBuffer = t;
                    var i = new Int32Array(this.arrayBuffer);
                    t = i[0], r = i[1], e = i[2], this.d = r + 2 * e;
                    for (var h = 0; h < this.d * this.d; h++) {
                        var n = i[NUM_PARAMS + h],
                            o = i[NUM_PARAMS + h + 1];
                        s.push(n === o ? null : i.subarray(n, o))
                    }
                    var l = i[NUM_PARAMS + s.length],
                        a = i[NUM_PARAMS + s.length + 1];
                    this.keys = i.subarray(l, a), this.bboxes = i.subarray(a), this.insert = this._insertReadonly
                } else {
                    this.d = r + 2 * e;
                    for (var d = 0; d < this.d * this.d; d++) s.push([]);
                    this.keys = [], this.bboxes = []
                }
                this.n = r, this.extent = t, this.padding = e, this.scale = r / t, this.uid = 0;
                var f = e / r * t;
                this.min = -f, this.max = t + f
            }
            module.exports = GridIndex;
            var NUM_PARAMS = 3;
            GridIndex.prototype.insert = function(t, r, e, s, i) { this._forEachCell(r, e, s, i, this._insertCell, this.uid++), this.keys.push(t), this.bboxes.push(r), this.bboxes.push(e), this.bboxes.push(s), this.bboxes.push(i) }, GridIndex.prototype._insertReadonly = function() { throw "Cannot insert into a GridIndex created from an ArrayBuffer." }, GridIndex.prototype._insertCell = function(t, r, e, s, i, h) { this.cells[i].push(h) }, GridIndex.prototype.query = function(t, r, e, s) {
                var i = this.min,
                    h = this.max;
                if (t <= i && r <= i && h <= e && h <= s) return Array.prototype.slice.call(this.keys);
                var n = [],
                    o = {};
                return this._forEachCell(t, r, e, s, this._queryCell, n, o), n
            }, GridIndex.prototype._queryCell = function(t, r, e, s, i, h, n) {
                var o = this.cells[i];
                if (null !== o)
                    for (var l = this.keys, a = this.bboxes, d = 0; d < o.length; d++) {
                        var f = o[d];
                        if (void 0 === n[f]) {
                            var u = 4 * f;
                            t <= a[u + 2] && r <= a[u + 3] && e >= a[u + 0] && s >= a[u + 1] ? (n[f] = !0, h.push(l[f])) : n[f] = !1
                        }
                    }
            }, GridIndex.prototype._forEachCell = function(t, r, e, s, i, h, n) {
                for (var o = this._convertToCellCoord(t), l = this._convertToCellCoord(r), a = this._convertToCellCoord(e), d = this._convertToCellCoord(s), f = o; f <= a; f++)
                    for (var u = l; u <= d; u++) { var y = this.d * u + f; if (i.call(this, t, r, e, s, y, h, n)) return }
            }, GridIndex.prototype._convertToCellCoord = function(t) { return Math.max(0, Math.min(this.d - 1, Math.floor(t * this.scale) + this.padding)) }, GridIndex.prototype.toArrayBuffer = function() {
                if (this.arrayBuffer) return this.arrayBuffer;
                for (var t = this.cells, r = NUM_PARAMS + this.cells.length + 1 + 1, e = 0, s = 0; s < this.cells.length; s++) e += this.cells[s].length;
                var i = new Int32Array(r + e + this.keys.length + this.bboxes.length);
                i[0] = this.extent, i[1] = this.n, i[2] = this.padding;
                for (var h = r, n = 0; n < t.length; n++) {
                    var o = t[n];
                    i[NUM_PARAMS + n] = h, i.set(o, h), h += o.length
                }
                return i[NUM_PARAMS + t.length] = h, i.set(this.keys, h), h += this.keys.length, i[NUM_PARAMS + t.length + 1] = h, i.set(this.bboxes, h), h += this.bboxes.length, i.buffer
            };
        }, {}],
        24: [function(_dereq_, module, exports) {
            exports.read = function(a, o, t, r, h) {
                var M, p, w = 8 * h - r - 1,
                    f = (1 << w) - 1,
                    e = f >> 1,
                    i = -7,
                    N = t ? h - 1 : 0,
                    n = t ? -1 : 1,
                    s = a[o + N];
                for (N += n, M = s & (1 << -i) - 1, s >>= -i, i += w; i > 0; M = 256 * M + a[o + N], N += n, i -= 8);
                for (p = M & (1 << -i) - 1, M >>= -i, i += r; i > 0; p = 256 * p + a[o + N], N += n, i -= 8);
                if (0 === M) M = 1 - e;
                else {
                    if (M === f) return p ? NaN : 1 / 0 * (s ? -1 : 1);
                    p += Math.pow(2, r), M -= e
                }
                return (s ? -1 : 1) * p * Math.pow(2, M - r)
            }, exports.write = function(a, o, t, r, h, M) {
                var p, w, f, e = 8 * M - h - 1,
                    i = (1 << e) - 1,
                    N = i >> 1,
                    n = 23 === h ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    s = r ? 0 : M - 1,
                    u = r ? 1 : -1,
                    l = o < 0 || 0 === o && 1 / o < 0 ? 1 : 0;
                for (o = Math.abs(o), isNaN(o) || o === 1 / 0 ? (w = isNaN(o) ? 1 : 0, p = i) : (p = Math.floor(Math.log(o) / Math.LN2), o * (f = Math.pow(2, -p)) < 1 && (p--, f *= 2), o += p + N >= 1 ? n / f : n * Math.pow(2, 1 - N), o * f >= 2 && (p++, f /= 2), p + N >= i ? (w = 0, p = i) : p + N >= 1 ? (w = (o * f - 1) * Math.pow(2, h), p += N) : (w = o * Math.pow(2, N - 1) * Math.pow(2, h), p = 0)); h >= 8; a[t + s] = 255 & w, s += u, w /= 256, h -= 8);
                for (p = p << h | w, e += h; e > 0; a[t + s] = 255 & p, s += u, p /= 256, e -= 8);
                a[t + s - u] |= 128 * l
            };
        }, {}],
        25: [function(_dereq_, module, exports) {
            "use strict";

            function kdbush(t, i, e, s, n) { return new KDBush(t, i, e, s, n) }

            function KDBush(t, i, e, s, n) {
                i = i || defaultGetX, e = e || defaultGetY, n = n || Array, this.nodeSize = s || 64, this.points = t, this.ids = new n(t.length), this.coords = new n(2 * t.length);
                for (var r = 0; r < t.length; r++) this.ids[r] = r, this.coords[2 * r] = i(t[r]), this.coords[2 * r + 1] = e(t[r]);
                sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0)
            }

            function defaultGetX(t) { return t[0] }

            function defaultGetY(t) { return t[1] }
            var sort = _dereq_("./sort"),
                range = _dereq_("./range"),
                within = _dereq_("./within");
            module.exports = kdbush, KDBush.prototype = { range: function(t, i, e, s) { return range(this.ids, this.coords, t, i, e, s, this.nodeSize) }, within: function(t, i, e) { return within(this.ids, this.coords, t, i, e, this.nodeSize) } };
        }, { "./range": 26, "./sort": 27, "./within": 28 }],
        26: [function(_dereq_, module, exports) {
            "use strict";

            function range(p, r, s, u, h, e, o) {
                for (var a, t, n = [0, p.length - 1, 0], f = []; n.length;) {
                    var l = n.pop(),
                        v = n.pop(),
                        g = n.pop();
                    if (v - g <= o)
                        for (var i = g; i <= v; i++) a = r[2 * i], t = r[2 * i + 1], a >= s && a <= h && t >= u && t <= e && f.push(p[i]);
                    else {
                        var c = Math.floor((g + v) / 2);
                        a = r[2 * c], t = r[2 * c + 1], a >= s && a <= h && t >= u && t <= e && f.push(p[c]);
                        var d = (l + 1) % 2;
                        (0 === l ? s <= a : u <= t) && (n.push(g), n.push(c - 1), n.push(d)), (0 === l ? h >= a : e >= t) && (n.push(c + 1), n.push(v), n.push(d))
                    }
                }
                return f
            }
            module.exports = range;
        }, {}],
        27: [function(_dereq_, module, exports) {
            "use strict";

            function sortKD(t, a, o, s, r, e) {
                if (!(r - s <= o)) {
                    var f = Math.floor((s + r) / 2);
                    select(t, a, f, s, r, e % 2), sortKD(t, a, o, s, f - 1, e + 1), sortKD(t, a, o, f + 1, r, e + 1)
                }
            }

            function select(t, a, o, s, r, e) {
                for (; r > s;) {
                    if (r - s > 600) {
                        var f = r - s + 1,
                            p = o - s + 1,
                            w = Math.log(f),
                            m = .5 * Math.exp(2 * w / 3),
                            n = .5 * Math.sqrt(w * m * (f - m) / f) * (p - f / 2 < 0 ? -1 : 1);
                        select(t, a, o, Math.max(s, Math.floor(o - p * m / f + n)), Math.min(r, Math.floor(o + (f - p) * m / f + n)), e)
                    }
                    var c = a[2 * o + e],
                        h = s,
                        i = r;
                    for (swapItem(t, a, s, o), a[2 * r + e] > c && swapItem(t, a, s, r); h < i;) { for (swapItem(t, a, h, i), h++, i--; a[2 * h + e] < c;) h++; for (; a[2 * i + e] > c;) i-- }
                    a[2 * s + e] === c ? swapItem(t, a, s, i) : (i++, swapItem(t, a, i, r)), i <= o && (s = i + 1), o <= i && (r = i - 1)
                }
            }

            function swapItem(t, a, o, s) { swap(t, o, s), swap(a, 2 * o, 2 * s), swap(a, 2 * o + 1, 2 * s + 1) }

            function swap(t, a, o) {
                var s = t[a];
                t[a] = t[o], t[o] = s
            }
            module.exports = sortKD;
        }, {}],
        28: [function(_dereq_, module, exports) {
            "use strict";

            function within(s, p, r, t, u, h) {
                for (var i = [0, s.length - 1, 0], o = [], n = u * u; i.length;) {
                    var e = i.pop(),
                        a = i.pop(),
                        f = i.pop();
                    if (a - f <= h)
                        for (var v = f; v <= a; v++) sqDist(p[2 * v], p[2 * v + 1], r, t) <= n && o.push(s[v]);
                    else {
                        var l = Math.floor((f + a) / 2),
                            c = p[2 * l],
                            q = p[2 * l + 1];
                        sqDist(c, q, r, t) <= n && o.push(s[l]);
                        var D = (e + 1) % 2;
                        (0 === e ? r - u <= c : t - u <= q) && (i.push(f), i.push(l - 1), i.push(D)), (0 === e ? r + u >= c : t + u >= q) && (i.push(l + 1), i.push(a), i.push(D))
                    }
                }
                return o
            }

            function sqDist(s, p, r, t) {
                var u = s - r,
                    h = p - t;
                return u * u + h * h
            }
            module.exports = within;
        }, {}],
        29: [function(_dereq_, module, exports) {
            function isObjectLike(r) { return !!r && "object" == typeof r }

            function arraySome(r, e) {
                for (var a = -1, t = r.length; ++a < t;)
                    if (e(r[a], a, r)) return !0;
                return !1
            }

            function baseIsEqual(r, e, a, t, o, n) { return r === e || (null == r || null == e || !isObject(r) && !isObjectLike(e) ? r !== r && e !== e : baseIsEqualDeep(r, e, baseIsEqual, a, t, o, n)) }

            function baseIsEqualDeep(r, e, a, t, o, n, u) {
                var c = isArray(r),
                    s = isArray(e),
                    i = arrayTag,
                    g = arrayTag;
                c || (i = objToString.call(r), i == argsTag ? i = objectTag : i != objectTag && (c = isTypedArray(r))), s || (g = objToString.call(e), g == argsTag ? g = objectTag : g != objectTag && (s = isTypedArray(e)));
                var b = i == objectTag,
                    l = g == objectTag,
                    f = i == g;
                if (f && !c && !b) return equalByTag(r, e, i);
                if (!o) {
                    var y = b && hasOwnProperty.call(r, "__wrapped__"),
                        T = l && hasOwnProperty.call(e, "__wrapped__");
                    if (y || T) return a(y ? r.value() : r, T ? e.value() : e, t, o, n, u)
                }
                if (!f) return !1;
                n || (n = []), u || (u = []);
                for (var j = n.length; j--;)
                    if (n[j] == r) return u[j] == e;
                n.push(r), u.push(e);
                var p = (c ? equalArrays : equalObjects)(r, e, a, t, o, n, u);
                return n.pop(), u.pop(), p
            }

            function equalArrays(r, e, a, t, o, n, u) {
                var c = -1,
                    s = r.length,
                    i = e.length;
                if (s != i && !(o && i > s)) return !1;
                for (; ++c < s;) {
                    var g = r[c],
                        b = e[c],
                        l = t ? t(o ? b : g, o ? g : b, c) : void 0;
                    if (void 0 !== l) { if (l) continue; return !1 }
                    if (o) { if (!arraySome(e, function(r) { return g === r || a(g, r, t, o, n, u) })) return !1 } else if (g !== b && !a(g, b, t, o, n, u)) return !1
                }
                return !0
            }

            function equalByTag(r, e, a) {
                switch (a) {
                    case boolTag:
                    case dateTag:
                        return +r == +e;
                    case errorTag:
                        return r.name == e.name && r.message == e.message;
                    case numberTag:
                        return r != +r ? e != +e : r == +e;
                    case regexpTag:
                    case stringTag:
                        return r == e + ""
                }
                return !1
            }

            function equalObjects(r, e, a, t, o, n, u) {
                var c = keys(r),
                    s = c.length;
                if (s != keys(e).length && !o) return !1;
                for (var i = s; i--;) { var g = c[i]; if (!(o ? g in e : hasOwnProperty.call(e, g))) return !1 }
                for (var b = o; ++i < s;) {
                    g = c[i];
                    var l = r[g],
                        f = e[g],
                        y = t ? t(o ? f : l, o ? l : f, g) : void 0;
                    if (!(void 0 === y ? a(l, f, t, o, n, u) : y)) return !1;
                    b || (b = "constructor" == g)
                }
                if (!b) {
                    var T = r.constructor,
                        j = e.constructor;
                    if (T != j && "constructor" in r && "constructor" in e && !("function" == typeof T && T instanceof T && "function" == typeof j && j instanceof j)) return !1
                }
                return !0
            }

            function isObject(r) { var e = typeof r; return !!r && ("object" == e || "function" == e) }
            var isArray = _dereq_("lodash.isarray"),
                isTypedArray = _dereq_("lodash.istypedarray"),
                keys = _dereq_("lodash.keys"),
                argsTag = "[object Arguments]",
                arrayTag = "[object Array]",
                boolTag = "[object Boolean]",
                dateTag = "[object Date]",
                errorTag = "[object Error]",
                numberTag = "[object Number]",
                objectTag = "[object Object]",
                regexpTag = "[object RegExp]",
                stringTag = "[object String]",
                objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty,
                objToString = objectProto.toString;
            module.exports = baseIsEqual;
        }, { "lodash.isarray": 33, "lodash.istypedarray": 35, "lodash.keys": 36 }],
        30: [function(_dereq_, module, exports) {
            function bindCallback(n, t, r) {
                if ("function" != typeof n) return identity;
                if (void 0 === t) return n;
                switch (r) {
                    case 1:
                        return function(r) { return n.call(t, r) };
                    case 3:
                        return function(r, e, u) { return n.call(t, r, e, u) };
                    case 4:
                        return function(r, e, u, c) { return n.call(t, r, e, u, c) };
                    case 5:
                        return function(r, e, u, c, i) { return n.call(t, r, e, u, c, i) }
                }
                return function() { return n.apply(t, arguments) }
            }

            function identity(n) { return n }
            module.exports = bindCallback;
        }, {}],
        31: [function(_dereq_, module, exports) {
            function isObjectLike(t) { return !!t && "object" == typeof t }

            function getNative(t, o) { var e = null == t ? void 0 : t[o]; return isNative(e) ? e : void 0 }

            function isFunction(t) { return isObject(t) && objToString.call(t) == funcTag }

            function isObject(t) { var o = typeof t; return !!t && ("object" == o || "function" == o) }

            function isNative(t) { return null != t && (isFunction(t) ? reIsNative.test(fnToString.call(t)) : isObjectLike(t) && reIsHostCtor.test(t)) }
            var funcTag = "[object Function]",
                reIsHostCtor = /^\[object .+?Constructor\]$/,
                objectProto = Object.prototype,
                fnToString = Function.prototype.toString,
                hasOwnProperty = objectProto.hasOwnProperty,
                objToString = objectProto.toString,
                reIsNative = RegExp("^" + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            module.exports = getNative;
        }, {}],
        32: [function(_dereq_, module, exports) {
            function isArguments(t) { return isArrayLikeObject(t) && hasOwnProperty.call(t, "callee") && (!propertyIsEnumerable.call(t, "callee") || objectToString.call(t) == argsTag) }

            function isArrayLike(t) { return null != t && isLength(t.length) && !isFunction(t) }

            function isArrayLikeObject(t) { return isObjectLike(t) && isArrayLike(t) }

            function isFunction(t) { var e = isObject(t) ? objectToString.call(t) : ""; return e == funcTag || e == genTag }

            function isLength(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER }

            function isObject(t) { var e = typeof t; return !!t && ("object" == e || "function" == e) }

            function isObjectLike(t) { return !!t && "object" == typeof t }
            var MAX_SAFE_INTEGER = 9007199254740991,
                argsTag = "[object Arguments]",
                funcTag = "[object Function]",
                genTag = "[object GeneratorFunction]",
                objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty,
                objectToString = objectProto.toString,
                propertyIsEnumerable = objectProto.propertyIsEnumerable;
            module.exports = isArguments;
        }, {}],
        33: [function(_dereq_, module, exports) {
            function isObjectLike(t) { return !!t && "object" == typeof t }

            function getNative(t, r) { var e = null == t ? void 0 : t[r]; return isNative(e) ? e : void 0 }

            function isLength(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER }

            function isFunction(t) { return isObject(t) && objToString.call(t) == funcTag }

            function isObject(t) { var r = typeof t; return !!t && ("object" == r || "function" == r) }

            function isNative(t) { return null != t && (isFunction(t) ? reIsNative.test(fnToString.call(t)) : isObjectLike(t) && reIsHostCtor.test(t)) }
            var arrayTag = "[object Array]",
                funcTag = "[object Function]",
                reIsHostCtor = /^\[object .+?Constructor\]$/,
                objectProto = Object.prototype,
                fnToString = Function.prototype.toString,
                hasOwnProperty = objectProto.hasOwnProperty,
                objToString = objectProto.toString,
                reIsNative = RegExp("^" + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                nativeIsArray = getNative(Array, "isArray"),
                MAX_SAFE_INTEGER = 9007199254740991,
                isArray = nativeIsArray || function(t) { return isObjectLike(t) && isLength(t.length) && objToString.call(t) == arrayTag };
            module.exports = isArray;
        }, {}],
        34: [function(_dereq_, module, exports) {
            function isEqual(a, l, i, e) { i = "function" == typeof i ? bindCallback(i, e, 3) : void 0; var s = i ? i(a, l) : void 0; return void 0 === s ? baseIsEqual(a, l, i) : !!s }
            var baseIsEqual = _dereq_("lodash._baseisequal"),
                bindCallback = _dereq_("lodash._bindcallback");
            module.exports = isEqual;
        }, { "lodash._baseisequal": 29, "lodash._bindcallback": 30 }],
        35: [function(_dereq_, module, exports) {
            function isLength(a) { return "number" == typeof a && a > -1 && a % 1 == 0 && a <= MAX_SAFE_INTEGER }

            function isObjectLike(a) { return !!a && "object" == typeof a }

            function isTypedArray(a) { return isObjectLike(a) && isLength(a.length) && !!typedArrayTags[objectToString.call(a)] }
            var MAX_SAFE_INTEGER = 9007199254740991,
                argsTag = "[object Arguments]",
                arrayTag = "[object Array]",
                boolTag = "[object Boolean]",
                dateTag = "[object Date]",
                errorTag = "[object Error]",
                funcTag = "[object Function]",
                mapTag = "[object Map]",
                numberTag = "[object Number]",
                objectTag = "[object Object]",
                regexpTag = "[object RegExp]",
                setTag = "[object Set]",
                stringTag = "[object String]",
                weakMapTag = "[object WeakMap]",
                arrayBufferTag = "[object ArrayBuffer]",
                dataViewTag = "[object DataView]",
                float32Tag = "[object Float32Array]",
                float64Tag = "[object Float64Array]",
                int8Tag = "[object Int8Array]",
                int16Tag = "[object Int16Array]",
                int32Tag = "[object Int32Array]",
                uint8Tag = "[object Uint8Array]",
                uint8ClampedTag = "[object Uint8ClampedArray]",
                uint16Tag = "[object Uint16Array]",
                uint32Tag = "[object Uint32Array]",
                typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0, typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            var objectProto = Object.prototype,
                objectToString = objectProto.toString;
            module.exports = isTypedArray;
        }, {}],
        36: [function(_dereq_, module, exports) {
            function baseProperty(e) { return function(t) { return null == t ? void 0 : t[e] } }

            function isArrayLike(e) { return null != e && isLength(getLength(e)) }

            function isIndex(e, t) { return e = "number" == typeof e || reIsUint.test(e) ? +e : -1, t = null == t ? MAX_SAFE_INTEGER : t, e > -1 && e % 1 == 0 && e < t }

            function isLength(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER }

            function shimKeys(e) {
                for (var t = keysIn(e), r = t.length, n = r && e.length, s = !!n && isLength(n) && (isArray(e) || isArguments(e)), o = -1, i = []; ++o < r;) {
                    var u = t[o];
                    (s && isIndex(u, n) || hasOwnProperty.call(e, u)) && i.push(u)
                }
                return i
            }

            function isObject(e) { var t = typeof e; return !!e && ("object" == t || "function" == t) }

            function keysIn(e) {
                if (null == e) return [];
                isObject(e) || (e = Object(e));
                var t = e.length;
                t = t && isLength(t) && (isArray(e) || isArguments(e)) && t || 0;
                for (var r = e.constructor, n = -1, s = "function" == typeof r && r.prototype === e, o = Array(t), i = t > 0; ++n < t;) o[n] = n + "";
                for (var u in e) i && isIndex(u, t) || "constructor" == u && (s || !hasOwnProperty.call(e, u)) || o.push(u);
                return o
            }
            var getNative = _dereq_("lodash._getnative"),
                isArguments = _dereq_("lodash.isarguments"),
                isArray = _dereq_("lodash.isarray"),
                reIsUint = /^\d+$/,
                objectProto = Object.prototype,
                hasOwnProperty = objectProto.hasOwnProperty,
                nativeKeys = getNative(Object, "keys"),
                MAX_SAFE_INTEGER = 9007199254740991,
                getLength = baseProperty("length"),
                keys = nativeKeys ? function(e) { var t = null == e ? void 0 : e.constructor; return "function" == typeof t && t.prototype === e || "function" != typeof e && isArrayLike(e) ? shimKeys(e) : isObject(e) ? nativeKeys(e) : [] } : shimKeys;
            module.exports = keys;
        }, { "lodash._getnative": 31, "lodash.isarguments": 32, "lodash.isarray": 33 }],
        37: [function(_dereq_, module, exports) {
            "use strict";

            function isSupported(e) { return !!(isBrowser() && isArraySupported() && isFunctionSupported() && isObjectSupported() && isJSONSupported() && isWorkerSupported() && isUint8ClampedArraySupported() && isWebGLSupportedCached(e && e.failIfMajorPerformanceCaveat)) }

            function isBrowser() { return "undefined" != typeof window && "undefined" != typeof document }

            function isArraySupported() { return Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray }

            function isFunctionSupported() { return Function.prototype && Function.prototype.bind }

            function isObjectSupported() { return Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions }

            function isJSONSupported() { return "JSON" in window && "parse" in JSON && "stringify" in JSON }

            function isWorkerSupported() { return "Worker" in window }

            function isUint8ClampedArraySupported() { return "Uint8ClampedArray" in window }

            function isWebGLSupportedCached(e) { return void 0 === isWebGLSupportedCache[e] && (isWebGLSupportedCache[e] = isWebGLSupported(e)), isWebGLSupportedCache[e] }

            function isWebGLSupported(e) {
                var t = document.createElement("canvas"),
                    r = Object.create(isSupported.webGLContextAttributes);
                return r.failIfMajorPerformanceCaveat = e, t.probablySupportsContext ? t.probablySupportsContext("webgl", r) || t.probablySupportsContext("experimental-webgl", r) : t.supportsContext ? t.supportsContext("webgl", r) || t.supportsContext("experimental-webgl", r) : t.getContext("webgl", r) || t.getContext("experimental-webgl", r)
            }
            "undefined" != typeof module && module.exports ? module.exports = isSupported : window && (window.mapboxgl = window.mapboxgl || {}, window.mapboxgl.supported = isSupported);
            var isWebGLSupportedCache = {};
            isSupported.webGLContextAttributes = { antialias: !1, alpha: !0, stencil: !0, depth: !0 };
        }, {}],
        38: [function(_dereq_, module, exports) {
            "use strict";

            function Pbf(t) { this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0), this.pos = 0, this.type = 0, this.length = this.buf.length }

            function readVarintRemainder(t, i, e) { var r, s, n = e.buf; if (s = n[e.pos++], r = (112 & s) >> 4, s < 128) return toNum(t, r, i); if (s = n[e.pos++], r |= (127 & s) << 3, s < 128) return toNum(t, r, i); if (s = n[e.pos++], r |= (127 & s) << 10, s < 128) return toNum(t, r, i); if (s = n[e.pos++], r |= (127 & s) << 17, s < 128) return toNum(t, r, i); if (s = n[e.pos++], r |= (127 & s) << 24, s < 128) return toNum(t, r, i); if (s = n[e.pos++], r |= (1 & s) << 31, s < 128) return toNum(t, r, i); throw new Error("Expected varint not more than 10 bytes") }

            function readPackedEnd(t) { return t.type === Pbf.Bytes ? t.readVarint() + t.pos : t.pos + 1 }

            function toNum(t, i, e) { return e ? 4294967296 * i + (t >>> 0) : 4294967296 * (i >>> 0) + (t >>> 0) }

            function writeBigVarint(t, i) {
                var e, r;
                if (t >= 0 ? (e = t % 4294967296 | 0, r = t / 4294967296 | 0) : (e = ~(-t % 4294967296), r = ~(-t / 4294967296), 4294967295 ^ e ? e = e + 1 | 0 : (e = 0, r = r + 1 | 0)), t >= 0x10000000000000000 || t < -0x10000000000000000) throw new Error("Given varint doesn't fit into 10 bytes");
                i.realloc(10), writeBigVarintLow(e, r, i), writeBigVarintHigh(r, i)
            }

            function writeBigVarintLow(t, i, e) { e.buf[e.pos++] = 127 & t | 128, t >>>= 7, e.buf[e.pos++] = 127 & t | 128, t >>>= 7, e.buf[e.pos++] = 127 & t | 128, t >>>= 7, e.buf[e.pos++] = 127 & t | 128, t >>>= 7, e.buf[e.pos] = 127 & t }

            function writeBigVarintHigh(t, i) {
                var e = (7 & t) << 4;
                i.buf[i.pos++] |= e | ((t >>>= 3) ? 128 : 0), t && (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), t && (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), t && (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), t && (i.buf[i.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0), t && (i.buf[i.pos++] = 127 & t)))))
            }

            function makeRoomForExtraLength(t, i, e) {
                var r = i <= 16383 ? 1 : i <= 2097151 ? 2 : i <= 268435455 ? 3 : Math.ceil(Math.log(i) / (7 * Math.LN2));
                e.realloc(r);
                for (var s = e.pos - 1; s >= t; s--) e.buf[s + r] = e.buf[s]
            }

            function writePackedVarint(t, i) { for (var e = 0; e < t.length; e++) i.writeVarint(t[e]) }

            function writePackedSVarint(t, i) { for (var e = 0; e < t.length; e++) i.writeSVarint(t[e]) }

            function writePackedFloat(t, i) { for (var e = 0; e < t.length; e++) i.writeFloat(t[e]) }

            function writePackedDouble(t, i) { for (var e = 0; e < t.length; e++) i.writeDouble(t[e]) }

            function writePackedBoolean(t, i) { for (var e = 0; e < t.length; e++) i.writeBoolean(t[e]) }

            function writePackedFixed32(t, i) { for (var e = 0; e < t.length; e++) i.writeFixed32(t[e]) }

            function writePackedSFixed32(t, i) { for (var e = 0; e < t.length; e++) i.writeSFixed32(t[e]) }

            function writePackedFixed64(t, i) { for (var e = 0; e < t.length; e++) i.writeFixed64(t[e]) }

            function writePackedSFixed64(t, i) { for (var e = 0; e < t.length; e++) i.writeSFixed64(t[e]) }

            function readUInt32(t, i) { return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) + 16777216 * t[i + 3] }

            function writeInt32(t, i, e) { t[e] = i, t[e + 1] = i >>> 8, t[e + 2] = i >>> 16, t[e + 3] = i >>> 24 }

            function readInt32(t, i) { return (t[i] | t[i + 1] << 8 | t[i + 2] << 16) + (t[i + 3] << 24) }

            function readUtf8(t, i, e) {
                for (var r = "", s = i; s < e;) {
                    var n = t[s],
                        o = null,
                        a = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
                    if (s + a > e) break;
                    var h, u, f;
                    1 === a ? n < 128 && (o = n) : 2 === a ? 128 == (192 & (h = t[s + 1])) && (o = (31 & n) << 6 | 63 & h) <= 127 && (o = null) : 3 === a ? (h = t[s + 1], u = t[s + 2], 128 == (192 & h) && 128 == (192 & u) && ((o = (15 & n) << 12 | (63 & h) << 6 | 63 & u) <= 2047 || o >= 55296 && o <= 57343) && (o = null)) : 4 === a && (h = t[s + 1], u = t[s + 2], f = t[s + 3], 128 == (192 & h) && 128 == (192 & u) && 128 == (192 & f) && ((o = (15 & n) << 18 | (63 & h) << 12 | (63 & u) << 6 | 63 & f) <= 65535 || o >= 1114112) && (o = null)), null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, r += String.fromCharCode(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r += String.fromCharCode(o), s += a
                }
                return r
            }

            function writeUtf8(t, i, e) {
                for (var r, s, n = 0; n < i.length; n++) {
                    if ((r = i.charCodeAt(n)) > 55295 && r < 57344) {
                        if (!s) { r > 56319 || n + 1 === i.length ? (t[e++] = 239, t[e++] = 191, t[e++] = 189) : s = r; continue }
                        if (r < 56320) { t[e++] = 239, t[e++] = 191, t[e++] = 189, s = r; continue }
                        r = s - 55296 << 10 | r - 56320 | 65536, s = null
                    } else s && (t[e++] = 239, t[e++] = 191, t[e++] = 189, s = null);
                    r < 128 ? t[e++] = r : (r < 2048 ? t[e++] = r >> 6 | 192 : (r < 65536 ? t[e++] = r >> 12 | 224 : (t[e++] = r >> 18 | 240, t[e++] = r >> 12 & 63 | 128), t[e++] = r >> 6 & 63 | 128), t[e++] = 63 & r | 128)
                }
                return e
            }
            module.exports = Pbf;
            var ieee754 = _dereq_("ieee754");
            Pbf.Varint = 0, Pbf.Fixed64 = 1, Pbf.Bytes = 2, Pbf.Fixed32 = 5;
            var SHIFT_LEFT_32 = 4294967296,
                SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;
            Pbf.prototype = {
                destroy: function() { this.buf = null },
                readFields: function(t, i, e) {
                    for (e = e || this.length; this.pos < e;) {
                        var r = this.readVarint(),
                            s = r >> 3,
                            n = this.pos;
                        this.type = 7 & r, t(s, i, this), this.pos === n && this.skip(r)
                    }
                    return i
                },
                readMessage: function(t, i) { return this.readFields(t, i, this.readVarint() + this.pos) },
                readFixed32: function() { var t = readUInt32(this.buf, this.pos); return this.pos += 4, t },
                readSFixed32: function() { var t = readInt32(this.buf, this.pos); return this.pos += 4, t },
                readFixed64: function() { var t = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32; return this.pos += 8, t },
                readSFixed64: function() { var t = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32; return this.pos += 8, t },
                readFloat: function() { var t = ieee754.read(this.buf, this.pos, !0, 23, 4); return this.pos += 4, t },
                readDouble: function() { var t = ieee754.read(this.buf, this.pos, !0, 52, 8); return this.pos += 8, t },
                readVarint: function(t) { var i, e, r = this.buf; return e = r[this.pos++], i = 127 & e, e < 128 ? i : (e = r[this.pos++], i |= (127 & e) << 7, e < 128 ? i : (e = r[this.pos++], i |= (127 & e) << 14, e < 128 ? i : (e = r[this.pos++], i |= (127 & e) << 21, e < 128 ? i : (e = r[this.pos], i |= (15 & e) << 28, readVarintRemainder(i, t, this))))) },
                readVarint64: function() { return this.readVarint(!0) },
                readSVarint: function() { var t = this.readVarint(); return t % 2 == 1 ? (t + 1) / -2 : t / 2 },
                readBoolean: function() { return Boolean(this.readVarint()) },
                readString: function() {
                    var t = this.readVarint() + this.pos,
                        i = readUtf8(this.buf, this.pos, t);
                    return this.pos = t, i
                },
                readBytes: function() {
                    var t = this.readVarint() + this.pos,
                        i = this.buf.subarray(this.pos, t);
                    return this.pos = t, i
                },
                readPackedVarint: function(t, i) { var e = readPackedEnd(this); for (t = t || []; this.pos < e;) t.push(this.readVarint(i)); return t },
                readPackedSVarint: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readSVarint()); return t },
                readPackedBoolean: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readBoolean()); return t },
                readPackedFloat: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readFloat()); return t },
                readPackedDouble: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readDouble()); return t },
                readPackedFixed32: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readFixed32()); return t },
                readPackedSFixed32: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readSFixed32()); return t },
                readPackedFixed64: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readFixed64()); return t },
                readPackedSFixed64: function(t) { var i = readPackedEnd(this); for (t = t || []; this.pos < i;) t.push(this.readSFixed64()); return t },
                skip: function(t) {
                    var i = 7 & t;
                    if (i === Pbf.Varint)
                        for (; this.buf[this.pos++] > 127;);
                    else if (i === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
                    else if (i === Pbf.Fixed32) this.pos += 4;
                    else {
                        if (i !== Pbf.Fixed64) throw new Error("Unimplemented type: " + i);
                        this.pos += 8
                    }
                },
                writeTag: function(t, i) { this.writeVarint(t << 3 | i) },
                realloc: function(t) {
                    for (var i = this.length || 16; i < this.pos + t;) i *= 2;
                    if (i !== this.length) {
                        var e = new Uint8Array(i);
                        e.set(this.buf), this.buf = e, this.length = i
                    }
                },
                finish: function() { return this.length = this.pos, this.pos = 0, this.buf.subarray(0, this.length) },
                writeFixed32: function(t) { this.realloc(4), writeInt32(this.buf, t, this.pos), this.pos += 4 },
                writeSFixed32: function(t) { this.realloc(4), writeInt32(this.buf, t, this.pos), this.pos += 4 },
                writeFixed64: function(t) { this.realloc(8), writeInt32(this.buf, -1 & t, this.pos), writeInt32(this.buf, Math.floor(t * SHIFT_RIGHT_32), this.pos + 4), this.pos += 8 },
                writeSFixed64: function(t) { this.realloc(8), writeInt32(this.buf, -1 & t, this.pos), writeInt32(this.buf, Math.floor(t * SHIFT_RIGHT_32), this.pos + 4), this.pos += 8 },
                writeVarint: function(t) {
                    if ((t = +t || 0) > 268435455 || t < 0) return void writeBigVarint(t, this);
                    this.realloc(4), this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0), t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127)))
                },
                writeSVarint: function(t) { this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t) },
                writeBoolean: function(t) { this.writeVarint(Boolean(t)) },
                writeString: function(t) {
                    t = String(t), this.realloc(4 * t.length), this.pos++;
                    var i = this.pos;
                    this.pos = writeUtf8(this.buf, t, this.pos);
                    var e = this.pos - i;
                    e >= 128 && makeRoomForExtraLength(i, e, this), this.pos = i - 1, this.writeVarint(e), this.pos += e
                },
                writeFloat: function(t) { this.realloc(4), ieee754.write(this.buf, t, this.pos, !0, 23, 4), this.pos += 4 },
                writeDouble: function(t) { this.realloc(8), ieee754.write(this.buf, t, this.pos, !0, 52, 8), this.pos += 8 },
                writeBytes: function(t) {
                    var i = t.length;
                    this.writeVarint(i), this.realloc(i);
                    for (var e = 0; e < i; e++) this.buf[this.pos++] = t[e]
                },
                writeRawMessage: function(t, i) {
                    this.pos++;
                    var e = this.pos;
                    t(i, this);
                    var r = this.pos - e;
                    r >= 128 && makeRoomForExtraLength(e, r, this), this.pos = e - 1, this.writeVarint(r), this.pos += r
                },
                writeMessage: function(t, i, e) { this.writeTag(t, Pbf.Bytes), this.writeRawMessage(i, e) },
                writePackedVarint: function(t, i) { this.writeMessage(t, writePackedVarint, i) },
                writePackedSVarint: function(t, i) { this.writeMessage(t, writePackedSVarint, i) },
                writePackedBoolean: function(t, i) { this.writeMessage(t, writePackedBoolean, i) },
                writePackedFloat: function(t, i) { this.writeMessage(t, writePackedFloat, i) },
                writePackedDouble: function(t, i) { this.writeMessage(t, writePackedDouble, i) },
                writePackedFixed32: function(t, i) { this.writeMessage(t, writePackedFixed32, i) },
                writePackedSFixed32: function(t, i) { this.writeMessage(t, writePackedSFixed32, i) },
                writePackedFixed64: function(t, i) { this.writeMessage(t, writePackedFixed64, i) },
                writePackedSFixed64: function(t, i) { this.writeMessage(t, writePackedSFixed64, i) },
                writeBytesField: function(t, i) { this.writeTag(t, Pbf.Bytes), this.writeBytes(i) },
                writeFixed32Field: function(t, i) { this.writeTag(t, Pbf.Fixed32), this.writeFixed32(i) },
                writeSFixed32Field: function(t, i) { this.writeTag(t, Pbf.Fixed32), this.writeSFixed32(i) },
                writeFixed64Field: function(t, i) { this.writeTag(t, Pbf.Fixed64), this.writeFixed64(i) },
                writeSFixed64Field: function(t, i) { this.writeTag(t, Pbf.Fixed64), this.writeSFixed64(i) },
                writeVarintField: function(t, i) { this.writeTag(t, Pbf.Varint), this.writeVarint(i) },
                writeSVarintField: function(t, i) { this.writeTag(t, Pbf.Varint), this.writeSVarint(i) },
                writeStringField: function(t, i) { this.writeTag(t, Pbf.Bytes), this.writeString(i) },
                writeFloatField: function(t, i) { this.writeTag(t, Pbf.Fixed32), this.writeFloat(i) },
                writeDoubleField: function(t, i) { this.writeTag(t, Pbf.Fixed64), this.writeDouble(i) },
                writeBooleanField: function(t, i) { this.writeVarintField(t, Boolean(i)) }
            };
        }, { "ieee754": 24 }],
        39: [function(_dereq_, module, exports) {
            function defaultSetTimout() { throw new Error("setTimeout has not been defined") }

            function defaultClearTimeout() { throw new Error("clearTimeout has not been defined") }

            function runTimeout(e) { if (cachedSetTimeout === setTimeout) return setTimeout(e, 0); if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, setTimeout(e, 0); try { return cachedSetTimeout(e, 0) } catch (t) { try { return cachedSetTimeout.call(null, e, 0) } catch (t) { return cachedSetTimeout.call(this, e, 0) } } }

            function runClearTimeout(e) { if (cachedClearTimeout === clearTimeout) return clearTimeout(e); if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, clearTimeout(e); try { return cachedClearTimeout(e) } catch (t) { try { return cachedClearTimeout.call(null, e) } catch (t) { return cachedClearTimeout.call(this, e) } } }

            function cleanUpNextTick() { draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, queue.length && drainQueue()) }

            function drainQueue() {
                if (!draining) {
                    var e = runTimeout(cleanUpNextTick);
                    draining = !0;
                    for (var t = queue.length; t;) {
                        for (currentQueue = queue, queue = []; ++queueIndex < t;) currentQueue && currentQueue[queueIndex].run();
                        queueIndex = -1, t = queue.length
                    }
                    currentQueue = null, draining = !1, runClearTimeout(e)
                }
            }

            function Item(e, t) { this.fun = e, this.array = t }

            function noop() {}
            var process = module.exports = {},
                cachedSetTimeout, cachedClearTimeout;
            ! function() { try { cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout } catch (e) { cachedSetTimeout = defaultSetTimout } try { cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout } catch (e) { cachedClearTimeout = defaultClearTimeout } }();
            var queue = [],
                draining = !1,
                currentQueue, queueIndex = -1;
            process.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                queue.push(new Item(e, t)), 1 !== queue.length || draining || runTimeout(drainQueue)
            }, Item.prototype.run = function() { this.fun.apply(null, this.array) }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, process.listeners = function(e) { return [] }, process.binding = function(e) { throw new Error("process.binding is not supported") }, process.cwd = function() { return "/" }, process.chdir = function(e) { throw new Error("process.chdir is not supported") }, process.umask = function() { return 0 };
        }, {}],
        40: [function(_dereq_, module, exports) {
            "use strict";

            function partialSort(a, t, r, o, p) {
                for (r = r || 0, o = o || a.length - 1, p = p || defaultCompare; o > r;) {
                    if (o - r > 600) {
                        var f = o - r + 1,
                            e = t - r + 1,
                            l = Math.log(f),
                            s = .5 * Math.exp(2 * l / 3),
                            i = .5 * Math.sqrt(l * s * (f - s) / f) * (e - f / 2 < 0 ? -1 : 1);
                        partialSort(a, t, Math.max(r, Math.floor(t - e * s / f + i)), Math.min(o, Math.floor(t + (f - e) * s / f + i)), p)
                    }
                    var n = a[t],
                        h = r,
                        u = o;
                    for (swap(a, r, t), p(a[o], n) > 0 && swap(a, r, o); h < u;) { for (swap(a, h, u), h++, u--; p(a[h], n) < 0;) h++; for (; p(a[u], n) > 0;) u-- }
                    0 === p(a[r], n) ? swap(a, r, u) : (u++, swap(a, u, o)), u <= t && (r = u + 1), t <= u && (o = u - 1)
                }
            }

            function swap(a, t, r) {
                var o = a[t];
                a[t] = a[r], a[r] = o
            }

            function defaultCompare(a, t) { return a < t ? -1 : a > t ? 1 : 0 }
            module.exports = partialSort;
        }, {}],
        41: [function(_dereq_, module, exports) {
            "use strict";

            function supercluster(t) { return new SuperCluster(t) }

            function SuperCluster(t) { this.options = extend(Object.create(this.options), t), this.trees = new Array(this.options.maxZoom + 1) }

            function createCluster(t, e, n, o, i) { return { x: t, y: e, zoom: 1 / 0, id: o, properties: i, parentId: -1, numPoints: n } }

            function createPointCluster(t, e) { var n = t.geometry.coordinates; return { x: lngX(n[0]), y: latY(n[1]), zoom: 1 / 0, id: e, parentId: -1 } }

            function getClusterJSON(t) { return { type: "Feature", properties: getClusterProperties(t), geometry: { type: "Point", coordinates: [xLng(t.x), yLat(t.y)] } } }

            function getClusterProperties(t) {
                var e = t.numPoints,
                    n = e >= 1e4 ? Math.round(e / 1e3) + "k" : e >= 1e3 ? Math.round(e / 100) / 10 + "k" : e;
                return extend(extend({}, t.properties), { cluster: !0, cluster_id: t.id, point_count: e, point_count_abbreviated: n })
            }

            function lngX(t) { return t / 360 + .5 }

            function latY(t) {
                var e = Math.sin(t * Math.PI / 180),
                    n = .5 - .25 * Math.log((1 + e) / (1 - e)) / Math.PI;
                return n < 0 ? 0 : n > 1 ? 1 : n
            }

            function xLng(t) { return 360 * (t - .5) }

            function yLat(t) { var e = (180 - 360 * t) * Math.PI / 180; return 360 * Math.atan(Math.exp(e)) / Math.PI - 90 }

            function extend(t, e) { for (var n in e) t[n] = e[n]; return t }

            function getX(t) { return t.x }

            function getY(t) { return t.y }
            var kdbush = _dereq_("kdbush");
            module.exports = supercluster, SuperCluster.prototype = {
                options: { minZoom: 0, maxZoom: 16, radius: 40, extent: 512, nodeSize: 64, log: !1, reduce: null, initial: function() { return {} }, map: function(t) { return t } },
                load: function(t) {
                    var e = this.options.log;
                    e && console.time("total time");
                    var n = "prepare " + t.length + " points";
                    e && console.time(n), this.points = t;
                    var o = t.map(createPointCluster);
                    e && console.timeEnd(n);
                    for (var i = this.options.maxZoom; i >= this.options.minZoom; i--) {
                        var r = +Date.now();
                        this.trees[i + 1] = kdbush(o, getX, getY, this.options.nodeSize, Float32Array), o = this._cluster(o, i), e && console.log("z%d: %d clusters in %dms", i, o.length, +Date.now() - r)
                    }
                    return this.trees[this.options.minZoom] = kdbush(o, getX, getY, this.options.nodeSize, Float32Array), e && console.timeEnd("total time"), this
                },
                getClusters: function(t, e) {
                    for (var n = this.trees[this._limitZoom(e)], o = n.range(lngX(t[0]), latY(t[3]), lngX(t[2]), latY(t[1])), i = [], r = 0; r < o.length; r++) {
                        var s = n.points[o[r]];
                        i.push(s.numPoints ? getClusterJSON(s) : this.points[s.id])
                    }
                    return i
                },
                getChildren: function(t, e) {
                    for (var n = this.trees[e + 1].points[t], o = this.options.radius / (this.options.extent * Math.pow(2, e)), i = this.trees[e + 1].within(n.x, n.y, o), r = [], s = 0; s < i.length; s++) {
                        var u = this.trees[e + 1].points[i[s]];
                        u.parentId === t && r.push(u.numPoints ? getClusterJSON(u) : this.points[u.id])
                    }
                    return r
                },
                getLeaves: function(t, e, n, o) { n = n || 10, o = o || 0; var i = []; return this._appendLeaves(i, t, e, n, o, 0), i },
                getTile: function(t, e, n) {
                    var o = this.trees[this._limitZoom(t)],
                        i = Math.pow(2, t),
                        r = this.options.extent,
                        s = this.options.radius,
                        u = s / r,
                        a = (n - u) / i,
                        p = (n + 1 + u) / i,
                        h = { features: [] };
                    return this._addTileFeatures(o.range((e - u) / i, a, (e + 1 + u) / i, p), o.points, e, n, i, h), 0 === e && this._addTileFeatures(o.range(1 - u / i, a, 1, p), o.points, i, n, i, h), e === i - 1 && this._addTileFeatures(o.range(0, a, u / i, p), o.points, -1, n, i, h), h.features.length ? h : null
                },
                getClusterExpansionZoom: function(t, e) {
                    for (; e < this.options.maxZoom;) {
                        var n = this.getChildren(t, e);
                        if (e++, 1 !== n.length) break;
                        t = n[0].properties.cluster_id
                    }
                    return e
                },
                _appendLeaves: function(t, e, n, o, i, r) { for (var s = this.getChildren(e, n), u = 0; u < s.length; u++) { var a = s[u].properties; if (a.cluster ? r + a.point_count <= i ? r += a.point_count : r = this._appendLeaves(t, a.cluster_id, n + 1, o, i, r) : r < i ? r++ : t.push(s[u]), t.length === o) break } return r },
                _addTileFeatures: function(t, e, n, o, i, r) {
                    for (var s = 0; s < t.length; s++) {
                        var u = e[t[s]];
                        r.features.push({
                            type: 1,
                            geometry: [
                                [Math.round(this.options.extent * (u.x * i - n)), Math.round(this.options.extent * (u.y * i - o))]
                            ],
                            tags: u.numPoints ? getClusterProperties(u) : this.points[u.id].properties
                        })
                    }
                },
                _limitZoom: function(t) { return Math.max(this.options.minZoom, Math.min(t, this.options.maxZoom + 1)) },
                _cluster: function(t, e) {
                    for (var n = [], o = this.options.radius / (this.options.extent * Math.pow(2, e)), i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (!(r.zoom <= e)) {
                            r.zoom = e;
                            var s = this.trees[e + 1],
                                u = s.within(r.x, r.y, o),
                                a = r.numPoints || 1,
                                p = r.x * a,
                                h = r.y * a,
                                l = null;
                            this.options.reduce && (l = this.options.initial(), this._accumulate(l, r));
                            for (var c = 0; c < u.length; c++) {
                                var d = s.points[u[c]];
                                if (e < d.zoom) {
                                    var m = d.numPoints || 1;
                                    d.zoom = e, p += d.x * m, h += d.y * m, a += m, d.parentId = i, this.options.reduce && this._accumulate(l, d)
                                }
                            }
                            1 === a ? n.push(r) : (r.parentId = i, n.push(createCluster(p / a, h / a, a, i, l)))
                        }
                    }
                    return n
                },
                _accumulate: function(t, e) {
                    var n = e.numPoints ? e.properties : this.options.map(this.points[e.id].properties);
                    this.options.reduce(t, n)
                }
            };
        }, { "kdbush": 25 }],
        42: [function(_dereq_, module, exports) {
            "use strict";

            function TinyQueue(t, i) {
                if (!(this instanceof TinyQueue)) return new TinyQueue(t, i);
                if (this.data = t || [], this.length = this.data.length, this.compare = i || defaultCompare, this.length > 0)
                    for (var e = this.length >> 1; e >= 0; e--) this._down(e)
            }

            function defaultCompare(t, i) { return t < i ? -1 : t > i ? 1 : 0 }
            module.exports = TinyQueue, TinyQueue.prototype = {
                push: function(t) { this.data.push(t), this.length++, this._up(this.length - 1) },
                pop: function() { if (0 !== this.length) { var t = this.data[0]; return this.length--, this.length > 0 && (this.data[0] = this.data[this.length], this._down(0)), this.data.pop(), t } },
                peek: function() { return this.data[0] },
                _up: function(t) {
                    for (var i = this.data, e = this.compare, h = i[t]; t > 0;) {
                        var n = t - 1 >> 1,
                            a = i[n];
                        if (e(h, a) >= 0) break;
                        i[t] = a, t = n
                    }
                    i[t] = h
                },
                _down: function(t) {
                    for (var i = this.data, e = this.compare, h = this.length, n = h >> 1, a = i[t]; t < n;) {
                        var s = 1 + (t << 1),
                            u = s + 1,
                            r = i[s];
                        if (u < h && e(i[u], r) < 0 && (s = u, r = i[u]), e(r, a) >= 0) break;
                        i[t] = r, t = s
                    }
                    i[t] = a
                }
            };
        }, {}],
        43: [function(_dereq_, module, exports) {
            "function" == typeof Object.create ? module.exports = function(t, e) { t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }) } : module.exports = function(t, e) {
                t.super_ = e;
                var o = function() {};
                o.prototype = e.prototype, t.prototype = new o, t.prototype.constructor = t
            };
        }, {}],
        44: [function(_dereq_, module, exports) {
            module.exports = function(o) { return o && "object" == typeof o && "function" == typeof o.copy && "function" == typeof o.fill && "function" == typeof o.readUInt8 };
        }, {}],
        45: [function(_dereq_, module, exports) {
            (function(process, global) {
                function inspect(e, r) { var t = { seen: [], stylize: stylizeNoColor }; return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), isBoolean(r) ? t.showHidden = r : r && exports._extend(t, r), isUndefined(t.showHidden) && (t.showHidden = !1), isUndefined(t.depth) && (t.depth = 2), isUndefined(t.colors) && (t.colors = !1), isUndefined(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = stylizeWithColor), formatValue(t, e, t.depth) }

                function stylizeWithColor(e, r) { var t = inspect.styles[r]; return t ? "[" + inspect.colors[t][0] + "m" + e + "[" + inspect.colors[t][1] + "m" : e }

                function stylizeNoColor(e, r) { return e }

                function arrayToHash(e) { var r = {}; return e.forEach(function(e, t) { r[e] = !0 }), r }

                function formatValue(e, r, t) {
                    if (e.customInspect && r && isFunction(r.inspect) && r.inspect !== exports.inspect && (!r.constructor || r.constructor.prototype !== r)) { var n = r.inspect(t, e); return isString(n) || (n = formatValue(e, n, t)), n }
                    var i = formatPrimitive(e, r);
                    if (i) return i;
                    var o = Object.keys(r),
                        s = arrayToHash(o);
                    if (e.showHidden && (o = Object.getOwnPropertyNames(r)), isError(r) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return formatError(r);
                    if (0 === o.length) { if (isFunction(r)) { var u = r.name ? ": " + r.name : ""; return e.stylize("[Function" + u + "]", "special") } if (isRegExp(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp"); if (isDate(r)) return e.stylize(Date.prototype.toString.call(r), "date"); if (isError(r)) return formatError(r) }
                    var c = "",
                        a = !1,
                        l = ["{", "}"];
                    if (isArray(r) && (a = !0, l = ["[", "]"]), isFunction(r)) { c = " [Function" + (r.name ? ": " + r.name : "") + "]" }
                    if (isRegExp(r) && (c = " " + RegExp.prototype.toString.call(r)), isDate(r) && (c = " " + Date.prototype.toUTCString.call(r)), isError(r) && (c = " " + formatError(r)), 0 === o.length && (!a || 0 == r.length)) return l[0] + c + l[1];
                    if (t < 0) return isRegExp(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special");
                    e.seen.push(r);
                    var p;
                    return p = a ? formatArray(e, r, t, s, o) : o.map(function(n) { return formatProperty(e, r, t, s, n, a) }), e.seen.pop(), reduceToSingleString(p, c, l)
                }

                function formatPrimitive(e, r) { if (isUndefined(r)) return e.stylize("undefined", "undefined"); if (isString(r)) { var t = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'"; return e.stylize(t, "string") } return isNumber(r) ? e.stylize("" + r, "number") : isBoolean(r) ? e.stylize("" + r, "boolean") : isNull(r) ? e.stylize("null", "null") : void 0 }

                function formatError(e) { return "[" + Error.prototype.toString.call(e) + "]" }

                function formatArray(e, r, t, n, i) { for (var o = [], s = 0, u = r.length; s < u; ++s) hasOwnProperty(r, String(s)) ? o.push(formatProperty(e, r, t, n, String(s), !0)) : o.push(""); return i.forEach(function(i) { i.match(/^\d+$/) || o.push(formatProperty(e, r, t, n, i, !0)) }), o }

                function formatProperty(e, r, t, n, i, o) {
                    var s, u, c;
                    if (c = Object.getOwnPropertyDescriptor(r, i) || { value: r[i] }, c.get ? u = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (u = e.stylize("[Setter]", "special")), hasOwnProperty(n, i) || (s = "[" + i + "]"), u || (e.seen.indexOf(c.value) < 0 ? (u = isNull(t) ? formatValue(e, c.value, null) : formatValue(e, c.value, t - 1), u.indexOf("\n") > -1 && (u = o ? u.split("\n").map(function(e) { return "  " + e }).join("\n").substr(2) : "\n" + u.split("\n").map(function(e) { return "   " + e }).join("\n"))) : u = e.stylize("[Circular]", "special")), isUndefined(s)) {
                        if (o && i.match(/^\d+$/)) return u;
                        s = JSON.stringify("" + i), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
                    }
                    return s + ": " + u
                }

                function reduceToSingleString(e, r, t) { var n = 0; return e.reduce(function(e, r) { return n++, r.indexOf("\n") >= 0 && n++, e + r.replace(/\u001b\[\d\d?m/g, "").length + 1 }, 0) > 60 ? t[0] + ("" === r ? "" : r + "\n ") + " " + e.join(",\n  ") + " " + t[1] : t[0] + r + " " + e.join(", ") + " " + t[1] }

                function isArray(e) { return Array.isArray(e) }

                function isBoolean(e) { return "boolean" == typeof e }

                function isNull(e) { return null === e }

                function isNullOrUndefined(e) { return null == e }

                function isNumber(e) { return "number" == typeof e }

                function isString(e) { return "string" == typeof e }

                function isSymbol(e) { return "symbol" == typeof e }

                function isUndefined(e) { return void 0 === e }

                function isRegExp(e) { return isObject(e) && "[object RegExp]" === objectToString(e) }

                function isObject(e) { return "object" == typeof e && null !== e }

                function isDate(e) { return isObject(e) && "[object Date]" === objectToString(e) }

                function isError(e) { return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error) }

                function isFunction(e) { return "function" == typeof e }

                function isPrimitive(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e }

                function objectToString(e) { return Object.prototype.toString.call(e) }

                function pad(e) { return e < 10 ? "0" + e.toString(10) : e.toString(10) }

                function timestamp() {
                    var e = new Date,
                        r = [pad(e.getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":");
                    return [e.getDate(), months[e.getMonth()], r].join(" ")
                }

                function hasOwnProperty(e, r) { return Object.prototype.hasOwnProperty.call(e, r) }
                var formatRegExp = /%[sdj%]/g;
                exports.format = function(e) {
                    if (!isString(e)) { for (var r = [], t = 0; t < arguments.length; t++) r.push(inspect(arguments[t])); return r.join(" ") }
                    for (var t = 1, n = arguments, i = n.length, o = String(e).replace(formatRegExp, function(e) {
                            if ("%%" === e) return "%";
                            if (t >= i) return e;
                            switch (e) {
                                case "%s":
                                    return String(n[t++]);
                                case "%d":
                                    return Number(n[t++]);
                                case "%j":
                                    try { return JSON.stringify(n[t++]) } catch (e) { return "[Circular]" }
                                default:
                                    return e
                            }
                        }), s = n[t]; t < i; s = n[++t]) isNull(s) || !isObject(s) ? o += " " + s : o += " " + inspect(s);
                    return o
                }, exports.deprecate = function(e, r) {
                    function t() {
                        if (!n) {
                            if (process.throwDeprecation) throw new Error(r);
                            process.traceDeprecation ? console.trace(r) : console.error(r), n = !0
                        }
                        return e.apply(this, arguments)
                    }
                    if (isUndefined(global.process)) return function() { return exports.deprecate(e, r).apply(this, arguments) };
                    if (!0 === process.noDeprecation) return e;
                    var n = !1;
                    return t
                };
                var debugs = {},
                    debugEnviron;
                exports.debuglog = function(e) {
                    if (isUndefined(debugEnviron) && (debugEnviron = process.env.NODE_DEBUG || ""), e = e.toUpperCase(), !debugs[e])
                        if (new RegExp("\\b" + e + "\\b", "i").test(debugEnviron)) {
                            var r = process.pid;
                            debugs[e] = function() {
                                var t = exports.format.apply(exports, arguments);
                                console.error("%s %d: %s", e, r, t)
                            }
                        } else debugs[e] = function() {};
                    return debugs[e]
                }, exports.inspect = inspect, inspect.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, inspect.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, exports.isArray = isArray, exports.isBoolean = isBoolean, exports.isNull = isNull, exports.isNullOrUndefined = isNullOrUndefined, exports.isNumber = isNumber, exports.isString = isString, exports.isSymbol = isSymbol, exports.isUndefined = isUndefined, exports.isRegExp = isRegExp, exports.isObject = isObject, exports.isDate = isDate, exports.isError = isError, exports.isFunction = isFunction, exports.isPrimitive = isPrimitive, exports.isBuffer = _dereq_("./support/isBuffer");
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                exports.log = function() { console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments)) }, exports.inherits = _dereq_("inherits"), exports._extend = function(e, r) { if (!r || !isObject(r)) return e; for (var t = Object.keys(r), n = t.length; n--;) e[t[n]] = r[t[n]]; return e };
            }).call(this, _dereq_('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

        }, { "./support/isBuffer": 44, "_process": 39, "inherits": 43 }],
        46: [function(_dereq_, module, exports) {
            function fromVectorTileJs(e) { var r = new Pbf; return writeTile(e, r), r.finish() }

            function fromGeojsonVt(e) { var r = {}; for (var t in e) r[t] = new GeoJSONWrapper(e[t].features), r[t].name = t; return fromVectorTileJs({ layers: r }) }

            function writeTile(e, r) { for (var t in e.layers) r.writeMessage(3, writeLayer, e.layers[t]) }

            function writeLayer(e, r) { r.writeVarintField(15, e.version || 1), r.writeStringField(1, e.name || ""), r.writeVarintField(5, e.extent || 4096); var t, i = { keys: [], values: [], keycache: {}, valuecache: {} }; for (t = 0; t < e.length; t++) i.feature = e.feature(t), r.writeMessage(2, writeFeature, i); var a = i.keys; for (t = 0; t < a.length; t++) r.writeStringField(3, a[t]); var o = i.values; for (t = 0; t < o.length; t++) r.writeMessage(4, writeValue, o[t]) }

            function writeFeature(e, r) {
                var t = e.feature;
                void 0 !== t.id && r.writeVarintField(1, t.id), r.writeMessage(2, writeProperties, e), r.writeVarintField(3, t.type), r.writeMessage(4, writeGeometry, t)
            }

            function writeProperties(e, r) {
                var t = e.feature,
                    i = e.keys,
                    a = e.values,
                    o = e.keycache,
                    n = e.valuecache;
                for (var l in t.properties) {
                    var s = o[l];
                    void 0 === s && (i.push(l), s = i.length - 1, o[l] = s), r.writeVarint(s);
                    var u = t.properties[l],
                        f = typeof u;
                    "string" !== f && "boolean" !== f && "number" !== f && (u = JSON.stringify(u));
                    var w = f + ":" + u,
                        v = n[w];
                    void 0 === v && (a.push(u), v = a.length - 1, n[w] = v), r.writeVarint(v)
                }
            }

            function command(e, r) { return (r << 3) + (7 & e) }

            function zigzag(e) { return e << 1 ^ e >> 31 }

            function writeGeometry(e, r) {
                for (var t = e.loadGeometry(), i = e.type, a = 0, o = 0, n = t.length, l = 0; l < n; l++) {
                    var s = t[l],
                        u = 1;
                    1 === i && (u = s.length), r.writeVarint(command(1, u));
                    for (var f = 0; f < s.length; f++) {
                        1 === f && 1 !== i && r.writeVarint(command(2, s.length - 1));
                        var w = s[f].x - a,
                            v = s[f].y - o;
                        r.writeVarint(zigzag(w)), r.writeVarint(zigzag(v)), a += w, o += v
                    }
                }
            }

            function writeValue(e, r) { var t = typeof e; "string" === t ? r.writeStringField(1, e) : "boolean" === t ? r.writeBooleanField(7, e) : "number" === t && (e % 1 != 0 ? r.writeDoubleField(3, e) : e < 0 ? r.writeSVarintField(6, e) : r.writeVarintField(5, e)) }
            var Pbf = _dereq_("pbf"),
                GeoJSONWrapper = _dereq_("./lib/geojson_wrapper");
            module.exports = fromVectorTileJs, module.exports.fromVectorTileJs = fromVectorTileJs, module.exports.fromGeojsonVt = fromGeojsonVt, module.exports.GeoJSONWrapper = GeoJSONWrapper;
        }, { "./lib/geojson_wrapper": 47, "pbf": 38 }],
        47: [function(_dereq_, module, exports) {
            "use strict";

            function GeoJSONWrapper(e) { this.features = e, this.length = e.length }

            function FeatureWrapper(e) { this.id = "number" == typeof e.id ? e.id : void 0, this.type = e.type, this.rawGeometry = 1 === e.type ? [e.geometry] : e.geometry, this.properties = e.tags, this.extent = 4096 }
            var Point = _dereq_("@mapbox/point-geometry"),
                VectorTileFeature = _dereq_("@mapbox/vector-tile").VectorTileFeature;
            module.exports = GeoJSONWrapper, GeoJSONWrapper.prototype.feature = function(e) { return new FeatureWrapper(this.features[e]) }, FeatureWrapper.prototype.loadGeometry = function() {
                var e = this.rawGeometry;
                this.geometry = [];
                for (var t = 0; t < e.length; t++) {
                    for (var r = e[t], o = [], a = 0; a < r.length; a++) o.push(new Point(r[a][0], r[a][1]));
                    this.geometry.push(o)
                }
                return this.geometry
            }, FeatureWrapper.prototype.bbox = function() {
                this.geometry || this.loadGeometry();
                for (var e = this.geometry, t = 1 / 0, r = -1 / 0, o = 1 / 0, a = -1 / 0, p = 0; p < e.length; p++)
                    for (var i = e[p], n = 0; n < i.length; n++) {
                        var h = i[n];
                        t = Math.min(t, h.x), r = Math.max(r, h.x), o = Math.min(o, h.y), a = Math.max(a, h.y)
                    }
                return [t, o, r, a]
            }, FeatureWrapper.prototype.toGeoJSON = VectorTileFeature.prototype.toGeoJSON;
        }, { "@mapbox/point-geometry": 2, "@mapbox/vector-tile": 6 }],
        48: [function(_dereq_, module, exports) {
            var bundleFn = arguments[3],
                sources = arguments[4],
                cache = arguments[5],
                stringify = JSON.stringify;
            module.exports = function(r, e) {
                function t(r) {
                    d[r] = !0;
                    for (var e in sources[r][1]) {
                        var n = sources[r][1][e];
                        d[n] || t(n)
                    }
                }
                for (var n, o = Object.keys(cache), a = 0, i = o.length; a < i; a++) {
                    var s = o[a],
                        u = cache[s].exports;
                    if (u === r || u && u.default === r) { n = s; break }
                }
                if (!n) {
                    n = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var f = {}, a = 0, i = o.length; a < i; a++) {
                        var s = o[a];
                        f[s] = s
                    }
                    sources[n] = [Function(["require", "module", "exports"], "(" + r + ")(self)"), f]
                }
                var c = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
                    l = {};
                l[n] = n, sources[c] = [Function(["require"], "var f = require(" + stringify(n) + ");(f.default ? f.default : f)(self);"), l];
                var d = {};
                t(c);
                var g = "(" + bundleFn + ")({" + Object.keys(d).map(function(r) { return stringify(r) + ":[" + sources[r][0] + "," + stringify(sources[r][1]) + "]" }).join(",") + "},{},[" + stringify(c) + "])",
                    v = window.URL || window.webkitURL || window.mozURL || window.msURL,
                    w = new Blob([g], { type: "text/javascript" });
                if (e && e.bare) return w;
                var h = v.createObjectURL(w),
                    b = new Worker(h);
                return b.objectURL = h, b
            };
        }, {}],
        49: [function(_dereq_, module, exports) {
            module.exports.RADIUS = 6378137, module.exports.FLATTENING = 1 / 298.257223563, module.exports.POLAR_RADIUS = 6356752.3142;
        }, {}],
        50: [function(_dereq_, module, exports) {
            module.exports = { "version": "0.42.0" }
        }, {}],
        51: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util");
            module.exports = {
                deserialize: function(e, r) {
                    var t = {};
                    if (!r) return t;
                    for (var i = 0, a = e; i < a.length; i += 1) {
                        var l = a[i],
                            u = l.layerIds.map(function(e) { return r.getLayer(e) }).filter(Boolean);
                        if (0 !== u.length)
                            for (var n = u[0].createBucket(util.extend({ layers: u }, l)), o = 0, f = u; o < f.length; o += 1) {
                                var s = f[o];
                                t[s.id] = n
                            }
                    }
                    return t
                }
            };
        }, { "../util/util": 260 }],
        52: [function(_dereq_, module, exports) {
            "use strict";

            function addCircleVertex(e, r, t, a, i) { e.emplaceBack(2 * r + (a + 1) / 2, 2 * t + (i + 1) / 2) }
            var ref = _dereq_("../segment"),
                SegmentVector = ref.SegmentVector,
                VertexBuffer = _dereq_("../../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../../gl/index_buffer"),
                ref$1 = _dereq_("../program_configuration"),
                ProgramConfigurationSet = ref$1.ProgramConfigurationSet,
                createVertexArrayType = _dereq_("../vertex_array_type"),
                ref$2 = _dereq_("../index_array_type"),
                TriangleIndexArray = ref$2.TriangleIndexArray,
                loadGeometry = _dereq_("../load_geometry"),
                EXTENT = _dereq_("../extent"),
                circleInterface = { layoutAttributes: [{ name: "a_pos", components: 2, type: "Int16" }], indexArrayType: TriangleIndexArray, paintAttributes: [{ property: "circle-color" }, { property: "circle-radius" }, { property: "circle-blur" }, { property: "circle-opacity" }, { property: "circle-stroke-color" }, { property: "circle-stroke-width" }, { property: "circle-stroke-opacity" }] },
                LayoutVertexArrayType = createVertexArrayType(circleInterface.layoutAttributes),
                CircleBucket = function(e) { this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.layoutVertexArray = new LayoutVertexArrayType(e.layoutVertexArray), this.indexArray = new TriangleIndexArray(e.indexArray), this.segments = new SegmentVector(e.segments), this.programConfigurations = new ProgramConfigurationSet(this.constructor.programInterface, e.layers, e.zoom, e.programConfigurations) };
            CircleBucket.prototype.populate = function(e, r) {
                for (var t = this, a = 0, i = e; a < i.length; a += 1) {
                    var o = i[a],
                        n = o.feature,
                        y = o.index,
                        u = o.sourceLayerIndex;
                    if (t.layers[0]._featureFilter({ zoom: t.zoom }, n)) {
                        var s = loadGeometry(n);
                        t.addFeature(n, s), r.featureIndex.insert(n, s, y, u, t.index)
                    }
                }
            }, CircleBucket.prototype.isEmpty = function() { return 0 === this.layoutVertexArray.length }, CircleBucket.prototype.serialize = function(e) { return { zoom: this.zoom, layerIds: this.layers.map(function(e) { return e.id }), layoutVertexArray: this.layoutVertexArray.serialize(e), indexArray: this.indexArray.serialize(e), programConfigurations: this.programConfigurations.serialize(e), segments: this.segments.get() } }, CircleBucket.prototype.upload = function(e) { this.layoutVertexBuffer = new VertexBuffer(e, this.layoutVertexArray), this.indexBuffer = new IndexBuffer(e, this.indexArray), this.programConfigurations.upload(e) }, CircleBucket.prototype.destroy = function() { this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy()) }, CircleBucket.prototype.addFeature = function(e, r) {
                for (var t = this, a = 0, i = r; a < i.length; a += 1)
                    for (var o = i[a], n = 0, y = o; n < y.length; n += 1) {
                        var u = y[n],
                            s = u.x,
                            c = u.y;
                        if (!(s < 0 || s >= EXTENT || c < 0 || c >= EXTENT)) {
                            var l = t.segments.prepareSegment(4, t.layoutVertexArray, t.indexArray),
                                p = l.vertexLength;
                            addCircleVertex(t.layoutVertexArray, s, c, -1, -1), addCircleVertex(t.layoutVertexArray, s, c, 1, -1), addCircleVertex(t.layoutVertexArray, s, c, 1, 1), addCircleVertex(t.layoutVertexArray, s, c, -1, 1), t.indexArray.emplaceBack(p, p + 1, p + 2), t.indexArray.emplaceBack(p, p + 3, p + 2), l.vertexLength += 4, l.primitiveLength += 2
                        }
                    }
                this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e)
            }, CircleBucket.programInterface = circleInterface, module.exports = CircleBucket;
        }, { "../../gl/index_buffer": 71, "../../gl/vertex_buffer": 72, "../extent": 58, "../index_array_type": 60, "../load_geometry": 61, "../program_configuration": 63, "../segment": 65, "../vertex_array_type": 66 }],
        53: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../segment"),
                SegmentVector = ref.SegmentVector,
                VertexBuffer = _dereq_("../../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../../gl/index_buffer"),
                ref$1 = _dereq_("../program_configuration"),
                ProgramConfigurationSet = ref$1.ProgramConfigurationSet,
                createVertexArrayType = _dereq_("../vertex_array_type"),
                ref$2 = _dereq_("../index_array_type"),
                LineIndexArray = ref$2.LineIndexArray,
                TriangleIndexArray = ref$2.TriangleIndexArray,
                loadGeometry = _dereq_("../load_geometry"),
                earcut = _dereq_("earcut"),
                classifyRings = _dereq_("../../util/classify_rings"),
                EARCUT_MAX_RINGS = 500,
                fillInterface = { layoutAttributes: [{ name: "a_pos", components: 2, type: "Int16" }], indexArrayType: TriangleIndexArray, indexArrayType2: LineIndexArray, paintAttributes: [{ property: "fill-color" }, { property: "fill-outline-color" }, { property: "fill-opacity" }] },
                LayoutVertexArrayType = createVertexArrayType(fillInterface.layoutAttributes),
                FillBucket = function(e) { this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.layoutVertexArray = new LayoutVertexArrayType(e.layoutVertexArray), this.indexArray = new TriangleIndexArray(e.indexArray), this.indexArray2 = new LineIndexArray(e.indexArray2), this.programConfigurations = new ProgramConfigurationSet(fillInterface, e.layers, e.zoom, e.programConfigurations), this.segments = new SegmentVector(e.segments), this.segments2 = new SegmentVector(e.segments2) };
            FillBucket.prototype.populate = function(e, r) {
                for (var t = this, i = 0, a = e; i < a.length; i += 1) {
                    var n = a[i],
                        o = n.feature,
                        s = n.index,
                        y = n.sourceLayerIndex;
                    if (t.layers[0]._featureFilter({ zoom: t.zoom }, o)) {
                        var l = loadGeometry(o);
                        t.addFeature(o, l), r.featureIndex.insert(o, l, s, y, t.index)
                    }
                }
            }, FillBucket.prototype.isEmpty = function() { return 0 === this.layoutVertexArray.length }, FillBucket.prototype.serialize = function(e) { return { zoom: this.zoom, layerIds: this.layers.map(function(e) { return e.id }), layoutVertexArray: this.layoutVertexArray.serialize(e), indexArray: this.indexArray.serialize(e), indexArray2: this.indexArray2.serialize(e), programConfigurations: this.programConfigurations.serialize(e), segments: this.segments.get(), segments2: this.segments2.get() } }, FillBucket.prototype.upload = function(e) { this.layoutVertexBuffer = new VertexBuffer(e, this.layoutVertexArray), this.indexBuffer = new IndexBuffer(e, this.indexArray), this.indexBuffer2 = new IndexBuffer(e, this.indexArray2), this.programConfigurations.upload(e) }, FillBucket.prototype.destroy = function() { this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.indexBuffer2.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.segments2.destroy()) }, FillBucket.prototype.addFeature = function(e, r) {
                for (var t = this, i = 0, a = classifyRings(r, EARCUT_MAX_RINGS); i < a.length; i += 1) {
                    for (var n = a[i], o = 0, s = 0, y = n; s < y.length; s += 1) { o += y[s].length }
                    for (var l = t.segments.prepareSegment(o, t.layoutVertexArray, t.indexArray), u = l.vertexLength, f = [], g = [], x = 0, p = n; x < p.length; x += 1) {
                        var h = p[x];
                        if (0 !== h.length) {
                            h !== n[0] && g.push(f.length / 2);
                            var d = t.segments2.prepareSegment(h.length, t.layoutVertexArray, t.indexArray2),
                                c = d.vertexLength;
                            t.layoutVertexArray.emplaceBack(h[0].x, h[0].y), t.indexArray2.emplaceBack(c + h.length - 1, c), f.push(h[0].x), f.push(h[0].y);
                            for (var m = 1; m < h.length; m++) t.layoutVertexArray.emplaceBack(h[m].x, h[m].y), t.indexArray2.emplaceBack(c + m - 1, c + m), f.push(h[m].x), f.push(h[m].y);
                            d.vertexLength += h.length, d.primitiveLength += h.length
                        }
                    }
                    for (var A = earcut(f, g), B = 0; B < A.length; B += 3) t.indexArray.emplaceBack(u + A[B], u + A[B + 1], u + A[B + 2]);
                    l.vertexLength += o, l.primitiveLength += A.length / 3
                }
                this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e)
            }, FillBucket.programInterface = fillInterface, module.exports = FillBucket;
        }, { "../../gl/index_buffer": 71, "../../gl/vertex_buffer": 72, "../../util/classify_rings": 243, "../index_array_type": 60, "../load_geometry": 61, "../program_configuration": 63, "../segment": 65, "../vertex_array_type": 66, "earcut": 12 }],
        54: [function(_dereq_, module, exports) {
            "use strict";

            function addVertex(e, r, t, a, i, n, o, u) { e.emplaceBack(r, t, 2 * Math.floor(a * FACTOR) + o, i * FACTOR * 2, n * FACTOR * 2, Math.round(u)) }

            function isBoundaryEdge(e, r) { return e.x === r.x && (e.x < 0 || e.x > EXTENT) || e.y === r.y && (e.y < 0 || e.y > EXTENT) }
            var ref = _dereq_("../segment"),
                SegmentVector = ref.SegmentVector,
                MAX_VERTEX_ARRAY_LENGTH = ref.MAX_VERTEX_ARRAY_LENGTH,
                VertexBuffer = _dereq_("../../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../../gl/index_buffer"),
                ref$1 = _dereq_("../program_configuration"),
                ProgramConfigurationSet = ref$1.ProgramConfigurationSet,
                createVertexArrayType = _dereq_("../vertex_array_type"),
                ref$2 = _dereq_("../index_array_type"),
                TriangleIndexArray = ref$2.TriangleIndexArray,
                loadGeometry = _dereq_("../load_geometry"),
                EXTENT = _dereq_("../extent"),
                earcut = _dereq_("earcut"),
                classifyRings = _dereq_("../../util/classify_rings"),
                EARCUT_MAX_RINGS = 500,
                fillExtrusionInterface = { layoutAttributes: [{ name: "a_pos", components: 2, type: "Int16" }, { name: "a_normal", components: 3, type: "Int16" }, { name: "a_edgedistance", components: 1, type: "Int16" }], indexArrayType: TriangleIndexArray, paintAttributes: [{ property: "fill-extrusion-base" }, { property: "fill-extrusion-height" }, { property: "fill-extrusion-color" }] },
                FACTOR = Math.pow(2, 13),
                LayoutVertexArrayType = createVertexArrayType(fillExtrusionInterface.layoutAttributes),
                FillExtrusionBucket = function(e) { this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.layoutVertexArray = new LayoutVertexArrayType(e.layoutVertexArray), this.indexArray = new TriangleIndexArray(e.indexArray), this.programConfigurations = new ProgramConfigurationSet(fillExtrusionInterface, e.layers, e.zoom, e.programConfigurations), this.segments = new SegmentVector(e.segments) };
            FillExtrusionBucket.prototype.populate = function(e, r) {
                for (var t = this, a = 0, i = e; a < i.length; a += 1) {
                    var n = i[a],
                        o = n.feature,
                        u = n.index,
                        s = n.sourceLayerIndex;
                    if (t.layers[0]._featureFilter({ zoom: t.zoom }, o)) {
                        var y = loadGeometry(o);
                        t.addFeature(o, y), r.featureIndex.insert(o, y, u, s, t.index)
                    }
                }
            }, FillExtrusionBucket.prototype.isEmpty = function() { return 0 === this.layoutVertexArray.length }, FillExtrusionBucket.prototype.serialize = function(e) { return { zoom: this.zoom, layerIds: this.layers.map(function(e) { return e.id }), layoutVertexArray: this.layoutVertexArray.serialize(e), indexArray: this.indexArray.serialize(e), programConfigurations: this.programConfigurations.serialize(e), segments: this.segments.get() } }, FillExtrusionBucket.prototype.upload = function(e) { this.layoutVertexBuffer = new VertexBuffer(e, this.layoutVertexArray), this.indexBuffer = new IndexBuffer(e, this.indexArray), this.programConfigurations.upload(e) }, FillExtrusionBucket.prototype.destroy = function() { this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy()) }, FillExtrusionBucket.prototype.addFeature = function(e, r) {
                for (var t = this, a = 0, i = classifyRings(r, EARCUT_MAX_RINGS); a < i.length; a += 1) {
                    for (var n = i[a], o = 0, u = 0, s = n; u < s.length; u += 1) { o += s[u].length }
                    for (var y = t.segments.prepareSegment(4, t.layoutVertexArray, t.indexArray), l = 0, x = n; l < x.length; l += 1) {
                        var f = x[l];
                        if (0 !== f.length)
                            for (var g = 0, p = 0; p < f.length; p++) {
                                var d = f[p];
                                if (p >= 1) {
                                    var h = f[p - 1];
                                    if (!isBoundaryEdge(d, h)) {
                                        y.vertexLength + 4 > MAX_VERTEX_ARRAY_LENGTH && (y = t.segments.prepareSegment(4, t.layoutVertexArray, t.indexArray));
                                        var A = d.sub(h)._perp()._unit();
                                        addVertex(t.layoutVertexArray, d.x, d.y, A.x, A.y, 0, 0, g), addVertex(t.layoutVertexArray, d.x, d.y, A.x, A.y, 0, 1, g), g += h.dist(d), addVertex(t.layoutVertexArray, h.x, h.y, A.x, A.y, 0, 0, g), addVertex(t.layoutVertexArray, h.x, h.y, A.x, A.y, 0, 1, g);
                                        var c = y.vertexLength;
                                        t.indexArray.emplaceBack(c, c + 1, c + 2), t.indexArray.emplaceBack(c + 1, c + 2, c + 3), y.vertexLength += 4, y.primitiveLength += 2
                                    }
                                }
                            }
                    }
                    y.vertexLength + o > MAX_VERTEX_ARRAY_LENGTH && (y = t.segments.prepareSegment(o, t.layoutVertexArray, t.indexArray));
                    for (var m = [], V = [], E = y.vertexLength, _ = 0, v = n; _ < v.length; _ += 1) {
                        var T = v[_];
                        if (0 !== T.length) {
                            T !== n[0] && V.push(m.length / 2);
                            for (var B = 0; B < T.length; B++) {
                                var R = T[B];
                                addVertex(t.layoutVertexArray, R.x, R.y, 0, 0, 1, 1, 0), m.push(R.x), m.push(R.y)
                            }
                        }
                    }
                    for (var I = earcut(m, V), C = 0; C < I.length; C += 3) t.indexArray.emplaceBack(E + I[C], E + I[C + 1], E + I[C + 2]);
                    y.primitiveLength += I.length / 3, y.vertexLength += o
                }
                this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, e)
            }, FillExtrusionBucket.programInterface = fillExtrusionInterface, module.exports = FillExtrusionBucket;
        }, { "../../gl/index_buffer": 71, "../../gl/vertex_buffer": 72, "../../util/classify_rings": 243, "../extent": 58, "../index_array_type": 60, "../load_geometry": 61, "../program_configuration": 63, "../segment": 65, "../vertex_array_type": 66, "earcut": 12 }],
        55: [function(_dereq_, module, exports) {
            "use strict";
            var CircleBucket = _dereq_("./circle_bucket"),
                heatmapInterface = { layoutAttributes: CircleBucket.programInterface.layoutAttributes, indexArrayType: CircleBucket.programInterface.indexArrayType, paintAttributes: [{ property: "heatmap-weight" }] },
                HeatmapBucket = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(CircleBucket);
            HeatmapBucket.programInterface = heatmapInterface, module.exports = HeatmapBucket;
        }, { "./circle_bucket": 52 }],
        56: [function(_dereq_, module, exports) {
            "use strict";

            function addLineVertex(e, t, r, i, a, n, s) { e.emplaceBack(t.x, t.y, i ? 1 : 0, a ? 1 : -1, Math.round(EXTRUDE_SCALE * r.x) + 128, Math.round(EXTRUDE_SCALE * r.y) + 128, 1 + (0 === n ? 0 : n < 0 ? -1 : 1) | (s * LINE_DISTANCE_SCALE & 63) << 2, s * LINE_DISTANCE_SCALE >> 6) }
            var ref = _dereq_("../segment"),
                SegmentVector = ref.SegmentVector,
                VertexBuffer = _dereq_("../../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../../gl/index_buffer"),
                ref$1 = _dereq_("../program_configuration"),
                ProgramConfigurationSet = ref$1.ProgramConfigurationSet,
                createVertexArrayType = _dereq_("../vertex_array_type"),
                ref$2 = _dereq_("../index_array_type"),
                TriangleIndexArray = ref$2.TriangleIndexArray,
                loadGeometry = _dereq_("../load_geometry"),
                EXTENT = _dereq_("../extent"),
                vectorTileFeatureTypes = _dereq_("@mapbox/vector-tile").VectorTileFeature.types,
                EXTRUDE_SCALE = 63,
                COS_HALF_SHARP_CORNER = Math.cos(Math.PI / 180 * 37.5),
                SHARP_CORNER_OFFSET = 15,
                LINE_DISTANCE_BUFFER_BITS = 15,
                LINE_DISTANCE_SCALE = .5,
                MAX_LINE_DISTANCE = Math.pow(2, LINE_DISTANCE_BUFFER_BITS - 1) / LINE_DISTANCE_SCALE,
                lineInterface = { layoutAttributes: [{ name: "a_pos_normal", components: 4, type: "Int16" }, { name: "a_data", components: 4, type: "Uint8" }], paintAttributes: [{ property: "line-color" }, { property: "line-blur" }, { property: "line-opacity" }, { property: "line-gap-width", name: "gapwidth" }, { property: "line-offset" }, { property: "line-width" }, { property: "line-width", name: "floorwidth", useIntegerZoom: !0 }], indexArrayType: TriangleIndexArray },
                LayoutVertexArrayType = createVertexArrayType(lineInterface.layoutAttributes),
                LineBucket = function(e) { this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.layoutVertexArray = new LayoutVertexArrayType(e.layoutVertexArray), this.indexArray = new TriangleIndexArray(e.indexArray), this.programConfigurations = new ProgramConfigurationSet(lineInterface, e.layers, e.zoom, e.programConfigurations), this.segments = new SegmentVector(e.segments) };
            LineBucket.prototype.populate = function(e, t) {
                for (var r = this, i = 0, a = e; i < a.length; i += 1) {
                    var n = a[i],
                        s = n.feature,
                        o = n.index,
                        u = n.sourceLayerIndex;
                    if (r.layers[0]._featureFilter({ zoom: r.zoom }, s)) {
                        var d = loadGeometry(s);
                        r.addFeature(s, d), t.featureIndex.insert(s, d, o, u, r.index)
                    }
                }
            }, LineBucket.prototype.isEmpty = function() { return 0 === this.layoutVertexArray.length }, LineBucket.prototype.serialize = function(e) { return { zoom: this.zoom, layerIds: this.layers.map(function(e) { return e.id }), layoutVertexArray: this.layoutVertexArray.serialize(e), indexArray: this.indexArray.serialize(e), programConfigurations: this.programConfigurations.serialize(e), segments: this.segments.get() } }, LineBucket.prototype.upload = function(e) { this.layoutVertexBuffer = new VertexBuffer(e, this.layoutVertexArray), this.indexBuffer = new IndexBuffer(e, this.indexArray), this.programConfigurations.upload(e) }, LineBucket.prototype.destroy = function() { this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy()) }, LineBucket.prototype.addFeature = function(e, t) {
                for (var r = this, i = this.layers[0].layout, a = this.layers[0].getLayoutValue("line-join", { zoom: this.zoom }, e), n = i["line-cap"], s = i["line-miter-limit"], o = i["line-round-limit"], u = 0, d = t; u < d.length; u += 1) {
                    var l = d[u];
                    r.addLine(l, e, a, n, s, o)
                }
            }, LineBucket.prototype.addLine = function(e, t, r, i, a, n) {
                for (var s = this, o = "Polygon" === vectorTileFeatureTypes[t.type], u = e.length; u >= 2 && e[u - 1].equals(e[u - 2]);) u--;
                for (var d = 0; d < u - 1 && e[d].equals(e[d + 1]);) d++;
                if (!(u < (o ? 3 : 2))) {
                    "bevel" === r && (a = 1.05);
                    var l = SHARP_CORNER_OFFSET * (EXTENT / (512 * this.overscaling)),
                        y = e[d],
                        h = this.segments.prepareSegment(10 * u, this.layoutVertexArray, this.indexArray);
                    this.distance = 0;
                    var p, c, f, x = i,
                        m = o ? "butt" : i,
                        g = !0,
                        _ = void 0,
                        A = void 0,
                        v = void 0,
                        V = void 0;
                    this.e1 = this.e2 = this.e3 = -1, o && (p = e[u - 2], V = y.sub(p)._unit()._perp());
                    for (var C = d; C < u; C++)
                        if (!(A = o && C === u - 1 ? e[d + 1] : e[C + 1]) || !e[C].equals(A)) {
                            V && (v = V), p && (_ = p), p = e[C], V = A ? A.sub(p)._unit()._perp() : v, v = v || V;
                            var L = v.add(V);
                            0 === L.x && 0 === L.y || L._unit();
                            var E = L.x * V.x + L.y * V.y,
                                S = 0 !== E ? 1 / E : 1 / 0,
                                I = E < COS_HALF_SHARP_CORNER && _ && A;
                            if (I && C > d) {
                                var T = p.dist(_);
                                if (T > 2 * l) {
                                    var B = p.sub(p.sub(_)._mult(l / T)._round());
                                    s.distance += B.dist(_), s.addCurrentVertex(B, s.distance, v.mult(1), 0, 0, !1, h), _ = B
                                }
                            }
                            var b = _ && A,
                                N = b ? r : A ? x : m;
                            if (b && "round" === N && (S < n ? N = "miter" : S <= 2 && (N = "fakeround")), "miter" === N && S > a && (N = "bevel"), "bevel" === N && (S > 2 && (N = "flipbevel"), S < a && (N = "miter")), _ && (s.distance += p.dist(_)), "miter" === N) L._mult(S), s.addCurrentVertex(p, s.distance, L, 0, 0, !1, h);
                            else if ("flipbevel" === N) {
                                if (S > 100) L = V.clone().mult(-1);
                                else {
                                    var k = v.x * V.y - v.y * V.x > 0 ? -1 : 1,
                                        R = S * v.add(V).mag() / v.sub(V).mag();
                                    L._perp()._mult(R * k)
                                }
                                s.addCurrentVertex(p, s.distance, L, 0, 0, !1, h), s.addCurrentVertex(p, s.distance, L.mult(-1), 0, 0, !1, h)
                            } else if ("bevel" === N || "fakeround" === N) {
                                var F = v.x * V.y - v.y * V.x > 0,
                                    q = -Math.sqrt(S * S - 1);
                                if (F ? (f = 0, c = q) : (c = 0, f = q), g || s.addCurrentVertex(p, s.distance, v, c, f, !1, h), "fakeround" === N) {
                                    for (var P = Math.floor(8 * (.5 - (E - .5))), z = void 0, w = 0; w < P; w++) z = V.mult((w + 1) / (P + 1))._add(v)._unit(), s.addPieSliceVertex(p, s.distance, z, F, h);
                                    s.addPieSliceVertex(p, s.distance, L, F, h);
                                    for (var D = P - 1; D >= 0; D--) z = v.mult((D + 1) / (P + 1))._add(V)._unit(), s.addPieSliceVertex(p, s.distance, z, F, h)
                                }
                                A && s.addCurrentVertex(p, s.distance, V, -c, -f, !1, h)
                            } else "butt" === N ? (g || s.addCurrentVertex(p, s.distance, v, 0, 0, !1, h), A && s.addCurrentVertex(p, s.distance, V, 0, 0, !1, h)) : "square" === N ? (g || (s.addCurrentVertex(p, s.distance, v, 1, 1, !1, h), s.e1 = s.e2 = -1), A && s.addCurrentVertex(p, s.distance, V, -1, -1, !1, h)) : "round" === N && (g || (s.addCurrentVertex(p, s.distance, v, 0, 0, !1, h), s.addCurrentVertex(p, s.distance, v, 1, 1, !0, h), s.e1 = s.e2 = -1), A && (s.addCurrentVertex(p, s.distance, V, -1, -1, !0, h), s.addCurrentVertex(p, s.distance, V, 0, 0, !1, h)));
                            if (I && C < u - 1) {
                                var M = p.dist(A);
                                if (M > 2 * l) {
                                    var O = p.add(A.sub(p)._mult(l / M)._round());
                                    s.distance += O.dist(p), s.addCurrentVertex(O, s.distance, V.mult(1), 0, 0, !1, h), p = O
                                }
                            }
                            g = !1
                        }
                    this.programConfigurations.populatePaintArrays(this.layoutVertexArray.length, t)
                }
            }, LineBucket.prototype.addCurrentVertex = function(e, t, r, i, a, n, s) {
                var o, u = this.layoutVertexArray,
                    d = this.indexArray;
                o = r.clone(), i && o._sub(r.perp()._mult(i)), addLineVertex(u, e, o, n, !1, i, t), this.e3 = s.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (d.emplaceBack(this.e1, this.e2, this.e3), s.primitiveLength++), this.e1 = this.e2, this.e2 = this.e3, o = r.mult(-1), a && o._sub(r.perp()._mult(a)), addLineVertex(u, e, o, n, !0, -a, t), this.e3 = s.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (d.emplaceBack(this.e1, this.e2, this.e3), s.primitiveLength++), this.e1 = this.e2, this.e2 = this.e3, t > MAX_LINE_DISTANCE / 2 && (this.distance = 0, this.addCurrentVertex(e, this.distance, r, i, a, n, s))
            }, LineBucket.prototype.addPieSliceVertex = function(e, t, r, i, a) {
                r = r.mult(i ? -1 : 1);
                var n = this.layoutVertexArray,
                    s = this.indexArray;
                addLineVertex(n, e, r, !1, i, 0, t), this.e3 = a.vertexLength++, this.e1 >= 0 && this.e2 >= 0 && (s.emplaceBack(this.e1, this.e2, this.e3), a.primitiveLength++), i ? this.e2 = this.e3 : this.e1 = this.e3
            }, LineBucket.programInterface = lineInterface, module.exports = LineBucket;
        }, { "../../gl/index_buffer": 71, "../../gl/vertex_buffer": 72, "../extent": 58, "../index_array_type": 60, "../load_geometry": 61, "../program_configuration": 63, "../segment": 65, "../vertex_array_type": 66, "@mapbox/vector-tile": 6 }],
        57: [function(_dereq_, module, exports) {
            "use strict";

            function addVertex(e, t, r, i, a, o, n, s) { e.emplaceBack(t, r, Math.round(64 * i), Math.round(64 * a), o, n, s ? s[0] : void 0, s ? s[1] : void 0) }

            function addDynamicAttributes(e, t, r) { e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r), e.emplaceBack(t.x, t.y, r) }
            var Point = _dereq_("@mapbox/point-geometry"),
                ref = _dereq_("../segment"),
                SegmentVector = ref.SegmentVector,
                VertexBuffer = _dereq_("../../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../../gl/index_buffer"),
                ref$1 = _dereq_("../program_configuration"),
                ProgramConfigurationSet = ref$1.ProgramConfigurationSet,
                createVertexArrayType = _dereq_("../vertex_array_type"),
                ref$2 = _dereq_("../index_array_type"),
                TriangleIndexArray = ref$2.TriangleIndexArray,
                LineIndexArray = ref$2.LineIndexArray,
                transformText = _dereq_("../../symbol/transform_text"),
                mergeLines = _dereq_("../../symbol/mergelines"),
                scriptDetection = _dereq_("../../util/script_detection"),
                loadGeometry = _dereq_("../load_geometry"),
                vectorTileFeatureTypes = _dereq_("@mapbox/vector-tile").VectorTileFeature.types,
                createStructArrayType = _dereq_("../../util/struct_array"),
                verticalizePunctuation = _dereq_("../../util/verticalize_punctuation"),
                Anchor = _dereq_("../../symbol/anchor"),
                OpacityState = _dereq_("../../symbol/opacity_state"),
                ref$3 = _dereq_("../../symbol/symbol_size"),
                getSizeData = ref$3.getSizeData,
                PlacedSymbolArray = createStructArrayType({ members: [{ type: "Int16", name: "anchorX" }, { type: "Int16", name: "anchorY" }, { type: "Uint16", name: "glyphStartIndex" }, { type: "Uint16", name: "numGlyphs" }, { type: "Uint32", name: "vertexStartIndex" }, { type: "Uint32", name: "lineStartIndex" }, { type: "Uint32", name: "lineLength" }, { type: "Uint16", name: "segment" }, { type: "Uint16", name: "lowerSize" }, { type: "Uint16", name: "upperSize" }, { type: "Float32", name: "lineOffsetX" }, { type: "Float32", name: "lineOffsetY" }, { type: "Uint8", name: "writingMode" }, { type: "Uint8", name: "hidden" }] }),
                GlyphOffsetArray = createStructArrayType({ members: [{ type: "Float32", name: "offsetX" }] }),
                LineVertexArray = createStructArrayType({ members: [{ type: "Int16", name: "x" }, { type: "Int16", name: "y" }, { type: "Int16", name: "tileUnitDistanceFromAnchor" }] }),
                layoutAttributes = [{ name: "a_pos_offset", components: 4, type: "Int16" }, { name: "a_data", components: 4, type: "Uint16" }],
                dynamicLayoutAttributes = [{ name: "a_projected_pos", components: 3, type: "Float32" }],
                placementOpacityAttributes = [{ name: "a_fade_opacity", components: 1, type: "Uint32" }],
                shaderOpacityAttributes = [{ name: "a_fade_opacity", components: 1, type: "Uint8", offset: 0 }],
                collisionAttributes = [{ name: "a_placed", components: 2, type: "Uint8" }],
                symbolInterfaces = { text: { layoutAttributes: layoutAttributes, dynamicLayoutAttributes: dynamicLayoutAttributes, indexArrayType: TriangleIndexArray, opacityAttributes: placementOpacityAttributes, paintAttributes: [{ property: "text-color", name: "fill_color" }, { property: "text-halo-color", name: "halo_color" }, { property: "text-halo-width", name: "halo_width" }, { property: "text-halo-blur", name: "halo_blur" }, { property: "text-opacity", name: "opacity" }] }, icon: { layoutAttributes: layoutAttributes, dynamicLayoutAttributes: dynamicLayoutAttributes, indexArrayType: TriangleIndexArray, opacityAttributes: placementOpacityAttributes, paintAttributes: [{ property: "icon-color", name: "fill_color" }, { property: "icon-halo-color", name: "halo_color" }, { property: "icon-halo-width", name: "halo_width" }, { property: "icon-halo-blur", name: "halo_blur" }, { property: "icon-opacity", name: "opacity" }] }, collisionBox: { layoutAttributes: [{ name: "a_pos", components: 2, type: "Int16" }, { name: "a_anchor_pos", components: 2, type: "Int16" }, { name: "a_extrude", components: 2, type: "Int16" }], indexArrayType: LineIndexArray, collisionAttributes: collisionAttributes }, collisionCircle: { layoutAttributes: [{ name: "a_pos", components: 2, type: "Int16" }, { name: "a_anchor_pos", components: 2, type: "Int16" }, { name: "a_extrude", components: 2, type: "Int16" }], collisionAttributes: collisionAttributes, indexArrayType: TriangleIndexArray } },
                SymbolBuffers = function(e, t, r, i) {
                    this.programInterface = e;
                    var a = createVertexArrayType(e.layoutAttributes),
                        o = e.indexArrayType;
                    if (this.layoutVertexArray = new a(i && i.layoutVertexArray), this.indexArray = new o(i && i.indexArray), this.programConfigurations = new ProgramConfigurationSet(e, t, r, i && i.programConfigurations), this.segments = new SegmentVector(i && i.segments), e.dynamicLayoutAttributes) {
                        var n = createVertexArrayType(e.dynamicLayoutAttributes);
                        this.dynamicLayoutVertexArray = new n(i && i.dynamicLayoutVertexArray)
                    }
                    if (e.opacityAttributes) {
                        var s = createVertexArrayType(e.opacityAttributes);
                        this.opacityVertexArray = new s(i && i.opacityVertexArray)
                    }
                    if (e.collisionAttributes) {
                        var l = createVertexArrayType(e.collisionAttributes);
                        this.collisionVertexArray = new l(i && i.collisionVertexArray)
                    }
                };
            SymbolBuffers.prototype.serialize = function(e) { return { layoutVertexArray: this.layoutVertexArray.serialize(e), indexArray: this.indexArray.serialize(e), programConfigurations: this.programConfigurations.serialize(e), segments: this.segments.get(), dynamicLayoutVertexArray: this.dynamicLayoutVertexArray && this.dynamicLayoutVertexArray.serialize(e), opacityVertexArray: this.opacityVertexArray && this.opacityVertexArray.serialize(e), collisionVertexArray: this.collisionVertexArray && this.collisionVertexArray.serialize(e) } }, SymbolBuffers.prototype.upload = function(e, t) { this.layoutVertexBuffer = new VertexBuffer(e, this.layoutVertexArray), this.indexBuffer = new IndexBuffer(e, this.indexArray, t), this.programConfigurations.upload(e), this.programInterface.dynamicLayoutAttributes && (this.dynamicLayoutVertexBuffer = new VertexBuffer(e, this.dynamicLayoutVertexArray, !0)), this.programInterface.opacityAttributes && (this.opacityVertexBuffer = new VertexBuffer(e, this.opacityVertexArray, !0), this.opacityVertexBuffer.itemSize = 1, this.opacityVertexBuffer.attributes = shaderOpacityAttributes), this.programInterface.collisionAttributes && (this.collisionVertexBuffer = new VertexBuffer(e, this.collisionVertexArray, !0)) }, SymbolBuffers.prototype.destroy = function() { this.layoutVertexBuffer && (this.layoutVertexBuffer.destroy(), this.indexBuffer.destroy(), this.programConfigurations.destroy(), this.segments.destroy(), this.dynamicLayoutVertexBuffer && this.dynamicLayoutVertexBuffer.destroy(), this.opacityVertexBuffer && this.opacityVertexBuffer.destroy(), this.collisionVertexBuffer && this.collisionVertexBuffer.destroy()) };
            var SymbolBucket = function(e) {
                if (this.collisionBoxArray = e.collisionBoxArray, this.zoom = e.zoom, this.overscaling = e.overscaling, this.layers = e.layers, this.index = e.index, this.sdfIcons = e.sdfIcons, this.iconsNeedLinear = e.iconsNeedLinear, this.pixelRatio = e.pixelRatio, e.text) {
                    this.text = new SymbolBuffers(symbolInterfaces.text, e.layers, e.zoom, e.text), this.icon = new SymbolBuffers(symbolInterfaces.icon, e.layers, e.zoom, e.icon), this.collisionBox = new SymbolBuffers(symbolInterfaces.collisionBox, e.layers, e.zoom, e.collisionBox), this.collisionCircle = new SymbolBuffers(symbolInterfaces.collisionCircle, e.layers, e.zoom, e.collisionCircle), this.textSizeData = e.textSizeData, this.iconSizeData = e.iconSizeData, this.placedGlyphArray = new PlacedSymbolArray(e.placedGlyphArray), this.placedIconArray = new PlacedSymbolArray(e.placedIconArray), this.glyphOffsetArray = new GlyphOffsetArray(e.glyphOffsetArray), this.lineVertexArray = new LineVertexArray(e.lineVertexArray), this.symbolInstances = e.symbolInstances;
                    var t = e.layers[0].layout;
                    this.sortFeaturesByY = t["text-allow-overlap"] || t["icon-allow-overlap"] || t["text-ignore-placement"] || t["icon-ignore-placement"]
                } else {
                    var r = this.layers[0];
                    this.textSizeData = getSizeData(this.zoom, r, "text-size"), this.iconSizeData = getSizeData(this.zoom, r, "icon-size")
                }
            };
            SymbolBucket.prototype.createArrays = function() { this.text = new SymbolBuffers(symbolInterfaces.text, this.layers, this.zoom), this.icon = new SymbolBuffers(symbolInterfaces.icon, this.layers, this.zoom), this.collisionBox = new SymbolBuffers(symbolInterfaces.collisionBox, this.layers, this.zoom), this.collisionCircle = new SymbolBuffers(symbolInterfaces.collisionCircle, this.layers, this.zoom), this.placedGlyphArray = new PlacedSymbolArray, this.placedIconArray = new PlacedSymbolArray, this.glyphOffsetArray = new GlyphOffsetArray, this.lineVertexArray = new LineVertexArray }, SymbolBucket.prototype.populate = function(e, t) {
                var r = this,
                    i = this.layers[0],
                    a = i.layout,
                    o = a["text-font"],
                    n = (!i.isLayoutValueFeatureConstant("text-field") || a["text-field"]) && o,
                    s = !i.isLayoutValueFeatureConstant("icon-image") || a["icon-image"];
                if (this.features = [], n || s) {
                    for (var l = t.iconDependencies, y = t.glyphDependencies, c = y[o] = y[o] || {}, u = { zoom: this.zoom }, p = 0, x = e; p < x.length; p += 1) {
                        var m = x[p],
                            h = m.feature,
                            d = m.index,
                            f = m.sourceLayerIndex;
                        if (i._featureFilter(u, h)) {
                            var A = void 0;
                            n && (A = i.getValueAndResolveTokens("text-field", u, h), A = transformText(A, i, u, h));
                            var g = void 0;
                            if (s && (g = i.getValueAndResolveTokens("icon-image", u, h)), A || g) {
                                var b = { text: A, icon: g, index: d, sourceLayerIndex: f, geometry: loadGeometry(h), properties: h.properties, type: vectorTileFeatureTypes[h.type] };
                                if (void 0 !== h.id && (b.id = h.id), r.features.push(b), g && (l[g] = !0), A)
                                    for (var B = "map" === a["text-rotation-alignment"] && "line" === a["symbol-placement"], V = scriptDetection.allowsVerticalWritingMode(A), I = 0; I < A.length; I++)
                                        if (c[A.charCodeAt(I)] = !0, B && V) {
                                            var S = verticalizePunctuation.lookup[A.charAt(I)];
                                            S && (c[S.charCodeAt(0)] = !0)
                                        }
                            }
                        }
                    }
                    "line" === a["symbol-placement"] && (this.features = mergeLines(this.features))
                }
            }, SymbolBucket.prototype.isEmpty = function() { return 0 === this.symbolInstances.length }, SymbolBucket.prototype.serialize = function(e) { return { zoom: this.zoom, layerIds: this.layers.map(function(e) { return e.id }), sdfIcons: this.sdfIcons, iconsNeedLinear: this.iconsNeedLinear, textSizeData: this.textSizeData, iconSizeData: this.iconSizeData, placedGlyphArray: this.placedGlyphArray.serialize(e), placedIconArray: this.placedIconArray.serialize(e), glyphOffsetArray: this.glyphOffsetArray.serialize(e), lineVertexArray: this.lineVertexArray.serialize(e), text: this.text.serialize(e), icon: this.icon.serialize(e), collisionBox: this.collisionBox.serialize(e), collisionCircle: this.collisionCircle.serialize(e), symbolInstances: this.symbolInstances } }, SymbolBucket.prototype.upload = function(e) { this.text.upload(e, this.sortFeaturesByY), this.icon.upload(e, this.sortFeaturesByY), this.collisionBox.upload(e), this.collisionCircle.upload(e) }, SymbolBucket.prototype.destroy = function() { this.text.destroy(), this.icon.destroy(), this.collisionBox.destroy(), this.collisionCircle.destroy() }, SymbolBucket.prototype.addToLineVertexArray = function(e, t) {
                var r = this,
                    i = this.lineVertexArray.length;
                if (void 0 !== e.segment) {
                    for (var a = e.dist(t[e.segment + 1]), o = e.dist(t[e.segment]), n = {}, s = e.segment + 1; s < t.length; s++) n[s] = { x: t[s].x, y: t[s].y, tileUnitDistanceFromAnchor: a }, s < t.length - 1 && (a += t[s + 1].dist(t[s]));
                    for (var l = e.segment || 0; l >= 0; l--) n[l] = { x: t[l].x, y: t[l].y, tileUnitDistanceFromAnchor: o }, l > 0 && (o += t[l - 1].dist(t[l]));
                    for (var y = 0; y < t.length; y++) {
                        var c = n[y];
                        r.lineVertexArray.emplaceBack(c.x, c.y, c.tileUnitDistanceFromAnchor)
                    }
                }
                return { lineStartIndex: i, lineLength: this.lineVertexArray.length - i }
            }, SymbolBucket.prototype.addSymbols = function(e, t, r, i, a, o, n, s, l, y, c) {
                for (var u = this, p = e.indexArray, x = e.layoutVertexArray, m = e.dynamicLayoutVertexArray, h = e.segments.prepareSegment(4 * t.length, e.layoutVertexArray, e.indexArray), d = this.glyphOffsetArray.length, f = h.vertexLength, A = 0, g = t; A < g.length; A += 1) {
                    var b = g[A],
                        B = b.tl,
                        V = b.tr,
                        I = b.bl,
                        S = b.br,
                        v = b.tex,
                        z = h.vertexLength,
                        _ = b.glyphOffset[1];
                    addVertex(x, s.x, s.y, B.x, _ + B.y, v.x, v.y, r), addVertex(x, s.x, s.y, V.x, _ + V.y, v.x + v.w, v.y, r), addVertex(x, s.x, s.y, I.x, _ + I.y, v.x, v.y + v.h, r), addVertex(x, s.x, s.y, S.x, _ + S.y, v.x + v.w, v.y + v.h, r), addDynamicAttributes(m, s, 0), p.emplaceBack(z, z + 1, z + 2), p.emplaceBack(z + 1, z + 2, z + 3), h.vertexLength += 4, h.primitiveLength += 2, u.glyphOffsetArray.emplaceBack(b.glyphOffset[0])
                }
                c.emplaceBack(s.x, s.y, d, this.glyphOffsetArray.length - d, f, l, y, s.segment, r ? r[0] : 0, r ? r[1] : 0, i[0], i[1], n, !1), e.programConfigurations.populatePaintArrays(e.layoutVertexArray.length, o)
            }, SymbolBucket.prototype._addCollisionDebugVertex = function(e, t, r, i, a) { return t.emplaceBack(0, 0), e.emplaceBack(r.x, r.y, i.x, i.y, Math.round(a.x), Math.round(a.y)) }, SymbolBucket.prototype.addCollisionDebugVertices = function(e, t, r, i, a, o, n, s) {
                var l = a.segments.prepareSegment(4, a.layoutVertexArray, a.indexArray),
                    y = l.vertexLength,
                    c = a.layoutVertexArray,
                    u = a.indexArray,
                    p = a.collisionVertexArray;
                this._addCollisionDebugVertex(c, p, o, n.anchor, new Point(e, t)), this._addCollisionDebugVertex(c, p, o, n.anchor, new Point(r, t)), this._addCollisionDebugVertex(c, p, o, n.anchor, new Point(r, i)), this._addCollisionDebugVertex(c, p, o, n.anchor, new Point(e, i)), l.vertexLength += 4, s ? (u.emplaceBack(y, y + 1, y + 2), u.emplaceBack(y, y + 2, y + 3), l.primitiveLength += 2) : (u.emplaceBack(y, y + 1), u.emplaceBack(y + 1, y + 2), u.emplaceBack(y + 2, y + 3), u.emplaceBack(y + 3, y), l.primitiveLength += 4)
            }, SymbolBucket.prototype.generateCollisionDebugBuffers = function() {
                for (var e = this, t = 0, r = e.symbolInstances; t < r.length; t += 1) {
                    var i = r[t];
                    i.textCollisionFeature = { boxStartIndex: i.textBoxStartIndex, boxEndIndex: i.textBoxEndIndex }, i.iconCollisionFeature = { boxStartIndex: i.iconBoxStartIndex, boxEndIndex: i.iconBoxEndIndex };
                    for (var a = 0; a < 2; a++) {
                        var o = i[0 === a ? "textCollisionFeature" : "iconCollisionFeature"];
                        if (o)
                            for (var n = o.boxStartIndex; n < o.boxEndIndex; n++) {
                                var s = e.collisionBoxArray.get(n),
                                    l = s.x1,
                                    y = s.y1,
                                    c = s.x2,
                                    u = s.y2,
                                    p = s.radius > 0;
                                e.addCollisionDebugVertices(l, y, c, u, p ? e.collisionCircle : e.collisionBox, s.anchorPoint, i, p)
                            }
                    }
                }
            }, SymbolBucket.prototype.deserializeCollisionBoxes = function(e, t, r, i, a) {
                for (var o = {}, n = t; n < r; n++) {
                    var s = e.get(n);
                    if (0 === s.radius) { o.textBox = { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, anchorPointX: s.anchorPointX, anchorPointY: s.anchorPointY }; break }
                    o.textCircles || (o.textCircles = []);
                    o.textCircles.push(s.anchorPointX, s.anchorPointY, s.radius, s.signedDistanceFromAnchor, 1)
                }
                for (var l = i; l < a; l++) { var y = e.get(l); if (0 === y.radius) { o.iconBox = { x1: y.x1, y1: y.y1, x2: y.x2, y2: y.y2, anchorPointX: y.anchorPointX, anchorPointY: y.anchorPointY }; break } }
                return o
            }, SymbolBucket.prototype.sortFeatures = function(e) {
                var t = this;
                if (this.sortFeaturesByY && this.sortedAngle !== e && (this.sortedAngle = e, !(this.text.segments.get().length > 1 || this.icon.segments.get().length > 1))) {
                    for (var r = [], i = 0; i < this.symbolInstances.length; i++) r.push(i);
                    var a = Math.sin(e),
                        o = Math.cos(e);
                    r.sort(function(e, r) {
                        var i = t.symbolInstances[e],
                            n = t.symbolInstances[r];
                        return (a * i.anchor.x + o * i.anchor.y | 0) - (a * n.anchor.x + o * n.anchor.y | 0) || n.featureIndex - i.featureIndex
                    }), this.text.indexArray.clear(), this.icon.indexArray.clear();
                    for (var n = 0, s = r; n < s.length; n += 1) {
                        for (var l = s[n], y = t.symbolInstances[l], c = 0, u = y.placedTextSymbolIndices; c < u.length; c += 1)
                            for (var p = u[c], x = t.placedGlyphArray.get(p), m = x.vertexStartIndex + 4 * x.numGlyphs, h = x.vertexStartIndex; h < m; h += 4) t.text.indexArray.emplaceBack(h, h + 1, h + 2), t.text.indexArray.emplaceBack(h + 1, h + 2, h + 3);
                        var d = t.placedIconArray.get(l);
                        if (d.numGlyphs) {
                            var f = d.vertexStartIndex;
                            t.icon.indexArray.emplaceBack(f, f + 1, f + 2), t.icon.indexArray.emplaceBack(f + 1, f + 2, f + 3)
                        }
                    }
                    this.text.indexBuffer && this.text.indexBuffer.updateData(this.text.indexArray.serialize()), this.icon.indexBuffer && this.icon.indexBuffer.updateData(this.icon.indexArray.serialize())
                }
            }, SymbolBucket.programInterfaces = symbolInterfaces, SymbolBucket.MAX_GLYPHS = 65535, SymbolBucket.addDynamicAttributes = addDynamicAttributes, module.exports = SymbolBucket;
        }, { "../../gl/index_buffer": 71, "../../gl/vertex_buffer": 72, "../../symbol/anchor": 200, "../../symbol/mergelines": 209, "../../symbol/opacity_state": 210, "../../symbol/symbol_size": 216, "../../symbol/transform_text": 217, "../../util/script_detection": 256, "../../util/struct_array": 258, "../../util/verticalize_punctuation": 262, "../index_array_type": 60, "../load_geometry": 61, "../program_configuration": 63, "../segment": 65, "../vertex_array_type": 66, "@mapbox/point-geometry": 2, "@mapbox/vector-tile": 6 }],
        58: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = 8192;
        }, {}],
        59: [function(_dereq_, module, exports) {
            "use strict";

            function topDownFeatureComparator(e, r) { return r - e }
            var Point = _dereq_("@mapbox/point-geometry"),
                loadGeometry = _dereq_("./load_geometry"),
                EXTENT = _dereq_("./extent"),
                featureFilter = _dereq_("../style-spec/feature_filter"),
                createStructArrayType = _dereq_("../util/struct_array"),
                Grid = _dereq_("grid-index"),
                DictionaryCoder = _dereq_("../util/dictionary_coder"),
                vt = _dereq_("@mapbox/vector-tile"),
                Protobuf = _dereq_("pbf"),
                GeoJSONFeature = _dereq_("../util/vectortile_to_geojson"),
                arraysIntersect = _dereq_("../util/util").arraysIntersect,
                TileCoord = _dereq_("../source/tile_coord"),
                FeatureIndexArray = createStructArrayType({ members: [{ type: "Uint32", name: "featureIndex" }, { type: "Uint16", name: "sourceLayerIndex" }, { type: "Uint16", name: "bucketIndex" }] }),
                FeatureIndex = function(e, r, t, a) { this.coord = e, this.overscaling = r, this.x = e.x, this.y = e.y, this.z = e.z - Math.log(r) / Math.LN2, this.grid = t || new Grid(EXTENT, 16, 0), this.featureIndexArray = a || new FeatureIndexArray };
            FeatureIndex.deserialize = function(e, r) {
                var t = e.coord,
                    a = new FeatureIndex(new TileCoord(t.z, t.x, t.y, t.w), e.overscaling, new Grid(e.grid), new FeatureIndexArray(e.featureIndexArray));
                return a.rawTileData = r, a.bucketLayerIDs = e.bucketLayerIDs, a
            }, FeatureIndex.prototype.insert = function(e, r, t, a, i) {
                var o = this,
                    n = this.featureIndexArray.length;
                this.featureIndexArray.emplaceBack(t, a, i);
                for (var s = 0; s < r.length; s++) {
                    for (var u = r[s], y = [1 / 0, 1 / 0, -1 / 0, -1 / 0], d = 0; d < u.length; d++) {
                        var l = u[d];
                        y[0] = Math.min(y[0], l.x), y[1] = Math.min(y[1], l.y), y[2] = Math.max(y[2], l.x), y[3] = Math.max(y[3], l.y)
                    }
                    o.grid.insert(n, y[0], y[1], y[2], y[3])
                }
            }, FeatureIndex.prototype.setCollisionIndex = function(e) { this.collisionIndex = e }, FeatureIndex.prototype.serialize = function(e) { var r = this.grid.toArrayBuffer(); return e && e.push(r), { coord: this.coord, overscaling: this.overscaling, grid: r, featureIndexArray: this.featureIndexArray.serialize(e), bucketLayerIDs: this.bucketLayerIDs } }, FeatureIndex.prototype.query = function(e, r) {
                this.vtLayers || (this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers, this.sourceLayerCoder = new DictionaryCoder(this.vtLayers ? Object.keys(this.vtLayers).sort() : ["_geojsonTileLayer"]));
                for (var t = {}, a = e.params || {}, i = EXTENT / e.tileSize / e.scale, o = featureFilter(a.filter), n = e.queryGeometry, s = e.additionalRadius * i, u = 1 / 0, y = 1 / 0, d = -1 / 0, l = -1 / 0, c = 0; c < n.length; c++)
                    for (var h = n[c], x = 0; x < h.length; x++) {
                        var f = h[x];
                        u = Math.min(u, f.x), y = Math.min(y, f.y), d = Math.max(d, f.x), l = Math.max(l, f.y)
                    }
                var I = this.grid.query(u - s, y - s, d + s, l + s);
                I.sort(topDownFeatureComparator), this.filterMatching(t, I, this.featureIndexArray, n, o, a.layers, r, e.bearing, i);
                var v = this.collisionIndex ? this.collisionIndex.queryRenderedSymbols(n, this.coord, e.tileSourceMaxZoom, EXTENT / e.tileSize, e.collisionBoxArray, e.sourceID) : [];
                return v.sort(), this.filterMatching(t, v, e.collisionBoxArray, n, o, a.layers, r, e.bearing, i), t
            }, FeatureIndex.prototype.filterMatching = function(e, r, t, a, i, o, n, s, u) {
                for (var y, d = this, l = 0; l < r.length; l++) {
                    var c = r[l];
                    if (c !== y) {
                        y = c;
                        var h = t.get(c),
                            x = d.bucketLayerIDs[h.bucketIndex];
                        if (!o || arraysIntersect(o, x)) {
                            var f = d.sourceLayerCoder.decode(h.sourceLayerIndex),
                                I = d.vtLayers[f],
                                v = I.feature(h.featureIndex);
                            if (i({ zoom: d.coord.z }, v))
                                for (var p = null, g = 0; g < x.length; g++) {
                                    var m = x[g];
                                    if (!(o && o.indexOf(m) < 0)) {
                                        var F = n[m];
                                        if (F && ("symbol" === F.type || (p || (p = loadGeometry(v)), F.queryIntersectsFeature(a, v, p, d.z, s, u)))) {
                                            var b = new GeoJSONFeature(v, d.z, d.x, d.y);
                                            b.layer = F.serialize();
                                            var L = e[m];
                                            void 0 === L && (L = e[m] = []), L.push({ featureIndex: c, feature: b })
                                        }
                                    }
                                }
                        }
                    }
                }
            }, FeatureIndex.prototype.hasLayer = function(e) {
                for (var r = this, t = 0, a = r.bucketLayerIDs; t < a.length; t += 1)
                    for (var i = a[t], o = 0, n = i; o < n.length; o += 1) { var s = n[o]; if (e === s) return !0 }
                return !1
            }, module.exports = FeatureIndex;
        }, { "../source/tile_coord": 112, "../style-spec/feature_filter": 146, "../util/dictionary_coder": 245, "../util/struct_array": 258, "../util/util": 260, "../util/vectortile_to_geojson": 261, "./extent": 58, "./load_geometry": 61, "@mapbox/point-geometry": 2, "@mapbox/vector-tile": 6, "grid-index": 23, "pbf": 38 }],
        60: [function(_dereq_, module, exports) {
            "use strict";

            function createIndexArrayType(e) { return createStructArrayType({ members: [{ type: "Uint16", name: "vertices", components: e }] }) }
            var createStructArrayType = _dereq_("../util/struct_array");
            module.exports = { LineIndexArray: createIndexArrayType(2), TriangleIndexArray: createIndexArrayType(3) };
        }, { "../util/struct_array": 258 }],
        61: [function(_dereq_, module, exports) {
            "use strict";

            function createBounds(e) { return { min: -1 * Math.pow(2, e - 1), max: Math.pow(2, e - 1) - 1 } }
            var util = _dereq_("../util/util"),
                EXTENT = _dereq_("./extent"),
                bounds = createBounds(16);
            module.exports = function(e) {
                for (var t = EXTENT / e.extent, r = e.loadGeometry(), n = 0; n < r.length; n++)
                    for (var u = r[n], o = 0; o < u.length; o++) {
                        var a = u[o];
                        a.x = Math.round(a.x * t), a.y = Math.round(a.y * t), (a.x < bounds.min || a.x > bounds.max || a.y < bounds.min || a.y > bounds.max) && util.warnOnce("Geometry exceeds allowed extent, reduce your vector tile buffer size")
                    }
                return r
            };
        }, { "../util/util": 260, "./extent": 58 }],
        62: [function(_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"),
                PosArray = createStructArrayType({ members: [{ name: "a_pos", type: "Int16", components: 2 }] });
            module.exports = PosArray;
        }, { "../util/struct_array": 258 }],
        63: [function(_dereq_, module, exports) {
            "use strict";

            function packColor(r) { return [packUint8ToFloat(255 * r.r, 255 * r.g), packUint8ToFloat(255 * r.b, 255 * r.a)] }
            var createVertexArrayType = _dereq_("./vertex_array_type"),
                packUint8ToFloat = _dereq_("../shaders/encode_attribute").packUint8ToFloat,
                VertexBuffer = _dereq_("../gl/vertex_buffer"),
                ConstantBinder = function(r, t, o, e) { this.name = r, this.type = t, this.property = o, this.useIntegerZoom = e };
            ConstantBinder.prototype.defines = function() { return ["#define HAS_UNIFORM_u_" + this.name] }, ConstantBinder.prototype.populatePaintArray = function() {}, ConstantBinder.prototype.setUniforms = function(r, t, o, e) {
                var n = e.zoom,
                    i = o.getPaintValue(this.property, { zoom: this.useIntegerZoom ? Math.floor(n) : n });
                "color" === this.type ? r.uniform4f(t.uniforms["u_" + this.name], i.r, i.g, i.b, i.a) : r.uniform1f(t.uniforms["u_" + this.name], i)
            };
            var SourceFunctionBinder = function(r, t, o) { this.name = r, this.type = t, this.property = o };
            SourceFunctionBinder.prototype.defines = function() { return [] }, SourceFunctionBinder.prototype.populatePaintArray = function(r, t, o, e, n, i) {
                var a = this,
                    s = r.getPaintValue(this.property, { zoom: 0 }, i);
                if ("color" === this.type)
                    for (var p = packColor(s), u = e; u < n; u++) {
                        var f = t.get(u);
                        f["a_" + a.name + "0"] = p[0], f["a_" + a.name + "1"] = p[1]
                    } else {
                        for (var c = e; c < n; c++) { t.get(c)["a_" + a.name] = s }
                        var m = o[this.property];
                        m.max = Math.max(m.max, s)
                    }
            }, SourceFunctionBinder.prototype.setUniforms = function(r, t) { r.uniform1f(t.uniforms["a_" + this.name + "_t"], 0) };
            var CompositeFunctionBinder = function(r, t, o, e, n) { this.name = r, this.type = t, this.property = o, this.useIntegerZoom = e, this.zoom = n };
            CompositeFunctionBinder.prototype.defines = function() { return [] }, CompositeFunctionBinder.prototype.populatePaintArray = function(r, t, o, e, n, i) {
                var a = this,
                    s = r.getPaintValue(this.property, { zoom: this.zoom }, i),
                    p = r.getPaintValue(this.property, { zoom: this.zoom + 1 }, i);
                if ("color" === this.type)
                    for (var u = packColor(s), f = packColor(p), c = e; c < n; c++) {
                        var m = t.get(c);
                        m["a_" + a.name + "0"] = u[0], m["a_" + a.name + "1"] = u[1], m["a_" + a.name + "2"] = f[0], m["a_" + a.name + "3"] = f[1]
                    } else {
                        for (var y = e; y < n; y++) {
                            var g = t.get(y);
                            g["a_" + a.name + "0"] = s, g["a_" + a.name + "1"] = p
                        }
                        var h = o[this.property];
                        h.max = Math.max(h.max, s, p)
                    }
            }, CompositeFunctionBinder.prototype.setUniforms = function(r, t, o, e) {
                var n = e.zoom,
                    i = o.getPaintInterpolationFactor(this.property, this.useIntegerZoom ? Math.floor(n) : n, this.zoom, this.zoom + 1);
                r.uniform1f(t.uniforms["a_" + this.name + "_t"], i)
            };
            var ProgramConfiguration = function() { this.binders = {}, this.cacheKey = "" };
            ProgramConfiguration.createDynamic = function(r, t, o) {
                for (var e = new ProgramConfiguration, n = [], i = 0, a = r.paintAttributes || []; i < a.length; i += 1) {
                    var s = a[i],
                        p = s.property,
                        u = s.useIntegerZoom || !1,
                        f = s.name || p.replace(t.type + "-", "").replace(/-/g, "_"),
                        c = t._paintSpecifications[p].type;
                    t.isPaintValueFeatureConstant(p) ? (e.binders[f] = new ConstantBinder(f, c, p, u), e.cacheKey += "/u_" + f) : t.isPaintValueZoomConstant(p) ? (e.binders[f] = new SourceFunctionBinder(f, c, p), e.cacheKey += "/a_" + f, n.push({ name: "a_" + f, type: "Float32", components: "color" === c ? 2 : 1 })) : (e.binders[f] = new CompositeFunctionBinder(f, c, p, u, o), e.cacheKey += "/z_" + f, n.push({ name: "a_" + f, type: "Float32", components: "color" === c ? 4 : 2 }))
                }
                return e.PaintVertexArray = createVertexArrayType(n), e.interface = r, e.layer = t, e
            }, ProgramConfiguration.createBasicFill = function() { var r = new ProgramConfiguration; return r.binders.color = new ConstantBinder("color", "color", "fill-color", !1), r.cacheKey += "/u_color", r.binders.opacity = new ConstantBinder("opacity", "number", "fill-opacity", !1), r.cacheKey += "/u_opacity", r }, ProgramConfiguration.prototype.createPaintPropertyStatistics = function() {
                var r = this,
                    t = {};
                for (var o in r.binders) t[r.binders[o].property] = { max: -1 / 0 };
                return t
            }, ProgramConfiguration.prototype.populatePaintArray = function(r, t) {
                var o = this,
                    e = this.paintVertexArray;
                if (0 !== e.bytesPerElement) {
                    var n = e.length;
                    e.resize(r);
                    for (var i in o.binders) o.binders[i].populatePaintArray(o.layer, e, o.paintPropertyStatistics, n, r, t)
                }
            }, ProgramConfiguration.prototype.defines = function() {
                var r = this,
                    t = [];
                for (var o in r.binders) t.push.apply(t, r.binders[o].defines());
                return t
            }, ProgramConfiguration.prototype.setUniforms = function(r, t, o, e) { var n = this; for (var i in n.binders) n.binders[i].setUniforms(r, t, o, e) }, ProgramConfiguration.prototype.serialize = function(r) { return 0 === this.paintVertexArray.length ? null : { array: this.paintVertexArray.serialize(r), type: this.paintVertexArray.constructor.serialize(), statistics: this.paintPropertyStatistics } }, ProgramConfiguration.deserialize = function(r, t, o, e) { var n = ProgramConfiguration.createDynamic(r, t, o); return e && (n.PaintVertexArray = createVertexArrayType(e.type.members), n.paintVertexArray = new n.PaintVertexArray(e.array), n.paintPropertyStatistics = e.statistics), n }, ProgramConfiguration.prototype.upload = function(r) { this.paintVertexArray && (this.paintVertexBuffer = new VertexBuffer(r, this.paintVertexArray)) }, ProgramConfiguration.prototype.destroy = function() { this.paintVertexBuffer && this.paintVertexBuffer.destroy() };
            var ProgramConfigurationSet = function(r, t, o, e) {
                var n = this;
                if (this.programConfigurations = {}, e)
                    for (var i = 0, a = t; i < a.length; i += 1) {
                        var s = a[i];
                        n.programConfigurations[s.id] = ProgramConfiguration.deserialize(r, s, o, e[s.id])
                    } else
                        for (var p = 0, u = t; p < u.length; p += 1) {
                            var f = u[p],
                                c = ProgramConfiguration.createDynamic(r, f, o);
                            c.paintVertexArray = new c.PaintVertexArray, c.paintPropertyStatistics = c.createPaintPropertyStatistics(), n.programConfigurations[f.id] = c
                        }
            };
            ProgramConfigurationSet.prototype.populatePaintArrays = function(r, t) { var o = this; for (var e in o.programConfigurations) o.programConfigurations[e].populatePaintArray(r, t) }, ProgramConfigurationSet.prototype.serialize = function(r) {
                var t = this,
                    o = {};
                for (var e in t.programConfigurations) {
                    var n = t.programConfigurations[e].serialize(r);
                    n && (o[e] = n)
                }
                return o
            }, ProgramConfigurationSet.prototype.get = function(r) { return this.programConfigurations[r] }, ProgramConfigurationSet.prototype.upload = function(r) { var t = this; for (var o in t.programConfigurations) t.programConfigurations[o].upload(r) }, ProgramConfigurationSet.prototype.destroy = function() { var r = this; for (var t in r.programConfigurations) r.programConfigurations[t].destroy() }, module.exports = { ProgramConfiguration: ProgramConfiguration, ProgramConfigurationSet: ProgramConfigurationSet };
        }, { "../gl/vertex_buffer": 72, "../shaders/encode_attribute": 96, "./vertex_array_type": 66 }],
        64: [function(_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"),
                RasterBoundsArray = createStructArrayType({ members: [{ name: "a_pos", type: "Int16", components: 2 }, { name: "a_texture_pos", type: "Int16", components: 2 }] });
            module.exports = RasterBoundsArray;
        }, { "../util/struct_array": 258 }],
        65: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../util/util"),
                warnOnce = ref.warnOnce,
                MAX_VERTEX_ARRAY_LENGTH = Math.pow(2, 16) - 1,
                SegmentVector = function(e) { void 0 === e && (e = []), this.segments = e };
            SegmentVector.prototype.prepareSegment = function(e, t, r) { var n = this.segments[this.segments.length - 1]; return e > MAX_VERTEX_ARRAY_LENGTH && warnOnce("Max vertices per segment is " + MAX_VERTEX_ARRAY_LENGTH + ": bucket requested " + e), (!n || n.vertexLength + e > module.exports.MAX_VERTEX_ARRAY_LENGTH) && (n = { vertexOffset: t.length, primitiveOffset: r.length, vertexLength: 0, primitiveLength: 0 }, this.segments.push(n)), n }, SegmentVector.prototype.get = function() { return this.segments }, SegmentVector.prototype.destroy = function() { for (var e = this, t = 0, r = e.segments; t < r.length; t += 1) { var n = r[t]; for (var s in n.vaos) n.vaos[s].destroy() } }, module.exports = { SegmentVector: SegmentVector, MAX_VERTEX_ARRAY_LENGTH: MAX_VERTEX_ARRAY_LENGTH };
        }, { "../util/util": 260 }],
        66: [function(_dereq_, module, exports) {
            "use strict";

            function createVertexArrayType(r) { return createStructArrayType({ members: r, alignment: 4 }) }
            var createStructArrayType = _dereq_("../util/struct_array");
            module.exports = createVertexArrayType;
        }, { "../util/struct_array": 258 }],
        67: [function(_dereq_, module, exports) {
            "use strict";
            var Coordinate = function(o, t, n) { this.column = o, this.row = t, this.zoom = n };
            Coordinate.prototype.clone = function() { return new Coordinate(this.column, this.row, this.zoom) }, Coordinate.prototype.zoomTo = function(o) { return this.clone()._zoomTo(o) }, Coordinate.prototype.sub = function(o) { return this.clone()._sub(o) }, Coordinate.prototype._zoomTo = function(o) { var t = Math.pow(2, o - this.zoom); return this.column *= t, this.row *= t, this.zoom = o, this }, Coordinate.prototype._sub = function(o) { return o = o.zoomTo(this.zoom), this.column -= o.column, this.row -= o.row, this }, module.exports = Coordinate;
        }, {}],
        68: [function(_dereq_, module, exports) {
            "use strict";
            var wrap = _dereq_("../util/util").wrap,
                LngLat = function(t, n) { if (isNaN(t) || isNaN(n)) throw new Error("Invalid LngLat object: (" + t + ", " + n + ")"); if (this.lng = +t, this.lat = +n, this.lat > 90 || this.lat < -90) throw new Error("Invalid LngLat latitude value: must be between -90 and 90") };
            LngLat.prototype.wrap = function() { return new LngLat(wrap(this.lng, -180, 180), this.lat) }, LngLat.prototype.toArray = function() { return [this.lng, this.lat] }, LngLat.prototype.toString = function() { return "LngLat(" + this.lng + ", " + this.lat + ")" }, LngLat.prototype.toBounds = function(t) {
                var n = 360 * t / 40075017,
                    r = n / Math.cos(Math.PI / 180 * this.lat);
                return new(_dereq_("./lng_lat_bounds"))(new LngLat(this.lng - r, this.lat - n), new LngLat(this.lng + r, this.lat + n))
            }, LngLat.convert = function(t) { if (t instanceof LngLat) return t; if (Array.isArray(t) && (2 === t.length || 3 === t.length)) return new LngLat(Number(t[0]), Number(t[1])); if (!Array.isArray(t) && "object" == typeof t && null !== t) return new LngLat(Number(t.lng), Number(t.lat)); throw new Error("`LngLatLike` argument must be specified as a LngLat instance, an object {lng: <lng>, lat: <lat>}, or an array of [<lng>, <lat>]") }, module.exports = LngLat;
        }, { "../util/util": 260, "./lng_lat_bounds": 69 }],
        69: [function(_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("./lng_lat"),
                LngLatBounds = function(t, n) { t && (n ? this.setSouthWest(t).setNorthEast(n) : 4 === t.length ? this.setSouthWest([t[0], t[1]]).setNorthEast([t[2], t[3]]) : this.setSouthWest(t[0]).setNorthEast(t[1])) };
            LngLatBounds.prototype.setNorthEast = function(t) { return this._ne = t instanceof LngLat ? new LngLat(t.lng, t.lat) : LngLat.convert(t), this }, LngLatBounds.prototype.setSouthWest = function(t) { return this._sw = t instanceof LngLat ? new LngLat(t.lng, t.lat) : LngLat.convert(t), this }, LngLatBounds.prototype.extend = function(t) {
                var n, e, s = this._sw,
                    o = this._ne;
                if (t instanceof LngLat) n = t, e = t;
                else { if (!(t instanceof LngLatBounds)) return Array.isArray(t) ? t.every(Array.isArray) ? this.extend(LngLatBounds.convert(t)) : this.extend(LngLat.convert(t)) : this; if (n = t._sw, e = t._ne, !n || !e) return this }
                return s || o ? (s.lng = Math.min(n.lng, s.lng), s.lat = Math.min(n.lat, s.lat), o.lng = Math.max(e.lng, o.lng), o.lat = Math.max(e.lat, o.lat)) : (this._sw = new LngLat(n.lng, n.lat), this._ne = new LngLat(e.lng, e.lat)), this
            }, LngLatBounds.prototype.getCenter = function() { return new LngLat((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2) }, LngLatBounds.prototype.getSouthWest = function() { return this._sw }, LngLatBounds.prototype.getNorthEast = function() { return this._ne }, LngLatBounds.prototype.getNorthWest = function() { return new LngLat(this.getWest(), this.getNorth()) }, LngLatBounds.prototype.getSouthEast = function() { return new LngLat(this.getEast(), this.getSouth()) }, LngLatBounds.prototype.getWest = function() { return this._sw.lng }, LngLatBounds.prototype.getSouth = function() { return this._sw.lat }, LngLatBounds.prototype.getEast = function() { return this._ne.lng }, LngLatBounds.prototype.getNorth = function() { return this._ne.lat }, LngLatBounds.prototype.toArray = function() { return [this._sw.toArray(), this._ne.toArray()] }, LngLatBounds.prototype.toString = function() { return "LngLatBounds(" + this._sw.toString() + ", " + this._ne.toString() + ")" }, LngLatBounds.convert = function(t) { return !t || t instanceof LngLatBounds ? t : new LngLatBounds(t) }, module.exports = LngLatBounds;
        }, { "./lng_lat": 68 }],
        70: [function(_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("./lng_lat"),
                Point = _dereq_("@mapbox/point-geometry"),
                Coordinate = _dereq_("./coordinate"),
                util = _dereq_("../util/util"),
                interp = _dereq_("../style-spec/util/interpolate").number,
                TileCoord = _dereq_("../source/tile_coord"),
                EXTENT = _dereq_("../data/extent"),
                glmatrix = _dereq_("@mapbox/gl-matrix"),
                vec4 = glmatrix.vec4,
                mat4 = glmatrix.mat4,
                mat2 = glmatrix.mat2,
                Transform = function(t, i, o) { this.tileSize = 512, this._renderWorldCopies = void 0 === o || o, this._minZoom = t || 0, this._maxZoom = i || 22, this.latRange = [-85.05113, 85.05113], this.width = 0, this.height = 0, this._center = new LngLat(0, 0), this.zoom = 0, this.angle = 0, this._fov = .6435011087932844, this._pitch = 0, this._unmodified = !0, this._posMatrixCache = {} },
                prototypeAccessors = { minZoom: {}, maxZoom: {}, renderWorldCopies: {}, worldSize: {}, centerPoint: {}, size: {}, bearing: {}, pitch: {}, fov: {}, zoom: {}, center: {}, unmodified: {}, x: {}, y: {}, point: {} };
            Transform.prototype.clone = function() { var t = new Transform(this._minZoom, this._maxZoom, this._renderWorldCopies); return t.tileSize = this.tileSize, t.latRange = this.latRange, t.width = this.width, t.height = this.height, t._center = this._center, t.zoom = this.zoom, t.angle = this.angle, t._fov = this._fov, t._pitch = this._pitch, t._unmodified = this._unmodified, t._calcMatrices(), t }, prototypeAccessors.minZoom.get = function() { return this._minZoom }, prototypeAccessors.minZoom.set = function(t) { this._minZoom !== t && (this._minZoom = t, this.zoom = Math.max(this.zoom, t)) }, prototypeAccessors.maxZoom.get = function() { return this._maxZoom }, prototypeAccessors.maxZoom.set = function(t) { this._maxZoom !== t && (this._maxZoom = t, this.zoom = Math.min(this.zoom, t)) }, prototypeAccessors.renderWorldCopies.get = function() { return this._renderWorldCopies }, prototypeAccessors.worldSize.get = function() { return this.tileSize * this.scale }, prototypeAccessors.centerPoint.get = function() { return this.size._div(2) }, prototypeAccessors.size.get = function() { return new Point(this.width, this.height) }, prototypeAccessors.bearing.get = function() { return -this.angle / Math.PI * 180 }, prototypeAccessors.bearing.set = function(t) {
                var i = -util.wrap(t, -180, 180) * Math.PI / 180;
                this.angle !== i && (this._unmodified = !1, this.angle = i, this._calcMatrices(), this.rotationMatrix = mat2.create(), mat2.rotate(this.rotationMatrix, this.rotationMatrix, this.angle))
            }, prototypeAccessors.pitch.get = function() { return this._pitch / Math.PI * 180 }, prototypeAccessors.pitch.set = function(t) {
                var i = util.clamp(t, 0, 60) / 180 * Math.PI;
                this._pitch !== i && (this._unmodified = !1, this._pitch = i, this._calcMatrices())
            }, prototypeAccessors.fov.get = function() { return this._fov / Math.PI * 180 }, prototypeAccessors.fov.set = function(t) { t = Math.max(.01, Math.min(60, t)), this._fov !== t && (this._unmodified = !1, this._fov = t / 180 * Math.PI, this._calcMatrices()) }, prototypeAccessors.zoom.get = function() { return this._zoom }, prototypeAccessors.zoom.set = function(t) {
                var i = Math.min(Math.max(t, this.minZoom), this.maxZoom);
                this._zoom !== i && (this._unmodified = !1, this._zoom = i, this.scale = this.zoomScale(i), this.tileZoom = Math.floor(i), this.zoomFraction = i - this.tileZoom, this._constrain(), this._calcMatrices())
            }, prototypeAccessors.center.get = function() { return this._center }, prototypeAccessors.center.set = function(t) { t.lat === this._center.lat && t.lng === this._center.lng || (this._unmodified = !1, this._center = t, this._constrain(), this._calcMatrices()) }, Transform.prototype.coveringZoomLevel = function(t) { return (t.roundZoom ? Math.round : Math.floor)(this.zoom + this.scaleZoom(this.tileSize / t.tileSize)) }, Transform.prototype.getVisibleWrappedCoordinates = function(t) { for (var i = this.pointCoordinate(new Point(0, 0), 0), o = this.pointCoordinate(new Point(this.width, 0), 0), e = Math.floor(i.column), r = Math.floor(o.column), n = [t], s = e; s <= r; s++) 0 !== s && n.push(new TileCoord(t.z, t.x, t.y, s)); return n }, Transform.prototype.coveringTiles = function(t) {
                var i = this.coveringZoomLevel(t),
                    o = i;
                if (void 0 !== t.minzoom && i < t.minzoom) return [];
                void 0 !== t.maxzoom && i > t.maxzoom && (i = t.maxzoom);
                var e = this.pointCoordinate(this.centerPoint, i),
                    r = new Point(e.column - .5, e.row - .5),
                    n = [this.pointCoordinate(new Point(0, 0), i), this.pointCoordinate(new Point(this.width, 0), i), this.pointCoordinate(new Point(this.width, this.height), i), this.pointCoordinate(new Point(0, this.height), i)];
                return TileCoord.cover(i, n, t.reparseOverscaled ? o : i, this._renderWorldCopies).sort(function(t, i) { return r.dist(t) - r.dist(i) })
            }, Transform.prototype.resize = function(t, i) { this.width = t, this.height = i, this.pixelsToGLUnits = [2 / t, -2 / i], this._constrain(), this._calcMatrices() }, prototypeAccessors.unmodified.get = function() { return this._unmodified }, Transform.prototype.zoomScale = function(t) { return Math.pow(2, t) }, Transform.prototype.scaleZoom = function(t) { return Math.log(t) / Math.LN2 }, Transform.prototype.project = function(t) { return new Point(this.lngX(t.lng), this.latY(t.lat)) }, Transform.prototype.unproject = function(t) { return new LngLat(this.xLng(t.x), this.yLat(t.y)) }, prototypeAccessors.x.get = function() { return this.lngX(this.center.lng) }, prototypeAccessors.y.get = function() { return this.latY(this.center.lat) }, prototypeAccessors.point.get = function() { return new Point(this.x, this.y) }, Transform.prototype.lngX = function(t) { return (180 + t) * this.worldSize / 360 }, Transform.prototype.latY = function(t) { return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360))) * this.worldSize / 360 }, Transform.prototype.xLng = function(t) { return 360 * t / this.worldSize - 180 }, Transform.prototype.yLat = function(t) { var i = 180 - 360 * t / this.worldSize; return 360 / Math.PI * Math.atan(Math.exp(i * Math.PI / 180)) - 90 }, Transform.prototype.setLocationAtPoint = function(t, i) {
                var o = this.pointCoordinate(i)._sub(this.pointCoordinate(this.centerPoint));
                this.center = this.coordinateLocation(this.locationCoordinate(t)._sub(o)), this._renderWorldCopies && (this.center = this.center.wrap())
            }, Transform.prototype.locationPoint = function(t) { return this.coordinatePoint(this.locationCoordinate(t)) }, Transform.prototype.pointLocation = function(t) { return this.coordinateLocation(this.pointCoordinate(t)) }, Transform.prototype.locationCoordinate = function(t) { return new Coordinate(this.lngX(t.lng) / this.tileSize, this.latY(t.lat) / this.tileSize, this.zoom).zoomTo(this.tileZoom) }, Transform.prototype.coordinateLocation = function(t) { var i = t.zoomTo(this.zoom); return new LngLat(this.xLng(i.column * this.tileSize), this.yLat(i.row * this.tileSize)) }, Transform.prototype.pointCoordinate = function(t, i) {
                void 0 === i && (i = this.tileZoom);
                var o = [t.x, t.y, 0, 1],
                    e = [t.x, t.y, 1, 1];
                vec4.transformMat4(o, o, this.pixelMatrixInverse), vec4.transformMat4(e, e, this.pixelMatrixInverse);
                var r = o[3],
                    n = e[3],
                    s = o[0] / r,
                    a = e[0] / n,
                    h = o[1] / r,
                    c = e[1] / n,
                    m = o[2] / r,
                    p = e[2] / n,
                    l = m === p ? 0 : (0 - m) / (p - m);
                return new Coordinate(interp(s, a, l) / this.tileSize, interp(h, c, l) / this.tileSize, this.zoom)._zoomTo(i)
            }, Transform.prototype.coordinatePoint = function(t) {
                var i = t.zoomTo(this.zoom),
                    o = [i.column * this.tileSize, i.row * this.tileSize, 0, 1];
                return vec4.transformMat4(o, o, this.pixelMatrix), new Point(o[0] / o[3], o[1] / o[3])
            }, Transform.prototype.calculatePosMatrix = function(t, i) {
                var o = t.id.toString();
                if (i && (o += i.toString()), this._posMatrixCache[o]) return this._posMatrixCache[o];
                var e = t.toCoordinate(i),
                    r = this.worldSize / this.zoomScale(e.zoom),
                    n = mat4.identity(new Float64Array(16));
                return mat4.translate(n, n, [e.column * r, e.row * r, 0]), mat4.scale(n, n, [r / EXTENT, r / EXTENT, 1]), mat4.multiply(n, this.projMatrix, n), this._posMatrixCache[o] = new Float32Array(n), this._posMatrixCache[o]
            }, Transform.prototype._constrain = function() {
                if (this.center && this.width && this.height && !this._constraining) {
                    this._constraining = !0;
                    var t, i, o, e, r = -90,
                        n = 90,
                        s = -180,
                        a = 180,
                        h = this.size,
                        c = this._unmodified;
                    if (this.latRange) {
                        var m = this.latRange;
                        r = this.latY(m[1]), n = this.latY(m[0]), t = n - r < h.y ? h.y / (n - r) : 0
                    }
                    if (this.lngRange) {
                        var p = this.lngRange;
                        s = this.lngX(p[0]), a = this.lngX(p[1]), i = a - s < h.x ? h.x / (a - s) : 0
                    }
                    var l = Math.max(i || 0, t || 0);
                    if (l) return this.center = this.unproject(new Point(i ? (a + s) / 2 : this.x, t ? (n + r) / 2 : this.y)), this.zoom += this.scaleZoom(l), this._unmodified = c, void(this._constraining = !1);
                    if (this.latRange) {
                        var u = this.y,
                            f = h.y / 2;
                        u - f < r && (e = r + f), u + f > n && (e = n - f)
                    }
                    if (this.lngRange) {
                        var d = this.x,
                            g = h.x / 2;
                        d - g < s && (o = s + g), d + g > a && (o = a - g)
                    }
                    void 0 === o && void 0 === e || (this.center = this.unproject(new Point(void 0 !== o ? o : this.x, void 0 !== e ? e : this.y))), this._unmodified = c, this._constraining = !1
                }
            }, Transform.prototype._calcMatrices = function() {
                if (this.height) {
                    this.cameraToCenterDistance = .5 / Math.tan(this._fov / 2) * this.height;
                    var t = this._fov / 2,
                        i = Math.PI / 2 + this._pitch,
                        o = Math.sin(t) * this.cameraToCenterDistance / Math.sin(Math.PI - i - t),
                        e = Math.cos(Math.PI / 2 - this._pitch) * o + this.cameraToCenterDistance,
                        r = 1.01 * e,
                        n = new Float64Array(16);
                    mat4.perspective(n, this._fov, this.width / this.height, 1, r), mat4.scale(n, n, [1, -1, 1]), mat4.translate(n, n, [0, 0, -this.cameraToCenterDistance]), mat4.rotateX(n, n, this._pitch), mat4.rotateZ(n, n, this.angle), mat4.translate(n, n, [-this.x, -this.y, 0]);
                    var s = this.worldSize / (2 * Math.PI * 6378137 * Math.abs(Math.cos(this.center.lat * (Math.PI / 180))));
                    if (mat4.scale(n, n, [1, 1, s, 1]), this.projMatrix = n, n = mat4.create(), mat4.scale(n, n, [this.width / 2, -this.height / 2, 1]), mat4.translate(n, n, [1, -1, 0]), this.pixelMatrix = mat4.multiply(new Float64Array(16), n, this.projMatrix), !(n = mat4.invert(new Float64Array(16), this.pixelMatrix))) throw new Error("failed to invert matrix");
                    this.pixelMatrixInverse = n, this._posMatrixCache = {}
                }
            }, Object.defineProperties(Transform.prototype, prototypeAccessors), module.exports = Transform;
        }, { "../data/extent": 58, "../source/tile_coord": 112, "../style-spec/util/interpolate": 155, "../util/util": 260, "./coordinate": 67, "./lng_lat": 68, "@mapbox/gl-matrix": 1, "@mapbox/point-geometry": 2 }],
        71: [function(_dereq_, module, exports) {
            "use strict";
            var IndexBuffer = function(e, t, r) { this.gl = e, this.buffer = e.createBuffer(), this.dynamicDraw = Boolean(r), this.unbindVAO(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.buffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.arrayBuffer, this.dynamicDraw ? e.DYNAMIC_DRAW : e.STATIC_DRAW), this.dynamicDraw || delete t.arrayBuffer };
            IndexBuffer.prototype.unbindVAO = function() { void 0 === this.gl.extVertexArrayObject && (this.gl.extVertexArrayObject = this.gl.getExtension("OES_vertex_array_object")), this.gl.extVertexArrayObject && this.gl.extVertexArrayObject.bindVertexArrayOES(null) }, IndexBuffer.prototype.bind = function() { this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer) }, IndexBuffer.prototype.updateData = function(e) { this.unbindVAO(), this.bind(), this.gl.bufferSubData(this.gl.ELEMENT_ARRAY_BUFFER, 0, e.arrayBuffer) }, IndexBuffer.prototype.destroy = function() { this.buffer && (this.gl.deleteBuffer(this.buffer), delete this.buffer) }, module.exports = IndexBuffer;
        }, {}],
        72: [function(_dereq_, module, exports) {
            "use strict";
            var AttributeType = { Int8: "BYTE", Uint8: "UNSIGNED_BYTE", Int16: "SHORT", Uint16: "UNSIGNED_SHORT", Int32: "INT", Uint32: "UNSIGNED_INT", Float32: "FLOAT" },
                VertexBuffer = function(t, e, r) { this.length = e.length, this.attributes = e.members, this.itemSize = e.bytesPerElement, this.dynamicDraw = r, this.gl = t, this.buffer = t.createBuffer(), this.gl.bindBuffer(t.ARRAY_BUFFER, this.buffer), this.gl.bufferData(t.ARRAY_BUFFER, e.arrayBuffer, this.dynamicDraw ? t.DYNAMIC_DRAW : t.STATIC_DRAW), this.dynamicDraw || delete e.arrayBuffer };
            VertexBuffer.prototype.bind = function() { this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer) }, VertexBuffer.prototype.updateData = function(t) { this.bind(), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, t.arrayBuffer) }, VertexBuffer.prototype.enableAttributes = function(t, e) {
                for (var r = this, i = 0; i < this.attributes.length; i++) {
                    var f = r.attributes[i],
                        s = e.attributes[f.name];
                    void 0 !== s && t.enableVertexAttribArray(s)
                }
            }, VertexBuffer.prototype.setVertexAttribPointers = function(t, e, r) {
                for (var i = this, f = 0; f < this.attributes.length; f++) {
                    var s = i.attributes[f],
                        u = e.attributes[s.name];
                    void 0 !== u && t.vertexAttribPointer(u, s.components, t[AttributeType[s.type]], !1, i.itemSize, s.offset + i.itemSize * (r || 0))
                }
            }, VertexBuffer.prototype.destroy = function() { this.buffer && (this.gl.deleteBuffer(this.buffer), delete this.buffer) }, module.exports = VertexBuffer;
        }, {}],
        73: [function(_dereq_, module, exports) {
            "use strict";
            var supported = _dereq_("mapbox-gl-supported"),
                browser = _dereq_("./util/browser"),
                version = _dereq_("../package.json").version,
                Map = _dereq_("./ui/map"),
                NavigationControl = _dereq_("./ui/control/navigation_control"),
                GeolocateControl = _dereq_("./ui/control/geolocate_control"),
                AttributionControl = _dereq_("./ui/control/attribution_control"),
                ScaleControl = _dereq_("./ui/control/scale_control"),
                FullscreenControl = _dereq_("./ui/control/fullscreen_control"),
                Popup = _dereq_("./ui/popup"),
                Marker = _dereq_("./ui/marker"),
                Style = _dereq_("./style/style"),
                LngLat = _dereq_("./geo/lng_lat"),
                LngLatBounds = _dereq_("./geo/lng_lat_bounds"),
                Point = _dereq_("@mapbox/point-geometry"),
                Evented = _dereq_("./util/evented"),
                config = _dereq_("./util/config"),
                rtlTextPlugin = _dereq_("./source/rtl_text_plugin");
            module.exports = { version: version, supported: supported, workerCount: Math.max(Math.floor(browser.hardwareConcurrency / 2), 1), setRTLTextPlugin: rtlTextPlugin.setRTLTextPlugin, Map: Map, NavigationControl: NavigationControl, GeolocateControl: GeolocateControl, AttributionControl: AttributionControl, ScaleControl: ScaleControl, FullscreenControl: FullscreenControl, Popup: Popup, Marker: Marker, Style: Style, LngLat: LngLat, LngLatBounds: LngLatBounds, Point: Point, Evented: Evented, config: config, get accessToken() { return config.ACCESS_TOKEN }, set accessToken(o) { config.ACCESS_TOKEN = o } };
        }, { "../package.json": 50, "./geo/lng_lat": 68, "./geo/lng_lat_bounds": 69, "./source/rtl_text_plugin": 107, "./style/style": 186, "./ui/control/attribution_control": 220, "./ui/control/fullscreen_control": 221, "./ui/control/geolocate_control": 222, "./ui/control/navigation_control": 224, "./ui/control/scale_control": 225, "./ui/map": 235, "./ui/marker": 236, "./ui/popup": 237, "./util/browser": 240, "./util/config": 244, "./util/evented": 248, "@mapbox/point-geometry": 2, "mapbox-gl-supported": 37 }],
        74: [function(_dereq_, module, exports) {
            "use strict";

            function drawBackground(r, t, e) {
                if (!e.isOpacityZero(r.transform.zoom)) {
                    var a = r.gl,
                        i = r.transform,
                        n = i.tileSize,
                        o = e.paint["background-color"],
                        l = e.paint["background-pattern"],
                        u = e.paint["background-opacity"],
                        f = l || 1 !== o.a || 1 !== u ? "translucent" : "opaque";
                    if (r.renderPass === f) {
                        a.disable(a.STENCIL_TEST), r.setDepthSublayer(0);
                        var s;
                        if (l) {
                            if (pattern.isPatternMissing(l, r)) return;
                            s = r.useProgram("fillPattern", r.basicFillProgramConfiguration), pattern.prepare(l, r, s), r.tileExtentPatternVAO.bind(a, s, r.tileExtentBuffer)
                        } else s = r.useProgram("fill", r.basicFillProgramConfiguration), a.uniform4f(s.uniforms.u_color, o.r, o.g, o.b, o.a), r.tileExtentVAO.bind(a, s, r.tileExtentBuffer);
                        a.uniform1f(s.uniforms.u_opacity, u);
                        for (var c = i.coveringTiles({ tileSize: n }), g = 0, p = c; g < p.length; g += 1) {
                            var m = p[g];
                            l && pattern.setTile({ coord: m, tileSize: n }, r, s), a.uniformMatrix4fv(s.uniforms.u_matrix, !1, r.transform.calculatePosMatrix(m)), a.drawArrays(a.TRIANGLE_STRIP, 0, r.tileExtentBuffer.length)
                        }
                    }
                }
            }
            var pattern = _dereq_("./pattern");
            module.exports = drawBackground;
        }, { "./pattern": 90 }],
        75: [function(_dereq_, module, exports) {
            "use strict";

            function drawCircles(r, i, e, t) {
                if ("translucent" === r.renderPass && !e.isOpacityZero(r.transform.zoom)) {
                    var a = r.gl;
                    r.setDepthSublayer(0), r.depthMask(!1), a.disable(a.STENCIL_TEST);
                    for (var s = 0; s < t.length; s++) {
                        var n = t[s],
                            o = i.getTile(n),
                            m = o.getBucket(e);
                        if (m) {
                            var u = m.programConfigurations.get(e.id),
                                f = r.useProgram("circle", u);
                            if (u.setUniforms(a, f, e, { zoom: r.transform.zoom }), a.uniform1f(f.uniforms.u_camera_to_center_distance, r.transform.cameraToCenterDistance), a.uniform1i(f.uniforms.u_scale_with_map, "map" === e.paint["circle-pitch-scale"] ? 1 : 0), "map" === e.paint["circle-pitch-alignment"]) {
                                a.uniform1i(f.uniforms.u_pitch_with_map, 1);
                                var c = pixelsToTileUnits(o, 1, r.transform.zoom);
                                a.uniform2f(f.uniforms.u_extrude_scale, c, c)
                            } else a.uniform1i(f.uniforms.u_pitch_with_map, 0), a.uniform2fv(f.uniforms.u_extrude_scale, r.transform.pixelsToGLUnits);
                            a.uniformMatrix4fv(f.uniforms.u_matrix, !1, r.translatePosMatrix(n.posMatrix, o, e.paint["circle-translate"], e.paint["circle-translate-anchor"])), f.draw(a, a.TRIANGLES, e.id, m.layoutVertexBuffer, m.indexBuffer, m.segments, u)
                        }
                    }
                }
            }
            var pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            module.exports = drawCircles;
        }, { "../source/pixels_to_tile_units": 104 }],
        76: [function(_dereq_, module, exports) {
            "use strict";

            function drawCollisionDebugGeometry(o, i, e, r, l) {
                for (var n = o.gl, s = l ? o.useProgram("collisionCircle") : o.useProgram("collisionBox"), t = 0; t < r.length; t++) {
                    var u = r[t],
                        a = i.getTile(u),
                        f = a.getBucket(e);
                    if (f) {
                        var m = l ? f.collisionCircle : f.collisionBox;
                        if (m) {
                            n.uniformMatrix4fv(s.uniforms.u_matrix, !1, u.posMatrix), l || o.lineWidth(1), n.uniform1f(s.uniforms.u_camera_to_center_distance, o.transform.cameraToCenterDistance);
                            var c = pixelsToTileUnits(a, 1, o.transform.zoom),
                                x = Math.pow(2, o.transform.zoom - a.coord.z);
                            n.uniform1f(s.uniforms.u_pixels_to_tile_units, c), n.uniform2f(s.uniforms.u_extrude_scale, o.transform.pixelsToGLUnits[0] / (c * x), o.transform.pixelsToGLUnits[1] / (c * x)), s.draw(n, l ? n.TRIANGLES : n.LINES, e.id, m.layoutVertexBuffer, m.indexBuffer, m.segments, null, m.collisionVertexBuffer, null)
                        }
                    }
                }
            }

            function drawCollisionDebug(o, i, e, r) { drawCollisionDebugGeometry(o, i, e, r, !1), drawCollisionDebugGeometry(o, i, e, r, !0) }
            var pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            module.exports = drawCollisionDebug;
        }, { "../source/pixels_to_tile_units": 104 }],
        77: [function(_dereq_, module, exports) {
            "use strict";

            function drawDebug(r, e, t) { for (var a = 0; a < t.length; a++) drawDebugTile(r, e, t[a]) }

            function drawDebugTile(r, e, t) {
                var a = r.gl;
                a.disable(a.STENCIL_TEST), r.lineWidth(1 * browser.devicePixelRatio);
                var i = t.posMatrix,
                    u = r.useProgram("debug");
                a.uniformMatrix4fv(u.uniforms.u_matrix, !1, i), a.uniform4f(u.uniforms.u_color, 1, 0, 0, 1), r.debugVAO.bind(a, u, r.debugBuffer), a.drawArrays(a.LINE_STRIP, 0, r.debugBuffer.length);
                for (var o = createTextVerticies(t.toString(), 50, 200, 5), n = new PosArray, f = 0; f < o.length; f += 2) n.emplaceBack(o[f], o[f + 1]);
                var l = new VertexBuffer(a, n);
                (new VertexArrayObject).bind(a, u, l), a.uniform4f(u.uniforms.u_color, 1, 1, 1, 1);
                for (var s = e.getTile(t).tileSize, m = EXTENT / (Math.pow(2, r.transform.zoom - t.z) * s), x = [
                        [-1, -1],
                        [-1, 1],
                        [1, -1],
                        [1, 1]
                    ], g = 0; g < x.length; g++) {
                    var b = x[g];
                    a.uniformMatrix4fv(u.uniforms.u_matrix, !1, mat4.translate([], i, [m * b[0], m * b[1], 0])), a.drawArrays(a.LINES, 0, l.length)
                }
                a.uniform4f(u.uniforms.u_color, 0, 0, 0, 1), a.uniformMatrix4fv(u.uniforms.u_matrix, !1, i), a.drawArrays(a.LINES, 0, l.length)
            }

            function createTextVerticies(r, e, t, a) {
                a = a || 1;
                var i, u, o, n, f, l, s, m, x = [];
                for (i = 0, u = r.length; i < u; i++)
                    if (f = simplexFont[r[i]]) {
                        for (m = null, o = 0, n = f[1].length; o < n; o += 2) - 1 === f[1][o] && -1 === f[1][o + 1] ? m = null : (l = e + f[1][o] * a, s = t - f[1][o + 1] * a, m && x.push(m.x, m.y, l, s), m = { x: l, y: s });
                        e += f[0] * a
                    }
                return x
            }
            var browser = _dereq_("../util/browser"),
                mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                EXTENT = _dereq_("../data/extent"),
                VertexBuffer = _dereq_("../gl/vertex_buffer"),
                VertexArrayObject = _dereq_("./vertex_array_object"),
                PosArray = _dereq_("../data/pos_array");
            module.exports = drawDebug;
            var simplexFont = { " ": [16, []], "!": [10, [5, 21, 5, 7, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]], '"': [16, [4, 21, 4, 14, -1, -1, 12, 21, 12, 14]], "#": [21, [11, 25, 4, -7, -1, -1, 17, 25, 10, -7, -1, -1, 4, 12, 18, 12, -1, -1, 3, 6, 17, 6]], $: [20, [8, 25, 8, -4, -1, -1, 12, 25, 12, -4, -1, -1, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]], "%": [24, [21, 21, 3, 0, -1, -1, 8, 21, 10, 19, 10, 17, 9, 15, 7, 14, 5, 14, 3, 16, 3, 18, 4, 20, 6, 21, 8, 21, 10, 20, 13, 19, 16, 19, 19, 20, 21, 21, -1, -1, 17, 7, 15, 6, 14, 4, 14, 2, 16, 0, 18, 0, 20, 1, 21, 3, 21, 5, 19, 7, 17, 7]], "&": [26, [23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18, 13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22, 0, 23, 1, 23, 2]], "'": [10, [5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15]], "(": [14, [11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7]], ")": [14, [3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7]], "*": [16, [8, 21, 8, 9, -1, -1, 3, 18, 13, 12, -1, -1, 13, 18, 3, 12]], "+": [26, [13, 18, 13, 0, -1, -1, 4, 9, 22, 9]], ",": [10, [6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]], "-": [26, [4, 9, 22, 9]], ".": [10, [5, 2, 4, 1, 5, 0, 6, 1, 5, 2]], "/": [22, [20, 25, 2, -7]], 0: [20, [9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4, 17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21]], 1: [20, [6, 17, 8, 18, 11, 21, 11, 0]], 2: [20, [4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16, 15, 15, 13, 13, 10, 3, 0, 17, 0]], 3: [20, [5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]], 4: [20, [13, 21, 3, 7, 18, 7, -1, -1, 13, 21, 13, 0]], 5: [20, [15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17, 6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4]], 6: [20, [16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1, 10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7, 12, 5, 10, 4, 7]], 7: [20, [17, 21, 7, 0, -1, -1, 3, 21, 17, 21]], 8: [20, [8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7, 17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9, 12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21]], 9: [20, [16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6, 20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0, 5, 1, 4, 3]], ":": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2]], ";": [10, [5, 14, 4, 13, 5, 12, 6, 13, 5, 14, -1, -1, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4]], "<": [24, [20, 18, 4, 9, 20, 0]], "=": [26, [4, 12, 22, 12, -1, -1, 4, 6, 22, 6]], ">": [24, [4, 18, 20, 9, 4, 0]], "?": [18, [3, 16, 3, 17, 4, 19, 5, 20, 7, 21, 11, 21, 13, 20, 14, 19, 15, 17, 15, 15, 14, 13, 13, 12, 9, 10, 9, 7, -1, -1, 9, 2, 8, 1, 9, 0, 10, 1, 9, 2]], "@": [27, [18, 13, 17, 15, 15, 16, 12, 16, 10, 15, 9, 14, 8, 11, 8, 8, 9, 6, 11, 5, 14, 5, 16, 6, 17, 8, -1, -1, 12, 16, 10, 14, 9, 11, 9, 8, 10, 6, 11, 5, -1, -1, 18, 16, 17, 8, 17, 6, 19, 5, 21, 5, 23, 7, 24, 10, 24, 12, 23, 15, 22, 17, 20, 19, 18, 20, 15, 21, 12, 21, 9, 20, 7, 19, 5, 17, 4, 15, 3, 12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1, 12, 0, 15, 0, 18, 1, 20, 2, 21, 3, -1, -1, 19, 16, 18, 8, 18, 6, 19, 5]], A: [18, [9, 21, 1, 0, -1, -1, 9, 21, 17, 0, -1, -1, 4, 7, 14, 7]], B: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, -1, -1, 4, 11, 13, 11, 16, 10, 17, 9, 18, 7, 18, 4, 17, 2, 16, 1, 13, 0, 4, 0]], C: [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5]], D: [21, [4, 21, 4, 0, -1, -1, 4, 21, 11, 21, 14, 20, 16, 18, 17, 16, 18, 13, 18, 8, 17, 5, 16, 3, 14, 1, 11, 0, 4, 0]], E: [19, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11, -1, -1, 4, 0, 17, 0]], F: [18, [4, 21, 4, 0, -1, -1, 4, 21, 17, 21, -1, -1, 4, 11, 12, 11]], G: [21, [18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 18, 8, -1, -1, 13, 8, 18, 8]], H: [22, [4, 21, 4, 0, -1, -1, 18, 21, 18, 0, -1, -1, 4, 11, 18, 11]], I: [8, [4, 21, 4, 0]], J: [16, [12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7]], K: [21, [4, 21, 4, 0, -1, -1, 18, 21, 4, 7, -1, -1, 9, 12, 18, 0]], L: [17, [4, 21, 4, 0, -1, -1, 4, 0, 16, 0]], M: [24, [4, 21, 4, 0, -1, -1, 4, 21, 12, 0, -1, -1, 20, 21, 12, 0, -1, -1, 20, 21, 20, 0]], N: [22, [4, 21, 4, 0, -1, -1, 4, 21, 18, 0, -1, -1, 18, 21, 18, 0]], O: [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21]], P: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 14, 17, 12, 16, 11, 13, 10, 4, 10]], Q: [22, [9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, -1, -1, 12, 4, 18, -2]], R: [21, [4, 21, 4, 0, -1, -1, 4, 21, 13, 21, 16, 20, 17, 19, 18, 17, 18, 15, 17, 13, 16, 12, 13, 11, 4, 11, -1, -1, 11, 11, 18, 0]], S: [20, [17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12, 13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3]], T: [16, [8, 21, 8, 0, -1, -1, 1, 21, 15, 21]], U: [22, [4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21]], V: [18, [1, 21, 9, 0, -1, -1, 17, 21, 9, 0]], W: [24, [2, 21, 7, 0, -1, -1, 12, 21, 7, 0, -1, -1, 12, 21, 17, 0, -1, -1, 22, 21, 17, 0]], X: [20, [3, 21, 17, 0, -1, -1, 17, 21, 3, 0]], Y: [18, [1, 21, 9, 11, 9, 0, -1, -1, 17, 21, 9, 11]], Z: [20, [17, 21, 3, 0, -1, -1, 3, 21, 17, 21, -1, -1, 3, 0, 17, 0]], "[": [14, [4, 25, 4, -7, -1, -1, 5, 25, 5, -7, -1, -1, 4, 25, 11, 25, -1, -1, 4, -7, 11, -7]], "\\": [14, [0, 21, 14, -3]], "]": [14, [9, 25, 9, -7, -1, -1, 10, 25, 10, -7, -1, -1, 3, 25, 10, 25, -1, -1, 3, -7, 10, -7]], "^": [16, [6, 15, 8, 18, 10, 15, -1, -1, 3, 12, 8, 17, 13, 12, -1, -1, 8, 17, 8, 0]], _: [16, [0, -2, 16, -2]], "`": [10, [6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17]], a: [19, [15, 14, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], b: [19, [4, 21, 4, 0, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]], c: [18, [15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], d: [19, [15, 21, 15, 0, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], e: [18, [3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], f: [12, [10, 21, 8, 21, 6, 20, 5, 17, 5, 0, -1, -1, 2, 14, 9, 14]], g: [19, [15, 14, 15, -2, 14, -5, 13, -6, 11, -7, 8, -7, 6, -6, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], h: [19, [4, 21, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]], i: [8, [3, 21, 4, 20, 5, 21, 4, 22, 3, 21, -1, -1, 4, 14, 4, 0]], j: [10, [5, 21, 6, 20, 7, 21, 6, 22, 5, 21, -1, -1, 6, 14, 6, -3, 5, -6, 3, -7, 1, -7]], k: [17, [4, 21, 4, 0, -1, -1, 14, 14, 4, 4, -1, -1, 8, 8, 15, 0]], l: [8, [4, 21, 4, 0]], m: [30, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0, -1, -1, 15, 10, 18, 13, 20, 14, 23, 14, 25, 13, 26, 10, 26, 0]], n: [19, [4, 14, 4, 0, -1, -1, 4, 10, 7, 13, 9, 14, 12, 14, 14, 13, 15, 10, 15, 0]], o: [19, [8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3, 16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14]], p: [19, [4, 14, 4, -7, -1, -1, 4, 11, 6, 13, 8, 14, 11, 14, 13, 13, 15, 11, 16, 8, 16, 6, 15, 3, 13, 1, 11, 0, 8, 0, 6, 1, 4, 3]], q: [19, [15, 14, 15, -7, -1, -1, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3]], r: [13, [4, 14, 4, 0, -1, -1, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14]], s: [17, [14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6, 14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3]], t: [12, [5, 21, 5, 4, 6, 1, 8, 0, 10, 0, -1, -1, 2, 14, 9, 14]], u: [19, [4, 14, 4, 4, 5, 1, 7, 0, 10, 0, 12, 1, 15, 4, -1, -1, 15, 14, 15, 0]], v: [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0]], w: [22, [3, 14, 7, 0, -1, -1, 11, 14, 7, 0, -1, -1, 11, 14, 15, 0, -1, -1, 19, 14, 15, 0]], x: [17, [3, 14, 14, 0, -1, -1, 14, 14, 3, 0]], y: [16, [2, 14, 8, 0, -1, -1, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7]], z: [17, [14, 14, 3, 0, -1, -1, 3, 14, 14, 14, -1, -1, 3, 0, 14, 0]], "{": [14, [9, 25, 7, 24, 6, 23, 5, 21, 5, 19, 6, 17, 7, 16, 8, 14, 8, 12, 6, 10, -1, -1, 7, 24, 6, 22, 6, 20, 7, 18, 8, 17, 9, 15, 9, 13, 8, 11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6, -2, 6, -4, 7, -6, -1, -1, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5, -1, 5, -3, 6, -5, 7, -6, 9, -7]], "|": [8, [4, 25, 4, -7]], "}": [14, [5, 25, 7, 24, 8, 23, 9, 21, 9, 19, 8, 17, 7, 16, 6, 14, 6, 12, 8, 10, -1, -1, 7, 24, 8, 22, 8, 20, 7, 18, 6, 17, 5, 15, 5, 13, 6, 11, 10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8, -2, 8, -4, 7, -6, -1, -1, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9, -1, 9, -3, 8, -5, 7, -6, 5, -7]], "~": [24, [3, 6, 3, 8, 4, 11, 6, 12, 8, 12, 10, 11, 14, 8, 16, 7, 18, 7, 20, 8, 21, 10, -1, -1, 3, 8, 4, 10, 6, 11, 8, 11, 10, 10, 14, 7, 16, 6, 18, 6, 20, 7, 21, 10, 21, 12]] };
        }, { "../data/extent": 58, "../data/pos_array": 62, "../gl/vertex_buffer": 72, "../util/browser": 240, "./vertex_array_object": 95, "@mapbox/gl-matrix": 1 }],
        78: [function(_dereq_, module, exports) {
            "use strict";

            function drawFill(r, t, e, a) {
                if (!e.isOpacityZero(r.transform.zoom)) {
                    var i = r.gl;
                    i.enable(i.STENCIL_TEST);
                    var l = !e.paint["fill-pattern"] && e.isPaintValueFeatureConstant("fill-color") && e.isPaintValueFeatureConstant("fill-opacity") && 1 === e.paint["fill-color"].a && 1 === e.paint["fill-opacity"] ? "opaque" : "translucent";
                    r.renderPass === l && (r.setDepthSublayer(1), r.depthMask("opaque" === r.renderPass), drawFillTiles(r, t, e, a, drawFillTile)), "translucent" === r.renderPass && e.paint["fill-antialias"] && (r.lineWidth(2), r.depthMask(!1), r.setDepthSublayer(e.getPaintProperty("fill-outline-color") ? 2 : 0), drawFillTiles(r, t, e, a, drawStrokeTile))
                }
            }

            function drawFillTiles(r, t, e, a, i) {
                if (!pattern.isPatternMissing(e.paint["fill-pattern"], r))
                    for (var l = !0, n = 0, o = a; n < o.length; n += 1) {
                        var s = o[n],
                            f = t.getTile(s),
                            u = f.getBucket(e);
                        u && (r.enableTileClippingMask(s), i(r, t, e, f, s, u, l), l = !1)
                    }
            }

            function drawFillTile(r, t, e, a, i, l, n) {
                var o = r.gl,
                    s = l.programConfigurations.get(e.id);
                setFillProgram("fill", e.paint["fill-pattern"], r, s, e, a, i, n).draw(o, o.TRIANGLES, e.id, l.layoutVertexBuffer, l.indexBuffer, l.segments, s)
            }

            function drawStrokeTile(r, t, e, a, i, l, n) {
                var o = r.gl,
                    s = l.programConfigurations.get(e.id),
                    f = e.paint["fill-pattern"] && !e.getPaintProperty("fill-outline-color"),
                    u = setFillProgram("fillOutline", f, r, s, e, a, i, n);
                o.uniform2f(u.uniforms.u_world, o.drawingBufferWidth, o.drawingBufferHeight), u.draw(o, o.LINES, e.id, l.layoutVertexBuffer, l.indexBuffer2, l.segments2, s)
            }

            function setFillProgram(r, t, e, a, i, l, n, o) { var s, f = e.currentProgram; return t ? (s = e.useProgram(r + "Pattern", a), (o || s !== f) && (a.setUniforms(e.gl, s, i, { zoom: e.transform.zoom }), pattern.prepare(i.paint["fill-pattern"], e, s)), pattern.setTile(l, e, s)) : (s = e.useProgram(r, a), (o || s !== f) && a.setUniforms(e.gl, s, i, { zoom: e.transform.zoom })), e.gl.uniformMatrix4fv(s.uniforms.u_matrix, !1, e.translatePosMatrix(n.posMatrix, l, i.paint["fill-translate"], i.paint["fill-translate-anchor"])), s }
            var pattern = _dereq_("./pattern");
            module.exports = drawFill;
        }, { "./pattern": 90 }],
        79: [function(_dereq_, module, exports) {
            "use strict";

            function draw(r, t, i, e) {
                if (!i.isOpacityZero(r.transform.zoom))
                    if ("3d" === r.renderPass) {
                        var a = r.gl;
                        a.disable(a.STENCIL_TEST), a.enable(a.DEPTH_TEST), r.clearColor(), r.depthMask(!0);
                        for (var o = 0; o < e.length; o++) drawExtrusion(r, t, i, e[o])
                    } else "translucent" === r.renderPass && drawExtrusionTexture(r, i)
            }

            function drawExtrusionTexture(r, t) {
                var i = t.viewportFrame;
                if (i) {
                    var e = r.gl,
                        a = r.useProgram("extrusionTexture");
                    e.disable(e.STENCIL_TEST), e.disable(e.DEPTH_TEST), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, i.texture), e.uniform1f(a.uniforms.u_opacity, t.paint["fill-extrusion-opacity"]), e.uniform1i(a.uniforms.u_image, 0);
                    var o = mat4.create();
                    mat4.ortho(o, 0, r.width, r.height, 0, 0, 1), e.uniformMatrix4fv(a.uniforms.u_matrix, !1, o), e.uniform2f(a.uniforms.u_world, e.drawingBufferWidth, e.drawingBufferHeight), r.viewportVAO.bind(e, a, r.viewportBuffer), e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
                }
            }

            function drawExtrusion(r, t, i, e) {
                var a = t.getTile(e),
                    o = a.getBucket(i);
                if (o) {
                    var n = r.gl,
                        u = i.paint["fill-extrusion-pattern"],
                        l = o.programConfigurations.get(i.id),
                        s = r.useProgram(u ? "fillExtrusionPattern" : "fillExtrusion", l);
                    if (l.setUniforms(n, s, i, { zoom: r.transform.zoom }), u) {
                        if (pattern.isPatternMissing(u, r)) return;
                        pattern.prepare(u, r, s), pattern.setTile(a, r, s), n.uniform1f(s.uniforms.u_height_factor, -Math.pow(2, e.z) / a.tileSize / 8)
                    }
                    r.gl.uniformMatrix4fv(s.uniforms.u_matrix, !1, r.translatePosMatrix(e.posMatrix, a, i.paint["fill-extrusion-translate"], i.paint["fill-extrusion-translate-anchor"])), setLight(s, r), s.draw(n, n.TRIANGLES, i.id, o.layoutVertexBuffer, o.indexBuffer, o.segments, l)
                }
            }

            function setLight(r, t) {
                var i = t.gl,
                    e = t.style.light,
                    a = e.calculated.position,
                    o = [a.x, a.y, a.z],
                    n = mat3.create();
                "viewport" === e.calculated.anchor && mat3.fromRotation(n, -t.transform.angle), vec3.transformMat3(o, o, n), i.uniform3fv(r.uniforms.u_lightpos, o), i.uniform1f(r.uniforms.u_lightintensity, e.calculated.intensity), i.uniform3f(r.uniforms.u_lightcolor, e.calculated.color.r, e.calculated.color.g, e.calculated.color.b)
            }
            var glMatrix = _dereq_("@mapbox/gl-matrix"),
                pattern = _dereq_("./pattern"),
                mat3 = glMatrix.mat3,
                mat4 = glMatrix.mat4,
                vec3 = glMatrix.vec3;
            module.exports = draw;
        }, { "./pattern": 90, "@mapbox/gl-matrix": 1 }],
        80: [function(_dereq_, module, exports) {
            "use strict";

            function drawHeatmap(e, r, t, a) {
                if (!e.isOpaquePass && !t.isOpacityZero(e.transform.zoom)) {
                    var i = e.gl;
                    e.setDepthSublayer(0), e.depthMask(!1), i.disable(i.STENCIL_TEST), renderToTexture(i, e, t), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), i.blendFunc(i.ONE, i.ONE);
                    for (var u = 0; u < a.length; u++) {
                        var T = a[u];
                        if (!r.hasRenderableParent(T)) {
                            var o = r.getTile(T),
                                E = o.getBucket(t);
                            if (E) {
                                var m = E.programConfigurations.get(t.id),
                                    n = e.useProgram("heatmap", m),
                                    f = e.transform,
                                    x = f.zoom;
                                m.setUniforms(i, n, t, { zoom: x }), i.uniform1f(n.uniforms.u_radius, t.getPaintValue("heatmap-radius", { zoom: x })), i.uniform1f(n.uniforms.u_extrude_scale, pixelsToTileUnits(o, 1, x)), i.uniform1f(n.uniforms.u_intensity, t.getPaintValue("heatmap-intensity", { zoom: x })), i.uniformMatrix4fv(n.uniforms.u_matrix, !1, T.posMatrix), n.draw(i, i.TRIANGLES, t.id, E.layoutVertexBuffer, E.indexBuffer, E.segments, m)
                            }
                        }
                    }
                    renderTextureToMap(i, e, t)
                }
            }

            function renderToTexture(e, r, t) {
                e.activeTexture(e.TEXTURE1), e.viewport(0, 0, r.width / 4, r.height / 4);
                var a = t.heatmapTexture,
                    i = t.heatmapFbo;
                a ? (e.bindTexture(e.TEXTURE_2D, a), e.bindFramebuffer(e.FRAMEBUFFER, i)) : (a = t.heatmapTexture = e.createTexture(), e.bindTexture(e.TEXTURE_2D, a), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), i = t.heatmapFbo = e.createFramebuffer(), bindTextureFramebuffer(e, r, a, i))
            }

            function bindTextureFramebuffer(e, r, t, a) { e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, r.width / 4, r.height / 4, 0, e.RGBA, r.extTextureHalfFloat ? r.extTextureHalfFloat.HALF_FLOAT_OES : e.UNSIGNED_BYTE, null), e.bindFramebuffer(e.FRAMEBUFFER, a), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0), r.extTextureHalfFloat && e.checkFramebufferStatus(e.FRAMEBUFFER) !== e.FRAMEBUFFER_COMPLETE && (r.extTextureHalfFloat = null, bindTextureFramebuffer(e, r, t, a)) }

            function renderTextureToMap(e, r, t) {
                e.bindFramebuffer(e.FRAMEBUFFER, null), e.activeTexture(e.TEXTURE2);
                var a = t.colorRampTexture;
                a || (a = t.colorRampTexture = new Texture(e, t.colorRamp, e.RGBA)), a.bind(e.LINEAR, e.CLAMP_TO_EDGE), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
                var i = r.useProgram("heatmapTexture");
                e.viewport(0, 0, r.width, r.height), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, t.heatmapTexture);
                var u = t.getPaintValue("heatmap-opacity", { zoom: r.transform.zoom });
                e.uniform1f(i.uniforms.u_opacity, u), e.uniform1i(i.uniforms.u_image, 1), e.uniform1i(i.uniforms.u_color_ramp, 2);
                var T = mat4.create();
                mat4.ortho(T, 0, r.width, r.height, 0, 0, 1), e.uniformMatrix4fv(i.uniforms.u_matrix, !1, T), e.disable(e.DEPTH_TEST), e.uniform2f(i.uniforms.u_world, e.drawingBufferWidth, e.drawingBufferHeight), r.viewportVAO.bind(e, i, r.viewportBuffer), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), e.enable(e.DEPTH_TEST)
            }
            var mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                Texture = _dereq_("./texture"),
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            module.exports = drawHeatmap;
        }, { "../source/pixels_to_tile_units": 104, "./texture": 93, "@mapbox/gl-matrix": 1 }],
        81: [function(_dereq_, module, exports) {
            "use strict";

            function drawLineTile(i, r, e, t, n, a, o, f, s) {
                var u, l, m, _, p = r.gl,
                    g = n.paint["line-dasharray"],
                    d = n.paint["line-pattern"];
                if (f || s) {
                    var c = 1 / pixelsToTileUnits(e, 1, r.transform.tileZoom);
                    if (g) {
                        u = r.lineAtlas.getDash(g.from, "round" === n.layout["line-cap"]), l = r.lineAtlas.getDash(g.to, "round" === n.layout["line-cap"]);
                        var x = u.width * g.fromScale,
                            T = l.width * g.toScale;
                        p.uniform2f(i.uniforms.u_patternscale_a, c / x, -u.height / 2), p.uniform2f(i.uniforms.u_patternscale_b, c / T, -l.height / 2), p.uniform1f(i.uniforms.u_sdfgamma, r.lineAtlas.width / (256 * Math.min(x, T) * browser.devicePixelRatio) / 2)
                    } else if (d) {
                        if (m = r.imageManager.getPattern(d.from), _ = r.imageManager.getPattern(d.to), !m || !_) return;
                        p.uniform2f(i.uniforms.u_pattern_size_a, m.displaySize[0] * d.fromScale / c, _.displaySize[1]), p.uniform2f(i.uniforms.u_pattern_size_b, _.displaySize[0] * d.toScale / c, _.displaySize[1]);
                        var h = r.imageManager.getPixelSize(),
                            v = h.width,
                            b = h.height;
                        p.uniform2fv(i.uniforms.u_texsize, [v, b])
                    }
                    p.uniform2f(i.uniforms.u_gl_units_to_pixels, 1 / r.transform.pixelsToGLUnits[0], 1 / r.transform.pixelsToGLUnits[1])
                }
                f && (g ? (p.uniform1i(i.uniforms.u_image, 0), p.activeTexture(p.TEXTURE0), r.lineAtlas.bind(p), p.uniform1f(i.uniforms.u_tex_y_a, u.y), p.uniform1f(i.uniforms.u_tex_y_b, l.y), p.uniform1f(i.uniforms.u_mix, g.t)) : d && (p.uniform1i(i.uniforms.u_image, 0), p.activeTexture(p.TEXTURE0), r.imageManager.bind(p), p.uniform2fv(i.uniforms.u_pattern_tl_a, m.tl), p.uniform2fv(i.uniforms.u_pattern_br_a, m.br), p.uniform2fv(i.uniforms.u_pattern_tl_b, _.tl), p.uniform2fv(i.uniforms.u_pattern_br_b, _.br), p.uniform1f(i.uniforms.u_fade, d.t))), r.enableTileClippingMask(a);
                var y = r.translatePosMatrix(a.posMatrix, e, n.paint["line-translate"], n.paint["line-translate-anchor"]);
                p.uniformMatrix4fv(i.uniforms.u_matrix, !1, y), p.uniform1f(i.uniforms.u_ratio, 1 / pixelsToTileUnits(e, 1, r.transform.zoom)), i.draw(p, p.TRIANGLES, n.id, t.layoutVertexBuffer, t.indexBuffer, t.segments, o)
            }
            var browser = _dereq_("../util/browser"),
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            module.exports = function(i, r, e, t) {
                if ("translucent" === i.renderPass && !e.isOpacityZero(i.transform.zoom)) {
                    i.setDepthSublayer(0), i.depthMask(!1);
                    var n = i.gl;
                    if (n.enable(n.STENCIL_TEST), !(e.paint["line-width"] <= 0))
                        for (var a, o = e.paint["line-dasharray"] ? "lineSDF" : e.paint["line-pattern"] ? "linePattern" : "line", f = !0, s = 0, u = t; s < u.length; s += 1) {
                            var l = u[s],
                                m = r.getTile(l),
                                _ = m.getBucket(e);
                            if (_) {
                                var p = _.programConfigurations.get(e.id),
                                    g = i.currentProgram,
                                    d = i.useProgram(o, p),
                                    c = f || d !== g,
                                    x = a !== m.coord.z;
                                c && p.setUniforms(i.gl, d, e, { zoom: i.transform.zoom }), drawLineTile(d, i, m, _, e, l, p, c, x), a = m.coord.z, f = !1
                            }
                        }
                }
            };
        }, { "../source/pixels_to_tile_units": 104, "../util/browser": 240 }],
        82: [function(_dereq_, module, exports) {
            "use strict";

            function drawRaster(r, e, t, a) {
                var o = r.transform.zoom;
                if ("translucent" === r.renderPass && !t.isOpacityZero(o)) {
                    var i = r.gl,
                        n = e.getSource(),
                        u = r.useProgram("raster");
                    i.enable(i.DEPTH_TEST), r.depthMask(1 === t.getPaintValue("raster-opacity", { zoom: o })), i.depthFunc(i.LESS), i.disable(i.STENCIL_TEST), i.uniform1f(u.uniforms.u_brightness_low, t.getPaintValue("raster-brightness-min", { zoom: o })), i.uniform1f(u.uniforms.u_brightness_high, t.getPaintValue("raster-brightness-max", { zoom: o })), i.uniform1f(u.uniforms.u_saturation_factor, saturationFactor(t.getPaintValue("raster-saturation", { zoom: o }))), i.uniform1f(u.uniforms.u_contrast_factor, contrastFactor(t.getPaintValue("raster-contrast", { zoom: o }))), i.uniform3fv(u.uniforms.u_spin_weights, spinWeights(t.getPaintValue("raster-hue-rotate", { zoom: o }))), i.uniform1f(u.uniforms.u_buffer_scale, 1), i.uniform1i(u.uniforms.u_image0, 0), i.uniform1i(u.uniforms.u_image1, 1);
                    for (var s = a.length && a[0].z, f = 0, m = a; f < m.length; f += 1) {
                        var d = m[f];
                        r.setDepthSublayer(d.z - s);
                        var c = e.getTile(d),
                            l = r.transform.calculatePosMatrix(d, e.getSource().maxzoom);
                        c.registerFadeDuration(r.style.animationLoop, t.getPaintValue("raster-fade-duration", { zoom: o })), i.uniformMatrix4fv(u.uniforms.u_matrix, !1, l);
                        var _ = e.findLoadedParent(d, 0, {}),
                            g = getFadeValues(c, _, e, t, r.transform),
                            E = void 0,
                            h = void 0;
                        if (i.activeTexture(i.TEXTURE0), c.texture.bind(i.LINEAR, i.CLAMP_TO_EDGE, i.LINEAR_MIPMAP_NEAREST), i.activeTexture(i.TEXTURE1), _ ? (_.texture.bind(i.LINEAR, i.CLAMP_TO_EDGE, i.LINEAR_MIPMAP_NEAREST), E = Math.pow(2, _.coord.z - c.coord.z), h = [c.coord.x * E % 1, c.coord.y * E % 1]) : c.texture.bind(i.LINEAR, i.CLAMP_TO_EDGE, i.LINEAR_MIPMAP_NEAREST), i.uniform2fv(u.uniforms.u_tl_parent, h || [0, 0]), i.uniform1f(u.uniforms.u_scale_parent, E || 1), i.uniform1f(u.uniforms.u_fade_t, g.mix), i.uniform1f(u.uniforms.u_opacity, g.opacity * t.getPaintValue("raster-opacity", { zoom: o })), n instanceof ImageSource) {
                            var p = n.boundsBuffer;
                            n.boundsVAO.bind(i, u, p), i.drawArrays(i.TRIANGLE_STRIP, 0, p.length)
                        } else if (c.maskedBoundsBuffer && c.maskedIndexBuffer && c.segments) u.draw(i, i.TRIANGLES, t.id, c.maskedBoundsBuffer, c.maskedIndexBuffer, c.segments);
                        else {
                            var P = r.rasterBoundsBuffer,
                                A = r.rasterBoundsVAO;
                            A.bind(i, u, P), i.drawArrays(i.TRIANGLE_STRIP, 0, P.length)
                        }
                    }
                    i.depthFunc(i.LEQUAL)
                }
            }

            function spinWeights(r) {
                r *= Math.PI / 180;
                var e = Math.sin(r),
                    t = Math.cos(r);
                return [(2 * t + 1) / 3, (-Math.sqrt(3) * e - t + 1) / 3, (Math.sqrt(3) * e - t + 1) / 3]
            }

            function contrastFactor(r) { return r > 0 ? 1 / (1 - r) : 1 + r }

            function saturationFactor(r) { return r > 0 ? 1 - 1 / (1.001 - r) : -r }

            function getFadeValues(r, e, t, a, o) {
                var i = a.getPaintValue("raster-fade-duration", { zoom: o.zoom });
                if (i > 0) {
                    var n = Date.now(),
                        u = (n - r.timeAdded) / i,
                        s = e ? (n - e.timeAdded) / i : -1,
                        f = t.getSource(),
                        m = o.coveringZoomLevel({ tileSize: f.tileSize, roundZoom: f.roundZoom }),
                        d = !e || Math.abs(e.coord.z - m) > Math.abs(r.coord.z - m),
                        c = d && r.refreshedUponExpiration ? 1 : util.clamp(d ? u : 1 - s, 0, 1);
                    return r.refreshedUponExpiration && u >= 1 && (r.refreshedUponExpiration = !1), e ? { opacity: 1, mix: 1 - c } : { opacity: c, mix: 0 }
                }
                return { opacity: 1, mix: 0 }
            }
            var util = _dereq_("../util/util"),
                ImageSource = _dereq_("../source/image_source");
            module.exports = drawRaster;
        }, { "../source/image_source": 102, "../util/util": 260 }],
        83: [function(_dereq_, module, exports) {
            "use strict";

            function drawSymbols(i, o, t, e) {
                if ("translucent" === i.renderPass) {
                    var a = i.gl;
                    a.disable(a.STENCIL_TEST), i.setDepthSublayer(0), i.depthMask(!1), t.isOpacityZero(i.transform.zoom, "icon-opacity") || drawLayerSymbols(i, o, t, e, !1, t.paint["icon-translate"], t.paint["icon-translate-anchor"], t.layout["icon-rotation-alignment"], t.layout["icon-pitch-alignment"], t.layout["icon-keep-upright"]), t.isOpacityZero(i.transform.zoom, "text-opacity") || drawLayerSymbols(i, o, t, e, !0, t.paint["text-translate"], t.paint["text-translate-anchor"], t.layout["text-rotation-alignment"], t.layout["text-pitch-alignment"], t.layout["text-keep-upright"]), o.map.showCollisionBoxes && drawCollisionDebug(i, o, t, e)
                }
            }

            function drawLayerSymbols(i, o, t, e, a, r, n, s, u, m) {
                var l = i.gl,
                    f = i.transform,
                    c = "map" === s,
                    _ = "map" === u,
                    y = c && "line" === t.layout["symbol-placement"],
                    p = c && !_ && !y,
                    x = _;
                x ? l.enable(l.DEPTH_TEST) : l.disable(l.DEPTH_TEST);
                for (var d, b = 0, g = e; b < g.length; b += 1) {
                    var T = g[b],
                        S = o.getTile(T),
                        z = S.getBucket(t);
                    if (z) {
                        var h = a ? z.text : z.icon;
                        if (h && h.segments.get().length) {
                            var v = h.programConfigurations.get(t.id),
                                w = a || z.sdfIcons,
                                E = a ? z.textSizeData : z.iconSizeData;
                            if (d || (d = i.useProgram(w ? "symbolSDF" : "symbolIcon", v), v.setUniforms(l, d, t, { zoom: i.transform.zoom }), setSymbolDrawState(d, i, t, a, p, _, E)), l.activeTexture(l.TEXTURE0), l.uniform1i(d.uniforms.u_texture, 0), a) S.glyphAtlasTexture.bind(l.LINEAR, l.CLAMP_TO_EDGE), l.uniform2fv(d.uniforms.u_texsize, S.glyphAtlasTexture.size);
                            else {
                                var M = !t.isLayoutValueFeatureConstant("icon-size") || !t.isLayoutValueZoomConstant("icon-size") || 1 !== t.getLayoutValue("icon-size", { zoom: f.zoom }) || z.iconsNeedLinear,
                                    D = _ || 0 !== f.pitch;
                                S.iconAtlasTexture.bind(w || i.options.rotating || i.options.zooming || M || D ? l.LINEAR : l.NEAREST, l.CLAMP_TO_EDGE), l.uniform2fv(d.uniforms.u_texsize, S.iconAtlasTexture.size)
                            }
                            i.enableTileClippingMask(T), l.uniformMatrix4fv(d.uniforms.u_matrix, !1, i.translatePosMatrix(T.posMatrix, S, r, n));
                            var L = pixelsToTileUnits(S, 1, i.transform.zoom),
                                P = symbolProjection.getLabelPlaneMatrix(T.posMatrix, _, c, i.transform, L),
                                C = symbolProjection.getGlCoordMatrix(T.posMatrix, _, c, i.transform, L);
                            l.uniformMatrix4fv(d.uniforms.u_gl_coord_matrix, !1, i.translatePosMatrix(C, S, r, n, !0)), y ? (l.uniformMatrix4fv(d.uniforms.u_label_plane_matrix, !1, identityMat4), symbolProjection.updateLineLabels(z, T.posMatrix, i, a, P, C, _, m, L, t)) : l.uniformMatrix4fv(d.uniforms.u_label_plane_matrix, !1, P), l.uniform1f(d.uniforms.u_fade_change, i.options.collisionFadeDuration ? (Date.now() - z.fadeStartTime) / i.options.collisionFadeDuration : 1), drawTileSymbols(d, v, i, t, S, h, a, w, _)
                        }
                    }
                }
                x || l.enable(l.DEPTH_TEST)
            }

            function setSymbolDrawState(i, o, t, e, a, r, n) {
                var s = o.gl,
                    u = o.transform;
                s.uniform1i(i.uniforms.u_pitch_with_map, r ? 1 : 0), s.uniform1f(i.uniforms.u_is_text, e ? 1 : 0), s.uniform1f(i.uniforms.u_pitch, u.pitch / 360 * 2 * Math.PI);
                var m = "constant" === n.functionType || "source" === n.functionType,
                    l = "constant" === n.functionType || "camera" === n.functionType;
                s.uniform1i(i.uniforms.u_is_size_zoom_constant, m ? 1 : 0), s.uniform1i(i.uniforms.u_is_size_feature_constant, l ? 1 : 0), s.uniform1f(i.uniforms.u_camera_to_center_distance, u.cameraToCenterDistance);
                var f = symbolSize.evaluateSizeForZoom(n, u, t, e);
                void 0 !== f.uSizeT && s.uniform1f(i.uniforms.u_size_t, f.uSizeT), void 0 !== f.uSize && s.uniform1f(i.uniforms.u_size, f.uSize), s.uniform1f(i.uniforms.u_aspect_ratio, u.width / u.height), s.uniform1i(i.uniforms.u_rotate_symbol, a ? 1 : 0)
            }

            function drawTileSymbols(i, o, t, e, a, r, n, s, u) {
                var m = t.gl,
                    l = t.transform;
                if (s) {
                    var f = (n ? "text" : "icon") + "-halo-width",
                        c = !e.isPaintValueFeatureConstant(f) || e.paint[f],
                        _ = u ? Math.cos(l._pitch) * l.cameraToCenterDistance : 1;
                    m.uniform1f(i.uniforms.u_gamma_scale, _), c && (m.uniform1f(i.uniforms.u_is_halo, 1), drawSymbolElements(r, e, m, i)), m.uniform1f(i.uniforms.u_is_halo, 0)
                }
                drawSymbolElements(r, e, m, i)
            }

            function drawSymbolElements(i, o, t, e) { e.draw(t, t.TRIANGLES, o.id, i.layoutVertexBuffer, i.indexBuffer, i.segments, i.programConfigurations.get(o.id), i.dynamicLayoutVertexBuffer, i.opacityVertexBuffer) }
            var drawCollisionDebug = _dereq_("./draw_collision_debug"),
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units"),
                symbolProjection = _dereq_("../symbol/projection"),
                symbolSize = _dereq_("../symbol/symbol_size"),
                mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                identityMat4 = mat4.identity(new Float32Array(16));
            module.exports = drawSymbols;
        }, { "../source/pixels_to_tile_units": 104, "../symbol/projection": 211, "../symbol/symbol_size": 216, "./draw_collision_debug": 76, "@mapbox/gl-matrix": 1 }],
        84: [function(_dereq_, module, exports) {
            "use strict";

            function makeGlyphAtlas(a) {
                var e = AlphaImage.create({ width: 0, height: 0 }),
                    i = {},
                    t = new ShelfPack(0, 0, { autoResize: !0 });
                for (var h in a) {
                    var p = a[h],
                        r = i[h] = {};
                    for (var m in p) {
                        var g = p[+m];
                        if (g && 0 !== g.bitmap.width && 0 !== g.bitmap.height) {
                            var l = t.packOne(g.bitmap.width + 2 * padding, g.bitmap.height + 2 * padding);
                            AlphaImage.resize(e, { width: t.w, height: t.h }), AlphaImage.copy(g.bitmap, e, { x: 0, y: 0 }, { x: l.x + padding, y: l.y + padding }, g.bitmap), r[m] = { rect: l, metrics: g.metrics }
                        }
                    }
                }
                return t.shrink(), AlphaImage.resize(e, { width: t.w, height: t.h }), { image: e, positions: i }
            }
            var ShelfPack = _dereq_("@mapbox/shelf-pack"),
                ref = _dereq_("../util/image"),
                AlphaImage = ref.AlphaImage,
                padding = 1;
            module.exports = { makeGlyphAtlas: makeGlyphAtlas };
        }, { "../util/image": 251, "@mapbox/shelf-pack": 3 }],
        85: [function(_dereq_, module, exports) {
            "use strict";
            var loadGlyphRange = _dereq_("../style/load_glyph_range"),
                TinySDF = _dereq_("@mapbox/tiny-sdf"),
                isChar = _dereq_("../util/is_char_in_unicode_block"),
                ref = _dereq_("../util/util"),
                asyncAll = ref.asyncAll,
                ref$1 = _dereq_("../util/image"),
                AlphaImage = ref$1.AlphaImage,
                GlyphManager = function(r, e) { this.requestTransform = r, this.localIdeographFontFamily = e, this.entries = {} };
            GlyphManager.prototype.setURL = function(r) { this.url = r }, GlyphManager.prototype.getGlyphs = function(r, e) {
                var t = this,
                    i = [];
                for (var a in r)
                    for (var l = 0, n = r[a]; l < n.length; l += 1) {
                        var s = n[l];
                        i.push({ stack: a, id: s })
                    }
                asyncAll(i, function(r, e) {
                    var i = r.stack,
                        a = r.id,
                        l = t.entries[i];
                    l || (l = t.entries[i] = { glyphs: {}, requests: {} });
                    var n = l.glyphs[a];
                    if (void 0 !== n) return void e(null, { stack: i, id: a, glyph: n });
                    if (n = t._tinySDF(l, i, a)) return void e(null, { stack: i, id: a, glyph: n });
                    var s = Math.floor(a / 256);
                    if (256 * s > 65535) return void e(new Error("glyphs > 65535 not supported"));
                    var o = l.requests[s];
                    o || (o = l.requests[s] = [], loadGlyphRange(i, s, t.url, t.requestTransform, function(r, e) {
                        if (e)
                            for (var t in e) l.glyphs[+t] = e[+t];
                        for (var i = 0, a = o; i < a.length; i += 1) {
                            (0, a[i])(r, e)
                        }
                        delete l.requests[s]
                    })), o.push(function(r, t) { r ? e(r) : t && e(null, { stack: i, id: a, glyph: t[a] || null }) })
                }, function(r, t) {
                    if (r) e(r);
                    else if (t) {
                        for (var i = {}, a = 0, l = t; a < l.length; a += 1) {
                            var n = l[a],
                                s = n.stack,
                                o = n.id,
                                h = n.glyph;
                            (i[s] || (i[s] = {}))[o] = h
                        }
                        e(null, i)
                    }
                })
            }, GlyphManager.prototype._tinySDF = function(r, e, t) { var i = this.localIdeographFontFamily; if (i && (isChar["CJK Unified Ideographs"](t) || isChar["Hangul Syllables"](t))) { var a = r.tinySDF; if (!a) { var l = "400"; /bold/i.test(e) ? l = "900" : /medium/i.test(e) ? l = "500" : /light/i.test(e) && (l = "200"), a = r.tinySDF = new TinySDF(24, 3, 8, .25, i, l) } return { id: t, bitmap: AlphaImage.create({ width: 30, height: 30 }, a.draw(String.fromCharCode(t))), metrics: { width: 24, height: 24, left: 0, top: -8, advance: 24 } } } }, module.exports = GlyphManager;
        }, { "../style/load_glyph_range": 181, "../util/image": 251, "../util/is_char_in_unicode_block": 253, "../util/util": 260, "@mapbox/tiny-sdf": 4 }],
        86: [function(_dereq_, module, exports) {
            "use strict";

            function imagePosition(a, e) {
                var i = e.pixelRatio,
                    t = { x: a.x + padding, y: a.y + padding, w: a.w - 2 * padding, h: a.h - 2 * padding };
                return { pixelRatio: i, textureRect: t, tl: [t.x, t.y], br: [t.x + t.w, t.y + t.h], displaySize: [t.w / i, t.h / i] }
            }

            function makeImageAtlas(a) {
                var e = RGBAImage.create({ width: 0, height: 0 }),
                    i = {},
                    t = new ShelfPack(0, 0, { autoResize: !0 });
                for (var d in a) {
                    var g = a[d],
                        n = t.packOne(g.data.width + 2 * padding, g.data.height + 2 * padding);
                    RGBAImage.resize(e, { width: t.w, height: t.h }), RGBAImage.copy(g.data, e, { x: 0, y: 0 }, { x: n.x + padding, y: n.y + padding }, g.data), i[d] = imagePosition(n, g)
                }
                return t.shrink(), RGBAImage.resize(e, { width: t.w, height: t.h }), { image: e, positions: i }
            }
            var ShelfPack = _dereq_("@mapbox/shelf-pack"),
                ref = _dereq_("../util/image"),
                RGBAImage = ref.RGBAImage,
                padding = 1;
            module.exports = { imagePosition: imagePosition, makeImageAtlas: makeImageAtlas };
        }, { "../util/image": 251, "@mapbox/shelf-pack": 3 }],
        87: [function(_dereq_, module, exports) {
            "use strict";
            var ShelfPack = _dereq_("@mapbox/shelf-pack"),
                ref = _dereq_("../util/image"),
                RGBAImage = ref.RGBAImage,
                ref$1 = _dereq_("./image_atlas"),
                imagePosition = ref$1.imagePosition,
                Texture = _dereq_("./texture"),
                padding = 1,
                ImageManager = function() { this.images = {}, this.loaded = !1, this.requestors = [], this.shelfPack = new ShelfPack(64, 64, { autoResize: !0 }), this.patterns = {}, this.atlasImage = RGBAImage.create({ width: 64, height: 64 }), this.dirty = !0 };
            ImageManager.prototype.isLoaded = function() { return this.loaded }, ImageManager.prototype.setLoaded = function(e) {
                var t = this;
                if (this.loaded !== e && (this.loaded = e, e)) {
                    for (var a = 0, i = t.requestors; a < i.length; a += 1) {
                        var r = i[a],
                            s = r.ids,
                            h = r.callback;
                        t._notify(s, h)
                    }
                    this.requestors = []
                }
            }, ImageManager.prototype.getImage = function(e) { return this.images[e] }, ImageManager.prototype.addImage = function(e, t) { this.images[e] = t }, ImageManager.prototype.removeImage = function(e) {
                delete this.images[e];
                var t = this.patterns[e];
                t && (this.shelfPack.unref(t.bin), delete this.patterns[e])
            }, ImageManager.prototype.getImages = function(e, t) {
                var a = this,
                    i = !0;
                if (!this.isLoaded())
                    for (var r = 0, s = e; r < s.length; r += 1) {
                        var h = s[r];
                        a.images[h] || (i = !1)
                    }
                this.isLoaded() || i ? this._notify(e, t) : this.requestors.push({ ids: e, callback: t })
            }, ImageManager.prototype._notify = function(e, t) {
                for (var a = this, i = {}, r = 0, s = e; r < s.length; r += 1) {
                    var h = s[r],
                        g = a.images[h];
                    g && (i[h] = g)
                }
                t(null, i)
            }, ImageManager.prototype.getPixelSize = function() { return { width: this.shelfPack.w, height: this.shelfPack.h } }, ImageManager.prototype.getPattern = function(e) {
                var t = this.patterns[e];
                if (t) return t.position;
                var a = this.getImage(e);
                if (!a) return null;
                var i = a.data.width + 2 * padding,
                    r = a.data.height + 2 * padding,
                    s = this.shelfPack.packOne(i, r);
                if (!s) return null;
                RGBAImage.resize(this.atlasImage, this.getPixelSize());
                var h = a.data,
                    g = this.atlasImage,
                    n = s.x + padding,
                    o = s.y + padding,
                    d = h.width,
                    m = h.height;
                RGBAImage.copy(h, g, { x: 0, y: 0 }, { x: n, y: o }, { width: d, height: m }), RGBAImage.copy(h, g, { x: 0, y: m - 1 }, { x: n, y: o - 1 }, { width: d, height: 1 }), RGBAImage.copy(h, g, { x: 0, y: 0 }, { x: n, y: o + m }, { width: d, height: 1 }), RGBAImage.copy(h, g, { x: d - 1, y: 0 }, { x: n - 1, y: o }, { width: 1, height: m }), RGBAImage.copy(h, g, { x: 0, y: 0 }, { x: n + d, y: o }, { width: 1, height: m }), this.dirty = !0;
                var p = imagePosition(s, a);
                return this.patterns[e] = { bin: s, position: p }, p
            }, ImageManager.prototype.bind = function(e) { this.atlasTexture ? this.dirty && (this.atlasTexture.update(this.atlasImage), this.dirty = !1) : this.atlasTexture = new Texture(e, this.atlasImage, e.RGBA), this.atlasTexture.bind(e.LINEAR, e.CLAMP_TO_EDGE) }, module.exports = ImageManager;
        }, { "../util/image": 251, "./image_atlas": 86, "./texture": 93, "@mapbox/shelf-pack": 3 }],
        88: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                LineAtlas = function(t, i) { this.width = t, this.height = i, this.nextRow = 0, this.bytes = 4, this.data = new Uint8Array(this.width * this.height * this.bytes), this.positions = {} };
            LineAtlas.prototype.getDash = function(t, i) { var e = t.join(",") + String(i); return this.positions[e] || (this.positions[e] = this.addDash(t, i)), this.positions[e] }, LineAtlas.prototype.addDash = function(t, i) {
                var e = this,
                    h = i ? 7 : 0,
                    s = 2 * h + 1;
                if (this.nextRow + s > this.height) return util.warnOnce("LineAtlas out of space"), null;
                for (var a = 0, r = 0; r < t.length; r++) a += t[r];
                for (var n = this.width / a, E = n / 2, T = t.length % 2 == 1, o = -h; o <= h; o++)
                    for (var R = e.nextRow + h + o, d = e.width * R, u = T ? -t[t.length - 1] : 0, x = t[0], l = 1, _ = 0; _ < this.width; _++) {
                        for (; x < _ / n;) u = x, x += t[l], T && l === t.length - 1 && (x += t[0]), l++;
                        var A = Math.abs(_ - u * n),
                            g = Math.abs(_ - x * n),
                            w = Math.min(A, g),
                            D = l % 2 == 1,
                            U = void 0;
                        if (i) {
                            var f = h ? o / h * (E + 1) : 0;
                            if (D) {
                                var p = E - Math.abs(f);
                                U = Math.sqrt(w * w + p * p)
                            } else U = E - Math.sqrt(w * w + f * f)
                        } else U = (D ? 1 : -1) * w;
                        e.data[3 + 4 * (d + _)] = Math.max(0, Math.min(255, U + 128))
                    }
                var X = { y: (this.nextRow + h + .5) / this.height, height: 2 * h / this.height, width: a };
                return this.nextRow += s, this.dirty = !0, X
            }, LineAtlas.prototype.bind = function(t) { this.texture ? (t.bindTexture(t.TEXTURE_2D, this.texture), this.dirty && (this.dirty = !1, t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, this.width, this.height, t.RGBA, t.UNSIGNED_BYTE, this.data))) : (this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, this.data)) }, module.exports = LineAtlas;
        }, { "../util/util": 260 }],
        89: [function(_dereq_, module, exports) {
            "use strict";
            var browser = _dereq_("../util/browser"),
                mat4 = _dereq_("@mapbox/gl-matrix").mat4,
                SourceCache = _dereq_("../source/source_cache"),
                EXTENT = _dereq_("../data/extent"),
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units"),
                util = _dereq_("../util/util"),
                VertexBuffer = _dereq_("../gl/vertex_buffer"),
                VertexArrayObject = _dereq_("./vertex_array_object"),
                RasterBoundsArray = _dereq_("../data/raster_bounds_array"),
                PosArray = _dereq_("../data/pos_array"),
                ref = _dereq_("../data/program_configuration"),
                ProgramConfiguration = ref.ProgramConfiguration,
                CrossTileSymbolIndex = _dereq_("../symbol/cross_tile_symbol_index"),
                shaders = _dereq_("../shaders"),
                Program = _dereq_("./program"),
                RenderTexture = _dereq_("./render_texture"),
                updateTileMasks = _dereq_("./tile_mask"),
                draw = { symbol: _dereq_("./draw_symbol"), circle: _dereq_("./draw_circle"), heatmap: _dereq_("./draw_heatmap"), line: _dereq_("./draw_line"), fill: _dereq_("./draw_fill"), "fill-extrusion": _dereq_("./draw_fill_extrusion"), raster: _dereq_("./draw_raster"), background: _dereq_("./draw_background"), debug: _dereq_("./draw_debug") },
                Painter = function(e, r) { this.gl = e, this.transform = r, this._tileTextures = {}, this.setup(), this.numSublayers = SourceCache.maxUnderzooming + SourceCache.maxOverzooming + 1, this.depthEpsilon = 1 / Math.pow(2, 16), this.lineWidthRange = e.getParameter(e.ALIASED_LINE_WIDTH_RANGE), this.basicFillProgramConfiguration = ProgramConfiguration.createBasicFill(), this.emptyProgramConfiguration = new ProgramConfiguration, this.crossTileSymbolIndex = new CrossTileSymbolIndex };
            Painter.prototype.resize = function(e, r) {
                var t = this,
                    i = this.gl;
                if (this.width = e * browser.devicePixelRatio, this.height = r * browser.devicePixelRatio, i.viewport(0, 0, this.width, this.height), this.style)
                    for (var a = 0, s = t.style._order; a < s.length; a += 1) {
                        var n = s[a];
                        t.style._layers[n].resize(i)
                    }
                this.depthRbo && (this.gl.deleteRenderbuffer(this.depthRbo), this.depthRbo = null)
            }, Painter.prototype.setup = function() {
                var e = this.gl;
                e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.enable(e.STENCIL_TEST), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), this._depthMask = !1, e.depthMask(!1);
                var r = new PosArray;
                r.emplaceBack(0, 0), r.emplaceBack(EXTENT, 0), r.emplaceBack(0, EXTENT), r.emplaceBack(EXTENT, EXTENT), this.tileExtentBuffer = new VertexBuffer(e, r), this.tileExtentVAO = new VertexArrayObject, this.tileExtentPatternVAO = new VertexArrayObject;
                var t = new PosArray;
                t.emplaceBack(0, 0), t.emplaceBack(EXTENT, 0), t.emplaceBack(EXTENT, EXTENT), t.emplaceBack(0, EXTENT), t.emplaceBack(0, 0), this.debugBuffer = new VertexBuffer(e, t), this.debugVAO = new VertexArrayObject;
                var i = new RasterBoundsArray;
                i.emplaceBack(0, 0, 0, 0), i.emplaceBack(EXTENT, 0, EXTENT, 0), i.emplaceBack(0, EXTENT, 0, EXTENT), i.emplaceBack(EXTENT, EXTENT, EXTENT, EXTENT), this.rasterBoundsBuffer = new VertexBuffer(e, i), this.rasterBoundsVAO = new VertexArrayObject;
                var a = new PosArray;
                a.emplaceBack(0, 0), a.emplaceBack(1, 0), a.emplaceBack(0, 1), a.emplaceBack(1, 1), this.viewportBuffer = new VertexBuffer(e, a), this.viewportVAO = new VertexArrayObject, this.extTextureFilterAnisotropic = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic"), this.extTextureFilterAnisotropic && (this.extTextureFilterAnisotropicMax = e.getParameter(this.extTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT)), this.extTextureHalfFloat = e.getExtension("OES_texture_half_float"), this.extTextureHalfFloat && e.getExtension("OES_texture_half_float_linear")
            }, Painter.prototype.clearColor = function() {
                var e = this.gl;
                e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
            }, Painter.prototype.clearStencil = function() {
                var e = this.gl;
                e.clearStencil(0), e.stencilMask(255), e.clear(e.STENCIL_BUFFER_BIT)
            }, Painter.prototype.clearDepth = function() {
                var e = this.gl;
                e.clearDepth(1), this.depthMask(!0), e.clear(e.DEPTH_BUFFER_BIT)
            }, Painter.prototype._renderTileClippingMasks = function(e) {
                var r = this,
                    t = this.gl;
                t.colorMask(!1, !1, !1, !1), this.depthMask(!1), t.disable(t.DEPTH_TEST), t.enable(t.STENCIL_TEST), t.stencilMask(255), t.stencilOp(t.KEEP, t.KEEP, t.REPLACE);
                var i = 1;
                this._tileClippingMaskIDs = {};
                for (var a = 0, s = e; a < s.length; a += 1) {
                    var n = s[a],
                        o = r._tileClippingMaskIDs[n.id] = i++;
                    t.stencilFunc(t.ALWAYS, o, 255);
                    var l = r.useProgram("fill", r.basicFillProgramConfiguration);
                    t.uniformMatrix4fv(l.uniforms.u_matrix, !1, n.posMatrix), r.tileExtentVAO.bind(t, l, r.tileExtentBuffer), t.drawArrays(t.TRIANGLE_STRIP, 0, r.tileExtentBuffer.length)
                }
                t.stencilMask(0), t.colorMask(!0, !0, !0, !0), this.depthMask(!0), t.enable(t.DEPTH_TEST)
            }, Painter.prototype.enableTileClippingMask = function(e) {
                var r = this.gl;
                r.stencilFunc(r.EQUAL, this._tileClippingMaskIDs[e.id], 255)
            }, Painter.prototype.render = function(e, r) {
                var t = this;
                this.style = e, this.options = r, this.lineAtlas = e.lineAtlas, this.imageManager = e.imageManager, this.glyphManager = e.glyphManager;
                for (var i in e.sourceCaches) {
                    var a = t.style.sourceCaches[i];
                    a.used && a.prepare(t.gl)
                }
                var s = this.style._order,
                    n = util.filterObject(this.style.sourceCaches, function(e) { return "raster" === e._source.type });
                for (var o in n) ! function(e) {
                    var r = n[e],
                        i = r.getVisibleCoordinates(),
                        a = i.map(function(e) { return r.getTile(e) });
                    updateTileMasks(a, t.gl)
                }(o);
                this.renderPass = "3d";
                for (var l, h = !0, c = [], u = 0; u < s.length; u++) {
                    var p = t.style._layers[s[u]];
                    if (p.has3DPass() && !p.isHidden(t.transform.zoom) && (p.source !== (l && l.id) && (l = t.style.sourceCaches[p.source], c = [], l && (t.clearStencil(), c = l.getVisibleCoordinates()), c.reverse()), c.length)) {
                        t._setup3DRenderbuffer();
                        var d = p.viewportFrame || new RenderTexture(t);
                        p.viewportFrame = d, d.bindWithDepth(t.depthRbo), h && (t.clearDepth(), h = !1), t.renderLayer(t, l, p, c), d.unbind()
                    }
                }
                this.clearColor(), this.clearDepth(), this.showOverdrawInspector(r.showOverdrawInspector), this.depthRange = (e._order.length + 2) * this.numSublayers * this.depthEpsilon, this.renderPass = "opaque";
                var g, f = [];
                for (this.currentLayer = s.length - 1, this._showOverdrawInspector || this.gl.disable(this.gl.BLEND), this.currentLayer; this.currentLayer >= 0; this.currentLayer--) {
                    var T = t.style._layers[s[t.currentLayer]];
                    T.source !== (g && g.id) && (g = t.style.sourceCaches[T.source], f = [], g && (t.clearStencil(), f = g.getVisibleCoordinates(), g.getSource().isTileClipped && t._renderTileClippingMasks(f))), t.renderLayer(t, g, T, f)
                }
                this.renderPass = "translucent";
                var E, _ = [];
                for (this.gl.enable(this.gl.BLEND), this.currentLayer = 0, this.currentLayer; this.currentLayer < s.length; this.currentLayer++) {
                    var y = t.style._layers[s[t.currentLayer]];
                    y.source !== (E && E.id) && (E = t.style.sourceCaches[y.source], _ = [], E && (t.clearStencil(), _ = E.getVisibleCoordinates(), E.getSource().isTileClipped && t._renderTileClippingMasks(_)), _.reverse()), t.renderLayer(t, E, y, _)
                }
                if (this.options.showTileBoundaries) {
                    var m = this.style.sourceCaches[Object.keys(this.style.sourceCaches)[0]];
                    m && draw.debug(this, m, m.getVisibleCoordinates())
                }
            }, Painter.prototype._setup3DRenderbuffer = function() {
                if (!this.depthRbo) {
                    var e = this.gl;
                    this.depthRbo = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, this.depthRbo), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, this.width, this.height), e.bindRenderbuffer(e.RENDERBUFFER, null)
                }
                this.depthRboAttached = !0
            }, Painter.prototype.depthMask = function(e) { e !== this._depthMask && (this._depthMask = e, this.gl.depthMask(e)) }, Painter.prototype.renderLayer = function(e, r, t, i) { t.isHidden(this.transform.zoom) || ("background" === t.type || i.length) && (this.id = t.id, draw[t.type](e, r, t, i)) }, Painter.prototype.setDepthSublayer = function(e) {
                var r = 1 - ((1 + this.currentLayer) * this.numSublayers + e) * this.depthEpsilon,
                    t = r - 1 + this.depthRange;
                this.gl.depthRange(t, r)
            }, Painter.prototype.translatePosMatrix = function(e, r, t, i, a) {
                if (!t[0] && !t[1]) return e;
                var s = a ? "map" === i ? this.transform.angle : 0 : "viewport" === i ? -this.transform.angle : 0;
                if (s) {
                    var n = Math.sin(s),
                        o = Math.cos(s);
                    t = [t[0] * o - t[1] * n, t[0] * n + t[1] * o]
                }
                var l = [a ? t[0] : pixelsToTileUnits(r, t[0], this.transform.zoom), a ? t[1] : pixelsToTileUnits(r, t[1], this.transform.zoom), 0],
                    h = new Float32Array(16);
                return mat4.translate(h, e, l), h
            }, Painter.prototype.saveTileTexture = function(e) {
                var r = this._tileTextures[e.size[0]];
                r ? r.push(e) : this._tileTextures[e.size[0]] = [e]
            }, Painter.prototype.getTileTexture = function(e) { var r = this._tileTextures[e]; return r && r.length > 0 ? r.pop() : null }, Painter.prototype.lineWidth = function(e) { this.gl.lineWidth(util.clamp(e, this.lineWidthRange[0], this.lineWidthRange[1])) }, Painter.prototype.showOverdrawInspector = function(e) {
                if (e || this._showOverdrawInspector) {
                    this._showOverdrawInspector = e;
                    var r = this.gl;
                    if (e) {
                        r.blendFunc(r.CONSTANT_COLOR, r.ONE);
                        r.blendColor(1 / 8, 1 / 8, 1 / 8, 0), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT)
                    } else r.blendFunc(r.ONE, r.ONE_MINUS_SRC_ALPHA)
                }
            }, Painter.prototype._createProgramCached = function(e, r) { this.cache = this.cache || {}; var t = "" + e + (r.cacheKey || "") + (this._showOverdrawInspector ? "/overdraw" : ""); return this.cache[t] || (this.cache[t] = new Program(this.gl, shaders[e], r, this._showOverdrawInspector)), this.cache[t] }, Painter.prototype.useProgram = function(e, r) {
                var t = this.gl,
                    i = this._createProgramCached(e, r || this.emptyProgramConfiguration);
                return this.currentProgram !== i && (t.useProgram(i.program), this.currentProgram = i), i
            }, module.exports = Painter;
        }, { "../data/extent": 58, "../data/pos_array": 62, "../data/program_configuration": 63, "../data/raster_bounds_array": 64, "../gl/vertex_buffer": 72, "../shaders": 97, "../source/pixels_to_tile_units": 104, "../source/source_cache": 109, "../symbol/cross_tile_symbol_index": 206, "../util/browser": 240, "../util/util": 260, "./draw_background": 74, "./draw_circle": 75, "./draw_debug": 77, "./draw_fill": 78, "./draw_fill_extrusion": 79, "./draw_heatmap": 80, "./draw_line": 81, "./draw_raster": 82, "./draw_symbol": 83, "./program": 91, "./render_texture": 92, "./tile_mask": 94, "./vertex_array_object": 95, "@mapbox/gl-matrix": 1 }],
        90: [function(_dereq_, module, exports) {
            "use strict";
            var pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units");
            exports.isPatternMissing = function(r, i) {
                if (!r) return !1;
                var e = i.imageManager.getPattern(r.from),
                    o = i.imageManager.getPattern(r.to);
                return !e || !o
            }, exports.prepare = function(r, i, e) {
                var o = i.gl,
                    t = i.imageManager.getPattern(r.from),
                    n = i.imageManager.getPattern(r.to);
                o.uniform1i(e.uniforms.u_image, 0), o.uniform2fv(e.uniforms.u_pattern_tl_a, t.tl), o.uniform2fv(e.uniforms.u_pattern_br_a, t.br), o.uniform2fv(e.uniforms.u_pattern_tl_b, n.tl), o.uniform2fv(e.uniforms.u_pattern_br_b, n.br);
                var u = i.imageManager.getPixelSize(),
                    a = u.width,
                    f = u.height;
                o.uniform2fv(e.uniforms.u_texsize, [a, f]), o.uniform1f(e.uniforms.u_mix, r.t), o.uniform2fv(e.uniforms.u_pattern_size_a, t.displaySize), o.uniform2fv(e.uniforms.u_pattern_size_b, n.displaySize), o.uniform1f(e.uniforms.u_scale_a, r.fromScale), o.uniform1f(e.uniforms.u_scale_b, r.toScale), o.activeTexture(o.TEXTURE0), i.imageManager.bind(o)
            }, exports.setTile = function(r, i, e) {
                var o = i.gl;
                o.uniform1f(e.uniforms.u_tile_units_to_pixels, 1 / pixelsToTileUnits(r, 1, i.transform.tileZoom));
                var t = Math.pow(2, r.coord.z),
                    n = r.tileSize * Math.pow(2, i.transform.tileZoom) / t,
                    u = n * (r.coord.x + r.coord.w * t),
                    a = n * r.coord.y;
                o.uniform2f(e.uniforms.u_pixel_coord_upper, u >> 16, a >> 16), o.uniform2f(e.uniforms.u_pixel_coord_lower, 65535 & u, 65535 & a)
            };
        }, { "../source/pixels_to_tile_units": 104 }],
        91: [function(_dereq_, module, exports) {
            "use strict";
            var browser = _dereq_("../util/browser"),
                shaders = _dereq_("../shaders"),
                ref = _dereq_("../data/program_configuration"),
                ProgramConfiguration = ref.ProgramConfiguration,
                VertexArrayObject = _dereq_("./vertex_array_object"),
                Program = function(r, e, t, a) {
                    var o = this;
                    this.gl = r, this.program = r.createProgram();
                    var i = t.defines().concat("#define DEVICE_PIXEL_RATIO " + browser.devicePixelRatio.toFixed(1));
                    a && i.push("#define OVERDRAW_INSPECTOR;");
                    var n = i.concat(shaders.prelude.fragmentSource, e.fragmentSource).join("\n"),
                        s = i.concat(shaders.prelude.vertexSource, e.vertexSource).join("\n"),
                        m = r.createShader(r.FRAGMENT_SHADER);
                    r.shaderSource(m, n), r.compileShader(m), r.attachShader(this.program, m);
                    var g = r.createShader(r.VERTEX_SHADER);
                    r.shaderSource(g, s), r.compileShader(g), r.attachShader(this.program, g);
                    for (var c = t.interface ? t.interface.layoutAttributes : [], u = 0; u < c.length; u++) r.bindAttribLocation(o.program, u, c[u].name);
                    r.linkProgram(this.program), this.numAttributes = r.getProgramParameter(this.program, r.ACTIVE_ATTRIBUTES), this.attributes = {}, this.uniforms = {};
                    for (var h = 0; h < this.numAttributes; h++) {
                        var f = r.getActiveAttrib(o.program, h);
                        f && (o.attributes[f.name] = r.getAttribLocation(o.program, f.name))
                    }
                    for (var d = r.getProgramParameter(this.program, r.ACTIVE_UNIFORMS), p = 0; p < d; p++) {
                        var v = r.getActiveUniform(o.program, p);
                        v && (o.uniforms[v.name] = r.getUniformLocation(o.program, v.name))
                    }
                };
            Program.prototype.draw = function(r, e, t, a, o, i, n, s, m) {
                for (var g, c = this, u = (g = {}, g[r.LINES] = 2, g[r.TRIANGLES] = 3, g)[e], h = 0, f = i.get(); h < f.length; h += 1) {
                    var d = f[h],
                        p = d.vaos || (d.vaos = {});
                    (p[t] || (p[t] = new VertexArrayObject)).bind(r, c, a, o, n && n.paintVertexBuffer, d.vertexOffset, s, m), r.drawElements(e, d.primitiveLength * u, r.UNSIGNED_SHORT, d.primitiveOffset * u * 2)
                }
            }, module.exports = Program;
        }, { "../data/program_configuration": 63, "../shaders": 97, "../util/browser": 240, "./vertex_array_object": 95 }],
        92: [function(_dereq_, module, exports) {
            "use strict";
            var RenderTexture = function(e) {
                var E = this.gl = e.gl,
                    t = this.texture = E.createTexture();
                E.bindTexture(E.TEXTURE_2D, t), E.texParameteri(E.TEXTURE_2D, E.TEXTURE_WRAP_S, E.CLAMP_TO_EDGE), E.texParameteri(E.TEXTURE_2D, E.TEXTURE_WRAP_T, E.CLAMP_TO_EDGE), E.texParameteri(E.TEXTURE_2D, E.TEXTURE_MIN_FILTER, E.LINEAR), E.texParameteri(E.TEXTURE_2D, E.TEXTURE_MAG_FILTER, E.LINEAR), E.texImage2D(E.TEXTURE_2D, 0, E.RGBA, e.width, e.height, 0, E.RGBA, E.UNSIGNED_BYTE, null), E.bindTexture(E.TEXTURE_2D, null);
                var r = this.fbo = E.createFramebuffer();
                E.bindFramebuffer(E.FRAMEBUFFER, r), E.framebufferTexture2D(E.FRAMEBUFFER, E.COLOR_ATTACHMENT0, E.TEXTURE_2D, t, 0)
            };
            RenderTexture.prototype.bindWithDepth = function(e) {
                var E = this.gl;
                E.bindFramebuffer(E.FRAMEBUFFER, this.fbo), this.attachedRbo !== e && (E.framebufferRenderbuffer(E.FRAMEBUFFER, E.DEPTH_ATTACHMENT, E.RENDERBUFFER, e), this.attachedRbo = e)
            }, RenderTexture.prototype.unbind = function() {
                var e = this.gl;
                e.bindFramebuffer(e.FRAMEBUFFER, null)
            }, module.exports = RenderTexture;
        }, {}],
        93: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../util/window"),
                HTMLImageElement = ref.HTMLImageElement,
                HTMLCanvasElement = ref.HTMLCanvasElement,
                HTMLVideoElement = ref.HTMLVideoElement,
                ImageData = ref.ImageData,
                Texture = function(e, t, i) {
                    this.gl = e;
                    var r = t.width,
                        a = t.height;
                    this.size = [r, a], this.format = i, this.texture = e.createTexture(), this.update(t)
                };
            Texture.prototype.update = function(e) {
                var t = e.width,
                    i = e.height;
                this.size = [t, i];
                var r = this,
                    a = r.gl;
                a.bindTexture(a.TEXTURE_2D, this.texture), a.pixelStorei(a.UNPACK_ALIGNMENT, 1), this.format === a.RGBA && a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof HTMLVideoElement || e instanceof ImageData ? a.texImage2D(a.TEXTURE_2D, 0, this.format, this.format, a.UNSIGNED_BYTE, e) : a.texImage2D(a.TEXTURE_2D, 0, this.format, t, i, 0, this.format, a.UNSIGNED_BYTE, e.data)
            }, Texture.prototype.bind = function(e, t, i) {
                var r = this,
                    a = r.gl;
                a.bindTexture(a.TEXTURE_2D, this.texture), e !== this.filter && (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, i || e), this.filter = e), t !== this.wrap && (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, t), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, t), this.wrap = t)
            }, Texture.prototype.destroy = function() { this.gl.deleteTexture(this.texture), this.texture = null }, module.exports = Texture;
        }, { "../util/window": 242 }],
        94: [function(_dereq_, module, exports) {
            "use strict";

            function computeTileMasks(o, r, e, i, s) {
                for (var c = 0; c < e.length; c++) { var d = e[c]; if (i.isLessThan(d.coord)) break; if (r.id === d.coord.id) return; if (d.coord.isChildOf(r, d.sourceMaxZoom)) { for (var n = r.children(1 / 0), t = 0; t < n.length; t++) { computeTileMasks(o, n[t], e.slice(c), i, s) } return } }
                var a = r.z - o.z,
                    l = new TileCoord(a, r.x - (o.x << a), r.y - (o.y << a)).id;
                s[l] = s[l] || !0
            }
            var TileCoord = _dereq_("../source/tile_coord");
            module.exports = function(o, r) {
                for (var e = o.sort(function(o, r) { return o.coord.isLessThan(r.coord) ? -1 : r.coord.isLessThan(o.coord) ? 1 : 0 }), i = 0; i < e.length; i++) {
                    var s = {},
                        c = e[i],
                        d = e.slice(i + 1);
                    computeTileMasks(c.coord.wrapped(), c.coord, d, new TileCoord(0, 0, 0, c.coord.w + 1), s), c.setMask(s, r)
                }
            };
        }, { "../source/tile_coord": 112 }],
        95: [function(_dereq_, module, exports) {
            "use strict";
            var VertexArrayObject = function() { this.boundProgram = null, this.boundVertexBuffer = null, this.boundVertexBuffer2 = null, this.boundIndexBuffer = null, this.boundVertexOffset = null, this.boundDynamicVertexBuffer = null, this.vao = null };
            VertexArrayObject.prototype.bind = function(e, t, r, i, n, b, s, u) { void 0 === e.extVertexArrayObject && (e.extVertexArrayObject = e.getExtension("OES_vertex_array_object")); var o = !this.vao || this.boundProgram !== t || this.boundVertexBuffer !== r || this.boundVertexBuffer2 !== n || this.boundIndexBuffer !== i || this.boundVertexOffset !== b || this.boundDynamicVertexBuffer !== s || this.boundDynamicVertexBuffer2 !== u;!e.extVertexArrayObject || o ? (this.freshBind(e, t, r, i, n, b, s, u), this.gl = e) : (e.extVertexArrayObject.bindVertexArrayOES(this.vao), s && s.bind(), i && i.dynamicDraw && i.bind(), u && u.bind()) }, VertexArrayObject.prototype.freshBind = function(e, t, r, i, n, b, s, u) {
                var o, x = t.numAttributes;
                if (e.extVertexArrayObject) this.vao && this.destroy(), this.vao = e.extVertexArrayObject.createVertexArrayOES(), e.extVertexArrayObject.bindVertexArrayOES(this.vao), o = 0, this.boundProgram = t, this.boundVertexBuffer = r, this.boundVertexBuffer2 = n, this.boundIndexBuffer = i, this.boundVertexOffset = b, this.boundDynamicVertexBuffer = s, this.boundDynamicVertexBuffer2 = u;
                else { o = e.currentNumAttributes || 0; for (var a = x; a < o; a++) e.disableVertexAttribArray(a) }
                r.enableAttributes(e, t), n && n.enableAttributes(e, t), s && s.enableAttributes(e, t), u && u.enableAttributes(e, t), r.bind(), r.setVertexAttribPointers(e, t, b), n && (n.bind(), n.setVertexAttribPointers(e, t, b)), s && (s.bind(), s.setVertexAttribPointers(e, t, b)), i && i.bind(), u && (u.bind(), u.setVertexAttribPointers(e, t, b)), e.currentNumAttributes = x
            }, VertexArrayObject.prototype.destroy = function() { this.vao && (this.gl.extVertexArrayObject.deleteVertexArrayOES(this.vao), this.vao = null) }, module.exports = VertexArrayObject;
        }, {}],
        96: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util");
            exports.packUint8ToFloat = function(t, l) { return t = util.clamp(Math.floor(t), 0, 255), l = util.clamp(Math.floor(l), 0, 255), 256 * t + l };
        }, { "../util/util": 260 }],
        97: [function(_dereq_, module, exports) {
            "use strict";
            var shaders = {
                    prelude: { fragmentSource: "#ifdef GL_ES\nprecision mediump float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n", vertexSource: "#ifdef GL_ES\nprecision highp float;\n#else\n\n#if !defined(lowp)\n#define lowp\n#endif\n\n#if !defined(mediump)\n#define mediump\n#endif\n\n#if !defined(highp)\n#define highp\n#endif\n\n#endif\n\n// Unpack a pair of values that have been packed into a single float.\n// The packed values are assumed to be 8-bit unsigned integers, and are\n// packed like so:\n// packedValue = floor(input[0]) * 256 + input[1],\nvec2 unpack_float(const float packedValue) {\n    int packedIntValue = int(packedValue);\n    int v0 = packedIntValue / 256;\n    return vec2(v0, packedIntValue - v0 * 256);\n}\n\nvec2 unpack_opacity(const float packedOpacity) {\n    int intOpacity = int(packedOpacity) / 2;\n    return vec2(float(intOpacity) / 127.0, mod(packedOpacity, 2.0));\n}\n\n// To minimize the number of attributes needed, we encode a 4-component\n// color into a pair of floats (i.e. a vec2) as follows:\n// [ floor(color.r * 255) * 256 + color.g * 255,\n//   floor(color.b * 255) * 256 + color.g * 255 ]\nvec4 decode_color(const vec2 encodedColor) {\n    return vec4(\n        unpack_float(encodedColor[0]) / 255.0,\n        unpack_float(encodedColor[1]) / 255.0\n    );\n}\n\n// Unpack a pair of paint values and interpolate between them.\nfloat unpack_mix_vec2(const vec2 packedValue, const float t) {\n    return mix(packedValue[0], packedValue[1], t);\n}\n\n// Unpack a pair of paint values and interpolate between them.\nvec4 unpack_mix_vec4(const vec4 packedColors, const float t) {\n    vec4 minColor = decode_color(vec2(packedColors[0], packedColors[1]));\n    vec4 maxColor = decode_color(vec2(packedColors[2], packedColors[3]));\n    return mix(minColor, maxColor, t);\n}\n\n// The offset depends on how many pixels are between the world origin and the edge of the tile:\n// vec2 offset = mod(pixel_coord, size)\n//\n// At high zoom levels there are a ton of pixels between the world origin and the edge of the tile.\n// The glsl spec only guarantees 16 bits of precision for highp floats. We need more than that.\n//\n// The pixel_coord is passed in as two 16 bit values:\n// pixel_coord_upper = floor(pixel_coord / 2^16)\n// pixel_coord_lower = mod(pixel_coord, 2^16)\n//\n// The offset is calculated in a series of steps that should preserve this precision:\nvec2 get_pattern_pos(const vec2 pixel_coord_upper, const vec2 pixel_coord_lower,\n    const vec2 pattern_size, const float tile_units_to_pixels, const vec2 pos) {\n\n    vec2 offset = mod(mod(mod(pixel_coord_upper, pattern_size) * 256.0, pattern_size) * 256.0 + pixel_coord_lower, pattern_size);\n    return (tile_units_to_pixels * pos + offset) / pattern_size;\n}\n" },
                    circle: { fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    vec2 extrude = v_data.xy;\n    float extrude_length = length(extrude);\n\n    lowp float antialiasblur = v_data.z;\n    float antialiased_blur = -max(blur, antialiasblur);\n\n    float opacity_t = smoothstep(0.0, antialiased_blur, extrude_length - 1.0);\n\n    float color_t = stroke_width < 0.01 ? 0.0 : smoothstep(\n        antialiased_blur,\n        0.0,\n        extrude_length - radius / (radius + stroke_width)\n    );\n\n    gl_FragColor = opacity_t * mix(color * opacity, stroke_color * stroke_opacity, color_t);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform bool u_scale_with_map;\nuniform bool u_pitch_with_map;\nuniform vec2 u_extrude_scale;\nuniform highp float u_camera_to_center_distance;\n\nattribute vec2 a_pos;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define mediump float radius\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define highp vec4 stroke_color\n#pragma mapbox: define mediump float stroke_width\n#pragma mapbox: define lowp float stroke_opacity\n\nvarying vec3 v_data;\n\nvoid main(void) {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize mediump float radius\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize highp vec4 stroke_color\n    #pragma mapbox: initialize mediump float stroke_width\n    #pragma mapbox: initialize lowp float stroke_opacity\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec2 circle_center = floor(a_pos * 0.5);\n    if (u_pitch_with_map) {\n        vec2 corner_position = circle_center;\n        if (u_scale_with_map) {\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale;\n        } else {\n            // Pitching the circle with the map effectively scales it with the map\n            // To counteract the effect for pitch-scale: viewport, we rescale the\n            // whole circle based on the pitch scaling effect at its central point\n            vec4 projected_center = u_matrix * vec4(circle_center, 0, 1);\n            corner_position += extrude * (radius + stroke_width) * u_extrude_scale * (projected_center.w / u_camera_to_center_distance);\n        }\n\n        gl_Position = u_matrix * vec4(corner_position, 0, 1);\n    } else {\n        gl_Position = u_matrix * vec4(circle_center, 0, 1);\n\n        if (u_scale_with_map) {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * u_camera_to_center_distance;\n        } else {\n            gl_Position.xy += extrude * (radius + stroke_width) * u_extrude_scale * gl_Position.w;\n        }\n    }\n\n    // This is a minimum blur distance that serves as a faux-antialiasing for\n    // the circle. since blur is a ratio of the circle's size and the intent is\n    // to keep the blur at roughly 1px, the two are inversely related.\n    lowp float antialiasblur = 1.0 / DEVICE_PIXEL_RATIO / (radius + stroke_width);\n\n    v_data = vec3(extrude.x, extrude.y, antialiasblur);\n}\n" },
                    heatmap: { fragmentSource: "#pragma mapbox: define highp float weight\n\nuniform highp float u_intensity;\nuniform highp float u_radius;\nvarying vec2 v_extrude;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main() {\n    #pragma mapbox: initialize highp float weight\n\n    // Kernel density estimation with a Gaussian kernel of size 5x5\n    float d = -0.5 * 3.0 * 3.0 * dot(v_extrude, v_extrude);\n    float val = weight * u_intensity * GAUSS_COEF * exp(d);\n\n    gl_FragColor = vec4(val, 1.0, 1.0, 1.0);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "#pragma mapbox: define highp float weight\n\nuniform mat4 u_matrix;\nuniform float u_extrude_scale;\nuniform float u_radius;\nuniform float u_opacity;\nuniform float u_intensity;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_extrude;\n\n// Effective \"0\" in the kernel density texture to adjust the kernel size to;\n// this empirically chosen number minimizes artifacts on overlapping kernels\n// for typical heatmap cases (assuming clustered source)\nconst highp float ZERO = 1.0 / 255.0 / 16.0;\n\n// Gaussian kernel coefficient: 1 / sqrt(2 * PI)\n#define GAUSS_COEF 0.3989422804014327\n\nvoid main(void) {\n    #pragma mapbox: initialize highp float weight\n\n    // unencode the extrusion vector that we snuck into the a_pos vector\n    vec2 unscaled_extrude = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n\n    // This 'extrude' comes in ranging from [-1, -1], to [1, 1].  We'll use\n    // it to produce the vertices of a square mesh framing the point feature\n    // we're adding to the kernel density texture.  We'll also pass it as\n    // a varying, so that the fragment shader can determine the distance of\n    // each fragment from the point feature.\n    // Before we do so, we need to scale it up sufficiently so that the\n    // kernel falls effectively to zero at the edge of the mesh.\n    // That is, we want to know S such that\n    // weight * u_intensity * GAUSS_COEF * exp(-0.5 * 3.0^2 * S^2) == ZERO\n    // Which solves to:\n    // S = sqrt(-2.0 * log(ZERO / (weight * u_intensity * GAUSS_COEF))) / 3.0\n    float S = sqrt(-2.0 * log(ZERO / weight / u_intensity / GAUSS_COEF)) / 3.0;\n\n    // Pass the varying in units of u_radius\n    v_extrude = S * unscaled_extrude;\n\n    // Scale by u_radius and the zoom-based scale factor to produce actual\n    // mesh position\n    vec2 extrude = v_extrude * u_radius * u_extrude_scale;\n\n    // multiply a_pos by 0.5, since we had it * 2 in order to sneak\n    // in extrusion data\n    vec4 pos = vec4(floor(a_pos * 0.5) + extrude, 0, 1);\n\n    gl_Position = u_matrix * pos;\n}\n" },
                    heatmapTexture: { fragmentSource: "uniform sampler2D u_image;\nuniform sampler2D u_color_ramp;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    float t = texture2D(u_image, v_pos).r;\n    vec4 color = texture2D(u_color_ramp, vec2(t, 0.5));\n    gl_FragColor = color * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n" },
                    collisionBox: { fragmentSource: "\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        gl_FragColor = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        gl_FragColor *= .1;\n    }\n}", vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (u_camera_to_center_distance / camera_to_anchor_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n    gl_Position.xy += a_extrude * u_extrude_scale * gl_Position.w * collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n}\n" },
                    collisionCircle: { fragmentSource: "\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    float alpha = 0.5;\n\n    // Red = collision, hide label\n    vec4 color = vec4(1.0, 0.0, 0.0, 1.0) * alpha;\n\n    // Blue = no collision, label is showing\n    if (v_placed > 0.5) {\n        color = vec4(0.0, 0.0, 1.0, 0.5) * alpha;\n    }\n\n    if (v_notUsed > 0.5) {\n        // This box not used, fade it out\n        color *= .2;\n    }\n\n    float extrude_scale_length = length(v_extrude_scale);\n    float extrude_length = length(v_extrude) * extrude_scale_length;\n    float stroke_width = 3.0;\n    float radius = v_radius * extrude_scale_length;\n\n    float distance_to_edge = abs(extrude_length - radius);\n    float opacity_t = smoothstep(-stroke_width, 0.0, -distance_to_edge);\n\n    gl_FragColor = opacity_t * color;\n}\n", vertexSource: "attribute vec2 a_pos;\nattribute vec2 a_anchor_pos;\nattribute vec2 a_extrude;\nattribute vec2 a_placed;\n\nuniform mat4 u_matrix;\nuniform vec2 u_extrude_scale;\nuniform float u_camera_to_center_distance;\n\nvarying float v_placed;\nvarying float v_notUsed;\nvarying float v_radius;\n\nvarying vec2 v_extrude;\nvarying vec2 v_extrude_scale;\n\nvoid main() {\n    vec4 projectedPoint = u_matrix * vec4(a_anchor_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    highp float collision_perspective_ratio = 0.5 + 0.5 * (camera_to_anchor_distance / u_camera_to_center_distance);\n\n    gl_Position = u_matrix * vec4(a_pos, 0.0, 1.0);\n\n    highp float padding_factor = 1.2; // Pad the vertices slightly to make room for anti-alias blur\n    gl_Position.xy += a_extrude * u_extrude_scale * padding_factor * gl_Position.w / collision_perspective_ratio;\n\n    v_placed = a_placed.x;\n    v_notUsed = a_placed.y;\n    v_radius = abs(a_extrude.y); // We don't pitch the circles, so both units of the extrusion vector are equal in magnitude to the radius\n\n    v_extrude = a_extrude * padding_factor;\n    v_extrude_scale = u_extrude_scale * u_camera_to_center_distance / collision_perspective_ratio;\n}\n" },
                    debug: { fragmentSource: "uniform highp vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n", vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n" },
                    fill: { fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_FragColor = color * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n}\n" },
                    fillOutline: { fragmentSource: "#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_pos;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n    gl_FragColor = outline_color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "attribute vec2 a_pos;\n\nuniform mat4 u_matrix;\nuniform vec2 u_world;\n\nvarying vec2 v_pos;\n\n#pragma mapbox: define highp vec4 outline_color\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 outline_color\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n" },
                    fillOutlinePattern: { fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    // find distance to outline for alpha interpolation\n\n    float dist = length(v_pos - gl_FragCoord.xy);\n    float alpha = 1.0 - smoothstep(0.0, 1.0, dist);\n\n\n    gl_FragColor = mix(color1, color2, u_mix) * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec2 v_pos;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n\n    v_pos = (gl_Position.xy / gl_Position.w + 1.0) / 2.0 * u_world;\n}\n" },
                    fillPattern: { fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    gl_FragColor = mix(color1, color2, u_mix) * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\n\nattribute vec2 a_pos;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\n\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, a_pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, a_pos);\n}\n" },
                    fillExtrusion: { fragmentSource: "varying vec4 v_color;\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    gl_FragColor = v_color;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec4 v_color;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\n#pragma mapbox: define highp vec4 color\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n    #pragma mapbox: initialize highp vec4 color\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float ed = a_edgedistance; // use each attrib in order to not trip a VAO assert\n    float t = mod(a_normal.x, 2.0);\n\n    gl_Position = u_matrix * vec4(a_pos, t > 0.0 ? height : base, 1);\n\n    // Relative luminance (how dark/bright is the surface color?)\n    float colorvalue = color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;\n\n    v_color = vec4(0.0, 0.0, 0.0, 1.0);\n\n    // Add slight ambient lighting so no extrusions are totally black\n    vec4 ambientlight = vec4(0.03, 0.03, 0.03, 1.0);\n    color += ambientlight;\n\n    // Calculate cos(theta), where theta is the angle between surface normal and diffuse light ray\n    float directional = clamp(dot(a_normal / 16384.0, u_lightpos), 0.0, 1.0);\n\n    // Adjust directional so that\n    // the range of values for highlight/shading is narrower\n    // with lower light intensity\n    // and with lighter/brighter surface colors\n    directional = mix((1.0 - u_lightintensity), max((1.0 - colorvalue + u_lightintensity), 1.0), directional);\n\n    // Add gradient along z axis of side surfaces\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    // Assign final color based on surface + ambient light color, diffuse light directional, and light color\n    // with lower bounds adjusted to hue of light\n    // so that shading is tinted with the complementary (opposite) color to the light color\n    v_color.r += clamp(color.r * directional * u_lightcolor.r, mix(0.0, 0.3, 1.0 - u_lightcolor.r), 1.0);\n    v_color.g += clamp(color.g * directional * u_lightcolor.g, mix(0.0, 0.3, 1.0 - u_lightcolor.g), 1.0);\n    v_color.b += clamp(color.b * directional * u_lightcolor.b, mix(0.0, 0.3, 1.0 - u_lightcolor.b), 1.0);\n}\n" },
                    fillExtrusionPattern: { fragmentSource: "uniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_mix;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    vec2 imagecoord = mod(v_pos_a, 1.0);\n    vec2 pos = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, imagecoord);\n    vec4 color1 = texture2D(u_image, pos);\n\n    vec2 imagecoord_b = mod(v_pos_b, 1.0);\n    vec2 pos2 = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, imagecoord_b);\n    vec4 color2 = texture2D(u_image, pos2);\n\n    vec4 mixedColor = mix(color1, color2, u_mix);\n\n    gl_FragColor = mixedColor * v_lighting;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pixel_coord_upper;\nuniform vec2 u_pixel_coord_lower;\nuniform float u_scale_a;\nuniform float u_scale_b;\nuniform float u_tile_units_to_pixels;\nuniform float u_height_factor;\n\nuniform vec3 u_lightcolor;\nuniform lowp vec3 u_lightpos;\nuniform lowp float u_lightintensity;\n\nattribute vec2 a_pos;\nattribute vec3 a_normal;\nattribute float a_edgedistance;\n\nvarying vec2 v_pos_a;\nvarying vec2 v_pos_b;\nvarying vec4 v_lighting;\nvarying float v_directional;\n\n#pragma mapbox: define lowp float base\n#pragma mapbox: define lowp float height\n\nvoid main() {\n    #pragma mapbox: initialize lowp float base\n    #pragma mapbox: initialize lowp float height\n\n    base = max(0.0, base);\n    height = max(0.0, height);\n\n    float t = mod(a_normal.x, 2.0);\n    float z = t > 0.0 ? height : base;\n\n    gl_Position = u_matrix * vec4(a_pos, z, 1);\n\n    vec2 pos = a_normal.x == 1.0 && a_normal.y == 0.0 && a_normal.z == 16384.0\n        ? a_pos // extrusion top\n        : vec2(a_edgedistance, z * u_height_factor); // extrusion side\n\n    v_pos_a = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_a * u_pattern_size_a, u_tile_units_to_pixels, pos);\n    v_pos_b = get_pattern_pos(u_pixel_coord_upper, u_pixel_coord_lower, u_scale_b * u_pattern_size_b, u_tile_units_to_pixels, pos);\n\n    v_lighting = vec4(0.0, 0.0, 0.0, 1.0);\n    float directional = clamp(dot(a_normal / 16383.0, u_lightpos), 0.0, 1.0);\n    directional = mix((1.0 - u_lightintensity), max((0.5 + u_lightintensity), 1.0), directional);\n\n    if (a_normal.y != 0.0) {\n        directional *= clamp((t + base) * pow(height / 150.0, 0.5), mix(0.7, 0.98, 1.0 - u_lightintensity), 1.0);\n    }\n\n    v_lighting.rgb += clamp(directional * u_lightcolor, mix(vec3(0.0), vec3(0.3), 1.0 - u_lightcolor), vec3(1.0));\n}\n" },
                    extrusionTexture: { fragmentSource: "uniform sampler2D u_image;\nuniform float u_opacity;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_FragColor = texture2D(u_image, v_pos) * u_opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(0.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_world;\nattribute vec2 a_pos;\nvarying vec2 v_pos;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos * u_world, 0, 1);\n\n    v_pos.x = a_pos.x;\n    v_pos.y = 1.0 - a_pos.y;\n}\n" },
                    line: { fragmentSource: "#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_width2;\nvarying vec2 v_normal;\nvarying float v_gamma_scale;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\n// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_width2 = vec2(outset, inset);\n}\n" },
                    linePattern: {
                        fragmentSource: "uniform vec2 u_pattern_size_a;\nuniform vec2 u_pattern_size_b;\nuniform vec2 u_pattern_tl_a;\nuniform vec2 u_pattern_br_a;\nuniform vec2 u_pattern_tl_b;\nuniform vec2 u_pattern_br_b;\nuniform vec2 u_texsize;\nuniform float u_fade;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float x_a = mod(v_linesofar / u_pattern_size_a.x, 1.0);\n    float x_b = mod(v_linesofar / u_pattern_size_b.x, 1.0);\n    float y_a = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_a.y);\n    float y_b = 0.5 + (v_normal.y * v_width2.s / u_pattern_size_b.y);\n    vec2 pos_a = mix(u_pattern_tl_a / u_texsize, u_pattern_br_a / u_texsize, vec2(x_a, y_a));\n    vec2 pos_b = mix(u_pattern_tl_b / u_texsize, u_pattern_br_b / u_texsize, vec2(x_b, y_b));\n\n    vec4 color = mix(texture2D(u_image, pos_a), texture2D(u_image, pos_b), u_fade);\n\n    gl_FragColor = color * alpha * opacity;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n",
                        vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying float v_linesofar;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define mediump float width\n\nvoid main() {\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize mediump float width\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist = outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_linesofar = a_linesofar;\n    v_width2 = vec2(outset, inset);\n}\n"
                    },
                    lineSDF: { fragmentSource: "\nuniform sampler2D u_image;\nuniform float u_sdfgamma;\nuniform float u_mix;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    // Calculate the distance of the pixel from the line in pixels.\n    float dist = length(v_normal) * v_width2.s;\n\n    // Calculate the antialiasing fade factor. This is either when fading in\n    // the line in case of an offset line (v_width2.t) or when fading out\n    // (v_width2.s)\n    float blur2 = (blur + 1.0 / DEVICE_PIXEL_RATIO) * v_gamma_scale;\n    float alpha = clamp(min(dist - (v_width2.t - blur2), v_width2.s - dist) / blur2, 0.0, 1.0);\n\n    float sdfdist_a = texture2D(u_image, v_tex_a).a;\n    float sdfdist_b = texture2D(u_image, v_tex_b).a;\n    float sdfdist = mix(sdfdist_a, sdfdist_b, u_mix);\n    alpha *= smoothstep(0.5 - u_sdfgamma / floorwidth, 0.5 + u_sdfgamma / floorwidth, sdfdist);\n\n    gl_FragColor = color * (alpha * opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "// floor(127 / 2) == 63.0\n// the maximum allowed miter limit is 2.0 at the moment. the extrude normal is\n// stored in a byte (-128..127). we scale regular normals up to length 63, but\n// there are also \"special\" normals that have a bigger length (of up to 126 in\n// this case).\n// #define scale 63.0\n#define scale 0.015873016\n\n// We scale the distance before adding it to the buffers so that we can store\n// long distances for long segments. Use this value to unscale the distance.\n#define LINE_DISTANCE_SCALE 2.0\n\n// the distance over which the line edge fades out.\n// Retina devices need a smaller distance to avoid aliasing.\n#define ANTIALIASING 1.0 / DEVICE_PIXEL_RATIO / 2.0\n\nattribute vec4 a_pos_normal;\nattribute vec4 a_data;\n\nuniform mat4 u_matrix;\nuniform mediump float u_ratio;\nuniform vec2 u_patternscale_a;\nuniform float u_tex_y_a;\nuniform vec2 u_patternscale_b;\nuniform float u_tex_y_b;\nuniform vec2 u_gl_units_to_pixels;\n\nvarying vec2 v_normal;\nvarying vec2 v_width2;\nvarying vec2 v_tex_a;\nvarying vec2 v_tex_b;\nvarying float v_gamma_scale;\n\n#pragma mapbox: define highp vec4 color\n#pragma mapbox: define lowp float blur\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define mediump float gapwidth\n#pragma mapbox: define lowp float offset\n#pragma mapbox: define mediump float width\n#pragma mapbox: define lowp float floorwidth\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 color\n    #pragma mapbox: initialize lowp float blur\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize mediump float gapwidth\n    #pragma mapbox: initialize lowp float offset\n    #pragma mapbox: initialize mediump float width\n    #pragma mapbox: initialize lowp float floorwidth\n\n    vec2 a_extrude = a_data.xy - 128.0;\n    float a_direction = mod(a_data.z, 4.0) - 1.0;\n    float a_linesofar = (floor(a_data.z / 4.0) + a_data.w * 64.0) * LINE_DISTANCE_SCALE;\n\n    vec2 pos = a_pos_normal.xy;\n\n    // x is 1 if it's a round cap, 0 otherwise\n    // y is 1 if the normal points up, and -1 if it points down\n    mediump vec2 normal = a_pos_normal.zw;\n    v_normal = normal;\n\n    // these transformations used to be applied in the JS and native code bases.\n    // moved them into the shader for clarity and simplicity.\n    gapwidth = gapwidth / 2.0;\n    float halfwidth = width / 2.0;\n    offset = -1.0 * offset;\n\n    float inset = gapwidth + (gapwidth > 0.0 ? ANTIALIASING : 0.0);\n    float outset = gapwidth + halfwidth * (gapwidth > 0.0 ? 2.0 : 1.0) + ANTIALIASING;\n\n    // Scale the extrusion vector down to a normal and then up by the line width\n    // of this vertex.\n    mediump vec2 dist =outset * a_extrude * scale;\n\n    // Calculate the offset when drawing a line that is to the side of the actual line.\n    // We do this by creating a vector that points towards the extrude, but rotate\n    // it when we're drawing round end points (a_direction = -1 or 1) since their\n    // extrude vector points in another direction.\n    mediump float u = 0.5 * a_direction;\n    mediump float t = 1.0 - abs(u);\n    mediump vec2 offset2 = offset * a_extrude * scale * normal.y * mat2(t, -u, u, t);\n\n    vec4 projected_extrude = u_matrix * vec4(dist / u_ratio, 0.0, 0.0);\n    gl_Position = u_matrix * vec4(pos + offset2 / u_ratio, 0.0, 1.0) + projected_extrude;\n\n    // calculate how much the perspective view squishes or stretches the extrude\n    float extrude_length_without_perspective = length(dist);\n    float extrude_length_with_perspective = length(projected_extrude.xy / gl_Position.w * u_gl_units_to_pixels);\n    v_gamma_scale = extrude_length_without_perspective / extrude_length_with_perspective;\n\n    v_tex_a = vec2(a_linesofar * u_patternscale_a.x / floorwidth, normal.y * u_patternscale_a.y + u_tex_y_a);\n    v_tex_b = vec2(a_linesofar * u_patternscale_b.x / floorwidth, normal.y * u_patternscale_b.y + u_tex_y_b);\n\n    v_width2 = vec2(outset, inset);\n}\n" },
                    raster: { fragmentSource: "uniform float u_fade_t;\nuniform float u_opacity;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nuniform float u_brightness_low;\nuniform float u_brightness_high;\n\nuniform float u_saturation_factor;\nuniform float u_contrast_factor;\nuniform vec3 u_spin_weights;\n\nvoid main() {\n\n    // read and cross-fade colors from the main and parent tiles\n    vec4 color0 = texture2D(u_image0, v_pos0);\n    vec4 color1 = texture2D(u_image1, v_pos1);\n    if (color0.a > 0.0) {\n        color0.rgb = color0.rgb / color0.a;\n    }\n    if (color1.a > 0.0) {\n        color1.rgb = color1.rgb / color1.a;\n    }\n    vec4 color = mix(color0, color1, u_fade_t);\n    color.a *= u_opacity;\n    vec3 rgb = color.rgb;\n\n    // spin\n    rgb = vec3(\n        dot(rgb, u_spin_weights.xyz),\n        dot(rgb, u_spin_weights.zxy),\n        dot(rgb, u_spin_weights.yzx));\n\n    // saturation\n    float average = (color.r + color.g + color.b) / 3.0;\n    rgb += (average - rgb) * u_saturation_factor;\n\n    // contrast\n    rgb = (rgb - 0.5) * u_contrast_factor + 0.5;\n\n    // brightness\n    vec3 u_high_vec = vec3(u_brightness_low, u_brightness_low, u_brightness_low);\n    vec3 u_low_vec = vec3(u_brightness_high, u_brightness_high, u_brightness_high);\n\n    gl_FragColor = vec4(mix(u_high_vec, u_low_vec, rgb) * color.a, color.a);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "uniform mat4 u_matrix;\nuniform vec2 u_tl_parent;\nuniform float u_scale_parent;\nuniform float u_buffer_scale;\n\nattribute vec2 a_pos;\nattribute vec2 a_texture_pos;\n\nvarying vec2 v_pos0;\nvarying vec2 v_pos1;\n\nvoid main() {\n    gl_Position = u_matrix * vec4(a_pos, 0, 1);\n    // We are using Int16 for texture position coordinates to give us enough precision for\n    // fractional coordinates. We use 8192 to scale the texture coordinates in the buffer\n    // as an arbitrarily high number to preserve adequate precision when rendering.\n    // This is also the same value as the EXTENT we are using for our tile buffer pos coordinates,\n    // so math for modifying either is consistent.\n    v_pos0 = (((a_texture_pos / 8192.0) - 0.5) / u_buffer_scale ) + 0.5;\n    v_pos1 = (v_pos0 * u_scale_parent) + u_tl_parent;\n}\n" },
                    symbolIcon: { fragmentSource: "uniform sampler2D u_texture;\n\n#pragma mapbox: define lowp float opacity\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    lowp float alpha = opacity * v_fade_opacity;\n    gl_FragColor = texture2D(u_texture, v_tex) * alpha;\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\nuniform highp float u_camera_to_center_distance;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform float u_fade_change;\n\n#pragma mapbox: define lowp float opacity\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_tex;\nvarying float v_fade_opacity;\n\nvoid main() {\n    #pragma mapbox: initialize lowp float opacity\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n\n    float size;\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // See comments in symbol_sdf.vertex\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // See comments in symbol_sdf.vertex\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n\n    v_tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    v_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n}\n" },
                    symbolSDF: { fragmentSource: "#define SDF_PX 8.0\n#define EDGE_GAMMA 0.105/DEVICE_PIXEL_RATIO\n\nuniform bool u_is_halo;\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform sampler2D u_texture;\nuniform highp float u_gamma_scale;\nuniform bool u_is_text;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 tex = v_data0.xy;\n    float gamma_scale = v_data1.x;\n    float size = v_data1.y;\n    float fade_opacity = v_data1[2];\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    lowp vec4 color = fill_color;\n    highp float gamma = EDGE_GAMMA / (fontScale * u_gamma_scale);\n    lowp float buff = (256.0 - 64.0) / 256.0;\n    if (u_is_halo) {\n        color = halo_color;\n        gamma = (halo_blur * 1.19 / SDF_PX + EDGE_GAMMA) / (fontScale * u_gamma_scale);\n        buff = (6.0 - halo_width / fontScale) / SDF_PX;\n    }\n\n    lowp float dist = texture2D(u_texture, tex).a;\n    highp float gamma_scaled = gamma * gamma_scale;\n    highp float alpha = smoothstep(buff - gamma_scaled, buff + gamma_scaled, dist);\n\n    gl_FragColor = color * (alpha * opacity * fade_opacity);\n\n#ifdef OVERDRAW_INSPECTOR\n    gl_FragColor = vec4(1.0);\n#endif\n}\n", vertexSource: "const float PI = 3.141592653589793;\n\nattribute vec4 a_pos_offset;\nattribute vec4 a_data;\nattribute vec3 a_projected_pos;\nattribute float a_fade_opacity;\n\n// contents of a_size vary based on the type of property value\n// used for {text,icon}-size.\n// For constants, a_size is disabled.\n// For source functions, we bind only one value per vertex: the value of {text,icon}-size evaluated for the current feature.\n// For composite functions:\n// [ text-size(lowerZoomStop, feature),\n//   text-size(upperZoomStop, feature) ]\nuniform bool u_is_size_zoom_constant;\nuniform bool u_is_size_feature_constant;\nuniform highp float u_size_t; // used to interpolate between zoom stops when size is a composite function\nuniform highp float u_size; // used when size is both zoom and feature constant\n\n#pragma mapbox: define highp vec4 fill_color\n#pragma mapbox: define highp vec4 halo_color\n#pragma mapbox: define lowp float opacity\n#pragma mapbox: define lowp float halo_width\n#pragma mapbox: define lowp float halo_blur\n\nuniform mat4 u_matrix;\nuniform mat4 u_label_plane_matrix;\nuniform mat4 u_gl_coord_matrix;\n\nuniform bool u_is_text;\nuniform bool u_pitch_with_map;\nuniform highp float u_pitch;\nuniform bool u_rotate_symbol;\nuniform highp float u_aspect_ratio;\nuniform highp float u_camera_to_center_distance;\nuniform float u_fade_change;\n\nuniform vec2 u_texsize;\n\nvarying vec2 v_data0;\nvarying vec3 v_data1;\n\nvoid main() {\n    #pragma mapbox: initialize highp vec4 fill_color\n    #pragma mapbox: initialize highp vec4 halo_color\n    #pragma mapbox: initialize lowp float opacity\n    #pragma mapbox: initialize lowp float halo_width\n    #pragma mapbox: initialize lowp float halo_blur\n\n    vec2 a_pos = a_pos_offset.xy;\n    vec2 a_offset = a_pos_offset.zw;\n\n    vec2 a_tex = a_data.xy;\n    vec2 a_size = a_data.zw;\n\n    highp float segment_angle = -a_projected_pos[2];\n    float size;\n\n    if (!u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = mix(a_size[0], a_size[1], u_size_t) / 10.0;\n    } else if (u_is_size_zoom_constant && !u_is_size_feature_constant) {\n        size = a_size[0] / 10.0;\n    } else if (!u_is_size_zoom_constant && u_is_size_feature_constant) {\n        size = u_size;\n    } else {\n        size = u_size;\n    }\n\n    vec4 projectedPoint = u_matrix * vec4(a_pos, 0, 1);\n    highp float camera_to_anchor_distance = projectedPoint.w;\n    // If the label is pitched with the map, layout is done in pitched space,\n    // which makes labels in the distance smaller relative to viewport space.\n    // We counteract part of that effect by multiplying by the perspective ratio.\n    // If the label isn't pitched with the map, we do layout in viewport space,\n    // which makes labels in the distance larger relative to the features around\n    // them. We counteract part of that effect by dividing by the perspective ratio.\n    highp float distance_ratio = u_pitch_with_map ?\n        camera_to_anchor_distance / u_camera_to_center_distance :\n        u_camera_to_center_distance / camera_to_anchor_distance;\n    highp float perspective_ratio = 0.5 + 0.5 * distance_ratio;\n\n    size *= perspective_ratio;\n\n    float fontScale = u_is_text ? size / 24.0 : size;\n\n    highp float symbol_rotation = 0.0;\n    if (u_rotate_symbol) {\n        // Point labels with 'rotation-alignment: map' are horizontal with respect to tile units\n        // To figure out that angle in projected space, we draw a short horizontal line in tile\n        // space, project it, and measure its angle in projected space.\n        vec4 offsetProjectedPoint = u_matrix * vec4(a_pos + vec2(1, 0), 0, 1);\n\n        vec2 a = projectedPoint.xy / projectedPoint.w;\n        vec2 b = offsetProjectedPoint.xy / offsetProjectedPoint.w;\n\n        symbol_rotation = atan((b.y - a.y) / u_aspect_ratio, b.x - a.x);\n    }\n\n    highp float angle_sin = sin(segment_angle + symbol_rotation);\n    highp float angle_cos = cos(segment_angle + symbol_rotation);\n    mat2 rotation_matrix = mat2(angle_cos, -1.0 * angle_sin, angle_sin, angle_cos);\n\n    vec4 projected_pos = u_label_plane_matrix * vec4(a_projected_pos.xy, 0.0, 1.0);\n    gl_Position = u_gl_coord_matrix * vec4(projected_pos.xy / projected_pos.w + rotation_matrix * (a_offset / 64.0 * fontScale), 0.0, 1.0);\n    float gamma_scale = gl_Position.w;\n\n    vec2 tex = a_tex / u_texsize;\n    vec2 fade_opacity = unpack_opacity(a_fade_opacity);\n    float fade_change = fade_opacity[1] > 0.5 ? u_fade_change : -u_fade_change;\n    float interpolated_fade_opacity = max(0.0, min(1.0, fade_opacity[0] + fade_change));\n\n    v_data0 = vec2(tex.x, tex.y);\n    v_data1 = vec3(gamma_scale, size, interpolated_fade_opacity);\n}\n" }
                },
                re = /#pragma mapbox: ([\w]+) ([\w]+) ([\w]+) ([\w]+)/g,
                loop = function(e) {
                    var n = shaders[e],
                        a = {};
                    n.fragmentSource = n.fragmentSource.replace(re, function(e, n, t, o, i) { return a[i] = !0, "define" === n ? "\n#ifndef HAS_UNIFORM_u_" + i + "\nvarying " + t + " " + o + " " + i + ";\n#else\nuniform " + t + " " + o + " u_" + i + ";\n#endif\n" : "\n#ifdef HAS_UNIFORM_u_" + i + "\n    " + t + " " + o + " " + i + " = u_" + i + ";\n#endif\n" }), n.vertexSource = n.vertexSource.replace(re, function(e, n, t, o, i) { var r = "float" === o ? "vec2" : "vec4"; return a[i] ? "define" === n ? "\n#ifndef HAS_UNIFORM_u_" + i + "\nuniform lowp float a_" + i + "_t;\nattribute " + t + " " + r + " a_" + i + ";\nvarying " + t + " " + o + " " + i + ";\n#else\nuniform " + t + " " + o + " u_" + i + ";\n#endif\n" : "\n#ifndef HAS_UNIFORM_u_" + i + "\n    " + i + " = unpack_mix_" + r + "(a_" + i + ", a_" + i + "_t);\n#else\n    " + t + " " + o + " " + i + " = u_" + i + ";\n#endif\n" : "define" === n ? "\n#ifndef HAS_UNIFORM_u_" + i + "\nuniform lowp float a_" + i + "_t;\nattribute " + t + " " + r + " a_" + i + ";\n#else\nuniform " + t + " " + o + " u_" + i + ";\n#endif\n" : "\n#ifndef HAS_UNIFORM_u_" + i + "\n    " + t + " " + o + " " + i + " = unpack_mix_" + r + "(a_" + i + ", a_" + i + "_t);\n#else\n    " + t + " " + o + " " + i + " = u_" + i + ";\n#endif\n" })
                };
            for (var programName in shaders) loop(programName);
            module.exports = shaders;
        }, {}],
        98: [function(_dereq_, module, exports) {
            "use strict";
            var ImageSource = _dereq_("./image_source"),
                window = _dereq_("../util/window"),
                CanvasSource = function(t) {
                    function i(i, a, s, n) { t.call(this, i, a, s, n), this.options = a, this.animate = void 0 === a.animate || a.animate }
                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.load = function() {
                        if (this.canvas = this.canvas || window.document.getElementById(this.options.canvas), this.width = this.canvas.width, this.height = this.canvas.height, this._hasInvalidDimensions()) return this.fire("error", new Error("Canvas dimensions cannot be less than or equal to zero."));
                        var t;
                        this.play = function() { void 0 === t && (t = this.map.style.animationLoop.set(1 / 0), this.map._rerender()) }, this.pause = function() { void 0 !== t && (t = this.map.style.animationLoop.cancel(t)) }, this._finishLoading()
                    }, i.prototype.getCanvas = function() { return this.canvas }, i.prototype.onAdd = function(t) { this.map = t, this.load(), this.canvas && this.animate && this.play() }, i.prototype.onRemove = function() { this.pause() }, i.prototype.prepare = function() {
                        var t = !1;
                        this.canvas.width !== this.width && (this.width = this.canvas.width, t = !0), this.canvas.height !== this.height && (this.height = this.canvas.height, t = !0), this._hasInvalidDimensions() || 0 !== Object.keys(this.tiles).length && this._prepareImage(this.map.painter.gl, this.canvas, t)
                    }, i.prototype.serialize = function() { return { type: "canvas", canvas: this.canvas, coordinates: this.coordinates } }, i.prototype._hasInvalidDimensions = function() { for (var t = this, i = 0, a = [t.canvas.width, t.canvas.height]; i < a.length; i += 1) { var s = a[i]; if (isNaN(s) || s <= 0) return !0 } return !1 }, i
                }(ImageSource);
            module.exports = CanvasSource;
        }, { "../util/window": 242, "./image_source": 102 }],
        99: [function(_dereq_, module, exports) {
            "use strict";

            function resolveURL(t) { var e = window.document.createElement("a"); return e.href = t, e.href }
            var Evented = _dereq_("../util/evented"),
                util = _dereq_("../util/util"),
                window = _dereq_("../util/window"),
                EXTENT = _dereq_("../data/extent"),
                ResourceType = _dereq_("../util/ajax").ResourceType,
                browser = _dereq_("../util/browser"),
                GeoJSONSource = function(t) {
                    function e(e, o, i, r) {
                        t.call(this), this.id = e, this.type = "geojson", this.minzoom = 0, this.maxzoom = 18, this.tileSize = 512, this.isTileClipped = !0, this.reparseOverscaled = !0, this.dispatcher = i, this.setEventedParent(r), this._data = o.data, this._options = util.extend({}, o), void 0 !== o.maxzoom && (this.maxzoom = o.maxzoom), o.type && (this.type = o.type);
                        var a = EXTENT / this.tileSize;
                        this.workerOptions = util.extend({ source: this.id, cluster: o.cluster || !1, geojsonVtOptions: { buffer: (void 0 !== o.buffer ? o.buffer : 128) * a, tolerance: (void 0 !== o.tolerance ? o.tolerance : .375) * a, extent: EXTENT, maxZoom: this.maxzoom }, superclusterOptions: { maxZoom: void 0 !== o.clusterMaxZoom ? Math.min(o.clusterMaxZoom, this.maxzoom - 1) : this.maxzoom - 1, extent: EXTENT, radius: (o.clusterRadius || 50) * a, log: !1 } }, o.workerOptions)
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function() {
                        var t = this;
                        this.fire("dataloading", { dataType: "source" }), this._updateWorkerData(function(e) {
                            if (e) return void t.fire("error", { error: e });
                            t.fire("data", { dataType: "source", sourceDataType: "metadata" })
                        })
                    }, e.prototype.onAdd = function(t) { this.map = t, this.load() }, e.prototype.setData = function(t) {
                        var e = this;
                        return this._data = t, this.fire("dataloading", { dataType: "source" }), this._updateWorkerData(function(t) {
                            if (t) return e.fire("error", { error: t });
                            e.fire("data", { dataType: "source", sourceDataType: "content" })
                        }), this
                    }, e.prototype._updateWorkerData = function(t) {
                        var e = this,
                            o = util.extend({}, this.workerOptions),
                            i = this._data;
                        "string" == typeof i ? o.request = this.map._transformRequest(resolveURL(i), ResourceType.Source) : o.data = JSON.stringify(i), this.workerID = this.dispatcher.send(this.type + ".loadData", o, function(o) { e._loaded = !0, t(o) }, this.workerID)
                    }, e.prototype.loadTile = function(t, e) {
                        var o = this,
                            i = void 0 === t.workerID || "expired" === t.state ? "loadTile" : "reloadTile",
                            r = { type: this.type, uid: t.uid, coord: t.coord, zoom: t.coord.z, maxZoom: this.maxzoom, tileSize: this.tileSize, source: this.id, pixelRatio: browser.devicePixelRatio, overscaling: t.coord.z > this.maxzoom ? Math.pow(2, t.coord.z - this.maxzoom) : 1, showCollisionBoxes: this.map.showCollisionBoxes };
                        t.workerID = this.dispatcher.send(i, r, function(i, r) { return t.unloadVectorData(), t.aborted ? e(null) : i ? e(i) : (t.loadVectorData(r, o.map.painter), e(null)) }, this.workerID)
                    }, e.prototype.abortTile = function(t) { t.aborted = !0 }, e.prototype.unloadTile = function(t) { t.unloadVectorData(), this.dispatcher.send("removeTile", { uid: t.uid, type: this.type, source: this.id }, null, t.workerID) }, e.prototype.onRemove = function() { this.dispatcher.broadcast("removeSource", { type: this.type, source: this.id }) }, e.prototype.serialize = function() { return util.extend({}, this._options, { type: this.type, data: this._data }) }, e
                }(Evented);
            module.exports = GeoJSONSource;
        }, { "../data/extent": 58, "../util/ajax": 239, "../util/browser": 240, "../util/evented": 248, "../util/util": 260, "../util/window": 242 }],
        100: [function(_dereq_, module, exports) {
            "use strict";

            function loadGeoJSONTile(e, r) {
                var t = e.source,
                    o = e.coord;
                if (!this._geoJSONIndexes[t]) return r(null, null);
                var n = this._geoJSONIndexes[t].getTile(Math.min(o.z, e.maxZoom), o.x, o.y);
                if (!n) return r(null, null);
                var u = new GeoJSONWrapper(n.features),
                    i = vtpbf(u);
                0 === i.byteOffset && i.byteLength === i.buffer.byteLength || (i = new Uint8Array(i)), r(null, { vectorTile: u, rawData: i.buffer })
            }
            var ajax = _dereq_("../util/ajax"),
                rewind = _dereq_("geojson-rewind"),
                GeoJSONWrapper = _dereq_("./geojson_wrapper"),
                vtpbf = _dereq_("vt-pbf"),
                supercluster = _dereq_("supercluster"),
                geojsonvt = _dereq_("geojson-vt"),
                VectorTileWorkerSource = _dereq_("./vector_tile_worker_source"),
                GeoJSONWorkerSource = function(e) {
                    function r(r, t, o) { e.call(this, r, t, loadGeoJSONTile), o && (this.loadGeoJSON = o), this._geoJSONIndexes = {} }
                    return e && (r.__proto__ = e), r.prototype = Object.create(e && e.prototype), r.prototype.constructor = r, r.prototype.loadData = function(e, r) {
                        var t = this;
                        this.loadGeoJSON(e, function(o, n) {
                            if (o || !n) return r(o);
                            if ("object" != typeof n) return r(new Error("Input data is not a valid GeoJSON object."));
                            rewind(n, !0);
                            try { t._geoJSONIndexes[e.source] = e.cluster ? supercluster(e.superclusterOptions).load(n.features) : geojsonvt(n, e.geojsonVtOptions) } catch (o) { return r(o) }
                            t.loaded[e.source] = {}, r(null)
                        })
                    }, r.prototype.reloadTile = function(r, t) {
                        var o = this.loaded[r.source],
                            n = r.uid;
                        return o && o[n] ? e.prototype.reloadTile.call(this, r, t) : this.loadTile(r, t)
                    }, r.prototype.loadGeoJSON = function(e, r) {
                        if (e.request) ajax.getJSON(e.request, r);
                        else { if ("string" != typeof e.data) return r(new Error("Input data is not a valid GeoJSON object.")); try { return r(null, JSON.parse(e.data)) } catch (e) { return r(new Error("Input data is not a valid GeoJSON object.")) } }
                    }, r.prototype.removeSource = function(e, r) { this._geoJSONIndexes[e.source] && delete this._geoJSONIndexes[e.source], r() }, r
                }(VectorTileWorkerSource);
            module.exports = GeoJSONWorkerSource;
        }, { "../util/ajax": 239, "./geojson_wrapper": 101, "./vector_tile_worker_source": 114, "geojson-rewind": 14, "geojson-vt": 18, "supercluster": 41, "vt-pbf": 46 }],
        101: [function(_dereq_, module, exports) {
            "use strict";
            var Point = _dereq_("@mapbox/point-geometry"),
                toGeoJSON = _dereq_("@mapbox/vector-tile").VectorTileFeature.prototype.toGeoJSON,
                EXTENT = _dereq_("../data/extent"),
                FeatureWrapper = function(e) { this._feature = e, this.extent = EXTENT, this.type = e.type, this.properties = e.tags, "id" in e && !isNaN(e.id) && (this.id = parseInt(e.id, 10)) };
            FeatureWrapper.prototype.loadGeometry = function() {
                var e = this;
                if (1 === this._feature.type) {
                    for (var t = [], r = 0, o = e._feature.geometry; r < o.length; r += 1) {
                        var a = o[r];
                        t.push([new Point(a[0], a[1])])
                    }
                    return t
                }
                for (var i = [], p = 0, n = e._feature.geometry; p < n.length; p += 1) {
                    for (var s = n[p], u = [], h = 0, f = s; h < f.length; h += 1) {
                        var l = f[h];
                        u.push(new Point(l[0], l[1]))
                    }
                    i.push(u)
                }
                return i
            }, FeatureWrapper.prototype.toGeoJSON = function(e, t, r) { return toGeoJSON.call(this, e, t, r) };
            var GeoJSONWrapper = function(e) { this.layers = { _geojsonTileLayer: this }, this.name = "_geojsonTileLayer", this.extent = EXTENT, this.length = e.length, this._features = e };
            GeoJSONWrapper.prototype.feature = function(e) { return new FeatureWrapper(this._features[e]) }, module.exports = GeoJSONWrapper;
        }, { "../data/extent": 58, "@mapbox/point-geometry": 2, "@mapbox/vector-tile": 6 }],
        102: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                window = _dereq_("../util/window"),
                TileCoord = _dereq_("./tile_coord"),
                LngLat = _dereq_("../geo/lng_lat"),
                Point = _dereq_("@mapbox/point-geometry"),
                Evented = _dereq_("../util/evented"),
                ajax = _dereq_("../util/ajax"),
                browser = _dereq_("../util/browser"),
                EXTENT = _dereq_("../data/extent"),
                RasterBoundsArray = _dereq_("../data/raster_bounds_array"),
                VertexBuffer = _dereq_("../gl/vertex_buffer"),
                VertexArrayObject = _dereq_("../render/vertex_array_object"),
                Texture = _dereq_("../render/texture"),
                ImageSource = function(t) {
                    function e(e, r, o, i) { t.call(this), this.id = e, this.dispatcher = o, this.coordinates = r.coordinates, this.type = "image", this.minzoom = 0, this.maxzoom = 22, this.tileSize = 512, this.tiles = {}, this.setEventedParent(i), this.options = r, this.textureLoaded = !1 }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.load = function() {
                        var t = this;
                        this.fire("dataloading", { dataType: "source" }), this.url = this.options.url, ajax.getImage(this.map._transformRequest(this.url, ajax.ResourceType.Image), function(e, r) { e ? t.fire("error", { error: e }) : r && (t.image = browser.getImageData(r), t._finishLoading()) })
                    }, e.prototype._finishLoading = function() { this.map && (this.setCoordinates(this.coordinates), this.fire("data", { dataType: "source", sourceDataType: "metadata" })) }, e.prototype.onAdd = function(t) { this.map = t, this.load() }, e.prototype.setCoordinates = function(t) {
                        this.coordinates = t;
                        var e = this.map,
                            r = t.map(function(t) { return e.transform.locationCoordinate(LngLat.convert(t)).zoomTo(0) }),
                            o = this.centerCoord = util.getCoordinatesCenter(r);
                        o.column = Math.floor(o.column), o.row = Math.floor(o.row), this.coord = new TileCoord(o.zoom, o.column, o.row), this.minzoom = this.maxzoom = o.zoom;
                        var i = r.map(function(t) { var e = t.zoomTo(o.zoom); return new Point(Math.round((e.column - o.column) * EXTENT), Math.round((e.row - o.row) * EXTENT)) });
                        return this._boundsArray = new RasterBoundsArray, this._boundsArray.emplaceBack(i[0].x, i[0].y, 0, 0), this._boundsArray.emplaceBack(i[1].x, i[1].y, EXTENT, 0), this._boundsArray.emplaceBack(i[3].x, i[3].y, 0, EXTENT), this._boundsArray.emplaceBack(i[2].x, i[2].y, EXTENT, EXTENT), this.boundsBuffer && (this.boundsBuffer.destroy(), delete this.boundsBuffer), this.fire("data", { dataType: "source", sourceDataType: "content" }), this
                    }, e.prototype.prepare = function() { 0 !== Object.keys(this.tiles).length && this.image && this._prepareImage(this.map.painter.gl, this.image) }, e.prototype._prepareImage = function(t, e, r) {
                        var o = this;
                        this.boundsBuffer || (this.boundsBuffer = new VertexBuffer(t, this._boundsArray)), this.boundsVAO || (this.boundsVAO = new VertexArrayObject), this.textureLoaded ? r ? this.texture.update(e) : (e instanceof window.HTMLVideoElement || e instanceof window.ImageData || e instanceof window.HTMLCanvasElement) && (this.texture.bind(t.LINEAR, t.CLAMP_TO_EDGE), t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, t.RGBA, t.UNSIGNED_BYTE, e)) : (this.textureLoaded = !0, this.texture = new Texture(t, e, t.RGBA), this.texture.bind(t.LINEAR, t.CLAMP_TO_EDGE));
                        for (var i in o.tiles) { var a = o.tiles[i]; "loaded" !== a.state && (a.state = "loaded", a.texture = o.texture) }
                    }, e.prototype.loadTile = function(t, e) { this.coord && this.coord.toString() === t.coord.toString() ? (this.tiles[String(t.coord.w)] = t, t.buckets = {}, e(null)) : (t.state = "errored", e(null)) }, e.prototype.serialize = function() { return { type: "image", url: this.options.url, coordinates: this.coordinates } }, e
                }(Evented);
            module.exports = ImageSource;
        }, { "../data/extent": 58, "../data/raster_bounds_array": 64, "../geo/lng_lat": 68, "../gl/vertex_buffer": 72, "../render/texture": 93, "../render/vertex_array_object": 95, "../util/ajax": 239, "../util/browser": 240, "../util/evented": 248, "../util/util": 260, "../util/window": 242, "./tile_coord": 112, "@mapbox/point-geometry": 2 }],
        103: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                ajax = _dereq_("../util/ajax"),
                browser = _dereq_("../util/browser"),
                normalizeURL = _dereq_("../util/mapbox").normalizeSourceURL;
            module.exports = function(r, e, o) {
                var u = function(r, e) {
                    if (r) return o(r);
                    if (e) {
                        var u = util.pick(e, ["tiles", "minzoom", "maxzoom", "attribution", "mapbox_logo", "bounds"]);
                        e.vector_layers && (u.vectorLayers = e.vector_layers, u.vectorLayerIds = u.vectorLayers.map(function(r) { return r.id })), o(null, u)
                    }
                };
                r.url ? ajax.getJSON(e(normalizeURL(r.url), ajax.ResourceType.Source), u) : browser.frame(function() { return u(null, r) })
            };
        }, { "../util/ajax": 239, "../util/browser": 240, "../util/mapbox": 255, "../util/util": 260 }],
        104: [function(_dereq_, module, exports) {
            "use strict";
            var EXTENT = _dereq_("../data/extent");
            module.exports = function(e, t, r) { return t * (EXTENT / (e.tileSize * Math.pow(2, r - e.coord.z))) };
        }, { "../data/extent": 58 }],
        105: [function(_dereq_, module, exports) {
            "use strict";

            function sortTilesIn(e, r) {
                var o = e.coord,
                    t = r.coord;
                return o.z - t.z || o.y - t.y || o.w - t.w || o.x - t.x
            }

            function mergeRenderedFeatureLayers(e) {
                for (var r = {}, o = {}, t = 0, n = e; t < n.length; t += 1) {
                    var u = n[t],
                        a = u.queryResults,
                        d = u.wrappedTileID,
                        s = o[d] = o[d] || {};
                    for (var i in a)
                        for (var l = a[i], c = s[i] = s[i] || {}, f = r[i] = r[i] || [], v = 0, y = l; v < y.length; v += 1) {
                            var p = y[v];
                            c[p.featureIndex] || (c[p.featureIndex] = !0, f.push(p.feature))
                        }
                }
                return r
            }
            var TileCoord = _dereq_("./tile_coord");
            exports.rendered = function(e, r, o, t, n, u) {
                var a = e.tilesIn(o);
                a.sort(sortTilesIn);
                for (var d = [], s = 0, i = a; s < i.length; s += 1) {
                    var l = i[s];
                    d.push({ wrappedTileID: l.coord.wrapped().id, queryResults: l.tile.queryRenderedFeatures(r, l.queryGeometry, l.scale, t, u, e.id) })
                }
                return mergeRenderedFeatureLayers(d)
            }, exports.source = function(e, r) {
                for (var o = e.getRenderableIds().map(function(r) { return e.getTileByID(r) }), t = [], n = {}, u = 0; u < o.length; u++) {
                    var a = o[u],
                        d = new TileCoord(Math.min(a.sourceMaxZoom, a.coord.z), a.coord.x, a.coord.y, 0).id;
                    n[d] || (n[d] = !0, a.querySourceFeatures(t, r))
                }
                return t
            };
        }, { "./tile_coord": 112 }],
        106: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                ajax = _dereq_("../util/ajax"),
                Evented = _dereq_("../util/evented"),
                loadTileJSON = _dereq_("./load_tilejson"),
                normalizeURL = _dereq_("../util/mapbox").normalizeTileURL,
                TileBounds = _dereq_("./tile_bounds"),
                Texture = _dereq_("../render/texture"),
                RasterTileSource = function(e) {
                    function t(t, i, r, o) { e.call(this), this.id = t, this.dispatcher = r, this.setEventedParent(o), this.type = "raster", this.minzoom = 0, this.maxzoom = 22, this.roundZoom = !0, this.scheme = "xyz", this.tileSize = 512, this._loaded = !1, this._options = util.extend({}, i), util.extend(this, util.pick(i, ["url", "scheme", "tileSize"])) }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.load = function() {
                        var e = this;
                        this.fire("dataloading", { dataType: "source" }), loadTileJSON(this._options, this.map._transformRequest, function(t, i) { t ? e.fire("error", t) : i && (util.extend(e, i), i.bounds && (e.tileBounds = new TileBounds(i.bounds, e.minzoom, e.maxzoom)), e.fire("data", { dataType: "source", sourceDataType: "metadata" }), e.fire("data", { dataType: "source", sourceDataType: "content" })) })
                    }, t.prototype.onAdd = function(e) { this.map = e, this.load() }, t.prototype.serialize = function() { return util.extend({}, this._options) }, t.prototype.hasTile = function(e) { return !this.tileBounds || this.tileBounds.contains(e, this.maxzoom) }, t.prototype.loadTile = function(e, t) {
                        var i = this,
                            r = normalizeURL(e.coord.url(this.tiles, null, this.scheme), this.url, this.tileSize);
                        e.request = ajax.getImage(this.map._transformRequest(r, ajax.ResourceType.Tile), function(r, o) {
                            if (delete e.request, e.aborted) e.state = "unloaded", t(null);
                            else if (r) e.state = "errored", t(r);
                            else if (o) {
                                i.map._refreshExpiredTiles && e.setExpiryData(o), delete o.cacheControl, delete o.expires;
                                var a = i.map.painter.gl;
                                e.texture = i.map.painter.getTileTexture(o.width), e.texture ? (e.texture.bind(a.LINEAR, a.CLAMP_TO_EDGE, a.LINEAR_MIPMAP_NEAREST), a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, a.RGBA, a.UNSIGNED_BYTE, o)) : (e.texture = new Texture(a, o, a.RGBA), e.texture.bind(a.LINEAR, a.CLAMP_TO_EDGE, a.LINEAR_MIPMAP_NEAREST), i.map.painter.extTextureFilterAnisotropic && a.texParameterf(a.TEXTURE_2D, i.map.painter.extTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, i.map.painter.extTextureFilterAnisotropicMax)), a.generateMipmap(a.TEXTURE_2D), e.state = "loaded", t(null)
                            }
                        })
                    }, t.prototype.abortTile = function(e, t) { e.request && (e.request.abort(), delete e.request), t() }, t.prototype.unloadTile = function(e, t) { e.texture && this.map.painter.saveTileTexture(e.texture), t() }, t
                }(Evented);
            module.exports = RasterTileSource;
        }, { "../render/texture": 93, "../util/ajax": 239, "../util/evented": 248, "../util/mapbox": 255, "../util/util": 260, "./load_tilejson": 103, "./tile_bounds": 111 }],
        107: [function(_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"),
                Evented = _dereq_("../util/evented"),
                window = _dereq_("../util/window"),
                pluginRequested = !1,
                pluginBlobURL = null;
            module.exports.evented = new Evented, module.exports.registerForPluginAvailability = function(e) { return pluginBlobURL ? e({ pluginBlobURL: pluginBlobURL, errorCallback: module.exports.errorCallback }) : module.exports.evented.once("pluginAvailable", e), e }, module.exports.createBlobURL = function(e) { return window.URL.createObjectURL(new window.Blob([e.data], { type: "text/javascript" })) }, module.exports.clearRTLTextPlugin = function() { pluginRequested = !1, pluginBlobURL = null }, module.exports.setRTLTextPlugin = function(e, l) {
                if (pluginRequested) throw new Error("setRTLTextPlugin cannot be called multiple times.");
                pluginRequested = !0, module.exports.errorCallback = l, ajax.getArrayBuffer({ url: e }, function(e, t) { e ? l(e) : t && (pluginBlobURL = module.exports.createBlobURL(t), module.exports.evented.fire("pluginAvailable", { pluginBlobURL: pluginBlobURL, errorCallback: l })) })
            }, module.exports.applyArabicShaping = null, module.exports.processBidirectionalText = null;
        }, { "../util/ajax": 239, "../util/evented": 248, "../util/window": 242 }],
        108: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                sourceTypes = { vector: _dereq_("../source/vector_tile_source"), raster: _dereq_("../source/raster_tile_source"), geojson: _dereq_("../source/geojson_source"), video: _dereq_("../source/video_source"), image: _dereq_("../source/image_source"), canvas: _dereq_("../source/canvas_source") };
            exports.create = function(e, r, o, u) { var s = new sourceTypes[r.type](e, r, o, u); if (s.id !== e) throw new Error("Expected Source id to be " + e + " instead of " + s.id); return util.bindAll(["load", "abort", "unload", "serialize", "prepare"], s), s }, exports.getType = function(e) { return sourceTypes[e] }, exports.setType = function(e, r) { sourceTypes[e] = r };
        }, { "../source/canvas_source": 98, "../source/geojson_source": 99, "../source/image_source": 102, "../source/raster_tile_source": 106, "../source/vector_tile_source": 113, "../source/video_source": 115, "../util/util": 260 }],
        109: [function(_dereq_, module, exports) {
            "use strict";

            function coordinateToTilePoint(e, t, o) { var i = o.zoomTo(Math.min(e.z, t)); return new Point((i.column - (e.x + e.w * Math.pow(2, e.z))) * EXTENT, (i.row - e.y) * EXTENT) }

            function isRasterType(e) { return "raster" === e || "image" === e || "video" === e }
            var createSource = _dereq_("./source").create,
                Tile = _dereq_("./tile"),
                Evented = _dereq_("../util/evented"),
                TileCoord = _dereq_("./tile_coord"),
                Cache = _dereq_("../util/lru_cache"),
                Coordinate = _dereq_("../geo/coordinate"),
                util = _dereq_("../util/util"),
                EXTENT = _dereq_("../data/extent"),
                Point = _dereq_("@mapbox/point-geometry"),
                SourceCache = function(e) {
                    function t(t, o, i) {
                        var r = this;
                        e.call(this), this.id = t, this.dispatcher = i, this.on("data", function(e) { "source" === e.dataType && "metadata" === e.sourceDataType && (r._sourceLoaded = !0), r._sourceLoaded && !r._paused && "source" === e.dataType && "content" === e.sourceDataType && (r.reload(), r.transform && r.update(r.transform)) }), this.on("error", function() { r._sourceErrored = !0 }), this._source = createSource(t, o, i, this), this._tiles = {}, this._cache = new Cache(0, this._unloadTile.bind(this)), this._timers = {}, this._cacheTimers = {}, this._maxTileCacheSize = null, this._isIdRenderable = this._isIdRenderable.bind(this), this._coveredTiles = {}
                    }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.onAdd = function(e) { this.map = e, this._maxTileCacheSize = e ? e._maxTileCacheSize : null, this._source && this._source.onAdd && this._source.onAdd(e) }, t.prototype.onRemove = function(e) { this._source && this._source.onRemove && this._source.onRemove(e) }, t.prototype.loaded = function() { var e = this; if (this._sourceErrored) return !0; if (!this._sourceLoaded) return !1; for (var t in e._tiles) { var o = e._tiles[t]; if ("loaded" !== o.state && "errored" !== o.state) return !1 } return !0 }, t.prototype.getSource = function() { return this._source }, t.prototype.pause = function() { this._paused = !0 }, t.prototype.getNeedsFullPlacement = function() { return this._needsFullPlacement }, t.prototype.resume = function() {
                        if (this._paused) {
                            var e = this._shouldReloadOnResume;
                            this._paused = !1, this._shouldReloadOnResume = !1, e && this.reload(), this.transform && this.update(this.transform)
                        }
                    }, t.prototype._loadTile = function(e, t) { return this._source.loadTile(e, t) }, t.prototype._unloadTile = function(e) { if (this._source.unloadTile) return this._source.unloadTile(e, function() {}) }, t.prototype._abortTile = function(e) { if (this._source.abortTile) return this._source.abortTile(e, function() {}) }, t.prototype.serialize = function() { return this._source.serialize() }, t.prototype.prepare = function(e) {
                        var t = this;
                        this._source.prepare && this._source.prepare();
                        for (var o in t._tiles) t._tiles[o].upload(e)
                    }, t.prototype.getIds = function() {
                        var e = this,
                            t = function(t, o) {
                                var i = TileCoord.fromID(t),
                                    r = TileCoord.fromID(o),
                                    s = new Point(i.x, i.y).rotate(e.transform.angle),
                                    a = new Point(r.x, r.y).rotate(e.transform.angle);
                                return i.z - r.z || a.y - s.y || a.x - s.x
                            };
                        return Object.keys(this._tiles).map(Number).sort(t)
                    }, t.prototype.getRenderableIds = function() { return this.getIds().filter(this._isIdRenderable) }, t.prototype.hasRenderableParent = function(e) { var t = this.findLoadedParent(e, 0, {}); return !!t && this._isIdRenderable(t.coord.id) }, t.prototype._isIdRenderable = function(e) { return this._tiles[e] && this._tiles[e].hasData() && !this._coveredTiles[e] }, t.prototype.reload = function() {
                        var e = this;
                        if (this._paused) return void(this._shouldReloadOnResume = !0);
                        this._cache.reset();
                        for (var t in e._tiles) e._reloadTile(t, "reloading")
                    }, t.prototype._reloadTile = function(e, t) {
                        var o = this._tiles[e];
                        o && ("loading" !== o.state && (o.state = t), this._loadTile(o, this._tileLoaded.bind(this, o, e, t)))
                    }, t.prototype._tileLoaded = function(e, t, o, i) {
                        if (i) return e.state = "errored", void(404 !== i.status ? this._source.fire("error", { tile: e, error: i }) : this.update(this.transform));
                        e.timeAdded = (new Date).getTime(), "expired" === o && (e.refreshedUponExpiration = !0), this._setTileReloadTimer(t, e), this._source.fire("data", { dataType: "source", tile: e, coord: e.coord }), this.map && (this.map.painter.tileExtentVAO.vao = null), this._updatePlacement(), this.map && e.added(this.map.painter.crossTileSymbolIndex)
                    }, t.prototype.getTile = function(e) { return this.getTileByID(e.id) }, t.prototype.getTileByID = function(e) { return this._tiles[e] }, t.prototype.getZoom = function(e) { return e.zoom + e.scaleZoom(e.tileSize / this._source.tileSize) }, t.prototype._findLoadedChildren = function(e, t, o) {
                        var i = this,
                            r = !1;
                        for (var s in i._tiles) {
                            var a = i._tiles[s];
                            if (!(o[s] || !a.hasData() || a.coord.z <= e.z || a.coord.z > t)) {
                                var n = Math.pow(2, Math.min(a.coord.z, i._source.maxzoom) - Math.min(e.z, i._source.maxzoom));
                                if (Math.floor(a.coord.x / n) === e.x && Math.floor(a.coord.y / n) === e.y)
                                    for (o[s] = !0, r = !0; a && a.coord.z - 1 > e.z;) {
                                        var d = a.coord.parent(i._source.maxzoom);
                                        if (!d) break;
                                        a = i._tiles[d.id], a && a.hasData() && (delete o[s], o[d.id] = !0)
                                    }
                            }
                        }
                        return r
                    }, t.prototype.findLoadedParent = function(e, t, o) {
                        for (var i = this, r = e.z - 1; r >= t; r--) {
                            var s = e.parent(i._source.maxzoom);
                            if (!s) return;
                            e = s;
                            var a = String(e.id),
                                n = i._tiles[a];
                            if (n && n.hasData()) return o[a] = !0, n;
                            if (i._cache.has(a)) return o[a] = !0, i._cache.getWithoutRemoving(a)
                        }
                    }, t.prototype.updateCacheSize = function(e) {
                        var t = Math.ceil(e.width / this._source.tileSize) + 1,
                            o = Math.ceil(e.height / this._source.tileSize) + 1,
                            i = t * o,
                            r = Math.floor(5 * i),
                            s = "number" == typeof this._maxTileCacheSize ? Math.min(this._maxTileCacheSize, r) : r;
                        this._cache.setMaxSize(s)
                    }, t.prototype.update = function(e) {
                        var o = this;
                        if (this.transform = e, this._sourceLoaded && !this._paused) {
                            this.updateCacheSize(e), this._coveredTiles = {};
                            var i;
                            this.used ? this._source.coord ? i = e.getVisibleWrappedCoordinates(this._source.coord) : (i = e.coveringTiles({ tileSize: this._source.tileSize, minzoom: this._source.minzoom, maxzoom: this._source.maxzoom, roundZoom: this._source.roundZoom, reparseOverscaled: this._source.reparseOverscaled }), this._source.hasTile && (i = i.filter(function(e) { return o._source.hasTile(e) }))) : i = [];
                            var r = (this._source.roundZoom ? Math.round : Math.floor)(this.getZoom(e)),
                                s = Math.max(r - t.maxOverzooming, this._source.minzoom),
                                a = Math.max(r + t.maxUnderzooming, this._source.minzoom),
                                n = this._updateRetainedTiles(i, r),
                                d = {};
                            if (isRasterType(this._source.type))
                                for (var h = Object.keys(n), c = 0; c < h.length; c++) {
                                    var u = h[c],
                                        l = TileCoord.fromID(+u),
                                        m = o._tiles[u];
                                    if (m && (void 0 === m.fadeEndTime || m.fadeEndTime >= Date.now())) {
                                        o._findLoadedChildren(l, a, n) && (n[u] = !0);
                                        var _ = o.findLoadedParent(l, s, d);
                                        _ && o._addTile(_.coord)
                                    }
                                }
                            var p;
                            for (p in d) n[p] || (o._coveredTiles[p] = !0);
                            for (p in d) n[p] = !0;
                            for (var f = util.keysDifference(this._tiles, n), T = 0; T < f.length; T++) o._removeTile(f[T])
                        }
                    }, t.prototype._updateRetainedTiles = function(e, o) {
                        var i, r, s, a, n = this,
                            d = {},
                            h = {},
                            c = Math.max(o - t.maxOverzooming, this._source.minzoom);
                        for (i = 0; i < e.length; i++) {
                            r = e[i], s = n._addTile(r);
                            var u = !1;
                            if (s.hasData()) d[r.id] = !0;
                            else {
                                u = s.wasRequested(), d[r.id] = !0, a = !0;
                                if (o + 1 > n._source.maxzoom) {
                                    var l = r.children(n._source.maxzoom)[0],
                                        m = n.getTile(l);
                                    m && m.hasData() ? d[l.id] = !0 : a = !1
                                } else
                                    for (var _ = r.children(n._source.maxzoom), p = 0; p < _.length; p++) {
                                        var f = _[p],
                                            T = f ? n.getTile(f) : null;
                                        T && T.hasData() ? d[f.id] = !0 : a = !1
                                    }
                                if (!a)
                                    for (var v = o - 1; v >= c; --v) { var y = r.scaledTo(v, n._source.maxzoom); if (h[y.id]) break; if (h[y.id] = !0, s = n.getTile(y), !s && u && (s = n._addTile(y)), s && (d[y.id] = !0, u = s.wasRequested(), s.hasData())) break }
                            }
                        }
                        return d
                    }, t.prototype._addTile = function(e) {
                        var t = this._tiles[e.id];
                        if (t) return t;
                        (t = this._cache.get(e.id)) && (this._updatePlacement(), this.map && t.added(this.map.painter.crossTileSymbolIndex), this._cacheTimers[e.id] && (clearTimeout(this._cacheTimers[e.id]), delete this._cacheTimers[e.id], this._setTileReloadTimer(e.id, t)));
                        var o = Boolean(t);
                        if (!o) {
                            var i = e.z,
                                r = i > this._source.maxzoom ? Math.pow(2, i - this._source.maxzoom) : 1;
                            t = new Tile(e, this._source.tileSize * r, this._source.maxzoom), this._loadTile(t, this._tileLoaded.bind(this, t, e.id, t.state))
                        }
                        return t ? (t.uses++, this._tiles[e.id] = t, o || this._source.fire("dataloading", { tile: t, coord: t.coord, dataType: "source" }), t) : null
                    }, t.prototype._setTileReloadTimer = function(e, t) {
                        var o = this,
                            i = t.getExpiryTimeout();
                        i && (this._timers[e] = setTimeout(function() { o._reloadTile(e, "expired"), delete o._timers[e] }, i))
                    }, t.prototype._setCacheInvalidationTimer = function(e, t) {
                        var o = this,
                            i = t.getExpiryTimeout();
                        i && (this._cacheTimers[e] = setTimeout(function() { o._cache.remove(e), delete o._cacheTimers[e] }, i))
                    }, t.prototype._removeTile = function(e) {
                        var t = this._tiles[e];
                        if (t && (t.uses--, delete this._tiles[e], this._timers[e] && (clearTimeout(this._timers[e]), delete this._timers[e]), !(t.uses > 0)))
                            if (this._updatePlacement(), this.map && t.removed(this.map.painter.crossTileSymbolIndex), t.hasData()) {
                                t.coord = t.coord.wrapped();
                                var o = t.coord.id;
                                this._cache.add(o, t), this._setCacheInvalidationTimer(o, t)
                            } else t.aborted = !0, this._abortTile(t), this._unloadTile(t)
                    }, t.prototype._updatePlacement = function() { this._needsFullPlacement = !0 }, t.prototype.clearTiles = function() {
                        var e = this;
                        this._shouldReloadOnResume = !1, this._paused = !1;
                        for (var t in e._tiles) e._removeTile(t);
                        this._cache.reset()
                    }, t.prototype.tilesIn = function(e) {
                        for (var t = this, o = [], i = this.getIds(), r = 1 / 0, s = 1 / 0, a = -1 / 0, n = -1 / 0, d = e[0].zoom, h = 0; h < e.length; h++) {
                            var c = e[h];
                            r = Math.min(r, c.column), s = Math.min(s, c.row), a = Math.max(a, c.column), n = Math.max(n, c.row)
                        }
                        for (var u = 0; u < i.length; u++) {
                            var l = t._tiles[i[u]],
                                m = TileCoord.fromID(i[u]),
                                _ = [coordinateToTilePoint(m, l.sourceMaxZoom, new Coordinate(r, s, d)), coordinateToTilePoint(m, l.sourceMaxZoom, new Coordinate(a, n, d))];
                            if (_[0].x < EXTENT && _[0].y < EXTENT && _[1].x >= 0 && _[1].y >= 0) {
                                for (var p = [], f = 0; f < e.length; f++) p.push(coordinateToTilePoint(m, l.sourceMaxZoom, e[f]));
                                o.push({ tile: l, coord: m, queryGeometry: [p], scale: Math.pow(2, t.transform.zoom - l.coord.z) })
                            }
                        }
                        return o
                    }, t.prototype.commitPlacement = function(e, t) {
                        var o = this;
                        this._needsFullPlacement = !1;
                        for (var i = this.getIds(), r = 0; r < i.length; r++) { o.getTileByID(i[r]).commitPlacement(e, t, o.transform.angle) }
                    }, t.prototype.getVisibleCoordinates = function() {
                        for (var e = this, t = this.getRenderableIds().map(TileCoord.fromID), o = 0, i = t; o < i.length; o += 1) {
                            var r = i[o];
                            r.posMatrix = e.transform.calculatePosMatrix(r, e._source.maxzoom)
                        }
                        return t
                    }, t
                }(Evented);
            SourceCache.maxOverzooming = 10, SourceCache.maxUnderzooming = 3, module.exports = SourceCache;
        }, { "../data/extent": 58, "../geo/coordinate": 67, "../util/evented": 248, "../util/lru_cache": 254, "../util/util": 260, "./source": 108, "./tile": 110, "./tile_coord": 112, "@mapbox/point-geometry": 2 }],
        110: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                deserializeBucket = _dereq_("../data/bucket").deserialize,
                SymbolBucket = _dereq_("../data/bucket/symbol_bucket"),
                FeatureIndex = _dereq_("../data/feature_index"),
                vt = _dereq_("@mapbox/vector-tile"),
                Protobuf = _dereq_("pbf"),
                GeoJSONFeature = _dereq_("../util/vectortile_to_geojson"),
                featureFilter = _dereq_("../style-spec/feature_filter"),
                CollisionIndex = _dereq_("../symbol/collision_index"),
                CollisionBoxArray = _dereq_("../symbol/collision_box"),
                RasterBoundsArray = _dereq_("../data/raster_bounds_array"),
                TileCoord = _dereq_("./tile_coord"),
                EXTENT = _dereq_("../data/extent"),
                Point = _dereq_("@mapbox/point-geometry"),
                VertexBuffer = _dereq_("../gl/vertex_buffer"),
                IndexBuffer = _dereq_("../gl/index_buffer"),
                Texture = _dereq_("../render/texture"),
                ref = _dereq_("../data/segment"),
                SegmentVector = ref.SegmentVector,
                ref$1 = _dereq_("../data/index_array_type"),
                TriangleIndexArray = ref$1.TriangleIndexArray,
                projection = _dereq_("../symbol/projection"),
                ref$2 = _dereq_("../symbol/symbol_placement"),
                performSymbolPlacement = ref$2.performSymbolPlacement,
                updateOpacities = ref$2.updateOpacities,
                pixelsToTileUnits = _dereq_("../source/pixels_to_tile_units"),
                CLOCK_SKEW_RETRY_TIMEOUT = 3e4,
                Tile = function(e, t, i) { this.coord = e, this.uid = util.uniqueId(), this.uses = 0, this.tileSize = t, this.sourceMaxZoom = i, this.buckets = {}, this.expirationTime = null, this.expiredRequestCount = 0, this.state = "loading" };
            Tile.prototype.registerFadeDuration = function(e, t) {
                var i = t + this.timeAdded;
                i < Date.now() || this.fadeEndTime && i < this.fadeEndTime || (this.fadeEndTime = i, e.set(this.fadeEndTime - Date.now()))
            }, Tile.prototype.wasRequested = function() { return "errored" === this.state || "loaded" === this.state || "reloading" === this.state }, Tile.prototype.loadVectorData = function(e, t) {
                if (this.hasData() && this.unloadVectorData(), this.state = "loaded", !e) return void(this.collisionBoxArray = new CollisionBoxArray);
                e.rawTileData && (this.rawTileData = e.rawTileData), this.collisionBoxArray = new CollisionBoxArray(e.collisionBoxArray), this.featureIndex = FeatureIndex.deserialize(e.featureIndex, this.rawTileData), this.buckets = deserializeBucket(e.buckets, t.style), e.iconAtlasImage && (this.iconAtlasImage = e.iconAtlasImage), e.glyphAtlasImage && (this.glyphAtlasImage = e.glyphAtlasImage), e.iconAtlasImage && (this.iconAtlasImage = e.iconAtlasImage), e.glyphAtlasImage && (this.glyphAtlasImage = e.glyphAtlasImage)
            }, Tile.prototype.unloadVectorData = function() {
                var e = this;
                for (var t in e.buckets) e.buckets[t].destroy();
                this.buckets = {}, this.iconAtlasTexture && this.iconAtlasTexture.destroy(), this.glyphAtlasTexture && this.glyphAtlasTexture.destroy(), this.collisionBoxArray = null, this.featureIndex = null, this.state = "unloaded"
            }, Tile.prototype.added = function(e) {
                var t = this;
                for (var i in t.buckets) {
                    var r = t.buckets[i];
                    r instanceof SymbolBucket && e.addTileLayer(i, t.coord, t.sourceMaxZoom, r.symbolInstances)
                }
            }, Tile.prototype.removed = function(e) { var t = this; for (var i in t.buckets) { t.buckets[i] instanceof SymbolBucket && e.removeTileLayer(i, t.coord, t.sourceMaxZoom) } }, Tile.prototype.placeLayer = function(e, t, i, r) {
                var a = this.getBucket(i),
                    s = this.collisionBoxArray;
                if (a && a instanceof SymbolBucket && s) {
                    var o = t.transform.calculatePosMatrix(this.coord, this.sourceMaxZoom),
                        n = "map" === a.layers[0].layout["text-pitch-alignment"],
                        l = EXTENT / this.tileSize,
                        u = pixelsToTileUnits(this, 1, t.transform.zoom),
                        c = projection.getLabelPlaneMatrix(o, n, !0, t.transform, u);
                    performSymbolPlacement(a, t, e, t.transform.zoom, l, o, c, this.coord.id, r, s)
                }
            }, Tile.prototype.commitPlacement = function(e, t, i) {
                var r = this;
                for (var a in r.buckets) {
                    var s = r.buckets[a];
                    s instanceof SymbolBucket && (updateOpacities(s, t), s.sortFeatures(i))
                }
                this.featureIndex && this.featureIndex.setCollisionIndex(e)
            }, Tile.prototype.getBucket = function(e) { return this.buckets[e.id] }, Tile.prototype.upload = function(e) {
                var t = this;
                for (var i in t.buckets) {
                    var r = t.buckets[i];
                    r.uploaded || (r.upload(e), r.uploaded = !0)
                }
                this.iconAtlasImage && (this.iconAtlasTexture = new Texture(e, this.iconAtlasImage, e.RGBA), this.iconAtlasImage = null), this.glyphAtlasImage && (this.glyphAtlasTexture = new Texture(e, this.glyphAtlasImage, e.ALPHA), this.glyphAtlasImage = null)
            }, Tile.prototype.queryRenderedFeatures = function(e, t, i, r, a, s) {
                var o = this;
                if (!this.featureIndex) return {};
                var n = 0;
                for (var l in e) {
                    var u = o.getBucket(e[l]);
                    u && (n = Math.max(n, e[l].queryRadius(u)))
                }
                return this.featureIndex.query({ queryGeometry: t, scale: i, tileSize: this.tileSize, bearing: a, params: r, additionalRadius: n, tileSourceMaxZoom: this.sourceMaxZoom, collisionBoxArray: this.collisionBoxArray, sourceID: s }, e)
            }, Tile.prototype.querySourceFeatures = function(e, t) {
                var i = this;
                if (this.rawTileData) {
                    this.vtLayers || (this.vtLayers = new vt.VectorTile(new Protobuf(this.rawTileData)).layers);
                    var r = t ? t.sourceLayer : "",
                        a = this.vtLayers._geojsonTileLayer || this.vtLayers[r];
                    if (a)
                        for (var s = featureFilter(t && t.filter), o = { z: this.coord.z, x: this.coord.x, y: this.coord.y }, n = 0; n < a.length; n++) {
                            var l = a.feature(n);
                            if (s({ zoom: i.coord.z }, l)) {
                                var u = new GeoJSONFeature(l, i.coord.z, i.coord.x, i.coord.y);
                                u.tile = o, e.push(u)
                            }
                        }
                }
            }, Tile.prototype.clearMask = function() { this.segments && (this.segments.destroy(), delete this.segments), this.maskedBoundsBuffer && (this.maskedBoundsBuffer.destroy(), delete this.maskedBoundsBuffer), this.maskedIndexBuffer && (this.maskedIndexBuffer.destroy(), delete this.maskedIndexBuffer) }, Tile.prototype.setMask = function(e, t) {
                var i = this;
                if (!util.deepEqual(this.mask, e) && (this.mask = e, this.clearMask(), !util.deepEqual(e, { 0: !0 }))) {
                    var r = new RasterBoundsArray,
                        a = new TriangleIndexArray;
                    this.segments = new SegmentVector, this.segments.prepareSegment(0, r, a);
                    for (var s = Object.keys(e), o = 0; o < s.length; o++) {
                        var n = TileCoord.fromID(+s[o]),
                            l = EXTENT >> n.z,
                            u = new Point(n.x * l, n.y * l),
                            c = new Point(u.x + l, u.y + l),
                            h = i.segments.prepareSegment(4, r, a);
                        r.emplaceBack(u.x, u.y, u.x, u.y), r.emplaceBack(c.x, u.y, c.x, u.y), r.emplaceBack(u.x, c.y, u.x, c.y), r.emplaceBack(c.x, c.y, c.x, c.y);
                        var d = h.vertexLength;
                        a.emplaceBack(d, d + 1, d + 2), a.emplaceBack(d + 1, d + 2, d + 3), h.vertexLength += 4, h.primitiveLength += 2
                    }
                    this.maskedBoundsBuffer = new VertexBuffer(t, r), this.maskedIndexBuffer = new IndexBuffer(t, a)
                }
            }, Tile.prototype.hasData = function() { return "loaded" === this.state || "reloading" === this.state || "expired" === this.state }, Tile.prototype.setExpiryData = function(e) {
                var t = this.expirationTime;
                if (e.cacheControl) {
                    var i = util.parseCacheControl(e.cacheControl);
                    i["max-age"] && (this.expirationTime = Date.now() + 1e3 * i["max-age"])
                } else e.expires && (this.expirationTime = new Date(e.expires).getTime());
                if (this.expirationTime) {
                    var r = Date.now(),
                        a = !1;
                    if (this.expirationTime > r) a = !1;
                    else if (t)
                        if (this.expirationTime < t) a = !0;
                        else {
                            var s = this.expirationTime - t;
                            s ? this.expirationTime = r + Math.max(s, CLOCK_SKEW_RETRY_TIMEOUT) : a = !0
                        }
                    else a = !0;
                    a ? (this.expiredRequestCount++, this.state = "expired") : this.expiredRequestCount = 0
                }
            }, Tile.prototype.getExpiryTimeout = function() { if (this.expirationTime) return this.expiredRequestCount ? 1e3 * (1 << Math.min(this.expiredRequestCount - 1, 31)) : Math.min(this.expirationTime - (new Date).getTime(), Math.pow(2, 31) - 1) }, module.exports = Tile;
        }, { "../data/bucket": 51, "../data/bucket/symbol_bucket": 57, "../data/extent": 58, "../data/feature_index": 59, "../data/index_array_type": 60, "../data/raster_bounds_array": 64, "../data/segment": 65, "../gl/index_buffer": 71, "../gl/vertex_buffer": 72, "../render/texture": 93, "../source/pixels_to_tile_units": 104, "../style-spec/feature_filter": 146, "../symbol/collision_box": 203, "../symbol/collision_index": 205, "../symbol/projection": 211, "../symbol/symbol_placement": 215, "../util/util": 260, "../util/vectortile_to_geojson": 261, "./tile_coord": 112, "@mapbox/point-geometry": 2, "@mapbox/vector-tile": 6, "pbf": 38 }],
        111: [function(_dereq_, module, exports) {
            "use strict";
            var LngLatBounds = _dereq_("../geo/lng_lat_bounds"),
                clamp = _dereq_("../util/util").clamp,
                TileBounds = function(t, n, o) { this.bounds = LngLatBounds.convert(this.validateBounds(t)), this.minzoom = n || 0, this.maxzoom = o || 24 };
            TileBounds.prototype.validateBounds = function(t) { return Array.isArray(t) && 4 === t.length ? [Math.max(-180, t[0]), Math.max(-90, t[1]), Math.min(180, t[2]), Math.min(90, t[3])] : [-180, -90, 180, 90] }, TileBounds.prototype.contains = function(t, n) {
                var o = n ? Math.min(t.z, n) : t.z,
                    a = { minX: Math.floor(this.lngX(this.bounds.getWest(), o)), minY: Math.floor(this.latY(this.bounds.getNorth(), o)), maxX: Math.ceil(this.lngX(this.bounds.getEast(), o)), maxY: Math.ceil(this.latY(this.bounds.getSouth(), o)) };
                return t.x >= a.minX && t.x < a.maxX && t.y >= a.minY && t.y < a.maxY
            }, TileBounds.prototype.lngX = function(t, n) { return (t + 180) * (Math.pow(2, n) / 360) }, TileBounds.prototype.latY = function(t, n) {
                var o = clamp(Math.sin(Math.PI / 180 * t), -.9999, .9999),
                    a = Math.pow(2, n) / (2 * Math.PI);
                return Math.pow(2, n - 1) + .5 * Math.log((1 + o) / (1 - o)) * -a
            }, module.exports = TileBounds;
        }, { "../geo/lng_lat_bounds": 69, "../util/util": 260 }],
        112: [function(_dereq_, module, exports) {
            "use strict";

            function edge(t, i) {
                if (t.row > i.row) {
                    var o = t;
                    t = i, i = o
                }
                return { x0: t.column, y0: t.row, x1: i.column, y1: i.row, dx: i.column - t.column, dy: i.row - t.row }
            }

            function scanSpans(t, i, o, r, e) {
                var h = Math.max(o, Math.floor(i.y0)),
                    s = Math.min(r, Math.ceil(i.y1));
                if (t.x0 === i.x0 && t.y0 === i.y0 ? t.x0 + i.dy / t.dy * t.dx < i.x1 : t.x1 - i.dy / t.dy * t.dx < i.x0) {
                    var n = t;
                    t = i, i = n
                }
                for (var a = t.dx / t.dy, d = i.dx / i.dy, y = t.dx > 0, l = i.dx < 0, x = h; x < s; x++) {
                    var u = a * Math.max(0, Math.min(t.dy, x + y - t.y0)) + t.x0,
                        c = d * Math.max(0, Math.min(i.dy, x + l - i.y0)) + i.x0;
                    e(Math.floor(c), Math.ceil(u), x)
                }
            }

            function scanTriangle(t, i, o, r, e, h) {
                var s, n = edge(t, i),
                    a = edge(i, o),
                    d = edge(o, t);
                n.dy > a.dy && (s = n, n = a, a = s), n.dy > d.dy && (s = n, n = d, d = s), a.dy > d.dy && (s = a, a = d, d = s), n.dy && scanSpans(d, n, r, e, h), a.dy && scanSpans(d, a, r, e, h)
            }

            function getQuadkey(t, i, o) { for (var r, e = "", h = t; h > 0; h--) r = 1 << h - 1, e += (i & r ? 1 : 0) + (o & r ? 2 : 0); return e }
            var WhooTS = _dereq_("@mapbox/whoots-js"),
                Coordinate = _dereq_("../geo/coordinate"),
                TileCoord = function(t, i, o, r) {
                    (void 0 === r || isNaN(r)) && (r = 0), this.z = +t, this.x = +i, this.y = +o, this.w = +r, (r *= 2) < 0 && (r = -1 * r - 1);
                    var e = 1 << this.z;
                    this.id = 32 * (e * e * r + e * this.y + this.x) + this.z, this.posMatrix = null
                };
            TileCoord.prototype.toString = function() { return this.z + "/" + this.x + "/" + this.y }, TileCoord.prototype.toCoordinate = function(t) {
                var i = Math.min(this.z, void 0 === t ? this.z : t),
                    o = Math.pow(2, i),
                    r = this.y,
                    e = this.x + o * this.w;
                return new Coordinate(e, r, i)
            }, TileCoord.prototype.url = function(t, i, o) {
                var r = WhooTS.getTileBBox(this.x, this.y, this.z),
                    e = getQuadkey(this.z, this.x, this.y);
                return t[(this.x + this.y) % t.length].replace("{prefix}", (this.x % 16).toString(16) + (this.y % 16).toString(16)).replace("{z}", String(Math.min(this.z, i || this.z))).replace("{x}", String(this.x)).replace("{y}", String("tms" === o ? Math.pow(2, this.z) - this.y - 1 : this.y)).replace("{quadkey}", e).replace("{bbox-epsg-3857}", r)
            }, TileCoord.prototype.parent = function(t) { return 0 === this.z ? null : this.z > t ? new TileCoord(this.z - 1, this.x, this.y, this.w) : new TileCoord(this.z - 1, Math.floor(this.x / 2), Math.floor(this.y / 2), this.w) }, TileCoord.prototype.wrapped = function() { return new TileCoord(this.z, this.x, this.y, 0) }, TileCoord.prototype.isLessThan = function(t) { return this.w < t.w || !(this.w > t.w) && (this.z < t.z || !(this.z > t.z) && (this.x < t.x || !(this.x > t.x) && this.y < t.y)) }, TileCoord.prototype.children = function(t) {
                if (this.z >= t) return [new TileCoord(this.z + 1, this.x, this.y, this.w)];
                var i = this.z + 1,
                    o = 2 * this.x,
                    r = 2 * this.y;
                return [new TileCoord(i, o, r, this.w), new TileCoord(i, o + 1, r, this.w), new TileCoord(i, o, r + 1, this.w), new TileCoord(i, o + 1, r + 1, this.w)]
            }, TileCoord.prototype.scaledTo = function(t, i) { return this.z > i ? new TileCoord(t, this.x, this.y, this.w) : t <= this.z ? new TileCoord(t, this.x >> this.z - t, this.y >> this.z - t, this.w) : new TileCoord(t, this.x << t - this.z, this.y << t - this.z, this.w) }, TileCoord.prototype.isChildOf = function(t, i) {
                var o = Math.min(i, t.z),
                    r = Math.min(i, this.z);
                return 0 === t.z || t.z < this.z && t.x === this.x >> r - o && t.y === this.y >> r - o
            }, TileCoord.cover = function(t, i, o, r) {
                function e(t, i, e) {
                    var n, a, d, y;
                    if (e >= 0 && e <= h)
                        for (n = t; n < i; n++) a = Math.floor(n / h), d = (n % h + h) % h, 0 !== a && !0 !== r || (y = new TileCoord(o, d, e, a), s[y.id] = y)
                }
                void 0 === r && (r = !0);
                var h = 1 << t,
                    s = {};
                return scanTriangle(i[0], i[1], i[2], 0, h, e), scanTriangle(i[2], i[3], i[0], 0, h, e), Object.keys(s).map(function(t) { return s[t] })
            }, TileCoord.fromID = function(t) {
                var i = t % 32,
                    o = 1 << i,
                    r = (t - i) / 32,
                    e = r % o,
                    h = (r - e) / o % o,
                    s = Math.floor(r / (o * o));
                return s % 2 != 0 && (s = -1 * s - 1), s /= 2, new TileCoord(i, e, h, s)
            }, module.exports = TileCoord;
        }, { "../geo/coordinate": 67, "@mapbox/whoots-js": 10 }],
        113: [function(_dereq_, module, exports) {
            "use strict";
            var Evented = _dereq_("../util/evented"),
                util = _dereq_("../util/util"),
                loadTileJSON = _dereq_("./load_tilejson"),
                normalizeURL = _dereq_("../util/mapbox").normalizeTileURL,
                TileBounds = _dereq_("./tile_bounds"),
                ResourceType = _dereq_("../util/ajax").ResourceType,
                browser = _dereq_("../util/browser"),
                VectorTileSource = function(e) {
                    function t(t, i, o, r) {
                        if (e.call(this), this.id = t, this.dispatcher = o, this.type = "vector", this.minzoom = 0, this.maxzoom = 22, this.scheme = "xyz", this.tileSize = 512, this.reparseOverscaled = !0, this.isTileClipped = !0, util.extend(this, util.pick(i, ["url", "scheme", "tileSize"])), this._options = util.extend({ type: "vector" }, i), 512 !== this.tileSize) throw new Error("vector tile sources must have a tileSize of 512");
                        this.setEventedParent(r)
                    }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.load = function() {
                        var e = this;
                        this.fire("dataloading", { dataType: "source" }), loadTileJSON(this._options, this.map._transformRequest, function(t, i) { t ? e.fire("error", t) : i && (util.extend(e, i), i.bounds && (e.tileBounds = new TileBounds(i.bounds, e.minzoom, e.maxzoom)), e.fire("data", { dataType: "source", sourceDataType: "metadata" }), e.fire("data", { dataType: "source", sourceDataType: "content" })) })
                    }, t.prototype.hasTile = function(e) { return !this.tileBounds || this.tileBounds.contains(e, this.maxzoom) }, t.prototype.onAdd = function(e) { this.map = e, this.load() }, t.prototype.serialize = function() { return util.extend({}, this._options) }, t.prototype.loadTile = function(e, t) {
                        function i(i, o) { return e.aborted ? t(null) : i ? t(i) : (this.map._refreshExpiredTiles && e.setExpiryData(o), e.loadVectorData(o, this.map.painter), t(null), void(e.reloadCallback && (this.loadTile(e, e.reloadCallback), e.reloadCallback = null))) }
                        var o = e.coord.z > this.maxzoom ? Math.pow(2, e.coord.z - this.maxzoom) : 1,
                            r = normalizeURL(e.coord.url(this.tiles, this.maxzoom, this.scheme), this.url),
                            s = { request: this.map._transformRequest(r, ResourceType.Tile), uid: e.uid, coord: e.coord, zoom: e.coord.z, tileSize: this.tileSize * o, type: this.type, source: this.id, pixelRatio: browser.devicePixelRatio, overscaling: o, showCollisionBoxes: this.map.showCollisionBoxes };
                        void 0 === e.workerID || "expired" === e.state ? e.workerID = this.dispatcher.send("loadTile", s, i.bind(this)) : "loading" === e.state ? e.reloadCallback = t : this.dispatcher.send("reloadTile", s, i.bind(this), e.workerID)
                    }, t.prototype.abortTile = function(e) { this.dispatcher.send("abortTile", { uid: e.uid, type: this.type, source: this.id }, void 0, e.workerID) }, t.prototype.unloadTile = function(e) { e.unloadVectorData(), this.dispatcher.send("removeTile", { uid: e.uid, type: this.type, source: this.id }, void 0, e.workerID) }, t
                }(Evented);
            module.exports = VectorTileSource;
        }, { "../util/ajax": 239, "../util/browser": 240, "../util/evented": 248, "../util/mapbox": 255, "../util/util": 260, "./load_tilejson": 103, "./tile_bounds": 111 }],
        114: [function(_dereq_, module, exports) {
            "use strict";

            function loadVectorTile(e, r) { var o = ajax.getArrayBuffer(e.request, function(e, o) { e ? r(e) : o && r(null, { vectorTile: new vt.VectorTile(new Protobuf(o.data)), rawData: o.data, cacheControl: o.cacheControl, expires: o.expires }) }); return function() { o.abort(), r() } }
            var ajax = _dereq_("../util/ajax"),
                vt = _dereq_("@mapbox/vector-tile"),
                Protobuf = _dereq_("pbf"),
                WorkerTile = _dereq_("./worker_tile"),
                util = _dereq_("../util/util"),
                VectorTileWorkerSource = function(e, r, o) { this.actor = e, this.layerIndex = r, this.loadVectorData = o || loadVectorTile, this.loading = {}, this.loaded = {} };
            VectorTileWorkerSource.prototype.loadTile = function(e, r) {
                var o = this,
                    t = e.source,
                    i = e.uid;
                this.loading[t] || (this.loading[t] = {});
                var a = this.loading[t][i] = new WorkerTile(e);
                a.abort = this.loadVectorData(e, function(e, l) {
                    if (delete o.loading[t][i], e || !l) return r(e);
                    var c = l.rawData,
                        n = {};
                    l.expires && (n.expires = l.expires), l.cacheControl && (n.cacheControl = l.cacheControl), a.vectorTile = l.vectorTile, a.parse(l.vectorTile, o.layerIndex, o.actor, function(e, o, t) {
                        if (e || !o) return r(e);
                        r(null, util.extend({ rawTileData: c }, o, n), t)
                    }), o.loaded[t] = o.loaded[t] || {}, o.loaded[t][i] = a
                })
            }, VectorTileWorkerSource.prototype.reloadTile = function(e, r) {
                function o(e, o) {
                    if (this.reloadCallback) {
                        var t = this.reloadCallback;
                        delete this.reloadCallback, this.parse(this.vectorTile, a.layerIndex, a.actor, t)
                    }
                    r(e, o)
                }
                var t = this.loaded[e.source],
                    i = e.uid,
                    a = this;
                if (t && t[i]) {
                    var l = t[i];
                    l.showCollisionBoxes = e.showCollisionBoxes, "parsing" === l.status ? l.reloadCallback = r : "done" === l.status && l.parse(l.vectorTile, this.layerIndex, this.actor, o.bind(l))
                }
            }, VectorTileWorkerSource.prototype.abortTile = function(e, r) {
                var o = this.loading[e.source],
                    t = e.uid;
                o && o[t] && o[t].abort && (o[t].abort(), delete o[t]), r()
            }, VectorTileWorkerSource.prototype.removeTile = function(e, r) {
                var o = this.loaded[e.source],
                    t = e.uid;
                o && o[t] && delete o[t], r()
            }, module.exports = VectorTileWorkerSource;
        }, { "../util/ajax": 239, "../util/util": 260, "./worker_tile": 117, "@mapbox/vector-tile": 6, "pbf": 38 }],
        115: [function(_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"),
                ImageSource = _dereq_("./image_source"),
                VideoSource = function(e) {
                    function t(t, o, i, r) { e.call(this, t, o, i, r), this.roundZoom = !0, this.type = "video", this.options = o }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.load = function() {
                        var e = this,
                            t = this.options;
                        this.urls = t.urls, ajax.getVideo(t.urls, function(t, o) {
                            if (t) e.fire("error", { error: t });
                            else if (o) {
                                e.video = o, e.video.loop = !0;
                                var i;
                                e.video.addEventListener("playing", function() { i = e.map.style.animationLoop.set(1 / 0), e.map._rerender() }), e.video.addEventListener("pause", function() { e.map.style.animationLoop.cancel(i) }), e.map && e.video.play(), e._finishLoading()
                            }
                        })
                    }, t.prototype.getVideo = function() { return this.video }, t.prototype.onAdd = function(e) { this.map || (this.map = e, this.load(), this.video && (this.video.play(), this.setCoordinates(this.coordinates))) }, t.prototype.prepare = function() { 0 === Object.keys(this.tiles).length || this.video.readyState < 2 || this._prepareImage(this.map.painter.gl, this.video) }, t.prototype.serialize = function() { return { type: "video", urls: this.urls, coordinates: this.coordinates } }, t
                }(ImageSource);
            module.exports = VideoSource;
        }, { "../util/ajax": 239, "./image_source": 102 }],
        116: [function(_dereq_, module, exports) {
            "use strict";
            var Actor = _dereq_("../util/actor"),
                StyleLayerIndex = _dereq_("../style/style_layer_index"),
                VectorTileWorkerSource = _dereq_("./vector_tile_worker_source"),
                GeoJSONWorkerSource = _dereq_("./geojson_worker_source"),
                globalRTLTextPlugin = _dereq_("./rtl_text_plugin"),
                Worker = function(e) {
                    var r = this;
                    this.self = e, this.actor = new Actor(e, this), this.layerIndexes = {}, this.workerSourceTypes = { vector: VectorTileWorkerSource, geojson: GeoJSONWorkerSource }, this.workerSources = {}, this.self.registerWorkerSource = function(e, o) {
                        if (r.workerSourceTypes[e]) throw new Error('Worker source with name "' + e + '" already registered.');
                        r.workerSourceTypes[e] = o
                    }, this.self.registerRTLTextPlugin = function(e) {
                        if (globalRTLTextPlugin.applyArabicShaping || globalRTLTextPlugin.processBidirectionalText) throw new Error("RTL text plugin already registered.");
                        globalRTLTextPlugin.applyArabicShaping = e.applyArabicShaping, globalRTLTextPlugin.processBidirectionalText = e.processBidirectionalText
                    }
                };
            Worker.prototype.setLayers = function(e, r, o) { this.getLayerIndex(e).replace(r), o() }, Worker.prototype.updateLayers = function(e, r, o) { this.getLayerIndex(e).update(r.layers, r.removedIds), o() }, Worker.prototype.loadTile = function(e, r, o) { this.getWorkerSource(e, r.type).loadTile(r, o) }, Worker.prototype.reloadTile = function(e, r, o) { this.getWorkerSource(e, r.type).reloadTile(r, o) }, Worker.prototype.abortTile = function(e, r, o) { this.getWorkerSource(e, r.type).abortTile(r, o) }, Worker.prototype.removeTile = function(e, r, o) { this.getWorkerSource(e, r.type).removeTile(r, o) }, Worker.prototype.removeSource = function(e, r, o) {
                var t = this.getWorkerSource(e, r.type);
                void 0 !== t.removeSource ? t.removeSource(r, o) : o()
            }, Worker.prototype.loadWorkerSource = function(e, r, o) { try { this.self.importScripts(r.url), o() } catch (e) { o(e) } }, Worker.prototype.loadRTLTextPlugin = function(e, r, o) { try { globalRTLTextPlugin.applyArabicShaping || globalRTLTextPlugin.processBidirectionalText || (this.self.importScripts(r), globalRTLTextPlugin.applyArabicShaping && globalRTLTextPlugin.processBidirectionalText || o(new Error("RTL Text Plugin failed to import scripts from " + r))) } catch (e) { o(e) } }, Worker.prototype.getLayerIndex = function(e) { var r = this.layerIndexes[e]; return r || (r = this.layerIndexes[e] = new StyleLayerIndex), r }, Worker.prototype.getWorkerSource = function(e, r) {
                var o = this;
                if (this.workerSources[e] || (this.workerSources[e] = {}), !this.workerSources[e][r]) {
                    var t = { send: function(r, t, i, l) { o.actor.send(r, t, i, l, e) } };
                    this.workerSources[e][r] = new this.workerSourceTypes[r](t, this.getLayerIndex(e))
                }
                return this.workerSources[e][r]
            }, module.exports = function(e) { return new Worker(e) };
        }, { "../style/style_layer_index": 197, "../util/actor": 238, "./geojson_worker_source": 100, "./rtl_text_plugin": 107, "./vector_tile_worker_source": 114 }],
        117: [function(_dereq_, module, exports) {
            "use strict";

            function recalculateLayers(e, r) { for (var o = 0, i = e.layers; o < i.length; o += 1) { i[o].recalculate(r) } }

            function serializeBuckets(e, r) { return e.filter(function(e) { return !e.isEmpty() }).map(function(e) { return e.serialize(r) }) }
            var FeatureIndex = _dereq_("../data/feature_index"),
                ref = _dereq_("../symbol/symbol_layout"),
                performSymbolLayout = ref.performSymbolLayout,
                CollisionBoxArray = _dereq_("../symbol/collision_box"),
                DictionaryCoder = _dereq_("../util/dictionary_coder"),
                SymbolBucket = _dereq_("../data/bucket/symbol_bucket"),
                util = _dereq_("../util/util"),
                ref$1 = _dereq_("../render/image_atlas"),
                makeImageAtlas = ref$1.makeImageAtlas,
                ref$2 = _dereq_("../render/glyph_atlas"),
                makeGlyphAtlas = ref$2.makeGlyphAtlas,
                WorkerTile = function(e) { this.coord = e.coord, this.uid = e.uid, this.zoom = e.zoom, this.pixelRatio = e.pixelRatio, this.tileSize = e.tileSize, this.source = e.source, this.overscaling = e.overscaling, this.showCollisionBoxes = e.showCollisionBoxes };
            WorkerTile.prototype.parse = function(e, r, o, i) {
                function a() {
                    var e = this;
                    if (B) return i(B);
                    if (A && I) {
                        var r = makeGlyphAtlas(A),
                            o = makeImageAtlas(I);
                        for (var a in n) {
                            var t = n[a];
                            t instanceof SymbolBucket && (recalculateLayers(t, e.zoom), performSymbolLayout(t, A, r.positions, I, o.positions, e.showCollisionBoxes))
                        }
                        this.status = "done";
                        var s = [r.image.data.buffer, o.image.data.buffer];
                        i(null, { buckets: serializeBuckets(util.values(n), s), featureIndex: l.serialize(s), collisionBoxArray: this.collisionBoxArray.serialize(), glyphAtlasImage: r.image, iconAtlasImage: o.image }, s)
                    }
                }
                var t = this;
                this.status = "parsing", this.data = e, this.collisionBoxArray = new CollisionBoxArray;
                var s = new DictionaryCoder(Object.keys(e.layers).sort()),
                    l = new FeatureIndex(this.coord, this.overscaling);
                l.bucketLayerIDs = [];
                var n = {},
                    u = { featureIndex: l, iconDependencies: {}, glyphDependencies: {} },
                    c = r.familiesBySource[this.source];
                for (var m in c) {
                    var y = e.layers[m];
                    if (y) {
                        1 === y.version && util.warnOnce('Vector tile source "' + t.source + '" layer "' + m + '" does not use vector tile spec v2 and therefore may have some rendering errors.');
                        for (var f = s.encode(m), h = [], d = 0; d < y.length; d++) {
                            var p = y.feature(d);
                            h.push({ feature: p, index: d, sourceLayerIndex: f })
                        }
                        for (var g = 0, v = c[m]; g < v.length; g += 1) {
                            var x = v[g],
                                b = x[0];
                            if (!(b.minzoom && t.zoom < Math.floor(b.minzoom)) && !(b.maxzoom && t.zoom >= b.maxzoom || b.layout && "none" === b.layout.visibility)) { for (var k = 0, z = x; k < z.length; k += 1) { z[k].recalculate(t.zoom) }(n[b.id] = b.createBucket({ index: l.bucketLayerIDs.length, layers: x, zoom: t.zoom, pixelRatio: t.pixelRatio, overscaling: t.overscaling, collisionBoxArray: t.collisionBoxArray })).populate(h, u), l.bucketLayerIDs.push(x.map(function(e) { return e.id })) }
                        }
                    }
                }
                var B, A, I, D = util.mapObject(u.glyphDependencies, function(e) { return Object.keys(e).map(Number) });
                Object.keys(D).length ? o.send("getGlyphs", { uid: this.uid, stacks: D }, function(e, r) { B || (B = e, A = r, a.call(t)) }) : A = {};
                var L = Object.keys(u.iconDependencies);
                L.length ? o.send("getImages", { icons: L }, function(e, r) { B || (B = e, I = r, a.call(t)) }) : I = {}, a.call(this)
            }, module.exports = WorkerTile;
        }, { "../data/bucket/symbol_bucket": 57, "../data/feature_index": 59, "../render/glyph_atlas": 84, "../render/image_atlas": 86, "../symbol/collision_box": 203, "../symbol/symbol_layout": 214, "../util/dictionary_coder": 245, "../util/util": 260 }],
        118: [function(_dereq_, module, exports) {
            "use strict";

            function deref(r, e) { var f = {}; for (var t in r) "ref" !== t && (f[t] = r[t]); return refProperties.forEach(function(r) { r in e && (f[r] = e[r]) }), f }

            function derefLayers(r) { r = r.slice(); for (var e = Object.create(null), f = 0; f < r.length; f++) e[r[f].id] = r[f]; for (var t = 0; t < r.length; t++) "ref" in r[t] && (r[t] = deref(r[t], e[r[t].ref])); return r }
            var refProperties = _dereq_("./util/ref_properties");
            module.exports = derefLayers;
        }, { "./util/ref_properties": 156 }],
        119: [function(_dereq_, module, exports) {
            "use strict";

            function diffSources(e, r, o, a) { e = e || {}, r = r || {}; var s; for (s in e) e.hasOwnProperty(s) && (r.hasOwnProperty(s) || (o.push({ command: operations.removeSource, args: [s] }), a[s] = !0)); for (s in r) r.hasOwnProperty(s) && (e.hasOwnProperty(s) ? isEqual(e[s], r[s]) || ("geojson" === e[s].type && "geojson" === r[s].type ? o.push({ command: operations.setGeoJSONSourceData, args: [s, r[s].data] }) : (o.push({ command: operations.removeSource, args: [s] }), o.push({ command: operations.addSource, args: [s, r[s]] }), a[s] = !0)) : o.push({ command: operations.addSource, args: [s, r[s]] })) }

            function diffLayerPropertyChanges(e, r, o, a, s, t) { e = e || {}, r = r || {}; var n; for (n in e) e.hasOwnProperty(n) && (isEqual(e[n], r[n]) || o.push({ command: t, args: [a, n, r[n], s] })); for (n in r) r.hasOwnProperty(n) && !e.hasOwnProperty(n) && (isEqual(e[n], r[n]) || o.push({ command: t, args: [a, n, r[n], s] })) }

            function pluckId(e) { return e.id }

            function indexById(e, r) { return e[r.id] = r, e }

            function diffLayers(e, r, o) {
                e = e || [], r = r || [];
                var a, s, t, n, i, p, m, u = e.map(pluckId),
                    l = r.map(pluckId),
                    y = e.reduce(indexById, {}),
                    c = r.reduce(indexById, {}),
                    d = u.slice(),
                    h = Object.create(null);
                for (a = 0, s = 0; a < u.length; a++) t = u[a], c.hasOwnProperty(t) ? s++ : (o.push({ command: operations.removeLayer, args: [t] }), d.splice(d.indexOf(t, s), 1));
                for (a = 0, s = 0; a < l.length; a++) t = l[l.length - 1 - a], d[d.length - 1 - a] !== t && (y.hasOwnProperty(t) ? (o.push({ command: operations.removeLayer, args: [t] }), d.splice(d.lastIndexOf(t, d.length - s), 1)) : s++, p = d[d.length - a], o.push({ command: operations.addLayer, args: [c[t], p] }), d.splice(d.length - a, 0, t), h[t] = !0);
                for (a = 0; a < l.length; a++)
                    if (t = l[a], n = y[t], i = c[t], !h[t] && !isEqual(n, i))
                        if (isEqual(n.source, i.source) && isEqual(n["source-layer"], i["source-layer"]) && isEqual(n.type, i.type)) { diffLayerPropertyChanges(n.layout, i.layout, o, t, null, operations.setLayoutProperty), diffLayerPropertyChanges(n.paint, i.paint, o, t, null, operations.setPaintProperty), isEqual(n.filter, i.filter) || o.push({ command: operations.setFilter, args: [t, i.filter] }), isEqual(n.minzoom, i.minzoom) && isEqual(n.maxzoom, i.maxzoom) || o.push({ command: operations.setLayerZoomRange, args: [t, i.minzoom, i.maxzoom] }); for (m in n) n.hasOwnProperty(m) && "layout" !== m && "paint" !== m && "filter" !== m && "metadata" !== m && "minzoom" !== m && "maxzoom" !== m && (0 === m.indexOf("paint.") ? diffLayerPropertyChanges(n[m], i[m], o, t, m.slice(6), operations.setPaintProperty) : isEqual(n[m], i[m]) || o.push({ command: operations.setLayerProperty, args: [t, m, i[m]] })); for (m in i) i.hasOwnProperty(m) && !n.hasOwnProperty(m) && "layout" !== m && "paint" !== m && "filter" !== m && "metadata" !== m && "minzoom" !== m && "maxzoom" !== m && (0 === m.indexOf("paint.") ? diffLayerPropertyChanges(n[m], i[m], o, t, m.slice(6), operations.setPaintProperty) : isEqual(n[m], i[m]) || o.push({ command: operations.setLayerProperty, args: [t, m, i[m]] })) } else o.push({ command: operations.removeLayer, args: [t] }), p = d[d.lastIndexOf(t) + 1], o.push({ command: operations.addLayer, args: [i, p] })
            }

            function diffStyles(e, r) {
                if (!e) return [{ command: operations.setStyle, args: [r] }];
                var o = [];
                try {
                    if (!isEqual(e.version, r.version)) return [{ command: operations.setStyle, args: [r] }];
                    isEqual(e.center, r.center) || o.push({ command: operations.setCenter, args: [r.center] }), isEqual(e.zoom, r.zoom) || o.push({ command: operations.setZoom, args: [r.zoom] }), isEqual(e.bearing, r.bearing) || o.push({ command: operations.setBearing, args: [r.bearing] }), isEqual(e.pitch, r.pitch) || o.push({ command: operations.setPitch, args: [r.pitch] }), isEqual(e.sprite, r.sprite) || o.push({ command: operations.setSprite, args: [r.sprite] }), isEqual(e.glyphs, r.glyphs) || o.push({ command: operations.setGlyphs, args: [r.glyphs] }), isEqual(e.transition, r.transition) || o.push({ command: operations.setTransition, args: [r.transition] }), isEqual(e.light, r.light) || o.push({ command: operations.setLight, args: [r.light] });
                    var a = {},
                        s = [];
                    diffSources(e.sources, r.sources, s, a);
                    var t = [];
                    e.layers && e.layers.forEach(function(e) { a[e.source] ? o.push({ command: operations.removeLayer, args: [e.id] }) : t.push(e) }), o = o.concat(s), diffLayers(t, r.layers, o)
                } catch (e) { console.warn("Unable to compute style diff:", e), o = [{ command: operations.setStyle, args: [r] }] }
                return o
            }
            var isEqual = _dereq_("lodash.isequal"),
                operations = { setStyle: "setStyle", addLayer: "addLayer", removeLayer: "removeLayer", setPaintProperty: "setPaintProperty", setLayoutProperty: "setLayoutProperty", setFilter: "setFilter", addSource: "addSource", removeSource: "removeSource", setGeoJSONSourceData: "setGeoJSONSourceData", setLayerZoomRange: "setLayerZoomRange", setLayerProperty: "setLayerProperty", setCenter: "setCenter", setZoom: "setZoom", setBearing: "setBearing", setPitch: "setPitch", setSprite: "setSprite", setGlyphs: "setGlyphs", setTransition: "setTransition", setLight: "setLight" };
            module.exports = diffStyles, module.exports.operations = operations;
        }, { "lodash.isequal": 34 }],
        120: [function(_dereq_, module, exports) {
            "use strict";

            function ValidationError(r, i) {
                for (var t = [], o = arguments.length - 2; o-- > 0;) t[o] = arguments[o + 2];
                this.message = (r ? r + ": " : "") + format.apply(format, t), null !== i && void 0 !== i && i.__line__ && (this.line = i.__line__)
            }
            var format = _dereq_("util").format;
            module.exports = ValidationError;
        }, { "util": 45 }],
        121: [function(_dereq_, module, exports) {
            "use strict";

            function varargs(r) { return { type: r } }

            function stringifySignature(r) { return Array.isArray(r) ? "(" + r.map(toString).join(", ") + ")" : "(" + toString(r.type) + "...)" }
            var ref = _dereq_("./types"),
                toString = ref.toString,
                ParsingContext = _dereq_("./parsing_context"),
                EvaluationContext = _dereq_("./evaluation_context"),
                CompoundExpression = function(r, n, e, t) { this.name = r, this.type = n, this._evaluate = e, this.args = t };
            CompoundExpression.prototype.evaluate = function(r) { return this._evaluate(r, this.args) }, CompoundExpression.prototype.eachChild = function(r) { this.args.forEach(r) }, CompoundExpression.parse = function(r, n) {
                var e = r[0],
                    t = CompoundExpression.definitions[e];
                if (!t) return n.error('Unknown expression "' + e + '". If you wanted a literal array, use ["literal", [...]].', 0);
                for (var o = Array.isArray(t) ? t[0] : t.type, i = Array.isArray(t) ? [
                        [t[1], t[2]]
                    ] : t.overloads, s = i.filter(function(n) { var e = n[0]; return !Array.isArray(e) || e.length === r.length - 1 }), a = [], u = 1; u < r.length; u++) {
                    var p = r[u],
                        l = void 0;
                    if (1 === s.length) {
                        var g = s[0][0];
                        l = Array.isArray(g) ? g[u - 1] : g.type
                    }
                    var f = n.parse(p, 1 + a.length, l);
                    if (!f) return null;
                    a.push(f)
                }
                for (var y = null, h = 0, d = s; h < d.length; h += 1) {
                    var v = d[h],
                        c = v[0],
                        x = v[1];
                    if (y = new ParsingContext(n.definitions, n.path, null, n.scope), Array.isArray(c) && c.length !== a.length) y.error("Expected " + c.length + " arguments, but found " + a.length + " instead.");
                    else {
                        for (var m = 0; m < a.length; m++) {
                            var C = Array.isArray(c) ? c[m] : c.type,
                                E = a[m];
                            y.concat(m + 1).checkSubtype(C, E.type)
                        }
                        if (0 === y.errors.length) return new CompoundExpression(e, o, x, a)
                    }
                }
                if (1 === s.length) n.errors.push.apply(n.errors, y.errors);
                else {
                    var A = s.length ? s : i,
                        S = A.map(function(r) { return stringifySignature(r[0]) }).join(" | "),
                        w = a.map(function(r) { return toString(r.type) }).join(", ");
                    n.error("Expected arguments of type " + S + ", but found (" + w + ") instead.")
                }
                return null
            }, CompoundExpression.register = function(r, n) { CompoundExpression.definitions = n; for (var e in n) r[e] = CompoundExpression }, module.exports = { CompoundExpression: CompoundExpression, varargs: varargs };
        }, { "./evaluation_context": 136, "./parsing_context": 139, "./types": 144 }],
        122: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                toString = ref.toString,
                array = ref.array,
                ValueType = ref.ValueType,
                StringType = ref.StringType,
                NumberType = ref.NumberType,
                BooleanType = ref.BooleanType,
                checkSubtype = ref.checkSubtype,
                ref$1 = _dereq_("../values"),
                typeOf = ref$1.typeOf,
                RuntimeError = _dereq_("../runtime_error"),
                types = { string: StringType, number: NumberType, boolean: BooleanType },
                ArrayAssertion = function(e, r) { this.type = e, this.input = r };
            ArrayAssertion.parse = function(e, r) {
                if (e.length < 2 || e.length > 4) return r.error("Expected 1, 2, or 3 arguments, but found " + (e.length - 1) + " instead.");
                var t, n;
                if (e.length > 2) {
                    var i = e[1];
                    if ("string" != typeof i || !(i in types)) return r.error('The item type argument of "array" must be one of string, number, boolean', 1);
                    t = types[i]
                } else t = ValueType;
                if (e.length > 3) {
                    if ("number" != typeof e[2] || e[2] < 0 || e[2] !== Math.floor(e[2])) return r.error('The length argument to "array" must be a positive integer literal', 2);
                    n = e[2]
                }
                var o = array(t, n),
                    a = r.parse(e[e.length - 1], e.length - 1, ValueType);
                return a ? new ArrayAssertion(o, a) : null
            }, ArrayAssertion.prototype.evaluate = function(e) { var r = this.input.evaluate(e); if (checkSubtype(this.type, typeOf(r))) throw new RuntimeError("Expected value to be of type " + toString(this.type) + ", but found " + toString(typeOf(r)) + " instead."); return r }, ArrayAssertion.prototype.eachChild = function(e) { e(this.input) }, module.exports = ArrayAssertion;
        }, { "../runtime_error": 141, "../types": 144, "../values": 145 }],
        123: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                ObjectType = ref.ObjectType,
                ValueType = ref.ValueType,
                StringType = ref.StringType,
                NumberType = ref.NumberType,
                BooleanType = ref.BooleanType,
                RuntimeError = _dereq_("../runtime_error"),
                ref$1 = _dereq_("../types"),
                checkSubtype = ref$1.checkSubtype,
                toString = ref$1.toString,
                ref$2 = _dereq_("../values"),
                typeOf = ref$2.typeOf,
                types = { string: StringType, number: NumberType, boolean: BooleanType, object: ObjectType },
                Assertion = function(e, r) { this.type = e, this.args = r };
            Assertion.parse = function(e, r) {
                if (e.length < 2) return r.error("Expected at least one argument.");
                for (var t = e[0], n = types[t], o = [], p = 1; p < e.length; p++) {
                    var u = r.parse(e[p], p, ValueType);
                    if (!u) return null;
                    o.push(u)
                }
                return new Assertion(n, o)
            }, Assertion.prototype.evaluate = function(e) { for (var r = this, t = 0; t < this.args.length; t++) { var n = r.args[t].evaluate(e); if (!checkSubtype(r.type, typeOf(n))) return n; if (t === r.args.length - 1) throw new RuntimeError("Expected value to be of type " + toString(r.type) + ", but found " + toString(typeOf(n)) + " instead.") } return null }, Assertion.prototype.eachChild = function(e) { this.args.forEach(e) }, module.exports = Assertion;
        }, { "../runtime_error": 141, "../types": 144, "../values": 145 }],
        124: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                array = ref.array,
                ValueType = ref.ValueType,
                NumberType = ref.NumberType,
                RuntimeError = _dereq_("../runtime_error"),
                At = function(e, r, t) { this.type = e, this.index = r, this.input = t };
            At.parse = function(e, r) {
                if (3 !== e.length) return r.error("Expected 2 arguments, but found " + (e.length - 1) + " instead.");
                var t = r.parse(e[1], 1, NumberType),
                    n = r.parse(e[2], 2, array(r.expectedType || ValueType));
                if (!t || !n) return null;
                var u = n.type;
                return new At(u.itemType, t, n)
            }, At.prototype.evaluate = function(e) {
                var r = this.index.evaluate(e),
                    t = this.input.evaluate(e);
                if (r < 0 || r >= t.length) throw new RuntimeError("Array index out of bounds: " + r + " > " + t.length + ".");
                if (r !== Math.floor(r)) throw new RuntimeError("Array index must be an integer, but found " + r + " instead.");
                return t[r]
            }, At.prototype.eachChild = function(e) { e(this.index), e(this.input) }, module.exports = At;
        }, { "../runtime_error": 141, "../types": 144 }],
        125: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                BooleanType = ref.BooleanType,
                Case = function(e, r, t) { this.type = e, this.branches = r, this.otherwise = t };
            Case.parse = function(e, r) {
                if (e.length < 4) return r.error("Expected at least 3 arguments, but found only " + (e.length - 1) + ".");
                if (e.length % 2 != 0) return r.error("Expected an odd number of arguments.");
                var t;
                r.expectedType && "value" !== r.expectedType.kind && (t = r.expectedType);
                for (var a = [], n = 1; n < e.length - 1; n += 2) {
                    var s = r.parse(e[n], n, BooleanType);
                    if (!s) return null;
                    var o = r.parse(e[n + 1], n + 1, t);
                    if (!o) return null;
                    a.push([s, o]), t = t || o.type
                }
                var u = r.parse(e[e.length - 1], e.length - 1, t);
                return u ? new Case(t, a, u) : null
            }, Case.prototype.evaluate = function(e) {
                for (var r = this, t = 0, a = r.branches; t < a.length; t += 1) {
                    var n = a[t],
                        s = n[0],
                        o = n[1];
                    if (s.evaluate(e)) return o.evaluate(e)
                }
                return this.otherwise.evaluate(e)
            }, Case.prototype.eachChild = function(e) {
                for (var r = this, t = 0, a = r.branches; t < a.length; t += 1) {
                    var n = a[t],
                        s = n[0],
                        o = n[1];
                    e(s), e(o)
                }
                e(this.otherwise)
            }, module.exports = Case;
        }, { "../types": 144 }],
        126: [function(_dereq_, module, exports) {
            "use strict";
            var Coalesce = function(e, t) { this.type = e, this.args = t };
            Coalesce.parse = function(e, t) {
                if (e.length < 2) return t.error("Expectected at least one argument.");
                var r = null;
                t.expectedType && "value" !== t.expectedType.kind && (r = t.expectedType);
                for (var a = [], l = 0, n = e.slice(1); l < n.length; l += 1) {
                    var o = n[l],
                        s = t.parse(o, 1 + a.length, r);
                    if (!s) return null;
                    r = r || s.type, a.push(s)
                }
                return new Coalesce(r, a)
            }, Coalesce.prototype.evaluate = function(e) { for (var t = this, r = null, a = 0, l = t.args; a < l.length; a += 1) { if (null !== (r = l[a].evaluate(e))) break } return r }, Coalesce.prototype.eachChild = function(e) { this.args.forEach(e) }, module.exports = Coalesce;
        }, {}],
        127: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                ColorType = ref.ColorType,
                ValueType = ref.ValueType,
                NumberType = ref.NumberType,
                ref$1 = _dereq_("../values"),
                Color = ref$1.Color,
                validateRGBA = ref$1.validateRGBA,
                RuntimeError = _dereq_("../runtime_error"),
                types = { "to-number": NumberType, "to-color": ColorType },
                Coercion = function(r, e) { this.type = r, this.args = e };
            Coercion.parse = function(r, e) {
                if (r.length < 2) return e.error("Expected at least one argument.");
                for (var o = r[0], t = types[o], n = [], i = 1; i < r.length; i++) {
                    var a = e.parse(r[i], i, ValueType);
                    if (!a) return null;
                    n.push(a)
                }
                return new Coercion(t, n)
            }, Coercion.prototype.evaluate = function(r) { var e = this; if ("color" === this.type.kind) { for (var o, t, n = 0, i = e.args; n < i.length; n += 1) { if (o = i[n].evaluate(r), t = null, "string" == typeof o) { var a = r.parseColor(o); if (a) return a } else if (Array.isArray(o) && !(t = o.length < 3 || o.length > 4 ? "Invalid rbga value " + JSON.stringify(o) + ": expected an array containing either three or four numeric values." : validateRGBA(o[0], o[1], o[2], o[3]))) return new Color(o[0] / 255, o[1] / 255, o[2] / 255, o[3]) } throw new RuntimeError(t || "Could not parse color from value '" + ("string" == typeof o ? o : JSON.stringify(o)) + "'") } for (var u = null, l = 0, s = e.args; l < s.length; l += 1) { if (null !== (u = s[l].evaluate(r))) { var f = Number(u); if (!isNaN(f)) return f } } throw new RuntimeError("Could not convert " + JSON.stringify(u) + " to number.") }, Coercion.prototype.eachChild = function(r) { this.args.forEach(r) }, module.exports = Coercion;
        }, { "../runtime_error": 141, "../types": 144, "../values": 145 }],
        128: [function(_dereq_, module, exports) {
            "use strict";
            var Curve = function() {};
            Curve.parse = function(e, r) {
                var t = e[1],
                    n = e[2],
                    i = e.slice(3);
                return "step" === t[0] ? r.error('"curve" has been replaced by "step" and "interpolate". Replace this expression with ' + JSON.stringify(["step", n].concat(i)), 0) : r.error('"curve" has been replaced by "step" and "interpolate". Replace this expression with ' + JSON.stringify(["interpolate", t, n].concat(i)), 0)
            }, Curve.prototype.evaluate = function() {}, Curve.prototype.eachChild = function() {}, module.exports = Curve;
        }, {}],
        129: [function(_dereq_, module, exports) {
            "use strict";

            function rgba(e, r) {
                var t = r[0],
                    a = r[1],
                    n = r[2],
                    u = r[3];
                t = t.evaluate(e), a = a.evaluate(e), n = n.evaluate(e), u = u && u.evaluate(e);
                var o = validateRGBA(t, a, n, u);
                if (o) throw new RuntimeError(o);
                return new Color(t / 255, a / 255, n / 255, u)
            }

            function has(e, r) { return e in r }

            function get(e, r) { var t = r[e]; return void 0 === t ? null : t }

            function length(e, r) { return r[0].evaluate(e).length }

            function eq(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) === a.evaluate(e)
            }

            function ne(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) !== a.evaluate(e)
            }

            function lt(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) < a.evaluate(e)
            }

            function gt(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) > a.evaluate(e)
            }

            function lteq(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) <= a.evaluate(e)
            }

            function gteq(e, r) {
                var t = r[0],
                    a = r[1];
                return t.evaluate(e) >= a.evaluate(e)
            }
            var ref = _dereq_("../types"),
                NullType = ref.NullType,
                NumberType = ref.NumberType,
                StringType = ref.StringType,
                BooleanType = ref.BooleanType,
                ColorType = ref.ColorType,
                ObjectType = ref.ObjectType,
                ValueType = ref.ValueType,
                ErrorType = ref.ErrorType,
                array = ref.array,
                toString = ref.toString,
                ref$1 = _dereq_("../values"),
                typeOf = ref$1.typeOf,
                Color = ref$1.Color,
                validateRGBA = ref$1.validateRGBA,
                ref$2 = _dereq_("../compound_expression"),
                CompoundExpression = ref$2.CompoundExpression,
                varargs = ref$2.varargs,
                RuntimeError = _dereq_("../runtime_error"),
                Let = _dereq_("./let"),
                Var = _dereq_("./var"),
                Literal = _dereq_("./literal"),
                Assertion = _dereq_("./assertion"),
                ArrayAssertion = _dereq_("./array"),
                Coercion = _dereq_("./coercion"),
                At = _dereq_("./at"),
                Match = _dereq_("./match"),
                Case = _dereq_("./case"),
                Curve = _dereq_("./curve"),
                Step = _dereq_("./step"),
                Interpolate = _dereq_("./interpolate"),
                Coalesce = _dereq_("./coalesce"),
                expressions = { let: Let, var: Var, literal: Literal, string: Assertion, number: Assertion, boolean: Assertion, object: Assertion, array: ArrayAssertion, "to-number": Coercion, "to-color": Coercion, at: At, case: Case, match: Match, coalesce: Coalesce, curve: Curve, step: Step, interpolate: Interpolate };
            CompoundExpression.register(expressions, {
                error: [ErrorType, [StringType], function(e, r) { var t = r[0]; throw new RuntimeError(t.evaluate(e)) }],
                typeof: [StringType, [ValueType], function(e, r) { var t = r[0]; return toString(typeOf(t.evaluate(e))) }],
                "to-string": [StringType, [ValueType], function(e, r) {
                    var t = r[0];
                    t = t.evaluate(e);
                    var a = typeof t;
                    return null === t || "string" === a || "number" === a || "boolean" === a ? String(t) : t instanceof Color ? "rgba(" + 255 * t.r + "," + 255 * t.g + "," + 255 * t.b + "," + t.a + ")" : JSON.stringify(t)
                }],
                "to-boolean": [BooleanType, [ValueType], function(e, r) { var t = r[0]; return Boolean(t.evaluate(e)) }],
                "to-rgba": [array(NumberType, 4), [ColorType], function(e, r) {
                    var t = r[0],
                        a = t.evaluate(e);
                    return [a.r, a.g, a.b, a.a]
                }],
                rgb: [ColorType, [NumberType, NumberType, NumberType], rgba],
                rgba: [ColorType, [NumberType, NumberType, NumberType, NumberType], rgba],
                length: {
                    type: NumberType,
                    overloads: [
                        [
                            [StringType], length
                        ],
                        [
                            [array(ValueType)], length
                        ]
                    ]
                },
                has: {
                    type: BooleanType,
                    overloads: [
                        [
                            [StringType],
                            function(e, r) { return has(r[0].evaluate(e), e.properties()) }
                        ],
                        [
                            [StringType, ObjectType],
                            function(e, r) {
                                var t = r[0],
                                    a = r[1];
                                return has(t.evaluate(e), a.evaluate(e))
                            }
                        ]
                    ]
                },
                get: {
                    type: ValueType,
                    overloads: [
                        [
                            [StringType],
                            function(e, r) { return get(r[0].evaluate(e), e.properties()) }
                        ],
                        [
                            [StringType, ObjectType],
                            function(e, r) {
                                var t = r[0],
                                    a = r[1];
                                return get(t.evaluate(e), a.evaluate(e))
                            }
                        ]
                    ]
                },
                properties: [ObjectType, [], function(e) { return e.properties() }],
                "geometry-type": [StringType, [], function(e) { return e.geometryType() }],
                id: [ValueType, [], function(e) { return e.id() }],
                zoom: [NumberType, [], function(e) { return e.globals.zoom }],
                "heatmap-density": [NumberType, [], function(e) { return e.globals.heatmapDensity || 0 }],
                "+": [NumberType, varargs(NumberType), function(e, r) { for (var t = 0, a = 0, n = r; a < n.length; a += 1) { t += n[a].evaluate(e) } return t }],
                "*": [NumberType, varargs(NumberType), function(e, r) { for (var t = 1, a = 0, n = r; a < n.length; a += 1) { t *= n[a].evaluate(e) } return t }],
                "-": {
                    type: NumberType,
                    overloads: [
                        [
                            [NumberType, NumberType],
                            function(e, r) {
                                var t = r[0],
                                    a = r[1];
                                return t.evaluate(e) - a.evaluate(e)
                            }
                        ],
                        [
                            [NumberType],
                            function(e, r) { return -r[0].evaluate(e) }
                        ]
                    ]
                },
                "/": [NumberType, [NumberType, NumberType], function(e, r) {
                    var t = r[0],
                        a = r[1];
                    return t.evaluate(e) / a.evaluate(e)
                }],
                "%": [NumberType, [NumberType, NumberType], function(e, r) {
                    var t = r[0],
                        a = r[1];
                    return t.evaluate(e) % a.evaluate(e)
                }],
                ln2: [NumberType, [], function() { return Math.LN2 }],
                pi: [NumberType, [], function() { return Math.PI }],
                e: [NumberType, [], function() { return Math.E }],
                "^": [NumberType, [NumberType, NumberType], function(e, r) {
                    var t = r[0],
                        a = r[1];
                    return Math.pow(t.evaluate(e), a.evaluate(e))
                }],
                sqrt: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.sqrt(t.evaluate(e)) }],
                log10: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.log10(t.evaluate(e)) }],
                ln: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.log(t.evaluate(e)) }],
                log2: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.log2(t.evaluate(e)) }],
                sin: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.sin(t.evaluate(e)) }],
                cos: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.cos(t.evaluate(e)) }],
                tan: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.tan(t.evaluate(e)) }],
                asin: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.asin(t.evaluate(e)) }],
                acos: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.acos(t.evaluate(e)) }],
                atan: [NumberType, [NumberType], function(e, r) { var t = r[0]; return Math.atan(t.evaluate(e)) }],
                min: [NumberType, varargs(NumberType), function(e, r) { return Math.min.apply(Math, r.map(function(r) { return r.evaluate(e) })) }],
                max: [NumberType, varargs(NumberType), function(e, r) { return Math.max.apply(Math, r.map(function(r) { return r.evaluate(e) })) }],
                "==": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], eq
                        ],
                        [
                            [StringType, StringType], eq
                        ],
                        [
                            [BooleanType, BooleanType], eq
                        ],
                        [
                            [NullType, NullType], eq
                        ]
                    ]
                },
                "!=": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], ne
                        ],
                        [
                            [StringType, StringType], ne
                        ],
                        [
                            [BooleanType, BooleanType], ne
                        ],
                        [
                            [NullType, NullType], ne
                        ]
                    ]
                },
                ">": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], gt
                        ],
                        [
                            [StringType, StringType], gt
                        ]
                    ]
                },
                "<": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], lt
                        ],
                        [
                            [StringType, StringType], lt
                        ]
                    ]
                },
                ">=": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], gteq
                        ],
                        [
                            [StringType, StringType], gteq
                        ]
                    ]
                },
                "<=": {
                    type: BooleanType,
                    overloads: [
                        [
                            [NumberType, NumberType], lteq
                        ],
                        [
                            [StringType, StringType], lteq
                        ]
                    ]
                },
                all: {
                    type: BooleanType,
                    overloads: [
                        [
                            [BooleanType, BooleanType],
                            function(e, r) {
                                var t = r[0],
                                    a = r[1];
                                return t.evaluate(e) && a.evaluate(e)
                            }
                        ],
                        [varargs(BooleanType), function(e, r) { for (var t = 0, a = r; t < a.length; t += 1) { if (!a[t].evaluate(e)) return !1 } return !0 }]
                    ]
                },
                any: {
                    type: BooleanType,
                    overloads: [
                        [
                            [BooleanType, BooleanType],
                            function(e, r) {
                                var t = r[0],
                                    a = r[1];
                                return t.evaluate(e) || a.evaluate(e)
                            }
                        ],
                        [varargs(BooleanType), function(e, r) { for (var t = 0, a = r; t < a.length; t += 1) { if (a[t].evaluate(e)) return !0 } return !1 }]
                    ]
                },
                "!": [BooleanType, [BooleanType], function(e, r) { return !r[0].evaluate(e) }],
                upcase: [StringType, [StringType], function(e, r) { return r[0].evaluate(e).toUpperCase() }],
                downcase: [StringType, [StringType], function(e, r) { return r[0].evaluate(e).toLowerCase() }],
                concat: [StringType, varargs(StringType), function(e, r) { return r.map(function(r) { return r.evaluate(e) }).join("") }]
            }), module.exports = expressions;
        }, { "../compound_expression": 121, "../runtime_error": 141, "../types": 144, "../values": 145, "./array": 122, "./assertion": 123, "./at": 124, "./case": 125, "./coalesce": 126, "./coercion": 127, "./curve": 128, "./interpolate": 130, "./let": 131, "./literal": 132, "./match": 133, "./step": 134, "./var": 135 }],
        130: [function(_dereq_, module, exports) {
            "use strict";

            function exponentialInterpolation(e, t, r, n) {
                var i = n - r,
                    a = e - r;
                return 0 === i ? 0 : 1 === t ? a / i : (Math.pow(t, a) - 1) / (Math.pow(t, i) - 1)
            }
            var UnitBezier = _dereq_("@mapbox/unitbezier"),
                interpolate = _dereq_("../../util/interpolate"),
                ref = _dereq_("../types"),
                toString = ref.toString,
                NumberType = ref.NumberType,
                ref$1 = _dereq_("../stops"),
                findStopLessThanOrEqualTo = ref$1.findStopLessThanOrEqualTo,
                Interpolate = function(e, t, r, n) {
                    var i = this;
                    this.type = e, this.interpolation = t, this.input = r, this.labels = [], this.outputs = [];
                    for (var a = 0, o = n; a < o.length; a += 1) {
                        var u = o[a],
                            p = u[0],
                            l = u[1];
                        i.labels.push(p), i.outputs.push(l)
                    }
                };
            Interpolate.interpolationFactor = function(e, t, r, n) {
                var i = 0;
                if ("exponential" === e.name) i = exponentialInterpolation(t, e.base, r, n);
                else if ("linear" === e.name) i = exponentialInterpolation(t, 1, r, n);
                else if ("cubic-bezier" === e.name) {
                    var a = e.controlPoints,
                        o = new UnitBezier(a[0], a[1], a[2], a[3]);
                    i = o.solve(exponentialInterpolation(t, 1, r, n))
                }
                return i
            }, Interpolate.parse = function(e, t) {
                var r = e[1],
                    n = e[2],
                    i = e.slice(3);
                if (!Array.isArray(r) || 0 === r.length) return t.error("Expected an interpolation type expression.", 1);
                if ("linear" === r[0]) r = { name: "linear" };
                else if ("exponential" === r[0]) {
                    var a = r[1];
                    if ("number" != typeof a) return t.error("Exponential interpolation requires a numeric base.", 1, 1);
                    r = { name: "exponential", base: a }
                } else {
                    if ("cubic-bezier" !== r[0]) return t.error("Unknown interpolation type " + String(r[0]), 1, 0);
                    var o = r.slice(1);
                    if (4 !== o.length || o.some(function(e) { return "number" != typeof e || e < 0 || e > 1 })) return t.error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1.", 1);
                    r = { name: "cubic-bezier", controlPoints: o }
                }
                if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
                if (!(n = t.parse(n, 2, NumberType))) return null;
                var u = [],
                    p = null;
                t.expectedType && "value" !== t.expectedType.kind && (p = t.expectedType);
                for (var l = 0; l < i.length; l += 2) {
                    var s = i[l],
                        f = i[l + 1],
                        h = l + 3,
                        c = l + 4;
                    if ("number" != typeof s) return t.error('Input/output pairs for "interpolate" expressions must be defined using literal numeric values (not computed expressions) for the input values.', h);
                    if (u.length && u[u.length - 1][0] >= s) return t.error('Input/output pairs for "interpolate" expressions must be arranged with input values in strictly ascending order.', h);
                    var v = t.parse(f, c, p);
                    if (!v) return null;
                    p = p || v.type, u.push([s, v])
                }
                return "number" === p.kind || "color" === p.kind || "array" === p.kind && "number" === p.itemType.kind && "number" == typeof p.N ? new Interpolate(p, r, n, u) : t.error("Type " + toString(p) + " is not interpolatable.")
            }, Interpolate.prototype.evaluate = function(e) {
                var t = this.labels,
                    r = this.outputs;
                if (1 === t.length) return r[0].evaluate(e);
                var n = this.input.evaluate(e);
                if (n <= t[0]) return r[0].evaluate(e);
                var i = t.length;
                if (n >= t[i - 1]) return r[i - 1].evaluate(e);
                var a = findStopLessThanOrEqualTo(t, n),
                    o = t[a],
                    u = t[a + 1],
                    p = Interpolate.interpolationFactor(this.interpolation, n, o, u),
                    l = r[a].evaluate(e),
                    s = r[a + 1].evaluate(e);
                return interpolate[this.type.kind.toLowerCase()](l, s, p)
            }, Interpolate.prototype.eachChild = function(e) {
                var t = this;
                e(this.input);
                for (var r = 0, n = t.outputs; r < n.length; r += 1) { e(n[r]) }
            }, module.exports = Interpolate;
        }, { "../../util/interpolate": 155, "../stops": 143, "../types": 144, "@mapbox/unitbezier": 5 }],
        131: [function(_dereq_, module, exports) {
            "use strict";
            var Let = function(t, e) { this.type = e.type, this.bindings = [].concat(t), this.result = e };
            Let.prototype.evaluate = function(t) { t.pushScope(this.bindings); var e = this.result.evaluate(t); return t.popScope(), e }, Let.prototype.eachChild = function(t) {
                for (var e = this, r = 0, n = e.bindings; r < n.length; r += 1) { t(n[r][1]) }
                t(this.result)
            }, Let.parse = function(t, e) {
                if (t.length < 4) return e.error("Expected at least 3 arguments, but found " + (t.length - 1) + " instead.");
                for (var r = [], n = 1; n < t.length - 1; n += 2) {
                    var i = t[n];
                    if ("string" != typeof i) return e.error("Expected string, but found " + typeof i + " instead.", n);
                    if (/[^a-zA-Z0-9_]/.test(i)) return e.error("Variable names must contain only alphanumeric characters or '_'.", n);
                    var s = e.parse(t[n + 1], n + 1);
                    if (!s) return null;
                    r.push([i, s])
                }
                var a = e.parse(t[t.length - 1], t.length - 1, void 0, r);
                return a ? new Let(r, a) : null
            }, module.exports = Let;
        }, {}],
        132: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../values"),
                isValue = ref.isValue,
                typeOf = ref.typeOf,
                Literal = function(e, r) { this.type = e, this.value = r };
            Literal.parse = function(e, r) {
                if (2 !== e.length) return r.error("'literal' expression requires exactly one argument, but found " + (e.length - 1) + " instead.");
                if (!isValue(e[1])) return r.error("invalid value");
                var t = e[1],
                    i = typeOf(t),
                    a = r.expectedType;
                return "array" !== i.kind || 0 !== i.N || !a || "array" !== a.kind || "number" == typeof a.N && 0 !== a.N || (i = a), new Literal(i, t)
            }, Literal.prototype.evaluate = function() { return this.value }, Literal.prototype.eachChild = function() {}, module.exports = Literal;
        }, { "../values": 145 }],
        133: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../values"),
                typeOf = ref.typeOf,
                Match = function(e, t, r, n, a, u) { this.inputType = e, this.type = t, this.input = r, this.cases = n, this.outputs = a, this.otherwise = u };
            Match.parse = function(e, t) {
                if (e.length < 5) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                if (e.length % 2 != 1) return t.error("Expected an even number of arguments.");
                var r, n;
                t.expectedType && "value" !== t.expectedType.kind && (n = t.expectedType);
                for (var a = {}, u = [], s = 2; s < e.length - 1; s += 2) {
                    var i = e[s],
                        h = e[s + 1];
                    Array.isArray(i) || (i = [i]);
                    var l = t.concat(s);
                    if (0 === i.length) return l.error("Expected at least one branch label.");
                    for (var o = 0, p = i; o < p.length; o += 1) {
                        var c = p[o];
                        if ("number" != typeof c && "string" != typeof c) return l.error("Branch labels must be numbers or strings.");
                        if ("number" == typeof c && Math.abs(c) > Number.MAX_SAFE_INTEGER) return l.error("Branch labels must be integers no larger than " + Number.MAX_SAFE_INTEGER + ".");
                        if ("number" == typeof c && Math.floor(c) !== c) return l.error("Numeric branch labels must be integer values.");
                        if (r) { if (l.checkSubtype(r, typeOf(c))) return null } else r = typeOf(c);
                        if (void 0 !== a[String(c)]) return l.error("Branch labels must be unique.");
                        a[String(c)] = u.length
                    }
                    var f = t.parse(h, s, n);
                    if (!f) return null;
                    n = n || f.type, u.push(f)
                }
                var b = t.parse(e[1], 1, r);
                if (!b) return null;
                var y = t.parse(e[e.length - 1], e.length - 1, n);
                return y ? new Match(r, n, b, a, u, y) : null
            }, Match.prototype.evaluate = function(e) { var t = this.input.evaluate(e); return (this.outputs[this.cases[t]] || this.otherwise).evaluate(e) }, Match.prototype.eachChild = function(e) { e(this.input), this.outputs.forEach(e), e(this.otherwise) }, module.exports = Match;
        }, { "../values": 145 }],
        134: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../types"),
                NumberType = ref.NumberType,
                ref$1 = _dereq_("../stops"),
                findStopLessThanOrEqualTo = ref$1.findStopLessThanOrEqualTo,
                Step = function(e, t, r) {
                    var u = this;
                    this.type = e, this.input = t, this.labels = [], this.outputs = [];
                    for (var n = 0, s = r; n < s.length; n += 1) {
                        var p = s[n],
                            a = p[0],
                            i = p[1];
                        u.labels.push(a), u.outputs.push(i)
                    }
                };
            Step.parse = function(e, t) {
                var r = e[1],
                    u = e.slice(2);
                if (e.length - 1 < 4) return t.error("Expected at least 4 arguments, but found only " + (e.length - 1) + ".");
                if ((e.length - 1) % 2 != 0) return t.error("Expected an even number of arguments.");
                if (!(r = t.parse(r, 1, NumberType))) return null;
                var n = [],
                    s = null;
                t.expectedType && "value" !== t.expectedType.kind && (s = t.expectedType), u.unshift(-1 / 0);
                for (var p = 0; p < u.length; p += 2) {
                    var a = u[p],
                        i = u[p + 1],
                        l = p + 1,
                        o = p + 2;
                    if ("number" != typeof a) return t.error('Input/output pairs for "step" expressions must be defined using literal numeric values (not computed expressions) for the input values.', l);
                    if (n.length && n[n.length - 1][0] >= a) return t.error('Input/output pairs for "step" expressions must be arranged with input values in strictly ascending order.', l);
                    var h = t.parse(i, o, s);
                    if (!h) return null;
                    s = s || h.type, n.push([a, h])
                }
                return new Step(s, r, n)
            }, Step.prototype.evaluate = function(e) {
                var t = this.labels,
                    r = this.outputs;
                if (1 === t.length) return r[0].evaluate(e);
                var u = this.input.evaluate(e);
                if (u <= t[0]) return r[0].evaluate(e);
                var n = t.length;
                return u >= t[n - 1] ? r[n - 1].evaluate(e) : r[findStopLessThanOrEqualTo(t, u)].evaluate(e)
            }, Step.prototype.eachChild = function(e) {
                var t = this;
                e(this.input);
                for (var r = 0, u = t.outputs; r < u.length; r += 1) { e(u[r]) }
            }, module.exports = Step;
        }, { "../stops": 143, "../types": 144 }],
        135: [function(_dereq_, module, exports) {
            "use strict";
            var Var = function(e, r) { this.type = r, this.name = e };
            Var.parse = function(e, r) { if (2 !== e.length || "string" != typeof e[1]) return r.error("'var' expression requires exactly one string literal argument."); var t = e[1]; return r.scope.has(t) ? new Var(t, r.scope.get(t).type) : r.error('Unknown variable "' + t + '". Make sure "' + t + '" has been bound in an enclosing "let" expression before using it.', 1) }, Var.prototype.evaluate = function(e) { return e.scope.get(this.name).evaluate(e) }, Var.prototype.eachChild = function() {}, module.exports = Var;
        }, {}],
        136: [function(_dereq_, module, exports) {
            "use strict";
            var Scope = _dereq_("./scope"),
                ref = _dereq_("./values"),
                Color = ref.Color,
                geometryTypes = ["Unknown", "Point", "LineString", "Polygon"],
                EvaluationContext = function() { this.scope = new Scope, this._parseColorCache = {} };
            EvaluationContext.prototype.id = function() { return this.feature && "id" in this.feature ? this.feature.id : null }, EvaluationContext.prototype.geometryType = function() { return this.feature ? "number" == typeof this.feature.type ? geometryTypes[this.feature.type] : this.feature.type : null }, EvaluationContext.prototype.properties = function() { return this.feature && this.feature.properties || {} }, EvaluationContext.prototype.pushScope = function(t) { this.scope = this.scope.concat(t) }, EvaluationContext.prototype.popScope = function() { this.scope = this.scope.parent }, EvaluationContext.prototype.parseColor = function(t) { var e = this._parseColorCache[t]; return e || (e = this._parseColorCache[t] = Color.parse(t)), e }, module.exports = EvaluationContext;
        }, { "./scope": 142, "./values": 145 }],
        137: [function(_dereq_, module, exports) {
            "use strict";

            function isExpression(e) { return Array.isArray(e) && e.length > 0 && "string" == typeof e[0] && e[0] in definitions }

            function createExpression(e, r, n) {
                void 0 === n && (n = {});
                var o = new ParsingContext(definitions, [], getExpectedType(r)),
                    t = o.parse(e);
                if (!t) return error(o.errors);
                var i, s = new EvaluationContext;
                if (!1 === n.handleErrors) i = function(e, r) { return s.globals = e, s.feature = r, t.evaluate(s) };
                else {
                    var a, u = {},
                        p = getDefaultValue(r);
                    "enum" === r.type && (a = r.values), i = function(e, r) { s.globals = e, s.feature = r; try { var n = t.evaluate(s); if (null === n || void 0 === n) return p; if (a && !(n in a)) throw new RuntimeError("Expected value to be one of " + Object.keys(a).map(function(e) { return JSON.stringify(e) }).join(", ") + ", but found " + JSON.stringify(n) + " instead."); return n } catch (e) { return u[e.message] || (u[e.message] = !0, "undefined" != typeof console && console.warn(e.message)), p } }
                }
                return success({ evaluate: i, parsed: t })
            }

            function createPropertyExpression(e, r, n) {
                if (void 0 === n && (n = {}), e = createExpression(e, r, n), "error" === e.result) return e;
                var o = e.value,
                    t = o.evaluate,
                    i = o.parsed,
                    s = isConstant.isFeatureConstant(i);
                if (!s && !r["property-function"]) return error([new ParsingError("", "property expressions not supported")]);
                var a = isConstant.isGlobalPropertyConstant(i, ["zoom"]);
                if (!a && !1 === r["zoom-function"]) return error([new ParsingError("", "zoom expressions not supported")]);
                var u = findZoomCurve(i);
                if (!u && !a) return error([new ParsingError("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.')]);
                if (u instanceof ParsingError) return error([u]);
                if (u instanceof Interpolate && "piecewise-constant" === r.function) return error([new ParsingError("", '"interpolate" expressions cannot be used with this property')]);
                if (!u) return success(s ? { kind: "constant", parsed: i, evaluate: t } : { kind: "source", parsed: i, evaluate: t });
                var p = u instanceof Interpolate ? Interpolate.interpolationFactor.bind(void 0, u.interpolation) : function() { return 0 },
                    l = u.labels;
                return success(s ? { kind: "camera", parsed: i, evaluate: t, interpolationFactor: p, zoomStops: l } : { kind: "composite", parsed: i, evaluate: t, interpolationFactor: p, zoomStops: l })
            }

            function findZoomCurve(e) {
                var r = null;
                if (e instanceof Let) r = findZoomCurve(e.result);
                else if (e instanceof Coalesce)
                    for (var n = 0, o = e.args; n < o.length; n += 1) { var t = o[n]; if (r = findZoomCurve(t)) break } else(e instanceof Step || e instanceof Interpolate) && e.input instanceof CompoundExpression && "zoom" === e.input.name && (r = e);
                return r instanceof ParsingError ? r : (e.eachChild(function(e) {
                    var n = findZoomCurve(e);
                    n instanceof ParsingError ? r = n : !r && n ? r = new ParsingError("", '"zoom" expression may only be used as input to a top-level "step" or "interpolate" expression.') : r && n && r !== n && (r = new ParsingError("", 'Only one zoom-based "step" or "interpolate" subexpression may be used in an expression.'))
                }), r)
            }

            function getExpectedType(e) { var r = { color: ColorType, string: StringType, number: NumberType, enum: StringType, boolean: BooleanType }; return "array" === e.type ? array(r[e.value] || ValueType, e.length) : r[e.type] || null }

            function getDefaultValue(e) { return "color" === e.type && isFunction(e.default) ? new Color(0, 0, 0, 0) : "color" === e.type ? Color.parse(e.default) || null : void 0 === e.default ? null : e.default }
            var ParsingError = _dereq_("./parsing_error"),
                ParsingContext = _dereq_("./parsing_context"),
                EvaluationContext = _dereq_("./evaluation_context"),
                ref = _dereq_("./compound_expression"),
                CompoundExpression = ref.CompoundExpression,
                Step = _dereq_("./definitions/step"),
                Interpolate = _dereq_("./definitions/interpolate"),
                Coalesce = _dereq_("./definitions/coalesce"),
                Let = _dereq_("./definitions/let"),
                definitions = _dereq_("./definitions"),
                isConstant = _dereq_("./is_constant"),
                RuntimeError = _dereq_("./runtime_error"),
                ref$1 = _dereq_("../util/result"),
                success = ref$1.success,
                error = ref$1.error;
            module.exports = { isExpression: isExpression, createExpression: createExpression, createPropertyExpression: createPropertyExpression };
            var ref$2 = _dereq_("./types"),
                ColorType = ref$2.ColorType,
                StringType = ref$2.StringType,
                NumberType = ref$2.NumberType,
                BooleanType = ref$2.BooleanType,
                ValueType = ref$2.ValueType,
                array = ref$2.array,
                ref$3 = _dereq_("../function"),
                isFunction = ref$3.isFunction,
                ref$4 = _dereq_("./values"),
                Color = ref$4.Color;
        }, { "../function": 147, "../util/result": 157, "./compound_expression": 121, "./definitions": 129, "./definitions/coalesce": 126, "./definitions/interpolate": 130, "./definitions/let": 131, "./definitions/step": 134, "./evaluation_context": 136, "./is_constant": 138, "./parsing_context": 139, "./parsing_error": 140, "./runtime_error": 141, "./types": 144, "./values": 145 }],
        138: [function(_dereq_, module, exports) {
            "use strict";

            function isFeatureConstant(n) { if (n instanceof CompoundExpression) { if ("get" === n.name && 1 === n.args.length) return !1; if ("has" === n.name && 1 === n.args.length) return !1; if ("properties" === n.name || "geometry-type" === n.name || "id" === n.name) return !1 } var e = !0; return n.eachChild(function(n) { e && !isFeatureConstant(n) && (e = !1) }), e }

            function isGlobalPropertyConstant(n, e) { if (n instanceof CompoundExpression && e.indexOf(n.name) >= 0) return !1; var t = !0; return n.eachChild(function(n) { t && !isGlobalPropertyConstant(n, e) && (t = !1) }), t }
            var ref = _dereq_("./compound_expression"),
                CompoundExpression = ref.CompoundExpression;
            module.exports = { isFeatureConstant: isFeatureConstant, isGlobalPropertyConstant: isGlobalPropertyConstant };
        }, { "./compound_expression": 121 }],
        139: [function(_dereq_, module, exports) {
            "use strict";

            function isConstant(e) {
                var r = _dereq_("./compound_expression"),
                    t = r.CompoundExpression,
                    n = _dereq_("./is_constant"),
                    i = n.isGlobalPropertyConstant,
                    o = n.isFeatureConstant;
                if (e instanceof _dereq_("./definitions/var")) return !1;
                if (e instanceof t && "error" === e.name) return !1;
                var a = !0;
                return e.eachChild(function(e) { e instanceof Literal || (a = !1) }), !!a && (o(e) && i(e, ["zoom", "heatmap-density"]))
            }
            var Scope = _dereq_("./scope"),
                ref = _dereq_("./types"),
                checkSubtype = ref.checkSubtype,
                ParsingError = _dereq_("./parsing_error"),
                Literal = _dereq_("./definitions/literal"),
                ParsingContext = function(e, r, t, n, i) { void 0 === r && (r = []), void 0 === n && (n = new Scope), void 0 === i && (i = []), this.definitions = e, this.path = r, this.key = r.map(function(e) { return "[" + e + "]" }).join(""), this.scope = n, this.errors = i, this.expectedType = t };
            ParsingContext.prototype.parse = function(e, r, t, n) {
                var i = this;
                if (r && (i = i.concat(r, t, n)), null !== e && "string" != typeof e && "boolean" != typeof e && "number" != typeof e || (e = ["literal", e]), Array.isArray(e)) {
                    if (0 === e.length) return i.error('Expected an array with at least one element. If you wanted a literal array, use ["literal", []].');
                    var o = e[0];
                    if ("string" != typeof o) return i.error("Expression name must be a string, but found " + typeof o + ' instead. If you wanted a literal array, use ["literal", [...]].', 0), null;
                    var a = i.definitions[o];
                    if (a) {
                        var s = a.parse(e, i);
                        if (!s) return null;
                        var u = i.expectedType,
                            l = s.type;
                        if (u) {
                            if (("string" === u.kind || "number" === u.kind || "boolean" === u.kind) && "value" === l.kind) { s = new(_dereq_("./definitions/assertion"))(u, [s]) } else if ("color" === u.kind && ("value" === l.kind || "string" === l.kind)) {
                                var p = _dereq_("./definitions/coercion");
                                s = new p(u, [s])
                            }
                            if (i.checkSubtype(u, s.type)) return null
                        }
                        if (!(s instanceof Literal) && isConstant(s)) { var c = new(_dereq_("./evaluation_context")); try { s = new Literal(s.type, s.evaluate(c)) } catch (e) { return i.error(e.message), null } }
                        return s
                    }
                    return i.error('Unknown expression "' + o + '". If you wanted a literal array, use ["literal", [...]].', 0)
                }
                return void 0 === e ? i.error("'undefined' value invalid. Use null instead.") : "object" == typeof e ? i.error('Bare objects invalid. Use ["literal", {...}] instead.') : i.error("Expected an array, but found " + typeof e + " instead.")
            }, ParsingContext.prototype.concat = function(e, r, t) {
                var n = "number" == typeof e ? this.path.concat(e) : this.path,
                    i = t ? this.scope.concat(t) : this.scope;
                return new ParsingContext(this.definitions, n, r || null, i, this.errors)
            }, ParsingContext.prototype.error = function(e) {
                for (var r = [], t = arguments.length - 1; t-- > 0;) r[t] = arguments[t + 1];
                var n = "" + this.key + r.map(function(e) { return "[" + e + "]" }).join("");
                this.errors.push(new ParsingError(n, e))
            }, ParsingContext.prototype.checkSubtype = function(e, r) { var t = checkSubtype(e, r); return t && this.error(t), t }, module.exports = ParsingContext;
        }, { "./compound_expression": 121, "./definitions/assertion": 123, "./definitions/coercion": 127, "./definitions/literal": 132, "./definitions/var": 135, "./evaluation_context": 136, "./is_constant": 138, "./parsing_error": 140, "./scope": 142, "./types": 144 }],
        140: [function(_dereq_, module, exports) {
            "use strict";
            var ParsingError = function(r) {
                function t(t, o) { r.call(this, o), this.message = o, this.key = t }
                return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t
            }(Error);
            module.exports = ParsingError;
        }, {}],
        141: [function(_dereq_, module, exports) {
            "use strict";
            var RuntimeError = function(r) { this.name = "ExpressionEvaluationError", this.message = r };
            RuntimeError.prototype.toJSON = function() { return this.message }, module.exports = RuntimeError;
        }, {}],
        142: [function(_dereq_, module, exports) {
            "use strict";
            var Scope = function(t, n) {
                var i = this;
                void 0 === n && (n = []), this.parent = t, this.bindings = {};
                for (var e = 0, r = n; e < r.length; e += 1) {
                    var o = r[e],
                        s = o[0],
                        p = o[1];
                    i.bindings[s] = p
                }
            };
            Scope.prototype.concat = function(t) { return new Scope(this, t) }, Scope.prototype.get = function(t) { if (this.bindings[t]) return this.bindings[t]; if (this.parent) return this.parent.get(t); throw new Error(t + " not found in scope.") }, Scope.prototype.has = function(t) { return !!this.bindings[t] || !!this.parent && this.parent.has(t) }, module.exports = Scope;
        }, {}],
        143: [function(_dereq_, module, exports) {
            "use strict";

            function findStopLessThanOrEqualTo(o, r) {
                for (var t, n, a = o.length, e = 0, s = a - 1, u = 0; e <= s;) {
                    if (u = Math.floor((e + s) / 2), t = o[u], n = o[u + 1], r === t || r > t && r < n) return u;
                    t < r ? e = u + 1 : t > r && (s = u - 1)
                }
                return Math.max(u - 1, 0)
            }
            module.exports = { findStopLessThanOrEqualTo: findStopLessThanOrEqualTo };
        }, {}],
        144: [function(_dereq_, module, exports) {
            "use strict";

            function array(e, r) { return { kind: "array", itemType: e, N: r } }

            function toString(e) { if ("array" === e.kind) { var r = toString(e.itemType); return "number" == typeof e.N ? "array<" + r + ", " + e.N + ">" : "value" === e.itemType.kind ? "array" : "array<" + r + ">" } return e.kind }

            function checkSubtype(e, r) {
                if ("error" === r.kind) return null;
                if ("array" === e.kind) { if ("array" === r.kind && !checkSubtype(e.itemType, r.itemType) && ("number" != typeof e.N || e.N === r.N)) return null } else {
                    if (e.kind === r.kind) return null;
                    if ("value" === e.kind)
                        for (var n = 0, y = valueMemberTypes; n < y.length; n += 1) { var t = y[n]; if (!checkSubtype(t, r)) return null }
                }
                return "Expected " + toString(e) + " but found " + toString(r) + " instead."
            }
            var NullType = { kind: "null" },
                NumberType = { kind: "number" },
                StringType = { kind: "string" },
                BooleanType = { kind: "boolean" },
                ColorType = { kind: "color" },
                ObjectType = { kind: "object" },
                ValueType = { kind: "value" },
                ErrorType = { kind: "error" },
                valueMemberTypes = [NullType, NumberType, StringType, BooleanType, ColorType, ObjectType, array(ValueType)];
            module.exports = { NullType: NullType, NumberType: NumberType, StringType: StringType, BooleanType: BooleanType, ColorType: ColorType, ObjectType: ObjectType, ValueType: ValueType, array: array, ErrorType: ErrorType, toString: toString, checkSubtype: checkSubtype };
        }, {}],
        145: [function(_dereq_, module, exports) {
            "use strict";

            function validateRGBA(e, r, t, n) { if (!("number" == typeof e && e >= 0 && e <= 255 && "number" == typeof r && r >= 0 && r <= 255 && "number" == typeof t && t >= 0 && t <= 255)) { return "Invalid rgba value [" + ("number" == typeof n ? [e, r, t, n] : [e, r, t]).join(", ") + "]: 'r', 'g', and 'b' must be between 0 and 255." } return void 0 === n || "number" == typeof n && n >= 0 && n <= 1 ? null : "Invalid rgba value [" + [e, r, t, n].join(", ") + "]: 'a' must be between 0 and 1." }

            function isValue(e) {
                if (null === e) return !0;
                if ("string" == typeof e) return !0;
                if ("boolean" == typeof e) return !0;
                if ("number" == typeof e) return !0;
                if (e instanceof Color) return !0;
                if (Array.isArray(e)) { for (var r = 0, t = e; r < t.length; r += 1) { if (!isValue(t[r])) return !1 } return !0 }
                if ("object" == typeof e) {
                    for (var n in e)
                        if (!isValue(e[n])) return !1;
                    return !0
                }
                return !1
            }

            function typeOf(e) {
                if (null === e) return NullType;
                if ("string" == typeof e) return StringType;
                if ("boolean" == typeof e) return BooleanType;
                if ("number" == typeof e) return NumberType;
                if (e instanceof Color) return ColorType;
                if (Array.isArray(e)) {
                    for (var r, t = e.length, n = 0, u = e; n < u.length; n += 1) {
                        var o = u[n],
                            f = typeOf(o);
                        if (r) {
                            if (r === f) continue;
                            r = ValueType;
                            break
                        }
                        r = f
                    }
                    return array(r || ValueType, t)
                }
                return ObjectType
            }
            var Color = _dereq_("../util/color"),
                ref = _dereq_("./types"),
                NullType = ref.NullType,
                NumberType = ref.NumberType,
                StringType = ref.StringType,
                BooleanType = ref.BooleanType,
                ColorType = ref.ColorType,
                ObjectType = ref.ObjectType,
                ValueType = ref.ValueType,
                array = ref.array;
            module.exports = { Color: Color, validateRGBA: validateRGBA, isValue: isValue, typeOf: typeOf };
        }, { "../util/color": 151, "./types": 144 }],
        146: [function(_dereq_, module, exports) {
            "use strict";

            function isExpressionFilter(e) {
                if (!Array.isArray(e) || 0 === e.length) return !1;
                switch (e[0]) {
                    case "has":
                        return e.length >= 2 && "$id" !== e[1] && "$type" !== e[1];
                    case "in":
                    case "!in":
                    case "!has":
                    case "none":
                        return !1;
                    case "==":
                    case "!=":
                    case ">":
                    case ">=":
                    case "<":
                    case "<=":
                        return 3 === e.length && (Array.isArray(e[1]) || Array.isArray(e[2]));
                    case "any":
                    case "all":
                        for (var r = 0, i = e.slice(1); r < i.length; r += 1) { var n = i[r]; if (!isExpressionFilter(n) && "boolean" != typeof n) return !1 }
                        return !0;
                    default:
                        return !0
                }
            }

            function createFilter(e) { if (!e) return function() { return !0 }; if (!isExpressionFilter(e)) return new Function("g", "f", "var p = (f && f.properties || {}); return " + compile(e)); var r = createExpression(e, filterSpec); if ("error" === r.result) throw new Error(r.value.map(function(e) { return e.key + ": " + e.message }).join(", ")); return r.value.evaluate }

            function compile(e) { if (!e) return "true"; var r = e[0]; return e.length <= 1 ? "any" === r ? "false" : "true" : "(" + ("==" === r ? compileComparisonOp(e[1], e[2], "===", !1) : "!=" === r ? compileComparisonOp(e[1], e[2], "!==", !1) : "<" === r || ">" === r || "<=" === r || ">=" === r ? compileComparisonOp(e[1], e[2], r, !0) : "any" === r ? compileLogicalOp(e.slice(1), "||") : "all" === r ? compileLogicalOp(e.slice(1), "&&") : "none" === r ? compileNegation(compileLogicalOp(e.slice(1), "||")) : "in" === r ? compileInOp(e[1], e.slice(2)) : "!in" === r ? compileNegation(compileInOp(e[1], e.slice(2))) : "has" === r ? compileHasOp(e[1]) : "!has" === r ? compileNegation(compileHasOp(e[1])) : "true") + ")" }

            function compilePropertyReference(e) { return "$type" === e ? "f.type" : "$id" === e ? "f.id" : "p[" + JSON.stringify(e) + "]" }

            function compileComparisonOp(e, r, i, n) {
                var t = compilePropertyReference(e),
                    o = "$type" === e ? types.indexOf(r) : JSON.stringify(r);
                return (n ? "typeof " + t + "=== typeof " + o + "&&" : "") + t + i + o
            }

            function compileLogicalOp(e, r) { return e.map(compile).join(r) }

            function compileInOp(e, r) {
                "$type" === e && (r = r.map(function(e) { return types.indexOf(e) }));
                var i = JSON.stringify(r.sort(compare)),
                    n = compilePropertyReference(e);
                return r.length <= 200 ? i + ".indexOf(" + n + ") !== -1" : "function(v, a, i, j) {while (i <= j) { var m = (i + j) >> 1;    if (a[m] === v) return true; if (a[m] > v) j = m - 1; else i = m + 1;}return false; }(" + n + ", " + i + ",0," + (r.length - 1) + ")"
            }

            function compileHasOp(e) { return "$id" === e ? '"id" in f' : JSON.stringify(e) + " in p" }

            function compileNegation(e) { return "!(" + e + ")" }

            function compare(e, r) { return e < r ? -1 : e > r ? 1 : 0 }
            var ref = _dereq_("../expression"),
                createExpression = ref.createExpression;
            module.exports = createFilter, module.exports.isExpressionFilter = isExpressionFilter;
            var types = ["Unknown", "Point", "LineString", "Polygon"],
                filterSpec = { type: "boolean", default: !1, function: !0, "property-function": !0, "zoom-function": !0 };
        }, { "../expression": 137 }],
        147: [function(_dereq_, module, exports) {
            "use strict";

            function isFunction(t) { return "object" == typeof t && null !== t && !Array.isArray(t) }

            function identityFunction(t) { return t }

            function createFunction(t, e) {
                var o = "color" === e.type,
                    r = t.stops && "object" == typeof t.stops[0][0],
                    n = r || void 0 !== t.property,
                    a = r || !n,
                    i = t.type || ("interpolated" === e.function ? "exponential" : "interval");
                o && (t = extend({}, t), t.stops && (t.stops = t.stops.map(function(t) { return [t[0], Color.parse(t[1])] })), t.default ? t.default = Color.parse(t.default) : t.default = Color.parse(e.default));
                var u, s, p;
                if ("exponential" === i) u = evaluateExponentialFunction;
                else if ("interval" === i) u = evaluateIntervalFunction;
                else if ("categorical" === i) {
                    u = evaluateCategoricalFunction, s = Object.create(null);
                    for (var l = 0, c = t.stops; l < c.length; l += 1) {
                        var f = c[l];
                        s[f[0]] = f[1]
                    }
                    p = typeof t.stops[0][0]
                } else {
                    if ("identity" !== i) throw new Error('Unknown function type "' + i + '"');
                    u = evaluateIdentityFunction
                }
                var v;
                if (t.colorSpace && "rgb" !== t.colorSpace) {
                    if (!colorSpaces[t.colorSpace]) throw new Error("Unknown color space: " + t.colorSpace);
                    var d = colorSpaces[t.colorSpace];
                    t = JSON.parse(JSON.stringify(t));
                    for (var y = 0; y < t.stops.length; y++) t.stops[y] = [t.stops[y][0], d.forward(t.stops[y][1])];
                    v = d.reverse
                } else v = identityFunction;
                if (r) {
                    for (var F = {}, h = [], m = 0; m < t.stops.length; m++) {
                        var g = t.stops[m],
                            b = g[0].zoom;
                        void 0 === F[b] && (F[b] = { zoom: b, type: t.type, property: t.property, default: t.default, stops: [] }, h.push(b)), F[b].stops.push([g[0].value, g[1]])
                    }
                    for (var S = [], x = 0, T = h; x < T.length; x += 1) {
                        var q = T[x];
                        S.push([F[q].zoom, createFunction(F[q], e)])
                    }
                    return { kind: "composite", interpolationFactor: Interpolate.interpolationFactor.bind(void 0, { name: "linear" }), zoomStops: S.map(function(t) { return t[0] }), evaluate: function(o, r) { var n = o.zoom; return v(evaluateExponentialFunction({ stops: S, base: t.base }, e, n).evaluate(n, r)) } }
                }
                return a ? { kind: "camera", interpolationFactor: "exponential" === i ? Interpolate.interpolationFactor.bind(void 0, { name: "exponential", base: void 0 !== t.base ? t.base : 1 }) : function() { return 0 }, zoomStops: t.stops.map(function(t) { return t[0] }), evaluate: function(o) { var r = o.zoom; return v(u(t, e, r, s, p)) } } : { kind: "source", evaluate: function(o, r) { var n = r && r.properties ? r.properties[t.property] : void 0; return void 0 === n ? coalesce(t.default, e.default) : v(u(t, e, n, s, p)) } }
            }

            function coalesce(t, e, o) { return void 0 !== t ? t : void 0 !== e ? e : void 0 !== o ? o : void 0 }

            function evaluateCategoricalFunction(t, e, o, r, n) { return coalesce(typeof o === n ? r[o] : void 0, t.default, e.default) }

            function evaluateIntervalFunction(t, e, o) { if ("number" !== getType(o)) return coalesce(t.default, e.default); var r = t.stops.length; if (1 === r) return t.stops[0][1]; if (o <= t.stops[0][0]) return t.stops[0][1]; if (o >= t.stops[r - 1][0]) return t.stops[r - 1][1]; var n = findStopLessThanOrEqualTo(t.stops, o); return t.stops[n][1] }

            function evaluateExponentialFunction(t, e, o) {
                var r = void 0 !== t.base ? t.base : 1;
                if ("number" !== getType(o)) return coalesce(t.default, e.default);
                var n = t.stops.length;
                if (1 === n) return t.stops[0][1];
                if (o <= t.stops[0][0]) return t.stops[0][1];
                if (o >= t.stops[n - 1][0]) return t.stops[n - 1][1];
                var a = findStopLessThanOrEqualTo(t.stops, o),
                    i = interpolationFactor(o, r, t.stops[a][0], t.stops[a + 1][0]),
                    u = t.stops[a][1],
                    s = t.stops[a + 1][1],
                    p = interpolate[e.type] || identityFunction;
                return "function" == typeof u.evaluate ? {
                    evaluate: function() {
                        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                        var o = u.evaluate.apply(void 0, t),
                            r = s.evaluate.apply(void 0, t);
                        if (void 0 !== o && void 0 !== r) return p(o, r, i)
                    }
                } : p(u, s, i)
            }

            function evaluateIdentityFunction(t, e, o) { return "color" === e.type ? o = Color.parse(o) : getType(o) === e.type || "enum" === e.type && e.values[o] || (o = void 0), coalesce(o, t.default, e.default) }

            function findStopLessThanOrEqualTo(t, e) {
                for (var o, r, n = t.length, a = 0, i = n - 1, u = 0; a <= i;) {
                    if (u = Math.floor((a + i) / 2), o = t[u][0], r = t[u + 1][0], e === o || e > o && e < r) return u;
                    o < e ? a = u + 1 : o > e && (i = u - 1)
                }
                return Math.max(u - 1, 0)
            }

            function interpolationFactor(t, e, o, r) {
                var n = r - o,
                    a = t - o;
                return 0 === n ? 0 : 1 === e ? a / n : (Math.pow(e, a) - 1) / (Math.pow(e, n) - 1)
            }
            var colorSpaces = _dereq_("../util/color_spaces"),
                Color = _dereq_("../util/color"),
                extend = _dereq_("../util/extend"),
                getType = _dereq_("../util/get_type"),
                interpolate = _dereq_("../util/interpolate"),
                Interpolate = _dereq_("../expression/definitions/interpolate");
            module.exports = { createFunction: createFunction, isFunction: isFunction };
        }, { "../expression/definitions/interpolate": 130, "../util/color": 151, "../util/color_spaces": 152, "../util/extend": 153, "../util/get_type": 154, "../util/interpolate": 155 }],
        148: [function(_dereq_, module, exports) {
            "use strict";

            function stringify(r) { var t = typeof r; if ("number" === t || "boolean" === t || "string" === t || void 0 === r || null === r) return JSON.stringify(r); if (Array.isArray(r)) { for (var e = "[", i = 0, n = r; i < n.length; i += 1) { e += stringify(n[i]) + "," } return e + "]" } for (var o = Object.keys(r).sort(), f = "{", u = 0; u < o.length; u++) f += JSON.stringify(o[u]) + ":" + stringify(r[o[u]]) + ","; return f + "}" }

            function getKey(r) { for (var t = "", e = 0, i = refProperties; e < i.length; e += 1) { t += "/" + stringify(r[i[e]]) } return t }

            function groupByLayout(r) {
                for (var t = {}, e = 0; e < r.length; e++) {
                    var i = getKey(r[e]),
                        n = t[i];
                    n || (n = t[i] = []), n.push(r[e])
                }
                var o = [];
                for (var f in t) o.push(t[f]);
                return o
            }
            var refProperties = _dereq_("./util/ref_properties");
            module.exports = groupByLayout;
        }, { "./util/ref_properties": 156 }],
        149: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = _dereq_("./v8.json");
        }, { "./v8.json": 150 }],
        150: [function(_dereq_, module, exports) {
            module.exports = {
                "$version": 8,
                "$root": { "version": { "required": true, "type": "enum", "values": [8] }, "name": { "type": "string" }, "metadata": { "type": "*" }, "center": { "type": "array", "value": "number" }, "zoom": { "type": "number" }, "bearing": { "type": "number", "default": 0, "period": 360, "units": "degrees" }, "pitch": { "type": "number", "default": 0, "units": "degrees" }, "light": { "type": "light" }, "sources": { "required": true, "type": "sources" }, "sprite": { "type": "string" }, "glyphs": { "type": "string" }, "transition": { "type": "transition" }, "layers": { "required": true, "type": "array", "value": "layer" } },
                "sources": { "*": { "type": "source" } },
                "source": ["source_vector", "source_raster", "source_geojson", "source_video", "source_image", "source_canvas"],
                "source_vector": { "type": { "required": true, "type": "enum", "values": { "vector": {} } }, "url": { "type": "string" }, "tiles": { "type": "array", "value": "string" }, "bounds": { "type": "array", "value": "number", "length": 4, "default": [-180, -85.0511, 180, 85.0511] }, "minzoom": { "type": "number", "default": 0 }, "maxzoom": { "type": "number", "default": 22 }, "attribution": { "type": "string" }, "*": { "type": "*" } },
                "source_raster": { "type": { "required": true, "type": "enum", "values": { "raster": {} } }, "url": { "type": "string" }, "tiles": { "type": "array", "value": "string" }, "bounds": { "type": "array", "value": "number", "length": 4, "default": [-180, -85.0511, 180, 85.0511] }, "minzoom": { "type": "number", "default": 0 }, "maxzoom": { "type": "number", "default": 22 }, "tileSize": { "type": "number", "default": 512, "units": "pixels" }, "scheme": { "type": "enum", "values": { "xyz": {}, "tms": {} }, "default": "xyz" }, "attribution": { "type": "string" }, "*": { "type": "*" } },
                "source_geojson": { "type": { "required": true, "type": "enum", "values": { "geojson": {} } }, "data": { "type": "*" }, "maxzoom": { "type": "number", "default": 18 }, "buffer": { "type": "number", "default": 128, "maximum": 512, "minimum": 0 }, "tolerance": { "type": "number", "default": 0.375 }, "cluster": { "type": "boolean", "default": false }, "clusterRadius": { "type": "number", "default": 50, "minimum": 0 }, "clusterMaxZoom": { "type": "number" } },
                "source_video": { "type": { "required": true, "type": "enum", "values": { "video": {} } }, "urls": { "required": true, "type": "array", "value": "string" }, "coordinates": { "required": true, "type": "array", "length": 4, "value": { "type": "array", "length": 2, "value": "number" } } },
                "source_image": { "type": { "required": true, "type": "enum", "values": { "image": {} } }, "url": { "required": true, "type": "string" }, "coordinates": { "required": true, "type": "array", "length": 4, "value": { "type": "array", "length": 2, "value": "number" } } },
                "source_canvas": { "type": { "required": true, "type": "enum", "values": { "canvas": {} } }, "coordinates": { "required": true, "type": "array", "length": 4, "value": { "type": "array", "length": 2, "value": "number" } }, "animate": { "type": "boolean", "default": "true" }, "canvas": { "type": "string", "required": true } },
                "layer": { "id": { "type": "string", "required": true }, "type": { "type": "enum", "values": { "fill": {}, "line": {}, "symbol": {}, "circle": {}, "heatmap": {}, "fill-extrusion": {}, "raster": {}, "background": {} } }, "metadata": { "type": "*" }, "source": { "type": "string" }, "source-layer": { "type": "string" }, "minzoom": { "type": "number", "minimum": 0, "maximum": 24 }, "maxzoom": { "type": "number", "minimum": 0, "maximum": 24 }, "filter": { "type": "filter" }, "layout": { "type": "layout" }, "paint": { "type": "paint" } },
                "layout": ["layout_fill", "layout_line", "layout_circle", "layout_heatmap", "layout_fill-extrusion", "layout_symbol", "layout_raster", "layout_background"],
                "layout_background": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_fill": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_circle": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_heatmap": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_fill-extrusion": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_line": { "line-cap": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "butt": {}, "round": {}, "square": {} }, "default": "butt" }, "line-join": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "values": { "bevel": {}, "round": {}, "miter": {} }, "default": "miter" }, "line-miter-limit": { "type": "number", "default": 2, "function": "interpolated", "zoom-function": true, "requires": [{ "line-join": "miter" }] }, "line-round-limit": { "type": "number", "default": 1.05, "function": "interpolated", "zoom-function": true, "requires": [{ "line-join": "round" }] }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_symbol": { "symbol-placement": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "point": {}, "line": {} }, "default": "point" }, "symbol-spacing": { "type": "number", "default": 250, "minimum": 1, "function": "interpolated", "zoom-function": true, "units": "pixels", "requires": [{ "symbol-placement": "line" }] }, "symbol-avoid-edges": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false }, "icon-allow-overlap": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["icon-image"] }, "icon-ignore-placement": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["icon-image"] }, "icon-optional": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["icon-image", "text-field"] }, "icon-rotation-alignment": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["icon-image"] }, "icon-size": { "type": "number", "default": 1, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "units": "factor of the original icon size", "requires": ["icon-image"] }, "icon-text-fit": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "none": {}, "width": {}, "height": {}, "both": {} }, "default": "none", "requires": ["icon-image", "text-field"] }, "icon-text-fit-padding": { "type": "array", "value": "number", "length": 4, "default": [0, 0, 0, 0], "units": "pixels", "function": "interpolated", "zoom-function": true, "requires": ["icon-image", "text-field", { "icon-text-fit": ["both", "width", "height"] }] }, "icon-image": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "tokens": true }, "icon-rotate": { "type": "number", "default": 0, "period": 360, "function": "interpolated", "zoom-function": true, "property-function": true, "units": "degrees", "requires": ["icon-image"] }, "icon-padding": { "type": "number", "default": 2, "minimum": 0, "function": "interpolated", "zoom-function": true, "units": "pixels", "requires": ["icon-image"] }, "icon-keep-upright": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["icon-image", { "icon-rotation-alignment": "map" }, { "symbol-placement": "line" }] }, "icon-offset": { "type": "array", "value": "number", "units": "pixels multiplied by the value of \"icon-size\"", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "property-function": true, "requires": ["icon-image"] }, "icon-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "values": { "center": {}, "left": {}, "right": {}, "top": {}, "bottom": {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, "default": "center", "requires": ["icon-image"] }, "icon-pitch-alignment": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["icon-image"] }, "text-pitch-alignment": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["text-field"] }, "text-rotation-alignment": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {}, "auto": {} }, "default": "auto", "requires": ["text-field"] }, "text-field": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "default": "", "tokens": true }, "text-font": { "type": "array", "value": "string", "function": "piecewise-constant", "zoom-function": true, "default": ["Open Sans Regular", "Arial Unicode MS Regular"], "requires": ["text-field"] }, "text-size": { "type": "number", "default": 16, "minimum": 0, "units": "pixels", "function": "interpolated", "zoom-function": true, "property-function": true, "requires": ["text-field"] }, "text-max-width": { "type": "number", "default": 10, "minimum": 0, "units": "ems", "function": "interpolated", "zoom-function": true, "property-function": true, "requires": ["text-field"] }, "text-line-height": { "type": "number", "default": 1.2, "units": "ems", "function": "interpolated", "zoom-function": true, "requires": ["text-field"] }, "text-letter-spacing": { "type": "number", "default": 0, "units": "ems", "function": "interpolated", "zoom-function": true, "property-function": true, "requires": ["text-field"] }, "text-justify": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "values": { "left": {}, "center": {}, "right": {} }, "default": "center", "requires": ["text-field"] }, "text-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "values": { "center": {}, "left": {}, "right": {}, "top": {}, "bottom": {}, "top-left": {}, "top-right": {}, "bottom-left": {}, "bottom-right": {} }, "default": "center", "requires": ["text-field"] }, "text-max-angle": { "type": "number", "default": 45, "units": "degrees", "function": "interpolated", "zoom-function": true, "requires": ["text-field", { "symbol-placement": "line" }] }, "text-rotate": { "type": "number", "default": 0, "period": 360, "units": "degrees", "function": "interpolated", "zoom-function": true, "property-function": true, "requires": ["text-field"] }, "text-padding": { "type": "number", "default": 2, "minimum": 0, "units": "pixels", "function": "interpolated", "zoom-function": true, "requires": ["text-field"] }, "text-keep-upright": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": true, "requires": ["text-field", { "text-rotation-alignment": "map" }, { "symbol-placement": "line" }] }, "text-transform": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "property-function": true, "values": { "none": {}, "uppercase": {}, "lowercase": {} }, "default": "none", "requires": ["text-field"] }, "text-offset": { "type": "array", "value": "number", "units": "ems", "function": "interpolated", "zoom-function": true, "property-function": true, "length": 2, "default": [0, 0], "requires": ["text-field"] }, "text-allow-overlap": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["text-field"] }, "text-ignore-placement": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["text-field"] }, "text-optional": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": false, "requires": ["text-field", "icon-image"] }, "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "layout_raster": { "visibility": { "type": "enum", "values": { "visible": {}, "none": {} }, "default": "visible" } },
                "filter": { "type": "array", "value": "*" },
                "filter_operator": { "type": "enum", "values": { "==": {}, "!=": {}, ">": {}, ">=": {}, "<": {}, "<=": {}, "in": {}, "!in": {}, "all": {}, "any": {}, "none": {}, "has": {}, "!has": {} } },
                "geometry_type": { "type": "enum", "values": { "Point": {}, "LineString": {}, "Polygon": {} } },
                "function": { "expression": { "type": "expression" }, "stops": { "type": "array", "value": "function_stop" }, "base": { "type": "number", "default": 1, "minimum": 0 }, "property": { "type": "string", "default": "$zoom" }, "type": { "type": "enum", "values": { "identity": {}, "exponential": {}, "interval": {}, "categorical": {} }, "default": "exponential" }, "colorSpace": { "type": "enum", "values": { "rgb": {}, "lab": {}, "hcl": {} }, "default": "rgb" }, "default": { "type": "*", "required": false } },
                "function_stop": { "type": "array", "minimum": 0, "maximum": 22, "value": ["number", "color"], "length": 2 },
                "expression": { "type": "array", "value": "*", "minimum": 1 },
                "expression_name": { "type": "enum", "values": { "let": { "group": "Variable binding" }, "var": { "group": "Variable binding" }, "literal": { "group": "Types" }, "array": { "group": "Types" }, "at": { "group": "Lookup" }, "case": { "group": "Decision" }, "match": { "group": "Decision" }, "coalesce": { "group": "Decision" }, "step": { "group": "Ramps, scales, curves" }, "interpolate": { "group": "Ramps, scales, curves" }, "ln2": { "group": "Math" }, "pi": { "group": "Math" }, "e": { "group": "Math" }, "typeof": { "group": "Types" }, "string": { "group": "Types" }, "number": { "group": "Types" }, "boolean": { "group": "Types" }, "object": { "group": "Types" }, "to-string": { "group": "Types" }, "to-number": { "group": "Types" }, "to-boolean": { "group": "Types" }, "to-rgba": { "group": "Color" }, "to-color": { "group": "Types" }, "rgb": { "group": "Color" }, "rgba": { "group": "Color" }, "get": { "group": "Lookup" }, "has": { "group": "Lookup" }, "length": { "group": "Lookup" }, "properties": { "group": "Feature data" }, "geometry-type": { "group": "Feature data" }, "id": { "group": "Feature data" }, "zoom": { "group": "Zoom" }, "heatmap-density": { "group": "Heatmap" }, "+": { "group": "Math" }, "*": { "group": "Math" }, "-": { "group": "Math" }, "/": { "group": "Math" }, "%": { "group": "Math" }, "^": { "group": "Math" }, "sqrt": { "group": "Math" }, "log10": { "group": "Math" }, "ln": { "group": "Math" }, "log2": { "group": "Math" }, "sin": { "group": "Math" }, "cos": { "group": "Math" }, "tan": { "group": "Math" }, "asin": { "group": "Math" }, "acos": { "group": "Math" }, "atan": { "group": "Math" }, "min": { "group": "Math" }, "max": { "group": "Math" }, "==": { "group": "Decision" }, "!=": { "group": "Decision" }, ">": { "group": "Decision" }, "<": { "group": "Decision" }, ">=": { "group": "Decision" }, "<=": { "group": "Decision" }, "all": { "group": "Decision" }, "any": { "group": "Decision" }, "!": { "group": "Decision" }, "upcase": { "group": "String" }, "downcase": { "group": "String" }, "concat": { "group": "String" } } },
                "light": { "anchor": { "type": "enum", "default": "viewport", "values": { "map": {}, "viewport": {} }, "transition": false, "zoom-function": true, "property-function": false, "function": "piecewise-constant" }, "position": { "type": "array", "default": [1.15, 210, 30], "length": 3, "value": "number", "transition": true, "function": "interpolated", "zoom-function": true, "property-function": false }, "color": { "type": "color", "default": "#ffffff", "function": "interpolated", "zoom-function": true, "property-function": false, "transition": true }, "intensity": { "type": "number", "default": 0.5, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": false, "transition": true } },
                "paint": ["paint_fill", "paint_line", "paint_circle", "paint_heatmap", "paint_fill-extrusion", "paint_symbol", "paint_raster", "paint_background"],
                "paint_fill": { "fill-antialias": { "type": "boolean", "function": "piecewise-constant", "zoom-function": true, "default": true }, "fill-opacity": { "type": "number", "function": "interpolated", "zoom-function": true, "property-function": true, "default": 1, "minimum": 0, "maximum": 1, "transition": true }, "fill-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": [{ "!": "fill-pattern" }] }, "fill-outline-color": { "type": "color", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": [{ "!": "fill-pattern" }, { "fill-antialias": true }] }, "fill-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels" }, "fill-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["fill-translate"] }, "fill-pattern": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "transition": true } },
                "paint_fill-extrusion": { "fill-extrusion-opacity": { "type": "number", "function": "interpolated", "zoom-function": true, "property-function": false, "default": 1, "minimum": 0, "maximum": 1, "transition": true }, "fill-extrusion-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": [{ "!": "fill-extrusion-pattern" }] }, "fill-extrusion-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels" }, "fill-extrusion-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["fill-extrusion-translate"] }, "fill-extrusion-pattern": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "transition": true }, "fill-extrusion-height": { "type": "number", "function": "interpolated", "zoom-function": true, "property-function": true, "default": 0, "minimum": 0, "units": "meters", "transition": true }, "fill-extrusion-base": { "type": "number", "function": "interpolated", "zoom-function": true, "property-function": true, "default": 0, "minimum": 0, "units": "meters", "transition": true, "requires": ["fill-extrusion-height"] } },
                "paint_line": { "line-opacity": { "type": "number", "function": "interpolated", "zoom-function": true, "property-function": true, "default": 1, "minimum": 0, "maximum": 1, "transition": true }, "line-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": [{ "!": "line-pattern" }] }, "line-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels" }, "line-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["line-translate"] }, "line-width": { "type": "number", "default": 1, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "line-gap-width": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "line-offset": { "type": "number", "default": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "line-blur": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "line-dasharray": { "type": "array", "value": "number", "function": "piecewise-constant", "zoom-function": true, "minimum": 0, "transition": true, "units": "line widths", "requires": [{ "!": "line-pattern" }] }, "line-pattern": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "transition": true } },
                "paint_circle": { "circle-radius": { "type": "number", "default": 5, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "circle-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true }, "circle-blur": { "type": "number", "default": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true }, "circle-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true }, "circle-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels" }, "circle-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["circle-translate"] }, "circle-pitch-scale": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map" }, "circle-pitch-alignment": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "viewport" }, "circle-stroke-width": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels" }, "circle-stroke-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true }, "circle-stroke-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true } },
                "paint_heatmap": {
                    "heatmap-radius": { "type": "number", "default": 30, "minimum": 1, "function": "interpolated", "zoom-function": true, "property-function": false, "transition": true, "units": "pixels" },
                    "heatmap-weight": { "type": "number", "default": 1, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": false },
                    "heatmap-intensity": { "type": "number", "default": 1, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": false, "transition": true },
                    "heatmap-color": {
                        "type": "color",
                        "default": ["interpolate", ["linear"],
                            ["heatmap-density"], 0, "rgba(0, 0, 255, 0)", 0.1, "royalblue", 0.3, "cyan", 0.5, "lime", 0.7, "yellow", 1, "red"
                        ],
                        "function": "interpolated",
                        "zoom-function": false,
                        "property-function": false,
                        "transition": true
                    },
                    "heatmap-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": false, "transition": true }
                },
                "paint_symbol": { "icon-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["icon-image"] }, "icon-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["icon-image"] }, "icon-halo-color": { "type": "color", "default": "rgba(0, 0, 0, 0)", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["icon-image"] }, "icon-halo-width": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels", "requires": ["icon-image"] }, "icon-halo-blur": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels", "requires": ["icon-image"] }, "icon-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels", "requires": ["icon-image"] }, "icon-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["icon-image", "icon-translate"] }, "text-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["text-field"] }, "text-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["text-field"] }, "text-halo-color": { "type": "color", "default": "rgba(0, 0, 0, 0)", "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "requires": ["text-field"] }, "text-halo-width": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels", "requires": ["text-field"] }, "text-halo-blur": { "type": "number", "default": 0, "minimum": 0, "function": "interpolated", "zoom-function": true, "property-function": true, "transition": true, "units": "pixels", "requires": ["text-field"] }, "text-translate": { "type": "array", "value": "number", "length": 2, "default": [0, 0], "function": "interpolated", "zoom-function": true, "transition": true, "units": "pixels", "requires": ["text-field"] }, "text-translate-anchor": { "type": "enum", "function": "piecewise-constant", "zoom-function": true, "values": { "map": {}, "viewport": {} }, "default": "map", "requires": ["text-field", "text-translate"] } },
                "paint_raster": { "raster-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "transition": true }, "raster-hue-rotate": { "type": "number", "default": 0, "period": 360, "function": "interpolated", "zoom-function": true, "transition": true, "units": "degrees" }, "raster-brightness-min": { "type": "number", "function": "interpolated", "zoom-function": true, "default": 0, "minimum": 0, "maximum": 1, "transition": true }, "raster-brightness-max": { "type": "number", "function": "interpolated", "zoom-function": true, "default": 1, "minimum": 0, "maximum": 1, "transition": true }, "raster-saturation": { "type": "number", "default": 0, "minimum": -1, "maximum": 1, "function": "interpolated", "zoom-function": true, "transition": true }, "raster-contrast": { "type": "number", "default": 0, "minimum": -1, "maximum": 1, "function": "interpolated", "zoom-function": true, "transition": true }, "raster-fade-duration": { "type": "number", "default": 300, "minimum": 0, "function": "interpolated", "zoom-function": true, "transition": true, "units": "milliseconds" } },
                "paint_background": { "background-color": { "type": "color", "default": "#000000", "function": "interpolated", "zoom-function": true, "transition": true, "requires": [{ "!": "background-pattern" }] }, "background-pattern": { "type": "string", "function": "piecewise-constant", "zoom-function": true, "transition": true }, "background-opacity": { "type": "number", "default": 1, "minimum": 0, "maximum": 1, "function": "interpolated", "zoom-function": true, "transition": true } },
                "transition": { "duration": { "type": "number", "default": 300, "minimum": 0, "units": "milliseconds" }, "delay": { "type": "number", "default": 0, "minimum": 0, "units": "milliseconds" } }
            }
        }, {}],
        151: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("csscolorparser"),
                parseCSSColor = ref.parseCSSColor,
                Color = function(r, o, e, s) { void 0 === s && (s = 1), this.r = r, this.g = o, this.b = e, this.a = s };
            Color.parse = function(r) { if (r) { if (r instanceof Color) return r; if ("string" == typeof r) { var o = parseCSSColor(r); if (o) return new Color(o[0] / 255 * o[3], o[1] / 255 * o[3], o[2] / 255 * o[3], o[3]) } } }, module.exports = Color;
        }, { "csscolorparser": 11 }],
        152: [function(_dereq_, module, exports) {
            "use strict";

            function xyz2lab(a) { return a > t3 ? Math.pow(a, 1 / 3) : a / t2 + t0 }

            function lab2xyz(a) { return a > t1 ? a * a * a : t2 * (a - t0) }

            function xyz2rgb(a) { return 255 * (a <= .0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055) }

            function rgb2xyz(a) { return a /= 255, a <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4) }

            function rgbToLab(a) {
                var r = rgb2xyz(a.r),
                    t = rgb2xyz(a.g),
                    b = rgb2xyz(a.b),
                    n = xyz2lab((.4124564 * r + .3575761 * t + .1804375 * b) / Xn),
                    l = xyz2lab((.2126729 * r + .7151522 * t + .072175 * b) / Yn);
                return { l: 116 * l - 16, a: 500 * (n - l), b: 200 * (l - xyz2lab((.0193339 * r + .119192 * t + .9503041 * b) / Zn)), alpha: a.a }
            }

            function labToRgb(a) {
                var r = (a.l + 16) / 116,
                    t = isNaN(a.a) ? r : r + a.a / 500,
                    b = isNaN(a.b) ? r : r - a.b / 200;
                return r = Yn * lab2xyz(r), t = Xn * lab2xyz(t), b = Zn * lab2xyz(b), new Color(xyz2rgb(3.2404542 * t - 1.5371385 * r - .4985314 * b), xyz2rgb(-.969266 * t + 1.8760108 * r + .041556 * b), xyz2rgb(.0556434 * t - .2040259 * r + 1.0572252 * b), a.alpha)
            }

            function rgbToHcl(a) {
                var r = rgbToLab(a),
                    t = r.l,
                    b = r.a,
                    n = r.b,
                    l = Math.atan2(n, b) * rad2deg;
                return { h: l < 0 ? l + 360 : l, c: Math.sqrt(b * b + n * n), l: t, alpha: a.a }
            }

            function hclToRgb(a) {
                var r = a.h * deg2rad,
                    t = a.c;
                return labToRgb({ l: a.l, a: Math.cos(r) * t, b: Math.sin(r) * t, alpha: a.alpha })
            }
            var Color = _dereq_("./color"),
                Xn = .95047,
                Yn = 1,
                Zn = 1.08883,
                t0 = 4 / 29,
                t1 = 6 / 29,
                t2 = 3 * t1 * t1,
                t3 = t1 * t1 * t1,
                deg2rad = Math.PI / 180,
                rad2deg = 180 / Math.PI;
            module.exports = { lab: { forward: rgbToLab, reverse: labToRgb }, hcl: { forward: rgbToHcl, reverse: hclToRgb } };
        }, { "./color": 151 }],
        153: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = function(r) { for (var t = [], e = arguments.length - 1; e-- > 0;) t[e] = arguments[e + 1]; for (var n = 0, o = t; n < o.length; n += 1) { var a = o[n]; for (var f in a) r[f] = a[f] } return r };
        }, {}],
        154: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = function(n) { return n instanceof Number ? "number" : n instanceof String ? "string" : n instanceof Boolean ? "boolean" : Array.isArray(n) ? "array" : null === n ? "null" : typeof n };
        }, {}],
        155: [function(_dereq_, module, exports) {
            "use strict";

            function number(r, n, u) { return r * (1 - u) + n * u }

            function color(r, n, u) { return new Color(number(r.r, n.r, u), number(r.g, n.g, u), number(r.b, n.b, u), number(r.a, n.a, u)) }

            function array(r, n, u) { return r.map(function(r, e) { return number(r, n[e], u) }) }
            var Color = _dereq_("./color");
            module.exports = { number: number, color: color, array: array };
        }, { "./color": 151 }],
        156: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = ["type", "source", "source-layer", "minzoom", "maxzoom", "filter", "layout"];
        }, {}],
        157: [function(_dereq_, module, exports) {
            "use strict";

            function success(r) { return { result: "success", value: r } }

            function error(r) { return { result: "error", value: r } }
            module.exports = { success: success, error: error };
        }, {}],
        158: [function(_dereq_, module, exports) {
            "use strict";

            function unbundle(e) { return e instanceof Number || e instanceof String || e instanceof Boolean ? e.valueOf() : e }

            function deepUnbundle(e) { return Array.isArray(e) ? e.map(deepUnbundle) : unbundle(e) }
            module.exports = unbundle, module.exports.deep = deepUnbundle;
        }, {}],
        159: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type"),
                extend = _dereq_("../util/extend"),
                unbundle = _dereq_("../util/unbundle_jsonlint"),
                ref = _dereq_("../expression"),
                isExpression = ref.isExpression,
                ref$1 = _dereq_("../function"),
                isFunction = ref$1.isFunction;
            module.exports = function(e) {
                var r = _dereq_("./validate_function"),
                    i = _dereq_("./validate_expression"),
                    t = _dereq_("./validate_object"),
                    n = { "*": function() { return [] }, array: _dereq_("./validate_array"), boolean: _dereq_("./validate_boolean"), number: _dereq_("./validate_number"), color: _dereq_("./validate_color"), constants: _dereq_("./validate_constants"), enum: _dereq_("./validate_enum"), filter: _dereq_("./validate_filter"), function: _dereq_("./validate_function"), layer: _dereq_("./validate_layer"), object: _dereq_("./validate_object"), source: _dereq_("./validate_source"), light: _dereq_("./validate_light"), string: _dereq_("./validate_string") },
                    a = e.value,
                    u = e.valueSpec,
                    o = e.key,
                    l = e.styleSpec,
                    s = e.style;
                if ("string" === getType(a) && "@" === a[0]) {
                    if (l.$version > 7) return [new ValidationError(o, a, "constants have been deprecated as of v8")];
                    if (!(a in s.constants)) return [new ValidationError(o, a, 'constant "%s" not found', a)];
                    e = extend({}, e, { value: s.constants[a] })
                }
                return u.function && isFunction(unbundle(a)) ? r(e) : u.function && isExpression(unbundle.deep(a)) ? i(e) : u.type && n[u.type] ? n[u.type](e) : t(extend({}, e, { valueSpec: u.type ? l[u.type] : u }))
            };
        }, { "../error/validation_error": 120, "../expression": 137, "../function": 147, "../util/extend": 153, "../util/get_type": 154, "../util/unbundle_jsonlint": 158, "./validate_array": 160, "./validate_boolean": 161, "./validate_color": 162, "./validate_constants": 163, "./validate_enum": 164, "./validate_expression": 165, "./validate_filter": 166, "./validate_function": 167, "./validate_layer": 169, "./validate_light": 171, "./validate_number": 172, "./validate_object": 173, "./validate_source": 176, "./validate_string": 177 }],
        160: [function(_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"),
                validate = _dereq_("./validate"),
                ValidationError = _dereq_("../error/validation_error");
            module.exports = function(e) {
                var r = e.value,
                    t = e.valueSpec,
                    a = e.style,
                    n = e.styleSpec,
                    l = e.key,
                    i = e.arrayElementValidator || validate;
                if ("array" !== getType(r)) return [new ValidationError(l, r, "array expected, %s found", getType(r))];
                if (t.length && r.length !== t.length) return [new ValidationError(l, r, "array length %d expected, length %d found", t.length, r.length)];
                if (t["min-length"] && r.length < t["min-length"]) return [new ValidationError(l, r, "array length at least %d expected, length %d found", t["min-length"], r.length)];
                var o = { type: t.value };
                n.$version < 7 && (o.function = t.function), "object" === getType(t.value) && (o = t.value);
                for (var u = [], d = 0; d < r.length; d++) u = u.concat(i({ array: r, arrayIndex: d, value: r[d], valueSpec: o, style: a, styleSpec: n, key: l + "[" + d + "]" }));
                return u
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "./validate": 159 }],
        161: [function(_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"),
                ValidationError = _dereq_("../error/validation_error");
            module.exports = function(e) {
                var r = e.value,
                    o = e.key,
                    t = getType(r);
                return "boolean" !== t ? [new ValidationError(o, r, "boolean expected, %s found", t)] : []
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154 }],
        162: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type"),
                parseCSSColor = _dereq_("csscolorparser").parseCSSColor;
            module.exports = function(r) {
                var e = r.key,
                    o = r.value,
                    t = getType(o);
                return "string" !== t ? [new ValidationError(e, o, "color expected, %s found", t)] : null === parseCSSColor(o) ? [new ValidationError(e, o, 'color expected, "%s" found', o)] : []
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "csscolorparser": 11 }],
        163: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error");
            module.exports = function(r) {
                var e = r.key,
                    a = r.value;
                return a ? [new ValidationError(e, a, "constants have been deprecated as of v8")] : []
            };
        }, { "../error/validation_error": 120 }],
        164: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function(e) {
                var r = e.key,
                    n = e.value,
                    u = e.valueSpec,
                    i = [];
                return Array.isArray(u.values) ? -1 === u.values.indexOf(unbundle(n)) && i.push(new ValidationError(r, n, "expected one of [%s], %s found", u.values.join(", "), JSON.stringify(n))) : -1 === Object.keys(u.values).indexOf(unbundle(n)) && i.push(new ValidationError(r, n, "expected one of [%s], %s found", Object.keys(u.values).join(", "), JSON.stringify(n))), i
            };
        }, { "../error/validation_error": 120, "../util/unbundle_jsonlint": 158 }],
        165: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                ref = _dereq_("../expression"),
                createExpression = ref.createExpression,
                createPropertyExpression = ref.createPropertyExpression,
                unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function(e) { var r = ("property" === e.expressionContext ? createPropertyExpression : createExpression)(unbundle.deep(e.value), e.valueSpec); return "error" !== r.result ? [] : r.value.map(function(r) { return new ValidationError("" + e.key + r.key, e.value, r.message) }) };
        }, { "../error/validation_error": 120, "../expression": 137, "../util/unbundle_jsonlint": 158 }],
        166: [function(_dereq_, module, exports) {
            "use strict";

            function validateNonExpressionFilter(e) {
                var r = e.value,
                    t = e.key;
                if ("array" !== getType(r)) return [new ValidationError(t, r, "array expected, %s found", getType(r))];
                var a, n = e.styleSpec,
                    s = [];
                if (r.length < 1) return [new ValidationError(t, r, "filter array must have at least 1 element")];
                switch (s = s.concat(validateEnum({ key: t + "[0]", value: r[0], valueSpec: n.filter_operator, style: e.style, styleSpec: e.styleSpec })), unbundle(r[0])) {
                    case "<":
                    case "<=":
                    case ">":
                    case ">=":
                        r.length >= 2 && "$type" === unbundle(r[1]) && s.push(new ValidationError(t, r, '"$type" cannot be use with operator "%s"', r[0]));
                    case "==":
                    case "!=":
                        3 !== r.length && s.push(new ValidationError(t, r, 'filter array for operator "%s" must have 3 elements', r[0]));
                    case "in":
                    case "!in":
                        r.length >= 2 && "string" !== (a = getType(r[1])) && s.push(new ValidationError(t + "[1]", r[1], "string expected, %s found", a));
                        for (var i = 2; i < r.length; i++) a = getType(r[i]), "$type" === unbundle(r[1]) ? s = s.concat(validateEnum({ key: t + "[" + i + "]", value: r[i], valueSpec: n.geometry_type, style: e.style, styleSpec: e.styleSpec })) : "string" !== a && "number" !== a && "boolean" !== a && s.push(new ValidationError(t + "[" + i + "]", r[i], "string, number, or boolean expected, %s found", a));
                        break;
                    case "any":
                    case "all":
                    case "none":
                        for (var l = 1; l < r.length; l++) s = s.concat(validateNonExpressionFilter({ key: t + "[" + l + "]", value: r[l], style: e.style, styleSpec: e.styleSpec }));
                        break;
                    case "has":
                    case "!has":
                        a = getType(r[1]), 2 !== r.length ? s.push(new ValidationError(t, r, 'filter array for "%s" operator must have 2 elements', r[0])) : "string" !== a && s.push(new ValidationError(t + "[1]", r[1], "string expected, %s found", a))
                }
                return s
            }
            var ValidationError = _dereq_("../error/validation_error"),
                validateExpression = _dereq_("./validate_expression"),
                validateEnum = _dereq_("./validate_enum"),
                getType = _dereq_("../util/get_type"),
                unbundle = _dereq_("../util/unbundle_jsonlint"),
                extend = _dereq_("../util/extend"),
                ref = _dereq_("../feature_filter"),
                isExpressionFilter = ref.isExpressionFilter;
            module.exports = function(e) { return isExpressionFilter(unbundle.deep(e.value)) ? validateExpression(extend({}, e, { expressionContext: "filter", valueSpec: { value: "boolean" } })) : validateNonExpressionFilter(e) };
        }, { "../error/validation_error": 120, "../feature_filter": 146, "../util/extend": 153, "../util/get_type": 154, "../util/unbundle_jsonlint": 158, "./validate_enum": 164, "./validate_expression": 165 }],
        167: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type"),
                validate = _dereq_("./validate"),
                validateObject = _dereq_("./validate_object"),
                validateArray = _dereq_("./validate_array"),
                validateNumber = _dereq_("./validate_number"),
                unbundle = _dereq_("../util/unbundle_jsonlint");
            module.exports = function(e) {
                function t(e) {
                    if ("identity" === p) return [new ValidationError(e.key, e.value, 'identity function may not have a "stops" property')];
                    var t = [],
                        a = e.value;
                    return t = t.concat(validateArray({ key: e.key, value: a, valueSpec: e.valueSpec, style: e.style, styleSpec: e.styleSpec, arrayElementValidator: r })), "array" === getType(a) && 0 === a.length && t.push(new ValidationError(e.key, a, "array must have at least one stop")), t
                }

                function r(e) {
                    var t = [],
                        r = e.value,
                        o = e.key;
                    if ("array" !== getType(r)) return [new ValidationError(o, r, "array expected, %s found", getType(r))];
                    if (2 !== r.length) return [new ValidationError(o, r, "array length %d expected, length %d found", 2, r.length)];
                    if (d) {
                        if ("object" !== getType(r[0])) return [new ValidationError(o, r, "object expected, %s found", getType(r[0]))];
                        if (void 0 === r[0].zoom) return [new ValidationError(o, r, "object stop key must have zoom")];
                        if (void 0 === r[0].value) return [new ValidationError(o, r, "object stop key must have value")];
                        if (l && l > unbundle(r[0].zoom)) return [new ValidationError(o, r[0].zoom, "stop zoom values must appear in ascending order")];
                        unbundle(r[0].zoom) !== l && (l = unbundle(r[0].zoom), i = void 0, s = {}), t = t.concat(validateObject({ key: o + "[0]", value: r[0], valueSpec: { zoom: {} }, style: e.style, styleSpec: e.styleSpec, objectElementValidators: { zoom: validateNumber, value: a } }))
                    } else t = t.concat(a({ key: o + "[0]", value: r[0], valueSpec: {}, style: e.style, styleSpec: e.styleSpec }, r));
                    return t.concat(validate({ key: o + "[1]", value: r[1], valueSpec: u, style: e.style, styleSpec: e.styleSpec }))
                }

                function a(e, t) {
                    var r = getType(e.value),
                        a = unbundle(e.value),
                        o = null !== e.value ? e.value : t;
                    if (n) { if (r !== n) return [new ValidationError(e.key, o, "%s stop domain type must match previous stop domain type %s", r, n)] } else n = r;
                    if ("number" !== r && "string" !== r && "boolean" !== r) return [new ValidationError(e.key, o, "stop domain value must be a number, string, or boolean")];
                    if ("number" !== r && "categorical" !== p) { var l = "number expected, %s found"; return u["property-function"] && void 0 === p && (l += '\nIf you intended to use a categorical function, specify `"type": "categorical"`.'), [new ValidationError(e.key, o, l, r)] }
                    return "categorical" !== p || "number" !== r || isFinite(a) && Math.floor(a) === a ? "categorical" !== p && "number" === r && void 0 !== i && a < i ? [new ValidationError(e.key, o, "stop domain values must appear in ascending order")] : (i = a, "categorical" === p && a in s ? [new ValidationError(e.key, o, "stop domain values must be unique")] : (s[a] = !0, [])) : [new ValidationError(e.key, o, "integer expected, found %s", a)]
                }

                function o(e) { return validate({ key: e.key, value: e.value, valueSpec: u, style: e.style, styleSpec: e.styleSpec }) }
                var n, i, l, u = e.valueSpec,
                    p = unbundle(e.value.type),
                    s = {},
                    y = "categorical" !== p && void 0 === e.value.property,
                    c = !y,
                    d = "array" === getType(e.value.stops) && "array" === getType(e.value.stops[0]) && "object" === getType(e.value.stops[0][0]),
                    v = validateObject({ key: e.key, value: e.value, valueSpec: e.styleSpec.function, style: e.style, styleSpec: e.styleSpec, objectElementValidators: { stops: t, default: o } });
                return "identity" === p && y && v.push(new ValidationError(e.key, e.value, 'missing required property "property"')), "identity" === p || e.value.stops || v.push(new ValidationError(e.key, e.value, 'missing required property "stops"')), "exponential" === p && "piecewise-constant" === e.valueSpec.function && v.push(new ValidationError(e.key, e.value, "exponential functions not supported")), e.styleSpec.$version >= 8 && (c && !e.valueSpec["property-function"] ? v.push(new ValidationError(e.key, e.value, "property functions not supported")) : y && !e.valueSpec["zoom-function"] && "heatmap-color" !== e.objectKey && v.push(new ValidationError(e.key, e.value, "zoom functions not supported"))), "categorical" !== p && !d || void 0 !== e.value.property || v.push(new ValidationError(e.key, e.value, '"property" property is required')), v
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "../util/unbundle_jsonlint": 158, "./validate": 159, "./validate_array": 160, "./validate_number": 172, "./validate_object": 173 }],
        168: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                validateString = _dereq_("./validate_string");
            module.exports = function(r) {
                var e = r.value,
                    t = r.key,
                    a = validateString(r);
                return a.length ? a : (-1 === e.indexOf("{fontstack}") && a.push(new ValidationError(t, e, '"glyphs" url must include a "{fontstack}" token')), -1 === e.indexOf("{range}") && a.push(new ValidationError(t, e, '"glyphs" url must include a "{range}" token')), a)
            };
        }, { "../error/validation_error": 120, "./validate_string": 177 }],
        169: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                unbundle = _dereq_("../util/unbundle_jsonlint"),
                validateObject = _dereq_("./validate_object"),
                validateFilter = _dereq_("./validate_filter"),
                validatePaintProperty = _dereq_("./validate_paint_property"),
                validateLayoutProperty = _dereq_("./validate_layout_property"),
                extend = _dereq_("../util/extend");
            module.exports = function(e) {
                var r = [],
                    t = e.value,
                    a = e.key,
                    i = e.style,
                    l = e.styleSpec;
                t.type || t.ref || r.push(new ValidationError(a, t, 'either "type" or "ref" is required'));
                var u = unbundle(t.type),
                    n = unbundle(t.ref);
                if (t.id)
                    for (var o = unbundle(t.id), s = 0; s < e.arrayIndex; s++) {
                        var d = i.layers[s];
                        unbundle(d.id) === o && r.push(new ValidationError(a, t.id, 'duplicate layer id "%s", previously used at line %d', t.id, d.id.__line__))
                    }
                if ("ref" in t) {
                    ["type", "source", "source-layer", "filter", "layout"].forEach(function(e) { e in t && r.push(new ValidationError(a, t[e], '"%s" is prohibited for ref layers', e)) });
                    var y;
                    i.layers.forEach(function(e) { unbundle(e.id) === n && (y = e) }), y ? y.ref ? r.push(new ValidationError(a, t.ref, "ref cannot reference another ref layer")) : u = unbundle(y.type) : r.push(new ValidationError(a, t.ref, 'ref layer "%s" not found', n))
                } else if ("background" !== u)
                    if (t.source) {
                        var c = i.sources && i.sources[t.source],
                            p = c && unbundle(c.type);
                        c ? "vector" === p && "raster" === u ? r.push(new ValidationError(a, t.source, 'layer "%s" requires a raster source', t.id)) : "raster" === p && "raster" !== u ? r.push(new ValidationError(a, t.source, 'layer "%s" requires a vector source', t.id)) : "vector" !== p || t["source-layer"] || r.push(new ValidationError(a, t, 'layer "%s" must specify a "source-layer"', t.id)) : r.push(new ValidationError(a, t.source, 'source "%s" not found', t.source))
                    } else r.push(new ValidationError(a, t, 'missing required property "source"'));
                return r = r.concat(validateObject({ key: a, value: t, valueSpec: l.layer, style: e.style, styleSpec: e.styleSpec, objectElementValidators: { "*": function() { return [] }, filter: validateFilter, layout: function(e) { return validateObject({ layer: t, key: e.key, value: e.value, style: e.style, styleSpec: e.styleSpec, objectElementValidators: { "*": function(e) { return validateLayoutProperty(extend({ layerType: u }, e)) } } }) }, paint: function(e) { return validateObject({ layer: t, key: e.key, value: e.value, style: e.style, styleSpec: e.styleSpec, objectElementValidators: { "*": function(e) { return validatePaintProperty(extend({ layerType: u }, e)) } } }) } } }))
            };
        }, { "../error/validation_error": 120, "../util/extend": 153, "../util/unbundle_jsonlint": 158, "./validate_filter": 166, "./validate_layout_property": 170, "./validate_object": 173, "./validate_paint_property": 174 }],
        170: [function(_dereq_, module, exports) {
            "use strict";
            var validateProperty = _dereq_("./validate_property");
            module.exports = function(r) { return validateProperty(r, "layout") };
        }, { "./validate_property": 175 }],
        171: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type"),
                validate = _dereq_("./validate");
            module.exports = function(e) {
                var t = e.value,
                    r = e.styleSpec,
                    a = r.light,
                    i = e.style,
                    n = [],
                    o = getType(t);
                if (void 0 === t) return n;
                if ("object" !== o) return n = n.concat([new ValidationError("light", t, "object expected, %s found", o)]);
                for (var l in t) {
                    var c = l.match(/^(.*)-transition$/);
                    n = c && a[c[1]] && a[c[1]].transition ? n.concat(validate({ key: l, value: t[l], valueSpec: r.transition, style: i, styleSpec: r })) : a[l] ? n.concat(validate({ key: l, value: t[l], valueSpec: a[l], style: i, styleSpec: r })) : n.concat([new ValidationError(l, t[l], 'unknown property "%s"', l)])
                }
                return n
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "./validate": 159 }],
        172: [function(_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"),
                ValidationError = _dereq_("../error/validation_error");
            module.exports = function(e) {
                var r = e.key,
                    i = e.value,
                    m = e.valueSpec,
                    a = getType(i);
                return "number" !== a ? [new ValidationError(r, i, "number expected, %s found", a)] : "minimum" in m && i < m.minimum ? [new ValidationError(r, i, "%s is less than the minimum value %s", i, m.minimum)] : "maximum" in m && i > m.maximum ? [new ValidationError(r, i, "%s is greater than the maximum value %s", i, m.maximum)] : []
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154 }],
        173: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type"),
                validateSpec = _dereq_("./validate");
            module.exports = function(e) {
                var r = e.key,
                    t = e.value,
                    i = e.valueSpec || {},
                    a = e.objectElementValidators || {},
                    o = e.style,
                    l = e.styleSpec,
                    n = [],
                    u = getType(t);
                if ("object" !== u) return [new ValidationError(r, t, "object expected, %s found", u)];
                for (var d in t) {
                    var p = d.split(".")[0],
                        s = i[p] || i["*"],
                        c = void 0;
                    if (a[p]) c = a[p];
                    else if (i[p]) c = validateSpec;
                    else if (a["*"]) c = a["*"];
                    else {
                        if (!i["*"]) { n.push(new ValidationError(r, t[d], 'unknown property "%s"', d)); continue }
                        c = validateSpec
                    }
                    n = n.concat(c({ key: (r ? r + "." : r) + d, value: t[d], valueSpec: s, style: o, styleSpec: l, object: t, objectKey: d }, t))
                }
                for (var v in i) i[v].required && void 0 === i[v].default && void 0 === t[v] && n.push(new ValidationError(r, t, 'missing required property "%s"', v));
                return n
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "./validate": 159 }],
        174: [function(_dereq_, module, exports) {
            "use strict";
            var validateProperty = _dereq_("./validate_property");
            module.exports = function(r) { return validateProperty(r, "paint") };
        }, { "./validate_property": 175 }],
        175: [function(_dereq_, module, exports) {
            "use strict";
            var validate = _dereq_("./validate"),
                ValidationError = _dereq_("../error/validation_error"),
                getType = _dereq_("../util/get_type");
            module.exports = function(e, t) {
                var r = e.key,
                    i = e.style,
                    n = e.styleSpec,
                    a = e.value,
                    o = e.objectKey,
                    p = n[t + "_" + e.layerType];
                if (!p) return [];
                var y = o.match(/^(.*)-transition$/);
                if ("paint" === t && y && p[y[1]] && p[y[1]].transition) return validate({ key: r, value: a, valueSpec: n.transition, style: i, styleSpec: n });
                var l = e.valueSpec || p[o];
                if (!l) return [new ValidationError(r, a, 'unknown property "%s"', o)];
                var s;
                if ("string" === getType(a) && l["property-function"] && !l.tokens && (s = /^{([^}]+)}$/.exec(a))) return [new ValidationError(r, a, '"%s" does not support interpolation syntax\nUse an identity property function instead: `{ "type": "identity", "property": %s` }`.', o, JSON.stringify(s[1]))];
                var u = [];
                return "symbol" === e.layerType && "text-field" === o && i && !i.glyphs && u.push(new ValidationError(r, a, 'use of "text-field" requires a style "glyphs" property')), u.concat(validate({ key: e.key, value: a, valueSpec: l, style: i, styleSpec: n, expressionContext: "property" }))
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154, "./validate": 159 }],
        176: [function(_dereq_, module, exports) {
            "use strict";
            var ValidationError = _dereq_("../error/validation_error"),
                unbundle = _dereq_("../util/unbundle_jsonlint"),
                validateObject = _dereq_("./validate_object"),
                validateEnum = _dereq_("./validate_enum");
            module.exports = function(e) {
                var a = e.value,
                    t = e.key,
                    r = e.styleSpec,
                    l = e.style;
                if (!a.type) return [new ValidationError(t, a, '"type" is required')];
                var u = unbundle(a.type),
                    i = [];
                switch (u) {
                    case "vector":
                    case "raster":
                        if (i = i.concat(validateObject({ key: t, value: a, valueSpec: r["source_" + u], style: e.style, styleSpec: r })), "url" in a)
                            for (var s in a)["type", "url", "tileSize"].indexOf(s) < 0 && i.push(new ValidationError(t + "." + s, a[s], 'a source with a "url" property may not include a "%s" property', s));
                        return i;
                    case "geojson":
                        return validateObject({ key: t, value: a, valueSpec: r.source_geojson, style: l, styleSpec: r });
                    case "video":
                        return validateObject({ key: t, value: a, valueSpec: r.source_video, style: l, styleSpec: r });
                    case "image":
                        return validateObject({ key: t, value: a, valueSpec: r.source_image, style: l, styleSpec: r });
                    case "canvas":
                        return validateObject({ key: t, value: a, valueSpec: r.source_canvas, style: l, styleSpec: r });
                    default:
                        return validateEnum({ key: t + ".type", value: a.type, valueSpec: { values: ["vector", "raster", "geojson", "video", "image", "canvas"] }, style: l, styleSpec: r })
                }
            };
        }, { "../error/validation_error": 120, "../util/unbundle_jsonlint": 158, "./validate_enum": 164, "./validate_object": 173 }],
        177: [function(_dereq_, module, exports) {
            "use strict";
            var getType = _dereq_("../util/get_type"),
                ValidationError = _dereq_("../error/validation_error");
            module.exports = function(r) {
                var e = r.value,
                    t = r.key,
                    i = getType(e);
                return "string" !== i ? [new ValidationError(t, e, "string expected, %s found", i)] : []
            };
        }, { "../error/validation_error": 120, "../util/get_type": 154 }],
        178: [function(_dereq_, module, exports) {
            "use strict";

            function validateStyleMin(e, a) { a = a || latestStyleSpec; var t = []; return t = t.concat(validate({ key: "", value: e, valueSpec: a.$root, styleSpec: a, style: e, objectElementValidators: { glyphs: validateGlyphsURL, "*": function() { return [] } } })), e.constants && (t = t.concat(validateConstants({ key: "constants", value: e.constants, style: e, styleSpec: a }))), sortErrors(t) }

            function sortErrors(e) { return [].concat(e).sort(function(e, a) { return e.line - a.line }) }

            function wrapCleanErrors(e) { return function() { return sortErrors(e.apply(this, arguments)) } }
            var validateConstants = _dereq_("./validate/validate_constants"),
                validate = _dereq_("./validate/validate"),
                latestStyleSpec = _dereq_("./reference/latest"),
                validateGlyphsURL = _dereq_("./validate/validate_glyphs_url");
            validateStyleMin.source = wrapCleanErrors(_dereq_("./validate/validate_source")), validateStyleMin.light = wrapCleanErrors(_dereq_("./validate/validate_light")), validateStyleMin.layer = wrapCleanErrors(_dereq_("./validate/validate_layer")), validateStyleMin.filter = wrapCleanErrors(_dereq_("./validate/validate_filter")), validateStyleMin.paintProperty = wrapCleanErrors(_dereq_("./validate/validate_paint_property")), validateStyleMin.layoutProperty = wrapCleanErrors(_dereq_("./validate/validate_layout_property")), module.exports = validateStyleMin;
        }, { "./reference/latest": 149, "./validate/validate": 159, "./validate/validate_constants": 163, "./validate/validate_filter": 166, "./validate/validate_glyphs_url": 168, "./validate/validate_layer": 169, "./validate/validate_layout_property": 170, "./validate/validate_light": 171, "./validate/validate_paint_property": 174, "./validate/validate_source": 176 }],
        179: [function(_dereq_, module, exports) {
            "use strict";
            var AnimationLoop = function() { this.n = 0, this.times = [] };
            AnimationLoop.prototype.stopped = function() { return this.times = this.times.filter(function(t) { return t.time >= (new Date).getTime() }), !this.times.length }, AnimationLoop.prototype.set = function(t) { return this.times.push({ id: this.n, time: t + (new Date).getTime() }), this.n++ }, AnimationLoop.prototype.cancel = function(t) { this.times = this.times.filter(function(i) { return i.id !== t }) }, module.exports = AnimationLoop;
        }, {}],
        180: [function(_dereq_, module, exports) {
            "use strict";
            var styleSpec = _dereq_("../style-spec/reference/latest"),
                util = _dereq_("../util/util"),
                Evented = _dereq_("../util/evented"),
                validateStyle = _dereq_("./validate_style"),
                StyleDeclaration = _dereq_("./style_declaration"),
                StyleTransition = _dereq_("./style_transition"),
                TRANSITION_SUFFIX = "-transition",
                properties = ["anchor", "color", "position", "intensity"],
                specifications = styleSpec.light,
                Light = function(t) {
                    function i(i) { t.call(this), this.set(i) }
                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.set = function(t) {
                        var i = this;
                        if (!this._validate(validateStyle.light, t)) {
                            this._declarations = {}, this._transitions = {}, this._transitionOptions = {}, this.calculated = {}, t = util.extend({ anchor: specifications.anchor.default, color: specifications.color.default, position: specifications.position.default, intensity: specifications.intensity.default }, t);
                            for (var e = 0, o = properties; e < o.length; e += 1) {
                                var n = o[e];
                                i._declarations[n] = new StyleDeclaration(specifications[n], t[n])
                            }
                            return this
                        }
                    }, i.prototype.getLight = function() { return { anchor: this.getLightProperty("anchor"), color: this.getLightProperty("color"), position: this.getLightProperty("position"), intensity: this.getLightProperty("intensity") } }, i.prototype.getLightProperty = function(t) { return util.endsWith(t, TRANSITION_SUFFIX) ? this._transitionOptions[t] : this._declarations[t] && this._declarations[t].value }, i.prototype.getLightValue = function(t, i) {
                        if ("position" === t) {
                            var e = this._transitions[t].calculate(i),
                                o = util.sphericalToCartesian(e);
                            return { x: o[0], y: o[1], z: o[2] }
                        }
                        return this._transitions[t].calculate(i)
                    }, i.prototype.setLight = function(t) {
                        var i = this;
                        if (!this._validate(validateStyle.light, t))
                            for (var e in t) {
                                var o = t[e];
                                util.endsWith(e, TRANSITION_SUFFIX) ? i._transitionOptions[e] = o : null === o || void 0 === o ? delete i._declarations[e] : i._declarations[e] = new StyleDeclaration(specifications[e], o)
                            }
                    }, i.prototype.recalculate = function(t) { var i = this; for (var e in i._declarations) i.calculated[e] = i.getLightValue(e, { zoom: t }) }, i.prototype._applyLightDeclaration = function(t, i, e, o, n) {
                        var r = e.transition ? this._transitions[t] : void 0,
                            a = specifications[t];
                        if (null !== i && void 0 !== i || (i = new StyleDeclaration(a, a.default)), !r || r.declaration.json !== i.json) {
                            var s = util.extend({ duration: 300, delay: 0 }, o, this.getLightProperty(t + TRANSITION_SUFFIX)),
                                l = this._transitions[t] = new StyleTransition(a, i, r, s);
                            l.instant() || (l.loopID = n.set(l.endTime - Date.now())), r && n.cancel(r.loopID)
                        }
                    }, i.prototype.updateLightTransitions = function(t, i, e) { var o, n = this; for (o in n._declarations) n._applyLightDeclaration(o, n._declarations[o], t, i, e) }, i.prototype._validate = function(t, i) { return validateStyle.emitErrors(this, t.call(validateStyle, util.extend({ value: i, style: { glyphs: !0, sprite: !0 }, styleSpec: styleSpec }))) }, i
                }(Evented);
            module.exports = Light;
        }, { "../style-spec/reference/latest": 149, "../util/evented": 248, "../util/util": 260, "./style_declaration": 187, "./style_transition": 198, "./validate_style": 199 }],
        181: [function(_dereq_, module, exports) {
            "use strict";
            var ref = _dereq_("../util/mapbox"),
                normalizeGlyphsURL = ref.normalizeGlyphsURL,
                ajax = _dereq_("../util/ajax"),
                parseGlyphPBF = _dereq_("./parse_glyph_pbf");
            module.exports = function(e, r, a, l, p) {
                var i = 256 * r,
                    s = i + 255,
                    t = l(normalizeGlyphsURL(a).replace("{fontstack}", e).replace("{range}", i + "-" + s), ajax.ResourceType.Glyphs);
                ajax.getArrayBuffer(t, function(e, r) {
                    if (e) p(e);
                    else if (r) {
                        for (var a = {}, l = 0, i = parseGlyphPBF(r.data); l < i.length; l += 1) {
                            var s = i[l];
                            a[s.id] = s
                        }
                        p(null, a)
                    }
                })
            };
        }, { "../util/ajax": 239, "../util/mapbox": 255, "./parse_glyph_pbf": 183 }],
        182: [function(_dereq_, module, exports) {
            "use strict";
            var ajax = _dereq_("../util/ajax"),
                browser = _dereq_("../util/browser"),
                ref = _dereq_("../util/mapbox"),
                normalizeSpriteURL = ref.normalizeSpriteURL,
                ref$1 = _dereq_("../util/image"),
                RGBAImage = ref$1.RGBAImage;
            module.exports = function(e, r, i) {
                function a() {
                    if (u) i(u);
                    else if (t && o) {
                        var e = browser.getImageData(o),
                            r = {};
                        for (var a in t) {
                            var n = t[a],
                                g = n.width,
                                l = n.height,
                                x = n.x,
                                m = n.y,
                                p = n.sdf,
                                f = n.pixelRatio,
                                s = RGBAImage.create({ width: g, height: l });
                            RGBAImage.copy(e, s, { x: x, y: m }, { x: 0, y: 0 }, { width: g, height: l }), r[a] = { data: s, pixelRatio: f, sdf: p }
                        }
                        i(null, r)
                    }
                }
                var t, o, u, n = browser.devicePixelRatio > 1 ? "@2x" : "";
                ajax.getJSON(r(normalizeSpriteURL(e, n, ".json"), ajax.ResourceType.SpriteJSON), function(e, r) { u || (u = e, t = r, a()) }), ajax.getImage(r(normalizeSpriteURL(e, n, ".png"), ajax.ResourceType.SpriteImage), function(e, r) { u || (u = e, o = r, a()) })
            };
        }, { "../util/ajax": 239, "../util/browser": 240, "../util/image": 251, "../util/mapbox": 255 }],
        183: [function(_dereq_, module, exports) {
            "use strict";

            function readFontstacks(e, a, r) { 1 === e && r.readMessage(readFontstack, a) }

            function readFontstack(e, a, r) {
                if (3 === e) {
                    var t = r.readMessage(readGlyph, {}),
                        d = t.id,
                        i = t.bitmap,
                        n = t.width,
                        o = t.height,
                        h = t.left,
                        s = t.top,
                        p = t.advance;
                    a.push({ id: d, bitmap: AlphaImage.create({ width: n + 2 * border, height: o + 2 * border }, i), metrics: { width: n, height: o, left: h, top: s, advance: p } })
                }
            }

            function readGlyph(e, a, r) { 1 === e ? a.id = r.readVarint() : 2 === e ? a.bitmap = r.readBytes() : 3 === e ? a.width = r.readVarint() : 4 === e ? a.height = r.readVarint() : 5 === e ? a.left = r.readSVarint() : 6 === e ? a.top = r.readSVarint() : 7 === e && (a.advance = r.readVarint()) }
            var ref = _dereq_("../util/image"),
                AlphaImage = ref.AlphaImage,
                Protobuf = _dereq_("pbf"),
                border = 3;
            module.exports = function(e) { return new Protobuf(e).readFields(readFontstacks, []) }, module.exports.GLYPH_PBF_BORDER = border;
        }, { "../util/image": 251, "pbf": 38 }],
        184: [function(_dereq_, module, exports) {
            "use strict";

            function compareTileCoords(e, n) {
                var r = TileCoord.fromID(e),
                    i = TileCoord.fromID(n);
                return r.isLessThan(i) ? -1 : i.isLessThan(r) ? 1 : 0
            }
            var browser = _dereq_("../util/browser"),
                CollisionIndex = _dereq_("../symbol/collision_index"),
                TileCoord = _dereq_("../source/tile_coord"),
                LayerPlacement = function(e) { this._currentTileIndex = 0, this._tileIDs = e };
            LayerPlacement.prototype.continuePlacement = function(e, n, r, i, o) { for (var t = this; this._currentTileIndex < this._tileIDs.length;) { if (e.getTileByID(t._tileIDs[t._currentTileIndex]).placeLayer(r, n, i, e.id), t._currentTileIndex++, o()) return !0 } };
            var Placement = function(e, n, r, i, o, t) { this.collisionIndex = new CollisionIndex(e.clone()), this._currentPlacementIndex = n.length - 1, this._forceFullPlacement = r, this._showCollisionBoxes = i, this._sourceCacheTileIDs = {}, this._done = !1, this._delayUntil = r || !t ? browser.now() : t._delayUntil + 300, this._collisionFadeTimes = t ? t._collisionFadeTimes : { latestStart: 0, duration: o } };
            Placement.prototype.isDone = function() { return this._done }, Placement.prototype.continuePlacement = function(e, n, r) {
                var i = this,
                    o = browser.now();
                if (o < this._delayUntil) return !0;
                for (var t = function() { var e = browser.now() - o; return !i._forceFullPlacement && e > 2 }; this._currentPlacementIndex >= 0;) {
                    var s = e[i._currentPlacementIndex],
                        l = n[s];
                    if ("symbol" === l.type) {
                        var c = r[l.source];
                        i._inProgressLayer || (i._sourceCacheTileIDs[l.source] || (i._sourceCacheTileIDs[l.source] = c.getRenderableIds().sort(compareTileCoords)), i._inProgressLayer = new LayerPlacement(i._sourceCacheTileIDs[l.source]));
                        if (i._inProgressLayer.continuePlacement(c, i.collisionIndex, i._showCollisionBoxes, l, t)) return;
                        delete i._inProgressLayer
                    }
                    i._currentPlacementIndex--
                }
                for (var a in r) r[a].commitPlacement(i.collisionIndex, i._collisionFadeTimes);
                this._done = !0
            }, Placement.prototype.stillFading = function() { return Date.now() < this._collisionFadeTimes.latestStart + this._collisionFadeTimes.duration }, module.exports = Placement;
        }, { "../source/tile_coord": 112, "../symbol/collision_index": 205, "../util/browser": 240 }],
        185: [function(_dereq_, module, exports) {
            "use strict";

            function getMaximumPaintValue(t, a, e) { return a.isPaintValueFeatureConstant(t) ? a.paint[t] : e.programConfigurations.get(a.id).paintPropertyStatistics[t].max }

            function translateDistance(t) { return Math.sqrt(t[0] * t[0] + t[1] * t[1]) }

            function translate(t, a, e, n, r) {
                if (!a[0] && !a[1]) return t;
                var i = Point.convert(a);
                "viewport" === e && i._rotate(-n);
                for (var u = [], s = 0; s < t.length; s++) {
                    for (var o = t[s], l = [], m = 0; m < o.length; m++) l.push(o[m].sub(i._mult(r)));
                    u.push(l)
                }
                return u
            }
            var Point = _dereq_("@mapbox/point-geometry");
            module.exports = { getMaximumPaintValue: getMaximumPaintValue, translateDistance: translateDistance, translate: translate };
        }, { "@mapbox/point-geometry": 2 }],
        186: [function(_dereq_, module, exports) {
            "use strict";
            var Evented = _dereq_("../util/evented"),
                StyleLayer = _dereq_("./style_layer"),
                loadSprite = _dereq_("./load_sprite"),
                ImageManager = _dereq_("../render/image_manager"),
                GlyphManager = _dereq_("../render/glyph_manager"),
                Light = _dereq_("./light"),
                LineAtlas = _dereq_("../render/line_atlas"),
                util = _dereq_("../util/util"),
                ajax = _dereq_("../util/ajax"),
                mapbox = _dereq_("../util/mapbox"),
                browser = _dereq_("../util/browser"),
                Dispatcher = _dereq_("../util/dispatcher"),
                AnimationLoop = _dereq_("./animation_loop"),
                validateStyle = _dereq_("./validate_style"),
                getSourceType = _dereq_("../source/source").getType,
                setSourceType = _dereq_("../source/source").setType,
                QueryFeatures = _dereq_("../source/query_features"),
                SourceCache = _dereq_("../source/source_cache"),
                GeoJSONSource = _dereq_("../source/geojson_source"),
                styleSpec = _dereq_("../style-spec/reference/latest"),
                getWorkerPool = _dereq_("../util/global_worker_pool"),
                deref = _dereq_("../style-spec/deref"),
                diff = _dereq_("../style-spec/diff"),
                rtlTextPlugin = _dereq_("../source/rtl_text_plugin"),
                Placement = _dereq_("./placement"),
                supportedDiffOperations = util.pick(diff.operations, ["addLayer", "removeLayer", "setPaintProperty", "setLayoutProperty", "setFilter", "addSource", "removeSource", "setLayerZoomRange", "setLight", "setTransition", "setGeoJSONSourceData"]),
                ignoredDiffOperations = util.pick(diff.operations, ["setCenter", "setZoom", "setBearing", "setPitch"]),
                Style = function(e) {
                    function t(t, r) {
                        var a = this;
                        void 0 === r && (r = {}), e.call(this), this.map = t, this.animationLoop = t && t.animationLoop || new AnimationLoop, this.dispatcher = new Dispatcher(getWorkerPool(), this), this.imageManager = new ImageManager, this.glyphManager = new GlyphManager(t._transformRequest, r.localIdeographFontFamily), this.lineAtlas = new LineAtlas(256, 512), this._layers = {}, this._order = [], this.sourceCaches = {}, this.zoomHistory = {}, this._loaded = !1, this._resetUpdates();
                        var i = this;
                        this._rtlTextPluginCallback = rtlTextPlugin.registerForPluginAvailability(function(e) { i.dispatcher.broadcast("loadRTLTextPlugin", e.pluginBlobURL, e.errorCallback); for (var t in i.sourceCaches) i.sourceCaches[t].reload() }), this.on("data", function(e) {
                            if ("source" === e.dataType && "metadata" === e.sourceDataType) {
                                var t = a.sourceCaches[e.sourceId];
                                if (t) {
                                    var r = t.getSource();
                                    if (r && r.vectorLayerIds)
                                        for (var i in a._layers) {
                                            var o = a._layers[i];
                                            o.source === r.id && a._validateLayer(o)
                                        }
                                }
                            }
                        })
                    }
                    return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.loadURL = function(e, t) {
                        var r = this;
                        void 0 === t && (t = {}), this.fire("dataloading", { dataType: "style" });
                        var a = "boolean" == typeof t.validate ? t.validate : !mapbox.isMapboxURL(e);
                        e = mapbox.normalizeStyleURL(e, t.accessToken);
                        var i = this.map._transformRequest(e, ajax.ResourceType.Style);
                        ajax.getJSON(i, function(e, t) { e ? r.fire("error", { error: e }) : t && r._load(t, a) })
                    }, t.prototype.loadJSON = function(e, t) {
                        var r = this;
                        void 0 === t && (t = {}), this.fire("dataloading", { dataType: "style" }), browser.frame(function() { r._load(e, !1 !== t.validate) })
                    }, t.prototype._load = function(e, t) {
                        var r = this;
                        if (!t || !validateStyle.emitErrors(this, validateStyle(e))) {
                            this._loaded = !0, this.stylesheet = e, this.updatePaintProperties();
                            for (var a in e.sources) r.addSource(a, e.sources[a], { validate: !1 });
                            e.sprite ? loadSprite(e.sprite, this.map._transformRequest, function(e, t) {
                                if (e) r.fire("error", e);
                                else if (t)
                                    for (var a in t) r.imageManager.addImage(a, t[a]);
                                r.imageManager.setLoaded(!0), r.fire("data", { dataType: "style" })
                            }) : this.imageManager.setLoaded(!0), this.glyphManager.setURL(e.glyphs);
                            var i = deref(this.stylesheet.layers);
                            this._order = i.map(function(e) { return e.id }), this._layers = {};
                            for (var o = 0, s = i; o < s.length; o += 1) {
                                var n = s[o];
                                n = StyleLayer.create(n), n.setEventedParent(r, { layer: { id: n.id } }), r._layers[n.id] = n
                            }
                            this.dispatcher.broadcast("setLayers", this._serializeLayers(this._order)), this.light = new Light(this.stylesheet.light), this.fire("data", { dataType: "style" }), this.fire("style.load")
                        }
                    }, t.prototype._validateLayer = function(e) {
                        var t = this.sourceCaches[e.source];
                        if (t) {
                            var r = e.sourceLayer;
                            if (r) {
                                var a = t.getSource();
                                ("geojson" === a.type || a.vectorLayerIds && -1 === a.vectorLayerIds.indexOf(r)) && this.fire("error", { error: new Error('Source layer "' + r + '" does not exist on source "' + a.id + '" as specified by style layer "' + e.id + '"') })
                            }
                        }
                    }, t.prototype.loaded = function() {
                        var e = this;
                        if (!this._loaded) return !1;
                        if (Object.keys(this._updatedSources).length) return !1;
                        for (var t in e.sourceCaches)
                            if (!e.sourceCaches[t].loaded()) return !1;
                        return !!this.imageManager.isLoaded()
                    }, t.prototype._serializeLayers = function(e) { var t = this; return e.map(function(e) { return t._layers[e].serialize() }) }, t.prototype._applyPaintPropertyUpdates = function(e) {
                        var t = this;
                        if (this._loaded) {
                            e = e || { transition: !0 };
                            var r = this.stylesheet.transition || {},
                                a = this._updatedAllPaintProps ? this._layers : this._updatedPaintProps;
                            for (var i in a) {
                                var o = t._layers[i],
                                    s = t._updatedPaintProps[i];
                                if (t._updatedAllPaintProps || s.all) o.updatePaintTransitions(e, r, t.animationLoop, t.zoomHistory);
                                else
                                    for (var n in s) t._layers[i].updatePaintTransition(n, e, r, t.animationLoop, t.zoomHistory)
                            }
                            this.light.updateLightTransitions(e, r, this.animationLoop)
                        }
                    }, t.prototype._recalculate = function(e) {
                        var t = this;
                        if (this._loaded) {
                            for (var r in t.sourceCaches) t.sourceCaches[r].used = !1;
                            this._updateZoomHistory(e);
                            for (var a = 0, i = t._order; a < i.length; a += 1) {
                                var o = i[a],
                                    s = t._layers[o];
                                s.recalculate(e), !s.isHidden(e) && s.source && (t.sourceCaches[s.source].used = !0)
                            }
                            this.light.recalculate(e);
                            Math.floor(this.z) !== Math.floor(e) && this.animationLoop.set(300), this.z = e
                        }
                    }, t.prototype._updateZoomHistory = function(e) {
                        var t = this.zoomHistory;
                        void 0 === t.lastIntegerZoom && (t.lastIntegerZoom = Math.floor(e), t.lastIntegerZoomTime = 0, t.lastZoom = e), Math.floor(t.lastZoom) < Math.floor(e) ? (t.lastIntegerZoom = Math.floor(e), t.lastIntegerZoomTime = Date.now()) : Math.floor(t.lastZoom) > Math.floor(e) && (t.lastIntegerZoom = Math.floor(e + 1), t.lastIntegerZoomTime = Date.now()), t.lastZoom = e
                    }, t.prototype._checkLoaded = function() { if (!this._loaded) throw new Error("Style is not done loading") }, t.prototype.update = function(e) {
                        var t = this;
                        if (this._changed) {
                            var r = Object.keys(this._updatedLayers),
                                a = Object.keys(this._removedLayers);
                            (r.length || a.length) && this._updateWorkerLayers(r, a);
                            for (var i in t._updatedSources) { var o = t._updatedSources[i]; "reload" === o ? t._reloadSource(i) : "clear" === o && t._clearSource(i) }
                            this._applyPaintPropertyUpdates(e), this._resetUpdates(), this.fire("data", { dataType: "style" })
                        }
                    }, t.prototype._updateWorkerLayers = function(e, t) { this.dispatcher.broadcast("updateLayers", { layers: this._serializeLayers(e), removedIds: t }) }, t.prototype._resetUpdates = function() { this._changed = !1, this._updatedLayers = {}, this._removedLayers = {}, this._updatedSources = {}, this._updatedPaintProps = {}, this._updatedAllPaintProps = !1 }, t.prototype.setState = function(e) {
                        var t = this;
                        if (this._checkLoaded(), validateStyle.emitErrors(this, validateStyle(e))) return !1;
                        e = util.clone(e), e.layers = deref(e.layers);
                        var r = diff(this.serialize(), e).filter(function(e) { return !(e.command in ignoredDiffOperations) });
                        if (0 === r.length) return !1;
                        var a = r.filter(function(e) { return !(e.command in supportedDiffOperations) });
                        if (a.length > 0) throw new Error("Unimplemented: " + a.map(function(e) { return e.command }).join(", ") + ".");
                        return r.forEach(function(e) { "setTransition" !== e.command && t[e.command].apply(t, e.args) }), this.stylesheet = e, !0
                    }, t.prototype.addImage = function(e, t) {
                        if (this.imageManager.getImage(e)) return this.fire("error", { error: new Error("An image with this name already exists.") });
                        this.imageManager.addImage(e, t), this.fire("data", { dataType: "style" })
                    }, t.prototype.removeImage = function(e) {
                        if (!this.imageManager.getImage(e)) return this.fire("error", { error: new Error("No image with this name exists.") });
                        this.imageManager.removeImage(e), this.fire("data", { dataType: "style" })
                    }, t.prototype.addSource = function(e, t, r) {
                        var a = this;
                        if (this._checkLoaded(), void 0 !== this.sourceCaches[e]) throw new Error("There is already a source with this ID");
                        if (!t.type) throw new Error("The type property must be defined, but the only the following properties were given: " + Object.keys(t).join(", ") + ".");
                        if (!(["vector", "raster", "geojson", "video", "image", "canvas"].indexOf(t.type) >= 0 && this._validate(validateStyle.source, "sources." + e, t, null, r))) {
                            var i = this.sourceCaches[e] = new SourceCache(e, t, this.dispatcher);
                            i.style = this, i.setEventedParent(this, function() { return { isSourceLoaded: a.loaded(), source: i.serialize(), sourceId: e } }), i.onAdd(this.map), this._changed = !0
                        }
                    }, t.prototype.removeSource = function(e) {
                        if (this._checkLoaded(), void 0 === this.sourceCaches[e]) throw new Error("There is no source with this ID");
                        var t = this.sourceCaches[e];
                        delete this.sourceCaches[e], delete this._updatedSources[e], t.fire("data", { sourceDataType: "metadata", dataType: "source", sourceId: e }), t.setEventedParent(null), t.clearTiles(), t.onRemove && t.onRemove(this.map), this._changed = !0
                    }, t.prototype.setGeoJSONSourceData = function(e, t) { this._checkLoaded(), this.sourceCaches[e].getSource().setData(t), this._changed = !0 }, t.prototype.getSource = function(e) { return this.sourceCaches[e] && this.sourceCaches[e].getSource() }, t.prototype.addLayer = function(e, t, r) {
                        this._checkLoaded();
                        var a = e.id;
                        if ("object" == typeof e.source && (this.addSource(a, e.source), e = util.clone(e), e = util.extend(e, { source: a })), !this._validate(validateStyle.layer, "layers." + a, e, { arrayIndex: -1 }, r)) {
                            var i = StyleLayer.create(e);
                            this._validateLayer(i), i.setEventedParent(this, { layer: { id: a } });
                            var o = t ? this._order.indexOf(t) : this._order.length;
                            if (t && -1 === o) return void this.fire("error", { message: new Error('Layer with id "' + t + '" does not exist on this map.') });
                            if (this._order.splice(o, 0, a), this._layerOrderChanged = !0, this._layers[a] = i, this._removedLayers[a] && i.source) {
                                var s = this._removedLayers[a];
                                delete this._removedLayers[a], s.type !== i.type ? this._updatedSources[i.source] = "clear" : (this._updatedSources[i.source] = "reload", this.sourceCaches[i.source].pause())
                            }
                            this._updateLayer(i), this.updatePaintProperties(a)
                        }
                    }, t.prototype.moveLayer = function(e, t) {
                        if (this._checkLoaded(), this._changed = !0, !this._layers[e]) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be moved.") });
                        var r = this._order.indexOf(e);
                        this._order.splice(r, 1);
                        var a = t ? this._order.indexOf(t) : this._order.length;
                        this._order.splice(a, 0, e), this._layerOrderChanged = !0
                    }, t.prototype.removeLayer = function(e) {
                        this._checkLoaded();
                        var t = this._layers[e];
                        if (!t) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be removed.") });
                        t.setEventedParent(null);
                        var r = this._order.indexOf(e);
                        this._order.splice(r, 1), this._layerOrderChanged = !0, this._changed = !0, this._removedLayers[e] = t, delete this._layers[e], delete this._updatedLayers[e], delete this._updatedPaintProps[e]
                    }, t.prototype.getLayer = function(e) { return this._layers[e] }, t.prototype.setLayerZoomRange = function(e, t, r) {
                        this._checkLoaded();
                        var a = this.getLayer(e);
                        if (!a) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot have zoom extent.") });
                        a.minzoom === t && a.maxzoom === r || (null != t && (a.minzoom = t), null != r && (a.maxzoom = r), this._updateLayer(a))
                    }, t.prototype.setFilter = function(e, t) {
                        this._checkLoaded();
                        var r = this.getLayer(e);
                        if (!r) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be filtered.") });
                        null !== t && void 0 !== t && this._validate(validateStyle.filter, "layers." + r.id + ".filter", t) || util.deepEqual(r.filter, t) || (r.filter = util.clone(t), this._updateLayer(r))
                    }, t.prototype.getFilter = function(e) { return util.clone(this.getLayer(e).filter) }, t.prototype.setLayoutProperty = function(e, t, r) {
                        this._checkLoaded();
                        var a = this.getLayer(e);
                        if (!a) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be styled.") });
                        util.deepEqual(a.getLayoutProperty(t), r) || (a.setLayoutProperty(t, r), this._updateLayer(a))
                    }, t.prototype.getLayoutProperty = function(e, t) { return this.getLayer(e).getLayoutProperty(t) }, t.prototype.setPaintProperty = function(e, t, r) {
                        this._checkLoaded();
                        var a = this.getLayer(e);
                        if (!a) return void this.fire("error", { error: new Error("The layer '" + e + "' does not exist in the map's style and cannot be styled.") });
                        if (!util.deepEqual(a.getPaintProperty(t), r)) {
                            var i = a.isPaintValueFeatureConstant(t);
                            a.setPaintProperty(t, r);
                            a.isPaintValueFeatureConstant(t) && i || this._updateLayer(a), this.updatePaintProperties(e, t)
                        }
                    }, t.prototype.getPaintProperty = function(e, t) { return this.getLayer(e).getPaintProperty(t) }, t.prototype.getTransition = function() { return util.extend({ duration: 300, delay: 0 }, this.stylesheet && this.stylesheet.transition) }, t.prototype.updatePaintProperties = function(e, t) {
                        if (this._changed = !0, e) {
                            var r = this._updatedPaintProps;
                            r[e] || (r[e] = {}), r[e][t || "all"] = !0
                        } else this._updatedAllPaintProps = !0
                    }, t.prototype.serialize = function() { var e = this; return util.filterObject({ version: this.stylesheet.version, name: this.stylesheet.name, metadata: this.stylesheet.metadata, light: this.stylesheet.light, center: this.stylesheet.center, zoom: this.stylesheet.zoom, bearing: this.stylesheet.bearing, pitch: this.stylesheet.pitch, sprite: this.stylesheet.sprite, glyphs: this.stylesheet.glyphs, transition: this.stylesheet.transition, sources: util.mapObject(this.sourceCaches, function(e) { return e.serialize() }), layers: this._order.map(function(t) { return e._layers[t].serialize() }) }, function(e) { return void 0 !== e }) }, t.prototype._updateLayer = function(e) { this._updatedLayers[e.id] = !0, e.source && !this._updatedSources[e.source] && (this._updatedSources[e.source] = "reload", this.sourceCaches[e.source].pause()), this._changed = !0 }, t.prototype._flattenRenderedFeatures = function(e) {
                        for (var t = this, r = [], a = this._order.length - 1; a >= 0; a--)
                            for (var i = t._order[a], o = 0, s = e; o < s.length; o += 1) {
                                var n = s[o],
                                    l = n[i];
                                if (l)
                                    for (var h = 0, d = l; h < d.length; h += 1) {
                                        var u = d[h];
                                        r.push(u)
                                    }
                            }
                        return r
                    }, t.prototype.queryRenderedFeatures = function(e, t, r, a) {
                        var i = this;
                        t && t.filter && this._validate(validateStyle.filter, "queryRenderedFeatures.filter", t.filter);
                        var o = {};
                        if (t && t.layers) {
                            if (!Array.isArray(t.layers)) return this.fire("error", { error: "parameters.layers must be an Array." }), [];
                            for (var s = 0, n = t.layers; s < n.length; s += 1) {
                                var l = n[s],
                                    h = i._layers[l];
                                if (!h) return i.fire("error", { error: "The layer '" + l + "' does not exist in the map's style and cannot be queried for features." }), [];
                                o[h.source] = !0
                            }
                        }
                        var d = [];
                        for (var u in i.sourceCaches)
                            if (!t.layers || o[u]) {
                                var c = QueryFeatures.rendered(i.sourceCaches[u], i._layers, e, t, r, a);
                                d.push(c)
                            }
                        return this._flattenRenderedFeatures(d)
                    }, t.prototype.querySourceFeatures = function(e, t) { t && t.filter && this._validate(validateStyle.filter, "querySourceFeatures.filter", t.filter); var r = this.sourceCaches[e]; return r ? QueryFeatures.source(r, t) : [] }, t.prototype.addSourceType = function(e, t, r) { return getSourceType(e) ? r(new Error('A source type called "' + e + '" already exists.')) : (setSourceType(e, t), t.workerSourceURL ? void this.dispatcher.broadcast("loadWorkerSource", { name: e, url: t.workerSourceURL }, r) : r(null, null)) }, t.prototype.getLight = function() { return this.light.getLight() }, t.prototype.setLight = function(e, t) {
                        this._checkLoaded();
                        var r = this.light.getLight(),
                            a = !1;
                        for (var i in e)
                            if (!util.deepEqual(e[i], r[i])) { a = !0; break }
                        if (a) {
                            var o = this.stylesheet.transition || {};
                            this.light.setLight(e), this.light.updateLightTransitions(t || { transition: !0 }, o, this.animationLoop)
                        }
                    }, t.prototype._validate = function(e, t, r, a, i) { return (!i || !1 !== i.validate) && validateStyle.emitErrors(this, e.call(validateStyle, util.extend({ key: t, style: this.serialize(), value: r, styleSpec: styleSpec }, a))) }, t.prototype._remove = function() {
                        var e = this;
                        rtlTextPlugin.evented.off("pluginAvailable", this._rtlTextPluginCallback);
                        for (var t in e.sourceCaches) e.sourceCaches[t].clearTiles();
                        this.dispatcher.remove()
                    }, t.prototype._clearSource = function(e) { this.sourceCaches[e].clearTiles() }, t.prototype._reloadSource = function(e) { this.sourceCaches[e].resume(), this.sourceCaches[e].reload() }, t.prototype._updateSources = function(e) { var t = this; for (var r in t.sourceCaches) t.sourceCaches[r].update(e) }, t.prototype.getNeedsFullPlacement = function() {
                        var e = this;
                        if (this._layerOrderChanged) return !0;
                        for (var t in e.sourceCaches)
                            if (e.sourceCaches[t].getNeedsFullPlacement()) return !0;
                        return !1
                    }, t.prototype._generateCollisionBoxes = function() { var e = this; for (var t in e.sourceCaches) e._reloadSource(t) }, t.prototype._updatePlacement = function(e, t, r) { var a = this.getNeedsFullPlacement(); return (a || !this.placement || this.placement.isDone()) && (this.placement = new Placement(e, this._order, a, t, r, this.placement), this._layerOrderChanged = !1), this.placement.continuePlacement(this._order, this._layers, this.sourceCaches), this.placement.isDone() && (this.collisionIndex = this.placement.collisionIndex), !this.placement.isDone() || this.placement.stillFading() }, t.prototype.getImages = function(e, t, r) { this.imageManager.getImages(t.icons, r) }, t.prototype.getGlyphs = function(e, t, r) { this.glyphManager.getGlyphs(t.stacks, r) }, t
                }(Evented);
            module.exports = Style;
        }, { "../render/glyph_manager": 85, "../render/image_manager": 87, "../render/line_atlas": 88, "../source/geojson_source": 99, "../source/query_features": 105, "../source/rtl_text_plugin": 107, "../source/source": 108, "../source/source_cache": 109, "../style-spec/deref": 118, "../style-spec/diff": 119, "../style-spec/reference/latest": 149, "../util/ajax": 239, "../util/browser": 240, "../util/dispatcher": 246, "../util/evented": 248, "../util/global_worker_pool": 250, "../util/mapbox": 255, "../util/util": 260, "./animation_loop": 179, "./light": 180, "./load_sprite": 182, "./placement": 184, "./style_layer": 188, "./validate_style": 199 }],
        187: [function(_dereq_, module, exports) {
            "use strict";

            function normalizeToExpression(e, t) { if (isFunction(e)) return createFunction(e, t); if (isExpression(e)) { var i = createPropertyExpression(e, t); if ("error" === i.result) throw new Error(i.value.map(function(e) { return e.key + ": " + e.message }).join(", ")); return i.value } return "string" == typeof e && "color" === t.type && (e = Color.parse(e)), { kind: "constant", evaluate: function() { return e } } }
            var Color = _dereq_("../style-spec/util/color"),
                ref = _dereq_("../style-spec/function"),
                isFunction = ref.isFunction,
                createFunction = ref.createFunction,
                ref$1 = _dereq_("../style-spec/expression"),
                isExpression = ref$1.isExpression,
                createPropertyExpression = ref$1.createPropertyExpression,
                util = _dereq_("../util/util"),
                StyleDeclaration = function(e, t) { this.value = util.clone(t), this.json = JSON.stringify(this.value), this.minimum = e.minimum, this.expression = normalizeToExpression(this.value, e) };
            StyleDeclaration.prototype.isFeatureConstant = function() { return "constant" === this.expression.kind || "camera" === this.expression.kind }, StyleDeclaration.prototype.isZoomConstant = function() { return "constant" === this.expression.kind || "source" === this.expression.kind }, StyleDeclaration.prototype.calculate = function(e, t) { var i = this.expression.evaluate(e, t); return void 0 !== this.minimum && i < this.minimum ? this.minimum : i }, StyleDeclaration.prototype.interpolationFactor = function(e, t, i) { return "constant" === this.expression.kind || "source" === this.expression.kind ? 0 : this.expression.interpolationFactor(e, t, i) }, module.exports = StyleDeclaration;
        }, { "../style-spec/expression": 137, "../style-spec/function": 147, "../style-spec/util/color": 151, "../util/util": 260 }],
        188: [function(_dereq_, module, exports) {
            "use strict";

            function getDeclarationValue(t) { return t.value }
            var util = _dereq_("../util/util"),
                StyleTransition = _dereq_("./style_transition"),
                StyleDeclaration = _dereq_("./style_declaration"),
                styleSpec = _dereq_("../style-spec/reference/latest"),
                validateStyle = _dereq_("./validate_style"),
                Color = _dereq_("./../style-spec/util/color"),
                Evented = _dereq_("../util/evented"),
                TRANSITION_SUFFIX = "-transition",
                StyleLayer = function(t) {
                    function e(e) {
                        var i = this;
                        t.call(this), this.id = e.id, this.metadata = e.metadata, this.type = e.type, this.minzoom = e.minzoom, this.maxzoom = e.maxzoom, "background" !== e.type && (this.source = e.source, this.sourceLayer = e["source-layer"], this.filter = e.filter), this.paint = {}, this.layout = {}, this._featureFilter = function() { return !0 }, this._paintSpecifications = styleSpec["paint_" + this.type], this._layoutSpecifications = styleSpec["layout_" + this.type], this._paintTransitions = {}, this._paintTransitionOptions = {}, this._paintDeclarations = {}, this._layoutDeclarations = {}, this._layoutFunctions = {};
                        var a, o, n = { validate: !1 };
                        for (a in e.paint) i.setPaintProperty(a, e.paint[a], n);
                        for (o in e.layout) i.setLayoutProperty(o, e.layout[o], n);
                        for (a in i._paintSpecifications) i.paint[a] = i.getPaintValue(a, { zoom: 0 });
                        for (o in i._layoutSpecifications) i._updateLayoutValue(o)
                    }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setLayoutProperty = function(t, e, i) {
                        if (null == e) delete this._layoutDeclarations[t];
                        else {
                            var a = "layers." + this.id + ".layout." + t;
                            if (this._validate(validateStyle.layoutProperty, a, t, e, i)) return;
                            this._layoutDeclarations[t] = new StyleDeclaration(this._layoutSpecifications[t], e)
                        }
                        this._updateLayoutValue(t)
                    }, e.prototype.getLayoutProperty = function(t) { return this._layoutDeclarations[t] && this._layoutDeclarations[t].value }, e.prototype.getLayoutValue = function(t, e, i) {
                        var a = this._layoutSpecifications[t],
                            o = this._layoutDeclarations[t];
                        return o && (o.isFeatureConstant() || i) ? o.calculate(e, i) : a.default
                    }, e.prototype.setPaintProperty = function(t, e, i) {
                        var a = "layers." + this.id + ".paint." + t;
                        if (util.endsWith(t, TRANSITION_SUFFIX))
                            if (null === e || void 0 === e) delete this._paintTransitionOptions[t];
                            else {
                                if (this._validate(validateStyle.paintProperty, a, t, e, i)) return;
                                this._paintTransitionOptions[t] = e
                            }
                        else if (null === e || void 0 === e) delete this._paintDeclarations[t];
                        else {
                            if (this._validate(validateStyle.paintProperty, a, t, e, i)) return;
                            this._paintDeclarations[t] = new StyleDeclaration(this._paintSpecifications[t], e)
                        }
                    }, e.prototype.getPaintProperty = function(t) { return util.endsWith(t, TRANSITION_SUFFIX) ? this._paintTransitionOptions[t] : this._paintDeclarations[t] && this._paintDeclarations[t].value }, e.prototype.getPaintValue = function(t, e, i) {
                        var a = this._paintSpecifications[t],
                            o = this._paintTransitions[t];
                        return o && (o.declaration.isFeatureConstant() || i) ? o.calculate(e, i) : "color" === a.type && a.default ? Color.parse(a.default) : a.default
                    }, e.prototype.getPaintInterpolationFactor = function(t, e, i, a) { var o = this._paintDeclarations[t]; return o ? o.interpolationFactor(e, i, a) : 0 }, e.prototype.isPaintValueFeatureConstant = function(t) { var e = this._paintDeclarations[t]; return !e || e.isFeatureConstant() }, e.prototype.isPaintValueZoomConstant = function(t) { var e = this._paintDeclarations[t]; return !e || e.isZoomConstant() }, e.prototype.isHidden = function(t) { return !!(this.minzoom && t < this.minzoom) || (!!(this.maxzoom && t >= this.maxzoom) || "none" === this.layout.visibility) }, e.prototype.updatePaintTransitions = function(t, e, i, a) { var o, n = this; for (o in n._paintDeclarations) n._applyPaintDeclaration(o, n._paintDeclarations[o], t, e, i, a); for (o in n._paintTransitions) o in n._paintDeclarations || n._applyPaintDeclaration(o, null, t, e, i, a) }, e.prototype.updatePaintTransition = function(t, e, i, a, o) {
                        var n = this._paintDeclarations[t];
                        this._applyPaintDeclaration(t, n, e, i, a, o)
                    }, e.prototype.recalculate = function(t) { var e = this; for (var i in e._paintTransitions) e.paint[i] = e.getPaintValue(i, { zoom: t }); for (var a in e._layoutFunctions) e.layout[a] = e.getLayoutValue(a, { zoom: t }) }, e.prototype.serialize = function() { var t = { id: this.id, type: this.type, source: this.source, "source-layer": this.sourceLayer, metadata: this.metadata, minzoom: this.minzoom, maxzoom: this.maxzoom, filter: this.filter, layout: util.mapObject(this._layoutDeclarations, getDeclarationValue), paint: util.mapObject(this._paintDeclarations, getDeclarationValue) }; return util.filterObject(t, function(t, e) { return !(void 0 === t || "layout" === e && !Object.keys(t).length || "paint" === e && !Object.keys(t).length) }) }, e.prototype._applyPaintDeclaration = function(t, e, i, a, o, n) {
                        var r = i.transition ? this._paintTransitions[t] : void 0,
                            l = this._paintSpecifications[t];
                        if (null !== e && void 0 !== e || (e = new StyleDeclaration(l, l.default)), !r || r.declaration.json !== e.json) {
                            var s = util.extend({ duration: 300, delay: 0 }, a, this.getPaintProperty(t + TRANSITION_SUFFIX)),
                                u = this._paintTransitions[t] = new StyleTransition(l, e, r, s, n);
                            o && (u.instant() || (u.loopID = o.set(u.endTime - Date.now())), r && o.cancel(r.loopID))
                        }
                    }, e.prototype._updateLayoutValue = function(t) { var e = this._layoutDeclarations[t];!e || e.isZoomConstant() && e.isFeatureConstant() ? (delete this._layoutFunctions[t], this.layout[t] = this.getLayoutValue(t, { zoom: 0 })) : this._layoutFunctions[t] = !0 }, e.prototype._validate = function(t, e, i, a, o) { return (!o || !1 !== o.validate) && validateStyle.emitErrors(this, t.call(validateStyle, { key: e, layerType: this.type, objectKey: i, value: a, styleSpec: styleSpec, style: { glyphs: !0, sprite: !0 } })) }, e.prototype.has3DPass = function() { return !1 }, e.prototype.resize = function(t) {}, e
                }(Evented);
            module.exports = StyleLayer;
            var subclasses = { circle: _dereq_("./style_layer/circle_style_layer"), heatmap: _dereq_("./style_layer/heatmap_style_layer"), fill: _dereq_("./style_layer/fill_style_layer"), "fill-extrusion": _dereq_("./style_layer/fill_extrusion_style_layer"), line: _dereq_("./style_layer/line_style_layer"), symbol: _dereq_("./style_layer/symbol_style_layer"), background: _dereq_("./style_layer/background_style_layer"), raster: _dereq_("./style_layer/raster_style_layer") };
            StyleLayer.create = function(t) { return new subclasses[t.type](t) };
        }, { "../style-spec/reference/latest": 149, "../util/evented": 248, "../util/util": 260, "./../style-spec/util/color": 151, "./style_declaration": 187, "./style_layer/background_style_layer": 189, "./style_layer/circle_style_layer": 190, "./style_layer/fill_extrusion_style_layer": 191, "./style_layer/fill_style_layer": 192, "./style_layer/heatmap_style_layer": 193, "./style_layer/line_style_layer": 194, "./style_layer/raster_style_layer": 195, "./style_layer/symbol_style_layer": 196, "./style_transition": 198, "./validate_style": 199 }],
        189: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                BackgroundStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isOpacityZero = function(t) { return 0 === this.getPaintValue("background-opacity", { zoom: t }) }, e
                }(StyleLayer);
            module.exports = BackgroundStyleLayer;
        }, { "../style_layer": 188 }],
        190: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                CircleBucket = _dereq_("../../data/bucket/circle_bucket"),
                ref = _dereq_("../../util/intersection_tests"),
                multiPolygonIntersectsBufferedMultiPoint = ref.multiPolygonIntersectsBufferedMultiPoint,
                ref$1 = _dereq_("../query_utils"),
                getMaximumPaintValue = ref$1.getMaximumPaintValue,
                translateDistance = ref$1.translateDistance,
                translate = ref$1.translate,
                CircleStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createBucket = function(t) { return new CircleBucket(t) }, e.prototype.isOpacityZero = function(t) { return this.isPaintValueFeatureConstant("circle-opacity") && 0 === this.getPaintValue("circle-opacity", { zoom: t }) && (this.isPaintValueFeatureConstant("circle-stroke-width") && 0 === this.getPaintValue("circle-stroke-width", { zoom: t }) || this.isPaintValueFeatureConstant("circle-stroke-opacity") && 0 === this.getPaintValue("circle-stroke-opacity", { zoom: t })) }, e.prototype.queryRadius = function(t) { var e = t; return getMaximumPaintValue("circle-radius", this, e) + getMaximumPaintValue("circle-stroke-width", this, e) + translateDistance(this.paint["circle-translate"]) }, e.prototype.queryIntersectsFeature = function(t, e, r, i, a, n) {
                        var o = translate(t, this.getPaintValue("circle-translate", { zoom: i }, e), this.getPaintValue("circle-translate-anchor", { zoom: i }, e), a, n),
                            c = this.getPaintValue("circle-radius", { zoom: i }, e) * n,
                            u = this.getPaintValue("circle-stroke-width", { zoom: i }, e) * n;
                        return multiPolygonIntersectsBufferedMultiPoint(o, r, c + u)
                    }, e
                }(StyleLayer);
            module.exports = CircleStyleLayer;
        }, { "../../data/bucket/circle_bucket": 52, "../../util/intersection_tests": 252, "../query_utils": 185, "../style_layer": 188 }],
        191: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                FillExtrusionBucket = _dereq_("../../data/bucket/fill_extrusion_bucket"),
                ref = _dereq_("../../util/intersection_tests"),
                multiPolygonIntersectsMultiPolygon = ref.multiPolygonIntersectsMultiPolygon,
                ref$1 = _dereq_("../query_utils"),
                translateDistance = ref$1.translateDistance,
                translate = ref$1.translate,
                FillExtrusionStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getPaintValue = function(e, r, i) { var o = t.prototype.getPaintValue.call(this, e, r, i); return "fill-extrusion-color" === e && o && (o.a = 1), o }, e.prototype.createBucket = function(t) { return new FillExtrusionBucket(t) }, e.prototype.isOpacityZero = function(t) { return 0 === this.getPaintValue("fill-extrusion-opacity", { zoom: t }) }, e.prototype.queryRadius = function() { return translateDistance(this.paint["fill-extrusion-translate"]) }, e.prototype.queryIntersectsFeature = function(t, e, r, i, o, n) { var l = translate(t, this.getPaintValue("fill-extrusion-translate", { zoom: i }, e), this.getPaintValue("fill-extrusion-translate-anchor", { zoom: i }, e), o, n); return multiPolygonIntersectsMultiPolygon(l, r) }, e.prototype.has3DPass = function() { return 0 !== this.paint["fill-extrusion-opacity"] && "none" !== this.layout.visibility }, e.prototype.resize = function(t) {
                        if (this.viewportFrame) {
                            var e = this.viewportFrame,
                                r = e.texture,
                                i = e.fbo;
                            t.deleteTexture(r), t.deleteFramebuffer(i), this.viewportFrame = null
                        }
                    }, e
                }(StyleLayer);
            module.exports = FillExtrusionStyleLayer;
        }, { "../../data/bucket/fill_extrusion_bucket": 54, "../../util/intersection_tests": 252, "../query_utils": 185, "../style_layer": 188 }],
        192: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                FillBucket = _dereq_("../../data/bucket/fill_bucket"),
                ref = _dereq_("../../util/intersection_tests"),
                multiPolygonIntersectsMultiPolygon = ref.multiPolygonIntersectsMultiPolygon,
                ref$1 = _dereq_("../query_utils"),
                translateDistance = ref$1.translateDistance,
                translate = ref$1.translate,
                FillStyleLayer = function(t) {
                    function o() { t.apply(this, arguments) }
                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.getPaintValue = function(o, e, l) {
                        var i = this;
                        if ("fill-outline-color" === o) {
                            if (void 0 === this.getPaintProperty("fill-outline-color")) return t.prototype.getPaintValue.call(this, "fill-color", e, l);
                            for (var r = this._paintTransitions["fill-outline-color"]; r;) {
                                if (!(r && r.declaration && r.declaration.value)) return t.prototype.getPaintValue.call(i, "fill-color", e, l);
                                r = r.oldTransition
                            }
                        }
                        return t.prototype.getPaintValue.call(this, o, e, l)
                    }, o.prototype.getPaintInterpolationFactor = function(o) { for (var e = [], l = arguments.length - 1; l-- > 0;) e[l] = arguments[l + 1]; return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.getPaintInterpolationFactor.apply(this, ["fill-color"].concat(e)) : t.prototype.getPaintInterpolationFactor.apply(this, [o].concat(e)) }, o.prototype.isPaintValueFeatureConstant = function(o) { return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.isPaintValueFeatureConstant.call(this, "fill-color") : t.prototype.isPaintValueFeatureConstant.call(this, o) }, o.prototype.isPaintValueZoomConstant = function(o) { return "fill-outline-color" === o && void 0 === this.getPaintProperty("fill-outline-color") ? t.prototype.isPaintValueZoomConstant.call(this, "fill-color") : t.prototype.isPaintValueZoomConstant.call(this, o) }, o.prototype.createBucket = function(t) { return new FillBucket(t) }, o.prototype.isOpacityZero = function(t) { return this.isPaintValueFeatureConstant("fill-opacity") && 0 === this.getPaintValue("fill-opacity", { zoom: t }) }, o.prototype.queryRadius = function() { return translateDistance(this.paint["fill-translate"]) }, o.prototype.queryIntersectsFeature = function(t, o, e, l, i, r) { var n = translate(t, this.getPaintValue("fill-translate", { zoom: l }, o), this.getPaintValue("fill-translate-anchor", { zoom: l }, o), i, r); return multiPolygonIntersectsMultiPolygon(n, e) }, o
                }(StyleLayer);
            module.exports = FillStyleLayer;
        }, { "../../data/bucket/fill_bucket": 53, "../../util/intersection_tests": 252, "../query_utils": 185, "../style_layer": 188 }],
        193: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                HeatmapBucket = _dereq_("../../data/bucket/heatmap_bucket"),
                RGBAImage = _dereq_("../../util/image").RGBAImage,
                HeatmapStyleLayer = function(t) {
                    function e(e) { t.call(this, e), this.colorRampData = new Uint8Array(1024), this.getPaintProperty("heatmap-color") || this.setPaintProperty("heatmap-color", this._paintSpecifications["heatmap-color"].default, "") }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createBucket = function(t) { return new HeatmapBucket(t) }, e.prototype.isOpacityZero = function(t) { return 0 === this.getPaintValue("heatmap-opacity", { zoom: t }) }, e.prototype._applyPaintDeclaration = function(e, a, o, r, p, i) {
                        var l = this;
                        if (t.prototype._applyPaintDeclaration.call(this, e, a, o, r, p, i), "heatmap-color" === e) {
                            for (var c = this.colorRampData.length, n = 4; n < c; n += 4) {
                                var u = l.getPaintValue("heatmap-color", { heatmapDensity: n / c, zoom: -1 });
                                l.colorRampData[n + 0] = Math.floor(255 * u.r / u.a), l.colorRampData[n + 1] = Math.floor(255 * u.g / u.a), l.colorRampData[n + 2] = Math.floor(255 * u.b / u.a), l.colorRampData[n + 3] = Math.floor(255 * u.a)
                            }
                            this.colorRamp = RGBAImage.create({ width: 256, height: 1 }, this.colorRampData), this.colorRampTexture = null
                        }
                    }, e.prototype.resize = function(t) { this.heatmapTexture && (t.deleteTexture(this.heatmapTexture), this.heatmapTexture = null), this.heatmapFbo && (t.deleteFramebuffer(this.heatmapFbo), this.heatmapFbo = null) }, e.prototype.queryRadius = function() { return 0 }, e.prototype.queryIntersectsFeature = function() { return !1 }, e
                }(StyleLayer);
            module.exports = HeatmapStyleLayer;
        }, { "../../data/bucket/heatmap_bucket": 55, "../../util/image": 251, "../style_layer": 188 }],
        194: [function(_dereq_, module, exports) {
            "use strict";

            function getLineWidth(t, e) { return e > 0 ? e + 2 * t : t }

            function offsetLine(t, e) {
                for (var i = [], n = new Point(0, 0), r = 0; r < t.length; r++) {
                    for (var a = t[r], u = [], o = 0; o < a.length; o++) {
                        var l = a[o - 1],
                            s = a[o],
                            p = a[o + 1],
                            c = 0 === o ? n : s.sub(l)._unit()._perp(),
                            f = o === a.length - 1 ? n : p.sub(s)._unit()._perp(),
                            y = c._add(f)._unit(),
                            h = y.x * f.x + y.y * f.y;
                        y._mult(1 / h), u.push(y._mult(e)._add(s))
                    }
                    i.push(u)
                }
                return i
            }
            var Point = _dereq_("@mapbox/point-geometry"),
                StyleLayer = _dereq_("../style_layer"),
                LineBucket = _dereq_("../../data/bucket/line_bucket"),
                ref = _dereq_("../../util/intersection_tests"),
                multiPolygonIntersectsBufferedMultiLine = ref.multiPolygonIntersectsBufferedMultiLine,
                ref$1 = _dereq_("../query_utils"),
                getMaximumPaintValue = ref$1.getMaximumPaintValue,
                translateDistance = ref$1.translateDistance,
                translate = ref$1.translate,
                LineStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createBucket = function(t) { return new LineBucket(t) }, e.prototype.isOpacityZero = function(t) { return this.isPaintValueFeatureConstant("line-opacity") && 0 === this.getPaintValue("line-opacity", { zoom: t }) }, e.prototype.queryRadius = function(t) {
                        var e = t,
                            i = getLineWidth(getMaximumPaintValue("line-width", this, e), getMaximumPaintValue("line-gap-width", this, e)),
                            n = getMaximumPaintValue("line-offset", this, e);
                        return i / 2 + Math.abs(n) + translateDistance(this.paint["line-translate"])
                    }, e.prototype.queryIntersectsFeature = function(t, e, i, n, r, a) {
                        var u = translate(t, this.getPaintValue("line-translate", { zoom: n }, e), this.getPaintValue("line-translate-anchor", { zoom: n }, e), r, a),
                            o = a / 2 * getLineWidth(this.getPaintValue("line-width", { zoom: n }, e), this.getPaintValue("line-gap-width", { zoom: n }, e)),
                            l = this.getPaintValue("line-offset", { zoom: n }, e);
                        return l && (i = offsetLine(i, l * a)), multiPolygonIntersectsBufferedMultiLine(u, i, o)
                    }, e
                }(StyleLayer);
            module.exports = LineStyleLayer;
        }, { "../../data/bucket/line_bucket": 56, "../../util/intersection_tests": 252, "../query_utils": 185, "../style_layer": 188, "@mapbox/point-geometry": 2 }],
        195: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                RasterStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isOpacityZero = function(t) { return 0 === this.getPaintValue("raster-opacity", { zoom: t }) }, e
                }(StyleLayer);
            module.exports = RasterStyleLayer;
        }, { "../style_layer": 188 }],
        196: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("../style_layer"),
                SymbolBucket = _dereq_("../../data/bucket/symbol_bucket"),
                resolveTokens = _dereq_("../../util/token"),
                ref = _dereq_("../../style-spec/expression"),
                isExpression = ref.isExpression,
                SymbolStyleLayer = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getLayoutValue = function(e, o, r) {
                        var n = t.prototype.getLayoutValue.call(this, e, o, r);
                        if ("auto" !== n) return n;
                        switch (e) {
                            case "text-rotation-alignment":
                            case "icon-rotation-alignment":
                                return "line" === this.getLayoutValue("symbol-placement", o, r) ? "map" : "viewport";
                            case "text-pitch-alignment":
                                return this.getLayoutValue("text-rotation-alignment", o, r);
                            case "icon-pitch-alignment":
                                return this.getLayoutValue("icon-rotation-alignment", o, r);
                            default:
                                return n
                        }
                    }, e.prototype.getLayoutDeclaration = function(t) { return this._layoutDeclarations[t] }, e.prototype.isLayoutValueFeatureConstant = function(t) { var e = this._layoutDeclarations[t]; return !e || e.isFeatureConstant() }, e.prototype.isLayoutValueZoomConstant = function(t) { var e = this._layoutDeclarations[t]; return !e || e.isZoomConstant() }, e.prototype.getValueAndResolveTokens = function(t, e, o) {
                        var r = this.getLayoutValue(t, e, o),
                            n = this._layoutDeclarations[t];
                        return this.isLayoutValueFeatureConstant(t) && !isExpression(n.value) ? resolveTokens(o.properties, r) : r
                    }, e.prototype.createBucket = function(t) { return new SymbolBucket(t) }, e.prototype.isOpacityZero = function(t, e) { return this.isPaintValueFeatureConstant(e) && 0 === this.getPaintValue(e, { zoom: t }) }, e.prototype.queryRadius = function() { return 0 }, e.prototype.queryIntersectsFeature = function() { return !1 }, e
                }(StyleLayer);
            module.exports = SymbolStyleLayer;
        }, { "../../data/bucket/symbol_bucket": 57, "../../style-spec/expression": 137, "../../util/token": 259, "../style_layer": 188 }],
        197: [function(_dereq_, module, exports) {
            "use strict";
            var StyleLayer = _dereq_("./style_layer"),
                util = _dereq_("../util/util"),
                featureFilter = _dereq_("../style-spec/feature_filter"),
                groupByLayout = _dereq_("../style-spec/group_by_layout"),
                StyleLayerIndex = function(e) { e && this.replace(e) };
            StyleLayerIndex.prototype.replace = function(e) { this._layerConfigs = {}, this._layers = {}, this.update(e, []) }, StyleLayerIndex.prototype.update = function(e, r) {
                for (var t = this, a = 0, i = e; a < i.length; a += 1) {
                    var l = i[a];
                    t._layerConfigs[l.id] = l;
                    var y = t._layers[l.id] = StyleLayer.create(l);
                    y.updatePaintTransitions({ transition: !1 }), y._featureFilter = featureFilter(y.filter)
                }
                for (var u = 0, o = r; u < o.length; u += 1) {
                    var s = o[u];
                    delete t._layerConfigs[s], delete t._layers[s]
                }
                this.familiesBySource = {};
                for (var n = groupByLayout(util.values(this._layerConfigs)), f = 0, p = n; f < p.length; f += 1) {
                    var c = p[f],
                        _ = c.map(function(e) { return t._layers[e.id] }),
                        d = _[0];
                    if (!d.layout || "none" !== d.layout.visibility) {
                        var v = d.source || "",
                            g = t.familiesBySource[v];
                        g || (g = t.familiesBySource[v] = {});
                        var h = d.sourceLayer || "_geojsonTileLayer",
                            L = g[h];
                        L || (L = g[h] = []), L.push(_)
                    }
                }
            }, module.exports = StyleLayerIndex;
        }, { "../style-spec/feature_filter": 146, "../style-spec/group_by_layout": 148, "../util/util": 260, "./style_layer": 188 }],
        198: [function(_dereq_, module, exports) {
            "use strict";

            function interpZoomTransitioned(t, i, e) { if (void 0 !== t && void 0 !== i) return { from: t.to, fromScale: t.toScale, to: i.to, toScale: i.toScale, t: e } }
            var util = _dereq_("../util/util"),
                interpolate = _dereq_("../style-spec/util/interpolate"),
                fakeZoomHistory = { lastIntegerZoom: 0, lastIntegerZoomTime: 0, lastZoom: 0 },
                StyleTransition = function(t, i, e, o, n) { this.declaration = i, this.startTime = this.endTime = (new Date).getTime(), this.oldTransition = e, this.duration = o.duration || 0, this.delay = o.delay || 0, this.zoomTransitioned = "piecewise-constant" === t.function && t.transition, this.interp = this.zoomTransitioned ? interpZoomTransitioned : interpolate[t.type], this.zoomHistory = n || fakeZoomHistory, this.instant() || (this.endTime = this.startTime + this.duration + this.delay), e && e.endTime <= this.startTime && delete e.oldTransition };
            StyleTransition.prototype.instant = function() { return !this.oldTransition || !this.interp || 0 === this.duration && 0 === this.delay }, StyleTransition.prototype.calculate = function(t, i, e) {
                var o = this._calculateTargetValue(t, i);
                if (this.instant()) return o;
                if ((e = e || Date.now()) >= this.endTime) return o;
                var n = this.oldTransition.calculate(t, i, this.startTime),
                    a = util.easeCubicInOut((e - this.startTime - this.delay) / this.duration);
                return this.interp(n, o, a)
            }, StyleTransition.prototype._calculateTargetValue = function(t, i) {
                if (!this.zoomTransitioned) return this.declaration.calculate(t, i);
                var e = t.zoom,
                    o = this.zoomHistory.lastIntegerZoom,
                    n = e > o ? 2 : .5,
                    a = this.declaration.calculate({ zoom: e > o ? e - 1 : e + 1 }, i),
                    r = this.declaration.calculate({ zoom: e }, i),
                    s = Math.min((Date.now() - this.zoomHistory.lastIntegerZoomTime) / this.duration, 1),
                    l = Math.abs(e - o),
                    u = interpolate.number(s, 1, l);
                return void 0 !== a && void 0 !== r ? { from: a, fromScale: n, to: r, toScale: 1, t: u } : void 0
            }, module.exports = StyleTransition;
        }, { "../style-spec/util/interpolate": 155, "../util/util": 260 }],
        199: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = _dereq_("../style-spec/validate_style.min"), module.exports.emitErrors = function(r, e) {
                if (e && e.length) {
                    for (var t = 0, o = e; t < o.length; t += 1) {
                        var s = o[t],
                            i = s.message;
                        r.fire("error", { error: new Error(i) })
                    }
                    return !0
                }
                return !1
            };
        }, { "../style-spec/validate_style.min": 178 }],
        200: [function(_dereq_, module, exports) {
            "use strict";
            var Point = _dereq_("@mapbox/point-geometry"),
                Anchor = function(t) {
                    function o(o, e, n, r) { t.call(this, o, e), this.angle = n, void 0 !== r && (this.segment = r) }
                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.clone = function() { return new o(this.x, this.y, this.angle, this.segment) }, o
                }(Point);
            module.exports = Anchor;
        }, { "@mapbox/point-geometry": 2 }],
        201: [function(_dereq_, module, exports) {
            "use strict";

            function checkMaxAngle(e, t, a, r, n) {
                if (void 0 === t.segment) return !0;
                for (var i = t, s = t.segment + 1, f = 0; f > -a / 2;) {
                    if (--s < 0) return !1;
                    f -= e[s].dist(i), i = e[s]
                }
                f += e[s].dist(e[s + 1]), s++;
                for (var l = [], o = 0; f < a / 2;) {
                    var u = e[s - 1],
                        c = e[s],
                        g = e[s + 1];
                    if (!g) return !1;
                    var h = u.angleTo(c) - c.angleTo(g);
                    for (h = Math.abs((h + 3 * Math.PI) % (2 * Math.PI) - Math.PI), l.push({ distance: f, angleDelta: h }), o += h; f - l[0].distance > r;) o -= l.shift().angleDelta;
                    if (o > n) return !1;
                    s++, f += c.dist(g)
                }
                return !0
            }
            module.exports = checkMaxAngle;
        }, {}],
        202: [function(_dereq_, module, exports) {
            "use strict";

            function clipLine(n, x, y, o, e) {
                for (var r = [], t = 0; t < n.length; t++)
                    for (var i = n[t], u = void 0, d = 0; d < i.length - 1; d++) {
                        var P = i[d],
                            w = i[d + 1];
                        P.x < x && w.x < x || (P.x < x ? P = new Point(x, P.y + (w.y - P.y) * ((x - P.x) / (w.x - P.x)))._round() : w.x < x && (w = new Point(x, P.y + (w.y - P.y) * ((x - P.x) / (w.x - P.x)))._round()), P.y < y && w.y < y || (P.y < y ? P = new Point(P.x + (w.x - P.x) * ((y - P.y) / (w.y - P.y)), y)._round() : w.y < y && (w = new Point(P.x + (w.x - P.x) * ((y - P.y) / (w.y - P.y)), y)._round()), P.x >= o && w.x >= o || (P.x >= o ? P = new Point(o, P.y + (w.y - P.y) * ((o - P.x) / (w.x - P.x)))._round() : w.x >= o && (w = new Point(o, P.y + (w.y - P.y) * ((o - P.x) / (w.x - P.x)))._round()), P.y >= e && w.y >= e || (P.y >= e ? P = new Point(P.x + (w.x - P.x) * ((e - P.y) / (w.y - P.y)), e)._round() : w.y >= e && (w = new Point(P.x + (w.x - P.x) * ((e - P.y) / (w.y - P.y)), e)._round()), u && P.equals(u[u.length - 1]) || (u = [P], r.push(u)), u.push(w)))))
                    }
                return r
            }
            var Point = _dereq_("@mapbox/point-geometry");
            module.exports = clipLine;
        }, { "@mapbox/point-geometry": 2 }],
        203: [function(_dereq_, module, exports) {
            "use strict";
            var createStructArrayType = _dereq_("../util/struct_array"),
                Point = _dereq_("@mapbox/point-geometry"),
                CollisionBoxArray = createStructArrayType({ members: [{ type: "Int16", name: "anchorPointX" }, { type: "Int16", name: "anchorPointY" }, { type: "Int16", name: "x1" }, { type: "Int16", name: "y1" }, { type: "Int16", name: "x2" }, { type: "Int16", name: "y2" }, { type: "Uint32", name: "featureIndex" }, { type: "Uint16", name: "sourceLayerIndex" }, { type: "Uint16", name: "bucketIndex" }, { type: "Int16", name: "radius" }, { type: "Int16", name: "signedDistanceFromAnchor" }] });
            Object.defineProperty(CollisionBoxArray.prototype.StructType.prototype, "anchorPoint", { get: function() { return new Point(this.anchorPointX, this.anchorPointY) } }), module.exports = CollisionBoxArray;
        }, { "../util/struct_array": 258, "@mapbox/point-geometry": 2 }],
        204: [function(_dereq_, module, exports) {
            "use strict";
            var CollisionFeature = function(t, e, i, o, a, r, l, n, s, d, h) {
                var u = l.top * n - s,
                    f = l.bottom * n + s,
                    c = l.left * n - s,
                    x = l.right * n + s;
                if (this.boxStartIndex = t.length, d) {
                    var m = f - u,
                        v = x - c;
                    m > 0 && (m = Math.max(10 * n, m), this._addLineCollisionCircles(t, e, i, i.segment, v, m, o, a, r, h))
                } else t.emplaceBack(i.x, i.y, c, u, x, f, o, a, r, 0, 0);
                this.boxEndIndex = t.length
            };
            CollisionFeature.prototype._addLineCollisionCircles = function(t, e, i, o, a, r, l, n, s, d) {
                var h = r / 2,
                    u = Math.floor(a / h),
                    f = 1 + .4 * Math.log(d) / Math.LN2,
                    c = Math.floor(u * f / 2),
                    x = -r / 2,
                    m = i,
                    v = o + 1,
                    C = x,
                    b = -a / 2,
                    g = b - a / 4;
                do {
                    if (--v < 0) {
                        if (C > b) return;
                        v = 0;
                        break
                    }
                    C -= e[v].dist(m), m = e[v]
                } while (C > g);
                for (var p = e[v].dist(e[v + 1]), M = -c; M < u + c; M++) {
                    var _ = M * h,
                        k = b + _;
                    if (_ < 0 && (k += _), _ > a && (k += _ - a), !(k < C)) {
                        for (; C + p < k;) {
                            if (C += p, ++v + 1 >= e.length) return;
                            p = e[v].dist(e[v + 1])
                        }
                        var y = k - C,
                            F = e[v],
                            L = e[v + 1],
                            B = L.sub(F)._unit()._mult(y)._add(F)._round(),
                            I = Math.abs(k - x) < h ? 0 : .8 * (k - x);
                        t.emplaceBack(B.x, B.y, -r / 2, -r / 2, r / 2, r / 2, l, n, s, r / 2, I)
                    }
                }
            }, module.exports = CollisionFeature;
        }, {}],
        205: [function(_dereq_, module, exports) {
            "use strict";

            function markCollisionCircleUsed(i, t, e) { i[t + 4] = e ? 1 : 0 }
            var Point = _dereq_("@mapbox/point-geometry"),
                intersectionTests = _dereq_("../util/intersection_tests"),
                Grid = _dereq_("./grid_index"),
                glmatrix = _dereq_("@mapbox/gl-matrix"),
                mat4 = glmatrix.mat4,
                projection = _dereq_("../symbol/projection"),
                viewportPadding = 100,
                CollisionIndex = function(i, t, e) { void 0 === t && (t = new Grid(i.width + 2 * viewportPadding, i.height + 2 * viewportPadding, 25)), void 0 === e && (e = new Grid(i.width + 2 * viewportPadding, i.height + 2 * viewportPadding, 25)), this.transform = i, this.grid = t, this.ignoredGrid = e, this.pitchfactor = Math.cos(i._pitch) * i.cameraToCenterDistance };
            CollisionIndex.prototype.placeCollisionBox = function(i, t, e, r) {
                var o = this.projectAndGetPerspectiveRatio(r, i.anchorPointX, i.anchorPointY),
                    n = e * o.perspectiveRatio,
                    a = i.x1 / n + o.point.x,
                    s = i.y1 / n + o.point.y,
                    c = i.x2 / n + o.point.x,
                    l = i.y2 / n + o.point.y;
                return !t && this.grid.hitTest(a, s, c, l) ? [] : [a, s, c, l]
            }, CollisionIndex.prototype.approximateTileDistance = function(i, t, e, r, o) {
                var n = o ? 1 : r / this.pitchfactor,
                    a = i.lastSegmentViewportDistance * e;
                return i.prevTileDistance + a + (n - 1) * a * Math.abs(Math.sin(t))
            }, CollisionIndex.prototype.placeCollisionCircles = function(i, t, e, r, o, n, a, s, c, l, p, h, d) {
                var x = this,
                    g = [],
                    f = this.projectAnchor(l, n.anchorX, n.anchorY),
                    v = {},
                    u = c / 24,
                    m = n.lineOffsetX * c,
                    y = n.lineOffsetY * c,
                    C = new Point(n.anchorX, n.anchorY),
                    P = projection.project(C, p).point,
                    I = projection.placeFirstAndLastGlyph(u, s, m, y, !1, P, C, n, a, p, v, !0),
                    w = !1,
                    D = f.perspectiveRatio * r,
                    j = D / e,
                    T = 0,
                    G = 0;
                I && (T = this.approximateTileDistance(I.first.tileDistance, I.first.angle, j, f.cameraDistance, d), G = this.approximateTileDistance(I.last.tileDistance, I.last.angle, j, f.cameraDistance, d));
                for (var M = 0; M < i.length; M += 5) {
                    var b = i[M],
                        R = i[M + 1],
                        q = i[M + 2],
                        k = i[M + 3];
                    if (!I || k < -T || k > G) markCollisionCircleUsed(i, M, !1);
                    else {
                        var A = x.projectPoint(l, b, R),
                            X = q / D;
                        if (g.length > 0) {
                            var Y = A.x - g[g.length - 4],
                                L = A.y - g[g.length - 3];
                            if (X * X * 2 > Y * Y + L * L) { if (M + 8 < i.length) { var U = i[M + 8]; if (U > -T && U < G) { markCollisionCircleUsed(i, M, !1); continue } } }
                        }
                        var _ = M / 5;
                        if (g.push(A.x, A.y, X, _), markCollisionCircleUsed(i, M, !0), !t && x.grid.hitTestCircle(A.x, A.y, X)) {
                            if (!h) return [];
                            w = !0
                        }
                    }
                }
                return w ? [] : g
            }, CollisionIndex.prototype.queryRenderedSymbols = function(i, t, e, r, o, n) {
                var a = this,
                    s = {},
                    c = [];
                if (0 === i.length || 0 === this.grid.keysLength() && 0 === this.ignoredGrid.keysLength()) return c;
                for (var l = this.transform.calculatePosMatrix(t, e), p = [], h = 1 / 0, d = 1 / 0, x = -1 / 0, g = -1 / 0, f = 0; f < i.length; f++)
                    for (var v = i[f], u = 0; u < v.length; u++) {
                        var m = a.projectPoint(l, v[u].x, v[u].y);
                        h = Math.min(h, m.x), d = Math.min(d, m.y), x = Math.max(x, m.x), g = Math.max(g, m.y), p.push(m)
                    }
                for (var y = t.id, C = [], P = this.grid.query(h, d, x, g), I = 0; I < P.length; I++) P[I].sourceID === n && P[I].tileID === y && C.push(P[I].boxIndex);
                for (var w = this.ignoredGrid.query(h, d, x, g), D = 0; D < w.length; D++) w[D].sourceID === n && w[D].tileID === y && C.push(w[D].boxIndex);
                for (var j = 0; j < C.length; j++) {
                    var T = o.get(C[j]),
                        G = T.sourceLayerIndex,
                        M = T.featureIndex;
                    if (void 0 === s[G] && (s[G] = {}), !s[G][M]) {
                        var b = a.projectAndGetPerspectiveRatio(l, T.anchorPointX, T.anchorPointY),
                            R = r * b.perspectiveRatio,
                            q = T.x1 / R + b.point.x,
                            k = T.y1 / R + b.point.y,
                            A = T.x2 / R + b.point.x,
                            X = T.y2 / R + b.point.y,
                            Y = [new Point(q, k), new Point(A, k), new Point(A, X), new Point(q, X)];
                        intersectionTests.polygonIntersectsPolygon(p, Y) && (s[G][M] = !0, c.push(C[j]))
                    }
                }
                return c
            }, CollisionIndex.prototype.insertCollisionBox = function(i, t, e, r, o) {
                var n = t ? this.ignoredGrid : this.grid,
                    a = { tileID: e, sourceID: r, boxIndex: o };
                n.insert(a, i[0], i[1], i[2], i[3])
            }, CollisionIndex.prototype.insertCollisionCircles = function(i, t, e, r, o) {
                for (var n = t ? this.ignoredGrid : this.grid, a = 0; a < i.length; a += 4) {
                    var s = { tileID: e, sourceID: r, boxIndex: o + i[a + 3] };
                    n.insertCircle(s, i[a], i[a + 1], i[a + 2])
                }
            }, CollisionIndex.prototype.projectAnchor = function(i, t, e) { var r = [t, e, 0, 1]; return projection.xyTransformMat4(r, r, i), { perspectiveRatio: .5 + r[3] / this.transform.cameraToCenterDistance * .5, cameraDistance: r[3] } }, CollisionIndex.prototype.projectPoint = function(i, t, e) { var r = [t, e, 0, 1]; return projection.xyTransformMat4(r, r, i), new Point((r[0] / r[3] + 1) / 2 * this.transform.width + viewportPadding, (-r[1] / r[3] + 1) / 2 * this.transform.height + viewportPadding) }, CollisionIndex.prototype.projectAndGetPerspectiveRatio = function(i, t, e) { var r = [t, e, 0, 1]; return projection.xyTransformMat4(r, r, i), { point: new Point((r[0] / r[3] + 1) / 2 * this.transform.width + viewportPadding, (-r[1] / r[3] + 1) / 2 * this.transform.height + viewportPadding), perspectiveRatio: .5 + r[3] / this.transform.cameraToCenterDistance * .5 } }, module.exports = CollisionIndex;
        }, { "../symbol/projection": 211, "../util/intersection_tests": 252, "./grid_index": 208, "@mapbox/gl-matrix": 1, "@mapbox/point-geometry": 2 }],
        206: [function(_dereq_, module, exports) {
            "use strict";
            var EXTENT = _dereq_("../data/extent"),
                OpacityState = _dereq_("./opacity_state"),
                roundingFactor = 512 / EXTENT / 2,
                TileLayerIndex = function(e, t, i) {
                    var o = this;
                    this.coord = e, this.sourceMaxZoom = t, this.symbolInstances = {};
                    for (var a = 0, n = i; a < n.length; a += 1) {
                        var s = n[a],
                            r = s.key;
                        o.symbolInstances[r] || (o.symbolInstances[r] = []), o.symbolInstances[r].push({ instance: s, coordinates: o.getScaledCoordinates(s, e) }), s.isDuplicate = !1, s.textOpacityState = new OpacityState, s.iconOpacityState = new OpacityState
                    }
                };
            TileLayerIndex.prototype.getScaledCoordinates = function(e, t) {
                var i = Math.min(this.sourceMaxZoom, t.z) - Math.min(this.sourceMaxZoom, this.coord.z),
                    o = roundingFactor / (1 << i),
                    a = e.anchor;
                return { x: Math.floor((t.x * EXTENT + a.x) * o), y: Math.floor((t.y * EXTENT + a.y) * o) }
            }, TileLayerIndex.prototype.getMatchingSymbol = function(e, t) {
                var i = this;
                if (this.symbolInstances[e.key])
                    for (var o = this.getScaledCoordinates(e, t), a = 0, n = i.symbolInstances[e.key]; a < n.length; a += 1) { var s = n[a]; if (Math.abs(s.coordinates.x - o.x) <= 1 && Math.abs(s.coordinates.y - o.y) <= 1) return s.instance }
            }, TileLayerIndex.prototype.forEachSymbolInstance = function(e) {
                var t = this;
                for (var i in t.symbolInstances)
                    for (var o = t.symbolInstances[i], a = 0, n = o; a < n.length; a += 1) {
                        var s = n[a];
                        e(s.instance)
                    }
            };
            var CrossTileSymbolLayerIndex = function() { this.indexes = {} };
            CrossTileSymbolLayerIndex.prototype.addTile = function(e, t, i) {
                var o = this,
                    a = 25,
                    n = 0;
                for (var s in o.indexes) a = Math.min(s, a), n = Math.max(s, n);
                for (var r = new TileLayerIndex(e, t, i), c = n; c > e.z; c--) {
                    var l = o.indexes[c];
                    for (var d in l) {
                        var y = l[d];
                        y.coord.isChildOf(e, t) && o.blockLabels(y, r, !1)
                    }
                }
                var h = this.indexes[e.z] && this.indexes[e.z][e.id];
                h && (this.blockLabels(r, h, !0), this.removeTile(e, t));
                for (var x = e.z - 1; x >= a; x--) {
                    var p = e.scaledTo(x, t),
                        b = o.indexes[x] && o.indexes[x][p.id];
                    b && o.blockLabels(r, b, !0)
                }
                void 0 === this.indexes[e.z] && (this.indexes[e.z] = {}), this.indexes[e.z][e.id] = r
            }, CrossTileSymbolLayerIndex.prototype.removeTile = function(e, t) {
                var i = this,
                    o = this.indexes[e.z][e.id];
                delete this.indexes[e.z][e.id], 0 === Object.keys(this.indexes[e.z]).length && delete this.indexes[e.z];
                for (var a = Math.min.apply(Math, [25].concat(Object.keys(this.indexes))), n = e, s = e.z - 1; s >= a && (n = n.parent(t)); s--) {
                    var r = i.indexes[s] && i.indexes[s][n.id];
                    r && i.unblockLabels(o, r)
                }
            }, CrossTileSymbolLayerIndex.prototype.blockLabels = function(e, t, i) {
                e.forEachSymbolInstance(function(o) {
                    if (!o.isDuplicate) {
                        var a = t.getMatchingSymbol(o, e.coord);
                        void 0 !== a && (a.isDuplicate || (a.isDuplicate = !0, i && (o.textOpacityState = a.textOpacityState.clone(), o.iconOpacityState = a.iconOpacityState.clone())))
                    }
                })
            }, CrossTileSymbolLayerIndex.prototype.unblockLabels = function(e, t) {
                e.forEachSymbolInstance(function(i) {
                    if (!i.isDuplicate) {
                        var o = t.getMatchingSymbol(i, e.coord);
                        void 0 !== o && (o.isDuplicate = !1, o.textOpacityState = i.textOpacityState.clone(), o.iconOpacityState = i.iconOpacityState.clone(), i.isDuplicate = !0)
                    }
                })
            };
            var CrossTileSymbolIndex = function() { this.layerIndexes = {} };
            CrossTileSymbolIndex.prototype.addTileLayer = function(e, t, i, o) {
                var a = this.layerIndexes[e];
                void 0 === a && (a = this.layerIndexes[e] = new CrossTileSymbolLayerIndex), a.addTile(t, i, o)
            }, CrossTileSymbolIndex.prototype.removeTileLayer = function(e, t, i) {
                var o = this.layerIndexes[e];
                void 0 !== o && o.removeTile(t, i)
            }, module.exports = CrossTileSymbolIndex;
        }, { "../data/extent": 58, "./opacity_state": 210 }],
        207: [function(_dereq_, module, exports) {
            "use strict";

            function getAnchors(e, r, t, n, a, l, o, i, c) {
                var h = n ? .6 * l * o : 0,
                    s = Math.max(n ? n.right - n.left : 0, a ? a.right - a.left : 0),
                    u = 0 === e[0].x || e[0].x === c || 0 === e[0].y || e[0].y === c;
                r - s * o < r / 4 && (r = s * o + r / 4);
                var g = 2 * l;
                return resample(e, u ? r / 2 * i % r : (s / 2 + g) * o * i % r, r, h, t, s * o, u, !1, c)
            }

            function resample(e, r, t, n, a, l, o, i, c) {
                for (var h = l / 2, s = 0, u = 0; u < e.length - 1; u++) s += e[u].dist(e[u + 1]);
                for (var g = 0, p = r - t, x = [], f = 0; f < e.length - 1; f++) {
                    for (var m = e[f], v = e[f + 1], y = m.dist(v), A = v.angleTo(m); p + t < g + y;) {
                        p += t;
                        var d = (p - g) / y,
                            k = interpolate(m.x, v.x, d),
                            q = interpolate(m.y, v.y, d);
                        if (k >= 0 && k < c && q >= 0 && q < c && p - h >= 0 && p + h <= s) {
                            var M = new Anchor(k, q, A, f);
                            M._round(), n && !checkMaxAngle(e, M, l, n, a) || x.push(M)
                        }
                    }
                    g += y
                }
                return i || x.length || o || (x = resample(e, g / 2, t, n, a, l, o, !0, c)), x
            }
            var interpolate = _dereq_("../style-spec/util/interpolate").number,
                Anchor = _dereq_("../symbol/anchor"),
                checkMaxAngle = _dereq_("./check_max_angle");
            module.exports = getAnchors;
        }, { "../style-spec/util/interpolate": 155, "../symbol/anchor": 200, "./check_max_angle": 201 }],
        208: [function(_dereq_, module, exports) {
            "use strict";
            var GridIndex = function(e, t, i) {
                var r = this.boxCells = [],
                    s = this.circleCells = [];
                this.xCellCount = Math.ceil(e / i), this.yCellCount = Math.ceil(t / i);
                for (var l = 0; l < this.xCellCount * this.yCellCount; l++) r.push([]), s.push([]);
                this.circleKeys = [], this.boxKeys = [], this.bboxes = [], this.circles = [], this.width = e, this.height = t, this.xScale = this.xCellCount / e, this.yScale = this.yCellCount / t, this.boxUid = 0, this.circleUid = 0
            };
            GridIndex.prototype.keysLength = function() { return this.boxKeys.length + this.circleKeys.length }, GridIndex.prototype.insert = function(e, t, i, r, s) { this._forEachCell(t, i, r, s, this._insertBoxCell, this.boxUid++), this.boxKeys.push(e), this.bboxes.push(t), this.bboxes.push(i), this.bboxes.push(r), this.bboxes.push(s) }, GridIndex.prototype.insertCircle = function(e, t, i, r) { this._forEachCell(t - r, i - r, t + r, i + r, this._insertCircleCell, this.circleUid++), this.circleKeys.push(e), this.circles.push(t), this.circles.push(i), this.circles.push(r) }, GridIndex.prototype._insertBoxCell = function(e, t, i, r, s, l) { this.boxCells[s].push(l) }, GridIndex.prototype._insertCircleCell = function(e, t, i, r, s, l) { this.circleCells[s].push(l) }, GridIndex.prototype._query = function(e, t, i, r, s) {
                if (i < 0 || e > this.width || r < 0 || t > this.height) return !s && [];
                var l = [];
                if (e <= 0 && t <= 0 && this.width <= i && this.height <= r) l = Array.prototype.slice.call(this.boxKeys).concat(this.circleKeys);
                else {
                    var o = { hitTest: s, seenUids: { box: {}, circle: {} } };
                    this._forEachCell(e, t, i, r, this._queryCell, l, o)
                }
                return s ? l.length > 0 : l
            }, GridIndex.prototype._queryCircle = function(e, t, i, r) {
                var s = e - i,
                    l = e + i,
                    o = t - i,
                    h = t + i;
                if (l < 0 || s > this.width || h < 0 || o > this.height) return !r && [];
                var n = [],
                    c = { hitTest: r, circle: { x: e, y: t, radius: i }, seenUids: { box: {}, circle: {} } };
                return this._forEachCell(s, o, l, h, this._queryCellCircle, n, c), r ? n.length > 0 : n
            }, GridIndex.prototype.query = function(e, t, i, r) { return this._query(e, t, i, r, !1) }, GridIndex.prototype.hitTest = function(e, t, i, r) { return this._query(e, t, i, r, !0) }, GridIndex.prototype.hitTestCircle = function(e, t, i) { return this._queryCircle(e, t, i, !0) }, GridIndex.prototype._queryCell = function(e, t, i, r, s, l, o) {
                var h = this,
                    n = o.seenUids,
                    c = this.boxCells[s];
                if (null !== c)
                    for (var u = this.bboxes, d = 0, C = c; d < C.length; d += 1) {
                        var a = C[d];
                        if (!n.box[a]) {
                            n.box[a] = !0;
                            var x = 4 * a;
                            if (e <= u[x + 2] && t <= u[x + 3] && i >= u[x + 0] && r >= u[x + 1]) {
                                if (o.hitTest) return l.push(!0), !0;
                                l.push(h.boxKeys[a])
                            }
                        }
                    }
                var p = this.circleCells[s];
                if (null !== p)
                    for (var f = this.circles, y = 0, v = p; y < v.length; y += 1) {
                        var b = v[y];
                        if (!n.circle[b]) {
                            n.circle[b] = !0;
                            var _ = 3 * b;
                            if (h._circleAndRectCollide(f[_], f[_ + 1], f[_ + 2], e, t, i, r)) {
                                if (o.hitTest) return l.push(!0), !0;
                                l.push(h.circleKeys[b])
                            }
                        }
                    }
            }, GridIndex.prototype._queryCellCircle = function(e, t, i, r, s, l, o) {
                var h = this,
                    n = o.circle,
                    c = o.seenUids,
                    u = this.boxCells[s];
                if (null !== u)
                    for (var d = this.bboxes, C = 0, a = u; C < a.length; C += 1) { var x = a[C]; if (!c.box[x]) { c.box[x] = !0; var p = 4 * x; if (h._circleAndRectCollide(n.x, n.y, n.radius, d[p + 0], d[p + 1], d[p + 2], d[p + 3])) return l.push(!0), !0 } }
                var f = this.circleCells[s];
                if (null !== f)
                    for (var y = this.circles, v = 0, b = f; v < b.length; v += 1) { var _ = b[v]; if (!c.circle[_]) { c.circle[_] = !0; var G = 3 * _; if (h._circlesCollide(y[G], y[G + 1], y[G + 2], n.x, n.y, n.radius)) return l.push(!0), !0 } }
            }, GridIndex.prototype._forEachCell = function(e, t, i, r, s, l, o) {
                for (var h = this, n = this._convertToXCellCoord(e), c = this._convertToYCellCoord(t), u = this._convertToXCellCoord(i), d = this._convertToYCellCoord(r), C = n; C <= u; C++)
                    for (var a = c; a <= d; a++) { var x = h.xCellCount * a + C; if (s.call(h, e, t, i, r, x, l, o)) return }
            }, GridIndex.prototype._convertToXCellCoord = function(e) { return Math.max(0, Math.min(this.xCellCount - 1, Math.floor(e * this.xScale))) }, GridIndex.prototype._convertToYCellCoord = function(e) { return Math.max(0, Math.min(this.yCellCount - 1, Math.floor(e * this.yScale))) }, GridIndex.prototype._circlesCollide = function(e, t, i, r, s, l) {
                var o = r - e,
                    h = s - t,
                    n = i + l;
                return n * n > o * o + h * h
            }, GridIndex.prototype._circleAndRectCollide = function(e, t, i, r, s, l, o) {
                var h = (l - r) / 2,
                    n = Math.abs(e - (r + h));
                if (n > h + i) return !1;
                var c = (o - s) / 2,
                    u = Math.abs(t - (s + c));
                if (u > c + i) return !1;
                if (n <= h || u <= c) return !0;
                var d = n - h,
                    C = u - c;
                return d * d + C * C <= i * i
            }, module.exports = GridIndex;
        }, {}],
        209: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = function(e) {
                function t(t) { g.push(e[t]), l++ }

                function r(e, t, r) { var n = u[e]; return delete u[e], u[t] = n, g[n].geometry[0].pop(), g[n].geometry[0] = g[n].geometry[0].concat(r[0]), n }

                function n(e, t, r) { var n = i[t]; return delete i[t], i[e] = n, g[n].geometry[0].shift(), g[n].geometry[0] = r[0].concat(g[n].geometry[0]), n }

                function o(e, t, r) { var n = r ? t[0][t[0].length - 1] : t[0][0]; return e + ":" + n.x + ":" + n.y }
                for (var i = {}, u = {}, g = [], l = 0, m = 0; m < e.length; m++) {
                    var y = e[m],
                        c = y.geometry,
                        f = y.text;
                    if (f) {
                        var a = o(f, c),
                            s = o(f, c, !0);
                        if (a in u && s in i && u[a] !== i[s]) {
                            var v = n(a, s, c),
                                d = r(a, s, g[v].geometry);
                            delete i[a], delete u[s], u[o(f, g[d].geometry, !0)] = d, g[v].geometry = null
                        } else a in u ? r(a, s, c) : s in i ? n(a, s, c) : (t(m), i[a] = l - 1, u[s] = l - 1)
                    } else t(m)
                }
                return g.filter(function(e) { return e.geometry })
            };
        }, {}],
        210: [function(_dereq_, module, exports) {
            "use strict";
            var OpacityState = function() { this.opacity = 0, this.targetOpacity = 0, this.time = 0 };
            OpacityState.prototype.clone = function() { var t = new OpacityState; return t.opacity = this.opacity, t.targetOpacity = this.targetOpacity, t.time = this.time, t }, module.exports = OpacityState;
        }, {}],
        211: [function(_dereq_, module, exports) {
            "use strict";

            function getLabelPlaneMatrix(e, t, n, r, a) { var i = mat4.identity(new Float32Array(16)); return t ? (mat4.identity(i), mat4.scale(i, i, [1 / a, 1 / a, 1]), n || mat4.rotateZ(i, i, r.angle)) : (mat4.scale(i, i, [r.width / 2, -r.height / 2, 1]), mat4.translate(i, i, [1, -1, 0]), mat4.multiply(i, i, e)), i }

            function getGlCoordMatrix(e, t, n, r, a) { var i = mat4.identity(new Float32Array(16)); return t ? (mat4.multiply(i, i, e), mat4.scale(i, i, [a, a, 1]), n || mat4.rotateZ(i, i, -r.angle)) : (mat4.scale(i, i, [1, -1, 1]), mat4.translate(i, i, [-1, -1, 0]), mat4.scale(i, i, [2 / r.width, 2 / r.height, 1])), i }

            function project(e, t) {
                var n = [e.x, e.y, 0, 1];
                xyTransformMat4(n, n, t);
                var r = n[3];
                return { point: new Point(n[0] / r, n[1] / r), signedDistanceFromCamera: r }
            }

            function isVisible(e, t) {
                var n = e[0] / e[3],
                    r = e[1] / e[3];
                return n >= -t[0] && n <= t[0] && r >= -t[1] && r <= t[1]
            }

            function updateLineLabels(e, t, n, r, a, i, l, o, s, p) {
                var u = r ? e.textSizeData : e.iconSizeData,
                    c = symbolSize.evaluateSizeForZoom(u, n.transform, p, r),
                    d = [256 / n.width * 2 + 1, 256 / n.height * 2 + 1],
                    g = r ? e.text.dynamicLayoutVertexArray : e.icon.dynamicLayoutVertexArray;
                g.clear();
                for (var h = e.lineVertexArray, y = r ? e.placedGlyphArray : e.placedIconArray, m = n.transform.width / n.transform.height, f = !1, x = 0; x < y.length; x++) {
                    var v = y.get(x);
                    if (v.hidden || v.writingMode === WritingMode.vertical && !f) hideGlyphs(v.numGlyphs, g);
                    else {
                        f = !1;
                        var L = [v.anchorX, v.anchorY, 0, 1];
                        if (vec4.transformMat4(L, L, t), isVisible(L, d)) {
                            var b = L[3],
                                A = .5 + b / n.transform.cameraToCenterDistance * .5,
                                G = symbolSize.evaluateSizeForFeature(u, c, v),
                                M = l ? G * A : G / A,
                                S = new Point(v.anchorX, v.anchorY),
                                w = project(S, a).point,
                                F = {},
                                D = placeGlyphsAlongLine(v, M, !1, o, t, a, i, e.glyphOffsetArray, h, g, w, S, F, m);
                            f = D.useVertical, (D.notEnoughRoom || f || D.needsFlipping && placeGlyphsAlongLine(v, M, !0, o, t, a, i, e.glyphOffsetArray, h, g, w, S, F, m).notEnoughRoom) && hideGlyphs(v.numGlyphs, g)
                        } else hideGlyphs(v.numGlyphs, g)
                    }
                }
                r ? e.text.dynamicLayoutVertexBuffer.updateData(g.serialize()) : e.icon.dynamicLayoutVertexBuffer.updateData(g.serialize())
            }

            function placeFirstAndLastGlyph(e, t, n, r, a, i, l, o, s, p, u, c) {
                var d = o.glyphStartIndex + o.numGlyphs,
                    g = o.lineStartIndex,
                    h = o.lineStartIndex + o.lineLength,
                    y = t.getoffsetX(o.glyphStartIndex),
                    m = t.getoffsetX(d - 1),
                    f = placeGlyphAlongLine(e * y, n, r, a, i, l, o.segment, g, h, s, p, u, c);
                if (!f) return null;
                var x = placeGlyphAlongLine(e * m, n, r, a, i, l, o.segment, g, h, s, p, u, c);
                return x ? { first: f, last: x } : null
            }

            function requiresOrientationChange(e, t, n, r) { if (e === WritingMode.horizontal) { if (Math.abs(n.y - t.y) > Math.abs(n.x - t.x) * r) return { useVertical: !0 } } return (e === WritingMode.vertical ? t.y < n.y : t.x > n.x) ? { needsFlipping: !0 } : null }

            function placeGlyphsAlongLine(e, t, n, r, a, i, l, o, s, p, u, c, d, g) {
                var h, y = t / 24,
                    m = e.lineOffsetX * t,
                    f = e.lineOffsetY * t;
                if (e.numGlyphs > 1) {
                    var x = e.glyphStartIndex + e.numGlyphs,
                        v = e.lineStartIndex,
                        L = e.lineStartIndex + e.lineLength,
                        b = placeFirstAndLastGlyph(y, o, m, f, n, u, c, e, s, i, d, !1);
                    if (!b) return { notEnoughRoom: !0 };
                    var A = project(b.first.point, l).point,
                        G = project(b.last.point, l).point;
                    if (r && !n) { var M = requiresOrientationChange(e.writingMode, A, G, g); if (M) return M }
                    h = [b.first];
                    for (var S = e.glyphStartIndex + 1; S < x - 1; S++) h.push(placeGlyphAlongLine(y * o.getoffsetX(S), m, f, n, u, c, e.segment, v, L, s, i, d, !1));
                    h.push(b.last)
                } else {
                    if (r && !n) {
                        var w = project(c, a).point,
                            F = e.lineStartIndex + e.segment + 1,
                            D = new Point(s.getx(F), s.gety(F)),
                            I = project(D, a),
                            j = I.signedDistanceFromCamera > 0 ? I.point : projectTruncatedLineSegment(c, D, w, 1, a),
                            z = requiresOrientationChange(e.writingMode, w, j, g);
                        if (z) return z
                    }
                    var P = placeGlyphAlongLine(y * o.getoffsetX(e.glyphStartIndex), m, f, n, u, c, e.segment, e.lineStartIndex, e.lineStartIndex + e.lineLength, s, i, d, !1);
                    if (!P) return { notEnoughRoom: !0 };
                    h = [P]
                }
                for (var C = 0, V = h; C < V.length; C += 1) {
                    var T = V[C];
                    addDynamicAttributes(p, T.point, T.angle)
                }
                return {}
            }

            function projectTruncatedLineSegment(e, t, n, r, a) {
                var i = project(e.add(e.sub(t)._unit()), a).point,
                    l = n.sub(i);
                return n.add(l._mult(r / l.mag()))
            }

            function placeGlyphAlongLine(e, t, n, r, a, i, l, o, s, p, u, c, d) {
                var g = r ? e - t : e + t,
                    h = g > 0 ? 1 : -1,
                    y = 0;
                r && (h *= -1, y = Math.PI), h < 0 && (y += Math.PI);
                for (var m = h > 0 ? o + l : o + l + 1, f = m, x = a, v = a, L = 0, b = 0, A = Math.abs(g); L + b <= A;) {
                    if ((m += h) < o || m >= s) return null;
                    if (v = x, void 0 === (x = c[m])) {
                        var G = new Point(p.getx(m), p.gety(m)),
                            M = project(G, u);
                        if (M.signedDistanceFromCamera > 0) x = c[m] = M.point;
                        else {
                            var S = m - h;
                            x = projectTruncatedLineSegment(0 === L ? i : new Point(p.getx(S), p.gety(S)), G, v, A - L + 1, u)
                        }
                    }
                    L += b, b = v.dist(x)
                }
                var w = (A - L) / b,
                    F = x.sub(v),
                    D = F.mult(w)._add(v);
                return D._add(F._unit()._perp()._mult(n * h)), { point: D, angle: y + Math.atan2(x.y - v.y, x.x - v.x), tileDistance: d ? { prevTileDistance: m - h === f ? 0 : p.gettileUnitDistanceFromAnchor(m - h), lastSegmentViewportDistance: A - L } : null }
            }

            function hideGlyphs(e, t) {
                for (var n = 0; n < e; n++) {
                    var r = t.length;
                    t.resize(r + 4), t.float32.set(hiddenGlyphAttributes, 3 * r)
                }
            }

            function xyTransformMat4(e, t, n) {
                var r = t[0],
                    a = t[1];
                return e[0] = n[0] * r + n[4] * a + n[12], e[1] = n[1] * r + n[5] * a + n[13], e[3] = n[3] * r + n[7] * a + n[15], e
            }
            var Point = _dereq_("@mapbox/point-geometry"),
                ref = _dereq_("@mapbox/gl-matrix"),
                mat4 = ref.mat4,
                vec4 = ref.vec4,
                symbolSize = _dereq_("./symbol_size"),
                ref$1 = _dereq_("../data/bucket/symbol_bucket"),
                addDynamicAttributes = ref$1.addDynamicAttributes,
                WritingMode = _dereq_("../symbol/shaping").WritingMode;
            module.exports = { updateLineLabels: updateLineLabels, getLabelPlaneMatrix: getLabelPlaneMatrix, getGlCoordMatrix: getGlCoordMatrix, project: project, placeFirstAndLastGlyph: placeFirstAndLastGlyph, xyTransformMat4: xyTransformMat4 };
            var hiddenGlyphAttributes = new Float32Array([-1 / 0, -1 / 0, 0, -1 / 0, -1 / 0, 0, -1 / 0, -1 / 0, 0, -1 / 0, -1 / 0, 0]);
        }, { "../data/bucket/symbol_bucket": 57, "../symbol/shaping": 213, "./symbol_size": 216, "@mapbox/gl-matrix": 1, "@mapbox/point-geometry": 2 }],
        212: [function(_dereq_, module, exports) {
            "use strict";

            function getIconQuads(t, e, i, o, n, a, r) {
                var u, l, d, f, c = e.image,
                    h = i.layout,
                    x = e.top - 1 / c.pixelRatio,
                    g = e.left - 1 / c.pixelRatio,
                    p = e.bottom + 1 / c.pixelRatio,
                    s = e.right + 1 / c.pixelRatio;
                if ("none" !== h["icon-text-fit"] && n) {
                    var P = s - g,
                        _ = p - x,
                        w = i.getLayoutValue("text-size", a, r) / 24,
                        y = n.left * w,
                        m = n.right * w,
                        M = n.top * w,
                        v = n.bottom * w,
                        R = m - y,
                        b = v - M,
                        G = h["icon-text-fit-padding"][0],
                        L = h["icon-text-fit-padding"][1],
                        B = h["icon-text-fit-padding"][2],
                        I = h["icon-text-fit-padding"][3],
                        Q = "width" === h["icon-text-fit"] ? .5 * (b - _) : 0,
                        O = "height" === h["icon-text-fit"] ? .5 * (R - P) : 0,
                        A = "width" === h["icon-text-fit"] || "both" === h["icon-text-fit"] ? R : P,
                        V = "height" === h["icon-text-fit"] || "both" === h["icon-text-fit"] ? b : _;
                    u = new Point(y + O - I, M + Q - G), l = new Point(y + O + L + A, M + Q - G), d = new Point(y + O + L + A, M + Q + B + V), f = new Point(y + O - I, M + Q + B + V)
                } else u = new Point(g, x), l = new Point(s, x), d = new Point(s, p), f = new Point(g, p);
                var D = i.getLayoutValue("icon-rotate", a, r) * Math.PI / 180;
                if (D) {
                    var E = Math.sin(D),
                        F = Math.cos(D),
                        H = [F, -E, E, F];
                    u._matMult(H), l._matMult(H), f._matMult(H), d._matMult(H)
                }
                return [{ tl: u, tr: l, bl: f, br: d, tex: { x: c.textureRect.x - 1, y: c.textureRect.y - 1, w: c.textureRect.w + 2, h: c.textureRect.h + 2 }, writingMode: void 0, glyphOffset: [0, 0] }]
            }

            function getGlyphQuads(t, e, i, o, n, a, r) {
                for (var u = i.getLayoutValue("text-rotate", n, a) * Math.PI / 180, l = i.getLayoutValue("text-offset", n, a).map(function(t) { return 24 * t }), d = e.positionedGlyphs, f = [], c = 0; c < d.length; c++) {
                    var h = d[c],
                        x = r[h.glyph];
                    if (x) {
                        var g = x.rect;
                        if (g) {
                            var p = GLYPH_PBF_BORDER + 1,
                                s = x.metrics.advance / 2,
                                P = o ? [h.x + s, h.y] : [0, 0],
                                _ = o ? [0, 0] : [h.x + s + l[0], h.y + l[1]],
                                w = x.metrics.left - p - s + _[0],
                                y = -x.metrics.top - p + _[1],
                                m = w + g.w,
                                M = y + g.h,
                                v = new Point(w, y),
                                R = new Point(m, y),
                                b = new Point(w, M),
                                G = new Point(m, M);
                            if (o && h.vertical) {
                                var L = new Point(-s, s),
                                    B = -Math.PI / 2,
                                    I = new Point(5, 0);
                                v._rotateAround(B, L)._add(I), R._rotateAround(B, L)._add(I), b._rotateAround(B, L)._add(I), G._rotateAround(B, L)._add(I)
                            }
                            if (u) {
                                var Q = Math.sin(u),
                                    O = Math.cos(u),
                                    A = [O, -Q, Q, O];
                                v._matMult(A), R._matMult(A), b._matMult(A), G._matMult(A)
                            }
                            f.push({ tl: v, tr: R, bl: b, br: G, tex: g, writingMode: e.writingMode, glyphOffset: P })
                        }
                    }
                }
                return f
            }
            var Point = _dereq_("@mapbox/point-geometry"),
                ref = _dereq_("../style/parse_glyph_pbf"),
                GLYPH_PBF_BORDER = ref.GLYPH_PBF_BORDER;
            module.exports = { getIconQuads: getIconQuads, getGlyphQuads: getGlyphQuads };
        }, { "../style/parse_glyph_pbf": 183, "@mapbox/point-geometry": 2 }],
        213: [function(_dereq_, module, exports) {
            "use strict";

            function breakLines(e, t) {
                for (var a = [], r = 0, i = 0, n = t; i < n.length; i += 1) {
                    var l = n[i];
                    a.push(e.substring(r, l)), r = l
                }
                return r < e.length && a.push(e.substring(r, e.length)), a
            }

            function shapeText(e, t, a, r, i, n, l, o, c, s) {
                var h = e.trim();
                s === WritingMode.vertical && (h = verticalizePunctuation(h));
                var g, u = [],
                    p = { positionedGlyphs: u, text: h, top: o[1], bottom: o[1], left: o[0], right: o[0], writingMode: s },
                    b = rtlTextPlugin.processBidirectionalText;
                return g = b ? b(h, determineLineBreaks(h, l, a, t)) : breakLines(h, determineLineBreaks(h, l, a, t)), shapeLines(p, t, g, r, i, n, s, l, c), !!u.length && p
            }

            function determineAverageLineWidth(e, t, a, r) {
                for (var i = 0, n = 0; n < e.length; n++) {
                    var l = r[e.charCodeAt(n)];
                    l && (i += l.metrics.advance + t)
                }
                return i / Math.max(1, Math.ceil(i / a))
            }

            function calculateBadness(e, t, a, r) { var i = Math.pow(e - t, 2); return r ? e < t ? i / 2 : 2 * i : i + Math.abs(a) * a }

            function calculatePenalty(e, t) { var a = 0; return 10 === e && (a -= 1e4), 40 !== e && 65288 !== e || (a += 50), 41 !== t && 65289 !== t || (a += 50), a }

            function evaluateBreak(e, t, a, r, i, n) {
                for (var l = null, o = calculateBadness(t, a, i, n), c = 0, s = r; c < s.length; c += 1) {
                    var h = s[c],
                        g = t - h.x,
                        u = calculateBadness(g, a, i, n) + h.badness;
                    u <= o && (l = h, o = u)
                }
                return { index: e, x: t, priorBreak: l, badness: o }
            }

            function leastBadBreaks(e) { return e ? leastBadBreaks(e.priorBreak).concat(e.index) : [] }

            function determineLineBreaks(e, t, a, r) {
                if (!a) return [];
                if (!e) return [];
                for (var i = [], n = determineAverageLineWidth(e, t, a, r), l = 0, o = 0; o < e.length; o++) {
                    var c = e.charCodeAt(o),
                        s = r[c];
                    s && !whitespace[c] && (l += s.metrics.advance + t), o < e.length - 1 && (breakable[c] || scriptDetection.charAllowsIdeographicBreaking(c)) && i.push(evaluateBreak(o + 1, l, n, i, calculatePenalty(c, e.charCodeAt(o + 1)), !1))
                }
                return leastBadBreaks(evaluateBreak(e.length, l, n, i, 0, !0))
            }

            function getAnchorAlignment(e) {
                var t = .5,
                    a = .5;
                switch (e) {
                    case "right":
                    case "top-right":
                    case "bottom-right":
                        t = 1;
                        break;
                    case "left":
                    case "top-left":
                    case "bottom-left":
                        t = 0
                }
                switch (e) {
                    case "bottom":
                    case "bottom-right":
                    case "bottom-left":
                        a = 1;
                        break;
                    case "top":
                    case "top-right":
                    case "top-left":
                        a = 0
                }
                return { horizontalAlign: t, verticalAlign: a }
            }

            function shapeLines(e, t, a, r, i, n, l, o, c) {
                for (var s = 0, h = -17, g = 0, u = e.positionedGlyphs, p = "right" === n ? 1 : "left" === n ? 0 : .5, b = 0, v = a; b < v.length; b += 1) {
                    var d = v[b];
                    if (d = d.trim(), d.length) {
                        for (var f = u.length, k = 0; k < d.length; k++) {
                            var m = d.charCodeAt(k),
                                x = t[m];
                            x && (scriptDetection.charHasUprightVerticalOrientation(m) && l !== WritingMode.horizontal ? (u.push({ glyph: m, x: s, y: 0, vertical: !0 }), s += c + o) : (u.push({ glyph: m, x: s, y: h, vertical: !1 }), s += x.metrics.advance + o))
                        }
                        if (u.length !== f) {
                            var A = s - o;
                            g = Math.max(A, g), justifyLine(u, t, f, u.length - 1, p)
                        }
                        s = 0, h += r
                    } else h += r
                }
                var B = getAnchorAlignment(i),
                    y = B.horizontalAlign,
                    w = B.verticalAlign;
                align(u, p, y, w, g, r, a.length);
                var z = a.length * r;
                e.top += -w * z, e.bottom = e.top + z, e.left += -y * g, e.right = e.left + g
            }

            function justifyLine(e, t, a, r, i) {
                if (i) {
                    var n = t[e[r].glyph];
                    if (n)
                        for (var l = n.metrics.advance, o = (e[r].x + l) * i, c = a; c <= r; c++) e[c].x -= o
                }
            }

            function align(e, t, a, r, i, n, l) { for (var o = (t - a) * i, c = (-r * l + .5) * n, s = 0; s < e.length; s++) e[s].x += o, e[s].y += c }

            function shapeIcon(e, t, a) {
                var r = getAnchorAlignment(a),
                    i = r.horizontalAlign,
                    n = r.verticalAlign,
                    l = t[0],
                    o = t[1],
                    c = l - e.displaySize[0] * i,
                    s = c + e.displaySize[0],
                    h = o - e.displaySize[1] * n;
                return { image: e, top: h, bottom: h + e.displaySize[1], left: c, right: s }
            }
            var scriptDetection = _dereq_("../util/script_detection"),
                verticalizePunctuation = _dereq_("../util/verticalize_punctuation"),
                rtlTextPlugin = _dereq_("../source/rtl_text_plugin"),
                WritingMode = { horizontal: 1, vertical: 2, horizontalOnly: 3 };
            module.exports = { shapeText: shapeText, shapeIcon: shapeIcon, WritingMode: WritingMode };
            var whitespace = {};
            whitespace[9] = !0, whitespace[10] = !0, whitespace[11] = !0, whitespace[12] = !0, whitespace[13] = !0, whitespace[32] = !0;
            var breakable = {};
            breakable[10] = !0, breakable[32] = !0, breakable[38] = !0, breakable[40] = !0, breakable[41] = !0, breakable[43] = !0, breakable[45] = !0, breakable[47] = !0, breakable[173] = !0, breakable[183] = !0, breakable[8203] = !0, breakable[8208] = !0, breakable[8211] = !0, breakable[8231] = !0;
        }, { "../source/rtl_text_plugin": 107, "../util/script_detection": 256, "../util/verticalize_punctuation": 262 }],
        214: [function(_dereq_, module, exports) {
            "use strict";

            function performSymbolLayout(e, t, o, i, a, n) {
                e.createArrays(), e.symbolInstances = [];
                var r = 512 * e.overscaling;
                e.tilePixelRatio = EXTENT / r, e.compareText = {}, e.iconsNeedLinear = !1;
                for (var l = e.layers[0].layout, s = 24 * l["text-line-height"], c = l["text-font"].join(","), u = "map" === l["text-rotation-alignment"] && "line" === l["symbol-placement"], y = l["text-keep-upright"], g = t[c] || {}, x = o[c] || {}, d = 0, m = e.features; d < m.length; d += 1) {
                    var f = m[d],
                        p = {},
                        h = f.text;
                    if (h) {
                        var z = scriptDetection.allowsVerticalWritingMode(h),
                            v = e.layers[0].getLayoutValue("text-offset", { zoom: e.zoom }, f).map(function(e) { return 24 * e }),
                            b = 24 * e.layers[0].getLayoutValue("text-letter-spacing", { zoom: e.zoom }, f),
                            S = scriptDetection.allowsLetterSpacing(h) ? b : 0,
                            I = e.layers[0].getLayoutValue("text-anchor", { zoom: e.zoom }, f),
                            L = e.layers[0].getLayoutValue("text-justify", { zoom: e.zoom }, f),
                            T = "line" !== l["symbol-placement"] ? 24 * e.layers[0].getLayoutValue("text-max-width", { zoom: e.zoom }, f) : 0;
                        p.horizontal = shapeText(h, g, T, s, I, L, S, v, 24, WritingMode.horizontal), z && u && y && (p.vertical = shapeText(h, g, T, s, I, L, S, v, 24, WritingMode.vertical))
                    }
                    var V = void 0;
                    if (f.icon) {
                        var A = i[f.icon];
                        A && (V = shapeIcon(a[f.icon], e.layers[0].getLayoutValue("icon-offset", { zoom: e.zoom }, f), e.layers[0].getLayoutValue("icon-anchor", { zoom: e.zoom }, f)), void 0 === e.sdfIcons ? e.sdfIcons = A.sdf : e.sdfIcons !== A.sdf && util.warnOnce("Style sheet warning: Cannot mix SDF and non-SDF icons in one buffer"), A.pixelRatio !== e.pixelRatio ? e.iconsNeedLinear = !0 : 0 === l["icon-rotate"] && e.layers[0].isLayoutValueFeatureConstant("icon-rotate") || (e.iconsNeedLinear = !0))
                    }(p.horizontal || V) && addFeature(e, f, p, V, x)
                }
                n && e.generateCollisionDebugBuffers()
            }

            function addFeature(e, t, o, i, a) {
                var n = e.layers[0].getLayoutValue("text-size", { zoom: e.zoom + 1 }, t),
                    r = e.layers[0].getLayoutValue("icon-size", { zoom: e.zoom + 1 }, t),
                    l = e.layers[0].getLayoutValue("text-offset", { zoom: e.zoom }, t),
                    s = e.layers[0].getLayoutValue("icon-offset", { zoom: e.zoom }, t),
                    c = e.layers[0].getLayoutValue("text-size", { zoom: 18 }, t);
                void 0 === c && (c = n);
                var u = e.layers[0].layout,
                    y = n / 24,
                    g = e.tilePixelRatio * y,
                    x = e.tilePixelRatio * c / 24,
                    d = e.tilePixelRatio * r,
                    m = e.tilePixelRatio * u["symbol-spacing"],
                    f = u["text-padding"] * e.tilePixelRatio,
                    p = u["icon-padding"] * e.tilePixelRatio,
                    h = u["text-max-angle"] / 180 * Math.PI,
                    z = "map" === u["text-rotation-alignment"] && "line" === u["symbol-placement"],
                    v = "map" === u["icon-rotation-alignment"] && "line" === u["symbol-placement"],
                    b = u["symbol-placement"],
                    S = m / 2,
                    I = function(n, r) { r.x < 0 || r.x >= EXTENT || r.y < 0 || r.y >= EXTENT || e.symbolInstances.push(addSymbol(e, r, n, o, i, e.layers[0], e.collisionBoxArray, t.index, t.sourceLayerIndex, e.index, g, f, z, l, d, p, v, s, { zoom: e.zoom }, t, a)) };
                if ("line" === b)
                    for (var L = 0, T = clipLine(t.geometry, 0, 0, EXTENT, EXTENT); L < T.length; L += 1)
                        for (var V = T[L], A = getAnchors(V, m, h, o.vertical || o.horizontal, i, 24, x, e.overscaling, EXTENT), E = 0, q = A; E < q.length; E += 1) {
                            var P = q[E],
                                w = o.horizontal;
                            w && anchorIsTooClose(e, w.text, S, P) || I(V, P)
                        } else if ("Polygon" === t.type)
                            for (var O = 0, B = classifyRings(t.geometry, 0); O < B.length; O += 1) {
                                var D = B[O],
                                    R = findPoleOfInaccessibility(D, 16);
                                I(D[0], new Anchor(R.x, R.y, 0))
                            } else if ("LineString" === t.type)
                                for (var _ = 0, M = t.geometry; _ < M.length; _ += 1) {
                                    var N = M[_];
                                    I(N, new Anchor(N[0].x, N[0].y, 0))
                                } else if ("Point" === t.type)
                                    for (var C = 0, F = t.geometry; C < F.length; C += 1)
                                        for (var G = F[C], W = 0, X = G; W < X.length; W += 1) {
                                            var k = X[W];
                                            I([k], new Anchor(k.x, k.y, 0))
                                        }
            }

            function addTextVertices(e, t, o, i, a, n, r, l, s, c, u, y) {
                var g = getGlyphQuads(t, o, i, a, n, r, y),
                    x = getSizeVertexData(i, e.zoom, e.textSizeData, "text-size", r);
                return e.addSymbols(e.text, g, x, l, a, r, c, t, s.lineStartIndex, s.lineLength, e.placedGlyphArray), u.push(e.placedGlyphArray.length - 1), 4 * g.length
            }

            function addSymbol(e, t, o, i, a, n, r, l, s, c, u, y, g, x, d, m, f, p, h, z, v) {
                var b, S, I = e.addToLineVertexArray(t, o),
                    L = 0,
                    T = 0,
                    V = 0,
                    A = i.horizontal ? i.horizontal.text : "",
                    E = [];
                i.horizontal && (b = new CollisionFeature(r, o, t, l, s, c, i.horizontal, u, y, g, e.overscaling), T += addTextVertices(e, t, i.horizontal, n, g, h, z, x, I, i.vertical ? WritingMode.horizontal : WritingMode.horizontalOnly, E, v), i.vertical && (V += addTextVertices(e, t, i.vertical, n, g, h, z, x, I, WritingMode.vertical, E, v)));
                var q = b ? b.boxStartIndex : e.collisionBoxArray.length,
                    P = b ? b.boxEndIndex : e.collisionBoxArray.length;
                if (a) {
                    var w = getIconQuads(t, a, n, f, i.horizontal, h, z);
                    S = new CollisionFeature(r, o, t, l, s, c, a, d, m, !1, e.overscaling), L = 4 * w.length;
                    var O = getSizeVertexData(n, e.zoom, e.iconSizeData, "icon-size", z);
                    e.addSymbols(e.icon, w, O, p, f, z, !1, t, I.lineStartIndex, I.lineLength, e.placedIconArray)
                }
                var B = S ? S.boxStartIndex : e.collisionBoxArray.length,
                    D = S ? S.boxEndIndex : e.collisionBoxArray.length;
                return e.glyphOffsetArray.length >= SymbolBucket.MAX_GLYPHS && util.warnOnce("Too many glyphs being rendered in a tile. See https://github.com/mapbox/mapbox-gl-js/issues/2907"), { key: A, textBoxStartIndex: q, textBoxEndIndex: P, iconBoxStartIndex: B, iconBoxEndIndex: D, textOffset: x, iconOffset: p, anchor: t, line: o, featureIndex: l, feature: z, numGlyphVertices: T, numVerticalGlyphVertices: V, numIconVertices: L, textOpacityState: new OpacityState, iconOpacityState: new OpacityState, isDuplicate: !1, placedTextSymbolIndices: E }
            }

            function anchorIsTooClose(e, t, o, i) {
                var a = e.compareText;
                if (t in a) {
                    for (var n = a[t], r = n.length - 1; r >= 0; r--)
                        if (i.dist(n[r]) < o) return !0
                } else a[t] = [];
                return a[t].push(i), !1
            }

            function getSizeVertexData(e, t, o, i, a) { if ("source" === o.functionType) return [10 * e.getLayoutValue(i, {}, a)]; if ("composite" === o.functionType) { var n = o.coveringZoomRange; return [10 * e.getLayoutValue(i, { zoom: n[0] }, a), 10 * e.getLayoutValue(i, { zoom: n[1] }, a)] } return null }
            var Anchor = _dereq_("./anchor"),
                getAnchors = _dereq_("./get_anchors"),
                clipLine = _dereq_("./clip_line"),
                OpacityState = _dereq_("./opacity_state"),
                ref = _dereq_("./shaping"),
                shapeText = ref.shapeText,
                shapeIcon = ref.shapeIcon,
                WritingMode = ref.WritingMode,
                ref$1 = _dereq_("./quads"),
                getGlyphQuads = ref$1.getGlyphQuads,
                getIconQuads = ref$1.getIconQuads,
                CollisionFeature = _dereq_("./collision_feature"),
                util = _dereq_("../util/util"),
                scriptDetection = _dereq_("../util/script_detection"),
                findPoleOfInaccessibility = _dereq_("../util/find_pole_of_inaccessibility"),
                classifyRings = _dereq_("../util/classify_rings"),
                EXTENT = _dereq_("../data/extent"),
                SymbolBucket = _dereq_("../data/bucket/symbol_bucket"),
                Point = _dereq_("@mapbox/point-geometry");
            module.exports = { performSymbolLayout: performSymbolLayout };
        }, { "../data/bucket/symbol_bucket": 57, "../data/extent": 58, "../util/classify_rings": 243, "../util/find_pole_of_inaccessibility": 249, "../util/script_detection": 256, "../util/util": 260, "./anchor": 200, "./clip_line": 202, "./collision_feature": 204, "./get_anchors": 207, "./opacity_state": 210, "./quads": 212, "./shaping": 213, "@mapbox/point-geometry": 2 }],
        215: [function(_dereq_, module, exports) {
            "use strict";

            function updateOpacity(e, t, i, a, o) {
                if (e.isDuplicate) t.opacity = 0, t.targetOpacity = 0;
                else {
                    t.targetOpacity !== i && (o.latestStart = a);
                    var l = o.duration ? (a - t.time) / o.duration : 1;
                    t.opacity = Math.max(0, Math.min(1, t.opacity + (1 === t.targetOpacity ? l : -l))), t.targetOpacity = i, t.time = a
                }
            }

            function packOpacity(e) {
                if (0 === e.opacity && 0 === e.targetOpacity) return 0;
                if (1 === e.opacity && 1 === e.targetOpacity) return 4294967295;
                var t = 1 === e.targetOpacity ? 1 : 0,
                    i = Math.floor(127 * e.opacity);
                return i * shift25 + t * shift24 + i * shift17 + t * shift16 + i * shift9 + t * shift8 + i * shift1 + t
            }

            function updateOpacities(e, t) {
                var i = e.text && e.text.opacityVertexArray,
                    a = e.icon && e.icon.opacityVertexArray;
                i && i.clear(), a && a.clear(), e.fadeStartTime = Date.now();
                for (var o = 0, l = e.symbolInstances; o < l.length; o += 1) {
                    var r = l[o],
                        c = !(r.textBoxStartIndex === r.textBoxEndIndex),
                        n = !(r.iconBoxStartIndex === r.iconBoxEndIndex);
                    if (c || n) {
                        if (c) {
                            var s = r.placedText ? 1 : 0,
                                p = r.textOpacityState,
                                x = 0 === p.opacity && 0 === p.targetOpacity;
                            updateOpacity(r, p, s, e.fadeStartTime, t);
                            var y = 0 === p.opacity && 0 === p.targetOpacity;
                            if (x !== y)
                                for (var f = 0, d = r.placedTextSymbolIndices; f < d.length; f += 1) {
                                    var B = d[f],
                                        m = e.placedGlyphArray.get(B);
                                    m.hidden = y
                                }
                            for (var u = (r.numGlyphVertices + r.numVerticalGlyphVertices) / 4, h = packOpacity(p), v = 0; v < u; v++) i.emplaceBack(h)
                        }
                        if (n) {
                            var S = r.placedIcon ? 1 : 0,
                                g = r.iconOpacityState;
                            updateOpacity(r, g, S, e.fadeStartTime, t);
                            for (var C = r.numIconVertices / 4, A = packOpacity(g), I = 0; I < C; I++) a.emplaceBack(A)
                        }
                    }
                }
                i && e.text.opacityVertexBuffer && e.text.opacityVertexBuffer.updateData(i.serialize()), a && e.icon.opacityVertexBuffer && e.icon.opacityVertexBuffer.updateData(a.serialize())
            }

            function updateCollisionBox(e, t) { e.emplaceBack(t ? 1 : 0, 0), e.emplaceBack(t ? 1 : 0, 0), e.emplaceBack(t ? 1 : 0, 0), e.emplaceBack(t ? 1 : 0, 0) }

            function updateCollisionCircles(e, t, i, a) {
                for (var o = 0; o < t.length; o += 5) {
                    var l = a || 0 === t[o + 4];
                    e.emplaceBack(i ? 1 : 0, l ? 1 : 0), e.emplaceBack(i ? 1 : 0, l ? 1 : 0), e.emplaceBack(i ? 1 : 0, l ? 1 : 0), e.emplaceBack(i ? 1 : 0, l ? 1 : 0)
                }
            }

            function performSymbolPlacement(e, t, i, a, o, l, r, c, n, s) {
                var p, x, y = e.layers[0],
                    f = y.layout,
                    d = Math.pow(2, a - e.zoom);
                i && (e.collisionBox && e.collisionBox.collisionVertexArray && e.collisionBox.collisionVertexArray.length && (p = e.collisionBox.collisionVertexArray, p.clear()), e.collisionCircle && e.collisionCircle.collisionVertexArray && e.collisionCircle.collisionVertexArray.length && (x = e.collisionCircle.collisionVertexArray, x.clear()));
                for (var B = symbolSize.evaluateSizeForZoom(e.textSizeData, t.transform, y, !0), m = "map" === e.layers[0].layout["text-pitch-alignment"], u = 0, h = e.symbolInstances; u < h.length; u += 1) {
                    var v = h[u],
                        S = !(v.textBoxStartIndex === v.textBoxEndIndex),
                        g = !(v.iconBoxStartIndex === v.iconBoxEndIndex);
                    v.collisionArrays || (v.collisionArrays = e.deserializeCollisionBoxes(s, v.textBoxStartIndex, v.textBoxEndIndex, v.iconBoxStartIndex, v.iconBoxEndIndex));
                    var C = f["text-optional"] || !S,
                        A = f["icon-optional"] || !g,
                        I = [],
                        O = [],
                        V = [],
                        k = !1;
                    if (!v.isDuplicate) {
                        v.collisionArrays.textBox && (I = t.placeCollisionBox(v.collisionArrays.textBox, f["text-allow-overlap"], o, l)), v.collisionArrays.iconBox && (O = t.placeCollisionBox(v.collisionArrays.iconBox, f["icon-allow-overlap"], o, l));
                        var z = v.collisionArrays.textCircles;
                        if (z) {
                            var w = e.placedGlyphArray.get(v.placedTextSymbolIndices[0]),
                                b = symbolSize.evaluateSizeForFeature(e.textSizeData, B, w);
                            V = t.placeCollisionCircles(z, f["text-allow-overlap"], d, o, v.key, w, e.lineVertexArray, e.glyphOffsetArray, b, l, r, i, m), k = f["text-allow-overlap"] || V.length > 0
                        }
                    }
                    var M = I.length > 0 || k,
                        D = O.length > 0;
                    C || A ? A ? C || (D = D && M) : M = D && M : D = M = D && M, v.placedText = M, v.placedIcon = D, v.collisionArrays.textBox && (p && updateCollisionBox(p, M), M && t.insertCollisionBox(I, f["text-ignore-placement"], c, n, v.textBoxStartIndex)), v.collisionArrays.iconBox && (p && updateCollisionBox(p, D), D && t.insertCollisionBox(O, f["icon-ignore-placement"], c, n, v.iconBoxStartIndex)), v.collisionArrays.textCircles && (x && updateCollisionCircles(x, v.collisionArrays.textCircles, M, v.isDuplicate), M && t.insertCollisionCircles(V, f["text-ignore-placement"], c, n, v.textBoxStartIndex))
                }
                p && e.collisionBox.collisionVertexBuffer && e.collisionBox.collisionVertexBuffer.updateData(p.serialize()), x && e.collisionCircle.collisionVertexBuffer && e.collisionCircle.collisionVertexBuffer.updateData(x.serialize())
            }
            var symbolSize = _dereq_("./symbol_size"),
                mat4 = _dereq_("@mapbox/gl-matrix").mat4;
            module.exports = { updateOpacities: updateOpacities, performSymbolPlacement: performSymbolPlacement };
            var shift25 = Math.pow(2, 25),
                shift24 = Math.pow(2, 24),
                shift17 = Math.pow(2, 17),
                shift16 = Math.pow(2, 16),
                shift9 = Math.pow(2, 9),
                shift8 = Math.pow(2, 8),
                shift1 = Math.pow(2, 1);
        }, { "./symbol_size": 216, "@mapbox/gl-matrix": 1 }],
        216: [function(_dereq_, module, exports) {
            "use strict";

            function getSizeData(e, o, t) {
                var a = o.getLayoutDeclaration(t),
                    i = !a || a.isFeatureConstant();
                if (!a || a.isZoomConstant()) return i ? { functionType: "constant", layoutSize: o.getLayoutValue(t, { zoom: e + 1 }) } : { functionType: "source" };
                for (var n = a.expression.zoomStops, r = 0; r < n.length && n[r] <= e;) r++;
                r = Math.max(0, r - 1);
                for (var u = r; u < n.length && n[u] < e + 1;) u++;
                u = Math.min(n.length - 1, u);
                var c = [n[r], n[u]];
                return i ? { functionType: "camera", layoutSize: o.getLayoutValue(t, { zoom: e + 1 }), coveringZoomRange: c, coveringStopValues: [o.getLayoutValue(t, { zoom: n[r] }), o.getLayoutValue(t, { zoom: n[u] })] } : { functionType: "composite", coveringZoomRange: c }
            }

            function evaluateSizeForFeature(e, o, t) { var a = o; return "source" === e.functionType ? t.lowerSize / 10 : "composite" === e.functionType ? interpolate.number(t.lowerSize / 10, t.upperSize / 10, a.uSizeT) : a.uSize }

            function evaluateSizeForZoom(e, o, t, a) {
                var i = {};
                if ("composite" === e.functionType) {
                    var n = t.getLayoutDeclaration(a ? "text-size" : "icon-size"),
                        r = n.interpolationFactor(o.zoom, e.coveringZoomRange[0], e.coveringZoomRange[1]);
                    i.uSizeT = util.clamp(r, 0, 1)
                } else if ("camera" === e.functionType) {
                    var u = t.getLayoutDeclaration(a ? "text-size" : "icon-size"),
                        c = u.interpolationFactor(o.zoom, e.coveringZoomRange[0], e.coveringZoomRange[1]),
                        l = e.coveringStopValues[0],
                        z = e.coveringStopValues[1];
                    i.uSize = l + (z - l) * util.clamp(c, 0, 1)
                } else "constant" === e.functionType && (i.uSize = e.layoutSize);
                return i
            }
            var interpolate = _dereq_("../style-spec/util/interpolate"),
                util = _dereq_("../util/util");
            module.exports = { getSizeData: getSizeData, evaluateSizeForFeature: evaluateSizeForFeature, evaluateSizeForZoom: evaluateSizeForZoom };
        }, { "../style-spec/util/interpolate": 155, "../util/util": 260 }],
        217: [function(_dereq_, module, exports) {
            "use strict";
            var rtlTextPlugin = _dereq_("../source/rtl_text_plugin");
            module.exports = function(e, r, t, a) { var l = r.getLayoutValue("text-transform", t, a); return "uppercase" === l ? e = e.toLocaleUpperCase() : "lowercase" === l && (e = e.toLocaleLowerCase()), rtlTextPlugin.applyArabicShaping && (e = rtlTextPlugin.applyArabicShaping(e)), e };
        }, { "../source/rtl_text_plugin": 107 }],
        218: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../util/dom"),
                Point = _dereq_("@mapbox/point-geometry"),
                handlers = { scrollZoom: _dereq_("./handler/scroll_zoom"), boxZoom: _dereq_("./handler/box_zoom"), dragRotate: _dereq_("./handler/drag_rotate"), dragPan: _dereq_("./handler/drag_pan"), keyboard: _dereq_("./handler/keyboard"), doubleClickZoom: _dereq_("./handler/dblclick_zoom"), touchZoomRotate: _dereq_("./handler/touch_zoom_rotate") };
            module.exports = function(e, t) {
                function n(e) { h("mouseout", e) }

                function o(t) { e.doubleClickZoom.isActive() || e.stop(), L = DOM.mousePos(g, t), h("mousedown", t), E = !0 }

                function r(t) {
                    var n = e.dragRotate && e.dragRotate.isActive();
                    p && !n && h("contextmenu", p), p = null, E = !1, h("mouseup", t)
                }

                function u(t) {
                    if (!(e.dragPan && e.dragPan.isActive() || e.dragRotate && e.dragRotate.isActive())) {
                        for (var n = t.toElement || t.target; n && n !== g;) n = n.parentNode;
                        n === g && h("mousemove", t)
                    }
                }

                function a(t) { e.stop(), f("touchstart", t), !t.touches || t.touches.length > 1 || (b ? (clearTimeout(b), b = null, h("dblclick", t)) : b = setTimeout(l, 300)) }

                function i(e) { f("touchmove", e) }

                function c(e) { f("touchend", e) }

                function d(e) { f("touchcancel", e) }

                function l() { b = null }

                function s(e) { DOM.mousePos(g, e).equals(L) && h("click", e) }

                function m(e) { h("dblclick", e), e.preventDefault() }

                function v(t) {
                    var n = e.dragRotate && e.dragRotate.isActive();
                    E || n ? E && (p = t) : h("contextmenu", t), t.preventDefault()
                }

                function h(t, n) { var o = DOM.mousePos(g, n); return e.fire(t, { lngLat: e.unproject(o), point: o, originalEvent: n }) }

                function f(t, n) {
                    var o = DOM.touchPos(g, n),
                        r = o.reduce(function(e, t, n, o) { return e.add(t.div(o.length)) }, new Point(0, 0));
                    return e.fire(t, { lngLat: e.unproject(r), point: r, lngLats: o.map(function(t) { return e.unproject(t) }, this), points: o, originalEvent: n })
                }
                var g = e.getCanvasContainer(),
                    p = null,
                    E = !1,
                    L = null,
                    b = null;
                for (var k in handlers) e[k] = new handlers[k](e, t), t.interactive && t[k] && e[k].enable(t[k]);
                g.addEventListener("mouseout", n, !1), g.addEventListener("mousedown", o, !1), g.addEventListener("mouseup", r, !1), g.addEventListener("mousemove", u, !1), g.addEventListener("touchstart", a, !1), g.addEventListener("touchend", c, !1), g.addEventListener("touchmove", i, !1), g.addEventListener("touchcancel", d, !1), g.addEventListener("click", s, !1), g.addEventListener("dblclick", m, !1), g.addEventListener("contextmenu", v, !1)
            };
        }, { "../util/dom": 247, "./handler/box_zoom": 227, "./handler/dblclick_zoom": 228, "./handler/drag_pan": 229, "./handler/drag_rotate": 230, "./handler/keyboard": 231, "./handler/scroll_zoom": 232, "./handler/touch_zoom_rotate": 233, "@mapbox/point-geometry": 2 }],
        219: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                interpolate = _dereq_("../style-spec/util/interpolate").number,
                browser = _dereq_("../util/browser"),
                LngLat = _dereq_("../geo/lng_lat"),
                LngLatBounds = _dereq_("../geo/lng_lat_bounds"),
                Point = _dereq_("@mapbox/point-geometry"),
                Evented = _dereq_("../util/evented"),
                Camera = function(t) {
                    function i(i, e) { t.call(this), this.moving = !1, this.transform = i, this._bearingSnap = e.bearingSnap }
                    return t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i, i.prototype.getCenter = function() { return this.transform.center }, i.prototype.setCenter = function(t, i) { return this.jumpTo({ center: t }, i) }, i.prototype.panBy = function(t, i, e) { return t = Point.convert(t).mult(-1), this.panTo(this.transform.center, util.extend({ offset: t }, i), e) }, i.prototype.panTo = function(t, i, e) { return this.easeTo(util.extend({ center: t }, i), e) }, i.prototype.getZoom = function() { return this.transform.zoom }, i.prototype.setZoom = function(t, i) { return this.jumpTo({ zoom: t }, i), this }, i.prototype.zoomTo = function(t, i, e) { return this.easeTo(util.extend({ zoom: t }, i), e) }, i.prototype.zoomIn = function(t, i) { return this.zoomTo(this.getZoom() + 1, t, i), this }, i.prototype.zoomOut = function(t, i) { return this.zoomTo(this.getZoom() - 1, t, i), this }, i.prototype.getBearing = function() { return this.transform.bearing }, i.prototype.setBearing = function(t, i) { return this.jumpTo({ bearing: t }, i), this }, i.prototype.rotateTo = function(t, i, e) { return this.easeTo(util.extend({ bearing: t }, i), e) }, i.prototype.resetNorth = function(t, i) { return this.rotateTo(0, util.extend({ duration: 1e3 }, t), i), this }, i.prototype.snapToNorth = function(t, i) { return Math.abs(this.getBearing()) < this._bearingSnap ? this.resetNorth(t, i) : this }, i.prototype.getPitch = function() { return this.transform.pitch }, i.prototype.setPitch = function(t, i) { return this.jumpTo({ pitch: t }, i), this }, i.prototype.fitBounds = function(t, i, e) {
                        if (i = util.extend({ padding: { top: 0, bottom: 0, right: 0, left: 0 }, offset: [0, 0], maxZoom: this.transform.maxZoom }, i), "number" == typeof i.padding) {
                            var o = i.padding;
                            i.padding = { top: o, bottom: o, right: o, left: o }
                        }
                        if (!util.deepEqual(Object.keys(i.padding).sort(function(t, i) { return t < i ? -1 : t > i ? 1 : 0 }), ["bottom", "left", "right", "top"])) return util.warnOnce("options.padding must be a positive number, or an Object with keys 'bottom', 'left', 'right', 'top'"), this;
                        t = LngLatBounds.convert(t);
                        var n = [(i.padding.left - i.padding.right) / 2, (i.padding.top - i.padding.bottom) / 2],
                            r = Math.min(i.padding.right, i.padding.left),
                            a = Math.min(i.padding.top, i.padding.bottom);
                        i.offset = [i.offset[0] + n[0], i.offset[1] + n[1]];
                        var s = Point.convert(i.offset),
                            h = this.transform,
                            p = h.project(t.getNorthWest()),
                            u = h.project(t.getSouthEast()),
                            c = u.sub(p),
                            m = (h.width - 2 * r - 2 * Math.abs(s.x)) / c.x,
                            f = (h.height - 2 * a - 2 * Math.abs(s.y)) / c.y;
                        return f < 0 || m < 0 ? (util.warnOnce("Map cannot fit within canvas with the given bounds, padding, and/or offset."), this) : (i.center = h.unproject(p.add(u).div(2)), i.zoom = Math.min(h.scaleZoom(h.scale * Math.min(m, f)), i.maxZoom), i.bearing = 0, i.linear ? this.easeTo(i, e) : this.flyTo(i, e))
                    }, i.prototype.jumpTo = function(t, i) {
                        this.stop();
                        var e = this.transform,
                            o = !1,
                            n = !1,
                            r = !1;
                        return "zoom" in t && e.zoom !== +t.zoom && (o = !0, e.zoom = +t.zoom), void 0 !== t.center && (e.center = LngLat.convert(t.center)), "bearing" in t && e.bearing !== +t.bearing && (n = !0, e.bearing = +t.bearing), "pitch" in t && e.pitch !== +t.pitch && (r = !0, e.pitch = +t.pitch), this.fire("movestart", i).fire("move", i), o && this.fire("zoomstart", i).fire("zoom", i).fire("zoomend", i), n && this.fire("rotate", i), r && this.fire("pitchstart", i).fire("pitch", i).fire("pitchend", i), this.fire("moveend", i)
                    }, i.prototype.easeTo = function(t, i) {
                        var e = this;
                        this.stop(), t = util.extend({ offset: [0, 0], duration: 500, easing: util.ease }, t), !1 === t.animate && (t.duration = 0), t.smoothEasing && 0 !== t.duration && (t.easing = this._smoothOutEasing(t.duration));
                        var o = this.transform,
                            n = this.getZoom(),
                            r = this.getBearing(),
                            a = this.getPitch(),
                            s = "zoom" in t ? +t.zoom : n,
                            h = "bearing" in t ? this._normalizeBearing(t.bearing, r) : r,
                            p = "pitch" in t ? +t.pitch : a,
                            u = o.centerPoint.add(Point.convert(t.offset)),
                            c = o.pointLocation(u),
                            m = LngLat.convert(t.center || c);
                        this._normalizeCenter(m);
                        var f, g, d = o.project(c),
                            l = o.project(m).sub(d),
                            v = o.zoomScale(s - n);
                        return t.around && (f = LngLat.convert(t.around), g = o.locationPoint(f)), this.zooming = s !== n, this.rotating = r !== h, this.pitching = p !== a, this._prepareEase(i, t.noMoveStart), clearTimeout(this._onEaseEnd), this._ease(function(t) {
                            if (this.zooming && (o.zoom = interpolate(n, s, t)), this.rotating && (o.bearing = interpolate(r, h, t)), this.pitching && (o.pitch = interpolate(a, p, t)), f) o.setLocationAtPoint(f, g);
                            else {
                                var e = o.zoomScale(o.zoom - n),
                                    c = s > n ? Math.min(2, v) : Math.max(.5, v),
                                    m = Math.pow(c, 1 - t),
                                    b = o.unproject(d.add(l.mult(t * m)).mult(e));
                                o.setLocationAtPoint(o.renderWorldCopies ? b.wrap() : b, u)
                            }
                            this._fireMoveEvents(i)
                        }, function() { t.delayEndEvents ? e._onEaseEnd = setTimeout(function() { return e._easeToEnd(i) }, t.delayEndEvents) : e._easeToEnd(i) }, t), this
                    }, i.prototype._prepareEase = function(t, i) { this.moving = !0, i || this.fire("movestart", t), this.zooming && this.fire("zoomstart", t), this.pitching && this.fire("pitchstart", t) }, i.prototype._fireMoveEvents = function(t) { this.fire("move", t), this.zooming && this.fire("zoom", t), this.rotating && this.fire("rotate", t), this.pitching && this.fire("pitch", t) }, i.prototype._easeToEnd = function(t) {
                        var i = this.zooming,
                            e = this.pitching;
                        this.moving = !1, this.zooming = !1, this.rotating = !1, this.pitching = !1, i && this.fire("zoomend", t), e && this.fire("pitchend", t), this.fire("moveend", t)
                    }, i.prototype.flyTo = function(t, i) {
                        function e(t) { var i = (M * M - z * z + (t ? -1 : 1) * L * L * E * E) / (2 * (t ? M : z) * L * E); return Math.log(Math.sqrt(i * i + 1) - i) }

                        function o(t) { return (Math.exp(t) - Math.exp(-t)) / 2 }

                        function n(t) { return (Math.exp(t) + Math.exp(-t)) / 2 }

                        function r(t) { return o(t) / n(t) }
                        var a = this;
                        this.stop(), t = util.extend({ offset: [0, 0], speed: 1.2, curve: 1.42, easing: util.ease }, t);
                        var s = this.transform,
                            h = this.getZoom(),
                            p = this.getBearing(),
                            u = this.getPitch(),
                            c = "zoom" in t ? util.clamp(+t.zoom, s.minZoom, s.maxZoom) : h,
                            m = "bearing" in t ? this._normalizeBearing(t.bearing, p) : p,
                            f = "pitch" in t ? +t.pitch : u,
                            g = s.zoomScale(c - h),
                            d = s.centerPoint.add(Point.convert(t.offset)),
                            l = s.pointLocation(d),
                            v = LngLat.convert(t.center || l);
                        this._normalizeCenter(v);
                        var b = s.project(l),
                            y = s.project(v).sub(b),
                            _ = t.curve,
                            z = Math.max(s.width, s.height),
                            M = z / g,
                            E = y.mag();
                        if ("minZoom" in t) {
                            var T = util.clamp(Math.min(t.minZoom, h, c), s.minZoom, s.maxZoom),
                                x = z / s.zoomScale(T - h);
                            _ = Math.sqrt(x / E * 2)
                        }
                        var L = _ * _,
                            j = e(0),
                            Z = function(t) { return n(j) / n(j + _ * t) },
                            w = function(t) { return z * ((n(j) * r(j + _ * t) - o(j)) / L) / E },
                            P = (e(1) - j) / _;
                        if (Math.abs(E) < 1e-6 || !isFinite(P)) {
                            if (Math.abs(z - M) < 1e-6) return this.easeTo(t, i);
                            var q = M < z ? -1 : 1;
                            P = Math.abs(Math.log(M / z)) / _, w = function() { return 0 }, Z = function(t) { return Math.exp(q * _ * t) }
                        }
                        if ("duration" in t) t.duration = +t.duration;
                        else {
                            var B = "screenSpeed" in t ? +t.screenSpeed / _ : +t.speed;
                            t.duration = 1e3 * P / B
                        }
                        return t.maxDuration && t.duration > t.maxDuration && (t.duration = 0), this.zooming = !0, this.rotating = p !== m, this.pitching = f !== u, this._prepareEase(i, !1), this._ease(function(t) {
                            var e = t * P,
                                o = 1 / Z(e);
                            s.zoom = h + s.scaleZoom(o), this.rotating && (s.bearing = interpolate(p, m, t)), this.pitching && (s.pitch = interpolate(u, f, t));
                            var n = s.unproject(b.add(y.mult(w(e))).mult(o));
                            s.setLocationAtPoint(s.renderWorldCopies ? n.wrap() : n, d), this._fireMoveEvents(i)
                        }, function() { return a._easeToEnd(i) }, t), this
                    }, i.prototype.isEasing = function() { return !!this._abortFn }, i.prototype.isMoving = function() { return this.moving }, i.prototype.stop = function() { return this._abortFn && (this._abortFn(), this._finishEase()), this }, i.prototype._ease = function(t, i, e) { this._finishFn = i, this._abortFn = browser.timed(function(i) { t.call(this, e.easing(i)), 1 === i && this._finishEase() }, !1 === e.animate ? 0 : e.duration, this) }, i.prototype._finishEase = function() {
                        delete this._abortFn;
                        var t = this._finishFn;
                        delete this._finishFn, t.call(this)
                    }, i.prototype._normalizeBearing = function(t, i) { t = util.wrap(t, -180, 180); var e = Math.abs(t - i); return Math.abs(t - 360 - i) < e && (t -= 360), Math.abs(t + 360 - i) < e && (t += 360), t }, i.prototype._normalizeCenter = function(t) {
                        var i = this.transform;
                        if (i.renderWorldCopies && !i.lngRange) {
                            var e = t.lng - i.center.lng;
                            t.lng += e > 180 ? -360 : e < -180 ? 360 : 0
                        }
                    }, i.prototype._smoothOutEasing = function(t) {
                        var i = util.ease;
                        if (this._prevEase) {
                            var e = this._prevEase,
                                o = (Date.now() - e.start) / e.duration,
                                n = e.easing(o + .01) - e.easing(o),
                                r = .27 / Math.sqrt(n * n + 1e-4) * .01,
                                a = Math.sqrt(.0729 - r * r);
                            i = util.bezier(r, a, .25, 1)
                        }
                        return this._prevEase = { start: (new Date).getTime(), duration: t, easing: i }, i
                    }, i
                }(Evented);
            module.exports = Camera;
        }, { "../geo/lng_lat": 68, "../geo/lng_lat_bounds": 69, "../style-spec/util/interpolate": 155, "../util/browser": 240, "../util/evented": 248, "../util/util": 260, "@mapbox/point-geometry": 2 }],
        220: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                config = _dereq_("../../util/config"),
                AttributionControl = function(t) { this.options = t, util.bindAll(["_updateEditLink", "_updateData", "_updateCompact"], this) };
            AttributionControl.prototype.getDefaultPosition = function() { return "bottom-right" }, AttributionControl.prototype.onAdd = function(t) { var i = this.options && this.options.compact; return this._map = t, this._container = DOM.create("div", "mapboxgl-ctrl mapboxgl-ctrl-attrib"), i && this._container.classList.add("mapboxgl-compact"), this._updateAttributions(), this._updateEditLink(), this._map.on("sourcedata", this._updateData), this._map.on("moveend", this._updateEditLink), void 0 === i && (this._map.on("resize", this._updateCompact), this._updateCompact()), this._container }, AttributionControl.prototype.onRemove = function() { DOM.remove(this._container), this._map.off("sourcedata", this._updateData), this._map.off("moveend", this._updateEditLink), this._map.off("resize", this._updateCompact), this._map = void 0 }, AttributionControl.prototype._updateEditLink = function() {
                var t = this._editLink;
                t || (t = this._editLink = this._container.querySelector(".mapbox-improve-map"));
                var i = [{ key: "owner", value: this.styleOwner }, { key: "id", value: this.styleId }, { key: "access_token", value: config.ACCESS_TOKEN }];
                if (t) {
                    var o = i.reduce(function(t, o, e) { return o.value && (t += o.key + "=" + o.value + (e < i.length - 1 ? "&" : "")), t }, "?");
                    t.href = "https://www.mapbox.com/feedback/" + o + (this._map._hash ? this._map._hash.getHashString(!0) : "")
                }
            }, AttributionControl.prototype._updateData = function(t) { t && "metadata" === t.sourceDataType && (this._updateAttributions(), this._updateEditLink()) }, AttributionControl.prototype._updateAttributions = function() {
                if (this._map.style) {
                    var t = [];
                    if (this._map.style.stylesheet) {
                        var i = this._map.style.stylesheet;
                        this.styleOwner = i.owner, this.styleId = i.id
                    }
                    var o = this._map.style.sourceCaches;
                    for (var e in o) {
                        var n = o[e].getSource();
                        n.attribution && t.indexOf(n.attribution) < 0 && t.push(n.attribution)
                    }
                    t.sort(function(t, i) { return t.length - i.length }), t = t.filter(function(i, o) {
                        for (var e = o + 1; e < t.length; e++)
                            if (t[e].indexOf(i) >= 0) return !1;
                        return !0
                    }), this._container.innerHTML = t.join(" | "), this._editLink = null
                }
            }, AttributionControl.prototype._updateCompact = function() { this._map.getCanvasContainer().offsetWidth <= 640 ? this._container.classList.add("mapboxgl-compact") : this._container.classList.remove("mapboxgl-compact") }, module.exports = AttributionControl;
        }, { "../../util/config": 244, "../../util/dom": 247, "../../util/util": 260 }],
        221: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"),
                FullscreenControl = function() { this._fullscreen = !1, util.bindAll(["_onClickFullscreen", "_changeIcon"], this), "onfullscreenchange" in window.document ? this._fullscreenchange = "fullscreenchange" : "onmozfullscreenchange" in window.document ? this._fullscreenchange = "mozfullscreenchange" : "onwebkitfullscreenchange" in window.document ? this._fullscreenchange = "webkitfullscreenchange" : "onmsfullscreenchange" in window.document && (this._fullscreenchange = "MSFullscreenChange"), this._className = "mapboxgl-ctrl" };
            FullscreenControl.prototype.onAdd = function(e) { return this._map = e, this._mapContainer = this._map.getContainer(), this._container = DOM.create("div", this._className + " mapboxgl-ctrl-group"), this._checkFullscreenSupport() ? this._setupUI() : (this._container.style.display = "none", util.warnOnce("This device does not support fullscreen mode.")), this._container }, FullscreenControl.prototype.onRemove = function() { DOM.remove(this._container), this._map = null, window.document.removeEventListener(this._fullscreenchange, this._changeIcon) }, FullscreenControl.prototype._checkFullscreenSupport = function() { return !!(window.document.fullscreenEnabled || window.document.mozFullScreenEnabled || window.document.msFullscreenEnabled || window.document.webkitFullscreenEnabled) }, FullscreenControl.prototype._setupUI = function() {
                var e = this._fullscreenButton = DOM.create("button", this._className + "-icon " + this._className + "-fullscreen", this._container);
                e.setAttribute("aria-label", "Toggle fullscreen"), e.type = "button", this._fullscreenButton.addEventListener("click", this._onClickFullscreen), window.document.addEventListener(this._fullscreenchange, this._changeIcon)
            }, FullscreenControl.prototype._isFullscreen = function() { return this._fullscreen }, FullscreenControl.prototype._changeIcon = function() {
                (window.document.fullscreenElement || window.document.mozFullScreenElement || window.document.webkitFullscreenElement || window.document.msFullscreenElement) === this._mapContainer !== this._fullscreen && (this._fullscreen = !this._fullscreen, this._fullscreenButton.classList.toggle(this._className + "-shrink"), this._fullscreenButton.classList.toggle(this._className + "-fullscreen"))
            }, FullscreenControl.prototype._onClickFullscreen = function() { this._isFullscreen() ? window.document.exitFullscreen ? window.document.exitFullscreen() : window.document.mozCancelFullScreen ? window.document.mozCancelFullScreen() : window.document.msExitFullscreen ? window.document.msExitFullscreen() : window.document.webkitCancelFullScreen && window.document.webkitCancelFullScreen() : this._mapContainer.requestFullscreen ? this._mapContainer.requestFullscreen() : this._mapContainer.mozRequestFullScreen ? this._mapContainer.mozRequestFullScreen() : this._mapContainer.msRequestFullscreen ? this._mapContainer.msRequestFullscreen() : this._mapContainer.webkitRequestFullscreen && this._mapContainer.webkitRequestFullscreen() }, module.exports = FullscreenControl;
        }, { "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        222: [function(_dereq_, module, exports) {
            "use strict";

            function checkGeolocationSupport(t) { void 0 !== supportsGeolocation ? t(supportsGeolocation) : void 0 !== window.navigator.permissions ? window.navigator.permissions.query({ name: "geolocation" }).then(function(o) { supportsGeolocation = "denied" !== o.state, t(supportsGeolocation) }) : (supportsGeolocation = !!window.navigator.geolocation, t(supportsGeolocation)) }
            var Evented = _dereq_("../../util/evented"),
                DOM = _dereq_("../../util/dom"),
                window = _dereq_("../../util/window"),
                util = _dereq_("../../util/util"),
                LngLat = _dereq_("../../geo/lng_lat"),
                Marker = _dereq_("../marker"),
                defaultOptions = { positionOptions: { enableHighAccuracy: !1, timeout: 6e3 }, fitBoundsOptions: { maxZoom: 15 }, trackUserLocation: !1, showUserLocation: !0 },
                className = "mapboxgl-ctrl",
                supportsGeolocation, GeolocateControl = function(t) {
                    function o(o) { t.call(this), this.options = util.extend({}, defaultOptions, o), util.bindAll(["_onSuccess", "_onError", "_finish", "_setupUI", "_updateCamera", "_updateMarker", "_onClickGeolocate"], this) }
                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.onAdd = function(t) { return this._map = t, this._container = DOM.create("div", className + " " + className + "-group"), checkGeolocationSupport(this._setupUI), this._container }, o.prototype.onRemove = function() { void 0 !== this._geolocationWatchID && (window.navigator.geolocation.clearWatch(this._geolocationWatchID), this._geolocationWatchID = void 0), this.options.showUserLocation && this._userLocationDotMarker.remove(), DOM.remove(this._container), this._map = void 0 }, o.prototype._onSuccess = function(t) {
                        if (this.options.trackUserLocation) switch (this._lastKnownPosition = t, this._watchState) {
                            case "WAITING_ACTIVE":
                            case "ACTIVE_LOCK":
                            case "ACTIVE_ERROR":
                                this._watchState = "ACTIVE_LOCK", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");
                                break;
                            case "BACKGROUND":
                            case "BACKGROUND_ERROR":
                                this._watchState = "BACKGROUND", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background")
                        }
                        this.options.showUserLocation && "OFF" !== this._watchState && this._updateMarker(t), this.options.trackUserLocation && "ACTIVE_LOCK" !== this._watchState || this._updateCamera(t), this.options.showUserLocation && this._dotElement.classList.remove("mapboxgl-user-location-dot-stale"), this.fire("geolocate", t), this._finish()
                    }, o.prototype._updateCamera = function(t) {
                        var o = new LngLat(t.coords.longitude, t.coords.latitude),
                            e = t.coords.accuracy;
                        this._map.fitBounds(o.toBounds(e), this.options.fitBoundsOptions, { geolocateSource: !0 })
                    }, o.prototype._updateMarker = function(t) { t ? this._userLocationDotMarker.setLngLat([t.coords.longitude, t.coords.latitude]).addTo(this._map) : this._userLocationDotMarker.remove() }, o.prototype._onError = function(t) {
                        if (this.options.trackUserLocation)
                            if (1 === t.code) this._watchState = "OFF", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"), void 0 !== this._geolocationWatchID && this._clearWatch();
                            else switch (this._watchState) {
                                case "WAITING_ACTIVE":
                                    this._watchState = "ACTIVE_ERROR", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");
                                    break;
                                case "ACTIVE_LOCK":
                                    this._watchState = "ACTIVE_ERROR", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting");
                                    break;
                                case "BACKGROUND":
                                    this._watchState = "BACKGROUND_ERROR", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting")
                            }
                            "OFF" !== this._watchState && this.options.showUserLocation && this._dotElement.classList.add("mapboxgl-user-location-dot-stale"), this.fire("error", t), this._finish()
                    }, o.prototype._finish = function() { this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = void 0 }, o.prototype._setupUI = function(t) { var o = this;!1 !== t && (this._container.addEventListener("contextmenu", function(t) { return t.preventDefault() }), this._geolocateButton = DOM.create("button", className + "-icon " + className + "-geolocate", this._container), this._geolocateButton.type = "button", this._geolocateButton.setAttribute("aria-label", "Geolocate"), this.options.trackUserLocation && (this._geolocateButton.setAttribute("aria-pressed", "false"), this._watchState = "OFF"), this.options.showUserLocation && (this._dotElement = DOM.create("div", "mapboxgl-user-location-dot"), this._userLocationDotMarker = new Marker(this._dotElement), this.options.trackUserLocation && (this._watchState = "OFF")), this._geolocateButton.addEventListener("click", this._onClickGeolocate.bind(this)), this.options.trackUserLocation && this._map.on("movestart", function(t) { t.geolocateSource || "ACTIVE_LOCK" !== o._watchState || (o._watchState = "BACKGROUND", o._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background"), o._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"), o.fire("trackuserlocationend")) })) }, o.prototype._onClickGeolocate = function() {
                        if (this.options.trackUserLocation) {
                            switch (this._watchState) {
                                case "OFF":
                                    this._watchState = "WAITING_ACTIVE", this.fire("trackuserlocationstart");
                                    break;
                                case "WAITING_ACTIVE":
                                case "ACTIVE_LOCK":
                                case "ACTIVE_ERROR":
                                case "BACKGROUND_ERROR":
                                    this._watchState = "OFF", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-active-error"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"), this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background-error"), this.fire("trackuserlocationend");
                                    break;
                                case "BACKGROUND":
                                    this._watchState = "ACTIVE_LOCK", this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-background"), this._lastKnownPosition && this._updateCamera(this._lastKnownPosition), this.fire("trackuserlocationstart")
                            }
                            switch (this._watchState) {
                                case "WAITING_ACTIVE":
                                    this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");
                                    break;
                                case "ACTIVE_LOCK":
                                    this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active");
                                    break;
                                case "ACTIVE_ERROR":
                                    this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-active-error");
                                    break;
                                case "BACKGROUND":
                                    this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background");
                                    break;
                                case "BACKGROUND_ERROR":
                                    this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-background-error")
                            }
                            "OFF" === this._watchState && void 0 !== this._geolocationWatchID ? this._clearWatch() : void 0 === this._geolocationWatchID && (this._geolocateButton.classList.add("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.setAttribute("aria-pressed", "true"), this._geolocationWatchID = window.navigator.geolocation.watchPosition(this._onSuccess, this._onError, this.options.positionOptions))
                        } else window.navigator.geolocation.getCurrentPosition(this._onSuccess, this._onError, this.options.positionOptions), this._timeoutId = setTimeout(this._finish, 1e4)
                    }, o.prototype._clearWatch = function() { window.navigator.geolocation.clearWatch(this._geolocationWatchID), this._geolocationWatchID = void 0, this._geolocateButton.classList.remove("mapboxgl-ctrl-geolocate-waiting"), this._geolocateButton.setAttribute("aria-pressed", "false"), this.options.showUserLocation && this._updateMarker(null) }, o
                }(Evented);
            module.exports = GeolocateControl;
        }, { "../../geo/lng_lat": 68, "../../util/dom": 247, "../../util/evented": 248, "../../util/util": 260, "../../util/window": 242, "../marker": 236 }],
        223: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                LogoControl = function() { util.bindAll(["_updateLogo"], this) };
            LogoControl.prototype.onAdd = function(o) { this._map = o, this._container = DOM.create("div", "mapboxgl-ctrl"); var t = DOM.create("a", "mapboxgl-ctrl-logo"); return t.target = "_blank", t.href = "https://www.mapbox.com/", t.setAttribute("aria-label", "Mapbox logo"), this._container.appendChild(t), this._container.style.display = "none", this._map.on("sourcedata", this._updateLogo), this._updateLogo(), this._container }, LogoControl.prototype.onRemove = function() { DOM.remove(this._container), this._map.off("sourcedata", this._updateLogo) }, LogoControl.prototype.getDefaultPosition = function() { return "bottom-left" }, LogoControl.prototype._updateLogo = function(o) { o && "metadata" !== o.sourceDataType || (this._container.style.display = this._logoRequired() ? "block" : "none") }, LogoControl.prototype._logoRequired = function() { if (this._map.style) { var o = this._map.style.sourceCaches; for (var t in o) { if (o[t].getSource().mapbox_logo) return !0 } return !1 } }, module.exports = LogoControl;
        }, { "../../util/dom": 247, "../../util/util": 260 }],
        224: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                DragRotateHandler = _dereq_("../handler/drag_rotate"),
                NavigationControl = function() {
                    var t = this;
                    util.bindAll(["_rotateCompassArrow"], this), this._container = DOM.create("div", "mapboxgl-ctrl mapboxgl-ctrl-group"), this._container.addEventListener("contextmenu", function(t) { return t.preventDefault() }), this._zoomInButton = this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in", "Zoom In", function() { return t._map.zoomIn() }), this._zoomOutButton = this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out", "Zoom Out", function() { return t._map.zoomOut() }), this._compass = this._createButton("mapboxgl-ctrl-icon mapboxgl-ctrl-compass", "Reset North", function() { return t._map.resetNorth() }), this._compassArrow = DOM.create("span", "mapboxgl-ctrl-compass-arrow", this._compass)
                };
            NavigationControl.prototype._rotateCompassArrow = function() {
                var t = "rotate(" + this._map.transform.angle * (180 / Math.PI) + "deg)";
                this._compassArrow.style.transform = t
            }, NavigationControl.prototype.onAdd = function(t) { return this._map = t, this._map.on("rotate", this._rotateCompassArrow), this._rotateCompassArrow(), this._handler = new DragRotateHandler(t, { button: "left", element: this._compass, pitchWithRotate: !1 }), this._handler.enable(), this._container }, NavigationControl.prototype.onRemove = function() { DOM.remove(this._container), this._map.off("rotate", this._rotateCompassArrow), delete this._map, this._handler.disable(), delete this._handler }, NavigationControl.prototype._createButton = function(t, o, r) { var e = DOM.create("button", t, this._container); return e.type = "button", e.setAttribute("aria-label", o), e.addEventListener("click", r), e }, module.exports = NavigationControl;
        }, { "../../util/dom": 247, "../../util/util": 260, "../handler/drag_rotate": 230 }],
        225: [function(_dereq_, module, exports) {
            "use strict";

            function updateScale(t, e, o) {
                var n = o && o.maxWidth || 100,
                    i = t._container.clientHeight / 2,
                    a = getDistance(t.unproject([0, i]), t.unproject([n, i]));
                if (o && "imperial" === o.unit) { var l = 3.2808 * a; if (l > 5280) { setScale(e, n, l / 5280, "mi") } else setScale(e, n, l, "ft") } else if (o && "nautical" === o.unit) {
                    var r = a / 1852;
                    setScale(e, n, r, "nm")
                } else setScale(e, n, a, "m")
            }

            function setScale(t, e, o, n) {
                var i = getRoundNum(o),
                    a = i / o;
                "m" === n && i >= 1e3 && (i /= 1e3, n = "km"), t.style.width = e * a + "px", t.innerHTML = i + n
            }

            function getDistance(t, e) {
                var o = Math.PI / 180,
                    n = t.lat * o,
                    i = e.lat * o,
                    a = Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos((e.lng - t.lng) * o);
                return 6371e3 * Math.acos(Math.min(a, 1))
            }

            function getRoundNum(t) {
                var e = Math.pow(10, ("" + Math.floor(t)).length - 1),
                    o = t / e;
                return o = o >= 10 ? 10 : o >= 5 ? 5 : o >= 3 ? 3 : o >= 2 ? 2 : 1, e * o
            }
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                ScaleControl = function(t) { this.options = t, util.bindAll(["_onMove"], this) };
            ScaleControl.prototype.getDefaultPosition = function() { return "bottom-left" }, ScaleControl.prototype._onMove = function() { updateScale(this._map, this._container, this.options) }, ScaleControl.prototype.onAdd = function(t) { return this._map = t, this._container = DOM.create("div", "mapboxgl-ctrl mapboxgl-ctrl-scale", t.getContainer()), this._map.on("move", this._onMove), this._onMove(), this._container }, ScaleControl.prototype.onRemove = function() { DOM.remove(this._container), this._map.off("move", this._onMove), this._map = void 0 }, module.exports = ScaleControl;
        }, { "../../util/dom": 247, "../../util/util": 260 }],
        226: [function(_dereq_, module, exports) {
            "use strict";
        }, {}],
        227: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                LngLatBounds = _dereq_("../../geo/lng_lat_bounds"),
                util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"),
                BoxZoomHandler = function(o) { this._map = o, this._el = o.getCanvasContainer(), this._container = o.getContainer(), util.bindAll(["_onMouseDown", "_onMouseMove", "_onMouseUp", "_onKeyDown"], this) };
            BoxZoomHandler.prototype.isEnabled = function() { return !!this._enabled }, BoxZoomHandler.prototype.isActive = function() { return !!this._active }, BoxZoomHandler.prototype.enable = function() { this.isEnabled() || (this._map.dragPan && this._map.dragPan.disable(), this._el.addEventListener("mousedown", this._onMouseDown, !1), this._map.dragPan && this._map.dragPan.enable(), this._enabled = !0) }, BoxZoomHandler.prototype.disable = function() { this.isEnabled() && (this._el.removeEventListener("mousedown", this._onMouseDown), this._enabled = !1) }, BoxZoomHandler.prototype._onMouseDown = function(o) { o.shiftKey && 0 === o.button && (window.document.addEventListener("mousemove", this._onMouseMove, !1), window.document.addEventListener("keydown", this._onKeyDown, !1), window.document.addEventListener("mouseup", this._onMouseUp, !1), DOM.disableDrag(), this._startPos = DOM.mousePos(this._el, o), this._active = !0) }, BoxZoomHandler.prototype._onMouseMove = function(o) {
                var e = this._startPos,
                    t = DOM.mousePos(this._el, o);
                this._box || (this._box = DOM.create("div", "mapboxgl-boxzoom", this._container), this._container.classList.add("mapboxgl-crosshair"), this._fireEvent("boxzoomstart", o));
                var n = Math.min(e.x, t.x),
                    i = Math.max(e.x, t.x),
                    s = Math.min(e.y, t.y),
                    a = Math.max(e.y, t.y);
                DOM.setTransform(this._box, "translate(" + n + "px," + s + "px)"), this._box.style.width = i - n + "px", this._box.style.height = a - s + "px"
            }, BoxZoomHandler.prototype._onMouseUp = function(o) {
                if (0 === o.button) {
                    var e = this._startPos,
                        t = DOM.mousePos(this._el, o),
                        n = (new LngLatBounds).extend(this._map.unproject(e)).extend(this._map.unproject(t));
                    this._finish(), e.x === t.x && e.y === t.y ? this._fireEvent("boxzoomcancel", o) : this._map.fitBounds(n, { linear: !0 }).fire("boxzoomend", { originalEvent: o, boxZoomBounds: n })
                }
            }, BoxZoomHandler.prototype._onKeyDown = function(o) { 27 === o.keyCode && (this._finish(), this._fireEvent("boxzoomcancel", o)) }, BoxZoomHandler.prototype._finish = function() { this._active = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !1), window.document.removeEventListener("keydown", this._onKeyDown, !1), window.document.removeEventListener("mouseup", this._onMouseUp, !1), this._container.classList.remove("mapboxgl-crosshair"), this._box && (DOM.remove(this._box), this._box = null), DOM.enableDrag() }, BoxZoomHandler.prototype._fireEvent = function(o, e) { return this._map.fire(o, { originalEvent: e }) }, module.exports = BoxZoomHandler;
        }, { "../../geo/lng_lat_bounds": 69, "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        228: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../../util/util"),
                DoubleClickZoomHandler = function(o) { this._map = o, util.bindAll(["_onDblClick", "_onZoomEnd"], this) };
            DoubleClickZoomHandler.prototype.isEnabled = function() { return !!this._enabled }, DoubleClickZoomHandler.prototype.isActive = function() { return !!this._active }, DoubleClickZoomHandler.prototype.enable = function() { this.isEnabled() || (this._map.on("dblclick", this._onDblClick), this._enabled = !0) }, DoubleClickZoomHandler.prototype.disable = function() { this.isEnabled() && (this._map.off("dblclick", this._onDblClick), this._enabled = !1) }, DoubleClickZoomHandler.prototype._onDblClick = function(o) { this._active = !0, this._map.on("zoomend", this._onZoomEnd), this._map.zoomTo(this._map.getZoom() + (o.originalEvent.shiftKey ? -1 : 1), { around: o.lngLat }, o) }, DoubleClickZoomHandler.prototype._onZoomEnd = function() { this._active = !1, this._map.off("zoomend", this._onZoomEnd) }, module.exports = DoubleClickZoomHandler;
        }, { "../../util/util": 260 }],
        229: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"),
                inertiaLinearity = .3,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1),
                inertiaMaxSpeed = 1400,
                inertiaDeceleration = 2500,
                DragPanHandler = function(t) { this._map = t, this._el = t.getCanvasContainer(), util.bindAll(["_onDown", "_onMove", "_onUp", "_onTouchEnd", "_onMouseUp"], this) };
            DragPanHandler.prototype.isEnabled = function() { return !!this._enabled }, DragPanHandler.prototype.isActive = function() { return !!this._active }, DragPanHandler.prototype.enable = function() { this.isEnabled() || (this._el.classList.add("mapboxgl-touch-drag-pan"), this._el.addEventListener("mousedown", this._onDown), this._el.addEventListener("touchstart", this._onDown), this._enabled = !0) }, DragPanHandler.prototype.disable = function() { this.isEnabled() && (this._el.classList.remove("mapboxgl-touch-drag-pan"), this._el.removeEventListener("mousedown", this._onDown), this._el.removeEventListener("touchstart", this._onDown), this._enabled = !1) }, DragPanHandler.prototype._onDown = function(t) {
                this._ignoreEvent(t) || this.isActive() || (t.touches ? (window.document.addEventListener("touchmove", this._onMove), window.document.addEventListener("touchend", this._onTouchEnd)) : (window.document.addEventListener("mousemove", this._onMove), window.document.addEventListener("mouseup", this._onMouseUp)), window.addEventListener("blur", this._onMouseUp), this._active = !1, this._startPos = this._pos = DOM.mousePos(this._el, t), this._inertia = [
                    [Date.now(), this._pos]
                ])
            }, DragPanHandler.prototype._onMove = function(t) {
                if (!this._ignoreEvent(t)) {
                    this.isActive() || (this._active = !0, this._map.moving = !0, this._fireEvent("dragstart", t), this._fireEvent("movestart", t));
                    var e = DOM.mousePos(this._el, t),
                        n = this._map;
                    n.stop(), this._drainInertiaBuffer(), this._inertia.push([Date.now(), e]), n.transform.setLocationAtPoint(n.transform.pointLocation(this._pos), e), this._fireEvent("drag", t), this._fireEvent("move", t), this._pos = e, t.preventDefault()
                }
            }, DragPanHandler.prototype._onUp = function(t) {
                var e = this;
                if (this.isActive()) {
                    this._active = !1, this._fireEvent("dragend", t), this._drainInertiaBuffer();
                    var n = function() { e._map.moving = !1, e._fireEvent("moveend", t) },
                        i = this._inertia;
                    if (i.length < 2) return void n();
                    var o = i[i.length - 1],
                        r = i[0],
                        a = o[1].sub(r[1]),
                        s = (o[0] - r[0]) / 1e3;
                    if (0 === s || o[1].equals(r[1])) return void n();
                    var u = a.mult(inertiaLinearity / s),
                        d = u.mag();
                    d > inertiaMaxSpeed && (d = inertiaMaxSpeed, u._unit()._mult(d));
                    var h = d / (inertiaDeceleration * inertiaLinearity),
                        v = u.mult(-h / 2);
                    this._map.panBy(v, { duration: 1e3 * h, easing: inertiaEasing, noMoveStart: !0 }, { originalEvent: t })
                }
            }, DragPanHandler.prototype._onMouseUp = function(t) { this._ignoreEvent(t) || (this._onUp(t), window.document.removeEventListener("mousemove", this._onMove), window.document.removeEventListener("mouseup", this._onMouseUp), window.removeEventListener("blur", this._onMouseUp)) }, DragPanHandler.prototype._onTouchEnd = function(t) { this._ignoreEvent(t) || (this._onUp(t), window.document.removeEventListener("touchmove", this._onMove), window.document.removeEventListener("touchend", this._onTouchEnd)) }, DragPanHandler.prototype._fireEvent = function(t, e) { return this._map.fire(t, { originalEvent: e }) }, DragPanHandler.prototype._ignoreEvent = function(t) { var e = this._map; return !(!e.boxZoom || !e.boxZoom.isActive()) || (!(!e.dragRotate || !e.dragRotate.isActive()) || (t.touches ? t.touches.length > 1 : !!t.ctrlKey || "mousemove" !== t.type && t.button && 0 !== t.button)) }, DragPanHandler.prototype._drainInertiaBuffer = function() { for (var t = this._inertia, e = Date.now(); t.length > 0 && e - t[0][0] > 160;) t.shift() }, module.exports = DragPanHandler;
        }, { "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        230: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"),
                inertiaLinearity = .25,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1),
                inertiaMaxSpeed = 180,
                inertiaDeceleration = 720,
                DragRotateHandler = function(t, e) { this._map = t, this._el = e.element || t.getCanvasContainer(), this._button = e.button || "right", this._bearingSnap = e.bearingSnap || 0, this._pitchWithRotate = !1 !== e.pitchWithRotate, util.bindAll(["_onDown", "_onMove", "_onUp"], this) };
            DragRotateHandler.prototype.isEnabled = function() { return !!this._enabled }, DragRotateHandler.prototype.isActive = function() { return !!this._active }, DragRotateHandler.prototype.enable = function() { this.isEnabled() || (this._el.addEventListener("mousedown", this._onDown), this._enabled = !0) }, DragRotateHandler.prototype.disable = function() { this.isEnabled() && (this._el.removeEventListener("mousedown", this._onDown), this._enabled = !1) }, DragRotateHandler.prototype._onDown = function(t) {
                if (!(this._map.boxZoom && this._map.boxZoom.isActive() || this._map.dragPan && this._map.dragPan.isActive() || this.isActive())) {
                    if ("right" === this._button) {
                        var e = t.ctrlKey ? 0 : 2,
                            i = t.button;
                        if (void 0 !== window.InstallTrigger && 2 === t.button && t.ctrlKey && window.navigator.platform.toUpperCase().indexOf("MAC") >= 0 && (i = 0), i !== e) return
                    } else if (t.ctrlKey || 0 !== t.button) return;
                    DOM.disableDrag(), window.document.addEventListener("mousemove", this._onMove, { capture: !0 }), window.document.addEventListener("mouseup", this._onUp), window.addEventListener("blur", this._onUp), this._active = !1, this._inertia = [
                        [Date.now(), this._map.getBearing()]
                    ], this._startPos = this._pos = DOM.mousePos(this._el, t), this._center = this._map.transform.centerPoint, t.preventDefault()
                }
            }, DragRotateHandler.prototype._onMove = function(t) {
                this.isActive() || (this._active = !0, this._map.moving = !0, this._fireEvent("rotatestart", t), this._fireEvent("movestart", t), this._pitchWithRotate && this._fireEvent("pitchstart", t));
                var e = this._map;
                e.stop();
                var i = this._pos,
                    n = DOM.mousePos(this._el, t),
                    r = .8 * (i.x - n.x),
                    a = -.5 * (i.y - n.y),
                    o = e.getBearing() - r,
                    s = e.getPitch() - a,
                    h = this._inertia,
                    _ = h[h.length - 1];
                this._drainInertiaBuffer(), h.push([Date.now(), e._normalizeBearing(o, _[1])]), e.transform.bearing = o, this._pitchWithRotate && (this._fireEvent("pitch", t), e.transform.pitch = s), this._fireEvent("rotate", t), this._fireEvent("move", t), this._pos = n
            }, DragRotateHandler.prototype._onUp = function(t) {
                var e = this;
                if (window.document.removeEventListener("mousemove", this._onMove, { capture: !0 }), window.document.removeEventListener("mouseup", this._onUp), window.removeEventListener("blur", this._onUp), DOM.enableDrag(), this.isActive()) {
                    this._active = !1, this._fireEvent("rotateend", t), this._drainInertiaBuffer();
                    var i = this._map,
                        n = i.getBearing(),
                        r = this._inertia,
                        a = function() { Math.abs(n) < e._bearingSnap ? i.resetNorth({ noMoveStart: !0 }, { originalEvent: t }) : (e._map.moving = !1, e._fireEvent("moveend", t)), e._pitchWithRotate && e._fireEvent("pitchend", t) };
                    if (r.length < 2) return void a();
                    var o = r[0],
                        s = r[r.length - 1],
                        h = r[r.length - 2],
                        _ = i._normalizeBearing(n, h[1]),
                        p = s[1] - o[1],
                        v = p < 0 ? -1 : 1,
                        d = (s[0] - o[0]) / 1e3;
                    if (0 === p || 0 === d) return void a();
                    var l = Math.abs(p * (inertiaLinearity / d));
                    l > inertiaMaxSpeed && (l = inertiaMaxSpeed);
                    var u = l / (inertiaDeceleration * inertiaLinearity);
                    _ += v * l * (u / 2), Math.abs(i._normalizeBearing(_, 0)) < this._bearingSnap && (_ = i._normalizeBearing(0, _)), i.rotateTo(_, { duration: 1e3 * u, easing: inertiaEasing, noMoveStart: !0 }, { originalEvent: t })
                }
            }, DragRotateHandler.prototype._fireEvent = function(t, e) { return this._map.fire(t, { originalEvent: e }) }, DragRotateHandler.prototype._drainInertiaBuffer = function() { for (var t = this._inertia, e = Date.now(); t.length > 0 && e - t[0][0] > 160;) t.shift() }, module.exports = DragRotateHandler;
        }, { "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        231: [function(_dereq_, module, exports) {
            "use strict";

            function easeOut(e) { return e * (2 - e) }
            var util = _dereq_("../../util/util"),
                panStep = 100,
                bearingStep = 15,
                pitchStep = 10,
                KeyboardHandler = function(e) { this._map = e, this._el = e.getCanvasContainer(), util.bindAll(["_onKeyDown"], this) };
            KeyboardHandler.prototype.isEnabled = function() { return !!this._enabled }, KeyboardHandler.prototype.enable = function() { this.isEnabled() || (this._el.addEventListener("keydown", this._onKeyDown, !1), this._enabled = !0) }, KeyboardHandler.prototype.disable = function() { this.isEnabled() && (this._el.removeEventListener("keydown", this._onKeyDown), this._enabled = !1) }, KeyboardHandler.prototype._onKeyDown = function(e) {
                if (!(e.altKey || e.ctrlKey || e.metaKey)) {
                    var t = 0,
                        a = 0,
                        n = 0,
                        r = 0,
                        i = 0;
                    switch (e.keyCode) {
                        case 61:
                        case 107:
                        case 171:
                        case 187:
                            t = 1;
                            break;
                        case 189:
                        case 109:
                        case 173:
                            t = -1;
                            break;
                        case 37:
                            e.shiftKey ? a = -1 : (e.preventDefault(), r = -1);
                            break;
                        case 39:
                            e.shiftKey ? a = 1 : (e.preventDefault(), r = 1);
                            break;
                        case 38:
                            e.shiftKey ? n = 1 : (e.preventDefault(), i = -1);
                            break;
                        case 40:
                            e.shiftKey ? n = -1 : (i = 1, e.preventDefault());
                            break;
                        default:
                            return
                    }
                    var s = this._map,
                        o = s.getZoom(),
                        l = { duration: 300, delayEndEvents: 500, easing: easeOut, zoom: t ? Math.round(o) + t * (e.shiftKey ? 2 : 1) : o, bearing: s.getBearing() + a * bearingStep, pitch: s.getPitch() + n * pitchStep, offset: [-r * panStep, -i * panStep], center: s.getCenter() };
                    s.easeTo(l, { originalEvent: e })
                }
            }, module.exports = KeyboardHandler;
        }, { "../../util/util": 260 }],
        232: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                browser = _dereq_("../../util/browser"),
                window = _dereq_("../../util/window"),
                ua = window.navigator.userAgent.toLowerCase(),
                firefox = -1 !== ua.indexOf("firefox"),
                safari = -1 !== ua.indexOf("safari") && -1 === ua.indexOf("chrom"),
                ScrollZoomHandler = function(e) { this._map = e, this._el = e.getCanvasContainer(), util.bindAll(["_onWheel", "_onTimeout"], this) };
            ScrollZoomHandler.prototype.isEnabled = function() { return !!this._enabled }, ScrollZoomHandler.prototype.enable = function(e) { this.isEnabled() || (this._el.addEventListener("wheel", this._onWheel, !1), this._el.addEventListener("mousewheel", this._onWheel, !1), this._enabled = !0, this._aroundCenter = e && "center" === e.around) }, ScrollZoomHandler.prototype.disable = function() { this.isEnabled() && (this._el.removeEventListener("wheel", this._onWheel), this._el.removeEventListener("mousewheel", this._onWheel), this._enabled = !1) }, ScrollZoomHandler.prototype._onWheel = function(e) {
                var t = 0;
                "wheel" === e.type ? (t = e.deltaY, firefox && e.deltaMode === window.WheelEvent.DOM_DELTA_PIXEL && (t /= browser.devicePixelRatio), e.deltaMode === window.WheelEvent.DOM_DELTA_LINE && (t *= 40)) : "mousewheel" === e.type && (t = -e.wheelDeltaY, safari && (t /= 3));
                var o = browser.now(),
                    i = o - (this._time || 0);
                this._pos = DOM.mousePos(this._el, e), this._time = o, 0 !== t && t % 4.000244140625 == 0 ? this._type = "wheel" : 0 !== t && Math.abs(t) < 4 ? this._type = "trackpad" : i > 400 ? (this._type = null, this._lastValue = t, this._timeout = setTimeout(this._onTimeout, 40)) : this._type || (this._type = Math.abs(i * t) < 200 ? "trackpad" : "wheel", this._timeout && (clearTimeout(this._timeout), this._timeout = null, t += this._lastValue)), e.shiftKey && t && (t /= 4), this._type && this._zoom(-t, e), e.preventDefault()
            }, ScrollZoomHandler.prototype._onTimeout = function() { this._type = "wheel", this._zoom(-this._lastValue) }, ScrollZoomHandler.prototype._zoom = function(e, t) {
                if (0 !== e) {
                    var o = this._map,
                        i = 2 / (1 + Math.exp(-Math.abs(e / 100)));
                    e < 0 && 0 !== i && (i = 1 / i);
                    var l = o.ease ? o.ease.to : o.transform.scale,
                        s = o.transform.scaleZoom(l * i);
                    o.zoomTo(s, { duration: "wheel" === this._type ? 200 : 0, around: this._aroundCenter ? o.getCenter() : o.unproject(this._pos), delayEndEvents: 200, smoothEasing: !0 }, { originalEvent: t })
                }
            }, module.exports = ScrollZoomHandler;
        }, { "../../util/browser": 240, "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        233: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../../util/dom"),
                util = _dereq_("../../util/util"),
                window = _dereq_("../../util/window"),
                inertiaLinearity = .15,
                inertiaEasing = util.bezier(0, 0, inertiaLinearity, 1),
                inertiaDeceleration = 12,
                inertiaMaxSpeed = 2.5,
                significantScaleThreshold = .15,
                significantRotateThreshold = 10,
                TouchZoomRotateHandler = function(t) { this._map = t, this._el = t.getCanvasContainer(), util.bindAll(["_onStart", "_onMove", "_onEnd"], this) };
            TouchZoomRotateHandler.prototype.isEnabled = function() { return !!this._enabled }, TouchZoomRotateHandler.prototype.enable = function(t) { this.isEnabled() || (this._el.classList.add("mapboxgl-touch-zoom-rotate"), this._el.addEventListener("touchstart", this._onStart, !1), this._enabled = !0, this._aroundCenter = t && "center" === t.around) }, TouchZoomRotateHandler.prototype.disable = function() { this.isEnabled() && (this._el.classList.remove("mapboxgl-touch-zoom-rotate"), this._el.removeEventListener("touchstart", this._onStart), this._enabled = !1) }, TouchZoomRotateHandler.prototype.disableRotation = function() { this._rotationDisabled = !0 }, TouchZoomRotateHandler.prototype.enableRotation = function() { this._rotationDisabled = !1 }, TouchZoomRotateHandler.prototype._onStart = function(t) {
                if (2 === t.touches.length) {
                    var e = DOM.mousePos(this._el, t.touches[0]),
                        o = DOM.mousePos(this._el, t.touches[1]);
                    this._startVec = e.sub(o), this._startScale = this._map.transform.scale, this._startBearing = this._map.transform.bearing, this._gestureIntent = void 0, this._inertia = [], window.document.addEventListener("touchmove", this._onMove, !1), window.document.addEventListener("touchend", this._onEnd, !1)
                }
            }, TouchZoomRotateHandler.prototype._onMove = function(t) {
                if (2 === t.touches.length) {
                    var e = DOM.mousePos(this._el, t.touches[0]),
                        o = DOM.mousePos(this._el, t.touches[1]),
                        i = e.add(o).div(2),
                        n = e.sub(o),
                        a = n.mag() / this._startVec.mag(),
                        r = this._rotationDisabled ? 0 : 180 * n.angleWith(this._startVec) / Math.PI,
                        s = this._map;
                    if (this._gestureIntent) { var h = { duration: 0, around: s.unproject(i) }; "rotate" === this._gestureIntent && (h.bearing = this._startBearing + r), "zoom" !== this._gestureIntent && "rotate" !== this._gestureIntent || (h.zoom = s.transform.scaleZoom(this._startScale * a)), s.stop(), this._drainInertiaBuffer(), this._inertia.push([Date.now(), a, i]), s.easeTo(h, { originalEvent: t }) } else {
                        var u = Math.abs(1 - a) > significantScaleThreshold;
                        Math.abs(r) > significantRotateThreshold ? this._gestureIntent = "rotate" : u && (this._gestureIntent = "zoom"), this._gestureIntent && (this._startVec = n, this._startScale = s.transform.scale, this._startBearing = s.transform.bearing)
                    }
                    t.preventDefault()
                }
            }, TouchZoomRotateHandler.prototype._onEnd = function(t) {
                window.document.removeEventListener("touchmove", this._onMove), window.document.removeEventListener("touchend", this._onEnd), this._drainInertiaBuffer();
                var e = this._inertia,
                    o = this._map;
                if (e.length < 2) return void o.snapToNorth({}, { originalEvent: t });
                var i = e[e.length - 1],
                    n = e[0],
                    a = o.transform.scaleZoom(this._startScale * i[1]),
                    r = o.transform.scaleZoom(this._startScale * n[1]),
                    s = a - r,
                    h = (i[0] - n[0]) / 1e3,
                    u = i[2];
                if (0 === h || a === r) return void o.snapToNorth({}, { originalEvent: t });
                var l = s * inertiaLinearity / h;
                Math.abs(l) > inertiaMaxSpeed && (l = l > 0 ? inertiaMaxSpeed : -inertiaMaxSpeed);
                var d = 1e3 * Math.abs(l / (inertiaDeceleration * inertiaLinearity)),
                    c = a + l * d / 2e3;
                c < 0 && (c = 0), o.easeTo({ zoom: c, duration: d, easing: inertiaEasing, around: this._aroundCenter ? o.getCenter() : o.unproject(u) }, { originalEvent: t })
            }, TouchZoomRotateHandler.prototype._drainInertiaBuffer = function() { for (var t = this._inertia, e = Date.now(); t.length > 2 && e - t[0][0] > 160;) t.shift() }, module.exports = TouchZoomRotateHandler;
        }, { "../../util/dom": 247, "../../util/util": 260, "../../util/window": 242 }],
        234: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("../util/util"),
                window = _dereq_("../util/window"),
                Hash = function() { util.bindAll(["_onHashChange", "_updateHash"], this) };
            Hash.prototype.addTo = function(t) { return this._map = t, window.addEventListener("hashchange", this._onHashChange, !1), this._map.on("moveend", this._updateHash), this }, Hash.prototype.remove = function() { return window.removeEventListener("hashchange", this._onHashChange, !1), this._map.off("moveend", this._updateHash), delete this._map, this }, Hash.prototype.getHashString = function(t) {
                var a = this._map.getCenter(),
                    h = Math.round(100 * this._map.getZoom()) / 100,
                    e = Math.max(0, Math.ceil(Math.log(h) / Math.LN2)),
                    n = Math.round(a.lng * Math.pow(10, e)) / Math.pow(10, e),
                    o = Math.round(a.lat * Math.pow(10, e)) / Math.pow(10, e),
                    i = this._map.getBearing(),
                    s = this._map.getPitch(),
                    r = "";
                return r += t ? "#/" + n + "/" + o + "/" + h : "#" + h + "/" + o + "/" + n, (i || s) && (r += "/" + Math.round(10 * i) / 10), s && (r += "/" + Math.round(s)), r
            }, Hash.prototype._onHashChange = function() { var t = window.location.hash.replace("#", "").split("/"); return t.length >= 3 && (this._map.jumpTo({ center: [+t[2], +t[1]], zoom: +t[0], bearing: +(t[3] || 0), pitch: +(t[4] || 0) }), !0) }, Hash.prototype._updateHash = function() {
                var t = this.getHashString();
                window.history.replaceState("", "", t)
            }, module.exports = Hash;
        }, { "../util/util": 260, "../util/window": 242 }],
        235: [function(_dereq_, module, exports) {
            "use strict";

            function removeNode(t) { t.parentNode && t.parentNode.removeChild(t) }
            var util = _dereq_("../util/util"),
                browser = _dereq_("../util/browser"),
                window = _dereq_("../util/window"),
                ref = _dereq_("../util/window"),
                HTMLImageElement = ref.HTMLImageElement,
                DOM = _dereq_("../util/dom"),
                ajax = _dereq_("../util/ajax"),
                Style = _dereq_("../style/style"),
                AnimationLoop = _dereq_("../style/animation_loop"),
                Painter = _dereq_("../render/painter"),
                Transform = _dereq_("../geo/transform"),
                Hash = _dereq_("./hash"),
                bindHandlers = _dereq_("./bind_handlers"),
                Camera = _dereq_("./camera"),
                LngLat = _dereq_("../geo/lng_lat"),
                LngLatBounds = _dereq_("../geo/lng_lat_bounds"),
                Point = _dereq_("@mapbox/point-geometry"),
                AttributionControl = _dereq_("./control/attribution_control"),
                LogoControl = _dereq_("./control/logo_control"),
                isSupported = _dereq_("mapbox-gl-supported");
            _dereq_("./events");
            var defaultMinZoom = 0,
                defaultMaxZoom = 22,
                defaultOptions = { center: [0, 0], zoom: 0, bearing: 0, pitch: 0, minZoom: defaultMinZoom, maxZoom: defaultMaxZoom, interactive: !0, scrollZoom: !0, boxZoom: !0, dragRotate: !0, dragPan: !0, keyboard: !0, doubleClickZoom: !0, touchZoomRotate: !0, bearingSnap: 7, hash: !1, attributionControl: !0, failIfMajorPerformanceCaveat: !1, preserveDrawingBuffer: !1, trackResize: !0, renderWorldCopies: !0, refreshExpiredTiles: !0, maxTileCacheSize: null, transformRequest: null, collisionFadeDuration: 300 },
                Map = function(t) {
                    function e(e) {
                        var o = this;
                        if (e = util.extend({}, defaultOptions, e), null != e.minZoom && null != e.maxZoom && e.minZoom > e.maxZoom) throw new Error("maxZoom must be greater than minZoom");
                        var i = new Transform(e.minZoom, e.maxZoom, e.renderWorldCopies);
                        t.call(this, i, e), this._interactive = e.interactive, this._maxTileCacheSize = e.maxTileCacheSize, this._failIfMajorPerformanceCaveat = e.failIfMajorPerformanceCaveat, this._preserveDrawingBuffer = e.preserveDrawingBuffer, this._trackResize = e.trackResize, this._bearingSnap = e.bearingSnap, this._refreshExpiredTiles = e.refreshExpiredTiles, this._collisionFadeDuration = e.collisionFadeDuration;
                        var r = e.transformRequest;
                        if (this._transformRequest = r ? function(t, e) { return r(t, e) || { url: t } } : function(t) { return { url: t } }, "string" == typeof e.container) {
                            var n = window.document.getElementById(e.container);
                            if (!n) throw new Error("Container '" + e.container + "' not found.");
                            this._container = n
                        } else this._container = e.container;
                        this.animationLoop = new AnimationLoop, e.maxBounds && this.setMaxBounds(e.maxBounds), util.bindAll(["_onWindowOnline", "_onWindowResize", "_contextLost", "_contextRestored", "_update", "_render", "_onData", "_onDataLoading"], this), this._setupContainer(), this._setupPainter(), this.on("move", this._update.bind(this, !1)), this.on("zoom", this._update.bind(this, !0)), this.on("move", function() { o._rerender() }), void 0 !== window && (window.addEventListener("online", this._onWindowOnline, !1), window.addEventListener("resize", this._onWindowResize, !1)), bindHandlers(this, e), this._hash = e.hash && (new Hash).addTo(this), this._hash && this._hash._onHashChange() || this.jumpTo({ center: e.center, zoom: e.zoom, bearing: e.bearing, pitch: e.pitch }), this.resize(), e.style && this.setStyle(e.style, { localIdeographFontFamily: e.localIdeographFontFamily }), e.attributionControl && this.addControl(new AttributionControl), this.addControl(new LogoControl, e.logoPosition), this.on("style.load", function() { this.transform.unmodified && this.jumpTo(this.style.stylesheet), this.style.update({ transition: !1 }) }), this.on("data", this._onData), this.on("dataloading", this._onDataLoading)
                    }
                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var o = { showTileBoundaries: {}, showCollisionBoxes: {}, showOverdrawInspector: {}, repaint: {}, vertices: {} };
                    return e.prototype.addControl = function(t, e) {
                        void 0 === e && t.getDefaultPosition && (e = t.getDefaultPosition()), void 0 === e && (e = "top-right");
                        var o = t.onAdd(this),
                            i = this._controlPositions[e];
                        return -1 !== e.indexOf("bottom") ? i.insertBefore(o, i.firstChild) : i.appendChild(o), this
                    }, e.prototype.removeControl = function(t) { return t.onRemove(this), this }, e.prototype.resize = function() {
                        var t = this._containerDimensions(),
                            e = t[0],
                            o = t[1];
                        return this._resizeCanvas(e, o), this.transform.resize(e, o), this.painter.resize(e, o), this.fire("movestart").fire("move").fire("resize").fire("moveend")
                    }, e.prototype.getBounds = function() { var t = new LngLatBounds(this.transform.pointLocation(new Point(0, this.transform.height)), this.transform.pointLocation(new Point(this.transform.width, 0))); return (this.transform.angle || this.transform.pitch) && (t.extend(this.transform.pointLocation(new Point(this.transform.size.x, 0))), t.extend(this.transform.pointLocation(new Point(0, this.transform.size.y)))), t }, e.prototype.getMaxBounds = function() { return this.transform.latRange && 2 === this.transform.latRange.length && this.transform.lngRange && 2 === this.transform.lngRange.length ? new LngLatBounds([this.transform.lngRange[0], this.transform.latRange[0]], [this.transform.lngRange[1], this.transform.latRange[1]]) : null }, e.prototype.setMaxBounds = function(t) {
                        if (t) {
                            var e = LngLatBounds.convert(t);
                            this.transform.lngRange = [e.getWest(), e.getEast()], this.transform.latRange = [e.getSouth(), e.getNorth()], this.transform._constrain(), this._update()
                        } else null !== t && void 0 !== t || (this.transform.lngRange = null, this.transform.latRange = null, this._update());
                        return this
                    }, e.prototype.setMinZoom = function(t) { if ((t = null === t || void 0 === t ? defaultMinZoom : t) >= defaultMinZoom && t <= this.transform.maxZoom) return this.transform.minZoom = t, this._update(), this.getZoom() < t && this.setZoom(t), this; throw new Error("minZoom must be between " + defaultMinZoom + " and the current maxZoom, inclusive") }, e.prototype.getMinZoom = function() { return this.transform.minZoom }, e.prototype.setMaxZoom = function(t) { if ((t = null === t || void 0 === t ? defaultMaxZoom : t) >= this.transform.minZoom) return this.transform.maxZoom = t, this._update(), this.getZoom() > t && this.setZoom(t), this; throw new Error("maxZoom must be greater than the current minZoom") }, e.prototype.getMaxZoom = function() { return this.transform.maxZoom }, e.prototype.project = function(t) { return this.transform.locationPoint(LngLat.convert(t)) }, e.prototype.unproject = function(t) { return this.transform.pointLocation(Point.convert(t)) }, e.prototype.on = function(e, o, i) {
                        var r = this;
                        if (void 0 === i) return t.prototype.on.call(this, e, o);
                        var n = function() {
                            if ("mouseenter" === e || "mouseover" === e) {
                                var t = !1;
                                return {
                                    layer: o,
                                    listener: i,
                                    delegates: {
                                        mousemove: function(n) {
                                            var s = r.getLayer(o) ? r.queryRenderedFeatures(n.point, { layers: [o] }) : [];
                                            s.length ? t || (t = !0, i.call(r, util.extend({ features: s }, n, { type: e }))) : t = !1
                                        },
                                        mouseout: function() { t = !1 }
                                    }
                                }
                            }
                            if ("mouseleave" === e || "mouseout" === e) {
                                var n = !1;
                                return {
                                    layer: o,
                                    listener: i,
                                    delegates: {
                                        mousemove: function(t) {
                                            (r.getLayer(o) ? r.queryRenderedFeatures(t.point, { layers: [o] }) : []).length ? n = !0 : n && (n = !1, i.call(r, util.extend({}, t, { type: e })))
                                        },
                                        mouseout: function(t) { n && (n = !1, i.call(r, util.extend({}, t, { type: e }))) }
                                    }
                                }
                            }
                            var s = function(t) {
                                var e = r.getLayer(o) ? r.queryRenderedFeatures(t.point, { layers: [o] }) : [];
                                e.length && i.call(r, util.extend({ features: e }, t))
                            };
                            return { layer: o, listener: i, delegates: (a = {}, a[e] = s, a) };
                            var a
                        }();
                        this._delegatedListeners = this._delegatedListeners || {}, this._delegatedListeners[e] = this._delegatedListeners[e] || [], this._delegatedListeners[e].push(n);
                        for (var s in n.delegates) r.on(s, n.delegates[s]);
                        return this
                    }, e.prototype.off = function(e, o, i) {
                        var r = this;
                        if (void 0 === i) return t.prototype.off.call(this, e, o);
                        if (this._delegatedListeners && this._delegatedListeners[e])
                            for (var n = this._delegatedListeners[e], s = 0; s < n.length; s++) { var a = n[s]; if (a.layer === o && a.listener === i) { for (var h in a.delegates) r.off(h, a.delegates[h]); return n.splice(s, 1), r } }
                        return this
                    }, e.prototype.queryRenderedFeatures = function(t, e) { return 2 === arguments.length ? (t = arguments[0], e = arguments[1]) : 1 === arguments.length && function(t) { return t instanceof Point || Array.isArray(t) }(arguments[0]) ? (t = arguments[0], e = {}) : 1 === arguments.length ? (t = void 0, e = arguments[0]) : (t = void 0, e = {}), this.style ? this.style.queryRenderedFeatures(this._makeQueryGeometry(t), e, this.transform.zoom, this.transform.angle) : [] }, e.prototype._makeQueryGeometry = function(t) {
                        var e = this;
                        void 0 === t && (t = [Point.convert([0, 0]), Point.convert([this.transform.width, this.transform.height])]);
                        var o;
                        if (t instanceof Point || "number" == typeof t[0]) { o = [Point.convert(t)] } else {
                            var i = [Point.convert(t[0]), Point.convert(t[1])];
                            o = [i[0], new Point(i[1].x, i[0].y), i[1], new Point(i[0].x, i[1].y), i[0]]
                        }
                        return o = o.map(function(t) { return e.transform.pointCoordinate(t) })
                    }, e.prototype.querySourceFeatures = function(t, e) { return this.style.querySourceFeatures(t, e) }, e.prototype.setStyle = function(t, e) {
                        if ((!e || !1 !== e.diff && !e.localIdeographFontFamily) && this.style && t && "object" == typeof t) try { return this.style.setState(t) && this._update(!0), this } catch (t) { util.warnOnce("Unable to perform style diff: " + (t.message || t.error || t) + ".  Rebuilding the style from scratch.") }
                        return this.style && (this.style.setEventedParent(null), this.style._remove()), t ? (this.style = new Style(this, e || {}), this.style.setEventedParent(this, { style: this.style }), "string" == typeof t ? this.style.loadURL(t) : this.style.loadJSON(t), this) : (delete this.style, this)
                    }, e.prototype.getStyle = function() { if (this.style) return this.style.serialize() }, e.prototype.isStyleLoaded = function() { return this.style ? this.style.loaded() : util.warnOnce("There is no style added to the map.") }, e.prototype.addSource = function(t, e) { return this.style.addSource(t, e), this._update(!0), this }, e.prototype.isSourceLoaded = function(t) { var e = this.style && this.style.sourceCaches[t]; return void 0 === e ? void this.fire("error", { error: new Error("There is no source with ID '" + t + "'") }) : e.loaded() }, e.prototype.areTilesLoaded = function() {
                        var t = this.style && this.style.sourceCaches;
                        for (var e in t) {
                            var o = t[e],
                                i = o._tiles;
                            for (var r in i) { var n = i[r]; if ("loaded" !== n.state && "errored" !== n.state) return !1 }
                        }
                        return !0
                    }, e.prototype.addSourceType = function(t, e, o) { return this.style.addSourceType(t, e, o) }, e.prototype.removeSource = function(t) { return this.style.removeSource(t), this._update(!0), this }, e.prototype.getSource = function(t) { return this.style.getSource(t) }, e.prototype.addImage = function(t, e, o) {
                        void 0 === o && (o = {});
                        var i = o.pixelRatio;
                        void 0 === i && (i = 1);
                        var r = o.sdf;
                        if (void 0 === r && (r = !1), e instanceof HTMLImageElement) e = browser.getImageData(e);
                        else if (void 0 === e.width || void 0 === e.height) return this.fire("error", { error: new Error("Invalid arguments to map.addImage(). The second argument must be an `HTMLImageElement`, `ImageData`, or object with `width`, `height`, and `data` properties with the same format as `ImageData`") });
                        this.style.addImage(t, { data: e, pixelRatio: i, sdf: r })
                    }, e.prototype.removeImage = function(t) { this.style.removeImage(t) }, e.prototype.loadImage = function(t, e) { ajax.getImage(this._transformRequest(t, ajax.ResourceType.Image), e) }, e.prototype.addLayer = function(t, e) { return this.style.addLayer(t, e), this._update(!0), this }, e.prototype.moveLayer = function(t, e) { return this.style.moveLayer(t, e), this._update(!0), this }, e.prototype.removeLayer = function(t) { return this.style.removeLayer(t), this._update(!0), this }, e.prototype.getLayer = function(t) { return this.style.getLayer(t) }, e.prototype.setFilter = function(t, e) { return this.style.setFilter(t, e), this._update(!0), this }, e.prototype.setLayerZoomRange = function(t, e, o) { return this.style.setLayerZoomRange(t, e, o), this._update(!0), this }, e.prototype.getFilter = function(t) { return this.style.getFilter(t) }, e.prototype.setPaintProperty = function(t, e, o) { return this.style.setPaintProperty(t, e, o), this._update(!0), this }, e.prototype.getPaintProperty = function(t, e) { return this.style.getPaintProperty(t, e) }, e.prototype.setLayoutProperty = function(t, e, o) { return this.style.setLayoutProperty(t, e, o), this._update(!0), this }, e.prototype.getLayoutProperty = function(t, e) { return this.style.getLayoutProperty(t, e) }, e.prototype.setLight = function(t) { return this.style.setLight(t), this._update(!0), this }, e.prototype.getLight = function() { return this.style.getLight() }, e.prototype.getContainer = function() { return this._container }, e.prototype.getCanvasContainer = function() { return this._canvasContainer }, e.prototype.getCanvas = function() { return this._canvas }, e.prototype._containerDimensions = function() {
                        var t = 0,
                            e = 0;
                        return this._container && (t = this._container.offsetWidth || 400, e = this._container.offsetHeight || 300), [t, e]
                    }, e.prototype._setupContainer = function() {
                        var t = this._container;
                        t.classList.add("mapboxgl-map"), (this._missingCSSContainer = DOM.create("div", "mapboxgl-missing-css", t)).innerHTML = "Missing Mapbox GL JS CSS";
                        var e = this._canvasContainer = DOM.create("div", "mapboxgl-canvas-container", t);
                        this._interactive && e.classList.add("mapboxgl-interactive"), this._canvas = DOM.create("canvas", "mapboxgl-canvas", e), this._canvas.style.position = "absolute", this._canvas.addEventListener("webglcontextlost", this._contextLost, !1), this._canvas.addEventListener("webglcontextrestored", this._contextRestored, !1), this._canvas.setAttribute("tabindex", "0"), this._canvas.setAttribute("aria-label", "Map");
                        var o = this._containerDimensions();
                        this._resizeCanvas(o[0], o[1]);
                        var i = this._controlContainer = DOM.create("div", "mapboxgl-control-container", t),
                            r = this._controlPositions = {};
                        ["top-left", "top-right", "bottom-left", "bottom-right"].forEach(function(t) { r[t] = DOM.create("div", "mapboxgl-ctrl-" + t, i) })
                    }, e.prototype._resizeCanvas = function(t, e) {
                        var o = window.devicePixelRatio || 1;
                        this._canvas.width = o * t, this._canvas.height = o * e, this._canvas.style.width = t + "px", this._canvas.style.height = e + "px"
                    }, e.prototype._setupPainter = function() {
                        var t = util.extend({ failIfMajorPerformanceCaveat: this._failIfMajorPerformanceCaveat, preserveDrawingBuffer: this._preserveDrawingBuffer }, isSupported.webGLContextAttributes),
                            e = this._canvas.getContext("webgl", t) || this._canvas.getContext("experimental-webgl", t);
                        if (!e) return void this.fire("error", { error: new Error("Failed to initialize WebGL") });
                        this.painter = new Painter(e, this.transform)
                    }, e.prototype._contextLost = function(t) { t.preventDefault(), this._frameId && (browser.cancelFrame(this._frameId), this._frameId = null), this.fire("webglcontextlost", { originalEvent: t }) }, e.prototype._contextRestored = function(t) { this._setupPainter(), this.resize(), this._update(), this.fire("webglcontextrestored", { originalEvent: t }) }, e.prototype.loaded = function() { return !(this._styleDirty || this._sourcesDirty || this._placementDirty) && !(!this.style || !this.style.loaded()) }, e.prototype._update = function(t) { return this.style ? (this._styleDirty = this._styleDirty || t, this._sourcesDirty = !0, this._rerender(), this) : this }, e.prototype._render = function() { return this.style && this._styleDirty && (this._styleDirty = !1, this.style.update(), this.style._recalculate(this.transform.zoom)), this.style && this._sourcesDirty && (this._sourcesDirty = !1, this.style._updateSources(this.transform)), this._placementDirty = this.style && this.style._updatePlacement(this.painter.transform, this.showCollisionBoxes, this._collisionFadeDuration), this.painter.render(this.style, { showTileBoundaries: this.showTileBoundaries, showOverdrawInspector: this._showOverdrawInspector, rotating: this.rotating, zooming: this.zooming, collisionFadeDuration: this._collisionFadeDuration }), this.fire("render"), this.loaded() && !this._loaded && (this._loaded = !0, this.fire("load")), this.animationLoop.stopped() || (this._styleDirty = !0), this._frameId = null, (this._sourcesDirty || this._repaint || this._styleDirty || this._placementDirty) && this._rerender(), this }, e.prototype.remove = function() {
                        this._hash && this._hash.remove(), browser.cancelFrame(this._frameId), this._frameId = null, this.setStyle(null), void 0 !== window && (window.removeEventListener("resize", this._onWindowResize, !1), window.removeEventListener("online", this._onWindowOnline, !1));
                        var t = this.painter.gl.getExtension("WEBGL_lose_context");
                        t && t.loseContext(), removeNode(this._canvasContainer), removeNode(this._controlContainer), removeNode(this._missingCSSContainer), this._container.classList.remove("mapboxgl-map"), this.fire("remove")
                    }, e.prototype._rerender = function() { this.style && !this._frameId && (this._frameId = browser.frame(this._render)) }, e.prototype._onWindowOnline = function() { this._update() }, e.prototype._onWindowResize = function() { this._trackResize && this.stop().resize()._update() }, o.showTileBoundaries.get = function() { return !!this._showTileBoundaries }, o.showTileBoundaries.set = function(t) { this._showTileBoundaries !== t && (this._showTileBoundaries = t, this._update()) }, o.showCollisionBoxes.get = function() { return !!this._showCollisionBoxes }, o.showCollisionBoxes.set = function(t) { this._showCollisionBoxes !== t && (this._showCollisionBoxes = t, t && this.style._generateCollisionBoxes()) }, o.showOverdrawInspector.get = function() { return !!this._showOverdrawInspector }, o.showOverdrawInspector.set = function(t) { this._showOverdrawInspector !== t && (this._showOverdrawInspector = t, this._update()) }, o.repaint.get = function() { return !!this._repaint }, o.repaint.set = function(t) { this._repaint = t, this._update() }, o.vertices.get = function() { return !!this._vertices }, o.vertices.set = function(t) { this._vertices = t, this._update() }, e.prototype._onData = function(t) { this._update("style" === t.dataType), this.fire(t.dataType + "data", t) }, e.prototype._onDataLoading = function(t) { this.fire(t.dataType + "dataloading", t) }, Object.defineProperties(e.prototype, o), e
                }(Camera);
            module.exports = Map;
        }, { "../geo/lng_lat": 68, "../geo/lng_lat_bounds": 69, "../geo/transform": 70, "../render/painter": 89, "../style/animation_loop": 179, "../style/style": 186, "../util/ajax": 239, "../util/browser": 240, "../util/dom": 247, "../util/util": 260, "../util/window": 242, "./bind_handlers": 218, "./camera": 219, "./control/attribution_control": 220, "./control/logo_control": 223, "./events": 226, "./hash": 234, "@mapbox/point-geometry": 2, "mapbox-gl-supported": 37 }],
        236: [function(_dereq_, module, exports) {
            "use strict";
            var DOM = _dereq_("../util/dom"),
                LngLat = _dereq_("../geo/lng_lat"),
                Point = _dereq_("@mapbox/point-geometry"),
                smartWrap = _dereq_("../util/smart_wrap"),
                ref = _dereq_("../util/util"),
                bindAll = ref.bindAll,
                Marker = function(t, e) { this._offset = Point.convert(e && e.offset || [0, 0]), bindAll(["_update", "_onMapClick"], this), t || (t = DOM.create("div")), t.classList.add("mapboxgl-marker"), this._element = t, this._popup = null };
            Marker.prototype.addTo = function(t) { return this.remove(), this._map = t, t.getCanvasContainer().appendChild(this._element), t.on("move", this._update), t.on("moveend", this._update), this._update(), this._map.on("click", this._onMapClick), this }, Marker.prototype.remove = function() { return this._map && (this._map.off("click", this._onMapClick), this._map.off("move", this._update), this._map.off("moveend", this._update), delete this._map), DOM.remove(this._element), this._popup && this._popup.remove(), this }, Marker.prototype.getLngLat = function() { return this._lngLat }, Marker.prototype.setLngLat = function(t) { return this._lngLat = LngLat.convert(t), this._pos = null, this._popup && this._popup.setLngLat(this._lngLat), this._update(), this }, Marker.prototype.getElement = function() { return this._element }, Marker.prototype.setPopup = function(t) { return this._popup && (this._popup.remove(), this._popup = null), t && ("offset" in t.options || (t.options.offset = this._offset), this._popup = t, this._popup.setLngLat(this._lngLat)), this }, Marker.prototype._onMapClick = function(t) {
                var e = t.originalEvent.target,
                    p = this._element;
                this._popup && (e === p || p.contains(e)) && this.togglePopup()
            }, Marker.prototype.getPopup = function() { return this._popup }, Marker.prototype.togglePopup = function() { var t = this._popup; return t ? (t.isOpen() ? t.remove() : t.addTo(this._map), this) : this }, Marker.prototype._update = function(t) { this._map && (this._map.transform.renderWorldCopies && (this._lngLat = smartWrap(this._lngLat, this._pos, this._map.transform)), this._pos = this._map.project(this._lngLat)._add(this._offset), t && "moveend" !== t.type || (this._pos = this._pos.round()), DOM.setTransform(this._element, "translate(-50%, -50%) translate(" + this._pos.x + "px, " + this._pos.y + "px)")) }, module.exports = Marker;
        }, { "../geo/lng_lat": 68, "../util/dom": 247, "../util/smart_wrap": 257, "../util/util": 260, "@mapbox/point-geometry": 2 }],
        237: [function(_dereq_, module, exports) {
            "use strict";

            function normalizeOffset(t) { if (t) { if ("number" == typeof t) { var o = Math.round(Math.sqrt(.5 * Math.pow(t, 2))); return { top: new Point(0, t), "top-left": new Point(o, o), "top-right": new Point(-o, o), bottom: new Point(0, -t), "bottom-left": new Point(o, -o), "bottom-right": new Point(-o, -o), left: new Point(t, 0), right: new Point(-t, 0) } } if (t instanceof Point || Array.isArray(t)) { var e = Point.convert(t); return { top: e, "top-left": e, "top-right": e, bottom: e, "bottom-left": e, "bottom-right": e, left: e, right: e } } return { top: Point.convert(t.top || [0, 0]), "top-left": Point.convert(t["top-left"] || [0, 0]), "top-right": Point.convert(t["top-right"] || [0, 0]), bottom: Point.convert(t.bottom || [0, 0]), "bottom-left": Point.convert(t["bottom-left"] || [0, 0]), "bottom-right": Point.convert(t["bottom-right"] || [0, 0]), left: Point.convert(t.left || [0, 0]), right: Point.convert(t.right || [0, 0]) } } return normalizeOffset(new Point(0, 0)) }
            var util = _dereq_("../util/util"),
                Evented = _dereq_("../util/evented"),
                DOM = _dereq_("../util/dom"),
                LngLat = _dereq_("../geo/lng_lat"),
                Point = _dereq_("@mapbox/point-geometry"),
                window = _dereq_("../util/window"),
                smartWrap = _dereq_("../util/smart_wrap"),
                defaultOptions = { closeButton: !0, closeOnClick: !0 },
                Popup = function(t) {
                    function o(o) { t.call(this), this.options = util.extend(Object.create(defaultOptions), o), util.bindAll(["_update", "_onClickClose"], this) }
                    return t && (o.__proto__ = t), o.prototype = Object.create(t && t.prototype), o.prototype.constructor = o, o.prototype.addTo = function(t) { return this._map = t, this._map.on("move", this._update), this.options.closeOnClick && this._map.on("click", this._onClickClose), this._update(), this }, o.prototype.isOpen = function() { return !!this._map }, o.prototype.remove = function() { return this._content && DOM.remove(this._content), this._container && (DOM.remove(this._container), delete this._container), this._map && (this._map.off("move", this._update), this._map.off("click", this._onClickClose), delete this._map), this.fire("close"), this }, o.prototype.getLngLat = function() { return this._lngLat }, o.prototype.setLngLat = function(t) { return this._lngLat = LngLat.convert(t), this._pos = null, this._update(), this }, o.prototype.setText = function(t) { return this.setDOMContent(window.document.createTextNode(t)) }, o.prototype.setHTML = function(t) {
                        var o, e = window.document.createDocumentFragment(),
                            n = window.document.createElement("body");
                        for (n.innerHTML = t;;) {
                            if (!(o = n.firstChild)) break;
                            e.appendChild(o)
                        }
                        return this.setDOMContent(e)
                    }, o.prototype.setDOMContent = function(t) { return this._createContent(), this._content.appendChild(t), this._update(), this }, o.prototype._createContent = function() { this._content && DOM.remove(this._content), this._content = DOM.create("div", "mapboxgl-popup-content", this._container), this.options.closeButton && (this._closeButton = DOM.create("button", "mapboxgl-popup-close-button", this._content), this._closeButton.type = "button", this._closeButton.setAttribute("aria-label", "Close popup"), this._closeButton.innerHTML = "&#215;", this._closeButton.addEventListener("click", this._onClickClose)) }, o.prototype._update = function() {
                        if (this._map && this._lngLat && this._content) {
                            this._container || (this._container = DOM.create("div", "mapboxgl-popup", this._map.getContainer()), this._tip = DOM.create("div", "mapboxgl-popup-tip", this._container), this._container.appendChild(this._content)), this._map.transform.renderWorldCopies && (this._lngLat = smartWrap(this._lngLat, this._pos, this._map.transform));
                            var t = this._pos = this._map.project(this._lngLat),
                                o = this.options.anchor,
                                e = normalizeOffset(this.options.offset);
                            if (!o) {
                                var n = this._container.offsetWidth,
                                    i = this._container.offsetHeight;
                                o = t.y + e.bottom.y < i ? ["top"] : t.y > this._map.transform.height - i ? ["bottom"] : [], t.x < n / 2 ? o.push("left") : t.x > this._map.transform.width - n / 2 && o.push("right"), o = 0 === o.length ? "bottom" : o.join("-")
                            }
                            var r = t.add(e[o]).round(),
                                s = { top: "translate(-50%,0)", "top-left": "translate(0,0)", "top-right": "translate(-100%,0)", bottom: "translate(-50%,-100%)", "bottom-left": "translate(0,-100%)", "bottom-right": "translate(-100%,-100%)", left: "translate(0,-50%)", right: "translate(-100%,-50%)" },
                                p = this._container.classList;
                            for (var a in s) p.remove("mapboxgl-popup-anchor-" + a);
                            p.add("mapboxgl-popup-anchor-" + o), DOM.setTransform(this._container, s[o] + " translate(" + r.x + "px," + r.y + "px)")
                        }
                    }, o.prototype._onClickClose = function() { this.remove() }, o
                }(Evented);
            module.exports = Popup;
        }, { "../geo/lng_lat": 68, "../util/dom": 247, "../util/evented": 248, "../util/smart_wrap": 257, "../util/util": 260, "../util/window": 242, "@mapbox/point-geometry": 2 }],
        238: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("./util"),
                Actor = function(t, e, r) { this.target = t, this.parent = e, this.mapId = r, this.callbacks = {}, this.callbackID = 0, util.bindAll(["receive"], this), this.target.addEventListener("message", this.receive, !1) };
            Actor.prototype.send = function(t, e, r, a, i) {
                var s = r ? this.mapId + ":" + this.callbackID++ : null;
                r && (this.callbacks[s] = r), this.target.postMessage({ targetMapId: i, sourceMapId: this.mapId, type: t, id: String(s), data: e }, a)
            }, Actor.prototype.receive = function(t) {
                var e, r = this,
                    a = t.data,
                    i = a.id;
                if (!a.targetMapId || this.mapId === a.targetMapId) {
                    var s = function(t, e, a) { r.target.postMessage({ sourceMapId: r.mapId, type: "<response>", id: String(i), error: t ? String(t) : null, data: e }, a) };
                    if ("<response>" === a.type) e = this.callbacks[a.id], delete this.callbacks[a.id], e && a.error ? e(new Error(a.error)) : e && e(null, a.data);
                    else if (void 0 !== a.id && this.parent[a.type]) this.parent[a.type](a.sourceMapId, a.data, s);
                    else if (void 0 !== a.id && this.parent.getWorkerSource) {
                        var o = a.type.split("."),
                            p = this.parent.getWorkerSource(a.sourceMapId, o[0]);
                        p[o[1]](a.data, s)
                    } else this.parent[a.type](a.data)
                }
            }, Actor.prototype.remove = function() { this.target.removeEventListener("message", this.receive, !1) }, module.exports = Actor;
        }, { "./util": 260 }],
        239: [function(_dereq_, module, exports) {
            "use strict";

            function makeRequest(e) {
                var t = new window.XMLHttpRequest;
                t.open("GET", e.url, !0);
                for (var r in e.headers) t.setRequestHeader(r, e.headers[r]);
                return t.withCredentials = "include" === e.credentials, t
            }

            function sameOrigin(e) { var t = window.document.createElement("a"); return t.href = e, t.protocol === window.document.location.protocol && t.host === window.document.location.host }
            var window = _dereq_("./window"),
                ResourceType = { Unknown: "Unknown", Style: "Style", Source: "Source", Tile: "Tile", Glyphs: "Glyphs", SpriteImage: "SpriteImage", SpriteJSON: "SpriteJSON", Image: "Image" };
            exports.ResourceType = ResourceType, "function" == typeof Object.freeze && Object.freeze(ResourceType);
            var AJAXError = function(e) {
                function t(t, r) { e.call(this, t), this.status = r }
                return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t
            }(Error);
            exports.getJSON = function(e, t) {
                var r = makeRequest(e);
                return r.setRequestHeader("Accept", "application/json"), r.onerror = function() { t(new Error(r.statusText)) }, r.onload = function() {
                    if (r.status >= 200 && r.status < 300 && r.response) {
                        var e;
                        try { e = JSON.parse(r.response) } catch (e) { return t(e) }
                        t(null, e)
                    } else t(new AJAXError(r.statusText, r.status))
                }, r.send(), r
            }, exports.getArrayBuffer = function(e, t) {
                var r = makeRequest(e);
                return r.responseType = "arraybuffer", r.onerror = function() { t(new Error(r.statusText)) }, r.onload = function() {
                    var e = r.response;
                    if (0 === e.byteLength && 200 === r.status) return t(new Error("http status 200 returned without content."));
                    r.status >= 200 && r.status < 300 && r.response ? t(null, { data: e, cacheControl: r.getResponseHeader("Cache-Control"), expires: r.getResponseHeader("Expires") }) : t(new AJAXError(r.statusText, r.status))
                }, r.send(), r
            };
            var transparentPngUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
            exports.getImage = function(e, t) {
                return exports.getArrayBuffer(e, function(e, r) {
                    if (e) t(e);
                    else if (r) {
                        var n = new window.Image,
                            o = window.URL || window.webkitURL;
                        n.onload = function() { t(null, n), o.revokeObjectURL(n.src) };
                        var s = new window.Blob([new Uint8Array(r.data)], { type: "image/png" });
                        n.cacheControl = r.cacheControl, n.expires = r.expires, n.src = r.data.byteLength ? o.createObjectURL(s) : transparentPngUrl
                    }
                })
            }, exports.getVideo = function(e, t) {
                var r = window.document.createElement("video");
                r.onloadstart = function() { t(null, r) };
                for (var n = 0; n < e.length; n++) {
                    var o = window.document.createElement("source");
                    sameOrigin(e[n]) || (r.crossOrigin = "Anonymous"), o.src = e[n], r.appendChild(o)
                }
                return r
            };
        }, { "./window": 242 }],
        240: [function(_dereq_, module, exports) {
            "use strict";
            var window = _dereq_("./window"),
                now = window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now.bind(Date),
                frame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
                cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
            module.exports = {
                now: now,
                frame: function(e) { return frame(e) },
                cancelFrame: function(e) { return cancel(e) },
                timed: function(e, n, t) {
                    function a() {
                        if (!i) {
                            var r = now();
                            r >= o + n ? e.call(t, 1) : (e.call(t, (r - o) / n), frame(a))
                        }
                    }
                    if (!n) return e.call(t, 1), null;
                    var i = !1,
                        o = now();
                    return frame(a),
                        function() { i = !0 }
                },
                getImageData: function(e) {
                    var n = window.document.createElement("canvas"),
                        t = n.getContext("2d");
                    if (!t) throw new Error("failed to create canvas 2d context");
                    return n.width = e.width, n.height = e.height, t.drawImage(e, 0, 0, e.width, e.height), t.getImageData(0, 0, e.width, e.height)
                },
                hardwareConcurrency: window.navigator.hardwareConcurrency || 4,
                get devicePixelRatio() { return window.devicePixelRatio },
                supportsWebp: !1
            };
            var webpImgTest = window.document.createElement("img");
            webpImgTest.onload = function() { module.exports.supportsWebp = !0 }, webpImgTest.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=";
        }, { "./window": 242 }],
        241: [function(_dereq_, module, exports) {
            "use strict";
            var WebWorkify = _dereq_("webworkify"),
                window = _dereq_("../window"),
                workerURL = window.URL.createObjectURL(new WebWorkify(_dereq_("../../source/worker"), { bare: !0 }));
            module.exports = function() { return new window.Worker(workerURL) };
        }, { "../../source/worker": 116, "../window": 242, "webworkify": 48 }],
        242: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = self;
        }, {}],
        243: [function(_dereq_, module, exports) {
            "use strict";

            function compareAreas(e, r) { return r.area - e.area }
            var quickselect = _dereq_("quickselect"),
                calculateSignedArea = _dereq_("./util").calculateSignedArea;
            module.exports = function(e, r) {
                var a = e.length;
                if (a <= 1) return [e];
                for (var t, u, c = [], i = 0; i < a; i++) {
                    var l = calculateSignedArea(e[i]);
                    0 !== l && (e[i].area = Math.abs(l), void 0 === u && (u = l < 0), u === l < 0 ? (t && c.push(t), t = [e[i]]) : t.push(e[i]))
                }
                if (t && c.push(t), r > 1)
                    for (var n = 0; n < c.length; n++) c[n].length <= r || (quickselect(c[n], r, 1, c[n].length - 1, compareAreas), c[n] = c[n].slice(0, r));
                return c
            };
        }, { "./util": 260, "quickselect": 40 }],
        244: [function(_dereq_, module, exports) {
            "use strict";
            var config = { API_URL: "https://api.mapbox.com", REQUIRE_ACCESS_TOKEN: !0, ACCESS_TOKEN: null };
            module.exports = config;
        }, {}],
        245: [function(_dereq_, module, exports) {
            "use strict";
            var DictionaryCoder = function(r) {
                var t = this;
                this._stringToNumber = {}, this._numberToString = [];
                for (var o = 0; o < r.length; o++) {
                    var i = r[o];
                    t._stringToNumber[i] = o, t._numberToString[o] = i
                }
            };
            DictionaryCoder.prototype.encode = function(r) { return this._stringToNumber[r] }, DictionaryCoder.prototype.decode = function(r) { return this._numberToString[r] }, module.exports = DictionaryCoder;
        }, {}],
        246: [function(_dereq_, module, exports) {
            "use strict";
            var util = _dereq_("./util"),
                Actor = _dereq_("./actor"),
                Dispatcher = function(t, r) {
                    var o = this;
                    this.workerPool = t, this.actors = [], this.currentActor = 0, this.id = util.uniqueId();
                    for (var i = this.workerPool.acquire(this.id), e = 0; e < i.length; e++) {
                        var s = i[e],
                            c = new Actor(s, r, o.id);
                        c.name = "Worker " + e, o.actors.push(c)
                    }
                };
            Dispatcher.prototype.broadcast = function(t, r, o) { o = o || function() {}, util.asyncAll(this.actors, function(o, i) { o.send(t, r, i) }, o) }, Dispatcher.prototype.send = function(t, r, o, i, e) { return ("number" != typeof i || isNaN(i)) && (i = this.currentActor = (this.currentActor + 1) % this.actors.length), this.actors[i].send(t, r, o, e), i }, Dispatcher.prototype.remove = function() { this.actors.forEach(function(t) { t.remove() }), this.actors = [], this.workerPool.release(this.id) }, module.exports = Dispatcher;
        }, { "./actor": 238, "./util": 260 }],
        247: [function(_dereq_, module, exports) {
            "use strict";

            function testProp(e) {
                for (var t = 0; t < e.length; t++)
                    if (e[t] in docStyle) return e[t];
                return e[0]
            }
            var Point = _dereq_("@mapbox/point-geometry"),
                window = _dereq_("./window");
            exports.create = function(e, t, o) { var n = window.document.createElement(e); return t && (n.className = t), o && o.appendChild(n), n };
            var docStyle = window.document.documentElement.style,
                selectProp = testProp(["userSelect", "MozUserSelect", "WebkitUserSelect", "msUserSelect"]),
                userSelect;
            exports.disableDrag = function() { selectProp && (userSelect = docStyle[selectProp], docStyle[selectProp] = "none") }, exports.enableDrag = function() { selectProp && (docStyle[selectProp] = userSelect) };
            var transformProp = testProp(["transform", "WebkitTransform"]);
            exports.setTransform = function(e, t) { e.style[transformProp] = t };
            var suppressClick = function(e) { e.preventDefault(), e.stopPropagation(), window.removeEventListener("click", suppressClick, !0) };
            exports.suppressClick = function() { window.addEventListener("click", suppressClick, !0), window.setTimeout(function() { window.removeEventListener("click", suppressClick, !0) }, 0) }, exports.mousePos = function(e, t) { var o = e.getBoundingClientRect(); return t = t.touches ? t.touches[0] : t, new Point(t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop) }, exports.touchPos = function(e, t) { for (var o = e.getBoundingClientRect(), n = [], r = "touchend" === t.type ? t.changedTouches : t.touches, s = 0; s < r.length; s++) n.push(new Point(r[s].clientX - o.left - e.clientLeft, r[s].clientY - o.top - e.clientTop)); return n }, exports.remove = function(e) { e.parentNode && e.parentNode.removeChild(e) };
        }, { "./window": 242, "@mapbox/point-geometry": 2 }],
        248: [function(_dereq_, module, exports) {
            "use strict";

            function _addEventListener(e, t, n) { n[e] = n[e] || [], n[e].push(t) }

            function _removeEventListener(e, t, n) { if (n && n[e]) { var i = n[e].indexOf(t); - 1 !== i && n[e].splice(i, 1) } }
            var util = _dereq_("./util"),
                Evented = function() {};
            Evented.prototype.on = function(e, t) { return this._listeners = this._listeners || {}, _addEventListener(e, t, this._listeners), this }, Evented.prototype.off = function(e, t) { return _removeEventListener(e, t, this._listeners), _removeEventListener(e, t, this._oneTimeListeners), this }, Evented.prototype.once = function(e, t) { return this._oneTimeListeners = this._oneTimeListeners || {}, _addEventListener(e, t, this._oneTimeListeners), this }, Evented.prototype.fire = function(e, t) {
                var n = this;
                if (this.listens(e)) {
                    t = util.extend({}, t, { type: e, target: this });
                    for (var i = this._listeners && this._listeners[e] ? this._listeners[e].slice() : [], s = 0; s < i.length; s++) i[s].call(n, t);
                    for (var r = this._oneTimeListeners && this._oneTimeListeners[e] ? this._oneTimeListeners[e].slice() : [], o = 0; o < r.length; o++) r[o].call(n, t), _removeEventListener(e, r[o], n._oneTimeListeners);
                    this._eventedParent && this._eventedParent.fire(e, util.extend({}, t, "function" == typeof this._eventedParentData ? this._eventedParentData() : this._eventedParentData))
                } else util.endsWith(e, "error") && console.error(t && t.error || t || "Empty error event");
                return this
            }, Evented.prototype.listens = function(e) { return this._listeners && this._listeners[e] && this._listeners[e].length > 0 || this._oneTimeListeners && this._oneTimeListeners[e] && this._oneTimeListeners[e].length > 0 || this._eventedParent && this._eventedParent.listens(e) }, Evented.prototype.setEventedParent = function(e, t) { return this._eventedParent = e, this._eventedParentData = t, this }, module.exports = Evented;
        }, { "./util": 260 }],
        249: [function(_dereq_, module, exports) {
            "use strict";

            function compareMax(e, t) { return t.max - e.max }

            function Cell(e, t, n, o) { this.p = new Point(e, t), this.h = n, this.d = pointToPolygonDist(this.p, o), this.max = this.d + this.h * Math.SQRT2 }

            function pointToPolygonDist(e, t) {
                for (var n = !1, o = 1 / 0, r = 0; r < t.length; r++)
                    for (var i = t[r], l = 0, u = i.length, a = u - 1; l < u; a = l++) {
                        var s = i[l],
                            p = i[a];
                        s.y > e.y != p.y > e.y && e.x < (p.x - s.x) * (e.y - s.y) / (p.y - s.y) + s.x && (n = !n), o = Math.min(o, distToSegmentSquared(e, s, p))
                    }
                return (n ? 1 : -1) * Math.sqrt(o)
            }

            function getCentroidCell(e) {
                for (var t = 0, n = 0, o = 0, r = e[0], i = 0, l = r.length, u = l - 1; i < l; u = i++) {
                    var a = r[i],
                        s = r[u],
                        p = a.x * s.y - s.x * a.y;
                    n += (a.x + s.x) * p, o += (a.y + s.y) * p, t += 3 * p
                }
                return new Cell(n / t, o / t, 0, e)
            }
            var Queue = _dereq_("tinyqueue"),
                Point = _dereq_("@mapbox/point-geometry"),
                distToSegmentSquared = _dereq_("./intersection_tests").distToSegmentSquared;
            module.exports = function(e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = !1);
                for (var o = 1 / 0, r = 1 / 0, i = -1 / 0, l = -1 / 0, u = e[0], a = 0; a < u.length; a++) {
                    var s = u[a];
                    (!a || s.x < o) && (o = s.x), (!a || s.y < r) && (r = s.y), (!a || s.x > i) && (i = s.x), (!a || s.y > l) && (l = s.y)
                }
                var p = i - o,
                    h = l - r,
                    d = Math.min(p, h),
                    x = d / 2,
                    y = new Queue(null, compareMax);
                if (0 === d) return new Point(o, r);
                for (var g = o; g < i; g += d)
                    for (var f = r; f < l; f += d) y.push(new Cell(g + x, f + x, x, e));
                for (var m = getCentroidCell(e), v = y.length; y.length;) {
                    var c = y.pop();
                    (c.d > m.d || !m.d) && (m = c, n && console.log("found best %d after %d probes", Math.round(1e4 * c.d) / 1e4, v)), c.max - m.d <= t || (x = c.h / 2, y.push(new Cell(c.p.x - x, c.p.y - x, x, e)), y.push(new Cell(c.p.x + x, c.p.y - x, x, e)), y.push(new Cell(c.p.x - x, c.p.y + x, x, e)), y.push(new Cell(c.p.x + x, c.p.y + x, x, e)), v += 4)
                }
                return n && (console.log("num probes: " + v), console.log("best distance: " + m.d)), m.p
            };
        }, { "./intersection_tests": 252, "@mapbox/point-geometry": 2, "tinyqueue": 42 }],
        250: [function(_dereq_, module, exports) {
            "use strict";
            var WorkerPool = _dereq_("./worker_pool"),
                globalWorkerPool;
            module.exports = function() { return globalWorkerPool || (globalWorkerPool = new WorkerPool), globalWorkerPool };
        }, { "./worker_pool": 263 }],
        251: [function(_dereq_, module, exports) {
            "use strict";

            function createImage(e, t, i) {
                var h = e.width,
                    a = e.height;
                if (i) { if (i.length !== h * a * t) throw new RangeError("mismatched image size") } else i = new Uint8Array(h * a * t);
                return { width: h, height: a, data: i }
            }

            function resizeImage(e, t, i) {
                var h = t.width,
                    a = t.height;
                if (h === e.width && a === e.height) return e;
                var r = createImage({ width: h, height: a }, i);
                copyImage(e, r, { x: 0, y: 0 }, { x: 0, y: 0 }, { width: Math.min(e.width, h), height: Math.min(e.height, a) }, i), e.width = h, e.height = a, e.data = r.data
            }

            function copyImage(e, t, i, h, a, r) {
                if (0 === a.width || 0 === a.height) return t;
                if (a.width > e.width || a.height > e.height || i.x > e.width - a.width || i.y > e.height - a.height) throw new RangeError("out of range source coordinates for image copy");
                if (a.width > t.width || a.height > t.height || h.x > t.width - a.width || h.y > t.height - a.height) throw new RangeError("out of range destination coordinates for image copy");
                for (var g = e.data, n = t.data, o = 0; o < a.height; o++)
                    for (var m = ((i.y + o) * e.width + i.x) * r, c = ((h.y + o) * t.width + h.x) * r, d = 0; d < a.width * r; d++) n[c + d] = g[m + d];
                return t
            }
            var AlphaImage = function() {};
            AlphaImage.create = function(e, t) { return createImage(e, 1, t) }, AlphaImage.resize = function(e, t) { resizeImage(e, t, 1) }, AlphaImage.copy = function(e, t, i, h, a) { copyImage(e, t, i, h, a, 1) };
            var RGBAImage = function() {};
            RGBAImage.create = function(e, t) { return createImage(e, 4, t) }, RGBAImage.resize = function(e, t) { resizeImage(e, t, 4) }, RGBAImage.copy = function(e, t, i, h, a) { copyImage(e, t, i, h, a, 4) }, module.exports = { AlphaImage: AlphaImage, RGBAImage: RGBAImage };
        }, {}],
        252: [function(_dereq_, module, exports) {
            "use strict";

            function polygonIntersectsPolygon(n, t) {
                for (var e = 0; e < n.length; e++)
                    if (polygonContainsPoint(t, n[e])) return !0;
                for (var r = 0; r < t.length; r++)
                    if (polygonContainsPoint(n, t[r])) return !0;
                return !!lineIntersectsLine(n, t)
            }

            function multiPolygonIntersectsBufferedMultiPoint(n, t, e) {
                for (var r = 0; r < n.length; r++)
                    for (var o = n[r], i = 0; i < t.length; i++)
                        for (var l = t[i], u = 0; u < l.length; u++) { var s = l[u]; if (polygonContainsPoint(o, s)) return !0; if (pointIntersectsBufferedLine(s, o, e)) return !0 }
                return !1
            }

            function multiPolygonIntersectsMultiPolygon(n, t) {
                if (1 === n.length && 1 === n[0].length) return multiPolygonContainsPoint(t, n[0][0]);
                for (var e = 0; e < t.length; e++)
                    for (var r = t[e], o = 0; o < r.length; o++)
                        if (multiPolygonContainsPoint(n, r[o])) return !0;
                for (var i = 0; i < n.length; i++) {
                    for (var l = n[i], u = 0; u < l.length; u++)
                        if (multiPolygonContainsPoint(t, l[u])) return !0;
                    for (var s = 0; s < t.length; s++)
                        if (lineIntersectsLine(l, t[s])) return !0
                }
                return !1
            }

            function multiPolygonIntersectsBufferedMultiLine(n, t, e) {
                for (var r = 0; r < t.length; r++)
                    for (var o = t[r], i = 0; i < n.length; i++) {
                        var l = n[i];
                        if (l.length >= 3)
                            for (var u = 0; u < o.length; u++)
                                if (polygonContainsPoint(l, o[u])) return !0;
                        if (lineIntersectsBufferedLine(l, o, e)) return !0
                    }
                return !1
            }

            function lineIntersectsBufferedLine(n, t, e) {
                if (n.length > 1) {
                    if (lineIntersectsLine(n, t)) return !0;
                    for (var r = 0; r < t.length; r++)
                        if (pointIntersectsBufferedLine(t[r], n, e)) return !0
                }
                for (var o = 0; o < n.length; o++)
                    if (pointIntersectsBufferedLine(n[o], t, e)) return !0;
                return !1
            }

            function lineIntersectsLine(n, t) {
                if (0 === n.length || 0 === t.length) return !1;
                for (var e = 0; e < n.length - 1; e++)
                    for (var r = n[e], o = n[e + 1], i = 0; i < t.length - 1; i++) {
                        var l = t[i],
                            u = t[i + 1];
                        if (lineSegmentIntersectsLineSegment(r, o, l, u)) return !0
                    }
                return !1
            }

            function lineSegmentIntersectsLineSegment(n, t, e, r) { return isCounterClockwise(n, e, r) !== isCounterClockwise(t, e, r) && isCounterClockwise(n, t, e) !== isCounterClockwise(n, t, r) }

            function pointIntersectsBufferedLine(n, t, e) { var r = e * e; if (1 === t.length) return n.distSqr(t[0]) < r; for (var o = 1; o < t.length; o++) { if (distToSegmentSquared(n, t[o - 1], t[o]) < r) return !0 } return !1 }

            function distToSegmentSquared(n, t, e) { var r = t.distSqr(e); if (0 === r) return n.distSqr(t); var o = ((n.x - t.x) * (e.x - t.x) + (n.y - t.y) * (e.y - t.y)) / r; return o < 0 ? n.distSqr(t) : o > 1 ? n.distSqr(e) : n.distSqr(e.sub(t)._mult(o)._add(t)) }

            function multiPolygonContainsPoint(n, t) { for (var e, r, o, i = !1, l = 0; l < n.length; l++) { e = n[l]; for (var u = 0, s = e.length - 1; u < e.length; s = u++) r = e[u], o = e[s], r.y > t.y != o.y > t.y && t.x < (o.x - r.x) * (t.y - r.y) / (o.y - r.y) + r.x && (i = !i) } return i }

            function polygonContainsPoint(n, t) {
                for (var e = !1, r = 0, o = n.length - 1; r < n.length; o = r++) {
                    var i = n[r],
                        l = n[o];
                    i.y > t.y != l.y > t.y && t.x < (l.x - i.x) * (t.y - i.y) / (l.y - i.y) + i.x && (e = !e)
                }
                return e
            }
            var ref = _dereq_("./util"),
                isCounterClockwise = ref.isCounterClockwise;
            module.exports = { multiPolygonIntersectsBufferedMultiPoint: multiPolygonIntersectsBufferedMultiPoint, multiPolygonIntersectsMultiPolygon: multiPolygonIntersectsMultiPolygon, multiPolygonIntersectsBufferedMultiLine: multiPolygonIntersectsBufferedMultiLine, polygonIntersectsPolygon: polygonIntersectsPolygon, distToSegmentSquared: distToSegmentSquared };
        }, { "./util": 260 }],
        253: [function(_dereq_, module, exports) {
            "use strict";
            var unicodeBlockLookup = { "Latin-1 Supplement": function(n) { return n >= 128 && n <= 255 }, Arabic: function(n) { return n >= 1536 && n <= 1791 }, "Arabic Supplement": function(n) { return n >= 1872 && n <= 1919 }, "Arabic Extended-A": function(n) { return n >= 2208 && n <= 2303 }, "Hangul Jamo": function(n) { return n >= 4352 && n <= 4607 }, "Unified Canadian Aboriginal Syllabics": function(n) { return n >= 5120 && n <= 5759 }, "Unified Canadian Aboriginal Syllabics Extended": function(n) { return n >= 6320 && n <= 6399 }, "General Punctuation": function(n) { return n >= 8192 && n <= 8303 }, "Letterlike Symbols": function(n) { return n >= 8448 && n <= 8527 }, "Number Forms": function(n) { return n >= 8528 && n <= 8591 }, "Miscellaneous Technical": function(n) { return n >= 8960 && n <= 9215 }, "Control Pictures": function(n) { return n >= 9216 && n <= 9279 }, "Optical Character Recognition": function(n) { return n >= 9280 && n <= 9311 }, "Enclosed Alphanumerics": function(n) { return n >= 9312 && n <= 9471 }, "Geometric Shapes": function(n) { return n >= 9632 && n <= 9727 }, "Miscellaneous Symbols": function(n) { return n >= 9728 && n <= 9983 }, "Miscellaneous Symbols and Arrows": function(n) { return n >= 11008 && n <= 11263 }, "CJK Radicals Supplement": function(n) { return n >= 11904 && n <= 12031 }, "Kangxi Radicals": function(n) { return n >= 12032 && n <= 12255 }, "Ideographic Description Characters": function(n) { return n >= 12272 && n <= 12287 }, "CJK Symbols and Punctuation": function(n) { return n >= 12288 && n <= 12351 }, Hiragana: function(n) { return n >= 12352 && n <= 12447 }, Katakana: function(n) { return n >= 12448 && n <= 12543 }, Bopomofo: function(n) { return n >= 12544 && n <= 12591 }, "Hangul Compatibility Jamo": function(n) { return n >= 12592 && n <= 12687 }, Kanbun: function(n) { return n >= 12688 && n <= 12703 }, "Bopomofo Extended": function(n) { return n >= 12704 && n <= 12735 }, "CJK Strokes": function(n) { return n >= 12736 && n <= 12783 }, "Katakana Phonetic Extensions": function(n) { return n >= 12784 && n <= 12799 }, "Enclosed CJK Letters and Months": function(n) { return n >= 12800 && n <= 13055 }, "CJK Compatibility": function(n) { return n >= 13056 && n <= 13311 }, "CJK Unified Ideographs Extension A": function(n) { return n >= 13312 && n <= 19903 }, "Yijing Hexagram Symbols": function(n) { return n >= 19904 && n <= 19967 }, "CJK Unified Ideographs": function(n) { return n >= 19968 && n <= 40959 }, "Yi Syllables": function(n) { return n >= 40960 && n <= 42127 }, "Yi Radicals": function(n) { return n >= 42128 && n <= 42191 }, "Hangul Jamo Extended-A": function(n) { return n >= 43360 && n <= 43391 }, "Hangul Syllables": function(n) { return n >= 44032 && n <= 55215 }, "Hangul Jamo Extended-B": function(n) { return n >= 55216 && n <= 55295 }, "Private Use Area": function(n) { return n >= 57344 && n <= 63743 }, "CJK Compatibility Ideographs": function(n) { return n >= 63744 && n <= 64255 }, "Arabic Presentation Forms-A": function(n) { return n >= 64336 && n <= 65023 }, "Vertical Forms": function(n) { return n >= 65040 && n <= 65055 }, "CJK Compatibility Forms": function(n) { return n >= 65072 && n <= 65103 }, "Small Form Variants": function(n) { return n >= 65104 && n <= 65135 }, "Arabic Presentation Forms-B": function(n) { return n >= 65136 && n <= 65279 }, "Halfwidth and Fullwidth Forms": function(n) { return n >= 65280 && n <= 65519 } };
            module.exports = unicodeBlockLookup;
        }, {}],
        254: [function(_dereq_, module, exports) {
            "use strict";
            var LRUCache = function(t, e) { this.max = t, this.onRemove = e, this.reset() };
            LRUCache.prototype.reset = function() { var t = this; for (var e in t.data) t.onRemove(t.data[e]); return this.data = {}, this.order = [], this }, LRUCache.prototype.add = function(t, e) {
                if (this.has(t)) this.order.splice(this.order.indexOf(t), 1), this.data[t] = e, this.order.push(t);
                else if (this.data[t] = e, this.order.push(t), this.order.length > this.max) {
                    var r = this.get(this.order[0]);
                    r && this.onRemove(r)
                }
                return this
            }, LRUCache.prototype.has = function(t) { return t in this.data }, LRUCache.prototype.keys = function() { return this.order }, LRUCache.prototype.get = function(t) { if (!this.has(t)) return null; var e = this.data[t]; return delete this.data[t], this.order.splice(this.order.indexOf(t), 1), e }, LRUCache.prototype.getWithoutRemoving = function(t) { return this.has(t) ? this.data[t] : null }, LRUCache.prototype.remove = function(t) { if (!this.has(t)) return this; var e = this.data[t]; return delete this.data[t], this.onRemove(e), this.order.splice(this.order.indexOf(t), 1), this }, LRUCache.prototype.setMaxSize = function(t) {
                var e = this;
                for (this.max = t; this.order.length > this.max;) {
                    var r = e.get(e.order[0]);
                    r && e.onRemove(r)
                }
                return this
            }, module.exports = LRUCache;
        }, {}],
        255: [function(_dereq_, module, exports) {
            "use strict";

            function makeAPIURL(r, e) { var t = parseUrl(config.API_URL); if (r.protocol = t.protocol, r.authority = t.authority, "/" !== t.path && (r.path = "" + t.path + r.path), !config.REQUIRE_ACCESS_TOKEN) return formatUrl(r); if (!(e = e || config.ACCESS_TOKEN)) throw new Error("An API access token is required to use Mapbox GL. " + help); if ("s" === e[0]) throw new Error("Use a public access token (pk.*) with Mapbox GL, not a secret access token (sk.*). " + help); return r.params.push("access_token=" + e), formatUrl(r) }

            function isMapboxURL(r) { return 0 === r.indexOf("mapbox:") }

            function replaceTempAccessToken(r) { for (var e = 0; e < r.length; e++) 0 === r[e].indexOf("access_token=tk.") && (r[e] = "access_token=" + (config.ACCESS_TOKEN || "")) }

            function parseUrl(r) { var e = r.match(urlRe); if (!e) throw new Error("Unable to parse URL object"); return { protocol: e[1], authority: e[2], path: e[3] || "/", params: e[4] ? e[4].split("&") : [] } }

            function formatUrl(r) { var e = r.params.length ? "?" + r.params.join("&") : ""; return r.protocol + "://" + r.authority + r.path + e }
            var config = _dereq_("./config"),
                browser = _dereq_("./browser"),
                help = "See https://www.mapbox.com/api-documentation/#access-tokens";
            exports.isMapboxURL = isMapboxURL, exports.normalizeStyleURL = function(r, e) { if (!isMapboxURL(r)) return r; var t = parseUrl(r); return t.path = "/styles/v1" + t.path, makeAPIURL(t, e) }, exports.normalizeGlyphsURL = function(r, e) { if (!isMapboxURL(r)) return r; var t = parseUrl(r); return t.path = "/fonts/v1" + t.path, makeAPIURL(t, e) }, exports.normalizeSourceURL = function(r, e) { if (!isMapboxURL(r)) return r; var t = parseUrl(r); return t.path = "/v4/" + t.authority + ".json", t.params.push("secure"), makeAPIURL(t, e) }, exports.normalizeSpriteURL = function(r, e, t, a) { var o = parseUrl(r); return isMapboxURL(r) ? (o.path = "/styles/v1" + o.path + "/sprite" + e + t, makeAPIURL(o, a)) : (o.path += "" + e + t, formatUrl(o)) };
            var imageExtensionRe = /(\.(png|jpg)\d*)(?=$)/;
            exports.normalizeTileURL = function(r, e, t) {
                if (!e || !isMapboxURL(e)) return r;
                var a = parseUrl(r),
                    o = browser.devicePixelRatio >= 2 || 512 === t ? "@2x" : "",
                    p = browser.supportsWebp ? ".webp" : "$1";
                return a.path = a.path.replace(imageExtensionRe, "" + o + p), replaceTempAccessToken(a.params), formatUrl(a)
            };
            var urlRe = /^(\w+):\/\/([^\/?]*)(\/[^?]+)?\??(.+)?/;
        }, { "./browser": 240, "./config": 244 }],
        256: [function(_dereq_, module, exports) {
            "use strict";
            var isChar = _dereq_("./is_char_in_unicode_block");
            module.exports.allowsIdeographicBreaking = function(a) { for (var i = 0, r = a; i < r.length; i += 1) { var s = r[i]; if (!exports.charAllowsIdeographicBreaking(s.charCodeAt(0))) return !1 } return !0 }, module.exports.allowsVerticalWritingMode = function(a) { for (var i = 0, r = a; i < r.length; i += 1) { var s = r[i]; if (exports.charHasUprightVerticalOrientation(s.charCodeAt(0))) return !0 } return !1 }, module.exports.allowsLetterSpacing = function(a) { for (var i = 0, r = a; i < r.length; i += 1) { var s = r[i]; if (!exports.charAllowsLetterSpacing(s.charCodeAt(0))) return !1 } return !0 }, module.exports.charAllowsLetterSpacing = function(a) { return !isChar.Arabic(a) && (!isChar["Arabic Supplement"](a) && (!isChar["Arabic Extended-A"](a) && (!isChar["Arabic Presentation Forms-A"](a) && !isChar["Arabic Presentation Forms-B"](a)))) }, module.exports.charAllowsIdeographicBreaking = function(a) { return !(a < 11904) && (!!isChar["Bopomofo Extended"](a) || (!!isChar.Bopomofo(a) || (!!isChar["CJK Compatibility Forms"](a) || (!!isChar["CJK Compatibility Ideographs"](a) || (!!isChar["CJK Compatibility"](a) || (!!isChar["CJK Radicals Supplement"](a) || (!!isChar["CJK Strokes"](a) || (!!isChar["CJK Symbols and Punctuation"](a) || (!!isChar["CJK Unified Ideographs Extension A"](a) || (!!isChar["CJK Unified Ideographs"](a) || (!!isChar["Enclosed CJK Letters and Months"](a) || (!!isChar["Halfwidth and Fullwidth Forms"](a) || (!!isChar.Hiragana(a) || (!!isChar["Ideographic Description Characters"](a) || (!!isChar["Kangxi Radicals"](a) || (!!isChar["Katakana Phonetic Extensions"](a) || (!!isChar.Katakana(a) || (!!isChar["Vertical Forms"](a) || (!!isChar["Yi Radicals"](a) || !!isChar["Yi Syllables"](a)))))))))))))))))))) }, exports.charHasUprightVerticalOrientation = function(a) { return 746 === a || 747 === a || !(a < 4352) && (!!isChar["Bopomofo Extended"](a) || (!!isChar.Bopomofo(a) || (!(!isChar["CJK Compatibility Forms"](a) || a >= 65097 && a <= 65103) || (!!isChar["CJK Compatibility Ideographs"](a) || (!!isChar["CJK Compatibility"](a) || (!!isChar["CJK Radicals Supplement"](a) || (!!isChar["CJK Strokes"](a) || (!(!isChar["CJK Symbols and Punctuation"](a) || a >= 12296 && a <= 12305 || a >= 12308 && a <= 12319 || 12336 === a) || (!!isChar["CJK Unified Ideographs Extension A"](a) || (!!isChar["CJK Unified Ideographs"](a) || (!!isChar["Enclosed CJK Letters and Months"](a) || (!!isChar["Hangul Compatibility Jamo"](a) || (!!isChar["Hangul Jamo Extended-A"](a) || (!!isChar["Hangul Jamo Extended-B"](a) || (!!isChar["Hangul Jamo"](a) || (!!isChar["Hangul Syllables"](a) || (!!isChar.Hiragana(a) || (!!isChar["Ideographic Description Characters"](a) || (!!isChar.Kanbun(a) || (!!isChar["Kangxi Radicals"](a) || (!!isChar["Katakana Phonetic Extensions"](a) || (!(!isChar.Katakana(a) || 12540 === a) || (!(!isChar["Halfwidth and Fullwidth Forms"](a) || 65288 === a || 65289 === a || 65293 === a || a >= 65306 && a <= 65310 || 65339 === a || 65341 === a || 65343 === a || a >= 65371 && a <= 65503 || 65507 === a || a >= 65512 && a <= 65519) || (!(!isChar["Small Form Variants"](a) || a >= 65112 && a <= 65118 || a >= 65123 && a <= 65126) || (!!isChar["Unified Canadian Aboriginal Syllabics"](a) || (!!isChar["Unified Canadian Aboriginal Syllabics Extended"](a) || (!!isChar["Vertical Forms"](a) || (!!isChar["Yijing Hexagram Symbols"](a) || (!!isChar["Yi Syllables"](a) || !!isChar["Yi Radicals"](a)))))))))))))))))))))))))))))) }, exports.charHasNeutralVerticalOrientation = function(a) { return !(!isChar["Latin-1 Supplement"](a) || 167 !== a && 169 !== a && 174 !== a && 177 !== a && 188 !== a && 189 !== a && 190 !== a && 215 !== a && 247 !== a) || (!(!isChar["General Punctuation"](a) || 8214 !== a && 8224 !== a && 8225 !== a && 8240 !== a && 8241 !== a && 8251 !== a && 8252 !== a && 8258 !== a && 8263 !== a && 8264 !== a && 8265 !== a && 8273 !== a) || (!!isChar["Letterlike Symbols"](a) || (!!isChar["Number Forms"](a) || (!(!isChar["Miscellaneous Technical"](a) || !(a >= 8960 && a <= 8967 || a >= 8972 && a <= 8991 || a >= 8996 && a <= 9e3 || 9003 === a || a >= 9085 && a <= 9114 || a >= 9150 && a <= 9165 || 9167 === a || a >= 9169 && a <= 9179 || a >= 9186 && a <= 9215)) || (!(!isChar["Control Pictures"](a) || 9251 === a) || (!!isChar["Optical Character Recognition"](a) || (!!isChar["Enclosed Alphanumerics"](a) || (!!isChar["Geometric Shapes"](a) || (!(!isChar["Miscellaneous Symbols"](a) || a >= 9754 && a <= 9759) || (!(!isChar["Miscellaneous Symbols and Arrows"](a) || !(a >= 11026 && a <= 11055 || a >= 11088 && a <= 11097 || a >= 11192 && a <= 11243)) || (!!isChar["CJK Symbols and Punctuation"](a) || (!!isChar.Katakana(a) || (!!isChar["Private Use Area"](a) || (!!isChar["CJK Compatibility Forms"](a) || (!!isChar["Small Form Variants"](a) || (!!isChar["Halfwidth and Fullwidth Forms"](a) || (8734 === a || 8756 === a || 8757 === a || a >= 9984 && a <= 10087 || a >= 10102 && a <= 10131 || 65532 === a || 65533 === a))))))))))))))))) }, exports.charHasRotatedVerticalOrientation = function(a) { return !(exports.charHasUprightVerticalOrientation(a) || exports.charHasNeutralVerticalOrientation(a)) };
        }, { "./is_char_in_unicode_block": 253 }],
        257: [function(_dereq_, module, exports) {
            "use strict";
            var LngLat = _dereq_("../geo/lng_lat");
            module.exports = function(n, t, l) {
                if (n = new LngLat(n.lng, n.lat), t) {
                    var a = new LngLat(n.lng - 360, n.lat),
                        i = new LngLat(n.lng + 360, n.lat),
                        o = l.locationPoint(n).distSqr(t);
                    l.locationPoint(a).distSqr(t) < o ? n = a : l.locationPoint(i).distSqr(t) < o && (n = i)
                }
                for (; Math.abs(n.lng - l.center.lng) > 180;) {
                    var e = l.locationPoint(n);
                    if (e.x >= 0 && e.y >= 0 && e.x <= l.width && e.y <= l.height) break;
                    n.lng > l.center.lng ? n.lng -= 360 : n.lng += 360
                }
                return n
            };
        }, { "../geo/lng_lat": 68 }],
        258: [function(_dereq_, module, exports) {
            "use strict";

            function createStructArrayType(t) {
                var e = JSON.stringify(t);
                if (structArrayTypeCache[e]) return structArrayTypeCache[e];
                var r = void 0 === t.alignment ? 1 : t.alignment,
                    n = 0,
                    i = 0,
                    a = ["Uint8"],
                    o = t.members.map(function(t) {
                        a.indexOf(t.type) < 0 && a.push(t.type);
                        var e = sizeOf(t.type),
                            o = n = align(n, Math.max(r, e)),
                            s = t.components || 1;
                        return i = Math.max(i, e), n += e * s, { name: t.name, type: t.type, components: s, offset: o }
                    }),
                    s = align(n, Math.max(i, r)),
                    p = function(t) {
                        function e() { t.apply(this, arguments) }
                        return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                    }(Struct);
                p.prototype.alignment = r, p.prototype.size = s;
                for (var y = 0, c = o; y < c.length; y += 1)
                    for (var h = c[y], u = 0; u < h.components; u++) {
                        var f = h.name;
                        if (h.components > 1 && (f += u), f in p.prototype) throw new Error(f + " is a reserved name and cannot be used as a member name.");
                        Object.defineProperty(p.prototype, f, createAccessors(h, u))
                    }
                var m = function(t) {
                    function e() { t.apply(this, arguments) }
                    return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
                }(StructArray);
                m.prototype.members = o, m.prototype.StructType = p, m.prototype.bytesPerElement = s, m.prototype.emplaceBack = createEmplaceBack(o, s), m.prototype._usedTypes = a, structArrayTypeCache[e] = m;
                for (var l = 0, A = o; l < A.length; l += 1)
                    for (var g = A[l], v = 0; v < g.components; v++) {
                        var _ = "get" + g.name;
                        if (g.components > 1 && (_ += v), _ in m.prototype) throw new Error(_ + " is a reserved name and cannot be used as a member name.");
                        m.prototype[_] = createIndexedMemberComponentGetter(g, v, s)
                    }
                return m
            }

            function align(t, e) { return Math.ceil(t / e) * e }

            function sizeOf(t) { return viewTypes[t].BYTES_PER_ELEMENT }

            function getArrayViewName(t) { return t.toLowerCase() }

            function createEmplaceBack(t, e) {
                for (var r = [], n = [], i = "var i = this.length;\nthis.resize(this.length + 1);\n", a = 0, o = t; a < o.length; a += 1) {
                    var s = o[a],
                        p = sizeOf(s.type);
                    r.indexOf(p) < 0 && (r.push(p), i += "var o" + p.toFixed(0) + " = i * " + (e / p).toFixed(0) + ";\n");
                    for (var y = 0; y < s.components; y++) {
                        var c = "v" + n.length,
                            h = "o" + p.toFixed(0) + " + " + (s.offset / p + y).toFixed(0);
                        i += "this." + getArrayViewName(s.type) + "[" + h + "] = " + c + ";\n", n.push(c)
                    }
                }
                return i += "return i;", new Function(n.toString(), i)
            }

            function createMemberComponentString(t, e) {
                var r = "this._pos" + sizeOf(t.type).toFixed(0),
                    n = (t.offset / sizeOf(t.type) + e).toFixed(0),
                    i = r + " + " + n;
                return "this._structArray." + getArrayViewName(t.type) + "[" + i + "]"
            }

            function createIndexedMemberComponentGetter(t, e, r) {
                var n = (t.offset / sizeOf(t.type) + e).toFixed(0),
                    i = r / sizeOf(t.type);
                return new Function("index", "return this." + getArrayViewName(t.type) + "[index * " + i + " + " + n + "];")
            }

            function createAccessors(t, e) { var r = createMemberComponentString(t, e); return { get: new Function("return " + r + ";"), set: new Function("x", r + " = x;") } }
            module.exports = createStructArrayType;
            var viewTypes = { Int8: Int8Array, Uint8: Uint8Array, Int16: Int16Array, Uint16: Uint16Array, Int32: Int32Array, Uint32: Uint32Array, Float32: Float32Array },
                Struct = function(t, e) { this._structArray = t, this._pos1 = e * this.size, this._pos2 = this._pos1 / 2, this._pos4 = this._pos1 / 4, this._pos8 = this._pos1 / 8 },
                DEFAULT_CAPACITY = 128,
                RESIZE_MULTIPLIER = 5,
                StructArray = function(t) { this.isTransferred = !1, void 0 !== t ? (this.arrayBuffer = t.arrayBuffer, this.length = t.length, this.capacity = this.arrayBuffer.byteLength / this.bytesPerElement, this._refreshViews()) : (this.capacity = -1, this.resize(0)) };
            StructArray.serialize = function() { return { members: this.prototype.members, alignment: this.prototype.StructType.prototype.alignment } }, StructArray.prototype.serialize = function(t) { return this._trim(), t && (this.isTransferred = !0, t.push(this.arrayBuffer)), { length: this.length, arrayBuffer: this.arrayBuffer } }, StructArray.prototype.get = function(t) { return new this.StructType(this, t) }, StructArray.prototype._trim = function() { this.length !== this.capacity && (this.capacity = this.length, this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement), this._refreshViews()) }, StructArray.prototype.clear = function() { this.length = 0 }, StructArray.prototype.resize = function(t) {
                if (this.length = t, t > this.capacity) {
                    this.capacity = Math.max(t, Math.floor(this.capacity * RESIZE_MULTIPLIER), DEFAULT_CAPACITY), this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);
                    var e = this.uint8;
                    this._refreshViews(), e && this.uint8.set(e)
                }
            }, StructArray.prototype._refreshViews = function() {
                for (var t = this, e = 0, r = t._usedTypes; e < r.length; e += 1) {
                    var n = r[e];
                    t[getArrayViewName(n)] = new viewTypes[n](t.arrayBuffer)
                }
            }, StructArray.prototype.toArray = function(t, e) {
                for (var r = this, n = [], i = t; i < e; i++) {
                    var a = r.get(i);
                    n.push(a)
                }
                return n
            };
            var structArrayTypeCache = {};
        }, {}],
        259: [function(_dereq_, module, exports) {
            "use strict";

            function resolveTokens(e, n) { return n.replace(/{([^{}]+)}/g, function(n, r) { return r in e ? String(e[r]) : "" }) }
            module.exports = resolveTokens;
        }, {}],
        260: [function(_dereq_, module, exports) {
            "use strict";
            var UnitBezier = _dereq_("@mapbox/unitbezier"),
                Coordinate = _dereq_("../geo/coordinate"),
                Point = _dereq_("@mapbox/point-geometry");
            exports.easeCubicInOut = function(r) {
                if (r <= 0) return 0;
                if (r >= 1) return 1;
                var e = r * r,
                    t = e * r;
                return 4 * (r < .5 ? t : 3 * (r - e) + t - .75)
            }, exports.bezier = function(r, e, t, n) { var o = new UnitBezier(r, e, t, n); return function(r) { return o.solve(r) } }, exports.ease = exports.bezier(.25, .1, .25, 1), exports.clamp = function(r, e, t) { return Math.min(t, Math.max(e, r)) }, exports.wrap = function(r, e, t) {
                var n = t - e,
                    o = ((r - e) % n + n) % n + e;
                return o === e ? t : o
            }, exports.asyncAll = function(r, e, t) {
                if (!r.length) return t(null, []);
                var n = r.length,
                    o = new Array(r.length),
                    a = null;
                r.forEach(function(r, i) { e(r, function(r, e) { r && (a = r), o[i] = e, 0 == --n && t(a, o) }) })
            }, exports.values = function(r) { var e = []; for (var t in r) e.push(r[t]); return e }, exports.keysDifference = function(r, e) { var t = []; for (var n in r) n in e || t.push(n); return t }, exports.extend = function(r) { for (var e = [], t = arguments.length - 1; t-- > 0;) e[t] = arguments[t + 1]; for (var n = 0, o = e; n < o.length; n += 1) { var a = o[n]; for (var i in a) r[i] = a[i] } return r }, exports.pick = function(r, e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var o = e[n];
                    o in r && (t[o] = r[o])
                }
                return t
            };
            var id = 1;
            exports.uniqueId = function() { return id++ }, exports.bindAll = function(r, e) { r.forEach(function(r) { e[r] && (e[r] = e[r].bind(e)) }) }, exports.getCoordinatesCenter = function(r) {
                for (var e = 1 / 0, t = 1 / 0, n = -1 / 0, o = -1 / 0, a = 0; a < r.length; a++) e = Math.min(e, r[a].column), t = Math.min(t, r[a].row), n = Math.max(n, r[a].column), o = Math.max(o, r[a].row);
                var i = n - e,
                    u = o - t,
                    s = Math.max(i, u),
                    c = Math.max(0, Math.floor(-Math.log(s) / Math.LN2));
                return new Coordinate((e + n) / 2, (t + o) / 2, 0).zoomTo(c)
            }, exports.endsWith = function(r, e) { return -1 !== r.indexOf(e, r.length - e.length) }, exports.mapObject = function(r, e, t) {
                var n = this,
                    o = {};
                for (var a in r) o[a] = e.call(t || n, r[a], a, r);
                return o
            }, exports.filterObject = function(r, e, t) {
                var n = this,
                    o = {};
                for (var a in r) e.call(t || n, r[a], a, r) && (o[a] = r[a]);
                return o
            }, exports.deepEqual = function(r, e) {
                if (Array.isArray(r)) {
                    if (!Array.isArray(e) || r.length !== e.length) return !1;
                    for (var t = 0; t < r.length; t++)
                        if (!exports.deepEqual(r[t], e[t])) return !1;
                    return !0
                }
                if ("object" == typeof r && null !== r && null !== e) {
                    if ("object" != typeof e) return !1;
                    if (Object.keys(r).length !== Object.keys(e).length) return !1;
                    for (var n in r)
                        if (!exports.deepEqual(r[n], e[n])) return !1;
                    return !0
                }
                return r === e
            }, exports.clone = function(r) { return Array.isArray(r) ? r.map(exports.clone) : "object" == typeof r && r ? exports.mapObject(r, exports.clone) : r }, exports.arraysIntersect = function(r, e) {
                for (var t = 0; t < r.length; t++)
                    if (e.indexOf(r[t]) >= 0) return !0;
                return !1
            };
            var warnOnceHistory = {};
            exports.warnOnce = function(r) { warnOnceHistory[r] || ("undefined" != typeof console && console.warn(r), warnOnceHistory[r] = !0) }, exports.isCounterClockwise = function(r, e, t) { return (t.y - r.y) * (e.x - r.x) > (e.y - r.y) * (t.x - r.x) }, exports.calculateSignedArea = function(r) { for (var e = 0, t = 0, n = r.length, o = n - 1, a = void 0, i = void 0; t < n; o = t++) a = r[t], i = r[o], e += (i.x - a.x) * (a.y + i.y); return e }, exports.isClosedPolygon = function(r) {
                if (r.length < 4) return !1;
                var e = r[0],
                    t = r[r.length - 1];
                return !(Math.abs(e.x - t.x) > 0 || Math.abs(e.y - t.y) > 0) && Math.abs(exports.calculateSignedArea(r)) > .01
            }, exports.sphericalToCartesian = function(r) {
                var e = r[0],
                    t = r[1],
                    n = r[2];
                return t += 90, t *= Math.PI / 180, n *= Math.PI / 180, [e * Math.cos(t) * Math.sin(n), e * Math.sin(t) * Math.sin(n), e * Math.cos(n)]
            }, exports.parseCacheControl = function(r) {
                var e = /(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,
                    t = {};
                if (r.replace(e, function(r, e, n, o) { var a = n || o; return t[e] = !a || a.toLowerCase(), "" }), t["max-age"]) {
                    var n = parseInt(t["max-age"], 10);
                    isNaN(n) ? delete t["max-age"] : t["max-age"] = n
                }
                return t
            };
        }, { "../geo/coordinate": 67, "@mapbox/point-geometry": 2, "@mapbox/unitbezier": 5 }],
        261: [function(_dereq_, module, exports) {
            "use strict";
            var Feature = function(e, t, r, o) { this.type = "Feature", this._vectorTileFeature = e, e._z = t, e._x = r, e._y = o, this.properties = e.properties, null != e.id && (this.id = e.id) },
                prototypeAccessors = { geometry: {} };
            prototypeAccessors.geometry.get = function() { return void 0 === this._geometry && (this._geometry = this._vectorTileFeature.toGeoJSON(this._vectorTileFeature._x, this._vectorTileFeature._y, this._vectorTileFeature._z).geometry), this._geometry }, prototypeAccessors.geometry.set = function(e) { this._geometry = e }, Feature.prototype.toJSON = function() {
                var e = this,
                    t = { geometry: this.geometry };
                for (var r in e) "_geometry" !== r && "_vectorTileFeature" !== r && (t[r] = e[r]);
                return t
            }, Object.defineProperties(Feature.prototype, prototypeAccessors), module.exports = Feature;
        }, {}],
        262: [function(_dereq_, module, exports) {
            "use strict";
            var scriptDetection = _dereq_("./script_detection");
            module.exports = function(t) {
                for (var o = "", e = 0; e < t.length; e++) {
                    var r = t.charCodeAt(e + 1) || null,
                        l = t.charCodeAt(e - 1) || null;
                    (!r || !scriptDetection.charHasRotatedVerticalOrientation(r) || module.exports.lookup[t[e + 1]]) && (!l || !scriptDetection.charHasRotatedVerticalOrientation(l) || module.exports.lookup[t[e - 1]]) && module.exports.lookup[t[e]] ? o += module.exports.lookup[t[e]] : o += t[e]
                }
                return o
            }, module.exports.lookup = { "!": "ï¸•", "#": "ï¼ƒ", $: "ï¼„", "%": "ï¼…", "&": "ï¼†", "(": "ï¸µ", ")": "ï¸¶", "*": "ï¼Š", "+": "ï¼‹", ",": "ï¸", "-": "ï¸²", ".": "ãƒ»", "/": "ï¼", ":": "ï¸“", ";": "ï¸”", "<": "ï¸¿", "=": "ï¼", ">": "ï¹€", "?": "ï¸–", "@": "ï¼ ", "[": "ï¹‡", "\\": "ï¼¼", "]": "ï¹ˆ", "^": "ï¼¾", _: "ï¸³", "`": "ï½€", "{": "ï¸·", "|": "â€•", "}": "ï¸¸", "~": "ï½ž", "Â¢": "ï¿ ", "Â£": "ï¿¡", "Â¥": "ï¿¥", "Â¦": "ï¿¤", "Â¬": "ï¿¢", "Â¯": "ï¿£", "â€“": "ï¸²", "â€”": "ï¸±", "â€˜": "ï¹ƒ", "â€™": "ï¹„", "â€œ": "ï¹", "â€": "ï¹‚", "â€¦": "ï¸™", "â€§": "ãƒ»", "â‚©": "ï¿¦", "ã€": "ï¸‘", "ã€‚": "ï¸’", "ã€ˆ": "ï¸¿", "ã€‰": "ï¹€", "ã€Š": "ï¸½", "ã€‹": "ï¸¾", "ã€Œ": "ï¹", "ã€": "ï¹‚", "ã€Ž": "ï¹ƒ", "ã€": "ï¹„", "ã€": "ï¸»", "ã€‘": "ï¸¼", "ã€”": "ï¸¹", "ã€•": "ï¸º", "ã€–": "ï¸—", "ã€—": "ï¸˜", "ï¼": "ï¸•", "ï¼ˆ": "ï¸µ", "ï¼‰": "ï¸¶", "ï¼Œ": "ï¸", "ï¼": "ï¸²", "ï¼Ž": "ãƒ»", "ï¼š": "ï¸“", "ï¼›": "ï¸”", "ï¼œ": "ï¸¿", "ï¼ž": "ï¹€", "ï¼Ÿ": "ï¸–", "ï¼»": "ï¹‡", "ï¼½": "ï¹ˆ", "ï¼¿": "ï¸³", "ï½›": "ï¸·", "ï½œ": "â€•", "ï½": "ï¸¸", "ï½Ÿ": "ï¸µ", "ï½ ": "ï¸¶", "ï½¡": "ï¸’", "ï½¢": "ï¹", "ï½£": "ï¹‚" };
        }, { "./script_detection": 256 }],
        263: [function(_dereq_, module, exports) {
            "use strict";
            var WebWorker = _dereq_("./web_worker"),
                WorkerPool = function() { this.active = {} };
            WorkerPool.prototype.acquire = function(r) { var e = this; if (!this.workers) { var o = _dereq_("../").workerCount; for (this.workers = []; this.workers.length < o;) e.workers.push(new WebWorker) } return this.active[r] = !0, this.workers.slice() }, WorkerPool.prototype.release = function(r) { delete this.active[r], 0 === Object.keys(this.active).length && (this.workers.forEach(function(r) { r.terminate() }), this.workers = null) }, module.exports = WorkerPool;
        }, { "../": 73, "./web_worker": 241 }]
    }, {}, [73])(73)
});


//# sourceMappingURL=mapbox-gl.js.map