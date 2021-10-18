import s from "./ContactList.module.css";
export default function ContactList({ contacts, deliteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={s.item}>
          <p className={s.name}>Name: {contact.name}</p>
          <p className={s.number}>Number: {contact.number}</p>
          <button className={s.buttonDelete} type="button" onClick={() => deliteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
