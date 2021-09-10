import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css'



const Navigation = () => (
    <nav>
        <NavLink
            exact
            to="/"
            className={styles.link}

        >
            <h2>Main</h2>
        </NavLink>

        <NavLink
            exact
            to="/movies"
            className={styles.link}
        >
            <h2>Films</h2>
        </NavLink>
    </nav>
)

export default Navigation