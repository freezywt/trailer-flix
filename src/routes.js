import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import notFound from './Pages/NotFound';

import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Favorites from './Pages/Favorites';

const Routes = () => {
    return(
        <BrowserRouter>
         <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/filme/:id' component={Filme} />
                <Route exact path='/favorites' component={Favorites} />
                <Route path='*' component={notFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;