
//- Build an expense tracker to add, view, and delete expenses.
//  - Implement local storage to save data.

let ExpenseData =  JSON.parse(localStorage.getItem("ExpenseData")) || [];
const expenseTableBody = document.getElementById('expense_table_body');



document.getElementById("expense_form").addEventListener("submit", function (event) {
    event.preventDefault();
    let expense = {
        amount: document.getElementById("Amount").value,
        date: document.getElementById("Date").value,
        category: document.getElementById("Category").value,
    }

    
    if (expense.amount <= 0 || !expense.date || !expense.category) {
        alert("Please enter valid data");
        return;
    }
    
    ExpenseData.push(expense);
    localStorage.setItem("ExpenseData", JSON.stringify(ExpenseData));


    renderData(ExpenseData);
    document.getElementById("expense_form").reset();
})

renderData(ExpenseData);



console.log(ExpenseData);


function renderData(dataArray) {
    expenseTableBody.innerHTML = ''; 
    dataArray.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${data.amount}</td>
            <td class="px-6 py-4 whitespace-nowrap">${data.date}</td>
            <td class="px-6 py-4 whitespace-nowrap">${data.category}</td>
            <td class="px-6 py-4 whitespace-nowrap">
            <button class="delete-btn inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onclick="deleteExp(${dataArray.indexOf(data)})">Delete</button>
            
            
            </td>    
            `
        expenseTableBody.appendChild(row);
    });



}
function deleteExp(index) {
    if (confirm("Are you sure you want to delete this expense?")) {
        ExpenseData.splice(index, 1);
        localStorage.setItem("ExpenseData", JSON.stringify(ExpenseData));
        renderData(ExpenseData);
    }
}
