/* Codigo DevClub

const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyImgDown = document.querySelector(".currency-img")
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
    const currencySelectConvert = document.querySelector(".currency-select-convert");
    const inputCurrencyValues = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");
    const currencyUp = document.querySelector(".currency-up");
    const currencyDown = document.querySelector(".currency-down");
    const currencyImgUp = document.querySelector(".currency-img-up");
    const currencyImgDown = document.querySelector(".currency-img-down");

    const dolarDay = 4.97;
    const euroDay = 5.43;
    const bitcoinDay = 352309.32;
    const libraDay = 6.36;


    if (currencySelect.value == "euro"){
        currencyDown.innerHTML = "Euro";
        currencyImgDown.src = "./assets/euro.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValues / euroDay);        
    }

    if (currencySelect.value == "dolar") {
        currencyDown.innerHTML = "Dolar";
        currencyImgDown.src = "./assets/usa.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValues / dolarDay);
    }

    if (currencySelect.value == "bitcoin") {
        currencyDown.innerHTML = "Bitcoin";
        currencyImgDown.src = "./assets/bitcoin.png";
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
        }).format(inputCurrencyValues / bitcoinDay);
    }

    if (currencySelect.value == "libra") {
        currencyDown.innerHTML = "Libra";
        currencyImgDown.src = "./assets/libra.png";
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
