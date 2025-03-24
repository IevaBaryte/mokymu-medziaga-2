const Komp5 = () => {
    let automobiliai = [
        'Audi', 'BMW', 'Volvo', 'Toyota', 'Volkswagen', 'Mazda'
    ];
    let title = 'Mano automobiliai:';

    return (
        <div>
            <h1>{title}</h1>
            { automobiliai.map((automobilis, index) => <li key={index}>{automobilis}</li> )}
        </div>
    )
};

export default Komp5;