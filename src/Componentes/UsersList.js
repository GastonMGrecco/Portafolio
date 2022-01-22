import React from 'react';


const UsersList = ({usuarios,borrar,moverAForm,setMod,eliminar}) => {
    
     
          

    return (
        <div className='lista'>
           
           {usuarios.map(usuario =>(
                  
                  <ul key={usuario?.id}>
                    <li>Nombre:  {usuario?.first_name} </li>
                    <li>Apellido:  {usuario?.last_name} </li>
                    <li>email:  {usuario?.email} </li>
                    <li>Compleaños:  {usuario?.birthday} </li>
                    <button onClick={()=>eliminar(usuario?.id)}>Eliminar</button>
                    <button onClick={()=>moverAForm(usuario)}>Modificar</button>
                    
                  </ul>
                  
           ))}
          
        </div>
    );
};

export default UsersList;