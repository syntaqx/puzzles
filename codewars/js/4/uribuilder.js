// https://www.codewars.com/kata/uribuilder
// https://www.codewars.com/kata/51eead3461ccf7db04000017

function UriBuilder(url) {
  var queryString = url.substr(url.indexOf('?') + 1);
  var uriBuilder = this;

  this.url = url.replace(queryString, '').replace(/[\/?]$/, '');
  this.params = {};

  queryString.split('&').forEach(function (query) {
    var split = query.split('=');
    uriBuilder.params[split[0]] = split[1];
  });
}

UriBuilder.prototype.build = function () {
  var uriBuilder = this

  if (uriBuilder.params.length == 0) {
    return this.url;
  }

  return this.url + '?' + Object.keys(uriBuilder.params).map(function (key) {
    return [key, uriBuilder.params[key]].map(encodeURIComponent).join('=');
  }).join('&');
}
