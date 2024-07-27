// Have a function that take a parameter as model car (from point#2).
//   Write a statement(-s) to print on console the following results:       
//   Taxes: 
//   10 usd for bmw
//   12 usd for mercedes 
//    8 usd for other models (use different ways).



function Costs1(name1) {

    name1 = name1.trim()  // Trim spaces
    let name2 = name1.toLowerCase()  // Clear CamelCases

    if (name2 == 'bmw') {
        console.log( name1 + ': 10 usd')
        } else if (name2 == 'mercedes') {
            console.log( name1 + ': 12 usd')

            // Way 1
            } else if (name2 == 'kia' || name2 == 'audi') {
            console.log( name1 + ': 8 usd')

            // // Way 2
            // } else if (cars1.includes(name2)) {
            // console.log( name1 + ': 8 usd')

                } else { console.log( name1 + ' - is absend in the Array') 
                    }
}

const cars1 = ['bmw', 'mercedes', 'audi', 'kia']; console.log( cars1 )

Costs1('BMW')
