let numbers = [12,45,7,23,54,10];
let temp = numbers[0];
let index = 0;
for (let i=0; i<numbers.length; i++ ) {
    if (temp < numbers[i]) {
        temp = numbers[i];
        index = i;
    }
}
console.log(numbers[index]);
console.log(index);
