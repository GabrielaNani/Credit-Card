const card = document.querySelector(".card");
const cardNumber = document.querySelector(".number");
const numberInput = document.querySelector("#numberInput");
const nameInput = document.querySelector("#nameInput");
const cardName = document.querySelector(".name");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const ccvInput = document.querySelector("#inputCCV");
const cardCcv = document.querySelector(".ccv");
const monthSelect = document.querySelector("#month");
const yearSelect = document.querySelector("#year");
const months = ["01","02","03","04","05","06","07","08","09","10", "11","12"]
const years = [2022, 2023, 2023, 2024, 2025, 2026, 2027, 2028, 2028, 2029, 2030 ]

card.addEventListener("click", ()=>{
    if(card.classList.contains("active")){
        card.classList.toggle("active");
    } else if(!card.classList.contains("active")){
        card.classList.toggle("active");
    }
});

months.forEach(item =>{
    const option = document.createElement("option");
    option.textContent = item
    monthSelect.append(option)
});

years.forEach(item2 =>{
    const option = document.createElement("option");
    option.textContent = item2
    yearSelect.append(option);
});

numberInput.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    numberInput.value = inputValue
        .replace(/\s/g, '')
        .replace(/\D/g, '')
        .replace(/([0-9]{4})/g, '$1 ')
        .trim();
    cardNumber.textContent = inputValue;
    if(cardNumber.textContent === ""){
        cardNumber.textContent = "#### #### #### ####"
    }
});

nameInput.addEventListener('keyup', (e) => {
    let inputValue = e.target.value;
    nameInput.value = inputValue.replace(/[0-9]/g, '');
    nameInput.textContent = inputValue;
    cardName.textContent = inputValue;
    if(inputValue === ''){
        cardName.textContent = 'Card Name';
    }
});

monthSelect.addEventListener('change', (e) => {
    month.textContent = e.target.value;
});

yearSelect.addEventListener('change', (e) => {
    year.textContent = e.target.value;
});

ccvInput.addEventListener('keyup', (e) => {
    if(!card.classList.contains("active")){
        card.classList.add("active");
    }
    cardCcv.textContent = e.target.value;
});