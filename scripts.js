/* Codigo DevClub

const convertButton = document.querySelector(".convert-button")

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
        const currencySelect = document.querySelector(".currency-select")
        const inputCurrencyValues = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")
        const currencyCurrency = document.querySelector(".currency-currency")
        const currencyImg = document.querySelector(".currency-img")

        if (currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = "0,00 €"
            currencyCurrency.innerHTML = "Euro"
            currencyImg.src = "./assets/euro.png"
        }
        if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = "US$ 0,00"
            currencyCurrency.innerHTML = "Dolar"
            currencyImg.src = "./"
        }
        
        

        if (campo == "input-currency"){        
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(document.querySelector(".input-currency").value) 
    
            const dolarDay = 5.20
            if (currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValues / dolarDay) 

        }else if (currencySelect.value == "euro"){
            const euroDay = 5.44
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValues / euroDay)

        }
    
        }
    

    
}