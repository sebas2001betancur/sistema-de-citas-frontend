import axios from 'axios';
import React, {useState} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
//import CitaService from '../services/CitasService';


const AgregarCitaComponent = () => {
    const [idMedico, setIdMedico] = useState('')
    const [idPaciente, setIdPaciente] = useState('')
  const history = useNavigate();
  const {citaId} = useParams();

  const saveOrUpdateCitas = (e) => {
      e.preventDefault();

      const CITAS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/citas';

      const cita = {idMedico,idPaciente}

  if(citaId){
      axios.put(`${CITAS_BASE_REST_API_URL}/actualizarCita/${idMedico}/${idPaciente}`, cita)
      .then((response) => {
          history('/listar-citas')
      }).catch(error => {
          console.log(error)
      })

  }else{
      axios.post(`${CITAS_BASE_REST_API_URL}/AgregarCita/${idMedico}/${idPaciente}`,)
      .then((response) =>{
          console.log(response.data)

          history('/listar-citas');

      }).catch(error => {
          console.log(error)
      })
  }
}

const title = () => {

    if(citaId){
        return <h2 className = "text-center">Actualizar Cita</h2>
    }else{
        return <h2 className = "text-center">Agregar Cita</h2>
    }
}

return (
  <div>
    <br /><br />
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            title()
          }
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label"> Id Medico :</label>
                <input
                  type="text"
                  placeholder="Ingrese el Id del Medico"
                  name="IdMedico"
                  className="form-control"
                  value={idMedico}
                  onChange={(e) => setIdMedico(e.target.value)}
                >
                </input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label"> Id Paciente :</label>
                <input
                  type="text"
                  placeholder="Ingrese el Id del Paciente"
                  name="IdPaciente"
                  className="form-control"
                  value={idPaciente}
                  onChange={(e) => setIdPaciente(e.target.value)}
                >
                </input>
              </div>

              <br />

              <div className='btn-group'>
                <button className="btn btn-success" onClick={(e) => saveOrUpdateCitas(e)} >Submit </button>
                <Link to="/listar-citas" className="btn btn-danger"> Cancel </Link>
              </div>
            </form>

          </div>
        </div>
   </div>
           </div>
    </div>
  )
}

export default AgregarCitaComponent;