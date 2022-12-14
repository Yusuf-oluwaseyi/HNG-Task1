import Footer from "./Footer";


function Submit(event) {
    event.preventDefault();
}

const Contact = () => {
    return ( 
        <form className="contact" onSubmit={Submit}>
        <div className="contact_head">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <div className="contact_body">
        <div className="names">
        <div id="first_name">
            <label htmlFor="first_name">First name</label><br />
            <input type="first_name" placeholder="Enter your first name" required/>
        </div>
        <div id="last_name">
            <label htmlFor="last_name">Last name</label><br />
            <input type="last_name" id="last_name" placeholder="Enter your last name" required/>
        </div>
        </div>

        <div id="email">
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder="yourname@gmail.com" required/>
        </div>
        <div id="message">
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="" id="" cols="30" rows="10" placeholder="Send a message and I'll reply you as soon as possible..."></textarea>
        </div>
        <div className="check">
        <input type="checkbox" /><label htmlFor="message">You agree to providing your data to Oluwaseyi Yusuf who may contact you.</label>
        </div>
        <br />
        <button id="btn__submit" type="submit">Send message</button>
        </div>
        <Footer />
        </form>
     );
}
 
export default Contact;