import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={"/"} className="site-title">
        Employee Management System
      </Link>
      <ul>
        <li>
          <Link to={"/employees"} className="nav-link">
            Employees
          </Link>
        </li>
        <li>
          <Link to={"/tasks"} className="nav-link">
            Tasks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
