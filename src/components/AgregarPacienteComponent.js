import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import PacienteService from '../services/PacienteService';

const AgregarPaciente = () => {
  const [nombre, setNombre] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [identificacion, setIdentificacion] = useState('')
  const [tipoIdentificacion, setTipoIdentificacion] = useState('')
  const [epsPaciente, setEPS] = useState('')
  const [historiaClinica, setHistoriaClinica] = useState('')
  const history = useNavigate();
  const {id} = useParams();

  const saveOrUpdatePaciente = (e) => {
      e.preventDefault();

      const paciente = { nombre, fechaNacimiento,identificacion,tipoIdentificacion, epsPaciente, historiaClinica }

      if(id){
        PacienteService.actualizarPaciente(id, paciente).then((response) => {
              history('/listar-paciente')
          }).catch(error => {
              console.log(error)
          })

      }else{ 
        PacienteService.agregarPaciente(paciente).then((response) =>{

              console.log(response.data)
  
              history('/listar-paciente');
  
          }).catch(error => {
              console.log(error)
          })
      }
      
  }

  useEffect(() => {

     PacienteService.obtenerTodosPacientesPorId(id).then((response) =>{
          setNombre(response.data.nombre)
          setFechaNacimiento(response.data.fechaNacimiento)
          setIdentificacion(response.data.identificacion)
          setTipoIdentificacion(response.data.tipoIdentificacion)
          setEPS(response.data.epsPaciente)
          setHistoriaClinica(response.data.historiaClinica)
        
      }).catch(error => {
          console.log(error)
      })
      PacienteService.obtenerTodosPacientes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  const title = () => {

      if(id){
          return <h2 className = "text-center">Actualizar Paciente</h2>
      }else{
          return <h2 className = "text-center">Agregar Paciente</h2>
      }
  }

  return (
    <div>
        <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese su nombre"
                                        name = "nombre"
                                        className = "form-control"
                                        value = {nombre}
                                        onChange = {(e) => setNombre(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Fecha de Nacimiento :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Ingrese su fecha de nacimiento"
                                        name = "fechaNacimiento"
                                        className = "form-control"
                                        value = {fechaNacimiento}
                                        onChange = {(e) => setFechaNacimiento(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Identificacion :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese su identificacion"
                                        name = "identificacion"
                                        className = "form-control"
                                        value = {identificacion}
                                        onChange = {(e) => setIdentificacion(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Tipo de Identificacion :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese el tipo de identificacion"
                                        name = "tipoIdentificacion"
                                        className = "form-control"
                                        value = {tipoIdentificacion}
                                        onChange = {(e) => setTipoIdentificacion(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> EPS :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese el tipo de EPS"
                                        name = "epsPacien"
                                        className = "form-control"
                                        value = {epsPaciente}
                                        onChange = {(e) => setEPS(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Historia Clinica :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese la historia clinica"
                                        name = "HistoriaClinica"
                                        className = "form-control"
                                        value = {historiaClinica}
                                        onChange = {(e) => setHistoriaClinica(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br/>

                                <div className='btn-group'>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdatePaciente(e)} >Submit </button>
                                <Link to="/listar-paciente" className="btn btn-danger"> Cancel </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
    </div>
  )
}

export default AgregarPaciente