import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { NavLink } from "react-router-dom";

export default class MenuHospitales extends Component {
  state = {
    hospitales: [],
  };

  loadHospitales = () => {
    let request = "webresources/hospitales";
    let url = Global.urlApiHospitales + request;
    axios.get(url).then((response) => {
      console.log("Leyendo servicio...");
      this.setState({
        hospitales: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark bg-dark"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <img style={{width:"50px"}} src="https://tse4.mm.bing.net/th/id/OIP.jzVRbNlUQiRUCQUDoC9jRgHaHa?rs=1&pid=ImgDetMain"/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create" >
                    New Hospital
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hospitales" >
                    Hospitales
                  </NavLink>
                </li>
                
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown03"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hospitales
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown03">
                    {
                      //codigo donde vamos a hacer nuestro codigo

                      this.state.hospitales.map((hospital, index) => {
                        return (
                          <li key={index} className="dropdown-item">
                            <NavLink to={"/doctores/" + hospital.idhospital}>{hospital.nombre}</NavLink>
                          </li>
                        );
                      })
                    }

                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
