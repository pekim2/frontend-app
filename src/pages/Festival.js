import Carrousel from '../components/Carrousel'
import CounterApp from '../components/contador/index'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Newsletter from '../components/newsletter/index'
import Patrocinadores from '../components/patrocinadores'
import { ToastContainer } from 'react-toastify'


function Festival(){
return(
    <>
     <section className='fundo-fest'>
    <Navbar/>
        <ToastContainer/>
        <Carrousel/>
        <Newsletter />
        <Patrocinadores />
        <CounterApp />
    <Footer/>
     </section>
    </>
)


}

export default Festival