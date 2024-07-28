// Create a function which will return random color

function RandomColor () {
    const color = ['1 Red', '2 Green', '3 Blue', '4 Pink', '5 Purple', '6 Yellow', '7 Orange', '8 White', '9 Black', '10 Golden', '11 Silver']
    let randd = Math.trunc(Math.random() * color.length)
    return color[randd]
}

console.log (RandomColor())