const Roles = ({pavadinimas, kiekVartotoju}) => {

        const tikrintiKiekVartotoju = (count) => {
            if (kiekVartotoju >= 20) {
                return 'Populiari role' 
            } else {
                return 'Nepopuliari role'
            }
        }

    return (
        <div>
            <h2>Role: {pavadinimas}</h2>
            <p>Vartotoju kiekis: {kiekVartotoju}</p>
            <p>{tikrintiKiekVartotoju()}</p>
        </div>
    )
};

export default Roles;