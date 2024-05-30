import React, { useEffect } from "react";

import Input from "./components/Input";
import ShowTodoList from "./components/ShowTodoList";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="container mx-auto max-w-[1200px]">
      <Input />

      <ShowTodoList />
    </div>
  );
}

export default App;
