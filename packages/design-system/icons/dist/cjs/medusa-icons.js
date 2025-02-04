/**
 * @medusajs/icons v2.1.3 - MIT
 */

'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

var __defProp$59 = Object.defineProperty;
var __getOwnPropSymbols$59 = Object.getOwnPropertySymbols;
var __hasOwnProp$59 = Object.prototype.hasOwnProperty;
var __propIsEnum$59 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$59 = (obj, key, value) => key in obj ? __defProp$59(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$59 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$59.call(b, prop))
      __defNormalProp$59(a, prop, b[prop]);
  if (__getOwnPropSymbols$59)
    for (var prop of __getOwnPropSymbols$59(b)) {
      if (__propIsEnum$59.call(b, prop))
        __defNormalProp$59(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4J = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$59.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$59)
    for (var prop of __getOwnPropSymbols$59(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$59.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AcademicCapSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4J(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$59({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.823 10.513c-.408.21-.866.32-1.323.32s-.916-.11-1.324-.32L2.611 8.677v3.267c0 1.605 2.46 2.445 4.889 2.445s4.889-.84 4.889-2.445V8.678z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.361 7.7a9.3 9.3 0 0 1 .192-2.134c.016-.116.058-.17.058-.4 0-.534-.295-1.018-.77-1.262L8.213 1.006a1.56 1.56 0 0 0-1.426 0L1.16 3.905c-.475.244-.77.728-.77 1.262s.295 1.018.77 1.263l5.628 2.897a1.56 1.56 0 0 0 1.426 0l4.845-2.495c-.017.304-.04.607-.03.91.021.687.112 1.375.268 2.046a.666.666 0 1 0 1.298-.3 9.2 9.2 0 0 1-.233-1.787" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AcademicCapSolid.displayName = "AcademicCapSolid";

var __defProp$58 = Object.defineProperty;
var __getOwnPropSymbols$58 = Object.getOwnPropertySymbols;
var __hasOwnProp$58 = Object.prototype.hasOwnProperty;
var __propIsEnum$58 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$58 = (obj, key, value) => key in obj ? __defProp$58(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$58 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$58.call(b, prop))
      __defNormalProp$58(a, prop, b[prop]);
  if (__getOwnPropSymbols$58)
    for (var prop of __getOwnPropSymbols$58(b)) {
      if (__propIsEnum$58.call(b, prop))
        __defNormalProp$58(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4I = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$58.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$58)
    for (var prop of __getOwnPropSymbols$58(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$58.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AcademicCap = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4I(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$58({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m7.907 1.599 5.629 2.897a.754.754 0 0 1 0 1.34L7.907 8.736a.89.89 0 0 1-.814 0L1.464 5.837a.754.754 0 0 1 0-1.34l5.629-2.898a.89.89 0 0 1 .814 0" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.944 5.167a9.94 9.94 0 0 0 0 4.472M3.278 9.056v2.889c0 .98 1.89 1.777 4.222 1.777s4.222-.796 4.222-1.777v-2.89" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AcademicCap.displayName = "AcademicCap";

var __defProp$57 = Object.defineProperty;
var __getOwnPropSymbols$57 = Object.getOwnPropertySymbols;
var __hasOwnProp$57 = Object.prototype.hasOwnProperty;
var __propIsEnum$57 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$57 = (obj, key, value) => key in obj ? __defProp$57(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$57 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$57.call(b, prop))
      __defNormalProp$57(a, prop, b[prop]);
  if (__getOwnPropSymbols$57)
    for (var prop of __getOwnPropSymbols$57(b)) {
      if (__propIsEnum$57.call(b, prop))
        __defNormalProp$57(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4H = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$57.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$57)
    for (var prop of __getOwnPropSymbols$57(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$57.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AdjustmentsDone = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4H(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$57({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M8.5 2.528h-.778a.75.75 0 1 0 0 1.5h1.08a4 4 0 0 1-.302-1.5M10.695 6.07a4 4 0 0 1-1.21-.94.75.75 0 0 0-.29.592V6.75H1.5a.75.75 0 0 0 0 1.5h7.694v1.028a.75.75 0 0 0 1.5 0zM5.806 1.5a.75.75 0 1 0-1.5 0v1.028H1.5a.75.75 0 0 0 0 1.5h2.806v1.028a.75.75 0 0 0 1.5 0V1.5M12.611 6.75a.75.75 0 0 0 0 1.5h.889a.75.75 0 0 0 0-1.5zM6.972 11.722a.75.75 0 0 1 .75-.75H13.5a.75.75 0 1 1 0 1.5H7.722a.75.75 0 0 1-.75-.75M1.5 10.972a.75.75 0 0 0 0 1.5h2.806V13.5a.75.75 0 0 0 1.5 0V9.944a.75.75 0 1 0-1.5 0v1.028z"
        }
      ), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#60A5FA" }), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AdjustmentsDone.displayName = "AdjustmentsDone";

var __defProp$56 = Object.defineProperty;
var __getOwnPropSymbols$56 = Object.getOwnPropertySymbols;
var __hasOwnProp$56 = Object.prototype.hasOwnProperty;
var __propIsEnum$56 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$56 = (obj, key, value) => key in obj ? __defProp$56(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$56 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$56.call(b, prop))
      __defNormalProp$56(a, prop, b[prop]);
  if (__getOwnPropSymbols$56)
    for (var prop of __getOwnPropSymbols$56(b)) {
      if (__propIsEnum$56.call(b, prop))
        __defNormalProp$56(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4G = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$56.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$56)
    for (var prop of __getOwnPropSymbols$56(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$56.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Adjustments = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4G(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$56({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.611 7.5h.889M1.5 7.5h8.444M7.722 3.278H13.5M1.5 3.278h3.556M7.722 11.722H13.5M1.5 11.722h3.556M9.944 5.722v3.556M5.056 1.5v3.556M5.056 9.944V13.5" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Adjustments.displayName = "Adjustments";

var __defProp$55 = Object.defineProperty;
var __getOwnPropSymbols$55 = Object.getOwnPropertySymbols;
var __hasOwnProp$55 = Object.prototype.hasOwnProperty;
var __propIsEnum$55 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$55 = (obj, key, value) => key in obj ? __defProp$55(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$55 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$55.call(b, prop))
      __defNormalProp$55(a, prop, b[prop]);
  if (__getOwnPropSymbols$55)
    for (var prop of __getOwnPropSymbols$55(b)) {
      if (__propIsEnum$55.call(b, prop))
        __defNormalProp$55(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4F = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$55.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$55)
    for (var prop of __getOwnPropSymbols$55(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$55.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AiAssistent = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$4F(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$55({
        xmlns: "http://www.w3.org/2000/svg",
        width: 19,
        height: 19,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { filter: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9.5, cy: 8.457, r: 7.414, fill: "url(#b)" }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9.5, cy: 8.457, r: 7.414, fill: "url(#c)" })),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          filter: "url(#d)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 9.5, cy: 5.85, r: 4.171, fill: "url(#e)" }),
        /* @__PURE__ */ React__namespace.createElement(
          "circle",
          {
            cx: 9.5,
            cy: 5.85,
            r: 4.071,
            stroke: "url(#f)",
            strokeWidth: 0.2
          }
        )
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          filter: "url(#g)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          }
        },
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12.107, cy: 9.5, r: 4.171, fill: "url(#h)" }),
        /* @__PURE__ */ React__namespace.createElement(
          "circle",
          {
            cx: 12.107,
            cy: 9.5,
            r: 4.071,
            stroke: "url(#i)",
            strokeWidth: 0.2
          }
        )
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          filter: "url(#j)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1.0428 0 0 1.0428 11.064 3.243)"
        },
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#k)" }),
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#l)", strokeWidth: 0.2 })
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          filter: "url(#m)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "scale(1.0428 -1.0428)rotate(90 12.61 .5)"
        },
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#n)" }),
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#o)", strokeWidth: 0.2 })
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          filter: "url(#p)",
          opacity: 0.8,
          style: {
            mixBlendMode: "plus-lighter"
          },
          transform: "matrix(-1.0428 0 0 1.0428 13.67 6.893)"
        },
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 4, fill: "url(#q)" }),
        /* @__PURE__ */ React__namespace.createElement("circle", { cx: 4, cy: 4, r: 3.9, stroke: "url(#r)", strokeWidth: 0.2 })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 9.589,
          x2: 9.589,
          y1: 1.087,
          y2: 15.916,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.2, stopColor: "#C686FF" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.8, stopColor: "#8D99FF" })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 5.017,
          x2: 13.721,
          y1: 8.468,
          y2: 11.691,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#FF6778", stopOpacity: 0.8 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.1 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "e",
          x1: 9.728,
          x2: 13.899,
          y1: 5.922,
          y2: 5.922,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "f",
          x1: 13.899,
          x2: 9.728,
          y1: 5.922,
          y2: 5.922,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "h",
          x1: 12.446,
          x2: 16.618,
          y1: 9.728,
          y2: 9.728,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "i",
          x1: 16.618,
          x2: 12.446,
          y1: 9.728,
          y2: 9.728,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "k",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "l",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "n",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "o",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#8D99FF", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "q",
          x1: 4,
          x2: 8,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#8D99FF", stopOpacity: 0.1 }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0.3 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "r",
          x1: 8,
          x2: 4,
          y1: 4,
          y2: 4,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "a",
          width: 19,
          height: 19,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_7446_46535"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_7446_46535",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dx: -0.25, dy: -0.25 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_7446_46535" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dx: 0.25, dy: 0.25 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_7446_46535",
            result: "effect3_innerShadow_7446_46535"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dx: 1, dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect3_innerShadow_7446_46535",
            result: "effect4_innerShadow_7446_46535"
          }
        )
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "d",
          width: 9.385,
          height: 9.385,
          x: 4.807,
          y: 1.158,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "g",
          width: 9.385,
          height: 9.385,
          x: 7.414,
          y: 4.807,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "j",
          width: 9.385,
          height: 9.385,
          x: 2.2,
          y: 2.722,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "m",
          width: 9.385,
          height: 9.385,
          x: 4.807,
          y: 3.765,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "p",
          width: 9.385,
          height: 9.385,
          x: 4.807,
          y: 6.372,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feGaussianBlur",
          {
            result: "effect1_foregroundBlur_7446_46535",
            stdDeviation: 0.25
          }
        )
      ))
    );
  }
);
AiAssistent.displayName = "AiAssistent";

var __defProp$54 = Object.defineProperty;
var __getOwnPropSymbols$54 = Object.getOwnPropertySymbols;
var __hasOwnProp$54 = Object.prototype.hasOwnProperty;
var __propIsEnum$54 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$54 = (obj, key, value) => key in obj ? __defProp$54(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$54 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$54.call(b, prop))
      __defNormalProp$54(a, prop, b[prop]);
  if (__getOwnPropSymbols$54)
    for (var prop of __getOwnPropSymbols$54(b)) {
      if (__propIsEnum$54.call(b, prop))
        __defNormalProp$54(a, prop, b[prop]);
    }
  return a;
};
const Amazon = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$54({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F90",
          d: "M.028 11.263q.067-.11.218-.014 3.409 1.978 7.418 1.978 2.675 0 5.28-.996l.197-.088q.128-.054.183-.081c.141-.055.244-.029.328.081.075.109.056.21-.075.3-.16.119-.375.256-.629.409q-1.166.695-2.616 1.079a11 11 0 0 1-6.844-.361 11.2 11.2 0 0 1-3.394-2.094q-.093-.07-.094-.137.002-.044.032-.082zm4.103-3.887q0-.942.465-1.61a2.86 2.86 0 0 1 1.275-1.01c.497-.21 1.097-.36 1.82-.45q.366-.043 1.2-.109v-.23c0-.582-.066-.975-.188-1.173q-.282-.404-.9-.406H7.69q-.45.042-.778.288a1.13 1.13 0 0 0-.422.685c-.038.187-.129.29-.272.318l-1.575-.197c-.155-.037-.233-.112-.233-.243 0-.029.005-.057.014-.094q.231-1.209 1.138-1.8C6.17.96 6.873.735 7.679.689h.338c1.031 0 1.848.271 2.43.806.084.094.169.187.253.3.075.103.14.196.177.281a1.2 1.2 0 0 1 .122.356c.037.16.065.263.084.32.019.064.039.187.048.384q.01.291.012.345v3.3c0 .235.038.45.103.648q.099.294.197.421l.319.421q.084.128.085.225 0 .113-.113.196c-.75.657-1.162 1.013-1.226 1.07q-.156.126-.394.027a4 4 0 0 1-.329-.31l-.194-.217A6 6 0 0 1 9.393 9l-.187-.272c-.507.554-1.002.9-1.5 1.04-.31.094-.684.143-1.144.143-.694 0-1.275-.215-1.725-.647q-.675-.643-.675-1.837l-.031-.048zm2.346-.274q-.001.53.265.853a.9.9 0 0 0 .844.307 1 1 0 0 1 .104-.014c.384-.1.675-.346.89-.736q.155-.261.225-.569c.056-.2.075-.369.084-.5.01-.122.01-.337.01-.628v-.338c-.525 0-.928.038-1.2.113-.797.225-1.2.731-1.2 1.519l-.022-.013zm5.726 4.392a.5.5 0 0 1 .083-.106q.34-.228.656-.312.496-.126 1.007-.15a.8.8 0 0 1 .257.018c.406.038.656.105.732.207.04.056.062.142.062.243v.094c0 .319-.093.694-.265 1.125q-.261.646-.723 1.05-.068.057-.123.056-.027.002-.056-.007c-.056-.028-.067-.075-.04-.15q.505-1.184.504-1.65a.36.36 0 0 0-.055-.215c-.09-.104-.343-.16-.765-.16q-.227 0-.543.028a25 25 0 0 0-.625.084q-.083 0-.113-.027c-.018-.019-.022-.03-.012-.048 0-.01.004-.019.012-.04v-.037z"
        }
      )
    );
  }
);
Amazon.displayName = "Amazon";

var __defProp$53 = Object.defineProperty;
var __getOwnPropSymbols$53 = Object.getOwnPropertySymbols;
var __hasOwnProp$53 = Object.prototype.hasOwnProperty;
var __propIsEnum$53 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$53 = (obj, key, value) => key in obj ? __defProp$53(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$53 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$53.call(b, prop))
      __defNormalProp$53(a, prop, b[prop]);
  if (__getOwnPropSymbols$53)
    for (var prop of __getOwnPropSymbols$53(b)) {
      if (__propIsEnum$53.call(b, prop))
        __defNormalProp$53(a, prop, b[prop]);
    }
  return a;
};
const Apple = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$53({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.945.778c-.628.073-1.517.627-1.958 1.22-.255.339-.404.663-.534 1.15l-.065.244.003.26c.003.141.011.274.019.295.02.051.058.059.33.06.225.002.24 0 .432-.057.515-.15.893-.375 1.162-.694a5 5 0 0 1 .213-.236c.17-.167.387-.537.507-.858.12-.322.174-.621.19-1.047l.01-.273-.041-.04c-.045-.045-.07-.047-.268-.024"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.801 3.967c-.305.016-1.127.244-1.718.475-.358.14-.358.14-.43.153-.123.02-.425-.068-.945-.278a6.4 6.4 0 0 0-.98-.288c-.175-.039-.467-.043-.594-.008-.05.014-.21.047-.356.071a2.4 2.4 0 0 0-.722.225c-.708.346-1.191.843-1.574 1.62-.17.343-.294.678-.387 1.034-.137.53-.14 1.544-.006 2.16.015.076.03.165.03.2 0 .075.013.13.143.64.12.473.108.434.338 1.011.322.81.424.99 1.083 1.898.27.372.407.541.606.743.208.213.376.337.614.454.268.131.386.16.633.159.316 0 .57-.065 1.055-.268.305-.129.325-.135.88-.249.167-.035.322-.032.556.006l.266.04c.13.019.263.062.606.2.413.166.705.24 1.01.259.445.027.874-.17 1.332-.61.467-.452.904-1.07 1.345-1.905a5.6 5.6 0 0 0 .341-.825.7.7 0 0 1 .054-.153.2.2 0 0 0 .03-.083c0-.056-.113-.144-.312-.244a2.8 2.8 0 0 1-.992-.895c-.178-.267-.357-.667-.401-.903-.076-.388-.098-.814-.054-1.11.01-.078.049-.24.086-.363.159-.535.268-.75.517-1.015.075-.079.137-.151.137-.157 0-.027.378-.343.47-.394a1 1 0 0 0 .144-.102c.085-.083.073-.115-.14-.365a3.3 3.3 0 0 0-1.068-.815 2.7 2.7 0 0 0-.7-.244 4 4 0 0 0-.897-.074"
        }
      )
    );
  }
);
Apple.displayName = "Apple";

var __defProp$52 = Object.defineProperty;
var __getOwnPropSymbols$52 = Object.getOwnPropertySymbols;
var __hasOwnProp$52 = Object.prototype.hasOwnProperty;
var __propIsEnum$52 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$52 = (obj, key, value) => key in obj ? __defProp$52(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$52 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$52.call(b, prop))
      __defNormalProp$52(a, prop, b[prop]);
  if (__getOwnPropSymbols$52)
    for (var prop of __getOwnPropSymbols$52(b)) {
      if (__propIsEnum$52.call(b, prop))
        __defNormalProp$52(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4E = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$52.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$52)
    for (var prop of __getOwnPropSymbols$52(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$52.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArchiveBox = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4E(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$52({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.611 5.056v6.222c0 .982-.795 1.778-1.778 1.778H4.167a1.777 1.777 0 0 1-1.778-1.778V5.056M13.056 1.944H1.944a.89.89 0 0 0-.888.89v1.333c0 .49.398.888.888.888h11.112a.89.89 0 0 0 .888-.888V2.833a.89.89 0 0 0-.889-.889M5.722 7.722h3.556" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArchiveBox.displayName = "ArchiveBox";

var __defProp$51 = Object.defineProperty;
var __getOwnPropSymbols$51 = Object.getOwnPropertySymbols;
var __hasOwnProp$51 = Object.prototype.hasOwnProperty;
var __propIsEnum$51 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$51 = (obj, key, value) => key in obj ? __defProp$51(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$51 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$51.call(b, prop))
      __defNormalProp$51(a, prop, b[prop]);
  if (__getOwnPropSymbols$51)
    for (var prop of __getOwnPropSymbols$51(b)) {
      if (__propIsEnum$51.call(b, prop))
        __defNormalProp$51(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4D = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$51.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$51)
    for (var prop of __getOwnPropSymbols$51(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$51.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4D(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$51({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.693 8.249L7.971 10.86a.665.665 0 0 1-.942 0L4.807 8.638a.667.667 0 1 1 .943-.943l1.084 1.084V4.611a.667.667 0 0 1 1.334 0V8.78l1.084-1.084a.667.667 0 1 1 .943.943z"
        }
      )
    );
  }
);
ArrowDownCircle.displayName = "ArrowDownCircle";

var __defProp$50 = Object.defineProperty;
var __getOwnPropSymbols$50 = Object.getOwnPropertySymbols;
var __hasOwnProp$50 = Object.prototype.hasOwnProperty;
var __propIsEnum$50 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$50 = (obj, key, value) => key in obj ? __defProp$50(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$50 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$50.call(b, prop))
      __defNormalProp$50(a, prop, b[prop]);
  if (__getOwnPropSymbols$50)
    for (var prop of __getOwnPropSymbols$50(b)) {
      if (__propIsEnum$50.call(b, prop))
        __defNormalProp$50(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4C = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$50.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$50)
    for (var prop of __getOwnPropSymbols$50(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$50.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownLeftMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4C(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$50({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 8.167h9.334c.982 0 1.778-.796 1.778-1.778V2.833"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.722 4.389 1.944 8.167l3.778 3.778"
        }
      )
    );
  }
);
ArrowDownLeftMini.displayName = "ArrowDownLeftMini";

var __defProp$4$ = Object.defineProperty;
var __getOwnPropSymbols$4$ = Object.getOwnPropertySymbols;
var __hasOwnProp$4$ = Object.prototype.hasOwnProperty;
var __propIsEnum$4$ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4$ = (obj, key, value) => key in obj ? __defProp$4$(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4$ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4$.call(b, prop))
      __defNormalProp$4$(a, prop, b[prop]);
  if (__getOwnPropSymbols$4$)
    for (var prop of __getOwnPropSymbols$4$(b)) {
      if (__propIsEnum$4$.call(b, prop))
        __defNormalProp$4$(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4B = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4$.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4$)
    for (var prop of __getOwnPropSymbols$4$(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4$.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4B(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4$({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 8.167h9.334c.982 0 1.778-.796 1.778-1.778V2.833"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.722 4.389 1.944 8.167l3.778 3.778"
        }
      )
    );
  }
);
ArrowDownLeft.displayName = "ArrowDownLeft";

var __defProp$4_ = Object.defineProperty;
var __getOwnPropSymbols$4_ = Object.getOwnPropertySymbols;
var __hasOwnProp$4_ = Object.prototype.hasOwnProperty;
var __propIsEnum$4_ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4_ = (obj, key, value) => key in obj ? __defProp$4_(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4_ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4_.call(b, prop))
      __defNormalProp$4_(a, prop, b[prop]);
  if (__getOwnPropSymbols$4_)
    for (var prop of __getOwnPropSymbols$4_(b)) {
      if (__propIsEnum$4_.call(b, prop))
        __defNormalProp$4_(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4A = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4_.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4_)
    for (var prop of __getOwnPropSymbols$4_(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4_.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4A(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4_({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.056V1.944M11.278 9.278 7.5 13.056 3.722 9.278"
        }
      )
    );
  }
);
ArrowDownMini.displayName = "ArrowDownMini";

var __defProp$4Z = Object.defineProperty;
var __getOwnPropSymbols$4Z = Object.getOwnPropertySymbols;
var __hasOwnProp$4Z = Object.prototype.hasOwnProperty;
var __propIsEnum$4Z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4Z = (obj, key, value) => key in obj ? __defProp$4Z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4Z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4Z.call(b, prop))
      __defNormalProp$4Z(a, prop, b[prop]);
  if (__getOwnPropSymbols$4Z)
    for (var prop of __getOwnPropSymbols$4Z(b)) {
      if (__propIsEnum$4Z.call(b, prop))
        __defNormalProp$4Z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4Z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4Z)
    for (var prop of __getOwnPropSymbols$4Z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4Z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownRightMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4Z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 8.167H3.722a1.777 1.777 0 0 1-1.778-1.778V2.833"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m9.278 4.389 3.778 3.778-3.778 3.778"
        }
      )
    );
  }
);
ArrowDownRightMini.displayName = "ArrowDownRightMini";

var __defProp$4Y = Object.defineProperty;
var __getOwnPropSymbols$4Y = Object.getOwnPropertySymbols;
var __hasOwnProp$4Y = Object.prototype.hasOwnProperty;
var __propIsEnum$4Y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4Y = (obj, key, value) => key in obj ? __defProp$4Y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4Y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4Y.call(b, prop))
      __defNormalProp$4Y(a, prop, b[prop]);
  if (__getOwnPropSymbols$4Y)
    for (var prop of __getOwnPropSymbols$4Y(b)) {
      if (__propIsEnum$4Y.call(b, prop))
        __defNormalProp$4Y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4Y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4Y)
    for (var prop of __getOwnPropSymbols$4Y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4Y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDownTray = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4Y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 9.944v1.334c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V9.944M4.389 5.5 7.5 8.611 10.611 5.5M7.5 8.611V1.944"
        }
      )
    );
  }
);
ArrowDownTray.displayName = "ArrowDownTray";

var __defProp$4X = Object.defineProperty;
var __getOwnPropSymbols$4X = Object.getOwnPropertySymbols;
var __hasOwnProp$4X = Object.prototype.hasOwnProperty;
var __propIsEnum$4X = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4X = (obj, key, value) => key in obj ? __defProp$4X(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4X = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4X.call(b, prop))
      __defNormalProp$4X(a, prop, b[prop]);
  if (__getOwnPropSymbols$4X)
    for (var prop of __getOwnPropSymbols$4X(b)) {
      if (__propIsEnum$4X.call(b, prop))
        __defNormalProp$4X(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4x = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4X.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4X)
    for (var prop of __getOwnPropSymbols$4X(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4X.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4x(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4X({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.667 13.056V1.944M11.445 9.278l-3.778 3.778-3.778-3.778"
        }
      )
    );
  }
);
ArrowDown.displayName = "ArrowDown";

var __defProp$4W = Object.defineProperty;
var __getOwnPropSymbols$4W = Object.getOwnPropertySymbols;
var __hasOwnProp$4W = Object.prototype.hasOwnProperty;
var __propIsEnum$4W = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4W = (obj, key, value) => key in obj ? __defProp$4W(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4W = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4W.call(b, prop))
      __defNormalProp$4W(a, prop, b[prop]);
  if (__getOwnPropSymbols$4W)
    for (var prop of __getOwnPropSymbols$4W(b)) {
      if (__propIsEnum$4W.call(b, prop))
        __defNormalProp$4W(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4w = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4W.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4W)
    for (var prop of __getOwnPropSymbols$4W(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4W.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLeftMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4w(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4W({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLeftMini.displayName = "ArrowLeftMini";

var __defProp$4V = Object.defineProperty;
var __getOwnPropSymbols$4V = Object.getOwnPropertySymbols;
var __hasOwnProp$4V = Object.prototype.hasOwnProperty;
var __propIsEnum$4V = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4V = (obj, key, value) => key in obj ? __defProp$4V(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4V = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4V.call(b, prop))
      __defNormalProp$4V(a, prop, b[prop]);
  if (__getOwnPropSymbols$4V)
    for (var prop of __getOwnPropSymbols$4V(b)) {
      if (__propIsEnum$4V.call(b, prop))
        __defNormalProp$4V(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4v = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4V.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4V)
    for (var prop of __getOwnPropSymbols$4V(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4V.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4v(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4V({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLeft.displayName = "ArrowLeft";

var __defProp$4U = Object.defineProperty;
var __getOwnPropSymbols$4U = Object.getOwnPropertySymbols;
var __hasOwnProp$4U = Object.prototype.hasOwnProperty;
var __propIsEnum$4U = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4U = (obj, key, value) => key in obj ? __defProp$4U(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4U = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4U.call(b, prop))
      __defNormalProp$4U(a, prop, b[prop]);
  if (__getOwnPropSymbols$4U)
    for (var prop of __getOwnPropSymbols$4U(b)) {
      if (__propIsEnum$4U.call(b, prop))
        __defNormalProp$4U(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4u = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4U.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4U)
    for (var prop of __getOwnPropSymbols$4U(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4U.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLongDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4u(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4U({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.055V1.945M11.278 9.278 7.5 13.056 3.722 9.278"
        }
      )
    );
  }
);
ArrowLongDown.displayName = "ArrowLongDown";

var __defProp$4T = Object.defineProperty;
var __getOwnPropSymbols$4T = Object.getOwnPropertySymbols;
var __hasOwnProp$4T = Object.prototype.hasOwnProperty;
var __propIsEnum$4T = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4T = (obj, key, value) => key in obj ? __defProp$4T(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4T = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4T.call(b, prop))
      __defNormalProp$4T(a, prop, b[prop]);
  if (__getOwnPropSymbols$4T)
    for (var prop of __getOwnPropSymbols$4T(b)) {
      if (__propIsEnum$4T.call(b, prop))
        __defNormalProp$4T(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4t = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4T.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4T)
    for (var prop of __getOwnPropSymbols$4T(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4T.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLongLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4t(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4T({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5h11.112M5.722 11.278 1.944 7.5l3.778-3.778"
        }
      )
    );
  }
);
ArrowLongLeft.displayName = "ArrowLongLeft";

var __defProp$4S = Object.defineProperty;
var __getOwnPropSymbols$4S = Object.getOwnPropertySymbols;
var __hasOwnProp$4S = Object.prototype.hasOwnProperty;
var __propIsEnum$4S = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4S = (obj, key, value) => key in obj ? __defProp$4S(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4S = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4S.call(b, prop))
      __defNormalProp$4S(a, prop, b[prop]);
  if (__getOwnPropSymbols$4S)
    for (var prop of __getOwnPropSymbols$4S(b)) {
      if (__propIsEnum$4S.call(b, prop))
        __defNormalProp$4S(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4s = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4S.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4S)
    for (var prop of __getOwnPropSymbols$4S(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4S.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLongRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4s(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4S({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrowLongRight.displayName = "ArrowLongRight";

var __defProp$4R = Object.defineProperty;
var __getOwnPropSymbols$4R = Object.getOwnPropertySymbols;
var __hasOwnProp$4R = Object.prototype.hasOwnProperty;
var __propIsEnum$4R = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4R = (obj, key, value) => key in obj ? __defProp$4R(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4R = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4R.call(b, prop))
      __defNormalProp$4R(a, prop, b[prop]);
  if (__getOwnPropSymbols$4R)
    for (var prop of __getOwnPropSymbols$4R(b)) {
      if (__propIsEnum$4R.call(b, prop))
        __defNormalProp$4R(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4r = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4R.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4R)
    for (var prop of __getOwnPropSymbols$4R(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4R.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowLongUp = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4r(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4R({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.667 1.944v11.111M3.889 5.722l3.778-3.778 3.778 3.778"
        }
      )
    );
  }
);
ArrowLongUp.displayName = "ArrowLongUp";

var __defProp$4Q = Object.defineProperty;
var __getOwnPropSymbols$4Q = Object.getOwnPropertySymbols;
var __hasOwnProp$4Q = Object.prototype.hasOwnProperty;
var __propIsEnum$4Q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4Q = (obj, key, value) => key in obj ? __defProp$4Q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4Q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4Q.call(b, prop))
      __defNormalProp$4Q(a, prop, b[prop]);
  if (__getOwnPropSymbols$4Q)
    for (var prop of __getOwnPropSymbols$4Q(b)) {
      if (__propIsEnum$4Q.call(b, prop))
        __defNormalProp$4Q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4Q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4Q)
    for (var prop of __getOwnPropSymbols$4Q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4Q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowPathMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4Q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.752 9.616 1.935 8.86l-.755 2.817" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.864 6.469a5.729 5.729 0 0 1 11.184-.403" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowPathMini.displayName = "ArrowPathMini";

var __defProp$4P = Object.defineProperty;
var __getOwnPropSymbols$4P = Object.getOwnPropertySymbols;
var __hasOwnProp$4P = Object.prototype.hasOwnProperty;
var __propIsEnum$4P = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4P = (obj, key, value) => key in obj ? __defProp$4P(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4P = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4P.call(b, prop))
      __defNormalProp$4P(a, prop, b[prop]);
  if (__getOwnPropSymbols$4P)
    for (var prop of __getOwnPropSymbols$4P(b)) {
      if (__propIsEnum$4P.call(b, prop))
        __defNormalProp$4P(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4p = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4P.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4P)
    for (var prop of __getOwnPropSymbols$4P(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4P.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowPath = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4p(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4P({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.752 9.616 1.935 8.86l-.755 2.817" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.136 8.53a5.729 5.729 0 0 1-11.196.357M10.248 5.384l2.817.755.755-2.817" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.864 6.469a5.729 5.729 0 0 1 11.184-.403" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowPath.displayName = "ArrowPath";

var __defProp$4O = Object.defineProperty;
var __getOwnPropSymbols$4O = Object.getOwnPropertySymbols;
var __hasOwnProp$4O = Object.prototype.hasOwnProperty;
var __propIsEnum$4O = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4O = (obj, key, value) => key in obj ? __defProp$4O(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4O = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4O.call(b, prop))
      __defNormalProp$4O(a, prop, b[prop]);
  if (__getOwnPropSymbols$4O)
    for (var prop of __getOwnPropSymbols$4O(b)) {
      if (__propIsEnum$4O.call(b, prop))
        __defNormalProp$4O(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4o = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4O.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4O)
    for (var prop of __getOwnPropSymbols$4O(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4O.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowRightDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4o(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4O({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 13.056V3.723c0-.983-.796-1.778-1.778-1.778H2.833"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.389 9.278 3.778 3.778 3.778-3.778"
        }
      )
    );
  }
);
ArrowRightDown.displayName = "ArrowRightDown";

var __defProp$4N = Object.defineProperty;
var __getOwnPropSymbols$4N = Object.getOwnPropertySymbols;
var __hasOwnProp$4N = Object.prototype.hasOwnProperty;
var __propIsEnum$4N = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4N = (obj, key, value) => key in obj ? __defProp$4N(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4N = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4N.call(b, prop))
      __defNormalProp$4N(a, prop, b[prop]);
  if (__getOwnPropSymbols$4N)
    for (var prop of __getOwnPropSymbols$4N(b)) {
      if (__propIsEnum$4N.call(b, prop))
        __defNormalProp$4N(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4n = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4N.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4N)
    for (var prop of __getOwnPropSymbols$4N(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4N.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowRightMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4n(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4N({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrowRightMini.displayName = "ArrowRightMini";

var __defProp$4M = Object.defineProperty;
var __getOwnPropSymbols$4M = Object.getOwnPropertySymbols;
var __hasOwnProp$4M = Object.prototype.hasOwnProperty;
var __propIsEnum$4M = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4M = (obj, key, value) => key in obj ? __defProp$4M(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4M = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4M.call(b, prop))
      __defNormalProp$4M(a, prop, b[prop]);
  if (__getOwnPropSymbols$4M)
    for (var prop of __getOwnPropSymbols$4M(b)) {
      if (__propIsEnum$4M.call(b, prop))
        __defNormalProp$4M(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4m = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4M.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4M)
    for (var prop of __getOwnPropSymbols$4M(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4M.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowRightOnRectangle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4m(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4M({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.778-1.778 1.778H8.167"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.5 10.611 8.611 7.5 5.5 4.389M8.611 7.5H1.944"
        }
      )
    );
  }
);
ArrowRightOnRectangle.displayName = "ArrowRightOnRectangle";

var __defProp$4L = Object.defineProperty;
var __getOwnPropSymbols$4L = Object.getOwnPropertySymbols;
var __hasOwnProp$4L = Object.prototype.hasOwnProperty;
var __propIsEnum$4L = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4L = (obj, key, value) => key in obj ? __defProp$4L(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4L = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4L.call(b, prop))
      __defNormalProp$4L(a, prop, b[prop]);
  if (__getOwnPropSymbols$4L)
    for (var prop of __getOwnPropSymbols$4L(b)) {
      if (__propIsEnum$4L.call(b, prop))
        __defNormalProp$4L(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4l = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4L.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4L)
    for (var prop of __getOwnPropSymbols$4L(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4L.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpCircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4l(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4L({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.693 6.915a.665.665 0 0 1-.942 0L8.167 6.22v4.168a.667.667 0 0 1-1.334 0V6.221L5.75 7.305a.667.667 0 1 1-.943-.943L7.028 4.14c.26-.26.683-.26.943 0l2.222 2.222c.26.26.26.683 0 .943"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowUpCircleSolid.displayName = "ArrowUpCircleSolid";

var __defProp$4K = Object.defineProperty;
var __getOwnPropSymbols$4K = Object.getOwnPropertySymbols;
var __hasOwnProp$4K = Object.prototype.hasOwnProperty;
var __propIsEnum$4K = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4K = (obj, key, value) => key in obj ? __defProp$4K(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4K = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4K.call(b, prop))
      __defNormalProp$4K(a, prop, b[prop]);
  if (__getOwnPropSymbols$4K)
    for (var prop of __getOwnPropSymbols$4K(b)) {
      if (__propIsEnum$4K.call(b, prop))
        __defNormalProp$4K(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4k = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4K.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4K)
    for (var prop of __getOwnPropSymbols$4K(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4K.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4k(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4K({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.056 10.611 9.944 13.5l2.89-2.889M9.944 13.5V6.389M2.167 4.389 5.056 1.5l2.888 2.889M5.056 1.5v7.111"
        }
      )
    );
  }
);
ArrowUpDown.displayName = "ArrowUpDown";

var __defProp$4J = Object.defineProperty;
var __getOwnPropSymbols$4J = Object.getOwnPropertySymbols;
var __hasOwnProp$4J = Object.prototype.hasOwnProperty;
var __propIsEnum$4J = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4J = (obj, key, value) => key in obj ? __defProp$4J(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4J = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4J.call(b, prop))
      __defNormalProp$4J(a, prop, b[prop]);
  if (__getOwnPropSymbols$4J)
    for (var prop of __getOwnPropSymbols$4J(b)) {
      if (__propIsEnum$4J.call(b, prop))
        __defNormalProp$4J(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4j = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4J.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4J)
    for (var prop of __getOwnPropSymbols$4J(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4J.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4j(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4J({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.944v11.112M3.722 5.722 7.5 1.944l3.778 3.778"
        }
      )
    );
  }
);
ArrowUpMini.displayName = "ArrowUpMini";

var __defProp$4I = Object.defineProperty;
var __getOwnPropSymbols$4I = Object.getOwnPropertySymbols;
var __hasOwnProp$4I = Object.prototype.hasOwnProperty;
var __propIsEnum$4I = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4I = (obj, key, value) => key in obj ? __defProp$4I(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4I = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4I.call(b, prop))
      __defNormalProp$4I(a, prop, b[prop]);
  if (__getOwnPropSymbols$4I)
    for (var prop of __getOwnPropSymbols$4I(b)) {
      if (__propIsEnum$4I.call(b, prop))
        __defNormalProp$4I(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4i = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4I.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4I)
    for (var prop of __getOwnPropSymbols$4I(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4I.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpRightMicro = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4i(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4I({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
        }
      )
    );
  }
);
ArrowUpRightMicro.displayName = "ArrowUpRightMicro";

var __defProp$4H = Object.defineProperty;
var __getOwnPropSymbols$4H = Object.getOwnPropertySymbols;
var __hasOwnProp$4H = Object.prototype.hasOwnProperty;
var __propIsEnum$4H = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4H = (obj, key, value) => key in obj ? __defProp$4H(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4H = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4H.call(b, prop))
      __defNormalProp$4H(a, prop, b[prop]);
  if (__getOwnPropSymbols$4H)
    for (var prop of __getOwnPropSymbols$4H(b)) {
      if (__propIsEnum$4H.call(b, prop))
        __defNormalProp$4H(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4h = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4H.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4H)
    for (var prop of __getOwnPropSymbols$4H(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4H.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpRightMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4h(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4H({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m12.167 2.833-9.334 9.334M6.824 2.833h5.343v5.342"
        }
      )
    );
  }
);
ArrowUpRightMini.displayName = "ArrowUpRightMini";

var __defProp$4G = Object.defineProperty;
var __getOwnPropSymbols$4G = Object.getOwnPropertySymbols;
var __hasOwnProp$4G = Object.prototype.hasOwnProperty;
var __propIsEnum$4G = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4G = (obj, key, value) => key in obj ? __defProp$4G(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4G = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4G.call(b, prop))
      __defNormalProp$4G(a, prop, b[prop]);
  if (__getOwnPropSymbols$4G)
    for (var prop of __getOwnPropSymbols$4G(b)) {
      if (__propIsEnum$4G.call(b, prop))
        __defNormalProp$4G(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4g = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4G.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4G)
    for (var prop of __getOwnPropSymbols$4G(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4G.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpRightOnBox = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4g(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4G({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.833 1.944h4.223v4.223M13.056 1.944 7.5 7.5M11.278 8.833v2.445c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778V5.5c0-.982.796-1.778 1.778-1.778h2.445"
        }
      )
    );
  }
);
ArrowUpRightOnBox.displayName = "ArrowUpRightOnBox";

var __defProp$4F = Object.defineProperty;
var __getOwnPropSymbols$4F = Object.getOwnPropertySymbols;
var __hasOwnProp$4F = Object.prototype.hasOwnProperty;
var __propIsEnum$4F = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4F = (obj, key, value) => key in obj ? __defProp$4F(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4F = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4F.call(b, prop))
      __defNormalProp$4F(a, prop, b[prop]);
  if (__getOwnPropSymbols$4F)
    for (var prop of __getOwnPropSymbols$4F(b)) {
      if (__propIsEnum$4F.call(b, prop))
        __defNormalProp$4F(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4f = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4F.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4F)
    for (var prop of __getOwnPropSymbols$4F(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4F.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUpTray = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4f(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4F({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 9.944v1.334c0 .982-.796 1.777-1.778 1.777H3.722a1.777 1.777 0 0 1-1.778-1.777V9.944M10.611 5.055 7.5 1.945l-3.111 3.11M7.5 1.944v6.667"
        }
      )
    );
  }
);
ArrowUpTray.displayName = "ArrowUpTray";

var __defProp$4E = Object.defineProperty;
var __getOwnPropSymbols$4E = Object.getOwnPropertySymbols;
var __hasOwnProp$4E = Object.prototype.hasOwnProperty;
var __propIsEnum$4E = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4E = (obj, key, value) => key in obj ? __defProp$4E(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4E = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4E.call(b, prop))
      __defNormalProp$4E(a, prop, b[prop]);
  if (__getOwnPropSymbols$4E)
    for (var prop of __getOwnPropSymbols$4E(b)) {
      if (__propIsEnum$4E.call(b, prop))
        __defNormalProp$4E(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4e = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4E.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4E)
    for (var prop of __getOwnPropSymbols$4E(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4E.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowUturnLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4e(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4E({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.5 5.056h8.667a3.333 3.333 0 0 1 0 6.666H6.833" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.611 8.167 1.5 5.056l3.111-3.112" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ArrowUturnLeft.displayName = "ArrowUturnLeft";

var __defProp$4D = Object.defineProperty;
var __getOwnPropSymbols$4D = Object.getOwnPropertySymbols;
var __hasOwnProp$4D = Object.prototype.hasOwnProperty;
var __propIsEnum$4D = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4D = (obj, key, value) => key in obj ? __defProp$4D(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4D = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4D.call(b, prop))
      __defNormalProp$4D(a, prop, b[prop]);
  if (__getOwnPropSymbols$4D)
    for (var prop of __getOwnPropSymbols$4D(b)) {
      if (__propIsEnum$4D.call(b, prop))
        __defNormalProp$4D(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4d = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4D.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4D)
    for (var prop of __getOwnPropSymbols$4D(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4D.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowsPointingOutMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4d(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4D({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"
        }
      )
    );
  }
);
ArrowsPointingOutMini.displayName = "ArrowsPointingOutMini";

var __defProp$4C = Object.defineProperty;
var __getOwnPropSymbols$4C = Object.getOwnPropertySymbols;
var __hasOwnProp$4C = Object.prototype.hasOwnProperty;
var __propIsEnum$4C = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4C = (obj, key, value) => key in obj ? __defProp$4C(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4C = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4C.call(b, prop))
      __defNormalProp$4C(a, prop, b[prop]);
  if (__getOwnPropSymbols$4C)
    for (var prop of __getOwnPropSymbols$4C(b)) {
      if (__propIsEnum$4C.call(b, prop))
        __defNormalProp$4C(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4c = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4C.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4C)
    for (var prop of __getOwnPropSymbols$4C(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4C.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrowsPointingOut = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4c(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4C({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 1.944h4v4M13.056 1.944l-4 4M1.944 9.056v4h4M1.944 13.056l4-4"
        }
      )
    );
  }
);
ArrowsPointingOut.displayName = "ArrowsPointingOut";

var __defProp$4B = Object.defineProperty;
var __getOwnPropSymbols$4B = Object.getOwnPropertySymbols;
var __hasOwnProp$4B = Object.prototype.hasOwnProperty;
var __propIsEnum$4B = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4B = (obj, key, value) => key in obj ? __defProp$4B(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4B = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4B.call(b, prop))
      __defNormalProp$4B(a, prop, b[prop]);
  if (__getOwnPropSymbols$4B)
    for (var prop of __getOwnPropSymbols$4B(b)) {
      if (__propIsEnum$4B.call(b, prop))
        __defNormalProp$4B(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4b = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4B.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4B)
    for (var prop of __getOwnPropSymbols$4B(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4B.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ArrrowRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4b(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4B({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 7.5H1.944M9.278 3.722 13.056 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ArrrowRight.displayName = "ArrrowRight";

var __defProp$4A = Object.defineProperty;
var __getOwnPropSymbols$4A = Object.getOwnPropertySymbols;
var __hasOwnProp$4A = Object.prototype.hasOwnProperty;
var __propIsEnum$4A = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4A = (obj, key, value) => key in obj ? __defProp$4A(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4A = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4A.call(b, prop))
      __defNormalProp$4A(a, prop, b[prop]);
  if (__getOwnPropSymbols$4A)
    for (var prop of __getOwnPropSymbols$4A(b)) {
      if (__propIsEnum$4A.call(b, prop))
        __defNormalProp$4A(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4a = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4A.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4A)
    for (var prop of __getOwnPropSymbols$4A(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4A.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const AtSymbol = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4a(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4A({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.389 10.167c1.411 0 2.555-1.244 2.555-2.778S8.8 4.61 7.39 4.61 4.833 5.855 4.833 7.39s1.144 2.778 2.556 2.778" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.944 4.611v4.607c0 1.382 2.077 1.62 3.175-.248.932-1.58.704-3.99-.46-5.577C10.947 1.058 6.99.185 4.114 2.115 1.472 3.89.531 7.478 1.991 10.378c1.444 2.87 4.835 4.262 7.905 3.223" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
AtSymbol.displayName = "AtSymbol";

var __defProp$4z = Object.defineProperty;
var __getOwnPropSymbols$4z = Object.getOwnPropertySymbols;
var __hasOwnProp$4z = Object.prototype.hasOwnProperty;
var __propIsEnum$4z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4z = (obj, key, value) => key in obj ? __defProp$4z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4z.call(b, prop))
      __defNormalProp$4z(a, prop, b[prop]);
  if (__getOwnPropSymbols$4z)
    for (var prop of __getOwnPropSymbols$4z(b)) {
      if (__propIsEnum$4z.call(b, prop))
        __defNormalProp$4z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$49 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4z)
    for (var prop of __getOwnPropSymbols$4z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BackwardSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$49(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M14.255 3.285a1 1 0 0 0-1-.014l-4.95 2.743V4.152a1 1 0 0 0-.495-.867 1 1 0 0 0-.999-.013L.77 6.619a1.008 1.008 0 0 0 0 1.762l6.041 3.347a1 1 0 0 0 1-.012 1 1 0 0 0 .495-.868V8.986l4.95 2.742a1 1 0 0 0 .999-.012 1 1 0 0 0 .495-.868V4.152a1 1 0 0 0-.495-.867"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BackwardSolid.displayName = "BackwardSolid";

var __defProp$4y = Object.defineProperty;
var __getOwnPropSymbols$4y = Object.getOwnPropertySymbols;
var __hasOwnProp$4y = Object.prototype.hasOwnProperty;
var __propIsEnum$4y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4y = (obj, key, value) => key in obj ? __defProp$4y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4y.call(b, prop))
      __defNormalProp$4y(a, prop, b[prop]);
  if (__getOwnPropSymbols$4y)
    for (var prop of __getOwnPropSymbols$4y(b)) {
      if (__propIsEnum$4y.call(b, prop))
        __defNormalProp$4y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$48 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4y)
    for (var prop of __getOwnPropSymbols$4y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BarsArrowDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$48(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.611 10.834 2.222 2.222 2.223-2.222M10.833 13.056v-8M1.944 8.166h5.778M1.944 5.056h5.778M1.944 1.944h8.89"
        }
      )
    );
  }
);
BarsArrowDown.displayName = "BarsArrowDown";

var __defProp$4x = Object.defineProperty;
var __getOwnPropSymbols$4x = Object.getOwnPropertySymbols;
var __hasOwnProp$4x = Object.prototype.hasOwnProperty;
var __propIsEnum$4x = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4x = (obj, key, value) => key in obj ? __defProp$4x(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4x = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4x.call(b, prop))
      __defNormalProp$4x(a, prop, b[prop]);
  if (__getOwnPropSymbols$4x)
    for (var prop of __getOwnPropSymbols$4x(b)) {
      if (__propIsEnum$4x.call(b, prop))
        __defNormalProp$4x(a, prop, b[prop]);
    }
  return a;
};
var __objRest$47 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4x.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4x)
    for (var prop of __getOwnPropSymbols$4x(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4x.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BarsThree = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$47(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4x({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.5 7.5h12M1.5 2.833h12M1.5 12.167h12"
        }
      )
    );
  }
);
BarsThree.displayName = "BarsThree";

var __defProp$4w = Object.defineProperty;
var __getOwnPropSymbols$4w = Object.getOwnPropertySymbols;
var __hasOwnProp$4w = Object.prototype.hasOwnProperty;
var __propIsEnum$4w = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4w = (obj, key, value) => key in obj ? __defProp$4w(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4w = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4w.call(b, prop))
      __defNormalProp$4w(a, prop, b[prop]);
  if (__getOwnPropSymbols$4w)
    for (var prop of __getOwnPropSymbols$4w(b)) {
      if (__propIsEnum$4w.call(b, prop))
        __defNormalProp$4w(a, prop, b[prop]);
    }
  return a;
};
var __objRest$46 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4w.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4w)
    for (var prop of __getOwnPropSymbols$4w(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4w.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Beaker = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$46(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4w({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.005 9.5h6.99M5.944 1.056v4.666l-3.224 6.28a1.333 1.333 0 0 0 1.185 1.943h7.19a1.333 1.333 0 0 0 1.185-1.943l-3.224-6.28V1.056M4.611 1.056h5.778"
        }
      )
    );
  }
);
Beaker.displayName = "Beaker";

var __defProp$4v = Object.defineProperty;
var __getOwnPropSymbols$4v = Object.getOwnPropertySymbols;
var __hasOwnProp$4v = Object.prototype.hasOwnProperty;
var __propIsEnum$4v = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4v = (obj, key, value) => key in obj ? __defProp$4v(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4v = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4v.call(b, prop))
      __defNormalProp$4v(a, prop, b[prop]);
  if (__getOwnPropSymbols$4v)
    for (var prop of __getOwnPropSymbols$4v(b)) {
      if (__propIsEnum$4v.call(b, prop))
        __defNormalProp$4v(a, prop, b[prop]);
    }
  return a;
};
var __objRest$45 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4v.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4v)
    for (var prop of __getOwnPropSymbols$4v(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4v.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BellAlertDone = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$45(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4v({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 12.5, cy: 2.5, r: 2.5, fill: "#60A5FA" }), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 12.5,
          cy: 2.5,
          r: 2,
          stroke: color,
          strokeOpacity: 0.12
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M8.993.575A4.973 4.973 0 0 0 2.528 5.32v4.223c0 .568-.46 1.028-1.028 1.028a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5c-.568 0-1.028-.46-1.028-1.028V6.5a4 4 0 0 1-1.5-.302v3.344c0 .366.078.714.218 1.028H3.81a2.5 2.5 0 0 0 .218-1.028V5.32A3.473 3.473 0 0 1 8.53 2.003c.063-.512.223-.994.462-1.428M8.912 13.04a.44.44 0 0 0-.345-.165H6.434a.444.444 0 0 0-.434.536c.153.73.771 1.242 1.5 1.242.73 0 1.348-.511 1.502-1.242a.45.45 0 0 0-.09-.372"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BellAlertDone.displayName = "BellAlertDone";

var __defProp$4u = Object.defineProperty;
var __getOwnPropSymbols$4u = Object.getOwnPropertySymbols;
var __hasOwnProp$4u = Object.prototype.hasOwnProperty;
var __propIsEnum$4u = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4u = (obj, key, value) => key in obj ? __defProp$4u(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4u = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4u.call(b, prop))
      __defNormalProp$4u(a, prop, b[prop]);
  if (__getOwnPropSymbols$4u)
    for (var prop of __getOwnPropSymbols$4u(b)) {
      if (__propIsEnum$4u.call(b, prop))
        __defNormalProp$4u(a, prop, b[prop]);
    }
  return a;
};
var __objRest$44 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4u.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4u)
    for (var prop of __getOwnPropSymbols$4u(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4u.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BellAlertSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$44(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4u({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M13.5 10.611A1.113 1.113 0 0 1 12.389 9.5V5.278a4.894 4.894 0 0 0-4.89-4.89 4.894 4.894 0 0 0-4.888 4.89V9.5c0 .613-.499 1.111-1.111 1.111a.667.667 0 0 0 0 1.333h12a.667.667 0 0 0 0-1.333M8.567 12.833H6.434A.444.444 0 0 0 6 13.37c.153.731.771 1.242 1.5 1.242.73 0 1.348-.511 1.502-1.242a.445.445 0 0 0-.434-.536z"
        }
      )
    );
  }
);
BellAlertSolid.displayName = "BellAlertSolid";

var __defProp$4t = Object.defineProperty;
var __getOwnPropSymbols$4t = Object.getOwnPropertySymbols;
var __hasOwnProp$4t = Object.prototype.hasOwnProperty;
var __propIsEnum$4t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4t = (obj, key, value) => key in obj ? __defProp$4t(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4t = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4t.call(b, prop))
      __defNormalProp$4t(a, prop, b[prop]);
  if (__getOwnPropSymbols$4t)
    for (var prop of __getOwnPropSymbols$4t(b)) {
      if (__propIsEnum$4t.call(b, prop))
        __defNormalProp$4t(a, prop, b[prop]);
    }
  return a;
};
var __objRest$43 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4t.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4t)
    for (var prop of __getOwnPropSymbols$4t(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4t.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BellAlert = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$43(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5.347A4.973 4.973 0 0 0 2.528 5.32v4.222c0 .568-.46 1.027-1.028 1.027a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5c-.568 0-1.028-.46-1.028-1.027V5.32A4.973 4.973 0 0 0 7.5.347m3.472 9.195c0 .366.078.713.218 1.027H3.81a2.5 2.5 0 0 0 .218-1.027V5.32a3.473 3.473 0 0 1 6.944 0zm-2.405 3.333a.444.444 0 0 1 .435.536c-.154.73-.771 1.242-1.501 1.242S6.153 14.142 6 13.41a.445.445 0 0 1 .434-.536z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
BellAlert.displayName = "BellAlert";

var __defProp$4s = Object.defineProperty;
var __getOwnPropSymbols$4s = Object.getOwnPropertySymbols;
var __hasOwnProp$4s = Object.prototype.hasOwnProperty;
var __propIsEnum$4s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4s = (obj, key, value) => key in obj ? __defProp$4s(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4s = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4s.call(b, prop))
      __defNormalProp$4s(a, prop, b[prop]);
  if (__getOwnPropSymbols$4s)
    for (var prop of __getOwnPropSymbols$4s(b)) {
      if (__propIsEnum$4s.call(b, prop))
        __defNormalProp$4s(a, prop, b[prop]);
    }
  return a;
};
var __objRest$42 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4s.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4s)
    for (var prop of __getOwnPropSymbols$4s(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4s.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BoltSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$42(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4s({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.716 5.003a1.11 1.11 0 0 0-.994-.614H9.364l.967-2.487A1.113 1.113 0 0 0 9.296.389H5.589c-.464 0-.884.292-1.044.728l-2.12 5.779A1.112 1.112 0 0 0 3.47 8.388h3.369l-1.535 5.373a.666.666 0 0 0 1.174.583l6.135-8.177c.253-.339.293-.784.104-1.164"
        }
      )
    );
  }
);
BoltSolid.displayName = "BoltSolid";

var __defProp$4r = Object.defineProperty;
var __getOwnPropSymbols$4r = Object.getOwnPropertySymbols;
var __hasOwnProp$4r = Object.prototype.hasOwnProperty;
var __propIsEnum$4r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4r = (obj, key, value) => key in obj ? __defProp$4r(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4r = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4r.call(b, prop))
      __defNormalProp$4r(a, prop, b[prop]);
  if (__getOwnPropSymbols$4r)
    for (var prop of __getOwnPropSymbols$4r(b)) {
      if (__propIsEnum$4r.call(b, prop))
        __defNormalProp$4r(a, prop, b[prop]);
    }
  return a;
};
var __objRest$41 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4r.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4r)
    for (var prop of __getOwnPropSymbols$4r(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4r.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Bolt = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$41(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m5.944 13.945 1.778-6.223H3.47a.444.444 0 0 1-.417-.597L5.17 1.347a.44.44 0 0 1 .417-.291h3.707c.313 0 .527.313.414.605l-1.32 3.395h3.333c.366 0 .575.417.356.71z"
        }
      )
    );
  }
);
Bolt.displayName = "Bolt";

var __defProp$4q = Object.defineProperty;
var __getOwnPropSymbols$4q = Object.getOwnPropertySymbols;
var __hasOwnProp$4q = Object.prototype.hasOwnProperty;
var __propIsEnum$4q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4q = (obj, key, value) => key in obj ? __defProp$4q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4q.call(b, prop))
      __defNormalProp$4q(a, prop, b[prop]);
  if (__getOwnPropSymbols$4q)
    for (var prop of __getOwnPropSymbols$4q(b)) {
      if (__propIsEnum$4q.call(b, prop))
        __defNormalProp$4q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$40 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4q)
    for (var prop of __getOwnPropSymbols$4q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BookOpen = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$40(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 12.96a.9.9 0 0 0 .44-.118 5.6 5.6 0 0 1 2.791-.751 5.5 5.5 0 0 1 2.018.386c.576.227 1.194-.213 1.194-.833V3.571a.88.88 0 0 0-.431-.765 5.5 5.5 0 0 0-2.792-.767c-1.68 0-2.842.775-3.22 1.05" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 12.96a.9.9 0 0 1-.44-.118 5.6 5.6 0 0 0-2.791-.751 5.5 5.5 0 0 0-2.018.386c-.576.227-1.195-.21-1.195-.829v-8.08c0-.315.161-.6.432-.76A5.5 5.5 0 0 1 4.28 2.04c1.68 0 2.842.775 3.22 1.05z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BookOpen.displayName = "BookOpen";

var __defProp$4p = Object.defineProperty;
var __getOwnPropSymbols$4p = Object.getOwnPropertySymbols;
var __hasOwnProp$4p = Object.prototype.hasOwnProperty;
var __propIsEnum$4p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4p = (obj, key, value) => key in obj ? __defProp$4p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4p.call(b, prop))
      __defNormalProp$4p(a, prop, b[prop]);
  if (__getOwnPropSymbols$4p)
    for (var prop of __getOwnPropSymbols$4p(b)) {
      if (__propIsEnum$4p.call(b, prop))
        __defNormalProp$4p(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3$ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4p.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4p)
    for (var prop of __getOwnPropSymbols$4p(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4p.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Book = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3$(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4p({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.611 1.056v9.777M1.944 12.389V2.833c0-.982.796-1.777 1.778-1.777h9.334v9.777"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.167 13.945H3.5a1.556 1.556 0 1 1 0-3.111h9.556c-.57.75-.653 2.264 0 3.11zM7.278 4.167h3.11M7.278 6.834h3.11"
        }
      )
    );
  }
);
Book.displayName = "Book";

var __defProp$4o = Object.defineProperty;
var __getOwnPropSymbols$4o = Object.getOwnPropertySymbols;
var __hasOwnProp$4o = Object.prototype.hasOwnProperty;
var __propIsEnum$4o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4o = (obj, key, value) => key in obj ? __defProp$4o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4o.call(b, prop))
      __defNormalProp$4o(a, prop, b[prop]);
  if (__getOwnPropSymbols$4o)
    for (var prop of __getOwnPropSymbols$4o(b)) {
      if (__propIsEnum$4o.call(b, prop))
        __defNormalProp$4o(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3_ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4o.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4o)
    for (var prop of __getOwnPropSymbols$4o(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4o.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Bookmarks = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3_(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4o({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.389 13.944-4.222-3.11-4.223 3.11V5.5c0-.982.796-1.778 1.778-1.778h4.89c.981 0 1.777.796 1.777 1.778z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.528 1.278c.255-.141.548-.222.86-.222h4.89c.982 0 1.778.795 1.778 1.777v8.445"
        }
      )
    );
  }
);
Bookmarks.displayName = "Bookmarks";

var __defProp$4n = Object.defineProperty;
var __getOwnPropSymbols$4n = Object.getOwnPropertySymbols;
var __hasOwnProp$4n = Object.prototype.hasOwnProperty;
var __propIsEnum$4n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4n = (obj, key, value) => key in obj ? __defProp$4n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4n.call(b, prop))
      __defNormalProp$4n(a, prop, b[prop]);
  if (__getOwnPropSymbols$4n)
    for (var prop of __getOwnPropSymbols$4n(b)) {
      if (__propIsEnum$4n.call(b, prop))
        __defNormalProp$4n(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3Z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4n.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4n)
    for (var prop of __getOwnPropSymbols$4n(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4n.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BottomToTop = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3Z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4n({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m5.5 5.278 2-2-2-2M13.944 7.5h-4M13.944 3.278h-4M13.944 11.722h-4" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 3.278H5.278a4.223 4.223 0 0 0 0 8.444h1.555" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BottomToTop.displayName = "BottomToTop";

var __defProp$4m = Object.defineProperty;
var __getOwnPropSymbols$4m = Object.getOwnPropertySymbols;
var __hasOwnProp$4m = Object.prototype.hasOwnProperty;
var __propIsEnum$4m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4m = (obj, key, value) => key in obj ? __defProp$4m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4m.call(b, prop))
      __defNormalProp$4m(a, prop, b[prop]);
  if (__getOwnPropSymbols$4m)
    for (var prop of __getOwnPropSymbols$4m(b)) {
      if (__propIsEnum$4m.call(b, prop))
        __defNormalProp$4m(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3Y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4m)
    for (var prop of __getOwnPropSymbols$4m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BroomSparkle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3Y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4m({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.072.72a.75.75 0 0 1 0 1.06L9.695 6.157c.432.54.682 1.129.768 1.745.115.828-.072 1.635-.388 2.353-.626 1.42-1.826 2.66-2.73 3.382a2.44 2.44 0 0 1-2.184.448C2.525 13.335.986 11.123.712 8.408a.75.75 0 0 1 .645-.818c.854-.117 1.363-.583 2.44-1.674 1.375-1.393 3.326-1.583 4.767-.75L13.01.72a.75.75 0 0 1 1.06 0M4.895 6.94l-.03.03-.045.045c-.81.82-1.52 1.54-2.52 1.886.374 1.886 1.525 3.244 3.271 3.741.282.08.596.017.838-.177.642-.513 1.412-1.295 1.945-2.16a13.2 13.2 0 0 1-2.23-1.87v-.001A13 13 0 0 1 4.895 6.94m1.326-.725a11.7 11.7 0 0 0 2.726 2.679q.082-.41.03-.784c-.063-.455-.29-.932-.825-1.401a2.25 2.25 0 0 0-1.93-.494",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "m14.714 9.991-1.052-.35-.351-1.053c-.114-.34-.677-.34-.79 0l-.352 1.052-1.052.351a.417.417 0 0 0 0 .79l1.052.35.351 1.053a.418.418 0 0 0 .792 0l.35-1.052 1.053-.35a.417.417 0 0 0 0-.79M4.577 2.91l-.788-.263-.263-.789c-.085-.255-.508-.255-.593 0l-.263.79-.788.262a.313.313 0 0 0 0 .593l.788.263.263.789a.312.312 0 0 0 .592 0l.263-.79.788-.262a.313.313 0 0 0 .001-.593M6.875 2.5a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
        }
      )
    );
  }
);
BroomSparkle.displayName = "BroomSparkle";

var __defProp$4l = Object.defineProperty;
var __getOwnPropSymbols$4l = Object.getOwnPropertySymbols;
var __hasOwnProp$4l = Object.prototype.hasOwnProperty;
var __propIsEnum$4l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4l = (obj, key, value) => key in obj ? __defProp$4l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4l.call(b, prop))
      __defNormalProp$4l(a, prop, b[prop]);
  if (__getOwnPropSymbols$4l)
    for (var prop of __getOwnPropSymbols$4l(b)) {
      if (__propIsEnum$4l.call(b, prop))
        __defNormalProp$4l(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3X = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4l.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4l)
    for (var prop of __getOwnPropSymbols$4l(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4l.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BugAntSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3X(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4l({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M11.945 8.833h2a.667.667 0 0 0 0-1.333h-2v-.964A3.114 3.114 0 0 0 14.389 3.5a.667.667 0 0 0-1.333 0 1.78 1.78 0 0 1-1.412 1.739 2.43 2.43 0 0 0-1.477-1.19V3.5A2.67 2.67 0 0 0 7.5.833 2.67 2.67 0 0 0 4.833 3.5v.548a2.44 2.44 0 0 0-1.477 1.19A1.78 1.78 0 0 1 1.944 3.5a.667.667 0 0 0-1.333 0 3.114 3.114 0 0 0 2.445 3.036V7.5h-2a.667.667 0 0 0 0 1.333h2v.445c0 .173.027.34.046.507a3.116 3.116 0 0 0-2.49 3.048.667.667 0 0 0 1.332 0c0-.89.66-1.622 1.514-1.75a4.45 4.45 0 0 0 3.375 2.572v-4.6a.667.667 0 0 1 1.334 0v4.6a4.45 4.45 0 0 0 3.375-2.573 1.776 1.776 0 0 1 1.514 1.751.667.667 0 0 0 1.333 0 3.116 3.116 0 0 0-2.49-3.048c.019-.168.046-.333.046-.507zM6.167 3.944V3.5c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333v.444z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BugAntSolid.displayName = "BugAntSolid";

var __defProp$4k = Object.defineProperty;
var __getOwnPropSymbols$4k = Object.getOwnPropertySymbols;
var __hasOwnProp$4k = Object.prototype.hasOwnProperty;
var __propIsEnum$4k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4k = (obj, key, value) => key in obj ? __defProp$4k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4k.call(b, prop))
      __defNormalProp$4k(a, prop, b[prop]);
  if (__getOwnPropSymbols$4k)
    for (var prop of __getOwnPropSymbols$4k(b)) {
      if (__propIsEnum$4k.call(b, prop))
        __defNormalProp$4k(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3W = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4k.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4k)
    for (var prop of __getOwnPropSymbols$4k(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4k.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Bug = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3W(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4k({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 13.056v-4M5.5 4.611V3.5a2 2 0 1 1 4 0v1.111M3.722 8.167H1.056M3.722 5.944A2.444 2.444 0 0 1 1.278 3.5M3.722 10.389a2.444 2.444 0 0 0-2.444 2.444M11.278 8.167h2.666M11.278 5.944A2.444 2.444 0 0 0 13.722 3.5M11.278 10.389a2.444 2.444 0 0 1 2.444 2.444" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.5 4.611h4c.981 0 1.778.797 1.778 1.778v2.889A3.78 3.78 0 0 1 7.5 13.056a3.78 3.78 0 0 1-3.778-3.778v-2.89c0-.98.797-1.777 1.778-1.777" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Bug.displayName = "Bug";

var __defProp$4j = Object.defineProperty;
var __getOwnPropSymbols$4j = Object.getOwnPropertySymbols;
var __hasOwnProp$4j = Object.prototype.hasOwnProperty;
var __propIsEnum$4j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4j = (obj, key, value) => key in obj ? __defProp$4j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4j.call(b, prop))
      __defNormalProp$4j(a, prop, b[prop]);
  if (__getOwnPropSymbols$4j)
    for (var prop of __getOwnPropSymbols$4j(b)) {
      if (__propIsEnum$4j.call(b, prop))
        __defNormalProp$4j(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3V = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4j.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4j)
    for (var prop of __getOwnPropSymbols$4j(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4j.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BuildingStorefront = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3V(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4j({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.833 13.945v-6M12.167 7.944v6M11.65 1.056h-8.3a.89.89 0 0 0-.773.448L1.061 4.167a2.66 2.66 0 0 0 2.418 1.555 2.65 2.65 0 0 0 2.01-.932 2.65 2.65 0 0 0 2.011.932c.807 0 1.52-.365 2.01-.931a2.65 2.65 0 0 0 2.01.931c1.074 0 1.995-.639 2.417-1.555l-1.514-2.663a.89.89 0 0 0-.774-.448M5.944 13.722v-2.666a1.556 1.556 0 0 1 3.112 0v2.666M1.056 13.945h12.888" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingStorefront.displayName = "BuildingStorefront";

var __defProp$4i = Object.defineProperty;
var __getOwnPropSymbols$4i = Object.getOwnPropertySymbols;
var __hasOwnProp$4i = Object.prototype.hasOwnProperty;
var __propIsEnum$4i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4i = (obj, key, value) => key in obj ? __defProp$4i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4i.call(b, prop))
      __defNormalProp$4i(a, prop, b[prop]);
  if (__getOwnPropSymbols$4i)
    for (var prop of __getOwnPropSymbols$4i(b)) {
      if (__propIsEnum$4i.call(b, prop))
        __defNormalProp$4i(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3U = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4i.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4i)
    for (var prop of __getOwnPropSymbols$4i(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4i.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BuildingTax = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3U(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M1 5.694H.25c0 .415.336.75.75.75zm13 0v.75a.75.75 0 0 0 .75-.75zm0-1.444h.75a.75.75 0 0 0-.445-.685zM7.5 1.361l.305-.685a.75.75 0 0 0-.61 0zM1 4.25l-.305-.685a.75.75 0 0 0-.445.685zm5.056 10.139a.75.75 0 0 0 0-1.5zM1 13.639l-.72-.21a.75.75 0 0 0 .72.96zm.632-2.167v-.75a.75.75 0 0 0-.72.54zm4.424.75a.75.75 0 0 0 0-1.5zm8.158-2.792a.75.75 0 1 0-1.06-1.061zM8.73 12.793a.75.75 0 1 0 1.06 1.06zM1 6.444h13v-1.5H1zm13.75-.75V4.25h-1.5v1.444zm-.445-2.13L7.805.677l-.61 1.37 6.5 2.89zM7.195.677l-6.5 2.889.61 1.37 6.5-2.889zM.25 4.25v1.444h1.5V4.25zm5.806 8.639H1v1.5h5.056zm-4.336.96.632-2.167-1.44-.42L.28 13.43zm-.088-1.627h4.424v-1.5H1.632zm.062-6.528v5.778h1.5V5.694zm4.39 5.778V5.694h-1.5v5.778zm7.07-3.103L8.73 12.793l1.06 1.06 4.424-4.423zm-3.876.756c0-.115.093-.208.208-.208v1.5c.713 0 1.292-.579 1.292-1.292zm.208-.208c.115 0 .208.093.208.208h-1.5c0 .713.579 1.292 1.292 1.292zm.208.208a.21.21 0 0 1-.208.208v-1.5c-.713 0-1.292.579-1.292 1.292zm-.208.208a.21.21 0 0 1-.208-.208h1.5c0-.713-.578-1.292-1.292-1.292zm3.764 3.764c0-.115.093-.208.208-.208v1.5c.714 0 1.292-.578 1.292-1.292zm.208-.208c.115 0 .209.093.209.208h-1.5c0 .714.578 1.292 1.291 1.292zm.209.208a.21.21 0 0 1-.209.209v-1.5c-.713 0-1.291.578-1.291 1.291zm-.209.209a.21.21 0 0 1-.208-.209h1.5c0-.713-.578-1.291-1.292-1.291z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingTax.displayName = "BuildingTax";

var __defProp$4h = Object.defineProperty;
var __getOwnPropSymbols$4h = Object.getOwnPropertySymbols;
var __hasOwnProp$4h = Object.prototype.hasOwnProperty;
var __propIsEnum$4h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4h = (obj, key, value) => key in obj ? __defProp$4h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4h.call(b, prop))
      __defNormalProp$4h(a, prop, b[prop]);
  if (__getOwnPropSymbols$4h)
    for (var prop of __getOwnPropSymbols$4h(b)) {
      if (__propIsEnum$4h.call(b, prop))
        __defNormalProp$4h(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3T = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4h)
    for (var prop of __getOwnPropSymbols$4h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BuildingsMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3T(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4h({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.389 13.944V6.39a.89.89 0 0 1 .889-.889h4.889a.89.89 0 0 1 .889.889v7.555M1.944 13.944V3.422c0-.358.214-.68.543-.819l4-1.691a.89.89 0 0 1 1.235.818v1.548M1.056 13.945h12.888M8.611 8.611v-.444M10.833 8.611v-.444M8.611 11.278v-.445M10.833 11.278v-.445" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingsMini.displayName = "BuildingsMini";

var __defProp$4g = Object.defineProperty;
var __getOwnPropSymbols$4g = Object.getOwnPropertySymbols;
var __hasOwnProp$4g = Object.prototype.hasOwnProperty;
var __propIsEnum$4g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4g = (obj, key, value) => key in obj ? __defProp$4g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4g.call(b, prop))
      __defNormalProp$4g(a, prop, b[prop]);
  if (__getOwnPropSymbols$4g)
    for (var prop of __getOwnPropSymbols$4g(b)) {
      if (__propIsEnum$4g.call(b, prop))
        __defNormalProp$4g(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3S = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4g)
    for (var prop of __getOwnPropSymbols$4g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const BuildingsSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3S(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.945 14.611a.667.667 0 0 1-.667-.667V3.422c0-.626.372-1.189.95-1.432l4-1.693a1.55 1.55 0 0 1 1.464.136c.437.29.696.775.696 1.297v1.548a.667.667 0 0 1-1.333 0V1.73a.22.22 0 0 0-.1-.186.21.21 0 0 0-.21-.018l-4 1.691a.22.22 0 0 0-.135.205v10.523a.666.666 0 0 1-.665.666" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.945 13.278h-.223v-6.89c0-.857-.697-1.555-1.555-1.555h-4.89c-.857 0-1.555.698-1.555 1.556v6.889H1.056a.667.667 0 0 0 0 1.333h12.888a.667.667 0 0 0 0-1.333m-4.667-2a.667.667 0 0 1-1.334 0v-.445a.667.667 0 0 1 1.334 0zm0-2.667a.667.667 0 0 1-1.334 0v-.444a.667.667 0 0 1 1.334 0zm2.222 2.667a.667.667 0 0 1-1.333 0v-.445a.667.667 0 0 1 1.333 0zm0-2.667a.667.667 0 0 1-1.333 0v-.444a.667.667 0 0 1 1.333 0z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
BuildingsSolid.displayName = "BuildingsSolid";

var __defProp$4f = Object.defineProperty;
var __getOwnPropSymbols$4f = Object.getOwnPropertySymbols;
var __hasOwnProp$4f = Object.prototype.hasOwnProperty;
var __propIsEnum$4f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4f = (obj, key, value) => key in obj ? __defProp$4f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4f.call(b, prop))
      __defNormalProp$4f(a, prop, b[prop]);
  if (__getOwnPropSymbols$4f)
    for (var prop of __getOwnPropSymbols$4f(b)) {
      if (__propIsEnum$4f.call(b, prop))
        __defNormalProp$4f(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3R = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4f)
    for (var prop of __getOwnPropSymbols$4f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Buildings = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3R(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.389 13.944V6.39a.89.89 0 0 1 .889-.889h4.889a.89.89 0 0 1 .889.889v7.555M1.944 13.944V3.422c0-.358.214-.68.543-.819l4-1.691a.89.89 0 0 1 1.235.818v1.548M1.056 13.945h12.888M8.611 8.611v-.444M10.833 8.611v-.444M8.611 11.278v-.445M10.833 11.278v-.445" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Buildings.displayName = "Buildings";

var __defProp$4e = Object.defineProperty;
var __getOwnPropSymbols$4e = Object.getOwnPropertySymbols;
var __hasOwnProp$4e = Object.prototype.hasOwnProperty;
var __propIsEnum$4e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4e = (obj, key, value) => key in obj ? __defProp$4e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4e.call(b, prop))
      __defNormalProp$4e(a, prop, b[prop]);
  if (__getOwnPropSymbols$4e)
    for (var prop of __getOwnPropSymbols$4e(b)) {
      if (__propIsEnum$4e.call(b, prop))
        __defNormalProp$4e(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3Q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4e)
    for (var prop of __getOwnPropSymbols$4e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Button = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3Q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4e({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.542 7.43V4.793c0-.92-.746-1.667-1.667-1.667h-8.75c-.92 0-1.667.747-1.667 1.667v2.916c0 .92.746 1.667 1.667 1.667h3.067"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.278 7.726 5.712 2.087a.27.27 0 0 1-.01.509l-2.614.836-.837 2.615a.27.27 0 0 1-.509.01L7.933 8.07a.27.27 0 0 1 .345-.345"
        }
      )
    );
  }
);
Button.displayName = "Button";

var __defProp$4d = Object.defineProperty;
var __getOwnPropSymbols$4d = Object.getOwnPropertySymbols;
var __hasOwnProp$4d = Object.prototype.hasOwnProperty;
var __propIsEnum$4d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4d = (obj, key, value) => key in obj ? __defProp$4d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4d.call(b, prop))
      __defNormalProp$4d(a, prop, b[prop]);
  if (__getOwnPropSymbols$4d)
    for (var prop of __getOwnPropSymbols$4d(b)) {
      if (__propIsEnum$4d.call(b, prop))
        __defNormalProp$4d(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3P = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4d.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4d)
    for (var prop of __getOwnPropSymbols$4d(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4d.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CalendarMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3P(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4d({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M6.611 8.611c0-.49.4-.889.889-.889a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M6.611 11.278c0-.49.4-.89.889-.89a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.888M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M9.722 11.278a.89.89 0 0 1 1.778 0c0 .49-.4.889-.889.889a.89.89 0 0 1-.889-.89"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.611.306a.75.75 0 0 1 .75.75v1.027H9.64V1.056a.75.75 0 1 1 1.5 0v1.027h.583a2.53 2.53 0 0 1 2.528 2.528v7.556a2.53 2.53 0 0 1-2.528 2.527H3.278A2.53 2.53 0 0 1 .75 12.167V4.61a2.53 2.53 0 0 1 2.528-2.528h.583V1.056a.75.75 0 0 1 .75-.75M12.75 4.61v.584H2.25V4.61c0-.568.46-1.028 1.028-1.028h8.444c.568 0 1.028.46 1.028 1.028m0 2.084H2.25v5.472c0 .567.46 1.027 1.028 1.027h8.444c.568 0 1.028-.46 1.028-1.027z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
CalendarMini.displayName = "CalendarMini";

var __defProp$4c = Object.defineProperty;
var __getOwnPropSymbols$4c = Object.getOwnPropertySymbols;
var __hasOwnProp$4c = Object.prototype.hasOwnProperty;
var __propIsEnum$4c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4c = (obj, key, value) => key in obj ? __defProp$4c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4c.call(b, prop))
      __defNormalProp$4c(a, prop, b[prop]);
  if (__getOwnPropSymbols$4c)
    for (var prop of __getOwnPropSymbols$4c(b)) {
      if (__propIsEnum$4c.call(b, prop))
        __defNormalProp$4c(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3O = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4c)
    for (var prop of __getOwnPropSymbols$4c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CalendarSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3O(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4c({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M4.611 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667M10.389 3.5a.667.667 0 0 1-.667-.667V1.056a.667.667 0 0 1 1.334 0v1.777a.667.667 0 0 1-.667.667"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M11.722 2.167H3.278A2.446 2.446 0 0 0 .833 4.61v7.556a2.446 2.446 0 0 0 2.445 2.444h8.444a2.447 2.447 0 0 0 2.445-2.444V4.61a2.446 2.446 0 0 0-2.445-2.444m0 11.11H3.278a1.113 1.113 0 0 1-1.111-1.11V6.61h10.666v5.556c0 .612-.498 1.11-1.11 1.11"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 7.722a.89.89 0 0 0-.889.89c0 .489.4.888.889.888.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M7.5 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M10.611 10.389a.89.89 0 0 0-.889.889.89.89 0 0 0 1.778 0 .89.89 0 0 0-.889-.89"
        }
      )
    );
  }
);
CalendarSolid.displayName = "CalendarSolid";

var __defProp$4b = Object.defineProperty;
var __getOwnPropSymbols$4b = Object.getOwnPropertySymbols;
var __hasOwnProp$4b = Object.prototype.hasOwnProperty;
var __propIsEnum$4b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4b = (obj, key, value) => key in obj ? __defProp$4b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4b.call(b, prop))
      __defNormalProp$4b(a, prop, b[prop]);
  if (__getOwnPropSymbols$4b)
    for (var prop of __getOwnPropSymbols$4b(b)) {
      if (__propIsEnum$4b.call(b, prop))
        __defNormalProp$4b(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3N = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4b)
    for (var prop of __getOwnPropSymbols$4b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Calendar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3N(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4b({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M6.611 8.611c0-.49.4-.889.889-.889a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.889M10.611 9.5c.49 0 .889-.4.889-.889a.89.89 0 0 0-.889-.889.89.89 0 0 0-.889.89c0 .489.4.888.89.888M6.611 11.278c0-.49.4-.89.889-.89a.89.89 0 0 1 0 1.778.89.89 0 0 1-.889-.888M4.389 10.389a.89.89 0 0 0-.889.889c0 .49.4.889.889.889a.89.89 0 0 0 0-1.778M9.722 11.278a.89.89 0 0 1 1.778 0c0 .49-.4.889-.889.889a.89.89 0 0 1-.889-.89"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.611.306a.75.75 0 0 1 .75.75v1.027H9.64V1.056a.75.75 0 1 1 1.5 0v1.027h.583a2.53 2.53 0 0 1 2.528 2.528v7.556a2.53 2.53 0 0 1-2.528 2.527H3.278A2.53 2.53 0 0 1 .75 12.167V4.61a2.53 2.53 0 0 1 2.528-2.528h.583V1.056a.75.75 0 0 1 .75-.75M12.75 4.61v.584H2.25V4.61c0-.568.46-1.028 1.028-1.028h8.444c.568 0 1.028.46 1.028 1.028m0 2.084H2.25v5.472c0 .567.46 1.027 1.028 1.027h8.444c.568 0 1.028-.46 1.028-1.027z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Calendar.displayName = "Calendar";

var __defProp$4a = Object.defineProperty;
var __getOwnPropSymbols$4a = Object.getOwnPropertySymbols;
var __hasOwnProp$4a = Object.prototype.hasOwnProperty;
var __propIsEnum$4a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4a = (obj, key, value) => key in obj ? __defProp$4a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4a.call(b, prop))
      __defNormalProp$4a(a, prop, b[prop]);
  if (__getOwnPropSymbols$4a)
    for (var prop of __getOwnPropSymbols$4a(b)) {
      if (__propIsEnum$4a.call(b, prop))
        __defNormalProp$4a(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3M = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4a.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4a)
    for (var prop of __getOwnPropSymbols$4a(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4a.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Camera = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3M(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.582 1.869c.24-.64.85-1.063 1.534-1.063h2.768c.684 0 1.295.424 1.534 1.064l.268.713h1.48a2.527 2.527 0 0 1 2.529 2.528v5.778a2.527 2.527 0 0 1-2.528 2.528H2.833a2.527 2.527 0 0 1-2.527-2.528V5.111a2.527 2.527 0 0 1 2.527-2.528h1.48zm1.534.437a.14.14 0 0 0-.13.09l-.45 1.201a.75.75 0 0 1-.703.486h-2c-.568 0-1.027.46-1.027 1.028v5.778c0 .568.46 1.028 1.027 1.028h9.334c.568 0 1.028-.46 1.028-1.028V5.111c0-.568-.46-1.028-1.028-1.028h-2a.75.75 0 0 1-.702-.486l-.451-1.2a.14.14 0 0 0-.13-.091z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.5 6.306a1.694 1.694 0 1 0 0 3.389 1.694 1.694 0 0 0 0-3.39M4.306 8a3.194 3.194 0 1 1 6.389 0 3.194 3.194 0 0 1-6.39 0",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.278 6.222a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Camera.displayName = "Camera";

var __defProp$49 = Object.defineProperty;
var __getOwnPropSymbols$49 = Object.getOwnPropertySymbols;
var __hasOwnProp$49 = Object.prototype.hasOwnProperty;
var __propIsEnum$49 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$49 = (obj, key, value) => key in obj ? __defProp$49(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$49 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$49.call(b, prop))
      __defNormalProp$49(a, prop, b[prop]);
  if (__getOwnPropSymbols$49)
    for (var prop of __getOwnPropSymbols$49(b)) {
      if (__propIsEnum$49.call(b, prop))
        __defNormalProp$49(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3L = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$49.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$49)
    for (var prop of __getOwnPropSymbols$49(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$49.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CaretMaximizeDiagonal = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3L(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$49({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M11.944 2.167h-4.13a.887.887 0 0 0-.628 1.517l4.13 4.13a.885.885 0 0 0 .969.192.89.89 0 0 0 .548-.821v-4.13a.89.89 0 0 0-.889-.888M3.684 7.185a.885.885 0 0 0-.969-.193.89.89 0 0 0-.548.822v4.13c0 .49.399.888.889.888h4.13a.887.887 0 0 0 .628-1.517z"
        }
      )
    );
  }
);
CaretMaximizeDiagonal.displayName = "CaretMaximizeDiagonal";

var __defProp$48 = Object.defineProperty;
var __getOwnPropSymbols$48 = Object.getOwnPropertySymbols;
var __hasOwnProp$48 = Object.prototype.hasOwnProperty;
var __propIsEnum$48 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$48 = (obj, key, value) => key in obj ? __defProp$48(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$48 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$48.call(b, prop))
      __defNormalProp$48(a, prop, b[prop]);
  if (__getOwnPropSymbols$48)
    for (var prop of __getOwnPropSymbols$48(b)) {
      if (__propIsEnum$48.call(b, prop))
        __defNormalProp$48(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3K = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$48.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$48)
    for (var prop of __getOwnPropSymbols$48(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$48.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CaretMinimizeDiagonal = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3K(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$48({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M9.462 1.407a.885.885 0 0 0-.97-.192.89.89 0 0 0-.548.82v4.132c0 .49.4.888.89.888h4.129a.887.887 0 0 0 .628-1.517zM6.167 7.944h-4.13a.887.887 0 0 0-.628 1.517l4.13 4.13a.885.885 0 0 0 .968.193.89.89 0 0 0 .549-.822v-4.13a.89.89 0 0 0-.89-.888"
        }
      )
    );
  }
);
CaretMinimizeDiagonal.displayName = "CaretMinimizeDiagonal";

var __defProp$47 = Object.defineProperty;
var __getOwnPropSymbols$47 = Object.getOwnPropertySymbols;
var __hasOwnProp$47 = Object.prototype.hasOwnProperty;
var __propIsEnum$47 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$47 = (obj, key, value) => key in obj ? __defProp$47(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$47 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$47.call(b, prop))
      __defNormalProp$47(a, prop, b[prop]);
  if (__getOwnPropSymbols$47)
    for (var prop of __getOwnPropSymbols$47(b)) {
      if (__propIsEnum$47.call(b, prop))
        __defNormalProp$47(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3J = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$47.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$47)
    for (var prop of __getOwnPropSymbols$47(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$47.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CashSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3J(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$47({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.61 6.837q-.656-.117-.686-.413c-.014-.15.03-.198.05-.22.113-.125.393-.192.553-.192.372 0 .488.187.531.257a.667.667 0 1 0 1.133-.702 1.8 1.8 0 0 0-1.034-.786.66.66 0 0 0-.656-.614.663.663 0 0 0-.659.627c-.308.096-.62.255-.855.513-.301.333-.436.763-.39 1.245.048.486.342 1.341 1.78 1.597.798.143.804.352.806.463.003.1-.029.182-.1.256-.12.124-.328.197-.556.197-.542 0-.647-.208-.691-.296a.666.666 0 1 0-1.19.602c.185.364.543.779 1.22.947.07.292.321.515.635.515a.66.66 0 0 0 .638-.528c.347-.096.66-.264.897-.506.32-.33.492-.762.48-1.22-.022-.936-.664-1.522-1.906-1.744z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 2.167H2.833A2.446 2.446 0 0 0 .39 4.61v5.778a2.446 2.446 0 0 0 2.444 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V4.611a2.446 2.446 0 0 0-2.444-2.444m-1.43 9.333H4.263a3.55 3.55 0 0 0-2.54-2.54V6.04a3.55 3.55 0 0 0 2.54-2.54h6.474a3.55 3.55 0 0 0 2.54 2.54v2.92a3.55 3.55 0 0 0-2.54 2.54" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CashSolid.displayName = "CashSolid";

var __defProp$46 = Object.defineProperty;
var __getOwnPropSymbols$46 = Object.getOwnPropertySymbols;
var __hasOwnProp$46 = Object.prototype.hasOwnProperty;
var __propIsEnum$46 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$46 = (obj, key, value) => key in obj ? __defProp$46(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$46 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$46.call(b, prop))
      __defNormalProp$46(a, prop, b[prop]);
  if (__getOwnPropSymbols$46)
    for (var prop of __getOwnPropSymbols$46(b)) {
      if (__propIsEnum$46.call(b, prop))
        __defNormalProp$46(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3I = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$46.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$46)
    for (var prop of __getOwnPropSymbols$46(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$46.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Cash = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3I(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$46({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.624 5.918c-.286-.462-.743-.573-1.098-.573-.374 0-1.357.2-1.265 1.142.064.663.688.909 1.233 1.006s1.337.305 1.356 1.103c.017.675-.59 1.135-1.323 1.135-.608 0-1.055-.204-1.286-.661M7.5 4.833v.512M7.5 9.732v.435M3.944 2.833a2.89 2.89 0 0 1-2.888 2.89M11.056 2.833a2.89 2.89 0 0 0 2.888 2.89M3.944 12.167a2.89 2.89 0 0 0-2.888-2.89M11.056 12.167a2.89 2.89 0 0 1 2.888-2.89" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 2.833H2.833c-.982 0-1.777.796-1.777 1.778v5.778c0 .982.795 1.778 1.777 1.778h9.334c.982 0 1.777-.796 1.777-1.778V4.61c0-.982-.796-1.778-1.777-1.778" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Cash.displayName = "Cash";

var __defProp$45 = Object.defineProperty;
var __getOwnPropSymbols$45 = Object.getOwnPropertySymbols;
var __hasOwnProp$45 = Object.prototype.hasOwnProperty;
var __propIsEnum$45 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$45 = (obj, key, value) => key in obj ? __defProp$45(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$45 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$45.call(b, prop))
      __defNormalProp$45(a, prop, b[prop]);
  if (__getOwnPropSymbols$45)
    for (var prop of __getOwnPropSymbols$45(b)) {
      if (__propIsEnum$45.call(b, prop))
        __defNormalProp$45(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3H = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$45.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$45)
    for (var prop of __getOwnPropSymbols$45(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$45.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChannelsSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3H(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$45({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.056 11.278a.667.667 0 0 0-.667-.667H9.5a1.113 1.113 0 0 1-1.111-1.11v-4c0-.613.499-1.112 1.111-1.112h.889a.667.667 0 0 0 0-1.333H9.5A2.446 2.446 0 0 0 7.056 5.5v1.333H4.61a.667.667 0 0 0 0 1.334h2.445V9.5A2.446 2.446 0 0 0 9.5 11.945h.889a.667.667 0 0 0 .667-.667" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.944 3.722a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0M9.944 11.278a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0M.611 7.5a2.222 2.222 0 1 0 4.445 0 2.222 2.222 0 0 0-4.445 0" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChannelsSolid.displayName = "ChannelsSolid";

var __defProp$44 = Object.defineProperty;
var __getOwnPropSymbols$44 = Object.getOwnPropertySymbols;
var __hasOwnProp$44 = Object.prototype.hasOwnProperty;
var __propIsEnum$44 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$44 = (obj, key, value) => key in obj ? __defProp$44(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$44 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$44.call(b, prop))
      __defNormalProp$44(a, prop, b[prop]);
  if (__getOwnPropSymbols$44)
    for (var prop of __getOwnPropSymbols$44(b)) {
      if (__propIsEnum$44.call(b, prop))
        __defNormalProp$44(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3G = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$44.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$44)
    for (var prop of __getOwnPropSymbols$44(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$44.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Channels = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3G(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$44({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.722 7.5h-3.11M10.389 3.722H9.5c-.982 0-1.778.796-1.778 1.778v4c0 .982.796 1.778 1.778 1.778h.889" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.389 3.722a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0M10.389 11.278a1.778 1.778 0 1 0 3.556 0 1.778 1.778 0 0 0-3.556 0M1.056 7.5a1.778 1.778 0 1 0 3.555 0 1.778 1.778 0 0 0-3.555 0" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Channels.displayName = "Channels";

var __defProp$43 = Object.defineProperty;
var __getOwnPropSymbols$43 = Object.getOwnPropertySymbols;
var __hasOwnProp$43 = Object.prototype.hasOwnProperty;
var __propIsEnum$43 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$43 = (obj, key, value) => key in obj ? __defProp$43(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$43 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$43.call(b, prop))
      __defNormalProp$43(a, prop, b[prop]);
  if (__getOwnPropSymbols$43)
    for (var prop of __getOwnPropSymbols$43(b)) {
      if (__propIsEnum$43.call(b, prop))
        __defNormalProp$43(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3F = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$43.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$43)
    for (var prop of __getOwnPropSymbols$43(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$43.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChartBar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3F(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$43({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.722 1.944h-.444a.89.89 0 0 0-.89.89v9.333c0 .49.399.888.89.888h.444c.491 0 .89-.397.89-.888V2.833a.89.89 0 0 0-.89-.889M2.833 6.389H2.39a.89.89 0 0 0-.889.889v4.889c0 .49.398.889.889.889h.444c.491 0 .89-.398.89-.89V7.279a.89.89 0 0 0-.89-.89M12.611 7.55h-.444c-.491 0-.889.328-.889.733v4.038c0 .406.398.734.889.734h.444c.491 0 .89-.328.89-.734V8.283c0-.405-.399-.734-.89-.734" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChartBar.displayName = "ChartBar";

var __defProp$42 = Object.defineProperty;
var __getOwnPropSymbols$42 = Object.getOwnPropertySymbols;
var __hasOwnProp$42 = Object.prototype.hasOwnProperty;
var __propIsEnum$42 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$42 = (obj, key, value) => key in obj ? __defProp$42(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$42 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$42.call(b, prop))
      __defNormalProp$42(a, prop, b[prop]);
  if (__getOwnPropSymbols$42)
    for (var prop of __getOwnPropSymbols$42(b)) {
      if (__propIsEnum$42.call(b, prop))
        __defNormalProp$42(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3E = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$42.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$42)
    for (var prop of __getOwnPropSymbols$42(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$42.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChartPie = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3E(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$42({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.368 10.167a6.446 6.446 0 1 1-8.535-8.535" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.944 7.5A6.444 6.444 0 0 0 7.5 1.056V7.5z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChartPie.displayName = "ChartPie";

var __defProp$41 = Object.defineProperty;
var __getOwnPropSymbols$41 = Object.getOwnPropertySymbols;
var __hasOwnProp$41 = Object.prototype.hasOwnProperty;
var __propIsEnum$41 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$41 = (obj, key, value) => key in obj ? __defProp$41(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$41 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$41.call(b, prop))
      __defNormalProp$41(a, prop, b[prop]);
  if (__getOwnPropSymbols$41)
    for (var prop of __getOwnPropSymbols$41(b)) {
      if (__propIsEnum$41.call(b, prop))
        __defNormalProp$41(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3D = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$41.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$41)
    for (var prop of __getOwnPropSymbols$41(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$41.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChatBubbleLeftRightSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3D(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$41({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.611 4.389H7.722c-1.102 0-2 .897-2 2v4c0 1.103.898 2 2 2h1.742l2.254 2.049a.67.67 0 0 0 .719.116.67.67 0 0 0 .396-.61v-1.568a2.003 2.003 0 0 0 1.778-1.987v-4c0-1.103-.898-2-2-2" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "m3.675 10.262-.175.19V9.5a.664.664 0 0 0-.667-.667c-.297 0-.575-.115-.785-.325a1.1 1.1 0 0 1-.325-.785V3.278c0-.613.499-1.111 1.111-1.111H8.39c.506 0 .95.342 1.075.832a.667.667 0 0 0 1.292-.332A2.44 2.44 0 0 0 8.39.833H2.833A2.446 2.446 0 0 0 .39 3.278v4.445c0 .652.254 1.267.716 1.728.3.3.664.512 1.062.624v2.092a.665.665 0 0 0 1.158.45l1.333-1.454a.666.666 0 1 0-.983-.901" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubbleLeftRightSolid.displayName = "ChatBubbleLeftRightSolid";

var __defProp$40 = Object.defineProperty;
var __getOwnPropSymbols$40 = Object.getOwnPropertySymbols;
var __hasOwnProp$40 = Object.prototype.hasOwnProperty;
var __propIsEnum$40 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$40 = (obj, key, value) => key in obj ? __defProp$40(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$40 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$40.call(b, prop))
      __defNormalProp$40(a, prop, b[prop]);
  if (__getOwnPropSymbols$40)
    for (var prop of __getOwnPropSymbols$40(b)) {
      if (__propIsEnum$40.call(b, prop))
        __defNormalProp$40(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3C = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$40.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$40)
    for (var prop of __getOwnPropSymbols$40(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$40.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChatBubbleLeftRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3C(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$40({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.722 5.056h4.89c.735 0 1.332.597 1.332 1.333v4c0 .736-.597 1.333-1.333 1.333h-.444v2.223l-2.445-2.223h-2A1.334 1.334 0 0 1 6.39 10.39v-4c0-.736.597-1.333 1.333-1.333" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.11 2.833A1.78 1.78 0 0 0 8.39 1.5H2.833c-.982 0-1.777.796-1.777 1.778v4.445c0 .981.796 1.778 1.777 1.777v2.667l1.334-1.455" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubbleLeftRight.displayName = "ChatBubbleLeftRight";

var __defProp$3$ = Object.defineProperty;
var __getOwnPropSymbols$3$ = Object.getOwnPropertySymbols;
var __hasOwnProp$3$ = Object.prototype.hasOwnProperty;
var __propIsEnum$3$ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3$ = (obj, key, value) => key in obj ? __defProp$3$(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3$ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3$.call(b, prop))
      __defNormalProp$3$(a, prop, b[prop]);
  if (__getOwnPropSymbols$3$)
    for (var prop of __getOwnPropSymbols$3$(b)) {
      if (__propIsEnum$3$.call(b, prop))
        __defNormalProp$3$(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3B = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3$.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3$)
    for (var prop of __getOwnPropSymbols$3$(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3$.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChatBubble = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3B(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3$({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.833.75A2.53 2.53 0 0 0 .306 3.278V9.5a2.53 2.53 0 0 0 2.527 2.528h1.028v1.916a.75.75 0 0 0 1.219.586l3.128-2.502h3.959A2.53 2.53 0 0 0 14.695 9.5V3.278A2.53 2.53 0 0 0 12.167.75zM1.806 3.278c0-.568.46-1.028 1.027-1.028h9.334c.568 0 1.028.46 1.028 1.028V9.5c0 .567-.46 1.028-1.028 1.028H7.945a.75.75 0 0 0-.469.164l-2.115 1.692v-1.106a.75.75 0 0 0-.75-.75H2.833c-.567 0-1.027-.46-1.027-1.028zm4.805 3.11a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0m-2.222.89a.89.89 0 0 1 0-1.778.89.89 0 0 1 0 1.778m5.333-.89a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ChatBubble.displayName = "ChatBubble";

var __defProp$3_ = Object.defineProperty;
var __getOwnPropSymbols$3_ = Object.getOwnPropertySymbols;
var __hasOwnProp$3_ = Object.prototype.hasOwnProperty;
var __propIsEnum$3_ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3_ = (obj, key, value) => key in obj ? __defProp$3_(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3_ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3_.call(b, prop))
      __defNormalProp$3_(a, prop, b[prop]);
  if (__getOwnPropSymbols$3_)
    for (var prop of __getOwnPropSymbols$3_(b)) {
      if (__propIsEnum$3_.call(b, prop))
        __defNormalProp$3_(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3A = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3_.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3_)
    for (var prop of __getOwnPropSymbols$3_(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3_.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CheckCircleMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3A(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3_({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CheckCircleMiniSolid.displayName = "CheckCircleMiniSolid";

var __defProp$3Z = Object.defineProperty;
var __getOwnPropSymbols$3Z = Object.getOwnPropertySymbols;
var __hasOwnProp$3Z = Object.prototype.hasOwnProperty;
var __propIsEnum$3Z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3Z = (obj, key, value) => key in obj ? __defProp$3Z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3Z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3Z.call(b, prop))
      __defNormalProp$3Z(a, prop, b[prop]);
  if (__getOwnPropSymbols$3Z)
    for (var prop of __getOwnPropSymbols$3Z(b)) {
      if (__propIsEnum$3Z.call(b, prop))
        __defNormalProp$3Z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3Z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3Z)
    for (var prop of __getOwnPropSymbols$3Z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3Z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CheckCircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3Z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m3.416 5.074-3.778 4.889a.67.67 0 0 1-.502.258h-.025a.67.67 0 0 1-.496-.22l-2-2.222a.668.668 0 0 1 .992-.893l1.465 1.629 3.29-4.257a.667.667 0 0 1 1.055.815z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CheckCircleSolid.displayName = "CheckCircleSolid";

var __defProp$3Y = Object.defineProperty;
var __getOwnPropSymbols$3Y = Object.getOwnPropertySymbols;
var __hasOwnProp$3Y = Object.prototype.hasOwnProperty;
var __propIsEnum$3Y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3Y = (obj, key, value) => key in obj ? __defProp$3Y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3Y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3Y.call(b, prop))
      __defNormalProp$3Y(a, prop, b[prop]);
  if (__getOwnPropSymbols$3Y)
    for (var prop of __getOwnPropSymbols$3Y(b)) {
      if (__propIsEnum$3Y.call(b, prop))
        __defNormalProp$3Y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3Y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3Y)
    for (var prop of __getOwnPropSymbols$3Y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3Y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CheckCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3Y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.611 7.722 2 2.223 3.778-4.89"
        }
      )
    );
  }
);
CheckCircle.displayName = "CheckCircle";

var __defProp$3X = Object.defineProperty;
var __getOwnPropSymbols$3X = Object.getOwnPropertySymbols;
var __hasOwnProp$3X = Object.prototype.hasOwnProperty;
var __propIsEnum$3X = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3X = (obj, key, value) => key in obj ? __defProp$3X(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3X = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3X.call(b, prop))
      __defNormalProp$3X(a, prop, b[prop]);
  if (__getOwnPropSymbols$3X)
    for (var prop of __getOwnPropSymbols$3X(b)) {
      if (__propIsEnum$3X.call(b, prop))
        __defNormalProp$3X(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3x = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3X.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3X)
    for (var prop of __getOwnPropSymbols$3X(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3X.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CheckMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3x(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3X({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.036 7.679 2.857 3.571 6.071-7.5"
        }
      )
    );
  }
);
CheckMini.displayName = "CheckMini";

var __defProp$3W = Object.defineProperty;
var __getOwnPropSymbols$3W = Object.getOwnPropertySymbols;
var __hasOwnProp$3W = Object.prototype.hasOwnProperty;
var __propIsEnum$3W = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3W = (obj, key, value) => key in obj ? __defProp$3W(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3W = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3W.call(b, prop))
      __defNormalProp$3W(a, prop, b[prop]);
  if (__getOwnPropSymbols$3W)
    for (var prop of __getOwnPropSymbols$3W(b)) {
      if (__propIsEnum$3W.call(b, prop))
        __defNormalProp$3W(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3w = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3W.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3W)
    for (var prop of __getOwnPropSymbols$3W(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3W.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Check = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3w(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3W({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m3.036 7.679 2.857 3.571 6.071-7.5"
        }
      )
    );
  }
);
Check.displayName = "Check";

var __defProp$3V = Object.defineProperty;
var __getOwnPropSymbols$3V = Object.getOwnPropertySymbols;
var __hasOwnProp$3V = Object.prototype.hasOwnProperty;
var __propIsEnum$3V = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3V = (obj, key, value) => key in obj ? __defProp$3V(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3V = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3V.call(b, prop))
      __defNormalProp$3V(a, prop, b[prop]);
  if (__getOwnPropSymbols$3V)
    for (var prop of __getOwnPropSymbols$3V(b)) {
      if (__propIsEnum$3V.call(b, prop))
        __defNormalProp$3V(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3v = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3V.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3V)
    for (var prop of __getOwnPropSymbols$3V(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3V.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDoubleLeftMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3v(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3V({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 11.278 3.056 7.5l3.777-3.778M11.056 11.278 7.278 7.5l3.778-3.778"
        }
      )
    );
  }
);
ChevronDoubleLeftMiniSolid.displayName = "ChevronDoubleLeftMiniSolid";

var __defProp$3U = Object.defineProperty;
var __getOwnPropSymbols$3U = Object.getOwnPropertySymbols;
var __hasOwnProp$3U = Object.prototype.hasOwnProperty;
var __propIsEnum$3U = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3U = (obj, key, value) => key in obj ? __defProp$3U(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3U = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3U.call(b, prop))
      __defNormalProp$3U(a, prop, b[prop]);
  if (__getOwnPropSymbols$3U)
    for (var prop of __getOwnPropSymbols$3U(b)) {
      if (__propIsEnum$3U.call(b, prop))
        __defNormalProp$3U(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3u = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3U.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3U)
    for (var prop of __getOwnPropSymbols$3U(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3U.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDoubleLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3u(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3U({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 11.278 3.056 7.5l3.777-3.778M11.056 11.278 7.278 7.5l3.778-3.778"
        }
      )
    );
  }
);
ChevronDoubleLeft.displayName = "ChevronDoubleLeft";

var __defProp$3T = Object.defineProperty;
var __getOwnPropSymbols$3T = Object.getOwnPropertySymbols;
var __hasOwnProp$3T = Object.prototype.hasOwnProperty;
var __propIsEnum$3T = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3T = (obj, key, value) => key in obj ? __defProp$3T(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3T = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3T.call(b, prop))
      __defNormalProp$3T(a, prop, b[prop]);
  if (__getOwnPropSymbols$3T)
    for (var prop of __getOwnPropSymbols$3T(b)) {
      if (__propIsEnum$3T.call(b, prop))
        __defNormalProp$3T(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3t = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3T.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3T)
    for (var prop of __getOwnPropSymbols$3T(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3T.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDoubleRightMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3t(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3T({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 3.722 11.944 7.5l-3.777 3.778M3.944 3.722 7.722 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ChevronDoubleRightMiniSolid.displayName = "ChevronDoubleRightMiniSolid";

var __defProp$3S = Object.defineProperty;
var __getOwnPropSymbols$3S = Object.getOwnPropertySymbols;
var __hasOwnProp$3S = Object.prototype.hasOwnProperty;
var __propIsEnum$3S = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3S = (obj, key, value) => key in obj ? __defProp$3S(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3S = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3S.call(b, prop))
      __defNormalProp$3S(a, prop, b[prop]);
  if (__getOwnPropSymbols$3S)
    for (var prop of __getOwnPropSymbols$3S(b)) {
      if (__propIsEnum$3S.call(b, prop))
        __defNormalProp$3S(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3s = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3S.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3S)
    for (var prop of __getOwnPropSymbols$3S(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3S.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDoubleRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3s(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3S({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 3.722 11.945 7.5l-3.778 3.778M3.944 3.722 7.722 7.5l-3.778 3.778"
        }
      )
    );
  }
);
ChevronDoubleRight.displayName = "ChevronDoubleRight";

var __defProp$3R = Object.defineProperty;
var __getOwnPropSymbols$3R = Object.getOwnPropertySymbols;
var __hasOwnProp$3R = Object.prototype.hasOwnProperty;
var __propIsEnum$3R = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3R = (obj, key, value) => key in obj ? __defProp$3R(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3R = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3R.call(b, prop))
      __defNormalProp$3R(a, prop, b[prop]);
  if (__getOwnPropSymbols$3R)
    for (var prop of __getOwnPropSymbols$3R(b)) {
      if (__propIsEnum$3R.call(b, prop))
        __defNormalProp$3R(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3r = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3R.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3R)
    for (var prop of __getOwnPropSymbols$3R(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3R.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDownMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3r(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3R({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 5.278 7.5 10.833 1.944 5.278"
        }
      ))),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "b" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
ChevronDownMini.displayName = "ChevronDownMini";

var __defProp$3Q = Object.defineProperty;
var __getOwnPropSymbols$3Q = Object.getOwnPropertySymbols;
var __hasOwnProp$3Q = Object.prototype.hasOwnProperty;
var __propIsEnum$3Q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3Q = (obj, key, value) => key in obj ? __defProp$3Q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3Q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3Q.call(b, prop))
      __defNormalProp$3Q(a, prop, b[prop]);
  if (__getOwnPropSymbols$3Q)
    for (var prop of __getOwnPropSymbols$3Q(b)) {
      if (__propIsEnum$3Q.call(b, prop))
        __defNormalProp$3Q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3Q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3Q)
    for (var prop of __getOwnPropSymbols$3Q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3Q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3Q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 5.278 7.5 10.833 1.944 5.278"
        }
      )
    );
  }
);
ChevronDown.displayName = "ChevronDown";

var __defProp$3P = Object.defineProperty;
var __getOwnPropSymbols$3P = Object.getOwnPropertySymbols;
var __hasOwnProp$3P = Object.prototype.hasOwnProperty;
var __propIsEnum$3P = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3P = (obj, key, value) => key in obj ? __defProp$3P(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3P = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3P.call(b, prop))
      __defNormalProp$3P(a, prop, b[prop]);
  if (__getOwnPropSymbols$3P)
    for (var prop of __getOwnPropSymbols$3P(b)) {
      if (__propIsEnum$3P.call(b, prop))
        __defNormalProp$3P(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3p = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3P.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3P)
    for (var prop of __getOwnPropSymbols$3P(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3P.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronLeftMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3p(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3P({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.722 13.055 4.167 7.5l5.555-5.556"
        }
      )
    );
  }
);
ChevronLeftMini.displayName = "ChevronLeftMini";

var __defProp$3O = Object.defineProperty;
var __getOwnPropSymbols$3O = Object.getOwnPropertySymbols;
var __hasOwnProp$3O = Object.prototype.hasOwnProperty;
var __propIsEnum$3O = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3O = (obj, key, value) => key in obj ? __defProp$3O(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3O = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3O.call(b, prop))
      __defNormalProp$3O(a, prop, b[prop]);
  if (__getOwnPropSymbols$3O)
    for (var prop of __getOwnPropSymbols$3O(b)) {
      if (__propIsEnum$3O.call(b, prop))
        __defNormalProp$3O(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3o = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3O.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3O)
    for (var prop of __getOwnPropSymbols$3O(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3O.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3o(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3O({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.722 13.055 4.167 7.5l5.555-5.556"
        }
      ))),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "b" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
ChevronLeft.displayName = "ChevronLeft";

var __defProp$3N = Object.defineProperty;
var __getOwnPropSymbols$3N = Object.getOwnPropertySymbols;
var __hasOwnProp$3N = Object.prototype.hasOwnProperty;
var __propIsEnum$3N = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3N = (obj, key, value) => key in obj ? __defProp$3N(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3N = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3N.call(b, prop))
      __defNormalProp$3N(a, prop, b[prop]);
  if (__getOwnPropSymbols$3N)
    for (var prop of __getOwnPropSymbols$3N(b)) {
      if (__propIsEnum$3N.call(b, prop))
        __defNormalProp$3N(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3n = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3N.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3N)
    for (var prop of __getOwnPropSymbols$3N(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3N.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronRightMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3n(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3N({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 1.944 10.833 7.5l-5.555 5.555"
        }
      )
    );
  }
);
ChevronRightMini.displayName = "ChevronRightMini";

var __defProp$3M = Object.defineProperty;
var __getOwnPropSymbols$3M = Object.getOwnPropertySymbols;
var __hasOwnProp$3M = Object.prototype.hasOwnProperty;
var __propIsEnum$3M = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3M = (obj, key, value) => key in obj ? __defProp$3M(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3M = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3M.call(b, prop))
      __defNormalProp$3M(a, prop, b[prop]);
  if (__getOwnPropSymbols$3M)
    for (var prop of __getOwnPropSymbols$3M(b)) {
      if (__propIsEnum$3M.call(b, prop))
        __defNormalProp$3M(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3m = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3M.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3M)
    for (var prop of __getOwnPropSymbols$3M(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3M.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3m(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3M({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 1.944 10.833 7.5l-5.555 5.555"
        }
      )
    );
  }
);
ChevronRight.displayName = "ChevronRight";

var __defProp$3L = Object.defineProperty;
var __getOwnPropSymbols$3L = Object.getOwnPropertySymbols;
var __hasOwnProp$3L = Object.prototype.hasOwnProperty;
var __propIsEnum$3L = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3L = (obj, key, value) => key in obj ? __defProp$3L(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3L = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3L.call(b, prop))
      __defNormalProp$3L(a, prop, b[prop]);
  if (__getOwnPropSymbols$3L)
    for (var prop of __getOwnPropSymbols$3L(b)) {
      if (__propIsEnum$3L.call(b, prop))
        __defNormalProp$3L(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3l = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3L.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3L)
    for (var prop of __getOwnPropSymbols$3L(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3L.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronUpDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3l(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3L({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 5.75c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 4.952a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108zM10.09 9.25c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455a.7.7 0 0 1-.142-.39.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
ChevronUpDown.displayName = "ChevronUpDown";

var __defProp$3K = Object.defineProperty;
var __getOwnPropSymbols$3K = Object.getOwnPropertySymbols;
var __hasOwnProp$3K = Object.prototype.hasOwnProperty;
var __propIsEnum$3K = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3K = (obj, key, value) => key in obj ? __defProp$3K(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3K = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3K.call(b, prop))
      __defNormalProp$3K(a, prop, b[prop]);
  if (__getOwnPropSymbols$3K)
    for (var prop of __getOwnPropSymbols$3K(b)) {
      if (__propIsEnum$3K.call(b, prop))
        __defNormalProp$3K(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3k = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3K.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3K)
    for (var prop of __getOwnPropSymbols$3K(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3K.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ChevronUpMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3k(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3K({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 9.722 7.5 4.167l5.556 5.555"
        }
      )
    );
  }
);
ChevronUpMini.displayName = "ChevronUpMini";

var __defProp$3J = Object.defineProperty;
var __getOwnPropSymbols$3J = Object.getOwnPropertySymbols;
var __hasOwnProp$3J = Object.prototype.hasOwnProperty;
var __propIsEnum$3J = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3J = (obj, key, value) => key in obj ? __defProp$3J(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3J = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3J.call(b, prop))
      __defNormalProp$3J(a, prop, b[prop]);
  if (__getOwnPropSymbols$3J)
    for (var prop of __getOwnPropSymbols$3J(b)) {
      if (__propIsEnum$3J.call(b, prop))
        __defNormalProp$3J(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3j = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3J.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3J)
    for (var prop of __getOwnPropSymbols$3J(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3J.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleArrowUp = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3j(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3J({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.278 6.834 7.5 4.61l2.222 2.223M7.5 4.611v5.778"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89"
        }
      )
    );
  }
);
CircleArrowUp.displayName = "CircleArrowUp";

var __defProp$3I = Object.defineProperty;
var __getOwnPropSymbols$3I = Object.getOwnPropertySymbols;
var __hasOwnProp$3I = Object.prototype.hasOwnProperty;
var __propIsEnum$3I = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3I = (obj, key, value) => key in obj ? __defProp$3I(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3I = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3I.call(b, prop))
      __defNormalProp$3I(a, prop, b[prop]);
  if (__getOwnPropSymbols$3I)
    for (var prop of __getOwnPropSymbols$3I(b)) {
      if (__propIsEnum$3I.call(b, prop))
        __defNormalProp$3I(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3i = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3I.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3I)
    for (var prop of __getOwnPropSymbols$3I(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3I.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleDottedLine = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3i(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3I({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.933 2.132a6.4 6.4 0 0 1 2.322-.956M1.17 6.283a6.4 6.4 0 0 1 .97-2.362M3.933 12.868c.691.46 1.477.791 2.322.956M1.17 8.717c.165.86.5 1.66.97 2.362M8.745 1.176c.845.165 1.63.496 2.322.956M12.86 3.921a6.4 6.4 0 0 1 .97 2.362M8.745 13.824a6.4 6.4 0 0 0 2.322-.956M12.86 11.079c.47-.703.805-1.502.97-2.362" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleDottedLine.displayName = "CircleDottedLine";

var __defProp$3H = Object.defineProperty;
var __getOwnPropSymbols$3H = Object.getOwnPropertySymbols;
var __hasOwnProp$3H = Object.prototype.hasOwnProperty;
var __propIsEnum$3H = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3H = (obj, key, value) => key in obj ? __defProp$3H(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3H = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3H.call(b, prop))
      __defNormalProp$3H(a, prop, b[prop]);
  if (__getOwnPropSymbols$3H)
    for (var prop of __getOwnPropSymbols$3H(b)) {
      if (__propIsEnum$3H.call(b, prop))
        __defNormalProp$3H(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3h = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3H.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3H)
    for (var prop of __getOwnPropSymbols$3H(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3H.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleFilledSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3h(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3H({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 4.444, fill: color })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleFilledSolid.displayName = "CircleFilledSolid";

var __defProp$3G = Object.defineProperty;
var __getOwnPropSymbols$3G = Object.getOwnPropertySymbols;
var __hasOwnProp$3G = Object.prototype.hasOwnProperty;
var __propIsEnum$3G = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3G = (obj, key, value) => key in obj ? __defProp$3G(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3G = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3G.call(b, prop))
      __defNormalProp$3G(a, prop, b[prop]);
  if (__getOwnPropSymbols$3G)
    for (var prop of __getOwnPropSymbols$3G(b)) {
      if (__propIsEnum$3G.call(b, prop))
        __defNormalProp$3G(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3g = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3G.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3G)
    for (var prop of __getOwnPropSymbols$3G(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3G.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleHalfSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3g(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3G({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { fill: color, d: "M7.5 11.944a4.444 4.444 0 0 0 0-8.888z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleHalfSolid.displayName = "CircleHalfSolid";

var __defProp$3F = Object.defineProperty;
var __getOwnPropSymbols$3F = Object.getOwnPropertySymbols;
var __hasOwnProp$3F = Object.prototype.hasOwnProperty;
var __propIsEnum$3F = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3F = (obj, key, value) => key in obj ? __defProp$3F(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3F = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3F.call(b, prop))
      __defNormalProp$3F(a, prop, b[prop]);
  if (__getOwnPropSymbols$3F)
    for (var prop of __getOwnPropSymbols$3F(b)) {
      if (__propIsEnum$3F.call(b, prop))
        __defNormalProp$3F(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3f = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3F.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3F)
    for (var prop of __getOwnPropSymbols$3F(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3F.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleMiniFilledSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3f(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3F({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 4.444, fill: color })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleMiniFilledSolid.displayName = "CircleMiniFilledSolid";

var __defProp$3E = Object.defineProperty;
var __getOwnPropSymbols$3E = Object.getOwnPropertySymbols;
var __hasOwnProp$3E = Object.prototype.hasOwnProperty;
var __propIsEnum$3E = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3E = (obj, key, value) => key in obj ? __defProp$3E(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3E = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3E.call(b, prop))
      __defNormalProp$3E(a, prop, b[prop]);
  if (__getOwnPropSymbols$3E)
    for (var prop of __getOwnPropSymbols$3E(b)) {
      if (__propIsEnum$3E.call(b, prop))
        __defNormalProp$3E(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3e = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3E.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3E)
    for (var prop of __getOwnPropSymbols$3E(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3E.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3e(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3E({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5 1.722a5.778 5.778 0 1 0 0 11.556 5.778 5.778 0 0 0 0-11.556M.389 7.5a7.111 7.111 0 1 1 14.222 0A7.111 7.111 0 0 1 .39 7.5",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleMiniSolid.displayName = "CircleMiniSolid";

var __defProp$3D = Object.defineProperty;
var __getOwnPropSymbols$3D = Object.getOwnPropertySymbols;
var __hasOwnProp$3D = Object.prototype.hasOwnProperty;
var __propIsEnum$3D = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3D = (obj, key, value) => key in obj ? __defProp$3D(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3D = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3D.call(b, prop))
      __defNormalProp$3D(a, prop, b[prop]);
  if (__getOwnPropSymbols$3D)
    for (var prop of __getOwnPropSymbols$3D(b)) {
      if (__propIsEnum$3D.call(b, prop))
        __defNormalProp$3D(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3d = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3D.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3D)
    for (var prop of __getOwnPropSymbols$3D(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3D.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleQuarterSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3d(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3D({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 7.5,
          cy: 7.5,
          r: 6.443,
          stroke: color,
          strokeWidth: 1.333
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { fill: color, d: "M11.944 7.5A4.444 4.444 0 0 0 7.5 3.056V7.5z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleQuarterSolid.displayName = "CircleQuarterSolid";

var __defProp$3C = Object.defineProperty;
var __getOwnPropSymbols$3C = Object.getOwnPropertySymbols;
var __hasOwnProp$3C = Object.prototype.hasOwnProperty;
var __propIsEnum$3C = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3C = (obj, key, value) => key in obj ? __defProp$3C(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3C = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3C.call(b, prop))
      __defNormalProp$3C(a, prop, b[prop]);
  if (__getOwnPropSymbols$3C)
    for (var prop of __getOwnPropSymbols$3C(b)) {
      if (__propIsEnum$3C.call(b, prop))
        __defNormalProp$3C(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3c = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3C.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3C)
    for (var prop of __getOwnPropSymbols$3C(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3C.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleSliders = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3c(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3C({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M8.167 5.5h2.666M4.167 5.5h1.777M5.944 3.944v3.111M9.056 9.5h1.777M4.167 9.5h2.666M9.056 7.944v3.111"
        }
      )
    );
  }
);
CircleSliders.displayName = "CircleSliders";

var __defProp$3B = Object.defineProperty;
var __getOwnPropSymbols$3B = Object.getOwnPropertySymbols;
var __hasOwnProp$3B = Object.prototype.hasOwnProperty;
var __propIsEnum$3B = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3B = (obj, key, value) => key in obj ? __defProp$3B(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3B = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3B.call(b, prop))
      __defNormalProp$3B(a, prop, b[prop]);
  if (__getOwnPropSymbols$3B)
    for (var prop of __getOwnPropSymbols$3B(b)) {
      if (__propIsEnum$3B.call(b, prop))
        __defNormalProp$3B(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3b = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3B.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3B)
    for (var prop of __getOwnPropSymbols$3B(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3B.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3b(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3B({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M7.5 1.722a5.778 5.778 0 1 0 0 11.556 5.778 5.778 0 0 0 0-11.556M.389 7.5a7.111 7.111 0 1 1 14.222 0A7.111 7.111 0 0 1 .39 7.5",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleSolid.displayName = "CircleSolid";

var __defProp$3A = Object.defineProperty;
var __getOwnPropSymbols$3A = Object.getOwnPropertySymbols;
var __hasOwnProp$3A = Object.prototype.hasOwnProperty;
var __propIsEnum$3A = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3A = (obj, key, value) => key in obj ? __defProp$3A(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3A = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3A.call(b, prop))
      __defNormalProp$3A(a, prop, b[prop]);
  if (__getOwnPropSymbols$3A)
    for (var prop of __getOwnPropSymbols$3A(b)) {
      if (__propIsEnum$3A.call(b, prop))
        __defNormalProp$3A(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3a = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3A.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3A)
    for (var prop of __getOwnPropSymbols$3A(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3A.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleStackSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3a(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3A({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.611c-3.092 0-6.222.916-6.222 2.667v8.444c0 1.751 3.13 2.667 6.222 2.667s6.222-.916 6.222-2.667V3.278C13.722 1.527 10.592.61 7.5.61M12.39 7.5c0 .388-1.713 1.333-4.889 1.333S2.611 7.888 2.611 7.5V4.985c1.2.632 3.048.96 4.889.96 1.84 0 3.69-.328 4.889-.96zM7.5 13.056c-3.176 0-4.889-.946-4.889-1.334V9.208c1.2.632 3.048.959 4.889.959 1.84 0 3.69-.327 4.889-.96v2.515c0 .388-1.713 1.334-4.889 1.334"
        }
      )
    );
  }
);
CircleStackSolid.displayName = "CircleStackSolid";

var __defProp$3z = Object.defineProperty;
var __getOwnPropSymbols$3z = Object.getOwnPropertySymbols;
var __hasOwnProp$3z = Object.prototype.hasOwnProperty;
var __propIsEnum$3z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3z = (obj, key, value) => key in obj ? __defProp$3z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3z.call(b, prop))
      __defNormalProp$3z(a, prop, b[prop]);
  if (__getOwnPropSymbols$3z)
    for (var prop of __getOwnPropSymbols$3z(b)) {
      if (__propIsEnum$3z.call(b, prop))
        __defNormalProp$3z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$39 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3z)
    for (var prop of __getOwnPropSymbols$3z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleStack = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$39(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.278c3.068 0 5.556-.896 5.556-2s-2.488-2-5.556-2-5.556.895-5.556 2 2.488 2 5.556 2"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 3.278v8.444c0 1.105 2.488 2 5.556 2s5.556-.895 5.556-2V3.278"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 7.5c0 1.105 2.488 2 5.556 2s5.556-.895 5.556-2"
        }
      )
    );
  }
);
CircleStack.displayName = "CircleStack";

var __defProp$3y = Object.defineProperty;
var __getOwnPropSymbols$3y = Object.getOwnPropertySymbols;
var __hasOwnProp$3y = Object.prototype.hasOwnProperty;
var __propIsEnum$3y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3y = (obj, key, value) => key in obj ? __defProp$3y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3y.call(b, prop))
      __defNormalProp$3y(a, prop, b[prop]);
  if (__getOwnPropSymbols$3y)
    for (var prop of __getOwnPropSymbols$3y(b)) {
      if (__propIsEnum$3y.call(b, prop))
        __defNormalProp$3y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$38 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3y)
    for (var prop of __getOwnPropSymbols$3y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CircleThreeQuartersSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$38(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M7.5 13.277a5.777 5.777 0 1 0 0-11.554 5.777 5.777 0 0 0 0 11.554m0 1.333A7.11 7.11 0 1 0 7.5.39a7.11 7.11 0 0 0 0 14.22",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 11.944a4.444 4.444 0 1 0 0-8.888V7.5H3.056c0 2.434 2.053 4.444 4.444 4.444" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CircleThreeQuartersSolid.displayName = "CircleThreeQuartersSolid";

var __defProp$3x = Object.defineProperty;
var __getOwnPropSymbols$3x = Object.getOwnPropertySymbols;
var __hasOwnProp$3x = Object.prototype.hasOwnProperty;
var __propIsEnum$3x = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3x = (obj, key, value) => key in obj ? __defProp$3x(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3x = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3x.call(b, prop))
      __defNormalProp$3x(a, prop, b[prop]);
  if (__getOwnPropSymbols$3x)
    for (var prop of __getOwnPropSymbols$3x(b)) {
      if (__propIsEnum$3x.call(b, prop))
        __defNormalProp$3x(a, prop, b[prop]);
    }
  return a;
};
var __objRest$37 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3x.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3x)
    for (var prop of __getOwnPropSymbols$3x(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3x.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ClockChangedSolidMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$37(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3x({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockChangedSolidMini.displayName = "ClockChangedSolidMini";

var __defProp$3w = Object.defineProperty;
var __getOwnPropSymbols$3w = Object.getOwnPropertySymbols;
var __hasOwnProp$3w = Object.prototype.hasOwnProperty;
var __propIsEnum$3w = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3w = (obj, key, value) => key in obj ? __defProp$3w(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3w = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3w.call(b, prop))
      __defNormalProp$3w(a, prop, b[prop]);
  if (__getOwnPropSymbols$3w)
    for (var prop of __getOwnPropSymbols$3w(b)) {
      if (__propIsEnum$3w.call(b, prop))
        __defNormalProp$3w(a, prop, b[prop]);
    }
  return a;
};
var __objRest$36 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3w.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3w)
    for (var prop of __getOwnPropSymbols$3w(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3w.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ClockSolidMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$36(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3w({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockSolidMini.displayName = "ClockSolidMini";

var __defProp$3v = Object.defineProperty;
var __getOwnPropSymbols$3v = Object.getOwnPropertySymbols;
var __hasOwnProp$3v = Object.prototype.hasOwnProperty;
var __propIsEnum$3v = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3v = (obj, key, value) => key in obj ? __defProp$3v(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3v = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3v.call(b, prop))
      __defNormalProp$3v(a, prop, b[prop]);
  if (__getOwnPropSymbols$3v)
    for (var prop of __getOwnPropSymbols$3v(b)) {
      if (__propIsEnum$3v.call(b, prop))
        __defNormalProp$3v(a, prop, b[prop]);
    }
  return a;
};
var __objRest$35 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3v.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3v)
    for (var prop of __getOwnPropSymbols$3v(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3v.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ClockSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$35(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3v({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.167 3.278a.66.66 0 0 1-.472-.196l-1.777-1.778a.667.667 0 0 1 .943-.943l1.778 1.778a.667.667 0 0 1-.472 1.139M.833 3.278a.667.667 0 0 1-.471-1.139L2.14.362a.667.667 0 1 1 .943.943L1.305 3.083c-.13.13-.3.196-.47.196zM12.342 11.399a6.2 6.2 0 0 0 1.38-3.899A6.23 6.23 0 0 0 7.5 1.278 6.23 6.23 0 0 0 1.278 7.5a6.2 6.2 0 0 0 1.38 3.899l-1.185 1.185a.667.667 0 0 0 .943.943L3.6 12.342a6.2 6.2 0 0 0 3.899 1.38 6.2 6.2 0 0 0 3.9-1.38l1.185 1.185a.665.665 0 0 0 .942 0 .667.667 0 0 0 0-.943zm-1.835-1.986a.665.665 0 0 1-.92.204L7.143 8.062a.67.67 0 0 1-.309-.563V4.61a.667.667 0 0 1 1.334 0v2.523l2.136 1.36c.31.197.4.609.203.92" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ClockSolid.displayName = "ClockSolid";

var __defProp$3u = Object.defineProperty;
var __getOwnPropSymbols$3u = Object.getOwnPropertySymbols;
var __hasOwnProp$3u = Object.prototype.hasOwnProperty;
var __propIsEnum$3u = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3u = (obj, key, value) => key in obj ? __defProp$3u(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3u = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3u.call(b, prop))
      __defNormalProp$3u(a, prop, b[prop]);
  if (__getOwnPropSymbols$3u)
    for (var prop of __getOwnPropSymbols$3u(b)) {
      if (__propIsEnum$3u.call(b, prop))
        __defNormalProp$3u(a, prop, b[prop]);
    }
  return a;
};
var __objRest$34 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3u.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3u)
    for (var prop of __getOwnPropSymbols$3u(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3u.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Clock = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$34(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3u({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.389.833 1.778 1.778M2.611.833.833 2.611M7.5 13.056a5.556 5.556 0 1 0 0-11.112 5.556 5.556 0 0 0 0 11.112M3.572 11.428l-1.628 1.627M11.428 11.428l1.627 1.627" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 4.611V7.5l2.444 1.556" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Clock.displayName = "Clock";

var __defProp$3t = Object.defineProperty;
var __getOwnPropSymbols$3t = Object.getOwnPropertySymbols;
var __hasOwnProp$3t = Object.prototype.hasOwnProperty;
var __propIsEnum$3t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3t = (obj, key, value) => key in obj ? __defProp$3t(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3t = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3t.call(b, prop))
      __defNormalProp$3t(a, prop, b[prop]);
  if (__getOwnPropSymbols$3t)
    for (var prop of __getOwnPropSymbols$3t(b)) {
      if (__propIsEnum$3t.call(b, prop))
        __defNormalProp$3t(a, prop, b[prop]);
    }
  return a;
};
var __objRest$33 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3t.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3t)
    for (var prop of __getOwnPropSymbols$3t(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3t.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CloneDashed = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$33(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.056 13.944H2.833a1.78 1.78 0 0 1-1.777-1.777V5.944c0-.981.795-1.777 1.777-1.777h6.223c.981 0 1.777.796 1.777 1.777v6.223c0 .981-.796 1.777-1.777 1.777M5.944 1.055a1.78 1.78 0 0 0-1.648 1.112M9.944 1.056H8.167M13.944 2.834c0-.983-.795-1.778-1.777-1.778M13.945 6.834V5.056M12.833 10.705a1.78 1.78 0 0 0 1.111-1.65"
        }
      )
    );
  }
);
CloneDashed.displayName = "CloneDashed";

var __defProp$3s = Object.defineProperty;
var __getOwnPropSymbols$3s = Object.getOwnPropertySymbols;
var __hasOwnProp$3s = Object.prototype.hasOwnProperty;
var __propIsEnum$3s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3s = (obj, key, value) => key in obj ? __defProp$3s(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3s = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3s.call(b, prop))
      __defNormalProp$3s(a, prop, b[prop]);
  if (__getOwnPropSymbols$3s)
    for (var prop of __getOwnPropSymbols$3s(b)) {
      if (__propIsEnum$3s.call(b, prop))
        __defNormalProp$3s(a, prop, b[prop]);
    }
  return a;
};
var __objRest$32 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3s.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3s)
    for (var prop of __getOwnPropSymbols$3s(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3s.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CloudArrowDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$32(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3s({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.167 10h.444c1.841 0 3.333-1.314 3.333-2.935 0-1.358-1.053-2.49-2.476-2.824C11.303 2.43 9.6 1 7.5 1c-2.209 0-4 1.577-4 3.522 0 .274.044.537.11.793-1.42.052-2.554 1.075-2.554 2.337C1.056 8.95 2.249 10 3.722 10h1.111M9.5 12.11l-2 2-2-2M7.5 14.11V6.554" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CloudArrowDown.displayName = "CloudArrowDown";

var __defProp$3r = Object.defineProperty;
var __getOwnPropSymbols$3r = Object.getOwnPropertySymbols;
var __hasOwnProp$3r = Object.prototype.hasOwnProperty;
var __propIsEnum$3r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3r = (obj, key, value) => key in obj ? __defProp$3r(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3r = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3r.call(b, prop))
      __defNormalProp$3r(a, prop, b[prop]);
  if (__getOwnPropSymbols$3r)
    for (var prop of __getOwnPropSymbols$3r(b)) {
      if (__propIsEnum$3r.call(b, prop))
        __defNormalProp$3r(a, prop, b[prop]);
    }
  return a;
};
var __objRest$31 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3r.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3r)
    for (var prop of __getOwnPropSymbols$3r(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3r.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CloudArrowUp = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$31(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.167 11.722h.444a3.333 3.333 0 0 0 3.333-3.333 3.324 3.324 0 0 0-2.476-3.208C11.303 3.124 9.6 1.5 7.5 1.5a4 4 0 0 0-4 4c0 .311.044.61.11.9a2.66 2.66 0 0 0 .112 5.322h1.111" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m5.5 8.833 2-2 2 2M7.5 6.833v7.2" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CloudArrowUp.displayName = "CloudArrowUp";

var __defProp$3q = Object.defineProperty;
var __getOwnPropSymbols$3q = Object.getOwnPropertySymbols;
var __hasOwnProp$3q = Object.prototype.hasOwnProperty;
var __propIsEnum$3q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3q = (obj, key, value) => key in obj ? __defProp$3q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3q.call(b, prop))
      __defNormalProp$3q(a, prop, b[prop]);
  if (__getOwnPropSymbols$3q)
    for (var prop of __getOwnPropSymbols$3q(b)) {
      if (__propIsEnum$3q.call(b, prop))
        __defNormalProp$3q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$30 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3q)
    for (var prop of __getOwnPropSymbols$3q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CogSixToothSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$30(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "m13.434 5.664-.806-.285a6 6 0 0 0-.318-.657c-.117-.202-.263-.378-.401-.56l.163-.874a1.77 1.77 0 0 0-.853-1.853l-.313-.18a1.77 1.77 0 0 0-2.03.187l-.648.555a5.5 5.5 0 0 0-1.443-.009l-.647-.554a1.77 1.77 0 0 0-2.03-.187l-.313.18a1.77 1.77 0 0 0-.852 1.853l.154.829c-.29.376-.51.8-.697 1.243l-.834.295A1.77 1.77 0 0 0 .389 7.312v.36c0 .747.473 1.416 1.177 1.664l.805.285c.093.223.195.443.318.656.117.203.263.379.402.562l-.163.873a1.77 1.77 0 0 0 .853 1.853l.313.18a1.76 1.76 0 0 0 2.03-.187l.644-.551q.37.05.74.05.354 0 .706-.046l.648.555a1.77 1.77 0 0 0 2.03.187l.313-.18c.647-.373.99-1.117.852-1.853l-.154-.83c.29-.376.51-.799.696-1.242l.835-.295a1.77 1.77 0 0 0 1.177-1.665v-.36c0-.747-.473-1.416-1.177-1.664M7.5 10.167a2.666 2.666 0 1 1 0-5.333 2.666 2.666 0 0 1 0 5.333"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CogSixToothSolid.displayName = "CogSixToothSolid";

var __defProp$3p = Object.defineProperty;
var __getOwnPropSymbols$3p = Object.getOwnPropertySymbols;
var __hasOwnProp$3p = Object.prototype.hasOwnProperty;
var __propIsEnum$3p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3p = (obj, key, value) => key in obj ? __defProp$3p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3p.call(b, prop))
      __defNormalProp$3p(a, prop, b[prop]);
  if (__getOwnPropSymbols$3p)
    for (var prop of __getOwnPropSymbols$3p(b)) {
      if (__propIsEnum$3p.call(b, prop))
        __defNormalProp$3p(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2$ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3p.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3p)
    for (var prop of __getOwnPropSymbols$3p(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3p.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CogSixTooth = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2$(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3p({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.989 5.97-.826-.292a5 5 0 0 0-.323-.685 5 5 0 0 0-.43-.621l.16-.86a1.43 1.43 0 0 0-.692-1.503l-.312-.18a1.43 1.43 0 0 0-1.647.152l-.663.566a5 5 0 0 0-1.513 0L6.08 1.98a1.43 1.43 0 0 0-1.647-.152l-.312.18a1.43 1.43 0 0 0-.691 1.503l.16.857c-.32.4-.574.841-.758 1.31l-.82.29a1.43 1.43 0 0 0-.956 1.35v.36c0 .608.383 1.15.955 1.35l.826.292c.09.232.194.462.323.684.128.222.275.427.43.622l-.16.86c-.111.597.166 1.2.691 1.503l.312.18a1.43 1.43 0 0 0 1.647-.152l.663-.567a5 5 0 0 0 1.512 0l.663.568a1.43 1.43 0 0 0 1.647.152l.312-.18c.526-.304.803-.906.691-1.502l-.16-.86c.32-.398.575-.84.757-1.308l.822-.29c.572-.202.956-.743.956-1.35v-.36c0-.608-.383-1.149-.956-1.35z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CogSixTooth.displayName = "CogSixTooth";

var __defProp$3o = Object.defineProperty;
var __getOwnPropSymbols$3o = Object.getOwnPropertySymbols;
var __hasOwnProp$3o = Object.prototype.hasOwnProperty;
var __propIsEnum$3o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3o = (obj, key, value) => key in obj ? __defProp$3o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3o.call(b, prop))
      __defNormalProp$3o(a, prop, b[prop]);
  if (__getOwnPropSymbols$3o)
    for (var prop of __getOwnPropSymbols$3o(b)) {
      if (__propIsEnum$3o.call(b, prop))
        __defNormalProp$3o(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2_ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3o.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3o)
    for (var prop of __getOwnPropSymbols$3o(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3o.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CommandLineSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2_(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3o({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M11.278 1.278H3.722a2.446 2.446 0 0 0-2.444 2.444v7.556a2.446 2.446 0 0 0 2.444 2.444h7.556a2.447 2.447 0 0 0 2.444-2.444V3.722a2.446 2.446 0 0 0-2.444-2.444M5.082 10.86a.665.665 0 1 1-.942-.943l1.751-1.751L4.14 6.415a.667.667 0 1 1 .943-.943l2.222 2.222c.26.26.26.683 0 .943l-2.222 2.222zm5.307.196H8.167a.667.667 0 0 1 0-1.334h2.222a.667.667 0 0 1 0 1.334"
        }
      )
    );
  }
);
CommandLineSolid.displayName = "CommandLineSolid";

var __defProp$3n = Object.defineProperty;
var __getOwnPropSymbols$3n = Object.getOwnPropertySymbols;
var __hasOwnProp$3n = Object.prototype.hasOwnProperty;
var __propIsEnum$3n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3n = (obj, key, value) => key in obj ? __defProp$3n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3n.call(b, prop))
      __defNormalProp$3n(a, prop, b[prop]);
  if (__getOwnPropSymbols$3n)
    for (var prop of __getOwnPropSymbols$3n(b)) {
      if (__propIsEnum$3n.call(b, prop))
        __defNormalProp$3n(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2Z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3n.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3n)
    for (var prop of __getOwnPropSymbols$3n(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3n.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CommandLine = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2Z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3n({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.278 1.944H3.722c-.982 0-1.778.796-1.778 1.778v7.556c0 .981.796 1.777 1.778 1.777h7.556c.982 0 1.778-.796 1.778-1.777V3.722c0-.982-.796-1.778-1.778-1.778M8.167 10.389h2.222" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m4.611 10.389 2.222-2.222-2.222-2.223" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CommandLine.displayName = "CommandLine";

var __defProp$3m = Object.defineProperty;
var __getOwnPropSymbols$3m = Object.getOwnPropertySymbols;
var __hasOwnProp$3m = Object.prototype.hasOwnProperty;
var __propIsEnum$3m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3m = (obj, key, value) => key in obj ? __defProp$3m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3m.call(b, prop))
      __defNormalProp$3m(a, prop, b[prop]);
  if (__getOwnPropSymbols$3m)
    for (var prop of __getOwnPropSymbols$3m(b)) {
      if (__propIsEnum$3m.call(b, prop))
        __defNormalProp$3m(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2Y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3m)
    for (var prop of __getOwnPropSymbols$3m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ComponentSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2Y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3m({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          fill: color,
          fillRule: "evenodd",
          clipPath: "url(#a)",
          clipRule: "evenodd"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.815 4.766a.65.65 0 0 1 .92 0L6.008 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.919 0L.54 7.96a.65.65 0 0 1 0-.92zM7.04.54a.65.65 0 0 1 .92 0l2.274 2.276a.65.65 0 0 1 0 .919L7.96 6.01a.65.65 0 0 1-.919 0L4.765 3.735a.65.65 0 0 1 0-.92zM11.265 4.766a.65.65 0 0 1 .92 0L14.46 7.04a.65.65 0 0 1 0 .92l-2.275 2.275a.65.65 0 0 1-.92 0L8.99 7.96a.65.65 0 0 1 0-.92zM7.04 8.99a.65.65 0 0 1 .92 0l2.274 2.275a.65.65 0 0 1 0 .92L7.96 14.459a.65.65 0 0 1-.919 0l-2.275-2.274a.65.65 0 0 1 0-.92z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComponentSolid.displayName = "ComponentSolid";

var __defProp$3l = Object.defineProperty;
var __getOwnPropSymbols$3l = Object.getOwnPropertySymbols;
var __hasOwnProp$3l = Object.prototype.hasOwnProperty;
var __propIsEnum$3l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3l = (obj, key, value) => key in obj ? __defProp$3l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3l.call(b, prop))
      __defNormalProp$3l(a, prop, b[prop]);
  if (__getOwnPropSymbols$3l)
    for (var prop of __getOwnPropSymbols$3l(b)) {
      if (__propIsEnum$3l.call(b, prop))
        __defNormalProp$3l(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2X = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3l.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3l)
    for (var prop of __getOwnPropSymbols$3l(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3l.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Component = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2X(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3l({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.275 5.225 5.55 7.5 3.275 9.775 1 7.5zM7.5 1l2.275 2.275L7.5 5.55 5.225 3.275zM11.725 5.225 14 7.5l-2.275 2.275L9.45 7.5zM7.5 9.45l2.275 2.275L7.5 14l-2.275-2.275z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Component.displayName = "Component";

var __defProp$3k = Object.defineProperty;
var __getOwnPropSymbols$3k = Object.getOwnPropertySymbols;
var __hasOwnProp$3k = Object.prototype.hasOwnProperty;
var __propIsEnum$3k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3k = (obj, key, value) => key in obj ? __defProp$3k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3k.call(b, prop))
      __defNormalProp$3k(a, prop, b[prop]);
  if (__getOwnPropSymbols$3k)
    for (var prop of __getOwnPropSymbols$3k(b)) {
      if (__propIsEnum$3k.call(b, prop))
        __defNormalProp$3k(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2W = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3k.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3k)
    for (var prop of __getOwnPropSymbols$3k(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3k.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ComputerDesktopSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2W(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3k({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.59 13.309a10.3 10.3 0 0 0-2.423-.448v-1.583a.667.667 0 0 0-1.334 0v1.583c-.82.053-1.634.2-2.423.448a.666.666 0 1 0 .401 1.272 9 9 0 0 1 5.377 0q.1.03.2.031a.667.667 0 0 0 .2-1.302z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 11.945H2.833A2.446 2.446 0 0 1 .39 9.5V3.722a2.446 2.446 0 0 1 2.444-2.444h9.334a2.446 2.446 0 0 1 2.444 2.444V9.5a2.446 2.446 0 0 1-2.444 2.444M2.833 2.61c-.612 0-1.11.499-1.11 1.111V9.5c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.111V3.722c0-.612-.498-1.11-1.11-1.11z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComputerDesktopSolid.displayName = "ComputerDesktopSolid";

var __defProp$3j = Object.defineProperty;
var __getOwnPropSymbols$3j = Object.getOwnPropertySymbols;
var __hasOwnProp$3j = Object.prototype.hasOwnProperty;
var __propIsEnum$3j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3j = (obj, key, value) => key in obj ? __defProp$3j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3j.call(b, prop))
      __defNormalProp$3j(a, prop, b[prop]);
  if (__getOwnPropSymbols$3j)
    for (var prop of __getOwnPropSymbols$3j(b)) {
      if (__propIsEnum$3j.call(b, prop))
        __defNormalProp$3j(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2V = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3j.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3j)
    for (var prop of __getOwnPropSymbols$3j(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3j.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ComputerDesktop = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2V(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3j({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.333,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.611 13.944a9.6 9.6 0 0 1 5.778 0M7.5 11.278V13.5M12.167 1.944H2.833c-.982 0-1.777.796-1.777 1.778V9.5c0 .982.795 1.778 1.777 1.778h9.334c.982 0 1.777-.796 1.777-1.778V3.722c0-.982-.796-1.778-1.777-1.778" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ComputerDesktop.displayName = "ComputerDesktop";

var __defProp$3i = Object.defineProperty;
var __getOwnPropSymbols$3i = Object.getOwnPropertySymbols;
var __hasOwnProp$3i = Object.prototype.hasOwnProperty;
var __propIsEnum$3i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3i = (obj, key, value) => key in obj ? __defProp$3i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3i.call(b, prop))
      __defNormalProp$3i(a, prop, b[prop]);
  if (__getOwnPropSymbols$3i)
    for (var prop of __getOwnPropSymbols$3i(b)) {
      if (__propIsEnum$3i.call(b, prop))
        __defNormalProp$3i(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2U = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3i.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3i)
    for (var prop of __getOwnPropSymbols$3i(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3i.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CreditCardSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2U(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.611 4.611a2.446 2.446 0 0 0-2.444-2.444H2.833A2.446 2.446 0 0 0 .39 4.61v.667H14.61zM.389 10.389a2.446 2.446 0 0 0 2.444 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V6.61H.39zm10.444-1.556h.89a.667.667 0 0 1 0 1.334h-.89a.667.667 0 0 1 0-1.334m-7.555 0h2.666a.667.667 0 0 1 0 1.334H3.278a.667.667 0 0 1 0-1.334" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CreditCardSolid.displayName = "CreditCardSolid";

var __defProp$3h = Object.defineProperty;
var __getOwnPropSymbols$3h = Object.getOwnPropertySymbols;
var __hasOwnProp$3h = Object.prototype.hasOwnProperty;
var __propIsEnum$3h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3h = (obj, key, value) => key in obj ? __defProp$3h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3h.call(b, prop))
      __defNormalProp$3h(a, prop, b[prop]);
  if (__getOwnPropSymbols$3h)
    for (var prop of __getOwnPropSymbols$3h(b)) {
      if (__propIsEnum$3h.call(b, prop))
        __defNormalProp$3h(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2T = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3h)
    for (var prop of __getOwnPropSymbols$3h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CreditCard = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2T(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3h({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.056 5.944h12.888M2.833 12.167h9.334c.982 0 1.777-.796 1.777-1.778V4.61c0-.982-.796-1.778-1.777-1.778H2.833c-.981 0-1.777.796-1.777 1.778v5.778c0 .982.796 1.778 1.777 1.778M3.278 9.5h2.666M10.833 9.5h.89" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CreditCard.displayName = "CreditCard";

var __defProp$3g = Object.defineProperty;
var __getOwnPropSymbols$3g = Object.getOwnPropertySymbols;
var __hasOwnProp$3g = Object.prototype.hasOwnProperty;
var __propIsEnum$3g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3g = (obj, key, value) => key in obj ? __defProp$3g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3g.call(b, prop))
      __defNormalProp$3g(a, prop, b[prop]);
  if (__getOwnPropSymbols$3g)
    for (var prop of __getOwnPropSymbols$3g(b)) {
      if (__propIsEnum$3g.call(b, prop))
        __defNormalProp$3g(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2S = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3g)
    for (var prop of __getOwnPropSymbols$3g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CubeSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2S(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M13.4 4.095s-.001-.01-.004-.015q-.006-.006-.012-.013c-.21-.359-.509-.666-.879-.88L8.727.996a2.45 2.45 0 0 0-2.454 0L2.496 3.187a2.44 2.44 0 0 0-.88.88q-.005.006-.012.013-.003.008-.004.015a2.44 2.44 0 0 0-.322 1.207v4.396c0 .869.466 1.678 1.218 2.115l3.777 2.191c.376.217.795.325 1.215.327l.012.003q.006-.001.013-.003c.42-.002.84-.11 1.214-.327l3.778-2.191a2.45 2.45 0 0 0 1.217-2.114V5.302c0-.43-.115-.845-.322-1.207M3.165 10.66a1.12 1.12 0 0 1-.554-.962V5.435l4.222 2.449v4.902zm8.67 0-3.668 2.128V7.885l4.222-2.449v4.263c0 .395-.212.763-.554.961"
        }
      )
    );
  }
);
CubeSolid.displayName = "CubeSolid";

var __defProp$3f = Object.defineProperty;
var __getOwnPropSymbols$3f = Object.getOwnPropertySymbols;
var __hasOwnProp$3f = Object.prototype.hasOwnProperty;
var __propIsEnum$3f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3f = (obj, key, value) => key in obj ? __defProp$3f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3f.call(b, prop))
      __defNormalProp$3f(a, prop, b[prop]);
  if (__getOwnPropSymbols$3f)
    for (var prop of __getOwnPropSymbols$3f(b)) {
      if (__propIsEnum$3f.call(b, prop))
        __defNormalProp$3f(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2R = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3f)
    for (var prop of __getOwnPropSymbols$3f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CurrencyDollarSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2R(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m1.871 9.994c-.313.32-.736.538-1.204.645v.25a.667.667 0 0 1-1.334 0v-.247c-.876-.183-1.49-.72-1.748-1.568a.666.666 0 1 1 1.275-.389c.106.346.328.699 1.175.699.355 0 .686-.121.883-.322a.66.66 0 0 0 .194-.49c-.007-.288-.11-.612-1.237-.814-1.758-.314-2.114-1.335-2.17-1.916-.055-.575.104-1.086.46-1.478.318-.349.753-.545 1.17-.653v-.378a.667.667 0 0 1 1.333 0v.358A2.23 2.23 0 0 1 9.73 5.42a.667.667 0 0 1-1.228.518c-.064-.15-.258-.61-.967-.61-.246 0-.683.1-.884.321-.063.07-.145.193-.12.454.013.136.053.549 1.077.732 1.522.273 2.309.977 2.336 2.093a2 2 0 0 1-.573 1.455"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CurrencyDollarSolid.displayName = "CurrencyDollarSolid";

var __defProp$3e = Object.defineProperty;
var __getOwnPropSymbols$3e = Object.getOwnPropertySymbols;
var __hasOwnProp$3e = Object.prototype.hasOwnProperty;
var __propIsEnum$3e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3e = (obj, key, value) => key in obj ? __defProp$3e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3e.call(b, prop))
      __defNormalProp$3e(a, prop, b[prop]);
  if (__getOwnPropSymbols$3e)
    for (var prop of __getOwnPropSymbols$3e(b)) {
      if (__propIsEnum$3e.call(b, prop))
        __defNormalProp$3e(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2Q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3e)
    for (var prop of __getOwnPropSymbols$3e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CurrencyDollar = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2Q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3e({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.115 5.679c-.35-.83-1.051-1.017-1.581-1.017-.493 0-1.787.262-1.667 1.504.084.872.906 1.196 1.624 1.324s1.761.402 1.787 1.454c.021.888-.778 1.495-1.744 1.495-.923 0-1.565-.359-1.812-1.17M7.5 3.722v.94M7.5 10.44v.838" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CurrencyDollar.displayName = "CurrencyDollar";

var __defProp$3d = Object.defineProperty;
var __getOwnPropSymbols$3d = Object.getOwnPropertySymbols;
var __hasOwnProp$3d = Object.prototype.hasOwnProperty;
var __propIsEnum$3d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3d = (obj, key, value) => key in obj ? __defProp$3d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3d.call(b, prop))
      __defNormalProp$3d(a, prop, b[prop]);
  if (__getOwnPropSymbols$3d)
    for (var prop of __getOwnPropSymbols$3d(b)) {
      if (__propIsEnum$3d.call(b, prop))
        __defNormalProp$3d(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2P = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3d.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3d)
    for (var prop of __getOwnPropSymbols$3d(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3d.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const CursorArrowRays = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2P(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3d({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m6.696 6.414 6.5 2.23c.198.068.202.346.007.419l-2.915 1.096a.22.22 0 0 0-.13.13l-1.095 2.914a.222.222 0 0 1-.418-.006L6.414 6.696a.223.223 0 0 1 .282-.283zM10.194 10.194l3.744 3.744M6.389 1.056v1.777M10.16 2.617 8.904 3.875M2.617 10.16l1.258-1.257M1.056 6.389h1.777M2.617 2.617l1.258 1.258" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
CursorArrowRays.displayName = "CursorArrowRays";

var __defProp$3c = Object.defineProperty;
var __getOwnPropSymbols$3c = Object.getOwnPropertySymbols;
var __hasOwnProp$3c = Object.prototype.hasOwnProperty;
var __propIsEnum$3c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3c = (obj, key, value) => key in obj ? __defProp$3c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3c.call(b, prop))
      __defNormalProp$3c(a, prop, b[prop]);
  if (__getOwnPropSymbols$3c)
    for (var prop of __getOwnPropSymbols$3c(b)) {
      if (__propIsEnum$3c.call(b, prop))
        __defNormalProp$3c(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2O = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3c)
    for (var prop of __getOwnPropSymbols$3c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DecisionProcess = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2O(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3c({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 1.875H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M5.625 10.625H2.292a.833.833 0 0 0-.834.833v.834c0 .46.373.833.834.833h3.333c.46 0 .833-.373.833-.833v-.834a.833.833 0 0 0-.833-.833M3.958 6.459v2.083M8.542 3.125h1.666c.46 0 .834.373.834.833v1.667M8.542 11.875h1.666c.46 0 .834-.373.834-.833V9.375M11.042 5.625 14.167 7.5l-3.125 1.875L7.917 7.5z"
        }
      )
    );
  }
);
DecisionProcess.displayName = "DecisionProcess";

var __defProp$3b = Object.defineProperty;
var __getOwnPropSymbols$3b = Object.getOwnPropertySymbols;
var __hasOwnProp$3b = Object.prototype.hasOwnProperty;
var __propIsEnum$3b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3b = (obj, key, value) => key in obj ? __defProp$3b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3b.call(b, prop))
      __defNormalProp$3b(a, prop, b[prop]);
  if (__getOwnPropSymbols$3b)
    for (var prop of __getOwnPropSymbols$3b(b)) {
      if (__propIsEnum$3b.call(b, prop))
        __defNormalProp$3b(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2N = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3b)
    for (var prop of __getOwnPropSymbols$3b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DescendingSorting = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2N(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3b({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.611 10.833 2.222 2.223 2.223-2.223M10.833 13.056v-8M1.944 8.167h5.778M1.944 5.056h5.778M1.944 1.944h8.89"
        }
      )
    );
  }
);
DescendingSorting.displayName = "DescendingSorting";

var __defProp$3a = Object.defineProperty;
var __getOwnPropSymbols$3a = Object.getOwnPropertySymbols;
var __hasOwnProp$3a = Object.prototype.hasOwnProperty;
var __propIsEnum$3a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3a = (obj, key, value) => key in obj ? __defProp$3a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3a.call(b, prop))
      __defNormalProp$3a(a, prop, b[prop]);
  if (__getOwnPropSymbols$3a)
    for (var prop of __getOwnPropSymbols$3a(b)) {
      if (__propIsEnum$3a.call(b, prop))
        __defNormalProp$3a(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2M = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3a.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3a)
    for (var prop of __getOwnPropSymbols$3a(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3a.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Directions = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2M(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.056v12.889M4.611 13.944h5.778M7.5 5.056H2.952a.9.9 0 0 1-.594-.229L1.123 3.716a.89.89 0 0 1 0-1.322l1.235-1.11a.9.9 0 0 1 .594-.23H7.5M9.718 9.056h2.325c.22 0 .431-.081.595-.229l1.234-1.111a.89.89 0 0 0 0-1.322l-1.234-1.11a.9.9 0 0 0-.595-.23H9.718"
        }
      )
    );
  }
);
Directions.displayName = "Directions";

var __defProp$39 = Object.defineProperty;
var __getOwnPropSymbols$39 = Object.getOwnPropertySymbols;
var __hasOwnProp$39 = Object.prototype.hasOwnProperty;
var __propIsEnum$39 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$39 = (obj, key, value) => key in obj ? __defProp$39(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$39 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$39.call(b, prop))
      __defNormalProp$39(a, prop, b[prop]);
  if (__getOwnPropSymbols$39)
    for (var prop of __getOwnPropSymbols$39(b)) {
      if (__propIsEnum$39.call(b, prop))
        __defNormalProp$39(a, prop, b[prop]);
    }
  return a;
};
const Discord = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$39({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#5865F2",
          d: "M9.996 9.58c-.739 0-1.348-.678-1.348-1.511 0-.834.597-1.512 1.348-1.512s1.36.685 1.348 1.512c-.011.826-.59 1.511-1.348 1.511m-4.984 0c-.739 0-1.348-.678-1.348-1.511 0-.834.597-1.512 1.348-1.512s1.36.685 1.349 1.512c-.012.826-.598 1.511-1.349 1.511m7.684-6.85a12.4 12.4 0 0 0-3.052-.946.05.05 0 0 0-.05.023q-.21.38-.38.78a11.4 11.4 0 0 0-3.428 0 8 8 0 0 0-.386-.78.05.05 0 0 0-.05-.023c-1.054.181-2.08.5-3.052.946a.04.04 0 0 0-.02.017C.334 5.652-.199 8.486.062 11.287a.05.05 0 0 0 .02.034 12.4 12.4 0 0 0 3.744 1.894.05.05 0 0 0 .053-.017q.434-.591.766-1.247a.05.05 0 0 0-.027-.065 8 8 0 0 1-1.17-.558.05.05 0 0 1-.025-.04.05.05 0 0 1 .02-.042c.083-.06.158-.12.233-.182a.05.05 0 0 1 .048-.007c2.454 1.12 5.112 1.12 7.537 0a.05.05 0 0 1 .05.006 5 5 0 0 0 .233.182.05.05 0 0 1 .02.042.05.05 0 0 1-.024.04 7.7 7.7 0 0 1-1.166.555.1.1 0 0 0-.017.01.05.05 0 0 0-.014.037q0 .01.005.019.337.651.765 1.246a.047.047 0 0 0 .053.018 12.4 12.4 0 0 0 3.75-1.893.05.05 0 0 0 .02-.034c.312-3.235-.524-6.046-2.217-8.54a.04.04 0 0 0-.023-.015"
        }
      )
    );
  }
);
Discord.displayName = "Discord";

var __defProp$38 = Object.defineProperty;
var __getOwnPropSymbols$38 = Object.getOwnPropertySymbols;
var __hasOwnProp$38 = Object.prototype.hasOwnProperty;
var __propIsEnum$38 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$38 = (obj, key, value) => key in obj ? __defProp$38(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$38 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$38.call(b, prop))
      __defNormalProp$38(a, prop, b[prop]);
  if (__getOwnPropSymbols$38)
    for (var prop of __getOwnPropSymbols$38(b)) {
      if (__propIsEnum$38.call(b, prop))
        __defNormalProp$38(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2L = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$38.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$38)
    for (var prop of __getOwnPropSymbols$38(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$38.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DocumentSeries = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2L(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$38({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.389 11.5H3.5a1.777 1.777 0 0 1-1.778-1.778V2.611c0-.982.796-1.778 1.778-1.778h4.444c.983 0 1.778.796 1.778 1.778v.935"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.389 12.389V5.278c0-.983.795-1.778 1.778-1.778h3.632c.235 0 .462.093.628.26l2.59 2.59c.168.168.26.393.26.629v5.41c0 .982-.795 1.777-1.777 1.777H6.167a1.777 1.777 0 0 1-1.778-1.777"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.278 7.055H10.61a.89.89 0 0 1-.889-.888V3.5"
        }
      )
    );
  }
);
DocumentSeries.displayName = "DocumentSeries";

var __defProp$37 = Object.defineProperty;
var __getOwnPropSymbols$37 = Object.getOwnPropertySymbols;
var __hasOwnProp$37 = Object.prototype.hasOwnProperty;
var __propIsEnum$37 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$37 = (obj, key, value) => key in obj ? __defProp$37(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$37 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$37.call(b, prop))
      __defNormalProp$37(a, prop, b[prop]);
  if (__getOwnPropSymbols$37)
    for (var prop of __getOwnPropSymbols$37(b)) {
      if (__propIsEnum$37.call(b, prop))
        __defNormalProp$37(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2K = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$37.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$37)
    for (var prop of __getOwnPropSymbols$37(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$37.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DocumentTextSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2K(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$37({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M13.266 4.324 9.787.844a1.55 1.55 0 0 0-1.1-.455H3.723a2.446 2.446 0 0 0-2.444 2.444v9.334a2.446 2.446 0 0 0 2.444 2.444h7.556a2.446 2.446 0 0 0 2.444-2.444V5.424c0-.416-.162-.807-.456-1.1m-8.655.51H6.39a.667.667 0 0 1 0 1.333H4.61a.667.667 0 0 1 0-1.334M10.39 11.5H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m0-2.667H4.61a.667.667 0 0 1 0-1.333h5.778a.667.667 0 0 1 0 1.333m1.94-3.555H9.721a.89.89 0 0 1-.889-.89V1.793l.012-.004 3.486 3.485z"
        }
      )
    );
  }
);
DocumentTextSolid.displayName = "DocumentTextSolid";

var __defProp$36 = Object.defineProperty;
var __getOwnPropSymbols$36 = Object.getOwnPropertySymbols;
var __hasOwnProp$36 = Object.prototype.hasOwnProperty;
var __propIsEnum$36 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$36 = (obj, key, value) => key in obj ? __defProp$36(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$36 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$36.call(b, prop))
      __defNormalProp$36(a, prop, b[prop]);
  if (__getOwnPropSymbols$36)
    for (var prop of __getOwnPropSymbols$36(b)) {
      if (__propIsEnum$36.call(b, prop))
        __defNormalProp$36(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2J = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$36.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$36)
    for (var prop of __getOwnPropSymbols$36(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$36.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DocumentText = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2J(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$36({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.611 5.5H6.39M4.611 8.167h5.778M4.611 10.833h5.778M1.944 12.167V2.833c0-.982.796-1.777 1.778-1.777h4.966c.235 0 .462.093.628.26l3.48 3.48c.166.166.26.392.26.628v6.743c0 .982-.796 1.778-1.778 1.778H3.722a1.777 1.777 0 0 1-1.778-1.778"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.976 5.056H9.944a.89.89 0 0 1-.888-.89v-3.02"
        }
      )
    );
  }
);
DocumentText.displayName = "DocumentText";

var __defProp$35 = Object.defineProperty;
var __getOwnPropSymbols$35 = Object.getOwnPropertySymbols;
var __hasOwnProp$35 = Object.prototype.hasOwnProperty;
var __propIsEnum$35 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$35 = (obj, key, value) => key in obj ? __defProp$35(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$35 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$35.call(b, prop))
      __defNormalProp$35(a, prop, b[prop]);
  if (__getOwnPropSymbols$35)
    for (var prop of __getOwnPropSymbols$35(b)) {
      if (__propIsEnum$35.call(b, prop))
        __defNormalProp$35(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2I = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$35.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$35)
    for (var prop of __getOwnPropSymbols$35(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$35.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const DotsSix = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2I(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$35({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M4.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M4.306 2.833a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M4.306 12.167a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 2.833a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M8.306 12.167a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
DotsSix.displayName = "DotsSix";

var __defProp$34 = Object.defineProperty;
var __getOwnPropSymbols$34 = Object.getOwnPropertySymbols;
var __hasOwnProp$34 = Object.prototype.hasOwnProperty;
var __propIsEnum$34 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$34 = (obj, key, value) => key in obj ? __defProp$34(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$34 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$34.call(b, prop))
      __defNormalProp$34(a, prop, b[prop]);
  if (__getOwnPropSymbols$34)
    for (var prop of __getOwnPropSymbols$34(b)) {
      if (__propIsEnum$34.call(b, prop))
        __defNormalProp$34(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2H = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$34.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$34)
    for (var prop of __getOwnPropSymbols$34(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$34.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseBlueSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2H(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$34({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#60A5FA" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2048"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2048"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2048",
            result: "effect2_dropShadow_2733_2048"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2048",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseBlueSolid.displayName = "EllipseBlueSolid";

var __defProp$33 = Object.defineProperty;
var __getOwnPropSymbols$33 = Object.getOwnPropertySymbols;
var __hasOwnProp$33 = Object.prototype.hasOwnProperty;
var __propIsEnum$33 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$33 = (obj, key, value) => key in obj ? __defProp$33(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$33 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$33.call(b, prop))
      __defNormalProp$33(a, prop, b[prop]);
  if (__getOwnPropSymbols$33)
    for (var prop of __getOwnPropSymbols$33(b)) {
      if (__propIsEnum$33.call(b, prop))
        __defNormalProp$33(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2G = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$33.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$33)
    for (var prop of __getOwnPropSymbols$33(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$33.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseGreenSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2G(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$33({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#10B981" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2026"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2026"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2026",
            result: "effect2_dropShadow_2733_2026"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2026",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseGreenSolid.displayName = "EllipseGreenSolid";

var __defProp$32 = Object.defineProperty;
var __getOwnPropSymbols$32 = Object.getOwnPropertySymbols;
var __hasOwnProp$32 = Object.prototype.hasOwnProperty;
var __propIsEnum$32 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$32 = (obj, key, value) => key in obj ? __defProp$32(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$32 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$32.call(b, prop))
      __defNormalProp$32(a, prop, b[prop]);
  if (__getOwnPropSymbols$32)
    for (var prop of __getOwnPropSymbols$32(b)) {
      if (__propIsEnum$32.call(b, prop))
        __defNormalProp$32(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2F = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$32.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$32)
    for (var prop of __getOwnPropSymbols$32(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$32.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseGreySolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2F(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$32({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#A1A1AA" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2049"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2049"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2049",
            result: "effect2_dropShadow_2733_2049"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2049",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseGreySolid.displayName = "EllipseGreySolid";

var __defProp$31 = Object.defineProperty;
var __getOwnPropSymbols$31 = Object.getOwnPropertySymbols;
var __hasOwnProp$31 = Object.prototype.hasOwnProperty;
var __propIsEnum$31 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$31 = (obj, key, value) => key in obj ? __defProp$31(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$31 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$31.call(b, prop))
      __defNormalProp$31(a, prop, b[prop]);
  if (__getOwnPropSymbols$31)
    for (var prop of __getOwnPropSymbols$31(b)) {
      if (__propIsEnum$31.call(b, prop))
        __defNormalProp$31(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2E = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$31.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$31)
    for (var prop of __getOwnPropSymbols$31(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$31.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2E(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$31({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 2, fill: color })
    );
  }
);
EllipseMiniSolid.displayName = "EllipseMiniSolid";

var __defProp$30 = Object.defineProperty;
var __getOwnPropSymbols$30 = Object.getOwnPropertySymbols;
var __hasOwnProp$30 = Object.prototype.hasOwnProperty;
var __propIsEnum$30 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$30 = (obj, key, value) => key in obj ? __defProp$30(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$30 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$30.call(b, prop))
      __defNormalProp$30(a, prop, b[prop]);
  if (__getOwnPropSymbols$30)
    for (var prop of __getOwnPropSymbols$30(b)) {
      if (__propIsEnum$30.call(b, prop))
        __defNormalProp$30(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2D = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$30.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$30)
    for (var prop of __getOwnPropSymbols$30(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$30.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseOrangeSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2D(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$30({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#F97316" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2027"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2027"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2027",
            result: "effect2_dropShadow_2733_2027"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2027",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseOrangeSolid.displayName = "EllipseOrangeSolid";

var __defProp$2$ = Object.defineProperty;
var __getOwnPropSymbols$2$ = Object.getOwnPropertySymbols;
var __hasOwnProp$2$ = Object.prototype.hasOwnProperty;
var __propIsEnum$2$ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2$ = (obj, key, value) => key in obj ? __defProp$2$(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2$ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2$.call(b, prop))
      __defNormalProp$2$(a, prop, b[prop]);
  if (__getOwnPropSymbols$2$)
    for (var prop of __getOwnPropSymbols$2$(b)) {
      if (__propIsEnum$2$.call(b, prop))
        __defNormalProp$2$(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2C = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2$.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2$)
    for (var prop of __getOwnPropSymbols$2$(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2$.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipsePurpleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2C(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2$({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#A78BFA" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_3645_3437"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_3645_3437"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_3645_3437",
            result: "effect2_dropShadow_3645_3437"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_3645_3437",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipsePurpleSolid.displayName = "EllipsePurpleSolid";

var __defProp$2_ = Object.defineProperty;
var __getOwnPropSymbols$2_ = Object.getOwnPropertySymbols;
var __hasOwnProp$2_ = Object.prototype.hasOwnProperty;
var __propIsEnum$2_ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2_ = (obj, key, value) => key in obj ? __defProp$2_(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2_ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2_.call(b, prop))
      __defNormalProp$2_(a, prop, b[prop]);
  if (__getOwnPropSymbols$2_)
    for (var prop of __getOwnPropSymbols$2_(b)) {
      if (__propIsEnum$2_.call(b, prop))
        __defNormalProp$2_(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2B = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2_.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2_)
    for (var prop of __getOwnPropSymbols$2_(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2_.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseRedSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2B(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2_({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)", filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("rect", { width: 10, height: 10, x: 2.5, y: 2.5, fill: "#fff", rx: 5 }), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 3, fill: "#F43F5E" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 14,
          height: 14,
          x: 0.5,
          y: 1.5,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feMorphology",
          {
            in: "SourceAlpha",
            operator: "dilate",
            radius: 1,
            result: "effect1_dropShadow_2733_2047"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", null),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_2733_2047"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_dropShadow_2733_2047",
            result: "effect2_dropShadow_2733_2047"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect2_dropShadow_2733_2047",
            result: "shape"
          }
        )
      ))
    );
  }
);
EllipseRedSolid.displayName = "EllipseRedSolid";

var __defProp$2Z = Object.defineProperty;
var __getOwnPropSymbols$2Z = Object.getOwnPropertySymbols;
var __hasOwnProp$2Z = Object.prototype.hasOwnProperty;
var __propIsEnum$2Z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2Z = (obj, key, value) => key in obj ? __defProp$2Z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2Z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2Z.call(b, prop))
      __defNormalProp$2Z(a, prop, b[prop]);
  if (__getOwnPropSymbols$2Z)
    for (var prop of __getOwnPropSymbols$2Z(b)) {
      if (__propIsEnum$2Z.call(b, prop))
        __defNormalProp$2Z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2A = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2Z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2Z)
    for (var prop of __getOwnPropSymbols$2Z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2Z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipseSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2A(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2Z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: color, d: "M7.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EllipseSolid.displayName = "EllipseSolid";

var __defProp$2Y = Object.defineProperty;
var __getOwnPropSymbols$2Y = Object.getOwnPropertySymbols;
var __hasOwnProp$2Y = Object.prototype.hasOwnProperty;
var __propIsEnum$2Y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2Y = (obj, key, value) => key in obj ? __defProp$2Y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2Y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2Y.call(b, prop))
      __defNormalProp$2Y(a, prop, b[prop]);
  if (__getOwnPropSymbols$2Y)
    for (var prop of __getOwnPropSymbols$2Y(b)) {
      if (__propIsEnum$2Y.call(b, prop))
        __defNormalProp$2Y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2Y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2Y)
    for (var prop of __getOwnPropSymbols$2Y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2Y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipsisHorizontal = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2Y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M1.194 7.5a1.194 1.194 0 1 1 2.39 0 1.194 1.194 0 0 1-2.39 0M11.417 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
EllipsisHorizontal.displayName = "EllipsisHorizontal";

var __defProp$2X = Object.defineProperty;
var __getOwnPropSymbols$2X = Object.getOwnPropertySymbols;
var __hasOwnProp$2X = Object.prototype.hasOwnProperty;
var __propIsEnum$2X = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2X = (obj, key, value) => key in obj ? __defProp$2X(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2X = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2X.call(b, prop))
      __defNormalProp$2X(a, prop, b[prop]);
  if (__getOwnPropSymbols$2X)
    for (var prop of __getOwnPropSymbols$2X(b)) {
      if (__propIsEnum$2X.call(b, prop))
        __defNormalProp$2X(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2X.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2X)
    for (var prop of __getOwnPropSymbols$2X(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2X.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EllipsisVertical = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2X({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 2.389a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 12.611a1.194 1.194 0 1 1 2.388 0 1.194 1.194 0 0 1-2.388 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
EllipsisVertical.displayName = "EllipsisVertical";

var __defProp$2W = Object.defineProperty;
var __getOwnPropSymbols$2W = Object.getOwnPropertySymbols;
var __hasOwnProp$2W = Object.prototype.hasOwnProperty;
var __propIsEnum$2W = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2W = (obj, key, value) => key in obj ? __defProp$2W(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2W = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2W.call(b, prop))
      __defNormalProp$2W(a, prop, b[prop]);
  if (__getOwnPropSymbols$2W)
    for (var prop of __getOwnPropSymbols$2W(b)) {
      if (__propIsEnum$2W.call(b, prop))
        __defNormalProp$2W(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2x = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2W.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2W)
    for (var prop of __getOwnPropSymbols$2W(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2W.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EnvelopeSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2x(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2W({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.393 7.346a.22.22 0 0 0 .214 0l6.912-3.807a2.44 2.44 0 0 0-2.352-1.817H2.833A2.44 2.44 0 0 0 .483 3.53z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.251 8.513a1.55 1.55 0 0 1-1.502 0L.389 5v5.833a2.446 2.446 0 0 0 2.444 2.445h9.334a2.446 2.446 0 0 0 2.444-2.445V5.011z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EnvelopeSolid.displayName = "EnvelopeSolid";

var __defProp$2V = Object.defineProperty;
var __getOwnPropSymbols$2V = Object.getOwnPropertySymbols;
var __hasOwnProp$2V = Object.prototype.hasOwnProperty;
var __propIsEnum$2V = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2V = (obj, key, value) => key in obj ? __defProp$2V(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2V = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2V.call(b, prop))
      __defNormalProp$2V(a, prop, b[prop]);
  if (__getOwnPropSymbols$2V)
    for (var prop of __getOwnPropSymbols$2V(b)) {
      if (__propIsEnum$2V.call(b, prop))
        __defNormalProp$2V(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2w = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2V.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2V)
    for (var prop of __getOwnPropSymbols$2V(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2V.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Envelope = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2w(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2V({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.056 4.611 7.07 7.93a.89.89 0 0 0 .858 0l6.015-3.318" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.833 12.611h9.334c.982 0 1.777-.796 1.777-1.778V4.167c0-.982-.796-1.778-1.777-1.778H2.833c-.981 0-1.777.796-1.777 1.778v6.666c0 .982.796 1.778 1.777 1.778" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Envelope.displayName = "Envelope";

var __defProp$2U = Object.defineProperty;
var __getOwnPropSymbols$2U = Object.getOwnPropertySymbols;
var __hasOwnProp$2U = Object.prototype.hasOwnProperty;
var __propIsEnum$2U = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2U = (obj, key, value) => key in obj ? __defProp$2U(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2U = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2U.call(b, prop))
      __defNormalProp$2U(a, prop, b[prop]);
  if (__getOwnPropSymbols$2U)
    for (var prop of __getOwnPropSymbols$2U(b)) {
      if (__propIsEnum$2U.call(b, prop))
        __defNormalProp$2U(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2v = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2U.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2U)
    for (var prop of __getOwnPropSymbols$2U(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2U.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ExclamationCircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2v(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2U({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m-.667 3.939a.667.667 0 0 1 1.334 0v3.679a.667.667 0 0 1-1.334 0zm.667 7.098a.89.89 0 0 1 0-1.778.89.89 0 0 1 0 1.778"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ExclamationCircleSolid.displayName = "ExclamationCircleSolid";

var __defProp$2T = Object.defineProperty;
var __getOwnPropSymbols$2T = Object.getOwnPropertySymbols;
var __hasOwnProp$2T = Object.prototype.hasOwnProperty;
var __propIsEnum$2T = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2T = (obj, key, value) => key in obj ? __defProp$2T(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2T = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2T.call(b, prop))
      __defNormalProp$2T(a, prop, b[prop]);
  if (__getOwnPropSymbols$2T)
    for (var prop of __getOwnPropSymbols$2T(b)) {
      if (__propIsEnum$2T.call(b, prop))
        __defNormalProp$2T(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2u = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2T.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2T)
    for (var prop of __getOwnPropSymbols$2T(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2T.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ExclamationCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2u(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2T({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { stroke: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888M7.5 4.328v3.678"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeWidth: 0.9,
          d: "M7.5 10.976a.44.44 0 0 1 0-.878.44.44 0 0 1 0 .878Z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ExclamationCircle.displayName = "ExclamationCircle";

var __defProp$2S = Object.defineProperty;
var __getOwnPropSymbols$2S = Object.getOwnPropertySymbols;
var __hasOwnProp$2S = Object.prototype.hasOwnProperty;
var __propIsEnum$2S = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2S = (obj, key, value) => key in obj ? __defProp$2S(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2S = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2S.call(b, prop))
      __defNormalProp$2S(a, prop, b[prop]);
  if (__getOwnPropSymbols$2S)
    for (var prop of __getOwnPropSymbols$2S(b)) {
      if (__propIsEnum$2S.call(b, prop))
        __defNormalProp$2S(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2t = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2S.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2S)
    for (var prop of __getOwnPropSymbols$2S(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2S.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EyeMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2t(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2S({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.356 8.507c-.4-.607-.4-1.406 0-2.014.905-1.371 2.9-3.66 6.144-3.66s5.24 2.288 6.144 3.66c.4.608.4 1.407 0 2.014-.905 1.371-2.9 3.66-6.144 3.66S2.26 9.88 1.356 8.507" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 9.945a2.444 2.444 0 1 0 0-4.889 2.444 2.444 0 0 0 0 4.889" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeMini.displayName = "EyeMini";

var __defProp$2R = Object.defineProperty;
var __getOwnPropSymbols$2R = Object.getOwnPropertySymbols;
var __hasOwnProp$2R = Object.prototype.hasOwnProperty;
var __propIsEnum$2R = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2R = (obj, key, value) => key in obj ? __defProp$2R(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2R = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2R.call(b, prop))
      __defNormalProp$2R(a, prop, b[prop]);
  if (__getOwnPropSymbols$2R)
    for (var prop of __getOwnPropSymbols$2R(b)) {
      if (__propIsEnum$2R.call(b, prop))
        __defNormalProp$2R(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2s = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2R.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2R)
    for (var prop of __getOwnPropSymbols$2R(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2R.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EyeSlashMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2s(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2R({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.778 5.364c.357.4.645.792.866 1.129.4.607.4 1.406 0 2.013-.905 1.372-2.9 3.66-6.144 3.66q-.732-.002-1.38-.143M3.905 11.095C2.7 10.316 1.86 9.27 1.356 8.506c-.4-.607-.4-1.406 0-2.013.905-1.372 2.9-3.66 6.144-3.66 1.44 0 2.634.45 3.595 1.072" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.792 8.35A2.45 2.45 0 0 1 8.35 9.792M5.771 9.229a2.444 2.444 0 1 1 3.458-3.458M1.278 13.722 13.722 1.278" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeSlashMini.displayName = "EyeSlashMini";

var __defProp$2Q = Object.defineProperty;
var __getOwnPropSymbols$2Q = Object.getOwnPropertySymbols;
var __hasOwnProp$2Q = Object.prototype.hasOwnProperty;
var __propIsEnum$2Q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2Q = (obj, key, value) => key in obj ? __defProp$2Q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2Q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2Q.call(b, prop))
      __defNormalProp$2Q(a, prop, b[prop]);
  if (__getOwnPropSymbols$2Q)
    for (var prop of __getOwnPropSymbols$2Q(b)) {
      if (__propIsEnum$2Q.call(b, prop))
        __defNormalProp$2Q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2r = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2Q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2Q)
    for (var prop of __getOwnPropSymbols$2Q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2Q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const EyeSlash = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2r(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2Q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 10.389a2.889 2.889 0 1 0 0-5.778 2.889 2.889 0 0 0 0 5.778" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 12.833a7.3 7.3 0 0 1-1.52-.159.667.667 0 0 1 .28-1.304c.4.087.817.13 1.24.13 2.934 0 4.76-2.106 5.587-3.36a1.18 1.18 0 0 0 0-1.28 9 9 0 0 0-.808-1.052.667.667 0 1 1 .997-.887c.333.375.644.78.924 1.206.55.833.55 1.912 0 2.746-.975 1.48-3.142 3.96-6.7 3.96M3.904 11.761a.66.66 0 0 1-.36-.106C2.234 10.809 1.328 9.675.8 8.873a2.49 2.49 0 0 1 0-2.746c.975-1.48 3.142-3.96 6.7-3.96 1.415 0 2.747.396 3.957 1.178a.666.666 0 1 1-.723 1.12A5.87 5.87 0 0 0 7.5 3.501c-2.934 0-4.76 2.106-5.588 3.36a1.18 1.18 0 0 0 0 1.28c.459.694 1.24 1.674 2.354 2.395a.667.667 0 0 1-.362 1.226" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.278 14.389a.667.667 0 0 1-.471-1.139L13.25.807a.667.667 0 1 1 .943.943L1.75 14.193c-.13.13-.3.196-.471.196" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
EyeSlash.displayName = "EyeSlash";

var __defProp$2P = Object.defineProperty;
var __getOwnPropSymbols$2P = Object.getOwnPropertySymbols;
var __hasOwnProp$2P = Object.prototype.hasOwnProperty;
var __propIsEnum$2P = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2P = (obj, key, value) => key in obj ? __defProp$2P(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2P = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2P.call(b, prop))
      __defNormalProp$2P(a, prop, b[prop]);
  if (__getOwnPropSymbols$2P)
    for (var prop of __getOwnPropSymbols$2P(b)) {
      if (__propIsEnum$2P.call(b, prop))
        __defNormalProp$2P(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2P.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2P)
    for (var prop of __getOwnPropSymbols$2P(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2P.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Eye = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2P({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 12.833c-3.558 0-5.725-2.48-6.7-3.96a2.49 2.49 0 0 1 0-2.747c.975-1.48 3.142-3.96 6.7-3.96s5.725 2.48 6.7 3.96a2.49 2.49 0 0 1 0 2.746c-.975 1.48-3.142 3.961-6.7 3.961m0-9.333c-2.934 0-4.76 2.106-5.588 3.36a1.18 1.18 0 0 0 0 1.28C2.74 9.393 4.566 11.5 7.5 11.5s4.76-2.106 5.588-3.36a1.18 1.18 0 0 0 0-1.28C12.26 5.607 10.434 3.5 7.5 3.5" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 10.389a2.889 2.889 0 1 0 0-5.778 2.889 2.889 0 0 0 0 5.778" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Eye.displayName = "Eye";

var __defProp$2O = Object.defineProperty;
var __getOwnPropSymbols$2O = Object.getOwnPropertySymbols;
var __hasOwnProp$2O = Object.prototype.hasOwnProperty;
var __propIsEnum$2O = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2O = (obj, key, value) => key in obj ? __defProp$2O(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2O = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2O.call(b, prop))
      __defNormalProp$2O(a, prop, b[prop]);
  if (__getOwnPropSymbols$2O)
    for (var prop of __getOwnPropSymbols$2O(b)) {
      if (__propIsEnum$2O.call(b, prop))
        __defNormalProp$2O(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2p = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2O.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2O)
    for (var prop of __getOwnPropSymbols$2O(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2O.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FaceSmile = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2p(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2O({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { stroke: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 13.944a6.444 6.444 0 1 0 0-12.888 6.444 6.444 0 0 0 0 12.888"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.832 9.278a3.78 3.78 0 0 1-3.332 2 3.78 3.78 0 0 1-3.332-2"
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.111 6.611a.389.389 0 1 1-.778 0 .389.389 0 0 1 .778 0ZM9.667 6.611a.389.389 0 1 1-.778 0 .389.389 0 0 1 .778 0Z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
FaceSmile.displayName = "FaceSmile";

var __defProp$2N = Object.defineProperty;
var __getOwnPropSymbols$2N = Object.getOwnPropertySymbols;
var __hasOwnProp$2N = Object.prototype.hasOwnProperty;
var __propIsEnum$2N = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2N = (obj, key, value) => key in obj ? __defProp$2N(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2N = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2N.call(b, prop))
      __defNormalProp$2N(a, prop, b[prop]);
  if (__getOwnPropSymbols$2N)
    for (var prop of __getOwnPropSymbols$2N(b)) {
      if (__propIsEnum$2N.call(b, prop))
        __defNormalProp$2N(a, prop, b[prop]);
    }
  return a;
};
const Facebook = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2N({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#a)",
          fillRule: "evenodd",
          d: "M.75 7.5c0 3.341 2.43 6.109 5.636 6.682l.04-.032-.006-.001v-4.76H4.733V7.5H6.42V6.016c0-1.688 1.08-2.633 2.633-2.633.472 0 1.012.068 1.484.135V5.24H9.66c-.81 0-1.012.405-1.012.945V7.5h1.788l-.303 1.89H8.648v4.759l-.062.01.028.023c3.206-.573 5.636-3.34 5.636-6.682 0-3.712-3.037-6.75-6.75-6.75S.75 3.788.75 7.5",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 13.78,
          y2: 0.748,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#0062E0" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#19AFFF" })
      ))
    );
  }
);
Facebook.displayName = "Facebook";

var __defProp$2M = Object.defineProperty;
var __getOwnPropSymbols$2M = Object.getOwnPropertySymbols;
var __hasOwnProp$2M = Object.prototype.hasOwnProperty;
var __propIsEnum$2M = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2M = (obj, key, value) => key in obj ? __defProp$2M(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2M = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2M.call(b, prop))
      __defNormalProp$2M(a, prop, b[prop]);
  if (__getOwnPropSymbols$2M)
    for (var prop of __getOwnPropSymbols$2M(b)) {
      if (__propIsEnum$2M.call(b, prop))
        __defNormalProp$2M(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2o = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2M.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2M)
    for (var prop of __getOwnPropSymbols$2M(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2M.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FeaturedBadge = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2o(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2M({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { filter: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 8.903, r: 7.806, fill: "#3B82F6" }), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.806,
          fill: "url(#b)",
          fillOpacity: 0.2
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.556,
          stroke: "#000",
          strokeOpacity: 0.2,
          strokeWidth: 0.5
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#c)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#fff",
          d: "M14.604 7.623a.43.43 0 0 0-.35-.295l-2.67-.388-1.195-2.421c-.146-.296-.632-.296-.778 0l-1.195 2.42-2.671.388a.434.434 0 0 0-.24.74L7.438 9.95l-.457 2.66a.434.434 0 0 0 .63.457l2.388-1.256 2.39 1.256a.43.43 0 0 0 .457-.032.43.43 0 0 0 .172-.425l-.457-2.66 1.933-1.884a.43.43 0 0 0 .11-.445"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 10.089,
          x2: 10.089,
          y1: 1.142,
          y2: 16.754,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "c" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M4.796 3.699h10.408v10.408H4.796z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "a",
          width: 20,
          height: 20,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_8442_559"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_8442_559",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_8442_559" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: -1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.635 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_8442_559",
            result: "effect3_innerShadow_8442_559"
          }
        )
      ))
    );
  }
);
FeaturedBadge.displayName = "FeaturedBadge";

var __defProp$2L = Object.defineProperty;
var __getOwnPropSymbols$2L = Object.getOwnPropertySymbols;
var __hasOwnProp$2L = Object.prototype.hasOwnProperty;
var __propIsEnum$2L = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2L = (obj, key, value) => key in obj ? __defProp$2L(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2L = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2L.call(b, prop))
      __defNormalProp$2L(a, prop, b[prop]);
  if (__getOwnPropSymbols$2L)
    for (var prop of __getOwnPropSymbols$2L(b)) {
      if (__propIsEnum$2L.call(b, prop))
        __defNormalProp$2L(a, prop, b[prop]);
    }
  return a;
};
const Figma = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2L({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#1ABCFE",
          d: "M7.5 7.5a2.227 2.227 0 1 1 4.454 0 2.227 2.227 0 0 1-4.454 0"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#0ACF83",
          d: "M3.046 11.954c0-1.23.997-2.227 2.227-2.227H7.5v2.227a2.227 2.227 0 1 1-4.454 0"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#FF7262",
          d: "M7.5.819v4.454h2.227a2.227 2.227 0 1 0 0-4.454z"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F24E1E",
          d: "M3.046 3.046c0 1.23.997 2.227 2.227 2.227H7.5V.819H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#A259FF",
          d: "M3.046 7.5c0 1.23.997 2.227 2.227 2.227H7.5V5.273H5.273c-1.23 0-2.227.997-2.227 2.227"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M3 .75h9v13.5H3z" })))
    );
  }
);
Figma.displayName = "Figma";

var __defProp$2K = Object.defineProperty;
var __getOwnPropSymbols$2K = Object.getOwnPropertySymbols;
var __hasOwnProp$2K = Object.prototype.hasOwnProperty;
var __propIsEnum$2K = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2K = (obj, key, value) => key in obj ? __defProp$2K(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2K = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2K.call(b, prop))
      __defNormalProp$2K(a, prop, b[prop]);
  if (__getOwnPropSymbols$2K)
    for (var prop of __getOwnPropSymbols$2K(b)) {
      if (__propIsEnum$2K.call(b, prop))
        __defNormalProp$2K(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2n = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2K.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2K)
    for (var prop of __getOwnPropSymbols$2K(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2K.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FlagMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2n(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2K({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#b)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.833 2.38c1.032-.718 2.006-1.015 2.917-.875 1.502.23 1.995 1.52 3.5 1.75.9.138 1.872-.148 2.917-.874v5.834c-1.045.727-2.016 1.013-2.917.874-1.504-.23-1.998-1.52-3.5-1.75-.912-.14-1.885.157-2.917.875M2.833 1.278v12.444" })
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "b" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
FlagMini.displayName = "FlagMini";

var __defProp$2J = Object.defineProperty;
var __getOwnPropSymbols$2J = Object.getOwnPropertySymbols;
var __hasOwnProp$2J = Object.prototype.hasOwnProperty;
var __propIsEnum$2J = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2J = (obj, key, value) => key in obj ? __defProp$2J(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2J = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2J.call(b, prop))
      __defNormalProp$2J(a, prop, b[prop]);
  if (__getOwnPropSymbols$2J)
    for (var prop of __getOwnPropSymbols$2J(b)) {
      if (__propIsEnum$2J.call(b, prop))
        __defNormalProp$2J(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2m = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2J.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2J)
    for (var prop of __getOwnPropSymbols$2J(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2J.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FlyingBox = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2m(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2J({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.5v5.333M11.278 4.167H3.722c-.982 0-1.778.796-1.778 1.778v5.333c0 .982.796 1.778 1.778 1.778h7.556c.982 0 1.778-.796 1.778-1.778V5.945c0-.982-.796-1.778-1.778-1.778"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m2.167 5.086 1.288-2.598c.3-.605.917-.988 1.593-.988h4.904c.676 0 1.293.383 1.593.988l1.288 2.599M4.167 10.833h1.777"
        }
      )
    );
  }
);
FlyingBox.displayName = "FlyingBox";

var __defProp$2I = Object.defineProperty;
var __getOwnPropSymbols$2I = Object.getOwnPropertySymbols;
var __hasOwnProp$2I = Object.prototype.hasOwnProperty;
var __propIsEnum$2I = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2I = (obj, key, value) => key in obj ? __defProp$2I(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2I = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2I.call(b, prop))
      __defNormalProp$2I(a, prop, b[prop]);
  if (__getOwnPropSymbols$2I)
    for (var prop of __getOwnPropSymbols$2I(b)) {
      if (__propIsEnum$2I.call(b, prop))
        __defNormalProp$2I(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2l = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2I.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2I)
    for (var prop of __getOwnPropSymbols$2I(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2I.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FolderIllustration = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2l(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2I({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#60A5FA",
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#a)",
          fillOpacity: 0.15,
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 0.15,
          strokeWidth: 0.5,
          d: "M7.034 2.955a.25.25 0 0 0 .196.093h4.387c1.142 0 2.068.926 2.068 2.069v6.066a2.07 2.07 0 0 1-2.068 2.069H3.383a2.07 2.07 0 0 1-2.068-2.069V3.817c0-1.143.926-2.069 2.068-2.069h1.691c.628 0 1.22.285 1.613.774z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement("g", { filter: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#c)",
          fillOpacity: 0.2,
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 1.498,
          y2: 13.502,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", null),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 7.5,
          x2: 7.5,
          y1: 4.965,
          y2: 13.501,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "b",
          width: 12.87,
          height: 8.537,
          x: 1.065,
          y: 4.965,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: -0.5 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_6347_11987" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 0.5 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_innerShadow_6347_11987",
            result: "effect2_innerShadow_6347_11987"
          }
        )
      ))
    );
  }
);
FolderIllustration.displayName = "FolderIllustration";

var __defProp$2H = Object.defineProperty;
var __getOwnPropSymbols$2H = Object.getOwnPropertySymbols;
var __hasOwnProp$2H = Object.prototype.hasOwnProperty;
var __propIsEnum$2H = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2H = (obj, key, value) => key in obj ? __defProp$2H(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2H = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2H.call(b, prop))
      __defNormalProp$2H(a, prop, b[prop]);
  if (__getOwnPropSymbols$2H)
    for (var prop of __getOwnPropSymbols$2H(b)) {
      if (__propIsEnum$2H.call(b, prop))
        __defNormalProp$2H(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2k = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2H.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2H)
    for (var prop of __getOwnPropSymbols$2H(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2H.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FolderOpenIllustration = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$2k(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2H({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#60A5FA",
          fillRule: "evenodd",
          d: "M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#b)",
          fillOpacity: 0.15,
          fillRule: "evenodd",
          d: "M13.935 11.15a2.32 2.32 0 0 1-2.318 2.32H3.383a2.32 2.32 0 0 1-2.318-2.32V3.785a2.32 2.32 0 0 1 2.318-2.318h1.691c.704 0 1.368.319 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.318z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 0.15,
          strokeWidth: 0.5,
          d: "M7.034 2.922a.25.25 0 0 0 .196.094h4.387c1.142 0 2.068.926 2.068 2.068v6.067a2.07 2.07 0 0 1-2.068 2.068H3.383a2.07 2.07 0 0 1-2.068-2.068V3.784c0-1.142.926-2.068 2.068-2.068h1.691c.628 0 1.22.284 1.613.773z"
        }
      ), /* @__PURE__ */ React__namespace.createElement("g", { fillRule: "evenodd", clipRule: "evenodd", filter: "url(#c)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#d)",
          fillOpacity: 0.2,
          d: "M2.041 5.734h10.917a1.95 1.95 0 0 1 1.884 2.452l-.955 3.578a2.38 2.38 0 0 1-2.302 1.77h-8.17a2.38 2.38 0 0 1-2.303-1.77L.158 8.186A1.95 1.95 0 0 1 2.04 5.734z"
        }
      ))),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 7.5,
          x2: 7.5,
          y1: 1.466,
          y2: 13.469,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", null),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "d",
          x1: 7.5,
          x2: 7.5,
          y1: 5.734,
          y2: 13.534,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "c",
          width: 14.817,
          height: 7.8,
          x: 0.091,
          y: 5.734,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: -0.5 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_6347_12110" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 0.5 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect1_innerShadow_6347_12110",
            result: "effect2_innerShadow_6347_12110"
          }
        )
      ))
    );
  }
);
FolderOpenIllustration.displayName = "FolderOpenIllustration";

var __defProp$2G = Object.defineProperty;
var __getOwnPropSymbols$2G = Object.getOwnPropertySymbols;
var __hasOwnProp$2G = Object.prototype.hasOwnProperty;
var __propIsEnum$2G = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2G = (obj, key, value) => key in obj ? __defProp$2G(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2G = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2G.call(b, prop))
      __defNormalProp$2G(a, prop, b[prop]);
  if (__getOwnPropSymbols$2G)
    for (var prop of __getOwnPropSymbols$2G(b)) {
      if (__propIsEnum$2G.call(b, prop))
        __defNormalProp$2G(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2j = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2G.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2G)
    for (var prop of __getOwnPropSymbols$2G(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2G.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FolderOpen = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2j(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2G({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.875 6.458v-2.5c0-.92.746-1.666 1.667-1.666h1.626c.505 0 .983.229 1.3.623l.502.627h4.488c.921 0 1.667.746 1.667 1.666v1.25" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.252 6.458h10.496c.822 0 1.42.779 1.208 1.572l-.918 3.44a1.666 1.666 0 0 1-1.61 1.238H3.572a1.666 1.666 0 0 1-1.61-1.237L1.045 8.03a1.25 1.25 0 0 1 1.207-1.572z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
FolderOpen.displayName = "FolderOpen";

var __defProp$2F = Object.defineProperty;
var __getOwnPropSymbols$2F = Object.getOwnPropertySymbols;
var __hasOwnProp$2F = Object.prototype.hasOwnProperty;
var __propIsEnum$2F = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2F = (obj, key, value) => key in obj ? __defProp$2F(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2F = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2F.call(b, prop))
      __defNormalProp$2F(a, prop, b[prop]);
  if (__getOwnPropSymbols$2F)
    for (var prop of __getOwnPropSymbols$2F(b)) {
      if (__propIsEnum$2F.call(b, prop))
        __defNormalProp$2F(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2i = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2F.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2F)
    for (var prop of __getOwnPropSymbols$2F(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2F.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Folder = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2i(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2F({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.875 7.292V3.958c0-.92.746-1.666 1.667-1.666h1.626c.505 0 .983.229 1.3.623l.502.627h4.488c.921 0 1.667.746 1.667 1.666v2.37"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.542 5.625h7.916c.921 0 1.667.746 1.667 1.667v3.75c0 .92-.746 1.666-1.667 1.666H3.542c-.921 0-1.667-.745-1.667-1.666v-3.75c0-.921.746-1.667 1.667-1.667"
        }
      )
    );
  }
);
Folder.displayName = "Folder";

var __defProp$2E = Object.defineProperty;
var __getOwnPropSymbols$2E = Object.getOwnPropertySymbols;
var __hasOwnProp$2E = Object.prototype.hasOwnProperty;
var __propIsEnum$2E = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2E = (obj, key, value) => key in obj ? __defProp$2E(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2E = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2E.call(b, prop))
      __defNormalProp$2E(a, prop, b[prop]);
  if (__getOwnPropSymbols$2E)
    for (var prop of __getOwnPropSymbols$2E(b)) {
      if (__propIsEnum$2E.call(b, prop))
        __defNormalProp$2E(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2h = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2E.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2E)
    for (var prop of __getOwnPropSymbols$2E(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2E.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ForwardSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2h(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2E({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M14.23 6.619 8.19 3.27a1 1 0 0 0-.998.014 1 1 0 0 0-.497.867v1.862l-4.95-2.742a1 1 0 0 0-.999.013 1 1 0 0 0-.496.867v6.696c0 .36.185.685.496.867.16.094.335.142.511.142.168 0 .334-.043.487-.128l4.95-2.743v1.862c0 .36.186.685.497.867.159.094.335.142.51.142.168 0 .335-.043.488-.128l6.042-3.348a1.008 1.008 0 0 0 0-1.762"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ForwardSolid.displayName = "ForwardSolid";

var __defProp$2D = Object.defineProperty;
var __getOwnPropSymbols$2D = Object.getOwnPropertySymbols;
var __hasOwnProp$2D = Object.prototype.hasOwnProperty;
var __propIsEnum$2D = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2D = (obj, key, value) => key in obj ? __defProp$2D(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2D = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2D.call(b, prop))
      __defNormalProp$2D(a, prop, b[prop]);
  if (__getOwnPropSymbols$2D)
    for (var prop of __getOwnPropSymbols$2D(b)) {
      if (__propIsEnum$2D.call(b, prop))
        __defNormalProp$2D(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2g = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2D.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2D)
    for (var prop of __getOwnPropSymbols$2D(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2D.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Funnel = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2g(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2D({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m8.833 12.611-2.666 1.333V7.5L1.944 1.944h11.112L8.833 7.5z"
        }
      )
    );
  }
);
Funnel.displayName = "Funnel";

var __defProp$2C = Object.defineProperty;
var __getOwnPropSymbols$2C = Object.getOwnPropertySymbols;
var __hasOwnProp$2C = Object.prototype.hasOwnProperty;
var __propIsEnum$2C = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2C = (obj, key, value) => key in obj ? __defProp$2C(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2C = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2C.call(b, prop))
      __defNormalProp$2C(a, prop, b[prop]);
  if (__getOwnPropSymbols$2C)
    for (var prop of __getOwnPropSymbols$2C(b)) {
      if (__propIsEnum$2C.call(b, prop))
        __defNormalProp$2C(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2f = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2C.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2C)
    for (var prop of __getOwnPropSymbols$2C(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2C.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const GatsbyEx = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2f(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2C({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.25 7.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0m-12.054.097c0 1.301.53 2.651 1.543 3.664 1.013 1.012 2.363 1.495 3.713 1.543zm.145-1.254 6.316 6.316c2.363-.53 4.147-2.652 4.147-5.159H9.429v.964h2.314c-.338 1.447-1.398 2.652-2.797 3.134L3.402 6.054C4.029 4.366 5.62 3.16 7.5 3.16c1.446 0 2.748.723 3.568 1.832l.723-.627A5.32 5.32 0 0 0 7.5 2.196c-2.507 0-4.629 1.784-5.159 4.147",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GatsbyEx.displayName = "GatsbyEx";

var __defProp$2B = Object.defineProperty;
var __getOwnPropSymbols$2B = Object.getOwnPropertySymbols;
var __hasOwnProp$2B = Object.prototype.hasOwnProperty;
var __propIsEnum$2B = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2B = (obj, key, value) => key in obj ? __defProp$2B(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2B = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2B.call(b, prop))
      __defNormalProp$2B(a, prop, b[prop]);
  if (__getOwnPropSymbols$2B)
    for (var prop of __getOwnPropSymbols$2B(b)) {
      if (__propIsEnum$2B.call(b, prop))
        __defNormalProp$2B(a, prop, b[prop]);
    }
  return a;
};
const Gatsby = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2B({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#639",
          d: "M7.5 14.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#fff",
          d: "M3.74 11.26c-1.013-1.012-1.544-2.362-1.544-3.663l5.256 5.207c-1.35-.049-2.7-.53-3.713-1.543m4.917 1.399L2.341 6.343C2.87 3.98 4.993 2.197 7.5 2.197c1.784 0 3.327.867 4.29 2.17l-.722.626c-.82-1.109-2.122-1.832-3.568-1.832-1.88 0-3.472 1.205-4.098 2.893l5.544 5.544c1.399-.482 2.46-1.687 2.797-3.134H9.428V7.5h3.375c0 2.507-1.783 4.629-4.146 5.159"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Gatsby.displayName = "Gatsby";

var __defProp$2A = Object.defineProperty;
var __getOwnPropSymbols$2A = Object.getOwnPropertySymbols;
var __hasOwnProp$2A = Object.prototype.hasOwnProperty;
var __propIsEnum$2A = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2A = (obj, key, value) => key in obj ? __defProp$2A(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2A = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2A.call(b, prop))
      __defNormalProp$2A(a, prop, b[prop]);
  if (__getOwnPropSymbols$2A)
    for (var prop of __getOwnPropSymbols$2A(b)) {
      if (__propIsEnum$2A.call(b, prop))
        __defNormalProp$2A(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2e = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2A.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2A)
    for (var prop of __getOwnPropSymbols$2A(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2A.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const GiftSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2e(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2A({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.167 7.944v4.223A2.446 2.446 0 0 0 4.61 14.61h2.222V7.944zM8.167 7.944v6.667h2.222a2.446 2.446 0 0 0 2.444-2.444V7.944zM13.056 3.5h-.411a2.2 2.2 0 0 0 .188-.889A2.225 2.225 0 0 0 10.611.39C9.046.389 8.065 1.483 7.5 2.468 6.935 1.484 5.954.388 4.389.388a2.225 2.225 0 0 0-2.222 2.223c0 .317.068.616.188.889h-.41c-.858 0-1.556.69-1.556 1.556 0 .865.698 1.555 1.555 1.555h11.112a1.555 1.555 0 1 0 0-3.111M10.61 1.722a.89.89 0 0 1 0 1.778h-2.15c.36-.764 1.045-1.778 2.15-1.778m-7.111.89a.89.89 0 0 1 .889-.89c1.097 0 1.784 1.014 2.147 1.778H4.389a.89.89 0 0 1-.889-.889" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GiftSolid.displayName = "GiftSolid";

var __defProp$2z = Object.defineProperty;
var __getOwnPropSymbols$2z = Object.getOwnPropertySymbols;
var __hasOwnProp$2z = Object.prototype.hasOwnProperty;
var __propIsEnum$2z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2z = (obj, key, value) => key in obj ? __defProp$2z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2z.call(b, prop))
      __defNormalProp$2z(a, prop, b[prop]);
  if (__getOwnPropSymbols$2z)
    for (var prop of __getOwnPropSymbols$2z(b)) {
      if (__propIsEnum$2z.call(b, prop))
        __defNormalProp$2z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2d = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2z)
    for (var prop of __getOwnPropSymbols$2z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Gift = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2d(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 4.167v9.777M2.833 2.611c0-.859.697-1.555 1.556-1.555 2.301 0 3.111 3.11 3.111 3.11H4.389a1.556 1.556 0 0 1-1.556-1.555M10.611 4.167H7.5s.81-3.111 3.111-3.111a1.556 1.556 0 0 1 0 3.11M12.167 6.833v5.334c0 .982-.796 1.777-1.778 1.777H4.61a1.777 1.777 0 0 1-1.778-1.777V6.833" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.056 4.167H1.944a.89.89 0 0 0-.888.889v.888c0 .491.398.89.888.89h11.112a.89.89 0 0 0 .888-.89v-.888a.89.89 0 0 0-.889-.89" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Gift.displayName = "Gift";

var __defProp$2y = Object.defineProperty;
var __getOwnPropSymbols$2y = Object.getOwnPropertySymbols;
var __hasOwnProp$2y = Object.prototype.hasOwnProperty;
var __propIsEnum$2y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2y = (obj, key, value) => key in obj ? __defProp$2y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2y.call(b, prop))
      __defNormalProp$2y(a, prop, b[prop]);
  if (__getOwnPropSymbols$2y)
    for (var prop of __getOwnPropSymbols$2y(b)) {
      if (__propIsEnum$2y.call(b, prop))
        __defNormalProp$2y(a, prop, b[prop]);
    }
  return a;
};
const Github = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#1B1F23",
          fillRule: "evenodd",
          d: "M7.5.917C3.77.917.75 3.937.75 7.667a6.75 6.75 0 0 0 4.615 6.404c.338.059.464-.144.464-.321 0-.16-.008-.692-.008-1.257-1.696.312-2.135-.414-2.27-.793-.076-.194-.405-.793-.692-.954-.236-.126-.573-.439-.008-.447.531-.008.911.49 1.038.692.607 1.02 1.578.734 1.966.557.059-.439.236-.734.43-.903-1.502-.169-3.071-.751-3.071-3.333 0-.734.261-1.341.692-1.814-.068-.169-.304-.86.067-1.789 0 0 .565-.177 1.856.692a6.3 6.3 0 0 1 1.688-.228c.574 0 1.147.076 1.687.228 1.291-.877 1.857-.692 1.857-.692.37.928.135 1.62.067 1.79.43.472.692 1.07.692 1.813 0 2.59-1.578 3.164-3.08 3.333.245.21.456.616.456 1.249 0 .902-.008 1.628-.008 1.856 0 .177.126.388.464.32a6.76 6.76 0 0 0 4.598-6.403c0-3.73-3.02-6.75-6.75-6.75",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Github.displayName = "Github";

var __defProp$2x = Object.defineProperty;
var __getOwnPropSymbols$2x = Object.getOwnPropertySymbols;
var __hasOwnProp$2x = Object.prototype.hasOwnProperty;
var __propIsEnum$2x = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2x = (obj, key, value) => key in obj ? __defProp$2x(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2x = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2x.call(b, prop))
      __defNormalProp$2x(a, prop, b[prop]);
  if (__getOwnPropSymbols$2x)
    for (var prop of __getOwnPropSymbols$2x(b)) {
      if (__propIsEnum$2x.call(b, prop))
        __defNormalProp$2x(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2c = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2x.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2x)
    for (var prop of __getOwnPropSymbols$2x(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2x.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Glasses = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2c(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2x({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.389 9.5a1.112 1.112 0 0 1 2.222 0M1.134 8.857l1.01-5.492A1.778 1.778 0 0 1 4.68 2.133M13.866 8.857l-1.01-5.492a1.778 1.778 0 0 0-2.536-1.232"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M3.722 12.167a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334M11.278 12.167a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333"
        }
      )
    );
  }
);
Glasses.displayName = "Glasses";

var __defProp$2w = Object.defineProperty;
var __getOwnPropSymbols$2w = Object.getOwnPropertySymbols;
var __hasOwnProp$2w = Object.prototype.hasOwnProperty;
var __propIsEnum$2w = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2w = (obj, key, value) => key in obj ? __defProp$2w(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2w = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2w.call(b, prop))
      __defNormalProp$2w(a, prop, b[prop]);
  if (__getOwnPropSymbols$2w)
    for (var prop of __getOwnPropSymbols$2w(b)) {
      if (__propIsEnum$2w.call(b, prop))
        __defNormalProp$2w(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2b = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2w.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2w)
    for (var prop of __getOwnPropSymbols$2w(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2w.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const GlobeEuropeSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2b(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2w({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.016 2.825c.181.03.368-.02.513-.132l.136-.106A6.4 6.4 0 0 0 7.5 1.057a6.44 6.44 0 0 0-6.075 4.31c.606 1.364 1.388 2.429 2.354 3.135l.212.15q.119.083.23.164l.021.016c.262.196.488.41.603.728.084.233.074.418.06.652-.018.35-.043.783.26 1.286.278.462.638.652.901.79.201.106.294.159.379.287.248.372.124.943.059 1.17l-.033.111c.336.055.677.09 1.028.09a6.44 6.44 0 0 0 6.006-4.119c-.43-.971-.974-1.517-1.658-1.647-.724-.137-1.267.244-1.705.55-.37.256-.61.415-.853.366-.14-.025-.205-.09-.426-.356-.206-.247-.49-.587-.97-.87-.784-.458-1.756-.575-2.898-.35-.113-.32-.197-.784.02-1.224.047-.095.305-.577.774-.707.372-.103.732.073 1.11.259.424.208 1.004.492 1.564.136.627-.4.559-1.15.504-1.753-.04-.436-.086-.93.11-1.174.24-.301.948-.385 1.939-.23z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 14.611c-3.92 0-7.111-3.19-7.111-7.111S3.579.389 7.5.389s7.111 3.19 7.111 7.111-3.19 7.111-7.111 7.111m0-12.889A5.784 5.784 0 0 0 1.722 7.5 5.784 5.784 0 0 0 7.5 13.278 5.784 5.784 0 0 0 13.278 7.5 5.784 5.784 0 0 0 7.5 1.722" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GlobeEuropeSolid.displayName = "GlobeEuropeSolid";

var __defProp$2v = Object.defineProperty;
var __getOwnPropSymbols$2v = Object.getOwnPropertySymbols;
var __hasOwnProp$2v = Object.prototype.hasOwnProperty;
var __propIsEnum$2v = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2v = (obj, key, value) => key in obj ? __defProp$2v(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2v = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2v.call(b, prop))
      __defNormalProp$2v(a, prop, b[prop]);
  if (__getOwnPropSymbols$2v)
    for (var prop of __getOwnPropSymbols$2v(b)) {
      if (__propIsEnum$2v.call(b, prop))
        __defNormalProp$2v(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2a = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2v.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2v)
    for (var prop of __getOwnPropSymbols$2v(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2v.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const GlobeEurope = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2a(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2v({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.63 8.288C4.59 8.231 3.87 7.112 4.416 6c.06-.122.43-.844 1.195-1.056 1.132-.314 1.958.816 2.493.475.599-.381-.24-1.916.451-2.781.526-.659 1.685-.61 2.563-.472M4.63 8.288c1.412-.39 2.32-.199 2.926.156.835.489.894 1.171 1.61 1.306 1.034.193 1.64-1.091 2.556-.917.426.081.944.482 1.394 1.829" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.145 13.927c.132-.515.208-1.194-.145-1.723-.376-.565-.907-.46-1.264-1.05-.371-.618.013-1.054-.264-1.82-.26-.72-.854-1.044-1.3-1.37-.743-.543-1.666-1.521-2.39-3.43" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
GlobeEurope.displayName = "GlobeEurope";

var __defProp$2u = Object.defineProperty;
var __getOwnPropSymbols$2u = Object.getOwnPropertySymbols;
var __hasOwnProp$2u = Object.prototype.hasOwnProperty;
var __propIsEnum$2u = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2u = (obj, key, value) => key in obj ? __defProp$2u(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2u = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2u.call(b, prop))
      __defNormalProp$2u(a, prop, b[prop]);
  if (__getOwnPropSymbols$2u)
    for (var prop of __getOwnPropSymbols$2u(b)) {
      if (__propIsEnum$2u.call(b, prop))
        __defNormalProp$2u(a, prop, b[prop]);
    }
  return a;
};
const Google = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2u({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#4280EF",
          d: "M14.117 7.661c0-.456-.045-.926-.118-1.368H7.63v2.604h3.648a3.07 3.07 0 0 1-1.353 2.044l2.177 1.692c1.28-1.192 2.015-2.927 2.015-4.972"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#34A353",
          d: "M7.63 14.252c1.824 0 3.354-.604 4.472-1.633l-2.177-1.677c-.603.412-1.383.647-2.295.647-1.765 0-3.25-1.191-3.794-2.78L1.6 10.53a6.74 6.74 0 0 0 6.03 3.722"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F6B704",
          d: "M3.836 8.794a4.1 4.1 0 0 1 0-2.588L1.6 4.47a6.76 6.76 0 0 0 0 6.06z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#E54335",
          d: "M7.63 3.426A3.68 3.68 0 0 1 10.22 4.44L12.146 2.5A6.5 6.5 0 0 0 7.63.749a6.74 6.74 0 0 0-6.03 3.72l2.236 1.736c.544-1.603 2.03-2.78 3.794-2.78"
        }
      )
    );
  }
);
Google.displayName = "Google";

var __defProp$2t = Object.defineProperty;
var __getOwnPropSymbols$2t = Object.getOwnPropertySymbols;
var __hasOwnProp$2t = Object.prototype.hasOwnProperty;
var __propIsEnum$2t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2t = (obj, key, value) => key in obj ? __defProp$2t(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2t = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2t.call(b, prop))
      __defNormalProp$2t(a, prop, b[prop]);
  if (__getOwnPropSymbols$2t)
    for (var prop of __getOwnPropSymbols$2t(b)) {
      if (__propIsEnum$2t.call(b, prop))
        __defNormalProp$2t(a, prop, b[prop]);
    }
  return a;
};
var __objRest$29 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2t.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2t)
    for (var prop of __getOwnPropSymbols$2t(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2t.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const GridList = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$29(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.611 2.834h4.445M8.611 5.5h4.445M8.611 9.5h4.445M8.611 12.167h4.445M5.056 1.944H2.833a.89.89 0 0 0-.889.89v2.221c0 .491.398.89.89.89h2.222c.49 0 .888-.399.888-.89V2.833a.89.89 0 0 0-.888-.889M5.056 9.056H2.833a.89.89 0 0 0-.889.889v2.222c0 .49.398.889.89.889h2.222c.49 0 .888-.398.888-.89V9.946a.89.89 0 0 0-.888-.89"
        }
      )
    );
  }
);
GridList.displayName = "GridList";

var __defProp$2s = Object.defineProperty;
var __getOwnPropSymbols$2s = Object.getOwnPropertySymbols;
var __hasOwnProp$2s = Object.prototype.hasOwnProperty;
var __propIsEnum$2s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2s = (obj, key, value) => key in obj ? __defProp$2s(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2s = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2s.call(b, prop))
      __defNormalProp$2s(a, prop, b[prop]);
  if (__getOwnPropSymbols$2s)
    for (var prop of __getOwnPropSymbols$2s(b)) {
      if (__propIsEnum$2s.call(b, prop))
        __defNormalProp$2s(a, prop, b[prop]);
    }
  return a;
};
var __objRest$28 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2s.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2s)
    for (var prop of __getOwnPropSymbols$2s(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2s.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const HandTruck = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$28(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2s({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.192 2.927 6.465 3.99a.86.86 0 0 0-.591 1.064l.944 3.312a.86.86 0 0 0 1.065.592l3.726-1.063a.86.86 0 0 0 .592-1.064l-.945-3.312a.86.86 0 0 0-1.064-.592M8.328 3.459l.473 1.656M6.876 11.708l7.298-2.081M4.933 10.357 2.77 2.744a.86.86 0 0 0-.828-.626h-.9"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.347 13.313a1.507 1.507 0 1 0 0-3.014 1.507 1.507 0 0 0 0 3.014"
        }
      )
    );
  }
);
HandTruck.displayName = "HandTruck";

var __defProp$2r = Object.defineProperty;
var __getOwnPropSymbols$2r = Object.getOwnPropertySymbols;
var __hasOwnProp$2r = Object.prototype.hasOwnProperty;
var __propIsEnum$2r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2r = (obj, key, value) => key in obj ? __defProp$2r(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2r = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2r.call(b, prop))
      __defNormalProp$2r(a, prop, b[prop]);
  if (__getOwnPropSymbols$2r)
    for (var prop of __getOwnPropSymbols$2r(b)) {
      if (__propIsEnum$2r.call(b, prop))
        __defNormalProp$2r(a, prop, b[prop]);
    }
  return a;
};
var __objRest$27 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2r.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2r)
    for (var prop of __getOwnPropSymbols$2r(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2r.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Hashtag = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$27(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.333,
          d: "M2.833 5.056h10.223M1.944 9.944h10.223M6.285 1.944 4.2 13.056M10.799 1.944 8.715 13.056"
        }
      )
    );
  }
);
Hashtag.displayName = "Hashtag";

var __defProp$2q = Object.defineProperty;
var __getOwnPropSymbols$2q = Object.getOwnPropertySymbols;
var __hasOwnProp$2q = Object.prototype.hasOwnProperty;
var __propIsEnum$2q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2q = (obj, key, value) => key in obj ? __defProp$2q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2q.call(b, prop))
      __defNormalProp$2q(a, prop, b[prop]);
  if (__getOwnPropSymbols$2q)
    for (var prop of __getOwnPropSymbols$2q(b)) {
      if (__propIsEnum$2q.call(b, prop))
        __defNormalProp$2q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$26 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2q)
    for (var prop of __getOwnPropSymbols$2q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const HeartBroken = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$26(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 3.473 5.722 5.722 9.278 7.5 7.5 9.278"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.081 13.03a.9.9 0 0 0 .837 0c1.395-.727 5.803-3.366 5.803-7.655a3.42 3.42 0 0 0-3.4-3.43A3.45 3.45 0 0 0 7.5 3.472a3.45 3.45 0 0 0-2.82-1.529 3.42 3.42 0 0 0-3.401 3.43c0 4.29 4.407 6.929 5.802 7.657"
        }
      )
    );
  }
);
HeartBroken.displayName = "HeartBroken";

var __defProp$2p = Object.defineProperty;
var __getOwnPropSymbols$2p = Object.getOwnPropertySymbols;
var __hasOwnProp$2p = Object.prototype.hasOwnProperty;
var __propIsEnum$2p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2p = (obj, key, value) => key in obj ? __defProp$2p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2p.call(b, prop))
      __defNormalProp$2p(a, prop, b[prop]);
  if (__getOwnPropSymbols$2p)
    for (var prop of __getOwnPropSymbols$2p(b)) {
      if (__propIsEnum$2p.call(b, prop))
        __defNormalProp$2p(a, prop, b[prop]);
    }
  return a;
};
var __objRest$25 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2p.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2p)
    for (var prop of __getOwnPropSymbols$2p(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2p.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Heart = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$25(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2p({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.081 13.03a.9.9 0 0 0 .837 0c1.395-.727 5.803-3.366 5.803-7.655a3.42 3.42 0 0 0-3.4-3.43A3.45 3.45 0 0 0 7.5 3.472a3.45 3.45 0 0 0-2.82-1.529 3.42 3.42 0 0 0-3.401 3.43c0 4.29 4.407 6.929 5.802 7.657"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Heart.displayName = "Heart";

var __defProp$2o = Object.defineProperty;
var __getOwnPropSymbols$2o = Object.getOwnPropertySymbols;
var __hasOwnProp$2o = Object.prototype.hasOwnProperty;
var __propIsEnum$2o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2o = (obj, key, value) => key in obj ? __defProp$2o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2o.call(b, prop))
      __defNormalProp$2o(a, prop, b[prop]);
  if (__getOwnPropSymbols$2o)
    for (var prop of __getOwnPropSymbols$2o(b)) {
      if (__propIsEnum$2o.call(b, prop))
        __defNormalProp$2o(a, prop, b[prop]);
    }
  return a;
};
var __objRest$24 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2o.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2o)
    for (var prop of __getOwnPropSymbols$2o(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2o.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const History = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$24(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2o({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.056 7.5a6.445 6.445 0 1 0 .48-2.444"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m1.171 2.438.363 2.618 2.617-.362M7.5 3.722V7.5l2.889 2"
        }
      )
    );
  }
);
History.displayName = "History";

var __defProp$2n = Object.defineProperty;
var __getOwnPropSymbols$2n = Object.getOwnPropertySymbols;
var __hasOwnProp$2n = Object.prototype.hasOwnProperty;
var __propIsEnum$2n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2n = (obj, key, value) => key in obj ? __defProp$2n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2n.call(b, prop))
      __defNormalProp$2n(a, prop, b[prop]);
  if (__getOwnPropSymbols$2n)
    for (var prop of __getOwnPropSymbols$2n(b)) {
      if (__propIsEnum$2n.call(b, prop))
        __defNormalProp$2n(a, prop, b[prop]);
    }
  return a;
};
var __objRest$23 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2n.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2n)
    for (var prop of __getOwnPropSymbols$2n(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2n.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const House = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$23(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2n({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.705 5.011 8.038 1.465a.89.89 0 0 0-1.076 0L2.296 5.01a.89.89 0 0 0-.352.709v6.448c0 .982.796 1.777 1.778 1.777h2.222V10.39a.89.89 0 0 1 .89-.889h1.333a.89.89 0 0 1 .889.889v3.555h2.222c.982 0 1.778-.795 1.778-1.777v-6.45a.89.89 0 0 0-.351-.707"
        }
      )
    );
  }
);
House.displayName = "House";

var __defProp$2m = Object.defineProperty;
var __getOwnPropSymbols$2m = Object.getOwnPropertySymbols;
var __hasOwnProp$2m = Object.prototype.hasOwnProperty;
var __propIsEnum$2m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2m = (obj, key, value) => key in obj ? __defProp$2m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2m.call(b, prop))
      __defNormalProp$2m(a, prop, b[prop]);
  if (__getOwnPropSymbols$2m)
    for (var prop of __getOwnPropSymbols$2m(b)) {
      if (__propIsEnum$2m.call(b, prop))
        __defNormalProp$2m(a, prop, b[prop]);
    }
  return a;
};
var __objRest$22 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2m)
    for (var prop of __getOwnPropSymbols$2m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const InboxSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$22(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2m({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.807 4.14a.667.667 0 0 0 0 .943l2.222 2.222a.665.665 0 0 0 .942 0l2.222-2.222a.667.667 0 1 0-.943-.943L8.166 5.225v-3.28a.667.667 0 0 0-1.334 0v3.279L5.748 4.139a.667.667 0 0 0-.943 0z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.563 2.828a2.43 2.43 0 0 0-2.275-1.55h-.122a.667.667 0 0 0 0 1.333h.122c.46 0 .865.277 1.033.705L12.965 7.5H9.944a.667.667 0 0 0-.667.667v.889c0 .122-.1.222-.222.222H5.944a.22.22 0 0 1-.223-.222v-.89a.667.667 0 0 0-.666-.666h-3.02l1.643-4.184a1.1 1.1 0 0 1 1.034-.705h.121a.667.667 0 0 0 0-1.333h-.121a2.43 2.43 0 0 0-2.276 1.55L.558 7.609a2.4 2.4 0 0 0-.17.895v2.774a2.446 2.446 0 0 0 2.445 2.444h9.334a2.446 2.446 0 0 0 2.444-2.444V8.504a2.4 2.4 0 0 0-.169-.895z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InboxSolid.displayName = "InboxSolid";

var __defProp$2l = Object.defineProperty;
var __getOwnPropSymbols$2l = Object.getOwnPropertySymbols;
var __hasOwnProp$2l = Object.prototype.hasOwnProperty;
var __propIsEnum$2l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2l = (obj, key, value) => key in obj ? __defProp$2l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2l.call(b, prop))
      __defNormalProp$2l(a, prop, b[prop]);
  if (__getOwnPropSymbols$2l)
    for (var prop of __getOwnPropSymbols$2l(b)) {
      if (__propIsEnum$2l.call(b, prop))
        __defNormalProp$2l(a, prop, b[prop]);
    }
  return a;
};
var __objRest$21 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2l.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2l)
    for (var prop of __getOwnPropSymbols$2l(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2l.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const InformationCircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$21(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2l({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.61 7.5a7.11 7.11 0 1 1-14.22 0 7.11 7.11 0 0 1 14.22 0M8.389 3.945a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0M6.61 6.611a.667.667 0 1 0 0 1.333h.225a.222.222 0 0 1 .217.27l-.408 1.837a1.555 1.555 0 0 0 1.519 1.893h.225a.667.667 0 0 0 0-1.333h-.225a.222.222 0 0 1-.217-.27l.408-1.837a1.555 1.555 0 0 0-1.519-1.893z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InformationCircleSolid.displayName = "InformationCircleSolid";

var __defProp$2k = Object.defineProperty;
var __getOwnPropSymbols$2k = Object.getOwnPropertySymbols;
var __hasOwnProp$2k = Object.prototype.hasOwnProperty;
var __propIsEnum$2k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2k = (obj, key, value) => key in obj ? __defProp$2k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2k.call(b, prop))
      __defNormalProp$2k(a, prop, b[prop]);
  if (__getOwnPropSymbols$2k)
    for (var prop of __getOwnPropSymbols$2k(b)) {
      if (__propIsEnum$2k.call(b, prop))
        __defNormalProp$2k(a, prop, b[prop]);
    }
  return a;
};
var __objRest$20 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2k.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2k)
    for (var prop of __getOwnPropSymbols$2k(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2k.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const InformationCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$20(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2k({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { stroke: color, strokeWidth: 1.5, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m6.829 6.784.037-.018a.671.671 0 0 1 .95.763l-.633 2.537a.67.67 0 0 0 .951.763l.037-.018M7.5 4.1h.007v.007H7.5z"
        }
      ), /* @__PURE__ */ React__namespace.createElement("circle", { cx: 7.5, cy: 7.5, r: 6.36 })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
InformationCircle.displayName = "InformationCircle";

var __defProp$2j = Object.defineProperty;
var __getOwnPropSymbols$2j = Object.getOwnPropertySymbols;
var __hasOwnProp$2j = Object.prototype.hasOwnProperty;
var __propIsEnum$2j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2j = (obj, key, value) => key in obj ? __defProp$2j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2j.call(b, prop))
      __defNormalProp$2j(a, prop, b[prop]);
  if (__getOwnPropSymbols$2j)
    for (var prop of __getOwnPropSymbols$2j(b)) {
      if (__propIsEnum$2j.call(b, prop))
        __defNormalProp$2j(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1$ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2j.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2j)
    for (var prop of __getOwnPropSymbols$2j(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2j.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const JavascriptEx = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1$(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2j({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M3.75.75h7.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3m6.469 10.489c-.633 0-.991-.33-1.266-.778l-1.043.605c.377.742 1.147 1.309 2.338 1.309 1.22 0 2.127-.632 2.127-1.784 0-1.07-.616-1.545-1.706-2.011l-.32-.137c-.552-.238-.79-.394-.79-.778 0-.31.238-.548.614-.548.369 0 .606.155.826.548l1-.64C11.575 6.283 10.988 6 10.172 6c-1.146 0-1.88.73-1.88 1.691 0 1.042.616 1.536 1.542 1.93l.32.136c.586.256.935.411.935.85 0 .367-.34.632-.871.632m-4.974-.008c-.44 0-.624-.302-.826-.659l-1.044.631c.302.64.898 1.17 1.925 1.17 1.137 0 1.916-.604 1.916-1.93v-4.37H5.933v4.353c0 .64-.266.805-.688.805",
          clipRule: "evenodd"
        }
      )
    );
  }
);
JavascriptEx.displayName = "JavascriptEx";

var __defProp$2i = Object.defineProperty;
var __getOwnPropSymbols$2i = Object.getOwnPropertySymbols;
var __hasOwnProp$2i = Object.prototype.hasOwnProperty;
var __propIsEnum$2i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2i = (obj, key, value) => key in obj ? __defProp$2i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2i.call(b, prop))
      __defNormalProp$2i(a, prop, b[prop]);
  if (__getOwnPropSymbols$2i)
    for (var prop of __getOwnPropSymbols$2i(b)) {
      if (__propIsEnum$2i.call(b, prop))
        __defNormalProp$2i(a, prop, b[prop]);
    }
  return a;
};
const Javascript = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F7DF1E",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M8.953 10.461c.275.448.633.778 1.266.778.532 0 .871-.265.871-.632 0-.439-.349-.594-.934-.85l-.32-.137c-.927-.393-1.542-.887-1.542-1.929 0-.96.733-1.691 1.88-1.691.815 0 1.402.283 1.825 1.025l-1 .64c-.22-.393-.457-.548-.826-.548-.376 0-.614.237-.614.548 0 .384.239.54.79.778l.32.137c1.09.466 1.706.942 1.706 2.01 0 1.153-.908 1.785-2.126 1.785-1.192 0-1.962-.567-2.339-1.31zm-4.533.111c.201.357.385.659.825.659.422 0 .688-.165.688-.805V6.073h1.283v4.37c0 1.326-.779 1.93-1.916 1.93-1.027 0-1.622-.53-1.925-1.17z"
        }
      )
    );
  }
);
Javascript.displayName = "Javascript";

var __defProp$2h = Object.defineProperty;
var __getOwnPropSymbols$2h = Object.getOwnPropertySymbols;
var __hasOwnProp$2h = Object.prototype.hasOwnProperty;
var __propIsEnum$2h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2h = (obj, key, value) => key in obj ? __defProp$2h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2h.call(b, prop))
      __defNormalProp$2h(a, prop, b[prop]);
  if (__getOwnPropSymbols$2h)
    for (var prop of __getOwnPropSymbols$2h(b)) {
      if (__propIsEnum$2h.call(b, prop))
        __defNormalProp$2h(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1_ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2h)
    for (var prop of __getOwnPropSymbols$2h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const KeySolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1_(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2h({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M1.344 14.164a.66.66 0 0 1-.484-.21.68.68 0 0 1-.18-.498l.158-2.531a.67.67 0 0 1 .193-.43L6.01 5.518a4 4 0 0 1-.065-.685A4.227 4.227 0 0 1 10.167.611a4.227 4.227 0 0 1 4.222 4.222 4.227 4.227 0 0 1-4.222 4.223 3.8 3.8 0 0 1-.721-.072l-1.482 1.439a.67.67 0 0 1-.464.188H6.167v1.333a.67.67 0 0 1-.18.456L4.523 13.96a.67.67 0 0 1-.487.21zM11.5 4.389a.89.89 0 1 0-1.779 0 .89.89 0 0 0 1.779 0"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
KeySolid.displayName = "KeySolid";

var __defProp$2g = Object.defineProperty;
var __getOwnPropSymbols$2g = Object.getOwnPropertySymbols;
var __hasOwnProp$2g = Object.prototype.hasOwnProperty;
var __propIsEnum$2g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2g = (obj, key, value) => key in obj ? __defProp$2g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2g.call(b, prop))
      __defNormalProp$2g(a, prop, b[prop]);
  if (__getOwnPropSymbols$2g)
    for (var prop of __getOwnPropSymbols$2g(b)) {
      if (__propIsEnum$2g.call(b, prop))
        __defNormalProp$2g(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1Z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2g)
    for (var prop of __getOwnPropSymbols$2g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Key = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1Z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { stroke: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m1.345 13.497.158-2.53L6.739 5.73a3.6 3.6 0 0 1-.128-.897 3.556 3.556 0 1 1 3.556 3.556c-.322 0-.629-.057-.926-.137L7.5 9.944h-2v2l-1.462 1.559z"
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { d: "M10.611 4.778a.389.389 0 1 0 0-.778.389.389 0 0 0 0 .778Z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Key.displayName = "Key";

var __defProp$2f = Object.defineProperty;
var __getOwnPropSymbols$2f = Object.getOwnPropertySymbols;
var __hasOwnProp$2f = Object.prototype.hasOwnProperty;
var __propIsEnum$2f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2f = (obj, key, value) => key in obj ? __defProp$2f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2f.call(b, prop))
      __defNormalProp$2f(a, prop, b[prop]);
  if (__getOwnPropSymbols$2f)
    for (var prop of __getOwnPropSymbols$2f(b)) {
      if (__propIsEnum$2f.call(b, prop))
        __defNormalProp$2f(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1Y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2f)
    for (var prop of __getOwnPropSymbols$2f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Keyboard = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1Y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.746 10.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M6.052 7.861h.444c.246 0 .445.2.445.445v.444a.444.444 0 0 1-.445.445h-.444a.444.444 0 0 1-.445-.445v-.444c0-.246.2-.445.445-.445M4.052 7.861h-.445a.444.444 0 0 0-.444.445v.444c0 .246.199.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M8.496 7.861h.445c.245 0 .444.2.444.445v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.445.444-.445M11.385 7.861h-.444a.444.444 0 0 0-.445.445v.444c0 .246.2.445.444.445h.445a.444.444 0 0 0 .444-.445v-.444a.444.444 0 0 0-.444-.445M4.83 6.084h.444c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444M7.718 6.084h-.444a.444.444 0 0 0-.445.444v.444c0 .246.2.445.445.445h.444a.444.444 0 0 0 .445-.445v-.444a.444.444 0 0 0-.445-.444M9.718 6.084h.445c.245 0 .444.198.444.444v.444a.444.444 0 0 1-.444.445h-.445a.444.444 0 0 1-.444-.445v-.444c0-.246.199-.444.444-.444" }), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.817.964a.75.75 0 0 0-1.438-.428.805.805 0 0 1-.772.575H9.052c-1.245 0-2.26.988-2.304 2.223H2.829A2.53 2.53 0 0 0 .302 5.86v5.778a2.53 2.53 0 0 0 2.527 2.528h9.334a2.53 2.53 0 0 0 2.528-2.528V5.861a2.53 2.53 0 0 0-2.528-2.527H8.25a.806.806 0 0 1 .802-.723h1.555a2.305 2.305 0 0 0 2.21-1.647M7.49 4.834h4.672c.568 0 1.028.46 1.028 1.027v5.778c0 .568-.46 1.028-1.027 1.028H2.829c-.567 0-1.027-.46-1.027-1.028V5.861c0-.567.46-1.027 1.027-1.027z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Keyboard.displayName = "Keyboard";

var __defProp$2e = Object.defineProperty;
var __getOwnPropSymbols$2e = Object.getOwnPropertySymbols;
var __hasOwnProp$2e = Object.prototype.hasOwnProperty;
var __propIsEnum$2e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2e = (obj, key, value) => key in obj ? __defProp$2e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2e.call(b, prop))
      __defNormalProp$2e(a, prop, b[prop]);
  if (__getOwnPropSymbols$2e)
    for (var prop of __getOwnPropSymbols$2e(b)) {
      if (__propIsEnum$2e.call(b, prop))
        __defNormalProp$2e(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1X = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2e)
    for (var prop of __getOwnPropSymbols$2e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const KlarnaEx = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1X(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2e({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M14.25 7.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0M5.906 4.603H4.658v5.425h1.248zm3.125 0H7.8a3.12 3.12 0 0 1-1.259 2.515l-.48.357 1.869 2.547h1.533l-1.72-2.33a4.3 4.3 0 0 0 1.287-3.09m.797 4.005a.821.821 0 1 1 .912 1.366.821.821 0 0 1-.912-1.366",
          clipRule: "evenodd"
        }
      )
    );
  }
);
KlarnaEx.displayName = "KlarnaEx";

var __defProp$2d = Object.defineProperty;
var __getOwnPropSymbols$2d = Object.getOwnPropertySymbols;
var __hasOwnProp$2d = Object.prototype.hasOwnProperty;
var __propIsEnum$2d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2d = (obj, key, value) => key in obj ? __defProp$2d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2d.call(b, prop))
      __defNormalProp$2d(a, prop, b[prop]);
  if (__getOwnPropSymbols$2d)
    for (var prop of __getOwnPropSymbols$2d(b)) {
      if (__propIsEnum$2d.call(b, prop))
        __defNormalProp$2d(a, prop, b[prop]);
    }
  return a;
};
const Klarna = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2d({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#FFB3C7",
          d: "M7.5 14.25a6.75 6.75 0 1 0 0-13.5 6.75 6.75 0 0 0 0 13.5"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M9.03 4.603H7.802a3.12 3.12 0 0 1-1.259 2.515l-.48.357 1.869 2.547h1.533l-1.72-2.33a4.3 4.3 0 0 0 1.287-3.09M5.906 4.603H4.658v5.425h1.248z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M10.285 8.47a.821.821 0 1 0-.001 1.642.821.821 0 0 0 .001-1.642"
        }
      )
    );
  }
);
Klarna.displayName = "Klarna";

var __defProp$2c = Object.defineProperty;
var __getOwnPropSymbols$2c = Object.getOwnPropertySymbols;
var __hasOwnProp$2c = Object.prototype.hasOwnProperty;
var __propIsEnum$2c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2c = (obj, key, value) => key in obj ? __defProp$2c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2c.call(b, prop))
      __defNormalProp$2c(a, prop, b[prop]);
  if (__getOwnPropSymbols$2c)
    for (var prop of __getOwnPropSymbols$2c(b)) {
      if (__propIsEnum$2c.call(b, prop))
        __defNormalProp$2c(a, prop, b[prop]);
    }
  return a;
};
const Klaviyo = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2c({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("path", { fill: "url(#a)", d: "M14.25 12H.75V3h13.5l-2.834 4.5z" }),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 15.15,
          x2: -1.275,
          y1: 3.626,
          y2: 13.751,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#ED7598" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 0.456, stopColor: "#F75650" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#FFA661" })
      ))
    );
  }
);
Klaviyo.displayName = "Klaviyo";

var __defProp$2b = Object.defineProperty;
var __getOwnPropSymbols$2b = Object.getOwnPropertySymbols;
var __hasOwnProp$2b = Object.prototype.hasOwnProperty;
var __propIsEnum$2b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2b = (obj, key, value) => key in obj ? __defProp$2b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2b.call(b, prop))
      __defNormalProp$2b(a, prop, b[prop]);
  if (__getOwnPropSymbols$2b)
    for (var prop of __getOwnPropSymbols$2b(b)) {
      if (__propIsEnum$2b.call(b, prop))
        __defNormalProp$2b(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1W = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2b)
    for (var prop of __getOwnPropSymbols$2b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Levels = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1W(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2b({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 7.722V2.833M13.056 7.722V1.056M10.389 7.722V1.944M7.722 7.722v-3.11M5.056 7.722V1.056M1.056 11.722 2.61 9.944l1.556 1.778v1.333a.89.89 0 0 1-.89.89H1.945a.89.89 0 0 1-.888-.89zM10.833 11.722l1.556-1.778 1.555 1.778v1.333a.89.89 0 0 1-.888.89h-1.334a.89.89 0 0 1-.889-.89z"
        }
      )
    );
  }
);
Levels.displayName = "Levels";

var __defProp$2a = Object.defineProperty;
var __getOwnPropSymbols$2a = Object.getOwnPropertySymbols;
var __hasOwnProp$2a = Object.prototype.hasOwnProperty;
var __propIsEnum$2a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2a = (obj, key, value) => key in obj ? __defProp$2a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2a.call(b, prop))
      __defNormalProp$2a(a, prop, b[prop]);
  if (__getOwnPropSymbols$2a)
    for (var prop of __getOwnPropSymbols$2a(b)) {
      if (__propIsEnum$2a.call(b, prop))
        __defNormalProp$2a(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1V = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2a.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2a)
    for (var prop of __getOwnPropSymbols$2a(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2a.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Lifebuoy = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1V(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.572 6.407c.315-.847.989-1.52 1.835-1.836M8.593 4.572c.847.316 1.52.989 1.836 1.836M10.428 8.593a3.14 3.14 0 0 1-1.836 1.836M6.407 10.428A3.14 3.14 0 0 1 4.57 8.593M5.387 13.162a6.06 6.06 0 0 1-3.55-3.55M13.162 9.613a6.06 6.06 0 0 1-3.55 3.55M9.613 1.838a6.06 6.06 0 0 1 3.55 3.55M1.838 5.387a6.06 6.06 0 0 1 3.55-3.55" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m8.592 4.572 1.166-3.124A6.5 6.5 0 0 0 7.5 1.042c-.795 0-1.556.144-2.259.406l1.166 3.124c.34-.127.707-.196 1.092-.196s.753.07 1.093.197zM10.428 8.592l3.124 1.166a6.5 6.5 0 0 0 .406-2.258c0-.795-.144-1.556-.406-2.26l-3.124 1.167c.127.34.196.707.196 1.092s-.07.753-.197 1.093zM6.408 10.428l-1.166 3.124a6.5 6.5 0 0 0 2.259.406c.795 0 1.556-.144 2.259-.406l-1.166-3.124c-.34.127-.707.196-1.092.196s-.753-.07-1.093-.197zM4.573 6.408 1.448 5.242A6.5 6.5 0 0 0 1.043 7.5c0 .795.143 1.556.405 2.26l3.125-1.167a3.1 3.1 0 0 1-.197-1.092c0-.385.07-.753.197-1.093z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Lifebuoy.displayName = "Lifebuoy";

var __defProp$29 = Object.defineProperty;
var __getOwnPropSymbols$29 = Object.getOwnPropertySymbols;
var __hasOwnProp$29 = Object.prototype.hasOwnProperty;
var __propIsEnum$29 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$29 = (obj, key, value) => key in obj ? __defProp$29(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$29 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$29.call(b, prop))
      __defNormalProp$29(a, prop, b[prop]);
  if (__getOwnPropSymbols$29)
    for (var prop of __getOwnPropSymbols$29(b)) {
      if (__propIsEnum$29.call(b, prop))
        __defNormalProp$29(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1U = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$29.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$29)
    for (var prop of __getOwnPropSymbols$29(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$29.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LightBulbSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1U(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$29({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.722 1.532A5.15 5.15 0 0 0 6.406.502C4.426.917 2.848 2.536 2.48 4.53c-.395 2.133.544 4.222 2.354 5.326v2.31a2.447 2.447 0 0 0 2.445 2.445h.444a2.447 2.447 0 0 0 2.445-2.444v-2.31A5.08 5.08 0 0 0 12.612 5.5a5.1 5.1 0 0 0-1.889-3.968m-3 11.746h-.444c-.534 0-.96-.386-1.066-.89h2.577c-.106.504-.533.89-1.066.89m1.111-2.222H6.167v-.89h2.666zm.916-5.53L8.167 7.11v1.057a.667.667 0 0 1-1.334 0V7.109L5.251 5.527a.667.667 0 1 1 .943-.943L7.501 5.89l1.307-1.306a.667.667 0 1 1 .943.943z"
        }
      )
    );
  }
);
LightBulbSolid.displayName = "LightBulbSolid";

var __defProp$28 = Object.defineProperty;
var __getOwnPropSymbols$28 = Object.getOwnPropertySymbols;
var __hasOwnProp$28 = Object.prototype.hasOwnProperty;
var __propIsEnum$28 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$28 = (obj, key, value) => key in obj ? __defProp$28(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$28 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$28.call(b, prop))
      __defNormalProp$28(a, prop, b[prop]);
  if (__getOwnPropSymbols$28)
    for (var prop of __getOwnPropSymbols$28(b)) {
      if (__propIsEnum$28.call(b, prop))
        __defNormalProp$28(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1T = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$28.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$28)
    for (var prop of __getOwnPropSymbols$28(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$28.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LightBulb = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1T(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$28({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 9.5V6.833L5.722 5.056M7.5 6.833l1.778-1.777M5.5 11.722h4"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.944 5.5a4.45 4.45 0 0 0-5.402-4.344c-1.718.358-3.09 1.772-3.408 3.496A4.445 4.445 0 0 0 5.5 9.465v2.702c0 .982.796 1.777 1.778 1.777h.444c.982 0 1.778-.795 1.778-1.777V9.465A4.44 4.44 0 0 0 11.944 5.5M5.5 9.5h4"
        }
      )
    );
  }
);
LightBulb.displayName = "LightBulb";

var __defProp$27 = Object.defineProperty;
var __getOwnPropSymbols$27 = Object.getOwnPropertySymbols;
var __hasOwnProp$27 = Object.prototype.hasOwnProperty;
var __propIsEnum$27 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$27 = (obj, key, value) => key in obj ? __defProp$27(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$27 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$27.call(b, prop))
      __defNormalProp$27(a, prop, b[prop]);
  if (__getOwnPropSymbols$27)
    for (var prop of __getOwnPropSymbols$27(b)) {
      if (__propIsEnum$27.call(b, prop))
        __defNormalProp$27(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1S = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$27.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$27)
    for (var prop of __getOwnPropSymbols$27(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$27.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Link = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1S(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$27({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Link.displayName = "Link";

var __defProp$26 = Object.defineProperty;
var __getOwnPropSymbols$26 = Object.getOwnPropertySymbols;
var __hasOwnProp$26 = Object.prototype.hasOwnProperty;
var __propIsEnum$26 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$26 = (obj, key, value) => key in obj ? __defProp$26(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$26 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$26.call(b, prop))
      __defNormalProp$26(a, prop, b[prop]);
  if (__getOwnPropSymbols$26)
    for (var prop of __getOwnPropSymbols$26(b)) {
      if (__propIsEnum$26.call(b, prop))
        __defNormalProp$26(a, prop, b[prop]);
    }
  return a;
};
const Linkedin = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$26({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#0077B5",
          d: "M11.438.75H3.561A2.813 2.813 0 0 0 .75 3.563v7.874a2.813 2.813 0 0 0 2.813 2.813h7.874a2.81 2.81 0 0 0 2.813-2.812V3.561A2.81 2.81 0 0 0 11.438.75M5.25 11.438H3.563V5.25H5.25zm-.844-6.901a.99.99 0 0 1-.984-.992c0-.548.44-.993.984-.993s.985.445.985.993c0 .547-.44.992-.985.992m7.594 6.9h-1.687V8.285c0-1.894-2.25-1.75-2.25 0v3.153H6.375V5.25h1.688v.993C8.848 4.788 12 4.68 12 7.636z"
        }
      )
    );
  }
);
Linkedin.displayName = "Linkedin";

var __defProp$25 = Object.defineProperty;
var __getOwnPropSymbols$25 = Object.getOwnPropertySymbols;
var __hasOwnProp$25 = Object.prototype.hasOwnProperty;
var __propIsEnum$25 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$25 = (obj, key, value) => key in obj ? __defProp$25(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$25 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$25.call(b, prop))
      __defNormalProp$25(a, prop, b[prop]);
  if (__getOwnPropSymbols$25)
    for (var prop of __getOwnPropSymbols$25(b)) {
      if (__propIsEnum$25.call(b, prop))
        __defNormalProp$25(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1R = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$25.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$25)
    for (var prop of __getOwnPropSymbols$25(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$25.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ListBullet = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1R(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$25({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.833 9.5H13.5M6.833 12.611H13.5M6.833 3.278H13.5M6.833 6.389H13.5M2.833 4.611a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M2.833 10.833a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666"
        }
      )
    );
  }
);
ListBullet.displayName = "ListBullet";

var __defProp$24 = Object.defineProperty;
var __getOwnPropSymbols$24 = Object.getOwnPropertySymbols;
var __hasOwnProp$24 = Object.prototype.hasOwnProperty;
var __propIsEnum$24 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$24 = (obj, key, value) => key in obj ? __defProp$24(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$24 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$24.call(b, prop))
      __defNormalProp$24(a, prop, b[prop]);
  if (__getOwnPropSymbols$24)
    for (var prop of __getOwnPropSymbols$24(b)) {
      if (__propIsEnum$24.call(b, prop))
        __defNormalProp$24(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1Q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$24.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$24)
    for (var prop of __getOwnPropSymbols$24(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$24.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ListCheckbox = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1Q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$24({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.611 4.167h5.333M8.611 10.833h5.333M1.495 4.514l1.208 1.208 3.02-3.926M4.611 9.055H2.39a.89.89 0 0 0-.889.89v2.221c0 .492.398.89.889.89H4.61c.491 0 .889-.398.889-.89V9.945a.89.89 0 0 0-.889-.889"
        }
      )
    );
  }
);
ListCheckbox.displayName = "ListCheckbox";

var __defProp$23 = Object.defineProperty;
var __getOwnPropSymbols$23 = Object.getOwnPropertySymbols;
var __hasOwnProp$23 = Object.prototype.hasOwnProperty;
var __propIsEnum$23 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$23 = (obj, key, value) => key in obj ? __defProp$23(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$23 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$23.call(b, prop))
      __defNormalProp$23(a, prop, b[prop]);
  if (__getOwnPropSymbols$23)
    for (var prop of __getOwnPropSymbols$23(b)) {
      if (__propIsEnum$23.call(b, prop))
        __defNormalProp$23(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1P = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$23.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$23)
    for (var prop of __getOwnPropSymbols$23(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$23.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ListTree = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1P(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$23({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.278 2.253H9.056a.89.89 0 0 0-.89.889v2.222c0 .49.399.889.89.889h2.222c.49 0 .889-.398.889-.89V3.143a.89.89 0 0 0-.89-.89M11.278 9.364H9.056a.89.89 0 0 0-.89.889v2.222c0 .49.399.889.89.889h2.222c.49 0 .889-.398.889-.89v-2.221a.89.89 0 0 0-.89-.89M5.944 4.475H4.167a1.334 1.334 0 0 1-1.334-1.333V.919"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.944 11.586H4.167a1.334 1.334 0 0 1-1.334-1.333V2.919"
        }
      )
    );
  }
);
ListTree.displayName = "ListTree";

var __defProp$22 = Object.defineProperty;
var __getOwnPropSymbols$22 = Object.getOwnPropertySymbols;
var __hasOwnProp$22 = Object.prototype.hasOwnProperty;
var __propIsEnum$22 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$22 = (obj, key, value) => key in obj ? __defProp$22(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$22 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$22.call(b, prop))
      __defNormalProp$22(a, prop, b[prop]);
  if (__getOwnPropSymbols$22)
    for (var prop of __getOwnPropSymbols$22(b)) {
      if (__propIsEnum$22.call(b, prop))
        __defNormalProp$22(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1O = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$22.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$22)
    for (var prop of __getOwnPropSymbols$22(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$22.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Loader = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1O(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$22({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 1.056v2.222" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.057 2.943-1.571 1.571", opacity: 0.88 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.944 7.5h-2.222", opacity: 0.75 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.057 12.057-1.571-1.571", opacity: 0.63 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 13.945v-2.223", opacity: 0.5 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m2.943 12.057 1.571-1.571", opacity: 0.38 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.056 7.5h2.222", opacity: 0.25 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m2.943 2.943 1.571 1.571", opacity: 0.13 })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Loader.displayName = "Loader";

var __defProp$21 = Object.defineProperty;
var __getOwnPropSymbols$21 = Object.getOwnPropertySymbols;
var __hasOwnProp$21 = Object.prototype.hasOwnProperty;
var __propIsEnum$21 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$21 = (obj, key, value) => key in obj ? __defProp$21(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$21 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$21.call(b, prop))
      __defNormalProp$21(a, prop, b[prop]);
  if (__getOwnPropSymbols$21)
    for (var prop of __getOwnPropSymbols$21(b)) {
      if (__propIsEnum$21.call(b, prop))
        __defNormalProp$21(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1N = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$21.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$21)
    for (var prop of __getOwnPropSymbols$21(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$21.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LockClosedSolidMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1N(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$21({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.389 7.5a.667.667 0 0 1-.667-.667V3.944A2.225 2.225 0 0 0 7.5 1.722a2.225 2.225 0 0 0-2.222 2.222v2.89a.667.667 0 0 1-1.333 0v-2.89A3.56 3.56 0 0 1 7.5.39a3.56 3.56 0 0 1 3.556 3.555v2.89a.667.667 0 0 1-.667.666"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.833 6.167H4.167A2.446 2.446 0 0 0 1.722 8.61v3.556a2.446 2.446 0 0 0 2.445 2.444h6.666a2.446 2.446 0 0 0 2.445-2.444V8.61a2.446 2.446 0 0 0-2.445-2.444m-2.666 4.666a.667.667 0 0 1-1.334 0v-.889a.667.667 0 0 1 1.334 0z"
        }
      )
    );
  }
);
LockClosedSolidMini.displayName = "LockClosedSolidMini";

var __defProp$20 = Object.defineProperty;
var __getOwnPropSymbols$20 = Object.getOwnPropertySymbols;
var __hasOwnProp$20 = Object.prototype.hasOwnProperty;
var __propIsEnum$20 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$20 = (obj, key, value) => key in obj ? __defProp$20(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$20 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$20.call(b, prop))
      __defNormalProp$20(a, prop, b[prop]);
  if (__getOwnPropSymbols$20)
    for (var prop of __getOwnPropSymbols$20(b)) {
      if (__propIsEnum$20.call(b, prop))
        __defNormalProp$20(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1M = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$20.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$20)
    for (var prop of __getOwnPropSymbols$20(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$20.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LockClosedSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1M(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$20({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.389 7.5a.667.667 0 0 1-.667-.667V3.944A2.225 2.225 0 0 0 7.5 1.722a2.225 2.225 0 0 0-2.222 2.222v2.89a.667.667 0 0 1-1.334 0v-2.89A3.56 3.56 0 0 1 7.5.39a3.56 3.56 0 0 1 3.556 3.555v2.89a.667.667 0 0 1-.667.666"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.833 6.167H4.167A2.446 2.446 0 0 0 1.722 8.61v3.556a2.446 2.446 0 0 0 2.445 2.444h6.666a2.446 2.446 0 0 0 2.445-2.444V8.61a2.446 2.446 0 0 0-2.445-2.444m-2.666 4.666a.667.667 0 0 1-1.334 0v-.889a.667.667 0 0 1 1.334 0z"
        }
      )
    );
  }
);
LockClosedSolid.displayName = "LockClosedSolid";

var __defProp$1$ = Object.defineProperty;
var __getOwnPropSymbols$1$ = Object.getOwnPropertySymbols;
var __hasOwnProp$1$ = Object.prototype.hasOwnProperty;
var __propIsEnum$1$ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1$ = (obj, key, value) => key in obj ? __defProp$1$(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1$ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1$.call(b, prop))
      __defNormalProp$1$(a, prop, b[prop]);
  if (__getOwnPropSymbols$1$)
    for (var prop of __getOwnPropSymbols$1$(b)) {
      if (__propIsEnum$1$.call(b, prop))
        __defNormalProp$1$(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1L = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1$.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1$)
    for (var prop of __getOwnPropSymbols$1$(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1$.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const LockOpenSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1L(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1$({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.833 7.5a.667.667 0 0 1-.666-.667V3.944a2.225 2.225 0 0 0-2.223-2.222 2.225 2.225 0 0 0-2.222 2.222v1.112a.667.667 0 0 1-1.333 0V3.944A3.56 3.56 0 0 1 3.944.39 3.56 3.56 0 0 1 7.5 3.944v2.89a.667.667 0 0 1-.667.666" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 6.167H5.5A2.446 2.446 0 0 0 3.056 8.61v3.556A2.446 2.446 0 0 0 5.5 14.61h6.667a2.446 2.446 0 0 0 2.444-2.444V8.61a2.446 2.446 0 0 0-2.444-2.444M9.5 10.833a.667.667 0 0 1-1.333 0v-.889a.667.667 0 0 1 1.333 0z" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
LockOpenSolid.displayName = "LockOpenSolid";

var __defProp$1_ = Object.defineProperty;
var __getOwnPropSymbols$1_ = Object.getOwnPropertySymbols;
var __hasOwnProp$1_ = Object.prototype.hasOwnProperty;
var __propIsEnum$1_ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1_ = (obj, key, value) => key in obj ? __defProp$1_(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1_ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1_.call(b, prop))
      __defNormalProp$1_(a, prop, b[prop]);
  if (__getOwnPropSymbols$1_)
    for (var prop of __getOwnPropSymbols$1_(b)) {
      if (__propIsEnum$1_.call(b, prop))
        __defNormalProp$1_(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1K = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1_.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1_)
    for (var prop of __getOwnPropSymbols$1_(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1_.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MagnifierAlert = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$1K(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1_({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#212121",
          fillRule: "evenodd",
          d: "M11.551.951a1.64 1.64 0 0 0-2.769 0L6.175 5.068c-.692 1.092.094 2.515 1.385 2.515h.384a.75.75 0 0 0 0-1.5H7.56a.139.139 0 0 1-.118-.213l2.607-4.116a.14.14 0 0 1 .235 0l2.607 4.116a.139.139 0 0 1-.117.213h-.385a.75.75 0 0 0 0 1.5h.385c1.29 0 2.076-1.423 1.384-2.515zm-6.05 2.633a3.695 3.695 0 1 0 3.14 5.64.75.75 0 0 1 1.275.791 5 5 0 0 1-.25.367l3.031 3.032a.75.75 0 1 1-1.06 1.06l-3.033-3.031A5.195 5.195 0 1 1 5.758 2.09a.75.75 0 1 1-.072 1.498 4 4 0 0 0-.186-.005m4.666-.612a.75.75 0 0 1 .75.75V5.5a.75.75 0 1 1-1.5 0V3.722a.75.75 0 0 1 .75-.75M11 7.806a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0",
          clipRule: "evenodd"
        }
      )
    );
  }
);
MagnifierAlert.displayName = "MagnifierAlert";

var __defProp$1Z = Object.defineProperty;
var __getOwnPropSymbols$1Z = Object.getOwnPropertySymbols;
var __hasOwnProp$1Z = Object.prototype.hasOwnProperty;
var __propIsEnum$1Z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1Z = (obj, key, value) => key in obj ? __defProp$1Z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1Z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1Z.call(b, prop))
      __defNormalProp$1Z(a, prop, b[prop]);
  if (__getOwnPropSymbols$1Z)
    for (var prop of __getOwnPropSymbols$1Z(b)) {
      if (__propIsEnum$1Z.call(b, prop))
        __defNormalProp$1Z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1J = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1Z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1Z)
    for (var prop of __getOwnPropSymbols$1Z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1Z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MagnifyingGlassMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1J(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1Z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 13.056 9.53 9.53M6.389 10.833a4.444 4.444 0 1 0 0-8.888 4.444 4.444 0 0 0 0 8.888"
        }
      )
    );
  }
);
MagnifyingGlassMini.displayName = "MagnifyingGlassMini";

var __defProp$1Y = Object.defineProperty;
var __getOwnPropSymbols$1Y = Object.getOwnPropertySymbols;
var __hasOwnProp$1Y = Object.prototype.hasOwnProperty;
var __propIsEnum$1Y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1Y = (obj, key, value) => key in obj ? __defProp$1Y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1Y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1Y.call(b, prop))
      __defNormalProp$1Y(a, prop, b[prop]);
  if (__getOwnPropSymbols$1Y)
    for (var prop of __getOwnPropSymbols$1Y(b)) {
      if (__propIsEnum$1Y.call(b, prop))
        __defNormalProp$1Y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1I = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1Y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1Y)
    for (var prop of __getOwnPropSymbols$1Y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1Y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MagnifyingGlass = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1I(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1Y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M13.056 13.056 9.53 9.53M6.389 10.833a4.444 4.444 0 1 0 0-8.888 4.444 4.444 0 0 0 0 8.888"
        }
      )
    );
  }
);
MagnifyingGlass.displayName = "MagnifyingGlass";

var __defProp$1X = Object.defineProperty;
var __getOwnPropSymbols$1X = Object.getOwnPropertySymbols;
var __hasOwnProp$1X = Object.prototype.hasOwnProperty;
var __propIsEnum$1X = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1X = (obj, key, value) => key in obj ? __defProp$1X(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1X = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1X.call(b, prop))
      __defNormalProp$1X(a, prop, b[prop]);
  if (__getOwnPropSymbols$1X)
    for (var prop of __getOwnPropSymbols$1X(b)) {
      if (__propIsEnum$1X.call(b, prop))
        __defNormalProp$1X(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1H = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1X.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1X)
    for (var prop of __getOwnPropSymbols$1X(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1X.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MapPin = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1H(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1X({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.437 4.814c0 2.319-3.937 6.464-3.937 6.464S3.563 7.134 3.563 4.814c0-2.378 2.035-3.758 3.937-3.758s3.937 1.38 3.937 3.758"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 6.167a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M13.056 13.945H1.944"
        }
      )
    );
  }
);
MapPin.displayName = "MapPin";

var __defProp$1W = Object.defineProperty;
var __getOwnPropSymbols$1W = Object.getOwnPropertySymbols;
var __hasOwnProp$1W = Object.prototype.hasOwnProperty;
var __propIsEnum$1W = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1W = (obj, key, value) => key in obj ? __defProp$1W(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1W = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1W.call(b, prop))
      __defNormalProp$1W(a, prop, b[prop]);
  if (__getOwnPropSymbols$1W)
    for (var prop of __getOwnPropSymbols$1W(b)) {
      if (__propIsEnum$1W.call(b, prop))
        __defNormalProp$1W(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1G = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1W.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1W)
    for (var prop of __getOwnPropSymbols$1W(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1W.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Map = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1G(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1W({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.056 1.982v9.333M9.944 3.685v9.333M1.752 2.679 4.802 2a.9.9 0 0 1 .497.032l4.402 1.601c.159.058.331.07.497.032l2.665-.592a.888.888 0 0 1 1.081.868v7.513c0 .417-.29.778-.696.867l-3.05.679a.9.9 0 0 1-.497-.032l-4.402-1.601a.9.9 0 0 0-.497-.032l-2.665.592a.89.89 0 0 1-1.081-.868V3.546c0-.417.29-.778.696-.867" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Map.displayName = "Map";

var __defProp$1V = Object.defineProperty;
var __getOwnPropSymbols$1V = Object.getOwnPropertySymbols;
var __hasOwnProp$1V = Object.prototype.hasOwnProperty;
var __propIsEnum$1V = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1V = (obj, key, value) => key in obj ? __defProp$1V(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1V = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1V.call(b, prop))
      __defNormalProp$1V(a, prop, b[prop]);
  if (__getOwnPropSymbols$1V)
    for (var prop of __getOwnPropSymbols$1V(b)) {
      if (__propIsEnum$1V.call(b, prop))
        __defNormalProp$1V(a, prop, b[prop]);
    }
  return a;
};
const Mastercard = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1V({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("path", { fill: "#FF5A00", d: "M9.524 3.815h-4.06v7.37h4.06z" }),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#EB001B",
          d: "M5.735 7.5c0-1.497.696-2.826 1.765-3.685a4.6 4.6 0 0 0-2.861-1.002C2.075 2.813 0 4.909 0 7.5s2.075 4.688 4.639 4.688A4.6 4.6 0 0 0 7.5 11.185 4.7 4.7 0 0 1 5.735 7.5"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F79E1B",
          d: "M15 7.5c0 2.591-2.075 4.688-4.639 4.688A4.6 4.6 0 0 1 7.5 11.185 4.68 4.68 0 0 0 9.265 7.5 4.72 4.72 0 0 0 7.5 3.815a4.58 4.58 0 0 1 2.86-1.002c2.565 0 4.64 2.11 4.64 4.687"
        }
      )
    );
  }
);
Mastercard.displayName = "Mastercard";

var __defProp$1U = Object.defineProperty;
var __getOwnPropSymbols$1U = Object.getOwnPropertySymbols;
var __hasOwnProp$1U = Object.prototype.hasOwnProperty;
var __propIsEnum$1U = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1U = (obj, key, value) => key in obj ? __defProp$1U(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1U = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1U.call(b, prop))
      __defNormalProp$1U(a, prop, b[prop]);
  if (__getOwnPropSymbols$1U)
    for (var prop of __getOwnPropSymbols$1U(b)) {
      if (__propIsEnum$1U.call(b, prop))
        __defNormalProp$1U(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1F = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1U.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1U)
    for (var prop of __getOwnPropSymbols$1U(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1U.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MediaPlay = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1F(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1U({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.162 2.058 12.6 6.73a.877.877 0 0 1 0 1.54l-8.438 4.672c-.594.33-1.329-.096-1.329-.77V2.828c0-.674.734-1.1 1.33-.77"
        }
      )
    );
  }
);
MediaPlay.displayName = "MediaPlay";

var __defProp$1T = Object.defineProperty;
var __getOwnPropSymbols$1T = Object.getOwnPropertySymbols;
var __hasOwnProp$1T = Object.prototype.hasOwnProperty;
var __propIsEnum$1T = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1T = (obj, key, value) => key in obj ? __defProp$1T(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1T = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1T.call(b, prop))
      __defNormalProp$1T(a, prop, b[prop]);
  if (__getOwnPropSymbols$1T)
    for (var prop of __getOwnPropSymbols$1T(b)) {
      if (__propIsEnum$1T.call(b, prop))
        __defNormalProp$1T(a, prop, b[prop]);
    }
  return a;
};
const Medusa = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1T({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#18181B",
          d: "M12.184 2.941 9.127 1.183a3.22 3.22 0 0 0-3.226 0L2.83 2.94a3.25 3.25 0 0 0-1.606 2.786V9.26c0 1.153.62 2.209 1.606 2.786l3.057 1.772c1 .577 2.226.577 3.226 0l3.057-1.772a3.2 3.2 0 0 0 1.606-2.786V5.727c.028-1.14-.592-2.209-1.592-2.786m-4.677 7.697A3.14 3.14 0 0 1 4.365 7.5a3.14 3.14 0 0 1 3.142-3.138c1.733 0 3.155 1.407 3.155 3.138a3.145 3.145 0 0 1-3.155 3.138"
        }
      )
    );
  }
);
Medusa.displayName = "Medusa";

var __defProp$1S = Object.defineProperty;
var __getOwnPropSymbols$1S = Object.getOwnPropertySymbols;
var __hasOwnProp$1S = Object.prototype.hasOwnProperty;
var __propIsEnum$1S = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1S = (obj, key, value) => key in obj ? __defProp$1S(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1S = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1S.call(b, prop))
      __defNormalProp$1S(a, prop, b[prop]);
  if (__getOwnPropSymbols$1S)
    for (var prop of __getOwnPropSymbols$1S(b)) {
      if (__propIsEnum$1S.call(b, prop))
        __defNormalProp$1S(a, prop, b[prop]);
    }
  return a;
};
const Meta = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1S({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#0467DF",
          d: "M4.322 2.519c-1.23 0-2.302.8-3.044 1.946C.44 5.755 0 7.427 0 9.03c0 .441.044.855.131 1.233q.065.274.166.537.097.248.232.476c.435.724 1.136 1.204 2.245 1.204.936 0 1.646-.419 2.479-1.527.474-.633.715-1.016 1.664-2.7l.472-.837.117-.203.114.187 1.345 2.247c.453.757 1.04 1.598 1.544 2.072.653.616 1.245.762 1.912.762.672 0 1.173-.222 1.535-.527a2.3 2.3 0 0 0 .506-.608c.339-.587.538-1.33.538-2.34 0-1.7-.426-3.349-1.303-4.657-.8-1.195-1.848-1.831-2.947-1.831-.654 0-1.305.292-1.908.817-.408.357-.786.807-1.138 1.282-.43-.547-.834-.967-1.223-1.285-.74-.604-1.447-.815-2.16-.815m6.35 1.283c.717 0 1.367.474 1.87 1.25.707 1.092 1.03 2.621 1.03 4 0 .967-.23 1.812-1.15 1.812-.363 0-.642-.144-1.04-.628-.31-.375-.84-1.173-1.77-2.723l-.386-.643q-.376-.63-.784-1.237c.044-.068.088-.14.132-.205.7-1.042 1.323-1.626 2.098-1.626m-6.376.346c.79 0 1.286.494 1.672.903.192.205.46.545.771.987l-.637.98c-.473.726-1.176 1.885-1.773 2.71-.745 1.03-1.131 1.136-1.554 1.136a.99.99 0 0 1-.864-.496c-.165-.267-.29-.707-.29-1.28 0-1.387.393-2.833 1.037-3.804.284-.43.603-.766.958-.958.208-.116.442-.177.68-.178"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Meta.displayName = "Meta";

var __defProp$1R = Object.defineProperty;
var __getOwnPropSymbols$1R = Object.getOwnPropertySymbols;
var __hasOwnProp$1R = Object.prototype.hasOwnProperty;
var __propIsEnum$1R = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1R = (obj, key, value) => key in obj ? __defProp$1R(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1R = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1R.call(b, prop))
      __defNormalProp$1R(a, prop, b[prop]);
  if (__getOwnPropSymbols$1R)
    for (var prop of __getOwnPropSymbols$1R(b)) {
      if (__propIsEnum$1R.call(b, prop))
        __defNormalProp$1R(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1E = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1R.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1R)
    for (var prop of __getOwnPropSymbols$1R(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1R.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MinusMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1E(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1R({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.5 7.5h10"
        }
      )
    );
  }
);
MinusMini.displayName = "MinusMini";

var __defProp$1Q = Object.defineProperty;
var __getOwnPropSymbols$1Q = Object.getOwnPropertySymbols;
var __hasOwnProp$1Q = Object.prototype.hasOwnProperty;
var __propIsEnum$1Q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1Q = (obj, key, value) => key in obj ? __defProp$1Q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1Q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1Q.call(b, prop))
      __defNormalProp$1Q(a, prop, b[prop]);
  if (__getOwnPropSymbols$1Q)
    for (var prop of __getOwnPropSymbols$1Q(b)) {
      if (__propIsEnum$1Q.call(b, prop))
        __defNormalProp$1Q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1D = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1Q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1Q)
    for (var prop of __getOwnPropSymbols$1Q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1Q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Minus = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1D(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1Q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.5 7.5h10"
        }
      )
    );
  }
);
Minus.displayName = "Minus";

var __defProp$1P = Object.defineProperty;
var __getOwnPropSymbols$1P = Object.getOwnPropertySymbols;
var __hasOwnProp$1P = Object.prototype.hasOwnProperty;
var __propIsEnum$1P = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1P = (obj, key, value) => key in obj ? __defProp$1P(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1P = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1P.call(b, prop))
      __defNormalProp$1P(a, prop, b[prop]);
  if (__getOwnPropSymbols$1P)
    for (var prop of __getOwnPropSymbols$1P(b)) {
      if (__propIsEnum$1P.call(b, prop))
        __defNormalProp$1P(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1C = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1P.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1P)
    for (var prop of __getOwnPropSymbols$1P(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1P.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const MoonSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1C(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1P({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M14.349 8.587a.665.665 0 0 0-.745-.033 4.9 4.9 0 0 1-2.548.723 4.894 4.894 0 0 1-4.89-4.889c0-1.019.315-1.997.91-2.832A.667.667 0 0 0 6.41.513 7.11 7.11 0 0 0 .611 7.5c0 3.92 3.19 7.111 7.111 7.111a7.11 7.11 0 0 0 6.876-5.32.67.67 0 0 0-.25-.704"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
MoonSolid.displayName = "MoonSolid";

var __defProp$1O = Object.defineProperty;
var __getOwnPropSymbols$1O = Object.getOwnPropertySymbols;
var __hasOwnProp$1O = Object.prototype.hasOwnProperty;
var __propIsEnum$1O = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1O = (obj, key, value) => key in obj ? __defProp$1O(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1O = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1O.call(b, prop))
      __defNormalProp$1O(a, prop, b[prop]);
  if (__getOwnPropSymbols$1O)
    for (var prop of __getOwnPropSymbols$1O(b)) {
      if (__propIsEnum$1O.call(b, prop))
        __defNormalProp$1O(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1B = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1O.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1O)
    for (var prop of __getOwnPropSymbols$1O(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1O.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Moon = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1B(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1O({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.056 9.945A5.555 5.555 0 0 1 5.5 4.389c0-1.202.385-2.31 1.033-3.22a6.443 6.443 0 0 0 1.19 12.776c2.997 0 5.509-2.05 6.23-4.822a5.5 5.5 0 0 1-2.897.822"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Moon.displayName = "Moon";

var __defProp$1N = Object.defineProperty;
var __getOwnPropSymbols$1N = Object.getOwnPropertySymbols;
var __hasOwnProp$1N = Object.prototype.hasOwnProperty;
var __propIsEnum$1N = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1N = (obj, key, value) => key in obj ? __defProp$1N(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1N = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1N.call(b, prop))
      __defNormalProp$1N(a, prop, b[prop]);
  if (__getOwnPropSymbols$1N)
    for (var prop of __getOwnPropSymbols$1N(b)) {
      if (__propIsEnum$1N.call(b, prop))
        __defNormalProp$1N(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1A = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1N.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1N)
    for (var prop of __getOwnPropSymbols$1N(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1N.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Newspaper = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1A(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1N({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.611 13.945a1.556 1.556 0 0 1-1.555-1.556V8.611c0-.245.199-.444.444-.444h.444" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.167 12.389c0 .859-.697 1.556-1.556 1.556h9.556c.982 0 1.777-.796 1.777-1.778V2.833c0-.982-.795-1.777-1.777-1.777H5.944c-.982 0-1.777.795-1.777 1.777z" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.278 3.722H6.833v2.222h4.445zM11.278 8.611H6.833M11.278 11.278H6.833" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Newspaper.displayName = "Newspaper";

var __defProp$1M = Object.defineProperty;
var __getOwnPropSymbols$1M = Object.getOwnPropertySymbols;
var __hasOwnProp$1M = Object.prototype.hasOwnProperty;
var __propIsEnum$1M = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1M = (obj, key, value) => key in obj ? __defProp$1M(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1M = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1M.call(b, prop))
      __defNormalProp$1M(a, prop, b[prop]);
  if (__getOwnPropSymbols$1M)
    for (var prop of __getOwnPropSymbols$1M(b)) {
      if (__propIsEnum$1M.call(b, prop))
        __defNormalProp$1M(a, prop, b[prop]);
    }
  return a;
};
const NextJs = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1M({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M7.058.76c-.029.003-.12.012-.204.018-1.915.173-3.71 1.207-4.846 2.795A6.7 6.7 0 0 0 .818 6.52c-.054.37-.06.48-.06.982 0 .503.006.612.06.982a6.77 6.77 0 0 0 4.612 5.449c.438.14.9.237 1.424.295.204.022 1.088.022 1.292 0a6.8 6.8 0 0 0 2.43-.71c.115-.06.138-.076.122-.089-.01-.008-.505-.67-1.098-1.472l-1.078-1.457-1.351-2a192 192 0 0 0-1.36-1.998c-.006-.001-.011.887-.014 1.972-.004 1.9-.005 1.976-.03 2.02a.24.24 0 0 1-.115.12c-.042.022-.08.026-.278.026h-.228l-.06-.038a.25.25 0 0 1-.09-.097l-.027-.059.003-2.643.004-2.644.04-.052a.4.4 0 0 1 .098-.08c.054-.027.075-.03.303-.03.27 0 .314.011.384.088.02.02.751 1.123 1.627 2.45.875 1.328 2.072 3.14 2.66 4.03l1.068 1.618.054-.036a7 7 0 0 0 1.385-1.215 6.7 6.7 0 0 0 1.587-3.448c.054-.37.06-.48.06-.982s-.006-.611-.06-.982A6.77 6.77 0 0 0 9.57 1.071 7 7 0 0 0 8.166.777 17 17 0 0 0 7.058.76m2.76 4.079a.27.27 0 0 1 .134.155c.01.034.013.767.01 2.42l-.003 2.37-.418-.641-.42-.641V6.779c0-1.114.006-1.74.014-1.77a.27.27 0 0 1 .13-.166c.054-.028.074-.03.281-.03.195 0 .23.002.273.026"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M11.09 13.21c-.046.03-.06.05-.02.027.029-.017.076-.053.069-.054a.3.3 0 0 0-.05.027m-.091.06q-.037.027.005.005c.016-.008.029-.017.029-.02 0-.01-.007-.008-.034.015m-.066.04q-.037.027.005.005c.016-.008.03-.018.03-.02 0-.01-.008-.008-.035.014m-.066.039q-.037.027.005.005c.016-.008.03-.017.03-.02 0-.01-.007-.008-.035.015m-.1.053c-.05.026-.048.037.002.012a.1.1 0 0 0 .04-.027c0-.009-.001-.008-.042.015"
        }
      )
    );
  }
);
NextJs.displayName = "NextJs";

var __defProp$1L = Object.defineProperty;
var __getOwnPropSymbols$1L = Object.getOwnPropertySymbols;
var __hasOwnProp$1L = Object.prototype.hasOwnProperty;
var __propIsEnum$1L = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1L = (obj, key, value) => key in obj ? __defProp$1L(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1L = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1L.call(b, prop))
      __defNormalProp$1L(a, prop, b[prop]);
  if (__getOwnPropSymbols$1L)
    for (var prop of __getOwnPropSymbols$1L(b)) {
      if (__propIsEnum$1L.call(b, prop))
        __defNormalProp$1L(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1L.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1L)
    for (var prop of __getOwnPropSymbols$1L(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1L.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const OpenRectArrowOut = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1L({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.167 1.944h3.11c.983 0 1.779.796 1.779 1.778v7.556c0 .982-.796 1.777-1.778 1.777H8.167M5.056 4.389l-3.112 3.11 3.112 3.112M1.944 7.5h6.667"
        }
      )
    );
  }
);
OpenRectArrowOut.displayName = "OpenRectArrowOut";

var __defProp$1K = Object.defineProperty;
var __getOwnPropSymbols$1K = Object.getOwnPropertySymbols;
var __hasOwnProp$1K = Object.prototype.hasOwnProperty;
var __propIsEnum$1K = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1K = (obj, key, value) => key in obj ? __defProp$1K(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1K = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1K.call(b, prop))
      __defNormalProp$1K(a, prop, b[prop]);
  if (__getOwnPropSymbols$1K)
    for (var prop of __getOwnPropSymbols$1K(b)) {
      if (__propIsEnum$1K.call(b, prop))
        __defNormalProp$1K(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1K.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1K)
    for (var prop of __getOwnPropSymbols$1K(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1K.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PaperClip = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1K({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M9.264 4.32 5.022 8.562a1.333 1.333 0 1 0 1.885 1.886l4.4-4.4a2.666 2.666 0 1 0-3.771-3.772l-4.4 4.4a4 4 0 0 0 5.656 5.657l4.243-4.243"
        }
      )
    );
  }
);
PaperClip.displayName = "PaperClip";

var __defProp$1J = Object.defineProperty;
var __getOwnPropSymbols$1J = Object.getOwnPropertySymbols;
var __hasOwnProp$1J = Object.prototype.hasOwnProperty;
var __propIsEnum$1J = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1J = (obj, key, value) => key in obj ? __defProp$1J(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1J = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1J.call(b, prop))
      __defNormalProp$1J(a, prop, b[prop]);
  if (__getOwnPropSymbols$1J)
    for (var prop of __getOwnPropSymbols$1J(b)) {
      if (__propIsEnum$1J.call(b, prop))
        __defNormalProp$1J(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1x = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1J.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1J)
    for (var prop of __getOwnPropSymbols$1J(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1J.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PauseSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1x(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1J({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M4.167 1.278H2.833c-.859 0-1.555.696-1.555 1.555v9.334c0 .859.696 1.555 1.555 1.555h1.334c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M12.167 1.278h-1.334c-.859 0-1.555.696-1.555 1.555v9.334c0 .859.696 1.555 1.555 1.555h1.334c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555"
        }
      )
    );
  }
);
PauseSolid.displayName = "PauseSolid";

var __defProp$1I = Object.defineProperty;
var __getOwnPropSymbols$1I = Object.getOwnPropertySymbols;
var __hasOwnProp$1I = Object.prototype.hasOwnProperty;
var __propIsEnum$1I = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1I = (obj, key, value) => key in obj ? __defProp$1I(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1I = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1I.call(b, prop))
      __defNormalProp$1I(a, prop, b[prop]);
  if (__getOwnPropSymbols$1I)
    for (var prop of __getOwnPropSymbols$1I(b)) {
      if (__propIsEnum$1I.call(b, prop))
        __defNormalProp$1I(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1w = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1I.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1I)
    for (var prop of __getOwnPropSymbols$1I(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1I.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PenPlus = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1w(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1I({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 13.5s3.199-.505 4.04-1.347c.843-.841 6.514-6.513 6.514-6.513a1.904 1.904 0 1 0-2.694-2.693L3.736 9.46c-.841.842-1.346 4.04-1.346 4.04zM3.278 1.056V5.5M5.5 3.278H1.056"
        }
      )
    );
  }
);
PenPlus.displayName = "PenPlus";

var __defProp$1H = Object.defineProperty;
var __getOwnPropSymbols$1H = Object.getOwnPropertySymbols;
var __hasOwnProp$1H = Object.prototype.hasOwnProperty;
var __propIsEnum$1H = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1H = (obj, key, value) => key in obj ? __defProp$1H(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1H = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1H.call(b, prop))
      __defNormalProp$1H(a, prop, b[prop]);
  if (__getOwnPropSymbols$1H)
    for (var prop of __getOwnPropSymbols$1H(b)) {
      if (__propIsEnum$1H.call(b, prop))
        __defNormalProp$1H(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1v = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1H.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1H)
    for (var prop of __getOwnPropSymbols$1H(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1H.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PencilSquareSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1v(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1H({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.833 2.611H1.056a.667.667 0 0 1 0-1.333h5.777a.667.667 0 0 1 0 1.333M3.278 5.722H1.056a.667.667 0 0 1 0-1.333h2.222a.667.667 0 0 1 0 1.333M10.535 2.032 3.593 8.973c-.767.768-1.245 3.028-1.416 3.964a.668.668 0 0 0 .775.776c.936-.17 3.196-.648 3.964-1.416l6.941-6.942a2.353 2.353 0 0 0 0-3.322c-.887-.888-2.434-.888-3.322-.001" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PencilSquareSolid.displayName = "PencilSquareSolid";

var __defProp$1G = Object.defineProperty;
var __getOwnPropSymbols$1G = Object.getOwnPropertySymbols;
var __hasOwnProp$1G = Object.prototype.hasOwnProperty;
var __propIsEnum$1G = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1G = (obj, key, value) => key in obj ? __defProp$1G(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1G = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1G.call(b, prop))
      __defNormalProp$1G(a, prop, b[prop]);
  if (__getOwnPropSymbols$1G)
    for (var prop of __getOwnPropSymbols$1G(b)) {
      if (__propIsEnum$1G.call(b, prop))
        __defNormalProp$1G(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1u = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1G.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1G)
    for (var prop of __getOwnPropSymbols$1G(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1G.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PencilSquare = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1u(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1G({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.833 13.056s3.2-.505 4.041-1.347l6.513-6.513a1.904 1.904 0 1 0-2.693-2.693L4.18 9.016c-.842.841-1.347 4.04-1.347 4.04zM6.833 1.944H1.056M3.278 5.056H1.056" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PencilSquare.displayName = "PencilSquare";

var __defProp$1F = Object.defineProperty;
var __getOwnPropSymbols$1F = Object.getOwnPropertySymbols;
var __hasOwnProp$1F = Object.prototype.hasOwnProperty;
var __propIsEnum$1F = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1F = (obj, key, value) => key in obj ? __defProp$1F(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1F = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1F.call(b, prop))
      __defNormalProp$1F(a, prop, b[prop]);
  if (__getOwnPropSymbols$1F)
    for (var prop of __getOwnPropSymbols$1F(b)) {
      if (__propIsEnum$1F.call(b, prop))
        __defNormalProp$1F(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1t = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1F.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1F)
    for (var prop of __getOwnPropSymbols$1F(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1F.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Pencil = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1t(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1F({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.903 6.236.985-.986c.521-.52.521-1.365 0-1.885l-1.252-1.253a1.333 1.333 0 0 0-1.885 0l-.986.986zM7.43 4.43 3.187 8.676c-.222.222-.381.5-.462.804l-1.002 3.798 3.798-1.002c.304-.08.582-.24.804-.462l4.244-4.245M8.986 5.986 5.07 9.904"
        }
      )
    );
  }
);
Pencil.displayName = "Pencil";

var __defProp$1E = Object.defineProperty;
var __getOwnPropSymbols$1E = Object.getOwnPropertySymbols;
var __hasOwnProp$1E = Object.prototype.hasOwnProperty;
var __propIsEnum$1E = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1E = (obj, key, value) => key in obj ? __defProp$1E(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1E = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1E.call(b, prop))
      __defNormalProp$1E(a, prop, b[prop]);
  if (__getOwnPropSymbols$1E)
    for (var prop of __getOwnPropSymbols$1E(b)) {
      if (__propIsEnum$1E.call(b, prop))
        __defNormalProp$1E(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1s = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1E.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1E)
    for (var prop of __getOwnPropSymbols$1E(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1E.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Phone = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1s(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1E({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M10.389 1.056H4.61c-.982 0-1.778.796-1.778 1.777v9.334c0 .982.796 1.778 1.778 1.778h5.778c.982 0 1.778-.796 1.778-1.778V2.833c0-.981-.796-1.777-1.778-1.777"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M6.389 1.056v.889H8.61v-.89M6.389 11.256H8.61"
        }
      )
    );
  }
);
Phone.displayName = "Phone";

var __defProp$1D = Object.defineProperty;
var __getOwnPropSymbols$1D = Object.getOwnPropertySymbols;
var __hasOwnProp$1D = Object.prototype.hasOwnProperty;
var __propIsEnum$1D = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1D = (obj, key, value) => key in obj ? __defProp$1D(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1D = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1D.call(b, prop))
      __defNormalProp$1D(a, prop, b[prop]);
  if (__getOwnPropSymbols$1D)
    for (var prop of __getOwnPropSymbols$1D(b)) {
      if (__propIsEnum$1D.call(b, prop))
        __defNormalProp$1D(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1r = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1D.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1D)
    for (var prop of __getOwnPropSymbols$1D(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1D.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PhotoSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1r(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1D({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.228 6.952a2.45 2.45 0 0 0-3.457 0l-5.545 5.546c.19.07.393.113.607.113h9.334c.982 0 1.777-.796 1.777-1.778V9.668z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 13.278H2.833A2.446 2.446 0 0 1 .39 10.833V4.167a2.446 2.446 0 0 1 2.444-2.445h9.334a2.446 2.446 0 0 1 2.444 2.445v6.666a2.446 2.446 0 0 1-2.444 2.445M2.833 3.056c-.612 0-1.11.498-1.11 1.11v6.667c0 .613.498 1.111 1.11 1.111h9.334c.612 0 1.11-.498 1.11-1.11V4.166c0-.613-.498-1.111-1.11-1.111z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.611 7.056a1.111 1.111 0 1 0 0-2.223 1.111 1.111 0 0 0 0 2.223" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
PhotoSolid.displayName = "PhotoSolid";

var __defProp$1C = Object.defineProperty;
var __getOwnPropSymbols$1C = Object.getOwnPropertySymbols;
var __hasOwnProp$1C = Object.prototype.hasOwnProperty;
var __propIsEnum$1C = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1C = (obj, key, value) => key in obj ? __defProp$1C(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1C = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1C.call(b, prop))
      __defNormalProp$1C(a, prop, b[prop]);
  if (__getOwnPropSymbols$1C)
    for (var prop of __getOwnPropSymbols$1C(b)) {
      if (__propIsEnum$1C.call(b, prop))
        __defNormalProp$1C(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1C.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1C)
    for (var prop of __getOwnPropSymbols$1C(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1C.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Photo = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1C({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#b)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.722 4.833c0 .49.399.89.889.89s.889-.4.889-.89a.89.89 0 0 0-.89-.889.89.89 0 0 0-.888.89" }), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M5.5 1.194a2.53 2.53 0 0 0-2.528 2.528v4.89A2.53 2.53 0 0 0 5.5 11.138h6.666a2.53 2.53 0 0 0 2.528-2.528V3.722a2.53 2.53 0 0 0-2.528-2.528zM4.472 3.722c0-.567.46-1.028 1.028-1.028h6.666c.568 0 1.028.46 1.028 1.028v2.933L11.77 5.23a1.64 1.64 0 0 0-2.318 0L5.113 9.563a1.03 1.03 0 0 1-.641-.953zm6.237 2.569 2.474 2.474a1.03 1.03 0 0 1-1.017.874H7.161l3.352-3.348a.14.14 0 0 1 .196 0",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.805 5.5a.75.75 0 0 0-1.5 0v5.778a2.527 2.527 0 0 0 2.528 2.528h7.556a.75.75 0 0 0 0-1.5H2.833c-.568 0-1.028-.46-1.028-1.028z" }))),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "b" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M-.5-.5h16v16h-16z" })))
    );
  }
);
Photo.displayName = "Photo";

var __defProp$1B = Object.defineProperty;
var __getOwnPropSymbols$1B = Object.getOwnPropertySymbols;
var __hasOwnProp$1B = Object.prototype.hasOwnProperty;
var __propIsEnum$1B = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1B = (obj, key, value) => key in obj ? __defProp$1B(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1B = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1B.call(b, prop))
      __defNormalProp$1B(a, prop, b[prop]);
  if (__getOwnPropSymbols$1B)
    for (var prop of __getOwnPropSymbols$1B(b)) {
      if (__propIsEnum$1B.call(b, prop))
        __defNormalProp$1B(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1p = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1B.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1B)
    for (var prop of __getOwnPropSymbols$1B(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1B.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PlayMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1p(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1B({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.926 6.147 4.487 1.475a1.55 1.55 0 0 0-1.555.02c-.478.282-.763.78-.763 1.333v9.344c0 .553.285 1.05.763 1.332.248.146.521.22.796.22.26 0 .52-.067.76-.198l8.436-4.672c.494-.273.8-.792.8-1.353s-.306-1.081-.8-1.354"
        }
      )
    );
  }
);
PlayMiniSolid.displayName = "PlayMiniSolid";

var __defProp$1A = Object.defineProperty;
var __getOwnPropSymbols$1A = Object.getOwnPropertySymbols;
var __hasOwnProp$1A = Object.prototype.hasOwnProperty;
var __propIsEnum$1A = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1A = (obj, key, value) => key in obj ? __defProp$1A(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1A = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1A.call(b, prop))
      __defNormalProp$1A(a, prop, b[prop]);
  if (__getOwnPropSymbols$1A)
    for (var prop of __getOwnPropSymbols$1A(b)) {
      if (__propIsEnum$1A.call(b, prop))
        __defNormalProp$1A(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1o = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1A.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1A)
    for (var prop of __getOwnPropSymbols$1A(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1A.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PlaySolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1o(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1A({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.922 6.147 4.485 1.475a1.55 1.55 0 0 0-1.555.02c-.478.282-.763.78-.763 1.333v9.344c0 .553.285 1.05.763 1.332.248.146.521.22.796.22.26 0 .52-.067.759-.198l8.436-4.672c.495-.273.801-.792.801-1.353s-.306-1.081-.8-1.354"
        }
      )
    );
  }
);
PlaySolid.displayName = "PlaySolid";

var __defProp$1z = Object.defineProperty;
var __getOwnPropSymbols$1z = Object.getOwnPropertySymbols;
var __hasOwnProp$1z = Object.prototype.hasOwnProperty;
var __propIsEnum$1z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1z = (obj, key, value) => key in obj ? __defProp$1z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1z.call(b, prop))
      __defNormalProp$1z(a, prop, b[prop]);
  if (__getOwnPropSymbols$1z)
    for (var prop of __getOwnPropSymbols$1z(b)) {
      if (__propIsEnum$1z.call(b, prop))
        __defNormalProp$1z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1n = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1z)
    for (var prop of __getOwnPropSymbols$1z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PlusMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1n(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 2.5v10M2.5 7.5h10"
        }
      )
    );
  }
);
PlusMini.displayName = "PlusMini";

var __defProp$1y = Object.defineProperty;
var __getOwnPropSymbols$1y = Object.getOwnPropertySymbols;
var __hasOwnProp$1y = Object.prototype.hasOwnProperty;
var __propIsEnum$1y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1y = (obj, key, value) => key in obj ? __defProp$1y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1y.call(b, prop))
      __defNormalProp$1y(a, prop, b[prop]);
  if (__getOwnPropSymbols$1y)
    for (var prop of __getOwnPropSymbols$1y(b)) {
      if (__propIsEnum$1y.call(b, prop))
        __defNormalProp$1y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1m = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1y)
    for (var prop of __getOwnPropSymbols$1y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Plus = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1m(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 2.5v10M2.5 7.5h10"
        }
      )
    );
  }
);
Plus.displayName = "Plus";

var __defProp$1x = Object.defineProperty;
var __getOwnPropSymbols$1x = Object.getOwnPropertySymbols;
var __hasOwnProp$1x = Object.prototype.hasOwnProperty;
var __propIsEnum$1x = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1x = (obj, key, value) => key in obj ? __defProp$1x(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1x = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1x.call(b, prop))
      __defNormalProp$1x(a, prop, b[prop]);
  if (__getOwnPropSymbols$1x)
    for (var prop of __getOwnPropSymbols$1x(b)) {
      if (__propIsEnum$1x.call(b, prop))
        __defNormalProp$1x(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1l = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1x.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1x)
    for (var prop of __getOwnPropSymbols$1x(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1x.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const PuzzleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1l(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1x({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M13.201 7.202a.667.667 0 0 0 .966-.595v-1.55a2.446 2.446 0 0 0-2.445-2.445h-1.578c.01-.074.023-.146.023-.222A1.78 1.78 0 0 0 8.389.612 1.78 1.78 0 0 0 6.61 2.39c0 .076.013.148.022.222H5.056A2.446 2.446 0 0 0 2.61 5.057v1.577c-.074-.01-.146-.022-.222-.022A1.78 1.78 0 0 0 .61 8.39c0 .98.797 1.778 1.778 1.778.076 0 .148-.014.222-.023v1.578a2.446 2.446 0 0 0 2.445 2.445h1.55a.67.67 0 0 0 .596-.965 1.3 1.3 0 0 1-.146-.59c0-.736.598-1.334 1.333-1.334s1.333.598 1.333 1.333q0 .297-.147.592a.665.665 0 0 0 .597.964h1.55a2.446 2.446 0 0 0 2.445-2.445v-1.55a.668.668 0 0 0-.966-.596c-.913.458-1.923-.253-1.923-1.186 0-.934 1.008-1.645 1.923-1.187z"
        }
      )
    );
  }
);
PuzzleSolid.displayName = "PuzzleSolid";

var __defProp$1w = Object.defineProperty;
var __getOwnPropSymbols$1w = Object.getOwnPropertySymbols;
var __hasOwnProp$1w = Object.prototype.hasOwnProperty;
var __propIsEnum$1w = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1w = (obj, key, value) => key in obj ? __defProp$1w(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1w = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1w.call(b, prop))
      __defNormalProp$1w(a, prop, b[prop]);
  if (__getOwnPropSymbols$1w)
    for (var prop of __getOwnPropSymbols$1w(b)) {
      if (__propIsEnum$1w.call(b, prop))
        __defNormalProp$1w(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1k = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1w.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1w)
    for (var prop of __getOwnPropSymbols$1w(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1w.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Puzzle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1k(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1w({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.611 6.833c.33 0 .636.105.889.282v-2.06c0-.98-.796-1.777-1.778-1.777h-2.06a1.556 1.556 0 1 0-2.548 0H5.057c-.983 0-1.778.796-1.778 1.777v2.06a1.556 1.556 0 1 0 0 2.548v2.06c0 .98.795 1.777 1.778 1.777h2.06a1.556 1.556 0 1 1 2.548 0h2.058c.982 0 1.778-.796 1.778-1.778v-2.06a1.556 1.556 0 1 1-.889-2.83"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Puzzle.displayName = "Puzzle";

var __defProp$1v = Object.defineProperty;
var __getOwnPropSymbols$1v = Object.getOwnPropertySymbols;
var __hasOwnProp$1v = Object.prototype.hasOwnProperty;
var __propIsEnum$1v = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1v = (obj, key, value) => key in obj ? __defProp$1v(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1v = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1v.call(b, prop))
      __defNormalProp$1v(a, prop, b[prop]);
  if (__getOwnPropSymbols$1v)
    for (var prop of __getOwnPropSymbols$1v(b)) {
      if (__propIsEnum$1v.call(b, prop))
        __defNormalProp$1v(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1j = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1v.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1v)
    for (var prop of __getOwnPropSymbols$1v(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1v.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const QuestionMarkCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1j(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1v({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.593 4.807c-.538 0-1.018.247-1.234.835a.75.75 0 0 1-1.408-.517c.474-1.291 1.605-1.818 2.642-1.818 1.127 0 2.366.825 2.366 2.357 0 .538-.141.973-.394 1.33-.237.333-.543.554-.763.709l-.016.011c-.464.326-.639.449-.701.804a.75.75 0 1 1-1.478-.259c.173-.984.836-1.44 1.244-1.722l.089-.062c.215-.15.328-.245.401-.35.058-.08.118-.205.118-.46 0-.548-.402-.858-.866-.858M6.425 10.67a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0" }), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M.305 7.5a7.194 7.194 0 1 1 14.39 0 7.194 7.194 0 0 1-14.39 0M7.5 1.806a5.694 5.694 0 1 0 0 11.389 5.694 5.694 0 0 0 0-11.39",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
QuestionMarkCircle.displayName = "QuestionMarkCircle";

var __defProp$1u = Object.defineProperty;
var __getOwnPropSymbols$1u = Object.getOwnPropertySymbols;
var __hasOwnProp$1u = Object.prototype.hasOwnProperty;
var __propIsEnum$1u = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1u = (obj, key, value) => key in obj ? __defProp$1u(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1u = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1u.call(b, prop))
      __defNormalProp$1u(a, prop, b[prop]);
  if (__getOwnPropSymbols$1u)
    for (var prop of __getOwnPropSymbols$1u(b)) {
      if (__propIsEnum$1u.call(b, prop))
        __defNormalProp$1u(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1i = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1u.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1u)
    for (var prop of __getOwnPropSymbols$1u(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1u.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const QuestionMark = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1i(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1u({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.594 4.807c-.538 0-1.018.247-1.234.835a.75.75 0 0 1-1.408-.517c.474-1.291 1.604-1.818 2.641-1.818 1.128 0 2.367.825 2.367 2.357 0 .538-.142.972-.395 1.33-.237.333-.543.554-.763.708l-.016.012c-.464.326-.639.449-.7.804a.75.75 0 1 1-1.478-.259c.172-.985.835-1.441 1.243-1.722l.09-.062c.214-.151.327-.246.4-.35.058-.08.119-.205.119-.46 0-.549-.403-.858-.867-.858M6.425 10.67a.89.89 0 0 0 1.778 0 .89.89 0 0 0-1.778 0" }), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M.306 7.5a7.194 7.194 0 1 1 14.389 0 7.194 7.194 0 0 1-14.39 0M7.5 1.805a5.694 5.694 0 1 0 0 11.39 5.694 5.694 0 0 0 0-11.39",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
QuestionMark.displayName = "QuestionMark";

var __defProp$1t = Object.defineProperty;
var __getOwnPropSymbols$1t = Object.getOwnPropertySymbols;
var __hasOwnProp$1t = Object.prototype.hasOwnProperty;
var __propIsEnum$1t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1t = (obj, key, value) => key in obj ? __defProp$1t(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1t = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1t.call(b, prop))
      __defNormalProp$1t(a, prop, b[prop]);
  if (__getOwnPropSymbols$1t)
    for (var prop of __getOwnPropSymbols$1t(b)) {
      if (__propIsEnum$1t.call(b, prop))
        __defNormalProp$1t(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1h = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1t.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1t)
    for (var prop of __getOwnPropSymbols$1t(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1t.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const QueueList = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1h(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.167 1.944H2.833a.89.89 0 0 0-.889.89v3.11c0 .491.398.89.89.89h9.333c.49 0 .889-.399.889-.89v-3.11a.89.89 0 0 0-.89-.89M1.944 9.944h11.112M1.944 13.056h11.112"
        }
      )
    );
  }
);
QueueList.displayName = "QueueList";

var __defProp$1s = Object.defineProperty;
var __getOwnPropSymbols$1s = Object.getOwnPropertySymbols;
var __hasOwnProp$1s = Object.prototype.hasOwnProperty;
var __propIsEnum$1s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1s = (obj, key, value) => key in obj ? __defProp$1s(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1s = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1s.call(b, prop))
      __defNormalProp$1s(a, prop, b[prop]);
  if (__getOwnPropSymbols$1s)
    for (var prop of __getOwnPropSymbols$1s(b)) {
      if (__propIsEnum$1s.call(b, prop))
        __defNormalProp$1s(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1g = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1s.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1s)
    for (var prop of __getOwnPropSymbols$1s(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1s.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ReactJsEx = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1g(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1s({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3M7.5 8.406a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812M6.05 6.648q.246-.425.506-.81a14 14 0 0 1 1.908 0 14 14 0 0 1 .955 1.653 14 14 0 0 1-.955 1.653 14 14 0 0 1-1.908 0A14 14 0 0 1 5.6 7.49q.204-.418.449-.843m-.65-.375q.097-.168.197-.33-.305.045-.588.104.09.274.203.562.092-.168.188-.336m2.11-1.218q-.195 0-.385.005.192-.24.385-.457.192.216.385.457a15 15 0 0 0-.385-.005M6.14 5.12c.275-.385.56-.74.845-1.057a7 7 0 0 0-.359-.315c-.385-.313-.734-.515-1.025-.609s-.481-.069-.603.002c-.123.07-.24.223-.304.522s-.064.702.015 1.192q.036.226.093.469c.418-.09.867-.158 1.338-.204m2.738 0c-.275-.385-.56-.74-.846-1.057q.183-.172.36-.315c.385-.313.734-.515 1.024-.609s.482-.069.604.002c.123.07.24.223.304.522s.064.702-.015 1.192q-.036.226-.093.469c-.418-.09-.867-.158-1.338-.204m2.172-.147a7 7 0 0 1-.107.535q.27.082.517.175c.513.196.954.439 1.274.727.32.289.548.653.548 1.081s-.229.792-.548 1.08-.76.532-1.274.728q-.246.093-.517.175.065.275.107.534c.087.543.097 1.047.007 1.468-.09.42-.291.8-.662 1.014-.37.214-.8.199-1.21.066-.409-.132-.84-.393-1.266-.74a7 7 0 0 1-.41-.36q-.206.195-.41.36c-.426.347-.857.608-1.267.74-.41.133-.84.148-1.21-.066s-.571-.594-.661-1.014-.08-.925.007-1.468a7 7 0 0 1 .107-.535A7 7 0 0 1 3.56 9.3c-.514-.196-.955-.439-1.275-.727-.32-.289-.548-.653-.548-1.081s.229-.792.548-1.08c.32-.29.761-.532 1.275-.728a7 7 0 0 1 .516-.175 7 7 0 0 1-.107-.535c-.087-.542-.097-1.046-.007-1.467.09-.42.291-.8.662-1.014.37-.214.8-.199 1.21-.066.409.132.84.393 1.266.74q.204.165.41.36.206-.195.41-.36c.426-.347.857-.608 1.267-.74.41-.133.839-.148 1.21.065.37.214.571.594.661 1.015s.08.925-.007 1.467m-1.628.97q.305.045.588.104-.09.274-.203.562a15 15 0 0 0-.385-.667m1.317.287c-.132.407-.296.83-.492 1.261.196.43.36.854.492 1.26q.24-.071.453-.153c.463-.177.813-.378 1.04-.583.226-.205.3-.383.3-.524s-.074-.32-.3-.524c-.227-.205-.576-.406-1.04-.583a7 7 0 0 0-.453-.154M9.62 8.71q.096-.168.188-.336.113.287.203.562-.283.06-.588.105zm-.741 1.153c.47-.046.92-.115 1.338-.204q.058.243.093.47c.079.489.079.892.015 1.19-.064.3-.181.452-.304.523-.122.07-.313.096-.604.002-.29-.095-.64-.296-1.024-.609a7 7 0 0 1-.36-.315q.431-.478.846-1.057m-.984.06q-.192.24-.385.457a11 11 0 0 1-.385-.457 15 15 0 0 0 .77 0M5.399 8.709q.097.168.197.33-.305-.045-.588-.104.09-.274.203-.562.092.168.188.336m.741 1.153c-.47-.046-.92-.115-1.338-.204q-.058.244-.093.469c-.079.49-.079.893-.015 1.192s.181.451.304.522c.122.07.313.096.604.002.29-.095.64-.296 1.024-.609q.177-.144.36-.315-.431-.478-.846-1.057M3.826 8.598q.213.082.453.153c.131-.406.296-.83.492-1.26-.196-.43-.36-.854-.492-1.26q-.24.071-.453.153c-.463.177-.812.378-1.04.583-.226.205-.3.382-.3.524 0 .141.074.32.3.524.228.205.577.406 1.04.583",
          clipRule: "evenodd"
        }
      )
    );
  }
);
ReactJsEx.displayName = "ReactJsEx";

var __defProp$1r = Object.defineProperty;
var __getOwnPropSymbols$1r = Object.getOwnPropertySymbols;
var __hasOwnProp$1r = Object.prototype.hasOwnProperty;
var __propIsEnum$1r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1r = (obj, key, value) => key in obj ? __defProp$1r(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1r = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1r.call(b, prop))
      __defNormalProp$1r(a, prop, b[prop]);
  if (__getOwnPropSymbols$1r)
    for (var prop of __getOwnPropSymbols$1r(b)) {
      if (__propIsEnum$1r.call(b, prop))
        __defNormalProp$1r(a, prop, b[prop]);
    }
  return a;
};
const ReactJs = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#61DAFB",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M7.509 9.552c2.98 0 5.397-.923 5.397-2.061S10.49 5.43 7.51 5.43 2.11 6.353 2.11 7.49c0 1.14 2.417 2.062 5.398 2.062Z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M5.724 8.521c1.49 2.582 3.498 4.214 4.483 3.644.986-.569.577-3.123-.914-5.705C7.803 3.88 5.795 2.247 4.81 2.816c-.986.57-.577 3.124.914 5.705Z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeWidth: 0.75,
          d: "M5.724 6.46c-1.49 2.582-1.9 5.136-.914 5.705.985.57 2.993-1.062 4.483-3.644s1.9-5.136.914-5.705S7.214 3.88 5.724 6.46Z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M7.5 8.406a.906.906 0 1 0 0-1.812.906.906 0 0 0 0 1.812"
        }
      )
    );
  }
);
ReactJs.displayName = "ReactJs";

var __defProp$1q = Object.defineProperty;
var __getOwnPropSymbols$1q = Object.getOwnPropertySymbols;
var __hasOwnProp$1q = Object.prototype.hasOwnProperty;
var __propIsEnum$1q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1q = (obj, key, value) => key in obj ? __defProp$1q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1q.call(b, prop))
      __defNormalProp$1q(a, prop, b[prop]);
  if (__getOwnPropSymbols$1q)
    for (var prop of __getOwnPropSymbols$1q(b)) {
      if (__propIsEnum$1q.call(b, prop))
        __defNormalProp$1q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1f = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1q)
    for (var prop of __getOwnPropSymbols$1q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ReceiptPercent = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1f(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.833 1.593C1.368 1.593.306 2.88.306 4.307v1.474c0 .414.335.75.75.75.375 0 .805.361.805.97 0 .607-.43.968-.805.968a.75.75 0 0 0-.75.75v1.474c0 1.426 1.062 2.715 2.527 2.715h9.334c1.465 0 2.527-1.289 2.527-2.715V9.219a.75.75 0 0 0-.75-.75c-.376 0-.805-.361-.805-.969s.43-.97.805-.97a.75.75 0 0 0 .75-.75V4.308c0-1.426-1.062-2.714-2.527-2.714zM1.806 4.307c0-.743.528-1.214 1.027-1.214h9.334c.499 0 1.027.471 1.027 1.214v.855c-.936.341-1.555 1.303-1.555 2.338s.62 1.997 1.555 2.338v.855c0 .743-.528 1.215-1.027 1.215H2.833c-.499 0-1.027-.472-1.027-1.215v-.855C2.742 9.498 3.36 8.536 3.36 7.5c0-1.035-.62-1.997-1.555-2.338zm8.224.663a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0m-3.419.752a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0m3.556 3.556a.889.889 0 1 1-1.778 0 .889.889 0 0 1 1.778 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ReceiptPercent.displayName = "ReceiptPercent";

var __defProp$1p = Object.defineProperty;
var __getOwnPropSymbols$1p = Object.getOwnPropertySymbols;
var __hasOwnProp$1p = Object.prototype.hasOwnProperty;
var __propIsEnum$1p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1p = (obj, key, value) => key in obj ? __defProp$1p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1p.call(b, prop))
      __defNormalProp$1p(a, prop, b[prop]);
  if (__getOwnPropSymbols$1p)
    for (var prop of __getOwnPropSymbols$1p(b)) {
      if (__propIsEnum$1p.call(b, prop))
        __defNormalProp$1p(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1e = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1p.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1p)
    for (var prop of __getOwnPropSymbols$1p(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1p.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Receipt = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1e(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1p({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.944 1.944H1.056M12.611 4.611v9.333l-2.444-1.333L7.5 13.944l-2.667-1.333-2.444 1.333V4.611M4.611 9.5h3.111M4.611 6.833h3.111M9.944 9.5h.445M9.944 6.833h.445" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Receipt.displayName = "Receipt";

var __defProp$1o = Object.defineProperty;
var __getOwnPropSymbols$1o = Object.getOwnPropertySymbols;
var __hasOwnProp$1o = Object.prototype.hasOwnProperty;
var __propIsEnum$1o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1o = (obj, key, value) => key in obj ? __defProp$1o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1o.call(b, prop))
      __defNormalProp$1o(a, prop, b[prop]);
  if (__getOwnPropSymbols$1o)
    for (var prop of __getOwnPropSymbols$1o(b)) {
      if (__propIsEnum$1o.call(b, prop))
        __defNormalProp$1o(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1d = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1o.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1o)
    for (var prop of __getOwnPropSymbols$1o(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1o.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ReplaySolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1d(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1o({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.67 2.535a1.34 1.34 0 0 0-1.348-.018L4.445 6.325A1.35 1.35 0 0 0 3.75 7.5c0 .488.266.938.694 1.175l6.879 3.808a1.35 1.35 0 0 0 1.349-.018 1.33 1.33 0 0 0 .662-1.156V3.692c0-.48-.247-.912-.662-1.156zM2.292 1.667a.625.625 0 0 0-.625.625v10.416a.625.625 0 0 0 1.25 0V2.292a.625.625 0 0 0-.625-.625"
        }
      )
    );
  }
);
ReplaySolid.displayName = "ReplaySolid";

var __defProp$1n = Object.defineProperty;
var __getOwnPropSymbols$1n = Object.getOwnPropertySymbols;
var __hasOwnProp$1n = Object.prototype.hasOwnProperty;
var __propIsEnum$1n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1n = (obj, key, value) => key in obj ? __defProp$1n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1n.call(b, prop))
      __defNormalProp$1n(a, prop, b[prop]);
  if (__getOwnPropSymbols$1n)
    for (var prop of __getOwnPropSymbols$1n(b)) {
      if (__propIsEnum$1n.call(b, prop))
        __defNormalProp$1n(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1c = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1n.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1n)
    for (var prop of __getOwnPropSymbols$1n(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1n.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Resize = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1c(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1n({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m13.182 8.94-4.243 4.242M12.303 3.818l-8.485 8.485"
        }
      )
    );
  }
);
Resize.displayName = "Resize";

var __defProp$1m = Object.defineProperty;
var __getOwnPropSymbols$1m = Object.getOwnPropertySymbols;
var __hasOwnProp$1m = Object.prototype.hasOwnProperty;
var __propIsEnum$1m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1m = (obj, key, value) => key in obj ? __defProp$1m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1m.call(b, prop))
      __defNormalProp$1m(a, prop, b[prop]);
  if (__getOwnPropSymbols$1m)
    for (var prop of __getOwnPropSymbols$1m(b)) {
      if (__propIsEnum$1m.call(b, prop))
        __defNormalProp$1m(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1b = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1m)
    for (var prop of __getOwnPropSymbols$1m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const RocketLaunchSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1b(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1m({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.615 14.611h-1.56a.667.667 0 0 1-.666-.666v-1.56c0-.871.514-1.668 1.31-2.028a.666.666 0 1 1 .549 1.214.9.9 0 0 0-.526.815v.892h.893c.35 0 .669-.206.814-.525a.667.667 0 0 1 1.214.549 2.23 2.23 0 0 1-2.028 1.31" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.744 9.022c3.232-3.55 2.877-7.553 2.823-8.006a.67.67 0 0 0-.584-.584c-.455-.056-4.455-.41-8.006 2.823l-.9-.161a3.61 3.61 0 0 0-3.563 1.458L-.156 6.91a.667.667 0 0 0 .783 1.009c.012-.005.95-.348 2.343-.293-.15.39-.258.734-.335 1.013a.67.67 0 0 0 .172.648l2.908 2.908a.67.67 0 0 0 .647.172c.278-.077.622-.184 1.01-.336.052 1.383-.287 2.334-.29 2.344a.666.666 0 0 0 1.007.781l2.36-1.671a3.6 3.6 0 0 0 1.456-3.558l-.162-.903zM9.5 3.944a1.555 1.555 0 1 1 0 3.111 1.555 1.555 0 0 1 0-3.11M1.9 6.316l.703-.992a2.26 2.26 0 0 1 2.241-.917l.03.005a11.7 11.7 0 0 0-1.313 1.932 9.3 9.3 0 0 0-1.66-.029zm7.779 6.08-.995.704a9 9 0 0 0-.028-1.66c.614-.33 1.273-.767 1.931-1.313l.006.033a2.26 2.26 0 0 1-.915 2.236" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
RocketLaunchSolid.displayName = "RocketLaunchSolid";

var __defProp$1l = Object.defineProperty;
var __getOwnPropSymbols$1l = Object.getOwnPropertySymbols;
var __hasOwnProp$1l = Object.prototype.hasOwnProperty;
var __propIsEnum$1l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1l = (obj, key, value) => key in obj ? __defProp$1l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1l.call(b, prop))
      __defNormalProp$1l(a, prop, b[prop]);
  if (__getOwnPropSymbols$1l)
    for (var prop of __getOwnPropSymbols$1l(b)) {
      if (__propIsEnum$1l.call(b, prop))
        __defNormalProp$1l(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1a = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1l.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1l)
    for (var prop of __getOwnPropSymbols$1l(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1l.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const RocketLaunch = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1a(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1l({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.265 8.386c3.118-3.271 2.736-7.084 2.704-7.355C13.697 1 9.885.617 6.614 3.735a10.4 10.4 0 0 0-2.842 4.702l2.79 2.79c.706-.193 2.815-.86 4.703-2.841"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M9.743 6.75a1.493 1.493 0 1 0 0-2.985 1.493 1.493 0 0 0 0 2.985"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.5 12.48c-.234.519-.757.88-1.363.88H1.64v-1.496c0-.606.36-1.13.88-1.364M11.211 8.442l.21 1.175a2.8 2.8 0 0 1-1.138 2.779L8.02 14s.548-1.434.238-3.416M6.558 3.789l-1.172-.21a2.8 2.8 0 0 0-2.784 1.14L1 6.98s1.434-.548 3.416-.238"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
RocketLaunch.displayName = "RocketLaunch";

var __defProp$1k = Object.defineProperty;
var __getOwnPropSymbols$1k = Object.getOwnPropertySymbols;
var __hasOwnProp$1k = Object.prototype.hasOwnProperty;
var __propIsEnum$1k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1k = (obj, key, value) => key in obj ? __defProp$1k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1k.call(b, prop))
      __defNormalProp$1k(a, prop, b[prop]);
  if (__getOwnPropSymbols$1k)
    for (var prop of __getOwnPropSymbols$1k(b)) {
      if (__propIsEnum$1k.call(b, prop))
        __defNormalProp$1k(a, prop, b[prop]);
    }
  return a;
};
var __objRest$19 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1k.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1k)
    for (var prop of __getOwnPropSymbols$1k(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1k.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Rss = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$19(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1k({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.05 13v-.55a5.5 5.5 0 0 0-5.5-5.5H2M2 2h.55C8.321 2 13 6.679 13 12.45V13m-9.9-.55a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0"
        }
      )
    );
  }
);
Rss.displayName = "Rss";

var __defProp$1j = Object.defineProperty;
var __getOwnPropSymbols$1j = Object.getOwnPropertySymbols;
var __hasOwnProp$1j = Object.prototype.hasOwnProperty;
var __propIsEnum$1j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1j = (obj, key, value) => key in obj ? __defProp$1j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1j.call(b, prop))
      __defNormalProp$1j(a, prop, b[prop]);
  if (__getOwnPropSymbols$1j)
    for (var prop of __getOwnPropSymbols$1j(b)) {
      if (__propIsEnum$1j.call(b, prop))
        __defNormalProp$1j(a, prop, b[prop]);
    }
  return a;
};
const Sanity = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1j({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#F03E2F",
          d: "M4.909 4.862a3.2 3.2 0 0 1-.469-.383c-.513-.512-.776-1.162-.776-2.007V2.15C4.518 1.273 5.834.75 7.403.75c3.034 0 4.79 1.575 5.223 3.791H9.874C9.57 3.667 8.81 2.986 7.426 2.986c-1.363 0-2.327.718-2.517 1.876m-1.525-2.39c0 1.82 1.144 2.904 3.435 3.475l2.427.553c2.168.49 3.488 1.704 3.488 3.684a3.72 3.72 0 0 1-.808 2.385c0-1.975-1.04-3.043-3.55-3.685l-2.382-.532c-1.909-.427-3.381-1.426-3.381-3.577a3.7 3.7 0 0 1 .771-2.303m7.03 7.55c-.165 1.257-1.177 1.966-2.643 1.966-1.302 0-2.277-.532-2.646-1.682h-2.86c.464 2.504 2.548 3.944 5.527 3.944 1.59 0 2.968-.49 3.853-1.372v-.31c0-.933-.244-1.617-.755-2.146a3 3 0 0 0-.476-.4"
        }
      )
    );
  }
);
Sanity.displayName = "Sanity";

var __defProp$1i = Object.defineProperty;
var __getOwnPropSymbols$1i = Object.getOwnPropertySymbols;
var __hasOwnProp$1i = Object.prototype.hasOwnProperty;
var __propIsEnum$1i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1i = (obj, key, value) => key in obj ? __defProp$1i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1i.call(b, prop))
      __defNormalProp$1i(a, prop, b[prop]);
  if (__getOwnPropSymbols$1i)
    for (var prop of __getOwnPropSymbols$1i(b)) {
      if (__propIsEnum$1i.call(b, prop))
        __defNormalProp$1i(a, prop, b[prop]);
    }
  return a;
};
var __objRest$18 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1i.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1i)
    for (var prop of __getOwnPropSymbols$1i(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1i.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ScrollText = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$18(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M12.611 13.5c.736 0 1.333-.597 1.333-1.333v-.89c0-.245-.199-.444-.444-.444H6.833c-.245 0-.444.2-.444.445v.889a1.334 1.334 0 0 1-2.667 0V2.833a1.334 1.334 0 0 0-2.666 0v1.778c0 .49.398.889.888.889h1.778M12.611 13.5H5.056"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M2.389 1.5h8.444c.736 0 1.334.597 1.334 1.333v5.778M6.167 4.611h3.555M6.167 7.278h3.555"
        }
      )
    );
  }
);
ScrollText.displayName = "ScrollText";

var __defProp$1h = Object.defineProperty;
var __getOwnPropSymbols$1h = Object.getOwnPropertySymbols;
var __hasOwnProp$1h = Object.prototype.hasOwnProperty;
var __propIsEnum$1h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1h = (obj, key, value) => key in obj ? __defProp$1h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1h.call(b, prop))
      __defNormalProp$1h(a, prop, b[prop]);
  if (__getOwnPropSymbols$1h)
    for (var prop of __getOwnPropSymbols$1h(b)) {
      if (__propIsEnum$1h.call(b, prop))
        __defNormalProp$1h(a, prop, b[prop]);
    }
  return a;
};
const Sendgrid = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1h({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#51A9E3",
          d: "M9.75.75h-3.6c-.495 0-.9.405-.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9.405.9.9v2.7c0 .495.405.9.9.9h2.7c.495 0 .9-.405.9-.9V1.2a.45.45 0 0 0-.45-.45zM5.25 14.25h3.6c.495 0 .9-.405.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7a.903.903 0 0 1-.9-.9v-2.7c0-.495-.405-.9-.9-.9h-2.7c-.495 0-.9.405-.9.9v7.65c0 .247.202.45.45.45z"
        }
      )
    );
  }
);
Sendgrid.displayName = "Sendgrid";

var __defProp$1g = Object.defineProperty;
var __getOwnPropSymbols$1g = Object.getOwnPropertySymbols;
var __hasOwnProp$1g = Object.prototype.hasOwnProperty;
var __propIsEnum$1g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1g = (obj, key, value) => key in obj ? __defProp$1g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1g.call(b, prop))
      __defNormalProp$1g(a, prop, b[prop]);
  if (__getOwnPropSymbols$1g)
    for (var prop of __getOwnPropSymbols$1g(b)) {
      if (__propIsEnum$1g.call(b, prop))
        __defNormalProp$1g(a, prop, b[prop]);
    }
  return a;
};
var __objRest$17 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1g)
    for (var prop of __getOwnPropSymbols$1g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ServerSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$17(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "m14.497 8.835-1.96-5.885a2.44 2.44 0 0 0-2.319-1.672H4.782a2.44 2.44 0 0 0-2.32 1.672L.505 8.835s-.115.39-.115.665v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.5c0-.342-.115-.665-.115-.665m-1.22 2.443a.667.667 0 0 1-.666.666H2.39a.667.667 0 0 1-.667-.666V9.5c0-.368.299-.667.667-.667H12.61c.368 0 .667.299.667.667z" }), /* @__PURE__ */ React__namespace.createElement("path", { d: "M5.722 9.722H3.278a.667.667 0 0 0 0 1.334h2.444a.667.667 0 0 0 0-1.334" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerSolid.displayName = "ServerSolid";

var __defProp$1f = Object.defineProperty;
var __getOwnPropSymbols$1f = Object.getOwnPropertySymbols;
var __hasOwnProp$1f = Object.prototype.hasOwnProperty;
var __propIsEnum$1f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1f = (obj, key, value) => key in obj ? __defProp$1f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1f.call(b, prop))
      __defNormalProp$1f(a, prop, b[prop]);
  if (__getOwnPropSymbols$1f)
    for (var prop of __getOwnPropSymbols$1f(b)) {
      if (__propIsEnum$1f.call(b, prop))
        __defNormalProp$1f(a, prop, b[prop]);
    }
  return a;
};
var __objRest$16 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1f)
    for (var prop of __getOwnPropSymbols$1f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ServerStackSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$16(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.611 1.278H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V3.278c0-1.103-.897-2-2-2M3.278 4.833a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333m2.222 0a.667.667 0 1 1 0-1.333.667.667 0 0 1 0 1.333M12.611 7.944H2.39c-1.103 0-2 .897-2 2v1.778c0 1.103.897 2 2 2H12.61c1.103 0 2-.897 2-2V9.944c0-1.103-.897-2-2-2M3.278 11.5a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334m2.222 0a.667.667 0 1 1 0-1.334.667.667 0 0 1 0 1.334" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStackSolid.displayName = "ServerStackSolid";

var __defProp$1e = Object.defineProperty;
var __getOwnPropSymbols$1e = Object.getOwnPropertySymbols;
var __hasOwnProp$1e = Object.prototype.hasOwnProperty;
var __propIsEnum$1e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1e = (obj, key, value) => key in obj ? __defProp$1e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1e.call(b, prop))
      __defNormalProp$1e(a, prop, b[prop]);
  if (__getOwnPropSymbols$1e)
    for (var prop of __getOwnPropSymbols$1e(b)) {
      if (__propIsEnum$1e.call(b, prop))
        __defNormalProp$1e(a, prop, b[prop]);
    }
  return a;
};
var __objRest$15 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1e)
    for (var prop of __getOwnPropSymbols$1e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ServerStack = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$15(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1e({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.389 2.08c-.269 0-.583.253-.583.69v1.92c0 .436.314.69.583.69h10.222c.27 0 .584-.254.584-.69V2.77c0-.437-.315-.69-.584-.69zm-2.083.69c0-1.155.88-2.19 2.083-2.19h10.222c1.204 0 2.084 1.035 2.084 2.19v1.92c0 1.154-.88 2.19-2.084 2.19H2.39C1.185 6.88.306 5.843.306 4.69zm4.069.96a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m2.5 0a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-3.3 8.34a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6m3.3-.8a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0m-5.07-.96c0-.436.315-.69.584-.69h10.222c.27 0 .584.254.584.69v1.92c0 .437-.315.69-.584.69H2.39c-.269 0-.583-.253-.583-.69zm.584-2.19C1.185 8.12.306 9.158.306 10.31v1.92c0 1.155.88 2.19 2.083 2.19h10.222c1.204 0 2.084-1.035 2.084-2.19v-1.92c0-1.154-.88-2.19-2.084-2.19z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ServerStack.displayName = "ServerStack";

var __defProp$1d = Object.defineProperty;
var __getOwnPropSymbols$1d = Object.getOwnPropertySymbols;
var __hasOwnProp$1d = Object.prototype.hasOwnProperty;
var __propIsEnum$1d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1d = (obj, key, value) => key in obj ? __defProp$1d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1d.call(b, prop))
      __defNormalProp$1d(a, prop, b[prop]);
  if (__getOwnPropSymbols$1d)
    for (var prop of __getOwnPropSymbols$1d(b)) {
      if (__propIsEnum$1d.call(b, prop))
        __defNormalProp$1d(a, prop, b[prop]);
    }
  return a;
};
var __objRest$14 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1d.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1d)
    for (var prop of __getOwnPropSymbols$1d(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1d.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Server = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$14(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1d({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.611 8.167H2.39c-.736 0-1.333.597-1.333 1.333v1.778c0 .736.597 1.333 1.333 1.333H12.61c.736 0 1.333-.597 1.333-1.333V9.5c0-.736-.597-1.333-1.333-1.333" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m1.136 9.046 1.96-5.886a1.78 1.78 0 0 1 1.687-1.216h5.436c.766 0 1.446.49 1.687 1.216l1.96 5.886M3.278 10.389h2.444" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Server.displayName = "Server";

var __defProp$1c = Object.defineProperty;
var __getOwnPropSymbols$1c = Object.getOwnPropertySymbols;
var __hasOwnProp$1c = Object.prototype.hasOwnProperty;
var __propIsEnum$1c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1c = (obj, key, value) => key in obj ? __defProp$1c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1c.call(b, prop))
      __defNormalProp$1c(a, prop, b[prop]);
  if (__getOwnPropSymbols$1c)
    for (var prop of __getOwnPropSymbols$1c(b)) {
      if (__propIsEnum$1c.call(b, prop))
        __defNormalProp$1c(a, prop, b[prop]);
    }
  return a;
};
var __objRest$13 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1c)
    for (var prop of __getOwnPropSymbols$1c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Share = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$13(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1c({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.802 6.53 4.506-2.504M4.802 8.47l4.506 2.504M3.056 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.056 5.056a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.056 13.944a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        }
      )
    );
  }
);
Share.displayName = "Share";

var __defProp$1b = Object.defineProperty;
var __getOwnPropSymbols$1b = Object.getOwnPropertySymbols;
var __hasOwnProp$1b = Object.prototype.hasOwnProperty;
var __propIsEnum$1b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1b = (obj, key, value) => key in obj ? __defProp$1b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1b.call(b, prop))
      __defNormalProp$1b(a, prop, b[prop]);
  if (__getOwnPropSymbols$1b)
    for (var prop of __getOwnPropSymbols$1b(b)) {
      if (__propIsEnum$1b.call(b, prop))
        __defNormalProp$1b(a, prop, b[prop]);
    }
  return a;
};
const Shipbob = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1b({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#2470AF",
          d: "m13.488 4.127-.002-.004a1 1 0 0 0-.044-.068l-.012-.016-.04-.048-.023-.025-.034-.034a1 1 0 0 0-.104-.084l-.03-.02q-.02-.013-.043-.026-.039-.021-.078-.037l-.032-.014-.052-.018-.03-.01-.06-.016q-.01-.003-.021-.004l-.076-.012H12.8a.9.9 0 0 0-.541.111L7.5 6.484 4.1 4.567l3.404-1.92 2.27 1.279c.431.243.983.1 1.232-.323a.87.87 0 0 0-.33-1.202L7.955.868a.92.92 0 0 0-.902 0L1.866 3.792a.868.868 0 0 0-.022 1.537L7.05 8.264q.001 0 .002.002a1 1 0 0 0 .083.04l.024.011.052.018a.9.9 0 0 0 .287.048H7.5a1 1 0 0 0 .292-.05q.025-.008.046-.016l.026-.011a1 1 0 0 0 .082-.04h.002l3.854-2.174v3.836l-4.3 2.427-4.304-2.427V7.501a.89.89 0 0 0-.902-.88.89.89 0 0 0-.902.88v2.935c0 .314.171.605.45.762l5.206 2.935a.9.9 0 0 0 .45.117c.155 0 .31-.04.452-.117l5.206-2.935a.88.88 0 0 0 .45-.762v-5.87a.85.85 0 0 0-.12-.44"
        }
      )
    );
  }
);
Shipbob.displayName = "Shipbob";

var __defProp$1a = Object.defineProperty;
var __getOwnPropSymbols$1a = Object.getOwnPropertySymbols;
var __hasOwnProp$1a = Object.prototype.hasOwnProperty;
var __propIsEnum$1a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1a = (obj, key, value) => key in obj ? __defProp$1a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1a.call(b, prop))
      __defNormalProp$1a(a, prop, b[prop]);
  if (__getOwnPropSymbols$1a)
    for (var prop of __getOwnPropSymbols$1a(b)) {
      if (__propIsEnum$1a.call(b, prop))
        __defNormalProp$1a(a, prop, b[prop]);
    }
  return a;
};
var __objRest$12 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1a.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1a)
    for (var prop of __getOwnPropSymbols$1a(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1a.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ShoppingBag = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$12(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 4.16V2.7a1.875 1.875 0 1 1 3.75 0V4.16"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.445 4.16h6.11c.865 0 1.587.66 1.66 1.522l.544 6.25a1.666 1.666 0 0 1-1.66 1.811H3.901a1.666 1.666 0 0 1-1.66-1.81l.543-6.25A1.667 1.667 0 0 1 4.445 4.16"
        }
      )
    );
  }
);
ShoppingBag.displayName = "ShoppingBag";

var __defProp$19 = Object.defineProperty;
var __getOwnPropSymbols$19 = Object.getOwnPropertySymbols;
var __hasOwnProp$19 = Object.prototype.hasOwnProperty;
var __propIsEnum$19 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$19 = (obj, key, value) => key in obj ? __defProp$19(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$19 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$19.call(b, prop))
      __defNormalProp$19(a, prop, b[prop]);
  if (__getOwnPropSymbols$19)
    for (var prop of __getOwnPropSymbols$19(b)) {
      if (__propIsEnum$19.call(b, prop))
        __defNormalProp$19(a, prop, b[prop]);
    }
  return a;
};
var __objRest$11 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$19.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$19)
    for (var prop of __getOwnPropSymbols$19(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$19.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ShoppingCartSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$11(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$19({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.267 3.056H3.736l-.157-1.064A1.55 1.55 0 0 0 2.417.71l-1.2-.3a.666.666 0 1 0-.323 1.294l1.2.3a.22.22 0 0 1 .166.183l.917 6.236a1.78 1.78 0 0 0-1.455 1.745c0 .98.798 1.777 1.778 1.777h9.556a.667.667 0 0 0 0-1.333H3.5a.445.445 0 0 1 0-.889h7.581c.67 0 1.263-.426 1.476-1.063l1.185-3.555a1.558 1.558 0 0 0-1.475-2.048M2.833 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222M12.167 14.611a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222"
        }
      )
    );
  }
);
ShoppingCartSolid.displayName = "ShoppingCartSolid";

var __defProp$18 = Object.defineProperty;
var __getOwnPropSymbols$18 = Object.getOwnPropertySymbols;
var __hasOwnProp$18 = Object.prototype.hasOwnProperty;
var __propIsEnum$18 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$18 = (obj, key, value) => key in obj ? __defProp$18(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$18 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$18.call(b, prop))
      __defNormalProp$18(a, prop, b[prop]);
  if (__getOwnPropSymbols$18)
    for (var prop of __getOwnPropSymbols$18(b)) {
      if (__propIsEnum$18.call(b, prop))
        __defNormalProp$18(a, prop, b[prop]);
    }
  return a;
};
var __objRest$10 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$18.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$18)
    for (var prop of __getOwnPropSymbols$18(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$18.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ShoppingCart = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$10(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$18({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M1.631.37a.75.75 0 0 0-.364 1.455l1.201.3a.14.14 0 0 1 .104.115l.238 1.615.005.038.663 4.501a1.862 1.862 0 0 0 .416 3.675h9.555a.75.75 0 0 0 0-1.5H3.894a.362.362 0 0 1 0-.722h.403a1 1 0 0 0 .083 0h7.095c.704 0 1.332-.45 1.556-1.121l1.184-3.555a1.64 1.64 0 0 0-1.555-2.157H4.202l-.146-.992A1.64 1.64 0 0 0 2.832.67zm2.792 4.144.564 3.833h6.488c.06 0 .114-.038.132-.094l1.185-3.556a.138.138 0 0 0-.132-.183zM3.227 14.653a1.111 1.111 0 1 0 0-2.222 1.111 1.111 0 0 0 0 2.222m10.445-1.111a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ShoppingCart.displayName = "ShoppingCart";

var __defProp$17 = Object.defineProperty;
var __getOwnPropSymbols$17 = Object.getOwnPropertySymbols;
var __hasOwnProp$17 = Object.prototype.hasOwnProperty;
var __propIsEnum$17 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$17 = (obj, key, value) => key in obj ? __defProp$17(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$17 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$17.call(b, prop))
      __defNormalProp$17(a, prop, b[prop]);
  if (__getOwnPropSymbols$17)
    for (var prop of __getOwnPropSymbols$17(b)) {
      if (__propIsEnum$17.call(b, prop))
        __defNormalProp$17(a, prop, b[prop]);
    }
  return a;
};
var __objRest$$ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$17.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$17)
    for (var prop of __getOwnPropSymbols$17(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$17.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Shopping = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$$(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$17({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.333 4.842a1.67 1.67 0 0 0-1.307-.633H3.39c-.86 0-1.578.653-1.66 1.508l-.515 5.417a1.667 1.667 0 0 0 1.659 1.825h1.292" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M8.184 7.125h3.631c.86 0 1.58.655 1.66 1.51l.312 3.334a1.667 1.667 0 0 1-1.66 1.822H7.873c-.982 0-1.751-.845-1.66-1.822l.313-3.334c.08-.856.8-1.51 1.66-1.51M3.542 4.208V2.542a1.666 1.666 0 1 1 3.333 0v1.666" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.458 9.209v.208a1.459 1.459 0 0 1-2.916 0v-.208" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Shopping.displayName = "Shopping";

var __defProp$16 = Object.defineProperty;
var __getOwnPropSymbols$16 = Object.getOwnPropertySymbols;
var __hasOwnProp$16 = Object.prototype.hasOwnProperty;
var __propIsEnum$16 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$16 = (obj, key, value) => key in obj ? __defProp$16(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$16 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$16.call(b, prop))
      __defNormalProp$16(a, prop, b[prop]);
  if (__getOwnPropSymbols$16)
    for (var prop of __getOwnPropSymbols$16(b)) {
      if (__propIsEnum$16.call(b, prop))
        __defNormalProp$16(a, prop, b[prop]);
    }
  return a;
};
var __objRest$_ = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$16.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$16)
    for (var prop of __getOwnPropSymbols$16(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$16.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SidebarLeft = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$_(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$16({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 1.75H2.833c-.982 0-1.777.824-1.777 1.84v7.82c0 1.016.795 1.84 1.777 1.84h9.334c.982 0 1.777-.824 1.777-1.84V3.59c0-1.016-.796-1.84-1.777-1.84M3.9 4.5v6" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SidebarLeft.displayName = "SidebarLeft";

var __defProp$15 = Object.defineProperty;
var __getOwnPropSymbols$15 = Object.getOwnPropertySymbols;
var __hasOwnProp$15 = Object.prototype.hasOwnProperty;
var __propIsEnum$15 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$15 = (obj, key, value) => key in obj ? __defProp$15(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$15 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$15.call(b, prop))
      __defNormalProp$15(a, prop, b[prop]);
  if (__getOwnPropSymbols$15)
    for (var prop of __getOwnPropSymbols$15(b)) {
      if (__propIsEnum$15.call(b, prop))
        __defNormalProp$15(a, prop, b[prop]);
    }
  return a;
};
var __objRest$Z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$15.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$15)
    for (var prop of __getOwnPropSymbols$15(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$15.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SidebarRight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$Z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$15({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.833 13.25h9.334c.982 0 1.777-.824 1.777-1.84V3.59c0-1.016-.796-1.84-1.777-1.84H2.833c-.981 0-1.777.824-1.777 1.84v7.82c0 1.016.796 1.84 1.777 1.84M11.1 4.5v6" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SidebarRight.displayName = "SidebarRight";

var __defProp$14 = Object.defineProperty;
var __getOwnPropSymbols$14 = Object.getOwnPropertySymbols;
var __hasOwnProp$14 = Object.prototype.hasOwnProperty;
var __propIsEnum$14 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$14 = (obj, key, value) => key in obj ? __defProp$14(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$14 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$14.call(b, prop))
      __defNormalProp$14(a, prop, b[prop]);
  if (__getOwnPropSymbols$14)
    for (var prop of __getOwnPropSymbols$14(b)) {
      if (__propIsEnum$14.call(b, prop))
        __defNormalProp$14(a, prop, b[prop]);
    }
  return a;
};
const Slack = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$14({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#E01E5A",
          d: "M3.573 9.309a1.41 1.41 0 0 1-1.412 1.412A1.41 1.41 0 0 1 .749 9.309c0-.78.631-1.412 1.412-1.412h1.412zm.706 0c0-.78.631-1.412 1.412-1.412s1.412.631 1.412 1.412v3.53a1.41 1.41 0 0 1-1.412 1.412 1.41 1.41 0 0 1-1.412-1.412z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#36C5F0",
          d: "M5.693 3.568c-.78 0-1.41-.63-1.41-1.41S4.914.75 5.694.75s1.41.63 1.41 1.41v1.41zm0 .716c.78 0 1.41.63 1.41 1.41s-.63 1.409-1.41 1.409H2.16c-.78 0-1.41-.63-1.41-1.41s.63-1.41 1.41-1.41z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#2EB67D",
          d: "M11.427 5.693c0-.78.631-1.41 1.412-1.41a1.41 1.41 0 1 1 0 2.82h-1.412zm-.706 0c0 .78-.631 1.41-1.412 1.41a1.41 1.41 0 0 1-1.412-1.41V2.16c0-.78.631-1.41 1.412-1.41s1.412.63 1.412 1.41z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#ECB22E",
          d: "M9.307 11.427c.78 0 1.41.631 1.41 1.412a1.41 1.41 0 1 1-2.82 0v-1.412zm0-.706a1.41 1.41 0 0 1-1.41-1.412c0-.78.63-1.412 1.41-1.412h3.534c.78 0 1.41.631 1.41 1.412s-.63 1.412-1.41 1.412z"
        }
      )
    );
  }
);
Slack.displayName = "Slack";

var __defProp$13 = Object.defineProperty;
var __getOwnPropSymbols$13 = Object.getOwnPropertySymbols;
var __hasOwnProp$13 = Object.prototype.hasOwnProperty;
var __propIsEnum$13 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$13 = (obj, key, value) => key in obj ? __defProp$13(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$13 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$13.call(b, prop))
      __defNormalProp$13(a, prop, b[prop]);
  if (__getOwnPropSymbols$13)
    for (var prop of __getOwnPropSymbols$13(b)) {
      if (__propIsEnum$13.call(b, prop))
        __defNormalProp$13(a, prop, b[prop]);
    }
  return a;
};
var __objRest$Y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$13.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$13)
    for (var prop of __getOwnPropSymbols$13(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$13.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Snooze = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$Y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$13({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.196 5.649h4.22l-3.84 4.63h4.09M3.647 10.186h3.537L4.02 14h3.368H4.02M1.334 1h5.108L1.716 6.697h4.99" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Snooze.displayName = "Snooze";

var __defProp$12 = Object.defineProperty;
var __getOwnPropSymbols$12 = Object.getOwnPropertySymbols;
var __hasOwnProp$12 = Object.prototype.hasOwnProperty;
var __propIsEnum$12 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$12 = (obj, key, value) => key in obj ? __defProp$12(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$12 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$12.call(b, prop))
      __defNormalProp$12(a, prop, b[prop]);
  if (__getOwnPropSymbols$12)
    for (var prop of __getOwnPropSymbols$12(b)) {
      if (__propIsEnum$12.call(b, prop))
        __defNormalProp$12(a, prop, b[prop]);
    }
  return a;
};
var __objRest$X = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$12.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$12)
    for (var prop of __getOwnPropSymbols$12(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$12.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SparklesMiniSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$X(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$12({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "m1.582 3.905 1.123.374.374 1.123a.446.446 0 0 0 .845 0l.374-1.123 1.122-.374a.445.445 0 0 0 0-.842l-1.122-.375-.374-1.122c-.122-.363-.722-.363-.844 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842M13.418 11.063l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842l1.123.375.374 1.122a.446.446 0 0 0 .844 0l.374-1.122 1.123-.375a.445.445 0 0 0 0-.842M7.967 9.531l-1.801-.713-.713-1.802c-.202-.508-1.038-.508-1.24 0L3.5 8.818l-1.8.713a.668.668 0 0 0 0 1.24l1.8.712.713 1.802a.667.667 0 0 0 1.239 0l.713-1.802 1.8-.713a.667.667 0 0 0 .002-1.239M13.3 4.198l-1.8-.713-.714-1.802c-.201-.509-1.038-.509-1.24 0l-.713 1.802-1.8.713a.668.668 0 0 0 0 1.239l1.8.713.713 1.801a.667.667 0 0 0 1.24 0l.712-1.801 1.801-.713a.668.668 0 0 0 .001-1.24"
        }
      )
    );
  }
);
SparklesMiniSolid.displayName = "SparklesMiniSolid";

var __defProp$11 = Object.defineProperty;
var __getOwnPropSymbols$11 = Object.getOwnPropertySymbols;
var __hasOwnProp$11 = Object.prototype.hasOwnProperty;
var __propIsEnum$11 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$11 = (obj, key, value) => key in obj ? __defProp$11(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$11 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$11.call(b, prop))
      __defNormalProp$11(a, prop, b[prop]);
  if (__getOwnPropSymbols$11)
    for (var prop of __getOwnPropSymbols$11(b)) {
      if (__propIsEnum$11.call(b, prop))
        __defNormalProp$11(a, prop, b[prop]);
    }
  return a;
};
var __objRest$W = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$11.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$11)
    for (var prop of __getOwnPropSymbols$11(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$11.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SparklesMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$W(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$11({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeWidth: 1.5,
          d: "m3.584 2.926.119.355.355.119.253.084-.252.084-.356.119-.118.355-.085.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254zM12.058 11.4l.253.084-.252.084-.355.119-.12.355-.084.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.356.085-.253.084.253.119.356z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.82zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        }
      )
    );
  }
);
SparklesMini.displayName = "SparklesMini";

var __defProp$10 = Object.defineProperty;
var __getOwnPropSymbols$10 = Object.getOwnPropertySymbols;
var __hasOwnProp$10 = Object.prototype.hasOwnProperty;
var __propIsEnum$10 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$10 = (obj, key, value) => key in obj ? __defProp$10(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$10 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$10.call(b, prop))
      __defNormalProp$10(a, prop, b[prop]);
  if (__getOwnPropSymbols$10)
    for (var prop of __getOwnPropSymbols$10(b)) {
      if (__propIsEnum$10.call(b, prop))
        __defNormalProp$10(a, prop, b[prop]);
    }
  return a;
};
var __objRest$V = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$10.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$10)
    for (var prop of __getOwnPropSymbols$10(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$10.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SparklesSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$V(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$10({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "m1.582 3.905 1.123.375.374 1.122a.446.446 0 0 0 .844 0l.375-1.122 1.122-.375a.444.444 0 0 0 0-.842l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0-.001.842M13.418 11.063l-1.122-.375-.375-1.122c-.121-.363-.721-.363-.843 0l-.374 1.122-1.123.375a.444.444 0 0 0 0 .842l1.123.375.374 1.122a.446.446 0 0 0 .844 0l.374-1.122 1.123-.375a.445.445 0 0 0 0-.842M7.967 9.531l-1.801-.713-.713-1.802c-.202-.508-1.038-.508-1.24 0L3.5 8.818l-1.8.713a.668.668 0 0 0 0 1.24l1.8.712.713 1.802a.667.667 0 0 0 1.239 0l.713-1.802 1.8-.713a.667.667 0 0 0 .002-1.239M13.3 4.198l-1.8-.713-.714-1.802c-.201-.508-1.038-.508-1.24 0l-.713 1.802-1.8.713a.668.668 0 0 0 0 1.239l1.8.713.713 1.802a.667.667 0 0 0 1.24 0l.712-1.802 1.801-.713a.668.668 0 0 0 .001-1.24"
        }
      )
    );
  }
);
SparklesSolid.displayName = "SparklesSolid";

var __defProp$$ = Object.defineProperty;
var __getOwnPropSymbols$$ = Object.getOwnPropertySymbols;
var __hasOwnProp$$ = Object.prototype.hasOwnProperty;
var __propIsEnum$$ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$$ = (obj, key, value) => key in obj ? __defProp$$(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$$ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$$.call(b, prop))
      __defNormalProp$$(a, prop, b[prop]);
  if (__getOwnPropSymbols$$)
    for (var prop of __getOwnPropSymbols$$(b)) {
      if (__propIsEnum$$.call(b, prop))
        __defNormalProp$$(a, prop, b[prop]);
    }
  return a;
};
var __objRest$U = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$$.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$$)
    for (var prop of __getOwnPropSymbols$$(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$$.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Sparkles = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$U(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$$({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeWidth: 1.5,
          d: "m3.584 2.926.119.355.355.119.253.084-.252.084-.356.119-.118.355-.085.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254zM12.058 11.4l.253.084-.252.084-.355.119-.12.355-.084.255-.085-.255-.119-.355-.355-.119-.252-.084.252-.084.355-.119.119-.355.085-.254.084.254.119.355z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m4.833 7.262.819 2.07 2.07.819-2.07.818-.819 2.07-.818-2.07-2.07-.818 2.07-.819zM10.167 1.928l.818 2.07 2.07.82-2.07.818-.818 2.07-.819-2.07-2.07-.819L9.348 4z"
        }
      )
    );
  }
);
Sparkles.displayName = "Sparkles";

var __defProp$_ = Object.defineProperty;
var __getOwnPropSymbols$_ = Object.getOwnPropertySymbols;
var __hasOwnProp$_ = Object.prototype.hasOwnProperty;
var __propIsEnum$_ = Object.prototype.propertyIsEnumerable;
var __defNormalProp$_ = (obj, key, value) => key in obj ? __defProp$_(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$_ = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$_.call(b, prop))
      __defNormalProp$_(a, prop, b[prop]);
  if (__getOwnPropSymbols$_)
    for (var prop of __getOwnPropSymbols$_(b)) {
      if (__propIsEnum$_.call(b, prop))
        __defNormalProp$_(a, prop, b[prop]);
    }
  return a;
};
var __objRest$T = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$_.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$_)
    for (var prop of __getOwnPropSymbols$_(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$_.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Spinner = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$T(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$_({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.667 1.056v2.222" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.224 2.943-1.572 1.571", opacity: 0.88 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M14.111 7.5H11.89", opacity: 0.75 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m12.224 12.057-1.572-1.571", opacity: 0.63 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.667 13.945v-2.223", opacity: 0.5 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m3.11 12.057 1.57-1.571", opacity: 0.38 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.222 7.5h2.222", opacity: 0.25 }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m3.11 2.943 1.57 1.571", opacity: 0.13 })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Spinner.displayName = "Spinner";

var __defProp$Z = Object.defineProperty;
var __getOwnPropSymbols$Z = Object.getOwnPropertySymbols;
var __hasOwnProp$Z = Object.prototype.hasOwnProperty;
var __propIsEnum$Z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$Z = (obj, key, value) => key in obj ? __defProp$Z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$Z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$Z.call(b, prop))
      __defNormalProp$Z(a, prop, b[prop]);
  if (__getOwnPropSymbols$Z)
    for (var prop of __getOwnPropSymbols$Z(b)) {
      if (__propIsEnum$Z.call(b, prop))
        __defNormalProp$Z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$S = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$Z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$Z)
    for (var prop of __getOwnPropSymbols$Z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$Z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareBlueSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$S(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$Z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#60A5FA", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquareBlueSolid.displayName = "SquareBlueSolid";

var __defProp$Y = Object.defineProperty;
var __getOwnPropSymbols$Y = Object.getOwnPropertySymbols;
var __hasOwnProp$Y = Object.prototype.hasOwnProperty;
var __propIsEnum$Y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$Y = (obj, key, value) => key in obj ? __defProp$Y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$Y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$Y.call(b, prop))
      __defNormalProp$Y(a, prop, b[prop]);
  if (__getOwnPropSymbols$Y)
    for (var prop of __getOwnPropSymbols$Y(b)) {
      if (__propIsEnum$Y.call(b, prop))
        __defNormalProp$Y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$R = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$Y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$Y)
    for (var prop of __getOwnPropSymbols$Y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$Y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareGreenSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$R(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$Y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#10B981", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquareGreenSolid.displayName = "SquareGreenSolid";

var __defProp$X = Object.defineProperty;
var __getOwnPropSymbols$X = Object.getOwnPropertySymbols;
var __hasOwnProp$X = Object.prototype.hasOwnProperty;
var __propIsEnum$X = Object.prototype.propertyIsEnumerable;
var __defNormalProp$X = (obj, key, value) => key in obj ? __defProp$X(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$X = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$X.call(b, prop))
      __defNormalProp$X(a, prop, b[prop]);
  if (__getOwnPropSymbols$X)
    for (var prop of __getOwnPropSymbols$X(b)) {
      if (__propIsEnum$X.call(b, prop))
        __defNormalProp$X(a, prop, b[prop]);
    }
  return a;
};
var __objRest$Q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$X.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$X)
    for (var prop of __getOwnPropSymbols$X(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$X.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareGreySolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$Q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$X({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#A1A1AA", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquareGreySolid.displayName = "SquareGreySolid";

var __defProp$W = Object.defineProperty;
var __getOwnPropSymbols$W = Object.getOwnPropertySymbols;
var __hasOwnProp$W = Object.prototype.hasOwnProperty;
var __propIsEnum$W = Object.prototype.propertyIsEnumerable;
var __defNormalProp$W = (obj, key, value) => key in obj ? __defProp$W(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$W = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$W.call(b, prop))
      __defNormalProp$W(a, prop, b[prop]);
  if (__getOwnPropSymbols$W)
    for (var prop of __getOwnPropSymbols$W(b)) {
      if (__propIsEnum$W.call(b, prop))
        __defNormalProp$W(a, prop, b[prop]);
    }
  return a;
};
var __objRest$P = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$W.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$W)
    for (var prop of __getOwnPropSymbols$W(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$W.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareOrangeSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$P(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$W({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#F97316", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquareOrangeSolid.displayName = "SquareOrangeSolid";

var __defProp$V = Object.defineProperty;
var __getOwnPropSymbols$V = Object.getOwnPropertySymbols;
var __hasOwnProp$V = Object.prototype.hasOwnProperty;
var __propIsEnum$V = Object.prototype.propertyIsEnumerable;
var __defNormalProp$V = (obj, key, value) => key in obj ? __defProp$V(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$V = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$V.call(b, prop))
      __defNormalProp$V(a, prop, b[prop]);
  if (__getOwnPropSymbols$V)
    for (var prop of __getOwnPropSymbols$V(b)) {
      if (__propIsEnum$V.call(b, prop))
        __defNormalProp$V(a, prop, b[prop]);
    }
  return a;
};
var __objRest$O = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$V.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$V)
    for (var prop of __getOwnPropSymbols$V(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$V.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquarePurpleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$O(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$V({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#A78BFA", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquarePurpleSolid.displayName = "SquarePurpleSolid";

var __defProp$U = Object.defineProperty;
var __getOwnPropSymbols$U = Object.getOwnPropertySymbols;
var __hasOwnProp$U = Object.prototype.hasOwnProperty;
var __propIsEnum$U = Object.prototype.propertyIsEnumerable;
var __defNormalProp$U = (obj, key, value) => key in obj ? __defProp$U(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$U = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$U.call(b, prop))
      __defNormalProp$U(a, prop, b[prop]);
  if (__getOwnPropSymbols$U)
    for (var prop of __getOwnPropSymbols$U(b)) {
      if (__propIsEnum$U.call(b, prop))
        __defNormalProp$U(a, prop, b[prop]);
    }
  return a;
};
var __objRest$N = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$U.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$U)
    for (var prop of __getOwnPropSymbols$U(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$U.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareRedSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$N(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$U({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("rect", { width: 8, height: 8, x: 3.5, y: 3.5, fill: "#F43F5E", rx: 2 }),
      /* @__PURE__ */ React__namespace.createElement(
        "rect",
        {
          width: 7,
          height: 7,
          x: 4,
          y: 4,
          stroke: color,
          strokeOpacity: 0.12,
          rx: 1.5
        }
      )
    );
  }
);
SquareRedSolid.displayName = "SquareRedSolid";

var __defProp$T = Object.defineProperty;
var __getOwnPropSymbols$T = Object.getOwnPropertySymbols;
var __hasOwnProp$T = Object.prototype.hasOwnProperty;
var __propIsEnum$T = Object.prototype.propertyIsEnumerable;
var __defNormalProp$T = (obj, key, value) => key in obj ? __defProp$T(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$T = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$T.call(b, prop))
      __defNormalProp$T(a, prop, b[prop]);
  if (__getOwnPropSymbols$T)
    for (var prop of __getOwnPropSymbols$T(b)) {
      if (__propIsEnum$T.call(b, prop))
        __defNormalProp$T(a, prop, b[prop]);
    }
  return a;
};
var __objRest$M = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$T.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$T)
    for (var prop of __getOwnPropSymbols$T(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$T.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareTwoStackMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$M(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$T({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 4.166H5.944c-.981 0-1.777.796-1.777 1.778v6.222c0 .982.796 1.778 1.777 1.778h6.223c.982 0 1.777-.796 1.777-1.778V5.944c0-.982-.796-1.778-1.777-1.778" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.091" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SquareTwoStackMini.displayName = "SquareTwoStackMini";

var __defProp$S = Object.defineProperty;
var __getOwnPropSymbols$S = Object.getOwnPropertySymbols;
var __hasOwnProp$S = Object.prototype.hasOwnProperty;
var __propIsEnum$S = Object.prototype.propertyIsEnumerable;
var __defNormalProp$S = (obj, key, value) => key in obj ? __defProp$S(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$S = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$S.call(b, prop))
      __defNormalProp$S(a, prop, b[prop]);
  if (__getOwnPropSymbols$S)
    for (var prop of __getOwnPropSymbols$S(b)) {
      if (__propIsEnum$S.call(b, prop))
        __defNormalProp$S(a, prop, b[prop]);
    }
  return a;
};
var __objRest$L = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$S.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$S)
    for (var prop of __getOwnPropSymbols$S(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$S.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareTwoStackSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$L(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$S({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M12.167 4.833h-2v-2c0-.857-.698-1.555-1.556-1.555H2.833c-.857 0-1.555.698-1.555 1.555v5.778c0 .858.698 1.556 1.555 1.556h2v2c0 .857.698 1.555 1.556 1.555h5.778c.857 0 1.555-.697 1.555-1.555V6.389c0-.858-.697-1.556-1.555-1.556"
        }
      )
    );
  }
);
SquareTwoStackSolid.displayName = "SquareTwoStackSolid";

var __defProp$R = Object.defineProperty;
var __getOwnPropSymbols$R = Object.getOwnPropertySymbols;
var __hasOwnProp$R = Object.prototype.hasOwnProperty;
var __propIsEnum$R = Object.prototype.propertyIsEnumerable;
var __defNormalProp$R = (obj, key, value) => key in obj ? __defProp$R(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$R = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$R.call(b, prop))
      __defNormalProp$R(a, prop, b[prop]);
  if (__getOwnPropSymbols$R)
    for (var prop of __getOwnPropSymbols$R(b)) {
      if (__propIsEnum$R.call(b, prop))
        __defNormalProp$R(a, prop, b[prop]);
    }
  return a;
};
var __objRest$K = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$R.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$R)
    for (var prop of __getOwnPropSymbols$R(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$R.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquareTwoStack = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$K(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$R({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M12.167 4.167H5.944c-.981 0-1.777.796-1.777 1.777v6.223c0 .982.796 1.777 1.777 1.777h6.223c.982 0 1.777-.796 1.777-1.777V5.944c0-.981-.796-1.777-1.777-1.777" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M1.99 10.165 1.075 4.01a1.78 1.78 0 0 1 1.497-2.02l6.155-.914a1.78 1.78 0 0 1 1.909 1.092" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SquareTwoStack.displayName = "SquareTwoStack";

var __defProp$Q = Object.defineProperty;
var __getOwnPropSymbols$Q = Object.getOwnPropertySymbols;
var __hasOwnProp$Q = Object.prototype.hasOwnProperty;
var __propIsEnum$Q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$Q = (obj, key, value) => key in obj ? __defProp$Q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$Q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$Q.call(b, prop))
      __defNormalProp$Q(a, prop, b[prop]);
  if (__getOwnPropSymbols$Q)
    for (var prop of __getOwnPropSymbols$Q(b)) {
      if (__propIsEnum$Q.call(b, prop))
        __defNormalProp$Q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$J = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$Q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$Q)
    for (var prop of __getOwnPropSymbols$Q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$Q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquaresPlusSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$J(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$Q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M5.056 1.278H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M12.167 1.278H9.944c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V2.833c0-.859-.696-1.555-1.555-1.555M5.056 8.389H2.833c-.859 0-1.555.696-1.555 1.555v2.223c0 .859.696 1.555 1.555 1.555h2.223c.859 0 1.555-.696 1.555-1.555V9.944c0-.859-.696-1.555-1.555-1.555M13.278 10.167h-1.556V8.61a.667.667 0 0 0-1.333 0v1.556H8.833a.667.667 0 0 0 0 1.333h1.556v1.556a.667.667 0 0 0 1.333 0V11.5h1.556a.667.667 0 0 0 0-1.333"
        }
      )
    );
  }
);
SquaresPlusSolid.displayName = "SquaresPlusSolid";

var __defProp$P = Object.defineProperty;
var __getOwnPropSymbols$P = Object.getOwnPropertySymbols;
var __hasOwnProp$P = Object.prototype.hasOwnProperty;
var __propIsEnum$P = Object.prototype.propertyIsEnumerable;
var __defNormalProp$P = (obj, key, value) => key in obj ? __defProp$P(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$P = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$P.call(b, prop))
      __defNormalProp$P(a, prop, b[prop]);
  if (__getOwnPropSymbols$P)
    for (var prop of __getOwnPropSymbols$P(b)) {
      if (__propIsEnum$P.call(b, prop))
        __defNormalProp$P(a, prop, b[prop]);
    }
  return a;
};
var __objRest$I = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$P.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$P)
    for (var prop of __getOwnPropSymbols$P(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$P.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SquaresPlus = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$I(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$P({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.056 1.944H2.833a.89.89 0 0 0-.889.89v2.221c0 .491.398.89.89.89h2.222c.49 0 .888-.399.888-.89V2.833a.89.89 0 0 0-.888-.889M12.167 1.944H9.944a.89.89 0 0 0-.888.89v2.221c0 .491.398.89.888.89h2.223c.49 0 .889-.399.889-.89V2.833a.89.89 0 0 0-.89-.889M5.056 9.056H2.833a.89.89 0 0 0-.889.889v2.222c0 .49.398.889.89.889h2.222c.49 0 .888-.398.888-.89V9.946a.89.89 0 0 0-.888-.89M11.056 8.611v4.445M13.278 10.833H8.833"
        }
      )
    );
  }
);
SquaresPlus.displayName = "SquaresPlus";

var __defProp$O = Object.defineProperty;
var __getOwnPropSymbols$O = Object.getOwnPropertySymbols;
var __hasOwnProp$O = Object.prototype.hasOwnProperty;
var __propIsEnum$O = Object.prototype.propertyIsEnumerable;
var __defNormalProp$O = (obj, key, value) => key in obj ? __defProp$O(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$O = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$O.call(b, prop))
      __defNormalProp$O(a, prop, b[prop]);
  if (__getOwnPropSymbols$O)
    for (var prop of __getOwnPropSymbols$O(b)) {
      if (__propIsEnum$O.call(b, prop))
        __defNormalProp$O(a, prop, b[prop]);
    }
  return a;
};
var __objRest$H = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$O.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$O)
    for (var prop of __getOwnPropSymbols$O(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$O.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const StackPerspective = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$H(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$O({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m2.389 10.389-.748.25a.444.444 0 0 1-.585-.422V4.783c0-.303.297-.517.585-.421l.748.25M5.944 12.055l-.718.3a.445.445 0 0 1-.615-.41v-8.89c0-.317.323-.532.615-.41l.718.3M8.798 1.124l4.631 2.137c.315.145.516.46.516.807v6.862a.89.89 0 0 1-.516.807l-4.631 2.137a.445.445 0 0 1-.631-.403V1.528c0-.325.336-.54.63-.404"
        }
      )
    );
  }
);
StackPerspective.displayName = "StackPerspective";

var __defProp$N = Object.defineProperty;
var __getOwnPropSymbols$N = Object.getOwnPropertySymbols;
var __hasOwnProp$N = Object.prototype.hasOwnProperty;
var __propIsEnum$N = Object.prototype.propertyIsEnumerable;
var __defNormalProp$N = (obj, key, value) => key in obj ? __defProp$N(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$N = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$N.call(b, prop))
      __defNormalProp$N(a, prop, b[prop]);
  if (__getOwnPropSymbols$N)
    for (var prop of __getOwnPropSymbols$N(b)) {
      if (__propIsEnum$N.call(b, prop))
        __defNormalProp$N(a, prop, b[prop]);
    }
  return a;
};
var __objRest$G = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$N.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$N)
    for (var prop of __getOwnPropSymbols$N(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$N.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const StarSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$G(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$N({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M14.578 5.532a.67.67 0 0 0-.538-.453l-4.106-.597L8.097.76c-.224-.455-.971-.455-1.195 0L5.065 4.481.96 5.078a.667.667 0 0 0-.37 1.137L3.562 9.11 2.86 13.2a.667.667 0 0 0 .967.702L7.5 11.973l3.673 1.931a.66.66 0 0 0 .702-.05.67.67 0 0 0 .265-.653l-.702-4.09 2.971-2.895a.67.67 0 0 0 .17-.684z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
StarSolid.displayName = "StarSolid";

var __defProp$M = Object.defineProperty;
var __getOwnPropSymbols$M = Object.getOwnPropertySymbols;
var __hasOwnProp$M = Object.prototype.hasOwnProperty;
var __propIsEnum$M = Object.prototype.propertyIsEnumerable;
var __defNormalProp$M = (obj, key, value) => key in obj ? __defProp$M(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$M = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$M.call(b, prop))
      __defNormalProp$M(a, prop, b[prop]);
  if (__getOwnPropSymbols$M)
    for (var prop of __getOwnPropSymbols$M(b)) {
      if (__propIsEnum$M.call(b, prop))
        __defNormalProp$M(a, prop, b[prop]);
    }
  return a;
};
var __objRest$F = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$M.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$M)
    for (var prop of __getOwnPropSymbols$M(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$M.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Star = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$F(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$M({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 1.056 9.491 5.09l4.453.647-3.222 3.142.761 4.434L7.5 11.22l-3.983 2.093.76-4.434-3.221-3.142 4.453-.647z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Star.displayName = "Star";

var __defProp$L = Object.defineProperty;
var __getOwnPropSymbols$L = Object.getOwnPropertySymbols;
var __hasOwnProp$L = Object.prototype.hasOwnProperty;
var __propIsEnum$L = Object.prototype.propertyIsEnumerable;
var __defNormalProp$L = (obj, key, value) => key in obj ? __defProp$L(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$L = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$L.call(b, prop))
      __defNormalProp$L(a, prop, b[prop]);
  if (__getOwnPropSymbols$L)
    for (var prop of __getOwnPropSymbols$L(b)) {
      if (__propIsEnum$L.call(b, prop))
        __defNormalProp$L(a, prop, b[prop]);
    }
  return a;
};
var __objRest$E = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$L.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$L)
    for (var prop of __getOwnPropSymbols$L(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$L.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Stopwatch = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$E(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$L({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.625 1.042h3.75M7.5 1.042v2.083M7.5 13.542a5.208 5.208 0 1 0 0-10.417 5.208 5.208 0 0 0 0 10.417M5.585 6.418 7.5 8.333M11.875 2.292l1.667 1.666"
        }
      )
    );
  }
);
Stopwatch.displayName = "Stopwatch";

var __defProp$K = Object.defineProperty;
var __getOwnPropSymbols$K = Object.getOwnPropertySymbols;
var __hasOwnProp$K = Object.prototype.hasOwnProperty;
var __propIsEnum$K = Object.prototype.propertyIsEnumerable;
var __defNormalProp$K = (obj, key, value) => key in obj ? __defProp$K(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$K = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$K.call(b, prop))
      __defNormalProp$K(a, prop, b[prop]);
  if (__getOwnPropSymbols$K)
    for (var prop of __getOwnPropSymbols$K(b)) {
      if (__propIsEnum$K.call(b, prop))
        __defNormalProp$K(a, prop, b[prop]);
    }
  return a;
};
const Stripe = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$K({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#6772E5",
          fillRule: "evenodd",
          d: "M6.596 4.916c0-.546.454-.757 1.188-.757a7.8 7.8 0 0 1 3.481.901V1.765a9.2 9.2 0 0 0-3.481-.64c-2.829 0-4.726 1.482-4.726 3.957 0 3.87 5.316 3.242 5.316 4.91 0 .653-.558.856-1.343.856-1.158 0-2.653-.48-3.825-1.117v3.338c1.207.526 2.509.8 3.825.806 2.908 0 4.912-1.436 4.912-3.954 0-4.178-5.347-3.431-5.347-5.004",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Stripe.displayName = "Stripe";

var __defProp$J = Object.defineProperty;
var __getOwnPropSymbols$J = Object.getOwnPropertySymbols;
var __hasOwnProp$J = Object.prototype.hasOwnProperty;
var __propIsEnum$J = Object.prototype.propertyIsEnumerable;
var __defNormalProp$J = (obj, key, value) => key in obj ? __defProp$J(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$J = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$J.call(b, prop))
      __defNormalProp$J(a, prop, b[prop]);
  if (__getOwnPropSymbols$J)
    for (var prop of __getOwnPropSymbols$J(b)) {
      if (__propIsEnum$J.call(b, prop))
        __defNormalProp$J(a, prop, b[prop]);
    }
  return a;
};
var __objRest$D = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$J.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$J)
    for (var prop of __getOwnPropSymbols$J(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$J.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SunSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$D(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$J({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 2.333c.357 0 .646-.289.646-.646v-.86a.646.646 0 0 0-1.292 0v.86c0 .357.29.646.646.646M11.61 4.036a.64.64 0 0 0 .457-.19l.608-.608a.646.646 0 0 0-.913-.914l-.61.609a.646.646 0 0 0 .458 1.103M14.174 6.854h-.861a.646.646 0 0 0 0 1.292h.86a.646.646 0 0 0 0-1.292M12.067 11.154a.646.646 0 1 0-.914.913l.609.61a.644.644 0 0 0 .912 0 .646.646 0 0 0 0-.915l-.608-.608M7.5 12.667a.646.646 0 0 0-.646.646v.86a.646.646 0 0 0 1.292 0v-.86a.646.646 0 0 0-.646-.646M2.934 11.154l-.61.608a.646.646 0 0 0 .914.914l.608-.609a.646.646 0 0 0-.912-.913M2.333 7.5a.646.646 0 0 0-.645-.646H.826a.646.646 0 0 0 0 1.292h.862c.356 0 .645-.29.645-.646M2.933 3.846a.644.644 0 0 0 .913 0 .646.646 0 0 0 0-.913l-.609-.61a.646.646 0 1 0-.913.915zM7.5 11.806a4.306 4.306 0 1 0 0-8.611 4.306 4.306 0 0 0 0 8.61" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
SunSolid.displayName = "SunSolid";

var __defProp$I = Object.defineProperty;
var __getOwnPropSymbols$I = Object.getOwnPropertySymbols;
var __hasOwnProp$I = Object.prototype.hasOwnProperty;
var __propIsEnum$I = Object.prototype.propertyIsEnumerable;
var __defNormalProp$I = (obj, key, value) => key in obj ? __defProp$I(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$I = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$I.call(b, prop))
      __defNormalProp$I(a, prop, b[prop]);
  if (__getOwnPropSymbols$I)
    for (var prop of __getOwnPropSymbols$I(b)) {
      if (__propIsEnum$I.call(b, prop))
        __defNormalProp$I(a, prop, b[prop]);
    }
  return a;
};
var __objRest$C = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$I.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$I)
    for (var prop of __getOwnPropSymbols$I(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$I.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Sun = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$C(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$I({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 1.042v.833M12.067 2.933l-.59.59M13.958 7.5h-.833M12.067 12.067l-.59-.59M7.5 13.958v-.833M2.933 12.067l.59-.59M1.042 7.5h.833M2.933 2.933l.59.59M7.5 11.042a3.542 3.542 0 1 0 0-7.084 3.542 3.542 0 0 0 0 7.084" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Sun.displayName = "Sun";

var __defProp$H = Object.defineProperty;
var __getOwnPropSymbols$H = Object.getOwnPropertySymbols;
var __hasOwnProp$H = Object.prototype.hasOwnProperty;
var __propIsEnum$H = Object.prototype.propertyIsEnumerable;
var __defNormalProp$H = (obj, key, value) => key in obj ? __defProp$H(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$H = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$H.call(b, prop))
      __defNormalProp$H(a, prop, b[prop]);
  if (__getOwnPropSymbols$H)
    for (var prop of __getOwnPropSymbols$H(b)) {
      if (__propIsEnum$H.call(b, prop))
        __defNormalProp$H(a, prop, b[prop]);
    }
  return a;
};
var __objRest$B = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$H.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$H)
    for (var prop of __getOwnPropSymbols$H(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$H.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const SwatchSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$B(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$H({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M1 2.25C1 1.56 1.56 1 2.25 1h3.5C6.44 1 7 1.56 7 2.25V11a3 3 0 1 1-6 0zm3 9.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M6.646 14h6.104c.69 0 1.25-.56 1.25-1.25v-3.5C14 8.56 13.44 8 12.75 8h-.093l-5.828 5.829q-.09.089-.183.17m1.346-2.75 4.316-4.316a1.25 1.25 0 0 0 0-1.767L9.833 2.69a1.25 1.25 0 0 0-1.767 0l-.067.066V11q0 .126-.006.25z"
        }
      )
    );
  }
);
SwatchSolid.displayName = "SwatchSolid";

var __defProp$G = Object.defineProperty;
var __getOwnPropSymbols$G = Object.getOwnPropertySymbols;
var __hasOwnProp$G = Object.prototype.hasOwnProperty;
var __propIsEnum$G = Object.prototype.propertyIsEnumerable;
var __defNormalProp$G = (obj, key, value) => key in obj ? __defProp$G(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$G = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$G.call(b, prop))
      __defNormalProp$G(a, prop, b[prop]);
  if (__getOwnPropSymbols$G)
    for (var prop of __getOwnPropSymbols$G(b)) {
      if (__propIsEnum$G.call(b, prop))
        __defNormalProp$G(a, prop, b[prop]);
    }
  return a;
};
var __objRest$A = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$G.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$G)
    for (var prop of __getOwnPropSymbols$G(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$G.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Swatch = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$A(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$G({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.793 13.207A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 0 3.708 14m-1.915-.793A2.7 2.7 0 0 1 1 11.29V1.812C1 1.364 1.364 1 1.813 1h3.791c.449 0 .813.364.813.812v2.941M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14a2.7 2.7 0 0 0 1.916-.793M3.708 14h9.48a.813.813 0 0 0 .812-.813V9.396a.813.813 0 0 0-.812-.813h-2.941m-4.623 4.624 4.623-4.624m-4.623 4.624a2.7 2.7 0 0 0 .793-1.916V4.753m3.83 3.83 2.079-2.08a.81.81 0 0 0 0-1.148L9.645 2.673a.81.81 0 0 0-1.148 0l-2.08 2.08m-2.709 6.538h.006v.006h-.006z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Swatch.displayName = "Swatch";

var __defProp$F = Object.defineProperty;
var __getOwnPropSymbols$F = Object.getOwnPropertySymbols;
var __hasOwnProp$F = Object.prototype.hasOwnProperty;
var __propIsEnum$F = Object.prototype.propertyIsEnumerable;
var __defNormalProp$F = (obj, key, value) => key in obj ? __defProp$F(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$F = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$F.call(b, prop))
      __defNormalProp$F(a, prop, b[prop]);
  if (__getOwnPropSymbols$F)
    for (var prop of __getOwnPropSymbols$F(b)) {
      if (__propIsEnum$F.call(b, prop))
        __defNormalProp$F(a, prop, b[prop]);
    }
  return a;
};
var __objRest$z = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$F.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$F)
    for (var prop of __getOwnPropSymbols$F(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$F.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TagSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$z(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$F({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M13.603 6.66 8.492 1.55A2.43 2.43 0 0 0 6.764.833H2.389C1.53.833.833 1.531.833 2.39v4.374c0 .653.254 1.267.717 1.729l5.11 5.111a2.44 2.44 0 0 0 1.729.715c.626 0 1.251-.238 1.728-.715l3.486-3.486a2.42 2.42 0 0 0 .716-1.728c0-.653-.254-1.267-.716-1.728m-8.548-.493a1.113 1.113 0 0 1-1.11-1.111c0-.613.498-1.112 1.11-1.112s1.112.5 1.112 1.112-.5 1.11-1.112 1.11"
        }
      )
    );
  }
);
TagSolid.displayName = "TagSolid";

var __defProp$E = Object.defineProperty;
var __getOwnPropSymbols$E = Object.getOwnPropertySymbols;
var __hasOwnProp$E = Object.prototype.hasOwnProperty;
var __propIsEnum$E = Object.prototype.propertyIsEnumerable;
var __defNormalProp$E = (obj, key, value) => key in obj ? __defProp$E(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$E = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$E.call(b, prop))
      __defNormalProp$E(a, prop, b[prop]);
  if (__getOwnPropSymbols$E)
    for (var prop of __getOwnPropSymbols$E(b)) {
      if (__propIsEnum$E.call(b, prop))
        __defNormalProp$E(a, prop, b[prop]);
    }
  return a;
};
var __objRest$y = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$E.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$E)
    for (var prop of __getOwnPropSymbols$E(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$E.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tag = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$y(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$E({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M2.25 2.389a.14.14 0 0 1 .139-.139h4.375c.272 0 .534.108.727.301l5.11 5.111a1.027 1.027 0 0 1 0 1.453l-3.486 3.487a1.027 1.027 0 0 1-1.453 0L2.552 7.49a1.03 1.03 0 0 1-.302-.727zM2.389.75A1.64 1.64 0 0 0 .75 2.389v4.375c0 .67.267 1.313.74 1.787l5.112 5.111a2.527 2.527 0 0 0 3.574 0l3.486-3.486a2.527 2.527 0 0 0 0-3.574L8.552 1.49A2.53 2.53 0 0 0 6.763.75zm3.778 4.305a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tag.displayName = "Tag";

var __defProp$D = Object.defineProperty;
var __getOwnPropSymbols$D = Object.getOwnPropertySymbols;
var __hasOwnProp$D = Object.prototype.hasOwnProperty;
var __propIsEnum$D = Object.prototype.propertyIsEnumerable;
var __defNormalProp$D = (obj, key, value) => key in obj ? __defProp$D(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$D = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$D.call(b, prop))
      __defNormalProp$D(a, prop, b[prop]);
  if (__getOwnPropSymbols$D)
    for (var prop of __getOwnPropSymbols$D(b)) {
      if (__propIsEnum$D.call(b, prop))
        __defNormalProp$D(a, prop, b[prop]);
    }
  return a;
};
const Tailwind = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$D({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#38BDF8",
          fillRule: "evenodd",
          d: "M7.5 3q-3 0-3.75 3 1.125-1.5 2.625-1.125c.57.143.978.557 1.43 1.015.735.746 1.586 1.61 3.445 1.61q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C10.21 3.864 9.36 3 7.5 3M3.75 7.5q-3 0-3.75 3Q1.125 9 2.625 9.375c.57.143.978.557 1.43 1.015C4.79 11.136 5.64 12 7.5 12q3 0 3.75-3-1.125 1.5-2.625 1.125c-.57-.143-.978-.557-1.43-1.015C6.46 8.364 5.61 7.5 3.75 7.5",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tailwind.displayName = "Tailwind";

var __defProp$C = Object.defineProperty;
var __getOwnPropSymbols$C = Object.getOwnPropertySymbols;
var __hasOwnProp$C = Object.prototype.hasOwnProperty;
var __propIsEnum$C = Object.prototype.propertyIsEnumerable;
var __defNormalProp$C = (obj, key, value) => key in obj ? __defProp$C(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$C = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$C.call(b, prop))
      __defNormalProp$C(a, prop, b[prop]);
  if (__getOwnPropSymbols$C)
    for (var prop of __getOwnPropSymbols$C(b)) {
      if (__propIsEnum$C.call(b, prop))
        __defNormalProp$C(a, prop, b[prop]);
    }
  return a;
};
var __objRest$x = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$C.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$C)
    for (var prop of __getOwnPropSymbols$C(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$C.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Target = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$x(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$C({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m7.5 7.5 2.708-2.708M10.208 4.791V2.916L12.292.833v1.875h1.875l-2.084 2.083z"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.633 1.568a6 6 0 0 0-1.133-.11A6.042 6.042 0 1 0 13.542 7.5c0-.388-.04-.766-.11-1.134"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M8.04 4.012a3.5 3.5 0 0 0-.54-.054A3.542 3.542 0 1 0 11.042 7.5c0-.185-.028-.364-.054-.541"
        }
      )
    );
  }
);
Target.displayName = "Target";

var __defProp$B = Object.defineProperty;
var __getOwnPropSymbols$B = Object.getOwnPropertySymbols;
var __hasOwnProp$B = Object.prototype.hasOwnProperty;
var __propIsEnum$B = Object.prototype.propertyIsEnumerable;
var __defNormalProp$B = (obj, key, value) => key in obj ? __defProp$B(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$B = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$B.call(b, prop))
      __defNormalProp$B(a, prop, b[prop]);
  if (__getOwnPropSymbols$B)
    for (var prop of __getOwnPropSymbols$B(b)) {
      if (__propIsEnum$B.call(b, prop))
        __defNormalProp$B(a, prop, b[prop]);
    }
  return a;
};
var __objRest$w = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$B.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$B)
    for (var prop of __getOwnPropSymbols$B(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$B.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TaxExclusive = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$w(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$B({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.713.838a1.61 1.61 0 0 1 1.574 0l4.521 2.531h.001c.507.286.823.823.823 1.407v.356c0 .89-.722 1.611-1.611 1.611l-9.042.001c-.89 0-1.611-.722-1.611-1.611v-.357c0-.582.314-1.12.823-1.406zm.842 1.309a.11.11 0 0 0-.108 0L2.924 4.678a.11.11 0 0 0-.056.097v.357c0 .061.05.111.111.111h9.042c.06 0 .11-.05.11-.112v-.356a.11.11 0 0 0-.056-.098zM2.979 7.396a.75.75 0 0 1 .75.75v3.986h1.514V8.146a.75.75 0 0 1 1.5 0v3.986h.41c.414 0 .78.344.78.759 0 .414-.366.741-.78.741H2.117a.75.75 0 0 1 0-1.5h.111V8.146a.75.75 0 0 1 .75-.75M9.338 8.72a.75.75 0 0 1 1.06 0l1.623 1.622 1.622-1.622a.75.75 0 1 1 1.06 1.06l-1.621 1.623 1.622 1.622a.75.75 0 0 1-1.06 1.061l-1.623-1.623-1.623 1.623a.75.75 0 0 1-1.06-1.06l1.622-1.623L9.338 9.78a.75.75 0 0 1 0-1.06",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 4.701a.861.861 0 1 0 0-1.722.861.861 0 0 0 0 1.722"
        }
      )
    );
  }
);
TaxExclusive.displayName = "TaxExclusive";

var __defProp$A = Object.defineProperty;
var __getOwnPropSymbols$A = Object.getOwnPropertySymbols;
var __hasOwnProp$A = Object.prototype.hasOwnProperty;
var __propIsEnum$A = Object.prototype.propertyIsEnumerable;
var __defNormalProp$A = (obj, key, value) => key in obj ? __defProp$A(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$A = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$A.call(b, prop))
      __defNormalProp$A(a, prop, b[prop]);
  if (__getOwnPropSymbols$A)
    for (var prop of __getOwnPropSymbols$A(b)) {
      if (__propIsEnum$A.call(b, prop))
        __defNormalProp$A(a, prop, b[prop]);
    }
  return a;
};
var __objRest$v = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$A.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$A)
    for (var prop of __getOwnPropSymbols$A(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$A.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TaxInclusive = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$v(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$A({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M6.713.838a1.61 1.61 0 0 1 1.574 0l4.521 2.531h.001c.507.286.823.823.823 1.407v.356c0 .89-.722 1.611-1.611 1.611l-9.042.001c-.89 0-1.611-.722-1.611-1.611v-.357c0-.582.314-1.12.824-1.406zm.842 1.309a.11.11 0 0 0-.108 0L2.925 4.678a.11.11 0 0 0-.057.097v.357c0 .061.05.111.111.111h9.042c.06 0 .11-.05.11-.112v-.356a.11.11 0 0 0-.056-.098zM2.979 7.396a.75.75 0 0 1 .75.75v3.986h1.514V8.146a.75.75 0 0 1 1.5 0v3.986h.346c.414 0 .812.337.812.75 0 .415-.398.75-.812.75H2.118a.75.75 0 0 1 0-1.5h.111V8.146a.75.75 0 0 1 .75-.75m6.028 0a.75.75 0 0 1 .75.75v1.292a.75.75 0 0 1-1.5 0V8.146a.75.75 0 0 1 .75-.75m5.588.733a.75.75 0 0 1 .2 1.042l-3.215 4.736a.75.75 0 0 1-1.16.1l-1.522-1.579a.75.75 0 0 1 1.08-1.041l.88.913 2.695-3.971a.75.75 0 0 1 1.042-.2",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5 4.701a.861.861 0 1 0 0-1.722.861.861 0 0 0 0 1.722"
        }
      )
    );
  }
);
TaxInclusive.displayName = "TaxInclusive";

var __defProp$z = Object.defineProperty;
var __getOwnPropSymbols$z = Object.getOwnPropertySymbols;
var __hasOwnProp$z = Object.prototype.hasOwnProperty;
var __propIsEnum$z = Object.prototype.propertyIsEnumerable;
var __defNormalProp$z = (obj, key, value) => key in obj ? __defProp$z(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$z = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$z.call(b, prop))
      __defNormalProp$z(a, prop, b[prop]);
  if (__getOwnPropSymbols$z)
    for (var prop of __getOwnPropSymbols$z(b)) {
      if (__propIsEnum$z.call(b, prop))
        __defNormalProp$z(a, prop, b[prop]);
    }
  return a;
};
var __objRest$u = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$z.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$z)
    for (var prop of __getOwnPropSymbols$z(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$z.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TextHighlight = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$u(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$z({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M5.318 13.055h6.849M8.201 10.276 3.86 8.084a.888.888 0 0 1-.333-1.295L6.874 1.88a1.78 1.78 0 0 1 2.27-.586l1.384.699a1.78 1.78 0 0 1 .877 2.174L9.442 9.775a.89.89 0 0 1-1.24.5zM8.41 10.384a4.57 4.57 0 0 0-2.891 2.275l-.992-.5-.992-.501a4.57 4.57 0 0 0 .113-3.677"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m5.518 12.659-.2.396H2.833l.702-1.398"
        }
      )
    );
  }
);
TextHighlight.displayName = "TextHighlight";

var __defProp$y = Object.defineProperty;
var __getOwnPropSymbols$y = Object.getOwnPropertySymbols;
var __hasOwnProp$y = Object.prototype.hasOwnProperty;
var __propIsEnum$y = Object.prototype.propertyIsEnumerable;
var __defNormalProp$y = (obj, key, value) => key in obj ? __defProp$y(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$y = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$y.call(b, prop))
      __defNormalProp$y(a, prop, b[prop]);
  if (__getOwnPropSymbols$y)
    for (var prop of __getOwnPropSymbols$y(b)) {
      if (__propIsEnum$y.call(b, prop))
        __defNormalProp$y(a, prop, b[prop]);
    }
  return a;
};
var __objRest$t = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$y.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$y)
    for (var prop of __getOwnPropSymbols$y(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$y.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Text = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$t(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$y({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.783 11.278 4.609 3.722h-.158l-3.173 7.556M2.024 9.5h5.012M9.93 6.82c.432-.466 1.047-.653 1.672-.653 1.048 0 1.897.85 1.897 1.897v3.214" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M11.056 8.611H13.5v.222a2.445 2.445 0 0 1-2.444 2.445 1.334 1.334 0 0 1 0-2.667" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Text.displayName = "Text";

var __defProp$x = Object.defineProperty;
var __getOwnPropSymbols$x = Object.getOwnPropertySymbols;
var __hasOwnProp$x = Object.prototype.hasOwnProperty;
var __propIsEnum$x = Object.prototype.propertyIsEnumerable;
var __defNormalProp$x = (obj, key, value) => key in obj ? __defProp$x(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$x = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$x.call(b, prop))
      __defNormalProp$x(a, prop, b[prop]);
  if (__getOwnPropSymbols$x)
    for (var prop of __getOwnPropSymbols$x(b)) {
      if (__propIsEnum$x.call(b, prop))
        __defNormalProp$x(a, prop, b[prop]);
    }
  return a;
};
var __objRest$s = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$x.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$x)
    for (var prop of __getOwnPropSymbols$x(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$x.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ThumbDown = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$s(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$x({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.21 8.564c0 .427.154.84.432 1.162l3.79 4.388c.76-.38 1.111-1.269.818-2.065L8.21 9.225h3.913a1.777 1.777 0 0 0 1.718-2.232l-1.059-4a1.78 1.78 0 0 0-1.718-1.323H5.988c-.983 0-1.778.795-1.778 1.778M3.321 1.67H1.988a.89.89 0 0 0-.89.889v5.778c0 .49.399.888.89.888H3.32c.49 0 .889-.397.889-.888V2.559a.89.89 0 0 0-.889-.89" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ThumbDown.displayName = "ThumbDown";

var __defProp$w = Object.defineProperty;
var __getOwnPropSymbols$w = Object.getOwnPropertySymbols;
var __hasOwnProp$w = Object.prototype.hasOwnProperty;
var __propIsEnum$w = Object.prototype.propertyIsEnumerable;
var __defNormalProp$w = (obj, key, value) => key in obj ? __defProp$w(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$w = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$w.call(b, prop))
      __defNormalProp$w(a, prop, b[prop]);
  if (__getOwnPropSymbols$w)
    for (var prop of __getOwnPropSymbols$w(b)) {
      if (__propIsEnum$w.call(b, prop))
        __defNormalProp$w(a, prop, b[prop]);
    }
  return a;
};
var __objRest$r = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$w.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$w)
    for (var prop of __getOwnPropSymbols$w(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$w.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ThumbUp = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$r(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$w({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.21 6.445c0-.427.154-.84.432-1.162L8.432.895c.76.38 1.111 1.269.818 2.065L8.21 5.783h3.913a1.777 1.777 0 0 1 1.718 2.233l-1.059 4a1.78 1.78 0 0 1-1.718 1.323H5.988a1.777 1.777 0 0 1-1.778-1.778M3.321 5.783H1.988a.89.89 0 0 0-.89.89v5.777c0 .491.399.889.89.889H3.32c.49 0 .889-.398.889-.889V6.672a.89.89 0 0 0-.889-.889" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ThumbUp.displayName = "ThumbUp";

var __defProp$v = Object.defineProperty;
var __getOwnPropSymbols$v = Object.getOwnPropertySymbols;
var __hasOwnProp$v = Object.prototype.hasOwnProperty;
var __propIsEnum$v = Object.prototype.propertyIsEnumerable;
var __defNormalProp$v = (obj, key, value) => key in obj ? __defProp$v(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$v = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$v.call(b, prop))
      __defNormalProp$v(a, prop, b[prop]);
  if (__getOwnPropSymbols$v)
    for (var prop of __getOwnPropSymbols$v(b)) {
      if (__propIsEnum$v.call(b, prop))
        __defNormalProp$v(a, prop, b[prop]);
    }
  return a;
};
var __objRest$q = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$v.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$v)
    for (var prop of __getOwnPropSymbols$v(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$v.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ThumbnailBadge = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$q(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$v({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { filter: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("circle", { cx: 10, cy: 8.903, r: 7.806, fill: "#3B82F6" }), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.806,
          fill: "url(#b)",
          fillOpacity: 0.2
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "circle",
        {
          cx: 10,
          cy: 8.903,
          r: 7.556,
          stroke: "#000",
          strokeOpacity: 0.2,
          strokeWidth: 0.5
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: "#fff", clipPath: "url(#c)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M6.098 11.393a.724.724 0 0 1-.724-.723V7.136a.724.724 0 0 1 .951-.686l.487.163a.434.434 0 1 1-.274.822l-.297-.098v3.133l.297-.099a.433.433 0 1 1 .274.823l-.487.162a.7.7 0 0 1-.227.037M8.41 12.517a.723.723 0 0 1-.722-.723V6.012a.72.72 0 0 1 1-.667l.467.194a.434.434 0 0 1-.333.801l-.267-.111v5.349l.267-.111a.434.434 0 1 1 .333.8l-.467.195a.7.7 0 0 1-.278.055M14.038 5.752l-3.012-1.39A.722.722 0 0 0 10 5.018v7.77a.72.72 0 0 0 .722.724.7.7 0 0 0 .304-.067l3.012-1.39c.357-.165.588-.526.588-.92V6.672c0-.393-.23-.754-.588-.919" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 10.09,
          x2: 10.09,
          y1: 1.142,
          y2: 16.754,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "c" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M4.796 3.699h10.408v10.408H4.796z" })), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "a",
          width: 20,
          height: 20,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_6384_214"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_6384_214",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_6384_214" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: -1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.635 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_6384_214",
            result: "effect3_innerShadow_6384_214"
          }
        )
      ))
    );
  }
);
ThumbnailBadge.displayName = "ThumbnailBadge";

var __defProp$u = Object.defineProperty;
var __getOwnPropSymbols$u = Object.getOwnPropertySymbols;
var __hasOwnProp$u = Object.prototype.hasOwnProperty;
var __propIsEnum$u = Object.prototype.propertyIsEnumerable;
var __defNormalProp$u = (obj, key, value) => key in obj ? __defProp$u(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$u = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$u.call(b, prop))
      __defNormalProp$u(a, prop, b[prop]);
  if (__getOwnPropSymbols$u)
    for (var prop of __getOwnPropSymbols$u(b)) {
      if (__propIsEnum$u.call(b, prop))
        __defNormalProp$u(a, prop, b[prop]);
    }
  return a;
};
var __objRest$p = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$u.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$u)
    for (var prop of __getOwnPropSymbols$u(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$u.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TimelineVertical = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$p(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$u({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M2.389 1.056v4.888M2.389 13.944V9.056M13.056 1.5H7.278a.89.89 0 0 0-.89.889v2.667c0 .49.399.888.89.888h5.778c.49 0 .888-.398.888-.888V2.389a.89.89 0 0 0-.889-.889M2.389 9.055a1.556 1.556 0 1 0 0-3.11 1.556 1.556 0 0 0 0 3.11M13.056 9.056H7.278a.89.89 0 0 0-.89.888v2.667c0 .491.399.889.89.889h5.778c.49 0 .888-.398.888-.889V9.944a.89.89 0 0 0-.889-.888" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TimelineVertical.displayName = "TimelineVertical";

var __defProp$t = Object.defineProperty;
var __getOwnPropSymbols$t = Object.getOwnPropertySymbols;
var __hasOwnProp$t = Object.prototype.hasOwnProperty;
var __propIsEnum$t = Object.prototype.propertyIsEnumerable;
var __defNormalProp$t = (obj, key, value) => key in obj ? __defProp$t(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$t = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$t.call(b, prop))
      __defNormalProp$t(a, prop, b[prop]);
  if (__getOwnPropSymbols$t)
    for (var prop of __getOwnPropSymbols$t(b)) {
      if (__propIsEnum$t.call(b, prop))
        __defNormalProp$t(a, prop, b[prop]);
    }
  return a;
};
var __objRest$o = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$t.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$t)
    for (var prop of __getOwnPropSymbols$t(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$t.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const ToolsSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$o(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$t({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M13.944 7.056H12.39V4.344l.8-1.402a.67.67 0 0 0 .062-.514L12.807.872a.67.67 0 0 0-.641-.483h-.89a.666.666 0 0 0-.64.483l-.444 1.556a.67.67 0 0 0 .06.514l.802 1.402v2.712H9.498a.667.667 0 0 0 0 1.333h.222v4.667c0 .857.698 1.555 1.556 1.555h.889c.858 0 1.555-.698 1.555-1.555V8.389h.223a.667.667 0 0 0 0-1.333zm-1.555 6c0 .122-.1.222-.222.222h-.89a.22.22 0 0 1-.221-.222V8.389h1.333zM6.3 1.012a.667.667 0 0 0-1.023.564v2.592c0 .122-.1.222-.222.222H3.277a.22.22 0 0 1-.222-.222V1.575a.666.666 0 0 0-1.023-.564A3.98 3.98 0 0 0 .167 4.39c0 1.437.771 2.752 2 3.461v5.206c0 .857.698 1.555 1.555 1.555h.89c.857 0 1.555-.698 1.555-1.556V7.85c1.228-.71 2-2.024 2-3.461 0-1.376-.698-2.64-1.867-3.377" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
ToolsSolid.displayName = "ToolsSolid";

var __defProp$s = Object.defineProperty;
var __getOwnPropSymbols$s = Object.getOwnPropertySymbols;
var __hasOwnProp$s = Object.prototype.hasOwnProperty;
var __propIsEnum$s = Object.prototype.propertyIsEnumerable;
var __defNormalProp$s = (obj, key, value) => key in obj ? __defProp$s(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$s = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$s.call(b, prop))
      __defNormalProp$s(a, prop, b[prop]);
  if (__getOwnPropSymbols$s)
    for (var prop of __getOwnPropSymbols$s(b)) {
      if (__propIsEnum$s.call(b, prop))
        __defNormalProp$s(a, prop, b[prop]);
    }
  return a;
};
var __objRest$n = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$s.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$s)
    for (var prop of __getOwnPropSymbols$s(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$s.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Tools = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$n(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$s({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 4.389a3.33 3.33 0 0 0-2-3.052v3.274H2.833V1.337a3.33 3.33 0 0 0-2 3.052 3.33 3.33 0 0 0 2 3.052v5.615c0 .49.399.889.89.889h.888a.89.89 0 0 0 .889-.89V7.442a3.33 3.33 0 0 0 2-3.052M13.056 7.722v5.334a.89.89 0 0 1-.89.888h-.888a.89.89 0 0 1-.89-.889V7.723M9.5 7.722h4.444M11.722 7.722V1.5M11.722 4.167l.89-1.556-.445-1.555h-.89l-.444 1.555z" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Tools.displayName = "Tools";

var __defProp$r = Object.defineProperty;
var __getOwnPropSymbols$r = Object.getOwnPropertySymbols;
var __hasOwnProp$r = Object.prototype.hasOwnProperty;
var __propIsEnum$r = Object.prototype.propertyIsEnumerable;
var __defNormalProp$r = (obj, key, value) => key in obj ? __defProp$r(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$r = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$r.call(b, prop))
      __defNormalProp$r(a, prop, b[prop]);
  if (__getOwnPropSymbols$r)
    for (var prop of __getOwnPropSymbols$r(b)) {
      if (__propIsEnum$r.call(b, prop))
        __defNormalProp$r(a, prop, b[prop]);
    }
  return a;
};
var __objRest$m = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$r.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$r)
    for (var prop of __getOwnPropSymbols$r(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$r.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TopToBottom = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$m(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "m9.5 9.722-2 2 2 2M1.056 7.5h4M1.056 11.722h4M1.056 3.278h4" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 11.722h2.222a4.223 4.223 0 0 0 0-8.444H8.167" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TopToBottom.displayName = "TopToBottom";

var __defProp$q = Object.defineProperty;
var __getOwnPropSymbols$q = Object.getOwnPropertySymbols;
var __hasOwnProp$q = Object.prototype.hasOwnProperty;
var __propIsEnum$q = Object.prototype.propertyIsEnumerable;
var __defNormalProp$q = (obj, key, value) => key in obj ? __defProp$q(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$q = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$q.call(b, prop))
      __defNormalProp$q(a, prop, b[prop]);
  if (__getOwnPropSymbols$q)
    for (var prop of __getOwnPropSymbols$q(b)) {
      if (__propIsEnum$q.call(b, prop))
        __defNormalProp$q(a, prop, b[prop]);
    }
  return a;
};
var __objRest$l = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$q.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$q)
    for (var prop of __getOwnPropSymbols$q(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$q.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Trash = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$l(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$q({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M1.944 3.278h11.112M5.5 3.278V1.944a.89.89 0 0 1 .889-.888H8.61a.89.89 0 0 1 .889.888v1.334M11.722 5.5v6.667c0 .982-.795 1.777-1.777 1.777h-4.89a1.777 1.777 0 0 1-1.777-1.777V5.5M5.944 7.278v4M9.056 7.278v4"
        }
      )
    );
  }
);
Trash.displayName = "Trash";

var __defProp$p = Object.defineProperty;
var __getOwnPropSymbols$p = Object.getOwnPropertySymbols;
var __hasOwnProp$p = Object.prototype.hasOwnProperty;
var __propIsEnum$p = Object.prototype.propertyIsEnumerable;
var __defNormalProp$p = (obj, key, value) => key in obj ? __defProp$p(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$p = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$p.call(b, prop))
      __defNormalProp$p(a, prop, b[prop]);
  if (__getOwnPropSymbols$p)
    for (var prop of __getOwnPropSymbols$p(b)) {
      if (__propIsEnum$p.call(b, prop))
        __defNormalProp$p(a, prop, b[prop]);
    }
  return a;
};
var __objRest$k = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$p.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$p)
    for (var prop of __getOwnPropSymbols$p(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$p.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TriangleDownMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$k(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$p({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10.09 5c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455A.7.7 0 0 1 4 5.797a.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
TriangleDownMini.displayName = "TriangleDownMini";

var __defProp$o = Object.defineProperty;
var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
var __hasOwnProp$o = Object.prototype.hasOwnProperty;
var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$o = (obj, key, value) => key in obj ? __defProp$o(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$o = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$o.call(b, prop))
      __defNormalProp$o(a, prop, b[prop]);
  if (__getOwnPropSymbols$o)
    for (var prop of __getOwnPropSymbols$o(b)) {
      if (__propIsEnum$o.call(b, prop))
        __defNormalProp$o(a, prop, b[prop]);
    }
  return a;
};
var __objRest$j = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$o.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$o)
    for (var prop of __getOwnPropSymbols$o(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$o.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TriangleLeftMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$j(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$o({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M10 10.09c0 .163-.037.323-.108.463a.85.85 0 0 1-.293.335.7.7 0 0 1-.397.111.7.7 0 0 1-.39-.141l-3.454-2.59a.9.9 0 0 1-.263-.33 1.04 1.04 0 0 1 0-.876.9.9 0 0 1 .263-.33l3.455-2.59A.7.7 0 0 1 9.203 4a.7.7 0 0 1 .396.112.85.85 0 0 1 .293.335c.07.14.108.3.108.463z"
        }
      )
    );
  }
);
TriangleLeftMini.displayName = "TriangleLeftMini";

var __defProp$n = Object.defineProperty;
var __getOwnPropSymbols$n = Object.getOwnPropertySymbols;
var __hasOwnProp$n = Object.prototype.hasOwnProperty;
var __propIsEnum$n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$n = (obj, key, value) => key in obj ? __defProp$n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$n = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$n.call(b, prop))
      __defNormalProp$n(a, prop, b[prop]);
  if (__getOwnPropSymbols$n)
    for (var prop of __getOwnPropSymbols$n(b)) {
      if (__propIsEnum$n.call(b, prop))
        __defNormalProp$n(a, prop, b[prop]);
    }
  return a;
};
var __objRest$i = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$n.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$n)
    for (var prop of __getOwnPropSymbols$n(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$n.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TriangleRightMiniHover = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$i(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$n({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M9 4.91c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334A.7.7 0 0 1 9.798 4a.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z"
        }
      )
    );
  }
);
TriangleRightMiniHover.displayName = "TriangleRightMiniHover";

var __defProp$m = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$m = (obj, key, value) => key in obj ? __defProp$m(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$m = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$m.call(b, prop))
      __defNormalProp$m(a, prop, b[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b)) {
      if (__propIsEnum$m.call(b, prop))
        __defNormalProp$m(a, prop, b[prop]);
    }
  return a;
};
var __objRest$h = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$m.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$m.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TriangleRightMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$h(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$m({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M5 4.91c0-.163.037-.323.108-.464a.85.85 0 0 1 .293-.334A.7.7 0 0 1 5.798 4a.7.7 0 0 1 .39.142l3.454 2.59c.11.082.2.195.263.33a1.04 1.04 0 0 1 0 .876.9.9 0 0 1-.263.33l-3.455 2.59a.7.7 0 0 1-.39.141.7.7 0 0 1-.396-.111.85.85 0 0 1-.293-.335c-.07-.14-.108-.3-.108-.464z"
        }
      )
    );
  }
);
TriangleRightMini.displayName = "TriangleRightMini";

var __defProp$l = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$l(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    }
  return a;
};
var __objRest$g = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$l.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$l.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TriangleUpMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$g(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$l({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 10c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 9.202a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108z"
        }
      )
    );
  }
);
TriangleUpMini.displayName = "TriangleUpMini";

var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
var __objRest$f = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$k.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$k.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TrianglesMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$f(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$k({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M4.91 5.75c-.163 0-.323-.037-.464-.108a.85.85 0 0 1-.334-.293A.7.7 0 0 1 4 4.952a.7.7 0 0 1 .142-.39l2.59-3.454c.082-.11.195-.2.33-.263a1.04 1.04 0 0 1 .876 0 .9.9 0 0 1 .33.263l2.59 3.455a.7.7 0 0 1 .141.39.7.7 0 0 1-.111.396.85.85 0 0 1-.335.293c-.14.07-.3.108-.464.108zM10.09 9.25c.163 0 .323.037.463.108.14.07.256.172.335.293a.7.7 0 0 1 .111.397.7.7 0 0 1-.141.39l-2.59 3.454a.9.9 0 0 1-.33.263 1.04 1.04 0 0 1-.876 0 .9.9 0 0 1-.33-.263l-2.59-3.455a.7.7 0 0 1-.142-.39.7.7 0 0 1 .112-.396.85.85 0 0 1 .335-.293c.14-.07.3-.108.463-.108z"
        }
      )
    );
  }
);
TrianglesMini.displayName = "TrianglesMini";

var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
var __objRest$e = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$j.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$j.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Trophy = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$e(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$j({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.944 10.389s0 2.611 3.334 3.555H3.722C7.056 13 7.056 10.39 7.056 10.39M4.199 7.5c-3.393 0-3.143-4.666-3.143-4.666h1.988M10.801 7.5c3.394 0 3.143-4.666 3.143-4.666h-1.988"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M11.944 1.056c-.555 5.805-2.027 9.083-4.222 9.333h-.444c-2.195-.25-3.667-3.528-4.222-9.333z"
        }
      )
    );
  }
);
Trophy.displayName = "Trophy";

var __defProp$i = Object.defineProperty;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
var __objRest$d = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$i.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$i.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TruckFast = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$d(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$i({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.472 12.938a1.41 1.41 0 1 0 0-2.82 1.41 1.41 0 0 0 0 2.82M9.312 12.938a1.41 1.41 0 1 0 0-2.82 1.41 1.41 0 0 0 0 2.82M7.918 11.326H4.882M4.076 2.465h3.625c.89 0 1.612.721 1.612 1.611v6.042" }),
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M9.313 4.882h1.775c.274 0 .53.14.677.37l1.447 2.25c.084.13.128.281.128.436v1.777a1.61 1.61 0 0 1-1.61 1.611h-1.008M9.313 7.701h3.95M2.465 4.882H5.89M.854 7.299h3.424" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
TruckFast.displayName = "TruckFast";

var __defProp$h = Object.defineProperty;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __objRest$c = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$h.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$h.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const TypescriptEx = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$c(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$h({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          fillRule: "evenodd",
          d: "M3.75.75h7.5a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3m4.711 11.281v-1.376q.35.315.757.471.408.157.824.157.245 0 .426-.047a1 1 0 0 0 .304-.131.522.522 0 0 0 .242-.445.56.56 0 0 0-.096-.323 1.1 1.1 0 0 0-.262-.262 2.7 2.7 0 0 0-.394-.232 13 13 0 0 0-.492-.228q-.672-.3-1.002-.735-.33-.434-.33-1.049 0-.481.18-.827.18-.345.49-.57.31-.223.718-.329Q10.234 6 10.69 6q.45 0 .795.058t.638.178v1.286a2 2 0 0 0-.314-.19 2.4 2.4 0 0 0-.709-.214 2.4 2.4 0 0 0-.338-.026q-.22 0-.4.045a1 1 0 0 0-.304.127.6.6 0 0 0-.192.195.5.5 0 0 0-.068.256q0 .155.076.277t.216.233.34.215.452.217q.345.154.619.328t.47.394q.195.22.3.5.105.282.104.656 0 .516-.182.866a1.55 1.55 0 0 1-.494.568 2.1 2.1 0 0 1-.727.311 4 4 0 0 1-.874.095q-.472 0-.898-.086a2.6 2.6 0 0 1-.739-.258m-.51-4.765H6.31v5.027H5.009V7.266H3.375V6.137h4.577z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
TypescriptEx.displayName = "TypescriptEx";

var __defProp$g = Object.defineProperty;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
const Typescript = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$g({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#3178C6",
          d: "M11.25.75h-7.5a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#fff",
          fillRule: "evenodd",
          d: "M8.462 10.656v1.375q.312.172.738.258t.898.086q.46 0 .874-.095a2.1 2.1 0 0 0 .727-.311q.312-.217.494-.568.182-.35.182-.866 0-.375-.104-.655a1.6 1.6 0 0 0-.3-.501 2.2 2.2 0 0 0-.47-.394 5 5 0 0 0-.619-.328 8 8 0 0 1-.452-.217 2.3 2.3 0 0 1-.34-.215.9.9 0 0 1-.216-.233.5.5 0 0 1-.076-.277.5.5 0 0 1 .068-.256.6.6 0 0 1 .192-.195 1 1 0 0 1 .304-.127q.18-.045.4-.045.16 0 .338.026a2.5 2.5 0 0 1 .709.215q.17.081.314.189V6.236a3 3 0 0 0-.638-.178A5 5 0 0 0 10.69 6q-.456 0-.864.105t-.718.33q-.31.222-.49.569-.18.345-.18.827 0 .615.33 1.05.33.434 1.002.734.264.117.492.228.229.112.394.232.166.12.262.262a.56.56 0 0 1 .037.57.56.56 0 0 1-.183.198 1 1 0 0 1-.304.13 1.7 1.7 0 0 1-.426.048q-.416 0-.824-.157a2.4 2.4 0 0 1-.756-.47M6.31 7.265h1.642V6.137H3.375v1.13h1.634v5.026h1.3z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
Typescript.displayName = "Typescript";

var __defProp$f = Object.defineProperty;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var __objRest$b = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UserGroup = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$b(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 7.5a1.556 1.556 0 1 0 0-3.111 1.556 1.556 0 0 0 0 3.111M5.012 12.77c-.38-.115-.636-.494-.552-.883a3.112 3.112 0 0 1 6.08 0c.084.388-.17.768-.552.883a8.6 8.6 0 0 1-4.976 0M11.194 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M11.065 6.137q.064-.002.13-.003c1.3 0 2.394.892 2.7 2.098.102.397-.163.793-.558.908a7.7 7.7 0 0 1-1.869.299M3.806 4.194a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333M3.935 6.137l-.13-.003a2.79 2.79 0 0 0-2.7 2.098c-.102.397.163.793.558.908a7.7 7.7 0 0 0 1.869.299" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UserGroup.displayName = "UserGroup";

var __defProp$e = Object.defineProperty;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __objRest$a = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UserMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$a(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$e({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.944a2.444 2.444 0 1 0 0-4.888 2.444 2.444 0 0 0 0 4.888M11.733 13.292c.764-.24 1.166-1.085.842-1.818A5.55 5.55 0 0 0 7.5 8.167a5.55 5.55 0 0 0-5.075 3.307c-.324.733.078 1.577.842 1.818a14.1 14.1 0 0 0 8.466 0"
        }
      )
    );
  }
);
UserMini.displayName = "UserMini";

var __defProp$d = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var __objRest$9 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$d.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$d.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const User = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$9(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$d({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M7.5 5.944a2.444 2.444 0 1 0 0-4.888 2.444 2.444 0 0 0 0 4.888M11.733 13.292c.764-.24 1.166-1.085.842-1.818A5.55 5.55 0 0 0 7.5 8.167a5.55 5.55 0 0 0-5.075 3.307c-.324.733.078 1.577.842 1.818a14.1 14.1 0 0 0 8.466 0"
        }
      )
    );
  }
);
User.displayName = "User";

var __defProp$c = Object.defineProperty;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __objRest$8 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$c.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$c.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UsersSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$8(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$c({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.792 7.5a2.292 2.292 0 1 0 0-4.583 2.292 2.292 0 0 0 0 4.583M10 5.417a2.292 2.292 0 1 0 0-4.584 2.292 2.292 0 0 0 0 4.584M14.33 9.248A4.65 4.65 0 0 0 10 6.25c-1.18 0-2.293.46-3.133 1.233 1.545.591 2.821 1.808 3.425 3.408.093.246.135.502.151.758a10.8 10.8 0 0 0 2.971-.538c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.097zM9.122 11.332a4.65 4.65 0 0 0-4.33-2.999 4.65 4.65 0 0 0-4.33 2.999c-.135.357-.118.746.049 1.096.172.36.487.64.867.766a10.77 10.77 0 0 0 6.827 0c.38-.127.695-.406.868-.766.166-.35.184-.74.049-1.096" })),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
UsersSolid.displayName = "UsersSolid";

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var __objRest$7 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$b.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$b.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Users = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$7(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$b({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M4.701 6.854a1.722 1.722 0 1 0 0-3.444 1.722 1.722 0 0 0 0 3.444M8.024 12.772c.45-.151.715-.64.548-1.084a4.135 4.135 0 0 0-7.74 0c-.167.444.098.934.548 1.084a10.486 10.486 0 0 0 6.644 0M10.083 4.701a1.722 1.722 0 1 0 0-3.444 1.722 1.722 0 0 0 0 3.444M10.728 11.14a10.5 10.5 0 0 0 2.678-.521c.45-.15.714-.64.547-1.084a4.135 4.135 0 0 0-6.146-1.997" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Users.displayName = "Users";

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
const Vercel = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$a({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          d: "M6.84.767a6.9 6.9 0 0 0-3.575 1.468c-.34.274-.897.847-1.142 1.175A6.9 6.9 0 0 0 .809 6.56a8 8 0 0 0-.04 1.517c.11 1.143.475 2.2 1.069 3.1a6.76 6.76 0 0 0 4.725 3.014c.388.058 1.13.077 1.517.04 1.143-.111 2.198-.475 3.098-1.07a6.76 6.76 0 0 0 3.013-4.728c.058-.388.077-1.13.04-1.518-.135-1.383-.628-2.608-1.472-3.656a8.6 8.6 0 0 0-1.175-1.143A6.9 6.9 0 0 0 8.437.801C8.117.754 7.152.733 6.84.767M9.24 6.966a633 633 0 0 1 1.665 2.922c0 .005-1.502.01-3.338.01s-3.338-.005-3.338-.013c0-.02 3.333-5.85 3.34-5.84.003.003.758 1.318 1.67 2.92"
        }
      )
    );
  }
);
Vercel.displayName = "Vercel";

var __defProp$9 = Object.defineProperty;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __objRest$6 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$9.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$9.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const VerifiedBadge = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest$6(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$9({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { filter: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#3B82F6",
          fillRule: "evenodd",
          d: "M7.28 2.337A3.6 3.6 0 0 1 10 1.097c1.086 0 2.06.48 2.72 1.24a3.6 3.6 0 0 1 2.8 1.046 3.6 3.6 0 0 1 1.047 2.8 3.6 3.6 0 0 1 1.24 2.72 3.6 3.6 0 0 1-1.241 2.72 3.6 3.6 0 0 1-1.046 2.8 3.6 3.6 0 0 1-2.8 1.046 3.6 3.6 0 0 1-4.215.916 3.6 3.6 0 0 1-1.225-.916 3.6 3.6 0 0 1-2.8-1.046 3.6 3.6 0 0 1-1.047-2.8 3.6 3.6 0 0 1-1.24-2.72c0-1.087.481-2.06 1.241-2.72a3.6 3.6 0 0 1 1.047-2.8 3.6 3.6 0 0 1 2.8-1.046",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "url(#b)",
          fillOpacity: 0.2,
          fillRule: "evenodd",
          d: "M7.28 2.337A3.6 3.6 0 0 1 10 1.097c1.086 0 2.06.48 2.72 1.24a3.6 3.6 0 0 1 2.8 1.046 3.6 3.6 0 0 1 1.047 2.8 3.6 3.6 0 0 1 1.24 2.72 3.6 3.6 0 0 1-1.241 2.72 3.6 3.6 0 0 1-1.046 2.8 3.6 3.6 0 0 1-2.8 1.046 3.6 3.6 0 0 1-4.215.916 3.6 3.6 0 0 1-1.225-.916 3.6 3.6 0 0 1-2.8-1.046 3.6 3.6 0 0 1-1.047-2.8 3.6 3.6 0 0 1-1.24-2.72c0-1.087.481-2.06 1.241-2.72a3.6 3.6 0 0 1 1.047-2.8 3.6 3.6 0 0 1 2.8-1.046",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#000",
          strokeOpacity: 0.2,
          strokeWidth: 0.5,
          d: "M3.433 11.623a3.6 3.6 0 0 0 1.047 2.8 3.6 3.6 0 0 0 2.8 1.046zm0 0a3.6 3.6 0 0 1-1.24-2.72c0-1.087.481-2.06 1.241-2.72m0 5.44v-5.44m0 0a3.6 3.6 0 0 1 1.047-2.8zm3.828-3.586.13.009.085-.099A3.34 3.34 0 0 1 10 1.357c1.008 0 1.91.445 2.523 1.15l.085.099.13-.01a3.34 3.34 0 0 1 2.598.971 3.34 3.34 0 0 1 .971 2.598l-.01.13.1.085a3.34 3.34 0 0 1 1.149 2.523 3.34 3.34 0 0 1-1.15 2.523l-.099.085.01.13a3.34 3.34 0 0 1-.971 2.597 3.34 3.34 0 0 1-2.598.971l-.13-.009-.085.098A3.34 3.34 0 0 1 10 16.448a3.34 3.34 0 0 1-2.523-1.15l-.085-.098-.13.01a3.34 3.34 0 0 1-2.598-.97v-.001a3.34 3.34 0 0 1-.971-2.598l.01-.13-.1-.085a3.34 3.34 0 0 1-1.149-2.523c0-1.008.445-1.911 1.15-2.523l.099-.086-.01-.13a3.34 3.34 0 0 1 .971-2.596 3.34 3.34 0 0 1 2.598-.971Z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m6.964 9.206 2.429 2.429 3.643-5.464"
        }
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement(
        "linearGradient",
        {
          id: "b",
          x1: 10,
          x2: 10,
          y1: 1.097,
          y2: 16.709,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React__namespace.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React__namespace.createElement(
        "filter",
        {
          id: "a",
          width: 20,
          height: 20,
          x: 0,
          y: 0,
          colorInterpolationFilters: "sRGB",
          filterUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React__namespace.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "BackgroundImageFix",
            result: "effect1_dropShadow_6386_370"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "effect1_dropShadow_6386_370",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement("feBlend", { in2: "shape", result: "effect2_innerShadow_6386_370" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React__namespace.createElement("feOffset", { dy: -1.054 }),
        /* @__PURE__ */ React__namespace.createElement("feGaussianBlur", { stdDeviation: 2.635 }),
        /* @__PURE__ */ React__namespace.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React__namespace.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" }),
        /* @__PURE__ */ React__namespace.createElement(
          "feBlend",
          {
            in2: "effect2_innerShadow_6386_370",
            result: "effect3_innerShadow_6386_370"
          }
        )
      ))
    );
  }
);
VerifiedBadge.displayName = "VerifiedBadge";

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
const Visa = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$8({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#1A1F71",
          d: "M5.695 5.164 3.731 9.849H2.45l-.966-3.74c-.059-.23-.11-.314-.288-.41C.904 5.54.423 5.391 0 5.298l.029-.135H2.09a.565.565 0 0 1 .559.477l.51 2.712 1.262-3.19zm5.02 3.156c.006-1.237-1.71-1.305-1.697-1.858.003-.168.163-.347.513-.392.41-.04.823.033 1.196.21l.212-.994a3.3 3.3 0 0 0-1.133-.208c-1.198 0-2.042.637-2.05 1.549-.007.674.603 1.05 1.062 1.275.473.23.631.377.629.582-.003.315-.376.453-.725.459-.61.009-.963-.165-1.245-.296l-.22 1.026c.284.13.806.244 1.348.249 1.273 0 2.106-.629 2.11-1.602m3.164 1.529H15l-.978-4.685h-1.035a.55.55 0 0 0-.516.344l-1.819 4.34h1.273l.253-.7h1.555zm-1.352-1.66.637-1.76.368 1.76zm-5.1-3.025L6.425 9.849H5.213l1.003-4.685z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Visa.displayName = "Visa";

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const WandSparkle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$5(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$7({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m10.786 2.214-8.582 8.582a.89.89 0 0 0 0 1.257l.743.742a.89.89 0 0 0 1.257 0l8.582-8.58a.89.89 0 0 0 0-1.258l-.743-.743a.89.89 0 0 0-1.257 0M8.733 4.267l2 2"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "m5.938 2.604-.84-.28-.282-.842c-.09-.272-.54-.272-.632 0l-.28.842-.841.28a.334.334 0 0 0 0 .633l.84.28.281.842a.333.333 0 0 0 .632 0l.28-.842.841-.28a.334.334 0 0 0 .001-.633M14.307 10.158l-1.123-.374-.374-1.123c-.122-.363-.722-.363-.843 0l-.375 1.123-1.122.374a.444.444 0 0 0 0 .843l1.122.374.375 1.122a.446.446 0 0 0 .844 0l.374-1.122L14.308 11a.445.445 0 0 0 0-.843M7.722 1.722a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
WandSparkle.displayName = "WandSparkle";

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
const Webshipper = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$6({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#0B2770",
          d: "M2.844 3.771c-.189.078-.313.342-.28.595a.7.7 0 0 0 .095.27.5.5 0 0 0 .174.152l.051.027.473.005c.46.006.475.007.517.03a.4.4 0 0 1 .164.142c.203.288.12.718-.165.866l-.052.027-1.346.005-1.346.006-.044.024a.4.4 0 0 0-.162.138.67.67 0 0 0-.078.593c.04.122.15.246.253.288.052.021.096.021 2.04.021 1.68 0 1.996.003 2.044.016.131.036.231.135.29.29a.44.44 0 0 1 .039.203.6.6 0 0 1-.014.183c-.04.169-.144.305-.273.356-.053.022-.087.022-1.449.022-.867 0-1.416.005-1.453.011-.24.044-.402.361-.341.668.04.194.172.355.323.39.033.008.27.012.694.012.698 0 .685 0 .783.062a.5.5 0 0 1 .097.094.65.65 0 0 1 .064.654.6.6 0 0 1-.166.199c-.1.065.007.061-1.778.061-1.442 0-1.643.003-1.687.017-.22.075-.354.368-.298.65.039.194.164.352.31.391.037.01.94.012 3.767.01l3.719-.003.085-.03c.319-.111.55-.343.71-.71.157-.357 1.123-2.52 1.126-2.52.003.001.261.578.575 1.283s.593 1.325.62 1.377c.147.288.398.5.68.579a1 1 0 0 0 .37.011 1 1 0 0 0 .461-.227c.095-.082.252-.292.307-.41.081-.173 2.123-4.759 2.148-4.825a1.83 1.83 0 0 0 .049-1.089c-.127-.453-.402-.774-.77-.899a1 1 0 0 0-.428-.02 1 1 0 0 0-.288.112 1.3 1.3 0 0 0-.414.438c-.023.042-.305.664-.626 1.384s-.587 1.31-.591 1.31-.263-.576-.577-1.28-.592-1.321-.619-1.373a1.3 1.3 0 0 0-.41-.462.9.9 0 0 0-.488-.145c-.29 0-.56.143-.766.408-.096.124-.124.178-.295.563-.36.813-1.003 2.25-1.005 2.247l-.566-1.276a77 77 0 0 0-.611-1.36c-.163-.295-.42-.501-.704-.565-.066-.015-.256-.017-1.483-.016-1.34 0-1.409.001-1.455.02"
        }
      )
    );
  }
);
Webshipper.displayName = "Webshipper";

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Window = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$4(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$5({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { fill: color, clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement("path", { d: "M3.125 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25M5.209 4.166a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" }), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M2.709.708A2.417 2.417 0 0 0 .292 3.125v7.083a2.417 2.417 0 0 0 2.417 2.417h4.885a.75.75 0 0 0 0-1.5H2.709a.917.917 0 0 1-.917-.917V6.375h10.583V7.48a.75.75 0 0 0 1.5 0V3.125A2.417 2.417 0 0 0 11.46.708zm9.666 4.167H1.792v-1.75c0-.506.41-.917.917-.917h8.75c.506 0 .916.41.916.917z",
          clipRule: "evenodd"
        }
      ), /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fillRule: "evenodd",
          d: "M9.11 7.434c-.78-.282-1.548.473-1.258 1.263l1.808 4.949c.32.88 1.575.854 1.86-.039l.607-1.897 1.898-.607c.891-.285.916-1.539.037-1.86l-4.95-1.808zm1.44 4.28-.908-2.488 2.488.908-.828.265a.75.75 0 0 0-.486.486z",
          clipRule: "evenodd"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
Window.displayName = "Window";

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const XCircleSolid = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$3(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$4({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement("g", { clipPath: "url(#a)" }, /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: color,
          d: "M7.5.389C3.58.389.389 3.579.389 7.5s3.19 7.111 7.111 7.111 7.111-3.19 7.111-7.111S11.421.389 7.5.389m2.916 9.084a.667.667 0 0 1-.943.943L7.5 8.443l-1.973 1.973a.665.665 0 0 1-.943 0 .667.667 0 0 1 0-.943L6.558 7.5 4.584 5.527a.667.667 0 1 1 .944-.943L7.5 6.557l1.973-1.973a.667.667 0 0 1 .943.943L8.444 7.5l1.973 1.973z"
        }
      )),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
XCircleSolid.displayName = "XCircleSolid";

var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const XCircle = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$2(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$3({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "g",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          clipPath: "url(#a)"
        },
        /* @__PURE__ */ React__namespace.createElement("path", { d: "M7.5 13.945a6.444 6.444 0 1 0 0-12.89 6.444 6.444 0 0 0 0 12.89M5.056 5.056l4.888 4.889M9.944 5.056 5.056 9.945" })
      ),
      /* @__PURE__ */ React__namespace.createElement("defs", null, /* @__PURE__ */ React__namespace.createElement("clipPath", { id: "a" }, /* @__PURE__ */ React__namespace.createElement("path", { fill: "#fff", d: "M0 0h15v15H0z" })))
    );
  }
);
XCircle.displayName = "XCircle";

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const XMarkMini = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest$1(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$2({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
        }
      )
    );
  }
);
XMarkMini.displayName = "XMarkMini";

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const XMark = React__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues$1({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "m11.25 3.75-7.5 7.5M3.75 3.75l7.5 7.5"
        }
      )
    );
  }
);
XMark.displayName = "XMark";

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const X = React__namespace.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ React__namespace.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React__namespace.createElement(
        "path",
        {
          fill: "#000",
          fillRule: "evenodd",
          d: "M.75 1.172h4.43l3.15 4.396 3.81-4.396h1.688L9.094 6.634l5.156 7.194H9.82L6.67 9.432l-3.81 4.396H1.171l4.734-5.462zm9.72 11.39L3.214 2.438H4.53l7.256 10.125z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
X.displayName = "X";

exports.AcademicCap = AcademicCap;
exports.AcademicCapSolid = AcademicCapSolid;
exports.Adjustments = Adjustments;
exports.AdjustmentsDone = AdjustmentsDone;
exports.AiAssistent = AiAssistent;
exports.Amazon = Amazon;
exports.Apple = Apple;
exports.ArchiveBox = ArchiveBox;
exports.ArrowDown = ArrowDown;
exports.ArrowDownCircle = ArrowDownCircle;
exports.ArrowDownLeft = ArrowDownLeft;
exports.ArrowDownLeftMini = ArrowDownLeftMini;
exports.ArrowDownMini = ArrowDownMini;
exports.ArrowDownRightMini = ArrowDownRightMini;
exports.ArrowDownTray = ArrowDownTray;
exports.ArrowLeft = ArrowLeft;
exports.ArrowLeftMini = ArrowLeftMini;
exports.ArrowLongDown = ArrowLongDown;
exports.ArrowLongLeft = ArrowLongLeft;
exports.ArrowLongRight = ArrowLongRight;
exports.ArrowLongUp = ArrowLongUp;
exports.ArrowPath = ArrowPath;
exports.ArrowPathMini = ArrowPathMini;
exports.ArrowRightDown = ArrowRightDown;
exports.ArrowRightMini = ArrowRightMini;
exports.ArrowRightOnRectangle = ArrowRightOnRectangle;
exports.ArrowUpCircleSolid = ArrowUpCircleSolid;
exports.ArrowUpDown = ArrowUpDown;
exports.ArrowUpMini = ArrowUpMini;
exports.ArrowUpRightMicro = ArrowUpRightMicro;
exports.ArrowUpRightMini = ArrowUpRightMini;
exports.ArrowUpRightOnBox = ArrowUpRightOnBox;
exports.ArrowUpTray = ArrowUpTray;
exports.ArrowUturnLeft = ArrowUturnLeft;
exports.ArrowsPointingOut = ArrowsPointingOut;
exports.ArrowsPointingOutMini = ArrowsPointingOutMini;
exports.ArrrowRight = ArrrowRight;
exports.AtSymbol = AtSymbol;
exports.BackwardSolid = BackwardSolid;
exports.BarsArrowDown = BarsArrowDown;
exports.BarsThree = BarsThree;
exports.Beaker = Beaker;
exports.BellAlert = BellAlert;
exports.BellAlertDone = BellAlertDone;
exports.BellAlertSolid = BellAlertSolid;
exports.Bolt = Bolt;
exports.BoltSolid = BoltSolid;
exports.Book = Book;
exports.BookOpen = BookOpen;
exports.Bookmarks = Bookmarks;
exports.BottomToTop = BottomToTop;
exports.BroomSparkle = BroomSparkle;
exports.Bug = Bug;
exports.BugAntSolid = BugAntSolid;
exports.BuildingStorefront = BuildingStorefront;
exports.BuildingTax = BuildingTax;
exports.Buildings = Buildings;
exports.BuildingsMini = BuildingsMini;
exports.BuildingsSolid = BuildingsSolid;
exports.Button = Button;
exports.Calendar = Calendar;
exports.CalendarMini = CalendarMini;
exports.CalendarSolid = CalendarSolid;
exports.Camera = Camera;
exports.CaretMaximizeDiagonal = CaretMaximizeDiagonal;
exports.CaretMinimizeDiagonal = CaretMinimizeDiagonal;
exports.Cash = Cash;
exports.CashSolid = CashSolid;
exports.Channels = Channels;
exports.ChannelsSolid = ChannelsSolid;
exports.ChartBar = ChartBar;
exports.ChartPie = ChartPie;
exports.ChatBubble = ChatBubble;
exports.ChatBubbleLeftRight = ChatBubbleLeftRight;
exports.ChatBubbleLeftRightSolid = ChatBubbleLeftRightSolid;
exports.Check = Check;
exports.CheckCircle = CheckCircle;
exports.CheckCircleMiniSolid = CheckCircleMiniSolid;
exports.CheckCircleSolid = CheckCircleSolid;
exports.CheckMini = CheckMini;
exports.ChevronDoubleLeft = ChevronDoubleLeft;
exports.ChevronDoubleLeftMiniSolid = ChevronDoubleLeftMiniSolid;
exports.ChevronDoubleRight = ChevronDoubleRight;
exports.ChevronDoubleRightMiniSolid = ChevronDoubleRightMiniSolid;
exports.ChevronDown = ChevronDown;
exports.ChevronDownMini = ChevronDownMini;
exports.ChevronLeft = ChevronLeft;
exports.ChevronLeftMini = ChevronLeftMini;
exports.ChevronRight = ChevronRight;
exports.ChevronRightMini = ChevronRightMini;
exports.ChevronUpDown = ChevronUpDown;
exports.ChevronUpMini = ChevronUpMini;
exports.CircleArrowUp = CircleArrowUp;
exports.CircleDottedLine = CircleDottedLine;
exports.CircleFilledSolid = CircleFilledSolid;
exports.CircleHalfSolid = CircleHalfSolid;
exports.CircleMiniFilledSolid = CircleMiniFilledSolid;
exports.CircleMiniSolid = CircleMiniSolid;
exports.CircleQuarterSolid = CircleQuarterSolid;
exports.CircleSliders = CircleSliders;
exports.CircleSolid = CircleSolid;
exports.CircleStack = CircleStack;
exports.CircleStackSolid = CircleStackSolid;
exports.CircleThreeQuartersSolid = CircleThreeQuartersSolid;
exports.Clock = Clock;
exports.ClockChangedSolidMini = ClockChangedSolidMini;
exports.ClockSolid = ClockSolid;
exports.ClockSolidMini = ClockSolidMini;
exports.CloneDashed = CloneDashed;
exports.CloudArrowDown = CloudArrowDown;
exports.CloudArrowUp = CloudArrowUp;
exports.CogSixTooth = CogSixTooth;
exports.CogSixToothSolid = CogSixToothSolid;
exports.CommandLine = CommandLine;
exports.CommandLineSolid = CommandLineSolid;
exports.Component = Component;
exports.ComponentSolid = ComponentSolid;
exports.ComputerDesktop = ComputerDesktop;
exports.ComputerDesktopSolid = ComputerDesktopSolid;
exports.CreditCard = CreditCard;
exports.CreditCardSolid = CreditCardSolid;
exports.CubeSolid = CubeSolid;
exports.CurrencyDollar = CurrencyDollar;
exports.CurrencyDollarSolid = CurrencyDollarSolid;
exports.CursorArrowRays = CursorArrowRays;
exports.DecisionProcess = DecisionProcess;
exports.DescendingSorting = DescendingSorting;
exports.Directions = Directions;
exports.Discord = Discord;
exports.DocumentSeries = DocumentSeries;
exports.DocumentText = DocumentText;
exports.DocumentTextSolid = DocumentTextSolid;
exports.DotsSix = DotsSix;
exports.EllipseBlueSolid = EllipseBlueSolid;
exports.EllipseGreenSolid = EllipseGreenSolid;
exports.EllipseGreySolid = EllipseGreySolid;
exports.EllipseMiniSolid = EllipseMiniSolid;
exports.EllipseOrangeSolid = EllipseOrangeSolid;
exports.EllipsePurpleSolid = EllipsePurpleSolid;
exports.EllipseRedSolid = EllipseRedSolid;
exports.EllipseSolid = EllipseSolid;
exports.EllipsisHorizontal = EllipsisHorizontal;
exports.EllipsisVertical = EllipsisVertical;
exports.Envelope = Envelope;
exports.EnvelopeSolid = EnvelopeSolid;
exports.ExclamationCircle = ExclamationCircle;
exports.ExclamationCircleSolid = ExclamationCircleSolid;
exports.Eye = Eye;
exports.EyeMini = EyeMini;
exports.EyeSlash = EyeSlash;
exports.EyeSlashMini = EyeSlashMini;
exports.FaceSmile = FaceSmile;
exports.Facebook = Facebook;
exports.FeaturedBadge = FeaturedBadge;
exports.Figma = Figma;
exports.FlagMini = FlagMini;
exports.FlyingBox = FlyingBox;
exports.Folder = Folder;
exports.FolderIllustration = FolderIllustration;
exports.FolderOpen = FolderOpen;
exports.FolderOpenIllustration = FolderOpenIllustration;
exports.ForwardSolid = ForwardSolid;
exports.Funnel = Funnel;
exports.Gatsby = Gatsby;
exports.GatsbyEx = GatsbyEx;
exports.Gift = Gift;
exports.GiftSolid = GiftSolid;
exports.Github = Github;
exports.Glasses = Glasses;
exports.GlobeEurope = GlobeEurope;
exports.GlobeEuropeSolid = GlobeEuropeSolid;
exports.Google = Google;
exports.GridList = GridList;
exports.HandTruck = HandTruck;
exports.Hashtag = Hashtag;
exports.Heart = Heart;
exports.HeartBroken = HeartBroken;
exports.History = History;
exports.House = House;
exports.InboxSolid = InboxSolid;
exports.InformationCircle = InformationCircle;
exports.InformationCircleSolid = InformationCircleSolid;
exports.Javascript = Javascript;
exports.JavascriptEx = JavascriptEx;
exports.Key = Key;
exports.KeySolid = KeySolid;
exports.Keyboard = Keyboard;
exports.Klarna = Klarna;
exports.KlarnaEx = KlarnaEx;
exports.Klaviyo = Klaviyo;
exports.Levels = Levels;
exports.Lifebuoy = Lifebuoy;
exports.LightBulb = LightBulb;
exports.LightBulbSolid = LightBulbSolid;
exports.Link = Link;
exports.Linkedin = Linkedin;
exports.ListBullet = ListBullet;
exports.ListCheckbox = ListCheckbox;
exports.ListTree = ListTree;
exports.Loader = Loader;
exports.LockClosedSolid = LockClosedSolid;
exports.LockClosedSolidMini = LockClosedSolidMini;
exports.LockOpenSolid = LockOpenSolid;
exports.MagnifierAlert = MagnifierAlert;
exports.MagnifyingGlass = MagnifyingGlass;
exports.MagnifyingGlassMini = MagnifyingGlassMini;
exports.Map = Map;
exports.MapPin = MapPin;
exports.Mastercard = Mastercard;
exports.MediaPlay = MediaPlay;
exports.Medusa = Medusa;
exports.Meta = Meta;
exports.Minus = Minus;
exports.MinusMini = MinusMini;
exports.Moon = Moon;
exports.MoonSolid = MoonSolid;
exports.Newspaper = Newspaper;
exports.NextJs = NextJs;
exports.OpenRectArrowOut = OpenRectArrowOut;
exports.PaperClip = PaperClip;
exports.PauseSolid = PauseSolid;
exports.PenPlus = PenPlus;
exports.Pencil = Pencil;
exports.PencilSquare = PencilSquare;
exports.PencilSquareSolid = PencilSquareSolid;
exports.Phone = Phone;
exports.Photo = Photo;
exports.PhotoSolid = PhotoSolid;
exports.PlayMiniSolid = PlayMiniSolid;
exports.PlaySolid = PlaySolid;
exports.Plus = Plus;
exports.PlusMini = PlusMini;
exports.Puzzle = Puzzle;
exports.PuzzleSolid = PuzzleSolid;
exports.QuestionMark = QuestionMark;
exports.QuestionMarkCircle = QuestionMarkCircle;
exports.QueueList = QueueList;
exports.ReactJs = ReactJs;
exports.ReactJsEx = ReactJsEx;
exports.Receipt = Receipt;
exports.ReceiptPercent = ReceiptPercent;
exports.ReplaySolid = ReplaySolid;
exports.Resize = Resize;
exports.RocketLaunch = RocketLaunch;
exports.RocketLaunchSolid = RocketLaunchSolid;
exports.Rss = Rss;
exports.Sanity = Sanity;
exports.ScrollText = ScrollText;
exports.Sendgrid = Sendgrid;
exports.Server = Server;
exports.ServerSolid = ServerSolid;
exports.ServerStack = ServerStack;
exports.ServerStackSolid = ServerStackSolid;
exports.Share = Share;
exports.Shipbob = Shipbob;
exports.Shopping = Shopping;
exports.ShoppingBag = ShoppingBag;
exports.ShoppingCart = ShoppingCart;
exports.ShoppingCartSolid = ShoppingCartSolid;
exports.SidebarLeft = SidebarLeft;
exports.SidebarRight = SidebarRight;
exports.Slack = Slack;
exports.Snooze = Snooze;
exports.Sparkles = Sparkles;
exports.SparklesMini = SparklesMini;
exports.SparklesMiniSolid = SparklesMiniSolid;
exports.SparklesSolid = SparklesSolid;
exports.Spinner = Spinner;
exports.SquareBlueSolid = SquareBlueSolid;
exports.SquareGreenSolid = SquareGreenSolid;
exports.SquareGreySolid = SquareGreySolid;
exports.SquareOrangeSolid = SquareOrangeSolid;
exports.SquarePurpleSolid = SquarePurpleSolid;
exports.SquareRedSolid = SquareRedSolid;
exports.SquareTwoStack = SquareTwoStack;
exports.SquareTwoStackMini = SquareTwoStackMini;
exports.SquareTwoStackSolid = SquareTwoStackSolid;
exports.SquaresPlus = SquaresPlus;
exports.SquaresPlusSolid = SquaresPlusSolid;
exports.StackPerspective = StackPerspective;
exports.Star = Star;
exports.StarSolid = StarSolid;
exports.Stopwatch = Stopwatch;
exports.Stripe = Stripe;
exports.Sun = Sun;
exports.SunSolid = SunSolid;
exports.Swatch = Swatch;
exports.SwatchSolid = SwatchSolid;
exports.Tag = Tag;
exports.TagSolid = TagSolid;
exports.Tailwind = Tailwind;
exports.Target = Target;
exports.TaxExclusive = TaxExclusive;
exports.TaxInclusive = TaxInclusive;
exports.Text = Text;
exports.TextHighlight = TextHighlight;
exports.ThumbDown = ThumbDown;
exports.ThumbUp = ThumbUp;
exports.ThumbnailBadge = ThumbnailBadge;
exports.TimelineVertical = TimelineVertical;
exports.Tools = Tools;
exports.ToolsSolid = ToolsSolid;
exports.TopToBottom = TopToBottom;
exports.Trash = Trash;
exports.TriangleDownMini = TriangleDownMini;
exports.TriangleLeftMini = TriangleLeftMini;
exports.TriangleRightMini = TriangleRightMini;
exports.TriangleRightMiniHover = TriangleRightMiniHover;
exports.TriangleUpMini = TriangleUpMini;
exports.TrianglesMini = TrianglesMini;
exports.Trophy = Trophy;
exports.TruckFast = TruckFast;
exports.Typescript = Typescript;
exports.TypescriptEx = TypescriptEx;
exports.User = User;
exports.UserGroup = UserGroup;
exports.UserMini = UserMini;
exports.Users = Users;
exports.UsersSolid = UsersSolid;
exports.Vercel = Vercel;
exports.VerifiedBadge = VerifiedBadge;
exports.Visa = Visa;
exports.WandSparkle = WandSparkle;
exports.Webshipper = Webshipper;
exports.Window = Window;
exports.X = X;
exports.XCircle = XCircle;
exports.XCircleSolid = XCircleSolid;
exports.XMark = XMark;
exports.XMarkMini = XMarkMini;
//# sourceMappingURL=medusa-icons.js.map
