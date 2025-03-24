import TekstoVaik from "./TekstoVaik";

const TekstoBendras = () => {
    let manoKintamasis = 'Tekstas is kintamojo';
    let tekstai = [
        'labas',
        'labas labas',
        'labas labas labas',
        'labas labas labas labas',
        '',
        '',
        '',
        'labas labas labas labas labas'
    ]
    return (
        <div>
            Teksto Dalykai
            <div>
                <TekstoVaik tekstas="Labas"/>
                <TekstoVaik tekstas="Antras vaikas"/>
                <TekstoVaik tekstas="Dar vienas vaikas su tekstu"/>
                <TekstoVaik tekstas="lorem lorem lorem"/>
                <TekstoVaik tekstas={manoKintamasis}/>
                <TekstoVaik/>
                {
                    tekstai.map((item, key) => <TekstoVaik tekstas={item}/>)
                }
            </div>
        </div>
    )
}

export default TekstoBendras;