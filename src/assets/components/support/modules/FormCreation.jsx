import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import emailData from '../data/EmailServiceData'

const InsertForm = (text, email, textArea, rows) => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(emailData.service, emailData.templateid, form.current, emailData.publickey);
      e.target.reset();

    };
	return (
        <form ref={form} onSubmit={sendEmail}>
            <input type='text' name={text} placeholder="Enter your name" required />
            <input type='email' name={email} placeholder="Enter your email" required />
            <textarea name={textArea} rows={rows} placeholder="Enter your message" required ></textarea>
            <button type='submit' className='btn btn-primary'>Send a Message</button>

        </form>
        
        
	)

}

export default InsertForm;