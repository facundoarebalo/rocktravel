import { FaInstagram, FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer-container' style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
            <section className='footer-containerLinks'>
                <a className='footer-link' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFFF', margin: '0 10px' }}>
                    <FaInstagram size={30} />
                </a>
                <a className='footer-link' href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFFF', margin: '0 10px' }}>
                    <FaFacebookF size={30} />
                </a>
                <a className='footer-link' href="https://www.telegram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFFF', margin: '0 10px' }}>
                    <FaTelegramPlane size={30} />
                </a>
                <a className='footer-link' href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00FFFF', margin: '0 10px' }}>
                    <FaTwitter size={30} />
                </a>
            </section>
        </footer>
    );
}

export default Footer;