import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CitasService from '../services/CitasService';

const ListaCitas = () => {
  const [Citas, setCitas] = useState([])

  useEffect(() => {

    obtenerTodasLasCitas();
  }, [])

  const obtenerTodasLasCitas = () => {
    CitasService.obtenerTodasLasCitas().then((response) => {
          setCitas(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }

  const eliminarCitas = (citaId) => {
    CitasService.eliminarCita(citaId).then((response) =>{
        obtenerTodasLasCitas();
  
         }).catch(error =>{
             console.log(error);
         })
  }


return (
  <div className = "container">
          <h2 className = "text-center"> Lista De Citas </h2>
          <Link to = "/add-cita" className = "btn btn-primary mb-2" > Agregar Cita </Link>
          <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th> Cita Id </th>
                  <th> Nombre De Medico </th>
                  <th> Nombre De Paciente </th>
                  <th> Identificacion Del Paciente </th>
                  <th> EPS </th>
                  <th> Hora de Inicio </th>
                  <th> Hora de Finalizacion </th>
                  <th> Acciones </th>
                </tr>
              </thead>
              <tbody>
                  {
                      Citas.map(
                          cita =>
                          <tr key = {cita.idCita}> 
                              <td> {cita.idCita} </td>
                              <td>{cita.nombreMedico}</td>
                              <td> {cita.nombrePaciente} </td>
                              <td>{cita.identificacionPaciente}</td>
                              <td>{cita.epsCita}</td>
                              <td>{cita.horaInicio}</td>
                              <td>{cita.horaFin}</td>
                              <td>
                              <div className='btn-group'>
                                  <Link className="btn btn-info" to={`/edit-cita/${cita.idCita}`} >Update</Link>
                                  <button className = "btn btn-danger" onClick = {() => eliminarCitas(cita.idCita)}
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

export default ListaCitas