if(!self.define){let a,t={};const l=(l,i)=>(l=new URL(l+".js",i).href,t[l]||new Promise((t=>{if("document"in self){const a=document.createElement("script");a.src=l,a.onload=t,document.head.appendChild(a)}else a=l,importScripts(l),t()})).then((()=>{let a=t[l];if(!a)throw new Error(`Module ${l} didn’t register its module`);return a})));self.define=(i,c)=>{const d=a||("document"in self?document.currentScript.src:"")||location.href;if(t[d])return;let e={};const s=a=>l(a,d),u={module:{uri:d},exports:e,require:s};t[d]=Promise.all(i.map((a=>u[a]||s(a)))).then((a=>(c(...a),e)))}}define(["./workbox-e34cafea"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"datas/article.json",revision:"d2b4172df62a86bbe1ad5c7e228547bf"},{url:"datas/publicstatic/uploadhtml/202301/ahJNEvjfjxUINpowjod1673859106002.html",revision:"71f13f936a194ad209e739307315f231"},{url:"datas/publicstatic/uploadhtml/202301/AxPzPBSAKcminBvgzaK1674113362492.html",revision:"cae8240bb2917db86e44aa56b3b8d693"},{url:"datas/publicstatic/uploadhtml/202301/AYMIjLtqelVLbdjvncR1674117228623.html",revision:"33120a0b78da861aa88a441e4f708f9f"},{url:"datas/publicstatic/uploadhtml/202301/BLVZVvsBXuypsouuuaI1674117761960.html",revision:"86917e510a397bfc29904526b82c59a3"},{url:"datas/publicstatic/uploadhtml/202301/ceHZOpGpAmzVvtLbViO1674112375271.html",revision:"1938279b22848afb92840970698d045b"},{url:"datas/publicstatic/uploadhtml/202301/CFhobVjorBKQtSxuODH1674117866647.html",revision:"166679b2a582f6277640f10c11693d4d"},{url:"datas/publicstatic/uploadhtml/202301/cJKKmZgEudPfHBNGNht1673863219893.html",revision:"d6d24d81679e0856bfd4d438fb92223a"},{url:"datas/publicstatic/uploadhtml/202301/DLSfvDZXBBmKtTBRsTA1674112882921.html",revision:"c4d0abafb57abdab1a37e6b20ce750a5"},{url:"datas/publicstatic/uploadhtml/202301/ekgLGkzmxCtMbvRfWAi1674118060742.html",revision:"f90cdd83a1f8d09b77097467ee3b81a2"},{url:"datas/publicstatic/uploadhtml/202301/ERjIexkeQJhxDcghDYY1674112078141.html",revision:"eac43c2fc2cf9787c1461fc30d045946"},{url:"datas/publicstatic/uploadhtml/202301/EzSbKNJitGtqsuVnwVx1674116815104.html",revision:"9fc309ccb85773e5f95d068d0ce97505"},{url:"datas/publicstatic/uploadhtml/202301/FhxbHMJQPkFSqGbCdCa1674116876520.html",revision:"186acd921c687dbef9fa15e68e0c489b"},{url:"datas/publicstatic/uploadhtml/202301/FsltpRwtnHaUuaEDPJd1674113796613.html",revision:"1826ddcd5d402ac439f462ef4384b856"},{url:"datas/publicstatic/uploadhtml/202301/GenfbOdePbBcpKoDuFU1674118188104.html",revision:"f78e78a79231fbd5af2198d6d4851a59"},{url:"datas/publicstatic/uploadhtml/202301/gEVCVavsDcpJaILXSAy1674118823813.html",revision:"b9bb127cc41b4f84c30779bc69b8d05c"},{url:"datas/publicstatic/uploadhtml/202301/gfCRBEzIsJJwilidzMs1674121356585.html",revision:"e40347a6569da5db669468080af2c5d3"},{url:"datas/publicstatic/uploadhtml/202301/GOpIfEaAgnGVvDFdIzP1674117428040.html",revision:"706df1b5968d8531b1558062dfecd9f6"},{url:"datas/publicstatic/uploadhtml/202301/GtFOSAQCYegMkuPNtBD1674113666923.html",revision:"c7088069cc91887d690a0c79a9996a3e"},{url:"datas/publicstatic/uploadhtml/202301/hgOTFOJXOWMcczDNcdX1674111376232.html",revision:"f98eba3fac8ab07eec465c030626103f"},{url:"datas/publicstatic/uploadhtml/202301/iQqNeDpqkUwFcbkoWjb1674118541775.html",revision:"cb690a462689b247792ac2c41b69d1d5"},{url:"datas/publicstatic/uploadhtml/202301/KFWwUSZEwXqMedvtmvW1674113892820.html",revision:"54299579149b62cb464ce75d2f145651"},{url:"datas/publicstatic/uploadhtml/202301/KIeqOBguNEMWFQnkyPB1674113112315.html",revision:"7eec27693625d446335b4009fe5a8227"},{url:"datas/publicstatic/uploadhtml/202301/kmkMABdnSUPfgUSwnOq1674114670204.html",revision:"fefb3a7f914f8acb5ab67f3192a69c77"},{url:"datas/publicstatic/uploadhtml/202301/KuLgFBxBMFWUDWSkMrh1673862793221.html",revision:"29148eec638afc570d7083c81e072f61"},{url:"datas/publicstatic/uploadhtml/202301/lapOCoTFluLbdvgcAgu1674112008088.html",revision:"764a9ae4ae76fa43302d46a45d0c5a61"},{url:"datas/publicstatic/uploadhtml/202301/LjHOkahGYhGSgdXbuUM1674118703862.html",revision:"1da03ccca85db348a9a0793f6dd097ed"},{url:"datas/publicstatic/uploadhtml/202301/LnQhawOsXECzDgGXYlk1674118449638.html",revision:"271fdfbff886993c3952c8b0f2048b1a"},{url:"datas/publicstatic/uploadhtml/202301/MgvDsTqHphYuoZHvzFT1674112174944.html",revision:"ab3c144379caff326e708946e4349775"},{url:"datas/publicstatic/uploadhtml/202301/mtFgBqyRwNStsOYsygV1674111664319.html",revision:"bc26aa89ce3b0ed6daed75b96d38d418"},{url:"datas/publicstatic/uploadhtml/202301/NEtVbTxUULpwgsLYtZo1674117299822.html",revision:"a395407121b51627f336ab03bd2d14e2"},{url:"datas/publicstatic/uploadhtml/202301/nFiZHPbqeNnyBXFyShA1674112603468.html",revision:"63c69e06e2ea776b3d74ce04d6699d12"},{url:"datas/publicstatic/uploadhtml/202301/nkhrWzLhvaPGkByxFaG1673862919975.html",revision:"2f2c9d0361ec3ea90073cbbce2249300"},{url:"datas/publicstatic/uploadhtml/202301/ocnOcPcCYCcRzjAVTIA1673859035607.html",revision:"b5b508c427e26b6527da6c50585980c8"},{url:"datas/publicstatic/uploadhtml/202301/OGJlQRWgKBMEVXrmnoa1674112273054.html",revision:"ef768a37dce42adc75f14ca85035bfff"},{url:"datas/publicstatic/uploadhtml/202301/oVQfPJjlsJaWFxdWIlE1674118618958.html",revision:"52cfc5041dc61583a5bbc8c8626eb16b"},{url:"datas/publicstatic/uploadhtml/202301/pDoTyvrOTWLQWZUSkgG1674111885760.html",revision:"47735c60eb52497da36447ea2b4e62bd"},{url:"datas/publicstatic/uploadhtml/202301/PuwIgSPxqanKLKMZldk1674111781558.html",revision:"c509d74d991cad84f59b4d38a904c56f"},{url:"datas/publicstatic/uploadhtml/202301/pxlXcakaTCUbjkDyHJk1674117526439.html",revision:"ecfc538381909bd8eefd395d975526d2"},{url:"datas/publicstatic/uploadhtml/202301/pXuuvIplsNrBumsXyyG1674116428121.html",revision:"04871dec644948b07004fb4311deb15e"},{url:"datas/publicstatic/uploadhtml/202301/qsdoOaifABwtCUhLISN1674112822932.html",revision:"3bbf2e94b7ec7d1301a7a5ca3248a043"},{url:"datas/publicstatic/uploadhtml/202301/QTvTXMieUZpUkapACie1673857674525.html",revision:"571cee8f607b94cf430c62dcde74cab4"},{url:"datas/publicstatic/uploadhtml/202301/rarnQVgXUriBmlkmEhk1674117163190.html",revision:"415127c5d57f7f3bab6d112e71ea1de8"},{url:"datas/publicstatic/uploadhtml/202301/rLWROikChRTUaDWKezn1674114182516.html",revision:"63c803bb26527275d3f10e9c209f8130"},{url:"datas/publicstatic/uploadhtml/202301/RNBoUGpVnimngwtxJCf1674114893731.html",revision:"0ea58839ef5ac38749f598c2a2d2d35c"},{url:"datas/publicstatic/uploadhtml/202301/rXMsjyrDAGLjFygrtKT1674114779013.html",revision:"eeef31e40fb1c0cf5fc93e495a05bae8"},{url:"datas/publicstatic/uploadhtml/202301/stAFKfMcMQQZPcxmWZr1674118349382.html",revision:"d82b7c63ba6c18b4193d6fdf2cc6f31c"},{url:"datas/publicstatic/uploadhtml/202301/sZoNEgAxrodHaBhIlDP1674117023494.html",revision:"5af3797041ba99ea5cd4fe8eb109e523"},{url:"datas/publicstatic/uploadhtml/202301/tqdoLFftXdjuxKAgazs1674118769933.html",revision:"f36eec8b0a4088782d6b3e465fa2d936"},{url:"datas/publicstatic/uploadhtml/202301/TyVDoAfwPnvcFgUOtQh1674113567206.html",revision:"3a390b9d2c6113952ce92db5be431f9b"},{url:"datas/publicstatic/uploadhtml/202301/uGGIXkcJXPkmEIpBFcN1674114584388.html",revision:"a316d609591c23624ff5680fceb1304f"},{url:"datas/publicstatic/uploadhtml/202301/uHGJUuVgwoBScOZoXWU1673863065300.html",revision:"161bca5578ed89c3bf442a3014de9d07"},{url:"datas/publicstatic/uploadhtml/202301/UkNeFvNAUZEsmwHpXve1674111261119.html",revision:"c1cc054ebea376fab5be00fa55ccfe1c"},{url:"datas/publicstatic/uploadhtml/202301/uoqwkVMkFmOdlMpgYbV1674114498234.html",revision:"afbd6281d09ee1bf8aff4a1ceb2393de"},{url:"datas/publicstatic/uploadhtml/202301/uoVEHXtCSOVdenOSDjW1674119570407.html",revision:"246a640492cd35d1414a705656469830"},{url:"datas/publicstatic/uploadhtml/202301/WEvtOdifTHiykptCdyz1674113249389.html",revision:"1821fc5c38cfee1e93cd6edaed63e14b"},{url:"datas/publicstatic/uploadhtml/202301/xgbfBqKwJmmtMZCBgGT1674118244292.html",revision:"d71b12159b8da75140da17c658d4ab01"},{url:"datas/publicstatic/uploadhtml/202301/xjgCBLSHJgjAQNgcGYz1673862699573.html",revision:"a5700ff19b84ffe751000976f2a29882"},{url:"datas/publicstatic/uploadhtml/202301/YpqczBdwYofLpiqcolC1674114382220.html",revision:"49bcab38b2c26c0fefde198554d28142"},{url:"datas/publicstatic/uploadimg/202301/aBQXOLkyDATLOyKwcfe1674114093241.png",revision:"f1cde571660b6dd14e081fd8bd3b5787"},{url:"datas/publicstatic/uploadimg/202301/fITHZpVUAlsOyYJHDnh1674121338073.png",revision:"9a55b2ce59f32b8fa60111faf421de28"},{url:"datas/publicstatic/uploadimg/202301/KoJLwJwvQWcrgcQTcfU1674121327226.png",revision:"91125bbb5ca1e8f05ad304e78f6676d8"},{url:"datas/publicstatic/uploadimg/202301/lASKfQqjjIaLwUiCZOt1674121346661.png",revision:"b763517e207e996b123bd7495f1c77cb"},{url:"datas/publicstatic/uploadimg/202301/ucOlabPpOmubLZzYyba1674121316056.png",revision:"a4823dbac92cf018d7be1e75766912db"},{url:"favicon.ico",revision:"c1cede1fb782b3a625e4954e489b71e5"},{url:"icon/favicon128.png",revision:"f0a055f7bc96622f5c515e5c0b29c2ed"},{url:"icon/favicon48.png",revision:"4193cb05f0ff3b2003dffdd116c8d0f1"},{url:"icon/favicon96.png",revision:"5eefcb2b1e8d2701cbc92c53725622d6"},{url:"index.html",revision:"ad8f868d1e4f3b746b76240341dbc403"},{url:"static/About-5b6315eb.js",revision:null},{url:"static/About-9521a454.css",revision:null},{url:"static/ColorConversion-5ec5a067.js",revision:null},{url:"static/ColorConversion-9f30e42c.css",revision:null},{url:"static/Detail-7c2098f4.js",revision:null},{url:"static/Detail-c1477038.css",revision:null},{url:"static/index-8b6e2478.js",revision:null},{url:"static/index-acd4ae34.css",revision:null},{url:"static/SiteTool-099dc842.js",revision:null},{url:"static/SiteTool-5a1c2534.css",revision:null},{url:"favicon.ico",revision:"c1cede1fb782b3a625e4954e489b71e5"},{url:"icon/favicon48.png",revision:"4193cb05f0ff3b2003dffdd116c8d0f1"},{url:"icon/favicon96.png",revision:"5eefcb2b1e8d2701cbc92c53725622d6"},{url:"icon/favicon128.png",revision:"f0a055f7bc96622f5c515e5c0b29c2ed"},{url:"manifest.webmanifest",revision:"e1b79aa0f3398a5c238fc83d4ce6b724"}],{}),a.cleanupOutdatedCaches(),a.registerRoute(new a.NavigationRoute(a.createHandlerBoundToURL("index.html")))}));
