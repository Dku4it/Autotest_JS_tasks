// Print Fibonacci Sequence for given number N


function printFibonacciSequence(N) {
    if (N <= 0) {
        console.log('N number must be greater than 0')
        return
    }

    let fibonacci = [0, 1] // first 2 numbers

    for (let i = 2; i < N; i++) {  // Generation
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
    }
    console.log(fibonacci.slice(0, N).join(', '))  // slice(0, N) - for correct output if N=1;    join(', ') - for text string
}

let N = 2
printFibonacciSequence(N) 