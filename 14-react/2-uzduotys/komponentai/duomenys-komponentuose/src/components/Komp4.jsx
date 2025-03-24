// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
    let filmas = {
        pavadinimas: 'Pulp Fiction',
        rezisierius: 'Quentin Tarantino',
        metai: 1994,
    };

    return (
        // TODO: į šio komponento div įstatykite
        // filmo pavadinimą, režisierių ir metus
        <div>
            <h3>Filmo pavadinimas: {filmas.pavadinimas}</h3>
            <h4>Filmo rezisierius: {filmas.rezisierius}</h4>
            <p>Filmop sukurimo metai: {filmas.metai}</p>
        </div>
    )
}

export default Komp4
