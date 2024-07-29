// Implement numbers Counter class (as a Singleton) which has inc(), dec() and get() methods.


















class Counter {
    // Приватное статическое свойство для хранения единственного экземпляра
    static #instance = null;

    constructor() {
        if (Counter.#instance) {
            throw new Error('You can only create one instance of Counter!');
        }
        this.count = 0;
        Counter.#instance = this;
    }

    // Метод для получения единственного экземпляра
    static getInstance() {
        if (Counter.#instance === null) {
            Counter.#instance = new Counter();
        }
        return Counter.#instance;
    }

    // Метод увеличения счетчика
    inc() {
        this.count++;
    }

    // Метод уменьшения счетчика
    dec() {
        this.count--;
    }

    // Метод получения текущего значения счетчика
    get() {
        return this.count;
    }
}

// Пример использования:
const counter1 = Counter.getInstance();
counter1.inc();
console.log(counter1.get()); // Вывод: 1

const counter2 = Counter.getInstance();
counter2.inc();
console.log(counter2.get()); // Вывод: 2

// Проверка, что оба объекта ссылаются на один и тот же экземпляр
console.log(counter1 === counter2); // Вывод: true
