count=0;
let decrease=document.getElementById("Decreasebtn");
let increase=document.getElementById("Increasebtn");
let reset=document.getElementById("reset");

document.getElementById("Decreasebtn").onclick=function(){
         count=count-1;
         document.getElementById("num").textContent=count;
}
document.getElementById("Increasebtn").onclick=function(){
    count=count+1;
    document.getElementById("num").textContent=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("num").textContent=count;
}

