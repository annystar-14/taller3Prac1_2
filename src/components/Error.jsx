import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>Error: </strong>
      {mensaje}
    </div>
  );
};

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
};

export default Error;
