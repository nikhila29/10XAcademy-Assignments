/*Assignment - Simple Todo list and Closure
1.Create a simple Todo app with the following functionality:
User will have an input field where he/she can enter the title
 of the todo item. 
Add a button `Save` next to the input field
On Clicking `Save`, add this item in the localStorage and show 
it in the webpage.
 
 2.Convert an array([1,2,3,4,5]) to an object({‘0’: 1, ‘1’: 3, ‘2’: 6, ‘3’: 10, ‘4’: 15}) where key represents 
 the index of the array and value represents sum of values up until that index in the array.*/


 (function(){
     let saveButton=document.getElementById('saveButton')
     let inputEle=document.getElementById('todo-item-input')
     let todoItemsWrapper=document.getElementById('todo-items')
     let todoItems=[]

     function initialiseTodoItems(){
         let todoItems=JSON.parse(localStorage.getItem('todoItems'))
         //console.log('todoItems',todoItems)
         if (todoItems && todoItems.length){
             for (let item of todoItems){
                 renderNewTodoItem(item.value)
             }
         }
     }
         

         
     
     function renderNewTodoItem(value){
         const newToDoDiv=document.createElement('div')
         newToDoDiv.innerHTML=`<p class='todo-item'>${value}</p>`
         todoItemsWrapper.appendChild(newToDoDiv)
     }
      function saveDataToLocalStorage(){
          localStorage.setItem('todoItems', JSON.stringify(todoItems))
      }

      initialiseTodoItems()

      

      saveButton.addEventListener('click',function(event){
          todoItems.push({
              id: todoItems.length+1,
              value: inputEle.value
          })
          saveDataToLocalStorage()
          renderNewTodoItem(inputEle.value)

          inputEle.value=''
      })
 })()

