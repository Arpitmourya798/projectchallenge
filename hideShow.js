const innr=document.getElementById("innr");
     const innr2=document.getElementById("inn");
      const innr3=document.getElementById("innr3");
      const pls=document.getElementById("pls");
      const minus=document.getElementById("minus");
      const multi=document.getElementById("multi");
      innr.style.display="none";
       innr2.style.display="none";
        innr3.style.display="none";
 const pll=document.getElementById("pls");
 function fun(){
    if(innr.style.display==="none"){
        innr.style.display="block";
        pls.innerHTML="-";
    }
    else{
        innr.style.display="none";
        pls.innerHTML="+";
    }
}
 function fun1(){
    if(innr2.style.display==="none"){
        innr2.style.display="block";
        minus.innerHTML="-";
    }
    else{
        innr2.style.display="none";
        minus.innerHTML="+";
    }
}
 function fun2(){
    if(innr3.style.display==="none"){
        innr3.style.display="block";
        multi.innerHTML="-";
    }
    else{
        innr3.style.display="none";
        multi.innerHTML="+";
    }
}



