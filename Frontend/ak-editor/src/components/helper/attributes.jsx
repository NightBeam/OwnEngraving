import React, { useEffect, useState } from 'react'

import Cell from './cell';
import Option from './option';

const Attributes = (props) => {
    let [titles, setTitles] = useState(() => props.titles);
    let [titlesCount, setTitlesCount] = useState(() => 0);

    useEffect(() => {
        setTimeout(() => {
            if (titlesCount < titles.length) {
                setTitlesCount(prev => prev + 1);
                console.log(titlesCount);
            }
            else {
                return;
            }
        }, 100)
    }, [titlesCount])
    return (
        props.active && props.options[0] !== undefined
            ?
            <div className="main__attributes">
                {props.options[0].properties.map((item) => {
                    return <Option active={item.isActive} title={item.name} cost={item.cost} getCost={props.getCost} attributesTitle={props.options[0].name} />
                })}
                <button class='cancel__button' onClick={props.closeOptions}><span></span></button>
            </div>
            :
            <div className={`main__attributes ${props.category && `category${props.categoryIndex}`}`}>
                {[...new Array(titlesCount)].map((_, index) => <Cell title={titles[index].name}
                    z={titles[index].z}
                    method={props.method}
                />)}
            </div>
    )
}

export default Attributes;