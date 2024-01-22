let mycss = false
function btnevent(event, propety, value, value2){
    let textarea = event.parentNode.parentNode.parentNode.childNodes[3]
    mycss = !mycss
     if(mycss){
        event.style[propety] = value
        textarea.style[propety] = value
        event.style.background = "#93c5fd"
     }else{
        event.style[propety] = value2
        textarea.style[propety] = value2
        event.style.background = "none"
     }
}
function textAlign(event, value){
    event.parentNode.parentNode.parentNode.childNodes[3].style.textAlign = value
}
let inputcolor = document.getElementById("input-color").value
function mynumber(event){
    let value = event.value
    event.parentNode.parentNode.parentNode.childNodes[3].style.fontSize = value + "px"
}
function mycolor(event){
    let value = event.value
    event.parentNode.parentNode.parentNode.childNodes[3].style.color = value
}
console.log(inputnumber)
console.log(inputcolor)
function textcase(event){
    mycss = !mycss
    if(mycss){
        event.parentNode.parentNode.parentNode.childNodes[3].style.textTransform = "uppercase"
        event.style.background = "#93c5fd"
    }else{
        event.parentNode.parentNode.parentNode.childNodes[3].style.textTransform = "lowercase"
        event.style.background = "#fff"
    }
}
// document.getElementById("input-number").style