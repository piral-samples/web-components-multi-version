//@pilet v:2(esbuildpr_mfone,{})
System.register(["react"], function (_export, _context) {
  "use strict";

  var i;

  function r(e) {
    e.registerTile(function () {
      return i("div", {
        className: "teaser"
      }, "Welcome to Piral 1 using the shared version of the component lib!", i("lib-container", null, i("lib-button-group", null)));
    }, {
      initialColumns: 4,
      initialRows: 4
    });
  }

  _export("setup", r);

  return {
    setters: [function (_react) {
      i = _react.createElement;
    }],
    execute: function () {
      (function () {
        var d = document;

        var __bundleUrl__ = function () {
          try {
            throw new Error();
          } catch (t) {
            var e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
            if (e) return e[0].replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^\/]+$/, "$1") + "/";
          }

          return "/";
        }();

        ["index.css"].forEach(function (cf) {
          ;
          var u = __bundleUrl__ + cf;
          var e = d.createElement("link");
          e.setAttribute('data-origin', "mf-one");
          e.type = "text/css";
          e.rel = "stylesheet";
          e.href = u;
          d.head.appendChild(e);
        });
      })();
    }
  };
});