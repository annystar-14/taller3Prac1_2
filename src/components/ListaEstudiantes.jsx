import PropTypes from "prop-types";
import Estudiante from "./Estudiante";

const ListaEstudiantes = ({ estudiantes, borrar, setEstudiante }) => {
  return (
    <div className="col-md-7 mt-2">
      <div className="card">
        <div className="card-header">Lista de estudiantes</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Documento</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Correo</th>
                <th scope="col">Teléfono</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {estudiantes && estudiantes.length ? (
                estudiantes.map((est) => (
                  <Estudiante
                    key={est.id}
                    estudiante={est}
                    borrar={borrar}
                    setEstudiante={setEstudiante}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={6} scope="row">No hay estudiantes</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

ListaEstudiantes.propTypes = {
  estudiantes: PropTypes.array.isRequired,
  borrar: PropTypes.func.isRequired,
  setEstudiante: PropTypes.func.isRequired,
};

export default ListaEstudiantes;
