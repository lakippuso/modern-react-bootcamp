import { createContext } from "react";
import { v4 as uuid} from "uuid";
import useTodoState from "../hooks/useTodoState";

const dummyTodos = [
    { id: uuid(), task: "Feed the cat", completed: false },
    { id: uuid(), task: "Eat lunch", completed: true },
    { id: uuid(), task: "Read Book", completed: false },
    { id: uuid(), task: "Jog for 30mins", completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
    
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || dummyTodos;
    const todoState = useTodoState(initialTodos);

    return(
        <TodosContext.Provider value={{...todoState}}>
            {props.children}
        </TodosContext.Provider>
    );
}