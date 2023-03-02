import { NavLink } from "react-router-dom";
import './Footer.css'
import {GiPartyPopper} from 'react-icons/gi'
import {ImTicket} from 'react-icons/im'

function Footer(){
return(
  <div>
  <div className="fixed-bottom bg-dark link-footer py-3">
    <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col me-5">
            <NavLink to='/'><GiPartyPopper size={50} className='d-flex'/>Festival</NavLink>
          </div>
          <div className="col ms-5">
            <NavLink to='/ingresso'><ImTicket size={50} className='d-flex'/>Ingressos</NavLink>
          </div>
        </div>
    </div>
  </div>
  </div>  
        );
    }

export default Footer;