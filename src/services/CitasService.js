import axios from "axios";

const CITAS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/citas';

class CitasService {


obtenerTodasLasCitas() {
    return axios.get(CITAS_BASE_REST_API_URL+'/listarCitas');
    }

obtenerTodasLasCitasPorId(citasId) {
    return axios.get(CITAS_BASE_REST_API_URL+'/obtenerPorId/'+citasId);
    }

eliminarCita (citaId) {
    return axios.delete(CITAS_BASE_REST_API_URL+'/eliminarCita/'+citaId); 
    }        

agregarCita(idMedico, idPaciente) {
    return axios.post(CITAS_BASE_REST_API_URL+'/AgregarCita', {
        idMedico,
        idPaciente
      })
    }
   
actualizarCita(citaId, cita) {
    return axios.put(CITAS_BASE_REST_API_URL+'/actualizarCitas/'+citaId, cita);
    }
    
}
    
export default new CitasService();