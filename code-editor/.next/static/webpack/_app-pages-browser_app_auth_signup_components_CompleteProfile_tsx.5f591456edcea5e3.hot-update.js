"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_app_auth_signup_components_CompleteProfile_tsx",{

/***/ "(app-pages-browser)/./app/lib/axios/api.ts":
/*!******************************!*\
  !*** ./app/lib/axios/api.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   APIMethods: function() { return /* binding */ APIMethods; },\n/* harmony export */   AuthorizedAPIInstance: function() { return /* binding */ AuthorizedAPIInstance; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nconst APIInstance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: \"http://localhost:5000\"\n});\nconst AuthorizedAPIInstance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: \"http://localhost:5000\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    },\n    withCredentials: true\n});\nAuthorizedAPIInstance.interceptors.request.use((config)=>{\n    config.headers.Authorization = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"accessToken\");\n    return config;\n});\nconst APIMethods = {\n    auth: {\n        login: (data)=>{\n            return APIInstance.post(\"/auth/login\", data);\n        },\n        signUp: (data)=>{\n            console.log(data);\n            APIInstance.post(\"/auth/register\", data);\n        }\n    },\n    dashboard: {\n        dashboard: ()=>AuthorizedAPIInstance.get(\"/dashboard\")\n    },\n    profile: {\n        profile: (data)=>{\n            return AuthorizedAPIInstance.post(\"/profile\", data);\n        }\n    }\n};\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9saWIvYXhpb3MvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDaUU7QUFJakM7QUFHaEMsTUFBTUUsY0FBNkJGLDZDQUFLQSxDQUFDRyxNQUFNLENBQUM7SUFDOUNDLFNBQVNDLHVCQUFnQztBQUMzQztBQUVBLE1BQU1HLHdCQUF1Q1IsNkNBQUtBLENBQUNHLE1BQU0sQ0FBQztJQUN4REMsU0FBU0MsdUJBQWdDO0lBQ3pDSSxTQUFTO1FBQUUsZ0JBQWdCO0lBQW1CO0lBQzlDQyxpQkFBaUI7QUFDbkI7QUFFQUYsc0JBQXNCRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO0lBQzlDQSxPQUFPTCxPQUFPLENBQUNNLGFBQWEsR0FBR2QsaURBQU9BLENBQUNlLEdBQUcsQ0FBQztJQUMzQyxPQUFPRjtBQUNUO0FBR0EsTUFBTUcsYUFBYTtJQUNqQkMsTUFBTTtRQUNKQyxPQUFPLENBQUNDO1lBQW9CLE9BQVFsQixZQUFZbUIsSUFBSSxDQUFDLGVBQWVEO1FBQUs7UUFDekVFLFFBQVEsQ0FBQ0Y7WUFBeUJHLFFBQVFDLEdBQUcsQ0FBQ0o7WUFBT2xCLFlBQVltQixJQUFJLENBQUMsa0JBQWtCRDtRQUFLO0lBQy9GO0lBQ0FLLFdBQVc7UUFDVEEsV0FBVyxJQUFNakIsc0JBQXNCUSxHQUFHLENBQUM7SUFDN0M7SUFDQVUsU0FBUztRQUNQQSxTQUFTLENBQUNOO1lBQ1IsT0FBT1osc0JBQXNCYSxJQUFJLENBQUMsWUFBWUQ7UUFDaEQ7SUFDRjtBQUNGO0FBRTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9saWIvYXhpb3MvYXBpLnRzPzBmMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUF4aW9zQXV0aG9yaXplZCBmcm9tIFwiLi9ob29rcy91c2VBeGlvc0F1dGhvcml6ZWRcIjtcbmltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1Byb2dyZXNzRXZlbnQgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDcmVhdGVVc2VyRGF0YSBmcm9tIFwiLi90eXBlcy9zaWdudXBUeXBlc1wiO1xuaW1wb3J0IExvZ2luRGF0YSBmcm9tIFwiLi90eXBlcy9sb2dpblR5cGVcIjtcbmltcG9ydCBwcm9maWxlVHlwZXMgZnJvbSBcIi4vdHlwZXMvcHJvZmlsZVR5cGVzXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgcmVmcmVzaCBmcm9tIFwiLi9ob29rcy91c2VSZWZyZXNoVG9rZW5cIjtcblxuY29uc3QgQVBJSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCxcbn0pO1xuXG5jb25zdCBBdXRob3JpemVkQVBJSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTCxcbiAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG59KTtcblxuQXV0aG9yaXplZEFQSUluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XG4gIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpO1xuICByZXR1cm4gY29uZmlnO1xufSk7XG5cblxuY29uc3QgQVBJTWV0aG9kcyA9IHtcbiAgYXV0aDoge1xuICAgIGxvZ2luOiAoZGF0YTogTG9naW5EYXRhKSA9PntyZXR1cm4gIEFQSUluc3RhbmNlLnBvc3QoXCIvYXV0aC9sb2dpblwiLCBkYXRhKX0sXG4gICAgc2lnblVwOiAoZGF0YTogQ3JlYXRlVXNlckRhdGEpID0+e2NvbnNvbGUubG9nKGRhdGEpOyBBUElJbnN0YW5jZS5wb3N0KFwiL2F1dGgvcmVnaXN0ZXJcIiwgZGF0YSl9LFxuICB9LFxuICBkYXNoYm9hcmQ6IHtcbiAgICBkYXNoYm9hcmQ6ICgpID0+IEF1dGhvcml6ZWRBUElJbnN0YW5jZS5nZXQoXCIvZGFzaGJvYXJkXCIpLFxuICB9LFxuICBwcm9maWxlOiB7XG4gICAgcHJvZmlsZTogKGRhdGE6IHByb2ZpbGVUeXBlcykgPT4ge1xuICAgICAgcmV0dXJuIEF1dGhvcml6ZWRBUElJbnN0YW5jZS5wb3N0KFwiL3Byb2ZpbGVcIiwgZGF0YSk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCB7IEFQSU1ldGhvZHMsIEF1dGhvcml6ZWRBUElJbnN0YW5jZSB9O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsIkFQSUluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsIkF1dGhvcml6ZWRBUElJbnN0YW5jZSIsImhlYWRlcnMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiQXV0aG9yaXphdGlvbiIsImdldCIsIkFQSU1ldGhvZHMiLCJhdXRoIiwibG9naW4iLCJkYXRhIiwicG9zdCIsInNpZ25VcCIsImNvbnNvbGUiLCJsb2ciLCJkYXNoYm9hcmQiLCJwcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/lib/axios/api.ts\n"));

/***/ })

});