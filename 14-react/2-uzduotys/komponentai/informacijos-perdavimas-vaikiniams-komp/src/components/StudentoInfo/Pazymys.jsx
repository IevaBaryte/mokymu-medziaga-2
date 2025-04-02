const Pazymys = ({ pazymys }) => {
    const pazymioTikrinimas = (pazymys) => (pazymys >= 5 ? "Teigiamas" : "Neigiamas");

    return (
        <div>
            <p>Pažymys: {pazymys} - {pazymioTikrinimas(pazymys)}</p>
        </div>
    );
}; 

export default Pazymys;