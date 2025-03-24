const Komp3 = () => {
    let studentas = {
        vardas: 'Jonas',
        amzius: 20,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Vilniaus',
            numeris: 1
        },
        bedarbis: false,
        pazymiai: [10, 8, 9, 7 ,9]
    };


    const ArBedarbis = (bedarbis) => {
    //     if (bedarbis) {
    //         return 'Taip'
    //     }
    //     return 'Ne';
    // };
    return bedarbis ? 'Taip' : 'Ne';
};

    return (
        <>
            <h2>Informacija apie studenta:</h2>
            <p>Studento vardas: <strong>{studentas.vardas}, </strong>Amzius: {studentas.amzius}</p>
            <p>Ar yra bedarbis? { ArBedarbis(studentas.bedarbis) }</p>
            <p>
                Miestas: <strong>{studentas.miestas}</strong>,
                Gatve: <strong>{studentas.adresas.gatve} - {studentas.adresas.numeris}</strong>
            </p>
            <p>Pazymiai: {studentas.pazymiai.join(', ')}</p>
        </>
    );
};

export default Komp3;