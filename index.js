let input=document.getElementById('input');
let btn=document.getElementById('btn');
let wrng=document.querySelector('.wrng');
let gusses=document.getElementById('guesses');
let answer=Math.floor(Math.random()*100)+1;
console.log(answer);
let numguesses=0;
btn.addEventListener('click',()=>{
    guessnumber();
})
function guessnumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML="Enter between 1 And 100"; 
    }
    else{
        numguesses++;
        gusses.innerHTML="The Number of times gusses Number:"+numguesses;
        if(input.value<answer){
            wrng.innerHTML="Guess number too low";
            input.value=" ";        
        }
        else if(input.value>answer){
            wrng.innerHTML="Guess number too high";
            input.value=" "; 
        }
        else{
            wrng.innerHTML="Congratulations you match the Number";
            setTimeout(()=>{
                resetGame();
                wrng.innerHTML=" ";
            },1000);

        }

    }
    function resetGame(){
          numguesses=0;
        answer=Math.floor(Math.random()*100)+1;
        input.value=" ";
        gusses.innerHTML="The Number of times gusses Number:0";
    }
}
