const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src="images/logo.png" alt="Logo" className="logo" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cupiditate
                accusamus molestiae illum distinctio debitis eaque qui odio, iusto
                recusandae est autem! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
                </p>
            </div>
            <div className="footer-links">
                <div className="link-section">
                <h2>Information</h2>
                <ul className="link-list">
                    <li>
                    <a href="#">About Us</a>
                    </li>
                    <li>
                    <a href="#">Classes</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
                </div>
                <div className="link-section">
                <h2>Helpful Links</h2>
                <ul className="link-list">
                    <li>
                    <a href="#">Services</a>
                    </li>
                    <li>
                    <a href="#">Supports</a>
                    </li>
                    <li>
                    <a href="#">Terms &amp; Condition</a>
                    </li>
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                </ul>
                </div>
            </div>
            </footer>

    );
};

export default Footer;