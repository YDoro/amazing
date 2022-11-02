import { FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import style from './header.module.css'
const Header = () => {
    return (
        <header className={style.Wrapper}>
            <div>
                <a href="/" className={style.Link}>
                    LOGO
                </a>
            </div>
            <div className={style.SearchWrapper}>
                <input type="text" placeholder='search' className={style.SearchBox} />
            </div>
            <div className={style.ButtonsWrapper}>
                <Link to="/login">
                    <FiUser size={28} className={style.IconButtom} />
                </Link>
                <FiShoppingCart size={28} className={style.IconButtom} />
            </div>
        </header>
    )
}
export default Header