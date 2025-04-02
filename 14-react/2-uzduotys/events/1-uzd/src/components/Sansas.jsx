const Sansas = () => {
    let skaicius = Math.floor(Math.random() * 10) + 1;

    const tikrintiArLaimejo = () => { 
        if (skaicius >= 5) {
            alert(`Sveikiname! Laimejote! Skaicius: ${skaicius}`)
        } else  if (skaicius < 5 && skaicius === 0) {
            alert(`Deja, pralaimejote. Skaicius: ${skaicius}`)
        }
    };
    
    return (
        <div>
            <h1>Isbandyk savo laime!</h1>
            <button onClick={tikrintiArLaimejo}>Bandyti laime</button>
        </div>
    )
};

export default Sansas;