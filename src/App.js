import './App.css';
import UsersList from './Componentes/UsersList';
import UsersForm from './Componentes/UsersForm';
import {useEffect,useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function App() {
    const [usuarios,setUsuarios]=useState([]);

  
    const obtener=()=>{
      axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res=>setUsuarios(res?.data));
    }
   useEffect(() => {
    obtener();
   }, [])
    
    
    const borrar= (id)=>{
    
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(()=>obtener())

    }

   const eliminar=(id)=>{
       swal({
        text:"¿Estas seguro de borrar el usuario?",
        icon:"warning",
        buttons:["No","Sí"]
      }).then(respuesta=>{
        if(respuesta){
          borrar(id);
          swal({
            text:"Usuario eliminado correctamente",
            icon:"success",
            button:"aceptar"
          })
        }

      })
   }
  
    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");
    const[email,setEmail]=useState("");
    const[cumpleanos,setCumpleanos]=useState("");
    const[contrasena,setContrasena]=useState("");
    const [mod,setMod]=useState()

    const moverAForm= (user)=>{
     
      setNombre(user?.first_name);
      setApellido(user?.last_name);
      setCumpleanos(user?.birthday);
      setEmail(user?.email);
      setContrasena(user?.password);
      setMod(user);
    }

     const modificar=(id)=>{

          const obj={
                    first_name:nombre,
                    last_name:apellido,
                    email: email,
                    password:contrasena,
                    birthday:cumpleanos
                  }
     axios.put("https://users-crud1.herokuapp.com/users/"+id+"/",obj)
      .then(()=>obtener()) 
    }
    const limpiar=e=>{
      e.preventDefault()
      setNombre("");
      setApellido("");
      setCumpleanos("");
      setEmail("");
      setContrasena("");
    }
    
const agregar=()=>{
  
    const obj={
                first_name:nombre,
                last_name:apellido,
                email: email,
                password:contrasena,
                birthday:cumpleanos
              }
        axios.post(`https://users-crud1.herokuapp.com/users/`,obj)
        .then(()=>obtener())
        
    }

    const submit=e=>{

        e.preventDefault()
        
        if(mod){
          modificar(mod?.id);
          
        }else{
          
          if(nombre==""||
            apellido==""||
            cumpleanos==""||
            email==""||
            contrasena==""){
              swal(
                {
                  title: "Formulario incompleto",
                  text: "Completa los espacios en blanco antes de enviar",
                  icon: "warning",
                  button: "aceptar"
              } )
            }else{
              agregar();
               swal(
                {
                  text: "Usuario agregado exitosamente",
                  icon: "success",
                  button: "aceptar",
                  timer: "4000",
              } )
            }
          
        }
    }
    
    
 
  return (
    <div className="App">
      <UsersForm 
        submit={submit} 
        agregar={agregar}
        modificar={modificar}
        nombre={nombre}
        setNombre={setNombre}
        apellido={apellido}
        setApellido={setApellido}
        cumpleanos={cumpleanos}
        setCumpleanos={setCumpleanos}
        email={email}
        setEmail={setEmail}
        contrasena={contrasena}
        setContrasena={setContrasena}
        usuarios={setUsuarios}
        setUsuarios={setUsuarios}
        moverAForm={moverAForm}
        limpiar={limpiar}
      />
      <UsersList 
        usuarios={usuarios} 
        borrar={borrar}
        moverAForm={moverAForm}
        setMod={setMod}
        eliminar={eliminar}
      />
      
    </div>
  );
}
export default App;

