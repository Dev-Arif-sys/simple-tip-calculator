let calcBtn=document.getElementById("calculate")
calcBtn.onclick=()=>{
    let tips=document.getElementById("tips");
    let tipSelected= parseFloat(tips.options[tips.selectedIndex].value);
    let billInput=document.getElementById("bill-input");
    let billAmount= parseFloat(billInput.value);
    let tipResult=document.getElementById("tipAmount");
    let totalBill= document.getElementById("totalBill");
    if(calcBtn.innerText=="Calculate"){

        if(billInput==""){
            alert("enter the bill")
         }else{
             let tipAmount=(billAmount/100)*tipSelected;
             tipResult.innerText=tipAmount;
            totalBill.innerText=tipAmount+billAmount
            calcBtn.innerText="Refresh"
         }
    }else{
        billInput.value="";
        tipResult.innerText="";
        totalBill.innerText="";
        calcBtn.innerText="Calculate"
    }
    
  
  
}


