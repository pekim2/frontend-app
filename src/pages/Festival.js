import Carrousel from '../components/Carrousel'
import CounterApp from '../components/contador/index'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import Newsletter from '../components/newsletter/index'


function Festival(){
return(
    <>
     <section className='fundo-fest'>
    <Navbar/>
        <CounterApp />
        <Carrousel/>
        <Newsletter />
    <Footer/>
     </section>
    </>
)


}

export default Festival