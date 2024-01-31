const inputElement = document.getElementById("txttask");
const sub = document.getElementById("sub");
const results = document.getElementById("results");

sub.addEventListener("click", (e)=>{
    e.preventDefault();
    const listItem = document.createElement("li");
    const addItem = document.createElement("span");
    const deleteButton = document.createElement("button");
    const doneButton = document.createElement("button");

    addItem.classList.add("item");
    addItem.innerText = inputElement.value;

    deleteButton.classList.add("del");
    deleteButton.innerText = "Del";

    doneButton.classList.add("done");
    doneButton.innerText = "Done";

    listItem.appendChild(addItem);
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);
    results.appendChild(listItem);

    deleteButton.addEventListener("click", ()=> {
        results.removeChild(listItem)
    });

    doneButton.addEventListener("click", ()=> {
        alert("done");
    });

});



