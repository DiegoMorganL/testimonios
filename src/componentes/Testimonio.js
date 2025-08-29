import '../stylesheet/Testimonio.css'


const Testimonio = (props) => {
    return(
        <div className='contenedor-testimonio'>
            <img 
              className='imagen-testimonio'
              src={require(`../imagenes/testimonio-${props.imagen}.png`)}
            />

            <div className='contenedor-texto'>
              <p className='texto-nombre'>
                <strong>{props.nombre}</strong> en {props.pais}
              </p>
              <p className='texto-trabajo'>{props.puesto} en <strong>{props.empresa}</strong></p>
              <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
}

export default Testimonio;