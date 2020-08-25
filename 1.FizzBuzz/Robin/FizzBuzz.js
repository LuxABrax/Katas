const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            if(i.toString().split('').includes('5')) {
                console.log('FizzBuzz');
                continue;
            }
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            if(i.toString().split('').includes('3')) {
                console.log('FizzBuzz');
                continue;
            }
            console.log('Buzz');
            continue;
        }
        
        let nums = i.toString().split('');

        if (i.length >= 2 && nums.contains('3')) {
            console.log('Fizz');
            continue;
        }

        console.log(i);
    }
}

const checkIfContains = (num, isNumContained) => {

}

fizzBuzz(100);
let num = 35;
let nums = num.toString().split('');
console.log(nums)
console.log(nums.includes('3'));
