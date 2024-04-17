import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './componentes/MiApi';

const App = () => {

  return (
    <>
      <div className='container'>
        <h2 className='pt-4'> Biblioteca del Congreso</h2>
        <MiApi/>
      </div>
      
    </>
  )
}

export default App
