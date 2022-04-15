import './header.css';

export default function Header(sticky){
    return(
        <header className={sticky ? "header sticky" : "header"}>
            <a className="logo" href="/">TrailerFlix</a>
            <a className="favorites" href="/favorites">Saves</a>
        </header>
    )
}