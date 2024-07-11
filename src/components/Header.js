
// Importing Link component for routing
import { Link } from 'react-router-dom';

// Creating header functional component
const Header = () => {
  return (
    <div className="header">
      <div className='contact-icon'>
        <img className='contact-logo' src="https://cdn-icons-png.freepik.com/512/6570/6570292.png" alt='logo' />
        <h1>Contact List</h1>
      </div>
      <div className="nav-items">
        <ul>
          {/* Providing navigation links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add-contact">Add Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
