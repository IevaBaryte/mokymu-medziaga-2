// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
    let spalvos = ['raudona', 'geltona', 'žalia', 'mėlyna', 'violetinė'];

    return (
        // TODO: atvaizduokite visas spalvas
        // naudodami map funkciją, įdėdami viską
        // į rikiuotą sąrašą (ol)
        <div>
            <h3>Spalvu sarasas:</h3>
            <ol>
                {spalvos.map((spalva, index) => (
                    <li key={index}>{spalva}</li>
                ))}
            </ol>
        </div>
    )
}

export default Komp5
