
let h2=document.querySelector("h2");

let gamseq =[];
let userseq =[];
let btns=["red","green","purple","yellow"];

let gamestarted=false;
let level=0;
let highscore=[];
function highest (){
    let max=highscore.reduce((res,ele)=>{
        if(res<=ele){
            return ele;
        }
        else{
            return res;
        }
    })
    return max;
}

document.addEventListener("keypress",()=>{

    if(gamestarted==false){
        console.log("game started");
        gamestarted=true;
        
        levelup();

    }
    

})


function btnflash(btn){
    btn.classList.add("flash");  
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
    
}
function levelup(){
    userseq=[];
    level++;
    highscore.push(level);
    h2.innerText = `level ${level}`; 

    //random color
    let randomidx=Math.floor(Math.random()*4);
   
    let randcolor = btns[randomidx];
   
    gamseq.push(randcolor);
    let rnbtn =document.querySelector(`.${randcolor}`);
  
    btnflash(rnbtn);  
    
    

}

function checkans(idx){
    // let idx=level-1;
    if( gamseq[idx]===userseq[idx]){
        if(userseq.length === gamseq.length){
            setTimeout(levelup,1000);
        }
       

    }
    else{
     h2.innerText = `Gave over `; 
     let body =document.querySelector('body');
     body.classList.add("alert");
 
     setTimeout(()=>{ 
        body.classList.remove("alert");
     },150)
     setTimeout(()=>{
     userseq=[];
     gamseq=[];
     
    
     h2.innerText = `Press any Key to restart the game
     The score was ${level} and highest score was ${highest ()}  `; 
     gamestarted=false;
     level=0;
     },2000)

    }

}

function btnpress(){
    let btn= this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);


}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}