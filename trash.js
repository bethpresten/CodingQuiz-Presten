function addPersonToList(event) {
    event.preventDefault();
    var name = nameEl.value;
    var li = document.createElement("li");
    li.id = people.length;
    li.innerHTML = name + " <button>edit</button>";
    people.push({ name: name });
    peopleListEl.append(li);
}

if (event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
}