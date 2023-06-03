// таблица поездов
import React from "react";

export default function TableTrains ({items}) {
    const [activeIndex, setActiveIndex] = React.useState(0);

    function onClickTrain (i) {
        setActiveIndex(i);
    }

    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {items.map((obj, i) => (
                    <tr key={i}>
                        <td className={activeIndex === i ? 'table__td_active' : 'table__td'} onClick={() => onClickTrain(i)}>{obj.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

