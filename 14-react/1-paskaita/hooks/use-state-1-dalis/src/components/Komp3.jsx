import { useState } from "react";

const Komp3 = () => {
    let [skaicius, setSkaicius] = useState(0);
    const onClickButtonAction = (value) => {
        if (value === 0) {
            setSkaicius(0)
        } else {
            setSkaicius(skaicius + value);
        }
    }

    return (
        <div>
            <h2>Komp3</h2>
            <h3>Skaiciu keitinejimas</h3>
            <button onClick={() => onClickButtonAction(1)}>Didinti vienu</button>
            <button onClick={() => onClickButtonAction(-1)}>Mazinti vienu</button>
            <button onClick={() => onClickButtonAction(5)}>Didinti penkiais</button>
            <button onClick={() => onClickButtonAction(-5)}>Mazinti penkiais</button>
            <button onClick={() => onClickButtonAction(0)}>Nustatyti 0</button>
            <p>Dabartine reiksme: {skaicius}</p>
        </div>
    )
};

export default Komp3;