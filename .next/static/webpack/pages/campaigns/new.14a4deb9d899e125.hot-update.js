"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NewCampaign = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), minimumContribution = ref[0], setMinimumContribution = ref[1];\n    var onMinimumContributionChange = function(event) {\n        setMinimumContribution(event.target.value);\n    };\n    var _this1 = _this;\n    onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var accounts;\n            return C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                    case 3:\n                        accounts = _ctx.sent;\n                        _ctx.next = 6;\n                        return _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(_this1.state.minimumContribution).send({});\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Create Your Own Campaign!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Minimum Contribution Amount\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: minimumContribution,\n                                onChange: onMinimumContributionChange,\n                                label: \"ETH\",\n                                labelPosition: \"right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        children: \"Create Campaign\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewCampaign, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = NewCampaign;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCampaign);\nvar _c;\n$RefreshReg$(_c, \"NewCampaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFpQztBQUNZO0FBQ1c7QUFDWDtBQUNOO0FBRXZDLElBQU1PLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLElBQXNEUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNEUyxtQkFBbUIsR0FBNEJULEdBQVksR0FBeEMsRUFBRVUsc0JBQXNCLEdBQUlWLEdBQVksR0FBaEI7SUFFbEQsSUFBTVcsMkJBQTJCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQzdDRixzQkFBc0IsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOztJQUVEQyxRQUFRO21CQUFHLG1QQUFPSCxLQUFLLEVBQUs7Z0JBR3BCSSxRQUFROzs7O3dCQUZkSixLQUFLLENBQUNLLGNBQWMsRUFBRSxDQUFDOzsrQkFFQVgsc0VBQW9CLEVBQUU7O3dCQUF2Q1UsUUFBUSxZQUErQjs7K0JBQ3ZDWCxnRkFDVyxDQUFDLE9BQUtpQixLQUFLLENBQUNiLG1CQUFtQixDQUFDLENBQzlDYyxJQUFJLENBQUMsRUFFTCxDQUFDOzs7Ozs7U0FDTDt3QkFUaUJYLEtBQUs7OztPQVN0QixDQUFDO0lBRUYscUJBQ0UsOERBQUNYLDBEQUFNOzswQkFDTCw4REFBQ3VCLElBQUU7MEJBQUMsMkJBQXlCOzs7OztxQkFBSzswQkFDbEMsOERBQUN0QixtREFBSTs7a0NBQ0gsOERBQUNBLHlEQUFVOzswQ0FDVCw4REFBQ3dCLE9BQUs7MENBQUMsNkJBQTJCOzs7OztxQ0FBUTswQ0FDMUMsOERBQUN0QixvREFBSztnQ0FDSlUsS0FBSyxFQUFFTCxtQkFBbUI7Z0NBQzFCa0IsUUFBUSxFQUFFaEIsMkJBQTJCO2dDQUNyQ2UsS0FBSyxFQUFDLEtBQUs7Z0NBQ1hFLGFBQWEsRUFBQyxPQUFPOzs7OztxQ0FDckI7Ozs7Ozs2QkFDUztrQ0FDYiw4REFBQ3pCLHFEQUFNO3dCQUFDMEIsT0FBTztrQ0FBQyxpQkFBZTs7Ozs7NkJBQVM7Ozs7OztxQkFDbkM7Ozs7OzthQUNBLENBQ1Q7Q0FDSDtHQW5DS3RCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVzs7QUF5Q2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY29uc3QgTmV3Q2FtcGFpZ24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbbWluaW11bUNvbnRyaWJ1dGlvbiwgc2V0TWluaW11bUNvbnRyaWJ1dGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IG9uTWluaW11bUNvbnRyaWJ1dGlvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TWluaW11bUNvbnRyaWJ1dGlvbihldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgIC5jcmVhdGVDYW1wYWlnbih0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb24pXHJcbiAgICAgIC5zZW5kKHtcclxuXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q3JlYXRlIFlvdXIgT3duIENhbXBhaWduITwvaDM+XHJcbiAgICAgIDxGb3JtPlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPk1pbmltdW0gQ29udHJpYnV0aW9uIEFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e21pbmltdW1Db250cmlidXRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbk1pbmltdW1Db250cmlidXRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiRVRIXCJcclxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5DcmVhdGUgQ2FtcGFpZ248L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0NhbXBhaWduO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJmYWN0b3J5Iiwid2ViMyIsIk5ld0NhbXBhaWduIiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwic2V0TWluaW11bUNvbnRyaWJ1dGlvbiIsIm9uTWluaW11bUNvbnRyaWJ1dGlvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImFjY291bnRzIiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInN0YXRlIiwic2VuZCIsImgzIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwibGFiZWxQb3NpdGlvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});