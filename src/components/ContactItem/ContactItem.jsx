import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Info, Item } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleContactDelete = () => dispatch (deleteContact(id));

  return (
    <Item>
      <Info>
        {name}: {number}
      </Info>
      <button type="button" onClick={handleContactDelete}>
        Delete
      </button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
