// function scrollToSection() {
//   var targetSection = document.getElementById('id_left_block');
//   targetSection.scrollIntoView({ behavior: 'smooth' });
// }
{/* <button onclick="scrollToSection()">Прокрутить к разделу</button> */}

function interpolateColor(color1, color2, factor) {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function rgbToHex(rgb) {
  return `#${rgb.map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

const colors = [
  hexToRgb('#116466'),
  hexToRgb('#FFCB9A'),
  hexToRgb('#D9B08C'),
  hexToRgb('#116466') // Loop back to the first color if desired
];

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = scrollY / documentHeight;
  const numColors = colors.length;

  // Calculate which two colors to interpolate between
  const section = Math.floor(scrollPosition * (numColors - 1));
  const sectionPosition = (scrollPosition * (numColors - 1)) - section;

  const color1 = colors[section];
  const color2 = colors[(section + 1) % numColors];

  const newColor = interpolateColor(color1, color2, sectionPosition);
  document.documentElement.style.setProperty('--bg-color', rgbToHex(newColor));
});
