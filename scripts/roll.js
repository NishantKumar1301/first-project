const rollButton = document.querySelector('#statistics button');

function rollDice(){
    return Math.floor(Math.random()*6)+1;
}

function numberOfDiceRoll(){
    const inputElement = document.getElementById('user-target-number');
    const input = inputElement.value;
    const unorderedList = document.getElementById('dice-rolls');
    unorderedList.innerHTML='';

    let hasRolled=false;
    let count=0;

    while(!hasRolled){
        const rolledNumber = rollDice();
        count++;
        const orderedList =document.createElement('li');
        const output='Roll '+count +':'+rolledNumber;
        orderedList.textContent=output;
        unorderedList.append(orderedList);
        hasRolled=input==rolledNumber;
    }
    const totalRolls=document.getElementById('output-total-rolls');
    const targetNumber =document.getElementById('output-target-number');
    totalRolls.textContent=count;
    targetNumber.textContent=input;
}
rollButton.addEventListener('click',numberOfDiceRoll);
    
