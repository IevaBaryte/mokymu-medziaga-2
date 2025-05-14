import useLocalStorage from "../hooks/useLocalStorage";


const Komp4 = () => {

    const [storedValue, setValue] = useLocalStorage('kursas is custom hook');

    const addDataWithoutHook = () => {

        localStorage.setItem('kursas', 'react mokymai');
    }

    const addDataWithHook = () => {
        // setValue('react mokymai is custom hook');
        setValue({
            vardas: 'jonas',
            role: 'admin'
        })
    }

    const duokManReiksmeIsLocalStorage = () => {
        if(typeof storedValue === 'object') {
            return 'objektas'
        }
        return storedValue ? storedValue : 'Duomenu nera';
    }

  return (
    <div>
      <h2>Local storage</h2>
      <button onClick={addDataWithoutHook}> add data without hook </button>
      <button onClick={addDataWithHook}> add data with hook </button>
      <p>{duokManReiksmeIsLocalStorage()}</p>
    </div>
  );
}

export default Komp4;