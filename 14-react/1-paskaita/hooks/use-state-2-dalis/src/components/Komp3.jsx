import { useState } from "react";

const Komp3 = () => {

    const [masyvas, setMasyvas] = useState(null);

    const onShowButtonClickHandler = () => {
        console.log(masyvas);
    }

    const onAddButtonClickHandler = () => {
        masyvas.push(
            Math.round(Math.random() * 10)
        );
    }

    return (
        <div>
            <h2>Komp3</h2>
            <button onClick={onShowButtonClickHandler}>Show array</button>
            <div>
                <button onClick={onAddButtonClickHandler}>Add input value</button>
            </div>
        </div>
    )
};

export default Komp3;