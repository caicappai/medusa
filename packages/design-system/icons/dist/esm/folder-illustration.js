/**
 * @medusajs/icons v2.1.3 - MIT
 */

import * as React from 'react';

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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const FolderIllustration = React.forwardRef(
  (_a, ref) => {
    var _b = _a, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 15,
        height: 15,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#60A5FA",
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "url(#a)",
          fillOpacity: 0.15,
          fillRule: "evenodd",
          d: "M13.935 11.183a2.32 2.32 0 0 1-2.318 2.319H3.383a2.32 2.32 0 0 1-2.318-2.319V3.817a2.32 2.32 0 0 1 2.318-2.319h1.691c.704 0 1.368.32 1.808.867l.348.433h4.387a2.32 2.32 0 0 1 2.318 2.319z",
          clipRule: "evenodd"
        }
      ),
      /* @__PURE__ */ React.createElement(
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
      /* @__PURE__ */ React.createElement("g", { filter: "url(#b)" }, /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "#60A5FA",
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      ), /* @__PURE__ */ React.createElement(
        "path",
        {
          fill: "url(#c)",
          fillOpacity: 0.2,
          d: "M1.065 7.283a2.32 2.32 0 0 1 2.318-2.318h8.234a2.32 2.32 0 0 1 2.318 2.318v3.9a2.32 2.32 0 0 1-2.318 2.318H3.383a2.32 2.32 0 0 1-2.318-2.318z"
        }
      )),
      /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "a",
          x1: 7.5,
          x2: 7.5,
          y1: 1.498,
          y2: 13.502,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("stop", null),
        /* @__PURE__ */ React.createElement("stop", { offset: 1, stopOpacity: 0 })
      ), /* @__PURE__ */ React.createElement(
        "linearGradient",
        {
          id: "c",
          x1: 7.5,
          x2: 7.5,
          y1: 4.965,
          y2: 13.501,
          gradientUnits: "userSpaceOnUse"
        },
        /* @__PURE__ */ React.createElement("stop", { stopColor: "#fff" }),
        /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#fff", stopOpacity: 0 })
      ), /* @__PURE__ */ React.createElement(
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
        /* @__PURE__ */ React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
        /* @__PURE__ */ React.createElement(
          "feBlend",
          {
            in: "SourceGraphic",
            in2: "BackgroundImageFix",
            result: "shape"
          }
        ),
        /* @__PURE__ */ React.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React.createElement("feOffset", { dy: -0.5 }),
        /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" }),
        /* @__PURE__ */ React.createElement("feBlend", { in2: "shape", result: "effect1_innerShadow_6347_11987" }),
        /* @__PURE__ */ React.createElement(
          "feColorMatrix",
          {
            in: "SourceAlpha",
            result: "hardAlpha",
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          }
        ),
        /* @__PURE__ */ React.createElement("feOffset", { dy: 0.5 }),
        /* @__PURE__ */ React.createElement("feComposite", { in2: "hardAlpha", k2: -1, k3: 1, operator: "arithmetic" }),
        /* @__PURE__ */ React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" }),
        /* @__PURE__ */ React.createElement(
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

export { FolderIllustration as default };
//# sourceMappingURL=folder-illustration.js.map
