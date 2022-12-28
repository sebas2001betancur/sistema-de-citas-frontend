import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PacienteService from '../services/PacienteService'

const ListaPaciente = () => {
  const [Pacientes, setPacientes] = useState([])

    useEffect(() => {

        obtenerTodosPacientes();
    }, [])

    const obtenerTodosPacientes = () => {
        PacienteService.obtenerTodosPacientes().then((response) => {
            setPacientes(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const eliminarPaciente = (pacienteId) => {
        PacienteService.eliminarPaciente(pacienteId).then((response) =>{
            obtenerTodosPacientes();
    
           }).catch(error =>{
               console.log(error);
           })
    }


  return (
    <div className = "container">
    <h2 className = "text-center"> Lista De Pacientes </h2>
    <Link to = "/add-paciente" className = "btn btn-primary mb-2" > Agregar Paciente </Link>
    <table className="table table-bordered table-striped">
        <thead>
            <tr>
            <th> Paciente Id </th>
            <th> Nombre </th>
            <th> Fecha de Nacimiento </th>
            <th> Identificacion </th>
            <th> Tipo de Identificacion </th>
            <th> EPS </th>
            <th> Historia Clinica </th>
            <th> Acciones </th>
            </tr>
        </thead>
        <tbody>
            {
                Pacientes.map(
                    paciente =>
                    <tr key = {paciente.idPaciente}> 
                        <td> {paciente.idPaciente} </td>
                        <td> {paciente.nombre} </td>
                        <td> {paciente.fechaNacimiento} </td>
                        <td>{paciente.identificacion}</td>
                        <td>{paciente.tipoIdentificacion}</td>
                        <td>{paciente.epsPaciente}</td>
                        <td>{paciente.historiaClinica}</td>
                        <td>
                            <div className='btn-group'>
                            <Link className="btn btn-info" to={`/edit-paciente/${paciente.idPaciente}`} >Update</Link>
                            <button className = "btn btn-danger" onClick = {() => eliminarPaciente(paciente.idPaciente)}
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
export default ListaPaciente