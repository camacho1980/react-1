
import './style.css'

function Products(){
    return(
        
    <section className='section3'>
      
     
        <div className='color1'>
          <div className='fotoContainer'>

          <img src='./assets/img/casa.png'  className='fotoCasa2' alt=''></img>
          <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         
        </div>
        <div class="carousel-inner ">
          <div class="carousel-item active ">
            <article className='contenedorCarousel'>

           <p>Sed ut perspiciatis</p>
           <p className='tituloCarousel'>Nemo Enim</p>
           <p className='textoCarousel'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </article>
           
          </div>
          <div class="carousel-item">
          <article className='contenedorCarousel'>

<p>Sed ut perspiciatis</p>
<p className='tituloCarousel'>Nemo Enim</p>
<p className='textoCarousel'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
 </article>
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
          </div>
        </div>
        <div  className='color2'></div> 

    </section>
    
    )
}
export default Products;