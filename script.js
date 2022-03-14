var name, fruits, number;

fruits = [
    'Аминов',
  'Панда',
  'Швед',
  'Фетисов',
  'Миха великолепный',
  'НТВ',
  'чирок',
  'Лодырь',
  'Скунс'
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
number = getRandom(0, fruits.length);

name = prompt("ПИШИ ИМЯ СТРИМЯЩИЙСЯ");


document.write(name +" "+ fruits[parseInt(number)]);