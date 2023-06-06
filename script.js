function output()
{
    let x=Number(document.getElementById("loop").value);
    
    for (i = 0; i < x; i++) {
        
        document.getElementById("demo").innerHTML+="<br>Loop Numbers are"+" " +i;
    }
    
}

function output2()
{
    let y=Number(document.getElementById("loop1").value);
    let i=0;
while (i < y) {
    
    i++;
   
  document.getElementById("demo1").innerHTML+="<br>"+ i;
}
}

function output3()
{
    let z=Number(document.getElementById("loop2").value);
    let i=0;
do {
     
  document.getElementById("demo2").innerHTML+="<br>"+ i;
  i++;
}while(i<z);

}


function output4()
{
    let a=Number(document.getElementById("loop3").value);
    
    for (let i = 0; i < a; i++) {
        if (i === 6) { break; }
        a += "The number is " + i + "<br>";
        document.getElementById("demo3").innerHTML = i;
      }
      
      
}