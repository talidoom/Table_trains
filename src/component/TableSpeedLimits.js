// таблица скоростей
import React from "react";

export default function TableSpeedLimits ({items}) {

    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                    {/* <th>Speed Name</th> */}
                    <th>Speed Limit</th>
                </tr>
            </thead>
            <tbody>
                { items.map( rowData => (
                    rowData.speedLimits.map(item => (
                        <tr key={item.speedLimit}>
                        {/* <td className="table__td">{item.name}</td> */}
                        <td className="table__td">{item.speedLimit}</td>
                    </tr>
                    ))
                ))}
            </tbody>
        </table>
        </div>
    )
}

