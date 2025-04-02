const Komp5 = () => {   
    
    const firstHandler = (event) => {
        console.log(event);
    }
    const secondHandler = (event) => {
        console.log(event.target);
    }
    
    return (
        <div>
            <h4>Komp5</h4>
            <button onClick={firstHandler} >FIRST</button>
            <button onClick={secondHandler}>SECOND</button>
        </div>
    );
}

export default Komp5;