var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

var globalVariables = {} 

function inputLength(){
	return input.value.length;
}

function createListElement(){
  li = document.createElement("li");
  globalVariables.delete_btn = document.createElement("button");
  globalVariables.delete_btn.textContent = "Delete";
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(globalVariables.delete_btn);
  ul.appendChild(li);
  input.value = "";
}

function deleteList(event){
	event.target.parentElement.outerHTML = ""; 
}

function addListAfterKeypress(event){
  if (((inputLength()>0) && (event.which === 13))){
    createListElement();
	globalVariables.delete_btn.addEventListener("click", deleteList);
	}
}

function addListAfterClick(){
  if (inputLength()>0){
    createListElement();
	globalVariables.delete_btn.addEventListener("click", deleteList);
	}
}


function toggleItem(event) {
	  if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleItem);
button.addEventListener("click", addListAfterClick);
	





