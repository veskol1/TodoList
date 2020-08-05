import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const ToDoHeader = (props) => {
    const toDoStyle = {
        width: '250px',
        margin: 'auto',

        borderColor: '#61dafb',
        backgroundColor: '#61dafb',
        borderStyle: 'solid',
        borderWidth: '2px',
        color: 'white',
        textAlign : 'start'
    };

    const iconStyle ={
        textAlign : 'end',
        marginLeft : '55%'
    };


    return (
        <div style={toDoStyle}>TO DO List:
            <IconButton style={iconStyle} onClick={ props.addItem} size="small">
                <AddIcon fontSize="small"/>
            </IconButton>
        </div>



    )


};

export default ToDoHeader