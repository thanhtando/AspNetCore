//unit rem: 
//The size of elements 
//using rem units will be converted to pixels 
//depending on the font size of the root element of the page (html element) 
//For example, html has font-size: 10px; 

import chroma from "chroma-js";

//then an element that has width: 10rem; converted to width: 100px
export function pxToRem(number, baseNumber = 16){
  return `${number/baseNumber}rem`                  
}

export function boxShadow(offset = [], radius = [], color, opacity, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}
// function gradientChartLine(chart, color, opacity = 0.2) {
//   const ctx = chart.getContext("2d");
//   const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
//   const primaryColor = rgba(color, opacity).toString();

//   gradientStroke.addColorStop(1, primaryColor);
//   gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
//   gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

//   return gradientStroke;
// }
export function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}
export function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}
export function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}
export function gradientChartLine(chart, color, opacity = 0.2) {
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}




