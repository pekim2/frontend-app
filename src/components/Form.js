import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {toast} from 'react-toastify'
import * as yup from "yup";
import Axios from 'axios';
import './Form.css';
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const validarPost = yup.object({
  nome_usuario: yup.string().required("O nome é obrigatório").min(3, "O nome precisa ter pelo menos 3 caracteres."),
  cpf_usuario: yup.string().required("CPF é obrigatório.").max(11, "CPF inválido! Somente números.").min(11, "CPF inválido."),
  email: yup.string().required("E-mail obrigatório.").matches(/@[^.]*\./ , 'E-mail inválido'),
  id_ingresso: yup.string().required("Selecione seu ingresso!")
})



function Form(){

let navigate = useNavigate();

const [ingressos, setIngressos] = useState([]);
const [ingressoId, setIngressoId] = useState([]);
const [showContent, setShowContent] = useState(false);
const [showTicket, setShowTicket] = useState(false);

const handleShowContent = () => {
  setShowContent(true);
}
const handleHideContent = () => {
  setShowContent(false);
}

const handleShowTicket = () => {
  setShowTicket(true);
}


//Get nos ingressos
useEffect(() => {
Axios.get("http://localhost:3344/ingresso")
.then((response) => {
  setIngressos(response.data);
})
.catch((error) => {
  console.log(error)
})
}, [])


//GET NO INGRESSO ID

const {id} = useParams();

useEffect(() => {
  Axios.get(`http://localhost:3344/ingresso/`)
  .then((response) => {
    setIngressoId(response.data);
  })
  .catch((error) => {
    console.log(error)
  })
  }, [])


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validarPost)
    
});





const addPurchase = (data) => {
  Axios.post('http://localhost:3344/pedido_ingresso', data)
  .then(() => {
    navigate('/')
    toast.success('Ingresso comprado com sucesso! As informações chegarão em seu e-mail em breve.');

})
}

return(
  <div className='fundo'>
     <div className='container-lg justify-content-center response'>
      
      <form onSubmit={handleSubmit(addPurchase)}>
      
      {!showContent && <div><h1 className='text-center text-white my-5'>Escolha seu ingresso!</h1>
          <div className='edit-ingressos'>
              {ingressos.map((ingresso, key) =>{ 
                return(
                  <div className='d-flex justify-content-center' key={key}>
            <input type="radio" name="id_ingresso" id={`id-select${ingresso.id}`} className='img-select' value={ingresso.id} {...register('id_ingresso')}/>
            <label htmlFor={`id-select${ingresso.id}`} onClick={handleShowTicket} className='img-select'><img src={ingresso.foto_disponivel} className='img-edit' alt={`Ingresso disponível do ${ingresso.nome}`}/></label>
                  </div>
              )})}
          </div>
          </div>}
            
            <p className='error-message d-flex justify-content-center pt-4'>{errors.id_ingresso?.message}</p>
          <div className='d-flex justify-content-center'>
          
            
            {!showContent && <button className='botao-edit' onClick={handleShowContent}>Avançar</button>}




            {showContent && 
            <div className='d-flex input-form justify-content-center align-items-center me-5'>
       
       <h1 className='text-center text-white my-5 pt-5'>Preencha as informações!</h1>
      {ingressoId.map((ingresso, key)=> { 
        return(
          <div key={key}>
       {showTicket && <div><p className='d-flex justify-content-center texto-verde pt-5 mt-2'>Ingresso selecionado!</p>
       <img src={ingresso.foto} className='img-edit' alt={`Ingresso disponível`}/>
       </div>}
       </div>
)})}


       <p className='error-message d-flex justify-content-center pt-4'>{errors.id_ingresso?.message}</p>
       <label htmlFor='nome_usuario'>Nome:</label>
       <input type="text"
       text="Seu nome" 
       name='nome_usuario' 
       placeholder='Insira seu nome' 
       {...register('nome_usuario')}/>
       <p className='error-message'>{errors.nome_usuario?.message}</p>
     

     
       <label htmlFor='cpf_usuario'>CPF:</label>
       <input type="text" 
       text="Seu email"
       name='cpf_usuario' 
       placeholder='Insira seu CPF' 
       {...register('cpf_usuario')}/>
       <p className='error-message quebra-cpf'>{errors.cpf_usuario?.message}</p>
    
    
       <label htmlFor='email'>E-mail:</label>
       <input type="text" 
       text="Seu e-mail" 
       name='email' 
       placeholder='Insira seu e-mail' 
       {...register('email')}/><p className='error-message'>{errors.email?.message}</p>
       <button className='botao-voltar mb-2' onClick={handleHideContent}>Voltar</button>
     <button className='botao-edit'>Comprar</button></div>}
     
            
          </div>
        
        </form>
      </div>
  </div>
  
)

    }
    
    export default Form;
    