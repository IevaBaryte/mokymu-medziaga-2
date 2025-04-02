const Delione = (props) => {

    const sudetingumas = (daliuSkaicius) => {
        if (daliuSkaicius <= 500) return "Lengva";
        if (daliuSkaicius <= 1000) return "Vidutinė";
        return "Sunki";
    };

    return (
        <div>
            <h3>{props.pavadinimas}</h3>
            <p>Detalių kiekis: {props.daliuSkaicius}</p>
            <p>Išmatavimai: {props.plotis}cm x {props.aukstis}cm</p>
            <p>Sudėtingumas: {sudetingumas(props.daliuSkaicius)}</p>
            
        </div>
    );
}; 

export default Delione;