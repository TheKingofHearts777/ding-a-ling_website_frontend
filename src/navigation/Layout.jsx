import Sidebar from "./Sidebar.jsx";
import './App.css';

export default function Layout({ title, children }) {
    return (
        <div className="container">
            <div className="row g-4">
                {/* Left nav */}
                <div className="col-12 col-md-4 col-lg-3">
                    <Sidebar />
                </div>
                {/* Main content */}
                <div className="col-12 col-md-8 col-lg-9">
                    <div className="card">
                        <h1 className="text-center mb-4">{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}