const w = 28
const h = 28
const step = w/(h/2)  // calculating the step of row changes
let qqq = '#'.repeat(w*2-1)  // calculating first string
let figureFull = qqq + '\n'   // creating a new figure with first string


// creating of figure central part 
for (let i = 1; i < h; i++) { 
  let rep = Math.abs(w - (step * i))
  let figure = '# '.repeat (rep)
  let zeros = ' '.repeat (w - rep)
  
  if (figure.includes('#')) {     // excluding empty lines
    figureFull = figureFull + ( zeros + figure ) + '\n'     // building current line
  }
}
figureFull = figureFull +  qqq    // adding a last string to the figure

console.log( figureFull + '\n' + '\n' + `Size of Yuor Figure: ${w} x ${h}`)   // shown the figure
