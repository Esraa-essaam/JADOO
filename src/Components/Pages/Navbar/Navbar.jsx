import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'

function Navbar (){
    return (
        <div className={`${styles.Navbar} d-flex justify-content-between`}>
            <div className={styles.logo}>
                <img src={logo} alt="The page Logo" />
            </div>
            <nav className={`${styles.links} d-flex  gap-5`}>
                <ul className={`${styles.ul} d-flex gap-5 list-unstyled`}>
                    <li>Desitnations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li> <button>Login</button></li>
                    <li> <button>Sign up</button></li>
                    
                </ul>
                <select>
                    <option value="">EN</option>
                    <option value="">AR</option>
                </select>


            </nav>
        </div>
    )
};

export default Navbar;