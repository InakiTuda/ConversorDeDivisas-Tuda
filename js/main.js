const currency_one_el = document.getElementById("currency-one");
const currency_two_el = document.getElementById("currency-two");
const amount_one_el = document.getElementById("amount-one");
const amount_two_el = document.getElementById("amount-two");

const swap_btn = document.getElementById("swap");
const rate_el = document.getElementById("rate");

//Listeners
currency_one_el.addEventListener("change", calculate);
currency_two_el.addEventListener("change", calculate);
amount_one_el.addEventListener("input", calculate);
amount_two_el.addEventListener("input", calculate);

// Funcion
function calculate() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one_el.value}`)
    .then(res => res.json())
    .then((data) => {
        const rate = data.rates[currency_two_el.value];
        rate_el.innerText = `1 ${currency_one_el.value} = ${rate} ${currency_two_el}`
        amount_two_el.value = (amount_one_el.value * rate).toFixed(2);
    });
}

swap_btn.addEventListener("click", () => {
    const temp = currency_one_el.value;
    currency_one_el.value = currency_two_el.value
    currency_two_el.value = temp;
    calculate();
});

calculate()