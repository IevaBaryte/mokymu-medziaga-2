const Diena = (props) => {

    const arDetisKepure= (temperatura) => {
        if (temperatura > 18) {
            return 'Valioooo, kepures nereikia'
        } else {
            return 'Lauke salta.. Dekis kepure..'
        }
    }

    return (
        <div>
            <h3>Dienos temperatura: {props.temp}</h3>
            <p>{arDetisKepure(props.temp)}</p>
        </div>
    )
};

export default Diena;