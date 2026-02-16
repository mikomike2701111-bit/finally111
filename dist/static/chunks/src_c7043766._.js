(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/product/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ProductCard(param) {
    let { product } = param;
    _s();
    const { addToCart, toggleWishlist, isProductInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"])();
    var _product_images_;
    const primaryImage = (_product_images_ = product.images[0]) !== null && _product_images_ !== void 0 ? _product_images_ : {
        url: 'https://placehold.co/600x800',
        alt: 'Placeholder image',
        hint: 'placeholder'
    };
    const isInWishlist = isProductInWishlist(product.id);
    const handleWishlistClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product.id);
    };
    const handleAddToCartClick = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group overflow-hidden rounded-2xl bg-gray-100 transition-all duration-100 ease-in-out shadow-[0_4px_0_hsl(var(--border))] hover:-translate-y-0.5 hover:shadow-[0_6px_0_hsl(var(--border))] border-2 border-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/products/".concat(product.slug),
                className: "absolute inset-0 z-10",
                "aria-label": product.name
            }, void 0, false, {
                fileName: "[project]/src/components/product/product-card.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[3/4]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: primaryImage.url,
                    alt: primaryImage.alt,
                    fill: true,
                    className: "object-cover transition-opacity duration-500 group-hover:scale-105",
                    "data-ai-hint": primaryImage.hint,
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/src/components/product/product-card.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/product/product-card.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-4 right-4 bg-gray-300/60 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between border border-white/20 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-normal text-gray-900 truncate",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: [
                                            "Ksh ",
                                            product.price.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/product/product-card.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    product.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 line-through",
                                        children: [
                                            "Ksh ",
                                            product.originalPrice.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/product/product-card.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/product-card.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddToCartClick,
                        "aria-label": "Add to cart",
                        className: "flex-shrink-0 w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 active:scale-95 transition-all",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/product-card.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/product-card.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/product-card.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleWishlistClick,
                "aria-label": "Toggle Wishlist",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("wishlist-btn absolute top-4 right-4 z-20", isInWishlist && "active"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "particles",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 3
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    '--i': 6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/product-card.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/product-card.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                            stroke: "black",
                            strokeWidth: "1.5",
                            fill: "rgba(255,255,255,0)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/product-card.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/product-card.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/product-card.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            product.style && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-md border-white/90 text-black text-xs font-semibold px-3 py-1 rounded-full",
                children: product.style.charAt(0).toUpperCase() + product.style.slice(1)
            }, void 0, false, {
                fileName: "[project]/src/components/product/product-card.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/product/product-card.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "oXJ1pQjnqBj98N9fb2Z4WefLwEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppContext"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/placeholder-images.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"placeholderImages\":[{\"id\":\"nextgen-hero\",\"imageUrl\":\"https://i.postimg.cc/2612RDPH/Fashion_duo.jpg\",\"description\":\"Two stylish models posing in fashionable outfits.\",\"imageHint\":\"fashion duo\"},{\"id\":\"cat-shoes\",\"imageUrl\":\"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzaG9lc3xlbnwwfHx8fDE3NjkxNTY1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A pair of shoes.\",\"imageHint\":\"shoes\"},{\"id\":\"cat-brush\",\"imageUrl\":\"https://images.unsplash.com/photo-1629808709326-ad552c288cf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxicnVzaHxlbnwwfHx8fDE3NjkwNDc3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A makeup brush.\",\"imageHint\":\"brush\"},{\"id\":\"cat-bag\",\"imageUrl\":\"https://i.postimg.cc/BQL1Gv7n/Men_s_Accessories_Backpacks_Watches_(1).jpg\",\"description\":\"Men's accessories including backpacks and watches.\",\"imageHint\":\"mens accessories\"},{\"id\":\"cat-tshirt\",\"imageUrl\":\"https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8dC1zaGlydHxlbnwwfHx8fDE3NjkwOTQxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A t-shirt.\",\"imageHint\":\"t-shirt\"},{\"id\":\"ethereal-trench-main\",\"imageUrl\":\"https://images.unsplash.com/photo-1563671889-7bfa8c578a7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmYXNoaW9uJTIwdHJlbmNoY29hdHxlbnwwfHx8fDE3NjkwNDYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Main shot of a model wearing the Ethereal Trench Coat.\",\"imageHint\":\"fashion trenchcoat\"},{\"id\":\"ethereal-trench-side\",\"imageUrl\":\"https://i.postimg.cc/vTsyc37q/download_(11).jpg\",\"description\":\"Side view of the Ethereal Trench Coat.\",\"imageHint\":\"fashion model\"},{\"id\":\"urban-nomad-1\",\"imageUrl\":\"https://images.unsplash.com/photo-1548883354-94bcfe321cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZW5zJTIwamFja2V0fGVufDB8fHx8MTc2OTA0NzQxNHww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Front view of the Urban Nomad Jacket.\",\"imageHint\":\"mens jacket\"},{\"id\":\"silk-blouse-1\",\"imageUrl\":\"https://images.unsplash.com/photo-1613891737415-be7670d21c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx3b21hbiUyMGJsb3VzZXxlbnwwfHx8fDE3NjkwNDc0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Woman wearing the Silk-Flow Blouse.\",\"imageHint\":\"woman blouse\"},{\"id\":\"linen-trousers-1\",\"imageUrl\":\"https://images.unsplash.com/photo-1766818437361-c2be0d759ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxsaW5lbiUyMHRyb3VzZXJzfGVufDB8fHx8MTc2OTE1NjUxMnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Model wearing the Tailored Linen Trousers.\",\"imageHint\":\"linen trousers\"},{\"id\":\"women-editorial-hero\",\"imageUrl\":\"https://i.postimg.cc/28sLjfg6/download_(1).jpg\",\"description\":\"Editorial shot of a woman in fashionable clothing.\",\"imageHint\":\"woman outfit\"},{\"id\":\"women-editorial-thumb1\",\"imageUrl\":\"https://images.unsplash.com/photo-1581044777550-4cfa6ce670c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHx3b21lbiUyMGZhc2hpb24lMjBkZXRhaWx8ZW58MHx8fHwxNzY5MDQ3NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Detail shot of a woman's accessory.\",\"imageHint\":\"fashion accessory\"},{\"id\":\"men-editorial-hero\",\"imageUrl\":\"https://i.postimg.cc/7YGTyLsQ/download_(9).jpg\",\"description\":\"Editorial shot of a man in fashionable clothing.\",\"imageHint\":\"man fashion\"},{\"id\":\"men-editorial-thumb1\",\"imageUrl\":\"https://images.unsplash.com/photo-1702945189361-a3327d63336b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYW4lMjBhY2Nlc3Nvcnl8ZW58MHx8fHwxNzY5MTU2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Detail shot of a man's watch or shoe.\",\"imageHint\":\"man accessory\"},{\"id\":\"men-editorial-thumb2\",\"imageUrl\":\"https://images.unsplash.com/photo-1566070143588-2f788cb17d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtYW4lMjBvdXRmaXR8ZW58MHx8fHwxNzY5MTU2NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Alternative outfit for men.\",\"imageHint\":\"man outfit\"},{\"id\":\"unisex-editorial-hero\",\"imageUrl\":\"https://i.postimg.cc/qMP6BdWk/download_(3).jpg\",\"description\":\"A young child in a stylish outfit.\",\"imageHint\":\"child fashion\"},{\"id\":\"unisex-editorial-thumb1\",\"imageUrl\":\"https://images.unsplash.com/photo-1760446031723-e03702a3386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxuZXV0cmFsJTIwYWNjZXNzb3J5fGVufDB8fHx8MTc2OTE1NjUxMnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Unisex accessory like a hat or bag.\",\"imageHint\":\"neutral accessory\"},{\"id\":\"unisex-editorial-thumb2\",\"imageUrl\":\"https://images.unsplash.com/photo-1757085231450-41e56920ca84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnZW5kZXItbmV1dHJhbCUyMG91dGZpdHxlbnwwfHx8fDE3NjkxNTY1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Alternative unisex outfit.\",\"imageHint\":\"gender-neutral outfit\"},{\"id\":\"editorial-large\",\"imageUrl\":\"https://images.unsplash.com/photo-1739773375441-e8ded0ce3605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwb3V0Zml0fGVufDB8fHx8MTc2OTE1NjUxMnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Large editorial fashion shot.\",\"imageHint\":\"fashion outfit\"},{\"id\":\"editorial-tall\",\"imageUrl\":\"https://images.unsplash.com/photo-1631050165155-421c47e306f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmYXNoaW9uJTIwZGV0YWlsfGVufDB8fHx8MTc2OTE1MTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Tall editorial fashion detail.\",\"imageHint\":\"fashion detail\"},{\"id\":\"editorial-small\",\"imageUrl\":\"https://images.unsplash.com/photo-1758297679470-941c31804e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8ZmFzaGlvbiUyMGFjY2Vzc29yeXxlbnwwfHx8fDE3NjkxNTY1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Small editorial fashion accessory.\",\"imageHint\":\"fashion accessory\"},{\"id\":\"editorial-wide\",\"imageUrl\":\"https://images.unsplash.com/photo-1745962978987-010bc11e700c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxmYXNoaW9uJTIwZ3JvdXB8ZW58MHx8fHwxNzY5MTU2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Wide editorial fashion banner.\",\"imageHint\":\"fashion group\"},{\"id\":\"bag-editorial-large\",\"imageUrl\":\"https://images.unsplash.com/photo-1739238749338-0e737aba0e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWclMjBlZGl0b3JpYWx8ZW58MHx8fHwxNzY5MTU2MTc5fDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Large editorial shot of a handbag.\",\"imageHint\":\"bag editorial\"},{\"id\":\"bag-editorial-tall\",\"imageUrl\":\"https://images.unsplash.com/photo-1633450797676-8ab93caab915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxiYWclMjBtb2RlbHxlbnwwfHx8fDE3NjkxNTYxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Tall shot of a model holding a bag.\",\"imageHint\":\"bag model\"},{\"id\":\"bag-editorial-small\",\"imageUrl\":\"https://images.unsplash.com/photo-1759340832394-5e058560c1ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YmFnJTIwZGV0YWlsfGVufDB8fHx8MTc2OTE1NDQxMnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Small detail shot of a bag.\",\"imageHint\":\"bag detail\"},{\"id\":\"leather-tote\",\"imageUrl\":\"https://images.unsplash.com/photo-1760624089496-01ae68a92d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwdG90ZXxlbnwwfHx8fDE3NjkxMTA2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A leather tote bag.\",\"imageHint\":\"leather tote\"},{\"id\":\"canvas-backpack\",\"imageUrl\":\"https://images.unsplash.com/photo-1681334921874-5bafe8acf433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjYW52YXMlMjBiYWNrcGFja3xlbnwwfHx8fDE3NjkwOTc5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A canvas backpack.\",\"imageHint\":\"canvas backpack\"},{\"id\":\"kids-hoodie\",\"imageUrl\":\"https://images.unsplash.com/photo-1528072418361-06c8a41310d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxraWRzJTIwaG9vZGllfGVufDB8fHx8MTc2OTA2MTgwNXww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A comfortable hoodie for kids.\",\"imageHint\":\"kids hoodie\"},{\"id\":\"bag-editorial-large-replace\",\"imageUrl\":\"https://images.unsplash.com/photo-1622560481156-01fc7e1693e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxicm93biUyMGJhY2twYWNrfGVufDB8fHx8MTc2OTE1NjA3OXww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A stylish brown backpack.\",\"imageHint\":\"brown backpack\"},{\"id\":\"stylish-crossbody-bag\",\"imageUrl\":\"https://i.postimg.cc/3wn9bh1K/perse_bag.jpg\",\"description\":\"Woman with purse.\",\"imageHint\":\"woman purse\"},{\"id\":\"leather-duffle-bag\",\"imageUrl\":\"https://i.postimg.cc/gkX6P0tk/Men_s_Accessories_Backpacks_Watches.jpg\",\"description\":\"Men's accessories.\",\"imageHint\":\"men accessories\"},{\"id\":\"minimalist-clutch\",\"imageUrl\":\"https://i.postimg.cc/W3y8T7xY/black_bag.jpg\",\"description\":\"A black bag.\",\"imageHint\":\"black bag\"},{\"id\":\"men-formal-shirt\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A formal men's shirt.\",\"imageHint\":\"formal shirt\"},{\"id\":\"men-formal-suit\",\"imageUrl\":\"https://images.unsplash.com/photo-1768809250718-d6519121b744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Zm9ybWFsJTIwc3VpdHxlbnwwfHx8fDE3NjkxMDI1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A formal men's suit.\",\"imageHint\":\"formal suit\"},{\"id\":\"men-street-hoodie\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A men's streetwear hoodie.\",\"imageHint\":\"street hoodie\"},{\"id\":\"men-casual-polo\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A casual men's polo shirt.\",\"imageHint\":\"casual polo\"},{\"id\":\"men-vintage-blazer\",\"imageUrl\":\"https://images.unsplash.com/photo-1677020874923-ad7f504de566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx2aW50YWdlJTIwYmxhemVyfGVufDB8fHx8MTc2OTIwMTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A vintage men's blazer.\",\"imageHint\":\"vintage blazer\"},{\"id\":\"men-minimal-tee\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A minimal men's t-shirt.\",\"imageHint\":\"minimal tee\"},{\"id\":\"women-formal-blazer\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A formal women's blazer.\",\"imageHint\":\"formal blazer\"},{\"id\":\"women-street-jeans\",\"imageUrl\":\"https://images.unsplash.com/photo-1621965644933-85dc850d7d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxzdHJlZXQlMjBqZWFuc3xlbnwwfHx8fDE3NjkyMDE5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"Women's streetwear jeans.\",\"imageHint\":\"street jeans\"},{\"id\":\"women-casual-top\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A casual women's top.\",\"imageHint\":\"casual top\"},{\"id\":\"women-vintage-dress\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A vintage women's dress.\",\"imageHint\":\"vintage dress\"},{\"id\":\"women-minimal-top\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A minimal women's top.\",\"imageHint\":\"minimal top\"},{\"id\":\"unisex-street-hoodie\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A unisex streetwear hoodie.\",\"imageHint\":\"street hoodie\"},{\"id\":\"unisex-formal-trench\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A formal unisex trench coat.\",\"imageHint\":\"formal trench\"},{\"id\":\"unisex-casual-sweater\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A casual unisex sweater.\",\"imageHint\":\"casual sweater\"},{\"id\":\"unisex-vintage-sweater\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A vintage unisex sweater.\",\"imageHint\":\"vintage sweater\"},{\"id\":\"unisex-minimal-tee\",\"imageUrl\":\"https://images.pexels.com/photos/15266224/pexels-photo-15266224.jpeg\",\"description\":\"A minimal unisex t-shirt.\",\"imageHint\":\"minimal tee\"},{\"id\":\"black-bag\",\"imageUrl\":\"https://i.postimg.cc/phDzBKWK/black-bag.jpg\",\"description\":\"A black bag.\",\"imageHint\":\"black bag\"},{\"id\":\"brown-checked-bag\",\"imageUrl\":\"https://i.postimg.cc/KknB5tG8/broun-cheked-bag.jpg\",\"description\":\"A brown checked bag.\",\"imageHint\":\"checked bag\"},{\"id\":\"luggage-bag\",\"imageUrl\":\"https://i.postimg.cc/YG1YxQr0/laggage-bag.jpg\",\"description\":\"A luggage bag.\",\"imageHint\":\"luggage bag\"},{\"id\":\"purse-bag\",\"imageUrl\":\"https://i.postimg.cc/Ny215WZV/perse-bag.jpg\",\"description\":\"A purse.\",\"imageHint\":\"purse\"},{\"id\":\"prada-bag\",\"imageUrl\":\"https://i.postimg.cc/k6xKyWJR/Women_s-Bags-PRADA.jpg\",\"description\":\"A women's Prada bag.\",\"imageHint\":\"prada bag\"},{\"id\":\"black-woman-fashion\",\"imageUrl\":\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiaWxhY2slMjB3b21hbiUyMGZhc2hpb258ZW58MHx8fHwxNzE5Mjg0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A fashionable black woman.\",\"imageHint\":\"black woman\"},{\"id\":\"women-editorial-thumb2\",\"imageUrl\":\"https://i.postimg.cc/KknB5tG8/broun-cheked-bag.jpg\",\"description\":\"A brown checked bag.\",\"imageHint\":\"checked bag\"},{\"id\":\"bag-white-background\",\"imageUrl\":\"https://i.postimg.cc/KknB5tG8/broun-cheked-bag.jpg\",\"description\":\"A brown checked bag.\",\"imageHint\":\"checked bag\"},{\"id\":\"ethereal-trench-green\",\"imageUrl\":\"https://images.unsplash.com/photo-1591548852346-13a893c5c643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxncmVlbiUyMHRyZW5jaGNvYXR8ZW58MHx8fHwxNzE5Mjg0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A green trench coat.\",\"imageHint\":\"green trenchcoat\"},{\"id\":\"urban-nomad-blue\",\"imageUrl\":\"https://images.unsplash.com/photo-1610450949022-99c2c134a4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxibHVlJTIwamFja2V0fGVufDB8fHx8MTcxOTI4NDcyMnww&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A blue jacket.\",\"imageHint\":\"blue jacket\"},{\"id\":\"silk-blouse-red\",\"imageUrl\":\"https://images.unsplash.com/photo-1589465885857-32b0a48a4c10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBibG91c2V8ZW58MHx8fHwxNzE5Mjg0NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080\",\"description\":\"A red silk blouse.\",\"imageHint\":\"red blouse\"},{\"id\":\"firebase-brown-backpack\",\"imageUrl\":\"https://firebasestorage.googleapis.com/v0/b/studio-1140396316-71616.appspot.com/o/brown-backpack.jpg?alt=media&token=e8a5b1e6-2b44-4825-827a-879e6e73c374\",\"description\":\"A stylish brown backpack with silver buckles.\",\"imageHint\":\"brown backpack\"},{\"id\":\"developer-portrait\",\"imageUrl\":\"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MjE0MjU4ODd8MA&ixlib=rb-4.0.3&q=80&w=1080\",\"description\":\"Portrait of the developer.\",\"imageHint\":\"man portrait\"},{\"id\":\"developer-portrait-new\",\"imageUrl\":\"https://i.postimg.cc/QC4rLk9B/Whats-App-Image-2026-01-24-at-23-51-56.jpg\",\"description\":\"Portrait of the developer, Michael Muchemi.\",\"imageHint\":\"man portrait\"},{\"id\":\"marquee-men\",\"imageUrl\":\"https://i.postimg.cc/D0Th8BQC/47_New_York_Yankees_Two_Tone_Baseball_Hat.jpg\",\"description\":\"Man in fashionable outfit for marquee.\",\"imageHint\":\"man fashion\"},{\"id\":\"marquee-women\",\"imageUrl\":\"https://i.postimg.cc/3wn9bh1K/perse_bag.jpg\",\"description\":\"Woman with purse for marquee.\",\"imageHint\":\"woman purse\"},{\"id\":\"marquee-unisex\",\"imageUrl\":\"https://i.postimg.cc/ncy9VtNZ/Nike_Sneakers_Shop_Nike_Sneakers_for_women.jpg\",\"description\":\"Unisex fashion for marquee.\",\"imageHint\":\"unisex fashion\"}]}"));}),
"[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlaceHolderImages",
    ()=>PlaceHolderImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.json (json)");
;
const PlaceHolderImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$json__$28$json$29$__["default"].placeholderImages;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/product/bags-editorial-highlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BagsEditorialHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/placeholder-images.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function BagsEditorialHighlight() {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BagsEditorialHighlight.useEffect": ()=>{
            const card = cardRef.current;
            if (!card) return;
            const handleMouseMove = {
                "BagsEditorialHighlight.useEffect.handleMouseMove": (e)=>{
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', "".concat(x + 20, "px"));
                    card.style.setProperty('--mouse-y', "".concat(y + 20, "px"));
                }
            }["BagsEditorialHighlight.useEffect.handleMouseMove"];
            card.addEventListener('mousemove', handleMouseMove);
            return ({
                "BagsEditorialHighlight.useEffect": ()=>{
                    card.removeEventListener('mousemove', handleMouseMove);
                }
            })["BagsEditorialHighlight.useEffect"];
        }
    }["BagsEditorialHighlight.useEffect"], []);
    const largeImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'bag-editorial-large-replace');
    const tallImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'stylish-crossbody-bag');
    const smallImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'minimalist-clutch');
    const wideImage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$placeholder$2d$images$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaceHolderImages"].find((p)=>p.id === 'leather-duffle-bag');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "my-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            className: "minimal-glow-card bg-white p-4 sm:p-8 rounded-3xl shadow-sm overflow-hidden",
            style: {
                '--glow-card-radius': '1.5rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 relative h-64 md:h-auto md:aspect-[1.7/1] rounded-2xl overflow-hidden group",
                        children: largeImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: largeImage.imageUrl,
                            alt: largeImage.description,
                            fill: true,
                            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                            "data-ai-hint": largeImage.imageHint,
                            sizes: "(max-width: 768px) 100vw, 66vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                            lineNumber: 47,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:row-span-2 relative h-96 md:h-auto rounded-2xl overflow-hidden group",
                        children: tallImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: tallImage.imageUrl,
                            alt: tallImage.description,
                            fill: true,
                            className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                            "data-ai-hint": tallImage.imageHint,
                            sizes: "(max-width: 768px) 100vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 flex flex-col sm:flex-row gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-square w-full sm:w-48 sm:h-48 shrink-0 rounded-2xl overflow-hidden group",
                                children: smallImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: smallImage.imageUrl,
                                    alt: smallImage.description,
                                    fill: true,
                                    className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                                    "data-ai-hint": smallImage.imageHint,
                                    sizes: "(max-width: 640px) 100vw, 192px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-semibold mb-2",
                                        children: "Season Highlight"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 leading-relaxed max-w-md",
                                        children: "Carefully curated fashion pieces designed with elegance, simplicity, and modern style in mind."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-3 relative h-56 rounded-2xl overflow-hidden group",
                        children: wideImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: wideImage.imageUrl,
                            alt: wideImage.description,
                            fill: true,
                            className: "object-cover transition-transform duration-300 group-hover:scale-105",
                            "data-ai-hint": wideImage.imageHint,
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/product/bags-editorial-highlight.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(BagsEditorialHighlight, "6u/bLyT0WzEP0A9aknmDXb+lDH8=");
_c = BagsEditorialHighlight;
var _c;
__turbopack_context__.k.register(_c, "BagsEditorialHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/product/category-tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/firestore/use-collection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CategoryTabs(param) {
    let { activeTab, setActiveTab } = param;
    _s();
    const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"])();
    const stylesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"])({
        "CategoryTabs.useMemoFirebase[stylesQuery]": ()=>firestore ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(firestore, 'styles') : null
    }["CategoryTabs.useMemoFirebase[stylesQuery]"], [
        firestore
    ]);
    const { data: stylesData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollection"])(stylesQuery);
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CategoryTabs.useMemo[categories]": ()=>{
            const sortedStyles = (stylesData === null || stylesData === void 0 ? void 0 : stylesData.sort({
                "CategoryTabs.useMemo[categories]": (a, b)=>a.name.localeCompare(b.name)
            }["CategoryTabs.useMemo[categories]"]).map({
                "CategoryTabs.useMemo[categories]": (s)=>s.name
            }["CategoryTabs.useMemo[categories]"])) || [];
            return [
                "All",
                ...sortedStyles
            ];
        }
    }["CategoryTabs.useMemo[categories]"], [
        stylesData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-4 overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2.5 pb-2",
            children: [
                isLoading && Array.from({
                    length: 6
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-24 rounded-full"
                    }, i, false, {
                        fileName: "[project]/src/components/product/category-tabs.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)),
                !isLoading && categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(category),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-full border-none text-sm font-medium transition-colors whitespace-nowrap", activeTab === category ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"),
                        children: category
                    }, category, false, {
                        fileName: "[project]/src/components/product/category-tabs.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/product/category-tabs.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/product/category-tabs.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CategoryTabs, "iKLrAmBp5RC3HfFTgPSCC1WdnK8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$firestore$2f$use$2d$collection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCollection"]
    ];
});
_c = CategoryTabs;
var _c;
__turbopack_context__.k.register(_c, "CategoryTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/bags/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BagsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/product-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$bags$2d$editorial$2d$highlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/bags-editorial-highlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/firebase/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$category$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/product/category-tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const PAGE_SIZE = 8;
function BagsPage() {
    _s();
    const firestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastVisible, setLastVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchProducts = async function() {
        let isNewQuery = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (!firestore) return;
        if (isNewQuery) {
            setIsLoading(true);
            setProducts([]);
            setLastVisible(null);
            setHasMore(true);
        } else {
            setIsLoading(true);
        }
        try {
            let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(firestore, 'products'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('category', '==', 'Bags'));
            if (activeTab.toLowerCase() !== 'all') {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('style', '==', activeTab));
            }
            const cursor = isNewQuery ? null : lastVisible;
            if (cursor) {
                q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAfter"])(cursor));
            }
            q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(PAGE_SIZE));
            const documentSnapshots = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const newProducts = documentSnapshots.docs.map((doc)=>({
                    ...doc.data(),
                    id: doc.id
                }));
            const lastDoc = documentSnapshots.docs[documentSnapshots.docs.length - 1];
            setHasMore(newProducts.length === PAGE_SIZE);
            setLastVisible(lastDoc || null);
            setProducts((currentProducts)=>{
                const combined = isNewQuery ? newProducts : [
                    ...currentProducts,
                    ...newProducts
                ];
                combined.sort((a, b)=>a.name.localeCompare(b.name));
                return combined;
            });
        } catch (error) {
            console.error("Error fetching products: ", error);
            setHasMore(false);
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BagsPage.useEffect": ()=>{
            if (firestore) {
                fetchProducts(true);
            }
        }
    }["BagsPage.useEffect"], [
        firestore,
        activeTab
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$bags$2d$editorial$2d$highlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/bags/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t pt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$category$2d$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        activeTab: activeTab,
                        setActiveTab: setActiveTab
                    }, void 0, false, {
                        fileName: "[project]/src/app/bags/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-6",
                        children: [
                            isLoading && products.length === 0 && Array.from({
                                length: 8
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-[400px] w-full rounded-2xl"
                                }, i, false, {
                                    fileName: "[project]/src/app/bags/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 90
                                }, this)),
                            products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$product$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    product: product
                                }, product.id, false, {
                                    fileName: "[project]/src/app/bags/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)),
                            !isLoading && products.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No products found in this category."
                            }, void 0, false, {
                                fileName: "[project]/src/app/bags/page.tsx",
                                lineNumber: 87,
                                columnNumber: 52
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/bags/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-10",
                        children: hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>fetchProducts(),
                            disabled: isLoading,
                            children: isLoading ? 'Loading...' : 'Load More'
                        }, void 0, false, {
                            fileName: "[project]/src/app/bags/page.tsx",
                            lineNumber: 91,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/bags/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/bags/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/bags/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(BagsPage, "n31h9wRPMRPiulIK8yfvjF9f96w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"]
    ];
});
_c = BagsPage;
var _c;
__turbopack_context__.k.register(_c, "BagsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c7043766._.js.map