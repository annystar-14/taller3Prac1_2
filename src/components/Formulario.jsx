import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Formulario = ({ setEstudiantes, estudiantes, estudiante, setEstudiante }) => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if ([documento, nombre, apellido, telefono, correo].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const obj = { documento, nombre, apellido, telefono, correo };

    // Actualiza el estudiante existente o añade uno nuevo
    if (estudiante.id) {
      obj.id = estudiante.id;
      const otros = estudiantes.map((est) => (est.id === estudiante.id ? obj : est));
      setEstudiantes(otros);
    } else {
      obj.id = getId();
      setEstudiantes([...estudiantes, obj]);
    }

    limpiarCampos();
  };

  const getId = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };

  const limpiarCampos = () => {
    setDocumento("");
    setNombre("");
    setApellido("");
    setTelefono("");
    setCorreo("");
    setEstudiante({});
  };

  useEffect(() => {
    if (estudiante.id) {
      setDocumento(estudiante.documento);
      setNombre(estudiante.nombre);
      setApellido(estudiante.apellido);
      setTelefono(estudiante.telefono);
      setCorreo(estudiante.correo);
    }
  }, [estudiante]);

  return (
    <div className="col-md-5 mt-2">
      <form onSubmit={enviarFormulario}>
        <div className="card">
          <div className="card-header">Formulario</div>
          {error && <Error mensaje="Todos los campos son obligatorios" />}
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text">Documento:</span>
              <input
                type="number"
                className="form-control"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Nombre:</span>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Apellido:</span>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Teléfono:</span>
              <input
                type="tel"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Correo:</span>
              <input
                type="email"
                className="form-control"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                {estudiante.id ? "Editar" : "Registrar"}
              </button>
              <button type="button" className="btn btn-info my-2" onClick={limpiarCampos}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Definición de tipos para las propiedades del componente
Formulario.propTypes = {
  setEstudiantes: PropTypes.func.isRequired,
  estudiantes: PropTypes.array.isRequired,
  estudiante: PropTypes.object.isRequired,
  setEstudiante: PropTypes.func.isRequired,
};

export default Formulario;
