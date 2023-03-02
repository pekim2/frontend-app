import Day3 from '../img/day1.jpg'
import Day1 from '../img/day2.jpg'
import Day2 from '../img/day3.jpg'
import '../components/Carrousel.css'



function Carrousel(){
    return(
            <div className='carousel-container'>
            <h1 className='text-white d-flex justify-content-center my-3'>Shows</h1>
            <div id="carouselExampleAutoplaying" style={{ marginBottom: 50}} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Day1} className="d-block w-100" alt="Show no dia 1 com o cantor Ferrugem"/>
            </div>
            <div className="carousel-item">
              <img src={Day2} className="d-block w-100" alt="Show no dia 2 com o cantor Drake"/>
            </div>
            <div className="carousel-item">
              <img src={Day3} className="d-block w-100" alt="Show no dia 3 com o cantor Justin Bieber"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Voltar</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
        </div>
        
        )
}

export default Carrousel