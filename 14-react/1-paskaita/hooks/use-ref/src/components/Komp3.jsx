import { useRef } from "react";
import { useState } from "react";

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([1, 2, 3]);
    const pazymysInputRef = useRef();

    const onPazymiaiHandler = (event) => {
        event.preventDefault();
        // alert('Submit')

        setPazymiai([...pazymiai, pazymysInputRef.current.valueAsNumber])
        pazymysInputRef.current.value = '';
    }

    const vidurkis = () => {
        return pazymiai.reduce((prev, curr) => curr + prev, 0) / pazymiai.length;
    }
    return (
        <div>
            <h2>Komp3</h2>
            <h4>Studento vidurkis:</h4>

            <form onSubmit={onPazymiaiHandler}>
                <label htmlFor="pazymys">Iveskite pazymi:</label>
                <input ref={pazymysInputRef} type="number" min="1" max="10"/>
                <button>Ivesti</button>
            </form>
            <div>
                <h4>ivesti pazymiai:</h4>
                <p>{pazymiai.join('.')}</p>
            </div>
        </div>
    )
}

export default Komp3;