import { useEffect } from "react";
import { useState } from "react";

const Komp1 = () => {
    const [count, setCount] = useState(0)
    const [zodis, setZodis] = useState('Zodis')

    console.log('Komp1 mounted')

    useEffect(() => {
        console.log('useEffect: komp1 mounted')
    }, [])

    useEffect(() => {
        console.log('useEffect: count value is changed');
        if (count > 5) {
            setCount(0)
        }
    }, [count])

    useEffect(() => {
        console.log('useEffect: count value is changed');
    }, [count, zodis])

    useEffect(() => {
        return () => {
            console.log('Unmount')
        }}, [])

    const handleClick = () => {
        console.log('Click');
        setZodis('Word');
        setCount(count + 1)
    }

    return (
        <div>
            <h2>komp1</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{ count }</p>
            <p>{ zodis }</p>
        </div>
    )
}

export default Komp1