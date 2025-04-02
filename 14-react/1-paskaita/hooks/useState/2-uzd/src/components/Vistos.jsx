import { useState } from "react";

const Vistos = () => {
    const uzsakymai = 100;
    const [kiausiniai, setKiausiniai] = useState(0);

    const kiausiniuHandler = (e) => {
        setKiausiniai(e.target.value);
    }

    const arUzteksKiausiniu = () => {
        const skirtumas = kiausiniai - uzsakymai;
        if (skirtumas >= 0) {
            return `Kiausiniu uzteks. Liks dar ${skirtumas} kiausiniai.`;
        } else {
            return `Truksta kiausiniu. Vistoms reikia ispereti dar: ${Math.abs(skirtumas)} kiausinius.`;
        }
    };

    return (
        <div>
            <h2>Kiausiniu ukis</h2>
            <div>
                <label htmlFor="kiausiniaiInput">Siandien vistos isperejo</label>
                <input onChange={kiausiniuHandler} type="number" id="pirmasInput" />
            </div>

            <p>{arUzteksKiausiniu()}</p>
        </div>
    );
};

export default Vistos;