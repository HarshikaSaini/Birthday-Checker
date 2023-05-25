const birthdate = document.getElementById("birthdayDate");
const luckynum = document.getElementById("luckyNum");
const checkbutton= document.getElementById("check");
const finalResult= document.getElementById("output"); 

function CheckingNumberLuckyOrNot(){
    const dob = birthdate.value;
    const sum = calculate(dob); 
    CompareValues(sum , luckynum.value);
}

function CompareValues(sum, luckyNum){
 if(sum%luckyNum===0){
    finalResult.innerText="Your birth date is lucky 😄"
 }
 else{
    finalResult.innerText="Your birth date is not lucky 😒";
 }
}

function calculate(dob){
 dob=dob.replaceAll("-","");
 let sum= 0;
 for(let i=0; i<dob.length; i++){
    sum= sum+ Number(dob.charAt(i));
 }
 return sum;
}


checkbutton.addEventListener("click",  CheckingNumberLuckyOrNot);