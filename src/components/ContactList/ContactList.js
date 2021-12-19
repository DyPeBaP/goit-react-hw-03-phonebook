import s from "./ContactList.module.css";
import PropTypes from "prop-types";

export default function ContactList({ contacts, deliteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.name}>Name: {name}</p>
          <p className={s.number}>Number: {number}</p>
          <button
            className={s.buttonDelete}
            type="button"
            onClick={() => deliteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deliteContact: PropTypes.func.isRequired,
};