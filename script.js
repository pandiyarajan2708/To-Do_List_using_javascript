const addButton = document.getElementById("enter");
const inputField = document.getElementById("input");
const itemList = document.getElementById("items");

addButton.addEventListener("click", addList);

function addList() {
    const newItemText = inputField.value.trim();

    if (newItemText !== "") {
        const newItemDiv = document.createElement("div");
        newItemDiv.classList.add("item"); // Optional: You can add a CSS class for styling

        const itemText = document.createElement("span");
        itemText.textContent = newItemText;

        removeButton.textContent = "X";
        removeButton.classList.add("remove"); 

        removeButton.addEventListener("click", () => {
        });

        newItemDiv.appendChild(itemText);
        newItemDiv.appendChild(removeButton);
        itemList.appendChild(newItemDiv);

        const items = document.querySelectorAll('.item');

        items.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('item-clicked');
            });
        });
        
        inputField.value = "";
    }


   
}
