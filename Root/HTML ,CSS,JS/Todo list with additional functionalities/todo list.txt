/*Assignment - Todo list with additional functionalities 
Add following functionalities to the existing app:
Add an option to mark a todo item as complete (can be a button or 
checkbox) to each todo item.
Completed todo items should be displayed differently to the user.
The list should be persisted(the state of the application
 should be maintained) and should be visible
 to the user even if he reloads the page.y.*/


 (function(){
    let saveButton=document.getElementById('saveButton')
    let inputEle=document.getElementById('todo-item-input')
    let todoItemsWrapper=document.getElementById('todo-items')
    let todoItems=[]

    function initialiseTodoItems(){
        let todoItemsFromLS=JSON.parse(localStorage.getItem('todoItems'))
        //console.log('todoItems',todoItems)
        if (todoItemsFromLS && todoItemsFromLS.length){
            for (let item of todoItems){
                renderNewTodoItem(item.value,item.id,item.completed)
            }
        }
    }
        

        
    
    function renderNewTodoItem(value,id,isCompleted=false){
        const newToDoDiv=document.createElement('div')
        const cssClass=isCompleted ? 'todo-complete' :''
        newToDoDiv.id=`todo-${id}`
        newToDoDiv.className=cssClass
        newToDoDiv.innerHTML=`
        <div>${value}
        <input type='checkbox' id=${id} />
        </div>`
        //<p class='todo-item'>${value}</p>`
        todoItemsWrapper.appendChild(newToDoDiv)
    }
     function saveDataToLocalStorage(){
         localStorage.setItem('todoItems', JSON.stringify(todoItems))
     }

     initialiseTodoItems()


     todoItemsWrapper.addEventListener('click',function(event){
         let todoCheckBox=document.getElementById(event.target.id)
         todoItems=todoItems.map(function(item){
             if(String(item.id)===event.target.id){
                 item.completed=todoCheckBox.checked
                 return item
             }
             return item
         })
         saveDataToLocalStorage()

         let isChecked=false
         if(todoCheckBox){
             isChecked=todoCheckBox.checked
         }

         let todoItemDiv=document.getElementById(`todo-${event.target.id}`)
        if(isChecked){
            todoItemDiv && todoItemDiv.classList.add('todo-complete')
        }else{
            todoItemDiv && todoItemDiv.classList.remove('todo-complete')
        }
     })

     

     saveButton.addEventListener('click',function(event){
         todoItems.push({
             id: todoItems.length+1,
             value: inputEle.value,
             completed:false
         })
         saveDataToLocalStorage()
         renderNewTodoItem(inputEle.value,todoItems[todoItems.length-1].id,false)

         inputEle.value=''
     })
})()

