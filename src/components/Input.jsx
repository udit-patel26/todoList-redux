import React,{useState} from "react";
import { todoListAction } from "../../store/todo-list";
import { useDispatch } from "react-redux";


function Input() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();



  function addItemToTodo() {
    console.log(title);

    dispatch(todoListAction.createTodo({ title, id: Math.random() }));

    setTitle('')
  }


  function handleChange(e) {
    setTitle(e.target.value);
  }




  return (
    <div className="w-[50%] mx-auto p-4">
      <div className="flex items-center flex-col">
        <label htmlFor="todo" className="mb-2 text-red-950 font-[Cubano]">
          Write Task
        </label>
        <div className="flex justify-center">
          <input
            type="text"
            className="text-black bg-slate-200  border-none outline-none shrink-0 p-1 rounded-tl-md rounded-bl-md "
            placeholder="Enter your task"
            onChange={handleChange}
            value={title}
          />
          <button
            className="p-1 text-white bg-blue-700 rounded-tr-md rounded-br-md font-mono"
            onClick={addItemToTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
