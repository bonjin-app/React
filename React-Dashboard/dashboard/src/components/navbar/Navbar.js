import './Navbar.css';
import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar-left">
                <a href="#">Subscribers</a>
                <a href="#">Video Management</a>
                <a href="#" className="active-link">Admin</a>
            </div>
            <div className="navbar-right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>  
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;