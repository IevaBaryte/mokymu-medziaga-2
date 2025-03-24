const Darbuotojas = (props) => {
    console.log(props)
    let darb = props.darbuotojas;
    return (
        <div>
            <h3>Vardas: {darb.vardas} Pavarde: {darb.pavarde}</h3>
            <p>Amzius: {darb.amzius}</p>
            <p>Pareigos: {darb.pareigos}</p>
            <p>Atlyginimas: {darb.atlyginimas}</p>
        </div>
    )
};

export default Darbuotojas;