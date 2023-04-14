import React from 'react'

import Cell from './cell';

const Attributes = (props) => {

    const getAttributes = (e) => {
        console.log(e.target.innerHTML)
    }

    return (
        <div className="main__attributes">
            {props.titles?.map(value => <Cell title={value} onClick={getAttributes}/>)}
        </div>
    )
}

export default Attributes;