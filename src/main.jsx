import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Task1 from "./tasks/task1";
import Task2 from "./tasks/task2";
import Task3 from "./tasks/task3";
import Task4 from "./tasks/task4";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Task1 /> */}
    {/* <Task2 /> */}
    {/* <Task3 /> */}
    <Task4 name="Ali" email="example@mail.com" age={20} />
  </StrictMode>
);
