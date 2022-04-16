import './header.css';
import { Link } from 'react-router-dom';

export default function Header(sticky){
    return(
        <header className={sticky ? "header sticky" : "header"}>
            <Link className="logo" to="/">TrailerFlix</Link>
            <Link className="favorites" to="/favorites">Saves</Link>
        </header>
    )
}