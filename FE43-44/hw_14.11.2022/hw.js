// Задача 1. Функция для нахождения большего из двух чисел
function findMax(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  
  // Пример использования
  console.log(findMax(10, 5)); // Вывод: 10
  
  // Задача 2. Функция для создания массива чисел от 0 до заданного числа
  function createArray(n) {
    var arr = [];
    for (var i = 0; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  // Пример использования
  console.log(createArray(5)); // Вывод: [0, 1, 2, 3, 4, 5]
  