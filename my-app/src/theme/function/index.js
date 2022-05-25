//unit rem: 
//The size of elements 
//using rem units will be converted to pixels 
//depending on the font size of the root element of the page (html element) 
//For example, html has font-size: 10px; 
//then an element that has width: 10rem; converted to width: 100px
export function pxToRem(number, baseNumber = 16){
  return `${number/baseNumber}rem`                  
}




