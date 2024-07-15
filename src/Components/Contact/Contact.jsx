import React from 'react';
import './Contact.css'; 

const ContactSection = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        formData.append("access_key", "d8767f28-2f3b-4b2b-9cf6-3beb3665129c");
        
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());
        
        if (res.success) {
            console.log("Success", res);
            
            event.target.reset();
        } else {
            console.error("Error", res);
            
        }
    };

    return (
        <div className='Contact container'>
            <h1>Up for Collaboration?</h1>
            <h2>Contact Me</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactSection;
