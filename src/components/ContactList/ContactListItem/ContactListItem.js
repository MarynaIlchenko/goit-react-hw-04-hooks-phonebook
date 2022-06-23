import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
  // const deleteContact = () => deleteCont(id);
  return (
    <li className={style.list}>
      <span className={style.contactName}>{name} : </span>
      <span>{number} </span>
      <button
        className={style.btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
