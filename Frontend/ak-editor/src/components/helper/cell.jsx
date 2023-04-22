import React from 'react'

const Cell = (props) => {
    console.log(props)
    return (
        <button className={`main__cell`}
            onClick={() => props.method(props.z, props.title)}>
            {props.title}
        </button>
    );
}

export default Cell;