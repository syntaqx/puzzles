// https://www.codewars.com/kata/escape-html-markup
// https://www.codewars.com/kata/52c7c425f80c299ac60003df

function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
