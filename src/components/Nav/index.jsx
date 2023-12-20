import "./style.scss";
import { Link } from "react-router-dom";

export default function Nav() {

return (
    <nav className="nav">
        <Link className="nav__link" to={"#about"}>About</Link>
        <Link className="nav__link" to={"#projects"}>Projects</Link>
        <Link className="nav__link" to={"#contact"}>Contact</Link>
    </nav>
)

};