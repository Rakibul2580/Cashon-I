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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\nconst Overview = ()=>{\n    var options = {\n        series: [\n            {\n                name: \"series1\",\n                data: [\n                    31,\n                    40,\n                    28,\n                    51,\n                    42,\n                    109,\n                    100\n                ]\n            },\n            {\n                name: \"series2\",\n                data: [\n                    11,\n                    32,\n                    45,\n                    32,\n                    34,\n                    52,\n                    41\n                ]\n            }\n        ],\n        chart: {\n            height: 350,\n            type: \"area\"\n        },\n        dataLabels: {\n            enabled: false\n        },\n        stroke: {\n            curve: \"smooth\"\n        },\n        xaxis: {\n            type: \"datetime\",\n            categories: [\n                \"2018-09-19T00:00:00.000Z\",\n                \"2018-09-19T01:30:00.000Z\",\n                \"2018-09-19T02:30:00.000Z\",\n                \"2018-09-19T03:30:00.000Z\",\n                \"2018-09-19T04:30:00.000Z\",\n                \"2018-09-19T05:30:00.000Z\",\n                \"2018-09-19T06:30:00.000Z\"\n            ]\n        },\n        tooltip: {\n            x: {\n                format: \"dd/MM/yy HH:mm\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: options,\n            series: options.series,\n            type: \"line\",\n            height: 400,\n            className: \"!h-96\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Overview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Overview);\nvar _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NvbnRlbnQvT3ZlcnZpZXcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDSDtBQUVyQyxNQUFNRyxXQUFXLElBQU07SUFDckIsSUFBSUMsVUFBVTtRQUNaQyxRQUFRO1lBQ047Z0JBQ0VDLE1BQU07Z0JBQ05DLE1BQU07b0JBQUM7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUs7aUJBQUk7WUFDdEM7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtvQkFBQztvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtpQkFBRztZQUNwQztTQUNEO1FBQ0RDLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7UUFDQUMsWUFBWTtZQUNWQyxTQUFTLEtBQUs7UUFDaEI7UUFDQUMsUUFBUTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQUMsT0FBTztZQUNMTCxNQUFNO1lBQ05NLFlBQVk7Z0JBQ1Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtRQUNIO1FBQ0FDLFNBQVM7WUFDUEMsR0FBRztnQkFDREMsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDbkIsd0RBQUtBO1lBQ0pFLFNBQVNBO1lBQ1RDLFFBQVFELFFBQVFDLE1BQU07WUFDdEJLLE1BQUs7WUFDTEQsUUFBUTtZQUNSWSxXQUFVOzs7Ozs7Ozs7OztBQUlsQjtLQW5ETWxCO0FBcUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQ29udGVudC9PdmVydmlldy5qc3g/MmRlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJyZWFjdC1hcGV4Y2hhcnRzXCI7XHJcblxyXG5jb25zdCBPdmVydmlldyA9ICgpID0+IHtcclxuICB2YXIgb3B0aW9ucyA9IHtcclxuICAgIHNlcmllczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJzZXJpZXMxXCIsXHJcbiAgICAgICAgZGF0YTogWzMxLCA0MCwgMjgsIDUxLCA0MiwgMTA5LCAxMDBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJzZXJpZXMyXCIsXHJcbiAgICAgICAgZGF0YTogWzExLCAzMiwgNDUsIDMyLCAzNCwgNTIsIDQxXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjaGFydDoge1xyXG4gICAgICBoZWlnaHQ6IDM1MCxcclxuICAgICAgdHlwZTogXCJhcmVhXCIsXHJcbiAgICB9LFxyXG4gICAgZGF0YUxhYmVsczoge1xyXG4gICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzdHJva2U6IHtcclxuICAgICAgY3VydmU6IFwic21vb3RoXCIsXHJcbiAgICB9LFxyXG4gICAgeGF4aXM6IHtcclxuICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgXCIyMDE4LTA5LTE5VDAwOjAwOjAwLjAwMFpcIixcclxuICAgICAgICBcIjIwMTgtMDktMTlUMDE6MzA6MDAuMDAwWlwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMjozMDowMC4wMDBaXCIsXHJcbiAgICAgICAgXCIyMDE4LTA5LTE5VDAzOjMwOjAwLjAwMFpcIixcclxuICAgICAgICBcIjIwMTgtMDktMTlUMDQ6MzA6MDAuMDAwWlwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwNTozMDowMC4wMDBaXCIsXHJcbiAgICAgICAgXCIyMDE4LTA5LTE5VDA2OjMwOjAwLjAwMFpcIixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICBmb3JtYXQ6IFwiZGQvTU0veXkgSEg6bW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPENoYXJ0XHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBzZXJpZXM9e29wdGlvbnMuc2VyaWVzfVxyXG4gICAgICAgIHR5cGU9XCJsaW5lXCJcclxuICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICBjbGFzc05hbWU9XCIhaC05NlwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcnZpZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2hhcnQiLCJPdmVydmlldyIsIm9wdGlvbnMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNoYXJ0IiwiaGVpZ2h0IiwidHlwZSIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwic3Ryb2tlIiwiY3VydmUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ0b29sdGlwIiwieCIsImZvcm1hdCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Content/Overview.jsx\n"));

/***/ })

});