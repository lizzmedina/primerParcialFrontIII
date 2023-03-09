import '../App.css'
export const Card = ({nombre, dato}) => {
    return (
        <div className='container-card'>
            <h3> ¡ Hola {nombre} !</h3>
            <h3>Ahora sabemos que tú libro favorito es: {dato}</h3>
        </div>
    )
}
export default Card;