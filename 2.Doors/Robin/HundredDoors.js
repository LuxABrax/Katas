let doors = [];

const createDoors = (numOfDoors) => {
    for (let i = 1; i <= numOfDoors; i++) {
        doors.push(false);
    }
}


const doorKata = () => {
    for (let i = 1; i <= 100; i++) {
        for (let y = 1; y <= 100; y++) {
            if (i * y - 1 >= 100) break;
            doors[i * y - 1] = !doors[i * y - 1];
        }
    }
}


createDoors(100);
doorKata();

doors.forEach((door, i) => console.log(i + 1 + ': ' + door));
