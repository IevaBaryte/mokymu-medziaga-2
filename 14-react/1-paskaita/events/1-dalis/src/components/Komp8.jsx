const Komp8 = () => {
    let slaptasSkaiciukas = Math.floor(Math.random() * 3) + 1;

    const speti1Handler = () => {
        console.log(slaptasSkaiciukas === 1 ? 'Atspejote - 1' : 'Neatspejote - 1');
    }

    const speti2Handler = () => {
        console.log(slaptasSkaiciukas === 1 ? 'Atspejote - 1' : 'Neatspejote - 1');
    }

    const speti3Handler = () => {
        console.log(slaptasSkaiciukas === 1 ? 'Atspejote - 1' : 'Neatspejote - 1');
    }

    return (
        <div>
            <h3>Komp8</h3>
            <button onClick={speti1Handler}>Spejimas 1</button>
            <button onClick={speti2Handler}>Spejimas 2</button>
            <button onClick={speti3Handler}>Spejimas 3</button>

        </div>
    )
};

export default Komp8;