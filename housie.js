let allele=document.querySelectorAll(".bg-info");
let gnratebtn=document.getElementById("gnratebtn");
let randval=document.getElementById("randval");
let history=document.getElementById("history");
let garr=new Array(),acount=0,checkres;  //garr=>global array:)
let coun=0; //coun=first element inserting:)
let no_of_times_gnrate=0;

/*garr=>global array,coun=first element inserting,
acount=>another count val in check-function,
checkres=>global res i.e we use in recursive (value will be changed for every recursive call)*/

const background_clr=(value)=>{
   var speech = new SpeechSynthesisUtterance();
   speech.lang = "en";
   speech.text = `${value}`;
   window.speechSynthesis.speak(speech);
   allele.forEach(ele=>{
      if(value>9)
      {
         if(ele.innerHTML==value){
            ele.classList.add("bg-success");
            ele.classList.remove("bg-info");
         }
      }
      else{
         if((ele.innerHTML)==("9"+value)){ // 9+ value(1,2,3,4,5....) means innerHTML was 91,92,93,94,95.........:)
            ele.classList.add("bg-success");
            ele.classList.remove("bg-info");
         }   
      }
   });
   (history.innerHTML!="")?(history.innerHTML+=` >> ${value}`):history.innerHTML+=value;
}

gnratebtn.addEventListener("click",()=>{
   no_of_times_gnrate+=1;
   if(no_of_times_gnrate<=90)
   {
      let res=Math.floor(Math.random()*90)+1,count=0,ares;
      coun+=1;
      if(coun==1){   //coun=first element inserting:)
         garr.push(res);
         randval.innerHTML=res;
      }
      if(coun>1){
         for(let i=0;i< garr.length;i++){
            if(garr[i]==res){
               ares=checkfunc();
               count=0;
               break;
            }
            else
               count=1;
         }
         if(count==1){
            garr.push(res);
            randval.innerHTML=res;
         }
         else{
            garr.push(ares);
            randval.innerHTML=ares;
         }
      }
      if(!isNaN(randval.innerHTML)){
         background_clr(randval.innerHTML);
      }
   }
   else{
      gnratebtn.innerHTML="All Numbers are Generated";
      var speech = new SpeechSynthesisUtterance();
      speech.lang = "en";
      speech.text = "All Numbers are Generated press reset button to play again";
      window.speechSynthesis.speak(speech);
   }
});

// Recursive function:)
let checkfunc=()=>{
   let randnmbr=Math.floor(Math.random()*90)+1;
   for(let i=0;i< garr.length;i++)
   {
      if(garr[i]==randnmbr){
         checkfunc();
         acount=0;   //acount=>another count val in check-function:)
         break;
      }
      else{
         acount=1;
      }
   }
   if(acount==1){
     checkres=validfunc(randnmbr);
   }
   return checkres;  //checkres=>global res i.e we use in recursive (value will be changed for every recursive call):)
}

//Return value which is not repeated and stores in checkres:)
let validfunc=(randvalid)=>{
   return randvalid;
}

//when resizing the screen:)
window.addEventListener("resize",()=>{
   if($("body").innerWidth()<"851")
   {
      allele.forEach(ele=>{
         ele.classList.add("me-3");
         ele.classList.remove("me-4");
      });
   }
   else if($("body").innerWidth()>"991" || $("body").innerWidth()>"1000")
   {
      allele.forEach(ele=>{
         ele.classList.add("me-3");
         ele.classList.remove("me-4");
      });
   }
   else
   {
      allele.forEach(ele=>{
         ele.classList.remove("me-3");
         ele.classList.add("me-4");
      });
   }
});

//when document is loaded:)
   if($("body").innerWidth()<"851")
   {
      allele.forEach(ele=>{
         ele.classList.add("me-3");
         ele.classList.remove("me-4");
      });
   }
   else if($("body").innerWidth()>"991" || $("body").innerWidth()>"1000")
   {
      allele.forEach(ele=>{
         ele.classList.add("me-3");
         ele.classList.remove("me-4");
      });
   }
   else
   {
      allele.forEach(ele=>{
         ele.classList.remove("me-3");
         ele.classList.add("me-4");
      });
   }
