// Have some text with words. Create an object-literal, which will represent such text, so keys will be first symbols of each word of text, and value - each word.
// Like, string “Hello, I’m a beginner in the typescript world”
// Should be:
// {
//        H: “Hello”,
//        I: “I’m”,
//        a: “a”,
//        b: “beginner”,
//      //etc
// }












function createObjectFromText(text) {
    // split text to words
    const words = text.split(/\s+/)
    
    // create the Object
    const result = {}
    
    // Fill Object
    words.forEach(word => {
        // take first character
        const firstChar = word[0]
        // add word to Obj with first character as key
        result[firstChar] = word
    })

    return result
}


const text = 'Hello, I’m a beginner in the typescript world'
const result = createObjectFromText(text)
console.log(result)

