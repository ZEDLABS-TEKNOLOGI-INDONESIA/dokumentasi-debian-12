/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-54d0af47'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "_astro/debian.DVr-hPs7.png",
    "revision": null
  }, {
    "url": "_astro/ec.6oty3.css",
    "revision": null
  }, {
    "url": "_astro/ec.p1z7b.js",
    "revision": null
  }, {
    "url": "_astro/index.CUOAa6WV.css",
    "revision": null
  }, {
    "url": "_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.C181hMzK.js",
    "revision": null
  }, {
    "url": "_astro/page.CqwDW6Ek.js",
    "revision": null
  }, {
    "url": "_astro/print.DNXP8c50.css",
    "revision": null
  }, {
    "url": "_astro/Search.astro_astro_type_script_index_0_lang.cjYDvRdi.js",
    "revision": null
  }, {
    "url": "_astro/TableOfContents.astro_astro_type_script_index_0_lang.CKWWgpjV.js",
    "revision": null
  }, {
    "url": "_astro/ui-core.D_Lfcn_I.js",
    "revision": null
  }, {
    "url": "404",
    "revision": "a74770ae927825baef40cae6b3b438e9"
  }, {
    "url": "apple-touch-icon-180x180.png",
    "revision": "341a35c8bb1fec594c15a463532f12da"
  }, {
    "url": "components/asides/index.html",
    "revision": "d7c40826d987dba837b3beb623f483dc"
  }, {
    "url": "components/badges/index.html",
    "revision": "7a4cf9408f35ecfeede5fc2dee7f7ff6"
  }, {
    "url": "components/card-grids/index.html",
    "revision": "6ae85ddd51549d2212b77a8218c8c7fb"
  }, {
    "url": "components/cards/index.html",
    "revision": "0a112cf593cecffbbcb0ef3d8ce76066"
  }, {
    "url": "components/code/index.html",
    "revision": "b2649daf1d671984b25327fd6cf7ae41"
  }, {
    "url": "components/file-tree/index.html",
    "revision": "01f9656d4d7f13c6622d48a69d4fba12"
  }, {
    "url": "components/icons/index.html",
    "revision": "51305d79e0e90458b517f2f65400578d"
  }, {
    "url": "components/link-buttons/index.html",
    "revision": "2966b56f59924b723d9f0e53e9f19a1c"
  }, {
    "url": "components/link-cards/index.html",
    "revision": "18ed07cc2fa2d69735f64fa562054fc3"
  }, {
    "url": "components/steps/index.html",
    "revision": "212a478927e178448c5cf05d771199b8"
  }, {
    "url": "components/tabs/index.html",
    "revision": "2a6ca5ee1283b4d9c2f198ea6565f0c3"
  }, {
    "url": "components/using-components/index.html",
    "revision": "d0758dbf510426a8be65edeb0568d946"
  }, {
    "url": "favicon.ico",
    "revision": "fa6e452df81c3ed2258479832cd28246"
  }, {
    "url": "favicon.svg",
    "revision": "1883fa1409b1dd7f55f6c36aaaa1d670"
  }, {
    "url": "index.html",
    "revision": "aed91caec65cf13b19aa90c3599a1d1b"
  }, {
    "url": "install-debian/add-user-accounts/index.html",
    "revision": "ec27407d3eb0bb59091bc4fff50b19ed"
  }, {
    "url": "install-debian/configure-apt-sources/index.html",
    "revision": "3f8fee7be7d2fbf83c3e70e7bbd419e4"
  }, {
    "url": "install-debian/configure-services/index.html",
    "revision": "c93f52ef615c9d8406810f991937a4de"
  }, {
    "url": "install-debian/configure-sudo/index.html",
    "revision": "711983d74a6d9ca35aa5da23177e5aad"
  }, {
    "url": "install-debian/get-debian-12/index.html",
    "revision": "daaca045c09c37287082ec3a0ee1e41a"
  }, {
    "url": "install-debian/install-debian-12/index.html",
    "revision": "4d47d7496c3c5018c819eb8f769ace6b"
  }, {
    "url": "install-debian/network-settings/index.html",
    "revision": "65f954ba66b492714b74e2d6956f6ac5"
  }, {
    "url": "install-debian/set-command-alias/index.html",
    "revision": "88bf7397c4be22df4905d37ba07dd2e1"
  }, {
    "url": "install-debian/update-system/index.html",
    "revision": "e9a0dfff939de01b4a98ca17c3f7b3f5"
  }, {
    "url": "install-debian/vim-settings/index.html",
    "revision": "68d689bb8a50a5d541aa64a508fde0b1"
  }, {
    "url": "maskable-icon-512x512.png",
    "revision": "9a7bd7822f1c78a1f4a45c1a68fc03d4"
  }, {
    "url": "ntp-ssh-server/configure-ntp-client/index.html",
    "revision": "2a4a51304a87cc2de1d135b2ea354d0f"
  }, {
    "url": "ntp-ssh-server/configure-ntp-server-chrony/index.html",
    "revision": "432bf2e6372ac5f537371c96001ce98b"
  }, {
    "url": "ntp-ssh-server/configure-ntp-server-ntpsec/index.html",
    "revision": "723c7621264d011e26c9438a68b12d3e"
  }, {
    "url": "ntp-ssh-server/password-authentication/index.html",
    "revision": "e873811982f8e4da9b6c58a72c2872c8"
  }, {
    "url": "ntp-ssh-server/sftp-only-chroot/index.html",
    "revision": "9d7e2589ae621af2e2d94b72c416b0fd"
  }, {
    "url": "ntp-ssh-server/ssh-file-transfer-debian/index.html",
    "revision": "f2c448777f9ae1add88cb2cf0bb14244"
  }, {
    "url": "ntp-ssh-server/ssh-file-transfer-windows/index.html",
    "revision": "b380a15aa36b405f2936f0fa147c579c"
  }, {
    "url": "ntp-ssh-server/ssh-keys-pair-authentication/index.html",
    "revision": "69c0f5e325341791cab2fad30eef68f3"
  }, {
    "url": "ntp-ssh-server/ssh-port-forwarding/index.html",
    "revision": "5128caa501f61092ef73f1571bf82836"
  }, {
    "url": "ntp-ssh-server/use-parallel-ssh/index.html",
    "revision": "00ad0e0c519cf82a1eb08905f29e6992"
  }, {
    "url": "ntp-ssh-server/use-ssh-agent/index.html",
    "revision": "5521b834eab9217941bb7babbb108c06"
  }, {
    "url": "ntp-ssh-server/use-ssh-fs/index.html",
    "revision": "def5039f8290e6925828fc601ffd8d63"
  }, {
    "url": "ntp-ssh-server/use-ssh-pass/index.html",
    "revision": "43b10f66d271820c881870ebead912d2"
  }, {
    "url": "pwa-192x192.png",
    "revision": "befb07c0247708b210227c799262e76c"
  }, {
    "url": "pwa-512x512.png",
    "revision": "9860d4ce75300461a72d8315029e492a"
  }, {
    "url": "pwa-64x64.png",
    "revision": "544d1909c8793b3ac010f7decff8b448"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "revision": "d7c40826d987dba837b3beb623f483dc",
    "url": "components/asides"
  }, {
    "revision": "7a4cf9408f35ecfeede5fc2dee7f7ff6",
    "url": "components/badges"
  }, {
    "revision": "6ae85ddd51549d2212b77a8218c8c7fb",
    "url": "components/card-grids"
  }, {
    "revision": "0a112cf593cecffbbcb0ef3d8ce76066",
    "url": "components/cards"
  }, {
    "revision": "b2649daf1d671984b25327fd6cf7ae41",
    "url": "components/code"
  }, {
    "revision": "01f9656d4d7f13c6622d48a69d4fba12",
    "url": "components/file-tree"
  }, {
    "revision": "51305d79e0e90458b517f2f65400578d",
    "url": "components/icons"
  }, {
    "revision": "2966b56f59924b723d9f0e53e9f19a1c",
    "url": "components/link-buttons"
  }, {
    "revision": "18ed07cc2fa2d69735f64fa562054fc3",
    "url": "components/link-cards"
  }, {
    "revision": "212a478927e178448c5cf05d771199b8",
    "url": "components/steps"
  }, {
    "revision": "2a6ca5ee1283b4d9c2f198ea6565f0c3",
    "url": "components/tabs"
  }, {
    "revision": "d0758dbf510426a8be65edeb0568d946",
    "url": "components/using-components"
  }, {
    "revision": "aed91caec65cf13b19aa90c3599a1d1b",
    "url": "/"
  }, {
    "revision": "ec27407d3eb0bb59091bc4fff50b19ed",
    "url": "install-debian/add-user-accounts"
  }, {
    "revision": "3f8fee7be7d2fbf83c3e70e7bbd419e4",
    "url": "install-debian/configure-apt-sources"
  }, {
    "revision": "c93f52ef615c9d8406810f991937a4de",
    "url": "install-debian/configure-services"
  }, {
    "revision": "711983d74a6d9ca35aa5da23177e5aad",
    "url": "install-debian/configure-sudo"
  }, {
    "revision": "daaca045c09c37287082ec3a0ee1e41a",
    "url": "install-debian/get-debian-12"
  }, {
    "revision": "4d47d7496c3c5018c819eb8f769ace6b",
    "url": "install-debian/install-debian-12"
  }, {
    "revision": "65f954ba66b492714b74e2d6956f6ac5",
    "url": "install-debian/network-settings"
  }, {
    "revision": "88bf7397c4be22df4905d37ba07dd2e1",
    "url": "install-debian/set-command-alias"
  }, {
    "revision": "e9a0dfff939de01b4a98ca17c3f7b3f5",
    "url": "install-debian/update-system"
  }, {
    "revision": "68d689bb8a50a5d541aa64a508fde0b1",
    "url": "install-debian/vim-settings"
  }, {
    "revision": "2a4a51304a87cc2de1d135b2ea354d0f",
    "url": "ntp-ssh-server/configure-ntp-client"
  }, {
    "revision": "432bf2e6372ac5f537371c96001ce98b",
    "url": "ntp-ssh-server/configure-ntp-server-chrony"
  }, {
    "revision": "723c7621264d011e26c9438a68b12d3e",
    "url": "ntp-ssh-server/configure-ntp-server-ntpsec"
  }, {
    "revision": "e873811982f8e4da9b6c58a72c2872c8",
    "url": "ntp-ssh-server/password-authentication"
  }, {
    "revision": "9d7e2589ae621af2e2d94b72c416b0fd",
    "url": "ntp-ssh-server/sftp-only-chroot"
  }, {
    "revision": "f2c448777f9ae1add88cb2cf0bb14244",
    "url": "ntp-ssh-server/ssh-file-transfer-debian"
  }, {
    "revision": "b380a15aa36b405f2936f0fa147c579c",
    "url": "ntp-ssh-server/ssh-file-transfer-windows"
  }, {
    "revision": "69c0f5e325341791cab2fad30eef68f3",
    "url": "ntp-ssh-server/ssh-keys-pair-authentication"
  }, {
    "revision": "5128caa501f61092ef73f1571bf82836",
    "url": "ntp-ssh-server/ssh-port-forwarding"
  }, {
    "revision": "00ad0e0c519cf82a1eb08905f29e6992",
    "url": "ntp-ssh-server/use-parallel-ssh"
  }, {
    "revision": "5521b834eab9217941bb7babbb108c06",
    "url": "ntp-ssh-server/use-ssh-agent"
  }, {
    "revision": "def5039f8290e6925828fc601ffd8d63",
    "url": "ntp-ssh-server/use-ssh-fs"
  }, {
    "revision": "43b10f66d271820c881870ebead912d2",
    "url": "ntp-ssh-server/use-ssh-pass"
  }, {
    "url": "favicon.svg",
    "revision": "1883fa1409b1dd7f55f6c36aaaa1d670"
  }, {
    "url": "manifest.webmanifest",
    "revision": "338119dbdcac4a94697784eb916e0b99"
  }], {
    "directoryIndex": "index.html"
  });
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/")));

}));
