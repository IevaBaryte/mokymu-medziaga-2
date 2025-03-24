// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
    let preke = {
        pavadinimas: 'Šokoladas',
        kaina: 2.5,
        kiekis: 10,
    };
    
    return (
        // TODO: į šio komponento div įstatykite
        // prekės pavadinimą, kainą ir kiekį
        <div>
            <h1>Prekes:</h1>
            <h3>Prekes pavadinimas: {preke.pavadinimas}</h3>
            <p>Kaina: {preke.kaina}</p>
            <p>Kiekis: {preke.kiekis}</p>
        </div>
    )
}

export default Komp3
