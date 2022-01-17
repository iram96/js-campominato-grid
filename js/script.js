/*L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

console.log('JS ok');

const submitButton = document.getElementById('create');

submitButton.addEventListener('click', function (){
    const userModeChoice = document.getElementById('difficulty-lvl').value;
    console.log(userModeChoice);
    let gridDocument = document.getElementById('grid');

    gridType(10, 10, gridDocument, 'easylvl', 'lightblue', userModeChoice);
    gridType(9, 9, gridDocument, 'mediumlvl', 'lightblue', userModeChoice);
    gridType(7, 7, gridDocument, 'hardlvl', 'lightblue', userModeChoice);

    // if (userModeChoice === '1'){
    //     gridDocument.innerHTML = '';
    //     gridType(10, 10, gridDocument, 'easylvl', 'lightblue');
        
    // } else if (userModeChoice === '2'){
    //     gridDocument.innerHTML = '';
    //     gridType(9, 9, gridDocument, 'mediumlvl', 'lightblue')
        
    // } else if (userModeChoice === '3'){
    //     gridDocument.innerHTML = '';
    //     gridType(7, 7, gridDocument, 'hardlvl', 'lightblue')
    // }
    
})




function gridType(cellNumber, rowNumber, gridVariableById, difficultyLevel, clickedCell,  userValue){
    if (difficultyLevel === userValue){
    let gridHTMLElement = gridVariableById;
    gridVariableById.innerHTML = '';
    let totalGridCells = cellNumber * rowNumber;

    for (let i = 1; i <= totalGridCells; i++){
        const cell = document.createElement('div');
        cell.classList.add(`${difficultyLevel}`)
        gridHTMLElement.appendChild(cell);
        gridHTMLElement.innerHTML
        cell.addEventListener('click', function (){
            cell.classList.toggle(`${clickedCell}`)
        })
    }



    }
   
}

