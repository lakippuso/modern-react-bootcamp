import { Checkbox, Divider, Icon, ListItem, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useToggleHook from "../hooks/useToggleHook";
import EditTodoForm from "./EditTodoForm";
import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

export default function Todo(props) {
    const { id, task, completed } = props;
    const { toggleTodo, removeTodo, editTodo } = useContext(TodosContext);
    const [isEditing, toggleIsEditing] = useToggleHook(false);
    return (
        <ListItem sx={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    editTodo={editTodo}
                    toggleIsEditing={toggleIsEditing}
                />
            ) : (
                <>
                    <Checkbox
                        checked={completed}
                        onClick={(e) => toggleTodo(id)}
                    />
                    <ListItemText
                        sx={{
                            textDecoration: completed ? "line-through" : "none",
                        }}
                    >
                        {task}
                    </ListItemText>
                    <IconButton onClick={toggleIsEditing}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={(e) => removeTodo(id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )}
        </ListItem>
    );
}
