import { useEffect, useState } from 'react';
import './favorites.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function Favorites(){

    const [ films, setFilms ] = useState([]);
    
    useEffect(() => {
        const myList = localStorage.getItem('filmes');
        setFilms(JSON.parse(myList) || []);

    }, []);

    function handleDelete(id){
        let filterFilms = films.filter((i) => {
            return (i.id !== id);
        })

        setFilms(filterFilms);
        localStorage.setItem('filmes', JSON.stringify(filterFilms));
        toast.success('Movie deleted with sucefully');
    }

    return(
        <div className="my-films">
            <h1>My Movies</h1>

            {films.length === 0 && <span>you don't have any saved movies</span>}

            <ul>
                {films.map((i) => {
                    return (
                        <li key={i.id}>
                            <span>{i.nome}</span>

                            <div>
                                <Link to={`/filme/${i.id}`}>See more</Link>
                                <button onClick={ () => handleDelete(i.id) }>Remove</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}