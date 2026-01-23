import { NavLink } from "react-router-dom";
export default function Sidebar() {
    return (
        <aside className="p-3 border rounded-4" style={{ minWidth: 260, background: "#f8fbff" }}>
            <h4 className="mb-3">Navigation</h4>
            <nav className="nav flex-column gap-2">
                <NavLink end to="ding-a-ling_website_frontend/" className="nav-link border rounded-3 px-3 py-2">
                    Home
                </NavLink>
                <NavLink to="ding-a-ling_website_frontend/portfolio" className="nav-link border rounded-3 px-3 py-2">
                    Portfolio
                </NavLink>
                <NavLink to="ding-a-ling_website_frontend/product-request" className="nav-link border rounded-3 px-3 py-2">
                    Product Request
                </NavLink>
                <NavLink to="ding-a-ling_website_frontend/about" className="nav-link border rounded-3 px-3 py-2">
                    About
                </NavLink>
            </nav>
        </aside>
    );
}