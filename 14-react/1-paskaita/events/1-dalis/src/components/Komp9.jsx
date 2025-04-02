const Komp9 = () => {
    let slaptasSkaicius = Math.floor(Math.random() * 3) + 1;

    const spetiSkHandler = (spejimas) => {
        console.log(
            slaptasSkaicius === spejimas ? 'Atspejote' : 'Neatspejote'
        )
    }
    return (
        <div>
            <h4>Komp9</h4>
            <button onClick={() => spetiSkHandler(1)}>Spejimas 1</button>
            <button onClick={() => spetiSkHandler(2)}>Spejimas 2</button>
            <button onClick={() => spetiSkHandler(3)}>Spejimas 3</button>
        </div>
    )
};

export default Komp9;