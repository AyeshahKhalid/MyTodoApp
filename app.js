var list = document.getElementById("list")
function addItem() {
    var todo_item = document.getElementById("todo-item")
    //create li tag
    var li = document.createElement("li")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)


    //create button tag
    var delbtn = document.createElement("Button")
    var deltext=document.createTextNode("Delete")
    delbtn.setAttribute("onclick","delitem(this)")
    delbtn.setAttribute("class","libtn")
    delbtn.appendChild(deltext)
    

    //create edit button
    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("Edit")
    editbtn.appendChild(edittext)
   

    editbtn.setAttribute("onclick","edititem(this)")
    editbtn.setAttribute("class","libtn")
    var hr = document.createElement("hr")
    li.appendChild(delbtn) 
    li.appendChild(editbtn)
    li.appendChild(hr)
    todo_item.value=""  
    list.appendChild(li)
}
function delitem(e){
    e.parentNode.remove()
}
function refresh(){
list.innerHTML=""
}
function edititem(e){

    e.parentNode.firstChild.nodeValue=prompt("Enter value",e.parentNode.firstChild.nodeValue)

}