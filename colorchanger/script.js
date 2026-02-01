// GOAL to select all the buttons and body

const buttons= document.querySelectorAll('.button')
const body= document.querySelector('body')

// GOAL to add event listener to each button
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        //console.log(e);
       // isse hume exact pata chal raha kaunse span m click kia gaya hai... console.log(e.target);
       if(e.target.id=='grey'){
        body.style.backgroundColor=e.target.id
        
       }
       if(e.target.id=='pink'){
        body.style.backgroundColor=e.target.id;
       }
       if(e.target.id=='blue'){
        body.style.backgroundColor=e.target.id;
       }
       if(e.target.id=='yellow'){
        body.style.backgroundColor=e.target.id;
       }
    })

//evnt khtm    
}
);

// my bchodi
const result=document.getElementById('result');
buttons.forEach(function (button){
    button.addEventListener('click',function(e){
        result.innerHTML='You have selected '+ e.target.id + ' color'
    });
});
