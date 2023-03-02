import styles from './styles.css'
import {toast} from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


const validarNewsLetter = yup.object({
    email: yup.string().required("E-mail obrigatório.").matches(/@[^.]*\./ , 'E-mail inválido'),
    radio: yup.string().required("Termos obrigatórios")
})

function Newsletter () {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarNewsLetter)
    });


    function submitNewsLetter() {{
        toast.success("Sucesso! Enviaremos e-mails com novidades para você!")
    }}

return (
    <section className='container container-box'>
            <h5>Fique por dentro de nossas novidades via E-mail!</h5>
        <form onSubmit={handleSubmit(submitNewsLetter)}>
            <div className='form-box'>
                <input placeholder='E-mail' name='email' {...register('email')}/>
                <p className='error-message'>{errors.email?.message}</p>
            </div>
            <div className='termos'>
            <input type="radio" name='radio' {...register('radio')}/>Concordo em receber promoções e novidades no meu E-mail
            <p className='error-message'>{errors.radio?.message}</p>
            </div>
        <button>Submit</button>
        </form>
    </section>
    );
}

export default Newsletter