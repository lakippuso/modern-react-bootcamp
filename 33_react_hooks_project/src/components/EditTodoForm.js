import { TextField } from "@mui/material";
import useInputHook from "../hooks/useInputHook";

export default function EditTodoForm({ id, task, editTodo, toggleIsEditing }) {
    const [todo, handleTodoChange, resetTodo] = useInputHook(task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(id, todo);
        toggleIsEditing();
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{ width: "100%", marginLeft: "1rem" }}
        >
            <TextField
                value={todo}
                onChange={handleTodoChange}
                fullWidth
                variant="standard"
                autoFocus
            />
        </form>
    );
}
