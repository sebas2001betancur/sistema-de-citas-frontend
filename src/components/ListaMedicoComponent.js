import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MedicoService from '../services/MedicoService'

const ListMedicoComponent = () => {
    const [Medicos, setMedicos] = useState([])

    useEffect(() => {

        obtenerTodosMedicos();
    }, [])

    const obtenerTodosMedicos = () => {
        MedicoService.obtenerTodosMedicos().then((response) => {
            setMedicos(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const eliminarMedicos = (medicoId) => {
        MedicoService.eliminarMedico(medicoId).then((response) =>{
            obtenerTodosMedicos();
    
           }).catch(error =>{
               console.log(error);
           })
    }


  return (
    <div className = "container">
            <h2 className = "text-center"> Lista De Medicos </h2>
            <Link to = "/add-medico" className = "btn btn-primary mb-2" > Agregar Medico </Link>
            <table className="table table-bordered table-striped">
                <thead>
                   <tr>
                    <th> Medico Id </th>
                    <th> Nombre </th>
                    <th> Identificacion </th>
                    <th> Tipo de Identificacion </th>
                    <th> Numero Tarjeta Profesional </th>
                    <th> Años De Experiencia </th>
                    <th> Especialidad </th>
                    <th> Hora De Inicio </th>
                    <th> Hora De Final </th>
                    <th> Hospital </th>
                    <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Medicos.map(
                            medico =>
                            <tr key = {medico.idMedico}>  
                                <td> {medico.idMedico} </td>
                                <td> {medico.nombre} </td>
                                <td>{medico.identificacion}</td>
                                <td>{medico.tipoIdentificacion}</td>
                                <td>{medico.numTarjetaPro}</td>
                                <td>{medico.añosExperiencia}</td>
                                <td>{medico.especialidad}</td>
                                <td>{medico.horaInicio}</td>
                                <td>{medico.horaFin}</td>
                                <td>{medico.hospital}</td>
                                <td>
                                <div className='btn-group'>
                                    <Link className="btn btn-info" to={`/edit-medico/${medico.idMedico}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => eliminarMedicos(medico.idMedico)}
                                    style = {{marginLeft:"2px"}}> Delete</button>
                                </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
  )
}

export default ListMedicoComponent