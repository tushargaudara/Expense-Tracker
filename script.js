let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const name = document.getElementById("expenseName").value.trim();
    const amount = document.getElementById("expenseAmount").value.trim();

    if (name === "" || amount === "") {
        alert("Please enter both expense and amount.");
        return;
    }

    const expenseObj = {
        name,
        amount: Number(amount)
    };

    expenses.push(expenseObj);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    displayExpenses();
    updateTotal();
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
    updateTotal();
}

function displayExpenses() {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    expenses.forEach((exp, index) => {
        list.innerHTML += `
            <div class="expense-item">
                <p>${exp.name} - ₹${exp.amount}</p>
                <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
    });
}

function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById("totalAmount").innerText = total;
}

displayExpenses();
updateTotal();
