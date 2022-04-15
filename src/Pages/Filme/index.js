import { useEffect, useState } from 'react';
import './film-info.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme(){

    const { id } = useParams();
    const history = useHistory();

    const [ film, setFilm ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        async function loadFilm(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            if(response.data.length === 0){
                history.replace('/');
                return;
            }
            
            setFilm(response.data);
            setLoading(false);
        }

        loadFilm();

        return () => {
            console.log('Component umonted ツ');
        }
    }, [history, id])

    function saveFilm(){

        const myList = localStorage.getItem('filmes');

        let filmsSaved = JSON.parse(myList) || [];

        const hasFilm = filmsSaved.some( (filmSaved) => filmSaved.id === film.id)

        if(hasFilm){
            toast.error('You already have this movie saved');
            return;
        }

        filmsSaved.push(film);
        localStorage.setItem('filmes', JSON.stringify(filmsSaved));
        toast.success('Movie Saved with sucefully!');

    }

    if(loading){
        return(
            <div className="film-info">
                <h1>loading your film</h1>
            </div>
        )
    }

    return(
        <div className="film-info">
            <h1>{film.nome}</h1>
            <img src={film.foto} alt={film.nome}/>
            <h3>Synopsis</h3>
            <p>{film.sinopse}</p>

            <div className="buttons">
                <button onClick={saveFilm}>Save</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${film.nome} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}