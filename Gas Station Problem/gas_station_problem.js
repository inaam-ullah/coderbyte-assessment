function GasStation(strArr) {
    let tank = 0, startStation = 0, totalGas = 0, totalCost = 0;

    for (let i = 1; i <= strArr[0]; i++) {
        const [gas, cost] = strArr[i].split(':').map(Number);
        totalGas += gas;
        totalCost += cost;
        tank += gas - cost;
        if (tank < 0) {
            tank = 0;
            startStation = i;
        }
    }
    return totalGas < totalCost ? "impossible" : (startStation % strArr[0]) + 1;
}

// Test cases
console.log(GasStation(["4", "1:1", "2:2", "1:2", "0:1"])); // Output: impossible
console.log(GasStation(["4", "0:1", "2:2", "1:2", "3:1"])); // Output: 4
