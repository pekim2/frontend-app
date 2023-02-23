import Form from '../components/Form'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Home(){
    return(
        <div>
            <Form/>
            <ToastContainer/>
        </div>
    )
}

export default Home