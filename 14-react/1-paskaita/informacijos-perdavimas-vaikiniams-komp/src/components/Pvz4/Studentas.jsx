const Studentas = (props) => {
    console.log(props)

    return (
        <div>
            <h4>{props.studentas.vardas} {props.studentas.pavarde}</h4>
            <p>yra {props.studentas.amzius}m. amziaus</p>
            <p></p>
        </div>
    )
};

export default Studentas;