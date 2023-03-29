import { Paper, TextField } from "@mui/material";
import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import useInputHook from "../hooks/useInputHook";

export default function TodoForm(props) {
    const [todo, handleTodoChange, resetTodo] = useInputHook("");
    const { addTodo } = useContext(TodosContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        resetTodo();
    };
    return (
        <Paper
            sx={{
                padding: "0 1rem",
                margin: "1rem 0",
            }}
        >
            <form onSubmit={handleSubmit}>
                <TextField
                    value={todo}
                    onChange={handleTodoChange}
                    fullWidth
                    label="Add Todo"
                    margin="normal"
                    variant="standard"
                />
            </form>
        </Paper>
    );
}
