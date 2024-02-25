import style from './Navbar.modulee.css'; 

function Navbar() {
  return (
    <header className={style.header}>
      <div className='container'>
        <div className='row'>
          <div className={style.logoContainer}>
{        /*   <img src="assets/img/public/logo.svg" alt="Logo" />
  */}        
      <a href="#">mangcoding Store</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={style.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={style.authContainer}>
            <a href="#" className={style.login}>
              Log in
            </a>
            <a href="#" className='{style.register}'>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
