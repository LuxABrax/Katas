function multiTable(n) {
  const mtable = [];
  for (let i = 0; i <= n; i++) {
    let row = [];
    for (let j = 0; j <= n; j++) {
      let res = i * j;
      row.push(res);
    }
    mtable.push(row);
    row = [];
  }
  console.table(mtable);
}

multiTable(10);
