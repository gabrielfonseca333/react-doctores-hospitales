import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { globalEval } from 'jquery'

export default class Hospitales extends Component {

    state = {
        hospitales: []
    }

    loadHospitales=()=>{
        let request = "webresources/hospitales"
        let url = Global.urlApiHospitales + request
        axios.get(url).then(response=>{
            this.setState({
                hospitales:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadHospitales();
    }






  render() {
    return (
      <div>
        <h1 style={{textAlign:"center", paddingTop:"20px"}}>Hospitales</h1>
        <div style={{padding:"20px"}}>
        <table  className='table table-hover'>
            <thead>
                <tr className='table-dark'>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales.map((hospital, index) =>{
                        return(<tr>
                            <td>{hospital.idhospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                            <td>{hospital.telefono}</td>
                            <td>{hospital.camas}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </div>
        
      </div>
    )
  }
}
