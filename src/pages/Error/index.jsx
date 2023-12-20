import { Link } from "react-router-dom";

export default function Error() {
    document.title = "Portfolio Adrien Blanco - Page not found"

    return (
        <main>
            <section className="">
                <h1>404</h1>
                <h2>This page does not exist</h2>
                <h3><Link to="/">Return to homepage</Link></h3>
            </section>
        </main>
    )
};