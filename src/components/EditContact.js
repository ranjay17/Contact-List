
// Importing hooks
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Creating EditContact functional component
const EditContact = ({ updateContact }) => {
  const navigate = useNavigate();
  const { state: contact } = useLocation();

  // Creating state variables using useState
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);
  const [website, setWebsite] = useState(contact.website);

  // Handle update method to edit contact details
  const handleUpdate = async () => {
    const updatedContact = { ...contact, name, phone, email, website };
    console.log('Updating contact:', updatedContact);
    await updateContact(contact.id, updatedContact);
    console.log('Contact updated successfully');
    navigate('/');
  };

  return (
    <div className="edit-contact">
      <h2>Edit Contact</h2>

      {/* Creating form to edit contact details */}
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Website:</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <button type="submit" className='update-button'>Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
