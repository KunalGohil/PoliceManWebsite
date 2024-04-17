//scroller-button-make js 
function scroller(){
var btn=document.getElementById("scroller");
if(window.pageXOffset>500){
    btn.style.display="block";
}
else{
    btn.style.display="none";
}
}


// function demo(){
//     var test=document.getElementById("hi");

//     if(window.pageYOffset>500){
//         test.style.display="block";
//     }
//     else{
//         test.style.display="none";
//     }
// }