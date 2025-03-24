const Parduotuve = () => {
    let prekes = [
        {id: 1, pavadinimas: 'obuoliai', kaina: 10, kiekis: 100},
        {id: 2, pavadinimas: 'kriauses', kaina: 10, kiekis: 100},
        {id: 3, pavadinimas: 'agurkai', kaina: 10, kiekis: 100},
    ]

    return (
        <div>
            <h1>Parduotuve</h1>
            {
                prekes.map((item)=> <Preke 
                key={item.id}
                pavadinimas={item.pavadinimas}
                kaina={item.kaina}
                kiekis={item.kiekis}/>
    )
            }
        </div>
    )
}

export default Parduotuve;