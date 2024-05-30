import { configureStore } from "@reduxjs/toolkit";
import todo from "./todo-list";

const store = configureStore({
    reducer:{todoList:todo.reducer}
})


export default store