const Komp8 = () => {
    let antraste = 'Prekiu sarasas:';
    let prekes = [
        {id: 1, pavadinimas: 'Tusinukas', kaina: 2.55, kiekis: 233},
        {id: 2, pavadinimas: 'Pienas', kaina: 1.79, kiekis: 23},
        {id: 3, pavadinimas: 'Duona', kaina: 2.85, kiekis: 33},
        {id: 4, pavadinimas: 'Vanduo', kaina: 0.99, kiekis: 3},
        {id: 5, pavadinimas: 'Popierius', kaina: 4.55, kiekis: 74}
    ]

    return (
        <div>
            <h1>{antraste}</h1>
            {
                prekes.length > 0
                ? prekes.map((preke, index) => {
                    return (
                    <div key={preke.id}>
                        <h4>{preke.pavadinimas}</h4>
                        <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                        </div>
                    )
                })
                : <p>Prekiu nera</p>
    
            }
        </div>
    )
};

export default Komp8;