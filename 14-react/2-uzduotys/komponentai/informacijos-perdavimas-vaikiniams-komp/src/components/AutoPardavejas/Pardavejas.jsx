import Automobilis from "./Automobilis";

let automobiliai = [
    {marke: 'Audi', modelis: 'A4', metai: 2010, rida: 29393, kaina: 10000},
    {marke: 'BMW', modelis: '320', metai: 2011, rida: 19393, kaina: 12000},
    {marke: 'VW', modelis: 'Passat', metai: 2012, rida: 29393, kaina: 15000},
    {marke: 'Audi', modelis: 'A6', metai: 2013, rida: 39393, kaina: 20000},
    
]

const Pardavejas = () => {

    return (
        <div>
            {automobiliai.map((auto, i) => (
                <Automobilis key={i}
                marke={auto.marke} 
                modelis={auto.modelis}
                metai={auto.metai} 
                rida={auto.rida}    
                kaina={auto.kaina}
                />
            ))}
        </div>
    );

};

export default Pardavejas;