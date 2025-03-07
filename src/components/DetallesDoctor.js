import React, { Component } from "react";
import Global from "./Global";
import axios from "axios";

export default class DetallesDoctor extends Component {
  state = {
    doctor: null,
  };

  loadDoctor = () => {
    let idDoctor = this.props.iddoctor;
    let request = "api/Doctores/" + idDoctor;
    let url = Global.urlApiDoctores + request;
    axios.get(url).then((response) => {
      this.setState({
        doctor: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadDoctor();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.iddoctor != prevProps.iddoctor) {
      this.loadDoctor();
    }
  };

  render() {
    return (
      <div>
        {this.state.doctor && (
          <ul className="list-group">
            <li className="list-group-item active">
              {this.state.doctor.apellido}
            </li>
            <li className="list-group-item">
              {this.state.doctor.especialidad}
            </li>
            <li className="list-group-item">{this.state.doctor.salario}</li>
            <li className="list-group-item">{this.state.doctor.idHospital}</li>
          </ul>
        )}
      </div>
    );
  }
}
