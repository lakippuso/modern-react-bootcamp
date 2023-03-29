import { useEffect } from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid, Typography } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodosProvider } from "../context/TodosContext";

export default function TodoApp() {
    return (
        <Paper
            elevation={0}
            sx={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
            }}
        >
            <AppBar
                position="static"
                color="primary"
                style={{ height: "64px" }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Todo App
                    </Typography>
                </Toolbar>
            </AppBar>
            <TodosProvider>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{ marginTop: "1rem" }}
                >
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm />
                        <TodoList />
                    </Grid>
                </Grid>
            </TodosProvider>
        </Paper>
    );
}
