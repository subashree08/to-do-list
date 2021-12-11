function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.body.appendChild(li)


  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("myInput").value = "";
 }

  