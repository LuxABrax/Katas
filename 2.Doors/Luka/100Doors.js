function theDoors(n) {
    //Create Array of Doors with id and state
    let doors = new Array(n);
    let res = [];
    for (let i = 0; i < n; i++) {
        doors[i] = { id: i + 1, state: false };
    }
    // Toggle doors
    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j < n; j += i) {
            doors[j].state = !doors[j].state;
        }
    }
    // Check doors states
    for (let i = 0; i < n; i++) {
        if (doors[i].state) {
            res.push(doors[i].id);
        }
    }
    console.log(doors);
    console.log("Opened doors: " + res);
    return res;
}
theDoors(100);
