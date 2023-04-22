import React from "react";

const Cost = (props) => {
    console.log(props.cost)
    console.log(props.cost.reduce((acc,i)=>i.cost+acc,0))
    return(
        <div className="main__cost">
            {`${24280+props.cost.reduce((acc,i)=>i.cost+acc,0)} руб.`}
        </div>
    )
}

export default Cost;