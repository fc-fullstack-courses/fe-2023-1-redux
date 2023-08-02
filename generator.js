// Symbol.iterator
/*
  for .. of
  spread
  rest
  destructuring

  const iter = arr[Symbol.iterator]();

  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
*/

// const arr = [1, 2, 3, 4,]

// for (const value of arr) {
//   console.log(value)
// }

/*
  Generator - функція, яка має можливість призупиняти свою роботу
  та повертати якісь проміжні результати
*/

// function notGenerator() {
//   console.log(1);
//   console.log(2);
// }

// const notGenResult = notGenerator();

// console.log(notGenResult);

function* generator() {
  console.log(3);
  yield 'test 1';
  console.log(4);
  yield 'test 2';
  console.log(5);
  yield 'test 3';
  console.log(6);
  return 'generator stopped';
}

// const iter = generator();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// напишіть генератор, який буде повертати числа від 1 до нескінечності. Кожен виклик методу next має збільшити число на 1

function* infiniteNumberGen() {
  try {
    let currentNum = 0;

    while (true) {
      yield ++currentNum;
    }
  } catch (error) {
    console.log(error)
  }
}

const iterator = infiniteNumberGen();

// for(let i = 0; i < 1_000_000; i++) {
//   console.log(iterator.next().value);
// }

// нескінченний цикл
for (const nubmer of iterator) {
  console.log(nubmer);

  if (nubmer === 100) {
    iterator.throw('something')
    // iterator.return('something')
  }
}

