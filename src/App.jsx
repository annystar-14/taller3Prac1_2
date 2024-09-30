import { useState } from "react";
import Formulario from './components/Formulario';
import ListaEstudiantes from './components/ListaEstudiantes';

const App = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});

  const borrarEstudiante = (id) => {
    const nuevosEstudiantes = estudiantes.filter(est => est.id !== id);
    setEstudiantes(nuevosEstudiantes);
  };

  return (
    <div className="container">
      <div className="row">
        <Formulario
          estudiantes={estudiantes}
          setEstudiantes={setEstudiantes}
          estudiante={estudiante}
          setEstudiante={setEstudiante}
        />
        <ListaEstudiantes
          estudiantes={estudiantes}
          borrar={borrarEstudiante}
          setEstudiante={setEstudiante}
        />
      </div>
    </div>
  );
};

export default App;

