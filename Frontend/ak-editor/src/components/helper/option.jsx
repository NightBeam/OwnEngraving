import React from 'react';

const Option = (props) => {
  return (
    <button className={`main__option ${!props.active ? '' : 'active'}`} onClick={()=>props.getActive(props.attributesTitle, props.title, props.cost)}>
      <h2>{props.title}</h2>
      {props.cost} руб.
    </button>
  ); 
};

export default Option;