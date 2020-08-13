(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/Category/index.js":
/*!******************************************!*\
  !*** ./src/components/Category/index.js ***!
  \******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Category/styles.js\");\n\n\nvar DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';\nvar Category = function Category(_ref) {\n  var _ref$cover = _ref.cover,\n      cover = _ref$cover === void 0 ? DEFAULT_IMAGE : _ref$cover,\n      _ref$path = _ref.path,\n      path = _ref$path === void 0 ? '#' : _ref$path,\n      emoji = _ref.emoji;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    src: cover\n  }), emoji);\n};\n\n//# sourceURL=webpack:///./src/components/Category/index.js?");

/***/ }),

/***/ "./src/components/Category/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Category/styles.js ***!
  \*******************************************/
/*! exports provided: Link, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Image\", function() { return Image; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n\\tborder:1px solid #ddd;\\n\\tbox-shadow: 0px 10px 14px rgba(0,0,0,.2);\\n\\tborder-radius:50%;\\n\\theight:auto;\\n\\toverflow:hidden;\\n\\tobject-fit:cover;\\n\\theight:75px;\\n\\twidth:75px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ndisplay:flex;\\nflex-direction:column;\\ntext-align:center;\\ntext-decoration:none;\\nwidth:75px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_reach_router__WEBPACK_IMPORTED_MODULE_1__[\"Link\"])(_templateObject());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject2());\n\n//# sourceURL=webpack:///./src/components/Category/styles.js?");

/***/ }),

/***/ "./src/components/ListOfPhotoCard/index.js":
/*!*************************************************!*\
  !*** ./src/components/ListOfPhotoCard/index.js ***!
  \*************************************************/
/*! exports provided: listOfPhotoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listOfPhotoCardComponent\", function() { return listOfPhotoCardComponent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PhotoCard_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PhotoCard/index */ \"./src/components/PhotoCard/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar listOfPhotoCardComponent = function listOfPhotoCardComponent(_ref) {\n  var _ref$data$photos = _ref.data.photos,\n      photos = _ref$data$photos === void 0 ? [] : _ref$data$photos;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, photos.map(function (photo) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoCard_index__WEBPACK_IMPORTED_MODULE_1__[\"PhotoCard\"], _extends({\n      key: photo.id\n    }, photo));\n  }));\n};\n\n//# sourceURL=webpack:///./src/components/ListOfPhotoCard/index.js?");

/***/ }),

/***/ "./src/components/listOfCategories/index.js":
/*!**************************************************!*\
  !*** ./src/components/listOfCategories/index.js ***!
  \**************************************************/
/*! exports provided: ListOfCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfCategories\", function() { return ListOfCategories; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Category_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Category/index */ \"./src/components/Category/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/listOfCategories/styles.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction useCategoriesData() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      categories = _useState2[0],\n      setCategories = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setLoading(true);\n    fetch('https://petgram-server-jcamiloguz.jcamiloguz.vercel.app/categories').then(function (res) {\n      return res.json();\n    }).then(function (response) {\n      setCategories(response);\n      setLoading(false);\n    });\n  }, []);\n  return {\n    categories: categories,\n    loading: loading\n  };\n}\n\nvar ListOfCategoriesComponent = function ListOfCategoriesComponent() {\n  var _useCategoriesData = useCategoriesData(),\n      categories = _useCategoriesData.categories,\n      loading = _useCategoriesData.loading;\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      showFixed = _useState6[0],\n      setShowFixed = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var onScroll = function onScroll(e) {\n      var newShowFixed = window.scrollY > 200;\n      showFixed !== newShowFixed && setShowFixed(newShowFixed);\n    };\n\n    document.addEventListener('scroll', onScroll);\n    return function () {\n      return document.removeEventListener('scroll', onScroll);\n    };\n  }, [showFixed]);\n\n  var renderList = function renderList(fixed) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n      fixed: fixed\n    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Cargando...\") : categories.map(function (category) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Item\"], {\n        key: category.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Category_index__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], _extends({}, category, {\n        path: \"/pet/\".concat(category.id)\n      })));\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, renderList(), showFixed && renderList(true));\n};\n\nvar ListOfCategories = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ListOfCategoriesComponent);\n\n//# sourceURL=webpack:///./src/components/listOfCategories/index.js?");

/***/ }),

/***/ "./src/components/listOfCategories/styles.js":
/*!***************************************************!*\
  !*** ./src/components/listOfCategories/styles.js ***!
  \***************************************************/
/*! exports provided: List, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Item\", function() { return Item; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/animation */ \"./src/styles/animation.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\npadding:8px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"background:#fff;\\n\\tborder-radius:60px;\\n\\tbox-shadow:0 0 20px rgba(0,0,0,0.3);\\n\\tleft:0;\\n\\tmargin:0 auto;\\n\\tmax-width:400px;\\n\\tpadding:5px;\\n\\tposition:fixed;\\n\\tright:0; \\n\\ttop:-20px;\\n\\ttransform:scale(.5);\\n\\tz-index:1;\\n\\t\", \"\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ndisplay:flex;\\noverflow:scroll;\\nwidth:100%;\\n\", \"\\n\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ul(_templateObject(), function (props) {\n  return props.fixed && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject2(), _styles_animation__WEBPACK_IMPORTED_MODULE_1__[\"fadeIn\"]);\n});\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].li(_templateObject3());\n\n//# sourceURL=webpack:///./src/components/listOfCategories/styles.js?");

/***/ }),

/***/ "./src/container/listOfPhotoCards.js":
/*!*******************************************!*\
  !*** ./src/container/listOfPhotoCards.js ***!
  \*******************************************/
/*! exports provided: ListOfPhotoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListOfPhotoCard\", function() { return ListOfPhotoCard; });\n/* harmony import */ var _hoc_withPhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hoc/withPhotos */ \"./src/hoc/withPhotos.js\");\n/* harmony import */ var _components_ListOfPhotoCard_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfPhotoCard/index */ \"./src/components/ListOfPhotoCard/index.js\");\n\n\nvar ListOfPhotoCard = Object(_hoc_withPhotos__WEBPACK_IMPORTED_MODULE_0__[\"withPhotos\"])(_components_ListOfPhotoCard_index__WEBPACK_IMPORTED_MODULE_1__[\"listOfPhotoCardComponent\"]);\n\n//# sourceURL=webpack:///./src/container/listOfPhotoCards.js?");

/***/ }),

/***/ "./src/hoc/withPhotos.js":
/*!*******************************!*\
  !*** ./src/hoc/withPhotos.js ***!
  \*******************************/
/*! exports provided: withPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withPhotos\", function() { return withPhotos; });\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nquery getPhotos($categoryId: ID){\\n  photos(categoryId: $categoryId){\\n    id\\n    categoryId\\n    src\\n    likes\\n    userId\\n    liked\\n    \\n  }\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_PHOTOS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject());\nvar withPhotos = Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__[\"graphql\"])(GET_PHOTOS);\n\n//# sourceURL=webpack:///./src/hoc/withPhotos.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_listOfCategories_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/listOfCategories/index */ \"./src/components/listOfCategories/index.js\");\n/* harmony import */ var _container_listOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/listOfPhotoCards */ \"./src/container/listOfPhotoCards.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\n\n\n\n\nvar HomePage = function HomePage(_ref) {\n  var categoryId = _ref.categoryId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Pettgram-Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"Fotos de tus mascotas\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_listOfCategories_index__WEBPACK_IMPORTED_MODULE_1__[\"ListOfCategories\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_listOfPhotoCards__WEBPACK_IMPORTED_MODULE_2__[\"ListOfPhotoCard\"], {\n    categoryId: categoryId\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HomePage, function (prevProps, props) {\n  return prevProps.categoryId === props.categoryId;\n}));\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ })

}]);