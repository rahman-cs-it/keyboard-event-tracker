let detail1 = document.querySelector('#detail1');
let detail2 = document.querySelector('#detail2');
// console.log(detail1);
// console.log(detail2);



document.addEventListener('keydown',(e)=>{
    console.log(e.key);
    
    detail1.innerHTML= e.key;
    detail2.innerHTML = e.keyCode;
})