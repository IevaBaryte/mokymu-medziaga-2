const Komp6 = () => {   
    
    const slaptasSkHandler = () => {
        let slaptasSK = Math.floor(Math.random() * 10) + 1;
        console.log(slaptasSK);
    }

    return (
        <div>
            <h4>Komp6</h4>
            <button onClick={slaptasSkHandler}>Slpatas skaicius</button>
            
        </div>
    );
}

export default Komp6;