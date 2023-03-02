import styles from './styles.css'
import {toast} from 'react-toastify'

function Newsletter () {
    function submitNewsletter () {
        toast.success ("Sucesso! Enviaremos e-mails com novidades para você!")
    }

return (
    <section className='container container-box'>
            <h5>Fique por dentro de nossas novidades via E-mail!</h5>
        <form>
            <div className='form-box'>
                <input required type="email" placeholder='E-mail'/>
                <button type="submit" onSubmit={submitNewsletter}>Submit</button>
            </div>
            <div className='termos'>
            <input type="radio" placeholder='dale' /> Concordo em receber promoções e novidades no meu E-mail
            </div>
        </form>
    </section>
    );
}

export default Newsletter