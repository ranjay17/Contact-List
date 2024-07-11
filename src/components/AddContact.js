// Importing hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Creating functional component for adding a contact
const AddContact = ({ setContacts }) => {
  
  // Creating state variables
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const navigate = useNavigate();

   // Making POST request to add a contact
  const handleAddContact = async () => {
    const newContact = { name, phone, email, website };
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(newContact),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    setContacts(prevContacts => [...prevContacts, data]);
    navigate('/');
  };

  return (
    <div className="add-contact">
      <div className="add-contact-header">
        <h2>Add Contact</h2>
        <img className="add-logo" src="https://cdn-icons-png.freepik.com/512/6570/6570292.png" alt="img" />
      </div>
      {/* Creating form to take user details to add a contact */}
      <form onSubmit={(e) => { e.preventDefault(); handleAddContact(); }}>
        <div>
          <label>Name:</label>
          <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="number" className="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" className="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Website:</label>
          <input type="text" className="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </div>
        <button type="submit" className="add-button">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
