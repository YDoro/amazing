import { useRef } from 'react'
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import style from './header.module.css'

const Header = () => {
    const { logged } = useUser()
    const searchInput = useRef(null)

    const hanldeMagnifierClick = () => {
        searchInput.current.focus()
    }
    return (
        <header className={style.Wrapper}>
            <div>
                <Link to="/" className={style.Link}>
                    LOGO
                </Link>
            </div>
            <div className={style.SearchWrapper}>
                <input type="text" placeholder='search' className={style.SearchBox} ref={searchInput} />
                <FiSearch size={24} className={style.SearchIcon} onClick={hanldeMagnifierClick} />
            </div>
            <div className={style.ButtonsWrapper}>
                <Link to={!logged ? "/login" : "/profile"}>
                    <FiUser size={28} className={style.IconButtom} />
                </Link>
                <FiShoppingCart size={28} className={style.IconButtom} />
            </div>
        </header>
    )
}
export default Header
