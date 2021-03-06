/*Assignment - Todo list with actual api.
Update your existing todo app such that:
It fetches todo items from an actual api `https://jsonplaceholder.typicode.com/todos` 
using GET HTTP method.
The list returned from the api should be rendered on the screen, 
showing completed and pending items differently
Add options for users to see only completed todo items or pending to do items.
 Could be two options to filter the items by `completed` or `pending`
 
BONUS: 
On Clicking the save button next to input tag you can create
 new todo item using the API `https://jsonplaceholder.typicode.com/posts` using POST method.*/


 (function(){
    let saveButton=document.getElementById('saveButton')
    let inputEle=document.getElementById('todo-item-input')
    let todoItemsWrapper=document.getElementById('todo-items')
    let onlyCompletedTodosCheckbox=document.getElementById('onlyCompletedTodos')
    let todoItems=[]

    function callApi(url,options={}){
        return fetch(url,options)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            return data
        })

    }



    function initialiseTodoItems(){
        //let todoItemsFromLS=JSON.parse(localStorage.getItem('todoItems'))
        //console.log('todoItems',todoItems)
        callApi('https://jsonplaceholder.typicode.com/todos')
        .then(function(data){
            handleResponse(data)
        })
        //if (todoItemsFromLS && todoItemsFromLS.length){
            //for (let item of todoItems){
                //renderNewTodoItem(item.value,item.id,item.completed)
          //  }
        //}
    }


    function handleResponse(data){
        if(data && data.length){
            todoItems=data
            renderTodoItemsToScreen(todoItems)
        }
    }


    function renderTodoItemsToScreen(data){
        todoItemsWrapper.innerHTML=''
        for(let item of data){
            renderNewTodoItem(item.title,item.id,item.completed)
        }
    }
        

        
    
    function renderNewTodoItem(title,id,isCompleted=false){
        const newToDoDiv=document.createElement('div')
        const cssClass=isCompleted ? 'todo-complete' :''
        newToDoDiv.id=`todo-${id}`
        newToDoDiv.className=cssClass
        newToDoDiv.innerHTML=`
        <div><b>${id}</b>-${title}<input type='checkbox' id=${id} />
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
        
         //saveDataToLocalStorage()

         let isChecked=false
         if(todoCheckBox){
             isChecked=todoCheckBox.checked
             todoItems=todoItems.map(function(item){
                if(String(item.id)===event.target.id){
                    item.completed=isChecked
                    return item
                }
                return item
            })

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
         //saveDataToLocalStorage()
         renderNewTodoItem(inputEle.value,todoItems[todoItems.length-1].id,false)

         inputEle.value=''
     })
     onlyCompletedTodosCheckbox.addEventListener('click',function(event){
         let shallShowOnlyCompletedItems=event.target.checked
         let url
         if(shallShowOnlyCompletedItems){
             url='https://jsonplaceholder.typicode.com/todos?completed=true'
         } else{
             url='https://jsonplaceholder.typicode.com/todos'
         }
         callApi(url)
            .then(function(data){
                handleResponse(data)
            })
     })





})()

