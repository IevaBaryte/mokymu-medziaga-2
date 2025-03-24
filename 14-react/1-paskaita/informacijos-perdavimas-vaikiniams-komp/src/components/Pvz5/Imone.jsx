import Darbuotojas from "./Darbuotojas";

const Imone = () => {
    let darbuotojas = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 25,
        pareigos: 'Programuotojas',
        atlyginimas: 1500
    };

    let darbuotojas2 = {
        vardas: 'Petras',
        pavarde: 'Petraitis',
        amzius: 35,
        pareigos: 'Dizaineris',
        atlyginimas: 2500
    }
    return (
        <div>
            Imone:
            <Darbuotojas darbuotojas={darbuotojas}/>
            <Darbuotojas darbutoojas={darbuotojas2}/>
        </div>
    )
}

export default Imone;