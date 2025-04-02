import Automobilis from "./Automobilis";

const Servisas = () => {
    let automobiliai = [
        {gamintojas: 'Audi', modelis: 'a7'},
        {gamintojas: 'Audi', modelis: 'a5'},
        {gamintojas: 'Audi', modelis: 'a6'},
        {gamintojas: 'BMW', modelis: 'x5'},
        {gamintojas: 'Mazda', modelis: '6'},
        {gamintojas: 'Toyota', modelis: 'Prius'}
    ]
    return (
        <div>
            <h2>Servisas</h2>
            
            {
            automobiliai.map((automobilis, i) => <Automobilis key={i} auto={automobilis}/>)
            }

            {/* <Automobilis auto={automobiliai[0]}/>
            <Automobilis auto={automobiliai[1]}/>
            <Automobilis auto={automobiliai[2]}/>
            <Automobilis auto={automobiliai[3]}/>
            <Automobilis auto={automobiliai[4]}/>
            <Automobilis auto={automobiliai[5]}/> */}
        </div>
    )
};

export default Servisas;