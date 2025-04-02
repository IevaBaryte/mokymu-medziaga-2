import { useState } from "react";

const Zodis = () => {
    const [zodis, setZodis] = useState('');
    const keiskZodi = () => {
        setZodis('pomidoras')
    }
    const keiskZodi2 = () => {
        setZodis('agurkas')
    }
    return (
        <div>
            <h1>Zodis</h1>
            <button onClick={keiskZodi}>spausk</button>
            <button onClick={keiskZodi2}>spausk</button>
            <p>{zodis}</p>
        </div>
    )
}
export default Zodis;