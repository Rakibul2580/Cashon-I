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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apexcharts */ \"./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n\n\n\nconst Overview = ()=>{\n    var options = {\n        series: [\n            {\n                name: \"series1\",\n                data: [\n                    31,\n                    40,\n                    28,\n                    51,\n                    42,\n                    109,\n                    100\n                ]\n            },\n            {\n                name: \"series2\",\n                data: [\n                    11,\n                    32,\n                    45,\n                    32,\n                    34,\n                    52,\n                    41\n                ]\n            }\n        ],\n        chart: {\n            height: 350,\n            type: \"area\"\n        },\n        dataLabels: {\n            enabled: false\n        },\n        stroke: {\n            curve: \"smooth\"\n        },\n        xaxis: {\n            type: \"datetime\",\n            categories: [\n                \"2018-09-19T00:00:00.000Z\",\n                \"2018-09-19T01:30:00.000Z\",\n                \"2018-09-19T02:30:00.000Z\",\n                \"2018-09-19T03:30:00.000Z\",\n                \"2018-09-19T04:30:00.000Z\",\n                \"2018-09-19T05:30:00.000Z\",\n                \"2018-09-19T06:30:00.000Z\"\n            ]\n        },\n        tooltip: {\n            x: {\n                format: \"dd/MM/yy HH:mm\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-semibold\",\n                children: \"Quick Transfer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                options: options,\n                series: options.series,\n                type: \"line\",\n                height: 350,\n                className: \"!h-96\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rakibul Hasan\\\\Dropbox\\\\PC\\\\Desktop\\\\Task\\\\cashon\\\\Components\\\\Content\\\\Overview.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Overview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Overview);\nvar _c;\n$RefreshReg$(_c, \"Overview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NvbnRlbnQvT3ZlcnZpZXcuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFDSDtBQUVyQyxNQUFNRyxXQUFXLElBQU07SUFDckIsSUFBSUMsVUFBVTtRQUNaQyxRQUFRO1lBQ047Z0JBQ0VDLE1BQU07Z0JBQ05DLE1BQU07b0JBQUM7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUk7b0JBQUs7aUJBQUk7WUFDdEM7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtvQkFBQztvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtpQkFBRztZQUNwQztTQUNEO1FBQ0RDLE9BQU87WUFDTEMsUUFBUTtZQUNSQyxNQUFNO1FBQ1I7UUFDQUMsWUFBWTtZQUNWQyxTQUFTLEtBQUs7UUFDaEI7UUFDQUMsUUFBUTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQUMsT0FBTztZQUNMTCxNQUFNO1lBQ05NLFlBQVk7Z0JBQ1Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtRQUNIO1FBQ0FDLFNBQVM7WUFDUEMsR0FBRztnQkFDREMsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF3Qjs7Ozs7OzBCQUN0Qyw4REFBQ3BCLHdEQUFLQTtnQkFDSkUsU0FBU0E7Z0JBQ1RDLFFBQVFELFFBQVFDLE1BQU07Z0JBQ3RCSyxNQUFLO2dCQUNMRCxRQUFRO2dCQUNSYSxXQUFVOzs7Ozs7Ozs7Ozs7QUFJbEI7S0FwRE1uQjtBQXNETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0NvbnRlbnQvT3ZlcnZpZXcuanN4PzJkZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5cclxuY29uc3QgT3ZlcnZpZXcgPSAoKSA9PiB7XHJcbiAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICBzZXJpZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzMVwiLFxyXG4gICAgICAgIGRhdGE6IFszMSwgNDAsIDI4LCA1MSwgNDIsIDEwOSwgMTAwXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic2VyaWVzMlwiLFxyXG4gICAgICAgIGRhdGE6IFsxMSwgMzIsIDQ1LCAzMiwgMzQsIDUyLCA0MV0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgaGVpZ2h0OiAzNTAsXHJcbiAgICAgIHR5cGU6IFwiYXJlYVwiLFxyXG4gICAgfSxcclxuICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc3Ryb2tlOiB7XHJcbiAgICAgIGN1cnZlOiBcInNtb290aFwiLFxyXG4gICAgfSxcclxuICAgIHhheGlzOiB7XHJcbiAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcclxuICAgICAgY2F0ZWdvcmllczogW1xyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMDowMDowMC4wMDBaXCIsXHJcbiAgICAgICAgXCIyMDE4LTA5LTE5VDAxOjMwOjAwLjAwMFpcIixcclxuICAgICAgICBcIjIwMTgtMDktMTlUMDI6MzA6MDAuMDAwWlwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwMzozMDowMC4wMDBaXCIsXHJcbiAgICAgICAgXCIyMDE4LTA5LTE5VDA0OjMwOjAwLjAwMFpcIixcclxuICAgICAgICBcIjIwMTgtMDktMTlUMDU6MzA6MDAuMDAwWlwiLFxyXG4gICAgICAgIFwiMjAxOC0wOS0xOVQwNjozMDowMC4wMDBaXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgdG9vbHRpcDoge1xyXG4gICAgICB4OiB7XHJcbiAgICAgICAgZm9ybWF0OiBcImRkL01NL3l5IEhIOm1tXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5RdWljayBUcmFuc2ZlcjwvaDE+XHJcbiAgICAgIDxDaGFydFxyXG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgc2VyaWVzPXtvcHRpb25zLnNlcmllc31cclxuICAgICAgICB0eXBlPVwibGluZVwiXHJcbiAgICAgICAgaGVpZ2h0PXszNTB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIWgtOTZcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNoYXJ0IiwiT3ZlcnZpZXciLCJvcHRpb25zIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJjaGFydCIsImhlaWdodCIsInR5cGUiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInN0cm9rZSIsImN1cnZlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwidG9vbHRpcCIsIngiLCJmb3JtYXQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/Content/Overview.jsx\n"));

/***/ })

});