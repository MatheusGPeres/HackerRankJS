function birthdayCakeCandles(candles) {
    let alturaMaiorVela = 0;
    let quantidadeMaiorVela = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > alturaMaiorVela) {
            alturaMaiorVela = candles[i];
            quantidadeMaiorVela = 1;
        }
        else if (candles[i] === alturaMaiorVela) {
            quantidadeMaiorVela++;
        }
    }
    return quantidadeMaiorVela;
}
