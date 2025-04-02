import Delione from "./Delione";

let del1 = {pavadinimas: 'Paukstis', daliuSkaicius: 1000, plotis:23, aukstis: 10};
let del2 = {pavadinimas: 'Masina', daliuSkaicius: 550, plotis:30, aukstis: 15};
let del3 = {pavadinimas: 'Laivas', daliuSkaicius: 300, plotis:40, aukstis: 20};

const HobiuParduotuve = () => {
    return (
        <div>
        <h3> Hobiu parudotuve </h3>
                <Delione 
        pavadinimas={del1.pavadinimas}
        daliuSkaicius={del1.daliuSkaicius}
        plotis={del1.plotis}
        aukstis={del1.aukstis}
        />
                <Delione 
        pavadinimas={del2.pavadinimas}
        daliuSkaicius={del2.daliuSkaicius}
        plotis={del2.plotis}
        aukstis={del2.aukstis}
        />
                <Delione 
        pavadinimas={del3.pavadinimas}
        daliuSkaicius={del3.daliuSkaicius}
        plotis={del3.plotis}
        aukstis={del3.aukstis}
        />
        </div>
    );
};

export default HobiuParduotuve;