import "./style.scss";
import Nav from "../../components/Nav"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1><Link to="/">Adrien Blanco</Link></h1>
            <Nav />
        </header>
    );
};
