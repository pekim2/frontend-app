import { NavLink, Link } from "react-router-dom";


    
function Navbar(){

    const handleClick = (e) => {
        e.preventDefault();
        window.open('https://facebook.com');
      };
  
return(
<div>
    <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
            <Link to='/' className="navbar-brand">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to='/' className='nav-link'>Comprar os ingressos</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to='politica' className="nav-link">Política de compra</NavLink>
                </li>
                <li className="nav-item">
                <a href="https://facebook.com" onClick={handleClick} className="nav-link">Nosso site</a>
                </li>
            </ul>
            
            
        </div>
        </div>
    </nav>
</div>
)
}

export default Navbar;