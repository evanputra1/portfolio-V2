import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Evan Ananda Putra</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/evan._putra" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/evan-ananda-putra-056176222/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a href="https://github.com/evanputra1" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className='bx bxl-github'></i>
                </a>
            </div>

            <span className='footer__copy'>&#169; Evan Ananda Putra. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer