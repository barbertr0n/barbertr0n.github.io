import React from 'react';
import picture2 from '../assets/picture-2.jpg';
import github_mark from '../assets/icons/github-mark-white.png';
import linkedin_mark from '../assets/icons/linkedin-mark.png';
import email_mark from '../assets/icons/Email.png';
import phone_mark from '../assets/icons/phone-mark.png';


const Contact = () => {
  return (
    <div id='contact-container'>
        <div id='table-container'>
            <h3>Get in touch</h3>
            <table id='contact-table'>
                <tr className='t-row'>
                    <td className='icon'><img src={email_mark} className='contact-icon'/><p className='contact-text'>tom@example.com</p></td>
                </tr>
                <tr className='t-row'>
                    <a href='https://github.com/barbertr0n'><td className='icon'><img src={github_mark} className='contact-icon'/><p className='contact-text'>barbertr0n</p></td></a>
                </tr>
                <tr className='t-row'>
                    <a href='https://www.linkedin.com/in/barber-thomas/'><td className='icon'><img src={linkedin_mark} className='contact-icon'/><p className='contact-text'>LinkedIn</p></td></a>
                </tr>
            </table>
        </div>
        <div id='contact-form-container'>
            <form id="form" action="">
                <label htmlFor="" id='f-label'>Get in Touch</label>
                <input type="text" name="full_name" id="" className='f-input' placeholder={"Full Name"}/>
                <input type="text" name="email" id="" className='f-input' placeholder={"Email Address"}/>
                <input type="text" name="subject" id="" className='f-input' placeholder={"Subject"}/>
                <textarea type="long-text" name="mesage" id="" className='f-input' placeholder={"Your Message"}/>
                <button type="submit">Submit</button>
            </form>
        </div>
        <img id='picture2' src={picture2} />
    </div>
  )
};

export default Contact;
