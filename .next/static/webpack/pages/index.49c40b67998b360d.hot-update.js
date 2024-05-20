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

/***/ "./components/description.js":
/*!***********************************!*\
  !*** ./components/description.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_Audi_a1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/Audi_a1.jpg */ \"./public/Audi_a1.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_description_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/description.module.css */ \"./styles/description.module.css\");\n/* harmony import */ var _styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Description() {\n    _s();\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        width: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowSize({\n                width: window.innerWidth\n            });\n            console.log(\"Ligne 15 - Window: \" + windowSize.width);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    const rotationAngle = windowSize.width < 740 ? -5 : \"\";\n    const prestations = [\n        {\n            Title: \"Prenez les commandes\",\n            description: \"Plongez dans l'\\xe9l\\xe9gance et la performance avec l'Audi A1 Sportback. Con\\xe7ue pour ceux qui ne font aucun compromis entre style et dynamisme, cette voiture red\\xe9finit le plaisir de conduire. Pr\\xeat \\xe0 faire tourner les t\\xeates et conqu\\xe9rir les routes ? D\\xe9couvrez l'excellence avec l'Audi A1 Sportback\",\n            icone: \"\\uD83D\\uDE80\"\n        },\n        {\n            Title: \"Participez au tirage au sort\",\n            description: \"Pour participez au concours, rendez-vous un peu plus loin pour remplir le formulaire\",\n            icone: \"⏳\"\n        },\n        {\n            Title: \"Le gagnant du concours\",\n            description: \"Le grand gagnant du cours se verra repartir avec les cl\\xe9s en main au volant de cette Audi A1 \",\n            icone: \"\\uD83D\\uDD11\"\n        },\n        {\n            Title: \"Huissier\",\n            description: \"Le tirage au sort sera r\\xe9alis\\xe9 par notre huisser. La date du tirage au sort vous sera communiqu\\xe9 par mail\",\n            icone: \"⚖️\"\n        }\n    ];\n    const prestationsDisplay = prestations.map((presta, i)=>{\n        if (i == 1 || i == 2) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().allDescription),\n                style: {\n                    transform: \"rotate(\".concat(rotationAngle, \"deg)\")\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().descriptionOne),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: presta.Title\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: presta.description\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().icone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: presta.icone\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, i, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this);\n        }\n        if (i == 1 || i == 2) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().allDescription),\n                style: {\n                    transform: \"rotate(\".concat(rotationAngle, \"deg)\")\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().descriptionOne),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: presta.Title\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: presta.description\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().icone),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: presta.icone\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, i, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().allDescription),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().descriptionOne),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: presta.Title\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: presta.description\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().icone),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: presta.icone\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 95,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, i, true, {\n            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n            lineNumber: 89,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().divDescription),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().divTitleDescription),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"SAISISSEZ VOTRE CHANCE D\\xc8S\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().spanColor),\n                                children: \" MAINTENANT \"\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().divLuck),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \" \\uD83C\\uDF40\\uD83E\\uDDD9\\uD83E\\uDD60 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().description),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgDescription),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                priority: true,\n                                src: _public_Audi_a1_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                                alt: \"Modele Audi A1\",\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleImageDescription),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: [\n                                        \"AUDI A1 SPORTBACK\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 15\n                                        }, this),\n                                        \"VALEUR: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().spanColor),\n                                            children: \"23.760€\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 23\n                                        }, this),\n                                        \" \\uD83D\\uDCB0\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                                lineNumber: 115,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_description_module_css__WEBPACK_IMPORTED_MODULE_3___default().divBoxDescription),\n                        children: prestationsDisplay\n                    }, void 0, false, {\n                        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/components/description.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(Description, \"A1CU5NHKyUgfocWggYSSepqfMzo=\");\n_c = Description;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Description);\nvar _c;\n$RefreshReg$(_c, \"Description\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ047Z0JBQUlDLFdBQVd4QixtRkFBa0I7O2tDQUNoQyw4REFBQ3VCO3dCQUFJQyxXQUFXeEIsc0ZBQXFCOzswQ0FDbkMsOERBQUNELG1EQUFLQTtnQ0FBQ3NDLFFBQVE7Z0NBQUNDLEtBQUt4QywyREFBTUE7Z0NBQUV5QyxLQUFJO2dDQUFpQkMsSUFBSTs7Ozs7OzBDQUN0RCw4REFBQ2pCO2dDQUFJQyxXQUFXeEIsNkZBQTRCOzBDQUMxQyw0RUFBQzZCOzt3Q0FBRztzREFFRiw4REFBQ2E7Ozs7O3dDQUFLO3NEQUNFLDhEQUFDVDs0Q0FBS1QsV0FBV3hCLGlGQUFnQjtzREFBRTs7Ozs7O3dDQUFjO3dDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5FLDhEQUFDdUI7d0JBQUlDLFdBQVd4Qix5RkFBd0I7a0NBQUdtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5EO0dBekhTaEI7S0FBQUE7QUEySFQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kZXNjcmlwdGlvbi5qcz9hNmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpQTEgZnJvbSBcIi4uL3B1YmxpYy9BdWRpX2ExLmpwZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZGVzY3JpcHRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEZXNjcmlwdGlvbigpIHtcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiBudWxsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2V0V2luZG93U2l6ZSh7XG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ0xpZ25lIDE1IC0gV2luZG93OiAnICsgd2luZG93U2l6ZS53aWR0aClcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgcm90YXRpb25BbmdsZSA9IHdpbmRvd1NpemUud2lkdGggPCA3NDAgPyAtNSA6ICcnO1xuXG4gIGNvbnN0IHByZXN0YXRpb25zID0gW1xuICAgIHtcbiAgICAgIFRpdGxlOiBcIlByZW5leiBsZXMgY29tbWFuZGVzXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJQbG9uZ2V6IGRhbnMgbCfDqWzDqWdhbmNlIGV0IGxhIHBlcmZvcm1hbmNlIGF2ZWMgbCdBdWRpIEExIFNwb3J0YmFjay4gQ29uw6d1ZSBwb3VyIGNldXggcXVpIG5lIGZvbnQgYXVjdW4gY29tcHJvbWlzIGVudHJlIHN0eWxlIGV0IGR5bmFtaXNtZSwgY2V0dGUgdm9pdHVyZSByZWTDqWZpbml0IGxlIHBsYWlzaXIgZGUgY29uZHVpcmUuIFByw6p0IMOgIGZhaXJlIHRvdXJuZXIgbGVzIHTDqnRlcyBldCBjb25xdcOpcmlyIGxlcyByb3V0ZXMgPyBEw6ljb3V2cmV6IGwnZXhjZWxsZW5jZSBhdmVjIGwnQXVkaSBBMSBTcG9ydGJhY2tcIixcbiAgICAgIGljb25lOiBcIvCfmoBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIFRpdGxlOiBcIlBhcnRpY2lwZXogYXUgdGlyYWdlIGF1IHNvcnRcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlBvdXIgcGFydGljaXBleiBhdSBjb25jb3VycywgcmVuZGV6LXZvdXMgdW4gcGV1IHBsdXMgbG9pbiBwb3VyIHJlbXBsaXIgbGUgZm9ybXVsYWlyZVwiLFxuICAgICAgaWNvbmU6IFwi4o+zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBUaXRsZTogXCJMZSBnYWduYW50IGR1IGNvbmNvdXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMZSBncmFuZCBnYWduYW50IGR1IGNvdXJzIHNlIHZlcnJhIHJlcGFydGlyIGF2ZWMgbGVzIGNsw6lzIGVuIG1haW4gYXUgdm9sYW50IGRlIGNldHRlIEF1ZGkgQTEgXCIsXG4gICAgICBpY29uZTogXCLwn5SRXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBUaXRsZTogXCJIdWlzc2llclwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTGUgdGlyYWdlIGF1IHNvcnQgc2VyYSByw6lhbGlzw6kgcGFyIG5vdHJlIGh1aXNzZXIuIExhIGRhdGUgZHUgdGlyYWdlIGF1IHNvcnQgdm91cyBzZXJhIGNvbW11bmlxdcOpIHBhciBtYWlsXCIsXG4gICAgICBpY29uZTogXCLimpbvuI9cIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHByZXN0YXRpb25zRGlzcGxheSA9IHByZXN0YXRpb25zLm1hcCgocHJlc3RhLCBpKSA9PiB7XG4gICAgaWYgKGkgPT0gMSB8fCBpID09IDIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWxsRGVzY3JpcHRpb259XG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRpb25BbmdsZX1kZWcpYCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbk9uZX0+XG4gICAgICAgICAgICA8aDE+e3ByZXN0YS5UaXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+e3ByZXN0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uZX0+XG4gICAgICAgICAgICA8cD57cHJlc3RhLmljb25lfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICAgIGlmIChpID09IDEgfHwgaSA9PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsbERlc2NyaXB0aW9ufVxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0aW9uQW5nbGV9ZGVnKWAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25PbmV9PlxuICAgICAgICAgICAgPGgxPntwcmVzdGEuVGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntwcmVzdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbmV9PlxuICAgICAgICAgICAgPHA+e3ByZXN0YS5pY29uZX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e3N0eWxlcy5hbGxEZXNjcmlwdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25PbmV9PlxuICAgICAgICAgIDxoMT57cHJlc3RhLlRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e3ByZXN0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25lfT5cbiAgICAgICAgICA8cD57cHJlc3RhLmljb25lfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2RGVzY3JpcHRpb259PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZUaXRsZURlc2NyaXB0aW9ufT5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIFNBSVNJU1NFWiBWT1RSRSBDSEFOQ0UgRMOIU3tcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuQ29sb3J9PiBNQUlOVEVOQU5UIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZMdWNrfT5cbiAgICAgICAgICA8aDE+IPCfjYDwn6eZ8J+loCA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nRGVzY3JpcHRpb259PlxuICAgICAgICAgIDxJbWFnZSBwcmlvcml0eSBzcmM9e0F1ZGlBMX0gYWx0PSdNb2RlbGUgQXVkaSBBMScgZmlsbCAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVJbWFnZURlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgQVVESSBBMSBTUE9SVEJBQ0tcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFZBTEVVUjogPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3BhbkNvbG9yfT4yMy43NjDigqw8L3NwYW4+IPCfkrB7XCIgXCJ9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZCb3hEZXNjcmlwdGlvbn0+e3ByZXN0YXRpb25zRGlzcGxheX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbjtcbiJdLCJuYW1lcyI6WyJBdWRpQTEiLCJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGVzY3JpcHRpb24iLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJvdGF0aW9uQW5nbGUiLCJwcmVzdGF0aW9ucyIsIlRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uZSIsInByZXN0YXRpb25zRGlzcGxheSIsIm1hcCIsInByZXN0YSIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJhbGxEZXNjcmlwdGlvbiIsInN0eWxlIiwidHJhbnNmb3JtIiwiZGVzY3JpcHRpb25PbmUiLCJoMSIsInAiLCJkaXZEZXNjcmlwdGlvbiIsImRpdlRpdGxlRGVzY3JpcHRpb24iLCJzcGFuIiwic3BhbkNvbG9yIiwiZGl2THVjayIsImltZ0Rlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJmaWxsIiwidGl0bGVJbWFnZURlc2NyaXB0aW9uIiwiYnIiLCJkaXZCb3hEZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/description.js\n"));

/***/ })

});