const monthSelect = document.querySelector("#month");
const yearSelect = document.querySelector("#year");
const months = ["01","02","03","04","05","06","07","08","09","10", "11","12"]
const years = [2022, 2023, 2023, 2024, 2025, 2026, 2027, 2028, 2028, 2029, 2030 ]

    months.forEach(item =>{
        const option = document.createElement("option");
        option.textContent = item
        monthSelect.appendChild(option)
    });
    years.forEach(item =>{
        const option = document.createElement("option");
        option.textContent = item
        yearSelect.appendChild(option);
    });

