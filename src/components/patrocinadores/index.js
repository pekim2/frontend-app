import styles from './styles.css'
import prefeitura from '../../img/patrocinadores/prefeitura.png' 
import senac from '../../img/patrocinadores/senac.png' 
import resilia from '../../img/patrocinadores/resilia.png' 

function Patrocinadores () {
    return (
        <section className='container box-patrocinadores'>
            <h2>Patrocinadores</h2>
        <div className='patrocinadores'>
        <div className='pat-1'>
            <img src={resilia}/>
        </div>
        <div className='pat-2'>
            <img src={senac}/>
        </div>
        <div className='pat-3'>
            <img src={prefeitura}/>
        </div>
        </div>
        </section>
    );
}

export default Patrocinadores