import React, { useEffect, useState } from 'react'

import Cell from './cell';

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
        <div className={`main__attributes ${props.category && `category${props.categoryIndex}`}`}>
            {[...new Array(titlesCount)].map((_, index) => <Cell title={titles[index].name}
                z={titles[index].z}
                method={props.method} />)}
        </div>
    )
}

export default Attributes;