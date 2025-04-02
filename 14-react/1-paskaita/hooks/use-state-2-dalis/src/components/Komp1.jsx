import { useState } from "react";

const Komp1 = () => {
    const [zodis, setZodis] = useState('');

    const zodzioHandler = (event) => {
        setZodis(event.target.value)
    }

    return (
        <div>
            <h2>Komp1</h2>
            <h4>Zodzio ilgis</h4>
            <label htmlFor="vardasInput">Zodis:</label>
            <input onInput={zodzioHandler} type="text" id="vardasInput" />
            <p>Ivestas zodis: {zodis}</p>
            <p>Simboliu kiekis: {zodis.length}</p>
        </div>
    )
};

export default Komp1;