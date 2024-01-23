import style from './index.module.css'
import PropTypes from 'prop-types';

function Inputs({type, placeholder, id, name}) {
  return (
    < >
      <input type={type} name={name} id={id} placeholder={placeholder} className={style.inputs} />
    </>
  )
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Inputs