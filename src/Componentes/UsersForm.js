import React from 'react';

const UsersForm = ({submit,
                    nombre,
                    setNombre,
                    apellido,
                    setApellido,
                    email,
                    setEmail,
                    cumpleanos,
                    setCumpleanos,
                    contrasena,
                    setContrasena,
                    usuarios,
                    limpiar
                }) => {

   console.log(usuarios?.id)

    return (
        <form >
            <div className="nombre">
                <label  htmlFor='primerNombre'> Nombres </label>
                <input 
                    type="text" 
                    id='primerNombre'
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                    placeholder='Armando'
                /> 
            </div>
            <div className="apellido">
                <label  htmlFor='Apellido'> Apellido </label>
                <input 
                    type="text" 
                    id='Apellido'
                    value={apellido}
                    onChange={e=>setApellido(e.target.value)}
                    placeholder='Paredes de la Casa'
                /> 
            </div>
            <div className="cumpleanos">
                <label  htmlFor='Cumple'> Cumpleaños </label>
                <input 
                type="date" 
                id='Cumple'
                value={cumpleanos}
                onChange={e=>setCumpleanos(e.target.value)}
                
            /> 
            </div>
            <div className="email">
                <label  htmlFor='Email'> email </label>
                <input 
                type="email" 
                id='Email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder='tucorreo@dominio.extencion'
            /> 
            </div>
            <div className="contrasena">
                <label  htmlFor='Contra'> Contraseña </label>
                <input 
                type="password" 
                id='Contra'
                value={contrasena}
                onChange={e=>setContrasena(e.target.value)}
                placeholder='pAlabra288#?!'
                /> 
            </div>
            <button onClick={submit}>Enviar</button>
            <button onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UsersForm;
