var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event

form.addEventListener('submit', addItem);

//Add item
function addItem(e){
    e.preventDefault();

    console.log(1);
}