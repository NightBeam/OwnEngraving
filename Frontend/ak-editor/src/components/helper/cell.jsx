import React from 'react'

const Cell = (props) => {

    return (
        <button className="main__cell"
            onClick={() => props.method(props.z)}>
            {props.title}
        </button>
    );
}

export default Cell;