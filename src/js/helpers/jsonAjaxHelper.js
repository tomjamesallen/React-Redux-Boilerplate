/* global XMLHttpRequest */

// Ajax helper.
// Adapted from http://www.sitepoint.com/guide-vanilla-ajax-without-jquery/
module.exports = function(url, callback, options) {
  options = options || {}
  var type = options.type || 'GET'
  var send = options.send || null

  var xhr = new XMLHttpRequest()
  xhr.open(type, url)
  xhr.send(send)

  xhr.onreadystatechange = function() {
    var DONE = 4
    var OK = 200
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        var data = JSON.parse(xhr.responseText)
        if (typeof callback === 'function') {
          callback({
            type: 'success',
            data: data
          })
        }
      }
      else {
        if (typeof callback === 'function') {
          callback({
            type: 'error',
            data: xhr.status
          })
        }
      }
    }
  }
}
