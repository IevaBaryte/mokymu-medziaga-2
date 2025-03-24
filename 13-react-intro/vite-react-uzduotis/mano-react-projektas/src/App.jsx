import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Card title="Kortelė be vaiko" />
      <Card title="Pirmas kortelės pavadinimas">
        <p>Ši kortelė skirta pirmam turiniui</p>
        <button>PAUSPAUSK</button>
      </Card>
    </div>
  );
}

export default App;