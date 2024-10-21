import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'



export default class DetallesDoctor extends Component {

    state = {
        doctores:[],
      
    }

    mostrarDetallesDoctores=()=>{
        let request = "api/Doctores/" + this.props.iddoctor
        let url = Global.urlApiDoctores + request
        axios.get(url).then(response=>{
            this.setState({
                doctores:response.data
            })
        })
    }




  render() {

    return (
      <div style={{border:"1px solid red"}}>
        <h3>Doctor con id: {this.props.iddoctor}</h3>
        <ul>
            {
                this.state.doctores.map((doctor, index)=>{
                  return(<li>Apellido: {doctor.sueldo}</li>)  
                })
            }
        </ul>
      </div>
    )
  }
}
