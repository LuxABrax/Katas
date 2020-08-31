function nSpiral(n) {
    // Create empty n*n Array
    const spiral = new Array(n).fill().map(() => new Array(n).fill(""));
    // Init vars for count, row and column with start and end
    let num = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    while (rowStart <= rowEnd && colStart <= colEnd) {
        // Fill left => right
        for (let i = colStart; i <= colEnd; i++) {
            spiral[rowStart][i] = num;
            num++;
        }
        // Fill top => bottom
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            spiral[i][colEnd] = num;
            num++;
        }
        // Fill right => left
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            spiral[rowEnd][i] = num;
            num++;
        }
        // Fill bottom => top
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            spiral[i][colStart] = num;
            num++;
        }
        colStart++;
    }
    console.table(spiral);
}

nSpiral(5);
