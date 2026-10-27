// 1 ЗАДАНИЕ
const name1 = "Тимур"
const age1 = 15
const isStudent = true
const hobbies = ["Языки, игры, спорт"]

console.log("Имя:", name1)
console.log("Возраст:", age1)
console.log("Студент/ученик?", isStudent)
console.log("Хобби:", hobbies)

const num1 = 50
const num2 = 10

console.log("Сумма:", num1 + num2)
console.log("Разность:", num1 - num2)
console.log("Произведение:", num1 * num2)
console.log("Частное:", num1 / num2)

const name = "John"
const age = 20
console.log(`${name} is ${age} years old`)

// 2 ЗАДАНИЕ
let checkAge = 25

if (checkAge < 13) {
    console.log("Ребенок")
} else if (checkAge >= 13 && checkAge <= 17) {
    console.log("Подросток")
} else if (checkAge >= 18 && checkAge <= 65) {
    console.log("Взрослый")
} else {
    console.log("Пенсионер")
}

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Четное")
    } else {
        console.log("Нечетное")
    }
}
checkEvenOdd(10)
checkEvenOdd(7)

let age2 = 14
let height = 165

if (age2 < 5) {
    console.log("Слишком мал")
} else if (age2 >= 5 && age2 <= 12) {
    console.log("Добро пожаловать")
} else if (age2 >= 13 && age2 <= 18 && height > 160) {
    console.log("Добро пожаловать")
} else {
    console.log("Не разрешено")
}

// 3 ЗАДАНИЕ
console.log("Таблица умножения на 7:")
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`)
}

function sumNumbers(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log("Сумма чисел до 7:", sumNumbers(7))

let count = 20
while (count >= 1) {
    console.log(count)
    count--
}

// 4 ЗАДАНИЕ
const grades = [5, 4, 3, 5, 2, 4, 5];

console.log("Все оценки:");
let sumGrades = 0;
let maxGrade = grades[0];

for (let i = 0; i < grades.length; i++) {
    console.log(grades[i])
    sumGrades += grades[i]
    
    if (grades[i] > maxGrade) {
        maxGrade = grades[i]
    }
}
const averageGrade = sumGrades / grades.length;

console.log("Сумма:", sumGrades);
console.log("Средняя:", averageGrade.toFixed(2));
console.log("Максимальная:", maxGrade);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Четные числа:")
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];
function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }
    return -1
}
console.log("Индекс Бишкека:", findCity(cities, "Бишкек"))
console.log("Индекс Нарына:", findCity(cities, "Нарын"))

// 5 ЗАДАНИЕ
const student = {
    name: "Тимур",
    age: 15,
    courses: ["JavaScript", "HTML/CSS"],
    isActive: true
};

console.log("Информация о студенте:", student);

student.age += 1;

console.log("Курсы студента:");
for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}

const product = {
    name: "Ноутбук",
    price: 45000,
    quantity: 3
};

function getTotalCost(prod) {
    const total = prod.price * prod.quantity;
    console.log(`Общая стоимость товара "${prod.name}": ${total} сом`);
}
getTotalCost(product);

const books = [
    { title: "Всадник без головы", author: "Майн Рид", year: 1865 },
    { title: "И дольше века длится день", author: "Чингиз Айтматов", year: 1980 },
    { title: "Евгений Онегин", author: "Александр Пушкин", year: 1833 }
];

console.log("Список книг:");
let oldestBook = books[0];

for (let i = 0; i < books.length; i++) {
    console.log(`"${books[i].title}" - Автор: ${books[i].author} (${books[i].year} г.)`);
    
    if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
    }
}
console.log(`Самая старая книга: "${oldestBook.title}" (${oldestBook.year} г.)`);

// 6 ЗАДАНИЕ
const calculateDiscount = (price, discount) => price - (price * (discount / 100));

console.log("Цена после скидки (1000, 15%):", calculateDiscount(1000, 15));
console.log("Цена после скидки (500, 50%):", calculateDiscount(500, 50))

function getGrade(score) {
    if (score >= 80 && score <= 100) return "A";
    if (score >= 60 && score <= 79) return "B";
    if (score >= 40 && score <= 59) return "C";
    if (score >= 0 && score <= 39) return "F";
    return "Некорректные баллы";
}
console.log("Оценка за 85 баллов:", getGrade(85))
console.log("Оценка за 55 баллов:", getGrade(55))

function getMaxNumber(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Максимум в [10, 5, 23, 8]:", getMaxNumber([10, 5, 23, 8]))
console.log("Максимум в [-5, -2, -11]:", getMaxNumber([-5, -2, -11]))

// 7 ЗАДАНИЕ
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

const themeBtn = document.getElementById('themeBtn');
const body = document.body

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Светлая тема';
    } else {
        themeBtn.textContent = 'Темная тема';
    }
});
