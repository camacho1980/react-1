
import './style.css'

function Products(){
    return(
        
    <section className='section3'>
      <img src='./assets/img/casa.png'  className='fotoCasa'></img>
        <div className='color1'>
          <div className='rectangulo'>

          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
          <div class="carousel-inner">

            <div className='carousel-item active'>
              <h6>Sed ut perspiciatis</h6>
              <h1>Nemo Enim</h1>
              <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h6>
            </div>

            <div className='carousel-item'>
              <h6>Segunda</h6>
              <h1>Tarjeta</h1>
              <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</h6>
            </div>

          </div>
          </div>
        </div>
        </div>
      <div  className='color2'></div> 
    </section>
    
  )
}
export default Products;