import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import MedicoService from '../services/MedicoService';


const AgregarMedico = () => {

  const [nombre, setNombre] = useState('')
  const [identificacion, setIdentificacion] = useState('')
  const [tipoIdentificacion, setTipoIdentificacion] = useState('')
  const [numTarjetaPro, setNumTarjetaPro] = useState('')
  const [añosExperiencia, setAñosExperiencia] = useState('')
  const [especialidad, setEspecialidad] = useState('')
  const [horaInicio, setHoraInicio] = useState('')
  const [horaFin, setHoraFin] = useState('')
  const history = useNavigate();
  const {id} = useParams();

  const saveOrUpdateMedico = (e) => {
      e.preventDefault();

      const medico = {nombre,identificacion,tipoIdentificacion,numTarjetaPro,añosExperiencia,especialidad,horaInicio,horaFin}

      if(id){
          MedicoService.actualizarMedico(id, medico).then((response) => {
              history('/listar-medico')
          }).catch(error => {
              console.log(error)
          })

      }else{
          MedicoService.agregarMedico(medico).then((response) =>{

              console.log(response.data)
  
              history('/listar-medico');
  
          }).catch(error => {
              console.log(error)
          })
      }
      
  }

  useEffect(() => {

    MedicoService.obtenerTodosMedicosPorId(id).then((response) =>{
          setNombre(response.data.nombre)
          setIdentificacion(response.data.identificacion)
          setTipoIdentificacion(response.data.tipoIdentificacion)
          setNumTarjetaPro(response.data.numTarjetaPro)
          setAñosExperiencia(response.data.añosExperiencia)
          setEspecialidad(response.data.especialidad)
          setHoraInicio(response.data.horaInicio)
          setHoraFin(response.data.horaFin)
      }).catch(error => {
          console.log(error)
      })
      MedicoService.obtenerTodosMedicos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const title = () => {

      if(id){
          return <h2 className = "text-center">Actualizar Medico</h2>
      }else{
          return <h2 className = "text-center">Agregar Medico</h2>
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
                                    <label className = "form-label"> Numero de Tajeta Profesional :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese el numero de la tarjeta profesional"
                                        name = "numTarjetaPro"
                                        className = "form-control"
                                        value = {numTarjetaPro}
                                        onChange = {(e) => setNumTarjetaPro(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Años de Experiencia :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Ingrese los años de experiencia"
                                        name = "añosExperiencia"
                                        className = "form-control"
                                        value = {añosExperiencia}
                                        onChange = {(e) => setAñosExperiencia(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Especialidad :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese su especialidad"
                                        name = "especialidad"
                                        className = "form-control"
                                        value = {especialidad}
                                        onChange = {(e) => setEspecialidad(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Hora de Inicio :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese la hora de inicio"
                                        name = "horaInicio"
                                        className = "form-control"
                                        value = {horaInicio}
                                        onChange = {(e) => setHoraInicio(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Hora de Finalizacion :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese la hora en que finalizo"
                                        name = "horaFin"
                                        className = "form-control"
                                        value = {horaFin}
                                        onChange = {(e) => setHoraFin(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <br/>
                               
                                <div className='btn-group'>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateMedico(e)} >Submit </button>
                                <Link to="/listar-medico" className="btn btn-danger"> Cancel </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
    </div>
  )
}

export default AgregarMedico