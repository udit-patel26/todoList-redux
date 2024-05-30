import React,{useState,useEffect} from 'react'
import { todoListAction } from '../../store/todo-list';
import { useDispatch } from 'react-redux';

function TodoListItem({item}) {

  const [isEdit,setIsEdit]=useState(false)
  const [text,setText]=useState(item.text)

  const dispatch= useDispatch()

  function deleteItem(id){



    console.log(id)

    dispatch(todoListAction.deleteTodo(id))
    
  }

  

  function handleEdit(id,text){
    if(isEdit){
      dispatch(todoListAction.updateTodo({id,text}))
    }
    setIsEdit((prev)=>!prev)

  }

  function handleChange(e){
    setText(e.target.value)
  }




  
  return (

    

   
     <div className="w-[50%] rounded-md bg-gray-300 p-1 container  mx-auto mt-2">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="">{isEdit ? <input value ={text} type="text" onChange={handleChange}/>: text}</h1>
              <div className="flex gap-3">
                <button className="bg-red-600 text-white p-1  rounded-md" onClick={()=>deleteItem(item.id)}>
                  Delete
                </button>
                <button className="bg-yellow-400 text-black p-1 rounded-md" onClick={()=>handleEdit(item.id,text)}>
                  {isEdit? 'Done':'Edit'}
                </button>
              </div>
            </div>
          </div>
        </div>
   
  )
}

export default TodoListItem;