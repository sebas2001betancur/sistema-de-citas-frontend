import axios from "axios";

const SISTEMA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/paciente';

class PacienteService {

obtenerTodosPacientes() {
    return axios.get(SISTEMA_BASE_REST_API_URL+'/listarPaciente');
   }  

obtenerTodosPacientesPorId(pacienteId) {
    return axios.get(SISTEMA_BASE_REST_API_URL+'/listar/'+pacienteId);
   }

agregarPaciente(paciente) {
    return axios.post(SISTEMA_BASE_REST_API_URL+'/guardarPaciente',paciente)
   }

actualizarPaciente(pacienteId, paciente) {
    return axios.put(SISTEMA_BASE_REST_API_URL+'/actualizarPaciente/'+pacienteId, paciente);
   }

eliminarPaciente (pacienteId) {
    return axios.delete(SISTEMA_BASE_REST_API_URL+'/eliminarPaciente/'+pacienteId); 
   }   

}

export default new PacienteService();