"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/Content/Overview.jsx":
/*!*****************************************!*\
  !*** ./Components/Content/Overview.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import Chart from \"react-apexcharts\";\nconst Overview = ()=>{\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const options = {\n        chart: {\n            id: \"basic-bar\"\n        },\n        xaxis: {\n            categories: [\n                1991,\n                1992,\n                1993,\n                1994,\n                1995,\n                1996,\n                1997,\n                1998,\n                1999\n            ]\n        }\n    };\n    const series = [\n        {\n            name: \"series-1\",\n            data: [\n                30,\n                45,\n                40,\n                42,\n                49,\n                60,\n                70,\n                91\n            ]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n            options: options,\n            series: series,\n            type: \"line\",\n            className: \"w-96 h-96\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Overview, \"NTqKeJem0kxPdWdnhkCI+0oYHTA=\");\n_c = Overview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Overview);\nvar _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NvbnRlbnQvT3ZlcnZpZXcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDeEMsd0NBQXdDO0FBRXhDLE1BQU1FLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQTtJQUNsQyxNQUFNSSxVQUFVO1FBQ2RDLE9BQU87WUFDTEMsSUFBSTtRQUNOO1FBQ0FDLE9BQU87WUFDTEMsWUFBWTtnQkFBQztnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTtnQkFBTTthQUFLO1FBQ3BFO0lBQ0Y7SUFDQSxNQUFNQyxTQUFTO1FBQ2I7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO2dCQUFDO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2dCQUFJO2FBQUc7UUFDeEM7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUNDVixTQUFTQTtZQUNUSyxRQUFRQTtZQUNSTSxNQUFLO1lBQ0xGLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCO0dBM0JNWjtLQUFBQTtBQTZCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NvbnRlbnQvT3ZlcnZpZXcuanN4PzJkZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5cclxuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBjaGFydDoge1xyXG4gICAgICBpZDogXCJiYXNpYy1iYXJcIixcclxuICAgIH0sXHJcbiAgICB4YXhpczoge1xyXG4gICAgICBjYXRlZ29yaWVzOiBbMTk5MSwgMTk5MiwgMTk5MywgMTk5NCwgMTk5NSwgMTk5NiwgMTk5NywgMTk5OCwgMTk5OV0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgY29uc3Qgc2VyaWVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNlcmllcy0xXCIsXHJcbiAgICAgIGRhdGE6IFszMCwgNDUsIDQwLCA0MiwgNDksIDYwLCA3MCwgOTFdLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPENoYXJ0XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBzZXJpZXM9e3Nlcmllc31cclxuICAgICAgICB0eXBlPVwibGluZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy05NiBoLTk2XCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdmVydmlldztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJPdmVydmlldyIsInN0YXRlIiwic2V0U3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiQ2hhcnQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Content/Overview.jsx\n"));

/***/ })

});