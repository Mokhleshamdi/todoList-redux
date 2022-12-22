import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
      <Grid item xs={6} sm={8} md={12}>
        <Typography variant="h4" color="text.primary" >
          Todo List
        </Typography>
        <AddTodo />
      </Grid>
      <Grid item xs={6} sm={8} md={12}>
        <TodoList />
      </Grid>
    </Grid>
  );
}

export default App;
