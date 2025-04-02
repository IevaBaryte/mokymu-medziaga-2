const Komp2 = () => {   
    
    const handleClick = () => {
        alert('You clicked me too');
    }
    return (
        <div>
            <h4>Komp2</h4>
            <button onClick={()=> handleClick}>
                Click me too
            </button>
        </div>
    );
}

export default Komp2;