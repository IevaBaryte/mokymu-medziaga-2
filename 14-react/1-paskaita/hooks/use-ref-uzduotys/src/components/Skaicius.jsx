import { useRef } from "react";
import { useState } from "react";

const Skaicius = () => {
    const [skaicius, setSkaicius] = useState();
    const inputRef = useRef();

    const onIvestiClick = () => {
        setSkaicius(
            inputRef.current.valueAsNumber
        )
        inputRef.current.value = '';
    }

    const arLyginis = () => {
        return skaicius % 2 === 0 ? 'Lyginis' : 'Nelyginis';
    }
    return (
        <div>
            <h2>Skaicius</h2>
            <label htmlFor="skaiciai">Iveskite skaiciu</label>
            <input type="number" ref={inputRef} />
            <button onClick={onIvestiClick}>Ivesti skaiciu</button>
            {
                skaicius &&
                <>
                    <p>Ivestas skaicius: {skaicius}</p>
                    <p>Ar skaicius yra lyginis? {arLyginis()}</p>
                </>
            }

        </div>
    )
}

export default Skaicius;