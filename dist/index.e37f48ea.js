// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aD7Zm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _overviewViewJs = require("./views/overviewView.js");
var _overviewViewJsDefault = parcelHelpers.interopDefault(_overviewViewJs);
var _hourlyForecastViewJs = require("./views/hourlyForecastView.js");
var _hourlyForecastViewJsDefault = parcelHelpers.interopDefault(_hourlyForecastViewJs);
var _airConditionsViewJs = require("./views/airConditionsView.js");
var _airConditionsViewJsDefault = parcelHelpers.interopDefault(_airConditionsViewJs);
var _weekForecastViewJs = require("./views/weekForecastView.js");
var _weekForecastViewJsDefault = parcelHelpers.interopDefault(_weekForecastViewJs);
"use strict";
//control weather details
async function controlWeatherDetails() {
    try {
        await _modelJs.getWeatherDetails();
        (0, _overviewViewJsDefault.default).render(_modelJs.geoData);
    } catch (err) {
        console.error(err);
    }
}
async function controlHourlyDetails() {
    try {
        await _modelJs.getHourlyData();
        (0, _hourlyForecastViewJsDefault.default).render(_modelJs.hourlyData);
    } catch (err) {
        console.error(err);
    }
}
async function controlAirConditionDetails() {
    try {
        (0, _airConditionsViewJsDefault.default).render(_modelJs.geoData.currentConditions);
    } catch (err) {
        console.error(err);
    }
}
async function controlWeekForecast() {
    try {
        (0, _weekForecastViewJsDefault.default).render(_modelJs.futureData);
    } catch (err) {
        console.error(err);
    }
}
async function init() {
    await controlWeatherDetails();
    await controlHourlyDetails();
    await controlAirConditionDetails();
    await controlWeekForecast();
}
window.addEventListener("load", init); /* OverviewView.addHandlerRender(controlWeatherDetails);
hourlyForecastView.addHandlerRender(controlHourlyDetails);
 */ 

},{"./model.js":"Y4A21","./views/overviewView.js":"e9rYl","./views/hourlyForecastView.js":"kRNXC","./views/airConditionsView.js":"7pcNg","./views/weekForecastView.js":"9uBo8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "geoData", ()=>geoData);
parcelHelpers.export(exports, "futureData", ()=>futureData);
parcelHelpers.export(exports, "hourlyData", ()=>hourlyData);
parcelHelpers.export(exports, "getWeatherDetails", ()=>getWeatherDetails);
parcelHelpers.export(exports, "getHourlyData", ()=>getHourlyData);
var _configJs = require("./config.js");
var _helperJs = require("./helper.js");
"use strict";
let geoData = {
    locationDetails: {},
    currentConditions: {}
};
let futureData = [];
let hourlyData = [];
/*********Fetching Lat, Lng using navigator api**************/ function geoPromisify() {
    return new Promise((resolve, reject)=>navigator.geolocation.getCurrentPosition(resolve, reject));
}
/*********Fetching Current Location using API**************/ async function getGeolocation() {
    try {
        let res = await geoPromisify();
        let { latitude: lat, longitude: lon } = res.coords;
        /* console.log(lat, lon); */ let data = await (0, _helperJs.AJAX)(`${(0, _configJs.GEOCODE_URL)}?lat=${lat}&lon=${lon}`);
        let { address: { city, state_district, county } } = data;
        let countySplit = county.split(" ")[0];
        return city ? city : countySplit || state_district;
    } catch (err) {
        throw err;
    }
}
async function getWeatherDetails() {
    try {
        let city = await getGeolocation();
        let weatherData = await (0, _helperJs.AJAX)(`${(0, _configJs.WEATHER_URL)}/${city}?unitGroup=metric&key=${(0, _configJs.GENERATE_KEY)("visualCrossing")}&contentType=json`);
        let { resolvedAddress, currentConditions, days, description } = weatherData;
        let { temp, feelslike, humidity, dew, windspeed, pressure, visibility, cloudcover, uvindex, conditions, icon } = currentConditions;
        geoData.locationDetails = resolvedAddress;
        futureData = [
            ...days
        ];
        geoData.currentConditions = {
            temp,
            feelslike,
            humidity,
            dew,
            windspeed,
            pressure,
            visibility,
            cloudcover,
            uvindex,
            conditions,
            icon,
            description
        };
        console.log(geoData.currentConditions);
    } catch (err) {
        throw err;
    }
}
async function getHourlyData() {
    let todayDate = (0, _helperJs.formatDateYMD)();
    hourlyData = futureData.filter((obj)=>obj.datetime === todayDate).flatMap((obj)=>obj.hours);
}

},{"./config.js":"k5Hzs","./helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WEATHER_URL", ()=>WEATHER_URL);
parcelHelpers.export(exports, "GEOCODE_URL", ()=>GEOCODE_URL);
parcelHelpers.export(exports, "TIMEOUT_SECS", ()=>TIMEOUT_SECS);
parcelHelpers.export(exports, "GENERATE_KEY", ()=>GENERATE_KEY);
"use strict";
const WEATHER_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;
const GEOCODE_URL = `https://geocode.maps.co/reverse`;
const TIMEOUT_SECS = 10;
function GENERATE_KEY(name) {
    if (name === "visualCrossing") return "SP4ZBC92NXUNSGNUN6MAVUKUQ";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "splitDateTime", ()=>splitDateTime);
parcelHelpers.export(exports, "formatDateYMD", ()=>formatDateYMD);
parcelHelpers.export(exports, "formatTime", ()=>formatTime);
parcelHelpers.export(exports, "getDayOfWeek", ()=>getDayOfWeek);
var _configJs = require("./config.js");
function timeOut(s) {
    return new Promise((_, reject)=>setTimeout(()=>reject(new Error(`Request takes too long! Timeout after ${s} seconds`)), s * 1000));
}
async function AJAX(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        let res = await Promise.race([
            fetchPro,
            timeOut((0, _configJs.TIMEOUT_SECS))
        ]);
        let data = await res.json();
        if (!res.ok) throw new Error(`${data.message} ${res.status}`);
        return data;
    } catch (err) {
        throw err;
    }
}
function getCurrentFormattedDate() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const currentDate = new Date();
    const dayOfWeek = days[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    // Get hours and minutes with AM/PM format
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    // Add leading zeros to minutes if needed
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${dayOfWeek},${dayOfMonth} ${month},${hours}:${formattedMinutes} ${ampm}`;
}
function splitDateTime(num) {
    return getCurrentFormattedDate().split(",")[num];
}
function formatDateYMD() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}
function formatTime(time24hr) {
    // Split the time string into hours and minutes
    const [hours, minutes] = time24hr.split(":").map(Number);
    // Validate the input
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return "Invalid time format";
    // Determine AM or PM
    const period = hours >= 12 ? "PM" : "AM";
    // Convert to 12-hour format
    const convertedHours = hours % 12 || 12;
    // Format the time string in 12-hour format
    const time12hr = `${convertedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
    return time12hr;
}
function getDayOfWeek(dateString) {
    const today = new Date();
    const inputDate = new Date(dateString);
    // Check if the input date is today
    if (inputDate.getDate() === today.getDate() && inputDate.getMonth() === today.getMonth() && inputDate.getFullYear() === today.getFullYear()) return "Today";
    // Create an array with day names
    const dayNames = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    // Get the day index (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = inputDate.getDay();
    // Return the day name based on the day index
    return dayNames[dayIndex];
}

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e9rYl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
class OverviewView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".overview__header");
    _generateMarkup() {
        console.log(this._data);
        return `
            <div class="location-info d-flex">
              <div class="location-heading d-flex">
                <h3 class="heading-secondary">${this?._data.locationDetails?.split(",")[0]},<span> ${this?._data?.locationDetails?.split(",")[1]} ${this._data.locationDetails.split(",")[2] ? this._data.locationDetails.split(",")[2] : ""}</span></h3>
                <div class="text-placeholder">
                  <p class="current-date">
                   ${(0, _helperJs.splitDateTime)(0)}, ${(0, _helperJs.splitDateTime)(1)}
                    <span> ${(0, _helperJs.splitDateTime)(2)}</span>
                  </p>
                  <div class="temperature-info d-flex">
                    <span><i class="ph ph-cloud-rain kpi-icon"></i></span>
                    <p>
                      Chance of Raining:
                      <span>${Math.floor(this._data.currentConditions?.humidity)}&percnt;</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="temperature-measure">
                <h2 class="heading-primary">${Math.floor(this._data.currentConditions?.temp)}&deg; <span>c</span></h2>
                <p class="weather-img-desc">${this?._data.currentConditions?.description}
               </p>
              </div>
              </div>
              <div class="weather-img">
              <img src="../img/icons/${this._data.currentConditions?.icon}.svg" alt=${this._data.currentConditions?.icon} />
               
            </div>
            </div>
            
          `;
    }
    kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }
}
exports.default = new OverviewView();

},{"./view.js":"bWlJ9","../helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    _clear() {
        this._parentElement.innerHTML = "";
    }
    render(data) {
        this._data = data;
        let markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderSpinner() {
        let markup = `<div class="spinner">
        <img src="../src/img/icon.svg" />
      </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    addHandlerRender(handler) {
        /*   window.addEventListener("load", async () => await handler()); */ window.addEventListener("load", handler);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRNXC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
class HourlyForecastView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".temperature-timings");
    currentDate = new Date();
    hours = this.currentDate.getHours();
    formattedTime = this.hours.toString().padStart(2, "0");
    _generateMarkup() {
        return this.markup();
    }
    markup() {
        let specificHours = this.getCurrentTimePlus6Hours(this._data);
        console.log(specificHours);
        let markup = specificHours.map((obj)=>`<div class="time-col col d-flex">
                <p>${(0, _helperJs.formatTime)(obj.datetime)}</p>
                <div class="timings-img">
                  <img class="img-responsive" src="../img/icons/${obj.icon}.svg" alt=${obj.icon}>
                </div>
                <h2 class="today-temp">${Math.floor(obj.temp)}&deg; <span>C</span></h2>
              </div>`).join(" ");
        return markup;
    }
    getCurrentTimePlus6Hours(data) {
        // Find the index of the current time in the data array
        const currentIndex = data.findIndex((obj)=>obj.datetime.split(":")[0] === this.formattedTime);
        console.log(currentIndex);
        // If the current time is not found in the data array, return an empty array
        if (currentIndex === -1) return [];
        // Get the next 6 objects from the current time, considering the circular nature of time (e.g., 23:00 -> 00:00)
        const next6HoursData = data.slice(currentIndex + 1, currentIndex + 7);
        return next6HoursData.length === 6 ? next6HoursData : next6HoursData.concat(data.slice(0, currentIndex + 7 - data.length));
    }
}
exports.default = new HourlyForecastView();

},{"./view.js":"bWlJ9","../helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pcNg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AirConditionsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".weather-kpi");
    _generateMarkup() {
        return `
              <!------------------col---------------------------->
              <div class="kpi-card d-flex">
                <i class="ph ph-thermometer-simple kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Real Feel</h4>
                  <h3 class="kpi-metrics">${Math.floor(this._data.feelslike)}&deg; <span>C</span></h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-wind kpi-icon kpi-icon-mobile"></i>
                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Wind</h4>
                  <h3 class="kpi-metrics">
                   ${Math.floor(this._data.windspeed)}
                    <span>kmph</span>
                  </h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-cloud-rain kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">Cloud Cover</h4>
                  <h3 class="kpi-metrics"> ${Math.floor(this._data.cloudcover)}&percnt;</h3>
                </div>
              </div>

              <!------------------col---------------------------->

              <div class="kpi-card d-flex">
                <i class="ph ph-sun kpi-icon kpi-icon-mobile"></i>

                <div class="kpi-description d-flex">
                  <h4 class="kpi-heading">UV Index</h4>
                  <h3 class="kpi-metrics">${this._data.uvindex}</h3>
                </div>
              </div>
            `;
    }
}
exports.default = new AirConditionsView();

},{"./view.js":"bWlJ9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9uBo8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _helperJs = require("../helper.js");
class WeekForecastView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".forecast-container");
    _generateMarkup() {
        return this.markup();
    }
    markup() {
        let weekData = this._data.slice(1, 8);
        let markup = weekData.map((obj)=>{
            return `<div class="forecast-description d-flex ">
              <p class="forecast-day">${(0, _helperJs.getDayOfWeek)(obj.datetime)}</p>
              <div class="forecast-weather d-flex">
                <img class="img-responsive" src="../img/icons/${obj.icon}.svg" alt=${obj.icon}>
                <h4 class="forecast-heading">${obj.conditions}</h4>
              </div>
              <p class="forecast-temp">
                <span>${Math.floor(obj.temp)}&deg;</span> C
              </p>
            </div>`;
        }).join(" ");
        return markup;
    }
}
exports.default = new WeekForecastView();

},{"./view.js":"bWlJ9","../helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aD7Zm","aenu9"], "aenu9", "parcelRequirebbde")

//# sourceMappingURL=index.e37f48ea.js.map
