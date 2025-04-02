import { useState } from "react";

const Komp5 = () => {
    let [selection, setSelection] = useState('Nepasirinkote');

    const pasirinkimoHandler = () => {
        let pasirinktaReiksme = event.target.innerText;

        setSelection(pasirinktaReiksme);
    }

    const tikrinti = () => {
        switch (selection) {
            case 'HTML' : 
                return 'HTML - tai zymejimo kalba';
            case 'CSS' :
                return 'CSS - tai stiliaus kalba';
            case 'JAVASCRIPT' :
                return 'JS - tai programavimo kalba';
            case 'REACT' : 
                return 'REACT - tao JS biblioteka';
            default:
                return 'Nepasirinkta'
        }
    }

    return (
        <div>
            <h2>Komp5</h2>
            <h3>Pasirinkimas</h3>
            <p>Labiausiai patiko</p>
            <button onClick={pasirinkimoHandler}>HTML</button>
            <button onClick={pasirinkimoHandler}>CSS</button>
            <button onClick={pasirinkimoHandler}>JAVASCRIPT</button>
            <button onClick={pasirinkimoHandler}>REACT</button>
            <p>Pasirinkote: <strong>{selection}</strong></p>
        </div>
    )
};

export default Komp5;