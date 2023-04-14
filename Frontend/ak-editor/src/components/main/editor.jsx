import React, { useState } from "react";

import Attributes from "../helper/attributes";
import Book from "../helper/book";
import Cost from "../helper/cost";

const Editor = () => {
    var [makeBook, setMakeBook] = useState(() => false);
    var [attributes, setAttributes] = useState([{
        'cost': 0,
        'name': '',
    }])

    return (
        <>
            <canvas className="main__canvas">{makeBook && Book}</canvas>
            <Cost/>
            <Attributes titles={["Цвета", "Гравировка", "Резьба по дереву", "Обвесы"]} />
        </>
    )
}

export default Editor;