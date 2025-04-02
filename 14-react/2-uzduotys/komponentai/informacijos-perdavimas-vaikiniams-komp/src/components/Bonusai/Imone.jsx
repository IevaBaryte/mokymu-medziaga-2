import Darbuotojas from "./Darbuotojas";

let darbuotojai = [
    {vardas: 'Kukulis', pavarde: 'Kukulaitis', bonusas: 3000},
    {vardas: 'Bubulis', pavarde: 'Bubulaitis', bonusas: 5000},
    {vardas: 'Gurgulis', pavarde: 'Gurgulaitis', bonusas: 300},
    {vardas: 'Tutulis', pavarde: 'Tutulaitis', bonusas: 1000},
]

const Imone = () => {
    return (
        <div>
            
            {darbuotojai.map((darb, i) => (
                <Darbuotojas key={i} vardas={darb.vardas} pavarde={darb.pavarde} bonusas={darb.bonusas} />
            ))}
            
        </div>
    );
};

export default Imone;