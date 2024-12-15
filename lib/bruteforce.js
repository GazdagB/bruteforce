
/* global module, require */

function hasSimilarChars (s) {
  for (var i in s)
    if (s[i - 1] === s[i] && i > 0) return true;

  return false;
}

function bruteForce (params) {
  var prefix = params.prefix || '';
  var filterSimilarChars = params.filterSimilarChars || false;
  var len = params.len;
  var chars = params.chars;
  var step = params.step;
  var end = params.end;

  if (prefix.length <= len)
    if (step) step(prefix);

  if (prefix.length >= len)
    return [prefix];

  var strings = [prefix];

  for (var i in chars) {
    var nextString = prefix + chars[i];

    if (filterSimilarChars && hasSimilarChars(nextString))
      continue;

    var nextParams = {
      prefix: nextString,
      filterSimilarChars: filterSimilarChars,
      len: len,
      chars: chars,
      step: step
    };

    strings = strings.concat(bruteForce(nextParams));
  }

  if (end) end(strings);

  return strings;
}

function bruteForcePassword(params){
  var len = params.len;
  var step = params.step;
  var end = params.end
  var prefix = params.prefix || "";

  const passwordCharacters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '|', '\\', '`', '~', ' '
  ];

  bruteForce({len,step,chars : passwordCharacters, end, prefix})
  
}
module.exports = {bruteForce, bruteForcePassword};
