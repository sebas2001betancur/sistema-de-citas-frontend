import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import AgregarMedicoComponent from "./components/AgregarMedicoComponent";
import AgregarPacienteComponent from "./components/AgregarPacienteComponent";
import ListaMedicoComponent from "./components/ListaMedicoComponent";
import ListaCitas from './components/ListaCitas';
import InicioComponent from './components/InicioComponent';
import ListaPaciente from './components/ListaPaciente';
import AgregarCitaComponent from './components/AgregarCitaComponent';

function App() {
  return (
    <div className="app">
      <Router>
        <HeaderComponent />
        <div class= "container">
          <Routes>
              <Route exact path = "/" element = {<InicioComponent />}></Route>
              <Route path = "/listar-citas" element = {<ListaCitas />}></Route>
              <Route path = "/add-cita" element = {<AgregarCitaComponent />} ></Route>
              <Route path = "/edit-cita/:id" element = {<AgregarCitaComponent />}></Route>
              <Route path = "/listar-medico" element = {<ListaMedicoComponent />}></Route>
              <Route path = "/add-medico" element = {<AgregarMedicoComponent />} ></Route>
              <Route path = "/edit-medico/:id" element = {<AgregarMedicoComponent />}></Route>
              <Route path = "/listar-paciente" element = {<ListaPaciente />}></Route>
              <Route path = "/add-paciente" element = {<AgregarPacienteComponent />} ></Route>
              <Route path = "/edit-paciente/:id" element = {<AgregarPacienteComponent />}></Route>
            
            </Routes>
        </div>
        </Router>
    </div>
  );
}

export default App;
