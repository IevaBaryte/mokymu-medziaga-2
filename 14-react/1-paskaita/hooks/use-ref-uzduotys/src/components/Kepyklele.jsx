import React, { useRef, useState } from 'react';

const Kepyklele = () => {
  const darbuotojaiRef = useRef();
  const perValRef = useRef();
  const valandosRef = useRef();

  const uzsakymasRef = useRef();
  const [uzsakymai, setUzsakymai] = useState([]);

  const pridetiUzsakyma = () => {
    const kiekis = parseInt(uzsakymasRef.current.value);
    if (!isNaN(kiekis) && kiekis > 0) {
      setUzsakymai([...uzsakymai, kiekis]);
      uzsakymasRef.current.value = '';
    }
  };

  const bendraSuma = uzsakymai.reduce((acc, val) => acc + val, 0);

  const gautiPajeguma = () => {
    const d = parseInt(darbuotojaiRef.current.value);
    const k = parseInt(perValRef.current.value);
    const v = parseInt(valandosRef.current.value);
    if (!isNaN(d) && !isNaN(k) && !isNaN(v)) {
      return d * k * v;
    }
    return null;
  };

  const pajegumas = gautiPajeguma();

  const spesivykdyti = pajegumas !== null && bendraSuma > 0
    ? pajegumas >= bendraSuma
    : null;

  return (
    <div>
      <h2>Kepyklėlės duomenys</h2>

      <div>
        <label>Darbuotojų skaičius: </label>
        <input type="number" ref={darbuotojaiRef} />
      </div>

      <div>
        <label>Kepinių per valandą (vienam darbuotojui): </label>
        <input type="number" ref={perValRef} />
      </div>

      <div>
        <label>Darbo valandos per dieną: </label>
        <input type="number" ref={valandosRef} />
      </div>

      <hr />

      <h3>Užsakymai</h3>
      <div>
        <input type="number" ref={uzsakymasRef} />
        <button onClick={pridetiUzsakyma}>Pridėti užsakymą</button>
      </div>

      {uzsakymai.length > 0 && (
        <div>
          <p>Bendra užsakymų suma: {bendraSuma}</p>
        </div>
      )}

      {pajegumas !== null && (
        <div>
          <p>Bendras kepyklos pajėgumas: {pajegumas}</p>
        </div>
      )}

      {spesivykdyti !== null && (
        <div>
          <p>
            Ar kepykla spės įvykdyti užsakymus?{' '}
            {spesivykdyti ? 'Taip' : 'Ne'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Kepyklele;
