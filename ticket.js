let seatnumber =40;
setinnText('totalseat',seatnumber); 
let count=0;
let  perprice=550;
function sumfunction(){
    count=count+1
    const previousTotal = document.getElementById("total-cost").innerText;  
    const convertedPrice = parseInt(perprice);
    const sum =  convertedPrice *count;
    document.getElementById("total-cost").innerText = sum;
    document.getElementById("total-grand").innerText = sum;
}
const btn=document.getElementsByClassName("btn");
for( let btns of btn){
    btns.addEventListener('click',(event)=>{
      const a1 = event.target.parentNode.childNodes[0].innerText;
     console.log(a1)
     let totalPrice=document.getElementById("total")
    const seatcreate=document.getElementById("seatcreate");

     const divelement=document.createElement("div");
     const p1=document.createElement("p");
     const p3=document.createElement("p");
     const p2=document.createElement("p");
     const p4=document.createElement("p");
     
     divelement.style.display='flex';
     divelement.style.justifyContent='space-between';
     divelement.style.width='550px';
     seatcreate.style.display='block'
     p1.innerText=a1;
     p3.innerText="Ecomice"
     p2.innerText=perprice;
     divelement.appendChild(p1)
     divelement.appendChild(p3)
     divelement.appendChild(p2)
    
     seatcreate.appendChild(divelement);  
     totalPrice.appendChild(divelement)
     event.target.setAttribute("disabled",false);
     event.target.parentNode.style.backgroundColor ="#1DD100";
     event.target.parentNode.style.borderRadius="15px";
     event.target.parentNode.style.Color="white";
     sumfunction(perprice)
     totalseat();

    }); 
}
   function activefunction(){
    const chancebg=document.getElementById('A1');
    chancebg.classList.add('active')
   }
    function totalseat(e){
        if(seatnumber<=1){
            setinnText('totalseat','Emptry');
            
         }else{
            seatnumber=seatnumber-1;
           setinnText('totalseat',seatnumber); 
           
         }   
    }     
function seatSerialnumber(){
  const serialnum= getElementId('Serialnumber')
}

function submitValidation(e){
    const passger=setelemtId('Passenger');
    const Phone=setelemtId('phone').value;
    const email=setelemtId('email').value;

    if(passger===null || passger===""){
        alert("please enter your phone Number")
    
    }
    if(Phone===null || Phone===""){
        alert("please enter your phone Number")
    }
    if(email===null || email===""){
        alert("please enter your phone Number")
    }
    else{
        console.log(passger)
    } 
}
function setelemtId(getElementId){
    const GetelemtId=document.getElementById(getElementId);
    const value=GetelemtId.value;
    const elementid=parseFloat(value);
    return(elementid);
}
function setinnText(InnetextParameter,result){
    const  textparameter=document.getElementById(InnetextParameter);
    textparameter.innerHTML=result;
    
}