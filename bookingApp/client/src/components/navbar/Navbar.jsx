import "./navbar.css";
import { Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Taj Booking</span>
        </Link>
        {user ? (
        <div className="navItems">
          <span>{user.username}</span>
          &nbsp;&nbsp;&nbsp;
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span onClick={handleClick} className="logo">  Logout</span>
        </Link>
        </div> 
        ) : (
          <div className="navItems">
            <Link to="/Register" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Register  </span>
        </Link>    
        &nbsp;&nbsp;&nbsp;
        <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">  Login</span>
        </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
