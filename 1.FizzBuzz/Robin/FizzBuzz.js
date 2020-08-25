const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            if(i.toString().split().includes('5')) {
                console.log('FizzBuzz');
                continue;
            }
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }

        if (i.length >= 2) {
            let nums = i.toString().split();

            if (nums.contains('3') && nums.contains('5')) {
                console.log('FizzBuzz');
            } else if (nums.contains('3')) console.log('Fizz');
            
            continue;
        }

        console.log(i);
    }
}

const checkIfContains = (num, isNumContained) => {

}

fizzBuzz(100);