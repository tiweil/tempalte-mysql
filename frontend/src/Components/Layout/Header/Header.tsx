import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<NavLink to="/">Home</NavLink>
            <span> | </span>
            <NavLink to="/Add">Add</NavLink>
        </div>
    );
}

export default Header;
