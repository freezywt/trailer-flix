import { useEffect, useState } from 'react';
import './home.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Home(){
    const [ films, setFilms ] = useState([]);

    useEffect(() => {
      
      async function loadFilms(){
        const response = await api.get('r-api/?api=filmes');
        setFilms(response.data);
      };

      loadFilms();

    },[])
  
    return(
      <div className="container">
        <div className="films-list">
          {films.map((film)=> {
            return(
              <article key={film.id}>
                <strong>{film.nome}</strong>
                <img src={film.foto} alt={film.nome}/>
                <Link to={`/filme/${film.id}`}>View</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }