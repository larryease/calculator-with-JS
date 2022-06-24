var x,y,z,oper;
x = parseFloat(prompt("Type first number"));
y = parseFloat(prompt("Type second number"));
  oper=prompt("Type an operator");

  if(oper=="+"){
    z=(x+y);
    alert('the sum of the numbers is: ' +  z);
  }


  else if(oper=="/"){
    z=(x/y);
    alert('the division of the numbers is: ' +  z);
  }
  else if(oper=="*"){
    z=(x*y);
    alert('the multiplication of the numbers is: ' +  z);
  }
  else if(oper=="-"){
    z=(x-y);
    alert('the subtraction of the numbers is: ' +  z);
  }
  
