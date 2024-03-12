/* Codigo DevClub

const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyImg = document.querySelector(".currency-img")
    const dolarDay = 5.20    
    const valuesConvert = inputCurrencyValues / dolarDay
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valuesConvert)
}
convertButton.addEventListener("click", convertValues) */

window.oninput = function (event) {
    var campo = event.target.id;
    const currencySelect = document.querySelector(".currency-select");
    const inputCurrencyValues = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const currencyCurrency = document.querySelector(".currency-currency");
    const currencyImg = document.querySelector(".currency-img");

    const dolarDay = 4.97;
    const euroDay = 5.43;
    const bitcoinDay = 352309.32;
    const libraDay = 6.36;

    if (currencySelect.value == "euro") {
        currencyCurrency.innerHTML = "Euro";
        currencyImg.src = "./assets/euro.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / euroDay);
    }
    if (currencySelect.value == "dolar") {
        currencyCurrency.innerHTML = "Dolar";
        currencyImg.src = "./assets/usa.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / dolarDay);
    }
    if (currencySelect.value == "bitcoin") {
        currencyCurrency.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        }).format(inputCurrencyValues / bitcoinDay);
    }
    if (currencySelect.value == "libra") {
        currencyCurrency.innerHTML = "Libra";
        currencyImg.src = "./assets/libra.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrencyValues / libraDay);
    }

    if (campo == "input-currency") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(document.querySelector(".input-currency").value);

    }
};
