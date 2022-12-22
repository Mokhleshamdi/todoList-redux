import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";
import CardToDo from "./CardToDo";
import Grid from '@mui/material/Grid';

const TodoList = ({ todos }) => (
    <Grid container justifyContent="center" spacing={2}>
        {todos && todos.length
            ? todos.map((todo, index) => {
                return <Grid item > <CardToDo key={`todo-${index}`} todo={todo} /></Grid>
            })
            : "Empty todos"}
    </Grid>
);

const mapStateToProps = state => {
    const todos = getTodos(state);
    return { todos };
};
export default connect(mapStateToProps)(TodoList);
