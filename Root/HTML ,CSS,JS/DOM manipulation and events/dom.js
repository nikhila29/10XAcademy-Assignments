/*Assignment - DOM Manipulation and Events
Create a HTML table (rows x columns) using JS by getting input from the user using prompt dialog(number of rows and number of columns).
Assign each cell a unique id and print out the cell that the user clicks on to the console. 
For Example, if user clicks on top leftmost cell, then print out, “you clicked on cell (0,0)” 
Mark this cell as active and give it a unique color differentiating with the rest of the table
Reloading the page should retain the layout and position of the active cell.
Position of the active cell should be updated once you will click on other cell. */
var numOfRows=localStorage.getItem('numOfRows')
var numOfColumns=localStorage.getItem('numOfColumns')
var lastActiveCell
function updateActiveCell(){
    var lastActiveCellId=localStorage.getItem('lastActiveCellId')
    if (lastActiveCellId){
        var activeCell=document.getElementById(lastActiveCellId)
        activeCell.style.backgroundColor='#edb';
        lastActiveCell=activeCell
    }
}
//populate the variables
function getInputFromUser(){
    if(!numOfRows){
        numOfRows=prompt('enter the number of rows')
        if (numOfRows){
            localStorage.setItem('numOfRows',numOfRows)
        }
    }
    if (!numOfColumns){
        numOfColumns=prompt('enter the number of columns')
        if (numOfColumns){
            localStorage.setItem('numOfColumns',numOfColumns)
        }
    } 
}

function getTableHtml(){
    var rows=''
    for (var i=0;i<numOfRows;i++){
        var columns=''
        for (var j=0;j<numOfColumns;j++){
            columns+=`<td class='cell' id=${i}-${j}>Cell (${i},${j}) </td>`
        }
        rows+=`<tr>${columns}</tr>`
    }
    return `<table>${rows}</table>`
}
getInputFromUser()
var tableHtml=getTableHtml()

var wrapperDiv=document.querySelector('.wrapper')
wrapperDiv.innerHTML=tableHtml

updateActiveCell()
wrapperDiv.addEventListener('click',function(event){
    event.stopPropagation()
    const cellClicked=event.target
    if (lastActiveCell){
        lastActiveCell.style.backgroundColor='white'
    }
    lastActiveCell=cellClicked
    localStorage.setItem('lastActiveCellid',lastActiveCell.id)
    console.log(`You have clicked on ${cellClicked.innerHTML}`)
    cellClicked.style.backgroundColor='#edb'
})