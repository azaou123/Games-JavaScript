
var elements = document.body.children
var nbr = Math.floor(Math.random() * 1000)
function validate(){
    let inValue = elements[2]
    function historique(result){
        if (!result){
            let span = document.createElement('span')
            span.innerHTML = inValue.value+' =▶ '
            elements[7].appendChild(span)
        }
        else {
            let span = document.createElement('span')
            span.innerHTML = inValue.value+' = ✔'
            elements[7].appendChild(span)
            elements[1].innerHTML = elements[7].children.length +' atempts !'
            for (let i=2;i<elements.length-1;i++){
                elements[i].style.display = "none"
            }
        }
    }
    if (inValue.value == ''){
        alert('Null Value is not Accepted !')
    }
    else if (inValue.value > nbr){
        elements[6].innerHTML = "Greater"
        historique(false)
        inValue.value = ''
    }
    else if(inValue.value < nbr){
        elements[6].innerHTML = "Lower"
        historique(false)
        inValue.value = ''
    }
    else {
        historique(true)
    }
}
