import LogoImg from '../../assets/logo.jpg';
import './logo.scss'
const Logo = () => {
    return(
        <div className='logo'>
            <img src={LogoImg} alt="logo" height={60} width={60} />
        </div>
        
    
    )
}

export default Logo