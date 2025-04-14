import { useState } from "react";
import { useRef } from "react";

const Komp2 = () => {
    const pirmasZodisRef = useRef();
    const antrasZodisRef = useRef();
    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const onIvestiClick = () => {
        const zodis1 = pirmasZodisRef.current.value;
        const zodis2 = antrasZodisRef.current.value;

        setPirmas(zodis1);
        setAntras(zodis2);

        pirmasZodisRef.current.value = '';
        antrasZodisRef.current.value = '';
    }

    const daugiauRaidziu = () => {
        let pirmAts = pirmas.split('').filter(raide => raide === 'a').length;
        let antrAts = antras.split('').filter(raide => raide === 'a').length;

        if (pirmAts > antrAts) {
            return 'pirmas zodis'
        } else if (antrAts > pirmAts) {
            return 'Antras zodis'
        } return 'Abu lygus';
    }

    return (
        <div>
            <h2>Komp2</h2>
            <h4>Lyginti zodzius:</h4>
            <div>
                <label htmlFor="pirmasZodis">Pirmas zodis</label>
                <input type="text" id="pirmasZodis" ref={pirmasZodisRef}/>
            </div>
            <div>
                <label htmlFor="antrasZodis">Antras zodis</label>
                <input type="text" id="antrasZodis" ref={antrasZodisRef}/>
            </div>
            <div>
                <button onClick={onIvestiClick}>Ivesti</button>
            </div>
            <p>Pirmas zodis: {pirmas}</p>
            <p>Antras zodis: {antras}</p>
            <p>{daugiauRaidziu()} </p>
        </div>
    )
}

export default Komp2;