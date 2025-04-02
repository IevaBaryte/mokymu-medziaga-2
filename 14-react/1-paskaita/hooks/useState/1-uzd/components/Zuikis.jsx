import { useState } from "react";

const Zuikis = () => {
    const [arPersoko, setArPersoko] = useState(false);

    const atsitiktinis = () => {
        const atsitiktinisSkaicius = Math.round(Math.random());
        setArPersoko(atsitiktinisSkaicius === 0); 
    };

    const garantuotas = () => {
        setArPersoko(true);
    };

    return (
        <div>
            <h2>Ar persoks tas nenaudelis?</h2>
            <p>Irrrr?? - {arPersoko ? "taip" : "ne"}</p>
            <button onClick={atsitiktinis}>Bandyk vel</button>
            <button onClick={garantuotas}>Tu gali, tikrai zinau</button>
        </div>
    );
};

export default Zuikis;