// Create a function which prints current time every second.  Stop execution after 30 seconds elapsed


function printCurrentTimeEverySecond() {
    
    // Print current time
    function printTime() {
        let now = new Date()
        console.log(now.toLocaleTimeString())
    }

    // run setInterval every second for printing
    let intervalId = setInterval(printTime, 1000)

    // Stop after 30 second
    setTimeout(() => {
        clearInterval(intervalId)
        console.log('Stopped after 30 seconds')
    }, 30000)
}

printCurrentTimeEverySecond()
