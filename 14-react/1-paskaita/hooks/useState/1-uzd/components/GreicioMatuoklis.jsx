import { useState } from "react";

const GreicioMatuoklis = () => {
    let [greitis, setGreitis] = useState(0);
    let [pranesimas, setPranesimas] = useState('Stovite vietoje');

    const onClickButtonAction = (value) => {
            setGreitis(value);
            setPranesimas (
                value <= 25 ? 'Vaziuojate kaip klevas' :
                value <= 50 ? 'Zinau, kad galite greiciau' :
                value <= 75 ? 'ooo, neblogai' :
                value <= 100 ? 'Va cia jau greitis' : ' '
            )
        }
        return (
            <div>
                <p>Dabartinis greitis: {greitis} km/h <strong>{pranesimas}</strong></p>
                <h3>Pasirinkite greiti: </h3>
                <button onClick={() => onClickButtonAction(25)}>25 km/h</button>
                <button onClick={() => onClickButtonAction(50)}>50 km/h</button>
                <button onClick={() => onClickButtonAction(75)}>75 km/h</button>
                <button onClick={() => onClickButtonAction(100)}>100 km/h</button>
                
                
            </div>
        )
    };
    
    export default GreicioMatuoklis;