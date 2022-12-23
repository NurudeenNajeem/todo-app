var form = document.getElementById("addForm")
var itemList = document.getElementById("items")

var filter = document.getElementById('filter')

filter.addEventListener('keyup', filterItem)
form.addEventListener('submit',addItem)
itemList.addEventListener('click', removeItem)

function addItem(e){
    e.preventDefault()

    var newItem = document.getElementById("item").value

    //Create li
    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    
    // Create delete botton

    // Creat a delete class
    var delBtn = document.createElement('button')
    delBtn.className = "btn btn-danger btn-sm float-right delete"
    delBtn.appendChild(document.createTextNode('X'))

    li.appendChild(delBtn)

    //Add to Itemlist
    itemList.appendChild(li)
    document.getElementById("item").value= ""

}

// Remove item from the list
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you to delete')){
            var li = e.target.parentElement
            itemList.removeChild(li)
        }

    }
}

function filterItem(e){
    var text = e.target.value.toLowerCase()
    var items = itemList.getElementsByTagName('li')

    // convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'


        }
    })

}