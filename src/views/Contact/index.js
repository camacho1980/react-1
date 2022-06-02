// para poder guardar la info que escribe el usuario en un estado local.
import { useState } from 'react';
import axios from 'axios';
import './style.css'


function Contact(){

// crear un objeto entero con las propiedades vacias estado inicial
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showAlert,setShowAlert] = useState(false)    //Esta en falso cuando el form no es enviado, y pasa a true cuando se envia correctamente, osea valida,permitiendo dar el mensaje de enviado correctamente.
  
    
// captar la info de cada uno de estos y guardar en estado local
        
    const handleChange = function (event){
        setShowAlert(false)
        const property = event.target.id
        const value = event.target.value
        setUserInput({...userInput, [property]: value}) //actualizar el estado local.
        //[property] edita solo lo que se está modificando.
    }
// mandar la data al back:

    const handleSubmit = function (event){
        event.preventDefault() //para que no recargue la pagina al apretar.
        axios({
            // url: 'https://jsonplaceholder.typicode.com/posts', //POST FALSO PARA ENVIAR DATA
            url: 'https://final-mundos.herokuapp.com/api/contacto',
            method: 'POST',
            date: userInput                     //body a enviar
        }).then( result => {
            
             setShowAlert(true)    
             setUserInput({name: "", email: "", phone: "", message: ""}) //vacia los elementos ya enviados
        })
           
    }
      //Hago la validacion: con el length pregunto si cada campo no esta vacio, osea tiene un length.
      //con el signo de interrogacion le digo lo contrario, osea si estan vacios. y lo paso por props al boton con disabled.
    const buttonDisabled = !(  userInput.email.length && userInput.phone.length && userInput.message.length && userInput.name.length > 2 && !isNaN(userInput.phone))
    
    return(
        <section className='section5' id='contact'>
          
                <div className='columna1'>

                <div className='contact'>
                <div className='titulo'>
                <h1>< span className='negro'>Get in touch </span> <br/> We are hiring!</h1>
            </div>
                <form className='form' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label"></label>
                    <input onChange={handleChange} type="text" class="form-control" id="name" placeholder="Name" value={userInput.name} />
                    </div>
                    
                    <div class="mb-3">
                    <label for="email" class="form-label"></label>
                    <input onChange={handleChange} type="email" class="form-control" id="email" placeholder="Email" value={userInput.email}/>
                    </div>

                    <div class="mb-3">
                    <label for="phone" class="form-label"></label>
                    <input onChange={handleChange} type="text" class="form-control" id="phone" placeholder="Phone" value={userInput.phone}/>
                    </div>

                    <div class="mb-3">
                    <label for="message" class="form-label"></label>
                    <input onChange={handleChange} type="text" class="form-control" id="message" placeholder="Message" value={userInput.message}/>
                    </div>
                        
                    <button type="submit" disabled={buttonDisabled} class="btn btn-primary mb-3 submitForm">Send</button>
                    
                    {showAlert && <div className="alert alert-success">Mensaje enviado correctamente  </div> }   
                </form>
                 
            </div>
            </div>

            <div  className='columna2'>
            {/* <img src='./assets/img/globos.png'  className='fotoGlobos'alt=''></img> */}
            

                </div>   
        </section>
        
    )
}
           
export default  Contact;
