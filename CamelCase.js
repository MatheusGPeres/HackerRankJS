function camelcase(s) {
    let contaPalavras = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            contaPalavras++;
        }
    }
    return contaPalavras;
}
