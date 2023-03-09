import { useState } from "react";
import "./app.css";
import Card from "./components/Card";

function App() {
  const [info, setInfo] = useState({
    nombre: "",
    dato: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (
      info.nombre.length > 3 &&
      info.dato.length > 6 &&
      info.nombre[0] !== " "
    ) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <div className="card">
      <div class="card-header text-center h4">
        {" "}
        ¿ Cuál es tu libro favorito ?{" "}
      </div>
      <form onSubmit={handlerSubmit}>
        <div className="card-body">
          <input
            className="nombre-input form-control"
            type="text"
            value={info.nombre}
            onChange={(e) => setInfo({ ...info, nombre: e.target.value })}
            placeholder="ingresa tú nombre"
          />
          <hr />
          <input
            className="dato-input form-control"
            type="text"
            value={info.dato}
            onChange={(e) => setInfo({ ...info, dato: e.target.value })}
            placeholder="ingresa tú respuesta"
          />
          <hr />
          <div class="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              {" "}
              Agregar{" "}
            </button>
          </div>
        </div>
      </form>
      <div className="error-container">
        {err && "Por favor chequea que la información sea correcta"}
      </div>

      {show && <Card nombre={info.nombre} dato={info.dato} />}
    </div>
  );
}
export default App;
