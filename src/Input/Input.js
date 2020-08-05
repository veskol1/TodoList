import React, {useState} from "react";

const Input = (props) =>{

    const inputStyle = {
        width: '248px',
        margin: 'auto',
        display: 'block',
        borderColor: '#61dafb',
        borderStyle: 'solid',
        borderWidth: '1px',
        outline: 'none'
    };

    return (
        <input style={inputStyle} type={"text"}
               onChange={props.doChange}
               placeholder={"Add new todo"}
               ref={props.inputRef}
        />
    )
};

export default Input