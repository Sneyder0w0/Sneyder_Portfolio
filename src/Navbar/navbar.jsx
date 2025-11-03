import { Link } from "react-router-dom"
import "./navbar.css"

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav-links">
                        <li className="nav-item">
                            <Link className="nav-link1" aria-current="page" to="">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link2" to="">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link3" to="">
                                Skills/Interests
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link4" aria-current="page" to="" >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}