import { Divider, List, Paper } from "@mui/material";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { TodosContext } from "../context/TodosContext";
import { useContext } from "react";

export default function TodoList() {
    const { todos } = useContext(TodosContext);
    let todoBoxes = todos.map((todo, i) => (
        <div key={uuid()}>
            <Todo
                {...todo}
            />
            {i != todos.length - 1 && <Divider />}
        </div>
    ));
    return (
        <Paper>
            <List>{todoBoxes}</List>
        </Paper>
    );
}
