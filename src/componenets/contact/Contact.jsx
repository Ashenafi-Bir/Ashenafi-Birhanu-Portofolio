import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faYoutube , faTelegram} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import './contact.css';
import image from '../../assets/hand.jpg'

export default function Contact() {
  const [Message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
          {/* Social Media Section */}
          <div className="social-media">
           <a href="https://telegram.org" target="_blank" rel="noreferrer" className="telegram">
          <FontAwesomeIcon icon={faTelegram} />
           </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="github">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {Message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>

      
      </div>
    </div>
  );
}
