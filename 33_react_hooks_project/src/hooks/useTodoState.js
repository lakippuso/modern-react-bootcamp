import { v4 as uuid } from "uuid";
import useLocalStorageState from "./useLocalStorageState";

export default (initialTodos) => {
    const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

    const addTodo = (value) => {
        setTodos([...todos, { id: uuid(), task: value, completed: false }]);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    };
    const toggleTodo = (todoId) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };
    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    return {
        todos,
        addTodo,
        editTodo,
        toggleTodo,
        removeTodo,
    };
};
