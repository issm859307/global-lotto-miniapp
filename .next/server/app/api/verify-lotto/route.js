"use strict";
(() => {
var exports = {};
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 1497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/verify-lotto/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(6145);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9532);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(3804);
// EXTERNAL MODULE: ./node_modules/@worldcoin/minikit-js/build/index.js + 46 modules
var build = __webpack_require__(6825);
;// CONCATENATED MODULE: ./app/api/verify-lotto/route.ts
// app/api/verify-lotto/route.ts


async function POST(req) {
    try {
        const body = await req.json();
        const payload = body.payload;
        // World ID 증명 검증
        const verifyResponse = await (0,build/* verifyCloudProof */.H)(body.action, body.signal, payload.proof, payload.merkle_root, payload.nullifier_hash);
        if (verifyResponse.success) {
            // 검증 성공 시 DB 업데이트 등
            return next_response/* default.json */.Z.json({
                success: true,
                message: "검증 완료"
            });
        } else {
            return next_response/* default.json */.Z.json({
                success: false,
                message: "검증 실패"
            });
        }
    } catch (error) {
        return next_response/* default.json */.Z.json({
            success: false,
            message: "서버 오류 발생"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fverify-lotto%2Froute&name=app%2Fapi%2Fverify-lotto%2Froute&pagePath=private-next-app-dir%2Fapi%2Fverify-lotto%2Froute.ts&appDir=C%3A%5CUsers%5CUSER%5Cglobal-lotto-miniapp%5Capp&appPaths=%2Fapi%2Fverify-lotto%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/verify-lotto",
    resolvedPagePath: "C:\\Users\\USER\\global-lotto-miniapp\\app\\api\\verify-lotto\\route.ts",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/verify-lotto/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [944,884], () => (__webpack_exec__(1497)));
module.exports = __webpack_exports__;

})();