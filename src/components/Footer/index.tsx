import './footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {currentYear} Australia Zoo. By Souad. All rights reserved.</p>
        <hr />
        <div>* * * *</div>
      </div>           
    </footer>
  )
}

export default Footer;