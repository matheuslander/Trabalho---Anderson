function soma() {
    const inputOneValue = parseInt(document.querySelector(".inputOne").value);
    const inputTwoValue = parseInt(document.querySelector(".inputTwo").value);
    const result = inputOneValue + inputTwoValue;
    document.getElementById("paragrafo").innerHTML = "Resultado: " + result;
}
