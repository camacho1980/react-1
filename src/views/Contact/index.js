import './style.css'


function Contact(){
    return(
        <section>
            <h1>Contact</h1>

            <form>
            <div class="mb-3">
                <label for="name" class="form-label"></label>
                <input type="email" class="form-control" id="name" placeholder="Name"/>
                </div>
                
                <div class="mb-3">
                <label for="email" class="form-label"></label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                <label for="phone" class="form-label"></label>
                <input type="email" class="form-control" id="phone" placeholder="Phone"/>
                </div>

                <div class="mb-3">
                <label for="message" class="form-label"></label>
                <input type="email" class="form-control" id="message" placeholder="Message"/>
                </div>

                <button type="submit" class="btn btn-primary mb-3 submitForm">Send</button>
            </form>    

        </section>
    )
}

export default  Contact;