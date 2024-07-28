function longOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operation 1 complete');
        }, 1000); // 1 секунда
    });
}

function longOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operation 2 complete');
        }, 2000); // 2 секунды
    });
}

function longOperation3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Operation 3 complete');
        }, 3000); // 3 секунды
    });
}

const allOperations = Promise.all([longOperation1(), longOperation2(), longOperation3()]);

allOperations.then((results) => {
    console.log('All operations completed:');
    console.log(results); // массив с результатами всех операций
}).catch((error) => {
    console.error('One of the operations failed:', error);
});

const firstOperation = Promise.race([longOperation1(), longOperation2(), longOperation3()]);

firstOperation.then((result) => {
    console.log('First operation completed:', result);
}).catch((error) => {
    console.error('One of the operations failed first:', error);
});
