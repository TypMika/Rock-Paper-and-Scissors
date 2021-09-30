

const computerPlay = () => {
    let options =  [ 'rock','paper','scissors'];

    return options[Math.floor(Math.random()*options.length)];
}

const roundMatch =  (str1,str2) => {
     let playerSelection = str1.toLowerCase();
    let computerSelection = str2;

    if (playerSelection ==="scissors" && computerSelection === "rock"){
        return "You lose rocks beats scissors";
    }else if (playerSelection ==="scissors" && computerSelection === "paper"){
        return "You win scissors beats paper";
    }
    else if (playerSelection ==="scissors" && computerSelection === "scissors"){
        return "Draw";
    }else  if (playerSelection ==="paper" && computerSelection === "rock"){
        return "You win paper beats rock";
    }else if (playerSelection ==="paper" && computerSelection === "paper"){
        return "Draw";
    }
    else if (playerSelection ==="paper" && computerSelection === "scissors"){
        return "You lose scissors beats paper";
    
    }else  if (playerSelection ==="rock" && computerSelection === "rock"){
    return "Draw";
    }else if (playerSelection ==="rock" && computerSelection === "paper"){
    return "You lose paper beats rock";
    }
    else if (playerSelection ==="rock" && computerSelection === "scissors"){
    return "You win rock beats scissors";
    } 
}




const game = () =>{
    
    var victories = 0;
        var draws =0;
        var loses=0;
    for (let i = 0; i<=5 ; i++){
        let playerDesicion = prompt("Escoja su jugada");

         result =roundMatch(playerDesicion,computerPlay())
         console.log(result);    
       
         if (result.includes('win')===true) {
            victories++;
         
         }else if (result.includes('Draw')===true){
            draws++;
         }else if (result.includes('lose')===true){
             loses++;
         }

        

    }
    if (victories > draws && victories > loses) {
        console.log("You win with "+victories+'victories')
    }else if(loses > victories && loses> draws)

    {
        console.log("You lose");
    }
    else {
        console.log("Draw");
    }
    
}

game();