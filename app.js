const boxes = document.querySelectorAll('.box');
window.onload = function(){showFirstBoxes()}
window.addEventListener('scroll', showBoxes)
let index = 2


function showFirstBoxes(){
    boxes.forEach((box) =>{
        boxes[0].classList.remove('hide')
        boxes[1].classList.remove('hide')
        boxes[2].classList.remove('hide')
    })
}
function showBoxes(){
    const indicator = window.innerHeight / 5 * 4

boxes.forEach((box) =>{
    const boxBorder =box.getBoundingClientRect().top
if(boxBorder < indicator){
        box.classList.remove('hide')
        box.classList.add('show')

}else{
 box.classList.add('hide')
 box.classList.remove('show')


}})
index++

}
