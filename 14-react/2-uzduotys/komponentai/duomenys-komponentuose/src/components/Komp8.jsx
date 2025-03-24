// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
    let salys = [
        {
            pavadinimas: 'Vokietija',
            sostine: 'Berlynas',
            gyventojuSkaicius: 83240000
        },
        {
            pavadinimas: 'Lietuva',
            sostine: 'Vilnius',
            gyventojuSkaicius: 2795000
        },
        {
            pavadinimas: 'Lenkija',
            sostine: 'Varsuva',
            gyventojuSkaicius: 38390000
        }
    ];

    return (
        <div>
            <h2>Informacija apie salis:</h2>
            {salys.map((salis, index) => (
                <div key={index} className="salis">
                    <h3>{salis.pavadinimas}</h3>
                    <p>Sostine: {salis.sostine}</p>
                    <p>Gyventoju skaicius: {salis.gyventojuSkaicius.toLocaleString()}</p>
                </div>
            ))}
        </div>
    )
}

export default Komp8
