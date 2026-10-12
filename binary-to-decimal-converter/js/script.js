
const binaryInput = document.getElementById("binaryInput");
const convertButton = document.getElementById("convertButton");
const decimalResult = document.getElementById("decimalResult");

// Executa a conversão quando o botão é clicado.
function convertBinaryToDecimal() {
    // Lê o valor digitado e remove espaços nas extremidades.
    const binary = binaryInput.value.trim();

    // Impede uma conversão com o campo vazio.
    if (binary === "") {
        decimalResult.textContent = "Digite um número binário.";
        return;
    }

    // Um número binário só pode conter 0 e 1.
    if (!/^[01]+$/.test(binary)) {
        decimalResult.textContent =
            "Entrada inválida! Use apenas 0 e 1.";
        return;
    }

    // Converte da base 2 para a base 10.
    const decimal = parseInt(binary, 2);

    // Mostra o resultado na página.
    decimalResult.textContent = decimal.toString(10);
}

// Adiciona o evento de clique ao botão.
convertButton.addEventListener("click", convertBinaryToDecimal);

// Permite converter pressionando Enter.
binaryInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convertBinaryToDecimal();
    }
});
