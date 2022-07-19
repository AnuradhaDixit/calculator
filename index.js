var buttons = document.querySelectorAll("input");
var display = document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
            var value=this.getAttribute('data-value')
            console.log(value)
            if(value == '/'){
                operator='/';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";

            }else if(value=='*'){
                operator='*';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";

            }else if(value=='-'){
                operator='-';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";

            }else if(value=='+'){
                operator='+';
                operand1 = parseFloat(display.textContent);
                display.textContent = "";

            }else if(value=='='){
                // operator='=';
                operand2 = parseFloat(display.textContent);
               
                var result = eval(operand1 +  operator + operand2);
                display.textContent = result;
                  
            }else if (value == "AC") {
                display.textContent = "";
            }
                else{
                display.innerText += value;
            }
    })
}




