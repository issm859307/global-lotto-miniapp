exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 7780:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2956))

/***/ }),

/***/ 7544:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23))

/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(307);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(4943);
var i18n_default = /*#__PURE__*/__webpack_require__.n(i18n);
;// CONCATENATED MODULE: ./app/components/LanguageSwitcher.tsx
// app/components/LanguageSwitcher.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const languages = [
    {
        code: "ko",
        label: "한국어",
        flag: "\uD83C\uDDF0\uD83C\uDDF7"
    },
    {
        code: "en",
        label: "English",
        flag: "\uD83C\uDDFA\uD83C\uDDF8"
    },
    {
        code: "es",
        label: "Espa\xf1ol",
        flag: "\uD83C\uDDEA\uD83C\uDDF8"
    },
    {
        code: "fr",
        label: "Fran\xe7ais",
        flag: "\uD83C\uDDEB\uD83C\uDDF7"
    },
    {
        code: "zh-CN",
        label: "中文",
        flag: "\uD83C\uDDE8\uD83C\uDDF3"
    },
    {
        code: "ja",
        label: "日本語",
        flag: "\uD83C\uDDEF\uD83C\uDDF5"
    },
    {
        code: "de",
        label: "Deutsch",
        flag: "\uD83C\uDDE9\uD83C\uDDEA"
    },
    {
        code: "pt",
        label: "Portugu\xeas",
        flag: "\uD83C\uDDF5\uD83C\uDDF9"
    },
    {
        code: "id",
        label: "Bahasa Indonesia",
        flag: "\uD83C\uDDEE\uD83C\uDDE9"
    },
    {
        code: "vi",
        label: "Tiếng Việt",
        flag: "\uD83C\uDDFB\uD83C\uDDF3"
    },
    {
        code: "ms",
        label: "Bahasa Melayu",
        flag: "\uD83C\uDDF2\uD83C\uDDFE"
    },
    {
        code: "ar",
        label: "العربية",
        flag: "\uD83C\uDDF8\uD83C\uDDE6"
    }
];
function LanguageSwitcher() {
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    // 현재 URL에서 언어 코드 추출 (예: /ko, /en 등)
    const segments = pathname.split("/");
    const currentLocale = i18n_default().locales.includes(segments[1]) ? segments[1] : (i18n_default()).defaultLocale;
    const changeLanguage = (lang)=>{
        let newPath = pathname;
        if (i18n_default().locales.includes(segments[1])) {
            // 기존 언어 코드가 있으면 변경
            newPath = "/" + lang + pathname.substring(3);
        } else {
            newPath = "/" + lang + pathname;
        }
        router.push(newPath + (searchParams ? "?" + searchParams.toString() : ""));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            display: "flex",
            gap: "10px"
        },
        children: languages.map((language)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>changeLanguage(language.code),
                style: {
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "24px",
                    padding: "0"
                },
                title: language.label,
                children: language.flag
            }, language.code))
    });
}

;// CONCATENATED MODULE: ./app/layout.tsx
// app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "ko",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Global Lotto MiniApp"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("header", {
                        style: {
                            padding: "10px",
                            display: "flex",
                            justifyContent: "flex-end"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LanguageSwitcher, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            minHeight: "100vh",
                            paddingBottom: "70px"
                        },
                        children: children
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        style: {
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "70px",
                            backgroundColor: "#fff",
                            borderTop: "1px solid #ccc",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            fontSize: "14px"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "홈"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/ticket",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "티켓 구매"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/lotto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "일반 로또"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/vip-lotto",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "VIP 로또"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/claim",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "상품 청구"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/faq",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "FAQ"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/quick",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "빠른 작업"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/notify",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "알림"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/friend",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "친구 초대"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4943:
/***/ ((module) => {

"use strict";
// i18n.js

module.exports = {
    locales: [
        "en",
        "ko",
        "es",
        "fr",
        "zh-CN",
        "ja",
        "de",
        "pt",
        "id",
        "vi",
        "ms",
        "ar"
    ],
    defaultLocale: "ko",
    pages: {
        "*": [
            "common"
        ]
    }
};


/***/ }),

/***/ 5596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\USER\global-lotto-miniapp\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proxy.default);


/***/ }),

/***/ 307:
/***/ (() => {



/***/ })

};
;