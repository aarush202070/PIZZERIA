shownamevariable = ["Chicken Tandoreee", "Chocarosa Pizza"," Chicken Biiyane Pizza", "Allo Tikka"];

function sumit(){ 

    document.getElementById("display_name").innerHTML=shownamevariable ;
    shownamevariable.sort();
    shownamevariable.push(name_4)
}
function sumitm(){
    var name_4=document.getElementById("input").value;
    shownamevariable.push(name_4)
    shownamevariable.sort();
    document.getElementById("kill").innerHTML=shownamevariable ;
}
