const Komp4 = () => {   

    const firstHandler = () => {
        console.log('FIRST');
    }
    const secondHandler = () => {
        console.log('SECOND');
    }
    const thirdHandler = () => {
        console.log('THIRD');
    }
    
    return (
        <div>
            <h4>Komp4</h4>
            <button onClick={firstHandler} >FIRST</button>
            <button onClick={secondHandler}>SECOND</button>
            <button onClick={thirdHandler}>THIRD</button>
            
        </div>
    );
}

export default Komp4;