import './App.css'
import InlineStylingJsObject from './components/CSS/inline-styling/InlineStylingJsObjects'
import BootstrapCss from './components/CSS/library/BootstrapCss'
import InlineStylingPlain from './components/CSS/plain/InlineStylingPlain'
import Plain from './components/CSS/plain/Plain'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <h1>CSS Examples:</h1>
     <Plain/>
     <hr />
     <InlineStylingPlain/>
     <hr />
     <InlineStylingJsObject/>
     <hr />
     <BootstrapCss/>
    </>

  )
}

export default App
