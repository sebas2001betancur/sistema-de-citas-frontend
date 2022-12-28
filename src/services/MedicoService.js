import axios from "axios";

const SISTEMA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/medico';

class MedicoService {

    //MEDICOS

    obtenerTodosMedicos() {
        return axios.get(SISTEMA_BASE_REST_API_URL+'/listarMedicos');
    }

    obtenerTodosMedicosPorId(medicoId) {
        return axios.get(SISTEMA_BASE_REST_API_URL+'/listar/'+medicoId);
    }

    eliminarMedico (medicoId) {
        return axios.delete(SISTEMA_BASE_REST_API_URL+'/eliminar/'+medicoId); 
    }

    agregarMedico(medico) {
        return axios.post(SISTEMA_BASE_REST_API_URL+'/guardarMedico',medico)
    }

    actualizarMedico(medicoId, medico) {
        return axios.put(SISTEMA_BASE_REST_API_URL+'/actualizarMedico/'+medicoId, medico);
    }

}

export default new MedicoService();