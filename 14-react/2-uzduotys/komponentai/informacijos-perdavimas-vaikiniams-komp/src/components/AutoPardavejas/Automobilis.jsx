const Automobilis = (props) => {
    return (
        <div>
        <h3>Automobilis: {props.marke}, modelis {props.modelis}</h3>
        <p> Iš gamyklos išriedėjo: <strong>{props.metai}</strong> ir spėjo nuvažiuoti {props.rida} km.</p>
        <p> Kažkoks kakalis už ją nori gauti: {props.kaina}</p>
            
        </div>
    );
};

export default Automobilis;