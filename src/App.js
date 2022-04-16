import Rotas from './routes';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App(){
  return(
    <div className="app">
      <Rotas />
      <ToastContainer autoClose={3000} />
    </div>
  );
}