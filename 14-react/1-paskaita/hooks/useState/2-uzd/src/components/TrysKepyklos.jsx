import { useState } from "react";

const TrysKepyklos = () => {
    const [uzsakymai, setUzsakymai] = useState(0);
    const [pirmaKepykla, setPirmaKepykla] = useState(0);
    const [antraKepykla, setAntraKepykla] = useState(0);
    const [treciaKepykla, setTreciaKepykla] = useState(0);

    const uzsakymaiHandler = (e) => {
        setUzsakymai(e.target.value);}

    const pirmaKepyklaHandler = (e) => {
        setPirmaKepykla(e.target.value);}

    const antraKepyklaHandler = (e) => {
        setAntraKepykla(e.target.value);}

    const treciaKepyklaHandler = (e) => {
        setTreciaKepykla(e.target.value);}

    const arIvykdysUzsakymus = () => {
        const pajegumas = Number(pirmaKepykla) + Number(antraKepykla) + Number(treciaKepykla);
        const skirtumas = pajegumas - uzsakymai;
        console.log(pajegumas);
            if (skirtumas >= 0) {
                return `Kepyklos įvykdys užsakymus. Jums liks ${skirtumas} kepalu.`;
            } else {
                return `Kepykloms nepavyks įvykdyti užsakymų. Trūks ${Math.abs(skirtumas)} kepalų.`;
            }
        };

        return (
            <div>
                <h2>Kepyklos</h2>
                <div>
                    <strong>
                    <label htmlFor="uzsakymaiInput">Šiandien gautas užsakymų skaičius:</label>
                    <input onChange={uzsakymaiHandler} type="number" id="uzsakymaiInput" />
                    </strong>
                </div>
                <div>
                    <label htmlFor="pirmaKepyklaInput">Pirma kepykla iškeps:</label>
                    <input onChange={pirmaKepyklaHandler} type="number" id="pirmaKepyklaInput" />
                </div>
                <div>
                    <label htmlFor="antraKepyklaInput">Antra kepykla iškeps:</label>
                    <input onChange={antraKepyklaHandler} type="number" id="antraKepyklaInput" />
                </div>
                <div>
                    <label htmlFor="treciaKepyklaInput">Trečia kepykla iškeps:</label>
                    <input onChange={treciaKepyklaHandler} type="number" id="treciaKepyklaInput" />
                </div>
                <p>{arIvykdysUzsakymus()}</p>
        </div>
    );
};

export default TrysKepyklos;    