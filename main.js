let  output='';
let calculation = [];
let  stringFormat;
let finalCalculation = 0;
let changeInput = document.getElementById('enter');
let clickx = document.querySelectorAll('.row');
let evaluate = document.getElementById('number-equalto');
clickx.forEach((r)=>{
    r.addEventListener('click',(e)=>{
        output = e.target.innerText;
        calculation.push(output);
        cal(output);

        
    });
});




function cal(output){
    if (output == '='){
       calculation = calculation.slice(0,-1);
    }
    else if ( output == 'DEL'){
        calculation = calculation.slice(0,-2);
    }
    else{
        calculation;
    }
    console.log(calculation);
     if (output =='AC'){
    finalCalculation = 0;
    stringFormat='';
    calculation = [];
    input(finalCalculation);

    }
    else{
        stringFormat = calculation.join('').replace(/\s+/g, '');
        if (output == '='){
            try{
                finalCalculation = eval(stringFormat);
                console.log(finalCalculation,stringFormat);
            }
            catch{
                finalCalculation = 'ERROR#';
            }
        
        }
        input(finalCalculation,stringFormat);
    }

}

function input(finalCalculation,stringFormat){
   let click1 = document.getElementById('enter');
   if (output =='='){
    console.log(click1.value = finalCalculation);

   }else if(output!='AC'){
  
   console.log(click1.value = stringFormat);
   }
   else{
    console.log(click1.value = finalCalculation);

   }

};



/*let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('btn'))

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'Del':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});*/