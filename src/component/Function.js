// Створи функцію, яка приймає масив чисел та повертає новий масив,
// в якому кожен елемент є квадратом відповідного елемента вхідного масиву.


function arrayQuatro(arr) {
    const squaredArray = arr.map(value => value * value);
    console.log(squaredArray);
    return squaredArray;
}