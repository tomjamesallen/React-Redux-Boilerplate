// Credit to
// https://gist.github.com/leodutra/2764339

module.exports = function(string) {
  // \u00C0-\u00ff for a happy Latin-1
  var returnString = string
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b([a-z\u00C0-\u00ff])/g, function(_, initial) {
      return initial.toUpperCase()
    })
    .replace(/(\s(?:de|a|o|e|da|do|em|ou|[\u00C0-\u00ff]))\b/ig, function(_, match) {
      return match.toLowerCase()
    })

  return returnString
}
