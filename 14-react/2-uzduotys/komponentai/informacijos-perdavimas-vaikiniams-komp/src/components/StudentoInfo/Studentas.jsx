import Pazymys from "./Pazymys";

let studentas = {
    vardas: "Stalas",
    pavarde: "Dedaitis",
    mokykla: "Kauno Zalgirio gimnazija",
    mokymosiPrograma: "Informatika",
    pazymiai: [10, 8, 6, 4, 10]};

const Studentas = () => {

    return (
        <div>
            <h2>Apie studenta:</h2>
            <p>Vardas: {studentas.vardas}</p>
            <p>Pavardė: {studentas.pavarde}</p>
            <p>Mokykla: {studentas.mokykla}</p>
            <p>Mokymo programa: {studentas.mokymosiPrograma}</p>
            <h3>Pazymiai:</h3>
            {studentas.pazymiai.map((pazymys, i) => (
                <Pazymys key={i} pazymys={pazymys} />
            ))}

            
        </div>
    );
}; 

export default Studentas;