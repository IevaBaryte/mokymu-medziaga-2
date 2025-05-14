import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                setData(data)
                setLoading(false)
        });
        }, 3000)
        
    }, [url])

    return { data, loading }
}

export default useFetch;