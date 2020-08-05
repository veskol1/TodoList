import React, {useState} from "react";
import './Item.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Item = props => {
    const [hookState, setHookState ] = useState({
        iconShow: false
    });

    const showButtonHandler = () => {
        setHookState({
            iconShow: true
        })
    };

    const hideButtonHandler = () => {
        setHookState({
            iconShow: false
        })
    };

    let iconButton = null;
    if (hookState.iconShow)
        iconButton = (
            <IconButton size={"small"} onClick={props.deleteToDo} aria-label="delete">
                <DeleteIcon  fontSize="small"/>
            </IconButton>
        );


    return (

      <div className="DivItem">
          <div className="Item" onMouseEnter={showButtonHandler} onMouseLeave={hideButtonHandler}>
              {iconButton}
              {props.todo}
          </div>
      </div>
        )
};


export default Item