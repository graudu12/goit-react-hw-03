import Contact from './Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.menuList}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contacts={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
