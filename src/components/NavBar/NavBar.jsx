import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar bg-light">
      <Link to="/entries">My Week</Link>
      &nbsp; || &nbsp;
      <Link to="/entries/new">New Entry</Link>
      &nbsp;&nbsp;
      <span>How are you {user.name}?</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

