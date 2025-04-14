import React, { useState } from 'react';

const Prekes = () => {
  const [pavadinimas, setPavadinimas] = useState('');
  const [kaina, setKaina] = useState('');
  const [kiekis, setKiekis] = useState('');
  const [prekes, setPrekes] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pavadinimas || !kaina || !kiekis) return;

    const naujaPreke = {
      pavadinimas,
      kaina: parseFloat(kaina),
      kiekis: parseInt(kiekis)
    };

    setPrekes((prev) => [naujaPreke, ...prev]);

    setPavadinimas('');
    setKaina('');
    setKiekis('');
  };

  const isvalytiPrekes = () => {
    setPrekes([]);
  };

  const atrinktiMazaiLiku = () => {
    return prekes.filter(preke => preke.kiekis < 5);
  };

  return (
    <div>
      <h2>Prekių įvedimas</h2>


      <form onSubmit={handleSubmit}>
        <div>
          <label>Pavadinimas:</label>
          <input
            type="text"
            value={pavadinimas}
            onChange={(e) => setPavadinimas(e.target.value)}
          />
        </div>
        <div>
          <label>Kaina (€):</label>
          <input
            type="number"
            value={kaina}
            onChange={(e) => setKaina(e.target.value)}
          />
        </div>
        <div>
          <label>Kiekis:</label>
          <input
            type="number"
            value={kiekis}
            onChange={(e) => setKiekis(e.target.value)}
          />
        </div>
        <button type="submit">Pridėti prekę</button>
      </form>


      {prekes.length > 0 ? (
        <div>
          <h3>Visos prekės:</h3>
          {prekes.map((preke, index) => (
            <div key={index}>
              <p><strong>Pavadinimas:</strong> {preke.pavadinimas}</p>
              <p><strong>Kaina:</strong> {preke.kaina} €</p>
              <p><strong>Kiekis:</strong> {preke.kiekis} vnt.</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Kol kas nėra įvestų prekių</p>
      )}


      {prekes.length > 0 && (
        <button onClick={isvalytiPrekes}>
          Išvalyti visas prekes
        </button>
      )}


      {prekes.length > 0 && atrinktiMazaiLiku().length > 0 && (
        <div>
          <h3>Prekės, kurių likutis mažesnis nei 5 vnt.:</h3>
          {atrinktiMazaiLiku().map((preke, index) => (
            <div key={index}>
              <p><strong>{preke.pavadinimas}</strong> – {preke.kiekis} vnt.</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prekes;
