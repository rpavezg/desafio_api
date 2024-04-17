import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';


const MiApi =()=> {
    const [crypto, setCrypto] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [invertido, setInvertido] = useState(false);

    console.log(crypto);
    const obtenerInfo = async () => {
        try {
            let info = await fetch("https://www.feriadosapp.com/api/laws.json");
            let result = await info.json();
            setCrypto(result.data);
        } catch (error){
            console.log("Error");
        } 
    };

    useEffect(() =>{
        obtenerInfo();
    }, []);

    const manejarInversion = () => setInvertido(!invertido);

    const datosMostrados = invertido ? [...crypto].reverse() : crypto;

  return (
    <>
      <input type="text" style={{ float: "left" }} value={busqueda} onChange={(e) => {
          setBusqueda(e.target.value);
        }} placeholder="Busca el contenido deseado" className="rounded mb-4"
      />
      {datosMostrados && datosMostrados.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Ley</th>
              <th>Contenido</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {datosMostrados
              .filter((crypto) =>
                crypto.content.toLowerCase().includes(busqueda.toLowerCase())
              )
              .map((crypto, index) => (
                <tr key={index}>

                  <td className='title'>{crypto.title}</td>
                  <td className='content'>{crypto.content}</td>
                  <td><a href={crypto.link} target="_blank">Visita {crypto.title}</a></td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <h2>No se encontraron coincidencias</h2>
      )}
    </>
  );
};

export default MiApi;