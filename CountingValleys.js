function countingValleys(steps, path) {
    let altitude = 0;
    let vales = 0;

    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') {
            altitude++;
        }
        else if (path[i] === 'D') {
            altitude--;
            if (altitude === -1) {
                vales++;
            }
        }
    }
    return vales;
}
