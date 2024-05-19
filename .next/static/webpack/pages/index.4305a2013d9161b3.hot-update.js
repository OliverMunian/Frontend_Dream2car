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

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_dreamCar_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/dreamCar-logo.png */ \"./public/dreamCar-logo.png?c4b3\");\n/* harmony import */ var _barrel_optimize_names_FaBasketShopping_react_icons_fa6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaBasketShopping!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaBasketShopping!=!./node_modules/react-icons/fa6/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=GiHamburgerMenu!=!react-icons/gi */ \"__barrel_optimize__?names=GiHamburgerMenu!=!./node_modules/react-icons/gi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_IoMdCloseCircleOutline_react_icons_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IoMdCloseCircleOutline!=!react-icons/io */ \"__barrel_optimize__?names=IoMdCloseCircleOutline!=!./node_modules/react-icons/io/index.mjs\");\n/* harmony import */ var _cardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cardContext */ \"./cardContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const cart = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_cardContext__WEBPACK_IMPORTED_MODULE_4__.cartContext);\n    const items = cart.items;\n    let quantityBasket = 0;\n    const productBasket = items.map((product)=>{\n        quantityBasket += product.quantity;\n    });\n    function handlePress() {\n        setModal(true);\n    }\n    function handleClose() {\n        setModal(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navbar),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_GiHamburgerMenu_react_icons_gi__WEBPACK_IMPORTED_MODULE_7__.GiHamburgerMenu, {\n                        size: 40,\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon),\n                        onClick: ()=>handlePress()\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().titleLogo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/\",\n                            style: {\n                                width: \"100%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/basket\",\n                        children: quantityBasket > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().basketAmount),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBasketShopping_react_icons_fa6__WEBPACK_IMPORTED_MODULE_8__.FaBasketShopping, {\n                                    size: 40,\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)\n                                }, void 0, false, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().quantityAmount),\n                                    children: quantityBasket\n                                }, void 0, false, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().basketAmount),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaBasketShopping_react_icons_fa6__WEBPACK_IMPORTED_MODULE_8__.FaBasketShopping, {\n                                size: 40,\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            modal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().modal),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoMdCloseCircleOutline_react_icons_io__WEBPACK_IMPORTED_MODULE_9__.IoMdCloseCircleOutline, {\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),\n                            size: 40,\n                            onClick: ()=>handleClose()\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"#concours\",\n                                onClick: ()=>handleClose(),\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" CONCOURS \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 90\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"#particpation\",\n                                onClick: ()=>handleClose(),\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \" PARTICIPATION\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 94\n                                    }, this),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"#FAQ\",\n                                onClick: ()=>handleClose(),\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \" FAQ \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 85\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().contact),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/contact\",\n                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().link),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \" CONTACT \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 59\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/Head.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"gxF1pQ2V2K61k1tqSGO445/OgH8=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2xCO0FBQ2dCO0FBQ0k7QUFDRjtBQUNPO0FBQ1g7QUFDQTtBQUNoQjtBQUU3QixTQUFTVTs7SUFDUCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTU0sT0FBT0wsaURBQVVBLENBQUNGLHFEQUFXQTtJQUNuQyxNQUFNUSxRQUFRRCxLQUFLQyxLQUFLO0lBQ3hCLElBQUlDLGlCQUFpQjtJQUNyQixNQUFNQyxnQkFBZ0JGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQztRQUMvQkgsa0JBQWtCRyxRQUFRQyxRQUFRO0lBQ3BDO0lBRUEsU0FBU0M7UUFDUFIsU0FBUztJQUNYO0lBRUEsU0FBU1M7UUFDUFQsU0FBUztJQUNYO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLE9BQU87WUFBQ0MsT0FBTztRQUFNOzswQkFDeEIsOERBQUNGO2dCQUFJRyxXQUFXekIseUVBQWE7O2tDQUMzQiw4REFBQ0ksa0dBQWVBO3dCQUNkdUIsTUFBTTt3QkFDTkYsV0FBV3pCLHVFQUFXO3dCQUN0QjZCLFNBQVMsSUFBTVQ7Ozs7OztrQ0FFakIsOERBQUNFO3dCQUFJRyxXQUFXekIsNEVBQWdCO2tDQUM5Qiw0RUFBQ1Msa0RBQUlBOzRCQUFDc0IsTUFBSzs0QkFBSVIsT0FBTztnQ0FBQ0MsT0FBTTs0QkFBTTs7Ozs7Ozs7Ozs7a0NBSXJDLDhEQUFDZixrREFBSUE7d0JBQUNzQixNQUFLO2tDQUNSaEIsaUJBQWlCLGtCQUNoQiw4REFBQ087NEJBQUlHLFdBQVd6QiwrRUFBbUI7OzhDQUNqQyw4REFBQ0cscUdBQWdCQTtvQ0FBQ3dCLE1BQU07b0NBQUlGLFdBQVd6Qix1RUFBVzs7Ozs7OzhDQUNsRCw4REFBQ3NCO29DQUFJRyxXQUFXekIsaUZBQXFCOzhDQUFHZTs7Ozs7Ozs7Ozs7aURBRzFDLDhEQUFDTzs0QkFBSUcsV0FBV3pCLCtFQUFtQjtzQ0FDakMsNEVBQUNHLHFHQUFnQkE7Z0NBQUN3QixNQUFNO2dDQUFJRixXQUFXekIsdUVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLekRXLHNCQUNDLDhEQUFDVztnQkFBSUcsV0FBV3pCLHdFQUFZOztrQ0FDMUIsOERBQUNzQjtrQ0FDQyw0RUFBQ2pCLGdIQUFzQkE7NEJBQ3JCb0IsV0FBV3pCLHdFQUFZOzRCQUN2QjJCLE1BQU07NEJBQ05FLFNBQVMsSUFBTVI7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ0M7OzBDQUNDLDhEQUFDYixrREFBSUE7Z0NBQUNzQixNQUFLO2dDQUFZRixTQUFTLElBQU1SO2dDQUFlSSxXQUFXekIsdUVBQVc7MENBQUUsNEVBQUNvQzs4Q0FBRzs7Ozs7Ozs7Ozs7MENBQ2pGLDhEQUFDM0Isa0RBQUlBO2dDQUFDc0IsTUFBSztnQ0FBZ0JGLFNBQVMsSUFBTVI7Z0NBQWVJLFdBQVd6Qix1RUFBVzs7a0RBQUUsOERBQUNvQztrREFBRzs7Ozs7O29DQUFtQjs7Ozs7OzswQ0FDeEcsOERBQUMzQixrREFBSUE7Z0NBQUNzQixNQUFLO2dDQUFPRixTQUFTLElBQU1SO2dDQUFlSSxXQUFXekIsdUVBQVc7MENBQUUsNEVBQUNvQzs4Q0FBRzs7Ozs7Ozs7Ozs7MENBQzVFLDhEQUFDZDtnQ0FBSUcsV0FBV3pCLDBFQUFjOzBDQUM5Qiw0RUFBQ1Msa0RBQUlBO29DQUFDc0IsTUFBSztvQ0FBV04sV0FBV3pCLHVFQUFXOzhDQUFFLDRFQUFDb0M7a0RBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FLdEQ7Ozs7Ozs7QUFJUjtHQWxFUzFCO0tBQUFBO0FBb0VULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZC5qcz9iYTEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vcHVibGljL2RyZWFtQ2FyLWxvZ28ucG5nXCI7XG5pbXBvcnQgeyBGYUJhc2tldFNob3BwaW5nIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xuaW1wb3J0IHsgR2lIYW1idXJnZXJNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XG5pbXBvcnQgeyBJb01kQ2xvc2VDaXJjbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBjYXJ0Q29udGV4dCB9IGZyb20gXCIuLi9jYXJkQ29udGV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoY2FydENvbnRleHQpO1xuICBjb25zdCBpdGVtcyA9IGNhcnQuaXRlbXM7XG4gIGxldCBxdWFudGl0eUJhc2tldCA9IDA7XG4gIGNvbnN0IHByb2R1Y3RCYXNrZXQgPSBpdGVtcy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICBxdWFudGl0eUJhc2tldCArPSBwcm9kdWN0LnF1YW50aXR5O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVQcmVzcygpIHtcbiAgICBzZXRNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIHNldE1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgICAgICAgPEdpSGFtYnVyZ2VyTWVudVxuICAgICAgICAgIHNpemU9ezQwfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUHJlc3MoKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUxvZ299PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgc3R5bGU9e3t3aWR0aDonMTAwJSd9fT5cbiAgICAgICAgICAgIHsvKiA8SW1hZ2Ugc3JjPXtMb2dvfSB3aWR0aD17MzAwfSBoZWlnaHQ9ezEwMH0gLz4gKi99XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9iYXNrZXRcIj5cbiAgICAgICAgICB7cXVhbnRpdHlCYXNrZXQgPiAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXNrZXRBbW91bnR9PlxuICAgICAgICAgICAgICA8RmFCYXNrZXRTaG9wcGluZyBzaXplPXs0MH0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eUFtb3VudH0+e3F1YW50aXR5QmFza2V0fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFza2V0QW1vdW50fT5cbiAgICAgICAgICAgICAgPEZhQmFza2V0U2hvcHBpbmcgc2l6ZT17NDB9IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIHttb2RhbCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJb01kQ2xvc2VDaXJjbGVPdXRsaW5lXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfVxuICAgICAgICAgICAgICBzaXplPXs0MH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9JyNjb25jb3Vycycgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UoKX0gY2xhc3NOYW1lPXtzdHlsZXMubGlua30+PGgxPiBDT05DT1VSUyA8L2gxPjwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9JyNwYXJ0aWNwYXRpb24nIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKCl9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PjxoMT4gUEFSVElDSVBBVElPTjwvaDE+IDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9JyNGQVEnIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKCl9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PjxoMT4gRkFRIDwvaDE+PC9MaW5rPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0+XG4gICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCcgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+PGgxPiBDT05UQUNUIDwvaDE+PC9MaW5rPiBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJMb2dvIiwiRmFCYXNrZXRTaG9wcGluZyIsIkdpSGFtYnVyZ2VyTWVudSIsIklvTWRDbG9zZUNpcmNsZU91dGxpbmUiLCJjYXJ0Q29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsIkxpbmsiLCJIZWFkZXIiLCJtb2RhbCIsInNldE1vZGFsIiwiY2FydCIsIml0ZW1zIiwicXVhbnRpdHlCYXNrZXQiLCJwcm9kdWN0QmFza2V0IiwibWFwIiwicHJvZHVjdCIsInF1YW50aXR5IiwiaGFuZGxlUHJlc3MiLCJoYW5kbGVDbG9zZSIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJjbGFzc05hbWUiLCJuYXZiYXIiLCJzaXplIiwiaWNvbiIsIm9uQ2xpY2siLCJ0aXRsZUxvZ28iLCJocmVmIiwiYmFza2V0QW1vdW50IiwicXVhbnRpdHlBbW91bnQiLCJjbG9zZSIsImxpbmsiLCJoMSIsImNvbnRhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Head.js\n"));

/***/ })

});