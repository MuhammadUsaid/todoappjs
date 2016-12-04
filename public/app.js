function addItem() {
    var a = document.getElementById("new").value;
    if(a == ""){
        alert("YOU Must Write Something");
    }
    else{
        var b = document.createElement("li");
        var d = document.createTextNode(a);
        b.appendChild(d);
        var e = document.createElement("button");
        e.className = "delete";
        e.appendChild(document.createTextNode("Remove"));
        e.setAttribute("onclick","remove(this.parentNode)");
        b.appendChild(e);
        var c = document.getElementById("list");
        c.appendChild(b);
        document.getElementById("new").value = "";
        var lists = document.getElementsByTagName("li");
        for(var i = 0; i < lists.length; i++){
            lists[i].setAttribute("id","list"+i);
        }
        
    }
}
function deleteAll() {
    document.getElementById("list").innerHTML="";
}
function remove(b) {
    var a = document.getElementById("list");
    a.removeChild(b);
}
