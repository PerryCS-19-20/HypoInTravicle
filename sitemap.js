function buildMap(id){
    var container = document.getElementById(id);
    
    var unorderedList1 = document.createElement("ul");
    container.appendChild(unorderedList1);
    var unorderedList2 = document.createElement("ul");
    
    var li1 = append("https://perryma.tk/HypoInTravicle/index.html", "Home Page");
    unorderedList1.appendChild(li1);
    
    var li2 = append("https://perryma.tk/HypoInTravicle/bio.html", "My Autobiography");
    unorderedList1.appendChild(li2);
    
    var li3 = document.createElement("li");
    li3.textContent = "Class Projects";
    unorderedList1.appendChild(li3);
    
    li3.appendChild(unorderedList2);
    
    var li4 = append("https://perryma.tk/HypoInTravicle/404.html", "My 404 page, contains a few games");
    unorderedList2.appendChild(li4);
    
    var li5 = append("https://perryma.tk/HypoInTravicle/htmltest.html", "A place where you can try your own html");
    unorderedList2.appendChild(li5);
    
    var li6 = append("https://perryma.tk/HypoInTravicle/popup.html", "1f j00 cl1ck h3r3, j00 w1ll g3t h@ck3d!!!");
    unorderedList2.appendChild(li6);
    
    var li7 = append("https://perryma.tk/HypoInTravicle/spidermantheme.html", "An interactive Spider-Man Theme Song");
    unorderedList2.appendChild(li7);
    
    var li8 = append("https://perryma.tk/HypoInTravicle/todolist.html", "You can type a to-do list here");
    unorderedList2.appendChild(li8);
}

function append(link, text){
    var a = document.createElement("a");
    var li = document.createElement("li");
    a.href = link;
    a.textContent = text;
    li.appendChild(a);
    return li;
}
