const clock=document.getElementById('clock')

// har sec run kare uske lie func call remember=
 setInterval(function(){
    let date= new Date() // build in
    clock.innerHTML=date.toLocaleTimeString()
 },1000)