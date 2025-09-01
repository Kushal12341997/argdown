/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18e83fe0af3abf6c252f89e23cfbb80a"
  },
  {
    "url": "agree-icon.svg",
    "revision": "a8e3436592aff8067dd9bd4a34908184"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b234c1cf1ae1958f111579509cf52ee"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d257d914052dc3409eeeab27caa4267c"
  },
  {
    "url": "api/index.html",
    "revision": "6aa4c4667ce9ff525e4c148a92da75d2"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b731ba118d89e5652404d9e9d82a219e"
  },
  {
    "url": "argdown-arrow-white.svg",
    "revision": "188460ee31d1efa9eda2e89c485777ca"
  },
  {
    "url": "argdown-arrow.png",
    "revision": "16eb1c797a9fabfb08ad373009309b26"
  },
  {
    "url": "argdown-map.css",
    "revision": "7bdfbca8a502060a2c32d1e4fcbca986"
  },
  {
    "url": "argdown-map.js",
    "revision": "d3a262f7795e471d9f54471bb5805ce1"
  },
  {
    "url": "argdown-mark.svg",
    "revision": "d3c4d784d8cc12c1cf9ccc4cdc149b13"
  },
  {
    "url": "argdown-viewer.js",
    "revision": "22c390fc8c2b3b18f4a837fd8e616656"
  },
  {
    "url": "assets/css/0.styles.37ec135a.css",
    "revision": "ec2eb056ac2514cb4fb244c14684ba1d"
  },
  {
    "url": "assets/img/argdown-vscode-greenspan-1.b6e85ee0.png",
    "revision": "b6e85ee01e7079435dfd9877642b01b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b829926b.js",
    "revision": "302b4aa5202da73b99c55957cbdbfb48"
  },
  {
    "url": "assets/js/11.80a398e7.js",
    "revision": "178256c0a4525efa74317148540ce046"
  },
  {
    "url": "assets/js/12.82c2cfda.js",
    "revision": "28e28e77c8cc7e6ace7ecc6ebf6c575f"
  },
  {
    "url": "assets/js/13.5ed8a63d.js",
    "revision": "9e333550c40d3a2c4f01cf00497eabd1"
  },
  {
    "url": "assets/js/14.599b128c.js",
    "revision": "f32e082aa38e65e484050e044cdca230"
  },
  {
    "url": "assets/js/15.c3b437df.js",
    "revision": "c0fd134508fd1d6fdf738f991f793100"
  },
  {
    "url": "assets/js/16.ec3fd308.js",
    "revision": "f60fd8837508c0cdf965ddd25649bf21"
  },
  {
    "url": "assets/js/17.99b529f2.js",
    "revision": "38164eda002f7081a8837d7bef35ef37"
  },
  {
    "url": "assets/js/18.ff2f36d9.js",
    "revision": "eae537c0a5306acecf7327bddf85e2dd"
  },
  {
    "url": "assets/js/19.d3e5b488.js",
    "revision": "e681c2f18407223d1b2e98a8758a5990"
  },
  {
    "url": "assets/js/20.f4b05268.js",
    "revision": "bb24ad4ece7555c8f324e08c63b9dec9"
  },
  {
    "url": "assets/js/21.839ff16b.js",
    "revision": "40f3cc7d4ac89845af55085bce49c358"
  },
  {
    "url": "assets/js/22.f7a027d0.js",
    "revision": "073a7a2896892b3e7d6e14890ece11ff"
  },
  {
    "url": "assets/js/23.f51c4460.js",
    "revision": "b492cc6124cf39241432efb8514b85d7"
  },
  {
    "url": "assets/js/24.b4018bcc.js",
    "revision": "44deb043b2530d01ec35d3cf9a5d1387"
  },
  {
    "url": "assets/js/25.63d8f1e0.js",
    "revision": "6226664d343d6640798c0028ad52afb7"
  },
  {
    "url": "assets/js/26.fcdc840c.js",
    "revision": "1519475ce2c727e3b7dd4d548d4a7b5b"
  },
  {
    "url": "assets/js/27.72c87cc1.js",
    "revision": "15fa31212d83a9277d4e338626ead579"
  },
  {
    "url": "assets/js/28.8dd9377a.js",
    "revision": "2ab44dd2f9eb3413b44a73a0b2930af3"
  },
  {
    "url": "assets/js/29.3ae76781.js",
    "revision": "80dd1fead9fbd5b4314bdbffa77af60a"
  },
  {
    "url": "assets/js/3.0fff8d10.js",
    "revision": "6b967b51b7aeb0ef5ec16c25fe22028f"
  },
  {
    "url": "assets/js/30.bd51c5db.js",
    "revision": "73e1ddfb40a9a3960f37f31764d36691"
  },
  {
    "url": "assets/js/31.2a31038a.js",
    "revision": "07bca81115222d3e5724dffd0e810deb"
  },
  {
    "url": "assets/js/32.598d31be.js",
    "revision": "f9506a0c117808817d079cf365f38f44"
  },
  {
    "url": "assets/js/33.5f482e05.js",
    "revision": "45a30ba8a3d36214606eb13493dd3646"
  },
  {
    "url": "assets/js/34.394ad188.js",
    "revision": "4c3f9b6f4ca148652b66ea6efd6c4e07"
  },
  {
    "url": "assets/js/35.a6d016d7.js",
    "revision": "b63c303f8ec40df648b4d9a9fe66f1f2"
  },
  {
    "url": "assets/js/36.04acc42d.js",
    "revision": "92dc23a2c06f0c26135fcae7e12f78f4"
  },
  {
    "url": "assets/js/37.11d89738.js",
    "revision": "63c790dc5d2cec8bbd6b696519bef4e2"
  },
  {
    "url": "assets/js/38.fee64348.js",
    "revision": "653042c9f8060622da23fe8baa3fbf18"
  },
  {
    "url": "assets/js/39.13bdc168.js",
    "revision": "bba8c9115eb4e41bd625d8bec3f7c7df"
  },
  {
    "url": "assets/js/4.c1330da1.js",
    "revision": "298110d3b8e66376a4175f8e31c395ed"
  },
  {
    "url": "assets/js/40.02122106.js",
    "revision": "c17a8b25daa445550525ae5e58264791"
  },
  {
    "url": "assets/js/41.a209a9a2.js",
    "revision": "b801fe0c0d9d9f7bad0374218fc563b3"
  },
  {
    "url": "assets/js/42.dd473889.js",
    "revision": "30e78c813bb92c6e19b32ad81d173fde"
  },
  {
    "url": "assets/js/43.7290399c.js",
    "revision": "87f91be01cacf1aed7cd2a952898be1b"
  },
  {
    "url": "assets/js/44.affb801a.js",
    "revision": "68b9ece9f5705b5741e74b4708397610"
  },
  {
    "url": "assets/js/45.7adbb3db.js",
    "revision": "f490debca2579c7f5744be8be73409d4"
  },
  {
    "url": "assets/js/46.b08ef07d.js",
    "revision": "53c17be5bb8c329ca4db870b74802091"
  },
  {
    "url": "assets/js/47.49e232bb.js",
    "revision": "c091b14989be7495c6321d8ffe17e0e2"
  },
  {
    "url": "assets/js/48.6dd289cb.js",
    "revision": "16c614b798b94d77493fa036ada25efe"
  },
  {
    "url": "assets/js/5.a8a67c42.js",
    "revision": "7c32267d38197b192a312efb4b398c2b"
  },
  {
    "url": "assets/js/6.ad5ab7ee.js",
    "revision": "a7b75e0294a47e612da2a04aae47b2cc"
  },
  {
    "url": "assets/js/7.34286fc1.js",
    "revision": "d00e8a6ecfb450f11711206302949910"
  },
  {
    "url": "assets/js/8.f3a35884.js",
    "revision": "b23198b4af981e6407203beaac04f470"
  },
  {
    "url": "assets/js/9.90685281.js",
    "revision": "a79124fd9340e6bdab1a06619164fbcb"
  },
  {
    "url": "assets/js/app.d29cacfe.js",
    "revision": "a10eabe5d5b06b05118d8850819c95d3"
  },
  {
    "url": "assets/js/vendors~docsearch.7b59063b.js",
    "revision": "012a8659a747ce16233b91076b16b72b"
  },
  {
    "url": "cat1.jpg",
    "revision": "f5d126a3797a2f4516afd01fdd4fe7eb"
  },
  {
    "url": "cat2.jpg",
    "revision": "fdc90fdd737d461f64e37c64631cdcc2"
  },
  {
    "url": "changes/2018.html",
    "revision": "8fb23f4bae75c5f13514b07eb02c958d"
  },
  {
    "url": "changes/2019.html",
    "revision": "a087365aa9cadbcb5705b58536af9361"
  },
  {
    "url": "changes/2020.html",
    "revision": "d052a5569115c1200e9690824581ca80"
  },
  {
    "url": "changes/2021.html",
    "revision": "8f83005207a3d9370b5032f92b0eceab"
  },
  {
    "url": "changes/index.html",
    "revision": "705ea4e4c4188c493326a4326c8a4d7d"
  },
  {
    "url": "compress.svg",
    "revision": "c5fefc2d5586fb61f5a709a6280b94c7"
  },
  {
    "url": "disagree-icon.svg",
    "revision": "03de316ed2329ee60c1911460e1c0414"
  },
  {
    "url": "dog1.jpg",
    "revision": "e4c2277580ebd7252672e1af09c9d213"
  },
  {
    "url": "dog2.jpg",
    "revision": "2dd0ebf990d44fbbc7c07b536be06658"
  },
  {
    "url": "expand.svg",
    "revision": "651a07980327d5bcbb8851c06761dc74"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "0838bbbe758ce024287a339ce2f20026"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9a454f3ef2a188c19ccae92bc59f975c"
  },
  {
    "url": "favicon.svg",
    "revision": "0f1956d1eb23e082af85d779ee3d56ba"
  },
  {
    "url": "googleb41049b30bb73985.html",
    "revision": "e3ed96111974b98cc5f9dbd3a9f4f5d9"
  },
  {
    "url": "guide/a-first-example.html",
    "revision": "1dc624e5275034872b2af368aa73fb24"
  },
  {
    "url": "guide/adding-images.html",
    "revision": "fbc4d5d44d4e00a2e5a9fae167f49139"
  },
  {
    "url": "guide/changing-the-graph-layout.html",
    "revision": "633074103e7dfd002c23aef3a703aed2"
  },
  {
    "url": "guide/changing-the-node-size.html",
    "revision": "10f26ad24fbfd87a689f86d2c86ffcac"
  },
  {
    "url": "guide/changing-the-node-style.html",
    "revision": "4a1fd25b1c0e6dadc7cdc9730677827f"
  },
  {
    "url": "guide/colorizing-maps.html",
    "revision": "4f2d84025cb8f9182d9bbf494f0337c5"
  },
  {
    "url": "guide/configuration-cheatsheet.html",
    "revision": "ccc8186a926e46436c7241ea08004685"
  },
  {
    "url": "guide/configuration-in-the-frontmatter-section.html",
    "revision": "59d4a4c6d753dc36b8d38a3dcbd40b65"
  },
  {
    "url": "guide/configuration-with-config-files.html",
    "revision": "fb708a8435e9297389a0e44666cfd571"
  },
  {
    "url": "guide/configuration.html",
    "revision": "d876242bccccbeb56a73eeb6bed5743e"
  },
  {
    "url": "guide/creating-argument-maps.html",
    "revision": "b95e057309c7126dad4f5d9c47dbc002"
  },
  {
    "url": "guide/creating-edges.html",
    "revision": "fb8584fd497bb744c47ab817d16eafe6"
  },
  {
    "url": "guide/creating-group-nodes.html",
    "revision": "fa20e2c19984c098094edd1d702ff9ec"
  },
  {
    "url": "guide/creating-oldschool-argument-maps-and-inference-trees.html",
    "revision": "176995b9246e27f3cbbb3d035f05c832"
  },
  {
    "url": "guide/creating-statement-and-argument-nodes.html",
    "revision": "1fb72fdf78cf1dce1cc399a987945302"
  },
  {
    "url": "guide/elements-of-an-argument-map.html",
    "revision": "72619f7b24469b8d0e872fbfca303fe2"
  },
  {
    "url": "guide/embedding-your-maps-in-a-webpage.html",
    "revision": "ed3647affdcf904b50ba5f5948cdc02b"
  },
  {
    "url": "guide/extending-argdown.html",
    "revision": "022b4f2a3688c76994d1ded26c1bcc6f"
  },
  {
    "url": "guide/index.html",
    "revision": "45ce8990c89a4aca891283cfdb80baf7"
  },
  {
    "url": "guide/installing-the-commandline-tool.html",
    "revision": "c4467749edcba09551561c4438a5ff3e"
  },
  {
    "url": "guide/installing-the-vscode-extension.html",
    "revision": "3b5f9f0c3d276c931f5fe60249bdee9a"
  },
  {
    "url": "guide/integrating-argdown-markdown-into-applications.html",
    "revision": "627cb0f0e6b74cb91fd7eeae88f5809b"
  },
  {
    "url": "guide/loading-custom-plugins-in-a-config-file.html",
    "revision": "2f491436ee141210b1216e037f4a4600"
  },
  {
    "url": "guide/publishing-argdown-markdown-with-pandoc.html",
    "revision": "a6ac9f6cb77000681273cb04ab52edbc"
  },
  {
    "url": "guide/publishing-argument-maps.html",
    "revision": "a25bf692d9279a914da728513f53320b"
  },
  {
    "url": "guide/running-custom-processes.html",
    "revision": "6db248efcbaa1e3e182cb66cb012bfdd"
  },
  {
    "url": "guide/using-argdown-in-markdown.html",
    "revision": "51735c368c001825111373ed80fa5982"
  },
  {
    "url": "guide/using-argdown-in-your-application.html",
    "revision": "947c031d6307fb6185fc0197a18bc623"
  },
  {
    "url": "guide/using-logical-symbols-and-emojis.html",
    "revision": "cc7b33c8f9d755f9862943cd08ad301a"
  },
  {
    "url": "guide/writing-custom-plugins.html",
    "revision": "02a26b4d814984e93e0d231455a9df45"
  },
  {
    "url": "index.html",
    "revision": "897b8e020ec0daab51a6f3850835ab13"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "f1e527365592a25dd0039f28b0e2ae3c"
  },
  {
    "url": "river-deep.argdown-theme.css",
    "revision": "1dde29f17b6306f7f4da8df080e7c32d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2c742637dbf81b39dfe0870701ba5a6d"
  },
  {
    "url": "snow-in-spring.argdown-theme.css",
    "revision": "10500bb1a5555592f94b762a44e85ca9"
  },
  {
    "url": "syntax/index.html",
    "revision": "eade2820000508b6ec8fe2617fb1b45c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
