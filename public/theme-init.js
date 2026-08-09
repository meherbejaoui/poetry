"use strict";
/* Manual light/dark/system theme toggle for poetry (meherbejaoui.com/poetry).
   Plain classic script (no ES module syntax) loaded synchronously before
   any CSS, so the persisted theme is applied to <html data-theme> before
   first paint — avoids a flash of the wrong theme. Cycle: system -> light
   -> dark -> system. Mirrors the pattern used on meherbejaoui.com and its
   other sub-sites (see edu's identical script), with this site's own
   localStorage key. */
(function () {
  var KEY = "poetry-theme";
  var root = document.documentElement;

  function apply(mode) {
    if (mode === "light" || mode === "dark") {
      root.setAttribute("data-theme", mode);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function current() {
    return localStorage.getItem(KEY) || "system";
  }

  apply(current());

  window.__poetryToggleTheme = function () {
    var order = ["system", "light", "dark"];
    var next = order[(order.indexOf(current()) + 1) % order.length];
    localStorage.setItem(KEY, next);
    apply(next);
    return next;
  };

  window.__poetryCurrentTheme = current;
})();
