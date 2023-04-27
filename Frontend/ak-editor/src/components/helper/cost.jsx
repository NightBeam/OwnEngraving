import React from "react";

const Cost = (props) => {
    console.log(props)
    return(
        <div className="main__cost">
            {`${24280+props.cost.reduce((acc,i)=>i.cost+acc,0)} руб.`}
        </div>
    )
}

export default Cost;