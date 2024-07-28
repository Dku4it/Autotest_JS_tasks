



function daysUntilNextLeapFeb29() {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Функция для проверки, является ли год високосным
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Функция для нахождения следующего високосного года
    function nextLeapYear(year) {
        while (!isLeapYear(year)) {
            year++;
        }
        return year;
    }

    // Проверяем текущий год
    if (isLeapYear(currentYear)) {
        const feb29ThisYear = new Date(currentYear, 1, 29); // 29 февраля текущего года
        if (today <= feb29ThisYear) {
            // Если 29 февраля ещё не прошло в этом году
            return Math.ceil((feb29ThisYear - today) / (1000 * 60 * 60 * 24));
        }
    }

    // Ищем следующий високосный год
    const nextLeap = nextLeapYear(currentYear + 1);
    const feb29NextLeapYear = new Date(nextLeap, 1, 29);

    return Math.ceil((feb29NextLeapYear - today) / (1000 * 60 * 60 * 24));
}

// Пример использования функции
console.log(`Осталось ${daysUntilNextLeapFeb29()} дней до ближайшего 29 февраля.`);
