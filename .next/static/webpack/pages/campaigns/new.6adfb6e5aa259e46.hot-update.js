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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar NewCampaign = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), minimumContribution = ref[0], setMinimumContribution = ref[1];\n    var onMinimumContributionChange = function(event) {\n        setMinimumContribution(event.target.value);\n    };\n    var _this1 = _this;\n    onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var accounts;\n            return C_Users_ricka_playground_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__[\"default\"].eth.getAccounts();\n                    case 3:\n                        accounts = _ctx.sent;\n                        _ctx.next = 6;\n                        return _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__[\"default\"].methods.createCampaign(_this1.state.minimumContribution).send({\n                            from: accounts[0]\n                        });\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Create Your Own Campaign!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: _this.onSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Minimum Contribution Amount\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: minimumContribution,\n                                onChange: onMinimumContributionChange,\n                                label: \"ETH\",\n                                labelPosition: \"right\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        children: \"Create Campaign\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ricka\\\\playground\\\\kickstart\\\\pages\\\\campaigns\\\\new.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewCampaign, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = NewCampaign;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCampaign);\nvar _c;\n$RefreshReg$(_c, \"NewCampaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUFpQztBQUNZO0FBQ1c7QUFDWDtBQUNOO0FBRXZDLElBQU1PLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLElBQXNEUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTNEUyxtQkFBbUIsR0FBNEJULEdBQVksR0FBeEMsRUFBRVUsc0JBQXNCLEdBQUlWLEdBQVksR0FBaEI7SUFFbEQsSUFBTVcsMkJBQTJCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQzdDRixzQkFBc0IsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOztJQUVEQyxRQUFRO21CQUFHLG1QQUFPSCxLQUFLLEVBQUs7Z0JBR3BCSSxRQUFROzs7O3dCQUZkSixLQUFLLENBQUNLLGNBQWMsRUFBRSxDQUFDOzsrQkFFQVgsc0VBQW9CLEVBQUU7O3dCQUF2Q1UsUUFBUSxZQUErQjs7K0JBQ3ZDWCxnRkFDVyxDQUFDLE9BQUtpQixLQUFLLENBQUNiLG1CQUFtQixDQUFDLENBQzlDYyxJQUFJLENBQUM7NEJBQ0pDLElBQUksRUFBRVIsUUFBUSxDQUFDLENBQUMsQ0FBQzt5QkFDbEIsQ0FBQzs7Ozs7O1NBQ0w7d0JBVGlCSixLQUFLOzs7T0FTdEIsQ0FBQztJQUVGLHFCQUNFLDhEQUFDWCwwREFBTTs7MEJBQ0wsOERBQUN3QixJQUFFOzBCQUFDLDJCQUF5Qjs7Ozs7cUJBQUs7MEJBQ2xDLDhEQUFDdkIsbURBQUk7Z0JBQUNhLFFBQVEsRUFBRSxNQUFLQSxRQUFROztrQ0FDM0IsOERBQUNiLHlEQUFVOzswQ0FDVCw4REFBQ3lCLE9BQUs7MENBQUMsNkJBQTJCOzs7OztxQ0FBUTswQ0FDMUMsOERBQUN2QixvREFBSztnQ0FDSlUsS0FBSyxFQUFFTCxtQkFBbUI7Z0NBQzFCbUIsUUFBUSxFQUFFakIsMkJBQTJCO2dDQUNyQ2dCLEtBQUssRUFBQyxLQUFLO2dDQUNYRSxhQUFhLEVBQUMsT0FBTzs7Ozs7cUNBQ3JCOzs7Ozs7NkJBQ1M7a0NBQ2IsOERBQUMxQixxREFBTTt3QkFBQzJCLE9BQU87a0NBQUMsaUJBQWU7Ozs7OzZCQUFTOzs7Ozs7cUJBQ25DOzs7Ozs7YUFDQSxDQUNUO0NBQ0g7R0FuQ0t2QixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7O0FBeUNqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9uZXcuanM/YmQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuXHJcbmNvbnN0IE5ld0NhbXBhaWduID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW21pbmltdW1Db250cmlidXRpb24sIHNldE1pbmltdW1Db250cmlidXRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBvbk1pbmltdW1Db250cmlidXRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1pbmltdW1Db250cmlidXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcclxuICAgICAgLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbilcclxuICAgICAgLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDM+Q3JlYXRlIFlvdXIgT3duIENhbXBhaWduITwvaDM+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5NaW5pbXVtIENvbnRyaWJ1dGlvbiBBbW91bnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXttaW5pbXVtQ29udHJpYnV0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25NaW5pbXVtQ29udHJpYnV0aW9uQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkVUSFwiXHJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlIENhbXBhaWduPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdDYW1wYWlnbjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiZmFjdG9yeSIsIndlYjMiLCJOZXdDYW1wYWlnbiIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInNldE1pbmltdW1Db250cmlidXRpb24iLCJvbk1pbmltdW1Db250cmlidXRpb25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwib25TdWJtaXQiLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzdGF0ZSIsInNlbmQiLCJmcm9tIiwiaDMiLCJGaWVsZCIsImxhYmVsIiwib25DaGFuZ2UiLCJsYWJlbFBvc2l0aW9uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});