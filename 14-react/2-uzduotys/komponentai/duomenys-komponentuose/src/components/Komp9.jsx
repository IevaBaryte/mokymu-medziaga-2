// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
    let kursai = [
        {
            pavadinimas: 'JavaScript pradedantiesiems',
            trukme: '4 savaites',
            kaina: '900 €'
        },
        {
            pavadinimas: 'React nemokantiems nieko',
            trukme: '36 savaitės',
            kaina: '3000 €'
        },
        {
            pavadinimas: 'Node.js backend programavimas zaliems',
            trukme: '27 savaites',
            kaina: '1400 €'
        }
    ];
    return (
        <div>
            <h2>Mokymu / kursu sarasas</h2>
            {kursai.map((kursas, index) => (
                <div key={index} className="kursas">
                    <h3>{kursas.pavadinimas}</h3>
                    <p>Trukme: {kursas.trukme}</p>
                    <p>Kaina: {kursas.kaina}</p>
                </div>
            ))}
        </div>
    )
}

export default Komp9
