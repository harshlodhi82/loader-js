var elm1 = document.getElementById('elm1');
var elm2 = document.getElementById('elm2');
var elm3 = document.getElementById('elm3');

var i=0;
setInterval(()=>{
    if(i===0){
        elm1.style.visibility = 'visible'
        elm2.style.visibility = 'hidden'
        elm3.style.visibility = 'hidden'
        i=1 
    }else if(i===1){
        elm1.style.visibility = 'hidden'
        elm2.style.visibility = 'visible'
        elm3.style.visibility = 'hidden'
        i=2
    }else if(i===2){
        elm1.style.visibility = 'hidden'
        elm2.style.visibility = 'hidden'
        elm3.style.visibility = 'visible'
        i=0
    }
},100)