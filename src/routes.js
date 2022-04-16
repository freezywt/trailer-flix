import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Errornotfound from './Pages/NotFound';

import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Favorites from './Pages/Favorites';

const Rotas = () => {
    return(
        <BrowserRouter>
         <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/filme/:id' element={<Filme/>} />
                <Route exact path='/favorites' element={<Favorites/>} />
                <Route path='*' element={<Errornotfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;