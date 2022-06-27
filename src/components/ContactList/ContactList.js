import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.section}>
        {contacts.length
          ? contacts.map(({ name, number, id }) => (
              <ContactListItem
                key={id}
                name={name}
                number={number}
                id={id}
                deleteContact={deleteContact}
              />
            ))
          : 'No contacts'}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
