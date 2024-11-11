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
        <h2>Get in touch</h2>
        <table>
            <tr>
                <td className='icon'><img src={phone_mark} className='contact-icon' /></td>
                <td className='text'>000000 00000</td>
                <td className='icon'><img src={email_mark} className='contact-icon' /></td>
                <td className='text'>tom@example.com </td>
            </tr>
            <tr>
                <td className='icon'><a href='https://github.com/barbertr0n'><img src={github_mark} className='contact-icon' /></a></td>
                <td className='text'>barbertr0n</td>
                <td className='icon'><a href='https://www.linkedin.com/in/barber-thomas/'><img src={linkedin_mark} className='contact-icon' /></a></td>
                <td className='text'>LinkedIn</td>
            </tr>
        </table>
        </div>
        <img id='picture2' src={picture2} />
    </div>
  )
};

export default Contact;
