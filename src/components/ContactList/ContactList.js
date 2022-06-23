import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contactsArr, deleteContact }) => {
  return (
    <div>
      <ul className={style.contactBlock}>
        {contactsArr.length > 0 &&
          contactsArr.map(({ name, number, id }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          ))}
      </ul>
    </div>
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
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
