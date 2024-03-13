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
