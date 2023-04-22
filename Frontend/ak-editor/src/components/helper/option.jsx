import React from 'react';

const Option = (props) => {
  console.log(props.active)
  return (
    <button className={`main__option ${!props.active && button.classList.contains('active') ? '' : 'active'}`} onClick={(e)=>props.getCost(e, props.cost, props.attributesTitle, props.title)}>
      <h2>{props.title}</h2>
      {props.cost} руб.
    </button>
  ); 
};

export default Option;