import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],

}
const todoList = createSlice({
    name:"todo-list",
    initialState,
    reducers:{
        createTodo(state,action){
            const newTitle=action.payload
            const todoItem={
                text:newTitle.title,
                id:newTitle.id

            }
            state.items.push(todoItem)
        },

        deleteTodo(state,action){
            const id = action.payload

            state.items=state.items.filter((item)=> item.id !== id)

        },
        updateTodo(state,action){
            const updateItem = action.payload
            console.log(updateItem)
            const index = state.items.findIndex((item)=> item.id === updateItem.id)
            console.log(index)
            state.items[index]={
                text:updateItem.text,
                id:updateItem.id
            }
        }
    }

})
export const todoListAction = todoList.actions;

export default todoList