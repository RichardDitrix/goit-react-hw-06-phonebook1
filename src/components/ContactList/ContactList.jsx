import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
