!(function (t, e, i) {
  "use strict";
  function n(t) {
    var e = Object.create(null);
    return (
      t &&
        Object.keys(t).forEach(function (i) {
          if ("default" !== i) {
            var n = Object.getOwnPropertyDescriptor(t, i);
            Object.defineProperty(
              e,
              i,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return t[i];
                    },
                  }
            );
          }
        }),
      (e.default = t),
      Object.freeze(e)
    );
  }
  var r = n(t),
    o = n(e),
    s = n(i),
    a = (function (t) {
      function e(e, i, n) {
        t.call(this), (this.$ = e), (this.commonData = i), (this.gameData = n);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.nextScene = function () {
          this.emit(e.Event.NEXT);
        }),
        (e.prototype.quitGame = function () {
          this.emit(e.Event.QUIT);
        }),
        (e.prototype.sendScore = function (t) {
          this.emit(e.Event.SEND_SCORE, t);
        }),
        (e.prototype.changeLanguage = function (t) {
          this.emit(e.Event.LANGUAGE, t);
        }),
        e
      );
    })(r.Container);
  a.Event = {
    NEXT: "next",
    LANGUAGE: "language",
    QUIT: "quit",
    SEND_SCORE: "sendScore",
  };
  var h = function () {};
  (h.play = function (t, e, i, n) {
    void 0 === i && (i = 1),
      void 0 === n && (n = 1),
      t.vars.additional.sound &&
        (t.resources.sounds[e].volume(i),
        t.resources.sounds[e].rate(n),
        t.resources.sounds[e].play());
  }),
    (h.stop = function (t, e) {
      t.resources.sounds[e].stop();
    }),
    (h.playBGM = function (t, e, i) {
      void 0 === i && (i = 1),
        h.stop(t, e),
        t.vars.additional.sound &&
          (t.resources.sounds[e].loop(!0),
          t.resources.sounds[e].volume(i),
          t.resources.sounds[e].play());
    }),
    (h.muteBGM = function (t, e) {
      t.resources.sounds[e].volume(0);
    }),
    (h.unmuteBGM = function (t, e, i) {
      void 0 === i && (i = 1), t.resources.sounds[e].volume(i);
    }),
    (h.harmony = function (t) {
      return [1, 1.122462, 1.259921, 1.334839, 1.498307, 1.681792, 1.887748, 2][
        t
      ];
    });
  var c = (function (t) {
      function e(e, i, n) {
        var r = this;
        t.call(this);
        var s = e.vars.env.languages;
        if (((this.buttonContainer = new o.Container()), !(s.length < 2))) {
          var a = new u(
            e,
            e.resources.spritesheets.langui.button,
            e.resources.spritesheets.langui.close
          );
          a.scale.set(0.8);
          var h = a.width / 2 + i,
            c = a.height / 2 + n;
          i <= 0 && (h = e.vars.additional.width - a.width / 2 + i),
            n <= 0 && (c = e.vars.additional.height - a.height / 2 + n),
            this.buttonContainer.position.set(h, c);
          var p = new o.Graphics();
          p.beginFill(0, 0.75),
            p.drawRect(0, 0, e.vars.additional.width, e.vars.additional.height),
            p.endFill(),
            (p.interactive = !0);
          for (
            var l = new o.Sprite(e.resources.spritesheets.langui.pop),
              d = new o.Sprite(e.resources.spritesheets.langui.title),
              f = e.vars.api.getLanguage(),
              v = [],
              g = function (t) {
                var i = s[t],
                  n = f == i,
                  a = new u(
                    e,
                    e.resources.spritesheets.langui[n ? "select" : "other"]
                  ),
                  h = new o.Sprite(e.resources.spritesheets.lang[i]);
                h.anchor.set(0.5);
                (a.y = 180 * (t - (s.length - 1) / 2)),
                  a.on("buttontap", function () {
                    n || r.emit("changeLang", i);
                  }),
                  a.sprite.addChild(h),
                  v.push(a);
              },
              _ = 0;
            _ < s.length;
            _++
          )
            g(_);
          l.anchor.set(0.5),
            d.anchor.set(0.5),
            l.scale.set(0.8),
            l.position.set(
              e.vars.additional.width / 2,
              e.vars.additional.height / 2
            ),
            (d.y = -380),
            (p.visible = !1),
            (l.visible = !1),
            a.on("buttontap", function () {
              var t = !a.switchToggle();
              (p.visible = t), (l.visible = t);
            }),
            this.addChild(p),
            this.buttonContainer.addChild(a),
            this.addChild(this.buttonContainer),
            l.addChild(d),
            this.addChild(l);
          for (var y = 0; y < v.length; y++) l.addChild(v[y]);
          return this;
        }
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    u = (function (t) {
      function e(e, i, n) {
        var r = this;
        void 0 === n && (n = o.Texture.EMPTY),
          t.call(this),
          (this.onTexture = o.Texture.EMPTY),
          (this.offTexture = o.Texture.EMPTY),
          (this.enable = !0),
          (this._toggle = !1),
          (this.sprite = new o.Sprite(i)),
          this.sprite.anchor.set(0.5),
          (this.collider = new o.Graphics()),
          this.collider.beginFill(255, 0.4),
          this.collider.drawRect(
            -this.sprite.width / 2,
            -this.sprite.height / 2,
            this.sprite.width,
            this.sprite.height
          ),
          this.collider.endFill(),
          (this.collider.alpha = 0),
          n != o.Texture.EMPTY &&
            ((this._toggle = !0), (this.onTexture = i), (this.offTexture = n));
        var s = !1,
          a = 0;
        (this.collider.interactive = !0),
          this.collider.on("pointertap", function () {
            r.enable && (r.emit("buttontap"), h.play(e, "button"));
          }),
          this.collider.on("pointerdown", function () {
            r.enable && (s = !0);
          }),
          this.collider.on("pointerup", function () {
            s = !1;
          }),
          this.collider.on("pointerupoutside", function () {
            s = !1;
          });
        this.task.on("buttonAnimationTask", function (t) {
          var e = t.delta,
            i = a / 5;
          r.sprite.scale.set(1 - i * (1 - 0.85)),
            (a = s ? (a < 5 ? a + e : 5) : a > 0 ? a - e : 0);
        }),
          this.addChild(this.sprite),
          this.addChild(this.collider);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.switchToggle = function () {
          var t = !this._toggle;
          return (
            (this._toggle = t),
            (this.sprite.texture = t ? this.onTexture : this.offTexture),
            t
          );
        }),
        e
      );
    })(r.Container),
    p = (function (t) {
      function e(e, i, n, r, s) {
        void 0 === r && (r = 0), void 0 === s && (s = 30), t.call(this);
        var a = new o.Point(2 * e.width, 2 * e.height),
          h = new o.Text(
            "ver. " + e.vars.env.version,
            new o.TextStyle({ fill: r, fontSize: s })
          );
        h.position.set(a.x * i, a.y * n),
          h.pivot.set(h.width * i, h.height * n),
          this.addChild(h);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    l = (function (t) {
      function e(e, i) {
        var n = this;
        t.call(this),
          (this.pressableFilter = function () {
            return !0;
          }),
          (this.enable = !0),
          (this.target = i),
          this.target.pivot.set(this.target.width / 2, this.target.height / 2),
          (this.collider = new o.Graphics()),
          this.collider.beginFill(255, 0.4),
          this.collider.drawRect(
            -this.target.width / 2,
            -this.target.height / 2,
            this.target.width,
            this.target.height
          ),
          this.collider.endFill(),
          (this.collider.alpha = 0);
        var r = !1,
          s = 0;
        (this.collider.interactive = !0),
          this.collider.on("pointertap", function () {
            n.enable &&
              n.pressableFilter() &&
              (n.emit("buttontap"), h.play(e, "button"), n.pointerTap());
          }),
          this.collider.on("pointerdown", function () {
            n.enable && n.pressableFilter() && ((r = !0), n.pointerDown());
          }),
          this.collider.on("pointerup", function () {
            (r = !1), n.pointerUp();
          }),
          this.collider.on("pointerupoutside", function () {
            (r = !1), n.pointerUp();
          });
        this.task.on("buttonAnimationTask", function (t) {
          var e = t.delta,
            i = s / 3;
          n.target.scale.set(1 - i * (1 - 0.85)),
            (s = r ? (s < 3 ? s + e : 3) : s > 0 ? s - e : 0);
        }),
          this.addChild(this.target),
          this.addChild(this.collider);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = {
        pressable: { configurable: !0 },
        showCollider: { configurable: !0 },
      };
      return (
        (e.prototype.getEnable = function () {
          return this.enable;
        }),
        (e.prototype.setEnable = function (t) {
          this.enable = t;
        }),
        (i.pressable.set = function (t) {
          this.collider.interactive = t;
        }),
        (i.showCollider.set = function (t) {
          this.collider.alpha = t ? 1 : 0;
        }),
        (e.prototype.colliderSize = function (t, e) {
          this.collider.clear(),
            this.collider.beginFill(255, 0.4),
            this.collider.drawRect(-t / 2, -e / 2, t, e),
            this.collider.endFill();
        }),
        (e.prototype.pointerTap = function () {}),
        (e.prototype.pointerDown = function () {}),
        (e.prototype.pointerUp = function () {}),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    d = (function (t) {
      function e(e, i, n) {
        void 0 === n && (n = o.Texture.EMPTY);
        var r = new o.Sprite(i);
        t.call(this, e, r),
          (this.onTexture = o.Texture.EMPTY),
          (this.offTexture = o.Texture.EMPTY),
          (this.isToggleButton = !1),
          (this.toggle = !1),
          (this.sprite = r),
          n != o.Texture.EMPTY &&
            ((this.isToggleButton = !0),
            (this.toggle = !0),
            (this.onTexture = i),
            (this.offTexture = n));
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.getToggle = function () {
          return this.toggle;
        }),
        (e.prototype.setToggle = function (t) {
          (this.toggle = t),
            (this.sprite.texture = t ? this.onTexture : this.offTexture);
        }),
        (e.prototype.switchToggle = function () {
          var t = !this.toggle;
          return this.setToggle(t), t;
        }),
        (e.prototype.setEnable = function (t) {
          this.enable = t;
          var i = function (n) {
            n instanceof o.Sprite && (n.tint = t ? e.WHITE : e.GRAY),
              n.children.forEach(function (t) {
                t instanceof o.Container && i(t);
              });
          };
          i(this.sprite);
        }),
        e
      );
    })(l);
  (d.WHITE = 16777215), (d.GRAY = 7368816);
  var f = (function (t) {
      function e(e, i, n, r) {
        void 0 === r && (r = o.Texture.EMPTY),
          t.call(this, e, i),
          r != o.Texture.EMPTY &&
            ((this.isToggleButton = !0),
            (this.toggle = !0),
            (this.onTexture = n),
            (this.offTexture = r)),
          (this.icon = new o.Sprite(n)),
          this.icon.pivot.set(this.icon.width / 2, this.icon.height / 2),
          this.icon.position.set(this.sprite.width / 2, this.sprite.height / 2),
          this.sprite.addChild(this.icon);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.setToggle = function (t) {
          (this.toggle = t),
            (this.icon.texture = t ? this.onTexture : this.offTexture);
        }),
        e
      );
    })(d),
    v = function () {};
  (v.getUUID = function () {
    return (
      v.nullUuid >= Number.MAX_SAFE_INTEGER &&
        (v.nullUuid = Number.MIN_SAFE_INTEGER),
      v.nullUuid++
    );
  }),
    (v.timeout = function (t, e, i) {
      return (
        void 0 === i && (i = null),
        new Promise(function (n) {
          var r = null === i ? "" + v.getUUID() : i,
            o = 0;
          t.task.clear(r),
            t.task.on(r, function (i) {
              if (o >= e) return t.task.clear(r), void n();
              o += (i.delta / 60) * v.speed;
            });
        })
      );
    }),
    (v.seamless = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === o && (o = function () {}),
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        new Promise(function (c) {
          var u = null === e ? "" + v.getUUID() : e,
            p = 0,
            l = i,
            d = n;
          t.task.clear(u),
            t.task.on(u, function (e) {
              var i = (function (t, e, i) {
                return e < t ? t : e > i ? i : e;
              })(
                0,
                (function (t) {
                  return h ? 1 - Math.abs(1 - ((t / 2) % 1) * 2) : t % 1;
                })(p / r),
                1
              );
              if (((p += (e.delta / 60) * v.speed), 0 !== a && p >= r * a))
                return o(a % 2 == 1 ? d : l), t.task.clear(u), void c();
              o(
                (function (t) {
                  return t * (d - l) + l;
                })(s(i))
              );
            });
        })
      );
    }),
    (v.tween = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === o && (o = function () {}),
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        new Promise(function (c) {
          var u = null === e ? "" + v.getUUID() : e,
            p = 0,
            l = i,
            d = n;
          t.task.clear(u),
            o(l),
            t.task.on(u, function (e) {
              var i = (function (t, e, i) {
                return e < t ? t : e > i ? i : e;
              })(
                0,
                (function (t) {
                  return h ? 1 - Math.abs(1 - ((t / 2) % 1) * 2) : t % 1;
                })(p / r),
                1
              );
              if (0 !== a && p >= r * a)
                return o(a % 2 == 1 ? d : l), t.task.clear(u), void c();
              o(
                (function (t) {
                  return t * (d - l) + l;
                })(s(i))
              ),
                (p += (e.delta / 60) * v.speed);
            });
        })
      );
    }),
    (v.move = function (t, e, i, n, r, o, s, a, h) {
      void 0 === s &&
        (s = function (t) {
          return t;
        }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0);
      var c = n.clone(),
        u = r.clone();
      return v.tween(
        t,
        i,
        0,
        1,
        o,
        function (t) {
          (e.x = u.x * t + c.x * (1 - t)), (e.y = u.y * t + c.y * (1 - t));
        },
        s,
        a,
        h
      );
    }),
    (v.vector = function (t, e, i, n, r, o, s, a) {
      void 0 === o &&
        (o = function (t) {
          return t;
        }),
        void 0 === s && (s = 1),
        void 0 === a && (a = !0);
      var h = e.position.clone(),
        c = e.position.clone();
      return (c.x += n.x), (c.y += n.y), v.move(t, e, i, h, c, r, o, s, a);
    }),
    (v.moveTo = function (t, e, i, n, r, o, s, a) {
      void 0 === o &&
        (o = function (t) {
          return t;
        }),
        void 0 === s && (s = 1),
        void 0 === a && (a = !0);
      var h = e.position.clone();
      return v.move(t, e, i, h, n, r, o, s, a);
    }),
    (v.scale = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        v.tween(
          t,
          i,
          n,
          r,
          o,
          function (t) {
            return e.scale.set(t);
          },
          s,
          a,
          h
        )
      );
    }),
    (v.scaleX = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        v.tween(
          t,
          i,
          n,
          r,
          o,
          function (t) {
            return (e.scale.x = t);
          },
          s,
          a,
          h
        )
      );
    }),
    (v.scaleY = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        v.tween(
          t,
          i,
          n,
          r,
          o,
          function (t) {
            return (e.scale.y = t);
          },
          s,
          a,
          h
        )
      );
    }),
    (v.alpha = function (t, e, i, n, r, o, s, a, h) {
      return (
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0),
        v.tween(
          t,
          i,
          n,
          r,
          o,
          function (t) {
            return (e.alpha = t);
          },
          s,
          a,
          h
        )
      );
    }),
    (v.rotate = function (t, e, i, n, r, o, s, a, h) {
      void 0 === o && (o = 1),
        void 0 === s &&
          (s = function (t) {
            return t;
          }),
        void 0 === a && (a = 1),
        void 0 === h && (h = !0);
      var c = Math.PI / 180;
      return v.tween(
        t,
        i,
        n * c,
        r * c,
        o,
        function (t) {
          return (e.rotation = t);
        },
        s,
        a,
        h
      );
    }),
    (v.speed = 1),
    (v.nullUuid = Number.MIN_SAFE_INTEGER),
    (v.Ease = {
      linear: function (t) {
        return t;
      },
      accel: function (t) {
        return Math.pow(t, 2);
      },
      decel: function (t) {
        return -Math.pow(t, 2) + 2 * t;
      },
      cubic: function (t) {
        return -2 * Math.pow(t, 3) + 3 * Math.pow(t, 2);
      },
      stay: function (t) {
        return 4 * Math.pow(t, 3) - 6 * Math.pow(t, 2) + 3 * t;
      },
      cosine: function (t) {
        return 0.5 * (Math.cos(Math.PI * (t - 1)) + 1);
      },
      accel2: function (t) {
        return Math.pow(t, 4);
      },
      decel2: function (t) {
        return (
          -Math.pow(t, 4) + 4 * Math.pow(t, 3) - 6 * Math.pow(t, 2) + 4 * t
        );
      },
      quadratic: function (t) {
        return function (e) {
          return t * e * e + (1 - t) * e;
        };
      },
      inflection: function (t, e) {
        var i = (3 * (1 - e)) / (3 * t * t - 3 * t + 1),
          n = i / 3,
          r = -i * t,
          o = i * t * t + e;
        return function (t) {
          return n * t * t * t + r * t * t + o * t;
        };
      },
      bounce: function (t) {
        return function (e) {
          return Math.abs(1 - Math.abs(1 - t(e)));
        };
      },
    });
  var g = (function (t) {
      function e(e, i, n) {
        var r = this;
        void 0 === n && (n = 0),
          t.call(this),
          (this.graphic = new o.Graphics()),
          this.graphic.beginFill(16777215),
          this.graphic.drawRect(
            0,
            0,
            e.vars.additional.width,
            e.vars.additional.height
          ),
          this.graphic.endFill(),
          (this.graphic.tint = i),
          (this.graphic.alpha = n),
          this.on("pointertap", function (t) {
            r.emit("tapPoint", t.data.getLocalPosition(r.graphic));
          }),
          this.on("pointerdown", function (t) {
            r.emit("downPoint", t.data.getLocalPosition(r.graphic));
          }),
          this.addChild(this.graphic);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { blendMode: { configurable: !0 } };
      return (
        (e.prototype.fadeIn = function (t, e) {
          var i = this;
          return (
            void 0 === e && (e = 1),
            new Promise(function (n) {
              i.task.clear("fade"),
                i.task.on("fade", function (r) {
                  var o = r.delta / 60 / t;
                  if (i.graphic.alpha + o >= e)
                    return (
                      i.task.clear("fade"), (i.graphic.alpha = e), void n()
                    );
                  i.graphic.alpha += o;
                });
            })
          );
        }),
        (e.prototype.fadeOut = function (t, e) {
          var i = this;
          return (
            void 0 === e && (e = 0),
            new Promise(function (n) {
              i.task.clear("fade"),
                i.task.on("fade", function (r) {
                  var o = r.delta / 60 / t;
                  if (i.graphic.alpha - o <= e)
                    return (
                      i.task.clear("fade"), (i.graphic.alpha = e), void n()
                    );
                  i.graphic.alpha -= o;
                });
            })
          );
        }),
        (i.blendMode.set = function (t) {
          var e;
          switch (t) {
            default:
              e = o.BLEND_MODES.NORMAL;
              break;
            case "add":
              e = o.BLEND_MODES.ADD;
              break;
            case "multiply":
              e = o.BLEND_MODES.MULTIPLY;
              break;
            case "screen":
              e = o.BLEND_MODES.SCREEN;
          }
          this.graphic.blendMode = e;
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    _ = (function (t) {
      function e(e, i) {
        t.call(this),
          (this.$ = e),
          (this.popup = i),
          (this._isShow = !1),
          (this.screen = new g(e, 0)),
          (this.dontTap = new g(e, 0, 0)),
          (this.dontTap.interactive = !1),
          (this.main = new r.Container()),
          this.main.position.set(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          (this.main.visible = !1),
          this.addChild(this.dontTap),
          this.addChild(this.screen),
          this.main.addChild(i),
          this.addChild(this.main);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = {
        allowBackTap: { configurable: !0 },
        isShow: { configurable: !0 },
      };
      return (
        (e.prototype.showAnimation = function (t, e, i, n) {
          void 0 === n && (n = function () {}),
            (e.visible = !0),
            v
              .scale(t, e, i + "Scale", 0.5, 1, 0.2, v.Ease.quadratic(-2))
              .then(n);
        }),
        (e.prototype.show = function (t) {
          var e = this;
          return (
            void 0 === t && (t = !0),
            new Promise(function (i) {
              (e._isShow = !0),
                (e.main.visible = !0),
                (e.main.interactiveChildren = !1),
                t && e.visibleBack(!0),
                (e.dontTap.interactive = !0),
                e.showAnimation(e, e.popup, "popup", function () {
                  (e.main.interactiveChildren = !0), i();
                });
            })
          );
        }),
        (e.prototype.hideAnimation = function (t, e, i, n) {
          void 0 === n && (n = function () {}),
            v
              .scale(t, e, i + "Scale", 1, 0, 0.2, v.Ease.quadratic(2))
              .then(function () {
                (e.visible = !1), n();
              });
        }),
        (e.prototype.hide = function (t) {
          var e = this;
          return (
            void 0 === t && (t = !0),
            new Promise(function (i) {
              (e.main.interactiveChildren = !1),
                t && e.visibleBack(!1),
                e.hideAnimation(e, e.popup, "popup", function () {
                  (e.dontTap.interactive = !1),
                    (e.main.visible = !1),
                    (e.main.interactiveChildren = !0),
                    (e._isShow = !1),
                    i();
                });
            })
          );
        }),
        (e.prototype.visibleBack = function (t) {
          return t ? this.screen.fadeIn(0.2, 0.6) : this.screen.fadeOut(0.2, 0);
        }),
        (i.allowBackTap.set = function (t) {
          this.dontTap.interactive = !t;
        }),
        (i.isShow.get = function () {
          return this._isShow;
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    y = (function (t) {
      function e(e, i, n, r, s, a) {
        var h = this;
        void 0 === s && (s = 0), void 0 === a && (a = 140);
        var c = new o.Sprite(i);
        c.anchor.set(0.5), t.call(this, e, c), (this.buttons = {});
        var u = new o.Container();
        if (((u.y = s), null !== n)) {
          var p = new o.Sprite(n.texture);
          p.anchor.set(0.5), (p.y = -c.height / 2 + n.y), c.addChild(p);
        }
        for (
          var l = r.length,
            d = function (t) {
              var e = r[t],
                i = e.button;
              (i.y = (t - (l - 1) / 2) * a),
                i.on("buttontap", function () {
                  h.emit(e.name);
                }),
                (h.buttons[e.name] = i),
                u.addChild(i);
            },
            f = 0;
          f < l;
          f++
        )
          d(f);
        c.addChild(u);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.getButton = function (t) {
          return this.buttons[t];
        }),
        e
      );
    })(_),
    m = (function (t) {
      function e(e) {
        var i = this,
          n = new PIXI.Sprite(e.resources.images.howto);
        n.anchor.set(0.5),
          t.call(this, e, n),
          (this.next = new f(
            e,
            e.resources.spritesheets.ui["btn_0.png"],
            e.resources.spritesheets.ui["btn_ok_1.png"]
          )),
          (this.next.y = 490),
          this.next.on("buttontap", function () {
            i.emit("ok");
          }),
          n.addChild(this.next);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.showInstantly = function () {
          (this.visible = !0),
            (this._isShow = !0),
            (this.main.visible = !0),
            this.visibleBack(!0),
            (this.dontTap.interactive = !0);
        }),
        (e.prototype.show = function () {
          return (this.visible = !0), t.prototype.show.call(this);
        }),
        (e.prototype.hide = function () {
          var t = this;
          return new Promise(function (e) {
            (t.main.interactiveChildren = !1),
              v.alpha(t, t, "alpha", 1, 0, 0.16).then(function () {
                (t.alpha = 1),
                  (t.visible = !1),
                  (t.dontTap.interactive = !1),
                  (t.main.visible = !1),
                  (t.main.interactiveChildren = !0),
                  (t._isShow = !1),
                  e();
              });
          });
        }),
        e
      );
    })(_),
    w = (function (t) {
      function e(e, i, n, r) {
        var s = this;
        void 0 === r && (r = 0),
          t.call(this),
          (this.textures = []),
          (this.sprites = []),
          (this._margin = 0),
          (this._number = 0),
          (this.number_bfr = 0),
          (this._padding = 1),
          (this.splitTexture = o.Texture.EMPTY),
          (this.anchor = new o.ObservablePoint(function () {
            return s.updateNumber();
          }, this));
        for (var a = 0; a <= 9; a++) this.textures.push(e[i + a + n]);
        this.number = r;
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = {
        number: { configurable: !0 },
        margin: { configurable: !0 },
        padding: { configurable: !0 },
        split: { configurable: !0 },
        tint: { configurable: !0 },
      };
      return (
        (i.number.get = function () {
          return this._number;
        }),
        (i.number.set = function (t) {
          (this.number_bfr = this._number),
            (this._number = t),
            this.drawNumber(t);
        }),
        (e.prototype.animateNumber = function (t, e, i) {
          void 0 === e && (e = 0),
            void 0 === i && (i = 1),
            (this.number = t),
            e <= 0 ? this.drawNumber(t) : this.animate(e, i);
        }),
        (i.margin.get = function () {
          return this._margin;
        }),
        (i.margin.set = function (t) {
          (this._margin = t), this.updateNumber();
        }),
        (i.padding.get = function () {
          return this._padding;
        }),
        (i.padding.set = function (t) {
          (this._padding = t), this.updateNumber();
        }),
        (i.split.set = function (t) {
          (this.splitTexture = t), this.updateNumber();
        }),
        (e.prototype.updateNumber = function () {
          this.number = this._number;
        }),
        (i.tint.set = function (t) {
          (this.number = this._number),
            this.sprites.forEach(function (e) {
              return (e.tint = t);
            });
        }),
        (e.prototype.getTexture = function (t) {
          return this.textures[t];
        }),
        (e.prototype.drawNumber = function (t) {
          var e;
          this._number = t;
          for (
            var i = this.sprites.length, n = t.toFixed();
            n.length < this._padding;

          )
            n = "0" + n;
          var r = n;
          if (this.splitTexture !== o.Texture.EMPTY) {
            for (
              var s = r, a = Math.floor((r.length - 1) / 3), h = 0;
              h < a;
              h++
            ) {
              var c = r.length - 3 * (h + 1);
              s = s.substring(0, c) + "," + s.substring(c);
            }
            r = s;
          }
          for (var u = 0, p = 0; p < r.length || p < i; p++) {
            var l =
              "," === r[p] ? this.splitTexture : this.getTexture(Number(r[p]));
            if (p >= i && p < r.length) {
              var d = new o.Sprite(l),
                f = d.height;
              (d.pivot.y = f),
                f > u && (u = f),
                this.addChild(d),
                this.sprites.push(d);
            } else if (p >= r.length && p < i)
              null === (e = this.sprites.pop()) || void 0 === e || e.destroy();
            else {
              var v = this.sprites[p];
              v.texture = l;
              var g = v.height;
              (v.pivot.y = g), g > u && (u = g);
            }
          }
          for (var _ = 0, y = 0; y < this.sprites.length; y++)
            (this.sprites[y].x = _),
              (this.sprites[y].y = u),
              (_ += this.sprites[y].width + this._margin);
          this.pivot.set(
            (this.width * this.anchor.x) / this.scale.x,
            (this.height * this.anchor.y) / this.scale.y
          );
        }),
        (e.prototype.animate = function (t, e, i) {
          var n = this;
          void 0 === i && (i = function () {}), this.task.clear();
          var r = 0,
            o = this._number,
            s = this.number_bfr,
            a = 0;
          this.task.clear("animation"),
            this.task.on("animation", function (h) {
              var c = h.delta;
              r > e && (r = e);
              var u = r / e,
                p = (function (t, e, i) {
                  return (e - t) * i + t;
                })(
                  s,
                  o,
                  (function (e) {
                    switch (t) {
                      case 1:
                        return e;
                      case 2:
                        return -e * e + 2 * e;
                      case 3:
                        return -2 * e * e * e + 3 * e * e;
                    }
                    return 1;
                  })(u)
                );
              n.drawNumber(p),
                a !== p && n.emit("clocking", p),
                (a = p),
                u >= 1 ? (i(), n.task.clear()) : (r += c / 60);
            });
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    b = (function (t) {
      function e(e, i) {
        t.call(this);
        var n = new o.Sprite(e.resources.spritesheets.ui["coin_back_0.png"]),
          r = new o.Sprite(e.resources.spritesheets.ui["coin_icon_0.png"]);
        (this.coin = new w(
          e.resources.spritesheets.number,
          "no_2_",
          ".png",
          i.coin
        )),
          n.anchor.set(0.5),
          r.anchor.set(0.5),
          this.coin.anchor.set(1, 0.5),
          r.scale.set(0.425),
          this.coin.scale.set(0.675),
          (r.x = -100),
          (this.coin.x = n.width / 2 - 10),
          n.addChild(r),
          n.addChild(this.coin),
          this.addChild(n);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    C = (function (t) {
      function e(e, i, n) {
        t.call(this),
          (this.$ = e),
          (this.commonData = i),
          (this.level = n),
          (this.loaderOptions = {
            basepath: e.vars.env.basepath,
            version: e.vars.env.version + "",
          }),
          (this.sprite = new o.Sprite(e.resources.images.background)),
          this.sprite.scale.set(2),
          this.addChild(this.sprite);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.loadTexture = function () {
          var t = this,
            e =
              "assets/images/backs/back_" +
              this.commonData.backSkin.selected +
              "_" +
              this.level +
              ".png";
          return new r.TextureLoader()
            .loadAsync(e, this.loaderOptions)
            .then(function (e) {
              (t.$.resources.images.background = e.data),
                (t.sprite.texture = t.$.resources.images.background);
            });
        }),
        e
      );
    })(r.Container),
    x = function () {};
  x.index = function (t) {
    return Math.floor(t.length * Math.random());
  };
  var k = function () {};
  (k.shuffle = function (t) {
    for (var e, i = [], n = k.natural(t.length), r = 0; r < n.length; r++) {
      var o = x.index(n);
      (e = [n[o], n[r]]), (n[r] = e[0]), (n[o] = e[1]);
    }
    for (var s = 0; s < n.length; s++) i.push(t[n[s]]);
    return i;
  }),
    (k.rotate = function (t) {
      for (var e = [], i = 0; i < t[0].length; i++) {
        for (var n = [], r = 0; r < t.length; r++)
          n.push(t[t.length - 1 - r][i]);
        e.push(n);
      }
      return e;
    }),
    (k.mirror = function (t, e, i) {
      var n,
        r,
        o = k.clone2D(t);
      if (e)
        for (var s = 0; s < o.length; s++)
          for (var a = 0; a < Math.floor(o[0].length / 2); a++) {
            var h = o[0].length - 1 - a;
            (n = [o[s][h], o[s][a]]), (o[s][a] = n[0]), (o[s][h] = n[1]);
          }
      if (i)
        for (var c = 0; c < o[0].length; c++)
          for (var u = 0; u < Math.floor(o.length / 2); u++) {
            var p = o.length - 1 - u;
            (r = [o[p][c], o[u][c]]), (o[u][c] = r[0]), (o[p][c] = r[1]);
          }
      return o;
    }),
    (k.loop = function (t, e, i) {
      return t[e < i ? e : i + ((e - i) % (t.length - i))];
    }),
    (k.clone2D = function (t) {
      for (var e = [], i = 0; i < t.length; i++) e.push(t[i].concat());
      return e;
    }),
    (k.natural = function (t) {
      for (var e = [], i = 0; i < t; i++) e.push(i);
      return e;
    }),
    (k.array = function (t, e) {
      for (var i = [], n = 0; n < t; n++) {
        var r = e;
        i.push(r);
      }
      return i;
    }),
    (k.array2D = function (t, e, i) {
      for (var n = [], r = 0; r < e; r++) {
        for (var o = [], s = 0; s < t; s++) {
          var a = i;
          o.push(a);
        }
        n.push(o);
      }
      return n;
    });
  var S = (function (t) {
      function e(e, i) {
        t.call(this), (this.point = e), (this.size = i);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    T = function () {};
  (T.inv = function (t) {
    return new PIXI.Point(-t.x, -t.y);
  }),
    (T.mlt = function (t, e) {
      return new PIXI.Point(e * t.x, e * t.y);
    }),
    (T.add = function (t, e) {
      return new PIXI.Point(t.x + e.x, t.y + e.y);
    }),
    (T.dif = function (t, e) {
      return T.add(t, T.inv(e));
    }),
    (T.dot = function (t, e) {
      return t.x * e.x + t.y * e.y;
    }),
    (T.lenSqr = function (t) {
      return t.x * t.x + t.y * t.y;
    }),
    (T.len = function (t) {
      return Math.sqrt(T.lenSqr(t));
    }),
    (T.norm = function (t) {
      return T.mlt(t.clone(), 1 / T.len(t));
    }),
    (T.rotate = function (t, e) {
      return new PIXI.Point(
        t.x * Math.cos(e) - t.y * Math.sin(e),
        t.x * Math.sin(e) + t.y * Math.cos(e)
      );
    });
  var M = function () {};
  (M.registerPoints = function (t, e) {
    M.points[t] = e;
  }),
    (M.registerData = function (t, e, i) {
      var n = M.points[i.points],
        r = t.resources.spritesheets[i.spritesheet];
      if ("car" === i.spritesheet)
        for (
          var o = function (t) {
              var o = function (e) {
                  return e.replace("?", t + "");
                },
                s = {
                  frontTexture: r[o(i.frontTextureName)],
                  backTexture: r[o(i.backTextureName)],
                  size: i.size,
                  points: n,
                };
              M.data[e + "_" + t] = s;
            },
            s = 0;
          s <= 2;
          s++
        )
          o(s);
      else {
        var a = {
          frontTexture: r[i.frontTextureName],
          backTexture: r[i.backTextureName],
          size: i.size,
          points: n,
        };
        M.data[e] = a;
      }
    }),
    (M.points = {}),
    (M.data = {});
  var P = (function (t) {
    function e(i) {
      t.call(this), (this.$ = i), (this.objectContainer = new o.Container());
      for (
        var n = new o.Graphics(),
          r = function (t, i, r, s, a, h) {
            n.lineStyle(t, i);
            var c = e.toIso(new o.Point(r, s)),
              u = e.toIso(new o.Point(a, h));
            n.moveTo(c.x, c.y), n.lineTo(u.x, u.y);
          },
          s = e.UNIT_SIZE,
          a = function (t) {
            return 0 === t ? 5 : t % 2 == 0 ? 2 : 0.5;
          },
          h = -30;
        h <= 30;
        h++
      ) {
        r(a(h), 0 === h ? 255 : 0, h * s, -5e3, h * s, 5e3);
      }
      for (var c = -30; c <= 30; c++) {
        r(a(c), 0 === c ? 16711680 : 0, -5e3, c * s, 5e3, c * s);
      }
      this.addChild(this.objectContainer);
    }
    t && (e.__proto__ = t),
      (e.prototype = Object.create(t && t.prototype)),
      (e.prototype.constructor = e);
    var i = { objects: { configurable: !0 } };
    return (
      (e.toIso = function (t) {
        var i = t.x - t.y,
          n = e.RATIO * (t.x + t.y),
          r = new o.Point(i, n);
        return (r.x += e.OFFSET.x), (r.y += e.OFFSET.y), r;
      }),
      (e.fromIso = function (t) {
        var i = t.clone();
        (i.x -= e.OFFSET.x), (i.y -= e.OFFSET.y);
        var n = (i.y / e.RATIO + i.x) / 2,
          r = (i.y / e.RATIO - i.x) / 2;
        return new o.Point(n, r);
      }),
      (e.prototype.resisterObject = function (t) {
        var e = this;
        t.on("update", function () {
          e.sortObjects();
        }),
          this.objectContainer.addChild(t),
          this.sortObjects();
      }),
      (e.prototype.destroyObject = function (t) {
        t.task.clear(), t.removeAllListeners(), t.destroy();
      }),
      (i.objects.get = function () {
        for (
          var t = [], e = this.objectContainer.children, i = 0;
          i < e.length;
          i++
        )
          t.push(e[i]);
        return t;
      }),
      (e.prototype.sortObjects = function () {
        var t = this.objects,
          e = function (t, e) {
            return t.y + (e - t.origin.y) * t.scale.x;
          },
          i = function (t) {
            return e(t, t.rightY);
          },
          n = function (t) {
            return e(t, t.leftY);
          };
        t.sort(function (t, r) {
          if (i(t) > e((o = r), o.frontY)) return 1;
          var o;
          if (t.x <= r.x) {
            if (i(t) < n(r)) return -1;
          } else if (n(t) < i(r)) return -1;
          return 0;
        });
        for (var r = t.length - 1; r >= 0; r--)
          this.objectContainer.setChildIndex(t[r], 0);
      }),
      Object.defineProperties(e.prototype, i),
      e
    );
  })(r.Container);
  (P.RATIO = 0.6), (P.OFFSET = new o.Point(0, 0)), (P.UNIT_SIZE = 50);
  var E = (function (t) {
      function e(e, i, n) {
        void 0 === i && (i = 0),
          void 0 === n && (n = 0),
          t.call(this),
          (this.isoTexture = e),
          (this.offsetY = n),
          (this.points = e.points),
          (this._leftY = this.points[0].y),
          (this._frontY = this.points[1].y),
          (this._rightY = this.points[2].y),
          (this._dir = i),
          (this.rawPos = new o.Point()),
          (this.sprite = new o.Sprite(this.getTexture())),
          (this.container = new o.Container()),
          (this.collider = new o.Graphics()),
          this.collider.beginFill(255, 0.25),
          this.collider.moveTo(this.points[0].x, this.points[0].y);
        for (var r = 1; r < this.points.length; r++)
          this.collider.lineTo(this.points[r].x, this.points[r].y);
        (this.collider.alpha = 1e-5),
          (this.collider.interactive = !0),
          (this.origin = new o.Point(
            (this.points[0].x + this.points[2].x) / 2,
            (this.points[0].y + this.points[2].y) / 2
          )),
          (this.sprite.pivot = this.origin.clone()),
          this.sprite.addChild(this.collider),
          this.container.addChild(this.sprite),
          this.addChild(this.container),
          (this.position = P.OFFSET.clone()),
          (this.dir = i);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = {
        dir: { configurable: !0 },
        iso: { configurable: !0 },
        ix: { configurable: !0 },
        iy: { configurable: !0 },
        leftY: { configurable: !0 },
        frontY: { configurable: !0 },
        rightY: { configurable: !0 },
      };
      return (
        (e.prototype.getTexture = function () {
          return this._dir % 4 < 2
            ? this.isoTexture.frontTexture
            : this.isoTexture.backTexture;
        }),
        (i.dir.get = function () {
          return this._dir;
        }),
        (i.dir.set = function (t) {
          this._dir = t % 4;
          var e = this._dir % 2 == 1;
          (this.sprite.texture = this.getTexture()),
            (this.sprite.scale.x = e ? -1 : 1),
            (this._leftY = this.points[e ? 2 : 0].y),
            (this._rightY = this.points[e ? 0 : 2].y),
            this.updateIso();
        }),
        (e.prototype.dir2Vector = function (t) {
          var e = ((t % 4) + 4) % 4,
            i = e < 2 ? 1 : -1;
          return new o.Point(i * ((e + 1) % 2), i * (e % 2));
        }),
        (e.prototype.updateIso = function () {
          this.emit("update");
        }),
        (i.iso.get = function () {
          return this.rawPos;
        }),
        (i.iso.set = function (t) {
          (this.rawPos = t),
            (this.position = P.toIso(t)),
            (this.y += this.offsetY),
            this.updateIso();
        }),
        (i.ix.get = function () {
          return this.iso.x;
        }),
        (i.ix.set = function (t) {
          var e = this.iso.clone();
          (e.x = t), (this.iso = e);
        }),
        (i.iy.get = function () {
          return this.iso.y;
        }),
        (i.iy.set = function (t) {
          var e = this.iso.clone();
          (e.y = t), (this.iso = e);
        }),
        (i.leftY.get = function () {
          return this._leftY;
        }),
        (i.frontY.get = function () {
          return this._frontY;
        }),
        (i.rightY.get = function () {
          return this._rightY;
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    I = (function (t) {
      function e(e, i, n, r) {
        var s = this;
        t.call(this, i, n, r), (this.model = e), (this.moving = !1);
        var a = 0;
        this.task.on("smoke", function (t) {
          a > 0
            ? (a -= t.delta / 60)
            : s.moving && (s.emit("smoking"), (a = 0.08));
        });
        var h = new o.Point(),
          c = !1;
        this.collider.on("pointerdown", function (t) {
          s.moving || ((c = !0), (h = t.data.getLocalPosition(s.collider)));
        });
        var u = function () {
          c = !1;
        };
        this.collider.on("pointermove", function (t) {
          if (c && !s.moving) {
            var e = function (t) {
                s.emit("operate", t), u();
              },
              i = t.data.getLocalPosition(s.collider),
              n = T.dif(i, h);
            n.x >= 20 ? e(!0) : n.x <= -20 && e(!1);
          }
        });
        var p = function (t) {
          u();
        };
        this.collider.on("pointerup", p),
          this.collider.on("pointerupoutside", p);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { dirUnitVector: { configurable: !0 } };
      return (
        (e.prototype.moveTo = function (t, e) {
          var i = this,
            n = this.iso.clone(),
            r = Math.abs(n.x - t.x + n.y - t.y) / P.UNIT_SIZE / e;
          return v.seamless(this, "move", 0, 1, r, function (e) {
            i.iso = new o.Point(
              t.x * e + n.x * (1 - e),
              t.y * e + n.y * (1 - e)
            );
          });
        }),
        (e.prototype.moveVector = function (t, e) {
          var i = this,
            n = this.iso.clone(),
            r = n.clone();
          return (
            (r.x += t.x),
            (r.y += t.y),
            v.tween(this, "move", 0, 1, e, function (t) {
              i.iso = new o.Point(
                r.x * t + n.x * (1 - t),
                r.y * t + n.y * (1 - t)
              );
            })
          );
        }),
        (e.prototype.move = function (t, e, i) {
          var n = this,
            r = this.iso.clone(),
            s = r.clone(),
            a = (t ? 1 : -1) * e * P.UNIT_SIZE;
          this.model.vertical ? (s.y += a) : (s.x += a);
          var h = Math.abs(r.x - s.x + r.y - s.y) / P.UNIT_SIZE / i;
          return v.tween(this, "move", 0, 1, h, function (t) {
            n.iso = new o.Point(
              s.x * t + r.x * (1 - t),
              s.y * t + r.y * (1 - t)
            );
          });
        }),
        (e.prototype.move1 = function (t, e) {
          var i = this,
            n = this.iso.clone(),
            r = n.clone(),
            s = (t ? 1 : -1) * P.UNIT_SIZE;
          this.model.vertical ? (r.y += s) : (r.x += s);
          var a = Math.abs(n.x - r.x + n.y - r.y) / P.UNIT_SIZE / e;
          return v.seamless(this, "move", 0, 1, a, function (t) {
            i.iso = new o.Point(
              r.x * t + n.x * (1 - t),
              r.y * t + n.y * (1 - t)
            );
          });
        }),
        (e.prototype.crash = function (t) {
          var e = this,
            i = this.iso.clone(),
            n = i.clone(),
            r = (t ? 1 : -1) * P.UNIT_SIZE * 0.2;
          return (
            this.model.vertical ? (n.y += r) : (n.x += r),
            v.tween(
              this,
              "move",
              1,
              0,
              0.1,
              function (t) {
                e.iso = new o.Point(
                  n.x * t + i.x * (1 - t),
                  n.y * t + i.y * (1 - t)
                );
              },
              v.Ease.decel
            )
          );
        }),
        (e.prototype.turn = function (t, e) {
          var i = this;
          return (
            void 0 === t && (t = !1),
            void 0 === e && (e = !1),
            new Promise(function (n) {
              var r = (e ? -1 : 1) * (t ? -1 : 1),
                o = i.dir,
                s = (((i.dir + r) % 4) + 4) % 4,
                a = i.dir2Vector(o),
                h = i.dir2Vector(s),
                c = T.mlt(a, 1.5 * P.UNIT_SIZE),
                u = T.mlt(h, 0.5 * P.UNIT_SIZE);
              e && ((c.x *= -1), (c.y *= -1), (u.x *= -1), (u.y *= -1));
              var p = T.add(c, u),
                l = 0.15,
                d = r * (o + s === 3 ? 30 : 60);
              v.scaleX(
                i,
                i.container,
                "spriteScale",
                1,
                0.8,
                0.075,
                v.Ease.linear,
                2
              ),
                i.moveVector(p, l),
                v
                  .rotate(i, i.container, "spriteRot", 0, d, 0.075)
                  .then(function () {
                    return (
                      (i.dir = s),
                      v.rotate(i, i.container, "spriteRot", -d, 0, 0.075)
                    );
                  })
                  .then(n);
            })
          );
        }),
        (i.dirUnitVector.get = function () {
          var t = new o.Point(0, 0);
          return (
            0 === this.dir
              ? (t.x = 1)
              : 1 === this.dir
              ? (t.y = 1)
              : 2 === this.dir
              ? (t.x = -1)
              : 3 === this.dir && (t.y = -1),
            t
          );
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(E),
    O = (function (t) {
      function e(e, i, n) {
        t.call(this, e, i),
          (this.vertical = n),
          (this.moving = !1),
          (this.point = new o.Point());
        var r = new o.Graphics();
        r.lineStyle(3, 0),
          r.beginFill(16748688),
          r.drawRect(0, 0, 100 * this.size.x, 100 * this.size.y),
          r.endFill(),
          this.addChild(r);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(S),
    B = (function (t) {
      function e(e, i, n, r) {
        t.call(this, M.data.wall_0, n ? 2 : 1, r),
          (this.$ = e),
          (this.id = i),
          (this.reverse = n);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.hammerBreak = function () {
          var t = this;
          return new Promise(function (e) {
            var i = new r.Container(),
              n = new o.Sprite(
                t.$.resources.spritesheets.ui["hammer_icon_0.png"]
              );
            n.anchor.set(0.46154, 0.55285),
              n.scale.set(0.75),
              n.position.set(5, -15),
              v.alpha(i, n, "hammerAlpha", 0, 1, 0.1),
              v
                .scale(
                  i,
                  n,
                  "hammerScale",
                  5,
                  0.75,
                  0.35,
                  v.Ease.bounce(v.Ease.quadratic(-2))
                )
                .then(function () {
                  return v.timeout(i, 0.25);
                })
                .then(function () {
                  (n.visible = !1), (t.sprite.alpha = 0);
                  var r = new s.Container();
                  (r.y = -20),
                    r
                      .addCreatejs(
                        new t.$.resources.animates.wallbreak[
                          t.reverse
                            ? "wall_smoke_0_spin_left"
                            : "wall_smoke_0_spin_right"
                        ]()
                      )
                      .on("endAnimation", function () {
                        e(), i.task.clear(), i.destroy();
                      }),
                    i.addChild(r);
                }),
              i.addChild(n),
              t.container.addChild(i);
          });
        }),
        e
      );
    })(E),
    A = function () {};
  (A.int = function (t, e) {
    return (
      void 0 === e && (e = void 0),
      void 0 === e
        ? Math.floor((t + 1) * Math.random())
        : Math.floor((e - t + 1) * Math.random() + t)
    );
  }),
    (A.float = function (t, e) {
      return (
        void 0 === t && (t = 1),
        void 0 === e && (e = void 0),
        void 0 === e ? t * Math.random() : (e - t) * Math.random() + t
      );
    }),
    (A.array = function (t) {
      return t[Math.floor(t.length * Math.random())];
    }),
    (A.sign = function () {
      return 2 * Math.floor(2 * Math.random()) - 1;
    }),
    (A.bool = function () {
      return Boolean(Math.floor(2 * Math.random()));
    }),
    (A.weight = function (t) {
      var e = 0;
      t.forEach(function (t) {
        e += t;
      });
      for (
        var i = A.float(e), n = 0, r = 0;
        r < t.length && !(i <= (n += t[r]));
        r++
      );
      return r;
    }),
    (A.plusFloat = function (t) {
      t = Math.floor(Math.max(1, t));
      for (var e = Math.random(), i = 1; i < t; i++) e += Math.random();
      return e / t;
    }),
    (A.test = function (t, e, i) {
      void 0 === e && (e = 0), void 0 === i && (i = 1e5);
      for (var n, r = {}, o = 0; o < i; o++) {
        var s = t(),
          a =
            ((n = s),
            e <= 0
              ? (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toFixed(-e)
              : (Math.floor(n / Math.pow(10, e)) * Math.pow(10, e)).toString());
        a in r ? r[a]++ : (r[a] = 1);
      }
      var h = {};
      for (var c in r) h[c] = ((r[c] / i) * 100).toFixed(2) + "%";
    });
  var j = (function (t) {
      function e() {
        t.call(this), (this.blendMode = PIXI.BLEND_MODES.MULTIPLY);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.startDraw = function () {
          this.beginFill(16711935, 0.6);
        }),
        (e.prototype.offset = function (t) {
          (t.x += this.x), (t.y += this.y);
        }),
        (e.prototype.rectangle = function (t, e, i, n) {
          void 0 === i && (i = !0), void 0 === n && (n = !1);
          var r = new PIXI.Point();
          return (
            (r.x = Math.random() * t),
            (r.y = Math.random() * e),
            i && ((r.x -= t / 2), (r.y -= e / 2)),
            this.offset(r),
            n &&
              (this.clear(),
              this.startDraw(),
              i
                ? this.drawRect(-t / 2, -e / 2, t, e)
                : this.drawRect(0, 0, t, e),
              this.endFill()),
            r
          );
        }),
        (e.prototype.circle = function (t, e) {
          void 0 === e && (e = !1);
          var i = new PIXI.Point(),
            n = Math.random() * Math.PI * 2,
            r = Math.sqrt(Math.random());
          return (
            (i.x = Math.cos(n) * t * r),
            (i.y = Math.sin(n) * t * r),
            this.offset(i),
            e &&
              (this.clear(),
              this.startDraw(),
              this.drawCircle(0, 0, t),
              this.endFill()),
            i
          );
        }),
        (e.prototype.circleDonut = function (t, e, i) {
          void 0 === i && (i = !1);
          var n = new PIXI.Point(),
            r = Math.random() * Math.PI * 2,
            o = Math.pow(Math.random(), 0.5 + 0.5 * e),
            s = t * e;
          return (
            (n.x = Math.cos(r) * ((t - s) * o + s)),
            (n.y = Math.sin(r) * ((t - s) * o + s)),
            this.offset(n),
            i &&
              (this.clear(),
              this.startDraw(),
              this.drawCircle(0, 0, t),
              e > 0 &&
                (this.beginHole(), this.drawCircle(0, 0, s), this.endHole()),
              this.endFill()),
            n
          );
        }),
        (e.prototype.ellipse = function (t, e, i) {
          void 0 === i && (i = !1);
          var n = new PIXI.Point(),
            r = Math.random() * Math.PI * 2,
            o = Math.sqrt(Math.random());
          return (
            (n.x = Math.cos(r) * o * t),
            (n.y = Math.sin(r) * o * e),
            this.offset(n),
            i &&
              (this.clear(),
              this.startDraw(),
              this.drawEllipse(0, 0, t, e),
              this.endFill()),
            n
          );
        }),
        (e.prototype.dotTest = function (t, e) {
          for (var i = new PIXI.Graphics(), n = 0; n < t; n++) {
            var r = e();
            (r.x -= this.x),
              (r.y -= this.y),
              i.beginFill(16776960),
              i.drawCircle(r.x, r.y, 2),
              i.endFill();
          }
          this.addChild(i);
        }),
        e
      );
    })(PIXI.Graphics),
    N = (function (t) {
      function e(e) {
        var i = this;
        t.call(this);
        var n = function (t, n) {
            var r = new o.Sprite(
              e.resources.spritesheets.ui["note_" + t + ".png"]
            );
            return (
              r.anchor.set(0.4, 0.7),
              v.scale(i, r, t + "Scale", 0, 1.5, 0.1).then(function () {
                return v.scale(i, r, t + "Scale", 1.5, 0.5, 0.4);
              }),
              v.timeout(i, 0.4).then(function () {
                return v.alpha(i, r, t + "Alpha", 1, 0, 0.1);
              }),
              v.rotate(i, r, t + "Rotate", n, -n, 0.25, v.Ease.cubic, 2),
              r
            );
          },
          r = n(0, -20);
        v.vector(this, r, "0Move", new o.Point(-10, -100), 0.5),
          this.addChild(r),
          v
            .timeout(this, 0.1)
            .then(function () {
              var t = n(2, 15);
              return (
                (t.x = -20),
                v.vector(i, t, "2Move", new o.Point(-50, -85), 0.5),
                i.addChild(t),
                v.timeout(i, 0.1)
              );
            })
            .then(function () {
              var t = n(1, 15);
              return (
                (t.x = 20),
                i.addChild(t),
                v.vector(i, t, "1Move", new o.Point(40, -60), 0.5)
              );
            })
            .then(function () {
              i.task.clear(), i.destroy();
            });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    D = (function (t) {
      function e(e, i) {
        var n = this;
        t.call(this);
        var r = new o.Sprite(e.resources.spritesheets.ui["car_smoke_0.png"]);
        r.rotation = A.float(2 * Math.PI);
        var s = 0.25;
        v.timeout(this, 0.1).then(function () {
          return v.alpha(n, r, "spriteAlpha", 1, 0, 0.15, v.Ease.accel);
        }),
          v.scale(this, r, "spriteScale", 1, 0.5, s),
          v.vector(this, r, "spriteMove", i, s).then(function () {
            n.task.clear(), n.destroy();
          }),
          this.addChild(r);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    z = (function (t) {
      function e(e) {
        var i = this;
        t.call(this);
        var n = new o.Sprite(
          e.resources.spritesheets.ui["effect_1_surprised.png"]
        );
        n.anchor.set(0.5, 0.83),
          v
            .scale(this, n, "spriteScale", 0.5, 1, 0.1, v.Ease.quadratic(-2))
            .then(function () {
              return v.timeout(i, 0.15);
            })
            .then(function () {
              return v.alpha(i, n, "spriteAlpha", 1, 0, 0.15);
            })
            .then(function () {
              i.task.clear(), i.destroy();
            }),
          this.addChild(n);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    U = (function (t) {
      function e(e, i) {
        var n = this;
        t.call(this, M.data.crashParticle, e ? 1 : 0, i);
        v.alpha(this, this.container, "alpha", 1, 0, 0.25, v.Ease.accel),
          v
            .scale(this, this.container, "scale", 1, 1.5, 0.25)
            .then(function () {
              return n.emit("destroy");
            });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(E),
    G = (function (t) {
      function e() {
        var e = this;
        t.call(this);
        var i = new o.Graphics();
        i.beginFill(A.array([16743830, 16777215, 16771965, 4973055])),
          i.drawRect(0, 0, 15, 12),
          i.pivot.set(i.width / 2, i.height / 2);
        var n = A.float(-0.5, 0.5),
          r = function () {
            return 2 * A.int(1) - 1;
          };
        v.tween(
          this,
          "skew",
          n,
          n + r() * Math.PI,
          0.2,
          function (t) {
            return (i.skew.y = t);
          },
          v.Ease.linear,
          0,
          !1
        ),
          v
            .vector(
              this,
              i,
              "move",
              new o.Point(A.float(-20, 20), -200),
              0.166,
              v.Ease.decel2
            )
            .then(function () {
              return (
                v.scale(e, i, "scale", 1, 0.2, 0.9),
                v.timeout(e, 0.8).then(function () {
                  return v.alpha(e, i, "alpha", 1, 0, 0.1);
                }),
                v.vector(
                  e,
                  i,
                  "move",
                  new o.Point(r() * A.float(-5, 80), A.float(120, 320)),
                  0.9
                )
              );
            })
            .then(function () {
              e.task.clear(), e.destroy();
            }),
          this.addChild(i);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    R = (function (t) {
      function e() {
        var e = this;
        t.call(this);
        for (var i = new j(), n = 0; n < 20; n++) {
          var r = new G();
          (r.position = i.circle(80)), this.addChild(r);
        }
        v.timeout(this, 1.5).then(function () {
          e.task.clear(), e.destroy();
        });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    F = function () {};
  (F.bool2Bit = function (t) {
    if (0 === t.length) return 0;
    for (var e = Number(t[t.length - 1]), i = t.length - 2; i >= 0; i--)
      e = 2 * e + Number(t[i]);
    return e;
  }),
    (F.bit2Bool = function (t, e) {
      void 0 === e && (e = 0);
      for (var i = [], n = 0; e <= 0 ? 0 !== t : n < e; n++) {
        var r = t % 2 == 1;
        i.push(r), (t = Math.floor(t / 2));
      }
      return i;
    }),
    (F.get = function (t, e) {
      return Math.floor(t / Math.pow(2, e)) % 2 == 1;
    }),
    (F.set = function (t, e, i) {
      return F.get(t, e) === i ? t : t + (i ? 1 : -1) * Math.pow(2, e);
    }),
    (F.bitCount = function (t) {
      return (
        (16843009 *
          (((t =
            (858993459 & (t -= (t >> 1) & 1431655765)) +
            ((t >> 2) & 858993459)) +
            (t >> 4)) &
            252645135)) >>
        24
      );
    });
  var Y = (function (t) {
      function e(e, i, n, r, s, a, h) {
        t.call(this),
          (this.$ = e),
          (this.commonData = i),
          (this.stage = n),
          (this.isoBoard = r),
          (this.offsetY = s),
          (this.id = h),
          (this.map = []),
          (this.walls = []),
          (this.edge = 100),
          (this.carCount = 0);
        var c = A.int(n.stageSetting.carCount[0], n.stageSetting.carCount[1]);
        (this.stageData = this.generateStage(a, c)),
          (this.size = this.stageData.size),
          (this.wallIds = this.stageData.walls.sort(function (t, e) {
            return t - e;
          })),
          (this.model = new o.Container()),
          (this.model.alpha = 0.5),
          (this.model.y = 200),
          (this.carModelContainer = new o.Container()),
          (this.map = k.array2D(this.size, this.size, null)),
          (this.pivot.y = (this.size * P.UNIT_SIZE * P.RATIO) / 2),
          this.scale.set(6 / this.size),
          (this.offsetY = s / this.scale.x - this.pivot.y);
        for (var u = 0; u < this.wallIds.length; u++)
          this.addWall(this.wallIds[u]);
        for (var p = [], l = 0; l < 15; l++)
          F.get(i.carHasSkin, l) && p.push(l);
        for (var d = 0; d < this.stageData.cars.length; d++) {
          var f = M.data["car_" + A.array(p) + "_" + A.int(2)];
          this.addCar(f, this.stageData.cars[d]);
        }
        this.y = s;
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.addCar = function (t, e) {
          var i = this,
            n = new o.Point(e.x, e.y),
            r = e.dir % 2 == 1,
            s = new o.Point();
          (s.x = r ? t.size.y : t.size.x), (s.y = r ? t.size.x : t.size.y);
          var a = new O(n, s, r),
            h = new I(a, t, e.dir, this.offsetY);
          this.isoBoard.resisterObject(h);
          var c = P.UNIT_SIZE;
          return (
            (h.ix = n.x * c + (s.x * c) / 2),
            (h.iy = n.y * c + (s.y * c) / 2),
            this.translate(a, n),
            this.writeMap(a, !0),
            h.on("smoking", function () {
              i.emit("smokingParticle", h);
            }),
            h.on("operate", function (t) {
              i.moveCar(h, t, function (t) {
                i.carCount <= 0 && i.emit("clear");
              });
            }),
            this.carModelContainer.addChild(a),
            this.carCount++,
            h
          );
        }),
        (e.prototype.addWall = function (t) {
          var e = this.size,
            i = new B(this.$, t, t % (2 * e) >= e, this.offsetY);
          this.isoBoard.resisterObject(i);
          var n = P.UNIT_SIZE,
            r = [
              new o.Point(n / 2, -5),
              new o.Point(e * n + 5, n / 2),
              new o.Point(n / 2, e * n + 5),
              new o.Point(-5, n / 2),
            ],
            s = Math.floor(t / e),
            a = t % e,
            h = r[s];
          s % 2 == 0 ? (h.x = h.x + a * n) : (h.y = h.y + a * n),
            (i.iso = h),
            this.walls.push(i);
        }),
        (e.prototype.breakHalfOfTheWalls = function () {
          for (
            var t = this,
              e = k.natural(this.wallIds.length),
              i = k.shuffle(e),
              n = i.slice(Math.ceil(i.length / 2)).sort(function (t, e) {
                return e - t;
              }),
              r = function (e) {
                var i = n[e],
                  r = t.walls[i];
                r.hammerBreak().then(function () {
                  return t.isoBoard.destroyObject(r);
                }),
                  t.wallIds.splice(i, 1),
                  t.walls.splice(i, 1);
              },
              o = 0;
            o < n.length;
            o++
          )
            r(o);
        }),
        (e.prototype.booleanMapping = function (t) {
          for (
            var e = k.array2D(this.size, this.size, !1), i = 0;
            i < e.length;
            i++
          )
            for (var n = 0; n < e[0].length; n++) {
              var r = this.map[i][n];
              r !== t && null !== r && (e[i][n] = !0);
            }
          return e;
        }),
        (e.prototype.booleanMappingWithWalls = function (t) {
          for (
            var e = k.array2D(this.size + 2, this.size + 2, !1),
              i = this.size,
              n = 0;
            n < this.wallIds.length;
            n++
          ) {
            var r = this.wallIds[n];
            r < i
              ? (e[0][r + 1] = !0)
              : r < 2 * i
              ? (e[r - i + 1][i + 1] = !0)
              : r < 3 * i
              ? (e[i + 1][r - (i + i) + 1] = !0)
              : r < 4 * i && (e[r - (2 * i + i) + 1][0] = !0);
          }
          for (var o = 0; o < this.size; o++)
            for (var s = 0; s < this.size; s++) {
              var a = this.map[o][s];
              a !== t && null !== a && (e[o + 1][s + 1] = !0);
            }
          return e;
        }),
        (e.prototype.canTranslate = function (t, e) {
          for (
            var i = this.booleanMappingWithWalls(t), n = 0;
            n < t.size.y;
            n++
          )
            for (var r = 0; r < t.size.x; r++) {
              var o = e.x + r + 1,
                s = e.y + n + 1;
              if (
                !(o < 0 || s < 0 || o >= i[0].length || s >= i.length) &&
                i[s][o]
              )
                return !1;
            }
          return !0;
        }),
        (e.prototype.translate = function (t, e) {
          (t.x = e.x * this.edge),
            (t.y = e.y * this.edge + this.offsetY),
            (t.point = e.clone());
        }),
        (e.prototype.getModelPoint = function (t, e) {
          var i = function (t) {
              return t ? 1 : -1;
            },
            n = t.vertical ? 0 : i(e),
            r = t.vertical ? i(e) : 0,
            o = t.point.clone();
          return (o.x += n), (o.y += r), o;
        }),
        (e.prototype.canMoveCount = function (t, e) {
          var i = function (t) {
              return t ? 1 : -1;
            },
            n = t.vertical ? 0 : i(e),
            r = t.vertical ? i(e) : 0,
            o = t.point.clone();
          (o.x += n), (o.y += r);
          for (var s = 0; this.canTranslate(t, o); ) {
            if (this.isEscape(t, o)) return { length: s + 1, escape: !0 };
            (o.x += n), (o.y += r), s++;
          }
          return { length: s, escape: !1 };
        }),
        (e.prototype.canMove1 = function (t, e) {
          var i = this.getModelPoint(t, e);
          return this.canTranslate(t, i);
        }),
        (e.prototype.move1 = function (t, e) {
          var i = this.getModelPoint(t, e);
          this.writeMap(t, !1), this.translate(t, i), this.writeMap(t, !0);
        }),
        (e.prototype.moveCar = function (t, e, i) {
          var n = this;
          void 0 === i && (i = function () {}), (t.moving = !0);
          var r = 0;
          1 === this.id && e && 0 === t.dir && t.model.point.y >= this.size - 3
            ? (r = 1)
            : 2 === this.id &&
              !e &&
              2 === t.dir &&
              t.model.point.y < 3 &&
              (r = 2);
          var o = function () {
              var o = function () {
                h.stop(n.$, "carmove"),
                  h.play(n.$, "carmove"),
                  n.destroyCarModel(t),
                  n.emit("escape", t.position),
                  (r
                    ? n.escape(t, r)
                    : t.turn(!1, e === t.dir >= 2).then(function () {
                        return n.escape(t);
                      })
                  ).then(function () {
                    return n.emit("goal");
                  }),
                  i(!0);
              };
              if (n.checkCollide(t, e)) {
                n.emit("surprisedParticle", t);
                var s = function () {
                  n.checkCollide(t, e) ? v.timeout(t, 0.05).then(s) : o();
                };
                s();
              } else o();
            },
            s = function () {
              var r = n.getModelPoint(t.model, e);
              n.canTranslate(t.model, r)
                ? (n.move1(t.model, e),
                  t.move1(e, 15).then(function () {
                    n.isEscape(t.model) ? o() : s();
                  }))
                : (function () {
                    n.emit("crash");
                    var r = new U(t.dir % 2 == 1, n.offsetY);
                    n.isoBoard.resisterObject(r),
                      (r.scale = n.scale.clone()),
                      r.on("destroy", function () {
                        n.isoBoard.destroyObject(r);
                      }),
                      (r.iso = t.iso.clone());
                    var o = e ? 1 : -1;
                    t.dir % 2 == 0
                      ? (r.ix += o * P.UNIT_SIZE)
                      : (r.iy += o * P.UNIT_SIZE),
                      t.crash(e).then(function () {
                        (t.moving = !1), i(!1);
                      });
                  })();
            };
          s();
        }),
        (e.prototype.checkCollide = function (t, e) {
          var i = function (t) {
              return t ? 1 : -1;
            },
            n = (t.model.vertical ? 0 : i(e)) * P.UNIT_SIZE * 1.5,
            r = (t.model.vertical ? i(e) : 0) * P.UNIT_SIZE * 1.5,
            s = t.iso.clone();
          (s.x += n), (s.y += r), (s.y += this.offsetY);
          return this.stage.escapingCars.some(function (t) {
            return (
              (e = t),
              (i = new o.Point(50, 50)),
              ((n = e.iso.clone()).y += e.offsetY),
              e.dir % 2 == 0
                ? ((i.x *= 5), (n.x += 200 * (0 === e.dir ? 1 : -1)))
                : ((i.y *= 5), (n.y += 200 * (1 === e.dir ? 1 : -1))),
              n.x - i.x <= s.x &&
                n.y - i.y <= s.y &&
                n.x + i.x >= s.x &&
                n.y + i.y >= s.y
            );
            var e, i, n;
          });
        }),
        (e.prototype.escape = function (t, e) {
          var i = this;
          void 0 === e && (e = 0);
          var n = P.UNIT_SIZE;
          this.stage.escapingCars.push(t);
          var r,
            s = function (e, i, n) {
              return (
                void 0 === n && (n = !1),
                new Promise(function (r) {
                  t.moveTo(new o.Point(e, i), 15)
                    .then(function () {
                      return t.turn(n);
                    })
                    .then(r);
                })
              );
            };
          if (0 === this.id) {
            var a = [
                function () {
                  return s(i.size * n, 1.5 * -n);
                },
                function () {
                  return s((i.size + 1.5) * n, i.size * n);
                },
                function () {
                  return s(0, (i.size + 1.5) * n);
                },
                function () {
                  return t.moveTo(new o.Point(1.5 * -n, 1.5 * -n), 15);
                },
              ],
              h = [];
            h.unshift(function () {
              return a[a.length - 1]().then();
            });
            for (
              var c = function (t) {
                  h.unshift(function () {
                    return a[t]().then(h[t + 1]);
                  });
                },
                u = a.length - 2;
              u >= 0;
              u--
            )
              c(u);
            for (var p = [], l = 0; l < h.length; l++) p.push(h[l]);
            r = p[t.dir]();
          } else {
            var d = 1 === this.id ? this.size * n : 0,
              f = 1 === this.id ? 0 : -this.size * n,
              v = [
                function () {
                  return s(i.size * n, 1.5 * -n);
                },
                function () {
                  return s((i.size + 1.5) * n, (i.size - 3) * n, !0);
                },
                function () {
                  return s(d + i.size * n, d - 1.5 * n);
                },
                function () {
                  return s(d + (i.size + 1.5) * n, d + i.size * n);
                },
                function () {
                  return s(d, d + (i.size + 1.5) * n);
                },
                function () {
                  return s(d - 1.5 * n, d + 3 * n, !0);
                },
                function () {
                  return s(f, f + (i.size + 1.5) * n);
                },
                function () {
                  return t.moveTo(new o.Point(f - 1.5 * n, f - 1.5 * n), 15);
                },
              ],
              g = [];
            g.unshift(function () {
              return v[v.length - 1]().then();
            });
            for (
              var _ = function (t) {
                  g.unshift(function () {
                    return v[t]().then(g[t + 1]);
                  });
                },
                y = v.length - 2;
              y >= 0;
              y--
            )
              _(y);
            for (var m = [], w = 0; w < g.length; w++) m.push(g[w]);
            r =
              m[
                1 === e
                  ? 2
                  : 2 === e
                  ? 6
                  : 2 === this.id
                  ? t.dir + 2
                  : 4 * Math.floor(t.dir / 2) + t.dir
              ]();
          }
          return (
            r
              .then(function () {
                i.emit("goal");
                var e = (10 * n) / i.scale.x;
                return t.moveVector(new o.Point(0, -e), e / P.UNIT_SIZE / 15);
              })
              .then(function () {
                i.isoBoard.destroyObject(t);
              }),
            r
          );
        }),
        (e.prototype.destroyCarModel = function (t) {
          t.model.task.clear(),
            t.model.destroy(),
            this.writeMap(t.model, !1),
            this.carCount--;
        }),
        (e.prototype.isEscape = function (t, e) {
          return (
            e || (e = t.point),
            e.x + t.size.x - 1 >= this.size ||
              e.y + t.size.y - 1 >= this.size ||
              e.x < 0 ||
              e.y < 0
          );
        }),
        (e.prototype.isEscapeCompletely = function (t, e) {
          return (
            e || (e = t.point),
            e.x >= this.size ||
              e.y >= this.size ||
              e.x + t.size.x <= 0 ||
              e.y + t.size.y <= 0
          );
        }),
        (e.prototype.writeMap = function (t, e) {
          for (var i = t.point, n = 0; n < t.size.y; n++)
            for (var r = 0; r < t.size.x; r++) {
              var o = i.x + r,
                s = i.y + n;
              o < 0 ||
                s < 0 ||
                o >= this.size ||
                s >= this.size ||
                (this.map[s][o] = e ? t : null);
            }
        }),
        (e.prototype.generateStage = function (t, e) {
          for (
            var i = k.array2D(t, t, !1), n = [], r = [], s = 0;
            s < 2 * t;
            s++
          ) {
            var a = s;
            Math.random() > 0.1 && (A.bool() && (a = 2 * t + s), r.push(a));
          }
          for (
            var h = r.sort(function (t, e) {
                return t - e;
              }),
              c = k.natural(4 * t),
              u = h.length - 1;
            u >= 0;
            u--
          )
            c.splice(h[u], 1);
          for (
            var p = function (e) {
                return e % (2 * t) >= t;
              },
              l = function (e) {
                return e >= 2 * t;
              },
              d = function (t) {
                return (
                  t.y < 0 ||
                  t.y >= i.length ||
                  t.x < 0 ||
                  t.x >= i[0].length ||
                  !i[t.y][t.x]
                );
              },
              f = function (e) {
                var i = [],
                  n = p(e),
                  r = n === l(e) ? 1 : -1,
                  s = (function (e) {
                    return p(e)
                      ? new o.Point(l(e) ? 0 : t - 1, e % t)
                      : new o.Point(e % t, l(e) ? t - 1 : 0);
                  })(e),
                  a = s.clone();
                if (d(s))
                  for (
                    var h = 1;
                    h < t &&
                    ((a = s.clone()),
                    n ? (s.x = s.x + r) : (s.y = s.y + r),
                    d(s));
                    h++
                  ) {
                    var c = n ? 0 : 1,
                      u = {
                        x: 1 === r ? a.x : s.x,
                        y: 1 === r ? a.y : s.y,
                        dir: c,
                      };
                    i.push(u);
                  }
                return i;
              },
              v = function (t) {
                var e = new o.Point(t.x, t.y);
                (i[e.y][e.x] = !0),
                  t.dir % 2 == 0 ? e.x++ : e.y++,
                  (i[e.y][e.x] = !0),
                  (t.dir += 2 * A.int(1)),
                  n.push(t);
              },
              g = function () {
                for (var t = c.length - 1; t >= 0; t--) {
                  var e = c[t];
                  0 === f(e).length && c.splice(t, 1);
                }
              },
              _ = function () {
                for (var e = [[], []], i = 0; i < c.length; i++) {
                  var n = c[i];
                  e[Math.floor((n % (2 * t)) / t)].push(n);
                }
                return e;
              },
              y = [],
              m = 0;
            m < t;
            m++
          )
            y[m] = m + 1;
          for (var w = 0; w < e && (g(), 0 !== c.length); w++) {
            var b = _(),
              C = b[w % 2];
            0 === C.length && (C = b[(w + 1) % 2]);
            var x = A.array(C),
              S = f(x),
              T = y.slice(0, S.length);
            v(S[A.weight(T)]);
          }
          return { size: t, cars: n, walls: h };
        }),
        e
      );
    })(r.Container),
    L = (function (t) {
      function e(e) {
        var i = this;
        t.call(this),
          (this.$ = e),
          (this.timerUnit = 23),
          (this.timerPool = []),
          (this.sprite = new o.Sprite(
            e.resources.spritesheets.exit["gate_0_0.png"]
          )),
          this.sprite.anchor.set(0.15, 0.8),
          this.task.on("gateWork", function (t) {
            i.sprite.texture = i.getTexture(i.nearest0());
            for (var e = i.timerPool.length - 1; e >= 0; e--)
              (i.timerPool[e] += t.delta),
                i.timerPool[e] > i.timerUnit && i.timerPool.splice(e, 1);
          }),
          this.addChild(this.sprite);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.open = function () {
          this.timerPool.push(-this.timerUnit);
        }),
        (e.prototype.nearest0 = function () {
          var t = -this.timerUnit;
          return (
            this.timerPool.forEach(function (e) {
              e * e < t * t && (t = e);
            }),
            t
          );
        }),
        (e.prototype.getTexture = function (t) {
          var e = Math.floor(t) + this.timerUnit,
            i = 0;
          return (
            (i =
              e < 0 || e > 2 * this.timerUnit
                ? 0
                : e < 8
                ? e
                : 2 * this.timerUnit - 8 < e
                ? 2 * this.timerUnit - e
                : 7),
            this.$.resources.spritesheets.exit["gate_0_" + i + ".png"]
          );
        }),
        e
      );
    })(r.Container),
    q = (function (t) {
      function e(e, i, n, r) {
        var s = this;
        t.call(this),
          (this.$ = e),
          (this.stageSetting = n),
          (this.level = r),
          (this.remainBoard = 0),
          (this.boards = []),
          (this.escapingCars = []);
        var a = Math.min(6 + 2 * r, 10);
        (this.isoBoard = new P(e)), this.isoBoard.scale.set(6 / a);
        var h = new L(e);
        switch (((h.scale = this.isoBoard.scale.clone()), r)) {
          case 0:
            h.position = P.toIso(new o.Point(-200, -300));
            break;
          case 1:
            h.position = P.toIso(new o.Point(-170, -245));
            break;
          case 2:
            h.position = P.toIso(new o.Point(-150, -240));
            break;
          case 3:
            h.position = P.toIso(new o.Point(-300, -390));
        }
        for (
          var c = new o.Container(),
            u = new o.Container(),
            p = new o.Container(),
            l = new o.Container(),
            d = function (t) {
              return s.toLocal(s.isoBoard.toGlobal(t.clone()));
            },
            f = new o.Container(),
            g = Math.floor(r / 3),
            _ = 0;
          _ <= g;
          _++
        ) {
          var y = 360 * (_ - g / 2),
            m = 0 === g ? 0 : _ + 1,
            w = new Y(e, i, this, this.isoBoard, y, a, m);
          w.on("crash", function () {
            s.emit("comboStop");
          }),
            w.on("surprisedParticle", function (t) {
              s.emit("comboStop");
              var i = new z(e);
              (i.scale = s.isoBoard.scale.clone()),
                t.dir % 2 == 1 && (i.scale.x *= -1);
              var n = t.position.clone();
              (n.y += -50), (i.position = d(n)), l.addChild(i);
            }),
            w.on("smokingParticle", function (t) {
              var i = P.toIso(T.mlt(t.dirUnitVector, 50)),
                n = new D(e, i);
              n.scale = s.isoBoard.scale.clone();
              var r = t.position.clone();
              (r.x += 25 * A.float(-0.5, 0.5)),
                (r.y += 25 * A.float(-0.5, 0.5)),
                (n.position = d(r)),
                c.addChild(n);
            }),
            w.on("escape", function (t) {
              s.emit("escape");
              var i = new N(e);
              i.scale = s.isoBoard.scale.clone();
              var n = t.clone();
              (n.y += -50), (i.position = d(n)), u.addChild(i);
            }),
            w.on("goal", function () {
              h.open(),
                v.timeout(s, 0.2).then(function () {
                  s.emit("gateout");
                  var t = new R();
                  (t.position = h.position.clone()),
                    (t.scale = s.isoBoard.scale.clone()),
                    (t.x += 150 * s.isoBoard.scale.x),
                    (t.y += -100 * s.isoBoard.scale.y),
                    p.addChild(t);
                });
            }),
            w.on("clear", function () {
              s.remainBoard--, s.remainBoard <= 0 && s.emit("gameclear");
            }),
            f.addChild(w),
            this.boards.push(w),
            this.remainBoard++;
        }
        this.addChild(c),
          this.addChild(h),
          this.addChild(f),
          this.addChild(this.isoBoard),
          this.addChild(u),
          this.addChild(p),
          this.addChild(l);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.breakHalfOfTheWalls = function () {
          var t = this;
          this.boards.forEach(function (t) {
            return t.breakHalfOfTheWalls();
          });
          v.timeout(this, 0.175)
            .then(function () {
              return h.play(t.$, "hammerhit"), v.timeout(t, 0.425);
            })
            .then(function () {
              return h.play(t.$, "hammerbreak");
            });
        }),
        e
      );
    })(r.Container),
    $ = (function (t) {
      function e(e) {
        t.call(this);
        var i = new o.Sprite(e.resources.spritesheets.text["text_ad_0.png"]);
        i.anchor.set(0.5), e.vars.env.hasRewardAd && this.addChild(i);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    X = function () {};
  (X.reward = function (t) {
    return new Promise(function (e, i) {
      h.muteBGM(t, "bgm"),
        t.vars.api
          .viewRewardAdAsync()
          .then(function (i) {
            h.unmuteBGM(t, "bgm"), e();
          })
          .catch(function (e) {
            h.unmuteBGM(t, "bgm"),
              e.type === t.vars.enum.errors.AdSkipped ? i(!1) : i(!0);
          });
    });
  }),
    (X.interstitial = function (t) {
      return new Promise(function (e) {
        h.muteBGM(t, "bgm");
        var i = function (i) {
          h.unmuteBGM(t, "bgm"), e();
        };
        t.vars.api.viewAdAsync().then(i).catch(i);
      });
    });
  var Z = (function (t) {
      function e(e) {
        var i = this,
          n = new o.Sprite(e.resources.images.popup_2);
        n.anchor.set(0.5), t.call(this, e, n);
        var r = new o.Sprite(
            e.resources.spritesheets.ui["popup_hammer_image.png"]
          ),
          s = new o.Sprite(
            e.resources.spritesheets.text["popup_text_hammer_0.png"]
          );
        this.ok = new f(
          e,
          e.resources.spritesheets.ui["btn_1.png"],
          e.resources.spritesheets.ui["btn_ok_0.png"]
        );
        var a = new $(e);
        (this.cancel = new d(
          e,
          e.resources.spritesheets.text["text_cansel_0.png"]
        )),
          r.anchor.set(0.5),
          s.anchor.set(0.5),
          (r.y = -160),
          (s.y = 30),
          (this.ok.y = 170),
          (a.y = 255),
          (this.cancel.y = 400),
          this.ok.on("buttontap", function () {
            i.ok.setEnable(!1),
              X.reward(e)
                .then(function () {
                  i.emit("complete");
                })
                .catch(function () {
                  i.ok.setEnable(!0);
                });
          }),
          this.cancel.on("buttontap", function () {
            i.hide();
          }),
          n.addChild(a),
          n.addChild(r),
          n.addChild(s),
          n.addChild(this.ok),
          this.main.addChild(this.cancel);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.show = function () {
          var e = this;
          return (
            this.ok.scale.set(0),
            (this.cancel.alpha = 0),
            t.prototype.show.call(this).then(function () {
              return (
                v.timeout(e, 0.15).then(function () {
                  return v.alpha(e, e.cancel, "cancelAlpha", 0, 1, 0.1);
                }),
                v.scale(e, e.ok, "yesScale", 0, 1, 0.25, v.Ease.quadratic(-1.5))
              );
            })
          );
        }),
        (e.prototype.hide = function () {
          return (
            v.alpha(this, this.cancel, "cancelAlpha", 1, 0, 0.2),
            t.prototype.hide.call(this)
          );
        }),
        e
      );
    })(_),
    H = (function (t) {
      function e(e) {
        var i = this,
          n = new o.Sprite(e.resources.images.popup_2);
        n.anchor.set(0.5), t.call(this, e, n), (this.screen.visible = !1);
        var r = new o.Sprite(
            e.resources.spritesheets.text["popup_title_failed_0.png"]
          ),
          s = new o.Sprite(
            e.resources.spritesheets.text["popup_text_skip_0.png"]
          ),
          a = new f(
            e,
            e.resources.spritesheets.ui["btn_1.png"],
            e.resources.spritesheets.text["btn_yes_0.png"]
          ),
          h = new f(
            e,
            e.resources.spritesheets.ui["btn_0.png"],
            e.resources.spritesheets.text["btn_no_0.png"]
          ),
          c = new $(e);
        r.anchor.set(0.5),
          s.anchor.set(0.5),
          (r.y = -220),
          (s.y = -110),
          (a.y = 30),
          (h.y = 200),
          (c.y = (a.y + h.y) / 2),
          a.scale.set(0),
          h.scale.set(0);
        var u = function () {
          i.hide().then(function () {
            return i.emit("hid");
          });
        };
        a.on("buttontap", function () {
          a.setEnable(!1),
            X.reward(e)
              .then(function () {
                i.emit("complete"), u();
              })
              .catch(function () {
                a.setEnable(!0);
              });
        }),
          h.on("buttontap", u),
          n.addChild(c),
          n.addChild(r),
          n.addChild(s),
          n.addChild(h),
          n.addChild(a),
          this.show().then(function () {
            v.scale(i, a, "yesScale", 0, 1, 0.25, v.Ease.quadratic(-2)),
              v.timeout(i, 0.166).then(function () {
                return v.scale(
                  i,
                  h,
                  "noScale",
                  0,
                  1,
                  0.25,
                  v.Ease.quadratic(-2)
                );
              });
          });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(_),
    W = (function (t) {
      function e(e, i) {
        var n = this,
          r = new o.Sprite(e.resources.images.popup_3);
        r.anchor.set(0.5), t.call(this, e, r), (this.screen.visible = !1);
        var s = new o.Container(),
          a = new w(
            e.resources.spritesheets.number,
            "no_0_",
            ".png",
            i.earnCoin
          ),
          h = new o.Sprite(e.resources.spritesheets.ui["coin_icon_0.png"]),
          c = new o.Sprite(e.resources.spritesheets.text["text_get_0.png"]);
        h.anchor.set(0, 0.5),
          a.anchor.set(0, 0.5),
          c.anchor.set(0, 0.5),
          h.scale.set(0.6),
          (a.x = h.width + 0),
          (c.x = a.x + a.width + 0),
          (c.y = 2),
          s.addChild(h),
          s.addChild(a),
          s.addChild(c),
          (s.pivot.x = s.width / 2);
        var u = new f(
          e,
          e.resources.spritesheets.ui["btn_1.png"],
          e.resources.spritesheets.text["btn_getx2_0.png"]
        );
        this.get1x = new d(e, e.resources.spritesheets.text["text_get_1.png"]);
        var p = new $(e);
        (s.y = -90),
          (u.y = 35),
          (p.y = 120),
          (this.get1x.y = 330),
          u.scale.set(0),
          (this.get1x.alpha = 0),
          u.on("buttontap", function () {
            u.setEnable(!1),
              (n.main.interactiveChildren = !1),
              X.reward(e)
                .then(function () {
                  u.scale.set(1),
                    n.task.clear("get2xScale"),
                    (i.earnCoin *= 2),
                    n.emit("buttontap", !0);
                })
                .catch(function () {
                  (n.main.interactiveChildren = !0), u.setEnable(!0);
                });
          }),
          this.get1x.on("buttontap", function () {
            (n.main.interactiveChildren = !1), n.emit("buttontap", !1);
          }),
          r.addChild(p),
          r.addChild(s),
          r.addChild(u),
          this.main.addChild(this.get1x),
          this.show()
            .then(function () {
              return v.scale(
                n,
                u,
                "get2xScale",
                0,
                1,
                0.25,
                v.Ease.quadratic(-1.5)
              );
            })
            .then(function () {
              return (
                v.scale(n, u, "get2xScale", 1, 1.05, 0.4, v.Ease.decel, 0),
                v.timeout(n, 1.5)
              );
            })
            .then(function () {
              return v.alpha(n, n.get1x, "get1xAlpha", 0, 1, 0.2);
            });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.hide = function () {
          var e = this;
          v.alpha(this, this.get1x, "get1xAlpha", 1, 0, 0.2);
          var i = t.prototype.hide.call(this);
          return (
            i.then(function () {
              e.task.clear(), e.destroy();
            }),
            i
          );
        }),
        e
      );
    })(_),
    V = (function (t) {
      function e(e, i, n) {
        var r = this,
          s = new o.Sprite(e.resources.images.popup_2);
        s.anchor.set(0.5), t.call(this, e, s), (this.screen.visible = !1);
        var a = new o.Sprite(
            e.resources.spritesheets.ui["puzzle_piece_" + i + "_" + n + ".png"]
          ),
          h = new o.Sprite(
            e.resources.spritesheets.ui["puzzle_piece_shadow_" + n + ".png"]
          ),
          c = new o.Sprite(
            e.resources.spritesheets.text["popup_text_piece_0.png"]
          );
        this.ok = new f(
          e,
          e.resources.spritesheets.ui["btn_1.png"],
          e.resources.spritesheets.ui["btn_ok_0.png"]
        );
        var u = new $(e);
        (this.cancel = new d(
          e,
          e.resources.spritesheets.text["text_cansel_0.png"]
        )),
          c.anchor.set(0.5),
          a.anchor.set(0.5),
          h.anchor.set(0.5),
          h.scale.set(1.25),
          n % 3 == 0 && (h.x = 0 === n ? 20 : -20),
          (h.y = -160),
          (c.y = 30),
          (this.ok.y = 170),
          (u.y = 255),
          (this.cancel.y = 400),
          this.ok.on("buttontap", function () {
            r.ok.setEnable(!1),
              X.reward(e)
                .then(function () {
                  r.emit("complete"),
                    r.hide().then(function () {
                      r.task.clear(), r.destroy();
                    });
                })
                .catch(function () {
                  r.ok.setEnable(!0);
                });
          }),
          this.cancel.on("buttontap", function () {
            r.hide().then(function () {
              r.emit("cancel"), r.task.clear(), r.destroy();
            });
          }),
          s.addChild(u),
          h.addChild(a),
          s.addChild(h),
          s.addChild(c),
          s.addChild(this.ok),
          this.main.addChild(this.cancel),
          this.show();
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.show = function () {
          var e = this;
          return (
            this.ok.scale.set(0),
            (this.cancel.alpha = 0),
            t.prototype.show.call(this).then(function () {
              return (
                v.timeout(e, 0.15).then(function () {
                  return v.alpha(e, e.cancel, "cancelAlpha", 0, 1, 0.1);
                }),
                v.scale(e, e.ok, "yesScale", 0, 1, 0.25, v.Ease.quadratic(-1.5))
              );
            })
          );
        }),
        (e.prototype.hide = function () {
          return (
            v.alpha(this, this.cancel, "cancelAlpha", 1, 0, 0.2),
            t.prototype.hide.call(this)
          );
        }),
        e
      );
    })(_),
    Q = (function (t) {
      function e(e, i) {
        var n = this;
        t.call(this),
          (this.stopFilter = function () {
            return !1;
          }),
          (this.clocking = !1),
          (this._time = i);
        var r = new o.Sprite(e.resources.spritesheets.ui["time_back_0.png"]);
        this.backRed = new o.Sprite(
          e.resources.spritesheets.ui["time_back_1_red.png"]
        );
        var s = new o.Sprite(e.resources.spritesheets.ui["time_icon_0.png"]),
          a = new w(e.resources.spritesheets.number, "no_2_", ".png", i);
        r.anchor.set(0.5),
          this.backRed.anchor.set(0.5),
          s.anchor.set(0.5),
          a.anchor.set(1, 0.5),
          a.scale.set(0.7),
          (a.padding = 3),
          (this.backRed.alpha = 0),
          (s.x = -55),
          (a.x = 80);
        this.task.on("timer", function (t) {
          if (n.clocking && !(n._time <= 0 || n.stopFilter())) {
            var e = t.delta / 60;
            n._time - e <= 0
              ? ((n._time = 0), n.removeBackRed(), n.emit("timesUp"))
              : (n._time > 10 &&
                  n._time - e <= 10 &&
                  v.alpha(
                    n,
                    n.backRed,
                    "backRedAlpha",
                    0,
                    1,
                    0.25,
                    v.Ease.linear,
                    0
                  ),
                (n._time -= e),
                n.emit("update")),
              (a.number = Math.ceil(n._time));
          }
        }),
          r.addChild(this.backRed),
          r.addChild(s),
          r.addChild(a),
          this.addChild(r);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { time: { configurable: !0 } };
      return (
        (i.time.get = function () {
          return this._time;
        }),
        (e.prototype.start = function () {
          this.clocking = !0;
        }),
        (e.prototype.stop = function () {
          this.clocking = !1;
        }),
        (e.prototype.removeBackRed = function () {
          (this.backRed.alpha = 0), this.task.clear("backRedAlpha");
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    J = (function (t) {
      function e(e, i, n) {
        t.call(this), (this.$ = e), (this.id = i), (this.index = n);
        var r = 50,
          s = 140,
          a = [
            new o.Point(r / s, 0.5),
            new o.Point(0.5, r / s),
            new o.Point(0.5, 90 / s),
            new o.Point(90 / s, 0.5),
          ];
        (this.sprite = new o.Sprite(
          e.resources.spritesheets.ui["puzzle_piece_" + i + "_" + n + ".png"]
        )),
          (this.sprite.anchor = a[n]),
          this.addChild(this.sprite);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { white: { configurable: !0 } };
      return (
        (i.white.set = function (t) {
          var e = t
            ? "puzzle_piece_white_" + this.index + ".png"
            : "puzzle_piece_" + this.id + "_" + this.index + ".png";
          (this.sprite.texture = this.$.resources.spritesheets.ui[e]),
            this.sprite.scale.set(t ? 5 / 6 : 1);
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    K = (function (t) {
      function e(e, i) {
        var n = this;
        void 0 === i && (i = function () {}), t.call(this);
        var r = new o.Point(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          s = new o.Sprite(e.resources.spritesheets.ui["text_gameover_0.png"]);
        s.anchor.set(0.5),
          v.alpha(this, s, "spriteAlpha", 0, 1, 0.15),
          v
            .move(
              this,
              s,
              "spriteMove",
              new o.Point(r.x, r.y - 300),
              r,
              0.4,
              v.Ease.quadratic(-1.5)
            )
            .then(function () {
              return v.timeout(n, 1.5);
            })
            .then(function () {
              return v.alpha(n, s, "spriteAlpha", 1, 0, 0.15);
            })
            .then(function () {
              i(), n.task.clear(), n.destroy();
            }),
          this.addChild(s);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    tt = (function (t) {
      function e(e, i) {
        var n = this;
        void 0 === i && (i = function () {}), t.call(this);
        var r = new o.Point(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          s = new o.Container();
        s.interactive = !0;
        var a = new o.Sprite(
            e.resources.spritesheets.ui["text_stageclear_0.png"]
          ),
          h = new o.Sprite(e.resources.images.light_0);
        a.anchor.set(0.5),
          h.anchor.set(0.5),
          (a.position = r),
          (h.position = r),
          v.rotate(this, h, "gokoRot", 0, 360, 8, v.Ease.linear, 0, !1),
          v.alpha(this, h, "gokoAlpha", 0, 1, 0.15),
          v
            .scale(this, a, "spriteScale", 0, 1, 0.26, v.Ease.quadratic(-1.5))
            .then(function () {
              return v.timeout(n, 1.5);
            })
            .then(function () {
              return v.alpha(n, s, "mainAlpha", 1, 0, 0.166);
            })
            .then(function () {
              i(), n.task.clear(), n.destroy();
            }),
          s.addChild(h),
          s.addChild(a),
          this.addChild(s);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    et = (function (t) {
      function e(e) {
        t.call(this);
        var i = A.int(0, 9),
          n = function () {
            return e.resources.spritesheets.coin[
              "coin_" + Math.floor(i) + ".png"
            ];
          },
          r = new o.Sprite(n());
        r.anchor.set(0.5),
          this.task.on("yaw", function (t) {
            var e = t.delta > 1 ? 1 : t.delta;
            (i += e) >= 10 && (i -= 10), (r.texture = n());
          }),
          this.addChild(r);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    it = (function (t) {
      function e(e, i) {
        var n = this;
        t.call(this);
        for (
          var r = new o.Point(
              e.vars.additional.width / 2,
              e.vars.additional.height / 2
            ),
            s = [new o.Point(-50, -50), new o.Point(50, 50)],
            a = 0;
          a < 8;
          a++
        ) {
          var h = (a / 8) * Math.PI * 2,
            c = new o.Point();
          (c.x = 200 * Math.cos(h)), (c.y = 200 * Math.sin(h)), s.unshift(c);
        }
        var u = [
            new o.Point(200, 0),
            new o.Point(-200, 0),
            new o.Point(0, 200),
            new o.Point(0, -200),
            new o.Point(0, 0),
          ],
          p = k.shuffle(i ? s : u),
          l = i ? 25 : 50,
          d = p.map(function (t) {
            return new o.Point(
              t.x + A.float(-1, 1) * l,
              t.y + A.float(-1, 1) * l
            );
          }),
          f = A.float(2 * Math.PI),
          g = d.map(function (t) {
            return new o.Point(
              t.x * Math.cos(f) - t.y * Math.sin(f),
              t.x * Math.sin(f) + t.y * Math.cos(f)
            );
          }),
          _ = g.map(function (t) {
            return new o.Point(0.8 * t.x, 0.8 * t.y);
          }),
          y = new o.Sprite(e.resources.spritesheets.ui["coin_white.png"]);
        y.anchor.set(0.5),
          y.scale.set(0.425),
          y.position.set(r.x - 100, r.y - 480),
          (y.visible = !1);
        var m = new o.Container();
        (m.position = r.clone()), i || (m.y += 300);
        for (
          var w = new o.Container(),
            b = new o.Container(),
            C = new o.Sprite(e.resources.images.light_1_back),
            x = new o.Sprite(e.resources.images.light_1),
            S = function (t) {
              var i = new et(e);
              v
                .moveTo(i, i, "move", _[t], 0.166, v.Ease.decel)
                .then(function () {
                  return v.moveTo(i, i, "move", g[t], 0.25);
                })
                .then(function () {
                  return v.timeout(i, 0.033 * t);
                })
                .then(function () {
                  var t = T.dif(y.position, m.position);
                  return (
                    v.scale(i, i, "scale", 1, 0.42, 0.25),
                    v.moveTo(i, i, "move", t, 0.25, v.Ease.quadratic(0.5))
                  );
                })
                .then(function () {
                  (i.alpha = 0),
                    n.emit("landing", t),
                    0 === t
                      ? (y.visible = !0)
                      : t === g.length - 1 &&
                        v
                          .alpha(n, y, "gatherPointAlpha", 1, 0, 0.15)
                          .then(function () {
                            n.emit("endAnimation"), n.task.clear(), n.destroy();
                          });
                }),
                w.addChild(i);
            },
            M = 0;
          M < g.length;
          M++
        )
          S(M);
        if (i)
          for (
            var P = function (t) {
                var i = (t / 8) * Math.PI * 2,
                  r = new o.Point();
                (r.x = 200 * Math.cos(i)), (r.y = 200 * Math.sin(i));
                var s = new o.Sprite(
                  e.resources.spritesheets.ui["effect_kira_0.png"]
                );
                s.anchor.set(0.5),
                  v
                    .move(
                      n,
                      s,
                      "kira" + t + "Move",
                      T.mlt(r, 0.375),
                      r,
                      0.166,
                      v.Ease.decel
                    )
                    .then(function () {
                      return (
                        v.alpha(n, s, "kira" + t + "Alpha", 1, 0, 0.166),
                        v.moveTo(
                          n,
                          s,
                          "kira" + t + "Move",
                          T.mlt(r, 1.05),
                          0.166
                        )
                      );
                    }),
                  b.addChild(s);
              },
              E = 0;
            E < 8;
            E++
          )
            P(E);
        C.anchor.set(0.5),
          x.anchor.set(0.5),
          v.alpha(this, C, "shadowAlpha", 1, 0, 0.25),
          v.scale(this, x, "lightAlpha", 1, 1.2, 0.1).then(function () {
            return (
              v.alpha(n, x, "lightAlpha", 1, 0, 0.33),
              v.scale(n, x, "lightScale", 1.2, 2, 0.33)
            );
          }),
          m.addChild(C),
          m.addChild(x),
          m.addChild(b),
          m.addChild(w),
          this.addChild(m),
          this.addChild(y);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    nt = (function (t) {
      function e(e) {
        t.call(this),
          (this.$ = e),
          (this.treasure = new o.Sprite(
            e.resources.spritesheets.treasure["treasure_0.png"]
          )),
          (this.key = new o.Sprite(
            e.resources.spritesheets.ui["treasure_key_0.png"]
          )),
          (this.goko = new o.Container());
        var i = new o.Sprite(
            e.resources.spritesheets.ui["treasure_light_0.png"]
          ),
          n = new o.Sprite(e.resources.spritesheets.ui["treasure_light_1.png"]),
          r = new o.Sprite(e.resources.spritesheets.ui["treasure_light_2.png"]);
        i.anchor.set(0.5),
          n.anchor.set(0.5),
          r.anchor.set(0.5),
          v.tween(
            this,
            "gokosMove",
            0,
            1,
            0.333,
            function (t) {
              (n.alpha = t), (r.alpha = 1 - t);
            },
            v.Ease.cubic,
            0
          ),
          this.goko.addChild(n),
          this.goko.addChild(r),
          this.goko.addChild(i),
          (this.key = new o.Sprite(
            e.resources.spritesheets.ui["treasure_key_0.png"]
          )),
          this.treasure.anchor.set(0.5),
          this.key.anchor.set(0.5),
          (this.key.alpha = 0),
          (this.goko.alpha = 0),
          this.treasure.addChild(this.key),
          this.treasure.addChild(this.goko),
          this.addChild(this.treasure);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.open = function () {
          var t = this;
          return (
            (this.key.alpha = 1),
            v
              .timeout(this, 0.15)
              .then(function () {
                return (
                  v.alpha(t, t.key, "keyAlpha", 1, 0, 0.35),
                  v.alpha(t, t.goko, "gokosAlpha", 0, 1, 0.25),
                  v.tween(t, "openBox", 0, 9, 0.5, function (e) {
                    t.treasure.texture =
                      t.$.resources.spritesheets.treasure[
                        "treasure_" + Math.floor(e) + ".png"
                      ];
                  })
                );
              })
              .then(function () {
                return v.timeout(t, 0.2);
              })
          );
        }),
        e
      );
    })(r.Container),
    rt = (function (t) {
      function e(e, i, n) {
        var r = this;
        t.call(this);
        var s = new o.Point(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          a = new g(e, 16777215, 0.6),
          c = new nt(e),
          u = new J(e, i, n),
          p = new o.Sprite(e.resources.images.light_2);
        p.anchor.set(0.5),
          c.position.set(s.x, s.y + 100),
          u.position.set(s.x, s.y + 100),
          p.position.set(s.x, s.y - 100),
          (u.white = !0),
          (c.alpha = 0),
          (p.visible = !1),
          (u.visible = !1),
          (a.visible = !1),
          v.alpha(this, c, "treasureAlpha", 0, 1, 0.75),
          v
            .scale(
              this,
              c,
              "treasureScale",
              0.9,
              1,
              0.75,
              v.Ease.quadratic(-0.75)
            )
            .then(function () {
              return v.timeout(r, 0.333);
            })
            .then(function () {
              return c.open();
            })
            .then(function () {
              u.visible = !0;
              var t = 0.25;
              v.scale(r, u, "pieceScale", 0.5, 1, t, v.Ease.decel),
                v
                  .vector(
                    r,
                    u,
                    "pieceMove",
                    new o.Point(0, -350),
                    t,
                    v.Ease.decel
                  )
                  .then(function () {
                    return (
                      v.scale(r, u, "pieceScale", 1, 1.5, t, v.Ease.accel),
                      v.moveTo(
                        r,
                        u,
                        "pieceMove",
                        new o.Point(s.x, s.y - 100),
                        t,
                        v.Ease.accel
                      )
                    );
                  })
                  .then(function () {
                    return (
                      h.play(e, "skinget"),
                      (u.white = !1),
                      (p.visible = !0),
                      (a.visible = !0),
                      v.rotate(
                        r,
                        p,
                        "gokoRot",
                        0,
                        360,
                        4.5,
                        v.Ease.linear,
                        0,
                        !1
                      ),
                      v.timeout(r, 0.1).then(function () {
                        return a.fadeOut(0.42);
                      }),
                      v.timeout(r, 2.5)
                    );
                  })
                  .then(function () {
                    return v.alpha(r, r, "alpha", 1, 0, 0.15);
                  })
                  .then(function () {
                    r.emit("end"), r.task.clear(), r.destroy();
                  });
            }),
          this.addChild(c),
          this.addChild(p),
          this.addChild(u),
          this.addChild(a);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    ot = (function (t) {
      function e(e, i, n) {
        var r = this;
        void 0 === n && (n = function () {}), t.call(this);
        for (
          var s = new o.Point(
              e.vars.additional.width / 2,
              e.vars.additional.height / 2
            ),
            a = new o.Container(),
            c = new o.Sprite(e.resources.images.shop_light_0),
            u = new o.Sprite(
              e.resources.spritesheets.ui["puzzle_" + i + ".png"]
            ),
            p = new o.Sprite(e.resources.spritesheets.ui["puzzle_white_0.png"]),
            l = new o.Sprite(e.resources.spritesheets.ui["puzzle_white_0.png"]),
            d = new o.Container(),
            f = [0, 1, 3, 2],
            g = [],
            _ = 0;
          _ < f.length;
          _++
        ) {
          var y = f[_],
            m = new J(e, i, y);
          (m.x = 100 * ((y % 2) - 0.5)),
            (m.y = 100 * (Math.floor(y / 2) - 0.5)),
            (m.alpha = 0),
            d.addChild(m),
            g.push(m);
        }
        c.anchor.set(0.5),
          u.anchor.set(0.5),
          p.anchor.set(0.5),
          l.anchor.set(0.5),
          a.scale.set(1.5),
          u.scale.set(1.35),
          d.scale.set(0.81),
          (a.position = s.clone()),
          (c.visible = !1),
          (u.visible = !1);
        var w = function (t) {
          var e = g[t];
          return (
            v.alpha(r, e, null, 0, 1, 0.25),
            v.scale(r, e, null, 2, 1, 0.25, v.Ease.quadratic(-0.5))
          );
        };
        w(0)
          .then(function () {
            return w(1);
          })
          .then(function () {
            return w(2);
          })
          .then(function () {
            return w(3);
          })
          .then(function () {
            return v.timeout(r, 0.25);
          })
          .then(function () {
            return (
              h.play(e, "coinget"),
              (c.visible = !0),
              (u.visible = !0),
              (d.visible = !1),
              v.rotate(r, c, "gokoRot", 0, 360, 5, v.Ease.linear, 0, !1),
              v.alpha(r, l, "shockAlpha", 1, 0, 0.25),
              v.scale(r, l, "shockScale", 1, 3, 0.25, v.Ease.quadratic(-0.5)),
              v.alpha(r, p, "whiteAlpha", 1, 0, 0.52)
            );
          })
          .then(function () {
            return v.timeout(r, 2);
          })
          .then(function () {
            return v.alpha(r, a, "mainAlpha", 1, 0, 0.166);
          })
          .then(function () {
            n(), r.task.clear(), r.destroy();
          }),
          a.addChild(c),
          u.addChild(p),
          u.addChild(l),
          a.addChild(u),
          a.addChild(d),
          this.addChild(a);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    st = (function (t) {
      function e(e, i, n) {
        var r = this,
          s = new o.Sprite(e.resources.images.popup_0);
        s.anchor.set(0.5), t.call(this, e, s);
        var a = n.score > i.highScore;
        a && (i.highScore = n.score),
          new o.Point(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          (this.screen.visible = !1),
          (this.bestscoreText = new o.Sprite(
            e.resources.spritesheets.ui["text_bestscore_0.png"]
          )),
          (this.goko = new o.Sprite(e.resources.images.light_0)),
          (this.next = new f(
            e,
            e.resources.spritesheets.ui["btn_1.png"],
            e.resources.spritesheets.text["btn_next.png"]
          )),
          (this.returnTitle = new f(
            e,
            e.resources.spritesheets.ui["btn_0.png"],
            e.resources.spritesheets.text["btn_title_0.png"]
          )),
          (this.flash = new g(e, 16777215, 0.8)),
          (this.flash.blendMode = "add"),
          (this.goko.blendMode = o.BLEND_MODES.ADD);
        var h = new o.Sprite(
            e.resources.spritesheets.ui["popup_title_score_0.png"]
          ),
          c = new o.Sprite(e.resources.spritesheets.ui["popup_line_0.png"]),
          u = new w(e.resources.spritesheets.number, "no_1_", ".png", n.score),
          p = new o.Container(),
          l = new o.Sprite(e.resources.spritesheets.ui["text_best.png"]),
          d = new w(
            e.resources.spritesheets.number,
            "no_0_",
            ".png",
            i.highScore
          );
        l.anchor.set(0, 0.5),
          d.anchor.set(0, 0.5),
          d.scale.set(0.75),
          (d.x = l.width + 30),
          p.addChild(l),
          p.addChild(d),
          (p.pivot.x = p.width / 2);
        var _ = new o.Container(),
          y = new o.Sprite(e.resources.spritesheets.ui["coin_icon_0.png"]),
          m = new w(
            e.resources.spritesheets.number,
            "no_0_",
            ".png",
            n.earnCoin
          );
        y.anchor.set(0, 0.5),
          m.anchor.set(0, 0.5),
          y.scale.set(0.7),
          (m.x = y.width),
          _.addChild(y),
          _.addChild(m),
          (_.pivot.x = _.width / 2),
          this.bestscoreText.anchor.set(0.5),
          this.goko.anchor.set(0.5),
          h.anchor.set(0.5),
          c.anchor.set(0.5),
          u.anchor.set(0.5),
          (this.goko.alpha = 0.8),
          (this.bestscoreText.y = -360),
          (h.y = -180),
          (u.y = -80),
          (p.y = 20),
          (c.y = 80),
          (_.y = 160),
          (this.next.y = 380),
          (this.returnTitle.y = 520),
          (u.alpha = 0),
          (p.alpha = 0),
          (_.alpha = 0),
          (this.bestscoreText.visible = !1),
          (this.goko.visible = !1),
          (this.flash.visible = !1),
          this.next.scale.set(0),
          this.returnTitle.scale.set(0),
          v.rotate(this, this.goko, "gokoRot", 0, 360, 8, v.Ease.linear, 0, !1),
          this.next.on("buttontap", function () {
            r.next.setEnable(!1), r.emit("next");
          }),
          this.returnTitle.on("buttontap", function () {
            r.returnTitle.setEnable(!1), r.emit("title");
          }),
          this.main.addChildAt(this.bestscoreText, 0),
          this.main.addChildAt(this.goko, 0),
          s.addChild(u),
          s.addChild(p),
          s.addChild(_),
          s.addChild(h),
          s.addChild(c),
          this.main.addChild(this.next),
          this.main.addChild(this.returnTitle),
          this.addChild(this.flash),
          this.show()
            .then(function () {
              return v.timeout(r, 0.1);
            })
            .then(function () {
              return (
                v.alpha(r, u, "scoreAlpha", 0, 1, 0.166),
                v.scale(r, u, "scoreScale", 2, 1, 0.166)
              );
            })
            .then(function () {
              return v.timeout(r, 0.1);
            })
            .then(function () {
              return v.alpha(r, p, "bestAlpha", 0, 1, 0.166);
            })
            .then(function () {
              return v.alpha(r, _, "coinAlpha", 0, 1, 0.166);
            })
            .then(function () {
              return v.timeout(r, 0.1);
            })
            .then(function () {
              if (a) {
                r.bestscoreText.visible = !0;
                v.alpha(r, r.bestscoreText, "bsettextAlpha", 0, 1, 0.166),
                  v
                    .scale(r, r.bestscoreText, "bsettextScale", 2, 1, 0.166)
                    .then(function () {
                      (r.goko.visible = !0),
                        (r.flash.visible = !0),
                        r.flash.fadeOut(0.5);
                    })
                    .then(function () {
                      return v.timeout(r, 0.35);
                    })
                    .then(function () {
                      return r.emit("sendScore");
                    });
              } else r.emit("sendScore");
            });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.showNexts = function () {
          var t = this;
          v.scale(
            this,
            this.next,
            "nextScale",
            0,
            1,
            0.25,
            v.Ease.quadratic(-1.5)
          ).then(function () {
            return v.scale(
              t,
              t.returnTitle,
              "returnTitleScale",
              0,
              1,
              0.25,
              v.Ease.quadratic(-1.5)
            );
          });
        }),
        e
      );
    })(_),
    at = (function (t) {
      function e(i, n, r, s) {
        var a = this;
        t.call(this, i, n, r), (r.score = 0), (r.earnCoin = 0);
        var c = new o.Point(
            i.vars.additional.width / 2,
            i.vars.additional.height / 2
          ),
          u = i.resources.jsons.setting.stages[s];
        this.background = new C(i, n, s);
        var p = new q(i, n, u, s);
        p.position.set(c.x, c.y - 60);
        var l = new m(i);
        (l.screen.visible = !1),
          (this.stageBack = new o.Sprite(
            i.resources.spritesheets.ui["stage_back_0.png"]
          )),
          this.stageBack.anchor.set(0.5),
          this.stageBack.scale.set(0.8),
          (this.stageBack.x = 110),
          (this.stageBack.y = 65);
        var _ = n.stageId,
          x = Math.floor(_ / 10) + 1,
          k = (_ % 10) + 1,
          S = new o.Sprite(i.resources.spritesheets.ui["text_stage_1.png"]),
          T = new o.Container(),
          M = new w(i.resources.spritesheets.number, "no_2_", ".png", x),
          P = new o.Sprite(i.resources.spritesheets.ui["no_2_hyphen.png"]),
          E = new w(i.resources.spritesheets.number, "no_2_", ".png", k);
        S.anchor.set(0.5),
          M.anchor.set(0, 0.5),
          P.anchor.set(0, 0.5),
          E.anchor.set(0, 0.5),
          (S.y = -25),
          (T.y = 17.5),
          (P.x = M.width),
          (E.x = P.x + P.width),
          T.addChild(M),
          T.addChild(P),
          T.addChild(E),
          this.stageBack.addChild(S),
          this.stageBack.addChild(T),
          (T.pivot.x = T.width / 2),
          S.scale.set(0.525),
          T.scale.set(0.725);
        T.width > 400 && (T.width = 400);
        var I = u.time;
        (this.timer = new Q(i, I)),
          this.timer.scale.set(0.8),
          (this.timer.x = c.x - 60),
          (this.timer.y = 50),
          (this.scoreBack = new o.Sprite(
            i.resources.spritesheets.ui["score_back_0.png"]
          )),
          this.scoreBack.anchor.set(0.5),
          this.scoreBack.scale.set(0.8),
          (this.scoreBack.x = c.x + 145),
          (this.scoreBack.y = this.timer.y);
        var O = new w(i.resources.spritesheets.number, "no_2_", ".png", 0);
        O.anchor.set(0.5),
          O.scale.set(0.7),
          (this.pauseButton = new d(
            i,
            i.resources.spritesheets.ui["btn_pause_0.png"]
          )),
          (this.pauseButton.x =
            i.vars.additional.width - this.pauseButton.width / 2 - 5),
          (this.pauseButton.y = this.pauseButton.height / 2);
        var B = new y(
            i,
            i.resources.images.popup_2,
            {
              texture: i.resources.spritesheets.ui["popup_title_pause_0.png"],
              y: 130,
            },
            [
              {
                name: "continue",
                button: new f(
                  i,
                  i.resources.spritesheets.ui["btn_1.png"],
                  i.resources.spritesheets.text["btn_game_0.png"]
                ),
              },
              {
                name: "howto",
                button: new f(
                  i,
                  i.resources.spritesheets.ui["btn_0.png"],
                  i.resources.spritesheets.text["btn_howto_0.png"]
                ),
              },
              {
                name: "quit",
                button: new f(
                  i,
                  i.resources.spritesheets.ui["btn_0.png"],
                  i.resources.spritesheets.text["btn_title_0.png"]
                ),
              },
            ],
            50,
            140
          ),
          j = new o.Container(),
          N = new w(i.resources.spritesheets.number, "no_1_", ".png", 0),
          D = new o.Sprite(i.resources.spritesheets.ui["text_combo_0.png"]);
        N.anchor.set(0.5),
          D.anchor.set(0.5),
          j.position.set(this.stageBack.x, 210),
          (N.y = -30),
          (D.y = 25),
          j.addChild(D),
          j.addChild(N),
          (j.visible = !1),
          (this.hammerButton = new d(
            i,
            i.resources.spritesheets.ui["btn_skill_0.png"]
          )),
          (this.hammerButton.x =
            i.vars.additional.width - this.hammerButton.width / 2 - 15),
          (this.hammerButton.y =
            i.vars.additional.height - this.hammerButton.height / 2 - 15);
        var z = new Z(i);
        (this.timer.stopFilter = function () {
          return B.isShow || z.isShow;
        }),
          this.pauseButton.scale.set(0),
          this.hammerButton.scale.set(0),
          (this.stageBack.alpha = 0),
          (this.timer.alpha = 0),
          (this.scoreBack.alpha = 0),
          this.hammerButton.on("buttontap", function () {
            z.show();
          }),
          z.on("complete", function () {
            a.hammerButton.setEnable(!1),
              z.hide().then(function () {
                p.breakHalfOfTheWalls();
              });
          }),
          this.pauseButton.on("buttontap", function () {
            B.show();
          }),
          B.on("continue", function () {
            B.hide();
          }),
          B.on("howto", function () {
            l.show();
          }),
          l.on("ok", function () {
            l.hide();
          }),
          B.on("quit", function () {
            a.quitGame();
          });
        var U = function () {
            var t = new st(i, n, r);
            t.on("sendScore", function () {
              a.sendScore(function () {
                return t.showNexts();
              });
            }),
              t.on("next", function () {
                a.nextScene();
              }),
              t.on("title", function () {
                (a.interactiveChildren = !1), a.emit("returnTitle");
              }),
              a.addChild(t);
          },
          G = 0,
          R = function (t) {
            (r.score = Math.floor(r.score + t)),
              O.animateNumber(r.score, 1, 0.3);
          };
        p.on("comboStop", function () {
          h.play(i, "carhit"), (G = 0), (j.visible = !1);
        }),
          p.on("escape", function () {
            ++G < 2 ||
              ((j.visible = !0),
              (N.number = G),
              v.scale(a, N, "comboScale", 2, 1, 0.2, v.Ease.quadratic(-0.5)));
            var t = u.score.carsMultiply;
            R(t + t * (1 === G ? 0 : G) * 0.1);
          }),
          p.on("gateout", function () {
            Y || (h.stop(i, "parkingout"), h.play(i, "parkingout"));
          });
        var Y = !1,
          L = function () {
            (Y = !0),
              a.task.clear("hammerButtonScale"),
              B.isShow && B.hide(),
              z.isShow && z.hide();
          };
        p.on("gameclear", function () {
          if (!Y) {
            L(),
              a.timer.stop(),
              a.timer.removeBackRed(),
              R(a.timer.time * u.score.timeMultiply),
              n.stageId++,
              (r.earnCoin = Math.floor(r.score * u.earnCoinMultiply));
            var t = new g(i, 0);
            (t.interactive = !0),
              v.timeout(a, 1).then(function () {
                t.fadeIn(0.1, 0.6).then(function () {
                  h.play(i, "stageclear");
                  var t = new tt(i, function () {
                    var t = function () {
                        if (i.vars.env.isAdPlatform) {
                          var t = new W(i, r),
                            e = new b(i, n);
                          e.position.set(c.x, 160),
                            v.alpha(a, e, "hasCoinAlpha", 0, 1, 0.1),
                            t.on("buttontap", function (o) {
                              h.play(i, "coinget");
                              var s = new it(i, o);
                              s.on("landing", function (t) {
                                h.play(i, "coinadd"),
                                  t > 0 ||
                                    ((n.coin += r.earnCoin),
                                    e.coin.animateNumber(n.coin, 1, 0.5));
                              }),
                                s.on("endAnimation", function () {
                                  t.hide().then(U);
                                }),
                                a.addChild(s);
                            }),
                            a.addChild(e),
                            a.addChild(t);
                        } else {
                          h.play(i, "coinget");
                              var s = new it(i, o);
                              s.on("landing", function (t) {
                                h.play(i, "coinadd"),
                                  t > 0 ||
                                    ((n.coin += r.earnCoin));
                              }),
                              s.on("endAnimation", function () {
                                U();
                              }),
                              a.addChild(s);
                          
                        };
                      },
                      o =
                        n.stageId <= 20 &&
                        e.specialStageId.some(function (t) {
                          return t === n.stageId - 1;
                        });
                    if (o || n.stageId % 10 == 0) {
                      var s = n.backSkin.hasSkin,
                        u = A.int(8),
                        p = A.int(3),
                        l = s.every(function (t) {
                          return t >= 15;
                        });
                      if (!l) {
                        var d = s.map(function (t) {
                          var e = [
                            0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4,
                          ][t];
                          return e >= 4 ? 0 : e + 1;
                        });
                        u = A.weight(d);
                        for (var f = [], g = 0; g < 4; g++)
                          F.get(s[u], g) || f.push(g);
                        p = A.array(f);
                      }
                      var _ = new rt(i, u, p);
                      _.on("end", function () {
                        if (l) t();
                        else {
                          var e = function () {
                            (r.gotPiece = !0),
                              (n.backSkin.hasSkin[u] = F.set(
                                n.backSkin.hasSkin[u],
                                p,
                                !0
                              )),
                              n.backSkin.hasSkin[u] >= 15
                                ? setTimeout(function () {
                                    var e = new ot(i, u, t);
                                    a.addChild(e);
                                  }, 200)
                                : setTimeout(function () {
                                    t();
                                  }, 200);
                          };
                          if (i.vars.env.isAdPlatform) {
                            var o = new V(i, u, p);
                            o.on("complete", e),
                              o.on("cancel", t),
                              a.addChild(o);
                          } else e();
                        }
                      }),
                        a.addChild(_);
                    } else t();
                  });
                  a.addChild(t);
                });
              }),
              a.addChild(t);
          }
        }),
          this.timer.on("timesUp", function () {
            if (!Y) {
              L();
              var t = new g(i, 0);
              (t.interactive = !0), t.fadeIn(0.15, 0.6), h.play(i, "gameover");
              var e = new K(i, function () {
                if (i.vars.env.isAdPlatform) {
                  var t = new H(i);
                  t.on("complete", function () {
                    n.stageId++;
                  }),
                    t.on("hid", U),
                    a.addChild(t);
                } else U();
              });
              a.addChild(t), a.addChild(e);
            }
          }),
          this.addChild(this.background),
          this.addChild(p),
          this.addChild(this.stageBack),
          this.addChild(this.timer),
          this.scoreBack.addChild(O),
          this.addChild(this.scoreBack),
          this.addChild(j),
          this.addChild(this.pauseButton),
          i.vars.env.isAdPlatform && this.addChild(this.hammerButton),
          this.addChild(z),
          this.addChild(B),
          this.addChild(l),
          (this.interactiveChildren = !1);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.startGame = function () {
          var t = this;
          return new Promise(function (e) {
            h.playBGM(t.$, "bgm"),
              v
                .tween(
                  t,
                  "scale",
                  0,
                  1,
                  0.25,
                  function (e) {
                    t.pauseButton.scale.set(0.8 * e),
                      t.hammerButton.scale.set(e),
                      (t.stageBack.alpha = e),
                      (t.timer.alpha = e),
                      (t.scoreBack.alpha = e);
                  },
                  v.Ease.quadratic(-1.5)
                )
                .then(function () {
                  (t.interactiveChildren = !0), t.timer.start();
                  var i = function () {
                    return v
                      .timeout(t, 1.2, "hammerButtonScale")
                      .then(function () {
                        return v.scale(
                          t,
                          t.hammerButton,
                          "hammerButtonScale",
                          1,
                          1.1,
                          0.3,
                          v.Ease.quadratic(-3.5),
                          2
                        );
                      })
                      .then(i);
                  };
                  v.timeout(t, 2).then(i), e();
                });
          });
        }),
        e
      );
    })(a);
  at.specialStageId = [2, 5, 14];
  var ht = (function (t) {
      function e(e, i) {
        t.call(this, e, e.resources.spritesheets.ui["btn_stage_0.png"]);
        var n = i.stageId,
          r = Math.floor(n / 10) + 1,
          s = (n % 10) + 1,
          a = new o.Container(),
          h = new o.Sprite(e.resources.spritesheets.ui["text_stage_0.png"]),
          c = new w(e.resources.spritesheets.number, "no_3_", ".png", r),
          u = new o.Sprite(e.resources.spritesheets.ui["no_3_hyphen.png"]),
          p = new w(e.resources.spritesheets.number, "no_3_", ".png", s);
        h.anchor.set(0, 0.5),
          c.anchor.set(0, 0.5),
          u.anchor.set(0, 0.5),
          p.anchor.set(0, 0.5),
          (c.x = h.width + 20),
          (u.x = c.x + c.width),
          (p.x = u.x + u.width),
          a.addChild(h),
          a.addChild(c),
          a.addChild(u),
          a.addChild(p),
          (a.pivot.x = a.width / 2);
        a.width > 400 && (a.width = 400);
        var l = [],
          d = 0;
        1 === r
          ? ((l = at.specialStageId.filter(function (t) {
              return t < 10;
            })),
            (d = 1))
          : 2 === r &&
            ((l = (l = at.specialStageId.filter(function (t) {
              return 10 <= t && t < 20;
            })).map(function (t) {
              return t - 10;
            })),
            (d = 2));
        var f = new ct(e, d, s, l);
        (a.x = this.sprite.width / 2),
          (a.y = this.sprite.height / 2 - 35),
          (f.x = this.sprite.width / 2),
          (f.y = this.sprite.height / 2 + 20),
          this.sprite.addChild(a),
          this.sprite.addChild(f);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(d),
    ct = (function (t) {
      function e(e, i, n, r) {
        t.call(this);
        for (var s = [], a = 0; a < 10; a++) s.push(9 === a);
        for (var h = 0; h < r.length; h++) s[r[h]] = !0;
        var c = new o.Sprite(
            e.resources.spritesheets.ui["stagegage_back_" + i + ".png"]
          ),
          u = new o.Container(),
          p = new o.Container();
        c.anchor.set(0, 0.5);
        for (
          var l = function (t, i) {
              var n;
              if ((void 0 === i && (i = !0), t)) {
                var r = i
                  ? "stagegage_circle_b_big_0.png"
                  : "stagegage_circle_y_big_0.png";
                n = new o.Sprite(e.resources.spritesheets.ui[r]);
                var s = new o.Sprite(
                  e.resources.spritesheets.ui["stagegage_treasure_0.png"]
                );
                s.anchor.set(0.5), (s.x = n.width / 2), n.addChild(s);
              } else
                (n = new o.Sprite(
                  e.resources.spritesheets.ui["stagegage_circle_b_0.png"]
                )).visible = i;
              return n.anchor.set(0, 0.5), p.addChild(n), n;
            },
            d = 0,
            f = 0;
          f < 10;
          f++
        ) {
          var v = l(s[f], f < n);
          if (
            ((v.x = d), (d += v.width), p.addChild(v), f < Math.min(n, 10) - 1)
          ) {
            var g = new o.Sprite(
              e.resources.spritesheets.ui["stagegage_line_b_0.png"]
            );
            g.anchor.set(0.5), (g.x = d), u.addChild(g);
          }
        }
        c.addChild(u),
          c.addChild(p),
          this.addChild(c),
          (c.pivot.x = c.width / 2);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    ut = (function (t) {
      function e(e, i, n) {
        var s = this,
          a = new o.Sprite(e.resources.images.popup_1_shop);
        a.anchor.set(0.5), (a.y = 30), t.call(this, e, a), (this._price = 0);
        var h = new r.Container(),
          c = new g(e, 0),
          u = new g(e, 16777215),
          p = new o.Sprite(e.resources.images.shop_light_0),
          l = new o.Sprite();
        (c.interactive = !0),
          (c.visible = !1),
          p.anchor.set(0.5),
          l.anchor.set(0.5),
          p.position.set(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          (p.alpha = 0),
          (l.visible = !1),
          h.addChild(c),
          h.addChild(p),
          h.addChild(l),
          h.addChild(u);
        var f = e.resources.jsons.setting.shop,
          _ = f.price.first,
          y = f.price.normal;
        this._price = F.bitCount(i.carHasSkin) < 2 ? _ : y;
        var m = new o.Sprite(
          e.resources.spritesheets.ui["popup_title_shop_0.png"]
        );
        this.close = new d(e, e.resources.spritesheets.ui["btn_x_0.png"]);
        var b = new o.Sprite(e.resources.spritesheets.text["text_shop_0.png"]);
        (this.releaseButton = new d(
          e,
          e.resources.spritesheets.ui["btn_1.png"]
        )),
          (this.priceContainer = new o.Container());
        var C = new o.Sprite(e.resources.spritesheets.ui["coin_icon_0.png"]);
        this.priceNumber = new w(
          e.resources.spritesheets.number,
          "no_2_",
          ".png",
          this._price
        );
        var x = new o.Sprite(
          e.resources.spritesheets.text["btn_shop_open_0.png"]
        );
        C.anchor.set(0, 0.5),
          this.priceNumber.anchor.set(0, 0.5),
          x.anchor.set(0, 0.5),
          C.scale.set(0.5),
          this.priceNumber.scale.set(0.75),
          (this.priceNumber.x = C.width),
          (x.x = this.priceNumber.x + this.priceNumber.width),
          (C.y = -2),
          (this.priceNumber.y = -4),
          this.priceContainer.addChild(x),
          this.priceContainer.addChild(C),
          this.priceContainer.addChild(this.priceNumber),
          (this.priceContainer.pivot.x = this.priceContainer.width / 2),
          this.priceContainer.position.set(
            this.releaseButton.sprite.width / 2,
            this.releaseButton.sprite.height / 2
          ),
          this.releaseButton.sprite.addChild(this.priceContainer);
        for (
          var k = new o.Container(), S = [], T = new o.Point(160, 150), M = 0;
          M <= 14;
          M++
        ) {
          var P = new pt(e, M, F.get(i.carHasSkin, M));
          (P.x = ((M % 3) - 1) * T.x),
            (P.y = Math.floor(M / 3) * T.y),
            k.addChild(P),
            S.push(P);
        }
        m.anchor.set(0.5),
          b.anchor.set(0.5),
          (m.y = -490),
          this.close.position.set(a.width / 2 - 90, -a.height / 2 + 85),
          (k.y = -375),
          (b.y = 340),
          (this.releaseButton.y = 450),
          v.rotate(h, p, "gokoRot", 0, 360, 5, v.Ease.linear, 0, !1);
        var E = function () {
          var t = i.coin >= s._price && i.carHasSkin < Math.pow(2, 15) - 1;
          s.releaseButton.setEnable(t), s.emit("buyable", t);
        };
        this.close.on("buttontap", function () {
          s.hide();
        }),
          this.releaseButton.on("buttontap", function () {
            if (!(i.coin < s._price)) {
              (i.coin -= s._price), n.coin.animateNumber(i.coin, 1, 1);
              for (var t = [], r = 0; r < 15; r++)
                F.get(i.carHasSkin, r) || t.push(r);
              !(function (t) {
                (i.carHasSkin = F.set(i.carHasSkin, t, !0)),
                  s.emit("release"),
                  (c.visible = !0),
                  (c.graphic.alpha = 0.6),
                  (u.graphic.alpha = 0.8),
                  u.fadeOut(0.55),
                  (l.visible = !0),
                  (l.texture =
                    e.resources.spritesheets.ui["shop_btn_car_" + t + ".png"]),
                  l.scale.set(2),
                  l.position.set(
                    e.vars.additional.width / 2,
                    e.vars.additional.height / 2
                  ),
                  (p.alpha = 1),
                  v
                    .timeout(h, 2)
                    .then(function () {
                      return (
                        c.fadeOut(0.166),
                        v.alpha(h, p, "gokoAlpha", 1, 0, 0.166)
                      );
                    })
                    .then(function () {
                      return v.timeout(h, 0.1);
                    })
                    .then(function () {
                      var e = h.toLocal(k.toGlobal(S[t]));
                      return (
                        v.scale(h, l, "carsScale", 2, 1, 0.2),
                        v.moveTo(h, l, "carsMove", e, 0.2, v.Ease.accel)
                      );
                    })
                    .then(function () {
                      (c.visible = !1), (l.visible = !1), S[t].open();
                    });
              })(A.array(t)),
                (s.price = y),
                E();
            }
          }),
          a.addChild(b),
          a.addChild(m),
          a.addChild(k),
          a.addChild(this.close),
          a.addChild(this.releaseButton),
          this.addChild(h),
          setTimeout(E, 0);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { price: { configurable: !0 } };
      return (
        (i.price.get = function () {
          return this._price;
        }),
        (i.price.set = function (t) {
          (this._price = t),
            (this.priceNumber.number = this._price),
            (this.priceContainer.pivot.x = this.priceContainer.width / 2);
        }),
        (e.prototype.show = function () {
          var e = this;
          return (
            this.close.scale.set(0),
            this.releaseButton.scale.set(0),
            t.prototype.show.call(this).then(function () {
              e.showAnimation(e, e.releaseButton, "release"),
                v.timeout(e, 0.166).then(function () {
                  return e.showAnimation(e, e.close, "close");
                });
            })
          );
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(_),
    pt = (function (t) {
      function e(e, i, n) {
        t.call(this),
          (this.$ = e),
          (this.id = i),
          (this._opened = !0),
          (this._opened = n),
          (this.texture =
            e.resources.spritesheets.ui["shop_btn_car_" + this.id + ".png"]),
          (this.frame = new o.Sprite(
            e.resources.spritesheets.ui["shop_btn_0.png"]
          )),
          (this.sprite = new o.Sprite(
            n
              ? this.texture
              : e.resources.spritesheets.ui["shop_btn_locked_0.png"]
          )),
          (this.light = new o.Sprite(
            e.resources.spritesheets.ui["shop_btn_white_0.png"]
          )),
          this.frame.anchor.set(0.5),
          this.sprite.anchor.set(0.5),
          this.light.anchor.set(0.5),
          (this.light.alpha = 0),
          (this.light.blendMode = o.BLEND_MODES.ADD),
          this.frame.addChild(this.sprite),
          this.frame.addChild(this.light),
          this.addChild(this.frame);
      }
      t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e);
      var i = { opened: { configurable: !0 } };
      return (
        (i.opened.get = function () {
          return this._opened;
        }),
        (e.prototype.open = function () {
          (this._opened = !0),
            (this.sprite.texture = this.texture),
            v.alpha(this, this.light, "lightAlpha", 1, 0, 0.5);
        }),
        Object.defineProperties(e.prototype, i),
        e
      );
    })(r.Container),
    lt = (function (t) {
      function e(e, i) {
        var n = this,
          r = new o.Sprite(e.resources.images.popup_4_spot);
        r.anchor.set(0.5), t.call(this, e, r);
        var s = new o.Sprite(
            e.resources.spritesheets.ui["popup_title_spot_0.png"]
          ),
          a = new d(e, e.resources.spritesheets.ui["btn_x_0.png"]);
        s.anchor.set(0.5);
        for (
          var h = new o.Container(),
            c = [],
            u = function (t) {
              var r = new dt(e, t, i.backSkin.hasSkin[t]);
              (r.x = 160 * ((t % 3) - 1)),
                (r.y = 160 * (Math.floor(t / 3) - 1)),
                r.on("buttontap", function () {
                  l.select(!1), n.emit("changeBack", t), (l = r).select(!0);
                }),
                h.addChild(r),
                c.push(r);
            },
            p = 0;
          p <= 8;
          p++
        )
          u(p);
        var l = c[i.backSkin.selected];
        l.select(!0),
          (s.y = -250),
          a.position.set(r.width / 2 - 90, -(r.height / 2 - 85)),
          (h.y = 32),
          a.on("buttontap", function () {
            n.emit("close"), n.hide();
          }),
          r.addChild(s),
          r.addChild(a),
          r.addChild(h);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(_),
    dt = (function (t) {
      function e(e, i, n) {
        var r = n >= 15;
        if (
          (t.call(this, e, e.resources.spritesheets.ui["puzzle_back_0.png"]),
          (this._selected = !1),
          (this.selectedSprite = new o.Sprite(
            e.resources.spritesheets.ui["shop_btn_selected_0.png"]
          )),
          this.selectedSprite.anchor.set(0.5),
          this.selectedSprite.position.set(
            this.sprite.width / 2,
            this.sprite.height / 2
          ),
          (this.selectedSprite.visible = !1),
          (this.interactiveChildren = r),
          r)
        ) {
          var s = new o.Sprite(
            e.resources.spritesheets.ui["puzzle_" + i + ".png"]
          );
          s.anchor.set(0.5),
            s.position.set(this.sprite.width / 2, this.sprite.height / 2),
            this.sprite.addChild(s);
        } else {
          var a = new o.Container();
          a.position.set(this.sprite.width / 2, this.sprite.height / 2);
          for (var h = 0; h <= 3; h++) {
            var c = new J(e, i, h);
            (c.x = 30 * ((h % 2) * 2 - 1)),
              (c.y = 30 * (2 * Math.floor(h / 2) - 1)),
              c.scale.set(0.6),
              (c.visible = F.get(n, h)),
              a.addChild(c);
          }
          this.sprite.addChild(a);
        }
        this.sprite.addChild(this.selectedSprite);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.select = function (t) {
          (this._selected = t),
            (this.selectedSprite.visible = t),
            (this.interactiveChildren = !t);
        }),
        e
      );
    })(d),
    ft = (function (t) {
      function e(e, i, n, r) {
        var s = this;
        t.call(this, e, i, n), h.stop(e, "bgm");
        var a = new o.Point(
            e.vars.additional.width / 2,
            e.vars.additional.height / 2
          ),
          u = new c(e, 10, 10),
          l = new p(e, 0.5, 1, 16777215),
          f = new m(e);
        f.visible = !1;
        var g = new b(e, i);
        (g.x = a.x), (g.y = 55);
        var _ = new ut(e, i, g),
          y = new lt(e, i),
          w = new d(
            e,
            e.resources.spritesheets.ui["btn_sound_on.png"],
            e.resources.spritesheets.ui["btn_sound_off.png"]
          );
        w.setToggle(e.vars.additional.sound),
          (w.x = e.vars.additional.width - w.width / 2 - 10),
          (w.y = w.height / 2 + 10);
        var C = new o.Sprite(e.resources.images.title);
        C.anchor.set(0.5), (C.x = a.x);
        var x = new ht(e, i);
        (x.x = a.x), (x.y = 1030);
        var k = new d(e, e.resources.spritesheets.ui["btn_shop_0.png"]);
        (k.x = k.width / 2 + 10),
          (k.y = e.vars.additional.height - k.height / 2 - 10);
        var S = new o.Sprite(e.resources.spritesheets.ui["btn_number_0.png"]),
          T = new o.Sprite(e.resources.spritesheets.ui["text_i_0.png"]);
        S.anchor.set(0.5),
          T.anchor.set(0.5),
          T.scale.set(0.4),
          S.position.set(k.sprite.width - 25, 25),
          S.addChild(T),
          k.sprite.addChild(S);
        var M = function () {
            return v
              .timeout(s, 1.2)
              .then(function () {
                return v.scale(
                  s,
                  S,
                  "shopBadgeScale",
                  1,
                  1.2,
                  0.3,
                  v.Ease.quadratic(-3.5),
                  2
                );
              })
              .then(M);
          },
          P = new d(e, e.resources.spritesheets.ui["btn_puzzle_0.png"]);
        (P.x = e.vars.additional.width - P.width / 2 - 10),
          (P.y = e.vars.additional.height - P.height / 2 - 10);
        var E = new o.Sprite(e.resources.spritesheets.ui["btn_number_0.png"]);
        E.visible = n.gotPiece;
        var I = new o.Sprite(e.resources.spritesheets.ui["text_i_0.png"]);
        E.anchor.set(0.5),
          I.anchor.set(0.5),
          I.scale.set(0.4),
          E.position.set(P.sprite.width - 25, 25),
          E.addChild(I),
          P.sprite.addChild(E);
        var O = function () {
          return v
            .timeout(s, 1.2)
            .then(function () {
              return v.scale(
                s,
                E,
                "puzzleBadgeScale",
                1,
                1.2,
                0.3,
                v.Ease.quadratic(-3.5),
                2
              );
            })
            .then(O);
        };
        (C.y = -C.width / 2),
          (g.alpha = 0),
          u.buttonContainer.scale.set(0),
          w.scale.set(0),
          x.scale.set(0),
          k.scale.set(0),
          P.scale.set(0),
          (x.interactiveChildren = !1);
        var B = function () {
          var t = function (t) {
            return v.scale(s, t, null, 0, 1, 0.25, v.Ease.quadratic(-1.5));
          };
          v.moveTo(
            s,
            C,
            "titleMove",
            new o.Point(a.x, 260),
            0.35,
            v.Ease.quadratic(-1.5)
          )
            .then(function () {
              return v.timeout(s, 0.1);
            })
            .then(function () {
              return (
                t(x), v.alpha(s, g, "coinAlpha", 0, 1, 0.17), v.timeout(s, 0.1)
              );
            })
            .then(function () {
              return t(u.buttonContainer), t(w), v.timeout(s, 0.1);
            })
            .then(function () {
              return (
                t(k).then(function () {
                  M(), O();
                }),
                v.timeout(s, 0.1)
              );
            })
            .then(function () {
              t(P);
            })
            .then(function () {
              x.interactiveChildren = !0;
              v.vector(
                s,
                C,
                "titleMove",
                new o.Point(0, -5),
                0.525,
                v.Ease.decel
              ).then(function () {
                return v.vector(
                  s,
                  C,
                  "titleMove",
                  new o.Point(0, 10),
                  1.05,
                  v.Ease.cubic,
                  0
                );
              });
            });
        };
        if (r) {
          f.showInstantly(),
            f.once("ok", function () {
              s.emit("startGame", A);
            });
          var A = function () {
            f.hide().then(B);
          };
        } else B();
        w.on("buttontap", function () {
          var t = w.switchToggle();
          e.vars.additional.sound = t;
        }),
          u.on("changeLang", function (t) {
            s.changeLanguage(t);
          }),
          x.on("buttontap", function () {
            ((s.interactiveChildren = !1),
            v.tween(s, "alpha", 1, 0, 0.17, function (t) {
              (g.alpha = t), (l.alpha = t);
            }),
            v.tween(
              s,
              "scale",
              1,
              0,
              0.25,
              function (t) {
                u.buttonContainer.scale.set(t),
                  w.scale.set(t),
                  x.scale.set(t),
                  k.scale.set(t),
                  P.scale.set(t);
              },
              v.Ease.quadratic(2)
            ),
            s.task.clear("titleMove"),
            v.moveTo(
              s,
              C,
              "titleEndMove",
              new o.Point(a.x, -C.width),
              0.35,
              v.Ease.quadratic(1.5)
            )).then(function () {
              return s.nextScene();
            });
          }),
          k.on("buttontap", function () {
            _.show();
          }),
          _.on("buyable", function (t) {
            S.visible = t;
          }),
          _.on("release", function () {
            s.emit("flushData");
          }),
          P.on("buttontap", function () {
            (n.gotPiece = !1), (E.visible = !1), y.show();
          }),
          y.on("changeBack", function (t) {
            s.emit("changeBack", t);
          }),
          y.on("close", function () {
            s.emit("flushData");
          }),
          this.addChild(l),
          this.addChild(w),
          this.addChild(P),
          this.addChild(k),
          this.addChild(x),
          this.addChild(C),
          this.addChild(u),
          this.addChild(_),
          this.addChild(y),
          this.addChild(g),
          this.addChild(f);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(a),
    vt = function (t) {
      (this.image = {}),
        (this.sheet = {}),
        (this.imagedefine = {}),
        (this.sheetdefine = {}),
        (this.$ = t),
        (this.loaderOptions = {
          basepath: t.vars.env.basepath,
          version: t.vars.env.version + "",
        });
    };
  (vt.prototype.resourceTakeout = function (t) {
    var e = {};
    for (var i in t) e[i] = t[i].data;
    return e;
  }),
    (vt.prototype.defineImages = function (t) {
      this.imagedefine = t;
    }),
    (vt.prototype.defineSpritesheets = function (t) {
      this.sheetdefine = t;
    }),
    (vt.prototype.loadAllResources = function () {
      var t = this,
        e = new r.TextureLoader(),
        i = new r.SpritesheetLoader(),
        n = {},
        o = {},
        s = this.$.vars.api.getLanguage(),
        a = [];
      for (var h in this.imagedefine)
        n[h] = this.imagedefine[h].replace(/\?/, s);
      for (var c in this.sheetdefine)
        o[c] = this.sheetdefine[c].replace(/\?/, s);
      return (
        a.push(
          e.loadAllAsync(n, this.loaderOptions).then(function (e) {
            t.image = t.resourceTakeout(e);
          })
        ),
        a.push(
          i.loadAllAsync(o, this.loaderOptions).then(function (e) {
            t.sheet = t.resourceTakeout(e);
          })
        ),
        Promise.all(a)
      );
    }),
    (vt.prototype.loadImage = function (t, e) {
      var i = this;
      return new r.TextureLoader()
        .loadAsync(e, this.loaderOptions)
        .then(function (e) {
          i.$.resources.images[t] = e.data;
        });
    });
  var gt = (function (t) {
    function e(e, i, n, o) {
      t.call(this),
        (this.$ = e),
        (this.commonData = i),
        (this.gameData = n),
        (this.sceneContainer = new r.Container()),
        (this.screenContainer = new r.Container()),
        (this.scene = o),
        this.sceneContainer.addChild(this.scene),
        this.addChild(this.sceneContainer),
        this.addChild(this.screenContainer);
    }
    return (
      t && (e.__proto__ = t),
      (e.prototype = Object.create(t && t.prototype)),
      (e.prototype.constructor = e),
      (e.prototype.changeScene = function (t) {
        (this.scene = t), this.sceneContainer.addChildAt(this.scene, 0);
      }),
      (e.prototype.startGame = function (t) {
        e.INITIAL_GAME ? t() : this.$.vars.api.callAsync("startGame").then(t),
          (e.INITIAL_GAME = !0);
      }),
      (e.prototype.playGame = function (t) {
        var e = this.scene;
        this.$.vars.api.callAsync("playGame").then(function () {
          t(), e.task.clear(), e.destroy();
        });
      }),
      (e.prototype.quitGame = function (t) {
        var e = this;
        this.nextScene(function () {
          e.$.vars.api.callAsync("quitGame").then(function () {
            e.$.vars.api.viewAdAsync().then(t).catch(t);
          });
        });
      }),
      (e.prototype.setData = function (t, e, i, n) {
        void 0 === n && (n = function () {});
        var r = function () {
          return i(n);
        };
        this.$.vars.api.setDataAsync(t, e, "always").then(r).catch(r);
      }),
      (e.prototype.sendScoreManual = function (t, e, i, n, r) {
        var o = this,
          s = function (e) {
            void 0 === e && (e = function () {}),
              o.$.vars.api
                .sendScoreAsync(t, r)
                .then(function () {
                  return o.$.vars.api.callAsync("finishPlay").then(e);
                })
                .catch(function () {
                  return s(e);
                });
          };
        this.setData(i, e, s, n);
      }),
      (e.prototype.flushDataManual = function (t, e, i) {
        var n = this;
        void 0 === i && (i = function () {});
        var r = function () {
          n.$.vars.api.flushDataAsync().then(i).catch(r);
        };
        this.setData(e, t, r);
      }),
      (e.prototype.sendScore = function (t, i) {
        this.sendScoreManual(
          this.gameData.score,
          this.commonData,
          e.DataName.NORMAL,
          t,
          i
        );
      }),
      (e.prototype.flushData = function (t) {
        void 0 === t && (t = function () {}),
          this.flushDataManual(this.commonData, e.DataName.NORMAL, t);
      }),
      (e.prototype.nextScene = function (t) {
        this.faderColor(t);
      }),
      (e.prototype.faderColor = function (t) {
        var e = this;
        this.scene.interactiveChildren = !1;
        var i = new _t(this.$);
        i.fadeIn(function () {
          e.scene.task.clear(), e.scene.destroy(), t(), i.fadeOut();
        }),
          this.screenContainer.addChild(i);
      }),
      (e.prototype.faderAlpha = function (t) {
        var e = this.scene;
        (e.interactiveChildren = !1), t();
        var i = new yt(e, function () {
          e.task.clear(), e.destroy(), i.task.clear(), i.destroy();
        });
        this.screenContainer.addChild(i);
      }),
      e
    );
  })(r.Container);
  (gt.DataName = { NORMAL: "saveData" }), (gt.INITIAL_GAME = !1);
  var _t = (function (t) {
      function e(e, i) {
        void 0 === i && (i = 0),
          t.call(this),
          (this.time = 0.13),
          (this.graphic = new o.Graphics()),
          this.graphic.beginFill(i),
          this.graphic.drawRect(
            0,
            0,
            e.vars.additional.width,
            e.vars.additional.height
          ),
          this.graphic.endFill(),
          (this.graphic.alpha = 0),
          this.addChild(this.graphic);
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        (e.prototype.fadeIn = function (t) {
          var e = this;
          void 0 === t && (t = function () {});
          var i = 0;
          (this.graphic.alpha = 0),
            this.task.clear("fade"),
            this.task.on("fade", function (n) {
              var r = n.delta / 60,
                o = i / e.time;
              if (i >= e.time)
                return e.task.clear("fade"), (e.graphic.alpha = 1), void t();
              (e.graphic.alpha = o), (i += r);
            });
        }),
        (e.prototype.fadeOut = function (t) {
          var e = this;
          void 0 === t && (t = function () {});
          var i = 0;
          (this.graphic.alpha = 1),
            this.task.clear("fade"),
            this.task.on("fade", function (n) {
              var r = n.delta / 60,
                o = i / e.time;
              if (i >= e.time)
                return (
                  e.task.clear("fade"),
                  (e.graphic.alpha = 0),
                  t(),
                  e.task.clear(),
                  void e.destroy()
                );
              (e.graphic.alpha = 1 - o), (i += r);
            });
        }),
        e
      );
    })(r.Container),
    yt = (function (t) {
      function e(e, i) {
        var n = this;
        void 0 === i && (i = function () {}), t.call(this);
        var r = 0;
        (e.alpha = 1),
          this.task.clear("fade"),
          this.task.on("fade", function (t) {
            var o = t.delta / 60,
              s = r / 0.165;
            if (r >= 0.165)
              return (
                n.task.clear("fade"),
                (e.alpha = 0),
                i(),
                n.task.clear(),
                void n.destroy()
              );
            (e.alpha = 1 - s), (r += o);
          });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    mt = (function (t) {
      function e(e) {
        var i = this;
        t.call(this);
        var n = function (t) {
          e.vars.api.changeLanguageAsync(t).then(function () {
            var t = new vt(e);
            t.defineImages({
              howto: "assets/languages/?/howto_0.png",
              title: "assets/languages/?/title_0.png",
            }),
              t.defineSpritesheets({ text: "assets/languages/?/text.json" }),
              t.loadAllResources().then(function () {
                for (var i in t.image) e.resources.images[i] = t.image[i];
                for (var n in t.sheet) e.resources.spritesheets[n] = t.sheet[n];
                d();
              });
          });
        };
        this.scale.set(0.5),
          (e.vars.additional.width = 2 * e.width),
          (e.vars.additional.height = 2 * e.height),
          (e.vars.additional.sound = !0);
        var r = {
            stageId: 0,
            highScore: 0,
            coin: 0,
            carHasSkin: 1,
            backSkin: { selected: 0, hasSkin: [15, 0, 0, 0, 0, 0, 0, 0, 0] },
          },
          o = { score: 0, earnCoin: 0, gotPiece: !1 },
          s = e.vars.data[gt.DataName.NORMAL];
        s &&
          ((r = Object.assign(r, s)),
          Array.isArray(s.backSkin.hasSkin) ||
            (r.backSkin.hasSkin = [15, 0, 0, 0, 0, 0, 0, 0, 0]));
        var h = e.resources.jsons.isoTexture,
          c = h.shapePath,
          u = h.textures;
        for (var p in c) M.registerPoints(p, c[p]);
        for (var l in u) M.registerData(e, l, u[l]);
        var d = function (t) {
            var s = function (t) {
                var i = new at(e, r, o, t);
                return (
                  i.on(a.Event.QUIT, function () {
                    l.quitGame(c);
                  }),
                  i.on(a.Event.SEND_SCORE, function (t) {
                    void 0 === t && (t = function () {}), l.sendScore(t);
                  }),
                  i.on(a.Event.NEXT, function () {
                    l.nextScene(function () {
                      var t = f(),
                        e = s(t);
                      e.background.loadTexture().then(function () {
                        l.playGame(function () {
                          i.task.clear(),
                            i.destroy(),
                            e.startGame(),
                            l.changeScene(e);
                        });
                      });
                    });
                  }),
                  i.on("returnTitle", function () {
                    l.nextScene(c);
                  }),
                  i
                );
              },
              h = function (t, s) {
                void 0 === s && (s = !1);
                var h = new ft(e, r, o, s);
                return (
                  h.on("startGame", function (t) {
                    l.startGame(t);
                  }),
                  h.on(a.Event.NEXT, function () {
                    l.playGame(function () {
                      (l.scene = t), t.startGame();
                    });
                  }),
                  h.on(a.Event.LANGUAGE, function (t) {
                    l.destroy(), i.removeChildren(), n(t);
                  }),
                  h.on("changeBack", function (e) {
                    (r.backSkin.selected = e), t.background.loadTexture();
                  }),
                  h.on("flushData", function () {
                    l.flushData();
                  }),
                  h
                );
              },
              c = function () {
                var t = f(),
                  e = s(t);
                e.background.loadTexture().then(function () {
                  l.changeScene(i), l.sceneContainer.addChildAt(e, 0);
                });
                var i = h(e);
                return i;
              },
              u = s(v),
              p = h(u, !0),
              l = new gt(e, r, o, p);
            l.sceneContainer.addChildAt(u, 0), i.addChild(l);
          },
          f = function () {
            var t = [
              [0],
              [0, 1],
              [0, 1],
              [0, 1],
              [1, 2],
              [1, 2],
              [1, 2],
              [1, 2],
              [1, 2],
              [3],
            ][r.stageId % 10];
            return A.array(t);
          },
          v = f();
        new vt(e)
          .loadImage(
            "background",
            "assets/images/backs/back_" + r.backSkin.selected + "_" + v + ".png"
          )
          .then(function () {
            n(e.vars.api.getLanguage());
          });
      }
      return (
        t && (e.__proto__ = t),
        (e.prototype = Object.create(t && t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    })(r.Container),
    wt = r.Content.create();
  wt.setConfig({ width: 360, height: 640 }),
    wt.defineImages({
      light_0: "assets/images/light_0.png",
      light_1: "assets/images/light_1.png",
      light_1_back: "assets/images/light_1_back.png",
      light_2: "assets/images/light_2.png",
      shop_light_0: "assets/images/shop_light_0.png",
      popup_0: "assets/images/popup_0.png",
      popup_1_shop: "assets/images/popup_1_shop.png",
      popup_2: "assets/images/popup_2.png",
      popup_3: "assets/images/popup_3.png",
      popup_4_spot: "assets/images/popup_4_spot.png",
    }),
    wt.defineSpritesheets({
      ui: "assets/spritesheets/ui.json",
      number: "assets/spritesheets/number.json",
      car: "assets/spritesheets/car.json",
      treasure: "assets/spritesheets/treasure.json",
      coin: "assets/spritesheets/coin.json",
      exit: "assets/spritesheets/exit.json",
      lang: "assets/languages/languages.json",
      langui: "assets/languages/languageui.json",
    }),
    wt.defineSounds({
      bgm: "assets/sounds/bgm.mp3",
      button: "assets/sounds/se_button.mp3",
      carhit: "assets/sounds/se_carhit.mp3",
      carmove: "assets/sounds/se_carmove.mp3",
      coinadd: "assets/sounds/se_coinadd.mp3",
      coinget: "assets/sounds/se_coinget.mp3",
      gameover: "assets/sounds/se_gameover.mp3",
      hammerbreak: "assets/sounds/se_hammerbreak.mp3",
      hammerhit: "assets/sounds/se_hammerhit.mp3",
      parkingout: "assets/sounds/se_parkingout.mp3",
      skinget: "assets/sounds/se_skinget.mp3",
      stageclear: "assets/sounds/se_stageclear.mp3",
    }),
    wt.defineJsons({
      isoTexture: "assets/jsons/isoTexture.json",
      setting: "assets/jsons/setting.json",
    }),
    wt.defineLibraries({ root: mt }),
    s.defineAnimatesTo(wt, {
      wallbreak: {
        id: "69182987DDD4DE42BD05F827860D643E",
        basepath: "assets/animations/",
        filepath: "wallbreak.js",
      },
    }),
    SCG.startAsync({ Content: wt, width: 360, height: 640 });
})(Pixim, PIXI, Pixim.animate);
