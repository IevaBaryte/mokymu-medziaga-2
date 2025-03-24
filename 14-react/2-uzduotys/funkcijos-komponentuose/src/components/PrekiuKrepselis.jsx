const PrekiuKrepselis = () => {
    const prekes = [
        { id: 1, pavadinimas: "Televizorius", kaina: 500, kiekis: 1, nuolaida: 50 },
        { id: 2, pavadinimas: "Telefonas", kaina: 800, kiekis: 2, nuolaida: 100 },
        { id: 3, pavadinimas: "Nesiojamas kompiuteris", kaina: 1200, kiekis: 1, nuolaida: 200 },
        { id: 4, pavadinimas: "Ausines", kaina: 100, kiekis: 3, nuolaida: 20 }
    ];

    const spausdintiLentele = (mas) => {
        return (
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Kaina (€)</th>
                        <th>Kiekis</th>
                        <th>Nuolaida (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {mas.map(preke => (
                        <tr key={preke.id}>
                            <td>{preke.id}</td>
                            <td>{preke.pavadinimas}</td>
                            <td>{preke.kaina}</td>
                            <td>{preke.kiekis}</td>
                            <td>{preke.nuolaida}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const bendraNuolaida = () => {
        return prekes.reduce((acc, preke) => acc + preke.nuolaida, 0);
    };

    const krepselioKaina = () => {
        return prekes.reduce((acc, preke) => 
            acc + (preke.kaina * preke.kiekis - preke.nuolaida), 0
        );
    };

    const atrinktiPagalKaina = (riba) => {
        return prekes.filter(preke => preke.kaina > riba);
    };

    return (
        <div>
            <h3>Prekių krepšelis:</h3>
            {spausdintiLentele(prekes)}

            <p>Bendra nuolaida: <strong>{bendraNuolaida()} €</strong></p>
            <p>Bendra krepšelio kaina: <strong>{krepselioKaina()} €</strong></p>

            <h4>Prekės, kurių kaina viršija 500 €:</h4>
            {spausdintiLentele(atrinktiPagalKaina(500))}
        </div>
    );
};

export default PrekiuKrepselis;
