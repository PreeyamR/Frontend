window.onload = init;

function init() {
	var addButton = document.getElementById("addButton");
	addButton.onclick = addItem;
	var removeButton = document.getElementById("removeButton");
	removeButton.onclick = removeItem;
	var clearButton = document.getElementById("clearButton");
	clearButton.onclick = clearItems;

	for (key in localStorage) {
		addItemToDOM(key, localStorage[key]);
	}
    window.addEventListener("storage", "storageChanged", false);
}
function addItem(e) {
	var key = document.getElementById("key").value;
	var value = document.getElementById("value").value;
	localStorage.setItem(key, value);
	addItemToDOM(key, value);
}

function removeItem(e) {
    var key = document.getElementById("key").value;
    //console.log(key);
	var value = document.getElementById("value").value;
	localStorage.removeItem(key);
	removeItemFromDOM(key);
}

function addItemToDOM(key, value) {
	var items = document.getElementById("items");
    //console.log(items);
	var item = document.createElement("li");
	item.setAttribute("id", key);
	var span = document.createElement("span");
	span.setAttribute("class", "note");
	span.innerHTML = key + ": " + value;
	item.appendChild(span);
	items.appendChild(item);
}
function removeItemFromDOM(key) {
	var item = document.getElementById(key);
	item.parentNode.removeChild(item);
}
function clearItems() {
	localStorage.clear();
	var itemsList = document.getElementById("items");
	var items = itemsList.childNodes;
	for (var i = items.length-1; i >= 0; i--) {
		itemsList.removeChild(items[i]);
	}

}

function storageChanged(e) {
	console.log("Event: key is " + e.key);
	console.log("Event: value is " + e.value);
}
