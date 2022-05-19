
import './style.css'

function Products(){
    return(
        
    <section className='section3'>
      
     <div className='color1'>
     
     <div className='color2'>
      
          <div className='containerCarousel'>

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
        
      </div>
          </div>
        
     </div>
     </div>
        

    </section>
    
    )
}
export default Products;