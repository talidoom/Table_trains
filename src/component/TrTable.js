import React from "react";

export default function TableTrains ({name, i}) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    function onClickTrain (i) {
        setActiveIndex(i);
    }
    return (
        <tbody>
          <tr className={activeIndex === i ? 'table__td_active' : 'table__td'} onClick={onClickTrain}>{name}</tr>
    </tbody>
    )
}