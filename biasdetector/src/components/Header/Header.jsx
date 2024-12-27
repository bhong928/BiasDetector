import React from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import './HeaderStyles.css'; 

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <header className="headermain">
            <nav className = "Navigation">  
            <img src="src/assets/ehtslogo_login.png" alt="Logo" className="nav-logo" />
                {/* Hide Nav Bar Items certain pages */}
                {location.pathname === "/Home" && (
                    <>
                        <Link to="/Login">Login</Link>
                        <Link to="/Report">Report</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                )}
                {location.pathname === "/Login" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Report">Report</Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                )}
                {location.pathname === "/Report" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                )}
                {location.pathname !== "/Home" && location.pathname !== "/Login" && location.pathname !== "/Report" && location.pathname !== "/EmployeeDisplay" && (
                    <>
                        <Link to="/Report">Report</Link>
                        <Link to="/EmployeeDisplay">Employee Display</Link>
                    </>
                )}
                {location.pathname === "/EmployeeDisplay" && (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/Report">Report</Link>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;