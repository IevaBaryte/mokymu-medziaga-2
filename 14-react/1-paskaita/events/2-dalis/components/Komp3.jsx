const Komp3 = () => {
    let zodis = 'Azuolas';

    const inputHandler = (e) => {
        let ivestasZodis = e.target.value;

        if (zodis === ivestasZodis) {
            console.log('Bam, atspejai!')
        } else {
            console.log('Bandyk dar karta!');
        }
    }

    return (
        <div>
            <h2>Komp3</h2>
            <input type="text" onChange={inputHandler}/>
        </div>
    )
};

export default Komp3;