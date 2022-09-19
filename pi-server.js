!(function (a, b) {
  function c(b, d) {
    var e, f;
    if ("\x2e" != b[0] && "\x2f" != b[0]) return a(b);
    if (
      ((d = d || "\x72\x6f\x6f\x74"),
      (e = c.resolve(b)),
      !e && /\.json$/i.test(b))
    )
      return a("\x2e\x2f" + c.basename(b));
    if (((f = c.cache[e]), !f))
      try {
        return a(b);
      } catch (g) {
        throw Error(
          "\x66\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x71\x75\x69\x72\x65\x20\x22" +
            b +
            "\x22\x20\x66\x72\x6f\x6d\x20" +
            d +
            "\n" +
            g.message +
            "\n" +
            g.stack
        );
      }
    return (
      f.exports ||
        ((f.exports = {}), f.call(f.exports, f, f.exports, c.relative(e))),
      f.exports
    );
  }
  (c.cache = {}),
    (c.basename = a("\x70\x61\x74\x68").basename),
    (c.resolve = function (b) {
      var d, e, f, g;
      if ("\x2e" != b[0]) return a.resolve(b);
      for (
        d = "\x2f" === b.slice(-1) ? b : b + "\x2f",
          e = [
            b,
            b + "\x2e\x6a\x73",
            d + "\x69\x6e\x64\x65\x78\x2e\x6a\x73",
            b + "\x2e\x6a\x73\x6f\x6e",
            d + "\x69\x6e\x64\x65\x78\x2e\x6a\x73\x6f\x6e",
          ],
          f = 0;
        (g = e[f]);
        f++
      )
        if (c.cache[g]) return g;
    }),
    (c.register = function (a, b) {
      c.cache[a] = b;
    }),
    (c.relative = function (a) {
      function b(b) {
        var d, e, f, g, h;
        if ("\x2e" != b[0]) return c(b);
        for (
          d = a.split("\x2f"),
            e = b.split("\x2f"),
            d.pop(),
            f = 0,
            g = e.length;
          g > f;
          f += 1
        )
          (h = e[f]), "\x2e\x2e" == h ? d.pop() : "\x2e" != h && d.push(h);
        return c(d.join("\x2f"), a);
      }
      return (b.resolve = c.resolve), (b.cache = c.cache), b;
    }),
    c.register(
      "\x2e\x2f\x70\x69\x2d\x73\x65\x72\x76\x65\x72\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        function s(a, b, c) {
          b.header(
            "\x41\x63\x63\x65\x73\x73\x2d\x43\x6f\x6e\x74\x72\x6f\x6c\x2d\x41\x6c\x6c\x6f\x77\x2d\x4f\x72\x69\x67\x69\x6e",
            a.headers.origin
          ),
            b.header(
              "\x41\x63\x63\x65\x73\x73\x2d\x43\x6f\x6e\x74\x72\x6f\x6c\x2d\x41\x6c\x6c\x6f\x77\x2d\x43\x72\x65\x64\x65\x6e\x74\x69\x61\x6c\x73",
              !0
            ),
            b.header(
              "\x41\x63\x63\x65\x73\x73\x2d\x43\x6f\x6e\x74\x72\x6f\x6c\x2d\x41\x6c\x6c\x6f\x77\x2d\x4d\x65\x74\x68\x6f\x64\x73",
              "\x47\x45\x54\x2c\x50\x55\x54\x2c\x50\x4f\x53\x54\x2c\x44\x45\x4c\x45\x54\x45\x2c\x4f\x50\x54\x49\x4f\x4e\x53"
            ),
            b.header(
              "\x41\x63\x63\x65\x73\x73\x2d\x43\x6f\x6e\x74\x72\x6f\x6c\x2d\x41\x6c\x6c\x6f\x77\x2d\x48\x65\x61\x64\x65\x72\x73",
              "\x41\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e\x2c\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65\x2c\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68\x2c\x20\x58\x2d\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2d\x57\x69\x74\x68\x2c\x6f\x72\x69\x67\x69\x6e\x2c\x61\x63\x63\x65\x70\x74"
            ),
            "\x4f\x50\x54\x49\x4f\x4e\x53" == a.method ? b.send(200) : c();
        }
        function t(a) {
          a.all("\x2a", function (a, b, c) {
            return a.connection.localAddress !== a.connection.remoteAddress &&
              k.getSettingsData().disableWebUi
              ? b.status(403).end("\x66\x6f\x72\x62\x69\x64\x64\x65\x6e")
              : (b.setHeader(
                  "\x4c\x61\x73\x74\x2d\x4d\x6f\x64\x69\x66\x69\x65\x64",
                  new Date().toUTCString()
                ),
                (a.installation = ""),
                void c());
          }),
            a.get("\x2f\x61\x70\x69\x2f\x66\x69\x6c\x65\x73", h.index),
            a.get(
              "\x2f\x61\x70\x69\x2f\x66\x69\x6c\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.getFileDetails
            ),
            a.post("\x2f\x61\x70\x69\x2f\x66\x69\x6c\x65\x73", h.createFiles),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6f\x73\x74\x75\x70\x6c\x6f\x61\x64",
              h.updateFileDetails
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x66\x69\x6c\x65\x73",
              h.updatePlaylist
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x66\x69\x6c\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.updateAsset
            ),
            a["\x64\x65\x6c\x65\x74\x65"](
              "\x2f\x61\x70\x69\x2f\x66\x69\x6c\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.deleteFile
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x6e\x6f\x74\x69\x63\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.getNotice
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x6e\x6f\x74\x69\x63\x65\x73",
              h.createNotice
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x6e\x6f\x74\x69\x63\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.createNotice
            ),
            a["\x64\x65\x6c\x65\x74\x65"](
              "\x2f\x61\x70\x69\x2f\x6e\x6f\x74\x69\x63\x65\x73\x2f\x3a\x66\x69\x6c\x65",
              h.deleteFile
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x73",
              h.createLinkFile
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x6c\x69\x6e\x6b\x73\x2f\x3a\x66\x69\x6c\x65",
              h.getLinkFileDetails
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73",
              i.index
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2f\x3a\x66\x69\x6c\x65",
              i.getPlaylist
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73",
              i.createPlaylist
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2f\x3a\x66\x69\x6c\x65",
              i.savePlaylist
            ),
            a.get("\x2f\x61\x70\x69\x2f\x74\x6f\x6b\x65\x6e\x73", j.getTokens),
            a.post(
              "\x2f\x61\x70\x69\x2f\x74\x6f\x6b\x65\x6e\x73",
              j.updateTokens
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x63\x75\x72\x72\x65\x6e\x74\x2d\x74\x6f\x6b\x65\x6e",
              j.currentToken
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x72\x73\x73\x66\x65\x65\x64",
              k.getRssFeeds
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2f\x3a\x66\x69\x6c\x65",
              k.playPlaylist
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x2f\x66\x69\x6c\x65\x73\x2f\x3a\x61\x63\x74\x69\x6f\x6e",
              k.playFile
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x6d\x65\x64\x69\x61\x2f\x3a\x61\x63\x74\x69\x6f\x6e",
              k.playlistMedia
            ),
            a.get("\x2f\x61\x70\x69\x2f\x73\x74\x61\x74\x75\x73", k.getStatus),
            a.post("\x2f\x61\x70\x69\x2f\x64\x65\x62\x75\x67", k.setDebugLevel),
            a.get(
              "\x2f\x61\x70\x69\x2f\x74\x65\x73\x74\x6c\x6f\x67",
              k.getTestLog
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x6e\x61\x70\x73\x68\x6f\x74",
              k.getSnapshot
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73",
              k.getSettings
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x66\x69\x6c\x65",
              k.getSettingsFile
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x69\x73\x68\x65\x6c\x6c",
              k.executeShell
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x66\x69\x6c\x65",
              k.setSettingsFile
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x68\x6f\x73\x74\x6e\x61\x6d\x65",
              k.setHostname
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x65\x74\x68\x65\x72\x6e\x65\x74",
              k.setEthernet
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x77\x69\x66\x69",
              k.setWifi
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e",
              k.setOverscan
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e",
              k.setOrientation
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x73\x65\x72\x76\x65\x72\x6e\x61\x6d\x65",
              k.setServerName
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x75\x73\x65\x72",
              k.setUser
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x73\x6c\x65\x65\x70",
              k.setSleepTimer
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6f\x6d\x78\x56\x6f\x6c\x75\x6d\x65",
              k.getOMXVolume
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6f\x6d\x78\x56\x6f\x6c\x75\x6d\x65",
              k.setOMXVolume
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6d\x75\x74\x65",
              k.setMute
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x6c\x6f\x67",
              k.getLog
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x72\x65\x73\x65\x74",
              k.factoryReset
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x65\x74\x74\x69\x6e\x67\x73\x2f\x77\x69\x66\x69\x73\x63\x61\x6e",
              k.getWifiList
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x6b\x69\x6f\x73\x6b\x75\x69\x2f\x3a\x61\x63\x74\x69\x6f\x6e",
              m.takeAction
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x70\x69\x73\x77\x75\x70\x64\x61\x74\x65\x2f",
              k.piswupdate
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x64\x65\x76\x69\x63\x65",
              k.getDeviceId
            ),
            a.get(
              "\x2f\x61\x70\x69\x2f\x73\x63\x68\x65\x64\x75\x6c\x65",
              k.getSchedule
            ),
            a.post(
              "\x2f\x61\x70\x69\x2f\x73\x63\x68\x65\x64\x75\x6c\x65",
              k.setSchedule
            ),
            a.get("\x2f\x61\x70\x69\x2f\x72\x61\x64\x61\x72", k.getRadar),
            a.post("\x2f\x61\x70\x69\x2f\x72\x61\x64\x61\x72", k.setRadar),
            a.get("\x2a", function (a, b) {
              b.render("\x69\x6e\x64\x65\x78\x2d\x70\x69\x2e\x68\x74\x6d\x6c");
            });
        }
        var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        (process.env.NODE_ENV = "\x70\x69"),
          (d = c("\x65\x78\x70\x72\x65\x73\x73")),
          (e = c("\x68\x74\x74\x70\x2d\x61\x75\x74\x68")),
          (f = c(
            "\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          )),
          (g = c(
            "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x2d\x63\x6c\x69\x65\x6e\x74"
          )),
          (h = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x61\x73\x73\x65\x74\x73"
          )),
          (i = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73"
          )),
          (j = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x74\x6f\x6b\x65\x6e"
          )),
          (k = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x6d\x61\x69\x6e"
          )),
          (l = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x76\x69\x65\x77\x65\x72"
          )),
          (m = c(
            "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x6b\x69\x6f\x73\x6b\x2d\x75\x69"
          )),
          (n = process.version.slice(1, process.version.indexOf("\x2e"))),
          (o =
            n > 0
              ? c(
                  "\x39\x31\x39\x2e\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x2d\x63\x6c\x69\x65\x6e\x74"
                )
              : null),
          (p = e.basic({
            realm: "\x70\x69",
            file: f.root + "\x2f\x68\x74\x70\x61\x73\x73\x77\x64",
          })),
          (q = d()),
          q.use(s),
          q.use(
            d["\x73\x74\x61\x74\x69\x63"](
              f.root + "\x2f\x70\x75\x62\x6c\x69\x63"
            )
          ),
          q.use(function (a, b, d) {
            -1 == a.host.indexOf("\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74")
              ? e.connect
                ? e.connect(p)(a, b, d)
                : c(
                    "\x68\x74\x74\x70\x2d\x61\x75\x74\x68\x2d\x63\x6f\x6e\x6e\x65\x63\x74"
                  )(p)(a, b, d)
              : d();
          }),
          q.use(
            "\x2f\x6d\x65\x64\x69\x61",
            d["\x73\x74\x61\x74\x69\x63"](f.mediaDir)
          ),
          q.engine("\x68\x74\x6d\x6c", c("\x65\x6a\x73").renderFile),
          q.set("\x76\x69\x65\x77\x73", f.viewDir),
          q.use(
            d.favicon(
              f.root +
                "\x2f\x70\x75\x62\x6c\x69\x63\x2f\x61\x70\x70\x2f\x69\x6d\x67\x2f\x66\x61\x76\x69\x63\x6f\x6e\x2e\x69\x63\x6f"
            )
          ),
          q.configure(function () {
            q.use(d.limit("\x39\x39\x30\x6d\x62")),
              q.use(d.bodyParser({ uploadDir: f.mediaDir })),
              q.use(d.methodOverride()),
              q.use(q.router),
              q.use(function (a, b, c, d) {
                return ~a.message.indexOf(
                  "\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64"
                )
                  ? d()
                  : (console.error(a.stack),
                    void c
                      .status(500)
                      .render("\x35\x30\x30\x2e\x68\x74\x6d\x6c"));
              }),
              q.use(function (a, b) {
                b.status(404).render("\x34\x30\x34\x2e\x68\x74\x6d\x6c", {
                  url: a.originalUrl,
                });
              });
          }),
          t(q),
          k.startClient(g, o),
          (r = q.listen(f.port, function () {
            console.log(
              "\x45\x78\x70\x72\x65\x73\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74\x20" +
                f.port
            );
          })),
          l.startChromeSocket(r);
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x6d\x61\x69\x6e\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        function da(a) {
          (a = a || "\x69\x6e\x66\x6f"),
            "\x74\x6f\x67\x67\x6c\x65" == a &&
              (a =
                "\x64\x65\x62\x75\x67" == a
                  ? "\x69\x6e\x66\x6f"
                  : "\x64\x65\x62\x75\x67"),
            "\x64\x65\x62\x75\x67" == s.debugLevel &&
              "\x64\x65\x62\x75\x67" != a &&
              n.clearDisplayOnscreenMessage(),
            (s.debugLevel = a),
            s.log(
              "\x65\x72\x72\x6f\x72",
              "\x44\x65\x62\x75\x67\x20\x6c\x65\x76\x65\x6c\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20" +
                s.debugLevel
            );
        }
        function ja() {
          var a, b, c;
          for (
            G = [],
              J = [],
              K = [],
              I = [],
              H = [],
              F = [],
              a = 0,
              b = w.deployedPlaylists.length;
            b > a;
            a++
          )
            (c = w.deployedPlaylists[a]),
              c.settings && c.settings.event && c.settings.event.enable
                ? I.push(c)
                : c.settings &&
                  c.settings.domination &&
                  c.settings.domination.enable
                ? (J.push(c), K.push(-1))
                : c.settings && c.settings.ads && c.settings.ads.adPlaylist
                ? G.push(c)
                : c.settings && c.settings.audio && c.settings.audio.enable
                ? H.push(c)
                : F.push(c);
        }
        function pa(a) {
          var b,
            c,
            d = function (b) {
              var c,
                d = x.cpuSerialNumber,
                e =
                  d.slice(0, 4) +
                  "\x2d" +
                  d.slice(4, 8) +
                  "\x2d" +
                  d.slice(8, 12) +
                  "\x2d" +
                  d.slice(12, 16);
              (c = k.compile(b)({ playerId: e, myplayer: x, systemIP: B })),
                f.writeFile(
                  l.mediaPath +
                    "\x5f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                  c,
                  function (b) {
                    b && s.log("\x65\x72\x72\x6f\x72", b), a && a();
                  }
                ),
                f.writeFile(
                  l.mediaPath +
                    "\x5f\x73\x79\x73\x74\x65\x6d\x5f\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                  c,
                  function (a) {
                    a &&
                      s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x5f\x73\x79\x73\x74\x65\x6d\x5f\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c\x20\x77\x72\x69\x74\x65\x20\x65\x72\x72\x6f\x72\x2c\x20" +
                          a
                      );
                  }
                );
            };
          f.exists(
            l.mediaPath + "\x77\x65\x6c\x63\x6f\x6d\x65\x2e\x65\x6a\x73",
            function (a) {
              b = a
                ? l.mediaPath + "\x77\x65\x6c\x63\x6f\x6d\x65\x2e\x65\x6a\x73"
                : "\x2e\x2f\x61\x70\x70\x2f\x76\x69\x65\x77\x73\x2f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x65\x6a\x73";
              try {
                (c = f.readFileSync(b, "\x75\x74\x66\x38")), d(c);
              } catch (e) {
                (c = f.readFileSync(
                  "\x2e\x2f\x61\x70\x70\x2f\x76\x69\x65\x77\x73\x2f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x65\x6a\x73",
                  "\x75\x74\x66\x38"
                )),
                  d(c);
              }
            }
          );
        }
        function Da() {
          return wa ? sa && sa.socket && sa.socket.sessionid : sa && sa.id;
        }
        function Ea() {
          return wa
            ? sa && sa.socket && sa.socket.sessionid && sa.socket.connected
            : sa && sa.id && sa.connected;
        }
        function Fa() {
          if (ta) {
            try {
              ta.removeAllListeners(), ta.disconnect();
            } catch (a) {
              s.log(
                "\x65\x72\x72\x6f\x72",
                "\x73\x65\x63\x6f\x6e\x64\x61\x72\x79\x20\x73\x6f\x63\x6b\x65\x74\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x20\x65\x78\x63\x65\x70\x74\x69\x6f\x6e\x3a\x20" +
                  a.code
              );
            }
            ta = null;
          }
        }
        function Ga(a) {
          var e;
          a &&
            ((sa =
              -1 ===
              U.indexOf("\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d")
                ? ua(a, {
                    path: "\x2f\x6e\x65\x77\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f",
                    transports: [
                      "\x70\x6f\x6c\x6c\x69\x6e\x67",
                      "\x77\x65\x62\x73\x6f\x63\x6b\x65\x74",
                    ],
                    rejectUnauthorized: !1,
                  })
                : ua(a, {
                    path: "\x2f\x77\x73\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f",
                    transports: ["\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"],
                    rejectUnauthorized: !1,
                  })),
            (ta = va.connect(m.config_server, { "force new connection": !0 })),
            ta.on("\x63\x6f\x6e\x6e\x65\x63\x74", function () {
              (xa = !0),
                s.log(
                  "\x69\x6e\x66\x6f",
                  "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x20\x77\x6f\x72\x6b\x73\x20\x77\x69\x74\x68\x20\x30\x2e\x39\x2e\x31\x39"
                ),
                za ? b.startClient() : Fa();
            })),
            s.log(
              "\x69\x6e\x66\x6f",
              "\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x73\x6f\x63\x6b\x65\x74\x69\x6f\x20\x74\x6f\x20" +
                a +
                "\x20\x77\x69\x74\x68\x20\x76\x65\x72\x3a\x20" +
                (wa ? "\x30\x2e\x39\x2e\x31\x39" : "\x6e\x65\x77")
            ),
            sa.on("\x63\x6f\x6e\x6e\x65\x63\x74", function () {
              wa ? (xa = !0) : (ya = !0),
                (Aa = !0),
                (Ba = !1),
                s.log(
                  "\x69\x6e\x66\x6f",
                  "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x74\x6f\x20\x73\x65\x72\x76\x65\x72\x20" +
                    Da() +
                    "\x77\x69\x74\x68\x20\x76\x65\x72\x3a\x20" +
                    (wa ? "\x30\x2e\x39\x2e\x31\x39" : "\x6e\x65\x77")
                ),
                La(),
                (x.connectionStatus = "\x43\x6f\x6e\x6e\x65\x63\x74\x65\x64"),
                Ca && (Ca--, 0 == B.length ? (Y(), Z(pa)) : pa()),
                s.testLog(
                  "\x73\x6f\x63\x6b\x65\x74",
                  "\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64"
                );
            }),
            sa.on("\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74", function () {}),
            sa.on(
              "\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x61\x74\x74\x65\x6d\x70\x74",
              function () {}
            ),
            sa.on(
              "\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x66\x61\x69\x6c\x65\x64",
              function (a) {
                (Aa || Ba) &&
                  s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x65\x76\x65\x6e\x74\x3a\x20" +
                      a.message
                  ),
                  (Ba = !1);
              }
            ),
            sa.on(
              "\x72\x65\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x65\x72\x72\x6f\x72",
              function () {}
            ),
            sa.on(
              "\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x65\x72\x72\x6f\x72",
              function (a) {
                (Aa || Ba) &&
                  s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x65\x72\x72\x6f\x72\x20\x65\x76\x65\x6e\x74\x3a\x20" +
                      a.message
                  ),
                  (Aa = !1),
                  (Ba = !1),
                  (za = !0),
                  wa || ya || !xa || b.startClient();
              }
            ),
            sa.on(
              "\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x74\x69\x6d\x65\x6f\x75\x74",
              function () {
                (Aa || Ba) &&
                  s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x74\x69\x6d\x65\x6f\x75\x74\x20\x65\x76\x65\x6e\x74"
                  ),
                  (Aa = !1),
                  (Ba = !1);
              }
            ),
            sa.on(
              "\x63\x6f\x6e\x6e\x65\x63\x74\x5f\x66\x61\x69\x6c\x65\x64",
              function () {
                (Aa || Ba) &&
                  s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x63\x6f\x6e\x6e\x65\x63\x74\x20\x66\x61\x69\x6c\x65\x64\x20\x65\x76\x65\x6e\x74" +
                      Da()
                  ),
                  (Aa = !1),
                  (Ba = !1);
              }
            ),
            sa.on("\x65\x72\x72\x6f\x72", function (a) {
              s.log(
                "\x65\x72\x72\x6f\x72",
                "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x65\x72\x72\x6f\x72\x20\x20\x65\x76\x65\x6e\x74" +
                  Da() +
                  "\x3b" +
                  a
              ),
                (Aa = !1);
            }),
            sa.on("\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74", function (a) {
              s.log(
                "\x65\x72\x72\x6f\x72",
                "\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x3a\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x20\x20\x65\x76\x65\x6e\x74" +
                  Da() +
                  "\x3b" +
                  a
              ),
                (Aa = !1),
                (x.connectionStatus =
                  "\x44\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64"),
                Ca && (Ca--, pa()),
                "\x69\x6f\x20\x73\x65\x72\x76\x65\x72\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74" ===
                  a && sa.connect();
            }),
            sa.on("\x73\x74\x61\x74\x75\x73", function () {
              La();
            }),
            sa.on("\x73\x68\x65\x6c\x6c", function (a) {
              Ra(a);
            }),
            sa.on("\x63\x6f\x6e\x66\x69\x67", function (a) {
              var g,
                h,
                i,
                k,
                l,
                m,
                e = function (b) {
                  return void 0 !== a[b] && a[b] != x[b]
                    ? (s.log(
                        "\x69\x6e\x66\x6f",
                        "\x63\x68\x61\x6e\x67\x65\x64\x20\x73\x65\x74\x74\x69\x6e\x67\x73\x20\x66\x6f\x72\x20" +
                          b +
                          "\x20\x66\x72\x6f\x6d\x20" +
                          x[b] +
                          "\x20\x74\x6f\x20" +
                          a[b]
                      ),
                      (x[b] = a[b]),
                      (h = !0),
                      !0)
                    : !1;
                };
              (Aa = !0),
                Na(),
                a.currentTime &&
                  a.currentTime - Date.now() > 12e4 &&
                  (s.log(
                    "\x69\x6e\x66\x6f",
                    "\x61\x64\x6a\x75\x73\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x74\x69\x6d\x65\x20\x74\x6f\x20\x73\x65\x72\x76\x65\x72\x20\x74\x69\x6d\x65\x20" +
                      new Date(a.currentTime).toLocaleString()
                  ),
                  d(
                    "\x73\x75\x64\x6f\x20\x64\x61\x74\x65\x20\x2d\x73\x20\x40" +
                      ~~(a.currentTime / 1e3),
                    function (a, b, c) {
                      a && (console.log(a), console.log(c), console.log(b));
                    }
                  )),
                (g = !1),
                (h = !1),
                a.installation &&
                  a.secret &&
                  (a.installation != x.installation || a.secret != x.secret) &&
                  (g = !0),
                e("\x6e\x61\x6d\x65") && t.registerHostnameChange(a.name),
                (x.currentVersion = a.currentVersion),
                (x.assets = a.assets),
                (x.loadPlaylistOnCompletion = a.loadPlaylistOnCompletion || !1),
                a.installation &&
                  ((x.installation = a.installation),
                  !a.authCredentials ||
                    (y.user == a.authCredentials.user &&
                      y.password == a.authCredentials.password) ||
                    ((y.user = a.authCredentials.user),
                    (y.password = a.authCredentials.password),
                    f.writeFileSync(
                      "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x77\x67\x65\x74\x72\x63",
                      "\x75\x73\x65\x72\x20\x3d\x20" +
                        y.user +
                        "\n\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x3d\x20" +
                        y.password
                    ),
                    (i = c("\x61\x70\x61\x63\x68\x65\x2d\x6d\x64\x35")(
                      a.authCredentials.password
                    )),
                    f.writeFileSync(
                      v.root + "\x2f\x68\x74\x70\x61\x73\x73\x77\x64",
                      a.authCredentials.user + "\x3a" + i
                    ))),
                void 0 === a.animationEnable ||
                  (a.animationEnable == x.animationEnable &&
                    a.animationType == x.animationType) ||
                  (a.animationEnable
                    ? ((x.animationEnable = !0),
                      (x.animationType = a.animationType),
                      n.setAnimationStatus(x.animationEnable, x.animationType))
                    : ((x.animationEnable = !1),
                      (x.animationType = null),
                      n.setAnimationStatus(!1, null, null)),
                  (h = !0)),
                e("\x73\x73\x68\x50\x61\x73\x73\x77\x6f\x72\x64") &&
                  t.changeSshPassword(x.sshPassword),
                e(
                  "\x73\x69\x67\x6e\x61\x67\x65\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72"
                ) && n.setBackgroundColor(x.signageBackgroundColor),
                (k = e(
                  "\x69\x6d\x61\x67\x65\x4c\x65\x74\x74\x65\x72\x62\x6f\x78\x65\x64"
                )),
                (e("\x72\x65\x73\x69\x7a\x65\x41\x73\x73\x65\x74\x73") || k) &&
                  n.setImageResize(ka(x.resizeAssets, x.imageLetterboxed)),
                e(
                  "\x76\x69\x64\x65\x6f\x4b\x65\x65\x70\x41\x73\x70\x65\x63\x74"
                ) && n.setVideoKeepAspect(x.videoKeepAspect),
                e(
                  "\x76\x69\x64\x65\x6f\x53\x68\x6f\x77\x53\x75\x62\x74\x69\x74\x6c\x65\x73"
                ) && n.setVideoShowSubtitles(x.videoShowSubtitles),
                e(
                  "\x73\x79\x73\x74\x65\x6d\x4d\x65\x73\x73\x61\x67\x65\x73\x48\x69\x64\x65"
                ) && n.setSystemMessagesHide(x.systemMessagesHide),
                e("\x66\x6f\x72\x63\x65\x54\x76\x4f\x6e"),
                e(
                  "\x64\x69\x73\x61\x62\x6c\x65\x43\x45\x43\x50\x6f\x77\x65\x72\x43\x68\x65\x63\x6b"
                ),
                e(
                  "\x68\x69\x64\x65\x57\x65\x6c\x63\x6f\x6d\x65\x4e\x6f\x74\x69\x63\x65"
                ),
                e("\x6f\x6d\x78\x56\x6f\x6c\x75\x6d\x65") &&
                  n.setOMXVolume(x.omxVolume),
                e(
                  "\x74\x69\x6d\x65\x54\x6f\x53\x74\x6f\x70\x56\x69\x64\x65\x6f"
                ) && n.setTimeToStopVideo(x.timeToStopVideo),
                e("\x65\x6e\x61\x62\x6c\x65\x4c\x6f\x67") &&
                  n.setAssetLogs(x.enableLog),
                e(
                  "\x64\x69\x73\x61\x62\x6c\x65\x50\x6c\x61\x79\x65\x72\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x4f\x6e\x4d\x6f\x64\x65\x6d"
                ),
                e(
                  "\x72\x65\x70\x6f\x72\x74\x49\x6e\x74\x65\x72\x76\x61\x6c\x4d\x69\x6e\x75\x74\x65\x73"
                ),
                e(
                  "\x65\x6e\x61\x62\x6c\x65\x59\x6f\x75\x74\x75\x62\x65\x44\x6c"
                ) && n.setYoutubeDl(x.enableYoutubeDl),
                (l = e("\x6d\x70\x76\x41\x75\x64\x69\x6f\x44\x65\x6c\x61\x79")),
                (e("\x65\x6e\x61\x62\x6c\x65\x4d\x70\x76") || l) &&
                  n.setMpv(x.enableMpv, x.mpvAudioDelay),
                e(
                  "\x63\x6f\x6d\x62\x69\x6e\x65\x44\x65\x66\x61\x75\x6c\x74\x50\x6c\x61\x79\x6c\x69\x73\x74"
                ),
                e(
                  "\x70\x6c\x61\x79\x41\x6c\x6c\x45\x6c\x69\x67\x69\x62\x6c\x65\x50\x6c\x61\x79\x6c\x69\x73\x74\x73"
                ),
                e("\x73\x68\x75\x66\x66\x6c\x65\x43\x6f\x6e\x74\x65\x6e\x74") &&
                  n.setShuffleContent(x.shuffleContent),
                e(
                  "\x61\x6c\x74\x65\x72\x6e\x61\x74\x65\x43\x6f\x6e\x74\x65\x6e\x74"
                ),
                e(
                  "\x75\x72\x6c\x52\x65\x6c\x6f\x61\x64\x44\x69\x73\x61\x62\x6c\x65"
                ) && n.setUrlReloadDisable(x.urlReloadDisable),
                e(
                  "\x6b\x65\x65\x70\x57\x65\x62\x6c\x69\x6e\x6b\x73\x49\x6e\x4d\x65\x6d\x6f\x72\x79"
                ) && n.setWeblinkCacheEnable(x.keepWeblinksInMemory),
                e("\x64\x69\x73\x61\x62\x6c\x65\x41\x70") &&
                  x.disableAp &&
                  ((m =
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x70\x6f\x69\x6e\x74"),
                  d(v.systemScript + m, function (a, b, c) {
                    a || c
                      ? s.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x77\x69\x66\x69\x20\x41\x50\x20\x6d\x6f\x64\x65\x20\x63\x68\x61\x6e\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x3a\x20" +
                            a
                        )
                      : s.log("\x69\x6e\x66\x6f", b);
                  })),
                e(
                  "\x64\x69\x73\x61\x62\x6c\x65\x57\x61\x72\x6e\x69\x6e\x67\x73"
                ) &&
                  ((m =
                    "\x2d\x2d\x63\x68\x61\x6e\x67\x65\x2d\x63\x6f\x6e\x66\x69\x67\x2d\x74\x78\x74\x20\x61\x76\x6f\x69\x64\x5f\x77\x61\x72\x6e\x69\x6e\x67\x73\x20" +
                    (x.disableWarnings ? "\x31" : "\x30")),
                  d(v.systemScript + m, function (a, b, c) {
                    a || c
                      ? s.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x61\x76\x6f\x69\x64\x5f\x77\x61\x72\x6e\x69\x6e\x67\x73\x20\x63\x68\x61\x6e\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x3a\x20" +
                            a
                        )
                      : s.log("\x69\x6e\x66\x6f", b);
                  })),
                e("\x64\x69\x73\x61\x62\x6c\x65\x57\x65\x62\x55\x69"),
                ((a.logo && (a.logo != x.logo || !x.logo)) ||
                  (!a.logo && x.logo) ||
                  a.logox != x.logox ||
                  a.logoy != x.logoy) &&
                  ((x.logo = a.logo),
                  (x.logox = a.logox),
                  (x.logoy = a.logoy),
                  qb(),
                  (h = !0)),
                ((a.orientation &&
                  x.orientation &&
                  a.orientation != x.orientation) ||
                  (a.resolution &&
                    x.resolution &&
                    a.resolution != x.resolution)) &&
                  gb(a),
                !a.sleep ||
                  (x.sleep &&
                    a.sleep.enable == x.sleep.enable &&
                    a.sleep.ontime == x.sleep.ontime &&
                    a.sleep.offtime == x.sleep.offtime) ||
                  ((x.sleep = a.sleep), mb(x.sleep), (h = !0)),
                !a.reboot ||
                  (x.reboot &&
                    a.reboot.enable == x.reboot.enable &&
                    a.reboot.time == x.reboot.time) ||
                  ((x.reboot = a.reboot), rb(x.reboot), (h = !0)),
                !a.showClock ||
                  (x.showClock && j.isEqual(a.showClock, x.showClock)) ||
                  ((x.showClock = a.showClock),
                  n.setDisplayClock(x.showClock, x.emergencyMessage),
                  (h = !0)),
                !a.kioskUi ||
                  (x.kioskUi && j.isEqual(a.kioskUi, x.kioskUi)) ||
                  ((x.kioskUi = a.kioskUi), q.setupUi(x.kioskUi), (h = !0)),
                !a.emergencyMessage ||
                  (x.emergencyMessage &&
                    j.isEqual(a.emergencyMessage, x.emergencyMessage)) ||
                  ((x.emergencyMessage = a.emergencyMessage),
                  n.setDisplayClock(x.showClock, x.emergencyMessage),
                  x.emergencyMessage.enable &&
                    t.getCecStatus(!0, !0, function (a) {
                      w.cecTvStatus = a;
                    }),
                  (h = !0)),
                a.TZ &&
                  x.TZ != a.TZ &&
                  ((x.TZ = a.TZ),
                  d(
                    "\x73\x65\x64\x20\x2d\x69\x20\x20\x22\x73\x7c\x2e\x2a\x54\x5a\x3d\x2e\x2a\x7c\x54\x5a\x3d\x27" +
                      a.TZ +
                      "\x27\x3b\x20\x65\x78\x70\x6f\x72\x74\x20\x54\x5a\x7c\x22\x20\x20\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x62\x61\x73\x68\x5f\x70\x72\x6f\x66\x69\x6c\x65"
                  ).on("\x63\x6c\x6f\x73\x65", function () {
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20" +
                        a.TZ
                    ),
                      b.writeToSettings(),
                      d(
                        "\x73\x6f\x75\x72\x63\x65\x20\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x62\x61\x73\x68\x72\x63"
                      );
                  })),
                (w.groupTicker = a.groupTicker),
                g
                  ? ((w.localControl = !1),
                    (V.settings = V.settings.filter(function (a) {
                      return -1 === R.indexOf(a);
                    })),
                    Q && ((Q = !1), f.unlinkSync(P)),
                    c(
                      "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x69\x63\x65\x6e\x73\x65\x2d\x75\x74\x69\x6c\x73"
                    ).checkForLicense(
                      x.installation,
                      x.cpuSerialNumber,
                      function (a) {
                        ("\x74\x74\x6b" != x.installation &&
                          "\x61\x64\x6d\x69\x6e" != x.installation) ||
                          "\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d" !=
                            U ||
                          (a = !0),
                          n.setLicense(a),
                          (w.licensed = a),
                          s.log(
                            "\x69\x6e\x66\x6f",
                            "\x6c\x69\x63\x65\x6e\x73\x65\x20\x73\x74\x61\x74\x75\x73\x3a\x20" +
                              a
                          );
                      },
                      U
                    ),
                    (x.assetsValidity = a.assetsValidity),
                    Oa(a))
                  : !C &&
                    !E &&
                    a.playlists &&
                    a.playlists.length > 0 &&
                    (parseInt(a.lastDeployed) > w.lastUpload ||
                      (!w.localControl &&
                        !j.isEqual(a.playlists, w.deployedPlaylists))) &&
                    ((w.localControl = !1),
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x2a\x2a\x2a\x20\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x73\x2c\x47\x72\x6f\x75\x70\x20\x64\x65\x70\x6c\x6f\x79\x20\x74\x69\x6d\x65\x3a\x20" +
                        new Date(parseInt(a.lastDeployed)).toLocaleString() +
                        "\x2c\x20\x50\x6c\x61\x79\x65\x72\x20\x75\x70\x6c\x6f\x61\x64\x20\x74\x69\x6d\x65\x3a\x20" +
                        new Date(w.lastUpload).toLocaleString()
                    ),
                    (x.assetsValidity = a.assetsValidity),
                    Qa(a.playlists, null, a.assets, !0)),
                h && b.writeToSettings();
            }),
            sa.on("\x73\x79\x6e\x63", function (a, b, c, d, e, f, g, h, i, j) {
              s.log(
                "\x69\x6e\x66\x6f",
                "\x2a\x2a\x2a\x20\x73\x79\x6e\x63\x20\x69\x6e\x69\x74\x69\x61\x74\x65\x64\x20\x61\x74\x20\x73\x65\x72\x76\x65\x72\x3a\x20" +
                  new Date().toLocaleString()
              ),
                p.storeEvent(
                  "\x70\x6c\x61\x79\x65\x72",
                  "\x6e\x65\x74\x77\x6f\x72\x6b",
                  "\x73\x79\x6e\x63\x20\x69\x6e\x69\x74\x69\x61\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x73\x65\x72\x76\x65\x72"
                ),
                (w.localControl = !1),
                (w.groupTicker = c),
                (x.assets = b),
                (x.assetsValidity = j),
                (x.logo = d || null),
                (x.logox = e || 10),
                (x.logoy = f || 10),
                (x.combineDefaultPlaylist = g || !1),
                (x.loadPlaylistOnCompletion = i || !1),
                n.setOMXVolume(h),
                La(!0),
                Qa(
                  a,
                  function (a) {
                    -1 != a && qb();
                  },
                  b,
                  !0
                );
            }),
            sa.on("\x72\x65\x73\x74\x61\x72\x74", function () {
              e ||
                ((e = !0),
                s.log(
                  "\x69\x6e\x66\x6f",
                  "\x2a\x2a\x2a\x2a\x20\x52\x65\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x2a"
                ),
                ca(function () {
                  e = !1;
                }));
            }),
            sa.on("\x73\x77\x75\x70\x64\x61\x74\x65", function (a) {
              ra(a);
            }),
            sa.on("\x73\x6e\x61\x70\x73\x68\x6f\x74", function () {
              ea(function (a, b) {
                Ea() &&
                  sa.emit("\x73\x6e\x61\x70\x73\x68\x6f\x74", {
                    playerInfo: x,
                    data: b,
                  });
              });
            }),
            sa.on("\x63\x6d\x64", function (a, b) {
              switch (a) {
                case "\x64\x65\x62\x75\x67\x6c\x65\x76\x65\x6c":
                  da(b.level);
                  break;
                case "\x74\x76\x70\x6f\x77\x65\x72":
                  b.off ? pb() : ob();
              }
            }),
            sa.on(
              "\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f\x6d\x65\x64\x69\x61",
              function (a) {
                s.log(
                  "\x69\x6e\x66\x6f",
                  "\x70\x6c\x61\x79\x5f\x61\x63\x74\x69\x6f\x6e\x20\x63\x61\x6c\x6c\x65\x64\x20\x77\x69\x74\x68\x20\x61\x63\x74\x69\x6f\x6e\x3a\x20" +
                    a
                ),
                  Sa(a);
              }
            ),
            sa.on("\x73\x65\x74\x70\x6c\x61\x79\x6c\x69\x73\x74", function (a) {
              s.log(
                "\x69\x6e\x66\x6f",
                "\x53\x65\x72\x76\x65\x72\x20\x72\x65\x71\x75\x65\x73\x74\x20\x74\x6f\x20\x70\x6c\x61\x79\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x31\x20\x74\x69\x6d\x65\x3a\x20" +
                  a
              ),
                (w.playlistOn = !1),
                (w.localControl = !0),
                ba(
                  !0,
                  a,
                  function (a, b) {
                    Ea() &&
                      (a
                        ? (s.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x45\x72\x72\x6f\x72\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x3a\x20" +
                              JSON.stringify(a, null, 2)
                          ),
                          sa.emit(
                            "\x73\x65\x74\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f\x61\x63\x6b",
                            { err: a }
                          ))
                        : (La(),
                          sa.emit(
                            "\x73\x65\x74\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f\x61\x63\x6b",
                            {
                              msg: "\x53\x74\x61\x72\x74\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74",
                              playlist: b ? b.currentPlaylist : null,
                            }
                          )));
                  },
                  !1,
                  !0
                );
            }),
            sa.on("\x75\x70\x6c\x6f\x61\x64\x5f\x61\x63\x6b", function (a) {
              -1 == a.indexOf("\x66\x6f\x72\x65\x76\x65\x72\x5f\x6f\x75\x74") &&
                p.deleteLog(a);
            }),
            sa.on("\x6c\x69\x63\x65\x6e\x73\x65", function (a, b) {
              s.log(
                "\x69\x6e\x66\x6f",
                "\x4c\x69\x63\x65\x6e\x73\x65\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x72\x65\x71\x75\x65\x73\x74\x20\x66\x6f\x72\x20" +
                  a +
                  "\x20\x77\x69\x74\x68\x20\x69\x64\x20\x3a\x20" +
                  b +
                  "\x20\x72\x65\x63\x65\x69\x76\x65\x64"
              ),
                f.unlink(
                  l.root +
                    "\x2f\x2e\x2e\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                    b +
                    "\x2e\x74\x78\x74",
                  function () {
                    ub();
                  }
                );
            }),
            Ka();
        }
        function Ka() {
          var a = parseInt(x.reportIntervalMinutes || 5);
          (isNaN(a) || 3 > a) && (a = 5),
            clearTimeout(Ha),
            (Ha = setTimeout(function () {
              Ea()
                ? (Ia = 0)
                : (Ia++,
                  Ia >= 4 ? (Ja(), (Ia = 0)) : Ia >= 2 && b.startClient()),
                La(),
                "\x4e\x54\x53\x43" == x.resolution ||
                  "\x50\x41\x4c" == x.resolution ||
                  x.disableCECPowerCheck ||
                  t.getCecStatus(x.forceTvOn, w.tvStatus, function (a, b) {
                    (w.cecTvStatus = a), (w.piTemperature = b);
                  }),
                (w.uptime = process.uptime()),
                Ka();
            }, 60 * a * 1e3));
        }
        function La(a) {
          (w.request = !0),
            w.playlistOn
              ? (w.duration = Math.floor(
                  (Date.now() - w.playlistStarttime) / 6e4
                ))
              : (w.duration = 0),
            Ea() &&
              sa.emit(
                "\x73\x74\x61\x74\x75\x73",
                j.pick(x, V.settings),
                j.pick(w, V.config),
                a || Q || !1
              );
        }
        function Na() {
          clearTimeout(Ma),
            (Ma = setTimeout(function () {
              Ja(), Na();
            }, 36e5));
        }
        function Oa(a) {
          var c = a.playlists,
            d = a.assets;
          (C = !0),
            (x.secret = a.secret),
            b.writeToSettings(),
            s.log(
              "\x69\x6e\x66\x6f",
              "\x2a\x2a\x2a\x20\x43\x68\x61\x6e\x67\x69\x6e\x67\x20\x74\x6f\x20\x47\x72\x6f\x75\x70\x3a\x20" +
                a.secret
            ),
            p.storeEvent(
              "\x70\x6c\x61\x79\x65\x72",
              "\x6e\x65\x74\x77\x6f\x72\x6b",
              "\x67\x6f\x69\x6e\x67\x20\x74\x6f\x20\x61\x64\x64\x20\x73\x65\x63\x72\x65\x74\x20\x6b\x65\x79\x3a\x20" +
                a.secret
            ),
            Ea() && sa.emit("\x73\x65\x63\x72\x65\x74\x5f\x61\x63\x6b"),
            Qa(
              c,
              function (a) {
                -1 != a && (C = !1);
              },
              d
            );
        }
        function Qa(a, d, i, j, k) {
          var m = Object.keys(e.networkInterfaces());
          return x.disablePlayerDownloadOnModem === !0 &&
            -1 === m.indexOf("\x77\x6c\x61\x6e\x30") &&
            -1 === m.indexOf("\x65\x74\x68\x30")
            ? (s.log(
                "\x65\x72\x72\x6f\x72",
                "\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x6f\x66\x20\x66\x69\x6c\x65\x73\x20\x64\x75\x65\x20\x74\x6f\x20\x65\x74\x68\x30\x2f\x77\x6c\x61\x6e\x30\x20\x61\x76\x61\x69\x6c\x61\x62\x69\x6c\x69\x74\x79"
              ),
              console.log(m),
              void (
                d &&
                d(
                  "\x53\x6b\x69\x70\x70\x69\x6e\x67\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x73\x69\x6e\x63\x65\x20\x6e\x6f\x20\x77\x6c\x61\x6e\x30\x20\x6f\x72\x20\x65\x74\x68\x30\x20\x69\x73\x20\x70\x72\x65\x73\x65\x6e\x74"
                )
              ))
            : (k || (Pa = 0),
              (E = !0),
              void o.getGroupFiles(x.installation, x.secret, function (e, k) {
                if ((d && d(e, k), -1 != e)) {
                  if (((E = !1), (w.lastUpload = Date.now()), e)) {
                    if (
                      (s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x46\x41\x49\x4c\x45\x44\x20\x43\x4f\x50\x59\x49\x4e\x47\x20\x53\x45\x52\x56\x45\x52\x20\x46\x49\x4c\x45\x53\x3a\x3a\x20" +
                          e
                      ),
                      p.storeEvent(
                        "\x70\x6c\x61\x79\x65\x72",
                        "\x6e\x65\x74\x77\x6f\x72\x6b",
                        "\x77\x67\x65\x74\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x45\x52\x52\x4f\x52\x2c\x20" +
                          e
                      ),
                      null == k)
                    )
                      return void s.log(
                        "\x77\x61\x72\x6e",
                        "\x6c\x6f\x6f\x6b\x73\x20\x6c\x69\x6b\x65\x20\x61\x6e\x6f\x74\x68\x65\x72\x20\x77\x67\x65\x74\x20\x63\x61\x6e\x63\x65\x6c\x6c\x65\x64\x20\x74\x68\x69\x73\x20\x77\x67\x65\x74"
                      );
                    4 == k
                      ? 5 > Pa &&
                        ((Pa += 1),
                        setTimeout(function () {
                          s.log(
                            "\x77\x61\x72\x6e",
                            "\x72\x65\x74\x72\x79\x69\x6e\x67\x20\x66\x6f\x72\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x2c\x20\x61\x74\x74\x65\x6d\x70\x74\x3a\x20" +
                              Pa
                          ),
                            Qa(a, d, i, j, !0);
                        }, 3e5 * Pa * Pa))
                      : (Pa = 0);
                  } else
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x43\x4f\x50\x49\x45\x44\x20\x53\x45\x52\x56\x45\x52\x20\x46\x49\x4c\x45\x53\x20" +
                        x.secret +
                        "\x20\x53\x55\x43\x43\x45\x53\x53\x46\x55\x4c\x4c\x59\x2e"
                    ),
                      p.storeEvent(
                        "\x70\x6c\x61\x79\x65\x72",
                        "\x6e\x65\x74\x77\x6f\x72\x6b",
                        "\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x64\x6f\x6e\x65\x20\x66\x6f\x72\x20" +
                          x.secret
                      ),
                      (Pa = 0);
                  a &&
                    a.length > 0 &&
                    ((w.deployedPlaylists = a),
                    ja(),
                    s.log(
                      "\x64\x65\x62\x75\x67",
                      "\x44\x65\x70\x6c\x6f\x79\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x3a\x20" +
                        a
                    ),
                    s.log(
                      "\x64\x65\x62\x75\x67",
                      "\x44\x65\x70\x6c\x6f\x79\x65\x64\x20\x61\x73\x73\x65\x74\x73\x3a\x20" +
                        i && "" + i
                    ));
                  var m = bb();
                  hb(m.selectedAds, !0),
                    ib(m.selectedAudioPlaylist, !0),
                    (w.currentPlaylist = m.selectedPlaylist),
                    (w.playlistIndex = m.index),
                    (L = m.otherSelectedPlaylists),
                    b.writeToSettings(),
                    b.writeToConfig(),
                    la
                      ? (w.playlistOn = !0)
                      : ca(function (a) {
                          var e, j;
                          i &&
                            !a &&
                            ((e = [
                              "\x5f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                              "\x5f\x73\x79\x73\x74\x65\x6d\x5f\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                            ]),
                            i.forEach(function (a) {
                              a.match(l.zipfileRegex) &&
                                e.push(
                                  "\x5f" +
                                    g.basename(a, g.extname(a)) +
                                    "\x2e\x72\x65\x70\x6f"
                                );
                            }),
                            (e = e.concat(i)),
                            (j = []),
                            f.readdir(l.mediaDir, function (a, d) {
                              a &&
                                s.log(
                                  "\x65\x72\x72\x6f\x72",
                                  "\x72\x65\x61\x64\x20\x64\x69\x72\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20\x64\x65\x6c\x65\x74\x65\x20\x66\x69\x6c\x65\x73"
                                ),
                                h.each(
                                  d,
                                  function (a, b) {
                                    var d = l.mediaPath + a;
                                    -1 == e.indexOf(a) && "\x2e" != a.charAt(0)
                                      ? ("\x5f" == a.charAt(0) &&
                                          a.match(l.repofileRegex) &&
                                          c("\x72\x69\x6d\x72\x61\x66")(
                                            d,
                                            function () {
                                              s.log(
                                                "\x69\x6e\x66\x6f",
                                                "\x72\x65\x6d\x6f\x76\x65\x64\x20\x72\x65\x70\x6f\x20\x64\x69\x72\x65\x63\x74\x6f\x72\x79\x20\x66\x6f\x72\x20" +
                                                  a
                                              );
                                            }
                                          ),
                                        j.push(a),
                                        f.unlink(d, b))
                                      : b();
                                  },
                                  function () {
                                    b.updateDiskStatus(),
                                      j.length
                                        ? s.log(
                                            "\x69\x6e\x66\x6f",
                                            "\x43\x68\x61\x6e\x67\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2c\x64\x65\x6c\x65\x74\x69\x6e\x67\x20\x66\x69\x6c\x65\x73\x3a\x20" +
                                              j
                                          )
                                        : s.log(
                                            "\x69\x6e\x66\x6f",
                                            "\x43\x68\x61\x6e\x67\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x2c\x6e\x6f\x74\x68\x69\x6e\x67\x20\x74\x6f\x20\x64\x65\x6c\x65\x74\x65"
                                          );
                                  }
                                );
                            }));
                        }, j);
                }
              }));
        }
        function Ra(a) {
          s.log(
            "\x69\x6e\x66\x6f",
            "\x65\x78\x65\x63\x75\x74\x69\x6e\x67\x20\x73\x68\x65\x6c\x6c\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x3a\x20" +
              a
          ),
            d(
              a,
              {
                encoding: "\x75\x74\x66\x38",
                timeout: 3e4,
                maxBuffer: 20480,
                killSignal: "\x53\x49\x47\x54\x45\x52\x4d",
                cwd: null,
                env: null,
              },
              function (b, c, d) {
                var e = { cmd: a, err: b, stdout: c, stderr: d };
                Ea() && sa.emit("\x73\x68\x65\x6c\x6c\x5f\x61\x63\x6b", e);
              }
            );
        }
        function Sa(a, b) {
          var e,
            d = {};
          switch (a) {
            case "\x62\x61\x63\x6b\x77\x61\x72\x64":
              n.stepBackward(),
                (d.msg =
                  "\x53\x74\x65\x70\x70\x65\x64\x20\x62\x61\x63\x6b\x77\x61\x72\x64\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74");
              break;
            case "\x66\x6f\x72\x77\x61\x72\x64":
              n.stepForward(),
                (d.msg =
                  "\x53\x74\x65\x70\x70\x65\x64\x20\x66\x6f\x72\x77\x61\x72\x64\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74");
              break;
            case "\x70\x61\x75\x73\x65":
              (e = n.pausePlaylist()),
                (d.msg =
                  "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x73\x20" +
                  (e
                    ? "\x70\x61\x75\x73\x65\x64"
                    : "\x72\x65\x73\x75\x6d\x65\x64")),
                (d.isPaused = e);
              break;
            default:
              d.msg =
                "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x61\x63\x74\x69\x6f\x6e";
          }
          return (
            (d.action = a),
            b || (Ea() && sa.emit("\x6d\x65\x64\x69\x61\x5f\x61\x63\x6b", d)),
            d
          );
        }
        function _a() {
          var a, b;
          (Ua = new Date()),
            (Va = 60 * Ua.getHours() + Ua.getMinutes()),
            (Wa = Ua),
            (Xa = Wa.setHours(0, 0, 0, 0)),
            (Ya = Wa.getDay() + 1),
            (Za = Wa.getDate()),
            (a = new Date(Ua.getFullYear(), 0, 1)),
            (b = Math.floor((Ua - a) / 864e5)),
            ($a = "" + (Math.ceil((Ua.getDay() + 1 + b) / 7) % 4));
        }
        function ab(a) {
          var c,
            d,
            b = function (a) {
              var b = a.split("\x3a");
              return 2 == b.length
                ? 60 * parseInt(b[0]) + parseInt(b[1])
                : 1 == b.length
                ? parseInt(b[0])
                : 60 * parseInt(b[b.length - 2]) + parseInt(b[b.length - 1]);
            },
            e = !0,
            f = 0,
            g = 864e5;
          if (a.settings.durationEnable) {
            if (
              (a.settings.starttime &&
                a.settings.endtime &&
                a.settings.starttime > a.settings.endtime &&
                Va <= b(a.settings.endtime) &&
                (f = g),
              a.settings.startdate && Xa < _(a.settings.startdate))
            )
              return !1;
            if (a.settings.enddate && _(a.settings.enddate) + f < Xa) return !1;
          }
          return a.settings.timeEnable &&
            (a.settings.starttime &&
              ((c = b(a.settings.starttime)), c > Va && (e = !1)),
            a.settings.endtime &&
              ((d = b(a.settings.endtime)), Va > d && (e = !1)),
            a.settings.starttime &&
              a.settings.endtime &&
              a.settings.starttime > a.settings.endtime &&
              (e = Va >= c || d >= Va ? !0 : !1),
            !e)
            ? !1
            : !a.settings.weekdays &&
              a.settings.weekday &&
              a.settings.weekday != Ya
            ? !1
            : a.settings.weekdays && -1 == a.settings.weekdays.indexOf(Ya)
            ? !1
            : !a.settings.monthdays &&
              a.settings.monthday &&
              a.settings.monthday != Za
            ? !1
            : a.settings.monthdays && -1 == a.settings.monthdays.indexOf(Za)
            ? !1
            : a.settings.weeknumbers &&
              a.settings.weeknumbers.enable &&
              a.settings.weeknumbers[$a] !== !0
            ? (s.log(
                "\x69\x6e\x66\x6f",
                "\x57\x65\x65\x6b\x20\x4e\x75\x6d\x62\x65\x72\x20" +
                  $a +
                  "\x20\x69\x73\x20\x6e\x6f\x74\x20\x65\x6e\x61\x62\x6c\x65\x64\x20\x66\x6f\x72\x20" +
                  a.name
              ),
              !1)
            : a.settings.onlineOnly && !Ea()
            ? !1
            : !0;
        }
        function bb(a) {
          var i,
            k,
            l,
            m,
            o,
            p,
            b = w.currentPlaylist,
            c = !1,
            d = !1,
            e = !1,
            f = [],
            g = [],
            h = null,
            j = w.playlistIndex;
          if (
            (_a(),
            !c && n.getDominationStatus() && a && ((c = !0), (e = !0)),
            !c && J.length)
          )
            for (k = 0, l = J.length; l > k; k++)
              if (
                ((i = J[k]),
                (m = parseInt(i.settings.domination.timeInterval || 5)),
                3 > m && (m = 3),
                i.settings && !i.skipForSchedule)
              )
                if (ab(i)) {
                  if (
                    (-1 == K[k] && (K[k] = (Va + m) % 1440),
                    !c && (Va >= K[k] || Va + 720 < K[k]))
                  ) {
                    (b = i.name),
                      (j = k),
                      (c = !0),
                      (e = !0),
                      (K[k] = (Va + m) % 1440);
                    break;
                  }
                } else K[k] = -1;
          if (!c && O && I.length)
            for (o = 0, l = I.length; l > o; o++)
              if (((i = I[o]), i.settings && !i.skipForSchedule && ab(i)))
                if (c) f.push(i.name);
                else if (
                  ((b = i.name),
                  (j = o),
                  (c = !0),
                  (d = !0),
                  !x.playAllEligiblePlaylists)
                )
                  break;
          if (!c && F.length)
            for (
              "\x73\x74\x72\x69\x6e\x67" == typeof F[0].name
                ? (b = F[0].name)
                : s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x6e\x61\x6d\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x74\x72\x69\x6e\x67\x2c\x20" +
                      F[0].name
                  ),
                j = 0,
                p = 1,
                l = F.length;
              l > p;
              p++
            )
              if (((i = F[p]), i.settings && !i.skipForSchedule && ab(i)))
                if (c) f.push(i.name);
                else if (
                  ((b = i.name), (j = p), (c = !0), !x.playAllEligiblePlaylists)
                )
                  break;
          for (p = 0, l = G.length; l > p; p++)
            (i = G[p]),
              i.settings && !i.skipForSchedule && ab(i) && g.push(i.name);
          for (p = 0; p < H.length; p++)
            (i = H[p]),
              i.settings && !i.skipForSchedule && ab(i) && (h = i.name);
          return {
            selectedPlaylist: b,
            selectedAudioPlaylist: h,
            index: j,
            selectedAds: g,
            otherSelectedPlaylists: f,
            isEventPlaylist: d,
            isDominationPlaylist: e,
          };
        }
        function db() {
          clearTimeout(cb);
          var a = bb(!0);
          hb(a.selectedAds, !1),
            ib(a.selectedAudioPlaylist, !1),
            (D ||
              (!w.localControl &&
                (w.tvStatus ||
                  "\x54\x56\x5f\x4f\x46\x46" == w.currentPlaylist) &&
                (w.currentPlaylist != a.selectedPlaylist ||
                  (!j.isEqual(L, a.otherSelectedPlaylists) &&
                    a.isDominationPlaylist !== !0)))) &&
              ((D = !1),
              (w.currentPlaylist = a.selectedPlaylist),
              (w.playlistIndex = a.index),
              a.isDominationPlaylist !== !0 && (L = a.otherSelectedPlaylists),
              s.log(
                "\x69\x6e\x66\x6f",
                "\x53\x63\x68\x65\x64\x75\x6c\x65\x20\x69\x73\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20" +
                  w.currentPlaylist
              ),
              la ? (w.playlistOn = !0) : ca(function () {})),
            (cb = setTimeout(db, 6e4 - (Date.now() % 6e4)));
        }
        function fb() {
          var a, b, c, d, e, f, g, h, i, j;
          if (
            (clearTimeout(eb),
            (a = new Date().setMinutes(0, 0, 0)),
            (b = !1),
            x.assetsValidity)
          )
            for (c = 0, d = x.assetsValidity.length; d > c; c++)
              if (
                ((e = x.assetsValidity[c]),
                (f = e.starthour ? parseInt(e.starthour) : 0),
                (g = e.endhour ? parseInt(e.endhour) : 24),
                (NaN == f || 0 > f || f > 23) && (f = 0),
                (NaN == g || 1 > g || g > 24) && (g = 24),
                (e.startdate && a == _(e.startdate) + 36e5 * f) ||
                  (e.enddate && a == _(e.enddate) + 36e5 * g))
              ) {
                b = !0;
                break;
              }
          b &&
            (s.log(
              "\x69\x6e\x66\x6f",
              "\x41\x73\x73\x65\x74\x20\x76\x61\x6c\x69\x64\x69\x74\x79\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x61\x6e\x64\x20\x68\x65\x6e\x63\x65\x20\x72\x65\x64\x65\x70\x6c\x6f\x79\x69\x6e\x67\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"
            ),
            (h = bb()),
            hb(h.selectedAds, !0),
            ib(h.selectedAudioPlaylist, !0),
            la ? (w.playlistOn = !0) : ca(function () {}, !0)),
            (i = new Date()),
            (j = i.getSeconds() + 60 * i.getMinutes()),
            (eb = setTimeout(fb, 1e3 * (3605 - j)));
        }
        function gb(a, b) {
          (x.orientation =
            a.orientation || "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65"),
            (x.resolution = a.resolution || "\x61\x75\x74\x6f"),
            t.changeDisplaySetting(x.orientation, x.resolution, function (a) {
              a
                ? b
                  ? b(a)
                  : s.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x45\x72\x72\x6f\x72\x20\x49\x6e\x20\x44\x69\x73\x70\x6c\x61\x79\x20\x53\x65\x74\x74\x69\x6e\x67\x73" +
                        JSON.stringify(a)
                    )
                : f.writeFile(
                    l.settingsFile,
                    JSON.stringify(x, null, 4),
                    function (a) {
                      b && b(a),
                        a
                          ? s.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x74\x6f\x20\x5f\x73\x65\x74\x74\x69\x6e\x67\x2e\x6a\x73\x6f\x6e"
                            )
                          : (s.log(
                              "\x69\x6e\x66\x6f",
                              "\x52\x65\x62\x6f\x6f\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x20\x61\x66\x74\x65\x72\x20\x6f\x72\x69\x6e\x65\x74\x61\x74\x69\x6f\x6e\x20\x63\x6f\x6e\x66\x69\x67\x20\x63\x68\x61\x6e\x67\x65"
                            ),
                            t.reboot(),
                            s.log(
                              "\x69\x6e\x66\x6f",
                              "\x5f\x73\x65\x74\x74\x69\x6e\x67\x2e\x6a\x73\x6f\x6e\x20\x75\x70\x64\x61\x74\x65\x64"
                            ));
                    }
                  );
            });
        }
        function hb(a, b) {
          if (
            (!j.isEqual(a, M) || b) &&
            (n.stopAds(), (M = a), M && 0 != M.length)
          ) {
            var c = [];
            h.eachSeries(
              M,
              function (a, b) {
                f.readFile(
                  l.mediaPath + "\x5f\x5f" + a + "\x2e\x6a\x73\x6f\x6e",
                  function (d, e) {
                    if (d)
                      s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          a
                      );
                    else
                      try {
                        var f = JSON.parse(e);
                        f.settings &&
                        f.settings.ads &&
                        f.settings.ads.adPlaylist
                          ? (aa(f.assets),
                            f.assets &&
                              f.assets.length &&
                              c.push({
                                files: f.assets,
                                interval: f.settings.ads.adInterval,
                                adCount: f.settings.ads.adCount,
                                noMainPlay: f.settings.ads.noMainPlay,
                              }))
                          : s.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x65\x72\x72\x6f\x72\x20\x6e\x6f\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x66\x6f\x72\x20\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20" +
                                a
                            );
                      } catch (g) {
                        s.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x65\x72\x72\x6f\x72\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x61\x64\x76\x65\x72\x74\x69\x73\x65\x6d\x65\x6e\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20" +
                            a
                        );
                      }
                    b();
                  }
                );
              },
              function () {
                c.length && n.startAds(c);
              }
            );
          }
        }
        function ib(a, b) {
          if (!a) return void n.stopLoungeMusic();
          if (!j.isEqual(a, N) || b) {
            if (
              "\x4e\x54\x53\x43" == x.resolution ||
              "\x50\x41\x4c" == x.resolution
            )
              return (
                s.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x20\x2a\x2a\x2a\x2a\x20\x43\x61\x6e\x20\x6e\x6f\x74\x20\x70\x6c\x61\x79\x20\x6c\x6f\x75\x6e\x67\x65\x20\x6d\x75\x73\x69\x63\x20\x69\x6e\x20\x43\x6f\x6d\x70\x6f\x73\x69\x74\x65\x20\x76\x69\x64\x65\x6f\x28\x4e\x54\x53\x43\x20\x6f\x72\x20\x50\x41\x4c\x29\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x74\x69\x6f\x6e\x73\x20\x2a\x2a\x2a\x2a"
                ),
                void n.stopLoungeMusic()
              );
            (N = a),
              f.readFile(
                l.mediaPath + "\x5f\x5f" + N + "\x2e\x6a\x73\x6f\x6e",
                function (a, b) {
                  var c, e, g;
                  if (a)
                    s.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                        N +
                        "\x3b" +
                        a
                    ),
                      n.stopLoungeMusic();
                  else {
                    try {
                      c = JSON.parse(b);
                    } catch (d) {
                      return (
                        s.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x65\x72\x72\x6f\x72\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x61\x75\x64\x69\x6f\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20" +
                            N
                        ),
                        void n.stopLoungeMusic()
                      );
                    }
                    (e = c.assets.filter(function (a) {
                      return a && a.filename && a.filename.match(l.audioRegex);
                    })),
                      aa(e),
                      (g = c.assets.filter(function (a) {
                        return (
                          a && a.filename && a.filename.match(l.radioFileRegex)
                        );
                      })),
                      h.eachSeries(
                        g,
                        function (a, b) {
                          var c = l.mediaPath + a.filename;
                          f.readFile(c, "\x75\x74\x66\x38", function (d, f) {
                            if (d)
                              s.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x72\x61\x64\x69\x6f\x20\x6c\x69\x6e\x6b\x20\x66\x6f\x72\x20\x6c\x6f\x75\x6e\x67\x65\x20\x6d\x75\x73\x69\x63\x20" +
                                  c
                              ),
                                b();
                            else
                              try {
                                var g = JSON.parse(f);
                                e.push({
                                  filename: g.link,
                                  duration: a.duration,
                                  type: "\x72\x61\x64\x69\x6f",
                                }),
                                  b();
                              } catch (h) {
                                s.log(
                                  "\x65\x72\x72\x6f\x72",
                                  "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x72\x61\x64\x69\x6f\x20\x6c\x69\x6e\x6b\x20\x66\x6f\x72\x20\x6c\x6f\x75\x6e\x67\x65\x20\x6d\x75\x73\x69\x63\x20" +
                                    c
                                ),
                                  console.log(h),
                                  b();
                              }
                          });
                        },
                        function () {
                          e.length
                            ? n.startLoungeMusic(
                                e,
                                c.settings.audio.random,
                                c.settings.audio.volume,
                                c.settings.audio.hdmi
                              )
                            : (s.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x20\x2a\x2a\x2a\x2a\x20\x4e\x6f\x20\x4d\x50\x33\x20\x66\x69\x6c\x65\x73\x20\x70\x72\x65\x73\x65\x6e\x74\x20\x74\x6f\x20\x50\x6c\x61\x79\x20\x74\x68\x65\x20\x6c\x6f\x75\x6e\x67\x65\x20\x6d\x75\x73\x69\x63\x2a\x2a\x2a\x2a"
                              ),
                              n.stopLoungeMusic());
                        }
                      );
                  }
                }
              );
          }
        }
        function mb(a) {
          var b;
          a && a.enable
            ? (a.ontime &&
                ((b = a.ontime.split("\x3a")),
                2 == b.length
                  ? (kb = 60 * parseInt(b[0]) + parseInt(b[1]))
                  : 1 == b.length && (kb = parseInt(b[0]))),
              a.offtime &&
                ((b = a.offtime.split("\x3a")),
                2 == b.length
                  ? (lb = 60 * parseInt(b[0]) + parseInt(b[1]))
                  : 1 == b.length && (lb = parseInt(b[0]))))
            : ((kb = null), (lb = null)),
            a && a.enable && kb ? nb() : jb && (clearTimeout(jb), ob());
        }
        function nb() {
          var b,
            c,
            a = !1;
          clearTimeout(jb),
            (b = new Date()),
            (c = 60 * b.getHours() + b.getMinutes()),
            (a = lb > kb ? c > lb || kb > c : c > lb && kb > c),
            a ? pb() : "\x54\x56\x5f\x4f\x46\x46" != w.currentPlaylist && ob(),
            (jb = setTimeout(nb, 3e5));
        }
        function ob() {
          var a = function () {
            qb(),
              n.pauseOpenVg(!1),
              n.setDisplayClock(x.showClock, x.emergencyMessage),
              ba(!0, w.currentPlaylist, function () {
                La();
              });
          };
          return w.tvStatus
            ? void n.pauseOpenVg(!1)
            : ((w.tvStatus = !0),
              void ("\x4e\x54\x53\x43" != x.resolution &&
              "\x50\x41\x4c" != x.resolution
                ? t.tvOn(function () {
                    a();
                  })
                : a()));
        }
        function pb() {
          w.tvStatus &&
            ((w.tvStatus = !1),
            n.pauseOpenVg(!0),
            n.removeLogo(),
            ba(!1, w.currentPlaylist, function () {
              "\x4e\x54\x53\x43" != x.resolution &&
                "\x50\x41\x4c" != x.resolution &&
                t.tvOff(),
                La();
            }));
        }
        function qb() {
          if (
            "\x4e\x54\x53\x43" != x.resolution &&
            "\x50\x41\x4c" != x.resolution
          ) {
            var a = x.edidResolution[0] - 80,
              b = a,
              c = 10,
              d = f.existsSync(
                l.root +
                  "\x2f\x70\x75\x62\x6c\x69\x63\x2f\x61\x70\x70\x2f\x69\x6d\x67\x2f\x6c\x6f\x67\x6f\x2e\x70\x6e\x67"
              )
                ? l.root +
                  "\x2f\x70\x75\x62\x6c\x69\x63\x2f\x61\x70\x70\x2f\x69\x6d\x67\x2f\x6c\x6f\x67\x6f\x2e\x70\x6e\x67"
                : null;
            x.logo && ((d = x.logo), (b = x.logox || a), (c = x.logoy || 10)),
              n.setLogo(d, b, c, !x.logo);
          }
        }
        function rb(a) {
          var e,
            f,
            g,
            b = "",
            c = [];
          d(
            "\x73\x75\x64\x6f\x20\x63\x72\x6f\x6e\x74\x61\x62\x20\x2d\x6c",
            function (h, i, j) {
              h || j || !i
                ? s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73\x65\x74\x74\x69\x6e\x67\x2f\x64\x65\x6c\x65\x74\x69\x6e\x67\x20\x63\x72\x6f\x6e\x20\x6a\x6f\x62\x3b\x20" +
                      h +
                      "\x3b" +
                      j
                  )
                : ((c = i.split("\n")),
                  (c = c.filter(function (a) {
                    return (
                      a.length &&
                      (-1 ==
                        a.indexOf("\x70\x69\x53\x69\x67\x6e\x61\x67\x65") ||
                        -1 ==
                          a.indexOf(
                            "\x2f\x73\x62\x69\x6e\x2f\x72\x65\x62\x6f\x6f\x74"
                          ))
                    );
                  }))),
                a.enable &&
                  ((e = new Date(a.time)),
                  e.setTime(e.getTime() + 60 * e.getTimezoneOffset() * 1e3),
                  (f = e.getHours()),
                  (g = e.getMinutes()),
                  c.push(
                    g +
                      "\x20" +
                      f +
                      "\x20\x2a\x20\x2a\x20\x2a\x20\x2f\x73\x62\x69\x6e\x2f\x72\x65\x62\x6f\x6f\x74\x20\x26\x26\x20\x65\x63\x68\x6f\x20\x70\x69\x53\x69\x67\x6e\x61\x67\x65"
                  )),
                (b =
                  0 == c.length
                    ? "\x73\x75\x64\x6f\x20\x63\x72\x6f\x6e\x74\x61\x62\x20\x2d\x72"
                    : "\x65\x63\x68\x6f\x20\x22" +
                      c.join("\n") +
                      "\x22\x20\x7c\x20\x73\x75\x64\x6f\x20\x63\x72\x6f\x6e\x74\x61\x62\x20\x2d"),
                console.log(b),
                d(b, function (b, c, d) {
                  b || d
                    ? s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73\x65\x74\x74\x69\x6e\x67\x2f\x64\x65\x6c\x65\x74\x69\x6e\x67\x20\x63\x72\x6f\x6e\x20\x6a\x6f\x62\x3b\x20" +
                          b +
                          "\x3b" +
                          d
                      )
                    : a.enable &&
                      s.log(
                        "\x69\x6e\x66\x6f",
                        "\x2a\x2a\x2a\x20\x43\x72\x6f\x6e\x20\x6a\x6f\x62\x20\x66\x6f\x72\x20\x72\x65\x62\x6f\x6f\x74\x20\x73\x65\x74\x20\x61\x74\x20" +
                          f +
                          "\x3a" +
                          g
                      );
                });
            }
          );
        }
        function ub() {
          setTimeout(function () {
            process.kill(process.pid, "\x53\x49\x47\x54\x45\x52\x4d");
          }, 3e3);
        }
        var V,
          W,
          X,
          Y,
          Z,
          $,
          _,
          aa,
          ba,
          ca,
          ea,
          fa,
          ga,
          ha,
          ia,
          ka,
          la,
          ma,
          na,
          oa,
          qa,
          ra,
          sa,
          ta,
          ua,
          va,
          wa,
          xa,
          ya,
          za,
          Aa,
          Ba,
          Ca,
          Ha,
          Ia,
          Ja,
          Ma,
          Pa,
          Ta,
          Ua,
          Va,
          Wa,
          Xa,
          Ya,
          Za,
          $a,
          cb,
          eb,
          jb,
          kb,
          lb,
          sb,
          tb,
          d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          e = c("\x6f\x73"),
          f = c("\x66\x73"),
          g = c("\x70\x61\x74\x68"),
          h = c("\x61\x73\x79\x6e\x63"),
          i = c("\x72\x65\x71\x75\x65\x73\x74"),
          j = c("\x6c\x6f\x64\x61\x73\x68"),
          k = c("\x65\x6a\x73"),
          l = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          m = c("\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e"),
          n = c("\x2e\x2f\x70\x69\x2d\x76\x69\x65\x77\x65\x72"),
          o = c("\x2e\x2f\x70\x69\x2d\x77\x67\x65\x74"),
          p = c("\x2e\x2f\x70\x69\x2d\x65\x76\x65\x6e\x74\x73"),
          q = c("\x2e\x2f\x6b\x69\x6f\x73\x6b\x2d\x75\x69"),
          r = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65"
          ),
          s = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          t = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x73\x79\x73\x74\x65\x6d\x2d\x69\x6e\x66\x6f"
          ),
          u = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x73\x73\x2d\x73\x65\x72\x76\x69\x63\x65"
          ),
          v = l,
          w = {
            playlistOn: !1,
            localControl: !1,
            currentPlaylist: null,
            deployedPlaylists: null,
            playlistIndex: 0,
            playlistStarttime: null,
            groupTicker: {},
            diskSpaceUsed: null,
            diskSpaceAvailable: null,
            duration: null,
            tvStatus: !0,
            cecTvStatus: !0,
            licensed: !1,
          },
          x = {
            cpuSerialNumber: "\x75\x6e\x6b\x6e\x6f\x77\x6e",
            ethMac: null,
            wifiMac: null,
            myIpAddress: "",
            secret: "",
            installation: "",
            orientation: "",
            resolution: "",
            omxVolume: 100,
            dns: {
              primary: "\x38\x2e\x38\x2e\x34\x2e\x34",
              secondary: "\x38\x2e\x38\x2e\x38\x2e\x38",
            },
            assetsValidity: [],
            edidResolution: [1920, 1080],
          },
          y = { user: null, password: null },
          z = !1,
          A = "",
          B = [],
          C = !1,
          D = !1,
          E = !1,
          F = [],
          G = [],
          H = [],
          I = [],
          J = [],
          K = [],
          L = [],
          M = [],
          N = null,
          O = !1,
          P =
            l.root +
            "\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x70\x6c\x61\x79\x65\x72\x2d\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e",
          Q = !1,
          R = [
            "\x73\x64\x43\x6f\x6e\x66\x69\x67\x49\x6e\x73\x74\x61\x6c\x6c\x61\x74\x69\x6f\x6e",
            "\x73\x64\x43\x6f\x6e\x66\x69\x67\x47\x72\x6f\x75\x70",
            "\x73\x64\x43\x6f\x6e\x66\x69\x67\x54\x69\x6d\x65\x7a\x6f\x6e\x65",
            "\x73\x64\x43\x6f\x6e\x66\x69\x67\x4e\x61\x6d\x65",
            "\x73\x64\x43\x6f\x6e\x66\x69\x67\x50\x69\x6e",
          ],
          S =
            l.root +
            "\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x74\x65\x6d\x70\x5f\x69\x66\x61\x63\x65\x2e\x74\x78\x74",
          T =
            l.root +
            "\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x74\x65\x6d\x70\x5f\x77\x69\x66\x69\x2e\x74\x78\x74",
          U = "";
        m.config_server &&
          (U = m.config_server
            .trim()
            .replace(/^http(s?):\/\//i, "")
            .split("\x3a")[0]),
          n.setConfigServer(U),
          (V = {
            settings: [
              "\x76\x65\x72\x73\x69\x6f\x6e",
              "\x70\x6c\x61\x74\x66\x6f\x72\x6d\x5f\x76\x65\x72\x73\x69\x6f\x6e",
              "\x63\x70\x75\x53\x65\x72\x69\x61\x6c\x4e\x75\x6d\x62\x65\x72",
              "\x6d\x79\x49\x70\x41\x64\x64\x72\x65\x73\x73",
              "\x6c\x6f\x63\x61\x6c\x4e\x61\x6d\x65",
              "\x65\x74\x68\x4d\x61\x63",
              "\x77\x69\x66\x69\x4d\x61\x63",
            ],
            config: [
              "\x70\x6c\x61\x79\x6c\x69\x73\x74\x4f\x6e",
              "\x63\x75\x72\x72\x65\x6e\x74\x50\x6c\x61\x79\x6c\x69\x73\x74",
              "\x70\x6c\x61\x79\x6c\x69\x73\x74\x53\x74\x61\x72\x74\x74\x69\x6d\x65",
              "\x64\x69\x73\x6b\x53\x70\x61\x63\x65\x55\x73\x65\x64",
              "\x64\x69\x73\x6b\x53\x70\x61\x63\x65\x41\x76\x61\x69\x6c\x61\x62\x6c\x65",
              "\x6c\x61\x73\x74\x55\x70\x6c\x6f\x61\x64",
              "\x77\x67\x65\x74\x42\x79\x74\x65\x73",
              "\x77\x67\x65\x74\x53\x70\x65\x65\x64",
              "\x73\x79\x6e\x63\x49\x6e\x50\x72\x6f\x67\x72\x65\x73\x73",
              "\x64\x75\x72\x61\x74\x69\x6f\x6e",
              "\x74\x76\x53\x74\x61\x74\x75\x73",
              "\x72\x65\x71\x75\x65\x73\x74",
              "\x6c\x69\x63\x65\x6e\x73\x65\x64",
              "\x63\x65\x63\x54\x76\x53\x74\x61\x74\x75\x73",
              "\x70\x69\x54\x65\x6d\x70\x65\x72\x61\x74\x75\x72\x65",
              "\x75\x70\x74\x69\x6d\x65",
            ],
          }),
          (W = "\x73\x74\x6f\x70\x70\x65\x64"),
          (X = !1),
          (Y = function () {
            (A = ""),
              (B = t.getIp()),
              B.forEach(function (a) {
                A += a.ip + "\x20";
              }),
              (x.myIpAddress = A);
          }),
          Y(),
          (Z = function (a) {
            d(
              "\x2f\x62\x69\x6e\x2f\x62\x61\x73\x68\x20\x6d\x69\x73\x63\x2f\x6e\x77\x64\x69\x61\x67\x2e\x73\x68",
              function (b, c) {
                s.log("\x69\x6e\x66\x6f", c);
                try {
                  x.nwinfo = JSON.parse(c);
                } catch (e) {}
                a && a();
              }
            );
          }),
          ($ = function (a) {
            var b = c("\x63\x72\x79\x70\x74\x6f").createCipher(
                "\x61\x65\x73\x2d\x32\x35\x36\x2d\x63\x62\x63",
                "\x33\x35\x36\x33\x35\x36\x33\x35\x36"
              ),
              d = b.update(a, "\x75\x74\x66\x38", "\x68\x65\x78");
            return (d += b["\x66\x69\x6e\x61\x6c"]("\x68\x65\x78"));
          }),
          (_ = function (a) {
            var b = new Date(a);
            return (
              b.setTime(b.getTime() + 60 * b.getTimezoneOffset() * 1e3),
              b.getTime()
            );
          }),
          (aa = function (a) {
            var b = new Date().setMinutes(0, 0, 0);
            x.assetsValidity &&
              x.assetsValidity.forEach(function (c) {
                var f,
                  d = c.starthour ? parseInt(c.starthour) : 0,
                  e = c.endhour ? parseInt(c.endhour) : 24;
                if (
                  ((NaN == d || 0 > d || d > 23) && (d = 0),
                  (NaN == e || 1 > e || e > 24) && (e = 24),
                  (c.startdate && b < _(c.startdate) + 36e5 * d) ||
                    (c.enddate && b >= _(c.enddate) + 36e5 * e))
                )
                  for (f = a.length - 1; f >= 0; f--)
                    a[f].filename == c.name &&
                      (s.log(
                        "\x69\x6e\x66\x6f",
                        "\x52\x65\x6d\x6f\x76\x69\x6e\x67\x20" +
                          c.name +
                          "\x20\x66\x6f\x72\x20\x76\x61\x6c\x69\x64\x69\x74\x79"
                      ),
                      a.splice(f, 1));
              });
          }),
          (b.filterValidAssets = aa),
          (ba = function (a, c, d, e, g) {
            var j,
              k,
              m,
              o,
              r,
              i = function (a, c) {
                return a
                  ? ((w.playlistOn = !1),
                    s.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x73\x74\x61\x72\x74\x20\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                        a
                    ),
                    p.storeEvent(
                      "\x70\x6c\x61\x79\x65\x72",
                      "\x65\x72\x72\x6f\x72",
                      "\x73\x74\x61\x72\x74\x20\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                        a
                    ),
                    d(a))
                  : (c != w.currentPlaylist &&
                      (s.log(
                        "\x69\x6e\x66\x6f",
                        "\x2a\x2a\x2a\x20\x63\x75\x72\x72\x65\x6e\x74\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x6e\x61\x6d\x65\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x66\x72\x6f\x6d\x20" +
                          w.currentPlaylist +
                          "\x20\x74\x6f\x20" +
                          c
                      ),
                      O && tb(),
                      (w.currentPlaylist = c)),
                    (w.playlistStarttime = Date.now()),
                    b.writeToConfig(),
                    (w.duration = 0),
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x2a\x2a\x2a\x20\x43\x68\x61\x6e\x67\x69\x6e\x67\x20\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x20\x74\x6f\x20" +
                        w.currentPlaylist
                    ),
                    p.storeEvent(
                      "\x70\x6c\x61\x79\x65\x72",
                      "\x70\x6c\x61\x79\x6c\x69\x73\x74",
                      "\x43\x68\x61\x6e\x67\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x74\x6f\x20" +
                        w.currentPlaylist
                    ),
                    d(null, w));
              };
            return a
              ? "\x54\x56\x5f\x4f\x46\x46" == c
                ? (pb(), (X = !0), b.writeToConfig(), d(null, w))
                : (X && ((X = !1), ob()),
                  w.playlistOn
                    ? ((j =
                        "\x41\x6c\x72\x65\x61\x64\x79\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x73\x74\x61\x72\x74\x65\x64"),
                      s.log("\x65\x72\x72\x6f\x72", j),
                      p.storeEvent(
                        "\x70\x6c\x61\x79\x65\x72",
                        "\x65\x72\x72\x6f\x72",
                        j
                      ),
                      d(j))
                    : w.tvStatus
                    ? ((w.playlistOn = !0),
                      (w.currentPlaylist = c || l.defaultPlaylist),
                      void h.series(
                        [
                          function (a) {
                            f.readFile(
                              l.mediaPath +
                                "\x5f\x5f" +
                                w.currentPlaylist +
                                "\x2e\x6a\x73\x6f\x6e",
                              "\x75\x74\x66\x38",
                              function (b, c) {
                                if (b || !c)
                                  a(
                                    "\x54\x68\x65\x72\x65\x20\x73\x65\x65\x6d\x73\x20\x74\x6f\x20\x62\x65\x20\x6e\x6f\x20\x73\x75\x63\x68\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x3a\x20" +
                                      w.currentPlaylist +
                                      "\x3b\x65\x72\x72\x6f\x72\x3d" +
                                      b
                                  );
                                else
                                  try {
                                    (k = JSON.parse(c)),
                                      (m = k.assets),
                                      (o = null),
                                      a();
                                  } catch (d) {
                                    a(
                                      "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x4a\x53\x4f\x4e\x20\x70\x61\x72\x73\x65\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                                        w.currentPlaylist +
                                        "\x3b\x65\x72\x72\x6f\x72\x3d" +
                                        d.code
                                    );
                                  }
                              }
                            );
                          },
                          function (a) {
                            k.layout.indexOf("\x63\x75\x73\x74\x6f\x6d") >= 0 &&
                            f.existsSync(l.mediaPath + k.templateName)
                              ? f.readFile(
                                  l.mediaPath + k.templateName,
                                  "\x75\x74\x66\x38",
                                  function (b, c) {
                                    var d, e;
                                    if (b || !c)
                                      s.log(
                                        "\x65\x72\x72\x6f\x72",
                                        "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x63\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x66\x6f\x72\x20\x73\x69\x7a\x65\x20\x63\x61\x6c\x63\x75\x6c\x61\x74\x69\x6f\x6e\x20\x2a\x2a\x2a\x20\x3b" +
                                          b
                                      );
                                    else {
                                      (d = c.slice(
                                        c.indexOf(
                                          "\x64\x61\x74\x61\x2d\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73\x3d"
                                        ) + 17
                                      )),
                                        (d = d
                                          .slice(0, d.indexOf("\x7d\x7d") + 2)
                                          .replace(/&quot;/g, "\x22"));
                                      try {
                                        (e = JSON.parse(d)),
                                          console.log(e),
                                          e.main &&
                                            e.main.enable &&
                                            !k.videoWindow &&
                                            ((k.videoWindow = {}),
                                            (k.videoWindow.xoffset = e.main.x),
                                            (k.videoWindow.yoffset = e.main.y),
                                            (k.videoWindow.length = e.main.w),
                                            (k.videoWindow.width = e.main.h),
                                            (k.videoWindow.mainzoneOnly =
                                              e.main.w != e.width ||
                                              e.main.h != e.height),
                                            "\x63\x75\x73\x74\x6f\x6d" ===
                                              e.resolution &&
                                              ((k.videoWindow.fullscreenHeight =
                                                e.height),
                                              (k.videoWindow.fullscreenWidth =
                                                e.width)),
                                            s.log(
                                              "\x69\x6e\x66\x6f",
                                              "\x63\x68\x61\x6e\x67\x65\x64\x20\x76\x61\x6c\x75\x65\x73\x20\x66\x6f\x72\x20\x76\x69\x64\x65\x6f\x20\x77\x69\x6e\x64\x6f\x77\x2c\x20\x6d\x61\x69\x6e"
                                            )),
                                          [
                                            "\x73\x69\x64\x65",
                                            "\x62\x6f\x74\x74\x6f\x6d",
                                            "\x7a\x6f\x6e\x65\x34",
                                          ].forEach(function (a) {
                                            e[a] &&
                                              e[a].enable &&
                                              !k.zoneVideoWindow[a] &&
                                              ((k.zoneVideoWindow[a] = {}),
                                              (k.zoneVideoWindow[a].xoffset =
                                                e[a].x),
                                              (k.zoneVideoWindow[a].yoffset =
                                                e[a].y),
                                              (k.zoneVideoWindow[a].length =
                                                e[a].w),
                                              (k.zoneVideoWindow[a].width =
                                                e[a].h),
                                              s.log(
                                                "\x69\x6e\x66\x6f",
                                                "\x63\x68\x61\x6e\x67\x65\x64\x20\x76\x61\x6c\x75\x65\x73\x20\x66\x6f\x72\x20\x76\x69\x64\x65\x6f\x20\x77\x69\x6e\x64\x6f\x77\x2c\x20" +
                                                  a
                                              ));
                                          }),
                                          s.log(
                                            "\x69\x6e\x66\x6f",
                                            "\x63\x68\x61\x6e\x67\x65\x64\x20\x76\x61\x6c\x75\x65\x73\x20\x66\x6f\x72\x20\x76\x69\x64\x65\x6f\x20\x77\x69\x6e\x64\x6f\x77"
                                          );
                                      } catch (f) {
                                        s.log(
                                          "\x65\x72\x72\x6f\x72",
                                          "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x65\x78\x74\x72\x61\x63\x74\x69\x6e\x67\x20\x76\x61\x6c\x75\x65\x73\x20\x6f\x66\x20\x63\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x2a\x2a\x2a\x20" +
                                            f
                                        );
                                      }
                                    }
                                    a();
                                  }
                                )
                              : a();
                          },
                          function (a) {
                            var b = null;
                            x.combineDefaultPlaylist &&
                            w.currentPlaylist != w.deployedPlaylists[0].name &&
                            "\x54\x56\x5f\x4f\x46\x46" !=
                              w.deployedPlaylists[0].name
                              ? f.readFile(
                                  l.mediaPath +
                                    "\x5f\x5f" +
                                    w.deployedPlaylists[0].name +
                                    "\x2e\x6a\x73\x6f\x6e",
                                  "\x75\x74\x66\x38",
                                  function (c, d) {
                                    if (c || !d)
                                      s.log(
                                        "\x65\x72\x72\x6f\x72",
                                        "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x20" +
                                          w.deployedPlaylists[0].name +
                                          "\x3b" +
                                          c
                                      );
                                    else {
                                      try {
                                        b = JSON.parse(d).assets;
                                      } catch (e) {
                                        s.log(
                                          "\x65\x72\x72\x6f\x72",
                                          "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6d\x62\x69\x6e\x69\x6e\x67\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x20" +
                                            e
                                        );
                                      }
                                      b && b.length > 0 && (m = b.concat(m));
                                    }
                                    a();
                                  }
                                )
                              : a();
                          },
                          function (a) {
                            var b = 1;
                            !x.playAllEligiblePlaylists ||
                            (k.settings &&
                              k.settings.domination &&
                              k.settings.domination.enable)
                              ? a()
                              : h.eachSeries(
                                  L,
                                  function (a, c) {
                                    if ("\x54\x56\x5f\x4f\x46\x46" == a)
                                      return c();
                                    var d = null;
                                    f.readFile(
                                      l.mediaPath +
                                        "\x5f\x5f" +
                                        a +
                                        "\x2e\x6a\x73\x6f\x6e",
                                      "\x75\x74\x66\x38",
                                      function (e, f) {
                                        if (e || !f)
                                          s.log(
                                            "\x65\x72\x72\x6f\x72",
                                            "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x20" +
                                              a +
                                              "\x3b" +
                                              e
                                          );
                                        else {
                                          try {
                                            d = JSON.parse(f).assets;
                                          } catch (g) {
                                            s.log(
                                              "\x65\x72\x72\x6f\x72",
                                              "\x20\x2a\x2a\x2a\x20\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6d\x62\x69\x6e\x69\x6e\x67\x20\x64\x65\x66\x61\x75\x6c\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x2a\x2a\x2a\x20" +
                                                g
                                            );
                                          }
                                          if (d && d.length > 0)
                                            if (x.alternateContent) {
                                              for (
                                                var h = 0, i = d.length;
                                                i > h;
                                                h++
                                              )
                                                m.splice(
                                                  (h + 1) * b + h,
                                                  0,
                                                  d[h]
                                                );
                                              b++;
                                            } else m = m.concat(d);
                                        }
                                        c();
                                      }
                                    );
                                  },
                                  function () {
                                    a();
                                  }
                                );
                          },
                          function (a) {
                            k.settings &&
                            k.settings.ticker &&
                            k.settings.ticker.enable
                              ? (o = k.settings.ticker)
                              : w.groupTicker &&
                                w.groupTicker.enable &&
                                (o = w.groupTicker),
                              o &&
                                ((o.isRssFeed = o.rss && o.rss.enable),
                                (o.rssLink = o.rss && o.rss.link),
                                (o.rssEncodeAsBinary =
                                  o.rss && o.rss.encodeAsBinary),
                                (o.useDescription =
                                  o.rss && o.rss.useDescription),
                                (o.disabled = !1),
                                o.messages &&
                                  ((o.messages = o.messages.replace(
                                    /__cpuid__/g,
                                    x.cpuSerialNumber.slice(0, 4) +
                                      "\x2d" +
                                      x.cpuSerialNumber.slice(4, 8) +
                                      "\x2d" +
                                      x.cpuSerialNumber.slice(8, 12) +
                                      "\x2d" +
                                      x.cpuSerialNumber.slice(12, 16)
                                  )),
                                  (o.messages = o.messages.replace(
                                    /__ipaddress__/g,
                                    x.myIpAddress || "\x4e\x41"
                                  )),
                                  (o.messages = o.messages.replace(
                                    /__connectionstatus__/g,
                                    x.connectionStatus || "\x4e\x41"
                                  )))),
                              a();
                          },
                          function (a) {
                            var b =
                              k.settings &&
                              ((k.settings.domination &&
                                k.settings.domination.enable) ||
                                (k.settings.event &&
                                  1 == k.settings.enable &&
                                  1 == k.settings.event.duration));
                            (b = b || g),
                              aa(m),
                              q.hideUi(),
                              e && x.loadPlaylistOnCompletion
                                ? n.startPlaySync(
                                    m,
                                    o,
                                    k.layout || "\x31",
                                    k.videoWindow,
                                    k.zoneVideoWindow,
                                    k.templateName,
                                    i,
                                    0,
                                    b,
                                    w.currentPlaylist
                                  )
                                : n.startPlay(
                                    m,
                                    o,
                                    k.layout || "\x31",
                                    k.videoWindow,
                                    k.zoneVideoWindow,
                                    k.templateName,
                                    i,
                                    0,
                                    b,
                                    w.currentPlaylist
                                  ),
                              a();
                          },
                        ],
                        function (a) {
                          a &&
                            (n.startPlay(
                              [
                                {
                                  filename:
                                    "\x5f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                                  duration: 30,
                                },
                              ],
                              null,
                              "\x31"
                            ),
                            i(a));
                        }
                      ))
                    : ((j =
                        "\x54\x56\x20\x69\x73\x20\x4f\x46\x46\x2c\x20\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x70\x6c\x61\x79"),
                      s.log("\x65\x72\x72\x6f\x72", j),
                      p.storeEvent(
                        "\x70\x6c\x61\x79\x65\x72",
                        "\x65\x72\x72\x6f\x72",
                        j
                      ),
                      d(j)))
              : (w.playlistOn ||
                  s.log(
                    "\x64\x65\x62\x75\x67",
                    "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x73\x74\x6f\x70\x2c\x20\x61\x6c\x72\x65\x61\x64\x79\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x73\x74\x6f\x70\x70\x65\x64"
                  ),
                (w.playlistOn = !1),
                (r = n.stopPlay()),
                (w.playlistStarttime = null),
                (w.duration = Math.floor(
                  (Date.now() - w.playlistStarttime) / 6e4
                )),
                b.writeToConfig(),
                d(null, w));
          }),
          (ca = function (a, b) {
            var c = function () {
              ba(
                !0,
                w.currentPlaylist,
                function (b, c) {
                  La(), a(b, c);
                },
                b
              );
            };
            (w.playlistOn = !1), c();
          }),
          (b.getSettingsData = function () {
            return {
              name: x.name || x.localName,
              myIpAddress: x.myIpAddress.trim(),
              cpuSerialNumber: x.cpuSerialNumber,
              secret: x.secret,
              disableWebUi: x.disableWebUi,
            };
          }),
          (b.writeToSettings = function () {
            try {
              f.writeFileSync(l.settingsFile, JSON.stringify(x, null, 4)),
                d("\x73\x79\x6e\x63");
            } catch (a) {
              s.log(
                "\x65\x72\x72\x6f\x72",
                "\x2a\x2a\x2a\x20\x53\x65\x74\x74\x69\x6e\x67\x73\x20\x46\x69\x6c\x65\x20\x77\x72\x69\x74\x65\x20\x45\x72\x72\x6f\x72\x20\x2a\x2a\x2a" +
                  a
              );
            }
          }),
          (b.writeToConfig = function (a, b) {
            if (a) for (var c in a) w[c] = a[c];
            if (!b)
              try {
                f.writeFileSync(l.poweronConfig, JSON.stringify(w, null, 4)),
                  d("\x73\x79\x6e\x63");
              } catch (e) {
                s.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x2a\x2a\x2a\x20\x53\x65\x74\x74\x69\x6e\x67\x73\x20\x46\x69\x6c\x65\x20\x77\x72\x69\x74\x65\x20\x45\x72\x72\x6f\x72\x20\x2a\x2a\x2a" +
                    e
                );
              }
          }),
          (b.updateDiskStatus = function (a) {
            d("\x64\x66\x20\x2d\x68\x20\x2f")
              .stdout.on("\x64\x61\x74\x61", function (a) {
                if (a) {
                  var b = a.replace(/\s{2,}/g, "\x20").split("\x20");
                  (w.diskSpaceUsed = b[b.length - 2]),
                    (w.diskSpaceAvailable = b[b.length - 3]);
                }
              })
              .on("\x63\x6c\x6f\x73\x65", function () {
                a && a();
              });
          }),
          (b.playFile = function (a, c) {
            switch (
              (s.log(
                "\x69\x6e\x66\x6f",
                "\x61\x63\x74\x69\x6f\x6e\x3a\x20" +
                  a.params.action +
                  "\x2c\x20\x66\x69\x6c\x65\x3a\x20" +
                  a.query.file
              ),
              a.params.action)
            ) {
              case "\x70\x6c\x61\x79":
                a.query.file
                  ? ((W = "\x70\x6c\x61\x79\x69\x6e\x67"),
                    n.playFile(
                      a.query.file,
                      function () {
                        W = "\x73\x74\x6f\x70\x70\x65\x64";
                      },
                      a.query.duration
                    ),
                    r.sendSuccess(
                      c,
                      "\x53\x74\x61\x72\x74\x65\x64\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x66\x69\x6c\x65",
                      { status: W }
                    ))
                  : r.sendSuccess(
                      c,
                      "\x4e\x6f\x74\x68\x69\x6e\x67\x20\x74\x6f\x20\x70\x6c\x61\x79",
                      { status: W }
                    );
                break;
              case "\x73\x74\x6f\x70":
                "\x73\x74\x6f\x70\x70\x65\x64" == W
                  ? r.sendSuccess(
                      c,
                      "\x61\x6c\x72\x65\x61\x64\x79\x20\x73\x74\x6f\x70\x70\x65\x64",
                      { status: W }
                    )
                  : ((W = "\x73\x74\x6f\x70\x70\x65\x64"),
                    n.stopFile(),
                    r.sendSuccess(
                      c,
                      "\x66\x69\x6c\x65\x20\x73\x74\x6f\x70\x70\x65\x64",
                      { status: W }
                    ));
                break;
              case "\x70\x61\x75\x73\x65":
                "\x73\x74\x6f\x70\x70\x65\x64" == W
                  ? ((a.params.action = "\x70\x6c\x61\x79"), b.playFile(a, c))
                  : ("\x70\x6c\x61\x79\x69\x6e\x67" == W
                      ? (W = "\x70\x61\x75\x73\x65\x64")
                      : "\x70\x61\x75\x73\x65\x64" == W &&
                        (W = "\x70\x6c\x61\x79\x69\x6e\x67"),
                    n.pauseFile(),
                    r.sendSuccess(
                      c,
                      "\x70\x61\x75\x73\x65\x20\x72\x65\x70\x6c\x79",
                      { status: W }
                    ));
                break;
              default:
                r.sendSuccess(
                  c,
                  "\x73\x65\x6e\x64\x69\x6e\x67\x20\x63\x75\x72\x72\x65\x6e\x74\x20\x73\x74\x61\x74\x75\x73\x20\x6f\x66\x20\x70\x6c\x61\x79\x46\x69\x6c\x65",
                  { status: W }
                );
            }
          }),
          (b.playPlaylist = function (a, b) {
            a.body.play
              ? ((w.playlistOn = !1),
                (w.localControl = !0),
                ba(!0, a.params.file, function (a, c) {
                  return a
                    ? r.sendError(
                        b,
                        "\x41\x6c\x72\x65\x61\x64\x79\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x73\x74\x61\x72\x74\x65\x64"
                      )
                    : r.sendSuccess(
                        b,
                        "\x53\x74\x61\x72\x74\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74",
                        c
                      );
                }))
              : a.body.stop &&
                ((w.localControl = !1),
                ba(!1, a.params.file, function (a, c) {
                  return a
                    ? r.sendError(b, a)
                    : r.sendSuccess(
                        b,
                        "\x53\x74\x6f\x70\x70\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74",
                        c
                      );
                }));
          }),
          (b.getRssFeeds = function (a, b) {
            var c = a.query.link,
              d =
                a.query[
                  "\x65\x6e\x63\x6f\x64\x65\x2d\x61\x73\x2d\x62\x69\x6e\x61\x72\x79"
                ],
              e = a.query.feedlimit,
              f = !1;
            u.getFeeds(
              c,
              d,
              function (a, c) {
                return f
                  ? void 0
                  : ((f = !0),
                    a
                      ? r.sendError(
                          b,
                          "\x46\x65\x65\x64\x20\x66\x65\x74\x63\x68\x20\x65\x72\x72\x6f\x72\x2c\x20" +
                            a
                        )
                      : r.sendSuccess(
                          b,
                          "\x46\x65\x65\x64\x20\x72\x65\x73\x75\x6c\x74\x73",
                          c
                        ));
              },
              e
            );
          }),
          (b.getStatus = function (a, b) {
            var c = {};
            return (
              w.playlistOn
                ? (w.duration = w.playlistStarttime)
                : (w.duration = 0),
              (c = {
                diskSpaceUsed: w.diskSpaceUsed,
                diskSpaceAvailable: w.diskSpaceAvailable,
                playlistOn: w.playlistOn,
                duration: w.duration,
                tvStatus: w.tvStatus,
                cecTvStatus: w.cecTvStatus,
                currentPlaylist: w.currentPlaylist,
                currentPlayingFile: n.getCurrentPlayingFile(),
                cpuSerialNumber: x.cpuSerialNumber,
                playlistsDeployed:
                  w.deployedPlaylists &&
                  w.deployedPlaylists.map(function (a) {
                    return a.name;
                  }),
                currentDebugLevel: s.debugLevel,
              }),
              r.sendSuccess(
                b,
                "\x53\x74\x61\x74\x75\x73\x20\x43\x68\x65\x63\x6b",
                c
              )
            );
          }),
          (b.setDebugLevel = function (a, b) {
            return (
              da(a.body.level),
              r.sendSuccess(
                b,
                "\x44\x65\x62\x75\x67\x20\x6c\x65\x76\x65\x6c\x20\x73\x65\x74",
                s.debugLevel
              )
            );
          }),
          (ea = function (a) {
            (a = a || function () {}),
              d(
                "\x73\x63\x72\x65\x65\x6e\x73\x68\x6f\x74\x20\x35\x30",
                {
                  encoding: "\x62\x61\x73\x65\x36\x34",
                  timeout: 3e4,
                  maxBuffer: 512e4,
                  killSignal: "\x53\x49\x47\x54\x45\x52\x4d",
                  cwd: null,
                  env: null,
                },
                a
              );
          }),
          (b.getSnapshot = function (a, b) {
            ea(function (a, c, d) {
              a
                ? r.sendError(
                    b,
                    "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e",
                    a
                  )
                : d
                ? r.sendError(
                    b,
                    "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x74\x61\x6b\x69\x6e\x67\x20\x73\x6e\x61\x70\x73\x68\x6f\x74",
                    d
                  )
                : r.sendSuccess(b, "\x73\x6e\x61\x70\x73\x68\x6f\x74", {
                    data: c,
                    lastTaken: Date.now(),
                  });
            });
          }),
          (b.executeShell = function (a, b) {
            var c = a.body.cmd;
            d(
              c,
              {
                encoding: "\x75\x74\x66\x38",
                timeout: 3e4,
                maxBuffer: 20480,
                killSignal: "\x53\x49\x47\x54\x45\x52\x4d",
                cwd: null,
                env: null,
              },
              function (a, d, e) {
                var f = { cmd: c, err: a, stdout: d, stderr: e };
                r.sendSuccess(b, "\x73\x68\x65\x6c\x6c\x5f\x61\x63\x6b", f);
              }
            );
          }),
          (b.getTestLog = function (a, b) {
            return r.sendSuccess(
              b,
              "\x54\x65\x73\x74\x20\x4c\x6f\x67",
              s.getTestLog()
            );
          }),
          (b.getDeviceId = function (a, b) {
            return r.sendSuccess(b, "\x44\x65\x76\x69\x63\x65\x20\x49\x44", {
              deviceId: $(x.cpuSerialNumber),
            });
          }),
          (b.getSchedule = function (a, b) {
            f.readFile(l.poweronConfig, function (a, c) {
              if (a)
                return (
                  s.log(
                    "\x77\x61\x72\x6e",
                    "\x74\x68\x65\x72\x65\x20\x73\x65\x65\x6d\x73\x20\x74\x6f\x20\x62\x65\x20\x6e\x6f\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x3a\x20" +
                      a
                  ),
                  r.sendError(
                    b,
                    "\x4e\x6f\x20\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x74\x69\x6f\x6e\x20\x66\x69\x6c\x65",
                    a
                  )
                );
              var d = JSON.parse(c);
              return d
                ? ((w = d),
                  r.sendSuccess(
                    b,
                    "\x43\x6f\x6e\x66\x69\x67\x75\x72\x61\x74\x69\x6f\x6e",
                    { config: w }
                  ))
                : (s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x4a\x53\x4f\x4e\x20\x70\x61\x72\x73\x65\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65"
                  ),
                  r.sendError(
                    b,
                    "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x70\x61\x72\x73\x65\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e",
                    a
                  ));
            });
          }),
          (b.setSchedule = function (a, c) {
            var e,
              d = a.body.deployedPlaylists;
            return d && d.length > 0
              ? ((w.deployedPlaylists = d),
                ja(),
                s.log(
                  "\x64\x65\x62\x75\x67",
                  "\x44\x65\x70\x6c\x6f\x79\x65\x64\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x3a\x20" +
                    d
                ),
                (e = bb()),
                hb(e.selectedAds, !0),
                ib(e.selectedAudioPlaylist, !0),
                (w.currentPlaylist = e.selectedPlaylist),
                (w.playlistIndex = e.index),
                (L = e.otherSelectedPlaylists),
                ca(function () {}),
                b.writeToConfig(),
                r.sendSuccess(c, "\x73\x75\x63\x63\x65\x73\x73", { config: w }))
              : (s.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x64\x65\x70\x6c\x6f\x79\x65\x64\x50\x6c\x61\x79\x6c\x69\x73\x74\x73\x20\x69\x73\x20\x65\x6d\x70\x74\x79"
                ),
                r.sendSuccess(
                  c,
                  "\x52\x65\x63\x69\x65\x76\x65\x64\x20\x65\x6d\x70\x74\x79\x20\x64\x65\x70\x6c\x6f\x79\x65\x64\x50\x6c\x61\x79\x6c\x69\x73\x74\x73"
                ));
          }),
          (b.getRadar = function (a, b) {
            f.readFile(
              g.join(l.configDir, "\x72\x61\x64\x61\x72\x2e\x6a\x73\x6f\x6e"),
              "\x75\x74\x66\x38",
              function (a, c) {
                return a
                  ? (s.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x72\x61\x64\x61\x72\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64"
                    ),
                    r.sendError(
                      b,
                      "\x72\x61\x64\x61\x72\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64",
                      a
                    ))
                  : r.sendSuccess(
                      b,
                      "\x52\x61\x64\x61\x72\x20\x64\x61\x74\x61",
                      JSON.parse(c)
                    );
              }
            );
          }),
          (b.setRadar = function (a, b) {
            j.isEmpty(a.body) &&
              s.log(
                "\x77\x61\x72\x6e",
                "\x45\x6d\x70\x74\x79\x20\x6a\x73\x6f\x6e\x20\x6f\x62\x6a\x65\x63\x74\x20\x72\x65\x63\x69\x65\x76\x65\x64"
              ),
              f.writeFile(
                g.join(l.configDir, "\x72\x61\x64\x61\x72\x2e\x6a\x73\x6f\x6e"),
                JSON.stringify(a.body),
                function (c) {
                  return c
                    ? (s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x77\x72\x69\x74\x65\x20\x46\x69\x6c\x65"
                      ),
                      r.sendError(
                        b,
                        "\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x77\x72\x69\x74\x65\x20\x66\x69\x6c\x65",
                        c
                      ))
                    : r.sendSuccess(
                        b,
                        "\x52\x61\x64\x61\x72\x20\x66\x69\x6c\x65\x20\x75\x70\x64\x61\x74\x65\x64",
                        a.body
                      );
                }
              );
          }),
          (fa = function (a) {
            var b, c, d;
            f.readFile(l.ifacePath, "\x75\x74\x66\x38", function (e, g) {
              if (!e && g)
                for (
                  b = g.split("\n"), c = 0, d = b.length;
                  d > c && !b[c].match(/^\s*iface\s*eth0\s*inet\s*[a-zA-Z]+/gi);
                  c++
                );
              e || c == b.length
                ? f.readFile(l.dhcpcdFile, "\x75\x74\x66\x38", function (e, f) {
                    if (!e && f)
                      for (
                        b = f.split("\n"), c = 0, d = b.length;
                        d > c && !b[c].match(/^\s*interface\s*eth0/i);
                        c++
                      );
                    else
                      console.log(
                        "\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          e
                      );
                    e || c == b.length
                      ? a(null, {
                          lines: b,
                          pos: -1,
                          mode: "\x64\x68\x63\x70\x63\x64",
                        })
                      : a(null, {
                          lines: b,
                          pos: c,
                          mode: "\x64\x68\x63\x70\x63\x64",
                        });
                  })
                : a(null, {
                    lines: b,
                    pos: c,
                    mode: "\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73",
                  });
            });
          }),
          (ga = function (a) {
            var b, c;
            d(
              "\x73\x75\x64\x6f\x20\x63\x61\x74\x20" + l.bootConfigPath,
              function (d, e, f) {
                if (null !== d) a(f, null);
                else {
                  b = e.split("\n");
                  for (var g = 0; g < b.length; g++)
                    if (b[g].match(/disable_overscan/))
                      c = "\x31" == b[g].split("\x3d").pop() ? !0 : !1;
                    else if (b[g].match(/overscan_left/)) break;
                  a(null, { txtdata: b, position: g, overscan_flag: c });
                }
              }
            );
          }),
          (b.getSettings = function (a, b) {
            var e,
              c = !1,
              g = !1,
              i = function () {
                var a = t.getIp(!0),
                  b = a.filter(function (a) {
                    return "\x65\x74\x68\x30" == a.type;
                  });
                return b;
              };
            h.series(
              [
                function (a) {
                  fa(function (b, d) {
                    b
                      ? a(b)
                      : ((e = d),
                        (c = "\x64\x68\x63\x70\x63\x64" == d.mode),
                        a());
                  });
                },
                function (a) {
                  var b, d, f, h, j, k;
                  if (c)
                    if (-1 == e.pos)
                      (b = i()),
                        (x.ipsettings = {
                          type: "\x64\x68\x63\x70\x63\x64",
                          mode: "\x44\x48\x43\x50",
                          address: b.length ? b[0].ip : null,
                          netmask:
                            "\x70\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x69\x6e\x20\x43\x49\x44\x52\x20\x6e\x6f\x74\x61\x74\x69\x6f\x6e\x2c\x20\x65\x2e\x67\x2e\x20\x32\x34\x20\x66\x6f\x72\x20\x32\x35\x35\x2e\x32\x35\x35\x2e\x32\x35\x35\x2e\x30",
                          gateway: null,
                        });
                    else
                      for (
                        g = !0,
                          x.ipsettings = {
                            type: "\x64\x68\x63\x70\x63\x64",
                            mode: "\x53\x74\x61\x74\x69\x63",
                            netmask:
                              "\x70\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x69\x6e\x20\x43\x49\x44\x52\x20\x6e\x6f\x74\x61\x74\x69\x6f\x6e\x2c\x20\x65\x2e\x67\x2e\x20\x32\x34\x20\x66\x6f\x72\x20\x32\x35\x35\x2e\x32\x35\x35\x2e\x32\x35\x35\x2e\x30",
                          },
                          x.dns = {
                            primary: "\x38\x2e\x38\x2e\x34\x2e\x34",
                            secondary: "\x38\x2e\x38\x2e\x38\x2e\x38",
                          },
                          e.pos++;
                        e.pos < e.lines.length &&
                        e.lines[e.pos].match(/^\s*static/i);

                      ) {
                        switch (
                          ((d = e.lines[e.pos]
                            .slice(
                              e.lines[e.pos].indexOf(
                                "\x73\x74\x61\x74\x69\x63\x20"
                              ) + 7
                            )
                            .split("\x3d")),
                          (f = d[0] ? d[0].trim() : null),
                          (h = d[1] ? d[1].trim() : null),
                          f)
                        ) {
                          case "\x69\x70\x5f\x61\x64\x64\x72\x65\x73\x73":
                            (j = h.split("\x2f")),
                              (x.ipsettings.address = j[0]),
                              (x.ipsettings.netmask = j[1]);
                            break;
                          case "\x72\x6f\x75\x74\x65\x72\x73":
                            x.ipsettings.gateway = h;
                            break;
                          case "\x64\x6f\x6d\x61\x69\x6e\x5f\x6e\x61\x6d\x65\x5f\x73\x65\x72\x76\x65\x72\x73":
                            (k = h.split("\x20")),
                              k[0] && (x.dns.primary = k[0]),
                              k[1] && (x.dns.secondary = k[1]);
                        }
                        e.pos++;
                      }
                  else
                    -1 != e.lines[e.pos].indexOf("\x64\x68\x63\x70")
                      ? ((b = i()),
                        (x.ipsettings = {
                          mode: "\x44\x48\x43\x50",
                          address: b.length ? b[0].ip : null,
                          netmask: null,
                          gateway: null,
                        }))
                      : ((g = !0),
                        (x.ipsettings = {
                          mode: "\x53\x74\x61\x74\x69\x63",
                          address: e.lines[e.pos + 1].split("\x20").pop(),
                          netmask: e.lines[e.pos + 2].split("\x20").pop(),
                          gateway: e.lines[e.pos + 3].split("\x20").pop(),
                        })),
                      (x.ipsettings.netmask =
                        x.ipsettings.netmask ||
                        "\x32\x35\x35\x2e\x32\x35\x35\x2e\x32\x35\x35\x2e\x30");
                  (x.ipsettings.interfaceName = "\x65\x74\x68\x30"), a();
                },
                function (a) {
                  var b;
                  (x.wifi = { ip: null }),
                    d(
                      "\x73\x75\x64\x6f\x20\x63\x61\x74\x20" + l.wifiPath,
                      function (c, d) {
                        if (c) a();
                        else {
                          b = d.split("\n");
                          for (
                            var f = 0;
                            f < b.length &&
                            (b[f].match(/country=/gi) &&
                              ((x.wifi.countryCode = b[f].split("\x3d")[1]),
                              x.wifi.countryCode &&
                                (x.wifi.countryCode =
                                  x.wifi.countryCode.trim())),
                            !b[f].match(/network\S+/gi));
                            f++
                          );
                          f < b.length &&
                            (b[f + 2].match(/key_mgmt\S+/gi)
                              ? ((x.wifi.ssid = b[f + 1].split("\x22")[1]),
                                (x.wifi.pass = null),
                                (x.wifi.open = !0))
                              : ((x.wifi.ssid = b[f + 1].split("\x22")[1]),
                                (x.wifi.pass = b[f + 2].split("\x22")[1]),
                                (x.wifi.open = !1)),
                            b[f + 3].match(/scan_ssid\S+/gi) &&
                              (x.wifi.hidden =
                                "\x31" === b[f + 3].split("\x3d")[1])),
                            a();
                        }
                      }
                    );
                },
                function (a) {
                  d(
                    "\x67\x72\x65\x70\x20\x2d\x71\x20\x22\x5e\x64\x65\x6e\x79\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73\x20\x77\x6c\x61\x6e\x30\x22\x20\x2f\x65\x74\x63\x2f\x64\x68\x63\x70\x63\x64\x2e\x63\x6f\x6e\x66",
                    function (b) {
                      b
                        ? (x.wifi.apmode = "\x4e\x4f")
                        : (x.wifi.apmode = "\x41\x50"),
                        a();
                    }
                  );
                },
                function (a) {
                  var b, c;
                  x.wifi.ssid &&
                    ((b = t.getIp(!0)),
                    (c = b.filter(function (a) {
                      return "\x77\x6c\x61\x6e\x30" == a.type;
                    })),
                    (x.wifi.ip = c.length ? c[0].ip : null)),
                    a();
                },
                function (a) {
                  ga(function (b, c) {
                    if (b)
                      s.log(
                        "\x77\x61\x72\x6e",
                        "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x63\x6f\x6e\x66\x69\x67\x2e\x74\x78\x74"
                      ),
                        a(b);
                    else {
                      var d = c.txtdata,
                        e = c.position;
                      (x.overscan = {
                        horizontal: parseInt(d[e].split("\x3d").pop(), 10),
                        vertical: parseInt(d[e + 2].split("\x3d").pop(), 10),
                        disable_overscan: c.overscan_flag,
                      }),
                        a();
                    }
                  });
                },
                function (a) {
                  y.user
                    ? a()
                    : f.readFile(
                        l.root + "\x2f\x68\x74\x70\x61\x73\x73\x77\x64",
                        "\x75\x74\x66\x38",
                        function (b, c) {
                          if (!b && c) {
                            var d = c.split("\x3a");
                            y.user = d[0];
                          }
                          a();
                        }
                      );
                },
                function (a) {
                  x.wifi.ip || x.ipsettings.address
                    ? g
                      ? c
                        ? a()
                        : ((x.dns = { primary: null, secondary: null }),
                          d(
                            "\x63\x61\x74\x20" +
                              l.ifacePath +
                              "\x20\x7c\x20\x67\x72\x65\x70\x20\x27\x64\x6e\x73\x2d\x6e\x61\x6d\x65\x73\x65\x72\x76\x65\x72\x73\x27\x20\x7c\x20\x74\x72\x20\x2d\x64\x20\x27\x5b\x61\x2d\x7a\x5d\x5b\x3d\x2d\x3d\x5d\x5b\n\x5d\x5b\t\x5d\x27",
                            function (b, c) {
                              if (!b) {
                                var e = c.split("\x20");
                                (e = e.filter(function (a) {
                                  return a;
                                })),
                                  (x.dns = {
                                    primary:
                                      e[0] || "\x38\x2e\x38\x2e\x34\x2e\x34",
                                    secondary:
                                      e[1] || "\x38\x2e\x38\x2e\x38\x2e\x38",
                                  }),
                                  a();
                              }
                            }
                          ))
                      : d(
                          "\x63\x61\x74\x20\x2f\x65\x74\x63\x2f\x72\x65\x73\x6f\x6c\x76\x2e\x63\x6f\x6e\x66\x2e\x68\x65\x61\x64\x20\x7c\x20\x67\x72\x65\x70\x20\x27\x6e\x61\x6d\x65\x73\x65\x72\x76\x65\x72\x27\x20\x7c\x20\x74\x72\x20\x2d\x64\x20\x27\x5b\x3a\x62\x6c\x61\x6e\x6b\x5d\x5b\x61\x2d\x7a\x5d\x5b\x3d\x2d\x3d\x5d\x5b\t\x5d\x27",
                          function (b, c) {
                            if (!b || !c) {
                              var e = c.split("\n");
                              (e = e.filter(function (a) {
                                return a;
                              })),
                                (x.dns = {
                                  primary:
                                    e[0] || "\x38\x2e\x38\x2e\x34\x2e\x34",
                                  secondary:
                                    e[1] || "\x38\x2e\x38\x2e\x38\x2e\x38",
                                }),
                                a();
                            }
                          }
                        )
                    : a();
                },
              ],
              function () {
                return r.sendSuccess(b, "\x53\x65\x74\x74\x69\x6e\x67\x73", {
                  name: x.name,
                  localName: x.localName,
                  note: x.note,
                  version: x.version,
                  platform_version: x.platform_version,
                  currentVersion: x.currentVersion,
                  ipsettings: x.ipsettings,
                  wifi: x.wifi,
                  overscan: x.overscan,
                  orientation: x.orientation,
                  resolution: x.resolution,
                  omxVolume: x.omxVolume,
                  user: { name: y.user },
                  server: { config: m.config_server, media: m.media_server },
                  sleep: x.sleep,
                  reboot: x.reboot,
                  dns: x.dns,
                });
              }
            );
          }),
          (ha = function (a, b, c) {
            var g,
              h,
              e = "\x64\x68\x63\x70\x63\x64" == b.mode;
            if (e)
              if (
                ((!a.netmask ||
                  isNaN(parseInt(a.netmask)) ||
                  parseInt(a.netmask) > 32) &&
                  (a.netmask = 24),
                (g = [
                  "\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x20\x65\x74\x68\x30",
                  "\t\x73\x74\x61\x74\x69\x63\x20\x69\x70\x5f\x61\x64\x64\x72\x65\x73\x73\x3d" +
                    a.address +
                    "\x2f" +
                    a.netmask,
                  "\t\x73\x74\x61\x74\x69\x63\x20\x72\x6f\x75\x74\x65\x72\x73\x3d" +
                    a.gateway,
                  "\t\x73\x74\x61\x74\x69\x63\x20\x64\x6f\x6d\x61\x69\x6e\x5f\x6e\x61\x6d\x65\x5f\x73\x65\x72\x76\x65\x72\x73\x3d" +
                    x.dns.primary +
                    "\x20" +
                    x.dns.secondary +
                    "\n",
                ]),
                -1 == b.pos)
              ) {
                if ("\x44\x48\x43\x50" == a.mode) return c();
                b.lines = b.lines.concat(g);
              } else {
                for (
                  b.lines.splice(b.pos, 1);
                  b.pos < b.lines.length && b.lines[b.pos].match(/\s*static/i);

                )
                  b.lines.splice(b.pos, 1);
                "\x53\x74\x61\x74\x69\x63" == a.mode &&
                  (b.lines = b.lines.concat(g));
              }
            else if (-1 != b.lines[b.pos].indexOf("\x64\x68\x63\x70")) {
              if ("\x44\x48\x43\x50" == a.mode) return c();
              b.lines.splice(
                b.pos,
                1,
                "\x69\x66\x61\x63\x65\x20\x65\x74\x68\x30\x20\x69\x6e\x65\x74\x20\x73\x74\x61\x74\x69\x63"
              ),
                b.lines.splice(
                  b.pos + 1,
                  0,
                  "\t\x61\x64\x64\x72\x65\x73\x73\x20" + a.address,
                  "\t\x6e\x65\x74\x6d\x61\x73\x6b\x20" + a.netmask,
                  "\t\x67\x61\x74\x65\x77\x61\x79\x20" + a.gateway,
                  "\t\x64\x6e\x73\x2d\x6e\x61\x6d\x65\x73\x65\x72\x76\x65\x72\x73\x20" +
                    x.dns.primary +
                    "\x20" +
                    x.dns.secondary
                );
            } else
              "\x53\x74\x61\x74\x69\x63" == a.mode
                ? (b.lines.splice(b.pos + 1, 4),
                  b.lines.splice(
                    b.pos + 1,
                    0,
                    "\t\x61\x64\x64\x72\x65\x73\x73\x20" + a.address,
                    "\t\x6e\x65\x74\x6d\x61\x73\x6b\x20" + a.netmask,
                    "\t\x67\x61\x74\x65\x77\x61\x79\x20" + a.gateway,
                    "\t\x64\x6e\x73\x2d\x6e\x61\x6d\x65\x73\x65\x72\x76\x65\x72\x73\x20" +
                      x.dns.primary +
                      "\x20" +
                      x.dns.secondary
                  ))
                : (b.lines.splice(b.pos + 1, 4),
                  b.lines.splice(
                    b.pos,
                    1,
                    "\x69\x66\x61\x63\x65\x20\x65\x74\x68\x30\x20\x69\x6e\x65\x74\x20\x64\x68\x63\x70"
                  ));
            (h = e ? l.dhcpcdFile : l.ifacePath),
              f.writeFile(S, b.lines.join("\n"), function (a) {
                a
                  ? c({
                      msg: "\x49\x6e\x74\x65\x72\x66\x61\x63\x65\x73\x20\x74\x65\x6d\x70\x20\x66\x69\x6c\x65\x20\x65\x72\x72\x6f\x72",
                      error: a,
                    })
                  : d(
                      "\x73\x75\x64\x6f\x20\x6d\x76\x20\x2d\x66\x20" +
                        S +
                        "\x20" +
                        h,
                      function (a) {
                        a
                          ? c({
                              msg: "\x6d\x76\x20\x74\x65\x6d\x70\x20\x74\x6f\x20\x49\x6e\x74\x65\x72\x66\x61\x63\x65\x73\x20\x65\x72\x72\x6f\x72\x3a\x20",
                              error: a,
                            })
                          : c();
                      }
                    );
              });
          }),
          (b.setHostname = function (a, c) {
            return (
              (x.localName = a.body.localName),
              (x.note = a.body.note),
              b.writeToSettings(),
              t.registerHostnameChange(x.localName),
              r.sendSuccess(
                c,
                "\x4e\x61\x6d\x65\x20\x63\x68\x61\x6e\x67\x65\x20\x69\x6e\x20\x70\x72\x6f\x67\x72\x65\x73\x73",
                x
              )
            );
          }),
          (b.setEthernet = function (a, b) {
            var c = null,
              e = !1;
            h.series(
              [
                function (a) {
                  fa(function (b, d) {
                    b
                      ? a(b)
                      : ((e = "\x64\x68\x63\x70\x63\x64" == d.mode),
                        (c = d),
                        a());
                  });
                },
                function (a) {
                  var b = e ? l.dhcpcdFile : l.ifacePath;
                  d(
                    "\x73\x75\x64\x6f\x20\x63\x70\x20" +
                      b +
                      "\x20" +
                      b +
                      "\x2e\x62\x61\x6b",
                    function (b) {
                      null !== b
                        ? a({
                            msg: "\x63\x70\x20\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73\x20\x74\x6f\x20\x2e\x62\x61\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20",
                            error: b,
                          })
                        : a();
                    }
                  );
                },
                function (b) {
                  var c = a.body.dns;
                  (x.dns.primary = c.primary || "\x38\x2e\x38\x2e\x34\x2e\x34"),
                    (x.dns.secondary =
                      c.secondary || "\x38\x2e\x38\x2e\x38\x2e\x38"),
                    a.body &&
                    a.body.ipsettings &&
                    "\x44\x48\x43\x50" == a.body.ipsettings.mode &&
                    a.body.editDns
                      ? t.updateDnsEntry(x.dns, b)
                      : b();
                },
                function (b) {
                  ha(a.body.ipsettings, c, b);
                },
              ],
              function (a) {
                return a
                  ? r.sendError(
                      b,
                      "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x75\x70\x64\x61\x74\x69\x6e\x67\x20\x4e\x65\x74\x77\x6f\x72\x6b\x20\x73\x65\x74\x74\x69\x6e\x67\x73\x3a\x20",
                      a
                    )
                  : (r.sendSuccess(
                      b,
                      "\x4e\x65\x74\x77\x6f\x72\x6b\x20\x73\x65\x74\x74\x69\x6e\x67\x73\x20\x73\x61\x76\x65\x64",
                      x
                    ),
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x52\x65\x62\x6f\x6f\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x20\x61\x66\x74\x65\x72\x20\x6e\x65\x74\x77\x6f\x72\x6b\x20\x63\x6f\x6e\x66\x69\x67\x20\x63\x68\x61\x6e\x67\x65"
                    ),
                    t.reboot(),
                    void 0);
              }
            );
          }),
          (b.setWifi = function (a, b) {
            var c,
              e = !1,
              g = !1,
              i = !1;
            a.body.wifi.ssid
              ? ((a.body.wifi.apmode = "\x4e\x4f"), (g = !0))
              : "\x41\x50" == a.body.wifi.apmode && (i = !0),
              h.series(
                [
                  function (a) {
                    return g
                      ? void d(
                          "\x73\x75\x64\x6f\x20\x63\x70\x20\x20\x2f\x65\x74\x63\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2e\x63\x6f\x6e\x66\x20\x20\x2f\x65\x74\x63\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2e\x63\x6f\x6e\x66\x2e\x62\x61\x6b",
                          function (b) {
                            null !== b
                              ? a({
                                  msg: "\x63\x70\x20\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2e\x63\x6f\x6e\x66\x20\x74\x6f\x20\x2e\x62\x61\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20",
                                  error: b,
                                })
                              : a();
                          }
                        )
                      : a();
                  },
                  function (a) {
                    return g
                      ? void d(
                          "\x73\x75\x64\x6f\x20\x63\x61\x74\x20" + l.wifiPath,
                          function (b, d) {
                            null !== b && a(err),
                              d && ((c = d.split("\n")), a());
                          }
                        )
                      : a();
                  },
                  function (b) {
                    var e, h;
                    if (!g) return b();
                    if (a.body.wifi.countryCode) {
                      for (e = 0; e < c.length; e++)
                        if (c[e].match(/country\S+/gi)) {
                          c.splice(
                            e,
                            1,
                            "\x63\x6f\x75\x6e\x74\x72\x79\x3d" +
                              a.body.wifi.countryCode
                          );
                          break;
                        }
                      e === c.length &&
                        c.splice(
                          2,
                          0,
                          "\x63\x6f\x75\x6e\x74\x72\x79\x3d" +
                            a.body.wifi.countryCode
                        );
                    }
                    for (h = 0; h < c.length; h++)
                      if (c[h].match(/network\S+/gi)) {
                        c.length = h;
                        break;
                      }
                    c.push(
                      "\x6e\x65\x74\x77\x6f\x72\x6b\x3d\x7b",
                      "\x73\x73\x69\x64\x3d\x22" + a.body.wifi.ssid + "\x22",
                      a.body.wifi.open
                        ? "\x6b\x65\x79\x5f\x6d\x67\x6d\x74\x3d\x4e\x4f\x4e\x45"
                        : "\x70\x73\x6b\x3d\x22" + a.body.wifi.pass + "\x22",
                      "\x73\x63\x61\x6e\x5f\x73\x73\x69\x64\x3d" +
                        (a.body.wifi.hidden ? "\x31" : "\x30"),
                      "\x7d"
                    ),
                      f.writeFile(T, c.join("\n"), function (a) {
                        return a
                          ? a
                          : void d(
                              "\x73\x75\x64\x6f\x20\x6d\x76\x20\x2d\x66\x20" +
                                T +
                                "\x20" +
                                l.wifiPath,
                              function (a) {
                                a
                                  ? b({
                                      msg: "\x6d\x76\x20\x77\x69\x66\x69\x20\x74\x65\x6d\x70\x20\x74\x6f\x20\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2e\x63\x6f\x6e\x66\x20\x65\x72\x72\x6f\x72\x3a\x20",
                                      error: a,
                                    })
                                  : b();
                              }
                            );
                      });
                  },
                  function (a) {
                    d(
                      "\x67\x72\x65\x70\x20\x2d\x71\x20\x22\x5e\x64\x65\x6e\x79\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73\x20\x77\x6c\x61\x6e\x30\x22\x20\x2f\x65\x74\x63\x2f\x64\x68\x63\x70\x63\x64\x2e\x63\x6f\x6e\x66",
                      function (b) {
                        (!b || i) && (e = !0), a();
                      }
                    );
                  },
                  function (a) {
                    var b = i
                      ? "\x2d\x2d\x65\x6e\x61\x62\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x70\x6f\x69\x6e\x74"
                      : "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x70\x6f\x69\x6e\x74";
                    d(l.systemScript + b, function (b, c, d) {
                      b || d
                        ? s.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x77\x69\x66\x69\x20\x6d\x6f\x64\x65\x20\x63\x68\x61\x6e\x67\x65\x20\x65\x72\x72\x6f\x72\x20\x3a\x20" +
                              b
                          )
                        : s.log("\x69\x6e\x66\x6f", c),
                        a();
                    });
                  },
                ],
                function (c) {
                  return c
                    ? (s.log("\x65\x72\x72\x6f\x72", c),
                      r.sendError(
                        b,
                        "\x57\x69\x66\x69\x20\x75\x70\x64\x61\x74\x65\x20\x65\x72\x72\x6f\x72\x3a\x20",
                        c
                      ))
                    : ((x.wifi = a.body.wifi),
                      void (e
                        ? (r.sendSuccess(
                            b,
                            "\x57\x69\x66\x69\x20\x75\x70\x64\x61\x74\x65\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c",
                            x
                          ),
                          t.reboot())
                        : fa(function (a, c) {
                            var e;
                            (e =
                              a || "\x64\x68\x63\x70\x63\x64" == c.mode
                                ? "\x73\x75\x64\x6f\x20\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x77\x6c\x61\x6e\x30\x20\x64\x6f\x77\x6e\x3b\x73\x75\x64\x6f\x20\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x77\x6c\x61\x6e\x30\x20\x75\x70\x3b"
                                : "\x73\x75\x64\x6f\x20\x69\x66\x64\x6f\x77\x6e\x20\x2d\x2d\x66\x6f\x72\x63\x65\x20\x77\x6c\x61\x6e\x30\x3b\x20\x73\x75\x64\x6f\x20\x69\x66\x75\x70\x20\x77\x6c\x61\x6e\x30\x3b"),
                              d(e, function (a) {
                                return a
                                  ? (s.log(
                                      "\x65\x72\x72\x6f\x72",
                                      "\x69\x66\x64\x6f\x77\x6e\x2f\x75\x70\x20\x65\x72\x72\x6f\x72"
                                    ),
                                    r.sendError(
                                      b,
                                      "\x57\x69\x66\x69\x20\x75\x70\x64\x61\x74\x65\x20\x65\x72\x72\x6f\x72\x3a\x20",
                                      a
                                    ))
                                  : (Y(),
                                    r.sendSuccess(
                                      b,
                                      "\x57\x69\x66\x69\x20\x75\x70\x64\x61\x74\x65\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c",
                                      x
                                    ),
                                    void Z(pa));
                              });
                          })));
                }
              );
          }),
          (b.setOverscan = function (a, b) {
            var c = a.body.overscan;
            r.sendSuccess(
              b,
              "\x6e\x65\x77\x20\x63\x68\x61\x6e\x67\x65\x73\x20\x61\x72\x65\x20\x62\x65\x69\x6e\x67\x20\x77\x72\x69\x74\x74\x65\x6e",
              x
            ),
              s.log(
                "\x69\x6e\x66\x6f",
                "\x52\x65\x62\x6f\x6f\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x65\x72\x76\x65\x72\x20\x61\x66\x74\x65\x72\x20\x6f\x76\x65\x72\x73\x63\x61\x6e\x20\x63\x6f\x6e\x66\x69\x67\x20\x63\x68\x61\x6e\x67\x65"
              ),
              a.body.overscan.disable_overscan
                ? d(
                    "\x73\x75\x64\x6f\x20\x73\x65\x64\x20\x2d\x69\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x64\x69\x73\x61\x62\x6c\x65\x5f\x6f\x76\x65\x72\x73\x63\x61\x6e\x2e\x2a\x2f\x64\x69\x73\x61\x62\x6c\x65\x5f\x6f\x76\x65\x72\x73\x63\x61\x6e\x3d\x31\x2f\x22\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x6c\x65\x66\x74\x2e\x2a\x2f\x23\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x6c\x65\x66\x74\x3d\x22" +
                      c.horizontal +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x72\x69\x67\x68\x74\x2e\x2a\x2f\x23\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x72\x69\x67\x68\x74\x3d\x22" +
                      c.horizontal +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x74\x6f\x70\x2e\x2a\x2f\x23\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x74\x6f\x70\x3d\x22" +
                      c.vertical +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x62\x6f\x74\x74\x6f\x6d\x2e\x2a\x2f\x23\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x62\x6f\x74\x74\x6f\x6d\x3d\x22" +
                      c.vertical +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x73\x63\x61\x6c\x65\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x73\x63\x61\x6c\x65\x3d\x30\x2f\x22\x20\x20" +
                      l.bootConfigPath
                  ).on("\x63\x6c\x6f\x73\x65", function () {
                    t.reboot();
                  })
                : d(
                    "\x73\x75\x64\x6f\x20\x73\x65\x64\x20\x2d\x69\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x64\x69\x73\x61\x62\x6c\x65\x5f\x6f\x76\x65\x72\x73\x63\x61\x6e\x2e\x2a\x2f\x64\x69\x73\x61\x62\x6c\x65\x5f\x6f\x76\x65\x72\x73\x63\x61\x6e\x3d\x30\x2f\x22\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x6c\x65\x66\x74\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x6c\x65\x66\x74\x3d\x22" +
                      c.horizontal +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x72\x69\x67\x68\x74\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x72\x69\x67\x68\x74\x3d\x22" +
                      c.horizontal +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x74\x6f\x70\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x74\x6f\x70\x3d\x22" +
                      c.vertical +
                      "\x2f\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x62\x6f\x74\x74\x6f\x6d\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x62\x6f\x74\x74\x6f\x6d\x3d\x22" +
                      c.vertical +
                      "\x2f\x20\x20\x2d\x65\x20\x22\x73\x2f\x2e\x2a\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x73\x63\x61\x6c\x65\x2e\x2a\x2f\x6f\x76\x65\x72\x73\x63\x61\x6e\x5f\x73\x63\x61\x6c\x65\x3d\x31\x2f\x22\x20\x20" +
                      l.bootConfigPath
                  ).on("\x63\x6c\x6f\x73\x65", function () {
                    t.reboot();
                  });
          }),
          (b.setOrientation = function (a, b) {
            return a.body.orientation == x.orientation &&
              a.body.resolution == x.resolution
              ? r.sendSuccess(
                  b,
                  "\x53\x65\x74\x74\x69\x6e\x67\x73\x20\x53\x61\x76\x65\x64",
                  x
                )
              : void gb(a.body, function (a) {
                  return a
                    ? r.sendError(
                        b,
                        "\x53\x65\x74\x74\x69\x6e\x67\x73\x20\x77\x72\x69\x74\x65\x20\x65\x72\x72\x6f\x72",
                        a
                      )
                    : r.sendSuccess(
                        b,
                        "\x53\x65\x74\x74\x69\x6e\x67\x73\x20\x53\x61\x76\x65\x64\x20\x61\x6e\x64\x20\x52\x65\x62\x6f\x6f\x74",
                        x
                      );
                });
          }),
          (b.setServerName = function (a, b) {
            a.body.server.config != m.config_server ||
            a.body.server.media != m.media_server
              ? ((m.config_server = a.body.server.config),
                (m.media_server = a.body.server.media),
                f.writeFile(
                  l.pkgJson,
                  JSON.stringify(m, null, 4),
                  function (a) {
                    return a
                      ? r.sendError(
                          b,
                          "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x73\x65\x72\x76\x65\x72\x20\x6e\x61\x6d\x65",
                          a
                        )
                      : (r.sendSuccess(
                          b,
                          "\x4e\x65\x77\x20\x73\x65\x72\x76\x65\x72\x20\x6e\x61\x6d\x65\x20\x73\x61\x76\x65\x64",
                          x
                        ),
                        s.log(
                          "\x69\x6e\x66\x6f",
                          "\x45\x78\x69\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x6e\x6f\x64\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x61\x66\x74\x65\x72\x20\x73\x65\x72\x76\x65\x72\x20\x6e\x61\x6d\x65\x20\x63\x68\x61\x6e\x67\x65"
                        ),
                        ub(),
                        void 0);
                  }
                ))
              : r.sendSuccess(
                  b,
                  "\x4e\x65\x77\x20\x73\x65\x72\x76\x65\x72\x20\x6e\x61\x6d\x65\x20\x73\x61\x76\x65\x64",
                  x
                );
          }),
          (b.setUser = function (a, b) {
            var d = c("\x61\x70\x61\x63\x68\x65\x2d\x6d\x64\x35")(
              a.body.user.newpasswd
            );
            try {
              f.writeFileSync(
                l.root + "\x2f\x68\x74\x70\x61\x73\x73\x77\x64",
                a.body.user.name + "\x3a" + d
              ),
                r.sendSuccess(
                  b,
                  "\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79",
                  x
                ),
                console.log(
                  "\x2a\x2a\x2a\x20\x20\x55\x73\x65\x72\x6e\x61\x6d\x65\x2f\x50\x61\x73\x73\x77\x6f\x72\x64\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x2a\x2a\x2a\x2a"
                ),
                s.log(
                  "\x69\x6e\x66\x6f",
                  "\x45\x78\x69\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x6e\x6f\x64\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x61\x66\x74\x65\x72\x20\x75\x73\x65\x72\x20\x6e\x61\x6d\x65\x2f\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x63\x68\x61\x6e\x67\x65"
                ),
                ub();
            } catch (e) {
              s.log(
                "\x65\x72\x72\x6f\x72",
                "\x2a\x2a\x2a\x20\x68\x74\x70\x61\x73\x73\x77\x64\x20\x66\x69\x6c\x65\x20\x77\x72\x69\x74\x65\x20\x65\x72\x72\x6f\x72\x20\x2a\x2a\x2a"
              ),
                r.sendError(
                  b,
                  "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x73\x61\x76\x69\x6e\x67\x20\x75\x73\x65\x72\x20\x73\x65\x74\x74\x69\x6e\x67\x73",
                  e
                );
            }
          }),
          (b.setSleepTimer = function (a, c) {
            return (
              (x.sleep = a.body.sleep),
              mb(x.sleep),
              b.writeToSettings(),
              r.sendSuccess(c, "\x74\x69\x6d\x65\x20\x73\x65\x74\x20", x)
            );
          }),
          (b.setOMXVolume = function (a, c) {
            return (
              (x.omxVolume = a.body.omxVolume),
              n.setOMXVolume(x.omxVolume),
              b.writeToSettings(),
              r.sendSuccess(
                c,
                "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x76\x6f\x6c\x75\x6d\x65\x20\x73\x65\x74\x20\x73\x75\x63\x63\x65\x73\x73",
                x
              )
            );
          }),
          (b.setMute = function (a, c) {
            return (
              (x.audioMute = a.body.mute),
              n.setMute(x.audioMute),
              b.writeToSettings(),
              r.sendSuccess(
                c,
                "\x41\x75\x64\x69\x6f\x20\x6d\x75\x74\x65\x20\x73\x65\x74\x20\x73\x75\x63\x63\x65\x73\x73",
                { value: x.audioMute }
              )
            );
          }),
          (b.getOMXVolume = function (a, b) {
            return r.sendSuccess(
              b,
              "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x76\x6f\x6c\x75\x6d\x65\x20\x6c\x65\x76\x65\x6c",
              n.getOMXVolume()
            );
          }),
          (b.getLog = function (a, b) {
            var d,
              c = a.query.file;
            return c && 0 == c.indexOf("\x66\x6f\x72\x65\x76\x65\x72")
              ? ((d = g.join(__dirname, "\x2e\x2e", c)),
                void f.stat(d, function (a, e) {
                  return a
                    ? r.sendError(
                        b,
                        "\x46\x69\x6c\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x70\x72\x65\x73\x65\x6e\x74"
                      )
                    : void f.readFile(d, "\x75\x74\x66\x38", function (a, d) {
                        return a
                          ? r.sendError(
                              b,
                              "\x46\x69\x6c\x65\x20\x64\x61\x74\x61\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72"
                            )
                          : (b.writeHead(200, {
                              "Content-Type":
                                "\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e",
                              "Content-Length": e.size,
                              "Content-Disposition": c,
                            }),
                            void b.end(d));
                      });
                }))
              : r.sendError(
                  b,
                  "\x46\x69\x6c\x65\x6e\x61\x6d\x65\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6c\x69\x65\x64"
                );
          }),
          (ia = [
            "\x73\x65\x63\x72\x65\x74",
            "\x69\x6e\x73\x74\x61\x6c\x6c\x61\x74\x69\x6f\x6e",
            "\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e",
            "\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e",
            "\x6f\x6d\x78\x56\x6f\x6c\x75\x6d\x65",
            "\x6f\x76\x65\x72\x73\x63\x61\x6e",
            "\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x45\x6e\x61\x62\x6c\x65",
            "\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x54\x79\x70\x65",
            "\x65\x6e\x61\x62\x6c\x65\x4c\x6f\x67",
            "\x64\x69\x73\x61\x62\x6c\x65\x50\x6c\x61\x79\x65\x72\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x4f\x6e\x4d\x6f\x64\x65\x6d",
            "\x72\x65\x70\x6f\x72\x74\x49\x6e\x74\x65\x72\x76\x61\x6c\x4d\x69\x6e\x75\x74\x65\x73",
            "\x73\x79\x73\x74\x65\x6d\x4d\x65\x73\x73\x61\x67\x65\x73\x48\x69\x64\x65",
            "\x66\x6f\x72\x63\x65\x54\x76\x4f\x6e",
            "\x64\x69\x73\x61\x62\x6c\x65\x43\x45\x43\x50\x6f\x77\x65\x72\x43\x68\x65\x63\x6b",
            "\x68\x69\x64\x65\x57\x65\x6c\x63\x6f\x6d\x65\x4e\x6f\x74\x69\x63\x65",
            "\x73\x69\x67\x6e\x61\x67\x65\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72",
            "\x69\x6d\x61\x67\x65\x4c\x65\x74\x74\x65\x72\x62\x6f\x78\x65\x64",
            "\x72\x65\x73\x69\x7a\x65\x41\x73\x73\x65\x74\x73",
            "\x76\x69\x64\x65\x6f\x4b\x65\x65\x70\x41\x73\x70\x65\x63\x74",
            "\x76\x69\x64\x65\x6f\x53\x68\x6f\x77\x53\x75\x62\x74\x69\x74\x6c\x65\x73",
            "\x75\x72\x6c\x52\x65\x6c\x6f\x61\x64\x44\x69\x73\x61\x62\x6c\x65",
            "\x74\x69\x6d\x65\x54\x6f\x53\x74\x6f\x70\x56\x69\x64\x65\x6f",
            "\x73\x68\x6f\x77\x43\x6c\x6f\x63\x6b",
            "\x6c\x6f\x61\x64\x50\x6c\x61\x79\x6c\x69\x73\x74\x4f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x69\x6f\x6e",
            "\x63\x6f\x6d\x62\x69\x6e\x65\x44\x65\x66\x61\x75\x6c\x74\x50\x6c\x61\x79\x6c\x69\x73\x74",
            "\x70\x6c\x61\x79\x41\x6c\x6c\x45\x6c\x69\x67\x69\x62\x6c\x65\x50\x6c\x61\x79\x6c\x69\x73\x74\x73",
            "\x73\x68\x75\x66\x66\x6c\x65\x43\x6f\x6e\x74\x65\x6e\x74",
            "\x61\x6c\x74\x65\x72\x6e\x61\x74\x65\x43\x6f\x6e\x74\x65\x6e\x74",
            "\x6c\x6f\x67\x6f",
            "\x6c\x6f\x67\x6f\x78",
            "\x6c\x6f\x67\x6f\x79",
            "\x54\x5a",
          ]),
          (b.getSettingsFile = function (a, b) {
            return r.sendSuccess(
              b,
              "\x53\x65\x6e\x64\x69\x6e\x67\x20\x63\x6f\x6e\x66\x69\x67\x20\x61\x6e\x64\x20\x73\x65\x74\x74\x69\x6e\x67\x20\x66\x69\x6c\x65\x73",
              j.pick(x, ia)
            );
          }),
          (b.setSettingsFile = function (a, c) {
            (x = j.extend(x, j.pick(a.body, ia))),
              b.writeToSettings(),
              r.sendSuccess(
                c,
                "\x73\x65\x74\x74\x69\x6e\x67\x73\x20\x75\x70\x64\x61\x74\x65\x64\x20\x61\x6e\x64\x20\x6e\x6f\x64\x65\x20\x72\x65\x73\x74\x61\x72\x74\x65\x64"
              ),
              ub();
          }),
          (b.getWifiList = function (a, b) {
            var c = [],
              e = [];
            d(
              "\x73\x75\x64\x6f\x20\x69\x77\x6c\x69\x73\x74\x20\x77\x6c\x61\x6e\x30\x20\x73\x63\x61\x6e\x20\x7c\x20\x67\x72\x65\x70\x20\x22\x45\x53\x53\x49\x44\x3a\x22\x20\x7c\x63\x75\x74\x20\x2d\x64\x20\x22\x3a\x22\x20\x2d\x66\x20\x32",
              function (a, d, f) {
                return a
                  ? r.sendError(
                      b,
                      "\x4e\x6f\x20\x41\x63\x63\x65\x73\x73\x20\x50\x6f\x69\x6e\x74\x20\x46\x6f\x75\x6e\x64",
                      a
                    )
                  : f
                  ? r.sendError(
                      b,
                      "\x77\x69\x66\x69\x20\x72\x65\x61\x64\x20\x65\x72\x72",
                      f
                    )
                  : ((c = d.split("\n")),
                    c.forEach(function (a) {
                      a &&
                        ((a = a.replace(/"/g, "")),
                        a && -1 == e.indexOf(a) && e.push(a));
                    }),
                    r.sendSuccess(
                      b,
                      "\x77\x69\x66\x69\x20\x6c\x69\x73\x74",
                      e
                    ));
              }
            );
          }),
          (b.factoryReset = function (a, b) {
            t.factoryReset(function (a) {
              a
                ? r.sendError(
                    b,
                    "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x66\x61\x63\x74\x6f\x72\x79\x20\x72\x65\x73\x65\x74"
                  )
                : r.sendSuccess(
                    b,
                    "\x46\x61\x63\x74\x6f\x72\x79\x20\x72\x65\x73\x65\x74\x20\x69\x6e\x20\x50\x72\x6f\x67\x72\x65\x73\x73"
                  );
            });
          }),
          (ka = function (a, b) {
            return a ? (b ? 1 : 2) : 0;
          }),
          (la = !0),
          (ma = null),
          (na = !1),
          (oa = function () {
            w.playlistOn &&
              ((w.playlistOn = !1), ba(!0, w.currentPlaylist, function () {})),
              db();
          }),
          n.browserEmitter.once("\x6c\x6f\x61\x64\x65\x64", function () {
            s.log(
              "\x64\x65\x62\x75\x67",
              "\x42\x72\x6f\x77\x73\x65\x72\x20\x6c\x6f\x61\x64\x65\x64\x20\x65\x76\x65\x6e\x74\x20\x61\x74\x20\x70\x69\x2d\x6d\x61\x69\x6e"
            ),
              (na = !0),
              ma &&
                (clearTimeout(ma),
                setTimeout(function () {
                  (la = !1), oa();
                }, 1e4));
          }),
          h.series(
            [
              function (a) {
                f.readFile(
                  l.poweronConfig,
                  "\x75\x74\x66\x38",
                  function (b, c) {
                    if (b)
                      return (
                        s.log(
                          "\x77\x61\x72\x6e",
                          "\x74\x68\x65\x72\x65\x20\x73\x65\x65\x6d\x73\x20\x74\x6f\x20\x62\x65\x20\x6e\x6f\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x3a\x20" +
                            b
                        ),
                        p.storeEvent(
                          "\x70\x6c\x61\x79\x65\x72",
                          "\x65\x72\x72\x6f\x72",
                          "\x74\x68\x65\x72\x65\x20\x73\x65\x65\x6d\x73\x20\x74\x6f\x20\x62\x65\x20\x6e\x6f\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x3a\x20" +
                            b
                        ),
                        a()
                      );
                    try {
                      var d = JSON.parse(c);
                    } catch (e) {
                      f.unlink(l.poweronConfig);
                    }
                    return d
                      ? ((w = d),
                        (w.playlistStarttime = null),
                        (w.playlistIndex = 0),
                        (w.tvStatus = !0),
                        (w.uptime = null),
                        (w.localControl = !1),
                        w.deployedPlaylists && ja(),
                        a())
                      : (s.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x4a\x53\x4f\x4e\x20\x70\x61\x72\x73\x65\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65"
                        ),
                        p.storeEvent(
                          "\x70\x6c\x61\x79\x65\x72",
                          "\x65\x72\x72\x6f\x72",
                          "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x4a\x53\x4f\x4e\x20\x70\x61\x72\x73\x65\x20\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65"
                        ),
                        a());
                  }
                );
              },
              b.updateDiskStatus,
              function (a) {
                f.readFile(l.settingsFile, "\x75\x74\x66\x38", function (b, c) {
                  var e, g;
                  if (!b)
                    try {
                      x = JSON.parse(c);
                    } catch (d) {
                      s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x45\x72\x72\x6f\x72\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x20" +
                          l.settingsFile +
                          "\x3a\x20" +
                          d
                      );
                    }
                  if (
                    f.existsSync(P) &&
                    (s.log("\x69\x6e\x66\x6f", "\x46\x6f\x75\x6e\x64\x20" + P),
                    (g = f.readFileSync(P, "\x75\x74\x66\x38")))
                  )
                    try {
                      (e = JSON.parse(g)),
                        (Q = !0),
                        e &&
                          "\x6f\x62\x6a\x65\x63\x74" == typeof e &&
                          ((V.settings = V.settings.concat(R)),
                          e.pin && (x.sdConfigPin = e.pin),
                          e.name && (x.sdConfigName = e.name),
                          e.group && (x.sdConfigGroup = e.group),
                          e.timezone && (x.sdConfigTimezone = e.timezone),
                          e.installation &&
                            (x.sdConfigInstallation = e.installation),
                          s.log(
                            "\x69\x6e\x66\x6f",
                            "\x53\x65\x6e\x64\x69\x6e\x67\x20\x53\x44\x20\x63\x6f\x6e\x66\x69\x67\x20\x64\x65\x74\x61\x69\x6c\x73\x3a\x20" +
                              x.sdConfigName +
                              "\x2c\x20" +
                              x.sdConfigInstallation +
                              "\x2c\x20" +
                              x.sdConfigGroup +
                              "\x2c\x20" +
                              x.sdConfigTimezone
                          ));
                    } catch (h) {
                      s.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x45\x72\x72\x6f\x72\x20\x70\x61\x72\x73\x69\x6e\x67\x20" +
                          P +
                          "\x3a\x20" +
                          h
                      );
                    }
                  (x.hideWelcomeNotice = x.hideWelcomeNotice || !1),
                    (x.installation = x.installation || "\x61\x64\x6d\x69\x6e"),
                    (x.myIpAddress = A),
                    (x.orientation =
                      x.orientation || "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65"),
                    (x.resolution = x.resolution || "\x61\x75\x74\x6f"),
                    (x.sleep = x.sleep || {
                      enable: !1,
                      ontime: null,
                      offtime: null,
                    }),
                    (x.reboot = x.reboot || { enable: !1, time: null }),
                    !w.localControl && x.secret && A && Qa(),
                    x.hideWelcomeNotice ? a() : Z(a);
                });
              },
              function (a) {
                d(
                  "\x63\x61\x74\x20\x2f\x70\x72\x6f\x63\x2f\x63\x70\x75\x69\x6e\x66\x6f\x20\x7c\x67\x72\x65\x70\x20\x53\x65\x72\x69\x61\x6c\x7c\x61\x77\x6b\x20\x27\x7b\x70\x72\x69\x6e\x74\x20\x24\x33\x20\x7d\x27"
                )
                  .stdout.on("\x64\x61\x74\x61", function (a) {
                    "\x31" == a.charAt("\x30") && (a = "\x39" + a.slice(1)),
                      s.log(
                        "\x69\x6e\x66\x6f",
                        "\x63\x70\x75\x20\x73\x65\x72\x69\x61\x6c\x20\x6e\x75\x6d\x62\x65\x72\x3a\x20" +
                          a
                      ),
                      (x.cpuSerialNumber = a.slice(0, a.length - 1)),
                      c(
                        "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x69\x63\x65\x6e\x73\x65\x2d\x75\x74\x69\x6c\x73"
                      ).checkForLicense(
                        x.installation,
                        x.cpuSerialNumber,
                        function (a) {
                          ("\x74\x74\x6b" != x.installation &&
                            "\x61\x64\x6d\x69\x6e" != x.installation) ||
                            "\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d" !=
                              U ||
                            (a = !0),
                            n.setLicense(a),
                            (w.licensed = a),
                            s.log(
                              "\x69\x6e\x66\x6f",
                              "\x6c\x69\x63\x65\x6e\x73\x65\x20\x73\x74\x61\x74\x75\x73\x3a\x20" +
                                a
                            );
                        },
                        U
                      );
                  })
                  .on("\x63\x6c\x6f\x73\x65", function () {
                    a();
                  });
              },
              function (a) {
                var b = function (a) {
                  var b = a.split("\n");
                  b[0] ? (x.ethMac = b[0]) : delete x.ethMac,
                    b[1] ? (x.wifiMac = b[1]) : delete x.wifiMac,
                    s.log(
                      "\x69\x6e\x66\x6f",
                      "\x4d\x41\x43\x20\x41\x64\x64\x72\x65\x73\x73\x20\x3a\x20" +
                        x.ethMac +
                        "\x20\x20" +
                        x.wifiMac
                    );
                };
                d(
                  "\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x7c\x20\x61\x77\x6b\x20\x27\x2f\x65\x74\x68\x65\x72\x2f\x7b\x70\x72\x69\x6e\x74\x20\x24\x32\x7d\x27",
                  function (c, e) {
                    e
                      ? (b(e), a())
                      : d(
                          "\x73\x75\x64\x6f\x20\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x7c\x20\x61\x77\x6b\x20\x27\x2f\x48\x57\x61\x64\x64\x72\x2f\x7b\x70\x72\x69\x6e\x74\x20\x24\x35\x7d\x27",
                          function (c, d, e) {
                            d
                              ? b(d)
                              : s.log(
                                  "\x65\x72\x72\x6f\x72",
                                  "\x4d\x41\x43\x20\x41\x64\x64\x72\x65\x73\x73\x20\x71\x75\x65\x72\x79\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                                    e
                                ),
                              a();
                          }
                        );
                  }
                );
              },
              function (a) {
                t.getResolution(function (b, c) {
                  b || (x.edidResolution = c),
                    n.setResolution(
                      x.resolution,
                      x.orientation,
                      x.edidResolution
                    ),
                    a();
                });
              },
              function (a) {
                (x.version = m.version),
                  (x.platform_version = m.platform_version),
                  (x.animationEnable = x.animationEnable || !1),
                  (x.animationType = x.animationType || null),
                  (x.enableLog = x.enableLog || !1),
                  (x.disablePlayerDownloadOnModem =
                    x.disablePlayerDownloadOnModem || !1),
                  (x.reportIntervalMinutes = x.reportIntervalMinutes || 5),
                  n.setAssetLogs(x.enableLog),
                  n.setYoutubeDl(x.enableYoutubeDl),
                  n.setMpv(x.enableMpv, x.mpvAudioDelay),
                  n.setAnimationStatus(x.animationEnable, x.animationType, !0),
                  (x.systemMessagesHide = x.systemMessagesHide || !1),
                  n.setSystemMessagesHide(x.systemMessagesHide, !0),
                  (x.forceTvOn = x.forceTvOn || !1),
                  (x.disableCECPowerCheck = x.disableCECPowerCheck || !1),
                  (x.signageBackgroundColor =
                    x.signageBackgroundColor || "\x23\x30\x30\x30"),
                  n.setBackgroundColor(x.signageBackgroundColor, !0),
                  (x.imageLetterboxed = x.imageLetterboxed || !1),
                  (x.resizeAssets = x.resizeAssets || !1),
                  n.setImageResize(ka(x.resizeAssets, x.imageLetterboxed), !0),
                  (x.videoKeepAspect = x.videoKeepAspect || !1),
                  n.setVideoKeepAspect(x.videoKeepAspect, !0),
                  (x.videoShowSubtitles = x.videoShowSubtitles || !1),
                  n.setVideoShowSubtitles(x.videoShowSubtitles),
                  (x.sleep = x.sleep || {
                    enable: !1,
                    ontime: null,
                    offtime: null,
                  }),
                  (x.reboot = x.reboot || { enable: !1, time: null }),
                  rb(x.reboot),
                  qb(),
                  mb(x.sleep),
                  (x.shuffleContent = x.shuffleContent || !1),
                  n.setShuffleContent(x.shuffleContent),
                  (x.urlReloadDisable = x.urlReloadDisable || !1),
                  n.setUrlReloadDisable(x.urlReloadDisable, !0),
                  (x.keepWeblinksInMemory = x.keepWeblinksInMemory || !1),
                  n.setWeblinkCacheEnable(x.keepWeblinksInMemory),
                  (x.server = m.config_server),
                  (x.connectionStatus = "\x57\x61\x69\x74\x69\x6e\x67"),
                  (x.omxVolume = parseInt(
                    x.omxVolume || 0 == x.omxVolume ? x.omxVolume : 100,
                    10
                  )),
                  n.setOMXVolume(x.omxVolume),
                  (x.timeToStopVideo = x.timeToStopVideo || 0),
                  n.setTimeToStopVideo(x.timeToStopVideo),
                  (x.kioskUi = x.kioskUi || { enable: !1 }),
                  q.setupUi(x.kioskUi),
                  (x.showClock = x.showClock || { enable: !1 }),
                  (x.emergencyMessage = x.emergencyMessage || {
                    enable: !1,
                    msg: "",
                    hPos: "\x6d\x69\x64\x64\x6c\x65",
                    vPos: "\x6d\x69\x64\x64\x6c\x65",
                  }),
                  n.setDisplayClock(x.showClock, x.emergencyMessage, !0),
                  a();
              },
              function (a) {
                d(
                  "\x73\x75\x64\x6f\x20\x6b\x69\x6c\x6c\x20\x24\x28\x70\x67\x72\x65\x70\x20\x2d\x66\x20\x6f\x6d\x78\x2e\x70\x79\x29",
                  function () {
                    a(),
                      ("\x4e\x54\x53\x43" == x.resolution ||
                        "\x50\x41\x4c" == x.resolution) &&
                        d(
                          "\x73\x75\x64\x6f\x20\x73\x65\x64\x20\x2d\x69\x20\x2d\x65\x20\x22\x73\x2f\x68\x64\x6d\x69\x2f\x6c\x6f\x63\x61\x6c\x2f\x22\x20\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x6f\x6d\x78\x2e\x70\x79"
                        );
                  }
                );
              },
              function (a) {
                d(
                  "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
                  function () {
                    a();
                  }
                );
              },
            ],
            function () {
              s.testLog("\x63\x6f\x6e\x66\x69\x67\x5f\x66\x69\x6c\x65", w),
                s.testLog(
                  "\x73\x65\x74\x74\x69\x6e\x67\x73\x5f\x66\x69\x6c\x65",
                  x
                ),
                b.writeToSettings(),
                p.startLog(),
                s.log(
                  "\x64\x65\x62\x75\x67",
                  "\x49\x6e\x69\x74\x69\x61\x6c\x69\x7a\x61\x74\x69\x6f\x6e\x20\x64\x6f\x6e\x65"
                ),
                x.hideWelcomeNotice ||
                  pa(function () {
                    n.startPlay(
                      [
                        {
                          filename:
                            "\x5f\x65\x6d\x70\x74\x79\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
                          duration: 30,
                        },
                      ],
                      null,
                      "\x31"
                    );
                  }),
                (ma = setTimeout(
                  function () {
                    (la = !1), oa();
                  },
                  na ? 1e4 : 3e4
                )),
                (z = !0),
                b.startClient(),
                fb();
            }
          ),
          (qa = !1),
          (ra = function (a) {
            var b, d, e, g, h;
            return (
              s.log(
                "\x69\x6e\x66\x6f",
                "\x2a\x2a\x2a\x2a\x20\x55\x70\x64\x61\x74\x69\x6e\x67\x20\x70\x69\x20\x73\x6f\x66\x74\x77\x61\x72\x65\x20\x2a\x2a\x2a\x2a"
              ),
              qa
                ? void s.log(
                    "\x69\x6e\x66\x6f",
                    "\x2a\x2a\x2a\x2a\x20\x49\x67\x6e\x6f\x72\x69\x6e\x67\x20\x70\x69\x20\x75\x70\x64\x61\x74\x65\x20\x73\x65\x63\x6f\x6e\x64\x20\x63\x6c\x69\x63\x6b\x20\x2a\x2a\x2a\x2a"
                  )
                : (a ||
                    (a = "\x70\x69\x2d\x69\x6d\x61\x67\x65\x2e\x7a\x69\x70"),
                  (b = process.version.slice(
                    1,
                    process.version.indexOf("\x2e")
                  )),
                  b > 0 && 10 > b
                    ? (a =
                        a.slice(0, a.lastIndexOf("\x2e")) +
                        "\x2d\x76\x36\x2e\x7a\x69\x70")
                    : b > 10 &&
                      (a =
                        a.slice(0, a.lastIndexOf("\x2e")) +
                        "\x2d\x76\x31\x34\x2e\x7a\x69\x70"),
                  p.storeEvent(
                    "\x70\x6c\x61\x79\x65\x72",
                    "\x6f\x74\x68\x65\x72",
                    "\x73\x77\x75\x70\x64\x61\x74\x65\x3a\x20" + a
                  ),
                  (qa = !0),
                  f.chmodSync(
                    "\x6d\x69\x73\x63\x2f\x75\x70\x67\x72\x61\x64\x65\x2e\x73\x68",
                    "\x37\x35\x35"
                  ),
                  (d = c(
                    "\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73"
                  ).spawn),
                  (e = f.openSync(
                    "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x66\x6f\x72\x65\x76\x65\x72\x2e\x6c\x6f\x67",
                    "\x61"
                  )),
                  (g = f.openSync(
                    "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x66\x6f\x72\x65\x76\x65\x72\x2e\x6c\x6f\x67",
                    "\x61"
                  )),
                  (h = d(
                    "\x6d\x69\x73\x63\x2f\x75\x70\x67\x72\x61\x64\x65\x2e\x73\x68",
                    [
                      m.config_server +
                        "\x2f\x72\x65\x6c\x65\x61\x73\x65\x73\x2f" +
                        a,
                      a,
                    ],
                    { detached: !0, stdio: ["\x69\x67\x6e\x6f\x72\x65", e, g] }
                  )),
                  s.testLog("\x75\x70\x67\x72\x61\x64\x65", a),
                  void h.unref())
            );
          }),
          (sa = null),
          (wa = !1),
          (xa = !1),
          (ya = !1),
          (za = !1),
          (Aa = !1),
          (Ba = !0),
          (Ca = 4),
          (b.startClient = function (a, b) {
            if (
              (a && (ua = a),
              b ? (va = b) : a && ((va = a), (wa = !0)),
              ua && z)
            ) {
              if (sa)
                try {
                  sa.removeAllListeners(), sa.disconnect();
                } catch (c) {
                  s.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x20\x65\x78\x63\x65\x70\x74\x69\x6f\x6e\x3a\x20" +
                      c.code
                  );
                }
              Fa(),
                ya ? (wa = !1) : xa && (wa = !0),
                (za = !1),
                wa
                  ? ((sa = va.connect(m.config_server, {
                      "force new connection": !0,
                    })),
                    Ga())
                  : /^(https?|wss?):\/\//.test(m.config_server)
                  ? Ga(m.config_server)
                  : i(
                      "\x68\x74\x74\x70\x73\x3a\x2f\x2f" +
                        m.config_server +
                        "\x2f\x61\x70\x69\x2f\x6c\x61\x62\x65\x6c\x73",
                      function (a, b) {
                        b && b.statusCode
                          ? Ga(
                              "\x68\x74\x74\x70\x73\x3a\x2f\x2f" +
                                m.config_server
                            )
                          : (s.log(
                              "\x69\x6e\x66\x6f",
                              "\x2a\x2a\x2a\x20\x74\x72\x79\x69\x6e\x67\x20\x77\x69\x74\x68\x20\x68\x74\x74\x70\x20\x70\x72\x6f\x74\x6f\x63\x6f\x6c\x20\x66\x6f\x72\x20\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x20\x61\x73\x20\x68\x74\x74\x70\x73\x20\x74\x6f\x20\x73\x65\x72\x76\x65\x72\x20\x72\x65\x74\x75\x72\x6e\x65\x64\x20\x73\x74\x61\x74\x75\x73\x20\x75\x6e\x64\x65\x66\x69\x6e\x65\x64"
                            ),
                            Ga(
                              "\x68\x74\x74\x70\x3a\x2f\x2f" + m.config_server
                            ));
                      }
                    );
            }
          }),
          (Ia = 0),
          (Ja = function () {
            t.wlanReboot(function () {
              b.startClient();
            });
          }),
          (b.uploadLog = function (a, b) {
            Ea() &&
              (sa.emit("\x75\x70\x6c\x6f\x61\x64", x.cpuSerialNumber, a, b),
              s.testLog("\x75\x70\x6c\x6f\x61\x64", a));
          }),
          (b.statusLog = function () {
            var a = { connected: Ea(), tvUptime: w.cecTvStatus };
            return (
              w.currentPlaylist &&
                (a[
                  "\x70\x6c\x61\x79\x6c\x69\x73\x74\x5f" +
                    w.currentPlaylist.replace(/[^a-zA-Z0-9]/g, "\x5f")
                ] = 1),
              a
            );
          }),
          (Pa = 0),
          (b.playlistMedia = function (a, b) {
            var c = a.params.action,
              d = Sa(c, !0);
            r.sendSuccess(b, "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20" + c, d);
          }),
          (b.piswupdate = function (a, b) {
            return (
              ra(),
              r.sendSuccess(
                b,
                "\x50\x6c\x61\x79\x65\x72\x20\x77\x69\x6c\x6c\x20\x75\x70\x64\x61\x74\x65\x20\x74\x68\x65\x20\x73\x6f\x66\x74\x77\x61\x72\x65\x20\x26\x20\x72\x65\x62\x6f\x6f\x74"
              )
            );
          }),
          (Ta = function (a, b, c, d) {
            var e;
            f.readFile(a, "\x75\x74\x66\x38", function (a, g) {
              a
                ? d(a)
                : ((e = k.compile(g)({ pageData: b })),
                  f.writeFile(c, e, function (a) {
                    a
                      ? d(a)
                      : (s.log(
                          "\x69\x6e\x66\x6f",
                          "\x43\x72\x65\x61\x74\x65\x64\x3a\x20" + c
                        ),
                        d());
                  }));
            });
          }),
          (jb = null),
          (sb = !1),
          (tb = function () {
            (O = !1), (sb = !1);
          }),
          process
            .on("\x53\x49\x47\x55\x53\x52\x32", function () {
              var b = function () {
                var a = bb();
                (w.currentPlaylist = a.selectedPlaylist),
                  (w.playlistIndex = a.index),
                  (L = a.otherSelectedPlaylists),
                  ca(function () {
                    a.isEventPlaylist &&
                    I[a.index].settings.event &&
                    I[a.index].settings.event.duration > 1
                      ? setTimeout(function () {
                          tb(), b();
                        }, 1e3 * I[a.index].settings.event.duration)
                      : (sb = !1);
                  });
              };
              return sb
                ? void s.log(
                    "\x69\x6e\x66\x6f",
                    "\x53\x49\x47\x55\x53\x52\x32\x20\x65\x76\x65\x6e\x74\x2c\x20\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x64\x75\x65\x20\x74\x6f\x20\x64\x65\x62\x6f\x75\x6e\x63\x65"
                  )
                : (s.log(
                    "\x69\x6e\x66\x6f",
                    "\x53\x49\x47\x55\x53\x52\x32\x20\x65\x76\x65\x6e\x74\x2c\x20\x73\x63\x68\x65\x64\x75\x6c\x69\x6e\x67\x20\x65\x76\x65\x6e\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"
                  ),
                  (sb = !0),
                  void (I.length > 0
                    ? ((O = !O), b())
                    : (s.log(
                        "\x69\x6e\x66\x6f",
                        "\x6e\x6f\x20\x65\x76\x65\x6e\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2c\x20\x63\x6f\x6e\x74\x69\x6e\x75\x69\x6e\x67\x20\x74\x6f\x20\x70\x6c\x61\x79\x20\x6e\x6f\x72\x6d\x61\x6c\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"
                      ),
                      q.showUi())));
            })
            .on("\x65\x78\x69\x74", function () {
              s.log(
                "\x64\x65\x62\x75\x67",
                "\x45\x78\x69\x74\x69\x6e\x67\x20\x6e\x6f\x64\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x66\x6f\x72\x20\x72\x65\x73\x74\x61\x72\x74"
              );
            }),
          (b.uploadForeverLog = function () {});
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x76\x69\x65\x77\x65\x72\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        function Mb(a) {
          e(
            G.systemScript +
              "\x2d\x2d\x63\x6c\x65\x61\x6e\x2d\x63\x68\x72\x6f\x6d\x65\x2d\x73\x65\x73\x73\x69\x6f\x6e",
            function (b, c, d) {
              (b || d) &&
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x72\x65\x73\x74\x6f\x72\x65\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x66\x6c\x61\x67" +
                    b +
                    "\x20\x20" +
                    d
                ),
                a();
            }
          );
        }
        function Nb() {
          (T = !0), clearTimeout(V);
        }
        function Ob() {
          var a, b, c, g;
          if (((S = !1), (T = !1), O)) {
            if ($)
              return void e(
                "\x6b\x69\x6c\x6c\x61\x6c\x6c\x20\x2d\x73\x20\x39\x20\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
                function () {
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x70\x72\x65\x76\x69\x6f\x75\x73\x20\x63\x68\x72\x6f\x6d\x65\x20\x62\x72\x6f\x77\x73\x65\x72\x2c\x20" +
                      (O && O.pid)
                  );
                }
              );
            i.log(
              "\x69\x6e\x66\x6f",
              "\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x70\x72\x65\x76\x69\x6f\x75\x73\x20\x75\x7a\x62\x6c\x3a" +
                O.pid
            ),
              O.kill();
          }
          (Na = !0),
            (Oa = !1),
            Ha.indexOf("\x63\x75\x73\x74\x6f\x6d") >= 0
              ? ((b = f.existsSync(G.mediaPath + Ka)),
                (a = b
                  ? G.mediaPath + Ka
                  : G.root +
                    "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c"))
              : (a =
                  G.root +
                  "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f" +
                  Ha +
                  "\x2e\x68\x74\x6d\x6c"),
            (c = [
              "\x2d\x2d\x61\x6c\x6c\x6f\x77\x2d\x66\x69\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x66\x72\x6f\x6d\x2d\x66\x69\x6c\x65\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x63\x72\x61\x73\x68\x65\x64\x2d\x62\x75\x62\x62\x6c\x65",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x69\x6e\x66\x6f\x62\x61\x72\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x64\x65\x76\x69\x63\x65\x2d\x64\x69\x73\x63\x6f\x76\x65\x72\x79\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x71\x75\x69\x63",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x73\x3d\x54\x72\x61\x6e\x73\x6c\x61\x74\x65\x55\x49",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x6f\x70\x75\x70\x2d\x62\x6c\x6f\x63\x6b\x69\x6e\x67",
              "\x2d\x2d\x75\x73\x65\x72\x2d\x64\x61\x74\x61\x2d\x64\x69\x72\x3d\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x63\x6f\x6e\x66\x69\x67\x2f\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2f\x44\x65\x66\x61\x75\x6c\x74",
              "\x2d\x2d\x65\x6e\x61\x62\x6c\x65\x2d\x66\x61\x73\x74\x2d\x75\x6e\x6c\x6f\x61\x64",
              "\x2d\x2d\x65\x6e\x61\x62\x6c\x65\x2d\x74\x63\x70\x2d\x66\x61\x73\x74\x2d\x6f\x70\x65\x6e",
              "\x2d\x2d\x6e\x6f\x65\x72\x72\x64\x69\x61\x6c\x6f\x67\x73",
              "\x2d\x2d\x6e\x6f\x2d\x66\x69\x72\x73\x74\x2d\x72\x75\x6e",
              "\x2d\x2d\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x6f\x2d\x64\x65\x74\x65\x63\x74",
              "\x2d\x2d\x73\x74\x61\x72\x74\x2d\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e",
              "\x2d\x2d\x73\x74\x61\x72\x74\x2d\x6d\x61\x78\x69\x6d\x69\x7a\x65\x64\x20",
              "\x2d\x2d\x64\x69\x73\x6b\x2d\x63\x61\x63\x68\x65\x2d\x73\x69\x7a\x65\x3d\x33\x30\x30\x30\x30\x30\x30\x30",
              "\x2d\x2d\x6b\x69\x6f\x73\x6b",
              "\x2d\x2d\x6b\x69\x6f\x73\x6b\x2d\x70\x72\x69\x6e\x74\x69\x6e\x67",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x69\x6e\x63\x68",
              "\x2d\x2d\x6f\x76\x65\x72\x73\x63\x72\x6f\x6c\x6c\x2d\x68\x69\x73\x74\x6f\x72\x79\x2d\x6e\x61\x76\x69\x67\x61\x74\x69\x6f\x6e\x3d\x30",
              "\x2d\x2d\x61\x75\x74\x6f\x70\x6c\x61\x79\x2d\x70\x6f\x6c\x69\x63\x79\x3d\x6e\x6f\x2d\x75\x73\x65\x72\x2d\x67\x65\x73\x74\x75\x72\x65\x2d\x72\x65\x71\x75\x69\x72\x65\x64",
              "\x2d\x2d\x63\x68\x65\x63\x6b\x2d\x66\x6f\x72\x2d\x75\x70\x64\x61\x74\x65\x2d\x69\x6e\x74\x65\x72\x76\x61\x6c\x3d\x31",
              "\x2d\x2d\x73\x69\x6d\x75\x6c\x61\x74\x65\x2d\x63\x72\x69\x74\x69\x63\x61\x6c\x2d\x75\x70\x64\x61\x74\x65",
              a,
            ]),
            (O = $
              ? d(
                  "\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
                  c,
                  { stdio: "\x70\x69\x70\x65" }
                )
              : "\x76\x30\x2e\x39\x2e\x30" == Z
              ? d(
                  "\x75\x7a\x62\x6c",
                  [
                    "\x2d\x2d\x67\x65\x6f\x6d\x65\x74\x72\x79\x3d\x6d\x61\x78\x69\x6d\x69\x7a\x65\x64",
                    "\x2d\x63",
                    "\x2d",
                    a,
                    "\x2d\x70",
                  ],
                  { stdio: "\x70\x69\x70\x65" }
                )
              : d(
                  "\x75\x7a\x62\x6c",
                  [
                    "\x2d\x67",
                    "\x6d\x61\x78\x69\x6d\x69\x7a\x65\x64",
                    "\x2d\x63",
                    "\x2d",
                    "\x2d\x2d\x75\x72\x69",
                    a,
                    "\x2d\x70",
                  ],
                  { stdio: "\x70\x69\x70\x65" }
                )),
            i.log(
              "\x69\x6e\x66\x6f",
              "\x42\x72\x6f\x77\x73\x65\x72\x20\x6c\x6f\x61\x64\x69\x6e\x67\x20" +
                a +
                "\x3b\x20\x52\x75\x6e\x6e\x69\x6e\x67\x20\x61\x73\x20\x50\x49\x44\x20" +
                O.pid
            ),
            O.on("\x65\x72\x72\x6f\x72", function (a) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x62\x72\x6f\x77\x73\x65\x72\x20\x73\x70\x61\x77\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                  a
              );
            }),
            O &&
              (O.once("\x65\x78\x69\x74", function (a, b) {
                (O = null),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x62\x72\x6f\x77\x73\x65\x72\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x77\x69\x74\x68\x20\x63\x6f\x64\x65\x20" +
                      a +
                      "\x20\x61\x6e\x64\x20\x73\x69\x67\x6e\x61\x6c\x20" +
                      b
                  ),
                  $ &&
                    Mb(function () {
                      Ob();
                    });
              }),
              O.stdout.on("\x64\x61\x74\x61", function (a) {
                var b, c;
                $ ||
                  ((b = a.toString("\x75\x74\x66\x38")),
                  (c = T),
                  X &&
                    (0 == X.indexOf("\x75\x72\x69") &&
                      b.indexOf(
                        "\x4c\x4f\x41\x44\x5f\x46\x49\x4e\x49\x53\x48"
                      ) >= 0 &&
                      Nb(),
                    0 != X.indexOf("\x75\x72\x69") &&
                      b.indexOf(
                        "\x43\x4f\x4d\x4d\x41\x4e\x44\x5f\x45\x58\x45\x43\x55\x54\x45\x44"
                      ) >= 0 &&
                      Nb()));
              }),
              O.stderr.on("\x64\x61\x74\x61", function (a) {
                i.log(
                  "\x69\x6e\x66\x6f",
                  "\x62\x72\x6f\x77\x73\x65\x72\x20\x73\x74\x64\x65\x72\x72\x3a\x20" +
                    a.toString("\x75\x74\x66\x38")
                );
              }),
              O.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
                i.log(
                  "\x69\x6e\x66\x6f",
                  "\x62\x72\x6f\x77\x73\x65\x72\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                    a
                );
              }),
              $
                ? (La.currentTicker && dc(La.currentTicker), Pb())
                : ((g = Y
                    ? "\x2f\x6d\x69\x73\x63\x2f\x75\x7a\x62\x6c\x72\x63\x2d\x76\x32"
                    : "\x2f\x6d\x69\x73\x63\x2f\x75\x7a\x62\x6c\x72\x63"),
                  O.stdin.write(
                    f.readFileSync(G.root + g) + "\n",
                    function (a) {
                      a &&
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x75\x7a\x62\x6c\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a
                        ),
                        Nb(),
                        j.getUzblBrowserCookies(O),
                        La.currentTicker && dc(La.currentTicker),
                        Pb();
                    }
                  )));
        }
        function Pb(a) {
          (U = !0),
            (a = a || 0),
            Rb(
              "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x49\x6e\x69\x74\x69\x61\x6c\x50\x61\x72\x61\x6d\x65\x74\x65\x72\x73\x28" +
                Ua +
                "\x2c\x22" +
                Xa +
                "\x22\x2c" +
                Ya +
                "\x2c" +
                a +
                "\x2c" +
                Za +
                "\x2c\x22" +
                Va +
                "\x22\x2c" +
                (_ ? !1 : gb.showClock) +
                "\x2c" +
                gb.clockExtendedFormat +
                "\x2c" +
                gb.clockPosition +
                "\x2c" +
                Ra +
                "\x2c" +
                Sa +
                "\x29"
            );
        }
        function Rb(a) {
          if ((a && W.push(a), 0 == W.length))
            return void i.log(
              "\x69\x6e\x66\x6f",
              "\x42\x72\x6f\x77\x73\x65\x72\x3a\x20\x4e\x6f\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x74\x6f\x20\x69\x73\x73\x75\x65"
            );
          if (!T) return clearTimeout(Qb), void (Qb = setTimeout(Rb, 500));
          if (((T = !1), O))
            try {
              (X = W[0]),
                $
                  ? ((V = setTimeout(function () {
                      i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x43\x68\x72\x6f\x6d\x65\x3a\x20\x6e\x6f\x20\x63\x6f\x6d\x70\x6c\x65\x74\x69\x6f\x6e\x20\x65\x76\x65\x6e\x74\x3a\x20" +
                          X
                      ),
                        Ob(),
                        yc();
                    }, 1e4)),
                    hd(W[0]))
                  : ((V = setTimeout(function () {
                      (T = !0),
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x75\x7a\x62\x6c\x3a\x20\x6e\x6f\x20\x63\x6f\x6d\x70\x6c\x65\x74\x69\x6f\x6e\x20\x65\x76\x65\x6e\x74\x3a\x20" +
                            X
                        );
                    }, 3e3)),
                    Y &&
                      0 == W[0].indexOf("\x6a\x73") &&
                      (W[0] =
                        "\x6a\x73\x20\x70\x61\x67\x65\x20\x73\x74\x72\x69\x6e\x67\x20\x27" +
                        W[0].slice(3) +
                        "\x27"),
                    O.stdin.write(W[0] + "\n", function (a) {
                      a &&
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x75\x7a\x62\x6c\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a
                        );
                    }));
            } catch (b) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x62\x72\x6f\x77\x73\x65\x72\x20\x73\x74\x64\x69\x6e\x20\x77\x72\x69\x74\x65\x20\x65\x78\x63\x65\x70\x74\x69\x6f\x6e\x3a\x20" +
                  b.code
              );
            }
          else
            i.log(
              "\x77\x61\x72\x6e",
              "\x4e\x6f\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x69\x6e\x73\x74\x61\x6e\x63\x65\x2c\x20\x72\x65\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x62\x72\x6f\x77\x73\x65\x72"
            ),
              Ob();
          W.shift(), 0 == W.length ? (clearTimeout(Qb), (Qb = null)) : Rb();
        }
        function Ub(a) {
          clearTimeout(Sb),
            a &&
              !$ &&
              (Sb = setTimeout(function () {
                e(
                  "\x70\x73\x20\x61\x75\x78\x20\x7c\x67\x72\x65\x70\x20\x75\x7a\x62\x6c\x2d\x63\x6f\x72\x65\x7c\x61\x77\x6b\x20\x27\x7b\x70\x72\x69\x6e\x74\x20\x24\x34\x20\x7d\x27"
                )
                  .stdout.on("\x64\x61\x74\x61", function (a) {
                    Tb = parseInt(a) > 70;
                  })
                  .on("\x63\x6c\x6f\x73\x65", function () {
                    Ub(!0);
                  });
              }, 6e5));
        }
        function Vb(a, b, c, d) {
          var e = [
            "\x30\x30\x3a\x30\x30\x3a\x30\x30\x2c\x30\x30\x30\x20\x2d\x2d\x3e\x20\x30\x30\x3a\x30\x35\x3a\x30\x30\x2c\x30\x30\x30",
            b,
          ];
          i.log(
            "\x64\x65\x62\x75\x67",
            "\x77\x72\x69\x74\x69\x6e\x67\x20\x73\x72\x74\x20\x66\x69\x6c\x65\x2c\x20" +
              b
          ),
            f.writeFile(
              G.mediaPath + a + "\x2e\x73\x72\x74",
              e.join("\n"),
              function (a) {
                a &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x65\x72\x72\x6f\x72\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x73\x72\x74\x20\x66\x69\x6c\x65\x2c\x20" +
                      a
                  ),
                  d && d();
              }
            );
        }
        function Wb() {
          var b,
            c,
            a = 0;
          clearTimeout(ma),
            "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65" == L &&
              Ha.indexOf("\x70") >= 0 &&
              (a = -1 == Ha.indexOf("\x32\x37\x30") ? 90 : 270),
            Ha.indexOf("\x63\x75\x73\x74\x6f\x6d") >= 0
              ? ((c = f.existsSync(G.mediaPath + Ka)),
                (b = c
                  ? G.mediaPath + Ka
                  : G.root +
                    "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c"))
              : (b =
                  G.root +
                  "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f" +
                  Ha +
                  "\x2e\x68\x74\x6d\x6c"),
            Rb("\x75\x72\x69\x20" + b),
            Pb(a);
        }
        function Xb() {
          clearTimeout(ma),
            Rb(
              "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x6c\x65\x61\x72\x5a\x6f\x6e\x65\x41\x6c\x6c\x28\x29"
            ),
            j.removeWebLinkView();
        }
        function Yb() {
          clearTimeout(ma),
            Rb(
              "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x6c\x65\x61\x72\x5a\x6f\x6e\x65\x28\x22\x6d\x61\x69\x6e\x22\x29"
            ),
            j.removeWebLinkView("\x6d\x61\x69\x6e");
        }
        function Zb(a) {
          Rb(
            "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x6c\x65\x61\x72\x5a\x6f\x6e\x65\x28\x22" +
              a +
              "\x22\x29"
          );
        }
        function ac(a) {
          var b = encodeURIComponent(a),
            c = b.replace(/%25([0-9a-f]{2})/i, "\x25\x24\x31");
          return c;
        }
        function bc(a) {
          "\x31\x30\x38\x30\x70" == J && (a += 2),
            "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65" == L &&
            Ha.indexOf("\x70") >= 0
              ? ((pa = -1 == Ha.indexOf("\x32\x37\x30") ? 90 : 270), (a += 4))
              : (pa = 0),
            (Cb = a),
            (Bb = Pa
              ? Pa
              : Hb(Ha, a % 2, "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65" != L)
                  .main),
            k.getDisplayProperties(function (a, b) {
              b && b.indexOf("\x4e\x54\x53\x43") >= 0
                ? ((Gb = Eb), (Bb = Eb))
                : b && b.indexOf("\x50\x41\x4c") >= 0 && ((Gb = Fb), (Bb = Fb));
            });
        }
        function cc() {
          M
            ? (bc(0),
              O &&
                !Na &&
                ((Na = !0),
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x6c\x65\x61\x72\x54\x69\x63\x6b\x65\x72\x28\x29"
                )),
              (gb.tickerEnable = !1),
              Mc(),
              aa && Oc())
            : dc("\x20");
        }
        function dc(a) {
          var b = La.behavior || "\x73\x6c\x69\x64\x65",
            c = La.textSpeed || 3;
          M ||
            ((b = "\x73\x63\x72\x6f\x6c\x6c"),
            "\x73\x6c\x69\x64\x65" != b && (a += N)),
            (_ || aa) && 0 == b.indexOf("\x6f\x70\x65\x6e\x76\x67")
              ? (bc(_ ? 0 : 1),
                (gb.tickerEnable = !0),
                (gb.tickerX = La.tickerX),
                (gb.tickerY = La.tickerY),
                (gb.tickerWidth = La.tickerWidth),
                (gb.tickerSpeed = c),
                (gb.tickerDir =
                  "\x6c\x65\x66\x74" == b.replace(/openvg_/, "") ? 0 : 1),
                (gb.tickerFontSize = La.tickerFontSize),
                (gb.tickerText = a),
                O &&
                  !Na &&
                  ((Na = !0),
                  Rb(
                    "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x6c\x65\x61\x72\x54\x69\x63\x6b\x65\x72\x28\x29"
                  )))
              : ("\x6f\x70\x65\x6e\x76\x67\x5f\x6c\x65\x66\x74" == b
                  ? (b = "\x73\x63\x72\x6f\x6c\x6c")
                  : "\x6f\x70\x65\x6e\x76\x67\x5f\x72\x69\x67\x68\x74" == b &&
                    (b = "\x73\x63\x72\x6f\x6c\x6c\x52\x69\x67\x68\x74"),
                (Na = !1),
                (gb.tickerEnable = !1),
                bc(1),
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x54\x69\x63\x6b\x65\x72\x28\x22" +
                    ac(a) +
                    "\x22\x2c\x22" +
                    b +
                    "\x22\x2c\x22" +
                    c +
                    "\x22\x29"
                )),
            Mc(),
            aa && Oc();
        }
        function fc(a, c) {
          var d = function (b) {
            b &&
              (ec = setTimeout(function () {
                b > 1 && fc(a, b - 1);
              }, 1e3));
          };
          clearTimeout(ec),
            (gb.eMsgCmd = v),
            (gb.eMsg =
              "\x50\x6c\x61\x79\x69\x6e\x67\x20" +
              (c
                ? "\x28\x64\x75\x72\x61\x74\x69\x6f\x6e\x3a\x20" +
                  c +
                  "\x20\x29\x20"
                : "") +
              a),
            (gb.eMsgHorizontal = p),
            (gb.eMsgVertical = u),
            aa
              ? b.setEmergencyMessage(
                  gb.eMsg,
                  gb.eMsgHorizontal,
                  gb.eMsgVertical
                )
              : Mc(),
            d(c);
        }
        function hc(a) {
          Rb(
            "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x68\x61\x6e\x67\x65\x54\x69\x63\x6b\x65\x72\x53\x74\x79\x6c\x65\x28\x22" +
              a +
              "\x22\x29"
          );
        }
        function ic(a) {
          Rb(
            "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x63\x68\x61\x6e\x67\x65\x54\x69\x63\x6b\x65\x72\x48\x65\x69\x67\x68\x74\x28\x22" +
              a +
              "\x22\x29"
          );
        }
        function jc(a) {
          if (a) {
            var b = a.split("\x20"),
              c = b[2] - b[0],
              d = b[3] - b[1],
              e = b[0],
              f = b[1];
            return c + "\x78" + d + "\x2b" + e + "\x2b" + f;
          }
        }
        function kc(a, b) {
          function c(a) {
            return b ? a : jc(a);
          }
          if ((Pa && !Qa) || Gb || !a) return c(Bb);
          var d = "\x31";
          return (
            Ha.indexOf("\x70\x32\x37\x30") >= 0
              ? (d = "\x32\x61\x70\x32\x37\x30")
              : Ha.indexOf("\x70") >= 0 && (d = "\x32\x61\x70"),
            c(Hb(d, Cb % 2, "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65" != L).main)
          );
        }
        function lc(a, b) {
          function c(a) {
            return a ? (b ? a : jc(a)) : void 0;
          }
          return c(
            Ta[a]
              ? Ta[a]
              : Hb(Ha, Cb % 2, "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65" != L)[a]
          );
        }
        function mc() {
          return Gb
            ? "\x6c\x6f\x63\x61\x6c"
            : hb.playing
            ? "\x68\x64\x6d\x69"
            : "\x62\x6f\x74\x68";
        }
        function nc(a, b, c, e, f, g, h, j) {
          var n,
            o,
            p,
            q,
            k = Fa,
            l = !1,
            m = kb ? "\x6d\x70\x76" : "\x6f\x6d\x78";
          kb
            ? ((n = [
                "\x6d\x70\x76",
                "\x2d\x2d\x72\x70\x69\x2d\x6f\x73\x64\x3d\x6e\x6f",
                "\x2d\x2d\x76\x69\x64\x65\x6f\x2d\x72\x6f\x74\x61\x74\x65\x3d" +
                  pa,
                "\x2d\x2d\x67\x65\x6f\x6d\x65\x74\x72\x79\x3d" + kc(c, !1),
                "\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x3d" + tb,
              ]),
              Array.isArray(a) ? (n = n.concat(a)) : n.push(a))
            : ((n = [
                "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
                "\x2d\x2d\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e",
                pa,
                "\x2d\x2d\x77\x69\x6e",
                kc(c, !0),
                "\x2d\x2d\x76\x6f\x6c",
                sb,
                "\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64",
                "\x2d\x6f",
                mc(),
                a,
              ]),
              j &&
                n.push(
                  "\x2d\x2d\x61\x76\x64\x69\x63\x74",
                  "\x72\x74\x73\x70\x5f\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x74\x63\x70"
                )),
            $a
              ? kb
                ? n.push("\x2d\x2d\x6b\x65\x65\x70\x61\x73\x70\x65\x63\x74")
                : n.push(
                    "\x2d\x2d\x61\x73\x70\x65\x63\x74\x2d\x6d\x6f\x64\x65",
                    "\x6c\x65\x74\x74\x65\x72\x62\x6f\x78"
                  )
              : kb &&
                n.push(
                  "\x2d\x2d\x6e\x6f\x2d\x6b\x65\x65\x70\x61\x73\x70\x65\x63\x74"
                ),
            f || ub
              ? kb
                ? n.push("\x2d\x2d\x6d\x75\x74\x65")
                : n.push("\x2d\x6e", "\x2d\x31")
              : (sc(), (na = a), (oa = !1), (l = !0)),
            kb &&
              lb &&
              n.push(
                "\x2d\x2d\x61\x75\x64\x69\x6f\x2d\x64\x65\x6c\x61\x79\x3d" + lb
              ),
            h &&
              !kb &&
              n.push(
                "\x2d\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73",
                a + "\x2e\x73\x72\x74"
              ),
            e &&
              ((o = parseInt(e / 3600)),
              (p = parseInt((e - 60 * o) / 60)),
              (q = e - 60 * (60 * o + p)),
              10 > o && (o = "\x30" + o),
              10 > p && (p = "\x30" + p),
              10 > q && (q = "\x30" + q),
              kb
                ? n.push(
                    "\x2d\x2d\x73\x74\x61\x72\x74\x3d\x2b" +
                      o +
                      "\x3a" +
                      p +
                      "\x3a" +
                      q
                  )
                : n.push("\x2d\x2d\x70\x6f\x73", o + "\x3a" + p + "\x3a" + q)),
            pb ||
              fb ||
              !(
                (1 == Aa.length &&
                  Aa[0].filename &&
                  Aa[0].filename.match(G.videoRegex)) ||
                (kb && g)
              ) ||
              (kb && g && Aa.length > 1
                ? n.push(
                    "\x2d\x2d\x6c\x6f\x6f\x70\x2d\x70\x6c\x61\x79\x6c\x69\x73\x74"
                  )
                : n.push("\x2d\x2d\x6c\x6f\x6f\x70"),
              setTimeout(function () {
                clearTimeout(ja);
              }, 0)),
            (ga = d("\x73\x75\x64\x6f", n, { stdio: "\x70\x69\x70\x65" })),
            ga.once("\x65\x78\x69\x74", function (a, c) {
              i.log(
                "\x64\x65\x62\x75\x67",
                "\x6f\x6d\x78\x20\x65\x78\x69\x74\x20\x65\x76\x65\x6e\x74\x20\x77\x69\x74\x68\x20\x63\x6f\x64\x65\x20" +
                  a +
                  "\x2c" +
                  c
              ),
                l && ((oa = !0), (na = "")),
                b && (clearTimeout(ja), b(k));
            }),
            ga.stdout.on("\x64\x61\x74\x61", function () {}),
            ga.stderr.on("\x64\x61\x74\x61", function () {}),
            ga.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                m +
                  "\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                  a +
                  "\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a"
              );
            });
        }
        function oc(a, b) {
          if (((b = b || ga), rb[a] && b && b.stdin))
            try {
              b.stdin.write(rb[a], function (b) {
                b &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      b +
                      "\x2c" +
                      a
                  );
              });
            } catch (c) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x73\x74\x64\x69\x6e\x20\x77\x72\x69\x74\x65\x20\x65\x78\x63\x65\x70\x74\x69\x6f\x6e\x3a\x20" +
                  c
              );
            }
          else
            i.log(
              "\x65\x72\x72\x6f\x72",
              "\x4e\x6f\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x69\x6e\x73\x74\x61\x6e\x63\x65\x20\x6f\x72\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x3a\x20" +
                a
            );
        }
        function pc(a, b, c, d, e, f, g, h, j) {
          return (
            d ? Xb() : Yb(),
            o(ga)
              ? (i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x6e\x65\x65\x64\x20\x74\x6f\x20\x6b\x69\x6c\x6c\x20\x6f\x6d\x78\x50\x72\x6f\x63\x65\x73\x73\x20\x74\x6f\x20\x73\x74\x61\x72\x74\x20\x61\x6e\x6f\x74\x68\x65\x72"
                ),
                c
                  ? (ga.stdin.pause(),
                    n(ga.pid, function () {
                      setTimeout(function () {
                        nc(a, b, d, e, f, g, h, j);
                      }, 250);
                    }),
                    !0)
                  : !1)
              : (nc(a, b, d, e, f, g, h, j), !0)
          );
        }
        function qc() {
          return o(ga) ? (ga.stdin.pause(), n(ga.pid), !0) : !1;
        }
        function rc(a, b) {
          var c = Fa,
            e = !1,
            f = [
              "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
              "\x2d\x2d\x76\x6f\x6c",
              sb,
              "\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64",
              "\x2d\x2d\x61\x75\x64\x69\x6f\x5f\x66\x69\x66\x6f",
              "\x33\x30",
              "\x2d\x2d\x61\x75\x64\x69\x6f\x5f\x71\x75\x65\x75\x65",
              "\x30\x2e\x36",
              "\x2d\x2d\x74\x68\x72\x65\x73\x68\x6f\x6c\x64",
              "\x32",
              "\x2d\x2d\x74\x69\x6d\x65\x6f\x75\x74",
              "\x33\x30",
              "\x2d\x6f",
              mc(),
              a,
            ];
          return oa
            ? (sc(),
              (na = a),
              (oa = !1),
              (e = !0),
              b || f.push("\x2d\x2d\x6c\x6f\x6f\x70"),
              o(ha) && (ha.stdin.pause(), n(ha.pid)),
              (ha = d("\x73\x75\x64\x6f", f, { stdio: "\x70\x69\x70\x65" })),
              ha.once("\x65\x78\x69\x74", function () {
                clearTimeout(ka), e && ((na = ""), (oa = !0)), b && b(c);
              }),
              void ha.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x61\x75\x64\x69\x6f\x20\x6f\x6d\x78\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                    a +
                    "\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a"
                );
              }))
            : void i.log(
                "\x77\x61\x72\x6e",
                "\x41\x75\x64\x69\x6f\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x69\x73\x20\x6e\x6f\x74\x20\x66\x72\x65\x65\x20" +
                  a
              );
        }
        function sc() {
          return (na = ""), o(ha) ? (ha.stdin.pause(), n(ha.pid), !0) : !1;
        }
        function tc(a, b, c, e, f, g) {
          function p(a) {
            m || 143 == a || ((m = !0), c(h));
          }
          var l,
            m,
            h = Ga[a],
            j = !1,
            k = c ? !1 : !0;
          return (
            (c = c || function () {}),
            -1 == Jb.indexOf(a)
              ? c()
              : lc(a, !0)
              ? (kb
                  ? (l = [
                      "\x6d\x70\x76",
                      "\x2d\x2d\x72\x70\x69\x2d\x6f\x73\x64\x3d\x6e\x6f",
                      "\x2d\x2d\x76\x69\x64\x65\x6f\x2d\x72\x6f\x74\x61\x74\x65\x3d" +
                        pa,
                      "\x2d\x2d\x67\x65\x6f\x6d\x65\x74\x72\x79\x3d" +
                        lc(a, !1),
                      "\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x3d" + tb,
                      "\x2d\x2d\x72\x70\x69\x2d\x6c\x61\x79\x65\x72\x3d\x35",
                      b,
                    ])
                  : ((l = [
                      "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
                      "\x2d\x2d\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e",
                      pa,
                      "\x2d\x2d\x77\x69\x6e",
                      lc(a, !0),
                      "\x2d\x2d\x76\x6f\x6c",
                      sb,
                      "\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64",
                      "\x2d\x6f",
                      mc(),
                      "\x2d\x2d\x6c\x61\x79\x65\x72",
                      "\x35",
                      b,
                    ]),
                    f &&
                      l.push(
                        "\x2d\x2d\x61\x76\x64\x69\x63\x74",
                        "\x72\x74\x73\x70\x5f\x74\x72\x61\x6e\x73\x70\x6f\x72\x74\x3a\x74\x63\x70"
                      )),
                $a
                  ? kb
                    ? l.push("\x2d\x2d\x6b\x65\x65\x70\x61\x73\x70\x65\x63\x74")
                    : l.push(
                        "\x2d\x2d\x61\x73\x70\x65\x63\x74\x2d\x6d\x6f\x64\x65",
                        "\x6c\x65\x74\x74\x65\x72\x62\x6f\x78"
                      )
                  : kb &&
                    l.push(
                      "\x2d\x2d\x6e\x6f\x2d\x6b\x65\x65\x70\x61\x73\x70\x65\x63\x74"
                    ),
                e || !oa || ub
                  ? kb
                    ? l.push("\x2d\x2d\x6d\x75\x74\x65")
                    : l.push("\x2d\x6e", "\x2d\x31")
                  : (sc(), (oa = !1), (j = !0), (na = b)),
                kb &&
                  lb &&
                  l.push(
                    "\x2d\x2d\x61\x75\x64\x69\x6f\x2d\x64\x65\x6c\x61\x79\x3d" +
                      lb
                  ),
                k && l.push("\x2d\x2d\x6c\x6f\x6f\x70"),
                g &&
                  !kb &&
                  l.push(
                    "\x2d\x2d\x73\x75\x62\x74\x69\x74\x6c\x65\x73",
                    b + "\x2e\x73\x72\x74"
                  ),
                o(ia[a]) && (ia[a].stdin.pause(), n(ia[a].pid)),
                (ia[a] = d("\x73\x75\x64\x6f", l, {
                  stdio: "\x70\x69\x70\x65",
                })),
                Zb(a),
                ia[a].stdin.setEncoding("\x75\x74\x66\x2d\x38"),
                ia[a].stdin.on("\x65\x72\x72\x6f\x72", function () {}),
                ia[a].stdout.on("\x64\x61\x74\x61", function () {}),
                ia[a].stderr.on("\x64\x61\x74\x61", function () {}),
                ia[a].on("\x65\x78\x69\x74", function (a) {
                  j && ((oa = !0), (na = "")), p(a);
                }),
                ia[a].on("\x65\x72\x72\x6f\x72", function (b) {
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x65\x72\x72\x6f\x72\x20\x65\x76\x65\x6e\x74\x20\x66\x6f\x72\x20" +
                      a +
                      "\x20\x77\x69\x74\x68\x20\x63\x6f\x64\x65\x20" +
                      b +
                      "\x2c" +
                      h
                  );
                }),
                void (m = !1))
              : c()
          );
        }
        function uc(a, b) {
          b = b || function () {};
          var c = !1,
            d = function () {
              c || ((c = !0), b());
            };
          o(ia[a]) ? (ia[a].stdin.pause(), n(ia[a].pid, d)) : d();
        }
        function vc(a) {
          var b = c("\x2e\x2f\x70\x69\x2d\x6d\x61\x69\x6e").getSettingsData();
          return (
            a &&
              ((a = a.replace(/__cpuid__/g, b.cpuSerialNumber || "\x4e\x41")),
              (a = a.replace(/__ipaddress__/g, b.myIpAddress || "\x4e\x41")),
              (a = a.replace(/__playername__/g, b.name || "\x4e\x41")),
              (a = a.replace(/__group__/g, b.secret || "\x4e\x41"))),
            a
          );
        }
        function wc(a, b) {
          f.readFile(a, "\x75\x74\x66\x38", function (c, d) {
            if (c)
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x55\x52\x4c\x20\x66\x69\x6c\x65\x20" +
                  a
              ),
                b(
                  "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x55\x52\x4c\x20\x66\x69\x6c\x65"
                );
            else
              try {
                var e = JSON.parse(d);
                (e.link = vc(e.link)), b(null, e);
              } catch (f) {
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x55\x52\x4c\x20\x66\x69\x6c\x65\x20" +
                    a
                ),
                  console.log(f),
                  b(
                    "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x55\x52\x4c\x20\x66\x69\x6c\x65"
                  );
              }
          });
        }
        function xc(a, b, c, e) {
          function j() {
            ca && (l.keyTap("\x64\x6f\x77\x6e"), (f = setTimeout(j, c)));
          }
          var f, g, h;
          (c = 1e3 * c),
            (g = Fa),
            (h = ["\x2d\x73"]),
            h.push(a),
            yc(),
            e ? Xb() : Yb(),
            (ca = d("\x65\x76\x69\x6e\x63\x65", h, {
              stdio: "\x70\x69\x70\x65",
            })),
            ca &&
              i.log(
                "\x69\x6e\x66\x6f",
                "\x65\x76\x69\x6e\x63\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x73\x70\x61\x77\x6e\x65\x64\x20" +
                  h
              ),
            ca.stdin.setEncoding("\x75\x74\x66\x2d\x38"),
            ca.once("\x65\x78\x69\x74", function () {
              clearTimeout(f), b && b(g);
            }),
            ca.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x65\x76\x69\x6e\x63\x65\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                  a +
                  "\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a"
              );
            }),
            c && (f = setTimeout(j, c));
        }
        function yc() {
          clearTimeout(da), ca && (ca.kill(), (ca = null));
        }
        function zc() {
          for (
            var a = {
                filepath: [G.mediaPath + (Aa[Ca] && Aa[Ca].filename)],
                duration: parseInt(Aa[Ca].duration || 300),
                loopAll: 0 == Ca,
              },
              b = Ca;
            b < Aa.length - 1 &&
            ((b = (b + 1) % Aa.length),
            Aa[b] && Aa[b].filename && Aa[b].filename.match(G.videoRegex));

          )
            a.filepath.push(G.mediaPath + Aa[b].filename),
              (a.duration += parseInt(Aa[b].duration || 300)),
              (Ca = b);
          return (
            (a.loopAll = a.loopAll && Ca == Aa.length - 1),
            a.filepath.length > 1 &&
              i.log(
                "\x69\x6e\x66\x6f",
                "\x6d\x65\x72\x67\x65\x64\x20\x76\x69\x64\x65\x6f\x73\x20\x66\x6f\x72\x20\x70\x6c\x61\x79\x3a\x20" +
                  a.filepath
              ),
            a
          );
        }
        function Ac(a, b, c, d, e, f, g, h, k, l) {
          var p,
            m = Ga[a],
            n = function (b) {
              na == b
                ? d && d(m)
                : e
                ? tc(a, b, d)
                : (tc(a, b, null),
                  setTimeout(function () {
                    d && d(m);
                  }, 1e3));
            },
            o = function () {
              d &&
                ((c = c || 10),
                clearTimeout(qa[a]),
                (qa[a] = setTimeout(function () {
                  uc(a), j.removeWebLinkView(a), d(m);
                }, 1e3 * c))),
                h();
            },
            q = null,
            r = null,
            s = l || null,
            t = null;
          if (b)
            if (b.match(G.mediaRss) || b.match(G.localFolderRegex)) {
              if (!(eb[b] && eb[b].feeds && eb[b].feeds.length))
                return (
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x66\x65\x65\x64\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x20" +
                      b
                  ),
                  void o()
                );
              (q = eb[b]),
                eb[b].duration && (c = parseInt(eb[b].duration)),
                (t = eb[b].style),
                (b = q.feeds[q.subIndex].piSignageLink),
                (p = b),
                (r = q.feeds[q.subIndex].piSignageType),
                (s = q.feeds[q.subIndex].piSignageBanner),
                q.feeds[q.subIndex].piSignageDuration &&
                  ((c = parseInt(q.feeds[q.subIndex].piSignageDuration)),
                  i.log(
                    "\x64\x65\x62\x75\x67",
                    "\x44\x75\x72\x61\x74\x69\x6f\x6e\x20\x6f\x66\x20\x70\x6c\x61\x79\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20\x6d\x72\x73\x73\x20\x64\x75\x72\x61\x74\x69\x6f\x6e\x3a\x20" +
                      c
                  )),
                (q.subIndex = (q.subIndex + 1) % q.feeds.length),
                (c = c || 10);
            } else
              p =
                b.indexOf("\x3a\x2f\x2f") >= 0 ||
                0 == b.indexOf("\\") ||
                0 == b.indexOf("\x2f")
                  ? b
                  : G.mediaPath + b;
          else
            (b =
              "\x73\x6d\x69\x6c\x65\x79\x2d\x66\x61\x63\x65\x2e\x70\x6e\x67"),
              (p = G.defaultTemplateDir + b);
          if (
            (i.log(
              "\x64\x65\x62\x75\x67",
              "\x70\x6c\x61\x79\x69\x6e\x67\x20\x6e\x65\x78\x74\x20\x66\x69\x6c\x65\x20\x69\x6e\x20\x73\x75\x62\x5a\x6f\x6e\x65\x3a\x20" +
                a +
                "\x3b" +
                p +
                "\x3b" +
                m +
                "\x3b" +
                r
            ),
            b.match(G.videoRegex) || "\x76\x69\x64\x65\x6f" === r)
          )
            k ? uc(a) : tc(a, p, d, e, !1, s), (c = c ? c + 10 : 300);
          else if (b.match(G.audioRegex))
            oa
              ? n(p)
              : (d && d(m),
                i.log(
                  "\x77\x61\x72\x6e",
                  "\x61\x75\x64\x69\x6f\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x69\x73\x20\x6e\x6f\x74\x20\x66\x72\x65\x65\x20\x74\x6f\x20\x70\x6c\x61\x79\x20" +
                    b
                ));
          else if (
            b.match(G.imageRegex) ||
            "\x69\x6d\x61\x67\x65" === r ||
            "\x74\x65\x78\x74" === r
          )
            "\x74\x65\x78\x74" === r
              ? g(a, "\x74\x65\x78\x74", s, t)
              : s
              ? g(a, "\x69\x6d\x61\x67\x65\x2d\x74\x65\x78\x74", p, s)
              : g(a, "\x69\x6d\x61\x67\x65", p);
          else if (
            b.match(G.noticeRegex) ||
            "\x77\x65\x62\x6c\x69\x6e\x6b" === r
          )
            g(a, "\x69\x66\x72\x61\x6d\x65", p);
          else if (b.match(G.pdffileRegex) && $) g(a, "\x70\x64\x66", p);
          else if (b.match(G.zipfileRegex))
            g(
              a,
              "\x69\x66\x72\x61\x6d\x65",
              "\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a\x38\x30\x30\x30\x2f\x6d\x65\x64\x69\x61\x2f\x5f" +
                b.replace(/(.zip|.gz|.bz2)/g, "\x2e\x72\x65\x70\x6f") +
                "\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c"
            );
          else if (b.match(G.radioFileRegex))
            wc(p, function (a, c) {
              a ||
                (oa
                  ? n(c.link)
                  : (d && d(m),
                    i.log(
                      "\x77\x61\x72\x6e",
                      "\x61\x75\x64\x69\x6f\x20\x63\x68\x61\x6e\x6e\x65\x6c\x20\x69\x73\x20\x6e\x6f\x74\x20\x66\x72\x65\x65\x20\x74\x6f\x20\x70\x6c\x61\x79\x20" +
                        b
                    )));
            });
          else if (b.match(G.omxStreamRegex))
            wc(p, function (b, d) {
              b || (tc(a, d.link, null, e, d.tcp), (c = c ? c + 10 : 300));
            });
          else if (b.match(G.linkURL))
            h(!0),
              wc(p, function (b, c) {
                b || g(a, "\x69\x66\x72\x61\x6d\x65", c.link), h();
              });
          else if (b.match(G.CORSLink)) {
            if (k) return void j.removeWebLinkView(a);
            if (-1 == Kb.indexOf(a) || !lc(a, !1) || !$) return;
            h(!0),
              wc(p, function (b, c) {
                b ||
                  j.showWebLinkView(a, c.link, d, m, {
                    videoWindowSize: lc(a, !1),
                    urlReloadDisable: Ya,
                    kioskMode: !1,
                    zoom: c.zoom,
                    keystrokes: c.keystrokes,
                    keyDelay: c.keyDelay,
                    scroll: c.scroll,
                  }),
                  h();
              });
          } else
            b.match(G.txtFileRegex)
              ? (h(!0),
                wc(p, function (b, c) {
                  b ||
                    ((c.message = vc(c.message)),
                    g(a, "\x74\x65\x78\x74", c.message, c.style)),
                    h();
                }))
              : b.match(G.nestedPlaylist) && !f
              ? (e &&
                  ((ra[a] = !0),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x72\x75\x6e\x6e\x69\x6e\x67\x20\x69\x6e\x64\x65\x70\x65\x6e\x64\x65\x6e\x74\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20" +
                      b +
                      "\x20\x66\x6f\x72\x20\x7a\x6f\x6e\x65\x3a\x20" +
                      a
                  )),
                Cc(a, b, k))
              : i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x46\x69\x6c\x65\x20\x74\x79\x70\x65\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x2c\x20\x66\x6f\x72\x20\x66\x69\x6c\x65\x20" +
                    b
                );
          o();
        }
        function Bc(a, b) {
          clearTimeout(qa[a]),
            (Ga[a] = (Ga[a] + 1) % 256),
            uc(a, b),
            j.removeWebLinkView(a);
        }
        function Cc(a, b, d) {
          function n(b) {
            Ac(a, null, b || 4, p, !1, !0, j, k, d);
          }
          function o(b) {
            var c;
            (e = {}),
              (g = 0),
              (h = 0),
              b && b.filename
                ? ((b.option = b.option || {}),
                  (c = b.duration || 10),
                  (b.filename.match(G.videoRegex) ||
                    b.filename.match(G.audioRegex)) &&
                    (c = 5 > c ? 8 : c + 3),
                  (Ga[a] = (Ga[a] + 1) % 256),
                  Ac(
                    a,
                    b.filename,
                    c,
                    p,
                    b.option.main,
                    !0,
                    j,
                    k,
                    d,
                    b.option.bannerText
                  ))
                : n();
          }
          function p(b) {
            b == Ga[a]
              ? (clearTimeout(qa[a]),
                m[l] && eb[m[l].filename] && eb[m[l].filename].subIndex
                  ? i.log(
                      "\x64\x65\x62\x75\x67",
                      "\x75\x73\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x61\x6d\x65\x20\x69\x6e\x64\x65\x78\x20\x77\x69\x74\x68\x20\x73\x75\x62\x49\x6e\x64\x65\x78\x20" +
                        eb[m[l].filename].subIndex
                    )
                  : (l = (l + 1) % m.length),
                o(m[l]))
              : i.log(
                  "\x77\x61\x72\x6e",
                  "\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x6e\x65\x73\x74\x65\x64\x20\x63\x62\x49\x6e\x64\x65\x78\x20\x66\x6f\x72\x20" +
                    a +
                    "\x2c" +
                    b +
                    "\x2c" +
                    Ga[a]
                );
          }
          var e = {},
            g = 0,
            h = 0,
            j = function (a, b, c, d) {
              h++,
                (e[a] = {
                  contentType: b,
                  contentPath: "\x74\x65\x78\x74" === b ? c : encodeURI(c),
                }),
                d && (e[a].contentOption = d);
            },
            k = function (a) {
              return a
                ? g++
                : g
                ? g--
                : void (
                    h &&
                    Rb(
                      "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x5a\x6f\x6e\x65\x73\x28\x22" +
                        ac(JSON.stringify(e)) +
                        "\x22\x29"
                    )
                  );
            },
            l = 0,
            m = [];
          f.readFile(G.mediaPath + b, "\x75\x74\x66\x38", function (d, e) {
            if (d || !e)
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20" +
                  b
              ),
                n(),
                k();
            else {
              try {
                m = JSON.parse(e).assets;
              } catch (f) {
                return (
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x65\x72\x72\x6f\x72\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20" +
                      b
                  ),
                  n(),
                  void k()
                );
              }
              c("\x2e\x2f\x70\x69\x2d\x6d\x61\x69\x6e").filterValidAssets(m),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x63\x61\x6c\x6c\x69\x6e\x67\x20\x73\x75\x62\x44\x69\x73\x70\x6c\x61\x79\x4e\x65\x78\x74\x20\x66\x72\x6f\x6d\x20\x6d\x61\x69\x6e\x20\x66\x6f\x72\x20" +
                    a
                ),
                m.forEach(function (a) {
                  a.filename.match(G.mediaRss) && Yc(a.filename, !0),
                    a.filename.match(G.localFolderRegex) && $c(a.filename, !0),
                    a.filename.match(G.videoRegex) &&
                      a.option.bannerText &&
                      Vb(a.filename, a.option.bannerText, a.duration || 10);
                }),
                o(m[l]);
            }
          });
        }
        function Dc(a, c, d, e, g, h, k) {
          var o,
            t,
            u,
            v,
            w,
            x,
            y,
            A,
            B,
            l = {},
            m = 0,
            n = 0,
            p = function (a, b) {
              clearTimeout(ma),
                (ma = setTimeout(function () {
                  b(o);
                }, 1e3 * a));
            },
            q = function (b, c) {
              if (na == b) d(o);
              else if (h.main) {
                cb = "\x61\x75\x64\x69\x6f";
                var e = 1e3 * (c + 10);
                (bb = e),
                  rc(b, d),
                  clearTimeout(ka),
                  (ka = setTimeout(function () {
                    i.log(
                      "\x77\x61\x72\x6e",
                      "\x41\x75\x64\x69\x6f\x20\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x61\x75\x64\x69\x6f\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                        a +
                        "\x2c" +
                        e
                    ),
                      sc();
                  }, e));
              } else
                rc(b, null),
                  setTimeout(function () {
                    d(o);
                  }, 1e3);
            },
            r = function (a, b, c, d) {
              n++,
                (l[a] = {
                  contentType: b,
                  contentPath: "\x74\x65\x78\x74" === b ? c : encodeURI(c),
                }),
                d && (l[a].contentOption = d);
            },
            s = function (a) {
              return a
                ? m++
                : m
                ? m--
                : (g ? (l.fullscreen = !0) : (l.fullscreen = !1),
                  void Rb(
                    "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x5a\x6f\x6e\x65\x73\x28\x22" +
                      ac(JSON.stringify(l)) +
                      "\x22\x29"
                  ));
            };
          if (
            ((d = d || function () {}),
            (h = h || {}),
            (oa = !0),
            (Fa = (Fa + 1) % 256),
            (o = Fa),
            c || (c = 10),
            2 > c && (c = 2),
            k)
          ) {
            switch (k) {
              case "\x63\x6f\x72\x73":
                g ? Xb() : Yb(),
                  j.showWebLinkView("\x6d\x61\x69\x6e", a, d, o, {
                    videoWindowSize: kc(g, !1),
                    urlReloadDisable: Ya,
                    kioskMode: g && Cb % 2 == 0,
                  });
                break;
              default:
                r("\x6d\x61\x69\x6e", "\x69\x66\x72\x61\x6d\x65", a);
            }
            return (
              s(),
              clearTimeout(ma),
              10 > c && (c = 10),
              void (ma = setTimeout(function () {
                "\x63\x6f\x72\x73" == k &&
                  j.removeWebLinkView("\x6d\x61\x69\x6e", a),
                  d(o);
              }, 1e3 * c))
            );
          }
          if (
            ((u = {}),
            (v = null),
            (w = null),
            (x = null),
            (y = null),
            a.match(G.mediaRss) || a.match(G.localFolderRegex))
          ) {
            if (!(eb[a] && eb[a].feeds && eb[a].feeds.length))
              return (
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x66\x65\x65\x64\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x20" + a
                ),
                d(o)
              );
            (v = eb[a]),
              eb[a].duration && (c = parseInt(eb[a].duration)),
              (y = eb[a].style),
              (a = v.feeds[v.subIndex].piSignageLink),
              (t = a),
              (w = v.feeds[v.subIndex].piSignageType),
              (x = v.feeds[v.subIndex].piSignageBanner),
              v.feeds[v.subIndex].piSignageDuration &&
                ((c = parseInt(v.feeds[v.subIndex].piSignageDuration)),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x44\x75\x72\x61\x74\x69\x6f\x6e\x20\x6f\x66\x20\x70\x6c\x61\x79\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20\x6d\x72\x73\x73\x20\x64\x75\x72\x61\x74\x69\x6f\x6e\x3a\x20" +
                    c
                )),
              (v.subIndex = (v.subIndex + 1) % v.feeds.length);
          } else if (
            a.indexOf("\x3a\x2f\x2f") >= 0 ||
            0 == a.indexOf("\\") ||
            0 == a.indexOf("\x2f")
          )
            t = a;
          else {
            t = G.mediaPath + a;
            try {
              if (!f.existsSync(t)) return d(o);
            } catch (z) {
              return (
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x66\x69\x6c\x65\x20\x63\x68\x65\x63\x6b\x20\x65\x72\x72\x6f\x72\x20\x77\x69\x74\x68\x20\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63\x3a\x20" +
                    z
                ),
                d(o)
              );
            }
          }
          h.bannerText && La && La.bannerText
            ? (dc(h.bannerText), (Oa = !0))
            : Oa && ((Oa = !1), b.showNormalTicker()),
            x && M
              ? cc()
              : La.currentTicker &&
                !gb.tickerEnable &&
                Na &&
                dc(La.currentTicker),
            (db = a),
            i.log(
              "\x64\x65\x62\x75\x67",
              "\x70\x6c\x61\x79\x69\x6e\x67\x20\x6e\x65\x78\x74\x20\x66\x69\x6c\x65\x3a\x20" +
                a +
                "\x20\x74\x69\x6d\x65\x20\x3d\x20" +
                c +
                "\x3b" +
                Fa +
                "\x3b" +
                wb +
                "\x3b" +
                w
            ),
            "\x64\x65\x62\x75\x67" == i.debugLevel && fc(a, c),
            ib &&
              H.storeEvent(
                "\x66\x69\x6c\x65",
                "\x70\x6c\x61\x79",
                a + "\x2f" + c
              ),
            H.logFilePlay(a),
            a.match(G.videoRegex) || "\x76\x69\x64\x65\x6f" === w
              ? ((A = 3e5),
                (B = 0),
                c && 10 != c && (A = 1e3 * (c + 10)),
                vb && !qb
                  ? ((xb = c),
                    (A = 1e3 * vb),
                    (B = wb * vb),
                    (wb += 1),
                    wb * vb > xb && (wb = 0))
                  : !kb ||
                    pb ||
                    ya ||
                    v ||
                    ("\x31" != Ha && 0 != Ha.indexOf("\x32\x61\x70")) ||
                    ((u = zc()),
                    (t = u.filepath),
                    (A = 1e3 * (u.duration + 10))),
                (cb = "\x76\x69\x64\x65\x6f"),
                pc(
                  t,
                  d,
                  !0,
                  g,
                  B,
                  h.main,
                  u.loopAll,
                  h.bannerText && (!La || !La.bannerText)
                ),
                clearTimeout(ja),
                (bb = A),
                (ja = setTimeout(function () {
                  i.log(
                    "\x77\x61\x72\x6e",
                    "\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                      a +
                      "\x2c" +
                      A
                  ),
                    qc();
                }, A)))
              : a.match(G.audioRegex)
              ? q(t, c)
              : a.match(G.imageRegex) ||
                "\x69\x6d\x61\x67\x65" === w ||
                "\x74\x65\x78\x74" === w
              ? ((cb = "\x69\x6d\x61\x67\x65"),
                "\x74\x65\x78\x74" === w
                  ? r("\x6d\x61\x69\x6e", "\x74\x65\x78\x74", x, y)
                  : x || (h.bannerText && (!La || !La.bannerText))
                  ? r(
                      "\x6d\x61\x69\x6e",
                      "\x69\x6d\x61\x67\x65\x2d\x74\x65\x78\x74",
                      t,
                      x || h.bannerText
                    )
                  : r("\x6d\x61\x69\x6e", "\x69\x6d\x61\x67\x65", t),
                p(c, d))
              : a.match(G.noticeRegex) || "\x77\x65\x62\x6c\x69\x6e\x6b" == w
              ? ((cb = "\x6e\x6f\x74\x69\x63\x65"),
                r("\x6d\x61\x69\x6e", "\x69\x66\x72\x61\x6d\x65", t),
                p(c, d))
              : a.match(G.pdffileRegex) && $
              ? ((cb = "\x70\x64\x66"),
                ea && h.main
                  ? S
                    ? (xc(t, d, h.subduration, g),
                      (da = setTimeout(function () {
                        yc();
                      }, 1e3 * c)))
                    : d(o)
                  : (r("\x6d\x61\x69\x6e", "\x70\x64\x66", t), p(c, d)))
              : a.match(G.zipfileRegex)
              ? ((cb = "\x7a\x69\x70"),
                10 > c && (c = 10),
                r(
                  "\x6d\x61\x69\x6e",
                  "\x69\x66\x72\x61\x6d\x65",
                  "\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a\x38\x30\x30\x30\x2f\x6d\x65\x64\x69\x61\x2f\x5f" +
                    a.replace(/(.zip|.gz|.bz2)/g, "\x2e\x72\x65\x70\x6f") +
                    "\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c"
                ),
                p(c, d))
              : a.match(G.radioFileRegex)
              ? (10 > c && (c = 10),
                wc(t, function (a, b) {
                  a ? d(o) : ((cb = "\x61\x75\x64\x69\x6f"), q(b.link, c));
                }))
              : a.match(G.liveStreamRegex) || a.match(G.omxStreamRegex)
              ? wc(t, function (b, e) {
                  b
                    ? d(o)
                    : (0 == e.link.indexOf("\x72\x74\x73\x70\x3a\x2f\x2f") ||
                      0 == e.link.indexOf("\x75\x64\x70\x3a\x2f\x2f") ||
                      a.match(G.omxStreamRegex)
                        ? pc(e.link, d, !0, g, 0, h.main, null, null, e.tcp)
                        : Ic(e.link, d, g, h.main),
                      (cb = "\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d"),
                      clearTimeout(la),
                      (c = c || 60),
                      10 > c && (c = 10),
                      (bb = c),
                      (la = setTimeout(function () {
                        i.log(
                          "\x64\x65\x62\x75\x67",
                          "\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                            a +
                            "\x2c" +
                            c
                        ),
                          Jc();
                      }, 1e3 * c)));
                })
              : a.match(G.linkURL) ||
                a.match(G.CORSLink) ||
                a.match(G.txtFileRegex)
              ? (10 > c && (c = 10),
                s(!0),
                wc(t, function (b, e) {
                  b
                    ? d(o)
                    : ((e.link = vc(e.link)),
                      a.match(G.linkURL)
                        ? r(
                            "\x6d\x61\x69\x6e",
                            "\x69\x66\x72\x61\x6d\x65",
                            e.link
                          )
                        : a.match(G.CORSLink)
                        ? (g ? Xb() : Yb(),
                          j.showWebLinkView("\x6d\x61\x69\x6e", e.link, d, o, {
                            videoWindowSize: kc(g, !1),
                            urlReloadDisable: Ya,
                            kioskMode: g && Cb % 2 == 0,
                            zoom: e.zoom,
                            keystrokes: e.keystrokes,
                            keyDelay: e.keyDelay,
                            scroll: e.scroll,
                          }))
                        : a.match(G.txtFileRegex) &&
                          ((e.message = vc(e.message)),
                          r(
                            "\x6d\x61\x69\x6e",
                            "\x74\x65\x78\x74",
                            e.message,
                            e.style
                          )),
                      (cb = "\x77\x65\x62\x4c\x69\x6e\x6b"),
                      s(),
                      clearTimeout(ma),
                      (ma = setTimeout(function () {
                        a.match(G.CORSLink) &&
                          j.removeWebLinkView("\x6d\x61\x69\x6e", e.link),
                          d(o);
                      }, 1e3 * c)));
                }))
              : (i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x46\x69\x6c\x65\x20\x74\x79\x70\x65\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x2c\x20\x66\x6f\x72\x20\x66\x69\x6c\x65\x20" +
                    a
                ),
                d(o)),
            Ib[Ha].forEach(function (a) {
              var b = e && e[a],
                c = function (b) {
                  var e = {},
                    f = 0;
                  (n = 0),
                    (r = function (a, b, c, d) {
                      n++,
                        (e[a] = {
                          contentType: b,
                          contentPath:
                            "\x74\x65\x78\x74" === b ? c : encodeURI(c),
                        }),
                        d && (e[a].contentOption = d);
                    }),
                    (s = function (a) {
                      return a
                        ? f++
                        : f
                        ? f--
                        : void (
                            n &&
                            Rb(
                              "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x5a\x6f\x6e\x65\x73\x28\x22" +
                                ac(JSON.stringify(e)) +
                                "\x22\x29"
                            )
                          );
                    }),
                    b == Ga[a]
                      ? (clearTimeout(qa[a]), d(r, s, c))
                      : i.log(
                          "\x77\x61\x72\x6e",
                          "\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x72\x73\x73\x20\x63\x62\x49\x6e\x64\x65\x78\x20\x66\x6f\x72\x20" +
                            a +
                            "\x2c" +
                            b +
                            "\x2c" +
                            Ga[a]
                        );
                },
                d = function (c, d, e) {
                  (Ga[a] = (Ga[a] + 1) % 256),
                    Ac(a, b, 0, e, h[a], !1, c, d, g);
                };
              ra[a] ||
                ((b || g) &&
                  (s(!0),
                  Bc(a, function () {
                    var a = null;
                    b
                      ? ((b.match(G.mediaRss) || b.match(G.localFolderRegex)) &&
                          (a = c),
                        d(r, s, a))
                      : s();
                  })));
            }),
            s();
        }
        function Ec(a) {
          for (var c, d, b = a.length; 0 !== b; )
            (d = Math.floor(Math.random() * b)),
              (b -= 1),
              (c = a[b]),
              (a[b] = a[d]),
              (a[d] = c);
        }
        function Hc() {
          switch (cb) {
            case "\x76\x69\x64\x65\x6f":
              clearTimeout(ja), qc(), (ga = null);
              break;
            case "\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d":
              clearTimeout(la), Jc(), (ga = null);
              break;
            case "\x61\x75\x64\x69\x6f":
              clearTimeout(ka), sc(), (ha = null);
              break;
            case "\x70\x64\x66":
              ea ? (clearTimeout(da), yc()) : clearTimeout(ma);
              break;
            case "\x69\x6d\x61\x67\x65":
            case "\x7a\x69\x70":
            case "\x77\x65\x62\x4c\x69\x6e\x6b":
              clearTimeout(ma),
                "\x77\x65\x62\x4c\x69\x6e\x6b" == cb && j.removeWebLinkView();
              break;
            default:
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x43\x75\x72\x72\x65\x6e\x74\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x66\x69\x6c\x65\x20" +
                  db +
                  "\x20\x6f\x66\x20\x75\x6e\x6b\x6e\x6f\x77\x6e\x20\x74\x79\x70\x65\x20" +
                  cb
              );
          }
        }
        function Ic(a, b, c, f) {
          var h,
            j,
            g = Fa;
          qc(),
            sc(),
            (na = a),
            (h = f || ub ? -6e3 : sb),
            jb
              ? ((j = kb
                  ? "\x73\x75\x64\x6f\x20\x6d\x70\x76\x20\x20\x2d\x2d\x72\x70\x69\x2d\x6f\x73\x64\x3d\x6e\x6f\x20\x2d\x2d\x76\x6f\x6c\x75\x6d\x65\x3d" +
                    tb +
                    (f || ub ? "\x20\x2d\x2d\x6d\x75\x74\x65" : "") +
                    "\x20\x20\x2d\x2d\x76\x69\x64\x65\x6f\x2d\x72\x6f\x74\x61\x74\x65\x3d" +
                    pa +
                    "\x20\x20\x2d\x2d\x67\x65\x6f\x6d\x65\x74\x72\x79\x3d" +
                    kc(c, !1) +
                    "\x20\x20\x24\x28\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c\x20\x20\x2d\x63\x69\x77\x20\x2d\x67\x20\x2d\x2d\x66\x6f\x72\x6d\x61\x74\x20\x62\x65\x73\x74\x20\x27" +
                    a +
                    "\x27\x29"
                  : "\x73\x75\x64\x6f\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x20\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64\x20\x20\x2d\x2d\x76\x6f\x6c\x20\x20" +
                    h +
                    "\x20\x20\x2d\x6f\x20\x20" +
                    mc() +
                    "\x20\x20\x2d\x2d\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x20" +
                    pa +
                    "\x20\x20\x2d\x2d\x77\x69\x6e\x20\x20\x27" +
                    kc(c, !0) +
                    "\x27\x20\x20\x24\x28\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c\x20\x2d\x63\x69\x77\x20\x20\x2d\x67\x20\x2d\x2d\x66\x6f\x72\x6d\x61\x74\x20\x62\x65\x73\x74\x20\x27" +
                    a +
                    "\x27\x29"),
                (Db = e(j, { maxBuffer: 25e6 }, function (a) {
                  a &&
                    i.log(
                      "\x64\x65\x62\x75\x67",
                      "\x65\x72\x72\x6f\x72\x20\x6f\x6e\x20\x74\x76\x50\x72\x6f\x63\x65\x73\x73\x20\x65\x78\x69\x74\x3a\x20" +
                        a
                    );
                })),
                c ? Xb() : Yb())
              : (Db = d("\x6c\x69\x76\x65\x73\x74\x72\x65\x61\x6d\x65\x72", [
                  a,
                  "\x62\x65\x73\x74",
                  "\x2d\x2d\x70\x6c\x61\x79\x65\x72",
                  "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x20\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64\x20\x2d\x2d\x76\x6f\x6c\x20" +
                    h +
                    "\x20\x2d\x6f\x20" +
                    mc() +
                    "\x20\x2d\x2d\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x20" +
                    pa +
                    "\x20\x2d\x2d\x77\x69\x6e\x20\x22" +
                    kc(c, !0) +
                    "\x22",
                  "\x2d\x2d\x66\x69\x66\x6f",
                  "\x2d\x2d\x70\x6c\x61\x79\x65\x72\x2d\x6e\x6f\x2d\x63\x6c\x6f\x73\x65",
                ])),
            Db.stdout.on("\x64\x61\x74\x61", function (a) {
              var b = a.toString("\x75\x74\x66\x38");
              b.indexOf("\x53\x74\x61\x72\x74\x69\x6e\x67") >= 0 &&
                (c ? Xb() : Yb()),
                b.indexOf(
                  "\x54\x68\x69\x73\x20\x70\x6c\x75\x67\x69\x6e\x20\x64\x6f\x65\x73\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x20\x70\x72\x6f\x74\x65\x63\x74\x65\x64\x20\x76\x69\x64\x65\x6f\x73"
                ) > 0 && Jc();
            }),
            Db.stderr.on("\x64\x61\x74\x61", function (a) {
              var b = a.toString("\x75\x74\x66\x38");
              -1 == b.indexOf("\x44\x72\x6f\x70\x70\x65\x64\x3a") &&
                -1 == b.indexOf("\x43\x61\x63\x68\x65\x3a") &&
                i.log(
                  "\x69\x6e\x66\x6f",
                  "\x6c\x69\x76\x65\x73\x74\x72\x65\x61\x6d\x65\x72\x2f\x79\x64\x6c\x20\x65\x72\x72\x6f\x72\x20" +
                    b
                );
            }),
            Db.once("\x65\x78\x69\x74", function (a, d) {
              Fa == g && (c ? Xb() : Yb()),
                clearTimeout(la),
                (na = ""),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c\x20\x65\x78\x69\x74\x20\x3a\x20" +
                    a +
                    "\x3b" +
                    d
                ),
                b && b(g);
            });
        }
        function Jc() {
          o(Db) && (Db.stdin.pause(), n(Db.pid)), qc();
        }
        function Lc(a, b, c) {
          var g,
            e = parseInt((2e3 * Math.log(hb.volume / 100)) / Math.LN10),
            f = [
              "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
              "\x2d\x2d\x76\x6f\x6c",
              e,
              "\x2d\x2d\x6e\x6f\x2d\x6f\x73\x64",
              "\x2d\x6f",
              c ? "\x62\x6f\x74\x68" : "\x6c\x6f\x63\x61\x6c",
            ],
            h = Date.now();
          "\x72\x61\x64\x69\x6f" == hb.files[a].type
            ? f.push(hb.files[a].filename)
            : f.push(G.mediaPath + hb.files[a].filename),
            (g = hb.playRandom ? Math.floor(1e4 * Math.random()) : a + 1),
            (g %= hb.files.length),
            (hb.process = d("\x73\x75\x64\x6f", f, {
              stdio: "\x70\x69\x70\x65",
            })),
            hb.process.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x6c\x6f\x75\x6e\x67\x65\x20\x6d\x75\x73\x69\x63\x20\x6f\x6d\x78\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                  a +
                  "\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a"
              );
            }),
            hb.process.once("\x65\x78\x69\x74", function () {
              hb.playing &&
                b == Kc &&
                (Date.now() - h < 1e3
                  ? setTimeout(function () {
                      hb.playing && b == Kc && Lc(g, b, c);
                    }, 2e3)
                  : Lc(g, b, c));
            });
        }
        function Mc(a) {
          function f(a, b) {
            if (a.length !== b.length) return !1;
            for (var c = 0; c < a.length; c++) if (a[c] !== b[c]) return !1;
            return !0;
          }
          function g(a) {
            var c = "";
            return (
              (c += a.eMsgCmd),
              (c += a.showClock ? "\x20" + a.clockPosition : "\x20" + z),
              (c += "\x20" + (a.tickerEnable ? y : x)),
              a.eMsgCmd === v &&
                (c +=
                  "\x20" +
                  a.eMsg.trim().length +
                  "\x20" +
                  a.eMsgHorizontal +
                  "\x20" +
                  a.eMsgVertical),
              a.showClock && (c += "\x20" + a.clockFormat),
              a.tickerEnable &&
                (c +=
                  "\x20" +
                  a.tickerText.trim().length +
                  "\x20" +
                  a.tickerX +
                  "\x20" +
                  a.tickerY +
                  "\x20" +
                  a.tickerWidth +
                  "\x20" +
                  a.tickerSpeed +
                  "\x20" +
                  a.tickerDir +
                  "\x20" +
                  a.tickerFontSize),
              a.eMsgCmd === v && (c += "\x20" + a.eMsg.trim()),
              a.tickerEnable && (c += "\x20" + a.tickerText.trim()),
              c
            );
          }
          var b = [],
            c = "",
            e = !1;
          return a
            ? (P && P.stdin.write("" + a), void (Q = []))
            : void (
                !R &&
                _ &&
                (gb.eMsgCmd === v
                  ? (b.push(gb.eMsgCmd),
                    b.push(gb.eMsg),
                    b.push(gb.eMsgHorizontal),
                    b.push(gb.eMsgVertical))
                  : b.push(w),
                gb.showClock
                  ? (b.push(gb.clockPosition), b.push(gb.clockFormat))
                  : b.push(z),
                gb.tickerEnable
                  ? (b.push(y),
                    b.push(gb.tickerX),
                    b.push(gb.tickerY),
                    b.push(gb.tickerWidth),
                    b.push(gb.tickerSpeed),
                    b.push(gb.tickerDir),
                    b.push(gb.tickerFontSize),
                    b.push(gb.tickerText))
                  : b.push(x),
                P ||
                  ((e = !0),
                  (P = d(
                    "\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79"
                  ))),
                P &&
                  e &&
                  ((e = !1),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x53\x70\x61\x77\x6e\x65\x64\x20\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                      P.pid +
                      "\x20\x2d\x3e\x20" +
                      b
                  ),
                  P.on("\x65\x72\x72\x6f\x72", function () {
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x73\x70\x61\x77\x6e\x20\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79"
                    );
                  }),
                  P.stdout.on("\x64\x61\x74\x61", function (a) {
                    i.log("\x69\x6e\x66\x6f", a + "");
                  }),
                  P.stderr.on("\x64\x61\x74\x61", function (a) {
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x6f\x70\x65\x6e\x76\x67\x5f\x65\x72\x72\x6f\x72\x3a\x20" +
                        (a + "")
                    );
                  }),
                  P.on("\x65\x78\x69\x74", function (a, b) {
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x74\x65\x72\x6d\x69\x6e\x61\x74\x65\x64\x20\x64\x75\x65\x20\x74\x6f\x20\x72\x65\x63\x65\x69\x70\x74\x20\x6f\x66\x20\x73\x69\x67\x6e\x61\x6c\x20" +
                        b
                    ),
                      (P = null),
                      (Q = []);
                  })),
                P &&
                  !f(Q, b) &&
                  ((Q = b.slice(0)), (c = g(gb)), P.stdin.write(c)))
              );
        }
        function Oc() {
          function b(a, b) {
            (b = b || function () {}),
              o(ua)
                ? ua.stdin.write("\x71\n", function (c) {
                    c &&
                      i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x73\x64\x6c\x54\x69\x63\x6b\x65\x72\x50\x72\x6f\x63\x65\x73\x73\x20\x71\x75\x69\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          c
                      ),
                      setTimeout(function () {
                        ua.kill(), b(a);
                      }, 500);
                  })
                : b(a);
          }
          var a = [];
          gb.tickerEnable
            ? (Nc++,
              b(Nc, function (b) {
                return b != Nc
                  ? void i.log(
                      "\x77\x61\x72\x6e",
                      "\x73\x74\x61\x6c\x65\x20\x74\x69\x63\x6b\x65\x72\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x69\x67\x6e\x6f\x72\x65\x64\x2c\x20" +
                        gb.tickerText.slice(0, 10)
                    )
                  : (a.push(gb.tickerSpeed),
                    a.push(gb.tickerDir),
                    a.push(gb.tickerFontSize),
                    a.push(gb.tickerText),
                    a.push(gb.showClock ? 1 : 0),
                    (ua = d("\x74\x69\x63\x6b\x65\x72", a, {
                      stdio: "\x70\x69\x70\x65",
                    })),
                    ua.on("\x65\x72\x72\x6f\x72", function (a) {
                      i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x53\x44\x4c\x20\x74\x69\x63\x6b\x65\x72\x20\x73\x70\x61\x77\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          a
                      );
                    }),
                    ua.stderr.on("\x64\x61\x74\x61", function (a) {
                      i.log(
                        "\x69\x6e\x66\x6f",
                        "\x73\x64\x6c\x54\x69\x63\x6b\x65\x72\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x65\x72\x72\x3a\x20" +
                          a.toString("\x75\x74\x66\x38")
                      );
                    }),
                    void ua.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
                      i.log(
                        "\x69\x6e\x66\x6f",
                        "\x73\x64\x6c\x54\x69\x63\x6b\x65\x72\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          a
                      );
                    }));
              }))
            : b();
        }
        function Uc(a, b) {
          var c = ob[a];
          (c.currentAdCount = 0),
            (c.timer = setTimeout(function () {
              if (((c.adReady = !0), !wa)) {
                var a = parseInt(c.files[c.index].duration);
                (qb = !0),
                  Dc(
                    c.files[c.index].filename,
                    a,
                    Fc,
                    c.files[c.index],
                    c.files[c.index].fullscreen,
                    c.files[c.index].option
                  ),
                  (c.index = (c.index + 1) % c.files.length);
              }
            }, c.interval + 1e3 * b)),
            i.testLog("\x61\x64\x76\x74", "" + c.files);
        }
        function Wc(a) {
          return (
            clearTimeout(La.feedGetTimer),
            a
              ? void I.getFeeds(a, La.rssEncodeAsBinary, function (b, c) {
                  if (b)
                    return void (
                      Wa ||
                      Vc.length ||
                      dc(
                        "\x52\x53\x53\x20\x66\x65\x65\x64\x20\x63\x75\x72\x72\x65\x6e\x74\x6c\x79\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                      )
                    );
                  if (
                    (c &&
                      c.length &&
                      (Vc = c.map(function (a) {
                        return La.useDescription ? a.description : a.title;
                      })),
                    (Vc && 0 != Vc.length) ||
                      (Vc = [
                        "\x4e\x6f\x20\x66\x65\x65\x64\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65",
                      ]),
                    "\x73\x6c\x69\x64\x65" == La.behavior)
                  )
                    (La.messages = Vc), M || La.messages.push(N), cd();
                  else {
                    var d = Vc.join("\x20\x20\x20\x2e\x2e\x2e\x20\x20\x20");
                    (La.currentTicker = d), Oa || dc(d);
                  }
                  La.isRssFeed &&
                    (La.feedGetTimer = setTimeout(function () {
                      Wc(a);
                    }, 6e5));
                })
              : void dc(
                  "\x52\x53\x53\x20\x4c\x69\x6e\x6b\x20\x64\x65\x74\x61\x69\x6c\x73\x20\x6e\x6f\x74\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                )
          );
        }
        function Xc(a) {
          var b = ["\x6d\x70\x34", "\x6d\x70\x67\x34", "\x6d\x70\x65\x67\x34"],
            c = ["\x6a\x70\x65\x67", "\x6a\x70\x67", "\x70\x6e\x67"],
            d = "";
          return (
            -1 !== a.indexOf("\x2e") && (d = a.split("\x2e").pop()),
            -1 !== b.indexOf(d)
              ? "\x76\x69\x64\x65\x6f"
              : -1 !== c.indexOf(d)
              ? "\x69\x6d\x61\x67\x65"
              : ""
          );
        }
        function Yc(a, b) {
          wc(G.mediaPath + a, function (c, d) {
            if (c)
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x20" +
                  a +
                  "\x3b" +
                  c
              );
            else {
              if (b && eb[a] && eb[a].enable) return;
              (eb[a] = {}),
                (eb[a].enable = !0),
                (eb[a].name = a),
                (eb[a].type = "\x6d\x72\x73\x73"),
                (eb[a].style = d.style),
                (eb[a].link = d.link),
                (eb[a].hideTitle = d.hideTitle),
                (eb[a].duration = d.duration),
                (eb[a].numberOfItems = d.numberOfItems || 10),
                (eb[a].subIndex = 0),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x6d\x72\x73\x73\x20\x66\x65\x65\x64\x73\x3a\x20"
                ),
                i.log("\x64\x65\x62\x75\x67", eb[a]),
                Zc(eb[a]);
            }
          });
        }
        function Zc(a) {
          clearTimeout(a.feedGetTimer),
            I.getFeeds(
              a.link,
              !1,
              function (b, c) {
                var d, e, f, g;
                if (b || !Array.isArray(c) || 0 == c.length)
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x46\x61\x69\x6c\x65\x64\x20\x74\x6f\x20\x72\x65\x74\x72\x69\x65\x76\x65\x20\x66\x65\x65\x64\x73\x20\x66\x72\x6f\x6d\x20" +
                      a.link
                  );
                else
                  for (
                    i.log(
                      "\x64\x65\x62\x75\x67",
                      "\x52\x65\x63\x65\x69\x76\x65\x64\x20\x6d\x72\x73\x73\x20\x66\x65\x65\x64\x73\x3a\x20"
                    ),
                      i.log("\x64\x65\x62\x75\x67", c && c[0]),
                      a.feeds = c,
                      d = a.feeds.length - 1;
                    d >= 0;
                    d--
                  )
                    (e = a.feeds[d]),
                      0 == a.hideTitle.indexOf("\x6f\x6e\x6c\x79")
                        ? (e.piSignageType = "\x74\x65\x78\x74")
                        : e.enclosures &&
                          Array.isArray(e.enclosures) &&
                          e.enclosures[0] &&
                          e.enclosures[0].url
                        ? ((f = e.enclosures[0]),
                          f.type
                            ? ((g =
                                -1 !== f.type.indexOf("\x2f")
                                  ? f.type.split("\x2f")[0]
                                  : f.type),
                              (g = g.toLowerCase()))
                            : (g = Xc(f.url)),
                          (e.piSignageType = g),
                          (e.piSignageLink = decodeURI(f.url)))
                        : e.image && e.image.url
                        ? ((e.piSignageType = "\x69\x6d\x61\x67\x65"),
                          (e.piSignageLink = decodeURI(e.image.url)))
                        : e[
                            "\x72\x73\x73\x3a\x66\x75\x6c\x6c\x69\x6d\x61\x67\x65"
                          ]
                        ? ((e.piSignageType = "\x69\x6d\x61\x67\x65"),
                          (e.piSignageLink = decodeURI(
                            e[
                              "\x72\x73\x73\x3a\x66\x75\x6c\x6c\x69\x6d\x61\x67\x65"
                            ]["\x23"]
                          )))
                        : e[
                            "\x72\x73\x73\x3a\x73\x74\x6f\x72\x79\x69\x6d\x61\x67\x65"
                          ] &&
                          ((e.piSignageType = "\x69\x6d\x61\x67\x65"),
                          (e.piSignageLink = decodeURI(
                            e[
                              "\x72\x73\x73\x3a\x73\x74\x6f\x72\x79\x69\x6d\x61\x67\x65"
                            ]["\x23"]
                          ))),
                      a.hideTitle.indexOf("\x74\x69\x74\x6c\x65") >= 0
                        ? (e.piSignageBanner = e.title || "")
                        : a.hideTitle.indexOf(
                            "\x64\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e"
                          ) >= 0 && (e.piSignageBanner = e.description || ""),
                      e[
                        "\x6d\x65\x64\x69\x61\x3a\x63\x6f\x6e\x74\x65\x6e\x74"
                      ] &&
                        e[
                          "\x6d\x65\x64\x69\x61\x3a\x63\x6f\x6e\x74\x65\x6e\x74"
                        ]["\x40"] &&
                        e[
                          "\x6d\x65\x64\x69\x61\x3a\x63\x6f\x6e\x74\x65\x6e\x74"
                        ]["\x40"].duration &&
                        (e.piSignageDuration =
                          e[
                            "\x6d\x65\x64\x69\x61\x3a\x63\x6f\x6e\x74\x65\x6e\x74"
                          ]["\x40"].duration),
                      e.piSignageBanner && !e.piSignageLink
                        ? ((e.piSignageType = "\x74\x65\x78\x74"),
                          (e.piSignageLink =
                            a.name + "\x5f" + d + "\x2e\x74\x78\x74"))
                        : e.piSignageBanner ||
                          e.piSignageLink ||
                          (e.link
                            ? ((e.piSignageType =
                                "\x77\x65\x62\x6c\x69\x6e\x6b"),
                              (e.piSignageLink = e.link))
                            : (i.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x4e\x6f\x20\x69\x6e\x66\x6f\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x69\x6e\x20\x74\x68\x65\x20\x66\x65\x65\x64\x2c\x20\x72\x65\x6d\x6f\x76\x69\x6e\x67\x20" +
                                  ("" + e).slice(0, 50)
                              ),
                              a.feeds.splice(d, 1)));
                a.enable &&
                  (a.feedGetTimer = setTimeout(function () {
                    Zc(a);
                  }, 6e5));
              },
              a.numberOfItems
            );
        }
        function $c(a, b) {
          wc(G.mediaPath + a, function (c, d) {
            if (c)
              i.log(
                "\x65\x72\x72\x6f\x72",
                "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x20" +
                  a +
                  "\x3b" +
                  c
              );
            else {
              if (b && eb[a] && eb[a].enable) return;
              (eb[a] = {}),
                (eb[a].enable = !0),
                (eb[a].type = "\x6c\x6f\x63\x61\x6c"),
                (eb[a].link = d.link),
                (eb[a].duration = d.duration),
                (eb[a].numberOfItems = d.numberOfItems || 10),
                (eb[a].subIndex = 0),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x6c\x6f\x63\x61\x6c\x20\x66\x6f\x6c\x64\x65\x72\x20\x66\x65\x74\x63\x68\x20"
                ),
                i.log("\x64\x65\x62\x75\x67", eb[a]),
                _c(eb[a]);
            }
          });
        }
        function _c(a) {
          clearTimeout(a.feedGetTimer),
            f.stat(a.link, function (b, c) {
              b || !c
                ? i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x6c\x6f\x63\x61\x6c\x20\x66\x6f\x6c\x64\x65\x72\x2f\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      a.link +
                      "\x3b" +
                      b
                  )
                : c.isDirectory()
                ? f.readdir(a.link, function (b, c) {
                    var d, e;
                    return b || !c
                      ? void i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x6c\x6f\x63\x61\x6c\x20\x66\x6f\x6c\x64\x65\x72\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a.link +
                            "\x3b" +
                            b
                        )
                      : ((d = c.filter(function (a) {
                          return (
                            a.match(G.videoRegex) ||
                            a.match(G.audioRegex) ||
                            a.match(G.imageRegex) ||
                            a.match(G.noticeRegex) ||
                            a.match(G.pdffileRegex) ||
                            a.match(G.zipfileRegex) ||
                            a.match(G.radioFileRegex) ||
                            a.match(G.liveStreamRegex) ||
                            a.match(G.omxStreamRegex) ||
                            a.match(G.linkURL) ||
                            a.match(G.CORSLink) ||
                            a.match(G.txtFileRegex)
                          );
                        })),
                        (e = d.sort(function (a, b) {
                          return a.localeCompare(b, void 0, { numeric: !0 });
                        })),
                        (a.feeds = e.map(function (b) {
                          return { piSignageLink: a.link + "\x2f" + b };
                        })),
                        i.log(
                          "\x64\x65\x62\x75\x67",
                          "\x52\x65\x63\x65\x69\x76\x65\x64\x20\x66\x6f\x6c\x64\x65\x72\x20\x63\x6f\x6e\x74\x65\x6e\x74\x73\x3a\x20"
                        ),
                        void i.log("\x64\x65\x62\x75\x67", a.feeds));
                  })
                : ((a.feeds = [{ piSignageLink: a.link }]),
                  i.log(
                    "\x64\x65\x62\x75\x67",
                    "\x52\x65\x63\x65\x69\x76\x65\x64\x20\x66\x6f\x6c\x64\x65\x72\x20\x63\x6f\x6e\x74\x65\x6e\x74\x73\x3a\x20"
                  ),
                  i.log("\x64\x65\x62\x75\x67", a.feeds)),
                a.enable &&
                  (a.feedGetTimer = setTimeout(function () {
                    _c(a);
                  }, 6e5));
            });
        }
        function ad() {
          Object.keys(eb).forEach(function (a) {
            var b = eb[a];
            b &&
              ((b.enable = !1), clearTimeout(b.feedGetTimer), (eb[a] = null));
          });
        }
        function bd() {
          clearTimeout(La.feedChangeTimer);
          var a = La.messages[La.msgIndex];
          (La.currentTicker = a),
            Oa ||
              (dc(a), (La.msgIndex = (La.msgIndex + 1) % La.messages.length)),
            La.disabled || (La.feedChangeTimer = setTimeout(bd, La.feedDelay));
        }
        function cd() {
          (La.msgIndex = 0), (La.disabled = !1), bd();
        }
        function dd() {
          (La.isRssFeed = !1),
            clearTimeout(La.feedGetTimer),
            (La.disabled = !0),
            clearTimeout(La.feedChangeTimer),
            (La.currentTicker = null);
        }
        function hd(a) {
          ed && 1 == ed.readyState
            ? ed.send(a, function (c) {
                c &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x74\x6f\x20\x63\x68\x72\x6f\x6d\x65\x20\x3a\x20" +
                      c +
                      "\x3b" +
                      a
                  );
              })
            : i.log(
                "\x65\x72\x72\x6f\x72",
                "\x43\x61\x6e\x20\x6e\x6f\x74\x20\x73\x65\x6e\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x74\x6f\x20\x63\x68\x72\x6f\x6d\x65\x20\x3a\x20" +
                  a
              );
        }
        var O,
          P,
          V,
          X,
          Z,
          ca,
          da,
          ga,
          ha,
          ja,
          ka,
          la,
          ma,
          za,
          Ia,
          Ja,
          Ma,
          Na,
          Pa,
          Qa,
          bb,
          Bb,
          Cb,
          Db,
          Qb,
          Sb,
          Tb,
          ec,
          Fc,
          Gc,
          Kc,
          Nc,
          Pc,
          Sc,
          Vc,
          ed,
          fd,
          gd,
          d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").spawn,
          e = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          f = c("\x66\x73"),
          h = (c("\x70\x61\x74\x68"), c("\x61\x73\x79\x6e\x63")),
          i = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          j = c("\x2e\x2f\x70\x69\x2d\x77\x65\x62\x6c\x69\x6e\x6b"),
          k = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x73\x79\x73\x74\x65\x6d\x2d\x69\x6e\x66\x6f"
          ),
          l = c("\x72\x6f\x62\x6f\x74\x6a\x73"),
          m = c("\x70\x73\x2d\x74\x72\x65\x65"),
          n = function (a, b) {
            m(a, function (c, f) {
              f = f || [];
              var g = f.find(function (a) {
                return (
                  a &&
                  "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x2e\x62\x69\x6e" ==
                    a.COMMAND
                );
              });
              g
                ? d("\x73\x75\x64\x6f", ["\x6b\x69\x6c\x6c", "\x2d\x39", g.PID])
                : d(
                    "\x73\x75\x64\x6f",
                    ["\x6b\x69\x6c\x6c", "\x2d\x39"].concat(
                      f.map(function (a) {
                        return a.PID;
                      }),
                      a
                    )
                  ),
                1 == f.length &&
                  f[0] &&
                  "\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72" == f[0].COMMAND &&
                  (i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x2a\x2a\x2a\x20\x5a\x6f\x6d\x62\x69\x65\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x2e\x62\x69\x6e\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67"
                  ),
                  e(
                    "\x73\x75\x64\x6f\x20\x70\x67\x72\x65\x70\x20\x2d\x50\x20\x31\x20\x2d\x6c\x20\x7c\x20\x67\x72\x65\x70\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72",
                    function (a, b, c) {
                      if (!c && b) {
                        var d = b.split("\n");
                        d.forEach(function (a) {
                          a &&
                            a.length > 0 &&
                            (i.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x2a\x2a\x2a\x20\x5a\x6f\x6d\x62\x69\x65\x20\x6f\x6d\x78\x70\x6c\x61\x79\x65\x72\x2e\x62\x69\x6e\x2c\x20\x70\x69\x64\x3a\x20" +
                                a.split("\x20")[0]
                            ),
                            e(
                              "\x73\x75\x64\x6f\x20\x6b\x69\x6c\x6c\x20\x2d\x39\x20" +
                                a.split("\x20")[0],
                              function (a, b, c) {
                                console.log(c);
                              }
                            ));
                        });
                      }
                    }
                  )),
                b && b();
            });
          },
          o = function (a) {
            return a && null === a.exitCode && null === a.signalCode ? !0 : !1;
          },
          p = 0,
          q = 1,
          r = 2,
          s = 0,
          t = 1,
          u = 2,
          v = 0,
          w = 1,
          x = 0,
          y = 1,
          z = 0,
          A = 1,
          B = 2,
          C = 0,
          D = 1,
          E = 80,
          G = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          H = c("\x2e\x2f\x70\x69\x2d\x65\x76\x65\x6e\x74\x73"),
          I = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x73\x73\x2d\x73\x65\x72\x76\x69\x63\x65"
          ),
          J = "\x61\x75\x74\x6f",
          K = [1920, 1080],
          L = "\x6c\x61\x6e\x64\x73\x63\x61\x70\x65",
          M = !0,
          N =
            "\x20\x20\x2a\x2a\x2a\x20\x50\x6c\x65\x61\x73\x65\x20\x61\x64\x64\x20\x74\x68\x65\x20\x6c\x69\x63\x65\x6e\x73\x65\x20\x66\x69\x6c\x65\x20\x2a\x2a\x2a",
          Q = [],
          R = !1,
          S = !1,
          T = !1,
          U = !1,
          W = [],
          Y = !1,
          $ = !1,
          _ = !1,
          aa = !1,
          ba = !1,
          ea = !1,
          fa = null,
          ia = {},
          na = "",
          oa = !0,
          pa = 0,
          qa = {},
          ra = {},
          sa = null,
          ta = null,
          ua = null,
          wa = !1,
          xa = !1,
          ya = !1,
          Aa = [],
          Ba = !1,
          Ca = 0,
          Da = 0,
          Ea = 0,
          Fa = 0,
          Ga = { side: 0, bottom: 0, zone4: 0, zone5: 0, zone6: 0 },
          Ha = "\x31",
          Ka =
            "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c",
          La = {
            currentTicker: null,
            tickerHeight: 60,
            behavior: "\x73\x6c\x69\x64\x65",
            feedDelay: 1e4,
            disabled: !1,
            isRssFeed: !1,
            rssLink: null,
            rssEncodeAsBinary: !1,
            feedGetTimer: null,
            feedChangeTimer: null,
            messages: [],
            msgIndex: 0,
            textSpeed: 3,
          },
          Oa = !1,
          Ra = 0,
          Sa = 0,
          Ta = {},
          Ua = !1,
          Va = "\x72\x69\x67\x68\x74",
          Wa = !1,
          Xa = "\x23\x30\x30\x30",
          Ya = !1,
          Za = 2,
          $a = !1,
          _a = !1,
          ab = !1,
          cb = null,
          db = null,
          eb = {},
          fb = !1,
          gb = { showClock: !1, eMsgCmd: w },
          hb = {
            process: null,
            playing: !1,
            files: [],
            playRandom: !1,
            volume: 90,
          },
          ib = !1,
          jb = !1,
          kb = !1,
          lb = 0,
          mb = !1,
          nb = [],
          ob = [],
          pb = !1,
          qb = !1,
          rb = { pause: "\x70", quit: "\x71" },
          sb = 0,
          tb = 100,
          ub = !1,
          vb = 0,
          wb = 0,
          xb = 0,
          yb = [
            "\x31",
            "\x32\x61",
            "\x32\x62",
            "\x32\x63",
            "\x32\x64",
            "\x33\x61",
            "\x33\x62",
            "\x33\x63",
            "\x33\x64",
            "\x34\x61",
            "\x34\x62",
            "\x34\x63",
            "\x34\x64",
            "\x32\x61\x70",
            "\x32\x62\x70",
            "\x32\x61\x70\x32\x37\x30",
            "\x32\x62\x70\x32\x37\x30",
            "\x63\x75\x73\x74\x6f\x6d",
            "\x63\x75\x73\x74\x6f\x6d\x70",
            "\x63\x75\x73\x74\x6f\x6d\x70\x32\x37\x30",
          ],
          Eb = "\x30\x20\x30\x20\x37\x32\x30\x20\x34\x38\x30",
          Fb = "\x30\x20\x30\x20\x37\x32\x30\x20\x35\x37\x36",
          Gb = null,
          Hb = function (a, b, c) {
            var l,
              d = Ra || K[0],
              e = Sa || K[1],
              f = parseInt(d / 4),
              g = parseInt(d / 2),
              h = parseInt((3 * d) / 4),
              i = parseInt(e / 4),
              k = (parseInt(e / 2), parseInt((3 * e) / 4));
            switch (((b = b ? La.tickerHeight : 0), (l = {}), a)) {
              default:
              case "\x31":
                l.main = "\x30\x20\x30\x20" + d + "\x20" + (e - b);
                break;
              case "\x32\x61":
                (l.main = "" + f + "\x20\x30\x20" + d + "\x20" + (e - b)),
                  (l.side = "\x30\x20\x30\x20" + f + "\x20" + (e - b));
                break;
              case "\x32\x62":
                (l.main = "\x30\x20\x30\x20" + h + "\x20" + (e - b)),
                  (l.side = "" + h + "\x20\x30\x20" + d + "\x20" + (e - b));
                break;
              case "\x32\x63":
                (l.main = "\x30\x20\x30\x20" + g + "\x20" + (e - b)),
                  (l.side = "" + g + "\x20\x30\x20" + d + "\x20" + (e - b));
                break;
              case "\x32\x64":
                (l.main = "" + g + "\x20\x30\x20" + d + "\x20" + (e - b)),
                  (l.side = "\x30\x20\x30\x20" + g + "\x20" + (e - b));
                break;
              case "\x33\x61":
                (l.main = "" + f + "\x20\x30\x20" + d + "\x20" + k),
                  (l.side = "\x30\x20\x30\x20" + f + "\x20" + k),
                  (l.bottom = "\x30\x20" + k + "\x20" + d + "\x20" + (e - b));
                break;
              case "\x33\x62":
                (l.main = "\x30\x20\x30\x20" + h + "\x20" + k),
                  (l.side = "" + h + "\x20\x30\x20" + d + "\x20" + k),
                  (l.bottom = "\x30\x20" + k + "\x20" + d + "\x20" + (e - b));
                break;
              case "\x33\x63":
                (l.main = "" + f + "\x20" + i + "\x20" + d + "\x20" + (e - b)),
                  (l.side = "\x30\x20" + i + "\x20" + f + "\x20" + (e - b)),
                  (l.bottom = "\x30\x20\x30\x20" + d + "\x20" + i);
                break;
              case "\x33\x64":
                (l.main = "\x30\x20" + i + "\x20" + h + "\x20" + (e - b)),
                  (l.side =
                    "" + h + "\x20" + i + "\x20" + d + "\x20" + (e - b)),
                  (l.bottom = "\x30\x20\x30\x20" + d + "\x20" + i);
                break;
              case "\x34\x61":
                (l.main = "" + f + "\x20\x30\x20" + d + "\x20" + k),
                  (l.side = "\x30\x20\x30\x20" + f + "\x20" + (e - b)),
                  (l.bottom =
                    "" + f + "\x20" + k + "\x20" + d + "\x20" + (e - b));
                break;
              case "\x34\x62":
                (l.main = "\x30\x20\x30\x20" + h + "\x20" + k),
                  (l.side = "" + h + "\x20\x30\x20" + d + "\x20" + (e - b)),
                  (l.bottom = "\x30\x20" + k + "\x20" + h + "\x20" + (e - b));
                break;
              case "\x34\x63":
                (l.main = "" + f + "\x20" + i + "\x20" + d + "\x20" + (e - b)),
                  (l.side = "\x30\x20\x30\x20" + f + "\x20" + (e - b)),
                  (l.bottom = "" + f + "\x20\x30\x20" + d + "\x20" + i);
                break;
              case "\x34\x64":
                (l.main = "\x30\x20" + i + "\x20" + h + "\x20" + (e - b)),
                  (l.side = "" + h + "\x20\x30\x20" + d + "\x20" + (e - b)),
                  (l.bottom = "\x30\x20\x30\x20" + h + "\x20" + i);
                break;
              case "\x63\x75\x73\x74\x6f\x6d":
                l.main = "\x30\x20\x30\x20" + d + "\x20" + (e - b);
                break;
              case "\x32\x61\x70":
              case "\x63\x75\x73\x74\x6f\x6d\x70":
                c
                  ? (l.main = "\x30\x20\x30\x20" + e + "\x20" + (d - b))
                  : (l.main = "" + b + "\x20\x30\x20" + d + "\x20" + e);
                break;
              case "\x32\x62\x70":
                c
                  ? ((l.main = "\x30\x20\x30\x20" + e + "\x20" + k),
                    (l.bottom = "\x30\x20" + k + "\x20" + e + "\x20" + (d - b)))
                  : ((l.main = "" + (d - k) + "\x20\x30\x20" + d + "\x20" + e),
                    (l.bottom =
                      "\x30\x20\x30\x20" + (d - k) + "\x20" + (e - b)));
                break;
              case "\x32\x61\x70\x32\x37\x30":
              case "\x63\x75\x73\x74\x6f\x6d\x70\x32\x37\x30":
                c
                  ? (l.main = "\x30\x20\x30\x20" + e + "\x20" + (d - b))
                  : (l.main = "\x30\x20\x30\x20" + (d - b) + "\x20" + e);
                break;
              case "\x32\x62\x70\x32\x37\x30":
                c
                  ? ((l.main = "\x30\x20\x30\x20" + e + "\x20" + k),
                    (l.bottom = "\x30\x20" + k + "\x20" + e + "\x20" + (d - b)))
                  : ((l.main = "\x30\x20\x30\x20" + k + "\x20" + e),
                    (l.bottom =
                      "" + k + "\x20\x30\x20" + d + "\x20" + (e - b)));
            }
            return l;
          },
          Ib = {
            1: [],
            "2a": ["\x73\x69\x64\x65"],
            "2b": ["\x73\x69\x64\x65"],
            "2c": ["\x73\x69\x64\x65"],
            "2d": ["\x73\x69\x64\x65"],
            "3a": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "3b": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "3c": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "3d": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "4a": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "4b": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "4c": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "4d": ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"],
            "2ap": [],
            "2bp": ["\x62\x6f\x74\x74\x6f\x6d"],
            "2ap270": [],
            "2bp270": ["\x62\x6f\x74\x74\x6f\x6d"],
            custom: [
              "\x73\x69\x64\x65",
              "\x62\x6f\x74\x74\x6f\x6d",
              "\x7a\x6f\x6e\x65\x34",
              "\x7a\x6f\x6e\x65\x35",
              "\x7a\x6f\x6e\x65\x36",
            ],
            customp: [
              "\x73\x69\x64\x65",
              "\x62\x6f\x74\x74\x6f\x6d",
              "\x7a\x6f\x6e\x65\x34",
              "\x7a\x6f\x6e\x65\x35",
              "\x7a\x6f\x6e\x65\x36",
            ],
            customp270: [
              "\x73\x69\x64\x65",
              "\x62\x6f\x74\x74\x6f\x6d",
              "\x7a\x6f\x6e\x65\x34",
              "\x7a\x6f\x6e\x65\x35",
              "\x7a\x6f\x6e\x65\x36",
            ],
          },
          Jb = [
            "\x73\x69\x64\x65",
            "\x62\x6f\x74\x74\x6f\x6d",
            "\x7a\x6f\x6e\x65\x34",
          ],
          Kb = ["\x73\x69\x64\x65", "\x62\x6f\x74\x74\x6f\x6d"];
        try {
          f.unlinkSync(
            "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x63\x61\x63\x68\x65\x2f\x75\x7a\x62\x6c\x2f\x65\x76\x65\x6e\x74\x5f\x64\x61\x65\x6d\x6f\x6e\x2e\x70\x69\x64"
          ),
            f.unlinkSync(
              "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x63\x61\x63\x68\x65\x2f\x75\x7a\x62\x6c\x2f\x65\x76\x65\x6e\x74\x5f\x64\x61\x65\x6d\x6f\x6e"
            );
        } catch (Lb) {}
        h.series(
          [
            function (a) {
              e(
                "\x6b\x69\x6c\x6c\x61\x6c\x6c\x20\x2d\x73\x20\x39\x20\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
                function () {
                  a();
                }
              ),
                e(
                  "\x6b\x69\x6c\x6c\x61\x6c\x6c\x20\x2d\x73\x20\x39\x20\x2f\x75\x73\x72\x2f\x6c\x69\x62\x2f\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72\x2f\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72\x2d\x76\x37",
                  function () {}
                );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x70\x6e\x67\x76\x69\x65\x77",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x74\x69\x63\x6b\x65\x72",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x65\x76\x69\x6e\x63\x65",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x6d\x70\x76",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x75\x7a\x62\x6c",
                function () {
                  a();
                }
              );
            },
            function (a) {
              e("\x75\x7a\x62\x6c\x20\x2d\x2d\x76\x65\x72\x73\x69\x6f\x6e")
                .stdout.on("\x64\x61\x74\x61", function (a) {
                  (Y =
                    -1 == a.indexOf("\x32\x32\x38\x62\x63\x33\x38") ? !0 : !1),
                    i.log(
                      "\x69\x6e\x66\x6f",
                      "\x42\x61\x73\x65\x64\x20\x6f\x6e\x20\x63\x6f\x6d\x6d\x69\x74\x20\x76\x61\x6c\x75\x65\x20\x75\x7a\x62\x6c\x20\x69\x73\x20" +
                        (Y ? "\x6e\x65\x77" : "\x6f\x6c\x64")
                    ),
                    (Z =
                      a.indexOf("\x32\x32\x38\x62\x63\x33\x38") >= 0
                        ? "\x32\x32\x38\x62\x63\x33\x38"
                        : a.indexOf("\x33\x35\x64\x62\x31\x36\x39") >= 0
                        ? "\x33\x35\x64\x62\x31\x36\x39"
                        : a.indexOf("\x76\x30\x2e\x39\x2e\x30") >= 0
                        ? "\x76\x30\x2e\x39\x2e\x30"
                        : "\x75\x6e\x6b\x6e\x6f\x77\x6e"),
                    i.log(
                      "\x69\x6e\x66\x6f",
                      "\x75\x7a\x62\x6c\x20\x76\x65\x72\x73\x69\x6f\x6e\x20\x69\x73\x20" +
                        Z
                    );
                })
                .on("\x63\x6c\x6f\x73\x65", function () {
                  a();
                });
            },
            function (a) {
              e(
                "\x77\x68\x69\x63\x68\x20\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
                function (c, d, e) {
                  c || e
                    ? (i.log(
                        "\x77\x61\x72\x6e",
                        "\x43\x68\x72\x6f\x6d\x69\x75\x6d\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                      ),
                      ($ = !1))
                    : (i.log(
                        "\x69\x6e\x66\x6f",
                        "\x43\x68\x72\x6f\x6d\x69\x75\x6d\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x74\x20" +
                          d
                      ),
                      ($ = !0),
                      b.startChromeSocket()),
                    a();
                }
              );
            },
            function (a) {
              e(
                "\x77\x68\x69\x63\x68\x20\x6f\x70\x65\x6e\x76\x67\x5f\x64\x69\x73\x70\x6c\x61\x79",
                function (b, c, d) {
                  b || d
                    ? (i.log(
                        "\x77\x61\x72\x6e",
                        "\x4f\x70\x65\x6e\x76\x67\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                      ),
                      (_ = !1),
                      a())
                    : (i.log(
                        "\x69\x6e\x66\x6f",
                        "\x4f\x70\x65\x6e\x76\x67\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x74\x20" +
                          c
                      ),
                      (_ = !0),
                      a());
                }
              );
            },
            function (a) {
              e(
                "\x63\x61\x74\x20\x2f\x65\x74\x63\x2f\x2a\x2d\x72\x65\x6c\x65\x61\x73\x65",
                function (b, c) {
                  c &&
                    c.indexOf("\x62\x75\x73\x74\x65\x72") >= 0 &&
                    (i.log(
                      "\x69\x6e\x66\x6f",
                      "\x4f\x70\x65\x6e\x76\x67\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x73\x20\x69\x74\x20\x69\x73\x20\x62\x75\x73\x74\x65\x72\x28\x70\x69\x20\x34\x29\x20\x4f\x53\x20\x72\x65\x6c\x65\x61\x73\x65"
                    ),
                    (_ = !1),
                    (aa = !0)),
                    a();
                }
              );
            },
            function (a) {
              e(
                "\x63\x61\x74\x20\x2f\x70\x72\x6f\x63\x2f\x64\x65\x76\x69\x63\x65\x2d\x74\x72\x65\x65\x2f\x6d\x6f\x64\x65\x6c",
                function (b, c) {
                  c &&
                    c.indexOf("\x50\x69\x20\x34") >= 0 &&
                    ((ba = !0),
                    e(
                      "\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x6c",
                      function (a, b, c) {
                        if (
                          !a &&
                          !c &&
                          b &&
                          (i.log(
                            "\x69\x6e\x66\x6f",
                            "\x4e\x75\x6d\x62\x65\x72\x20\x6f\x66\x20\x64\x69\x73\x70\x6c\x61\x79\x20\x75\x6e\x69\x74\x73\x3a\x20" +
                              parseInt(b)
                          ),
                          parseInt(b) >= 2)
                        ) {
                          var e = d(
                            "\x70\x6e\x67\x76\x69\x65\x77",
                            [
                              "\x2d\x64",
                              7,
                              "\x2d\x78",
                              0,
                              "\x2d\x79",
                              0,
                              G.root +
                                "\x2f\x70\x75\x62\x6c\x69\x63\x2f\x61\x70\x70\x2f\x69\x6d\x67\x2f\x70\x69\x34\x2d\x73\x65\x63\x6f\x6e\x64\x2d\x64\x69\x73\x70\x6c\x61\x79\x2e\x70\x6e\x67",
                            ],
                            { stdio: "\x70\x69\x70\x65" }
                          );
                          setTimeout(function () {
                            e && e.kill();
                          }, 3e4);
                        }
                      }
                    )),
                    a();
                }
              );
            },
            function (a) {
              e(
                "\x77\x68\x69\x63\x68\x20\x65\x76\x69\x6e\x63\x65",
                function (b, c, d) {
                  b || d
                    ? (i.log(
                        "\x77\x61\x72\x6e",
                        "\x65\x76\x69\x6e\x63\x65\x20\x70\x64\x66\x20\x72\x65\x61\x64\x65\x72\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                      ),
                      (ea = !1))
                    : (i.log(
                        "\x69\x6e\x66\x6f",
                        "\x65\x76\x69\x6e\x63\x65\x20\x70\x64\x66\x20\x72\x65\x61\x64\x65\x72\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x74\x20" +
                          c
                      ),
                      (ea = !0)),
                    a();
                }
              );
            },
            function (a) {
              $ ? k.changeHostname(a) : a();
            },
            function (a) {
              $ ? Mb(a) : a();
            },
          ],
          function () {
            Ob();
          }
        ),
          (b.setConfigServer = function (a) {
            var b = [
              "\x64\x69\x73\x70\x6c\x61\x79\x65\x72\x2e\x63\x6f\x6d\x2e\x6d\x79",
              "\x73\x61\x74\x61\x76\x69\x73\x69\x6f\x6e\x2e\x76\x70\x61\x6c\x76\x65\x6c\x69\x6e\x2e\x63\x6f\x6d",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x64\x73\x6d\x65\x64\x69\x61\x70\x6c\x61\x79\x2e\x63\x6f\x6d",
              "\x70\x69\x73\x69\x67\x6e\x2e\x72\x70\x6c\x69\x6e\x6b\x2e\x6e\x65\x74",
              "\x6c\x69\x76\x65\x73\x69\x67\x6e\x61\x67\x65\x6c\x69\x74\x65\x2e\x6e\x65\x63\x2e\x63\x6f\x6d\x2e\x73\x67",
              "\x6c\x6b\x74\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d",
              "\x73\x69\x67\x6e\x61\x67\x65\x2d\x6e\x65\x74\x77\x6f\x72\x6b\x2e\x61\x70\x70",
              "\x74\x76\x68\x75\x62\x2e\x69\x6f",
              "\x69\x6d\x70\x65\x72\x69\x75\x6d\x62\x65\x72\x72\x69\x2e\x63\x6f\x6d",
              "\x69\x62\x65\x72\x73\x65\x6c\x65\x78\x2e\x63\x6f\x6d",
              "\x62\x69\x6c\x6c\x62\x6f\x61\x72\x64\x2e\x73\x69\x67\x6e\x73\x2e\x6f\x6e\x65\x69\x74\x2e\x67\x6f\x76\x2e\x75\x6b",
              "\x64\x69\x73\x70\x6c\x61\x79\x65\x72\x2e\x73\x67",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x67\x76\x74\x65\x6c\x2e\x63\x6f\x6d",
              "\x69\x6e\x66\x6f\x74\x61\x66\x65\x6c\x6e\x2e\x6d\x65\x64\x69\x61\x7a\x2d\x65\x6c\x65\x63\x74\x72\x6f\x6e\x69\x63\x73\x2e\x64\x65",
              "\x64\x69\x67\x69\x73\x69\x67\x6e\x2e\x64\x69\x67\x69\x74\x61\x6c\x73\x69\x67\x6e\x73\x2e\x63\x6f\x2e\x6e\x7a",
              "\x73\x69\x67\x6e\x73\x2e\x6e\x6f\x6e\x61\x2e\x6d\x65\x64\x69\x61",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x70\x6f\x69\x6e\x74\x73\x63\x65\x6e\x74\x72\x61\x6c\x2e\x63\x6f\x6d",
              "\x75\x7a\x61\x73\x65\x72\x76\x2e\x64\x64\x6e\x73\x2e\x6e\x65\x74",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x6d\x65\x74\x64\x61\x74\x61\x2e\x6e\x65\x74\x2e\x6e\x7a",
              "\x61\x64\x73\x6f\x6e\x61\x74\x6d\x73\x2e\x63\x6f\x6d",
              "\x62\x6c\x75\x70\x65\x70\x70\x65\x72\x2e\x61\x73\x69\x61",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x65\x6d\x68\x2e\x63\x6c\x6f\x75\x64",
              "\x64\x69\x67\x69\x73\x69\x67\x6e\x2e\x68\x73\x69\x61\x2e\x63\x6f\x2e\x6e\x7a",
              "\x68\x61\x6c\x6f\x2e\x6e\x6f\x6d\x61\x64\x69\x78\x6d\x65\x64\x69\x61\x2e\x63\x6f\x2e\x75\x6b",
              "\x64\x69\x73\x70\x6c\x61\x79\x69\x74\x2e\x69\x65",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x74\x72\x75\x63\x65\x6c\x6c\x2e\x63\x6f\x6d\x2e\x61\x75",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x68\x61\x77\x6b\x2e\x73\x79\x64\x6e\x65\x79",
              "\x67\x69\x62\x6f\x6e\x73\x69\x67\x6e\x61\x67\x65\x2e\x73\x65",
              "\x64\x73\x2d\x6d\x67\x6d\x74\x2d\x30\x31\x2e\x70\x61\x73\x73\x61\x75\x2e\x73\x73\x77",
              "\x73\x69\x67\x6e\x61\x67\x65\x2e\x65\x32\x72\x2e\x6e\x6c",
              "\x74\x72\x67\x73\x69\x67\x6e\x61\x67\x65\x2e\x65\x75",
              "\x6e\x65\x6d\x61\x6b\x2e\x74\x76",
            ];
            N =
              b.indexOf(a) >= 0
                ? "\x20\x20\x2a\x2a\x2a\x20\x50\x6c\x65\x61\x73\x65\x20\x61\x64\x64\x20\x74\x68\x65\x20\x6c\x69\x63\x65\x6e\x73\x65\x2c\x20\x63\x6f\x6e\x74\x61\x63\x74\x20\x69\x6e\x66\x6f\x40" +
                  a +
                  "\x20\x2a\x2a\x2a"
                : "\x20\x20\x2a\x2a\x2a\x20\x54\x68\x69\x73\x20\x70\x6c\x61\x79\x65\x72\x20\x69\x73\x20\x70\x6f\x77\x65\x72\x65\x64\x20\x62\x79\x20\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d\x20\x2a\x2a\x2a";
          }),
          (b.clearDisplayOnscreenMessage = function () {
            clearTimeout(ec),
              (gb.eMsgCmd = w),
              aa ? b.removeEmergencyMessage() : Mc();
          }),
          (Fc = function (a) {
            var e,
              f,
              g,
              h,
              j,
              k,
              l,
              m,
              c = null,
              d = {};
            if (Fa != a)
              return void i.log(
                "\x77\x61\x72\x6e",
                "\x2a\x2a\x2a\x20\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x3a\x20" +
                  +a +
                  "\x2c" +
                  Fa
              );
            if (pb && !fb)
              for (h = 0, j = ob.length; j > h; h++)
                if (((k = ob[h]), k.adReady)) {
                  if (k.currentAdCount >= k.adCount) {
                    (k.adReady = !1), Uc(h, 0);
                    continue;
                  }
                  !k.noMainPlay &&
                    k.files[k.index] &&
                    k.files[k.index].filename &&
                    ((c = k.files[k.index].filename), (qb = !0)),
                    Ib[Ha].forEach(function (a) {
                      d[a] = k.files[k.index][a] || null;
                    }),
                    (e = parseInt(k.files[k.index].duration)),
                    (f = k.files[k.index].fullscreen),
                    (g = k.files[k.index].option),
                    (k.index = (k.index + 1) % k.files.length),
                    (k.currentAdCount += 1);
                  break;
                }
            if (
              wa &&
              !c &&
              ((l = !1),
              (qb = !1),
              Aa[Ca] &&
                eb[Aa[Ca].filename] &&
                eb[Aa[Ca].filename].subIndex &&
                (i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x75\x73\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x61\x6d\x65\x20\x6e\x65\x78\x74\x46\x69\x6c\x65\x49\x6e\x64\x65\x78\x20\x77\x69\x74\x68\x20\x73\x75\x62\x49\x6e\x64\x65\x78\x20" +
                    eb[Aa[Ca].filename].subIndex
                ),
                (l = !0)),
              Aa[Ca] &&
                Aa[Ca].filename.match(G.videoRegex) &&
                vb &&
                wb &&
                (i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x75\x73\x69\x6e\x67\x20\x74\x68\x65\x20\x73\x61\x6d\x65\x20\x6e\x65\x78\x74\x46\x69\x6c\x65\x49\x6e\x64\x65\x78\x20\x77\x69\x74\x68\x20\x76\x69\x64\x65\x6f\x43\x68\x75\x6e\x6b\x20" +
                    wb
                ),
                (l = !0)),
              l ||
                ((Ca = (Ca + 1) % Aa.length),
                0 === Ca && Ba && Aa.length > 2 && Ec(Aa)),
              (c = Aa[Ca] && Aa[Ca].filename),
              (e = parseInt(Aa[Ca].duration)),
              Ib[Ha].forEach(function (a) {
                d[a] || (d[a] = Aa[Ca][a]);
              }),
              (f = Aa[Ca].fullscreen),
              (g = Aa[Ca].option),
              mb && 0 == Ca && nb.length)
            )
              return (
                (mb = !1),
                fb && (nb[7] = Da),
                b.startPlay.apply(this, nb),
                void i.log(
                  "\x69\x6e\x66\x6f",
                  "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x68\x61\x6e\x67\x65\x20\x63\x61\x6c\x6c\x65\x64"
                )
              );
            if (c) {
              if (
                (Tb &&
                  (Wb(),
                  La.currentTicker && dc(La.currentTicker),
                  (Tb = !1),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x72\x65\x6c\x6f\x61\x64\x65\x64\x20\x75\x72\x6c\x20\x74\x6f\x20\x66\x6c\x75\x73\x68\x20\x6d\x65\x6d\x6f\x72\x79\x20\x6c\x65\x61\x6b\x73"
                  )),
                0 == Ca && !l)
              ) {
                if (((m = Date.now()), 1e3 > m - Ea))
                  return (
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x64\x75\x72\x61\x74\x69\x6f\x6e\x20\x69\x73\x20\x6c\x65\x73\x73\x20\x74\x68\x61\x6e\x20\x31\x20\x73\x65\x63\x6f\x6e\x64\x2c\x20\x64\x65\x6c\x61\x79\x69\x6e\x67\x20\x66\x6f\x72\x20\x61\x20\x73\x65\x63\x6f\x6e\x64"
                    ),
                    void setTimeout(function () {
                      (Ea = Date.now()), Dc(c, e, Fc, d, f, g);
                    }, 5e3)
                  );
                Ea = m;
              }
              Dc(c, e, Fc, d, f, g);
            }
          }),
          (Gc = function (a, c) {
            qc(),
              sc(),
              Jc(),
              clearTimeout(za),
              clearTimeout(ja),
              clearTimeout(ka),
              clearTimeout(la),
              clearTimeout(ma),
              clearTimeout(ec),
              Jb.forEach(function (a) {
                uc(a);
              }),
              Ib.custom.forEach(function (a) {
                ra[a] = !1;
              }),
              Object.keys(qa).forEach(function (a) {
                Bc(a);
              }),
              j.removeAllWebLinkViews(),
              Ub(!1),
              dd(),
              ad(),
              c || b.pauseAds(),
              e(
                "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x6f\x6d\x78",
                function () {
                  e(
                    "\x73\x75\x64\x6f\x20\x70\x6b\x69\x6c\x6c\x20\x6c\x69\x76\x65\x73\x74\x72\x65\x61\x6d\x65\x72",
                    function () {
                      a && setTimeout(a, 100);
                    }
                  );
                }
              );
          }),
          (b.startPlaySync = function () {
            i.log(
              "\x69\x6e\x66\x6f",
              "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x68\x61\x6e\x67\x65\x20\x72\x65\x71\x75\x65\x73\x74\x20\x72\x65\x63\x65\x69\x76\x65\x64"
            ),
              1 != Aa.length || pb
                ? ((nb = arguments), (mb = !0))
                : (i.log(
                    "\x69\x6e\x66\x6f",
                    "\x63\x61\x6c\x6c\x69\x6e\x67\x20\x63\x68\x61\x6e\x67\x65\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x6d\x6d\x65\x64\x69\x61\x74\x65\x20\x73\x69\x6e\x63\x65\x20\x61\x20\x73\x69\x6e\x67\x6c\x65\x20\x76\x69\x64\x65\x6f\x20\x69\x6e\x20\x6c\x6f\x6f\x70\x20\x62\x65\x69\x6e\x67\x20\x70\x6c\x61\x79\x65\x64"
                  ),
                  b.startPlay.apply(this, arguments));
          }),
          (b.startPlay = function (a, c, d, e, f, g, h, j, k, l) {
            var m = k || fb;
            if (
              (k
                ? ((mb = !0), (fb = !0), (Da = Ca))
                : ((nb = arguments), (fb = !1)),
              (Ma = JSON.parse(JSON.stringify(c))),
              (h = h || function () {}),
              -1 == yb.indexOf(d))
            )
              return h(
                "\x4c\x61\x79\x6f\x75\x74\x20\x6e\x6f\x74\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64"
              );
            if (
              L.indexOf("\x70\x6f\x72\x74\x72\x61\x69\x74") >= 0 &&
              -1 == d.indexOf("\x63\x75\x73\x74\x6f\x6d")
            )
              switch (d) {
                case "\x31":
                  d = "\x32\x61\x70";
                  break;
                default:
                  d = d.replace("\x32\x37\x30", "");
              }
            (Fa = (Fa + 1) % 256),
              Gc(function () {
                var k, n, o, p, q;
                return (
                  (wa = !0),
                  (ya = !1),
                  (ab = !1),
                  d && (Ha = d),
                  (Ia = e),
                  (Ja = f),
                  g && (Ka = g),
                  (Pa = null),
                  (Ra = 0),
                  (Sa = 0),
                  e &&
                    ((k = parseInt(e.xoffset) || 0),
                    (n = parseInt(e.yoffset) || 0),
                    (o = parseInt(e.length)),
                    (p = parseInt(e.width)),
                    o && p && o >= 40 && p >= 40
                      ? (Pa =
                          k + "\x20" + n + "\x20" + (k + o) + "\x20" + (n + p))
                      : i.log(
                          "\x77\x61\x72\x6e",
                          "\x2a\x2a\x2a\x20\x63\x75\x73\x74\x6f\x6d\x20\x76\x69\x64\x65\x6f\x20\x77\x69\x6e\x64\x6f\x77\x20\x6e\x6f\x74\x20\x73\x65\x74\x20\x64\x75\x65\x20\x74\x6f\x20\x77\x72\x6f\x6e\x67\x20\x70\x61\x72\x61\x6d\x65\x74\x65\x72\x73\x2c\x20" +
                            o +
                            "\x2c" +
                            p
                        ),
                    (Qa = e.mainzoneOnly || !1),
                    e.fullscreenWidth && e.fullscreenHeight
                      ? ((Ra = parseInt(e.fullscreenWidth)),
                        (Sa = parseInt(e.fullscreenHeight)))
                      : ((Ra = Qa ? 0 : o || 0), (Sa = Qa ? 0 : p || 0))),
                  Jb.forEach(function (a) {
                    var c,
                      d,
                      e,
                      g,
                      b = null;
                    f && f[a] && (b = f[a]),
                      b
                        ? ((c = parseInt(b.xoffset) || 0),
                          (d = parseInt(b.yoffset) || 0),
                          (e = parseInt(b.length)),
                          (g = parseInt(b.width)),
                          e &&
                            g &&
                            (Ta[a] =
                              c +
                              "\x20" +
                              d +
                              "\x20" +
                              (c + e) +
                              "\x20" +
                              (d + g)))
                        : (Ta[a] = null);
                  }),
                  Wb(),
                  Ub(!0),
                  (Ca = j ? j : 0),
                  (wb = 0),
                  (q = a ? a.length : 0),
                  0 == q
                    ? (Wa ||
                        dc(
                          "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x73\x20\x65\x6d\x70\x74\x79\x20\x61\x6e\x64\x20\x68\x65\x6e\x63\x65\x20\x63\x61\x6e\x20\x6e\x6f\x74\x20\x70\x6c\x61\x79"
                        ),
                      (wa = !1),
                      h(
                        "\x4e\x6f\x20\x66\x69\x6c\x65\x73\x20\x74\x6f\x20\x50\x6c\x61\x79"
                      ))
                    : ((Aa = a),
                      Aa.forEach(function (a) {
                        var b = a.filename;
                        b && b.match(G.mediaRss) && Yc(b),
                          b && b.match(G.localFolderRegex) && $c(b),
                          !(
                            a.option &&
                            a.option.bannerText &&
                            b &&
                            b.match(G.videoRegex)
                          ) ||
                            (La && La.bannerText) ||
                            Vb(b, a.option.bannerText, a.duration),
                          Ib[Ha].forEach(function (c) {
                            (b = a[c]),
                              b &&
                                (b.match(G.mediaRss) && Yc(b),
                                b.match(G.localFolderRegex) && $c(b));
                          });
                      }),
                      (qb = !1),
                      (Oa = !1),
                      m || b.startAds(),
                      c &&
                        ((La.behavior = c.behavior || "\x73\x6c\x69\x64\x65"),
                        (La.textSpeed = c.textSpeed || 3)),
                      bc(
                        (!c ||
                          c.disabled ||
                          (_ &&
                            0 ==
                              La.behavior.indexOf(
                                "\x6f\x70\x65\x6e\x76\x67"
                              ))) &&
                          M
                          ? 0
                          : 1
                      ),
                      0 === Ca && Ba && Aa.length > 2 && Ec(Aa),
                      Dc(
                        Aa[Ca].filename,
                        parseInt(Aa[Ca].duration),
                        Fc,
                        Aa[Ca],
                        Aa[Ca].fullscreen,
                        Aa[Ca].option
                      ),
                      c && !c.disabled
                        ? ((La.bannerText = c.bannerText),
                          (La.textSpeed = c.textSpeed),
                          (c.tickerHeight = parseInt(c.tickerHeight || 60)),
                          (c.tickerHeight < 60 || c.tickerHeight > 200) &&
                            (c.tickerHeight = 60),
                          ic(c.tickerHeight),
                          (La.tickerHeight = c.tickerHeight),
                          (La.isRssFeed = c.isRssFeed),
                          (La.rssLink = c.rssLink),
                          (La.rssEncodeAsBinary = c.rssEncodeAsBinary),
                          (La.useDescription = c.useDescription),
                          (La.feedDelay = 1e3 * (c.feedDelay || 10)),
                          (La.tickerFontSize = c.tickerFontSize || 28),
                          (La.tickerWidth = c.tickerWidth || 0),
                          (La.tickerX = c.tickerX || 0),
                          (La.tickerY = c.tickerY || 0),
                          c.style && ((La.style = c.style), hc(La.style)),
                          La.isRssFeed
                            ? Wc(c.rssLink)
                            : ((c.messages = c.messages || ""),
                              "\x73\x6c\x69\x64\x65" == La.behavior
                                ? ((La.messages = c.messages.split("\n")),
                                  M || La.messages.push(N),
                                  cd())
                                : ((c.messages = c.messages.replace(
                                    /\n/g,
                                    "\x20\x20\x20\x2e\x2e\x2e\x20\x20\x20"
                                  )),
                                  (La.currentTicker = c.messages),
                                  (La.messages[0] = c.messages),
                                  dc(c.messages))))
                        : cc(),
                      i.testLog(
                        "\x73\x74\x61\x72\x74\x5f\x70\x6c\x61\x79",
                        d,
                        c,
                        "" + a
                      ),
                      void h(null, l))
                );
              }, m);
          }),
          (b.stopPlay = function (a) {
            (wa = !1),
              (nb = []),
              Xb(),
              cc(),
              i.testLog("\x73\x74\x6f\x70\x5f\x70\x6c\x61\x79"),
              Gc(a);
          }),
          (b.showKioskUi = function (a) {
            (a = a || function () {}),
              ya || (xa = wa),
              (Fa = (Fa + 1) % 256),
              (ya = !0),
              b.stopPlay(a);
          }),
          (b.stopKioskUi = function () {
            b.stopFile();
          }),
          (b.playFile = function (a, c, d, e) {
            var f = {},
              g = null;
            ya || (xa = wa),
              a.match(G.audioRegex) ? (f.main = !0) : (f.main = !1),
              /(rtsp|http|https):\/\//.test(a) && (g = "\x63\x6f\x72\x73"),
              (Fa = (Fa + 1) % 256),
              (ya = !0),
              clearTimeout(za),
              b.stopPlay(function () {
                za = setTimeout(function () {
                  (wa = !0),
                    (qb = !1),
                    i.log(
                      "\x69\x6e\x66\x6f",
                      "\x70\x6c\x61\x79\x46\x69\x6c\x65\x20" + a
                    ),
                    Dc(
                      a,
                      d || 3600,
                      function (a) {
                        return Fa != a
                          ? void i.log(
                              "\x77\x61\x72\x6e",
                              "\x2a\x2a\x2a\x20\x73\x6b\x69\x70\x70\x69\x6e\x67\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x69\x6e\x20\x70\x6c\x61\x79\x46\x69\x6c\x65\x3a\x20" +
                                a +
                                "\x2c" +
                                Fa
                            )
                          : (e || b.stopFile(), void (c && c()));
                      },
                      null,
                      !0,
                      f,
                      g
                    );
                }, 1e3);
              });
          }),
          (b.pauseFile = function () {
            ga && oc("\x70\x61\x75\x73\x65", ga),
              ha && oc("\x70\x61\x75\x73\x65", ha);
          }),
          (b.stopFile = function () {
            ya &&
              ((ya = !1),
              clearTimeout(za),
              b.stopPlay(function () {
                za = setTimeout(function () {
                  (wa = xa),
                    wa && b.startPlay(Aa, Ma, Ha, Ia, Ja, Ka, null, Ca);
                }, 1e3);
              }));
          }),
          (b.showProgress = function (a, b) {
            if (T && !Wa) {
              var c = "\x20";
              a &&
                (c =
                  a +
                  "\x20\x42\x79\x74\x65\x73\x20\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x64\x2c\x20\x43\x75\x72\x72\x65\x6e\x74\x20\x53\x70\x65\x65\x64\x20" +
                  b +
                  "\x20\x42\x79\x74\x65\x73\x2f\x73\x65\x63"),
                dc(
                  "\x44\x6f\x77\x6e\x6c\x6f\x61\x64\x20\x69\x6e\x20\x50\x72\x6f\x67\x72\x65\x73\x73\x3a\x20\x20\x20" +
                    c
                );
            }
          }),
          (b.showNormalTicker = function () {
            La.currentTicker ? dc(La.currentTicker) : cc();
          }),
          (b.pausePlaylist = function () {
            switch (((ab = !ab), cb)) {
              case "\x76\x69\x64\x65\x6f":
                ab
                  ? clearTimeout(ja)
                  : (ja = setTimeout(function () {
                      i.log(
                        "\x77\x61\x72\x6e",
                        "\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x76\x69\x64\x65\x6f\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                          db +
                          "\x2c" +
                          bb
                      ),
                        qc();
                    }, bb)),
                  ga && oc("\x70\x61\x75\x73\x65", ga),
                  ha && oc("\x70\x61\x75\x73\x65", ha);
                break;
              case "\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d":
                ab
                  ? clearTimeout(la)
                  : (la = setTimeout(function () {
                      i.log(
                        "\x64\x65\x62\x75\x67",
                        "\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                          db +
                          "\x2c" +
                          bb
                      ),
                        Jc();
                    }, bb)),
                  ga && oc("\x70\x61\x75\x73\x65", ga),
                  ha && oc("\x70\x61\x75\x73\x65", ha);
                break;
              case "\x61\x75\x64\x69\x6f":
                ab
                  ? clearTimeout(ka)
                  : (ka = setTimeout(function () {
                      i.log(
                        "\x77\x61\x72\x6e",
                        "\x41\x75\x64\x69\x6f\x20\x77\x61\x74\x63\x68\x64\x6f\x67\x20\x54\x69\x6d\x65\x6f\x75\x74\x20\x65\x78\x70\x69\x72\x65\x64\x2c\x20\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x61\x75\x64\x69\x6f\x20\x70\x72\x6f\x63\x65\x73\x73\x3a\x20" +
                          db +
                          "\x2c" +
                          bb
                      ),
                        sc();
                    }, bb)),
                  ha && oc("\x70\x61\x75\x73\x65", ha);
                break;
              case "\x70\x64\x66":
                ab && (ea ? clearTimeout(da) : clearTimeout(ma));
                break;
              case "\x69\x6d\x61\x67\x65":
              case "\x7a\x69\x70":
              case "\x77\x65\x62\x4c\x69\x6e\x6b":
                ab && clearTimeout(ma);
                break;
              default:
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x43\x75\x72\x72\x65\x6e\x74\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x66\x69\x6c\x65\x20" +
                    db +
                    "\x20\x6f\x66\x20\x75\x6e\x6b\x6e\x6f\x77\x6e\x20\x74\x79\x70\x65\x20" +
                    cb +
                    "\x20\x77\x68\x65\x6e\x20\x70\x6c\x61\x79\x20" +
                    (ab
                      ? "\x70\x61\x75\x73\x65\x64"
                      : "\x72\x65\x73\x75\x6d\x65\x64")
                );
            }
            return (
              ab ||
                "\x76\x69\x64\x65\x6f" === cb ||
                "\x6c\x69\x76\x65\x53\x74\x72\x65\x61\x6d" === cb ||
                "\x61\x75\x64\x69\x6f" === cb ||
                Fc(Fa),
              ab
            );
          }),
          (b.stepBackward = function () {
            Hc(),
              (Ca = Aa.length > 1 ? (Ca + Aa.length - 2) % Aa.length : 0),
              Fc(Fa);
          }),
          (b.stepForward = function () {
            Hc(), Fc(Fa);
          }),
          (b.startAds = function (a) {
            a &&
              ((ob = []),
              a.forEach(function (a) {
                var b = a.files,
                  c = a.interval,
                  d = a.noMainPlay;
                b &&
                  ob.push({
                    files: b,
                    interval: c && c > 5 ? 1e3 * c : 5e3,
                    adCount: parseInt(a.adCount || 1),
                    noMainPlay: d,
                  });
              })),
              ob.length
                ? ((pb = !0),
                  ob.forEach(function (a, b) {
                    (a.index = 0),
                      (a.adReady = !1),
                      clearTimeout(a.timer),
                      Uc(b, 0);
                  }))
                : ((pb = !1), b.stopAds());
          }),
          (b.pauseAds = function () {
            (pb = !1),
              ob.forEach(function (a) {
                (a.adReady = !1), clearTimeout(a.timer);
              });
          }),
          (b.stopAds = function () {
            b.pauseAds(), (ob = []);
          }),
          (Kc = 0),
          (b.startLoungeMusic = function (a, b, c, d) {
            (hb.files = a),
              (hb.playRandom = b || !1),
              (hb.volume = c || 100),
              (hb.playing = !0),
              (Kc += 1),
              o(hb.process)
                ? (hb.process.stdin.pause(),
                  n(hb.process.pid, function () {
                    setTimeout(function () {
                      Lc(0, Kc, d);
                    }, 3e3);
                  }))
                : Lc(0, Kc, d);
          }),
          (b.stopLoungeMusic = function () {
            hb.playing &&
              ((hb.playing = !1),
              o(hb.process) &&
                (hb.process.stdin.pause(), n(hb.process.pid, function () {})));
          }),
          (b.setResolution = function (a, b, c) {
            (J = a),
              (L = b),
              (K = c),
              i.log(
                "\x69\x6e\x66\x6f",
                "\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x20\x63\x68\x61\x6e\x67\x65\x64\x20\x74\x6f\x20" +
                  a +
                  "\x2c\x6f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x20\x73\x65\x74\x20\x74\x6f\x20\x3a\x20" +
                  b +
                  "\x2c\x65\x64\x69\x64\x20\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x20\x69\x73\x20\x3a\x20" +
                  c
              );
          }),
          (b.setLicense = function (a) {
            (a = a || !1),
              (M = a),
              i.testLog(
                "\x6c\x69\x63\x65\x6e\x73\x65\x5f\x73\x74\x61\x74\x75\x73",
                a
              );
          }),
          (b.setAnimationStatus = function (a, b, c) {
            (Ua = a),
              (Va = b),
              ((!$ && "\x66\x61\x64\x65" == Va) || !Va) &&
                (Va = "\x72\x69\x67\x68\x74"),
              (!c || U) &&
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x65\x6e\x61\x62\x6c\x65\x50\x69\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x28" +
                    Ua +
                    "\x2c\x22" +
                    Va +
                    "\x22\x29"
                );
          }),
          (b.setSystemMessagesHide = function (a) {
            Wa = a;
          }),
          (b.setDisplayClock = function (a, c, d) {
            return (
              (gb.showClock = a.enable),
              a.enable &&
                ((gb.clockPosition = "\x74\x6f\x70" == a.position ? A : B),
                (gb.clockFormat = 0 == a.format.indexOf("\x32\x34") ? C : D),
                (gb.clockExtendedFormat = a.format)),
              (gb.eMsgCmd = c && c.enable && c.msg ? v : w),
              gb.eMsgCmd === v &&
                ((gb.eMsg = c.msg || ""),
                (gb.eMsgHorizontal =
                  "\x6c\x65\x66\x74" == c.hPos
                    ? p
                    : "\x72\x69\x67\x68\x74" == c.hPos
                    ? r
                    : q),
                (gb.eMsgVertical =
                  "\x74\x6f\x70" == c.vPos
                    ? s
                    : "\x62\x6f\x74\x74\x6f\x6d" == c.vPos
                    ? u
                    : t)),
              _
                ? Mc()
                : (aa &&
                    (gb.eMsgCmd === v
                      ? b.setEmergencyMessage(
                          gb.eMsg,
                          gb.eMsgHorizontal,
                          gb.eMsgVertical
                        )
                      : b.removeEmergencyMessage()),
                  void (
                    (!d || U) &&
                    Rb(
                      "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x43\x6c\x6f\x63\x6b\x28" +
                        gb.showClock +
                        "\x2c" +
                        gb.clockExtendedFormat +
                        "\x2c" +
                        gb.clockPosition
                    )
                  ))
            );
          }),
          (Nc = 0),
          (Pc = 0),
          (b.setEmergencyMessage = function (a, e, f) {
            var g = 50,
              h = 20,
              j = 20;
            a
              ? (Pc++,
                b.removeEmergencyMessage(Pc, function (b) {
                  var k, l, m;
                  return b != Pc
                    ? void i.log(
                        "\x77\x61\x72\x6e",
                        "\x73\x74\x61\x6c\x65\x20\x65\x4d\x65\x73\x73\x61\x67\x65\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x69\x67\x6e\x6f\x72\x65\x64\x20" +
                          a
                      )
                    : ((k = c("\x74\x65\x78\x74\x32\x70\x6e\x67")(a, {
                        color: "\x77\x68\x69\x74\x65",
                        font:
                          g +
                          "\x70\x78\x20\x73\x61\x6e\x73\x2d\x73\x65\x72\x69\x66",
                        backgroundColor:
                          "\x72\x67\x62\x61\x28\x30\x2c\x20\x30\x2c\x20\x30\x2c\x30\x2e\x38\x29",
                        lineSpacing: 10,
                        padding: h,
                      })),
                      (m = []),
                      (l =
                        f == s
                          ? j
                          : f == u
                          ? K[1] - (g + h + j)
                          : (K[1] - (g + 2 * h)) / 2),
                      (m = [
                        "\x2d\x62",
                        "\x30\x78\x30\x30\x30\x30",
                        "\x2d\x79",
                        l,
                      ]),
                      e == p && m.push("\x2d\x78", 10),
                      m.push("\x2d"),
                      (ta = d("\x70\x6e\x67\x76\x69\x65\x77\x32", m, {
                        stdio: "\x70\x69\x70\x65",
                      })),
                      ta.on("\x65\x72\x72\x6f\x72", function (a) {
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x70\x6e\x67\x76\x69\x65\x77\x20\x66\x6f\x72\x20\x65\x4d\x65\x73\x73\x61\x67\x65\x20\x73\x70\x61\x77\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a
                        );
                      }),
                      ta.stdin.write(k, function (a) {
                        a &&
                          i.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x65\x4d\x65\x73\x73\x61\x67\x65\x50\x72\x6f\x63\x65\x73\x73\x20\x77\x72\x69\x74\x65\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                              a
                          );
                      }),
                      ta.stderr.on("\x64\x61\x74\x61", function (a) {
                        i.log(
                          "\x69\x6e\x66\x6f",
                          "\x65\x4d\x65\x73\x73\x61\x67\x65\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x65\x72\x72\x3a\x20" +
                            a.toString("\x75\x74\x66\x38")
                        );
                      }),
                      void ta.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
                        i.log(
                          "\x69\x6e\x66\x6f",
                          "\x65\x4d\x65\x73\x73\x61\x67\x65\x50\x72\x6f\x63\x65\x73\x73\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a
                        );
                      }));
                }))
              : b.removeEmergencyMessage();
          }),
          (b.removeEmergencyMessage = function (a, b) {
            (b = b || function () {}),
              o(ta)
                ? ta.stdin.write(String.fromCharCode(27), function (c) {
                    c &&
                      i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x65\x4d\x65\x73\x73\x61\x67\x65\x50\x72\x6f\x63\x65\x73\x73\x20\x71\x75\x69\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                          c
                      ),
                      setTimeout(function () {
                        ta.kill(), b(a);
                      }, 500);
                  })
                : b(a);
          }),
          (Sc = 0),
          (b.setBackgroundColor = function (a, b) {
            (Xa = a),
              (!b || U) &&
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x43\x6f\x6c\x6f\x72\x28\x22" +
                    Xa +
                    "\x22\x29"
                );
          }),
          (b.setImageResize = function (a, b) {
            (Za = a),
              (!b || U) &&
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x66\x69\x74\x49\x6d\x61\x67\x65\x54\x6f\x44\x69\x76\x28" +
                    Za +
                    "\x29"
                );
          }),
          (b.setVideoKeepAspect = function (a) {
            $a = a;
          }),
          (b.setVideoShowSubtitles = function (a) {
            _a = a;
          }),
          (b.setOMXVolume = function (a) {
            1 > a ? (a = 1) : a > 100 && (a = 100),
              (sb = parseInt((2e3 * Math.log(a / 100)) / Math.LN10)),
              (tb = a);
          }),
          (b.setMute = function (a) {
            ub = a ? !0 : !1;
          }),
          (b.getOMXVolume = function () {
            return { volume: tb, mute: ub };
          }),
          (b.setTimeToStopVideo = function (a) {
            vb = a;
          }),
          (b.setLogo = function (a, c, e, f) {
            if (a) {
              b.removeLogo(), (f = f || !1);
              var g = f ? a : G.mediaPath + a;
              (sa = d(
                "\x70\x6e\x67\x76\x69\x65\x77",
                ["\x2d\x78", c, "\x2d\x79", e, g],
                { stdio: "\x70\x69\x70\x65" }
              )),
                sa.on("\x65\x72\x72\x6f\x72", function (a) {
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x70\x6e\x67\x76\x69\x65\x77\x20\x73\x70\x61\x77\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      a
                  );
                });
            } else b.removeLogo();
          }),
          (b.removeLogo = function () {
            o(sa) && sa.kill();
          }),
          (b.setAssetLogs = function (a) {
            ib = a;
          }),
          (b.setYoutubeDl = function (a) {
            (jb = a),
              jb &&
                e(
                  "\x77\x68\x69\x63\x68\x20\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c",
                  function (a, b, c) {
                    a || c
                      ? (i.log(
                          "\x77\x61\x72\x6e",
                          "\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                        ),
                        (jb = !1))
                      : (i.log(
                          "\x69\x6e\x66\x6f",
                          "\x79\x6f\x75\x74\x75\x62\x65\x2d\x64\x6c\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x74\x20" +
                            b
                        ),
                        (jb = b.length > 3 ? !0 : !1));
                  }
                );
          }),
          (b.setMpv = function (a, b) {
            (kb = a),
              kb &&
                e("\x77\x68\x69\x63\x68\x20\x6d\x70\x76", function (a, c, d) {
                  a || d
                    ? (i.log(
                        "\x77\x61\x72\x6e",
                        "\x6d\x70\x76\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65"
                      ),
                      (kb = !1))
                    : (i.log(
                        "\x69\x6e\x66\x6f",
                        "\x6d\x70\x76\x20\x69\x73\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x20\x61\x74\x20" +
                          c
                      ),
                      (kb = c.length > 3 ? !0 : !1),
                      (lb = parseFloat(b)),
                      isNaN(lb) && (lb = 0));
                });
          }),
          (b.setShuffleContent = function (a) {
            Ba = a;
          }),
          (b.setUrlReloadDisable = function (a, b) {
            (Ya = a),
              (!b || U) &&
                Rb(
                  "\x6a\x73\x20\x77\x69\x6e\x64\x6f\x77\x2e\x73\x65\x74\x55\x72\x6c\x52\x65\x6c\x6f\x61\x64\x44\x69\x73\x61\x62\x6c\x65\x28" +
                    Ya +
                    "\x29"
                );
          }),
          (b.setWeblinkCacheEnable = function (a) {
            j.setWeblinkCacheEnable(a);
          }),
          (b.getCurrentPlayingFile = function () {
            return db;
          }),
          (b.getDominationStatus = function () {
            return fb;
          }),
          (Vc = []),
          (b.pauseOpenVg = function (a) {
            a ? ((R = !0), Mc(E)) : (R = !1);
          }),
          (ed = null),
          (fd = new (c("\x65\x76\x65\x6e\x74\x73").EventEmitter)()),
          (b.browserEmitter = fd),
          (gd = function (a) {
            var d,
              c = null;
            (ed = a),
              (d = 0),
              ed.on("\x6d\x65\x73\x73\x61\x67\x65", function (a) {
                var f, g;
                try {
                  c = JSON.parse(a);
                } catch (e) {
                  return void i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x70\x61\x72\x73\x65\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x66\x72\x6f\x6d\x20\x63\x68\x72\x6f\x6d\x65\x20\x73\x6f\x63\x6b\x65\x74\x2c\x20" +
                      a
                  );
                }
                if (!c || !c.type)
                  return void i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x6e\x6f\x20\x64\x61\x74\x61\x20\x66\x72\x6f\x6d\x20\x63\x68\x72\x6f\x6d\x65\x20\x73\x6f\x63\x6b\x65\x74\x2c\x20" +
                      a
                  );
                switch (c.type) {
                  case "\x4c\x4f\x41\x44\x5f\x46\x49\x4e\x49\x53\x48":
                    i.log(
                      "\x69\x6e\x66\x6f",
                      "\x43\x68\x72\x6f\x6d\x65\x20\x6c\x6f\x61\x64\x65\x64\x20\x70\x61\x67\x65\x20" +
                        c.data.slice(0, 50) +
                        "\x3b" +
                        c.data2
                    ),
                      fd.emit("\x6c\x6f\x61\x64\x65\x64", c.data),
                      c.data2 && c.data2 != d && (Nb(), (d = c.data2)),
                      c.data2 || Nb();
                    break;
                  case "\x43\x4f\x4d\x4d\x41\x4e\x44\x5f\x45\x58\x45\x43\x55\x54\x45\x44":
                    X && 0 == X.indexOf("\x6a\x73") && Nb();
                    break;
                  case "\x50\x4c\x41\x59\x4c\x49\x53\x54\x5f\x43\x4d\x44":
                    switch ((f = c.data)) {
                      case "\x62\x61\x63\x6b\x77\x61\x72\x64":
                        b.stepBackward(),
                          i.log(
                            "\x69\x6e\x66\x6f",
                            "\x53\x74\x65\x70\x70\x65\x64\x20\x62\x61\x63\x6b\x77\x61\x72\x64\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"
                          );
                        break;
                      case "\x66\x6f\x72\x77\x61\x72\x64":
                        b.stepForward(),
                          i.log(
                            "\x69\x6e\x66\x6f",
                            "\x53\x74\x65\x70\x70\x65\x64\x20\x66\x6f\x72\x77\x61\x72\x64\x20\x69\x6e\x20\x70\x6c\x61\x79\x6c\x69\x73\x74"
                          );
                        break;
                      case "\x70\x61\x75\x73\x65":
                        (g = b.pausePlaylist()),
                          i.log(
                            "\x69\x6e\x66\x6f",
                            "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x73\x20" +
                              (g
                                ? "\x70\x61\x75\x73\x65\x64"
                                : "\x72\x65\x73\x75\x6d\x65\x64")
                          );
                        break;
                      default:
                        i.log(
                          "\x69\x6e\x66\x6f",
                          "\x55\x6e\x6b\x6e\x6f\x77\x6e\x20\x50\x4c\x41\x59\x4c\x49\x53\x54\x5f\x43\x4d\x44\x20\x66\x72\x6f\x6d\x20\x6b\x65\x79\x70\x72\x65\x73\x73\x3a\x20" +
                            f
                        );
                    }
                    break;
                  case "\x42\x52\x4f\x57\x53\x45\x52\x5f\x50\x41\x47\x45\x5f\x45\x52\x52\x4f\x52":
                    c.data &&
                      i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x42\x72\x6f\x77\x73\x65\x72\x20\x50\x61\x67\x65\x20\x45\x72\x72\x6f\x72\x20\x3a\x20" +
                          c.data.message
                      );
                    break;
                  default:
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x75\x6e\x6b\x6e\x6f\x77\x6e\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x66\x72\x6f\x6d\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x3a\x20" +
                        c.type
                    );
                }
              });
          }),
          (b.startChromeSocket = function (a) {
            if ((a && (fa = a), fa && $)) {
              var b = new (c("\x77\x73").Server)({
                server: fa,
                perMessageDeflate: !1,
                verifyClient: function (a) {
                  return a.req.headers.host &&
                    -1 !==
                      a.req.headers.host.indexOf(
                        "\x31\x32\x37\x2e\x30\x2e\x30\x2e\x31"
                      )
                    ? !0
                    : !1;
                },
              });
              i.log(
                "\x69\x6e\x66\x6f",
                "\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x77\x65\x62\x73\x6f\x63\x6b\x65\x74"
              ),
                b.on("\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e", function (a) {
                  (S = !0), gd(a);
                }),
                b.on("\x65\x72\x72\x6f\x72", function (a) {
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x73\x6f\x63\x6b\x65\x74\x20\x65\x72\x72\x6f\x72\x20" + a
                  );
                }),
                b.on("\x63\x6c\x6f\x73\x65", function () {
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x73\x6f\x63\x6b\x65\x74\x20\x63\x6c\x6f\x73\x65\x64"
                  );
                });
            }
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x77\x67\x65\x74\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var l,
          d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").spawn,
          e = c("\x66\x73"),
          f = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          g = c("\x2e\x2f\x70\x69\x2d\x76\x69\x65\x77\x65\x72"),
          h = c("\x2e\x2f\x70\x69\x2d\x6d\x61\x69\x6e"),
          i = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x65\x78\x74\x72\x61\x63\x74\x2d\x7a\x69\x70"
          ),
          j = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          k = c("\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e"),
          m = 0;
        b.getGroupFiles = function (a, b, c) {
          var n, o, p, q, r, s, t;
          return (
            (c = c || function () {}),
            b
              ? ((p = [
                  "\x2d\x72\x4e\x6e\x48\x64",
                  "\x2d\x2d\x66\x6f\x6c\x6c\x6f\x77\x2d\x74\x61\x67\x73\x3d\x61",
                  "\x2d\x2d\x6e\x6f\x2d\x70\x61\x72\x65\x6e\x74",
                  "\x2d\x2d\x6e\x6f\x2d\x63\x68\x65\x63\x6b\x2d\x63\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65",
                  "\x2d\x74",
                  "\x32\x30",
                  "\x2d\x2d\x77\x61\x69\x74\x72\x65\x74\x72\x79",
                  "\x36\x30",
                  "\x2d\x2d\x72\x65\x74\x72\x79\x2d\x63\x6f\x6e\x6e\x72\x65\x66\x75\x73\x65\x64",
                  "\x2d\x2d\x6e\x6f\x2d\x63\x61\x63\x68\x65",
                ]),
                p.push("\x2d\x52"),
                p.push(b),
                p.push(
                  k.media_server +
                    "\x2f\x73\x79\x6e\x63\x5f\x66\x6f\x6c\x64\x65\x72\x73\x2f" +
                    a +
                    "\x2f" +
                    b
                ),
                m > 0 &&
                  (f.log(
                    "\x69\x6e\x66\x6f",
                    "\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x70\x72\x65\x76\x69\x6f\x75\x73\x20\x77\x67\x65\x74\x3a" +
                      l.pid
                  ),
                  l.kill()),
                m++,
                (l = d("\x77\x67\x65\x74", p, {
                  cwd: j.mediaDir,
                  stdio: "\x70\x69\x70\x65",
                })),
                (o = l),
                f.log(
                  "\x69\x6e\x66\x6f",
                  "\x53\x70\x61\x77\x6e\x69\x6e\x67\x20\x77\x67\x65\x74\x20" +
                    p +
                    "\x3b\x20\x52\x75\x6e\x6e\x69\x6e\x67\x20\x61\x73\x20\x50\x49\x44\x20" +
                    l.pid
                ),
                l.on("\x65\x72\x72\x6f\x72", function (a) {
                  f.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x77\x67\x65\x74\x20\x73\x70\x61\x77\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      a
                  );
                }),
                (q = 0),
                (r = 0),
                (t = function () {
                  h.writeToConfig(
                    { syncInProgress: !0, wgetBytes: s, wgetSpeed: q },
                    !0
                  ),
                    g.showProgress(s, q),
                    (n = setTimeout(t, 3e4));
                }),
                t(),
                l.stdout.on("\x64\x61\x74\x61", function (a) {
                  f.log("\x69\x6e\x66\x6f", "" + a);
                }),
                l.stderr.on("\x64\x61\x74\x61", function (a) {
                  var d,
                    e,
                    b = "" + a,
                    c = b.match(/%/g);
                  c &&
                    ((r += 50 * c.length),
                    (s =
                      r > 1e3
                        ? (r / 1e3).toFixed(2) + "\x4d"
                        : r.toFixed(2) + "\x4b"),
                    (d = b.indexOf("\x25")),
                    (e = b
                      .slice(d + 1)
                      .trim()
                      .match(/[\w.]+/)),
                    e && e.length > 0 && (q = e[0]));
                }),
                l.stdin.on("\x65\x72\x72\x6f\x72", function (a) {
                  f.log(
                    "\x69\x6e\x66\x6f",
                    "\x77\x67\x65\x74\x20\x73\x74\x64\x69\x6e\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      a
                  );
                }),
                void l.on("\x65\x78\x69\x74", function (a, b) {
                  return (
                    f.log(
                      "\x69\x6e\x66\x6f",
                      "\x77\x67\x65\x74\x20\x73\x74\x6f\x70\x70\x65\x64\x20\x77\x69\x74\x68\x20\x63\x6f\x64\x65\x20" +
                        a +
                        "\x20\x61\x6e\x64\x20\x73\x69\x67\x6e\x61\x6c\x20" +
                        b +
                        "\x3b\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x49\x6e\x50\x72\x6f\x67\x72\x65\x73\x73\x43\x6f\x75\x6e\x74\x3a\x20" +
                        m
                    ),
                    clearTimeout(n),
                    (o = null),
                    m--,
                    m > 0
                      ? c(-1)
                      : ((l = null),
                        (q = 0),
                        g.showNormalTicker(),
                        h.writeToConfig({ syncInProgress: !1 }, !0),
                        void e.unlink(
                          j.mediaPath +
                            "\x72\x6f\x62\x6f\x74\x73\x2e\x74\x78\x74",
                          function () {
                            i.extractStart(),
                              0 !== a
                                ? c(
                                    "\x77\x67\x65\x74\x20\x70\x72\x6f\x63\x65\x73\x73\x20\x65\x78\x69\x74\x65\x64\x20\x77\x69\x74\x68\x20\x63\x6f\x64\x65\x20" +
                                      a,
                                    a
                                  )
                                : c();
                          }
                        ))
                  );
                }))
              : c(
                  "\x54\x68\x65\x72\x65\x20\x69\x73\x20\x6e\x6f\x20\x67\x72\x6f\x75\x70\x20\x74\x6f\x20\x66\x65\x74\x63\x68"
                )
          );
        };
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x65\x76\x65\x6e\x74\x73\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var m,
          n,
          d = c("\x66\x73"),
          e = c("\x70\x61\x74\x68"),
          f = c("\x61\x73\x79\x6e\x63"),
          g = c("\x2e\x2f\x70\x69\x2d\x6d\x61\x69\x6e"),
          h = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          i = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          j = {
            category: "\x70\x6c\x61\x79\x65\x72",
            ts: 0,
            log: { playerUptime: 0, tvUptime: 0 },
          },
          k = 0.25,
          l = function (a) {
            d.readdir(i.logsDir, function (b, c) {
              return b
                ? void h.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20\x6c\x6f\x67\x73\x20\x64\x69\x72\x65\x63\x74\x6f\x72\x79\x2c" +
                      b
                  )
                : void f.eachSeries(
                    c,
                    function (b, c) {
                      b.slice(0, b.indexOf("\x2e")) < a
                        ? d.readFile(
                            e.join(i.logsDir, b),
                            "\x75\x74\x66\x38",
                            function (a, d) {
                              d && g.uploadLog(b, d), c();
                            }
                          )
                        : c();
                    },
                    function () {
                      g.uploadForeverLog();
                    }
                  );
            });
          };
        (b.deleteLog = function (a) {
          d.unlink(e.join(i.logsDir, a), function () {});
        }),
          (b.storeEvent = function (a, b, c) {
            var f = { category: a, ts: Date.now(), type: b, description: c },
              g = e.join(
                i.logsDir,
                new Date().setMinutes(0, 0, 0) + "\x2e\x65\x76\x65\x6e\x74\x73"
              );
            d.appendFile(g, JSON.stringify(f) + "\n", function () {});
          }),
          (m = function () {
            var b,
              c,
              a = new Date().setMinutes(0, 0, 0);
            if ((l(a), (b = g.statusLog()), a > j.ts)) {
              (j.ts = a), (j.log = {}), (j.log.playerUptime = k);
              for (c in b) b[c] && (j.log[c] = k);
            } else {
              j.log.playerUptime += k;
              for (c in b) b[c] && (j.log[c] = (j.log[c] || 0) + k);
            }
          }),
          (n = function () {
            d.writeFile(
              e.join(i.logsDir, j.ts + "\x2e\x6c\x6f\x67"),
              JSON.stringify(j, null, 4),
              function () {
                m();
              }
            ),
              setTimeout(n, 36e5 * k);
          }),
          (b.logFilePlay = function (a) {
            (a = a.replace(/[^a-zA-Z0-9]/g, "\x5f")),
              j.ts && (j.log[a] = (j.log[a] || 0) + 1);
          }),
          (b.startLog = function () {
            var a = new Date(),
              b = 3600 * k,
              c = (a.getSeconds() + 60 * a.getMinutes()) % b;
            300 > c && (b += 300 - c), m(), setTimeout(n, 1e3 * b);
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x61\x73\x73\x65\x74\x73\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var n,
          o,
          p,
          d = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          e = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65"
          ),
          f = c("\x66\x73"),
          g = c("\x70\x61\x74\x68"),
          h = c("\x61\x73\x79\x6e\x63"),
          i = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          j = c("\x65\x6a\x73"),
          l =
            (c("\x6c\x6f\x64\x61\x73\x68"),
            c(
              "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x66\x69\x6c\x65\x2d\x75\x74\x69\x6c"
            )),
          m = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          );
        "\x70\x69" == d.env
          ? (n = c("\x2e\x2f\x70\x69\x2d\x6d\x61\x69\x6e"))
          : ((n = c("\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x6d\x61\x69\x6e")),
            (o = c("\x6d\x6f\x6e\x67\x6f\x6f\x73\x65")),
            (p = o.model("\x41\x73\x73\x65\x74"))),
          (b.index = function (a, b) {
            var j,
              k = a.installation,
              l = null,
              m = {
                sizes: { total: 0, used: 0 },
                files: [],
                dbdata: null,
                systemAssets: d.systemAssets,
              };
            a.query.installation && (k = a.query.installation),
              a.query.label && (l = a.query.label),
              (j = g.join(d.mediaDir, k)),
              h.series(
                [
                  function (b) {
                    "\x70\x69" != d.env
                      ? i("\x64\x75\x20\x2d\x6d\x73\x20" + j, function (e, f) {
                          var h = parseInt(f);
                          (m.sizes.used = h),
                            c("\x6d\x6f\x6e\x67\x6f\x6f\x73\x65")
                              .model("\x55\x73\x65\x72")
                              .findOne(
                                { username: a.installation },
                                function (a, c) {
                                  !a &&
                                    c &&
                                    ((m.sizes.total =
                                      c.serverLicenses * d.spacePerLicense +
                                      (c.storageSpace || 0)),
                                    (m.sizes.total =
                                      m.sizes.total > 300
                                        ? m.sizes.total
                                        : 300)),
                                    b();
                                }
                              );
                        })
                      : b();
                  },
                  function (a) {
                    f.readdir(j, function (b, c) {
                      if (b) a(b);
                      else {
                        var d = c.filter(function (a) {
                          return "\x5f" != a.charAt(0) && "\x2e" != a.charAt(0);
                        });
                        d.length &&
                          (m.files = d.sort(function (a, b) {
                            return a.localeCompare(b, void 0, { numeric: !0 });
                          })),
                          a();
                      }
                    });
                  },
                  function (a) {
                    "\x70\x69" != d.env
                      ? p.find({ installation: k }, function (b, c) {
                          !b && c && (m.dbdata = c), a();
                        })
                      : a();
                  },
                  function (b) {
                    var c, e, f, g, h, i, j;
                    if ("\x70\x69" == d.env) return b();
                    if (
                      ((c = !0),
                      (e = null),
                      (f = !1),
                      a.collaboratorRights &&
                        a.collaboratorRights.groupIds &&
                        a.collaboratorRights.groupIds.length &&
                        (a.collaboratorRights.asset.restrictAdmin
                          ? ((c = !0), (e = a.collaboratorRights.groupIds))
                          : a.collaboratorRights.asset.restrict &&
                            ((e = a.collaboratorRights.groupIds), (c = !1))),
                      (l || e) && m.dbdata)
                    ) {
                      for (g = 0, h = m.dbdata.length; h > g; g++) {
                        if (
                          m.dbdata[g].groupIds &&
                          m.dbdata[g].groupIds.length
                        ) {
                          for (f = !1, i = 0; i < e.length; i++)
                            if (m.dbdata[g].groupIds.indexOf(e[i]) >= 0) {
                              f = !0;
                              break;
                            }
                        } else f = c;
                        l &&
                          m.dbdata[g].labels &&
                          m.dbdata[g].labels.length &&
                          (f = m.dbdata[g].labels.indexOf(l) >= 0),
                          f ||
                            ((j = m.files.indexOf(m.dbdata[g].name)),
                            j >= 0 && m.files.splice(j, 1));
                      }
                      b();
                    } else b();
                  },
                ],
                function (a) {
                  return a
                    ? e.sendError(
                        b,
                        "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x6d\x65\x64\x69\x61\x20\x64\x69\x72\x65\x63\x74\x6f\x72\x79\x3a\x20" +
                          a
                      )
                    : e.sendSuccess(
                        b,
                        "\x53\x65\x6e\x64\x69\x6e\x67\x20\x6d\x65\x64\x69\x61\x20\x64\x69\x72\x65\x63\x74\x6f\x72\x79\x20\x66\x69\x6c\x65\x73\x3a\x20",
                        m
                      );
                }
              );
          }),
          (b.createFiles = function (a, b) {
            function q(b, c) {
              var i,
                e = a.files[b],
                h = (e.originalname || e.name).normalize("\x4e\x46\x43");
              return h
                ? ((h = h.replace(d.filenameRegex, "")),
                  (i = {
                    ä: "\x61\x65",
                    ö: "\x6f\x65",
                    ß: "\x73\x73",
                    ü: "\x75\x65",
                    æ: "\x61\x65",
                    ø: "\x6f\x65",
                    å: "\x61\x61",
                    é: "\x65",
                    è: "\x65",
                  }),
                  (h = h.replace(/[äößüæøåéè]/gi, function (a) {
                    return i[a];
                  })),
                  h.match(d.zipfileRegex) && (h = h.replace(/ /g, "")),
                  h.match(d.brandRegex) && (h = h.toLowerCase()),
                  void f.rename(e.path, g.join(j, h), function (a) {
                    a
                      ? (m.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x66\x69\x6c\x65\x20\x72\x65\x6e\x61\x6d\x65\x20\x65\x72\x72\x6f\x72\x3a" +
                            a
                        ),
                        c(a))
                      : (h.match(d.zipfileRegex) && p.push(h),
                        h.match(/^custom_layout.*html$/i) && l.modifyHTML(j, h),
                        o.push({
                          name: h,
                          size: e.size,
                          type: e.mimetype || e.type,
                        }),
                        c());
                  }))
                : (m.log("\x65\x72\x72\x6f\x72", {
                    error:
                      "\x69\x6e\x76\x61\x6c\x69\x64\x20\x66\x69\x6c\x65\x20\x6e\x61\x6d\x65\x20",
                    msg: e,
                  }),
                  void c("\x6e\x6f\x20\x6e\x61\x6d\x65"));
            }
            var j = g.join(d.mediaDir, a.installation),
              k = Object.keys(a.files),
              o = [],
              p = [];
            h.series(
              [
                function (b) {
                  return "\x70\x69" == d.env
                    ? b()
                    : void i(
                        "\x64\x75\x20\x2d\x6d\x73\x20" + j,
                        function (e, g) {
                          var l,
                            j = parseInt(g);
                          return e
                            ? b()
                            : void c("\x6d\x6f\x6e\x67\x6f\x6f\x73\x65")
                                .model("\x55\x73\x65\x72")
                                .findOne(
                                  { username: a.installation },
                                  function (c, e) {
                                    return c || !e
                                      ? b()
                                      : ((l =
                                          e.serverLicenses * d.spacePerLicense +
                                          (e.storageSpace || 0)),
                                        (l = l > 300 ? l : 300),
                                        !isNaN(j) && j > l
                                          ? void h.each(
                                              k,
                                              function (b, c) {
                                                console.log(
                                                  "\x64\x65\x6c\x65\x74\x69\x6e\x67\x20" +
                                                    a.files[b].path
                                                ),
                                                  f.unlink(a.files[b].path, c);
                                              },
                                              function () {
                                                return b(
                                                  "\x45\x78\x63\x65\x65\x64\x65\x64\x20\x53\x74\x6f\x72\x61\x67\x65\x20\x4c\x69\x6d\x69\x74\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x61\x74\x69\x6f\x6e\x2c\x20\x70\x6c\x65\x61\x73\x65\x20\x70\x75\x72\x63\x68\x61\x73\x65\x20\x6d\x6f\x72\x65\x20\x73\x74\x6f\x72\x61\x67\x65"
                                                );
                                              }
                                            )
                                          : b());
                                  }
                                );
                        }
                      );
                },
                function (a) {
                  h.each(k, q, function (b) {
                    return (
                      n.writeToConfig({ lastUpload: Date.now() }),
                      n.updateDiskStatus(),
                      b
                        ? (console.log(o),
                          a(
                            "\x46\x69\x6c\x65\x20\x72\x65\x6e\x61\x6d\x65\x20\x65\x72\x72\x6f\x72\x20" +
                              b
                          ))
                        : ("\x70\x69" == d.env &&
                            p.length > 0 &&
                            c(
                              "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x65\x78\x74\x72\x61\x63\x74\x2d\x7a\x69\x70"
                            ).extractStart(p),
                          a())
                    );
                  });
                },
              ],
              function (a) {
                a
                  ? e.sendError(b, a)
                  : e.sendSuccess(
                      b,
                      "\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79\x20\x75\x70\x6c\x6f\x61\x64\x65\x64\x20\x66\x69\x6c\x65\x73",
                      o
                    );
              }
            );
          }),
          (b.updateFileDetails = function (a, b) {
            return "\x70\x69" == d.env
              ? e.sendSuccess(
                  b,
                  "\x46\x69\x6c\x65\x20\x55\x70\x6c\x6f\x61\x64\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6c"
                )
              : void c(
                  "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                ).storeDetails(a, b);
          }),
          (b.getFileDetails = function (a, b) {
            var c = a.params.file,
              h = g.join(d.mediaDir, a.installation);
            f.stat(g.join(h, c), function (f, g) {
              if (f)
                return e.sendError(
                  b,
                  "\x66\x69\x6c\x65\x20\x73\x74\x61\x74\x20\x65\x72\x72\x6f\x72",
                  f
                );
              var h;
              return (
                (h = c.match(d.imageRegex)
                  ? "\x69\x6d\x61\x67\x65"
                  : c.match(d.videoRegex)
                  ? "\x76\x69\x64\x65\x6f"
                  : c.match(d.audioRegex)
                  ? "\x61\x75\x64\x69\x6f"
                  : c.match(d.noticeRegex)
                  ? "\x6e\x6f\x74\x69\x63\x65"
                  : c.match(d.pdffileRegex)
                  ? "\x70\x64\x66"
                  : c.match(d.htmlRegex)
                  ? "\x68\x74\x6d\x6c"
                  : c.match(d.liveStreamRegex) || c.match(d.linkUrlRegex)
                  ? "\x6c\x69\x6e\x6b"
                  : c.match(d.gcalRegex)
                  ? "\x67\x63\x61\x6c"
                  : c.match(d.txtFileRegex)
                  ? "\x74\x65\x78\x74"
                  : c.match(d.radioFileRegex)
                  ? "\x72\x61\x64\x69\x6f"
                  : "\x6f\x74\x68\x65\x72"),
                "\x70\x69" == d.env
                  ? e.sendSuccess(
                      b,
                      "\x53\x65\x6e\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x20\x64\x65\x74\x61\x69\x6c\x73",
                      {
                        name: c,
                        size: ~~(g.size / 1e3) + "\x20\x4b\x42",
                        ctime: g.ctime,
                        type: h,
                        path: "\x2f\x6d\x65\x64\x69\x61\x2f" + c,
                      }
                    )
                  : void p.findOne(
                      { name: c, installation: a.installation },
                      function (d, f) {
                        return e.sendSuccess(
                          b,
                          "\x53\x65\x6e\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x20\x64\x65\x74\x61\x69\x6c\x73",
                          {
                            name: c,
                            size: ~~(g.size / 1e3) + "\x20\x4b\x42",
                            ctime: g.ctime,
                            path:
                              "\x2f\x6d\x65\x64\x69\x61\x2f" +
                              a.installation +
                              "\x2f" +
                              c,
                            type: h,
                            dbdata: f,
                          }
                        );
                      }
                    )
              );
            });
          }),
          (b.deleteFile = function (a, b) {
            var c = g.join(d.mediaDir, a.installation),
              i = a.params.file,
              j = null,
              k = null;
            i.match(d.noticeRegex) &&
              0 !=
                i.indexOf(
                  "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74"
                ) &&
              (j =
                "\x5f" +
                g.basename(i, "\x2e\x68\x74\x6d\x6c") +
                "\x2e\x6a\x73\x6f\x6e"),
              h.series(
                [
                  function (a) {
                    f.unlink(g.join(c, i), function (b) {
                      return b ? a(b) : (n.updateDiskStatus(), void a());
                    });
                  },
                  function (b) {
                    "\x70\x69" != d.env &&
                    (i.match(d.videoRegex) || i.match(d.imageRegex))
                      ? p.findOne(
                          { name: i, installation: a.installation },
                          function (a, c) {
                            if (c && c.thumbnail) {
                              var e = c.thumbnail;
                              (e = e.replace(
                                "\x2f\x6d\x65\x64\x69\x61\x2f\x5f\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73\x2f",
                                ""
                              )),
                                (k = g.join(d.thumbnailDir, e));
                            }
                            b();
                          }
                        )
                      : b();
                  },
                  function (b) {
                    "\x70\x69" != d.env
                      ? p.remove(
                          { name: i, installation: a.installation },
                          function (a) {
                            a &&
                              m.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x64\x65\x6c\x65\x74\x65\x20\x61\x73\x73\x65\x74\x20\x66\x72\x6f\x6d\x20\x64\x62\x20\x66\x6f\x72\x20\x3a" +
                                  i
                              ),
                              b();
                          }
                        )
                      : b();
                  },
                  function (a) {
                    k
                      ? f.unlink(k, function (b) {
                          b &&
                            m.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x66\x69\x6e\x64\x2f\x64\x65\x6c\x65\x74\x65\x20\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x3a\x20" +
                                b
                            ),
                            a();
                        })
                      : j
                      ? f.unlink(g.join(c, j), function () {
                          a();
                        })
                      : a();
                  },
                ],
                function (a) {
                  return a
                    ? e.sendError(
                        b,
                        "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x64\x65\x6c\x65\x74\x65\x20\x66\x69\x6c\x65",
                        a
                      )
                    : e.sendSuccess(
                        b,
                        "\x44\x65\x6c\x65\x74\x65\x64\x20\x66\x69\x6c\x65",
                        i
                      );
                }
              );
          }),
          (b.updateAsset = function (a, b) {
            var i, j, k, l, n;
            a.body.newname
              ? ((i = g.join(d.mediaDir, a.installation)),
                (j = a.params.file),
                (k = a.body.newname),
                (l = null),
                (n = null),
                j.match(d.noticeRegex) &&
                  0 !=
                    j.indexOf(
                      "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74"
                    ) &&
                  ((l =
                    "\x5f" +
                    j.slice(0, j.lastIndexOf("\x2e")) +
                    "\x2e\x6a\x73\x6f\x6e"),
                  (n =
                    "\x5f" +
                    k.slice(0, k.lastIndexOf("\x2e")) +
                    "\x2e\x6a\x73\x6f\x6e")),
                h.series(
                  [
                    function (b) {
                      f.rename(g.join(i, j), g.join(i, k), function (c) {
                        c &&
                          m.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x72\x65\x6e\x61\x6d\x65\x20" +
                              j +
                              "\x20\x66\x6f\x72\x20" +
                              a.installation
                          ),
                          b(c);
                      });
                    },
                    function (b) {
                      l && n
                        ? f.rename(g.join(i, l), g.join(i, n), function (c) {
                            c &&
                              m.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x4a\x53\x4f\x4e\x20\x66\x69\x6c\x65\x20\x52\x65\x6e\x61\x6d\x65\x20\x45\x72\x72\x6f\x72\x20" +
                                  j +
                                  "\x20\x66\x6f\x72\x20" +
                                  a.installation
                              ),
                              b(c);
                          })
                        : b();
                    },
                    function (b) {
                      "\x70\x69" != d.env &&
                        c(
                          "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                        ).renameObject(a.installation, j, k),
                        b();
                    },
                  ],
                  function (a) {
                    return a
                      ? e.sendError(
                          b,
                          "\x46\x69\x6c\x65\x20\x72\x65\x6e\x61\x6d\x65\x20\x65\x72\x72\x6f\x72",
                          a
                        )
                      : e.sendSuccess(
                          b,
                          "\x20\x53\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x6c\x79\x20\x72\x65\x6e\x61\x6d\x65\x64\x20\x66\x69\x6c\x65\x20\x74\x6f",
                          k
                        );
                  }
                ))
              : a.body.dbdata &&
                "\x70\x69" != d.env &&
                c(
                  "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                ).updateObject(a, b);
          }),
          (b.createNotice = function (a, b) {
            var l,
              p,
              q,
              i = g.join(d.mediaDir, a.installation),
              k = a.body.formdata,
              o = {
                title: k.title,
                description: k.description,
                image: k.image || "",
                footer: k.footer || "",
              };
            h.series(
              [
                function (a) {
                  var b = g.join(
                    i,
                    "\x6e\x6f\x74\x69\x63\x65\x5f\x74\x65\x6d\x70\x6c\x61\x74\x65\x2e\x65\x6a\x73"
                  );
                  f.exists(b, function (c) {
                    var e;
                    (e = c ? b : d.defaultTemplate),
                      f.readFile(e, "\x75\x74\x66\x38", function (b, c) {
                        b
                          ? a(
                              "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x66\x69\x6c\x65\x3a\x20" +
                                b
                            )
                          : ((l = c), a());
                      });
                  });
                },
                function (b) {
                  try {
                    p = j.compile(l)(o);
                  } catch (c) {
                    m.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x65\x6a\x73\x20\x63\x6f\x6d\x70\x69\x6c\x65\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20\x6e\x6f\x74\x69\x63\x65\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x2c\x20\x69\x67\x6e\x6f\x72\x69\x6e\x67\x2c\x20" +
                        a.installation
                    );
                  }
                  b();
                },
                function (b) {
                  (q = a.params.file
                    ? g.basename(a.params.file, "\x2e\x68\x74\x6d\x6c")
                    : (k.title || "\x75\x6e\x74\x69\x74\x6c\x65\x64")
                        .slice(0, 20)
                        .replace(/\W/g, "") +
                      "\x5f" +
                      Math.floor(1e4 * Math.random())),
                    f.writeFile(
                      g.join(i, q + "\x2e\x68\x74\x6d\x6c"),
                      p,
                      "\x75\x74\x66\x38",
                      function (a) {
                        a
                          ? b(
                              "\x45\x72\x72\x6f\x72\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x68\x74\x6d\x6c\x20\x66\x69\x6c\x65\x3a\x20" +
                                a
                            )
                          : f.writeFile(
                              g.join(i, "\x5f" + q + "\x2e\x6a\x73\x6f\x6e"),
                              JSON.stringify(o, null, 4),
                              "\x75\x74\x66\x38",
                              function (a) {
                                a
                                  ? b(
                                      "\x45\x72\x72\x6f\x72\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x6a\x73\x6f\x6e\x20\x66\x69\x6c\x65\x3a\x20" +
                                        a
                                    )
                                  : (n.writeToConfig({
                                      lastUpload: Date.now(),
                                    }),
                                    n.updateDiskStatus(),
                                    b());
                              },
                              function (a) {
                                console.log(
                                  "\x45\x72\x72\x6f\x72\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x68\x74\x6d\x6c\x20\x66\x69\x6c\x65\x3a\x20" +
                                    a
                                );
                              }
                            );
                      }
                    );
                },
                function (b) {
                  "\x70\x69" != d.env
                    ? c(
                        "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                      ).storeLinkDetails(
                        q + "\x2e\x68\x74\x6d\x6c",
                        "\x6e\x6f\x74\x69\x63\x65",
                        a.installation,
                        a.user,
                        a.body.categories,
                        a.collaboratorRights &&
                          a.collaboratorRights.groupIds &&
                          a.collaboratorRights.groupIds.length
                          ? a.collaboratorRights.groupIds
                          : null,
                        b
                      )
                    : b();
                },
              ],
              function (a) {
                a
                  ? e.sendError(b, a)
                  : e.sendSuccess(
                      b,
                      "\x4e\x6f\x74\x69\x63\x65\x20\x46\x69\x6c\x65\x20\x53\x61\x76\x65\x64",
                      p
                    );
              }
            );
          }),
          (b.getNotice = function (a, b) {
            var c = g.join(d.mediaDir, a.installation),
              i = {};
            h.series(
              [
                function (b) {
                  var d =
                    "\x5f" +
                    g.basename(a.params.file, "\x2e\x68\x74\x6d\x6c") +
                    "\x2e\x6a\x73\x6f\x6e";
                  f.readFile(g.join(c, d), "\x75\x74\x66\x38", function (a, c) {
                    if (((i.data = null), a || !c)) return b(a);
                    try {
                      i.data = JSON.parse(c);
                    } catch (d) {
                      m.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x50\x61\x72\x73\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20\x6e\x6f\x74\x69\x63\x65\x20\x64\x61\x74\x61\x3a\x20" +
                          d
                      );
                    }
                    return b();
                  });
                },
                function (b) {
                  "\x70\x69" != d.env
                    ? p.findOne(
                        { name: a.params.file, installation: a.installation },
                        function (a, c) {
                          (i.dbdata = c), b();
                        }
                      )
                    : b();
                },
              ],
              function (a) {
                return a
                  ? e.sendError(
                      b,
                      "\x4a\x53\x4f\x4e\x20\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72",
                      a
                    )
                  : e.sendSuccess(
                      b,
                      "\x53\x65\x6e\x64\x69\x6e\x67\x20\x6e\x6f\x74\x69\x63\x65\x20\x66\x69\x6c\x65\x20\x64\x65\x74\x61\x69\x6c\x73",
                      i
                    );
              }
            );
          }),
          (b.zipPreview = function (a, b) {
            var h = g.join(d.mediaDir, a.installation, a.params.file),
              i = a.params.file.replace(/(.zip|.gz|.bz2)/g, ""),
              j = g.join(
                d.mediaDir,
                a.installation,
                "\x75\x6e\x7a\x69\x70\x70\x65\x64\x2d" + i
              ),
              k = "\x75\x6e\x7a\x69\x70\x70\x65\x64\x2d" + i;
            f
              .createReadStream(h)
              .pipe(c("\x75\x6e\x7a\x69\x70").Extract({ path: j })),
              e.sendSuccess(
                b,
                "\x53\x65\x6e\x64\x69\x6e\x67\x20\x7a\x69\x70\x20\x66\x69\x6c\x65\x20\x70\x61\x74\x68",
                "\x2f\x6d\x65\x64\x69\x61\x2f" + a.installation + "\x2f" + k
              );
          }),
          (b.createAssetFileFromContent = function (a, b, c) {
            var e = g.resolve(d.mediaDir, a);
            f.writeFile(e, JSON.stringify(b, null, 4), c);
          }),
          (b.createLinkFile = function (a, b) {
            var i = g.join(d.mediaPath, a.installation),
              j = a.body.details;
            h.series(
              [
                function (a) {
                  f.writeFile(
                    i + "\x2f" + j.name + j.type,
                    JSON.stringify(j, null, 4),
                    "\x75\x74\x66\x38",
                    function (b) {
                      a(b);
                    }
                  );
                },
                function (b) {
                  "\x70\x69" != d.env
                    ? c(
                        "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                      ).storeLinkDetails(
                        j.name + j.type,
                        "\x6c\x69\x6e\x6b",
                        a.installation,
                        a.user,
                        a.body.categories,
                        a.collaboratorRights &&
                          a.collaboratorRights.groupIds &&
                          a.collaboratorRights.groupIds.length
                          ? a.collaboratorRights.groupIds
                          : null,
                        b
                      )
                    : b();
                },
              ],
              function (a) {
                return a
                  ? e.sendError(
                      b,
                      "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x6c\x69\x6e\x6b\x20\x66\x69\x6c\x65",
                      a
                    )
                  : e.sendSuccess(
                      b,
                      "\x4c\x69\x6e\x6b\x20\x66\x69\x6c\x65\x20\x63\x72\x65\x61\x74\x65\x64\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x6c\x69\x6e\x6b\x20\x61\x73\x20" +
                        j.name +
                        j.type
                    );
              }
            );
          }),
          (b.getLinkFileDetails = function (a, b) {
            var c = g.join(d.mediaPath, a.installation),
              i = a.params.file,
              j = {};
            h.series(
              [
                function (a) {
                  f.readFile(
                    c + "\x2f" + i,
                    "\x75\x74\x66\x2d\x38",
                    function (b, c) {
                      (j.data = c), a(b);
                    }
                  );
                },
                function (b) {
                  "\x70\x69" != d.env
                    ? p.findOne(
                        { name: i, installation: a.installation },
                        function (a, c) {
                          (j.dbdata = c), b();
                        }
                      )
                    : b();
                },
              ],
              function (a) {
                return a
                  ? e.sendError(
                      b,
                      "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x72\x65\x61\x64\x20\x6c\x69\x6e\x6b\x20\x66\x69\x6c\x65\x2c\x20\x65\x72\x72\x6f\x72\x3a" +
                        a
                    )
                  : e.sendSuccess(
                      b,
                      "\x6c\x69\x6e\x6b\x20\x66\x69\x6c\x65\x20\x64\x65\x74\x61\x69\x6c\x73",
                      j
                    );
              }
            );
          }),
          (b.updatePlaylist = function (a, b) {
            return "\x70\x69" == d.env
              ? e.sendSuccess(b, "\x49\x20\x61\x6d\x20\x70\x69")
              : (c(
                  "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                ).updatePlaylist(
                  a.installation,
                  a.body.playlist,
                  a.body.assets
                ),
                e.sendSuccess(
                  b,
                  "\x61\x73\x73\x65\x74\x20\x75\x70\x64\x61\x74\x65\x20\x68\x61\x73\x20\x62\x65\x65\x6e\x20\x71\x75\x65\x75\x65\x64"
                ));
          }),
          (b.createCustomTemplate = function (a, b) {
            var i, j, k, l, n, o, p, q, r, s;
            return "\x70\x69" == d.env
              ? e.sendSuccess(b, "\x49\x20\x61\x6d\x20\x70\x69")
              : ((i = [
                  "\x6d\x61\x69\x6e",
                  "\x73\x69\x64\x65",
                  "\x62\x6f\x74\x74\x6f\x6d",
                  "\x7a\x6f\x6e\x65\x34",
                  "\x7a\x6f\x6e\x65\x35",
                  "\x7a\x6f\x6e\x65\x36",
                ]),
                (j =
                  a.body.filename ||
                  "\x63\x75\x73\x74\x6f\x6d\x5f\x74\x65\x6d\x70\x6c\x61\x74\x65\x2e\x68\x74\x6d\x6c"),
                (k = a.body.html || ""),
                (l = a.body.css || ""),
                (p = a.body.properties || null),
                (q = {}),
                (r = g.join(d.mediaPath, a.installation)),
                j.match(
                  "\x5e\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74"
                ) ||
                  (j =
                    "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x5f" +
                    j),
                j.match("\x2e\x68\x74\x6d\x6c\x24") ||
                  (j += "\x2e\x68\x74\x6d\x6c"),
                void h.series(
                  [
                    function (a) {
                      f.readFile(
                        "\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f\x73\x63\x72\x65\x65\x6e\x2d\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c",
                        { encoding: "\x75\x74\x66\x2d\x38" },
                        function (b, d) {
                          if (b)
                            return a(
                              "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x73\x63\x72\x65\x65\x6e\x2d\x6c\x61\x79\x6f\x75\x74\x3a\x20" +
                                b
                            );
                          if (
                            ((s = c("\x63\x68\x65\x65\x72\x69\x6f").load(d)), p)
                          ) {
                            s("\x23\x6d\x61\x72\x71\x75\x65\x65").after(
                              "\x3c\x64\x69\x76\x20\x69\x64\x3d\x22\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73\x22\x20\x73\x74\x79\x6c\x65\x3d\x22\x64\x69\x73\x70\x6c\x61\x79\x3a\x6e\x6f\x6e\x65\x3b\x22\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"
                            ),
                              s(
                                "\x23\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73"
                              ).attr(
                                "\x64\x61\x74\x61\x2d\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73",
                                p
                              );
                            try {
                              q = JSON.parse(p);
                            } catch (e) {
                              m.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x50\x61\x72\x73\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20\x63\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73\x3a\x20" +
                                  e
                              );
                            }
                            (o = ""),
                              (n = ""),
                              q.bgImage &&
                                (n =
                                  n +
                                  "\x23\x66\x75\x6c\x6c\x20\x7b\x62\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x2d\x69\x6d\x61\x67\x65\x3a\x75\x72\x6c\x28\x22" +
                                  q.bgImage +
                                  "\x22\x29\x7d"),
                              i.forEach(function (a) {
                                q[a] &&
                                  q[a].enable &&
                                  ((n =
                                    n +
                                    "\x23" +
                                    a +
                                    "\x20\x7b\x20\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3a\x20\x61\x62\x73\x6f\x6c\x75\x74\x65\x3b\x20\x74\x6f\x70\x3a" +
                                    q[a].y +
                                    "\x70\x78\x3b\x20\x6c\x65\x66\x74\x3a\x20" +
                                    q[a].x +
                                    "\x70\x78\x3b\x20\x77\x69\x64\x74\x68\x3a\x20" +
                                    q[a].w +
                                    "\x70\x78\x3b\x20\x68\x65\x69\x67\x68\x74\x3a\x20" +
                                    q[a].h +
                                    "\x70\x78\x3b\x20\x7d"),
                                  (o =
                                    o +
                                    "\x3c\x64\x69\x76\x20\x69\x64\x3d\x22" +
                                    a +
                                    "\x22\x20\x63\x6c\x61\x73\x73\x3d\x22\x7a\x6f\x6e\x65\x22\x3e\x26\x6e\x62\x73\x70\x3b\x3c\x2f\x64\x69\x76\x3e"));
                              }),
                              n &&
                                s("\x68\x65\x61\x64").append(
                                  "\x3c\x73\x74\x79\x6c\x65\x20\x69\x64\x3d\x22\x63\x75\x73\x74\x6f\x6d\x63\x73\x73\x22\x20\x74\x79\x70\x65\x3d\x22\x74\x65\x78\x74\x2f\x63\x73\x73\x22\x3e" +
                                    n +
                                    "\x3c\x2f\x73\x74\x79\x6c\x65\x3e"
                                ),
                              o && s("\x23\x66\x75\x6c\x6c").append(o);
                          } else k && s("\x23\x66\x75\x6c\x6c").append(k);
                          l &&
                            s("\x68\x65\x61\x64").append(
                              "\x3c\x73\x74\x79\x6c\x65\x20\x69\x64\x3d\x22\x63\x75\x73\x74\x6f\x6d\x63\x73\x73\x32\x22\x20\x74\x79\x70\x65\x3d\x22\x74\x65\x78\x74\x2f\x63\x73\x73\x22\x3e" +
                                l +
                                "\x3c\x2f\x73\x74\x79\x6c\x65\x3e"
                            ),
                            a();
                        }
                      );
                    },
                    function (a) {
                      f.writeFile(
                        r + "\x2f" + j,
                        s.html(),
                        "\x75\x74\x66\x38",
                        function (b) {
                          a(b);
                        }
                      );
                    },
                    function (b) {
                      "\x70\x69" != d.env
                        ? c(
                            "\x2e\x2f\x73\x65\x72\x76\x65\x72\x2d\x61\x73\x73\x65\x74\x73"
                          ).storeLinkDetails(
                            j,
                            "\x68\x74\x6d\x6c",
                            a.installation,
                            a.user,
                            a.body.categories,
                            a.collaboratorRights &&
                              a.collaboratorRights.groupIds &&
                              a.collaboratorRights.groupIds.length
                              ? a.collaboratorRights.groupIds
                              : null,
                            b
                          )
                        : b();
                    },
                  ],
                  function (a) {
                    return a
                      ? e.sendError(
                          b,
                          "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x63\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x66\x69\x6c\x65",
                          a
                        )
                      : e.sendSuccess(
                          b,
                          "\x43\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x66\x69\x6c\x65\x20\x73\x61\x76\x65\x64\x20\x61\x73\x20" +
                            j,
                          { filename: j }
                        );
                  }
                ));
          }),
          (b.getCustomTemplate = function (a, b) {
            var h, i, j, k;
            return "\x70\x69" == d.env
              ? e.sendSuccess(b, "\x49\x20\x61\x6d\x20\x70\x69")
              : ((h = g.join(d.mediaPath, a.installation)),
                (i = a.params.file),
                i.match(
                  "\x5e\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x2a\x2e\x68\x74\x6d\x6c\x24"
                )
                  ? void f.readFile(
                      h + "\x2f" + i,
                      "\x75\x74\x66\x2d\x38",
                      function (a, d) {
                        return a
                          ? e.sendError(
                              b,
                              "\x45\x72\x72\x6f\x72\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x66\x69\x6c\x65\x3a\x20" +
                                a
                            )
                          : ((j = c("\x63\x68\x65\x65\x72\x69\x6f").load(d)),
                            j("\x73\x63\x72\x69\x70\x74").remove(),
                            (k = j(
                              "\x23\x70\x72\x6f\x70\x65\x72\x74\x69\x65\x73"
                            ).data()),
                            e.sendSuccess(
                              b,
                              "\x43\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x64\x65\x74\x61\x69\x6c\x73",
                              {
                                properties: k ? k.properties : null,
                                css: j(
                                  "\x23\x63\x75\x73\x74\x6f\x6d\x63\x73\x73\x32"
                                ).html(),
                                html: j("\x23\x66\x75\x6c\x6c").html(),
                                srcDoc: j.html(),
                              }
                            ));
                      }
                    )
                  : e.sendError(
                      b,
                      "\x4e\x6f\x74\x20\x61\x20\x63\x75\x73\x74\x6f\x6d\x20\x74\x65\x6d\x70\x6c\x61\x74\x65\x20\x66\x69\x6c\x65\x3a\x20" +
                        i
                    ));
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x6c\x61\x79\x6c\x69\x73\x74\x73\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var j,
          k,
          l,
          m,
          d = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          e = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65"
          ),
          f = c("\x66\x73"),
          g = c("\x70\x61\x74\x68"),
          h = c("\x61\x73\x79\x6e\x63"),
          i = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          );
        "\x70\x69" != d.env &&
          ((j = c("\x6d\x6f\x6e\x67\x6f\x6f\x73\x65")),
          (k = j.model("\x47\x72\x6f\x75\x70"))),
          (l = [
            {
              name: "\x54\x56\x5f\x4f\x46\x46",
              settings: {},
              assets: [],
              layout: "\x31",
              schedule: {},
            },
          ]),
          (m = function (a) {
            return (
              "\x5f" == a.charAt(0) &&
              "\x5f" == a.charAt(1) &&
              "\x2e\x6a\x73\x6f\x6e" == a.slice(-5)
            );
          }),
          (b.newPlaylist = function (a, b, c, e) {
            var h = g.join(
                d.mediaDir,
                a,
                "\x5f\x5f" + b + "\x2e\x6a\x73\x6f\x6e"
              ),
              i = {
                name: b,
                settings: {
                  ticker: {
                    enable: !1,
                    behavior: "\x73\x63\x72\x6f\x6c\x6c",
                    textSpeed: 3,
                    rss: { enable: !1, link: null, feedDelay: 10 },
                  },
                  ads: { adPlaylist: !1, adCount: 1, adInterval: 60 },
                  audio: { enable: !1, random: !1, volume: 50 },
                },
                assets: [],
                layout: "\x31",
                templateName:
                  "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c",
                schedule: {},
              };
            e && (i.groupIds = e),
              f.writeFile(h, JSON.stringify(i, null, 4), function (a) {
                c(a, i);
              });
          }),
          (b.getPlaylists = function (a, b, c, e) {
            var j = g.join(d.mediaDir, a),
              n = !1,
              o = !1;
            (b = b || !1),
              (c = c || null),
              (e = e || function () {}),
              f.readdir(j, function (p, q) {
                var r, s, t;
                return p
                  ? e(
                      "\x64\x69\x72\x65\x63\x74\x6f\x72\x79\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                        p
                    )
                  : ((r = q.filter(m)),
                    (s = []),
                    (r = r.sort(function (a, b) {
                      return a.localeCompare(b, void 0, { numeric: !0 });
                    })),
                    (t = function (e, l) {
                      h.waterfall(
                        [
                          function (d) {
                            var h = {
                              settings: {},
                              assets: [],
                              name: g
                                .basename(e, "\x2e\x6a\x73\x6f\x6e")
                                .slice(2),
                            };
                            "\x5f\x5f\x54\x56\x5f\x4f\x46\x46\x2e\x6a\x73\x6f\x6e" ==
                              e && (o = !0),
                              f.readFile(
                                g.join(j, e),
                                "\x75\x74\x66\x38",
                                function (e, f) {
                                  var g, k;
                                  if (e || !f)
                                    s.push(h),
                                      i.log(
                                        "\x65\x72\x72\x6f\x72",
                                        "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20" +
                                          a +
                                          "\x3b" +
                                          e
                                      );
                                  else {
                                    g = {};
                                    try {
                                      g = JSON.parse(f);
                                    } catch (j) {
                                      i.log(
                                        "\x65\x72\x72\x6f\x72",
                                        "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x69\x6e\x64\x65\x78\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20" +
                                          a
                                      );
                                    }
                                    if (
                                      ((h.settings = g.settings || {}),
                                      (h.assets = g.assets || []),
                                      (h.layout = g.layout || "\x31"),
                                      (h.templateName =
                                        g.templateName ||
                                        "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c"),
                                      (h.videoWindow = g.videoWindow || null),
                                      (h.zoneVideoWindow =
                                        g.zoneVideoWindow || {}),
                                      (h.schedule = g.schedule || {}),
                                      (h.labels = g.labels || []),
                                      (h.groupIds = g.groupIds),
                                      c)
                                    )
                                      if (g.groupIds && g.groupIds.length) {
                                        for (n = !1, k = 0; k < c.length; k++)
                                          if (g.groupIds.indexOf(c[k]) >= 0) {
                                            n = !0;
                                            break;
                                          }
                                      } else n = b;
                                    else n = !0;
                                    n || (h = null);
                                  }
                                  d(null, h);
                                }
                              );
                          },
                          function (c, e) {
                            return "\x70\x69" == d.env
                              ? e(null, c)
                              : void (b && c
                                  ? k.find(
                                      {
                                        installation: a,
                                        "deployedPlaylists.name": c.name,
                                      },
                                      { name: 1, _id: 0 },
                                      { lean: !0 },
                                      function (a, b) {
                                        !a &&
                                          Array.isArray(b) &&
                                          (c.belongsTo = b.map(function (a) {
                                            return a.name;
                                          })),
                                          e(a, c);
                                      }
                                    )
                                  : e(null, c));
                          },
                        ],
                        function (a, b) {
                          b && s.push(b), l();
                        }
                      );
                    }),
                    h.eachSeries(r, t, function (a) {
                      return a
                        ? e(
                            "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                              a
                          )
                        : (o || (s = s.concat(l)), e(null, s));
                    }),
                    void 0);
              });
          }),
          (b.index = function (a, c) {
            var d = !0,
              f = null;
            a.collaboratorRights &&
              a.collaboratorRights.groupIds &&
              a.collaboratorRights.groupIds.length &&
              (a.collaboratorRights.asset.restrictAdmin
                ? ((d = !0), (f = a.collaboratorRights.groupIds))
                : a.collaboratorRights.asset.restrict &&
                  ((d = !1), (f = a.collaboratorRights.groupIds))),
              b.getPlaylists(a.installation, d, f, function (a, b) {
                return a
                  ? e.sendError(c, a)
                  : e.sendSuccess(
                      c,
                      "\x20\x53\x65\x6e\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x6c\x69\x73\x74",
                      b
                    );
              });
          }),
          (b.getPlaylist = function (a, b) {
            var k,
              c = !0,
              h = null,
              j = !1;
            return (
              a.collaboratorRights &&
                a.collaboratorRights.groupIds &&
                a.collaboratorRights.groupIds.length &&
                (a.collaboratorRights.asset.restrictAdmin
                  ? ((c = !0), (h = a.collaboratorRights.groupIds))
                  : a.collaboratorRights.asset.restrict &&
                    ((c = !1), (h = a.collaboratorRights.groupIds))),
              "\x54\x56\x5f\x4f\x46\x46" == a.params.file
                ? e.sendError(
                    b,
                    "\x53\x79\x73\x74\x65\x6d\x20\x50\x6c\x61\x79\x6c\x69\x73\x74\x2c\x20\x63\x61\x6e\x20\x6e\x6f\x74\x20\x62\x65\x20\x65\x64\x69\x74\x65\x64"
                  )
                : ((k = g.join(
                    d.mediaDir,
                    a.installation,
                    "\x5f\x5f" + a.params.file + "\x2e\x6a\x73\x6f\x6e"
                  )),
                  void f.readFile(k, "\x75\x74\x66\x38", function (d, f) {
                    var g, k, m;
                    if (d)
                      return e.sendError(
                        b,
                        "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72",
                        d
                      );
                    if (
                      ((g = {
                        settings: {},
                        layout: "\x31",
                        assets: [],
                        videoWindow: null,
                        zoneVideoWindow: {},
                        templateName:
                          "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c",
                      }),
                      f)
                    ) {
                      k = {};
                      try {
                        k = JSON.parse(f);
                      } catch (l) {
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x67\x65\x74\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20" +
                            a.installation
                        );
                      }
                      if (
                        ((g.settings = k.settings || {}),
                        (g.assets = k.assets || []),
                        (g.layout = k.layout || "\x31"),
                        (g.templateName =
                          k.templateName ||
                          "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x2e\x68\x74\x6d\x6c"),
                        (g.videoWindow = k.videoWindow ? k.videoWindow : null),
                        (g.zoneVideoWindow = k.zoneVideoWindow
                          ? k.zoneVideoWindow
                          : {}),
                        (g.schedule = k.schedule || {}),
                        (g.groupIds = k.groupIds),
                        (g.labels = k.labels || []),
                        h)
                      )
                        if (k.groupIds && k.groupIds.length) {
                          for (j = !1, m = 0; m < h.length; m++)
                            if (k.groupIds.indexOf(h[m]) >= 0) {
                              j = !0;
                              break;
                            }
                        } else j = c;
                      else j = !0;
                      if (!j)
                        return e.sendError(
                          b,
                          "\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20\x61\x63\x63\x65\x73\x73\x20\x64\x65\x6e\x69\x65\x64"
                        );
                    }
                    return e.sendSuccess(
                      b,
                      "\x20\x53\x65\x6e\x64\x69\x6e\x67\x20\x70\x6c\x61\x79\x6c\x69\x73\x74\x20\x63\x6f\x6e\x74\x65\x6e\x74",
                      g
                    );
                  }))
            );
          }),
          (b.createPlaylist = function (a, c) {
            b.newPlaylist(
              a.installation,
              a.body.file,
              function (b) {
                b
                  ? e.sendError(
                      c,
                      "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x77\x72\x69\x74\x65\x20\x65\x72\x72\x6f\x72",
                      b
                    )
                  : e.sendSuccess(
                      c,
                      "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x43\x72\x65\x61\x74\x65\x64\x3a\x20",
                      a.body.file
                    );
              },
              a.collaboratorRights &&
                a.collaboratorRights.groupIds &&
                a.collaboratorRights.groupIds.length
                ? a.collaboratorRights.groupIds
                : null
            );
          }),
          (b.savePlaylist = function (a, b) {
            var c = g.join(
              d.mediaDir,
              a.installation,
              "\x5f\x5f" + a.params.file + "\x2e\x6a\x73\x6f\x6e"
            );
            f.readFile(c, "\x75\x74\x66\x38", function (d, g) {
              var h, j, m;
              if (
                (d &&
                  "\x45\x4e\x4f\x45\x4e\x54" == d.code &&
                  "\x54\x56\x5f\x4f\x46\x46" == a.params.file &&
                  ((g = JSON.stringify(l[0])), (d = null)),
                d)
              )
                e.sendError(
                  b,
                  "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x66\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x65\x72\x72\x6f\x72",
                  d
                );
              else {
                if (
                  ((h = {}), (j = !1), (h.version = 0), (h.layout = "\x31"), g)
                ) {
                  try {
                    h = JSON.parse(g);
                  } catch (k) {
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x73\x61\x76\x65\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x70\x61\x72\x73\x69\x6e\x67\x20\x65\x72\x72\x6f\x72\x20\x66\x6f\x72\x20" +
                        a.installation
                    );
                  }
                  h.version = h.version || 0;
                }
                a.body.name && ((h.name = a.body.name), (j = !0)),
                  a.body.settings && ((h.settings = a.body.settings), (j = !0)),
                  a.body.assets && ((h.assets = a.body.assets), (j = !0)),
                  a.body.schedule && ((h.schedule = a.body.schedule), (j = !0)),
                  a.body.layout &&
                    ((h.layout = a.body.layout),
                    (h.templateName = a.body.templateName),
                    (h.videoWindow = a.body.videoWindow),
                    (h.zoneVideoWindow = a.body.zoneVideoWindow),
                    (j = !0)),
                  a.body.labels && ((h.labels = a.body.labels), (j = !0)),
                  (m = a.body.groupIds ? a.body.groupIds : h.groupIds),
                  (h.groupIds =
                    a.collaboratorRights &&
                    a.collaboratorRights.groupIds &&
                    a.collaboratorRights.groupIds.length
                      ? a.collaboratorRights.groupIds
                      : null),
                  m &&
                    ((h.groupIds = h.groupIds || []),
                    m.forEach(function (a) {
                      -1 === h.groupIds.indexOf(a) && h.groupIds.push(a);
                    }),
                    a.body.groupIds && (j = !0)),
                  j
                    ? ((h.version += 1),
                      f.writeFile(c, JSON.stringify(h, null, 4), function (a) {
                        a
                          ? e.sendError(
                              b,
                              "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x73\x61\x76\x65\x20\x65\x72\x72\x6f\x72",
                              a
                            )
                          : e.sendSuccess(
                              b,
                              "\x50\x6c\x61\x79\x6c\x69\x73\x74\x20\x53\x61\x76\x65\x64\x3a\x20",
                              h
                            );
                      }))
                    : e.sendSuccess(
                        b,
                        "\x4e\x6f\x74\x68\x69\x6e\x67\x20\x74\x6f\x20\x55\x70\x64\x61\x74\x65\x3a\x20",
                        h
                      );
              }
            });
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x74\x6f\x6b\x65\x6e\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        function h() {
          (e.tokens = []),
            (e.currentTokenIndex = 0),
            (e.rollOverTime = null),
            (e.lifeTime = null),
            clearTimeout(g),
            clearTimeout(f);
        }
        function i() {
          setTimeout(function () {
            (e.currentTokenIndex = (e.currentTokenIndex + 1) % e.tokens.length),
              i();
          }, 1e3 * e.rollOverTime);
        }
        function j() {
          e.lifeTime && setTimeout(h, 1e3 * e.lifeTime), e.rollOverTime && i();
        }
        var f,
          g,
          d = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65"
          ),
          e = {
            tokens: [],
            currentTokenIndex: 0,
            rollOverTime: null,
            lifeTime: null,
            deleteOnShow: !1,
          };
        (b.updateTokens = function (a, b) {
          return (
            h(),
            (e.tokens = a.body.tokens),
            (e.rollOverTime = a.body.rollOverTime),
            (e.lifeTime = a.body.lifeTime),
            j(),
            d.sendSuccess(
              b,
              "\x54\x6f\x6b\x65\x6e\x73\x20\x53\x61\x76\x65\x64",
              e
            )
          );
        }),
          (b.getTokens = function (a, b) {
            return d.sendSuccess(b, "\x54\x6f\x6b\x65\x6e\x73", e);
          }),
          (b.currentToken = function (a, b) {
            return d.sendSuccess(
              b,
              "\x43\x75\x72\x72\x65\x6e\x74\x20\x54\x6f\x6b\x65\x6e",
              e.tokens[e.currentTokenIndex]
            );
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x6b\x69\x6f\x73\x6b\x2d\x75\x69\x2e\x6a\x73",
      function (a, b, c) {
        function q() {
          j && m && (j.kill(), o && (o = null), (m = null));
        }
        function r() {
          clearTimeout(k),
            (k = setTimeout(function () {
              n && f.stopKioskUi(), q();
            }, l));
        }
        function s() {
          clearTimeout(k);
        }
        function t(a, e) {
          var k,
            g = [
              "\x2d\x2d\x61\x6c\x6c\x6f\x77\x2d\x66\x69\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x66\x72\x6f\x6d\x2d\x66\x69\x6c\x65\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x63\x72\x61\x73\x68\x65\x64\x2d\x62\x75\x62\x62\x6c\x65",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x69\x6e\x66\x6f\x62\x61\x72\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x64\x65\x76\x69\x63\x65\x2d\x64\x69\x73\x63\x6f\x76\x65\x72\x79\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x71\x75\x69\x63",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x73\x3d\x54\x72\x61\x6e\x73\x6c\x61\x74\x65\x55\x49",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x6f\x70\x75\x70\x2d\x62\x6c\x6f\x63\x6b\x69\x6e\x67",
              "\x2d\x2d\x6e\x6f\x65\x72\x72\x64\x69\x61\x6c\x6f\x67\x73",
              "\x2d\x2d\x6e\x6f\x2d\x66\x69\x72\x73\x74\x2d\x72\x75\x6e",
              "\x2d\x2d\x73\x74\x61\x72\x74\x2d\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e",
              "\x2d\x2d\x73\x74\x61\x72\x74\x2d\x6d\x61\x78\x69\x6d\x69\x7a\x65\x64\x20",
              "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x69\x6e\x63\x68",
              "\x2d\x2d\x6f\x76\x65\x72\x73\x63\x72\x6f\x6c\x6c\x2d\x68\x69\x73\x74\x6f\x72\x79\x2d\x6e\x61\x76\x69\x67\x61\x74\x69\x6f\x6e\x3d\x30",
              "\x2d\x2d\x61\x75\x74\x6f\x70\x6c\x61\x79\x2d\x70\x6f\x6c\x69\x63\x79\x3d\x6e\x6f\x2d\x75\x73\x65\x72\x2d\x67\x65\x73\x74\x75\x72\x65\x2d\x72\x65\x71\x75\x69\x72\x65\x64",
              "\x2d\x2d\x63\x68\x65\x63\x6b\x2d\x66\x6f\x72\x2d\x75\x70\x64\x61\x74\x65\x2d\x69\x6e\x74\x65\x72\x76\x61\x6c\x3d\x31",
              "\x2d\x2d\x73\x69\x6d\x75\x6c\x61\x74\x65\x2d\x63\x72\x69\x74\x69\x63\x61\x6c\x2d\x75\x70\x64\x61\x74\x65",
              "\x2d\x2d\x6b\x69\x6f\x73\x6b\x2d\x70\x72\x69\x6e\x74\x69\x6e\x67",
              "\x2d\x2d\x75\x73\x65\x72\x2d\x64\x61\x74\x61\x2d\x64\x69\x72\x3d\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x63\x6f\x6e\x66\x69\x67\x2f\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2f\x6b\x69\x6f\x73\x6b",
            ];
          w(),
            g.push("\x2d\x2d\x6b\x69\x6f\x73\x6b"),
            e && (l = 1e3 * e),
            a
              ? g.push("\x2d\x2d\x61\x70\x70\x3d" + a)
              : g.push(
                  "\x2d\x2d\x61\x70\x70\x3d\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a\x38\x30\x30\x30\x2f\x6b\x69\x6f\x73\x6b\x2d\x75\x69\x2f\x62\x75\x69\x6c\x64\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c"
                ),
            h.log(
              "\x69\x6e\x66\x6f",
              "\x53\x74\x61\x72\x74\x69\x6e\x67\x20\x6b\x69\x6f\x73\x6b\x20\x55\x49"
            ),
            (j = d(
              "\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
              g
            )),
            j.on("\x65\x72\x72\x6f\x72", function (a) {
              h.log(
                "\x65\x72\x72\x6f\x72",
                "\x6b\x69\x6f\x73\x6b\x20\x75\x69\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                  a
              );
            }),
            j.once("\x65\x78\x69\x74", function (b, c) {
              h.log(
                "\x69\x6e\x66\x6f",
                "\x6b\x69\x6f\x73\x6b\x20\x75\x69\x20\x65\x78\x69\x74\x65\x64\x20\x77\x69\x74\x68\x20" +
                  b +
                  "\x3b" +
                  c
              ),
                i &&
                  ((j = null),
                  o && (o.removeAllListeners(), (o = null)),
                  n && f.stopKioskUi(),
                  t(a, e));
            }),
            (k = c("\x6e\x6f\x64\x65\x2d\x6d\x6f\x75\x73\x65")),
            (o = new k()),
            o.on("\x63\x6c\x69\x63\x6b", function () {
              (p = !0),
                setTimeout(function () {
                  p
                    ? b.showUi()
                    : h.log(
                        "\x69\x6e\x66\x6f",
                        "\x69\x67\x6e\x6f\x72\x69\x6e\x67\x20\x6b\x69\x6f\x73\x6b\x20\x63\x6c\x69\x63\x6b\x20\x61\x73\x20\x68\x69\x64\x65\x55\x49\x20\x69\x73\x20\x63\x61\x6c\x6c\x65\x64\x20"
                      ),
                    (p = !1);
                }, 1e3);
            }),
            (n = !0),
            setImmediate(u);
        }
        function u() {
          j && j.pid
            ? e(
                "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x73\x65\x61\x72\x63\x68\x20\x2d\x2d\x6f\x6e\x6c\x79\x76\x69\x73\x69\x62\x6c\x65\x20\x2d\x2d\x70\x69\x64\x20" +
                  j.pid,
                function (a, b) {
                  b
                    ? (h.log(
                        "\x69\x6e\x66\x6f",
                        "\x6b\x69\x6f\x73\x6b\x20\x55\x49\x20\x69\x64\x2c\x20" +
                          b
                      ),
                      (m = b),
                      v())
                    : setTimeout(u, 500);
                }
              )
            : h.log(
                "\x65\x72\x72\x6f\x72",
                "\x6b\x69\x6f\x73\x6b\x43\x68\x72\x6f\x6d\x65\x20\x70\x69\x64\x20\x69\x73\x20\x6e\x6f\x74\x20\x70\x72\x65\x73\x65\x6e\x74\x2c\x20\x66\x61\x74\x61\x6c\x20\x65\x72\x72\x6f\x72"
              );
        }
        function v(a) {
          return (
            (a = a || function () {}),
            p &&
              h.log(
                "\x69\x6e\x66\x6f",
                "\x68\x69\x64\x65\x55\x49\x20\x69\x73\x20\x63\x61\x6c\x6c\x65\x64\x20"
              ),
            (p = !1),
            j
              ? void (m
                  ? (s(),
                    e(
                      "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x77\x69\x6e\x64\x6f\x77\x6d\x69\x6e\x69\x6d\x69\x7a\x65\x20" +
                        m,
                      function () {
                        (n = !1), a();
                      }
                    ))
                  : a(!0))
              : a(!0)
          );
        }
        function w() {
          j && (j.kill(), (j = null)), o && (o = null), s();
        }
        var k,
          m,
          n,
          o,
          x,
          d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").spawn,
          e = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          f = c("\x2e\x2f\x70\x69\x2d\x76\x69\x65\x77\x65\x72"),
          g = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65"
          ),
          h = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          i = !1,
          j = null,
          l = 3e4,
          p = !1;
        (b.showUi = function (a) {
          return (
            (a = a || function () {}),
            j
              ? (r(),
                void (m && !n
                  ? ((n = !0),
                    f.showKioskUi(function () {
                      e(
                        "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x77\x69\x6e\x64\x6f\x77\x61\x63\x74\x69\x76\x61\x74\x65\x20" +
                          m,
                        function () {
                          a();
                        }
                      );
                    }))
                  : a(!0)))
              : a(!0)
          );
        }),
          (b.hideUi = v),
          (b.setupUi = function (a) {
            var b = process.version.slice(1, process.version.indexOf("\x2e"));
            return 0 == b
              ? void h.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x4b\x69\x6f\x73\x6b\x20\x55\x49\x20\x63\x61\x6e\x20\x6e\x6f\x74\x20\x62\x65\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64\x20\x69\x6e\x20\x6f\x6c\x64\x65\x72\x20\x69\x6d\x61\x67\x65\x73"
                )
              : void (a.enable
                  ? ((i = !0),
                    e(
                      "\x77\x68\x69\x63\x68\x20\x78\x64\x6f\x74\x6f\x6f\x6c",
                      function (b, c, d) {
                        b || d || !c || c.length <= 3
                          ? h.log(
                              "\x77\x61\x72\x6e",
                              "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2c\x20\x6b\x69\x6f\x73\x6b\x20\x75\x69\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x74\x61\x72\x74\x65\x64"
                            )
                          : t(a.url, a.timeout);
                      }
                    ))
                  : ((i = !1), w()));
          }),
          (x = "\x73\x74\x6f\x70\x70\x65\x64"),
          (b.takeAction = function (a, c) {
            if (!j)
              return g.sendError(
                c,
                "\x4b\x69\x6f\x73\x6b\x20\x75\x69\x20\x6e\x6f\x74\x20\x65\x6e\x61\x62\x6c\x65\x64"
              );
            switch (a.params.action) {
              case "\x70\x6c\x61\x79":
                a.query.file
                  ? ((x = "\x70\x6c\x61\x79\x69\x6e\x67"),
                    v(function () {
                      f.playFile(
                        a.query.file,
                        function () {
                          (x = "\x73\x74\x6f\x70\x70\x65\x64"), b.showUi();
                        },
                        300,
                        !0
                      );
                    }),
                    g.sendSuccess(
                      c,
                      "\x53\x74\x61\x72\x74\x65\x64\x20\x70\x6c\x61\x79\x69\x6e\x67\x20\x66\x69\x6c\x65",
                      { status: x }
                    ))
                  : g.sendSuccess(
                      c,
                      "\x4e\x6f\x74\x68\x69\x6e\x67\x20\x74\x6f\x20\x70\x6c\x61\x79",
                      { status: x }
                    );
                break;
              case "\x73\x68\x6f\x77":
                b.showUi(function () {
                  g.sendSuccess(
                    c,
                    "\x4b\x69\x6f\x73\x6b\x20\x75\x69\x20\x73\x68\x6f\x77\x6e",
                    {}
                  );
                });
                break;
              case "\x68\x69\x64\x65":
                n && f.stopKioskUi(),
                  v(function () {
                    g.sendSuccess(
                      c,
                      "\x4b\x69\x6f\x73\x6b\x20\x75\x69\x20\x68\x69\x64\x64\x65\x6e",
                      {}
                    );
                  });
                break;
              default:
                g.sendSuccess(
                  c,
                  "\x4e\x6f\x20\x61\x63\x74\x69\x6f\x6e\x20\x73\x70\x65\x63\x69\x66\x69\x65\x64\x20\x66\x6f\x72\x20\x6b\x69\x6f\x73\x6b\x20\x75\x69",
                  { status: x }
                );
            }
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x63\x6f\x6e\x74\x72\x6f\x6c\x6c\x65\x72\x73\x2f\x70\x69\x2d\x77\x65\x62\x6c\x69\x6e\x6b\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        function x(a) {
          clearTimeout(s[a].timer),
            o[a] && o[a].pid
              ? e(
                  "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x73\x65\x61\x72\x63\x68\x20\x2d\x2d\x6f\x6e\x6c\x79\x76\x69\x73\x69\x62\x6c\x65\x20\x2d\x2d\x70\x69\x64\x20" +
                    o[a].pid,
                  function (b, c) {
                    c
                      ? (i.log(
                          "\x64\x65\x62\x75\x67",
                          "\x77\x65\x62\x6c\x69\x6e\x6b\x20\x77\x69\x6e\x64\x6f\x77\x20\x69\x64\x2c\x20\x66\x6f\x72\x20" +
                            r[a] +
                            "\x3a" +
                            c
                        ),
                        (p[a] = c),
                        (s[a].retryCount = 0),
                        (s[a].invalidateTimer = setTimeout(function () {
                          i.log(
                            "\x69\x6e\x66\x6f",
                            "\x6d\x61\x6b\x69\x6e\x67\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x63\x61\x63\x68\x65\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x66\x6f\x72\x20\x69\x6e\x64\x65\x78\x3a\x20" +
                              a
                          ),
                            (p[a] = null);
                        }, 36e5)))
                      : s[a].retryCount < 20
                      ? (s[a].retryCount++,
                        (s[a].timer = setTimeout(function () {
                          x(a);
                        }, 500)))
                      : (s[a].retryCount = 0);
                  }
                )
              : i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x77\x65\x62\x4c\x69\x6e\x6b\x55\x7a\x62\x6c\x20\x70\x69\x64\x20\x69\x73\x20\x6e\x6f\x74\x20\x70\x72\x65\x73\x65\x6e\x74\x2c\x20\x66\x61\x74\x61\x6c\x20\x65\x72\x72\x6f\x72"
                );
        }
        function y(a, b, c, g, h) {
          var v,
            y,
            z,
            A,
            C,
            D,
            E,
            F,
            G,
            H,
            u = null;
          if ((a || (a = "\x6d\x61\x69\x6e"), "\x6d\x61\x69\x6e" == a)) {
            for (y = 0; n > y; y++)
              if (null === r[y]) {
                u = y;
                break;
              }
            null === u && (u = n), (v = r.indexOf(b)), v >= k && (v = -1);
          } else {
            if (!t) return "\x65\x72\x72\x6f\x72";
            switch (a) {
              case "\x73\x69\x64\x65":
                (u = l), (v = r[l] == b ? l : -1);
                break;
              case "\x62\x6f\x74\x74\x6f\x6d":
                (u = m), (v = r[m] == b ? m : -1);
                break;
              default:
                return "\x65\x72\x72\x6f\x72";
            }
          }
          return w && v >= 0 && p[v]
            ? (q[v] ||
                ((q[v] = !0),
                e(
                  "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x77\x69\x6e\x64\x6f\x77\x61\x63\x74\x69\x76\x61\x74\x65\x20" +
                    p[v],
                  function () {}
                )),
              void i.log(
                "\x64\x65\x62\x75\x67",
                "\x61\x63\x74\x69\x76\x61\x74\x69\x6e\x67\x20\x77\x69\x6e\x64\x6f\x77\x20\x66\x6f\x72\x20" +
                  b
              ))
            : (w &&
                "\x6d\x61\x69\x6e" == a &&
                (k - 1 > n && n++,
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x75\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x66\x69\x6e\x64\x20\x20\x77\x69\x6e\x64\x6f\x77\x20\x66\x6f\x72\x20" +
                    b +
                    "\x3b\x69\x6e\x64\x65\x78" +
                    u
                )),
              o[u] &&
                (o[u].kill(),
                (o[u] = null),
                i.log(
                  "\x64\x65\x62\x75\x67",
                  "\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x20\x66\x6f\x72\x20" +
                    r[u] +
                    "\x3b\x69\x6e\x64\x65\x78" +
                    u
                ),
                (r[u] = null)),
              void (t
                ? ((z = h.videoWindowSize.split("\x2b")),
                  (A = z[0].split("\x78")),
                  (C = A[0]),
                  (D = A[1]),
                  (E = z[1]),
                  (F = z[2]),
                  h.zoom &&
                    ((C = Math.round(C / h.zoom)),
                    (D = Math.round(D / h.zoom)),
                    (E = Math.round(E / h.zoom)),
                    (F = Math.round(F / h.zoom))),
                  (G = [
                    "\x2d\x2d\x61\x6c\x6c\x6f\x77\x2d\x66\x69\x6c\x65\x2d\x61\x63\x63\x65\x73\x73\x2d\x66\x72\x6f\x6d\x2d\x66\x69\x6c\x65\x73",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x73\x65\x73\x73\x69\x6f\x6e\x2d\x63\x72\x61\x73\x68\x65\x64\x2d\x62\x75\x62\x62\x6c\x65",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x69\x6e\x66\x6f\x62\x61\x72\x73",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x64\x65\x76\x69\x63\x65\x2d\x64\x69\x73\x63\x6f\x76\x65\x72\x79\x2d\x6e\x6f\x74\x69\x66\x69\x63\x61\x74\x69\x6f\x6e\x73",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x71\x75\x69\x63",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x66\x65\x61\x74\x75\x72\x65\x73\x3d\x54\x72\x61\x6e\x73\x6c\x61\x74\x65\x55\x49",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x6f\x70\x75\x70\x2d\x62\x6c\x6f\x63\x6b\x69\x6e\x67",
                    "\x2d\x2d\x6e\x6f\x65\x72\x72\x64\x69\x61\x6c\x6f\x67\x73",
                    "\x2d\x2d\x6e\x6f\x2d\x66\x69\x72\x73\x74\x2d\x72\x75\x6e",
                    "\x2d\x2d\x64\x69\x73\x61\x62\x6c\x65\x2d\x70\x69\x6e\x63\x68",
                    "\x2d\x2d\x6f\x76\x65\x72\x73\x63\x72\x6f\x6c\x6c\x2d\x68\x69\x73\x74\x6f\x72\x79\x2d\x6e\x61\x76\x69\x67\x61\x74\x69\x6f\x6e\x3d\x30",
                    "\x2d\x2d\x6b\x69\x6f\x73\x6b\x2d\x70\x72\x69\x6e\x74\x69\x6e\x67",
                    "\x2d\x2d\x69\x67\x6e\x6f\x72\x65\x2d\x63\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65\x2d\x65\x72\x72\x6f\x72\x73",
                    "\x2d\x2d\x61\x75\x74\x6f\x70\x6c\x61\x79\x2d\x70\x6f\x6c\x69\x63\x79\x3d\x6e\x6f\x2d\x75\x73\x65\x72\x2d\x67\x65\x73\x74\x75\x72\x65\x2d\x72\x65\x71\x75\x69\x72\x65\x64",
                    "\x2d\x2d\x63\x68\x65\x63\x6b\x2d\x66\x6f\x72\x2d\x75\x70\x64\x61\x74\x65\x2d\x69\x6e\x74\x65\x72\x76\x61\x6c\x3d\x31",
                    "\x2d\x2d\x73\x69\x6d\x75\x6c\x61\x74\x65\x2d\x63\x72\x69\x74\x69\x63\x61\x6c\x2d\x75\x70\x64\x61\x74\x65",
                    "\x2d\x2d\x75\x73\x65\x72\x2d\x64\x61\x74\x61\x2d\x64\x69\x72\x3d\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x63\x6f\x6e\x66\x69\x67\x2f\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2f\x77\x65\x62\x6c\x69\x6e\x6b" +
                      (u > 0 ? u : ""),
                    "\x2d\x2d\x77\x69\x6e\x64\x6f\x77\x2d\x73\x69\x7a\x65\x3d" +
                      C +
                      "\x2c" +
                      D,
                    "\x2d\x2d\x77\x69\x6e\x64\x6f\x77\x2d\x70\x6f\x73\x69\x74\x69\x6f\x6e\x3d" +
                      E +
                      "\x2c" +
                      F,
                  ]),
                  h.urlReloadDisable ||
                    G.push("\x2d\x2d\x69\x6e\x63\x6f\x67\x6e\x69\x74\x6f"),
                  h.kioskMode && G.push("\x2d\x2d\x6b\x69\x6f\x73\x6b"),
                  h.zoom &&
                    G.push(
                      "\x2d\x2d\x66\x6f\x72\x63\x65\x2d\x64\x65\x76\x69\x63\x65\x2d\x73\x63\x61\x6c\x65\x2d\x66\x61\x63\x74\x6f\x72\x3d" +
                        h.zoom
                    ),
                  G.push("\x2d\x2d\x61\x70\x70\x3d" + b),
                  (p[u] = null),
                  clearTimeout(s[u].invalidateTimer),
                  (q[u] = !0),
                  (r[u] = b),
                  (o[u] = d(
                    "\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
                    G
                  )),
                  (h.keystrokes || h.scroll) &&
                    (h.keyDelay && !isNaN(parseInt(h.keyDelay))
                      ? (h.keyDelay = 1e3 * parseInt(h.keyDelay))
                      : (h.keyDelay = 1e4),
                    setTimeout(function () {
                      var a, b, c, d, e, f, g, l, m;
                      if (h.keystrokes) {
                        for (
                          a = h.keystrokes.split("\x2c"),
                            b = 0,
                            c = a.length,
                            d = null,
                            e = null,
                            f = 10;
                          c > b;

                        ) {
                          if (
                            ((g = a[b].split("\x2b")),
                            0 == a[b].indexOf("\x72\x65\x70\x65\x61\x74"))
                          ) {
                            (e = a[b - 1]), (f = a[b].split("\x3d")[1] || 10);
                            break;
                          }
                          c > b + 1 &&
                            a[b + 1].endsWith("\x6d\x73") &&
                            ((d = parseInt(a[b + 1])),
                            i.log(
                              "\x69\x6e\x66\x6f",
                              "\x64\x65\x6c\x61\x79\x69\x6e\x67\x20\x6b\x65\x79\x73\x65\x6e\x64\x20\x62\x79\x20" +
                                d +
                                "\x20\x6d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73"
                            ),
                            j.setKeyboardDelay(d));
                          try {
                            g.length > 1
                              ? j.keyTap(g[g.length - 1], g.slice(0, -1))
                              : 1 == g.length && j.keyTap(g[0]);
                          } catch (k) {
                            i.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x69\x6e\x76\x61\x6c\x69\x64\x20\x6b\x65\x79\x20\x66\x6f\x72\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x73\x65\x6e\x64" +
                                k
                            );
                          }
                          d
                            ? ((d = null), j.setKeyboardDelay(10), (b += 2))
                            : (b += 1);
                        }
                        e &&
                          ((g = e.split("\x2b")),
                          (s[u].repeatKeyTimer = setInterval(function () {
                            try {
                              g.length > 1
                                ? j.keyTap(g[g.length - 1], g.slice(0, -1))
                                : 1 == g.length && j.keyTap(g[0]);
                            } catch (a) {
                              i.log(
                                "\x65\x72\x72\x6f\x72",
                                "\x69\x6e\x76\x61\x6c\x69\x64\x20\x6b\x65\x79\x20\x66\x6f\x72\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x73\x65\x6e\x64" +
                                  a
                              );
                            }
                          }, 1e3 * f)));
                      }
                      h.scroll &&
                        ((l = 0),
                        (m = function () {
                          j.keyTap("\x64\x6f\x77\x6e"),
                            l++,
                            100 > l && (s[u].scrollTimer = setTimeout(m, 2e3));
                        })());
                    }, h.keyDelay)),
                  o[u].on("\x65\x72\x72\x6f\x72", function (a) {
                    console.log("\x65\x72\x72\x6f\x72\x3a\x20" + a);
                  }),
                  o[u].once("\x65\x78\x69\x74", function () {}),
                  w &&
                    setImmediate(function () {
                      (s[u].retryCount = 0), x(u);
                    }))
                : ((r[0] = b),
                  "\x76\x30\x2e\x39\x2e\x30" == uzblVersion
                    ? (o[0] = d(
                        "\x75\x7a\x62\x6c",
                        [
                          "\x2d\x2d\x67\x65\x6f\x6d\x65\x74\x72\x79\x3d" +
                            h.videoWindowSize,
                          b,
                          "\x2d\x63",
                          "\x2d",
                          "\x2d\x70",
                        ],
                        { stdio: "\x70\x69\x70\x65" }
                      ))
                    : (o[0] = d(
                        "\x75\x7a\x62\x6c",
                        [
                          "\x2d\x67",
                          h.videoWindowSize,
                          "\x2d\x2d\x75\x72\x69",
                          b,
                          "\x2d\x63",
                          "\x2d",
                          "\x2d\x70",
                        ],
                        { stdio: "\x70\x69\x70\x65" }
                      )),
                  (H = uzblIsNew
                    ? "\x2f\x6d\x69\x73\x63\x2f\x75\x7a\x62\x6c\x72\x63\x2d\x76\x32"
                    : "\x2f\x6d\x69\x73\x63\x2f\x75\x7a\x62\x6c\x72\x63"),
                  o[0].stdin.write(
                    f.readFileSync(config.root + H) + "\n",
                    function (a) {
                      a &&
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x75\x7a\x62\x6c\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x63\x61\x6c\x6c\x62\x61\x63\x6b\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            a
                        ),
                        B(o[0]);
                    }
                  ),
                  o[0].once("\x65\x78\x69\x74", function () {}))));
        }
        function z(a, b) {
          function d(a) {
            clearTimeout(s[a].timer),
              clearTimeout(s[a].scrollTimer),
              clearTimeout(s[a].repeatKeyTimer),
              p[a]
                ? q[a] &&
                  (e(
                    "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x77\x69\x6e\x64\x6f\x77\x6d\x69\x6e\x69\x6d\x69\x7a\x65\x20" +
                      p[a],
                    function () {}
                  ),
                  (q[a] = !1),
                  i.log(
                    "\x64\x65\x62\x75\x67",
                    "\x6d\x69\x6e\x69\x6d\x69\x7a\x65\x20\x77\x69\x6e\x64\x6f\x77\x20\x66\x6f\x72\x20" +
                      r[a] +
                      "\x3b\x69\x6e\x64\x65\x78" +
                      a
                  ))
                : o[a] &&
                  (o[a].kill(),
                  (o[a] = null),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x6b\x69\x6c\x6c\x69\x6e\x67\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x66\x6f\x72\x20" +
                      r[a] +
                      "\x3b\x69\x6e\x64\x65\x78" +
                      a
                  ),
                  (r[a] = null));
          }
          var c;
          if (b) (c = r.indexOf(b)), c >= 0 && d(c);
          else if (a) {
            if ("\x73\x69\x64\x65" == a) d(l);
            else if ("\x62\x6f\x74\x74\x6f\x6d" == a) d(m);
            else if ("\x6d\x61\x69\x6e" == a) for (c = 0; k > c; c++) d(c);
          } else for (c = 0; k + 2 > c; c++) d(c);
        }
        function A() {
          for (var a = 0; k + 2 > a; a++)
            o[a] && (o[a].kill(), (o[a] = null)),
              (p[a] = null),
              clearTimeout(s[a].invalidateTimer),
              (q[a] = !1),
              (r[a] = null),
              clearTimeout(s[a].timer),
              (s[a].retryCount = 0);
          n = 0;
        }
        function B(a, b) {
          b || (b = function () {});
          var c = [],
            d = [];
          h.series(
            [
              function (a) {
                f.readFile(
                  "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x6c\x6f\x63\x61\x6c\x2f\x73\x68\x61\x72\x65\x2f\x75\x7a\x62\x6c\x2f\x63\x6f\x6f\x6b\x69\x65\x73\x2e\x74\x78\x74",
                  "\x75\x74\x66\x38",
                  function (b, d) {
                    b || !d || (c = c.concat(d.split("\n"))), a();
                  }
                );
              },
              function (a) {
                f.readFile(
                  "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x2e\x6c\x6f\x63\x61\x6c\x2f\x73\x68\x61\x72\x65\x2f\x75\x7a\x62\x6c\x2f\x73\x65\x73\x73\x69\x6f\x6e\x2d\x63\x6f\x6f\x6b\x69\x65\x73\x2e\x74\x78\x74",
                  "\x75\x74\x66\x38",
                  function (b, d) {
                    b || !d || (c = c.concat(d.split("\n"))), a();
                  }
                );
              },
              function (a) {
                var b, e, f, g, h, i, j;
                c.forEach(function (a) {
                  a &&
                    ((b = a.split("\t")),
                    b[0] &&
                      b[6] &&
                      ((e = b[0].replace(/^\#HttpOnly_/i, "")),
                      (f = b[2]),
                      (i = b[3].match(/TRUE/i)
                        ? "\x68\x74\x74\x70\x73"
                        : "\x68\x74\x74\x70"),
                      (j = b[4]),
                      (g = b[5]),
                      (h = b[6]),
                      d.push(
                        "\x63\x6f\x6f\x6b\x69\x65\x20\x61\x64\x64\x20" +
                          e +
                          "\x20" +
                          f +
                          "\x20" +
                          g +
                          "\x20" +
                          h +
                          "\x20" +
                          i +
                          "\x20" +
                          j
                      )));
                }),
                  console.log(d),
                  a();
              },
            ],
            function () {
              if (a && d.length) {
                var c = d.join("\n") + "\n";
                a.stdin.write(c, function (a) {
                  a
                    ? i.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x65\x72\x72\x6f\x72\x20\x69\x6e\x20\x77\x72\x69\x74\x69\x6e\x67\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x63\x6f\x6f\x6b\x69\x65\x20\x64\x61\x74\x61\x3a\x20\x27" +
                          a
                      )
                    : (i.log(
                        "\x69\x6e\x66\x6f",
                        "\x2a\x2a\x2a\x2a\x20\x62\x72\x6f\x77\x73\x65\x72\x20\x63\x6f\x6f\x6b\x69\x65\x20\x20\x61\x64\x64\x65\x64\x20\x2a\x2a\x2a\x2a"
                      ),
                      i.log("\x69\x6e\x66\x6f", c)),
                    b();
                });
              } else b();
            }
          );
        }
        var d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").spawn,
          e = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          f = c("\x66\x73"),
          h = (c("\x70\x61\x74\x68"), c("\x61\x73\x79\x6e\x63")),
          i = c(
            "\x2e\x2e\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72"
          ),
          j = c("\x72\x6f\x62\x6f\x74\x6a\x73"),
          k = 3,
          l = k,
          m = k + 1,
          n = 0,
          o = [null, null, null, null, null],
          p = [null, null, null, null, null],
          q = [!1, !1, !1, !1, !1],
          r = [null, null, null, null, null],
          s = [
            { timer: null, retryCount: 0 },
            { timer: null, retryCount: 0 },
            { timer: null, retryCount: 0 },
            { timer: null, retryCount: 0 },
            { timer: null, retryCount: 0 },
          ],
          t = !0,
          u = !1,
          v = !1,
          w = !1;
        e(
          "\x77\x68\x69\x63\x68\x20\x63\x68\x72\x6f\x6d\x69\x75\x6d\x2d\x62\x72\x6f\x77\x73\x65\x72",
          function (a, b, c) {
            (t = !(a || c)),
              t &&
              0 != process.version.slice(1, process.version.indexOf("\x2e"))
                ? e(
                    "\x77\x68\x69\x63\x68\x20\x78\x64\x6f\x74\x6f\x6f\x6c",
                    function (a, b, c) {
                      a || c || !b || b.length <= 3
                        ? i.log(
                            "\x77\x61\x72\x6e",
                            "\x78\x64\x6f\x74\x6f\x6f\x6c\x20\x69\x73\x20\x2a\x6e\x6f\x74\x2a\x20\x61\x76\x61\x69\x6c\x61\x62\x6c\x65\x2c\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x69\x73\x20\x6e\x6f\x74\x20\x63\x61\x63\x68\x65\x64"
                          )
                        : ((u = !0), (w = u && v));
                    }
                  )
                : i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x6f\x6c\x64\x20\x6e\x6f\x64\x65\x20\x76\x65\x72\x73\x69\x6f\x6e\x2c\x20\x77\x65\x62\x6c\x69\x6e\x6b\x20\x69\x73\x20\x6e\x6f\x74\x20\x63\x61\x63\x68\x65\x64"
                  );
          }
        ),
          (b.getUzblBrowserCookies = B),
          (b.removeWebLinkView = z),
          (b.removeAllWebLinkViews = A),
          (b.showWebLinkView = y),
          (b.setWeblinkCacheEnable = function (a) {
            a != v && u && A(), (v = a), (w = u && v);
          });
      }
    ),
    c.register(
      "\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x65\x6e\x76\x2f\x61\x6c\x6c\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var d = c("\x70\x61\x74\x68"),
          e = process.cwd(),
          f = d.join(e, "\x2f\x64\x61\x74\x61"),
          g = d.join(e, "\x2f\x2e\x2e\x2f\x6d\x65\x64\x69\x61"),
          h = d.join(e, "\x2f\x6d\x69\x73\x63");
        a.exports = {
          root: e,
          dataDir: f,
          uploadDir: g,
          licensesDirPath: d.join(
            f,
            "\x2f\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f"
          ),
          scriptDir: h,
          scriptDirPath: h + "\x2f",
          systemScript:
            "\x2f\x62\x69\x6e\x2f\x62\x61\x73\x68\x20" +
            h +
            "\x2f\x73\x79\x73\x74\x65\x6d\x2e\x73\x68\x20",
          syncDir: d.join(
            f,
            "\x2f\x73\x79\x6e\x63\x5f\x66\x6f\x6c\x64\x65\x72\x73"
          ),
          syncDirPath: d.join(
            f,
            "\x2f\x73\x79\x6e\x63\x5f\x66\x6f\x6c\x64\x65\x72\x73\x2f"
          ),
          viewDir: d.join(e, "\x2f\x61\x70\x70\x2f\x76\x69\x65\x77\x73"),
          workerDir: d.join(
            e,
            "\x2f\x61\x70\x70\x2f\x77\x6f\x72\x6b\x65\x72\x73"
          ),
          mediaDir: g,
          mediaPath: g + "\x2f",
          thumbnailDir: g + "\x2f\x5f\x74\x68\x75\x6d\x62\x6e\x61\x69\x6c\x73",
          defaultPlaylist: "\x64\x65\x66\x61\x75\x6c\x74",
          defaultTemplateDir:
            e + "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f",
          defaultTemplate:
            e +
            "\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f\x74\x31\x5f\x74\x65\x6d\x70\x6c\x61\x74\x65\x2e\x65\x6a\x73",
          logFile:
            e +
            "\x2f\x2e\x2e\x2f\x66\x6f\x72\x65\x76\x65\x72\x5f\x6f\x75\x74\x2e\x6c\x6f\x67",
          logStoreDir: g + "\x2f\x5f\x6c\x6f\x67\x73",
          mongo_options: {
            useNewUrlParser: !0,
            useCreateIndex: !0,
            useFindAndModify: !1,
            useUnifiedTopology: !0,
            poolSize: 100,
            keepAlive: !0,
            keepAliveInitialDelay: 3e4,
            autoIndex: !1,
            connectTimeoutMS: 1e4,
            socketTimeoutMS: 36e4,
            family: 4,
          },
          session: { secret: "\x70\x69\x53\x69\x67\x6e\x61\x67\x65" },
          pisignageDomain:
            "\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d",
          appPaths: [
            "\x70\x6c\x61\x79\x65\x72\x73",
            "\x67\x72\x6f\x75\x70\x73",
            "\x61\x73\x73\x65\x74\x73",
            "\x70\x6c\x61\x79\x6c\x69\x73\x74\x73",
            "\x72\x65\x70\x6f\x72\x74\x73",
            "\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x73",
            "\x73\x65\x74\x74\x69\x6e\x67\x73",
            "\x6c\x6f\x67\x69\x6e",
            "\x6d\x61\x6e\x61\x67\x65",
            "\x73\x69\x67\x6e\x75\x70",
            "\x72\x65\x73\x65\x6c\x6c\x65\x72\x2d\x73\x69\x67\x6e\x75\x70",
            "\x6b\x62",
            "\x74\x65\x6d\x70\x6c\x61\x74\x65\x73",
            "\x72\x65\x73\x65\x6c\x6c\x65\x72",
          ],
          filenameRegex: /[&\/\\#,+()$~%'":*?<>{}]/g,
          groupNameRegEx: /[&\/\\#,+()$~%'":*?<>{}\^]/g,
          videoRegex: /(mp4|mov|m4v|avi|webm|wmv|flv|mkv|mpg|mpeg|3gp)$/i,
          audioRegex: /(mp3|m4a|mp4a|aac)$/i,
          imageRegex: /(jpg|jpeg|png|gif|bmp)$/i,
          noticeRegex: /\.html$/,
          zipfileRegex: /(.zip|.gz|.bz2)$/i,
          repofileRegex: /\.repo$/i,
          liveStreamRegex: /\.tv$/i,
          omxStreamRegex: /\.stream$/i,
          pdffileRegex: /\.pdf$/i,
          txtFileRegex: /\.txt$/i,
          linkURL: /\.link$/i,
          CORSLink: /\.weblink$/i,
          localFolderRegex: /\.local$/i,
          mediaRss: /\.mrss$/i,
          radioFileRegex: /\.radio$/i,
          brandRegex: /^(brand_intro|brand_intro_portrait)\./i,
          nestedPlaylist: /^__/i,
          systemAssets: [
            "\x5f\x73\x79\x73\x74\x65\x6d\x5f\x6e\x6f\x74\x69\x63\x65\x2e\x68\x74\x6d\x6c",
          ],
          spacePerLicense: 1024,
          productNames: {
            pimanaged:
              "\x70\x69\x53\x69\x67\x6e\x61\x67\x65\x20\x50\x6c\x61\x79\x65\x72\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x77\x69\x74\x68\x20\x31\x20\x59\x65\x61\x72\x20\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x61\x74\x20\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d",
            pirenewal:
              "\x53\x69\x6e\x67\x6c\x65\x20\x50\x6c\x61\x79\x65\x72\x20\x41\x6e\x6e\x75\x61\x6c\x20\x53\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6f\x6e\x20\x61\x74\x20\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2e\x63\x6f\x6d\x20\x73\x65\x72\x76\x65\x72",
            pilicense:
              "\x70\x69\x53\x69\x67\x6e\x61\x67\x65\x20\x50\x6c\x61\x79\x65\x72\x20\x4c\x69\x63\x65\x6e\x73\x65\x20\x4f\x6e\x6c\x79",
          },
        };
      }
    ),
    c.register(
      "\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x65\x6e\x76\x2f\x70\x69\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var d = c("\x70\x61\x74\x68"),
          e = process.cwd(),
          g =
            (d.join(e, "\x2f\x2e\x2e\x2f\x6d\x65\x64\x69\x61"),
            d.join(e, "\x2f\x2e\x2e\x2f\x6c\x6f\x67\x73"));
        a.exports = {
          env: "\x70\x69",
          https: !1,
          port: process.env.PORT || 8e3,
          configDir: e + "\x2f\x63\x6f\x6e\x66\x69\x67\x2f",
          poweronConfig:
            e +
            "\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x5f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73\x6f\x6e",
          settingsFile:
            e +
            "\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x5f\x73\x65\x74\x74\x69\x6e\x67\x73\x2e\x6a\x73\x6f\x6e",
          logsDir: g,
          scriptDir: e + "\x2f\x6d\x69\x73\x63",
          ifacePath:
            "\x2f\x65\x74\x63\x2f\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73",
          dhcpcdFile:
            "\x2f\x65\x74\x63\x2f\x64\x68\x63\x70\x63\x64\x2e\x63\x6f\x6e\x66",
          wifiPath:
            "\x2f\x65\x74\x63\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2f\x77\x70\x61\x5f\x73\x75\x70\x70\x6c\x69\x63\x61\x6e\x74\x2e\x63\x6f\x6e\x66",
          bootConfigPath:
            "\x2f\x62\x6f\x6f\x74\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x74\x78\x74",
          pkgJson: e + "\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e",
        };
      }
    ),
    c.register(
      "\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67\x2e\x6a\x73",
      function (a, b, c) {
        "use strict";
        var d = c("\x6c\x6f\x64\x61\x73\x68");
        a.exports = d.extend(
          c("\x2e\x2f\x65\x6e\x76\x2f\x61\x6c\x6c\x2e\x6a\x73"),
          c(
            "\x2e\x2f\x65\x6e\x76\x2f" + process.env.NODE_ENV + "\x2e\x6a\x73"
          ) || {}
        );
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x65\x73\x74\x77\x61\x72\x65\x2e\x6a\x73",
      function (a) {
        "use strict";
        var d = function (a, b, c) {
            if (a) {
              var d = {};
              return (
                (d.stat_message = b),
                (d.data = c),
                (d.success = !0),
                a.contentType("\x6a\x73\x6f\x6e"),
                a.json(d)
              );
            }
          },
          e = function (a, b, c) {
            if (a) {
              var d = {},
                e = c ? "" + c : "";
              return (
                (d.stat_message = b + e),
                (d.success = !1),
                a.contentType("\x6a\x73\x6f\x6e"),
                a.json(d)
              );
            }
          };
        a.exports = { sendSuccess: d, sendError: e };
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x65\x78\x74\x72\x61\x63\x74\x2d\x7a\x69\x70\x2e\x6a\x73",
      function (a, b, c) {
        function j(a, b, c) {
          var d = function (a) {
            var c, d, e;
            if (
              a &&
              -1 == a.indexOf("\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c")
            ) {
              for (c = !1, d = 0, e = a.length; e > d; d++)
                if (a[d].match(/\.html$/i)) {
                  c = !0;
                  break;
                }
              c &&
                f.symlink(
                  b + "\x2f" + a[d],
                  b + "\x2f\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c",
                  function () {}
                );
            }
          };
          g("\x75\x6e\x7a\x69\x70\x20" + a + "\x20\x2d\x64\x20" + b).on(
            "\x65\x78\x69\x74",
            function () {
              f.readdir(b, function (a, e) {
                a
                  ? (i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x65\x78\x74\x72\x61\x63\x74\x20\x46\x69\x6c\x65\x20\x72\x65\x61\x64\x20\x64\x69\x72\x20\x65\x72\x72\x6f\x72\x2c\x20" +
                        a
                    ),
                    c())
                  : ((e = e.filter(function (a) {
                      return 0 != a.indexOf("\x5f\x5f");
                    })),
                    1 == e.length
                      ? g(
                          "\x6d\x76\x20" +
                            b +
                            "\x2f" +
                            e[0] +
                            "\x2f\x2a\x20" +
                            b +
                            "\x2f"
                        ).on("\x65\x78\x69\x74", function () {
                          c(),
                            f.readdir(b, function (a, b) {
                              a || d(b);
                            });
                        })
                      : (d(e), c()));
              });
            }
          );
        }
        var d = c("\x61\x73\x79\x6e\x63"),
          e = c("\x70\x61\x74\x68"),
          f = c("\x66\x73"),
          g = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          h = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          i = c("\x2e\x2f\x6c\x6f\x67\x67\x65\x72");
        b.extractStart = function (a, b, c) {
          var k = function (a) {
            var k,
              l,
              m,
              n = h.mediaPath;
            b && (n = b + "\x2f"),
              d.eachSeries(
                a,
                function (a, b) {
                  a.match(h.zipfileRegex)
                    ? ((m = e.basename(a, e.extname(a))),
                      (k = n + a),
                      (l = n + "\x5f" + m + "\x2e\x72\x65\x70\x6f"),
                      f.exists(l, function (a) {
                        a
                          ? g(
                              "\x73\x75\x64\x6f\x20\x72\x6d\x20\x2d\x72\x66\x20" +
                                l
                            ).on("\x65\x78\x69\x74", function () {
                              j(k, l, b);
                            })
                          : j(k, l, b);
                      }))
                    : b();
                },
                function (a) {
                  a &&
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x65\x78\x74\x72\x61\x63\x74\x69\x6e\x67\x20\x66\x69\x6c\x65\x73\x20\x3a\x20" +
                        a
                    ),
                    c && c();
                }
              );
          };
          a
            ? k(a)
            : f.readdir(h.mediaDir, function (a, b) {
                k(b);
              });
        };
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x69\x63\x65\x6e\x73\x65\x2d\x75\x74\x69\x6c\x73\x2e\x6a\x73",
      function (a, b, c) {
        var k,
          l,
          m,
          d = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          e = c("\x63\x72\x79\x70\x74\x6f"),
          f = "\x61\x65\x73\x2d\x31\x39\x32\x2d\x63\x62\x63",
          g = c("\x66\x73"),
          h = c("\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e"),
          i =
            "\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x4c\x61\x6e\x67\x66\x6f\x72\x64",
          j = c("\x2e\x2f\x6c\x6f\x67\x67\x65\x72"),
          n = {},
          o = !1,
          p = 1,
          q =
            "\x77\x67\x65\x74\x20\x2d\x54\x20\x31\x32\x30\x20\x2d\x74\x20\x32\x20\x2d\x2d\x6e\x6f\x2d\x63\x68\x65\x63\x6b\x2d\x63\x65\x72\x74\x69\x66\x69\x63\x61\x74\x65\x20";
        b.checkForLicense = function (a, b, c, r) {
          var s, t;
          return (
            (p = 1),
            a && b
              ? (r &&
                  0 === r.indexOf(a + "\x2e") &&
                  (r = r.slice(a.length + 1)),
                (k = e
                  .createHmac("\x73\x68\x61\x31", i)
                  .update(b)
                  .digest("\x68\x65\x78")),
                (s = function (c) {
                  d(
                    q +
                      h.config_server +
                      "\x2f\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f" +
                      a +
                      "\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                      b +
                      "\x2e\x74\x78\x74\x20\x20\x2d\x4f\x20\x2e\x2e\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                      b +
                      "\x2e\x74\x78\x74",
                    function (a, e, f) {
                      j.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x6c\x69\x63\x65\x6e\x73\x65\x20\x66\x69\x6c\x65\x20\x77\x67\x65\x74\x20\x72\x65\x73\x75\x6c\x74\x3a\x20" +
                          f
                      ),
                        a
                          ? d(
                              q +
                                h.config_server +
                                "\x2f\x6c\x69\x63\x65\x6e\x73\x65\x73\x2f" +
                                r +
                                "\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                                b +
                                "\x2e\x74\x78\x74\x20\x20\x2d\x4f\x20\x2e\x2e\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                                b +
                                "\x2e\x74\x78\x74",
                              function (a, b, d) {
                                j.log(
                                  "\x77\x61\x72\x6e",
                                  "\x6c\x69\x63\x65\x6e\x73\x65\x20\x66\x69\x6c\x65\x20\x77\x67\x65\x74\x20\x72\x65\x73\x75\x6c\x74\x3a\x20" +
                                    d
                                ),
                                  c();
                              }
                            )
                          : c();
                    }
                  );
                }),
                (t = function () {
                  g.readFile(
                    "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x6c\x69\x63\x65\x6e\x73\x65\x5f" +
                      b +
                      "\x2e\x74\x78\x74",
                    "\x75\x74\x66\x38",
                    function (d, g) {
                      if (d)
                        j.log(
                          "\x77\x61\x72\x6e",
                          "\x6c\x69\x63\x65\x6e\x73\x65\x20\x66\x69\x6c\x65\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x3a\x20" +
                            d
                        ),
                          p
                            ? s(function () {
                                p--, t();
                              })
                            : c(!1);
                      else
                        try {
                          (l = e.createDecipher(f, k)),
                            (m = l.update(
                              g,
                              "\x68\x65\x78",
                              "\x75\x74\x66\x38"
                            )),
                            (m +=
                              l["\x66\x69\x6e\x61\x6c"]("\x75\x74\x66\x38")),
                            (n = JSON.parse(m)),
                            n.installation &&
                              a &&
                              a != n.installation &&
                              ((n.enabled = !1),
                              j.log(
                                "\x77\x61\x72\x6e",
                                "\x69\x6e\x73\x74\x61\x6c\x6c\x61\x74\x69\x6f\x6e\x20\x6e\x6f\x74\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x2c\x20" +
                                  a +
                                  "\x26" +
                                  n.installation
                              )),
                            n.domain &&
                              r &&
                              r != n.domain &&
                              ((n.enabled = !1),
                              j.log(
                                "\x77\x61\x72\x6e",
                                "\x64\x6f\x6d\x61\x69\x6e\x20\x6e\x6f\x74\x20\x6d\x61\x74\x63\x68\x69\x6e\x67\x2c\x20" +
                                  r
                              )),
                            n.validity &&
                              n.validity < Date.now() &&
                              ((n.enabled = !1),
                              j.log(
                                "\x77\x61\x72\x6e",
                                "\x6c\x69\x63\x65\x6e\x73\x65\x20\x68\x61\x73\x20\x65\x78\x70\x69\x72\x65\x64\x20\x20" +
                                  new Date(n.validity).toDateString()
                              )),
                            n.enabled
                              ? (n.installation && n.domain && (o = !0),
                                c(n.enabled, o))
                              : p
                              ? s(function () {
                                  p--, t();
                                })
                              : c(!1);
                        } catch (h) {
                          j.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x4a\x53\x4f\x4e\x20\x50\x61\x72\x73\x65\x20\x65\x72\x72\x6f\x72\x20\x6c\x69\x63\x65\x6e\x73\x65\x20\x3a\x20" +
                              b
                          ),
                            p
                              ? s(function () {
                                  p--, t();
                                })
                              : c(!1);
                        }
                    }
                  );
                }),
                void t())
              : c(!1)
          );
        };
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x72\x73\x73\x2d\x73\x65\x72\x76\x69\x63\x65\x2e\x6a\x73",
      function (a, b, c) {
        var d = c("\x66\x65\x65\x64\x70\x61\x72\x73\x65\x72"),
          e = c("\x72\x65\x71\x75\x65\x73\x74"),
          f = c("\x2e\x2f\x6c\x6f\x67\x67\x65\x72");
        b.getFeeds = function (a, b, c, g) {
          function m() {
            var d,
              e,
              f,
              l,
              a = [],
              b = g * h.length;
            if (
              !j &&
              (j = i.every(function (a) {
                return a.completed || a.error;
              }))
            ) {
              (d = i
                .map(function (a) {
                  return a.completed ? a.items : [];
                })
                .filter(function (a) {
                  return a.length > 0;
                })),
                (e = 0);
              do
                for (e = 0, f = 0; f < d.length; f++)
                  (l = d[f]),
                    l.length &&
                      ((a = a.concat(l.splice(0, k))), (e += l.length));
              while (a.length < b && e > 0);
              c(null, a.slice(0, b));
            }
          }
          var h = [],
            i = [],
            j = !1,
            k = 5,
            l = 4;
          return (
            (g = g || 100),
            (a = a.trim()),
            a.match(/;$/) && (a = a.slice(0, -1)),
            a
              ? ((h = a.split("\x3b")),
                (h = h.map(function (a) {
                  return (
                    (a = a.trim()),
                    -1 === a.indexOf("\x3a\x2f\x2f") &&
                      (a = "\x68\x74\x74\x70\x3a\x2f\x2f" + a),
                    a
                  );
                })),
                void h.forEach(function (a, c) {
                  (i[c] = {
                    req: e(a),
                    feedparser: new d({ feedUrl: a }),
                    items: [],
                    completed: !1,
                    error: !1,
                  }),
                    (b = b || !1),
                    i[c].req.on("\x65\x72\x72\x6f\x72", function () {
                      f.log(
                        "\x65\x72\x72\x6f\x72",
                        "\x2a\x2a\x2a\x2a\x20\x72\x65\x71\x75\x65\x73\x74\x20\x65\x72\x72\x6f\x72\x2c\x20\x70\x6c\x65\x61\x73\x65\x20\x63\x68\x65\x63\x6b\x20\x52\x53\x53\x20\x66\x65\x65\x64\x20\x55\x52\x4c\x20" +
                          a
                      ),
                        (i[c].error = !0),
                        m();
                    }),
                    i[c].req.on(
                      "\x72\x65\x73\x70\x6f\x6e\x73\x65",
                      function (d) {
                        var e = this;
                        return (
                          d.setEncoding(
                            b ? "\x62\x69\x6e\x61\x72\x79" : "\x75\x74\x66\x38"
                          ),
                          200 !== d.statusCode
                            ? this.emit(
                                "\x65\x72\x72\x6f\x72",
                                Error(
                                  "\x42\x61\x64\x20\x73\x74\x61\x74\x75\x73\x20\x63\x6f\x64\x65\x20" +
                                    d.statusCode +
                                    "\x2c\x20\x63\x61\x6e\x27\x74\x20\x66\x65\x74\x63\x68\x20\x66\x65\x65\x64\x73\x20\x66\x72\x6f\x6d\x20\x55\x52\x4c\x20" +
                                    a
                                )
                              )
                            : void e.pipe(i[c].feedparser)
                        );
                      }
                    ),
                    i[c].feedparser.on(
                      "\x72\x65\x61\x64\x61\x62\x6c\x65",
                      function () {
                        var a = this,
                          b = this.meta,
                          d = "",
                          e = a.read();
                        for (
                          b.title &&
                          h.length > 1 &&
                          (d = b.title
                            .replace(/\s/g, "")
                            .substr(0, l)
                            .concat("\x3a\x20"));
                          e &&
                          (e.title &&
                            (e.title = d.concat(e.title.replace(/'/g, "\x60"))),
                          e.description &&
                            (e.description = d.concat(
                              e.description.replace(/'/g, "\x60")
                            )),
                          i[c].items.length < g);

                        )
                          i[c].items.push(e), (e = a.read());
                      }
                    ),
                    i[c].feedparser.on("\x65\x6e\x64", function () {
                      (i[c].completed = !0), m();
                    });
                }))
              : c("\x6c\x69\x6e\x6b\x20\x69\x73\x20\x65\x6d\x70\x74\x79")
          );
        };
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x6c\x6f\x67\x67\x65\x72\x2e\x6a\x73",
      function (a, b, c) {
        function q() {
          var a = 0,
            b = 0,
            c = "",
            d = "";
          Object.keys(k).forEach(function (e) {
            var f = k[e];
            (f.connection > 20 || f.disconnect > 20) &&
              p(
                process.pid +
                  "\x3a\x20\x73\x6f\x63\x6b\x65\x74\x2e\x69\x6f\x20\x65\x76\x65\x6e\x74\x73\x20\x74\x6f\x6f\x20\x68\x69\x67\x68\x20\x66\x72\x6f\x6d\x20\x69\x70\x3a\x20" +
                  e +
                  "\x3b" +
                  f.connection +
                  "\x3b" +
                  f.disconnect
              ),
              (a += f.connection || 0),
              (b += f.disconnect || 0),
              f.connection && (c += e + "\x3a" + f.connection + "\x3b"),
              f.disconnect && (d += e + "\x3a" + f.disconnect + "\x3b");
          }),
            (a > 20 || b > 20) &&
              p(
                process.pid +
                  "\x3a\x20\x74\x6f\x74\x61\x6c\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2f\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x20\x69\x6e\x20\x6c\x61\x73\x74\x20\x31\x20\x6d\x69\x6e\x75\x74\x65\x3a\x20" +
                  a +
                  "\x3b" +
                  b
              ),
            c &&
              p(
                process.pid +
                  "\x3a\x20\x49\x50\x73\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x20\x69\x6e\x20\x6c\x61\x73\x74\x20\x31\x20\x6d\x69\x6e\x75\x74\x65\x3a\x20" +
                  c
              ),
            d &&
              p(
                process.pid +
                  "\x3a\x20\x49\x50\x73\x20\x66\x6f\x72\x20\x74\x68\x65\x20\x64\x69\x73\x63\x6f\x6e\x6e\x65\x63\x74\x20\x69\x6e\x20\x6c\x61\x73\x74\x20\x31\x20\x6d\x69\x6e\x75\x74\x65\x3a\x20" +
                  d
              ),
            m > 0 &&
              p(
                process.pid +
                  "\x3a\x20\x74\x6f\x74\x61\x6c\x20\x64\x72\x6f\x70\x70\x65\x64\x50\x61\x63\x6b\x65\x74\x73\x20\x69\x6e\x20\x6c\x61\x73\x74\x20\x31\x20\x6d\x69\x6e\x75\x74\x65\x3a\x20" +
                  m
              ),
            (k = {}),
            (m = 0),
            setTimeout(q, 6e4);
        }
        var k,
          l,
          m,
          n,
          o,
          p,
          d = b,
          e = c("\x66\x73"),
          f = [],
          g = 1e3,
          h = !1,
          i = !0,
          j = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          );
        (d.debugLevel = "\x69\x6e\x66\x6f"),
          (d.log = function (a, b) {
            var c = [
              "\x65\x72\x72\x6f\x72",
              "\x77\x61\x72\x6e",
              "\x69\x6e\x66\x6f",
              "\x64\x65\x62\x75\x67",
            ];
            c.indexOf(a) <= c.indexOf(d.debugLevel) &&
              ("\x73\x74\x72\x69\x6e\x67" != typeof b &&
                (b = JSON.stringify(b, null, 4)),
              console.log(
                new Date().toLocaleString() +
                  "\x20\x2d\x20" +
                  j.port +
                  "\x3a\x20" +
                  a +
                  "\x3a\x20" +
                  b
              ));
          }),
          (d.testLog = function (a, b, c, d) {
            i &&
              (h && ((h = !1), (f = [])),
              f.push([a, b, c, d]),
              f.length > g && f.splice(0, 1));
          }),
          (d.getTestLog = function () {
            return (h = !0), f;
          }),
          (k = {}),
          (l = { connection: 20 }),
          (m = 0),
          "\x70\x69" != j.env &&
            ((n =
              "\x2f\x76\x61\x72\x2f\x6c\x6f\x67\x2f\x70\x69\x73\x69\x67\x6e\x61\x67\x65\x2d\x73\x74\x61\x74\x73\x2e\x74\x78\x74"),
            (o = e.createWriteStream(n, { flags: "\x61" })),
            (p = function (a) {
              "\x6f\x62\x6a\x65\x63\x74" == typeof a && (a = JSON.stringify(a)),
                o.write(
                  new Date().toLocaleString() + "\x20\x2d\x20" + a + "\n"
                );
            })(
              process.pid +
                "\x3a\x20\x6f\x70\x65\x6e\x69\x6e\x67\x20\x73\x74\x61\x74\x73\x20\x66\x69\x6c\x65\x2c\x20" +
                n +
                "\x20\x66\x6f\x72\x20\x6c\x6f\x67\x67\x69\x6e\x67\x20\x70\x65\x72\x2d\x6d\x69\x6e\x75\x74\x65\x20\x73\x74\x73\x74\x73\x2f\x64\x65\x62\x75\x67\x20\x6d\x65\x73\x73\x61\x67\x65\x73"
            )),
          (d.logAndThrottle = function (a, b, c) {
            if (
              ((k[a] = k[a] || { disconnect: 0, connection: 0 }),
              (k[a][b] = k[a][b] || 0),
              k[a][b]++,
              c)
            ) {
              c = c.slice(0, 25);
              var d = b + c;
              (k[a][d] = k[a][d] || 0), k[a][d]++;
            }
            return l[b] && k[a][b] > l[b] ? (m++, !0) : !1;
          }),
          "\x70\x69" != j.env && q();
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x73\x79\x73\x74\x65\x6d\x2d\x69\x6e\x66\x6f\x2e\x6a\x73",
      function (a, b, c) {
        function p(a) {
          if (!a)
            return void i.log(
              "\x65\x72\x72\x6f\x72",
              "\x53\x63\x72\x69\x70\x74\x20\x66\x69\x6c\x65\x20\x6e\x61\x6d\x65\x20\x6d\x69\x73\x73\x69\x6e\x67"
            );
          var b = "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f" + a;
          g.stat(b, function (a, c) {
            !a &&
              c &&
              (!c || c.isFile()) &&
              e("\x70\x79\x74\x68\x6f\x6e\x20" + b, function (a, b, c) {
                (a || c) &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x53\x63\x72\x69\x70\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      a +
                      "\x20\x73\x74\x64\x65\x72\x72\x3a\x20" +
                      c
                  ),
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x53\x63\x72\x69\x70\x74\x20\x6f\x75\x74\x70\x75\x74\x3a\x20" +
                      b
                  );
              });
          });
        }
        var m,
          n,
          o,
          d = c("\x6f\x73"),
          e = c("\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73").exec,
          f = c("\x61\x73\x79\x6e\x63"),
          g = c("\x66\x73"),
          h = c(
            "\x2e\x2e\x2f\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67\x2f\x63\x6f\x6e\x66\x69\x67"
          ),
          i = c("\x2e\x2f\x6c\x6f\x67\x67\x65\x72"),
          j = !1,
          k = null,
          l = function (a) {
            e(
              "\x65\x63\x68\x6f\x20\x73\x63\x61\x6e\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31",
              { timeout: 4e4 },
              function (b, c, d) {
                a &&
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x63\x65\x73\x20\x73\x75\x70\x70\x6f\x72\x74\x3a\x20" +
                      c +
                      "\x3b" +
                      d +
                      "\x3b" +
                      b
                  ),
                  b || d || (c && (c.match(/device\ \#/g) || []).length <= 1)
                    ? ((j || a) &&
                        i.log(
                          "\x69\x6e\x66\x6f",
                          "\x63\x65\x63\x20\x69\x73\x20\x4e\x4f\x54\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64"
                        ),
                      (j = !1))
                    : ((!j || a) &&
                        i.log(
                          "\x69\x6e\x66\x6f",
                          "\x63\x65\x63\x20\x49\x53\x20\x73\x75\x70\x70\x6f\x72\x74\x65\x64"
                        ),
                      (j = !0));
              }
            );
          };
        l(!0),
          (b.reboot = function (a) {
            e(
              "\x73\x79\x6e\x63\x3b\x73\x75\x64\x6f\x20\x72\x65\x62\x6f\x6f\x74\x20\x2d\x70",
              function (b, c, d) {
                null !== b &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x52\x65\x62\x6f\x6f\x74\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                      b
                  ),
                  a && a(b, c, d);
              }
            );
          }),
          (b.shutdown = function () {
            e(
              "\x73\x75\x64\x6f\x20\x73\x68\x75\x74\x64\x6f\x77\x6e\x20\x2d\x68\x20\x6e\x6f\x77"
            );
          }),
          (b.getIp = function (a) {
            var e,
              c = [],
              b = d.networkInterfaces();
            a || console.log(b);
            for (e in b)
              b[e].forEach(function (a) {
                a &&
                  !a.internal &&
                  "\x49\x50\x76\x34" == a.family &&
                  c.push({ type: e, ip: a.address });
              });
            return c;
          }),
          (b.wlanReboot = function (a) {
            var b =
                "\x73\x75\x64\x6f\x20\x69\x66\x75\x70\x20\x77\x6c\x61\x6e\x30",
              c =
                "\x73\x75\x64\x6f\x20\x69\x66\x64\x6f\x77\x6e\x20\x2d\x2d\x66\x6f\x72\x63\x65\x20\x77\x6c\x61\x6e\x30";
            f.series(
              [
                function (a) {
                  e(
                    "\x67\x72\x65\x70\x20\x2d\x71\x20\x22\x5e\x69\x66\x61\x63\x65\x20\x65\x74\x68\x30\x20\x69\x6e\x65\x74\x22\x20\x2f\x65\x74\x63\x2f\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x69\x6e\x74\x65\x72\x66\x61\x63\x65\x73",
                    function (d) {
                      d &&
                        ((b =
                          "\x73\x75\x64\x6f\x20\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x77\x6c\x61\x6e\x30\x20\x75\x70"),
                        (c =
                          "\x73\x75\x64\x6f\x20\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x77\x6c\x61\x6e\x30\x20\x64\x6f\x77\x6e")),
                        a();
                    }
                  );
                },
                function (a) {
                  e(
                    "\x69\x66\x63\x6f\x6e\x66\x69\x67\x20\x77\x6c\x61\x6e\x30",
                    function (b, c) {
                      b || !c
                        ? a("\x6e\x6f\x20\x77\x6c\x61\x6e")
                        : c.indexOf(
                            "\x69\x6e\x65\x74\x20\x61\x64\x64\x72\x3a"
                          ) >= 0
                        ? a("\x6e\x6f\x20\x6e\x65\x65\x64")
                        : a();
                    }
                  );
                },
                function (a) {
                  e(c, function () {
                    a();
                  });
                },
                function (a) {
                  setTimeout(function () {
                    a();
                  }, 15e3);
                },
                function (a) {
                  e(b, function () {
                    i.log(
                      "\x77\x61\x72\x6e",
                      "\x52\x65\x73\x74\x61\x72\x74\x69\x6e\x67\x20\x77\x6c\x61\x6e\x20\x69\x6e\x74\x65\x72\x66\x61\x63\x65"
                    ),
                      a();
                  });
                },
                function (a) {
                  setTimeout(function () {
                    a();
                  }, 3e4);
                },
              ],
              function () {
                a();
              }
            );
          }),
          (m = !1),
          (b.tvOff = function () {
            return m
              ? (clearTimeout(n), void (n = setTimeout(b.tvOff, 5e3)))
              : ((m = !0),
                void b.getDisplayProperties(function () {
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x20\x2a\x2a\x2a\x2a\x20\x74\x75\x72\x6e\x69\x6e\x67\x20\x74\x76\x20\x6f\x66\x66\x20\x2a\x2a\x2a\x2a\x2a"
                  ),
                    e(
                      "\x65\x63\x68\x6f\x20\x22\x73\x74\x61\x6e\x64\x62\x79\x20\x30\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31",
                      { timeout: 2e4 },
                      function (a) {
                        a &&
                          i.log(
                            "\x65\x72\x72\x6f\x72",
                            "\x43\x45\x43\x20\x54\x56\x20\x6f\x66\x66\x20\x3a\x20" +
                              a
                          );
                      }
                    ),
                    setTimeout(function () {
                      i.log(
                        "\x69\x6e\x66\x6f",
                        "\x20\x2a\x2a\x2a\x2a\x20\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x6f\x66\x66\x20\x2a\x2a\x2a\x2a\x2a"
                      ),
                        e(
                          "\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x2d\x6f\x66\x66",
                          function (a) {
                            a && console.log(a);
                          }
                        ),
                        (m = !1);
                    }, 3e4),
                    p("\x54\x56\x6f\x66\x66\x2e\x70\x79");
                }));
          }),
          (b.tvOn = function (a) {
            return m
              ? (clearTimeout(n),
                void (n = setTimeout(function () {
                  b.tvOn(a);
                }, 5e3)))
              : ((m = !0),
                void b.getDisplayProperties(function () {
                  i.log(
                    "\x69\x6e\x66\x6f",
                    "\x20\x2a\x2a\x2a\x2a\x20\x74\x75\x72\x6e\x69\x6e\x67\x20\x74\x76\x20\x6f\x6e\x20\x2a\x2a\x2a\x2a\x2a"
                  ),
                    e(
                      "\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x2d\x70\x72\x65\x66\x65\x72\x72\x65\x64\x3b\x20\x73\x75\x64\x6f\x20\x63\x68\x76\x74\x20\x36\x3b\x20\x73\x75\x64\x6f\x20\x63\x68\x76\x74\x20\x37",
                      function (b) {
                        b && console.log(b),
                          setTimeout(function () {
                            i.log(
                              "\x69\x6e\x66\x6f",
                              "\x20\x2a\x2a\x2a\x2a\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x6f\x6e\x20\x2a\x2a\x2a\x2a\x2a"
                            ),
                              e(
                                "\x65\x63\x68\x6f\x20\x22\x6f\x6e\x20\x30\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31",
                                { timeout: 2e4 },
                                function () {
                                  e(
                                    "\x65\x63\x68\x6f\x20\x22\x61\x73\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31",
                                    { timeout: 2e4 }
                                  );
                                }
                              ),
                              setTimeout(function () {
                                a && a(), (m = !1);
                              }, 1e4),
                              p("\x54\x56\x6f\x6e\x2e\x70\x79"),
                              setTimeout(function () {
                                j || l();
                              }, 1e4);
                          }, 3e4);
                      }
                    );
                }));
          }),
          (b.getDisplayProperties = function (a) {
            if (k) return a(null, k);
            var b = e("\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x73"),
              c = !1;
            b.stdout.on("\x64\x61\x74\x61", function (b) {
              return (k = b), (c = !0), a(null, b);
            }),
              b.stderr.on("\x64\x61\x74\x61", function (b) {
                return console.log(b), (c = !0), a(b, null);
              }),
              b.on("\x63\x6c\x6f\x73\x65", function () {
                return c
                  ? void 0
                  : a(
                      "\x4e\x6f\x20\x73\x74\x64\x6f\x75\x74\x20\x6f\x72\x20\x73\x74\x64\x65\x72\x72",
                      k
                    );
              });
          }),
          (b.getCecStatus = function (a, c, d, f) {
            var h,
              k,
              l,
              g = function (a) {
                e(
                  "\x2f\x6f\x70\x74\x2f\x76\x63\x2f\x62\x69\x6e\x2f\x76\x63\x67\x65\x6e\x63\x6d\x64\x20\x6d\x65\x61\x73\x75\x72\x65\x5f\x74\x65\x6d\x70",
                  { timeout: 2e4 },
                  function (b, c) {
                    d(a, c.slice(5));
                  }
                );
              };
            return (
              (f = f || !1),
              j
                ? ((h = e(
                    "\x65\x63\x68\x6f\x20\x22\x70\x6f\x77\x20\x30\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31",
                    { timeout: 2e4 }
                  )),
                  h.stdout.on("\x64\x61\x74\x61", function (a) {
                    k = a;
                  }),
                  h.stderr.on("\x64\x61\x74\x61", function (a) {
                    l = a;
                  }),
                  void h.on("\x63\x6c\x6f\x73\x65", function (h) {
                    var j, m;
                    return h || l || !k
                      ? (i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x67\x65\x74\x43\x65\x63\x53\x74\x61\x74\x75\x73\x20\x65\x72\x72\x6f\x72\x3a\x20" +
                            k +
                            "\x3b" +
                            l
                        ),
                        void g(!1))
                      : ((j =
                          -1 == k.indexOf("\x75\x6e\x6b\x6e\x6f\x77\x6e") &&
                          -1 == k.indexOf("\x73\x74\x61\x6e\x64\x62\x79")),
                        void (c == j ||
                        f ||
                        !a ||
                        k.indexOf("\x75\x6e\x6b\x6e\x6f\x77\x6e") >= 0
                          ? (c !== j &&
                              -1 == k.indexOf("\x75\x6e\x6b\x6e\x6f\x77\x6e") &&
                              i.log(
                                "\x77\x61\x72\x6e",
                                "\x43\x45\x43\x20\x73\x74\x61\x74\x75\x73\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x74\x68\x61\x6e\x20\x64\x65\x73\x69\x72\x65\x64\x20\x73\x74\x61\x74\x65\x2c\x20" +
                                  c +
                                  "\x3b" +
                                  j +
                                  "\x3b" +
                                  k +
                                  "\x3b" +
                                  l
                              ),
                            g(j))
                          : (i.log(
                              "\x77\x61\x72\x6e",
                              "\x53\x65\x6e\x64\x69\x6e\x67\x20\x43\x45\x43\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20\x74\x6f\x20\x54\x56\x20\x66\x6f\x72\x20\x63\x6f\x72\x72\x65\x63\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x54\x56\x20\x73\x74\x61\x74\x65\x2c\x20" +
                                c +
                                "\x3b" +
                                j +
                                "\x3b" +
                                k +
                                "\x3b" +
                                l
                            ),
                            c
                              ? ((m =
                                  "\x65\x63\x68\x6f\x20\x22\x6f\x6e\x20\x30\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31"),
                                p("\x54\x56\x6f\x6e\x2e\x70\x79"))
                              : ((m =
                                  "\x65\x63\x68\x6f\x20\x22\x73\x74\x61\x6e\x64\x62\x79\x20\x30\x22\x20\x7c\x20\x63\x65\x63\x2d\x63\x6c\x69\x65\x6e\x74\x20\x2d\x73\x20\x2d\x64\x20\x31"),
                                p("\x54\x56\x6f\x66\x66\x2e\x70\x79")),
                            e(m, { timeout: 2e4 }, function () {
                              setTimeout(function () {
                                b.getCecStatus(a, c, d, !0);
                              }, 3e3);
                            }))));
                  }))
                : g(!0)
            );
          }),
          (b.changeDisplaySetting = function (a, b, c) {
            e(
              h.systemScript +
                "\x2d\x2d\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x20" +
                b +
                "\x20" +
                a,
              function (a, b, d) {
                a || d
                  ? i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x4f\x72\x69\x65\x6e\x74\x61\x74\x69\x6f\x6e\x20\x43\x68\x61\x6e\x67\x65\x20\x2c\x20" +
                        a +
                        "\x20\x20" +
                        d
                    )
                  : i.log("\x69\x6e\x66\x6f", b),
                  c && c();
              }
            );
          }),
          (b.getResolution = function (a) {
            e(
              "\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x73",
              function (b, c, d) {
                var f,
                  e = [1920, 1080];
                if (b || d || !c)
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20\x67\x65\x74\x20\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x2c\x20\x75\x73\x69\x6e\x67\x20\x64\x65\x66\x61\x75\x6c\x74\x20" +
                      b +
                      "\x20\x20" +
                      d
                  );
                else
                  try {
                    (f = c.split("\x2c")[1].trim()),
                      (e = f.split("\x20")[0].split("\x78")),
                      (e[0] = parseInt(e[0] || 1920)),
                      (e[1] = parseInt(e[1] || 1080)),
                      i.log(
                        "\x69\x6e\x66\x6f",
                        "\x53\x63\x72\x65\x65\x6e\x20\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x20\x66\x72\x6f\x6d\x20\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x73\x3a\x20" +
                          e
                      );
                  } catch (g) {
                    i.log(
                      "\x65\x72\x72\x6f\x72",
                      "\x43\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x67\x65\x74\x20\x73\x63\x72\x65\x65\x6e\x20\x72\x65\x73\x6f\x6c\x75\x74\x69\x6f\x6e\x20\x66\x72\x6f\x6d\x20\x74\x76\x73\x65\x72\x76\x69\x63\x65\x20\x2d\x73\x2c\x20\x75\x73\x69\x6e\x67\x20\x64\x65\x66\x61\x75\x6c\x74\x3a\x20" +
                        e
                    );
                  }
                a && a(b || d, e);
              }
            );
          }),
          (o =
            "\x2f\x68\x6f\x6d\x65\x2f\x70\x69\x2f\x68\x6f\x73\x74\x6e\x61\x6d\x65\x2e\x6c\x69\x6e\x6b"),
          (b.changeHostname = function (a) {
            (a = a || function () {}),
              g.readlink(o, function (b, c) {
                return b || !c || d.hostname() == c
                  ? a()
                  : (e(
                      h.systemScript +
                        "\x2d\x2d\x63\x68\x61\x6e\x67\x65\x2d\x68\x6f\x73\x74\x6e\x61\x6d\x65\x3d\x22" +
                        c +
                        "\x22",
                      function (b, d, e) {
                        b || e
                          ? i.log(
                              "\x65\x72\x72\x6f\x72",
                              "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x68\x6f\x73\x74\x6e\x61\x6d\x65\x2c\x20" +
                                b +
                                "\x20\x20" +
                                e
                            )
                          : i.log(
                              "\x69\x6e\x66\x6f",
                              "\x43\x68\x61\x6e\x67\x65\x64\x20\x68\x6f\x73\x74\x6e\x61\x6d\x65\x20\x74\x6f\x20" +
                                c
                            ),
                          a();
                      }
                    ),
                    void g.unlink(o, function (a) {
                      a &&
                        i.log(
                          "\x77\x61\x72\x6e",
                          "\x45\x72\x72\x6f\x72\x20\x64\x65\x6c\x65\x74\x69\x6e\x67\x20\x73\x79\x6d\x20\x6c\x69\x6e\x6b\x20\x6f\x66\x20\x68\x6f\x73\x74\x6e\x61\x6d\x65\x20\x75\x73\x65\x2c\x20" +
                            a
                        );
                    }));
              });
          }),
          (b.registerHostnameChange = function (a, b) {
            return (
              (b = b || function () {}),
              a
                ? ((a = a.replace(/\s+/g, "\x2d")),
                  (a = a.replace(/[^-0-9A-Za-z]/g, "")),
                  (a = a.replace(/^-/, "")),
                  void g.unlink(o, function () {
                    g.symlink(a, o, function (a) {
                      a &&
                        i.log(
                          "\x65\x72\x72\x6f\x72",
                          "\x45\x72\x72\x6f\x72\x20\x63\x72\x65\x61\x74\x69\x6e\x67\x20\x73\x79\x6d\x20\x6c\x69\x6e\x6b\x20\x66\x6f\x72\x20\x68\x6f\x73\x74\x6e\x61\x6d\x65\x20\x75\x73\x65\x2c\x20" +
                            a
                        ),
                        b();
                    });
                  }))
                : b()
            );
          }),
          (b.factoryReset = function (a) {
            var c = e(
              h.systemScript +
                "\x2d\x2d\x66\x61\x63\x74\x6f\x72\x79\x2d\x72\x65\x73\x65\x74"
            );
            c.stdout.on("\x64\x61\x74\x61", function (a) {
              i.log("\x69\x6e\x66\x6f", a);
            }),
              c.stderr.on("\x64\x61\x74\x61", function (a) {
                i.log(
                  "\x65\x72\x72\x6f\x72",
                  "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x46\x61\x63\x74\x6f\x72\x79\x20\x52\x65\x73\x65\x74\x20" +
                    a
                );
              }),
              c.stdout.on("\x64\x61\x74\x61", function () {
                i.log(
                  "\x69\x6e\x66\x6f",
                  "\x52\x65\x62\x6f\x6f\x74\x69\x6e\x67\x20\x74\x68\x65\x20\x70\x6c\x61\x79\x65\x72\x20\x61\x66\x74\x65\x72\x20\x66\x61\x63\x74\x6f\x72\x79\x20\x72\x65\x73\x65\x74"
                );
              }),
              c.on("\x65\x78\x69\x74", function (c) {
                a && a(c), c || setTimeout(b.reboot, 1e3);
              });
          }),
          (b.updateDnsEntry = function (a, b) {
            e(
              h.systemScript +
                "\x2d\x2d\x63\x68\x61\x6e\x67\x65\x2d\x64\x6e\x73\x20" +
                a.primary +
                "\x20" +
                a.secondary,
              function (a, c, d) {
                (a || d) &&
                  i.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x45\x72\x72\x6f\x72\x20\x69\x6e\x20\x63\x68\x61\x6e\x67\x69\x6e\x67\x20\x44\x4e\x53\x20\x65\x6e\x74\x72\x79\x20\x3a\x20" +
                      a +
                      "\x20\x53\x74\x64\x65\x72\x72\x20\x3a\x20" +
                      d
                  ),
                  b && b();
              }
            );
          }),
          (b.changeSshPassword = function (a) {
            e(
              h.systemScript +
                "\x2d\x2d\x63\x68\x61\x6e\x67\x65\x2d\x73\x73\x68\x2d\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x22" +
                a +
                "\x22",
              function (a, b, c) {
                a || c
                  ? i.log(
                      "\x69\x6e\x66\x6f",
                      "\x43\x68\x61\x6e\x67\x65\x20\x53\x53\x48\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x2d\x20\x65\x72\x72\x3a\x20" +
                        a +
                        "\x2c\x73\x74\x64\x65\x72\x72\x3a\x20" +
                        c
                    )
                  : i.log(
                      "\x69\x6e\x66\x6f",
                      "\x53\x73\x68\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x69\x73\x20\x63\x68\x61\x6e\x67\x65\x64"
                    );
              }
            );
          });
      }
    ),
    c.register(
      "\x2e\x2f\x61\x70\x70\x2f\x6f\x74\x68\x65\x72\x73\x2f\x66\x69\x6c\x65\x2d\x75\x74\x69\x6c\x2e\x6a\x73",
      function (a, b, c) {
        var d = c("\x66\x73"),
          e = c("\x73\x61\x6e\x69\x74\x69\x7a\x65\x2d\x68\x74\x6d\x6c"),
          f = c("\x2e\x2f\x6c\x6f\x67\x67\x65\x72"),
          g = c("\x70\x61\x74\x68"),
          h =
            "\n\x3c\x73\x63\x72\x69\x70\x74\x20\x73\x72\x63\x3d\x22\x2e\x2e\x2f\x70\x69\x53\x69\x67\x6e\x61\x67\x65\x50\x72\x6f\x2f\x74\x65\x6d\x70\x6c\x61\x74\x65\x73\x2f\x73\x63\x72\x65\x65\x6e\x2e\x6d\x69\x6e\x2e\x6a\x73\x22\x3e\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e\n";
        b.modifyHTML = function (a, b) {
          var c, i, j, k;
          b &&
            ((k = g.join(a, b)),
            d.readFile(k, "\x75\x74\x66\x38", function (a, b) {
              return a
                ? f.log(
                    "\x65\x72\x72\x6f\x72",
                    "\x63\x75\x73\x74\x6f\x6d\x5f\x6c\x61\x79\x6f\x75\x74\x20\x46\x69\x6c\x65\x20\x52\x65\x61\x64\x20\x45\x72\x72\x6f\x72",
                    a
                  )
                : ((j = e(b, {
                    allowedTags: [
                      "\x21\x44\x4f\x43\x54\x59\x50\x45",
                      "\x68\x74\x6d\x6c",
                      "\x68\x65\x61\x64",
                      "\x6d\x65\x74\x61",
                      "\x74\x69\x74\x6c\x65",
                      "\x62\x6f\x64\x79",
                      "\x68\x31",
                      "\x68\x32",
                      "\x68\x33",
                      "\x68\x34",
                      "\x68\x35",
                      "\x68\x36",
                      "\x62\x6c\x6f\x63\x6b\x71\x75\x6f\x74\x65",
                      "\x70",
                      "\x61",
                      "\x75\x6c",
                      "\x6f\x6c",
                      "\x6e\x6c",
                      "\x6c\x69",
                      "\x62",
                      "\x69",
                      "\x73\x74\x72\x6f\x6e\x67",
                      "\x65\x6d",
                      "\x73\x74\x72\x69\x6b\x65",
                      "\x63\x6f\x64\x65",
                      "\x68\x72",
                      "\x62\x72",
                      "\x64\x69\x76",
                      "\x74\x61\x62\x6c\x65",
                      "\x74\x68\x65\x61\x64",
                      "\x63\x61\x70\x74\x69\x6f\x6e",
                      "\x74\x62\x6f\x64\x79",
                      "\x74\x72",
                      "\x74\x68",
                      "\x74\x64",
                      "\x70\x72\x65",
                      "\x6d\x61\x72\x71\x75\x65\x65",
                      "\x73\x74\x79\x6c\x65",
                      "\x69\x66\x72\x61\x6d\x65",
                      "\x6c\x69\x6e\x6b",
                      "\x73\x63\x72\x69\x70\x74",
                      "\x69\x6d\x67",
                    ],
                    allowedAttributes: !1,
                  })),
                  (j = b),
                  (c = j.lastIndexOf("\x3c\x2f\x62\x6f\x64\x79\x3e")),
                  (i = j.slice(0, c) + h + j.slice(c)),
                  void d.writeFile(k, i, function () {}));
            }));
        };
      }
    ),
    (b.exports = c("\x2e\x2f\x70\x69\x2d\x73\x65\x72\x76\x65\x72\x2e\x6a\x73"));
})(require, module);
