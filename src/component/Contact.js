const Contact = () => {
    return ( 
        <div className="contact">
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
            <input type="last_name" placeholder="Enter your last name" required/>
        </div>
        </div>

        <div id="email">
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder="yourname@gmail.com" required/>
        </div>
        </div>
        </div>
     );
}
 
export default Contact;