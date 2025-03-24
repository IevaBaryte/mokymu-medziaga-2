const Komp6 = () => {
    let skaiciai1 = [16, 8, 43, 78, 69];
    let skaiciai2 = [];
    let antraste = 'Skaiciu maysvai su if salyga:';
    let arPrisijunges = false;

    return (
        <div>
            <h1>{antraste}</h1>
            <h3>Skaiciai1:</h3>
            {
                skaiciai1.length > 0 
                ? <ul>{skaiciai1.map((skaicius, i) => <li key={i}>{skaicius} - {skaicius % 2 === 0 ? "Lyginis" : "Nelyginis"} </li>)}</ul>
                : <p>masyvas 'skaiciai1' yra tuscias</p>
            }

<h3>Skaiciai2:</h3>
            {
                skaiciai2.length > 0 
                ? <ul>{skaiciai2.map((skaicius, i) => 
                <li key={i}>{skaicius}</li>)}
                </ul>
                : <p>masyvas 'skaiciai2' yra tuscias</p>
            }

            <h3>Ar prisijunges?</h3>
            {
                arPrisijunges ? 'taip' : 'prisijunk'
            }
        </div>
    )
};

export default Komp6;

// salyga: skaicius > 0 ? 'skaicius didesnis uz 0' : 'mazesnis uz 0'
// pvz: arPrisijunges ? login : logout
// ? veiksmas arba reiksme kada yra true
// : veiksmas arba reiksme kada yra false