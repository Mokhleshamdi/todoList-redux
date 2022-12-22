import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux";
import FormControlLabel from '@mui/material/FormControlLabel';

const CardToDo = ({ todo, toggleTodo, ...props }) => {
    return (
        <Card sx={{ width: 250, height: 150 }} key={props.key}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    {todo.content}
                </Typography>
            </CardContent>
            <CardActions>
                <FormControlLabel control={<Checkbox checked={todo.checked}
                    onChange={() => { toggleTodo(todo.id) }}
                    inputProps={{ 'aria-label': 'controlled' }} />} label={todo.completed && <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                        {"Completed"}
                    </Typography>} />
            </CardActions>
        </Card >
    );
}
export default connect(
    null,
    { toggleTodo }
)(CardToDo);