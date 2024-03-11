/* const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
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


window.oninput = function(event){
    var campo = event.target.id;

    if (campo == "input-currency"){
        const inputCurrencyValues = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")
        
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(document.querySelector(".input-currency").value) 

        const dolarDay = 5.20
        const valuesConvert = inputCurrencyValues / dolarDay

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valuesConvert)

        


    }
}