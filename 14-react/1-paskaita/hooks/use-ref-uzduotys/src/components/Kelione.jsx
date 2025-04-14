import { useState, useRef } from "react";

const Kelione = () => {
  const [kelioneKm, setKelioneKm] = useState(null);
  const [sanaudos, setSanaudos] = useState(null);
  const [kuroKaina, setKuroKaina] = useState(null);

  const kmRef = useRef(null);
  const sanaudosRef = useRef(null);
  const kainaRef = useRef(null);

  const handleClick = () => {
    const km = kmRef.current.value;
    const sanaudos = sanaudosRef.current.value;
    const kaina = kainaRef.current.value;

    if (km !== "" && sanaudos !== "" && kaina !== "") {
      setKelioneKm(Number(km));
      setSanaudos(Number(sanaudos));
      setKuroKaina(Number(kaina));
      
      kmRef.current.value = "";
      sanaudosRef.current.value = "";
      kainaRef.current.value = "";
    }
  };

  const kuroSunaudojimas = (km, sanaudos) => {
    return (km / 100) * sanaudos;
  };

  const kuroKainaViso = (sunaudota, kaina) => {
    return sunaudota * kaina;
  };

  const sunaudotaKuro = kelioneKm && sanaudos ? kuroSunaudojimas(kelioneKm, sanaudos) : null;
  const bendraKaina = sunaudotaKuro && kuroKaina ? kuroKainaViso(sunaudotaKuro, kuroKaina) : null;

  return (
    <div>
        <h2>Kelione</h2>
      <input type="number" ref={kmRef} placeholder="Keliones km" />
      <input type="number" ref={sanaudosRef} placeholder="Vidutines sanaudos (l/100km)" />
      <input type="number" ref={kainaRef} placeholder="Kuro kaina uz litra" />
      <button onClick={handleClick}>Skaičiuoti</button>
      {kelioneKm !== null && sanaudos !== null && kuroKaina !== null && (
        <div>
          <p>Keliones atstumas: {kelioneKm} km</p>
          <p>Vidutines kuro sanaudos: {sanaudos} l/100km</p>
          <p>Kuro kaina: {kuroKaina} €/l</p>
          <p>Kuro sunaudojimas: {sunaudotaKuro.toFixed(2)} litrų</p>
          <p>Bendra kuro kaina: {bendraKaina.toFixed(2)} €</p>
        </div>
      )}
    </div>
  );
};

export default Kelione;
