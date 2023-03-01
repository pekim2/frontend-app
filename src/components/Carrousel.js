import Day3 from '../img/day1.jpg'
import Day1 from '../img/day2.jpg'
import Day2 from '../img/day3.jpg'
import '../components/Carrousel.css'



function Carrousel(){
    return(
            <div className='carousel-container'>
            <h1 className='text-white d-flex justify-content-center my-3'>Shows</h1>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={Day1} class="d-block w-100" alt="Show no dia 1 com o cantor Ferrugem"/>
            </div>
            <div class="carousel-item">
              <img src={Day2} class="d-block w-100" alt="Show no dia 2 com o cantor Drake"/>
            </div>
            <div class="carousel-item">
              <img src={Day3} class="d-block w-100" alt="Show no dia 3 com o cantor Justin Bieber"/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Voltar</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
          </button>
        </div>
        </div>
        
        )
}

export default Carrousel