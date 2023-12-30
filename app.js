const numbers = [2,3,4,5,44,44,34,2,3,4,5,6,7,7,6,5,4,3,8,7,8,7,5,6,4,5]
const filterNum = numbers.filter((item, index) => numbers.indexOf(item) === index)

console.log(filterNum)



let books = [
    {name:'гордость и предубеждение'},
    {name: 'Цветы для Элджернона'},
    {name:  'Вторая жизнь Уве'},
    {name: 'большая четверка'},
    {name:  'Гарри Поттер и Принц-полукровка'},
    {name:  'Шерлок Холмс'},
    {name:  'Побег из Шоушенка'},
]
let booksLetter = books.filter((book) => book.name.toLowerCase().includes('у'))
console.log(booksLetter)
let uniqBooks = booksLetter.map(booksLetter=>booksLetter.name + (" книга с буквой 'у' "))
console.log(uniqBooks)