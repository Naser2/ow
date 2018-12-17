export const GoogleApi = function(opts) {
  opts = opts || {}

  const apiKey = opts.apiKey;
  const libraries = opts.libraries || [];
  const client = opts.client;
  const URL = 'https://maps.googleapis.com/maps/api/js';

  const googleVersion = '3.22';
  let script = null;
  let google = window.google = null;
  let loading = false;
  let channel = null;
  let language = null;
  let region = null;

  let onLoadEvents = [];

  const url = () => {
    let url = URL;
    let params = {
      key: apiKey,
      callback: 'CALLBACK_NAME',
      libraries: libraries.join(','),
      client: client,
      v: googleVersion,
      channel: channel,
      language: language,
      region: region
    }

    let paramStr = Object.keys(params)
        .filter(k => !!params[k])
        .map(k => `${k}=${params[k]}`).join('&');

    return `${url}?${paramStr}`;
  }

  return url();
}

export default GoogleApi



// (function (global, factory) {
//   if (typeof define === "function" && define.amd) {
//     define(['exports'], factory);
//   } else if (typeof exports !== "undefined") {
//     factory(exports);
//   } else {
//     var mod = {
//       exports: {}
//     };
//     factory(mod.exports);
//     global.GoogleApi = mod.exports;
//   }
// })(this, function (exports) {
//   'use strict';

//   Object.defineProperty(exports, "__esModule", {
//     value: true
//   });
//   var GoogleApi = exports.GoogleApi = function GoogleApi(opts) {
//     opts = opts || {};

//     if (!opts.hasOwnProperty('apiKey')) {
//       throw new Error('You must pass an apiKey to use GoogleApi');
//     }

//     var apiKey = opts.apiKey;
//     var libraries = opts.libraries || ['places'];
//     var client = opts.client;
//     var URL = opts.url || 'https://maps.googleapis.com/maps/api/js';

//     var googleVersion = opts.version || '3.31';

//     var script = null;
//     var google = typeof window !== 'undefined' && window.google || null;
//     var loading = false;
//     var channel = null;
//     var language = opts.language;
//     var region = opts.region || null;

//     var onLoadEvents = [];

//     var url = function url() {
//       var url = URL;
//       var params = {
//         key: apiKey,
//         callback: 'CALLBACK_NAME',
//         libraries: libraries.join(','),
//         client: client,
//         v: googleVersion,
//         channel: channel,
//         language: language,
//         region: region
//       };

//       var paramStr = Object.keys(params).filter(function (k) {
//         return !!params[k];
//       }).map(function (k) {
//         return k + '=' + params[k];
//       }).join('&');

//       return url + '?' + paramStr;
//     };

//     return url();
//   };

//   exports.default = GoogleApi;
// });