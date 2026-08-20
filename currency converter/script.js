const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlage(evt.target);
    });
}
const updateFlage = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = Number(amount.value);
    if (!Number.isFinite(amtValue) || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
    }
    const fromCode = fromCurr.value.toLowerCase();
    const toCode = toCurr.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCode}.json`;
    const message = document.querySelector(".msg");

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        const rate = data[fromCode]?.[toCode];
        if (typeof rate !== "number") {
            throw new Error(`Rate unavailable for ${fromCurr.value} to ${toCurr.value}`);
        }

        message.innerText = `${amtValue} ${fromCurr.value} = ${(amtValue * rate).toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        message.innerText = "Unable to get exchange rate. Please try again.";
        console.error(error);
    }
});


