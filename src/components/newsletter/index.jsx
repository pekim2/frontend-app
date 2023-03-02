import styles from './styles.css'
import {toast} from 'react-toastify'

function Newsletter () {
return (
    <section className='container container-box'>
            <h5>Receba promoções exclusivas!</h5>
        <form className='form-box'>
            <input required type="email" placeholder='E-mail'/>
            <button type="submit" onSubmit={toast.success}>Submit</button>
        </form>
    </section>
    );
}

export default Newsletter