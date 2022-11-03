import useUser from '../../hooks/useUser'
import style from './login.module.css'

const Login = () => {
    const { setLogged } = useUser()

    const makeFakeLogin = () => {
        setLogged(true)
        window.location.replace('/')
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.TitleWrapper}>
                <div className={style.Title}>
                    Login Page
                </div>
            </div>
            <button onClick={makeFakeLogin}>
                Login
            </button>
        </div>
    )
}

export default Login

