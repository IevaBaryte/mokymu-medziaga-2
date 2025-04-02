const Naujiena = ({pavadinimas, perziuros, santrauka}) => {

    const naujienosKarstumas = (perziuros) => (perziuros >= 1000 ? "Inna - HOT.mp3" : " ");

    return (
        <div>
            <h3> Naujienos pavadinimas: {pavadinimas}</h3>
            <p> Naujiena perskaite {perziuros} skaityti mokantys asmenys</p>
            <p>Jeigu ir tu moki skaityti, tai cia santrauka: {santrauka}</p>
            <h2> {naujienosKarstumas(perziuros)} </h2>
        </div>
    );
}; 

export default Naujiena;