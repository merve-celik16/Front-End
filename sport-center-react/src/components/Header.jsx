import React, { useEffect, useRef } from 'react';


const Header = () => {
  const navbarRef = useRef(null);

  // When scroll, change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbarRef.current.classList.remove('transparent'); // Scroll
        navbarRef.current.style.backgroundColor = '#355592'; // Mavi arka plan
      } else {
        navbarRef.current.classList.add('transparent'); // Transparent
        navbarRef.current.style.backgroundColor = 'transparent'; // Şeffaf
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
  };

  return (
    <header id="home">
      <div className="container">
        <nav className="nav-scroll" ref={navbarRef}>
          <div className="nav-div-container">
            <a href="#Home">
              <img src="images/logo.png" alt="logo" className="logo-img" />
            </a>
            <div className="menu">
              <div className="hamburger" id="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <ul className="nav-ul" id="navMenu">
                <li>
                  <a href="#home">Home</a>
                  <a href="#our-classes">Classes</a>
                  <a href="#trainers">Trainer</a>
                  <a href="#review">Review</a>
                  <a href="#contact-us">Contact</a>
                </li>
                <li>
                  <button type="submit" className="button">JOIN US</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="content-container">
          <div className="content-container-text">
            <h1>POWERFULL</h1>
            <h2>Group</h2>
            <h2>Practice</h2>
            <div>
              <h2>With Trainer</h2>
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis mollitia laborum eaque sint. Vitae provident,
                dignissimos obcaecati similique eveniet cum laboriosam rem
                atque corrupti cupiditate debitis explicabo expedita enim quam
                fugiat ipsam veniam, impedit aspernatur? Mollitia, et a,
                praesentium cumque provident ad id voluptate quo recusandae
                explicabo ex corporis! Reprehenderit quisquam culpa sed.
              </h3>
            </div>
            <div className="button-container">
              <button className="button-1">Sign up</button>
              <button className="button-2">Details</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;