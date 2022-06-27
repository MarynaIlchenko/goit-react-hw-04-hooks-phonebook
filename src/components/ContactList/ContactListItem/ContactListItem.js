import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li id={id} className={styles.item}>
      {name}: {number}
      <button className={styles.button} onClick={() => deleteContact(id)}>
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
