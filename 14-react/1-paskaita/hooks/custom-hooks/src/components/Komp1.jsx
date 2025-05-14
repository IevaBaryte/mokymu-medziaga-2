import { useState } from "react";
import useFetch from "../Hooks/useFetch";

const Komp1 = () => {
    const { data, loading } = useFetch('https://api.ipify.org?format=json')
    const [ip, setIp] = useState(null)

    const getData = () => {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIp(data.ip));
    }
    return (
        <div>
            <h3>Api pvz</h3>
            <button onClick={getData}>Get IP data</button>
            <p>Tavo IP yra: {ip}</p>
            <p>Tavo custom hooks yra: 
                {loading ? 'Loading data....' : data?.ip}</p>
        </div>
    )
}

export default Komp1