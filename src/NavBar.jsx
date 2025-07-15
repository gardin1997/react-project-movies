import { Outlet,NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
function NavBar(){
    return(
        <nav className="navbar">
            <h1>Movies</h1>
            <NavLink className="nav-link" to="/">Accueil</NavLink>
            <NavLink className="nav-link" to="/Favoris">Mes favoris</NavLink>
            <NavLink className="nav-link" to="/NewFilm">Ajouter un film</NavLink>
            <ThemeSwitcher />
        </nav>
    );
}

export default NavBar;