// 1.Числами Фибоначчи- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
// в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел


// 2.Напишите на изучаемом вами языке программирования, рекурсивную функцию вычисления таких чисел

function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  const n = 6; 
  const result = fibonacci(n);
  console.log(`Число Фибоначчи для n = ${n} равно ${result}`);

//   3.Напишите на изучаемом вами языке программирования, итеративную функцию вычисления таких чисел


function fibonacciIterative (m) {
    if (m <= 0) {
        return 0;
    } else if (m === 1) {
        return 1;
    }


    let fibPrev = 0;
    let fibCurrent = 1;
    
    for (let i = 2; i <= m;i++) {
        let fibNext = fibPrev + fibCurrent
        fibPrev = fibCurrent
        fibCurrent = fibNext
    }
    return fibCurrent
}

const m = 10
const result2 = fibonacciIterative(m)
console.log(`Число Фибоначчи для n = ${m} равно ${result2}`);


// 4.Вычислите первые 10, 20, 30 чисел Фибоначчи при помощи рекурсии и при помощи цикла.

// Рекурсивная функция для вычисления чисел Фибоначчи
function fibonacciRecursive(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
  }
  
  // Вычисление первых 10, 20 и 30 чисел Фибоначчи с помощью рекурсии
  const nValues = [10, 20, 30];
  for (const n of nValues) {
    const resultRecursive = [];
    for (let i = 0; i < n; i++) {
      resultRecursive.push(fibonacciRecursive(i));
    }
    console.log(`Первые ${n} чисел Фибоначчи (рекурсия):`, resultRecursive);
  }

//   Итеративная функция для вычисления чисел Фибоначчи
function fibonacciIterative(n) {
  if (n <= 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }

  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const fibNext = result[i - 1] + result[i - 2];
    result.push(fibNext);
  }

  return result;
}

// Вычисление первых 10, 20 и 30 чисел Фибоначчи с помощью итерации
const mValues = [10,20,30];
for (const n of mValues) {
  const resultIterative = fibonacciIterative(n);
  console.log(`Первые ${n} чисел Фибоначчи (итерация):`, resultIterative);
}

// 5.Рекурсивный подход имеет высокую стоимость в виде большого количества повторных вычислений, что делает его неэффективным для больших значений n. Каждый вызов рекурсивной функции требует множества дополнительных вызовов для вычисления чисел Фибоначчи, что приводит к большому количеству вызовов функции.