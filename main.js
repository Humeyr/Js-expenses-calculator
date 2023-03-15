const priceInput = document.getElementById("price");
const expenseInput = document.getElementById("expense");
const addBtn = document.getElementById("addBtn");
const list = document.querySelector(".list")
const payCheckbox = document.getElementById("payment")
const totalSpan = document.getElementById("total")
addBtn.addEventListener("click" ,addExpense);

list.addEventListener("click" ,handleClick)

let expenses = []




function updateTotal(){
    var total = expenses.reduce((total,price)=> total + price,0);
    totalSpan.innerText = total;
}

console.log(total)

console.log(expenses)
function addExpense(event){
    event.preventDefault(); 

    

    if (!priceInput.value || !expenseInput.value){
        alert("Please fill in the blanks");
        return;
    }


   
    const itemBox = document.createElement("div");
    itemBox.classList.add("item");

    if(payCheckbox.checked){
        itemBox.classList.add("paid");

    }

    itemBox.innerHTML =   `
    <h1>
        ${expenseInput.value}
    </h1>
    <h2>
        ${priceInput.value}
    </h2>
    <div>
        <img id="edit" src="pay.png" alt="">
        <img id="delete" src="delete.png" alt="">
    </div>
    `;
list.appendChild(itemBox);

expenses.push( Number(priceInput.value))
updateTotal()





priceInput.value =  '';
expenseInput.value =  '';
}

function handleClick(e){
    const element = e.target
    console.log(element)
    if(e.target.id == "delete"){
        console.log(e.target.id)
        const expense = element.parentElement.parentElement;
        expense.remove();
        const substructured = expense.querySelector('h2').innerText;
        expenses.push(-Number(substructured));
        updateTotal()

    }
}
