import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, deleteCont }) => {
  return (
    <ul className={style.contactBlock}>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteCont={deleteCont}
          />
        ))}
    </ul>
  );
};

// const ContactList = ({ contactsArr, deleteContact }) => {
//   return (
//     <div>
//       <ul className={style.listBlock}>
//         {contactsArr.length > 0 &&
//           contactsArr.map(({ name, number, id }) => {
//             return (
//               <li className={style.list} key={id}>
//                 <p>
//                   {name} : {number}
//                 </p>
//                 <button
//                   type="button"
//                   className={style.button}
//                   onClick={() => deleteContact(id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             );
//           })}
//       </ul>
//     </div>
//   );
// };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteCont: PropTypes.func.isRequired,
};

// ContactList.propTypes = {
//   contactsArr: propTypes.arrayOf(
//     propTypes.shape({
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//       id: propTypes.string.isRequired,
//     })
//   ),
// };

// export default ContactList;
