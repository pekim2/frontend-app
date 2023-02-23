import { Link } from "react-router-dom";
import './Footer.css'

function Footer(){
return(
    <div class="container-fluid my-5">
    
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="text-dark">Space Festival</h5>
              <p>
                Garanta seu ingresso agora mesmo! Faça sua compra e receba seu pedido pelo e-mail. Aproveite a oportunidade e compre com 10% de desconto e tenha a melhor experiência espacial da sua vida!
              </p>
            </div>
            <div className="col-md-6 mt-4 pt-1 bef">
              <div className="row">
              <ul className="list-unstyled d-flex flex-wrap">
                <li className="col-md-3">
                <Link to='/' className='link-edit'>Comprar os ingressos</Link>
                </li>
                <li className="col-md-3">
                <Link to='/' className='link-edit'>Política de compra</Link>
                </li>
                <li className="col-md-3">
                <Link to='/' className='link-edit'>Comprar produtos</Link>
                </li>
                <li className='col-md-3'>
                <Link to='/' className='link-edit'>Comprar os ingressos</Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="text-center">
          © 2023 Direitos reservados:
          LOGO DO SITE
        </div>
        
      </footer>
      
    </div>
    
        );
    }

export default Footer;