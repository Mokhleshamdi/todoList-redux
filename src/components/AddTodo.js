import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTodo = (props) => {
    const [input, setInput] = useState("")

    const updateInput = input => {
        setInput(input)
    };

    const handleAddTodo = () => {
        if (input) {
            props.addTodo(input);
            setInput("")
        }
    };

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: 'center' }}>
            <TextField
                onChange={e => updateInput(e.target.value)}
                value={input}
                style={{ width: "50%" }}
            />
            <Button variant="outlined" onClick={handleAddTodo} style={{ marginLeft: '1%' }}>  Add Todo</Button>
        </div>
    );
}

export default connect(
    null,
    { addTodo }
)(AddTodo);
// export default AddTodo;
