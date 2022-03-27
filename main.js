window.onload = (event) => {
    const rokoChoiceView = document.getElementById('roko-choice');
    const playerChoiceView = document.getElementById('player-choice');
    const possibleChoices = document.querySelectorAll('#wrapper-choice button');
    const resultView = document.getElementById('result');
    let userChoice;
    let rokoChoice;
    let result;
    let userIcon;
    let rokoIcon;
  
    possibleChoices.forEach(possibleChoice =>                        
      possibleChoice.addEventListener('click', (e) => {
      playerChoiceView.innerHTML = "";
      rokoChoiceView.innerHTML = "";
      resultView.innerHTML = "";
      userChoice = e.target.id;
      rokoChoice = generateRokoChoice();
      userIcon = setIcon(userChoice);
      rokoIcon = setIcon(rokoChoice);
      playerChoiceView.innerHTML = userIcon;
      rokoChoiceView.innerHTML = rokoIcon;
      result = getResult(rokoChoice,userChoice);
      resultView.innerHTML = result;
    }));
    
    const generateRokoChoice = () => {
       let randomNum = Math.floor((Math.random() * possibleChoices.length) +1);
       switch(randomNum){
           case(1): 
              rokoChoice = 'paper';
              break;
           case(2): 
              rokoChoice = 'scissors';
              break;
           case(3): 
              rokoChoice = 'rock';
              break;
           default:
              rokoChoice = '';   
       }
      return rokoChoice;
    }
  }

  const setIcon = (choice) => {
   // console.log(choice);
    switch(choice){
      case('rock'):
        return '<i class="fas fa-hand-rock"></i>';
      case('paper'):
        return 'description';
      case('scissors'):
        return 'content_cut';
      default:
        return '';
    }
  }
 
  
  const getResult = (rokoChoice,playerChoice) => {
   
    if (rokoChoice === playerChoice){
      result = "Its a draw";
    }
    
    if (rokoChoice === 'rock' && playerChoice === 'scissors'){
      result = "Roko Win";
    }
    if (rokoChoice === 'rock' && playerChoice === 'paper'){
      result = "Player Win";
    }
    if (rokoChoice === 'scissors' && playerChoice === 'rock'){
      result = "You Win";
    }
     if (rokoChoice === 'scissors' && playerChoice === 'paper'){
      result = "Roko Win";
    }
    if (rokoChoice === 'paper' && playerChoice === 'rock'){
      result = "Roko Win";
    }
    if (rokoChoice === 'paper' && playerChoice === 'scissors'){
      result = "Player Win";
    }
    return result;
   
  }