import React from 'react'
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

export default function ShowTodoList() {
    const items = useSelector(state => state.todoList.items);

    console.log(items,"updated")

   
  return (
    <>
    {
        items.length >0 ? (items.map((item)=>
        <TodoListItem item={item} key={item.id}  />)): <div className="text-red-600 font-[Pacifico] text-center">There is no item present</div>
       }
       </>
  )
}
