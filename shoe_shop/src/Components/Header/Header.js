import './Header.css'
import bg from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header>
            <div class='logo'><img src={bg} alt=''></img></div>
            <ul>
                <li>Home</li>
                <li>Info</li>
                <li>Login</li>
            </ul>
        </header>
    )
}

export default Header