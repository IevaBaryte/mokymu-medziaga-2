import { useState } from "react";

const Begikai = () => {

    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const pirmasHandler = (e) => {
        setPirmas(e.target.value);
    }
    const antrasHandler = (e) => {
        setAntras(e.target.value);
    }

    const greitesnis = () => {
        let rezultatas = pirmas - antras ;

        if (rezultatas > 0) {
            return `Pirmas begikas ${rezultatas} s greitesnis`;
        } else if (rezultatas < 0) {
            return `Antras begikas ${Math.abs(rezultatas)} s greitesnis`;
        } else {
            return `Abu begikai atbego vienodai`;
    }
}
    return (
    <div>
        <h3>Maratonas</h3>

        <h4> Begikai</h4>
        <div>
            <label htmlFor="pirmasInput">Pirmo begiko laikas:</label>
            <input onChange={pirmasHandler} type="number" id="pirmasInput" />
        </div>
        <div>
            <label htmlFor="antrasInput">Antro begiko laikas:</label>
            <input onChange={antrasHandler} type="number" id="antrasInput" />
        </div>

        <p>
            <strong>Rezultatas:  </strong>
            {pirmas}s ir {antras}s
        </p>
        <p>{greitesnis()}</p>
    </div>
)
}

export default Begikai;