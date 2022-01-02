import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const {id} = useParams();
    console.log(id)

    const [pueblo, setPueblo] = React.useState([]);

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations/${id}`);
            const users = await data.json();
            setPueblo(users) 
        }  
        obtenerDatos()
    }, [id])
    

    return ( 
        <>
            <h2>{pueblo.name}</h2>
            <p>{pueblo.team_bonus}</p>
        </>
     );
}
 
export default User;
