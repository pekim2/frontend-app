import {Link} from "react-router-dom";


    
function Navbar(){

return(
<div>
    <nav className="bg-dark navbar navbar-expand-md">
        <div className="container-fluid d-flex justify-content-center">
            <Link to='/' className="navbar-brand">Navbar</Link>
            
        </div>
    </nav>
</div>
)
}

export default Navbar;