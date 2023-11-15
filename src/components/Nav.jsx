import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Startside</NavLink>
            <NavLink to="/names">Navne</NavLink>
            <NavLink to="/form">formular</NavLink>
        </nav>
    );
}