import { NavLink } from "react-router-dom";
import './App.css';

export default function Sidebar() {
    return (
        <aside className="p-3 border rounded-4 card" style={{ minWidth: 260 }}>
            <h4 className="mb-3">Navigation</h4>
            <nav className="nav flex-column gap-2">
                <NavLink end to="/" className="nav-link border rounded-3 px-3 py-2">
                    Home
                </NavLink>
                <NavLink to="/portfolio" className="nav-link border rounded-3 px-3 py-2">
                    Portfolio
                </NavLink>
                <NavLink to="/product-request" className="nav-link border rounded-3 px-3 py-2">
                    Product Request
                </NavLink>
                <NavLink to="/about" className="nav-link border rounded-3 px-3 py-2">
                    About
                </NavLink>
            </nav>
        </aside>
    );
}