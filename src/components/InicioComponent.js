import React from 'react'
import { Link } from 'react-router-dom';
import "./InicioComponent.css";

const InicioComponent = () => {
  return (
    <div>
        <br/><br/>
 <div className="card-group">
  <div className="card">
  <Link to="/listar-medico">
  <img src="https://www.qnomy.com/webfiles/images/cache/750X560/zcX1/webfiles/fck/image/headers2/992aade2fd568841833d5dac687c709b_industries_medical_appointment_scheduling.jpg" class="card-img-top" alt="medico" />
  </Link>  
    <div className="card-body">
      <h5 className="card-title">Medico</h5>
      <p className="card-text">Ingresa aqui, si eres medico  y trabajas con nosotros</p>
    </div>
  </div>
  

  <div className="card">
  <Link to="/listar-paciente">
  <img src="https://fcmsantacasasp.edu.br/blog/wp-content/uploads/2021/11/o-que-e-qual-importancia-jornada-do-paciente-mapeamento.jpg" class="card-img-top" alt="paciente" />
   </Link> 
    <div className="card-body">
      <h5 className="card-title">Paciente</h5>
      <p className="card-text">Ingresa aqui, para agendar tu cita</p>
    </div>
  </div>


  <div className="card">
  <Link to="/listar-citas">
  <img src="https://www.eltiempo.com/files/image_1200_680/uploads/2021/03/31/6064fef4d242b.jpeg" class="card-img-top" alt="citas" />
   </Link> 
    <div className="card-body">
      <h5 className="card-title">Citas</h5>
      <p className="card-text">Ingresa aqui, para todas las citas agendadas</p>
    </div>
  </div> 
</div>
    </div>
  )
}

export default InicioComponent