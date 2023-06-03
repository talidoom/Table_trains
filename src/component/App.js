import React from "react";
import TableSpeedLimits from "./TableSpeedLimits";
import TableTrains from "./TableTrains";

const App = () => {
  const [items, setItems] = React.useState([]); //для работы с массивом

  // преобразование данных json
  React.useEffect(() => {
    fetch('https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json')
    .then(res => {
      return res.json();
    })
    .then(arr => {
      // сортировка по возрастанию
      for (let i = 0; i < arr.length; i++) {
        let a = arr[i]['speedLimits'].sort(function(a,b) {
            return a.speedLimit - b.speedLimit;
        })
        arr[i]['speedLimits'] = a
    }
      setItems(arr);
    })
}, [])
  
  return (
    <div className="container">
        <TableTrains items={items}/>
        <TableSpeedLimits items={items}/>
    </div>
  );
}

export default App;
