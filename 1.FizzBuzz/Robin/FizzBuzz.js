const fizzBuzz = (number) => {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }

        if (i.length >= 2) {
            let nums = i.toString().split();

            if ((nums[0] === '3' || nums[1] === '3)') && (nums[0] === '5' || nums[1] === '5')) {
                console.log('FizzBuzz');
                continue;
            }

            nums.forEach(num => {
                if (num === '3') console.log('Fizz');
            });

            continue;
        }

        console.log(i);
    }
}

fizzBuzz(100);