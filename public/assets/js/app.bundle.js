!function(_){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return _[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=_,o.c=n,o.d=function(e,r,_){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:_})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var _=Object.create(null);if(o.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(_,n,function(e){return r[e]}.bind(null,n));return _},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s="./app/js/app.js")}({"./app/js/app.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Foo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Foo */ "./app/js/core/Foo.js");\n/* harmony import */ var _core_Bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Bar */ "./app/js/core/Bar.js");\n\n\nconst foo = Object(_core_Foo__WEBPACK_IMPORTED_MODULE_0__["newFoo"])().sayFoo();\nconst bar = Object(_core_Bar__WEBPACK_IMPORTED_MODULE_1__["newBar"])().sayBar();\nalert(foo);\nconsole.log(bar);\n\n//# sourceURL=webpack:///./app/js/app.js?')},"./app/js/core/Bar.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newBar\", function() { return newBar; });\nclass Bar {\n  sayBar() {\n    return 'Bar!';\n  }\n\n}\n\nfunction newBar() {\n  return new Bar();\n}\n\n//# sourceURL=webpack:///./app/js/core/Bar.js?")},"./app/js/core/Foo.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newFoo\", function() { return newFoo; });\nclass Foo {\n  sayFoo() {\n    return 'Foo!';\n  }\n\n}\n\nfunction newFoo() {\n  return new Foo();\n}\n\n//# sourceURL=webpack:///./app/js/core/Foo.js?")}});