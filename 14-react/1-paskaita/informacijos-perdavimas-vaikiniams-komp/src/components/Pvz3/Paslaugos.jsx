import Paslauga from './Paslauga';

const Paslaugos = () => {
    return (
        <div>
            <h2>Paslaugos</h2>
            <Paslauga pavadinimas="Ravejimas" kategorija="Sodas"/>
            <Paslauga pavadinimas="Tvarkymas" kategorija="Mestras"/>
            <Paslauga pavadinimas="Melzimas" kategorija="Gyvunai"/>
        </div>
    )
};

export default Paslaugos;