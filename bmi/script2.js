const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
 e.preventDefault(); // so that uttin submit dabae tabh hi le, event call hote hi nhi

 const height=parseInt(document.querySelector('#height').value)
 // as string m lega input form se toh convert to int
 const weight=parseInt(document.querySelector('#weight').value)
 const results= document.querySelector('#results')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the constraints
    if (bmi < 18.6) {
        message= `<span> you are underweight</span>`;
    }
    else if (bmi >= 18.6 && bmi<=24.6) {
        message= `<span> Bmi is perfect</span>`;
    }
    else{
         message= `<span> you re Overweight</span>`;
    }
    //show the result
    results.innerHTML = `THE BMI IS:<span>${bmi} and ${message}</span>`;
  }

});

