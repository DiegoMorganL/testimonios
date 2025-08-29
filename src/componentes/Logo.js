import logoMrRobot from '../imagenes/mr-robot-logo.png'
import '../stylesheet/Logo.css'

function Logo() {
    return(
      <div className='contenedor-logo'>
        <img 
        className='logo-mr-robot'
        src={logoMrRobot}
        alt='Logo Mr. Robot'
        />
      </div>
    );
}

export default Logo;