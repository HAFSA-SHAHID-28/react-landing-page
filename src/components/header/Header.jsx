import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${styles.header}`}>
                <div className="container-xxl">
                    <a className={`navbar-brand ${styles.logo}`} href="#home"> SoftLand</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto d-flex">
                            <li className="nav-item">
                                <a className="nav-link" href="#hero">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#features">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#dropdown" role="button" data-bs-toggle="dropdown"> Dropdown</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#service">Services</a></li>
                                    <li><a className="dropdown-item" href="#benefit">Benefit</a></li>
                                    <li><a className="dropdown-item" href="#dropdown">Career</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;