
import { useNavigate } from 'react-router-dom';

// Creating functional component for displaying a contact
const ContactPage = ({ contact, onDelete }) => {
  const { id, name, phone, email, website } = contact;
  const navigate = useNavigate();

   // Handle edit button click
  const handleEdit = () => {
    console.log('Navigating to edit page with contact:', contact);
    navigate(`/edit-contact/${id}`, { state: contact });
  };

  // Handle delete button click
  const handleDelete = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className="contact-card">
      <div className='contact-information'>
        {/* Displaying contact details */}
        <h3>{name}</h3>
        <h5>{phone}</h5>
        <h5>{email}</h5>
        <h5>{website}</h5>
      </div>
       {/* Edit and delete buttons */}
      <button className='edit-button' onClick={handleEdit}>Edit Contact</button>
      <button className='delete-button' onClick={handleDelete}>Delete Contact</button>
    </div>
  );
};

export default ContactPage;
