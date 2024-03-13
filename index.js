//COMPARE TRIPLETS
function compareTriplets(a, b) {
    let pontosAlice = 0;
    let pontosBob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            pontosAlice++;
        }
        else if (a[i] < b[i]) {
            pontosBob++;
        }
    }
    return [pontosAlice, pontosBob];
}

//BIRTHDAY CAKE CANDLES
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

//BREAKING THE RECORDS 
function breakingRecords(scores) {
    let pontuacaoMin = scores[0];
    let pontuacaoMax = scores[0];
    let quantidadeMinPontos = 0;
    let quantidadeMaxPontos = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < pontuacaoMin) {
            pontuacaoMin = scores[i];
            quantidadeMinPontos++;
        }
        else if (scores[i] > pontuacaoMax) {
            pontuacaoMax = scores[i];
            quantidadeMaxPontos++;
        }
    }
    return [quantidadeMaxPontos, quantidadeMinPontos];
}

//COUNTING VALLEYS
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

//CAMEL CASE
function camelcase(s) {
    let contaPalavras = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            contaPalavras++;
        }
    }
    return contaPalavras;
}