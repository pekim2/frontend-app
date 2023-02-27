import Form from '../components/Form'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

function Ingresso(){
    return(
        <div>
            <Navbar/>
            <Form/>
            <ToastContainer/>
            <Footer/>
        </div>
    )
}

export default Ingresso