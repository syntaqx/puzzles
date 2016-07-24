// https://www.codewars.com/kata/convert-a-hex-string-to-rgb
// https://www.codewars.com/kata/5282b48bb70058e4c4000fa7

function hexStringToRGB(hex) {
  hex = parseInt(hex.substr(1), 16)
  return {
    r: (hex >> 16) & 255,
    g: (hex >> 8) & 255,
    b: (hex & 255)
  }
}
