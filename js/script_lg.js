let text= document.getElementById('text');
let btn= document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY
    text.style.marginTop= value*1.25 + 'px';
    btn.style.marginTop= value*1.25 + 'px';
})

