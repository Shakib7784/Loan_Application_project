document.getElementById("check").addEventListener("click",function(){
//get value from loan amount
const getInput = document.getElementById("enterAmount");
const StoreInput = getInput.value;
getInput.value="";

console.log(StoreInput);


const GetDisplay = document.getElementById("get").style.display="block";
const getblance = document.getElementById("Amount");
if(StoreInput>=10000 && StoreInput<=19999)
{
    getblance.innerHTML=`50000`;
    getblance.value="";
   
}
else if(StoreInput>= 20000 && StoreInput<= 49999)
{
    getblance.innerHTML=`100000`;
}
else if(StoreInput == 50000)
{
    getblance.innerHTML=`200000`;
}
else if(StoreInput >50000)
{
    getblance.innerHTML=`500000`;
}
else
{
    getblance.innerHTML=` <p id="para">Sorry!!  You are not eligible </p>`
}




})