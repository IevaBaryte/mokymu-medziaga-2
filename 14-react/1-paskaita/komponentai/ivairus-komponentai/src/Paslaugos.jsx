const Paslauga = ({ pavadinimas, aprasymas }) => {
    return (
      <div className="paslauga">
        <h3>{pavadinimas}</h3>
        <p>{aprasymas}</p>
      </div>
    );
  };
  
  const Paslaugos = () => {
    return (
      <div className="paslaugos">
        <h2>Mūsų paslaugos</h2>
        <Paslauga pavadinimas="Maistas" aprasymas="Maisto tiekimas Jūsų šventiniam stalui." />
        <Paslauga pavadinimas="Remontas" aprasymas="Kompiuterių, elektronikos remontas." />
        <Paslauga pavadinimas="Konsultacijos" aprasymas="Konsultacijos suteikiamos įairiausiais socialinių tinklų klausimais." />
      </div>
    );
  };

  export default Paslaugos;