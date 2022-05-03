// para poder guardar la info que escribe el usuario en un estado local.
import { useState } from 'react';
import axios from 'axios';
import './style.css'


function Contact(){

// crear un objeto entero con las propiedades vacias estado inicial
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
// captar la info de cada uno de estos y guardar en estado local
        
    const handleChange = function (event){
        const property = event.target.id
        const value = event.target.value
        setUserInput({...userInput, [property]: value}) //actualizar el estado local.
        //[property] edita solo lo que se está modificando.
    }
// mandar la data al back:

    const handleSubmit = function (event){
        event.preventDefault() //para que no recargue la pagina al apretar.
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts', //POST FALSO PARA ENVIAR DATA
            method: 'POST',
            date: userInput                     //body a enviar
        }).then( result => {
            console.log(result)
            setUserInput({name: "", email: "", phone: "", message: ""}) //vacia los elementos ya enviados
        })
            .catch( error => console.log(error))
    }
      
    // console.log(userInput) PARA VER SI SE ESTAN GUARDANDO LOS DATOS QUE VAMOS A ENVIAR AL BACK
    return(
        <section>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="name" class="form-label"></label>
                <input onChange={handleChange} type="text" class="form-control" id="name" placeholder="Name" value={userInput.name}/>
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

                <button type="submit" class="btn btn-primary mb-3 submitForm">Send</button>
            </form>    

        </section>
    )
}

export default  Contact;