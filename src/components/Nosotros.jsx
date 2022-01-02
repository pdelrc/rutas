import React from 'react';
import { Link } from 'react-router-dom';

const Nosotros = () => {

    const [equipo, setEquipo] = React.useState([]);

    React.useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
        const users = await data.json();
        setEquipo(users.civilizations)
    }

    return ( 
        <>
            <h2>This is Nosotros</h2>
            {equipo.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={`/nosotros/${item.id}`}>
                            {item.name} - {item.expansion}
                        </Link>
                    </li> 
                )
               
                }
            
            )}
        </>
        
     );
}
 
export default Nosotros;