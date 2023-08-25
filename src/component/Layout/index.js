import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet, Link } from "react-router-dom";
import './style.scss';
const Layout = () => {
    
    return (
        <>
            <ToastContainer />
            <div className="topnav" id="myTopnav">
                <Link to="/" className="active">Home</Link>
                <Link to="/List">customer List</Link>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;