/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./cardContext.js":
/*!************************!*\
  !*** ./cardContext.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   cartContext: () => (/* binding */ cartContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _particpationsStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particpationsStore */ \"./particpationsStore.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/api-utils */ \"./node_modules/next/dist/server/api-utils/index.js\");\n/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst cartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    items: [],\n    getProductQuantity: ()=>{},\n    removeOneToBasket: ()=>{},\n    addOneProductToCart: ()=>{},\n    deleteFromCart: ()=>{},\n    getTotalCostcart: ()=>{}\n});\nfunction CartProvider({ children }) {\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    function getProductQuantity(id) {\n        const quantity = items.find((product)=>product.id == id)?.quantity;\n        if (quantity == undefined) {\n            return 0;\n        }\n        return quantity;\n    }\n    function addOneProductToCart(productDescription) {\n        const quantity = getProductQuantity(productDescription.id);\n        if (quantity === 0 || quantity === undefined) {\n            setItems([\n                ...items,\n                {\n                    id: productDescription.id,\n                    quantity: 1,\n                    price: productDescription.price,\n                    description: productDescription.description\n                }\n            ]);\n            localStorage.setItem(`[${productDescription.description}, ${productDescription.price}]`, `${productDescription.quantity}`);\n        } else {\n            setItems(items.map((product)=>product.id == productDescription.id ? {\n                    ...product,\n                    quantity: product.quantity + 1\n                } : product));\n            localStorage.setItem(`[${productDescription.description}, ${productDescription.price}]`, `${productDescription.quantity + 1}`);\n        }\n        router.push(\"/basket\");\n    }\n    console.log(items);\n    function removeOneToBasket(productDescription) {\n        const quantity = getProductQuantity(productDescription.id);\n        if (quantity == 1) {\n            deleteFromCart(productDescription);\n            localStorage.removeItem(`${productDescription.description}`, `${productDescription.quantity}`);\n        } else {\n            setItems(items.map((product)=>product.id == productDescription.id ? {\n                    ...product,\n                    quantity: product.quantity - 1\n                } : product));\n            localStorage.setItem(`[${productDescription.description}, ${productDescription.price}]`, `${productDescription.quantity - 1}`);\n        }\n    }\n    function deleteFromCart(productDescription) {\n        setItems((product)=>product.filter((currentProduct)=>{\n                return currentProduct.id !== productDescription.id;\n            }));\n        localStorage.removeItem(`[${productDescription.description}, ${productDescription.price}]`, `${productDescription.quantity}`);\n    }\n    function getTotalCostcart() {\n        let total = 0;\n        items.map((cartItem)=>{\n            const participationData = (0,_particpationsStore__WEBPACK_IMPORTED_MODULE_2__.getParticipationData)(cartItem.id);\n            total += participationData.price * cartItem.quantity;\n        });\n        return total;\n    }\n    const contextValue = {\n        items: items,\n        getProductQuantity,\n        removeOneToBasket,\n        addOneProductToCart,\n        deleteFromCart,\n        getTotalCostcart\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cartContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/cardContext.js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLSyxtQkFBbUJMLEVBQUU7WUFDcEQ7UUFFRlEsYUFBYU0sVUFBVSxDQUNyQixDQUFDLENBQUMsRUFBRVQsbUJBQW1CRSxXQUFXLENBQUMsRUFBRSxFQUFFRixtQkFBbUJDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbEUsQ0FBQyxFQUFFRCxtQkFBbUJKLFFBQVEsQ0FBQyxDQUFDO0lBRXBDO0lBRUEsU0FBU047UUFDUCxJQUFJc0IsUUFBUTtRQUNaM0IsTUFBTW9CLEdBQUcsQ0FBQyxDQUFDUTtZQUNULE1BQU1DLG9CQUFvQmpDLHlFQUFvQkEsQ0FBQ2dDLFNBQVNsQixFQUFFO1lBQzFEaUIsU0FBVUUsa0JBQWtCYixLQUFLLEdBQUdZLFNBQVNqQixRQUFRO1FBQ3ZEO1FBQ0EsT0FBT2dCO0lBQ1Q7SUFFQSxNQUFNRyxlQUFlO1FBQ25COUIsT0FBT0E7UUFDUEM7UUFDQUM7UUFDQUM7UUFDQUM7UUFDQUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDTixZQUFZZ0MsUUFBUTtRQUFDQyxPQUFPRjtrQkFBZXZCOzs7Ozs7QUFFaEQ7QUFFQSxpRUFBZUQsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL2NhcmRDb250ZXh0LmpzP2Q4ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHBhcnRpY2lwYXRpb24sIGdldFBhcnRpY2lwYXRpb25EYXRhIH0gZnJvbSBcIi4vcGFydGljcGF0aW9uc1N0b3JlXCI7XG5pbXBvcnQgeyBjbGVhclByZXZpZXdEYXRhIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBjYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBpdGVtczogW10sXG4gIGdldFByb2R1Y3RRdWFudGl0eTogKCkgPT4ge30sXG4gIHJlbW92ZU9uZVRvQmFza2V0OiAoKSA9PiB7fSxcbiAgYWRkT25lUHJvZHVjdFRvQ2FydDogKCkgPT4ge30sXG4gIGRlbGV0ZUZyb21DYXJ0OiAoKSA9PiB7fSxcbiAgZ2V0VG90YWxDb3N0Y2FydDogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGZ1bmN0aW9uIGdldFByb2R1Y3RRdWFudGl0eShpZCkge1xuICAgIGNvbnN0IHF1YW50aXR5ID0gaXRlbXMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PSBpZCk/LnF1YW50aXR5O1xuXG4gICAgaWYgKHF1YW50aXR5ID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBxdWFudGl0eTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE9uZVByb2R1Y3RUb0NhcnQocHJvZHVjdERlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgcXVhbnRpdHkgPSBnZXRQcm9kdWN0UXVhbnRpdHkocHJvZHVjdERlc2NyaXB0aW9uLmlkKTtcblxuICAgIGlmIChxdWFudGl0eSA9PT0gMCB8fCBxdWFudGl0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRJdGVtcyhbXG4gICAgICAgIC4uLml0ZW1zLFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHByb2R1Y3REZXNjcmlwdGlvbi5pZCxcbiAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICBwcmljZTogcHJvZHVjdERlc2NyaXB0aW9uLnByaWNlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9kdWN0RGVzY3JpcHRpb24uZGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICBdKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBgWyR7cHJvZHVjdERlc2NyaXB0aW9uLmRlc2NyaXB0aW9ufSwgJHtwcm9kdWN0RGVzY3JpcHRpb24ucHJpY2V9XWAsXG4gICAgICAgIGAke3Byb2R1Y3REZXNjcmlwdGlvbi5xdWFudGl0eX1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJdGVtcyhcbiAgICAgICAgaXRlbXMubWFwKChwcm9kdWN0KSA9PlxuICAgICAgICAgIHByb2R1Y3QuaWQgPT0gcHJvZHVjdERlc2NyaXB0aW9uLmlkXG4gICAgICAgICAgICA/IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgKyAxIH1cbiAgICAgICAgICAgIDogcHJvZHVjdFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBbJHtwcm9kdWN0RGVzY3JpcHRpb24uZGVzY3JpcHRpb259LCAke3Byb2R1Y3REZXNjcmlwdGlvbi5wcmljZX1dYCxcbiAgICAgICAgYCR7cHJvZHVjdERlc2NyaXB0aW9uLnF1YW50aXR5ICsxfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJvdXRlci5wdXNoKFwiL2Jhc2tldFwiKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGl0ZW1zKTtcblxuICBmdW5jdGlvbiByZW1vdmVPbmVUb0Jhc2tldChwcm9kdWN0RGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBxdWFudGl0eSA9IGdldFByb2R1Y3RRdWFudGl0eShwcm9kdWN0RGVzY3JpcHRpb24uaWQpO1xuXG4gICAgaWYgKHF1YW50aXR5ID09IDEpIHtcbiAgICAgIGRlbGV0ZUZyb21DYXJ0KHByb2R1Y3REZXNjcmlwdGlvbik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcbiAgICAgICAgYCR7cHJvZHVjdERlc2NyaXB0aW9uLmRlc2NyaXB0aW9ufWAsXG4gICAgICAgIGAke3Byb2R1Y3REZXNjcmlwdGlvbi5xdWFudGl0eX1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJdGVtcyhcbiAgICAgICAgaXRlbXMubWFwKChwcm9kdWN0KSA9PlxuICAgICAgICAgIHByb2R1Y3QuaWQgPT0gcHJvZHVjdERlc2NyaXB0aW9uLmlkXG4gICAgICAgICAgICA/IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHkgLSAxIH1cbiAgICAgICAgICAgIDogcHJvZHVjdFxuICAgICAgICApXG4gICAgICApO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgIGBbJHtwcm9kdWN0RGVzY3JpcHRpb24uZGVzY3JpcHRpb259LCAke3Byb2R1Y3REZXNjcmlwdGlvbi5wcmljZX1dYCxcbiAgICAgICAgYCR7cHJvZHVjdERlc2NyaXB0aW9uLnF1YW50aXR5IC0xfWBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlRnJvbUNhcnQocHJvZHVjdERlc2NyaXB0aW9uKSB7XG4gICAgc2V0SXRlbXMoKHByb2R1Y3QpID0+XG4gICAgICBwcm9kdWN0LmZpbHRlcigoY3VycmVudFByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9kdWN0LmlkICE9PSBwcm9kdWN0RGVzY3JpcHRpb24uaWQ7XG4gICAgICB9KVxuICAgICk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXG4gICAgICBgWyR7cHJvZHVjdERlc2NyaXB0aW9uLmRlc2NyaXB0aW9ufSwgJHtwcm9kdWN0RGVzY3JpcHRpb24ucHJpY2V9XWAsXG4gICAgICBgJHtwcm9kdWN0RGVzY3JpcHRpb24ucXVhbnRpdHl9YFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUb3RhbENvc3RjYXJ0KCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgaXRlbXMubWFwKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgY29uc3QgcGFydGljaXBhdGlvbkRhdGEgPSBnZXRQYXJ0aWNpcGF0aW9uRGF0YShjYXJ0SXRlbS5pZCk7XG4gICAgICB0b3RhbCArPSAocGFydGljaXBhdGlvbkRhdGEucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBnZXRQcm9kdWN0UXVhbnRpdHksXG4gICAgcmVtb3ZlT25lVG9CYXNrZXQsXG4gICAgYWRkT25lUHJvZHVjdFRvQ2FydCxcbiAgICBkZWxldGVGcm9tQ2FydCxcbiAgICBnZXRUb3RhbENvc3RjYXJ0LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGNhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L2NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwicGFydGljaXBhdGlvbiIsImdldFBhcnRpY2lwYXRpb25EYXRhIiwiY2xlYXJQcmV2aWV3RGF0YSIsInVzZVJvdXRlciIsImNhcnRDb250ZXh0IiwiaXRlbXMiLCJnZXRQcm9kdWN0UXVhbnRpdHkiLCJyZW1vdmVPbmVUb0Jhc2tldCIsImFkZE9uZVByb2R1Y3RUb0NhcnQiLCJkZWxldGVGcm9tQ2FydCIsImdldFRvdGFsQ29zdGNhcnQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEl0ZW1zIiwicm91dGVyIiwiaWQiLCJxdWFudGl0eSIsImZpbmQiLCJwcm9kdWN0IiwidW5kZWZpbmVkIiwicHJvZHVjdERlc2NyaXB0aW9uIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJtYXAiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJmaWx0ZXIiLCJjdXJyZW50UHJvZHVjdCIsInRvdGFsIiwiY2FydEl0ZW0iLCJwYXJ0aWNpcGF0aW9uRGF0YSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./cardContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardContext */ \"./cardContext.js\");\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cardContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\",\n                            type: \"image/<generated>\",\n                            sizes: \"any\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Dream2Car\"\n                        }, void 0, false, {\n                            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/oliviermalahel/Desktop/Template App/App/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ2E7QUFFMUMsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDRSw4REFBQ0gsb0RBQVlBO2tCQUNYLDRFQUFDSTs7OEJBQ0MsOERBQUNMLGtEQUFJQTs7c0NBQ0gsOERBQUNNOzRCQUNDQyxLQUFJOzRCQUNKQyxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxPQUFNOzs7Ozs7c0NBRVIsOERBQUNDO3NDQUFNOzs7Ozs7Ozs7Ozs7OEJBRVQsOERBQUNSO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQ2FydFByb3ZpZGVyIGZyb20gXCIuLi9jYXJkQ29udGV4dFwiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPENhcnRQcm92aWRlcj5cbiAgICAgIDxtYWluPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgICBocmVmPVwiL2Zhdmljb24uaWNvXCJcbiAgICAgICAgICAgIHR5cGU9XCJpbWFnZS88Z2VuZXJhdGVkPlwiXG4gICAgICAgICAgICBzaXplcz1cImFueVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGl0bGU+RHJlYW0yQ2FyPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFpbiIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInNpemVzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./particpationsStore.js":
/*!*******************************!*\
  !*** ./particpationsStore.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getParticipationData: () => (/* binding */ getParticipationData),\n/* harmony export */   participation: () => (/* binding */ participation)\n/* harmony export */ });\nconst participation = [\n    {\n        id: \"price_1PFyUtDg73pK5OPosJjRgGpK\",\n        description: \"1 participation au jeu concours\",\n        price: 19.95,\n        quantity: 1,\n        participation: 1\n    },\n    {\n        id: \"price_1PFyY0Dg73pK5OPo12pXhZdw\",\n        description: \"5 participations au jeu concours\",\n        price: 29.95,\n        quantity: 1,\n        participation: 5\n    },\n    {\n        id: \"price_1PFyb8Dg73pK5OPos2MGHnFw\",\n        description: \"10 participations au jeu concours\",\n        price: 39.95,\n        quantity: 1,\n        participation: 10\n    }\n];\nfunction getParticipationData(id) {\n    let participationData = participation.find((item)=>item.id == id);\n    if (participationData == undefined) {\n        console.log(\"le produit n'existe pas\");\n    }\n    return participationData;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYXJ0aWNwYXRpb25zU3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxnQkFBZ0I7SUFDcEI7UUFDRUMsSUFBSTtRQUNKQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWSixlQUFlO0lBQ2pCO0lBQ0E7UUFDRUMsSUFBSTtRQUNKQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWSixlQUFlO0lBQ2pCO0lBQ0E7UUFDRUMsSUFBSTtRQUNKQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsVUFBVTtRQUNWSixlQUFlO0lBQ2pCO0NBQ0Q7QUFFRCxTQUFTSyxxQkFBcUJKLEVBQUU7SUFDNUIsSUFBSUssb0JBQW9CTixjQUFjTyxJQUFJLENBQUNDLENBQUFBLE9BQVFBLEtBQUtQLEVBQUUsSUFBSUE7SUFFOUQsSUFBR0sscUJBQXFCRyxXQUFVO1FBQzlCQyxRQUFRQyxHQUFHLENBQUM7SUFDaEI7SUFFQSxPQUFPTDtBQUNYO0FBRzRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXRlbXBsYXRlLy4vcGFydGljcGF0aW9uc1N0b3JlLmpzP2EyNWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFydGljaXBhdGlvbiA9IFtcbiAge1xuICAgIGlkOiBcInByaWNlXzFQRnlVdERnNzNwSzVPUG9zSmpSZ0dwS1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjEgcGFydGljaXBhdGlvbiBhdSBqZXUgY29uY291cnNcIixcbiAgICBwcmljZTogMTkuOTUsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcGFydGljaXBhdGlvbjogMSxcbiAgfSxcbiAge1xuICAgIGlkOiBcInByaWNlXzFQRnlZMERnNzNwSzVPUG8xMnBYaFpkd1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIjUgcGFydGljaXBhdGlvbnMgYXUgamV1IGNvbmNvdXJzXCIsXG4gICAgcHJpY2U6IDI5Ljk1LFxuICAgIHF1YW50aXR5OiAxLFxuICAgIHBhcnRpY2lwYXRpb246IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJwcmljZV8xUEZ5YjhEZzczcEs1T1BvczJNR0huRndcIixcbiAgICBkZXNjcmlwdGlvbjogXCIxMCBwYXJ0aWNpcGF0aW9ucyBhdSBqZXUgY29uY291cnNcIixcbiAgICBwcmljZTogMzkuOTUsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcGFydGljaXBhdGlvbjogMTAsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBnZXRQYXJ0aWNpcGF0aW9uRGF0YShpZCl7XG4gICAgbGV0IHBhcnRpY2lwYXRpb25EYXRhID0gcGFydGljaXBhdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PSBpZClcblxuICAgIGlmKHBhcnRpY2lwYXRpb25EYXRhID09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGUgcHJvZHVpdCBuJ2V4aXN0ZSBwYXNcIilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydGljaXBhdGlvbkRhdGFcbn1cblxuXG5leHBvcnQge3BhcnRpY2lwYXRpb24sIGdldFBhcnRpY2lwYXRpb25EYXRhfSJdLCJuYW1lcyI6WyJwYXJ0aWNpcGF0aW9uIiwiaWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicXVhbnRpdHkiLCJnZXRQYXJ0aWNpcGF0aW9uRGF0YSIsInBhcnRpY2lwYXRpb25EYXRhIiwiZmluZCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./particpationsStore.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();