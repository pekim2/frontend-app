import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {toast} from 'react-toastify'
import * as yup from "yup";
import Axios from 'axios';
import './Form.css';

const validarPost = yup.object({
  nome_usuario: yup.string().required("O nome é obrigatório").min(3, "O nome precisa ter pelo menos 3 caracteres."),
  cpf_usuario: yup.string().required("CPF é obrigatório.").max(15, "CPF inválido."),
  email: yup.string().required("E-mail obrigatório."),
  //VALIDAR O INPUT RADIO!!!!
})



function Form() {


const [ingressos, setIngressos] = useState([])


//Get nos ingressos
useEffect(() => {
Axios.get("http://localhost:8800/ingresso")
.then((response) => {
  setIngressos(response.data.data);
})
.catch((error) => {
  console.log(error)
})
}, [])


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validarPost)
    
});





const addPurchase = (data) => {
console.log(data);
toast.success('Ingresso comprado com sucesso! As informações chegarão em seu e-mail em breve.');
}


return(
  <div className='fundo'>
    
    <div className='container-lg fundo-ingresso justify-content-center my-5'>
      <form onSubmit={handleSubmit(addPurchase)}>
        
      <div className='d-flex input-form justify-content-center align-items-center me-5 my-3 mb-3'>
       
        
          <label htmlFor='nome_usuario'>Nome:</label>
          <input type="text"
          text="Seu nome" 
          name='nome_usuario' 
          placeholder='Coloque seu nome' 
          {...register('nome_usuario')}/>
          <p className='error-message'>{errors.nome_usuario?.message}</p>
        

        
          <label htmlFor='cpf_usuario'>CPF:</label>
          <input type="text" 
          text="Seu email"
          name='cpf_usuario' 
          placeholder='Coloque seu CPF' 
          {...register('cpf_usuario')}/>
          <p className='error-message'>{errors.cpf_usuario?.message}</p>
       
       
          <label htmlFor='email'>E-mail:</label>
          <input type="text" 
          text="Seu e-mail" 
          name='email' 
          placeholder='Coloque seu e-mail' 
          {...register('email')}/><p className='error-message'>{errors.email?.message}</p>
        </div>
      
        <h1 className='text-center text-white mb-3'>Escolha seu ingresso!</h1>
          <div className='edit-ingressos'>
              {ingressos.map((ingresso, key) =>{ 
                return(
                  <div key={key}>
            <input type="radio" name="id_ingresso" value={ingresso.id} {...register('id_ingresso')}/>
            <img src={ingresso.foto_disponivel} className='w-75' alt={`Ingresso disponível do ${ingresso.tipo_ingresso}`}/>
                  </div>
              )})}
          </div>
            
            <p className='error-message'>{errors.id_ingresso?.message}</p>
          <div className='d-flex justify-content-center'>
            <button className='botao-comprar'>Comprar</button>
          </div>
        
        </form>
      </div>
    </div>
  
)

    }
    
    export default Form;
    