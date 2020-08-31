const tables = [];
const X = 6;

const createTableHolders = (numOfTables) => {
    for (let i = 0; i < numOfTables; i++) {
        tables.push([]);
    }
}

const createTables = (number) => {
    for (let i = 1; i <= number; i++) {
        for (let y = 1; y <= number; y++) {
            tables[i - 1].push(i * y);
        }
    }
}

createTableHolders(X);
createTables(X);
tables.forEach(table => console.log(table));