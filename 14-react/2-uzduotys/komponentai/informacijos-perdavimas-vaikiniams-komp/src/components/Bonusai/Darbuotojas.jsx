const Darbuotojas = ({vardas, pavarde, bonusas}) => {
    const koksBonusas = (bonusas) => {
        if (bonusas === 0) return "Gaila ☹";
        if (bonusas > 0 && bonusas < 100) return "Bent ant kebabo užmetė..";
        return "Nu, jau kažkas geriau!";
    };

    return (
        <div>
            <h3>{vardas} {pavarde}</h3>
            <p>Tavo priedas prie pašalpelės: {bonusas} €</p>
            <h5>{koksBonusas(bonusas)}</h5>
        </div>
    );
};

export default Darbuotojas;