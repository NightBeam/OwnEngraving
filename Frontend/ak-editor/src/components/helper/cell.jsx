import React from 'react'

const Cell = (props) => {
    return(
        <button className="main__cell" onClick={(e)=>props.onClick(e)}>
            {props.title}
        </button>
    );
}

export default Cell;