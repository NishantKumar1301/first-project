function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;//+'1'==1 it converts strings to number
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}
function closePlayerConfig(){
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value='';
}
function savePlayerConfig(event){
    event.preventDefault();
    const formDAta= new FormData(event.target);
    const enteredPlayerName = formDAta.get('playername').trim()//-->>get(name inside the input of form);
    //str.trim()-->> Deletes all the pre or post blank spaces after the word
    if(enteredPlayerName===""){
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent="Please enter a valid name!"
        return; 
    }
    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    updatedPlayerDataElement.children[1].textContent=enteredPlayerName;

    if(editedPlayer==1){
        players[0].name=enteredPlayerName;
    }
    else{
        players[1].name=enteredPlayerName;
    }
    closePlayerConfig();  //-->>closes the form after submission
}
