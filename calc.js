function buttonClicked(val){
    document.getElementById("outputscreen").value+=val
}
function equalClicked(){
    var input=document.getElementById("outputscreen").value
    var result=eval(input)
    document.getElementById("outputscreen").value=result
}
function clearField(){
    document.getElementById("outputscreen").value=""
}