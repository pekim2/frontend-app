import Carrousel from '../components/Carrousel'
import CounterApp from '../components/contador/index'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'


function Festival(){
return(
    <>
     <section className='fundo-fest'>
    <Navbar/>
        <Carrousel/>
        <CounterApp />
    <Footer/>
     </section>
    </>
)


}

export default Festival